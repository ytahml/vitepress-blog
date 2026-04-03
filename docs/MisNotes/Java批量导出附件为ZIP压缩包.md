---
title: Java 批量导出附件为 Zip 压缩包
date: 2026/4/3
author: 花木凋零成兰
tags: 
  - Java
cover: false
hiddenCover: true
---

# Java 批量导出附件为 Zip 压缩包

## 完整代码

简单记一次使用 Java 批量导出附件为 Zip 压缩包的基本代码结构和可能的注意事项; 完整代码如下所示:

```java

@GetMapping("downloadZip")
public ResponseEntity<InputStreamResource> downloadZip(@RequestParam String code) throws IOException {
    List<MyFile> fileList = service.getFileList(code);
    if (fileList == null || fileList.isEmpty()) {
        // 终止...
    }
    // 临时文件名: 增加时分秒, 避免创建临时文件重名导致失败
    String prefix = "zipFile_" + DateUtil.getDateTime(DateUtil.DATE_PATTERN.YYYYMMDDHHMMSS);
    File zipFile;
    try {
        zipFile = File.createTempFile(prefix, ".zip");
    } catch (Exception e) {
        throw new ServiceException("创建临时文件失败");
    }
    try (FileOutputStream fos = new FileOutputStream(zipFile);
         ZipOutputStream zos = new ZipOutputStream(fos)) {
        Map<String, Integer> nameCountMap = new HashMap<>();
        for (MyFile file : fileList) {
            // 控制解压成一个文件夹
            String filename = prefix + StringPool.SLASH + file.getName();
            // 处理重名文件，避免压缩失败
            String entryName = filename;
            int count = nameCountMap.getOrDefault(entryName, 0);
            if (count > 0) {
                int dotIdx = entryName.lastIndexOf('.');
                String baseName = dotIdx > 0 ? entryName.substring(0, dotIdx) : entryName;
                String ext = dotIdx > 0 ? entryName.substring(dotIdx) : "";
                entryName = baseName + "(" + count + ")" + ext;
            }
            nameCountMap.put(filename, count + 1);
            zos.putNextEntry(new ZipEntry(entryName));
            byte[] body = FileUtils.downloadFileByte(file.getPath).getBody();
            if (body != null && body.length > 0) {
                zos.write(body);
            }
            zos.closeEntry();
        }
    }  catch (Exception e) {
        zipFile.delete();
        throw new ServiceException("批量下载文件失败");
    }
    long fileLength = zipFile.length();
    InputStream cleanupStream = getInputStream(zipFile);
    String encodedName = URLEncoder.encode(prefix + ".zip", "UTF-8").replace("+", "%20");
    HttpHeaders headers = new HttpHeaders();
    headers.add("Content-Disposition", "attachment; filename=\"" + encodedName + "\"; filename*=UTF-8''" + encodedName);
    headers.setContentLength(fileLength);
    return ResponseEntity.ok()
            .headers(headers)
            .contentType(MediaType.APPLICATION_OCTET_STREAM)
            .body(new InputStreamResource(cleanupStream));
}
private static InputStream getInputStream(File zipFile) throws IOException {
    // 流关闭时自动删除临时文件，避免提前删除导致泄漏
    return new FilterInputStream(Files.newInputStream(zipFile.toPath())) {
        @Override
        public void close() throws IOException {
            try {
                super.close();
            } finally {
                zipFile.delete();
            }
        }
    };
}
```

## 步骤和注意事项


**1. 查询并校验文件列表**

```java
List<MyFile> fileList = service.getFileList(code);
if (fileList == null || fileList.isEmpty()) {
// 终止...
}
```

**2. 创建临时文件**

```java
// 临时文件名: 增加时分秒, 避免创建临时文件重名导致失败
    String prefix = "zipFile_" + DateUtil.getDateTime(DateUtil.DATE_PATTERN.YYYYMMDDHHMMSS);
    File zipFile;
    try {
        zipFile = File.createTempFile(prefix, ".zip");
    } catch (Exception e) {
        throw new ServiceException("创建临时文件失败");
    }
```

ZIP 格式要求在末尾写入中央目录（Central Directory），记录所有条目的偏移量。`ZipOutputStream` 必须先完整写完所有条目，关闭流后才能生成合法的 ZIP; 如果直接向 HTTP 响应流写 ZIP，会有两个问题：

