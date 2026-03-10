---
title: idea配置.gitignore文件后不生效
date: 2025/5/22
tags:
  - IDEA
  - Java
  - Git
author: 花木凋零成兰
hiddenCover: true
---

# idea配置.gitignore文件后不生效

## 前言

无论是在工作还是学习中, 都习惯使用git来对代码进行版本管理, 但**非代码文件或只需要在本地的文件**并不需要使用git来进行管理;

同时对于不需要进行管理文件用git跟踪的话, 项目只在一台电脑只有自己开发的时候还好, 当在别的地方进行开发, 不必要的文件在clone或pull时就会携带, 因此需要一个文件来对不需要管理的文件进行管理;

这个文件就是`.gitignore`, 一般在 idea 创建 Maven 或 Spring 等项目时会自动生成一份这样的文件, 基本内容如下:

```java
HELP.md
target/
!.mvn/wrapper/maven-wrapper.jar
!**/src/main/**/target/
!**/src/test/**/target/

### STS ###
.apt_generated
.classpath
.factorypath
.project
.settings
.springBeans
.sts4-cache

### IntelliJ IDEA ###
.idea
*.iws
*.iml
*.ipr

### NetBeans ###
/nbproject/private/
/nbbuild/
/dist/
/nbdist/
/.nb-gradle/
build/
!**/src/main/**/build/
!**/src/test/**/build/

### VS Code ###
.vscode/
```

上述配置基本能保证git只对重要代码文件进行管理.

## 配置却不生效

idea 生成的 `.gitignore` 工具基本足够使用, 但也有需要自定义配置的时候, 若此时**新配置的文件之前没有被 git 跟踪过**, 那配置是会生效的;

若新配置的文件之前有被 git 跟踪过, 此时配置是无效的; 因为这些文件被纳入版本管理中, 被git本地缓存了, 需要做的就是删除改文件的本地缓存, 然后再提交, 让文件变成未track状态即可.

命令执行步骤如下: 

```shell
# 删除指定文件缓存时 git rm -r --cached 文件名
# 删除指定文件夹下所有文件的git缓存
git rm -r --cached .
# 会按照新的.gitignore文件重新进行版本管理
git add .
# 提交变更
git commit -m 'update .gitignore'
```

执行示例图如下所示:

![](assets/2025-09-17-UiGNPK.png)

## 参考文章

- [解决IDEA配置.gitignore不生效的问题](https://blog.csdn.net/qq_43705131/article/details/107989768)