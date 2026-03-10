---
title: idea如何将多次commit合并为一次commit
date: 2025/5/22
tags:
  - IDEA
  - Java
  - Git
author: 花木凋零成兰
hiddenCover: true
---

# idea如何将多次commit合并为一次commit

## 前言

在进行开发的过程中, 有时候以为一个功能开发完善了, 会将其提交推送到GitHub或gitlab, 然后可能有些问题是推送了之后才发现, 此时变动比较小, 可能只是改了一行代码, 此时又要重新造成一次提交, 如此产生的提交记录会比较稀碎;

## 合并 commit

可以使用idea自带的git可视化界面合并多个commit, 打开自带的git管理界面如下所示:

![](assets/2025-09-17-HSy43w.png)


选中(可按住ctrl键鼠标点击选中)需要合并的 commit, 并右键, 选择压缩提交, 如下所示:

![](assets/2025-09-17-vMyhGx.png)


然后重新填写新提交信息:

![](assets/2025-09-17-ps08EQ.png)


压缩提交之后, 因为与远程提交出现不一致, 所以需要强制推送更新远程分支的提交信息, 如下:

![](assets/2025-09-17-mGs1BP.png)

## 参考文章

- [IDEA 中Git 多次 Commit 合并为一次提交](https://cloud.tencent.com/developer/article/2170395)



