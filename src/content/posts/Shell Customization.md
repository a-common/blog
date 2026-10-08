---
title: Linux美化
published: 2026-10-8
image:
description: 关于linux实用性改进和终端美化
author: Liksy_0
draft: true
tags:
  - 终端美化
  - zsh
---
## zsh介绍
zsh 是一个兼容 bash 的 shell，相较 bash 具有以下优点：

- Tab 补全功能强大。命令、命令参数、文件路径均可以补全。
- 插件丰富。快速输入以前使用过的命令、快速跳转文件夹、显示系统负载这些都可以通过插件实现。
- 主题丰富。
- 可定制性高。

关于 zsh 的更多的信息，可以访问 [zsh.org](https://www.zsh.org/)查看。

--- 
## 安装方式

>注意不同版本的发行版指令略有不同，以下指令适用于ubuntu和debian

1.先更新软件源
```bash
sudo apt update
```

2.安装zsh
```bash
sudo apt install zsh -y
```

3.设置`zsh`为默认shell
```bash
chsh -s /bin/zsh
```
输入指令并且输入密码之后，重新打开一个终端，会有一个初始化设置
![image.png](https://img.liksy0.cn/file/1791425112449_image.png)

