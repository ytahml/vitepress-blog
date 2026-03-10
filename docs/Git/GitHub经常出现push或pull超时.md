---
title: GitHub经常出现push或pull超时
date: 2025/5/22
tags:
  - Github
  - Git
author: 花木凋零成兰
hiddenCover: true
---

# GitHub经常出现push或pull超时

## 解决办法

GitHub 是国外的开源项目平台, 而且国内访问节点较少, 容易出现连接超时的情况;

最好的办法是使用科学工具进行访问, 同时需要再git中配置相关端口进行访问, 如下所示:

```java
# 工具是socks类型的, 找到自己使用工具的端口
git config --global http.https://github.com.proxy socks5://127.0.0.1:工具的port
# 如果工具是http类型的，如下设置：
git config --global http.https://github.com.proxy 'http://127.0.0.1:代理的port'

#取消代理
git config --global --unset http.https://github.com.proxy
```

## 参考资料

- [github push/pull老是超时解决方法](https://blog.csdn.net/weixin_43914200/article/details/121316043)