- 写入过程中若某个文件下载失败，已发送的部分数据无法撤回，客户端会收到一个损坏的 ZIP
- 无法提前知道最终文件大小，无法设置 `Content-Length`，浏览器无法显示下载进度

> 中央目录位于ZIP文件的末尾附近，是一个包含所有文件信息的“主索引表”; 主要有两个作用：
> 
> 充当总索引：当解压软件打开ZIP文件时，会直接跳到文件末尾读取中央目录，快速获取所有文件的列表和属性。
> 
> 支持动态更新：向ZIP文件追加文件或删除文件时，只需在文件末尾追加新文件并重写一个新的中央目录即可，无需重写整个文件

因此采用临时文件充当缓冲：先完整构建 ZIP，确认成功后再返回。

**3. 构建 ZIP**

```java
try (FileOutputStream fos = new FileOutputStream(zipFile);
     ZipOutputStream zos = new ZipOutputStream(fos)) {
    Map<String, Integer> nameCountMap = new HashMap<>();
    for (MyFile file : fileList) {
        // 控制解压成一个文件夹
        String filename = prefix + StringPool.SLASH + file.getName();
        // 处理重名文件，避免压缩失败
        String entryName = filename;
        int count = nameCountMap.getOrDefault(entryName, 0);
        if (count > 0) {
            int dotIdx = entryName.lastIndexOf('.');
            String baseName = dotIdx > 0 ? entryName.substring(0, dotIdx) : entryName;
            String ext = dotIdx > 0 ? entryName.substring(dotIdx) : "";
            entryName = baseName + "(" + count + ")" + ext;
        }
        nameCountMap.put(filename, count + 1);
        zos.putNextEntry(new ZipEntry(entryName));
        byte[] body = FileUtils.downloadFileByte(file.getPath).getBody();
        if (body != null && body.length > 0) {
            zos.write(body);
        }
        zos.closeEntry();
    }
}  catch (Exception e) {
    zipFile.delete();
    throw new ServiceException("批量下载文件失败");
}
```

关键点：

- **`prefix + "/" + 文件名`**: 控制 ZIP 条目路径带目录前缀，解压后所有文件会归入同一文件夹，避免解压后文件散落在当前目录
- **重名处理**: `nameCountMap` 记录每个文件名出现次数; ZIP 规范不允许两个条目同名（会导致 `ZipException`），所以重名文件并追加 `(1)`、`(2)` 后缀; 例如 `报告.pdf` 出现两次 → `报告.pdf` + `报告(1).pdf`
- **`try-with-resources`**: 保证 `ZipOutputStream` 和 `FileOutputStream` 无论成功或异常都会关闭，ZIP 尾部的中央目录在 `zos.close()` 时写入
- 打包失败时立即删除临时文件防止磁盘泄漏，同时记录完整堆栈便于排查，再抛出业务异常给前端。


**5. 构建响应**

```java
long fileLength = zipFile.length();
InputStream cleanupStream = getInputStream(zipFile);
String encodedName = URLEncoder.encode(prefix + ".zip", "UTF-8").replace("+", "%20");
HttpHeaders headers = new HttpHeaders();
headers.add("Content-Disposition", "attachment; filename=\"" + encodedName + "\"; filename*=UTF-8''" + encodedName);
headers.setContentLength(fileLength);
return ResponseEntity.ok()
    .headers(headers)
    .contentType(MediaType.APPLICATION_OCTET_STREAM)
    .body(new InputStreamResource(cleanupStream));**
```

关键点：

- **`fileLength` 在关流后获取**: ZIP 关闭后文件大小才确定，设置 `Content-Length` 让浏览器显示下载进度条
- **`InputStreamResource`**: Spring 读取流写入 HTTP 响应，避免将整个 ZIP 字节数组加载到堆内存, 减小内存占用

**6. 临时文件自动清理**

```java
private static InputStream getInputStream(File zipFile) throws IOException {
    return new FilterInputStream(Files.newInputStream(zipFile.toPath())) {
        @Override
        public void close() throws IOException {
            try {
                super.close();
            } finally {
                zipFile.delete();
            }
        }
    };
}
```

用 `FilterInputStream` 包装后，删除动作推迟到 **Spring 读完流并调用 `close()` 之后**，确保：文件在响应完整发送后才删除




