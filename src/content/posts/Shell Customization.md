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

然后呢，会让你选择如何配置zsh(如下)，我们选0即可
![image.png](https://img.liksy0.cn/file/1791425559297_image.png)

4.安装完这个之后，可以继续安装on-my-zsh这个插件来美化zsh终端
```bah
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

安装过程中会有两个选项给你，都选 **y** 即可
安装完成显示如下界面即可
![image.png](https://img.liksy0.cn/file/1791425906836_image.png)

## 美化和实用性改进zsh

### 主题设置

[Themes · ohmyzsh/ohmyzsh Wiki](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes)这个仓库地址中查看已经存在的theme样式，这些都是已经下载在本地了，可以直接切换
![[Pasted image 20261008104411.png]]

如果想要切换主题的话，只需要记住主题名字然后在 **.zshrc** 中修改对应的名字即可
```bash
vim .zshrc
```
![屏幕截图 2026-10-08 104712.png](https://img.liksy0.cn/file/1791427665890_屏幕截图_2026-10-08_104712.png)

>[https://github.com/romkatv/powerlevel10k](https://github.com/romkatv/powerlevel10k)这也是一款比较好看的插件集合，感兴趣的可以自己尝试以下

### 插件安装
众所周知，linux没有自动补全和错误提示是比较烦人的，但是以下这几款插件就可以完美解决这些烦人的问题

>zsh-autocomplete **自动补全**
  zsh-autosuggestions **输入建议**
  zsh-syntax-highlighting **错误提示**

1.首先先安装这几个插件到 **~/.oh-my-zsh/custom/plugins/** 目录下
```bash
# 1. 安装 zsh-autocomplete
git clone --depth 1 -- https://github.com/marlonrichert/zsh-autocomplete.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autocomplete

# 2. 安装 zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-autosuggestions.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

# 3. 安装 zsh-syntax-highlighting
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

2.然后打开编辑软件，再次编辑配置文件
把插件文件名放入plugins中，其中需要注意的是
**zsh-syntax-highlighting**这个插件必须放在最后一个，以确保它能正确处理其他插件产生的命令高亮
同时增加
**# 为 zsh-autocomplete 添加的配置
zstyle ':completion:*' menu select**
这一句配置，这个配置可以让补全菜单支持用方向键选择，体验更好。(完成如下图)
![屏幕截图 2026-10-08 110426.png](https://img.liksy0.cn/file/1791428691206_屏幕截图_2026-10-08_110426.png)

