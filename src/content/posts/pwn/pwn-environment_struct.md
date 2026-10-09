---
title: PWN环境搭建
published: 2026-09-27
description: 本篇文章是有关于pwn做题环境搭建的引导教程
image: https://img.liksy0.cn/file/1790494293238_anita-austvika-li1iEY9JqC8-unsplash.jpg
tags:
  - PWN环境
  - PWN
  - CTF
category: 环境搭建
series: 从0开始的PWN基础教学
draft: false
author: Liksy_0
---
## 虚拟机(Vmware Workstation)安装

### vmware安装

>由于 Vmware 被 Broadcom 收购之后，要下载Vmware  Workstation 就得先注册一个博通账号，而且注册之后 Vmware下载入口还十分的难找,所以以下两个链接就可以直达注册和下载页面

> https://profile.broadcom.com/web/registration 注册页面，163邮箱好像不行，可以试试qq，gmail，outlook邮箱

> https://support.broadcom.com/group/ecx/productdownloads?subfamily=VMware%20Workstation%20Pro&freeDownloads=true ，注册并且登录之后，就可以用这个链接直达下载界面
> ```注意 从 25H2 版本开始，官方不再提供简体中文界面，可以选择17.x.x的版本```

下载完成之后，可以修改一下安装位置，其他的默认即可

## Linux发行版安装

选择一个你喜欢的linux安装即可，这里以Ubuntu26-04为例子

> [Download Ubuntu Desktop下载链接](https://ubuntu.com/download/desktop)

1.下载完成之后打开Vmware,然后选择创建新的虚拟机
![屏幕截图 2026-09-26 145933.png](https://img.liksy0.cn/file/1790406026973_屏幕截图_2026-09-26_145933.png)

2.选择自定义安装
![屏幕截图 2026-09-26 150341.png](https://img.liksy0.cn/file/1790406243537_屏幕截图_2026-09-26_150341.png)

3.硬件兼容性选择17.5 or later
![屏幕截图 2026-09-26 150618.png](https://img.liksy0.cn/file/1790406412461_屏幕截图_2026-09-26_150618.png)


4.安装操作系统处选择稍后安装
![屏幕截图 2026-09-26 150724.png](https://img.liksy0.cn/file/1790406493382_屏幕截图_2026-09-26_150724.png)

5.之后选择安装操作系统处选择你下载的对应Linux发行版版本


6.命名虚拟机处选自行命名即可，位置默认即可
7.处理器选择，按照自己电脑实际配置的一半来选就可，不要选太高，容易卡死
8.内存选择4g左右就行，这个后期都是可以改的
9.网络类型建议选择桥接模式比较方便
![屏幕截图 2026-09-26 151406.png](https://img.liksy0.cn/file/1790406871618_屏幕截图_2026-09-26_151406.png)

10.其余选项硬盘建议50g左右，并且修改虚拟磁盘存储为单个文件，这个后期不够也可以再改的，其他的保持默认即可
![屏幕截图 2026-09-26 191236.png](https://img.liksy0.cn/file/1790421189236_屏幕截图_2026-09-26_191236.png)
11.按照如图的步奏，选择iso镜像文件的时候，就选择你自己下载的那个linux iso文件即可 ![屏幕截图 2026-09-26 191816.png](https://img.liksy0.cn/file/1790421569558_屏幕截图_2026-09-26_191816.png)

12.完成之后点击开启虚拟机，保持默认选项直接回车等待一会
![屏幕截图 2026-09-26 192120.png](https://img.liksy0.cn/file/1790421858848_屏幕截图_2026-09-26_192120.png)
期间可能黑屏或者如下界面等待即可
![屏幕截图 2026-09-26 192154.png](https://img.liksy0.cn/file/1790421784154_屏幕截图_2026-09-26_192154.png)
安装引导按照以下截图中的选项修改，其余保持默认即可，安装过程可能会很漫长........等待即可

![屏幕截图 2026-09-26 192754.png](https://img.liksy0.cn/file/1790422203181_屏幕截图_2026-09-26_192754.png)


![屏幕截图 2026-09-26 192810.png](https://img.liksy0.cn/file/1790422202302_屏幕截图_2026-09-26_192810.png)

![屏幕截图 2026-09-26 192836.png](https://img.liksy0.cn/file/1790422208747_屏幕截图_2026-09-26_192836.png)

直到出现restart按钮，选择restart
![屏幕截图 2026-09-26 193934.png](https://img.liksy0.cn/file/1790422819821_屏幕截图_2026-09-26_193934.png)

直到屏幕上出现 “Please remove the installation,then press ENTER” 直接按下回车，弹出的引导全部默认’next/skip‘，然后直接关机。
![屏幕截图 2026-09-26 194334.png](https://img.liksy0.cn/file/1790423046341_屏幕截图_2026-09-26_194334.png)

接着还需设置以下虚拟机，关于安装部分即完结，设置完以下选项之后，直接开启虚拟机，"弹出无法链接虚拟设备"时，直接选择 **否**就行
![屏幕截图 2026-09-26 194521.png](https://img.liksy0.cn/file/1790423169075_屏幕截图_2026-09-26_194521.png)

最后一点，优化视觉效果的，虚拟机缩放模式选择自由拉伸，这样设置以后缩放的时候就不会出现图标过小的情况。
![屏幕截图 2026-09-26 195059.png](https://img.liksy0.cn/file/1790423489735_屏幕截图_2026-09-26_195059.png)

## Linux系统配置

> 前言：在虚拟机中的复制粘贴是"**shift+ctrl+c/v**"
### 第一步，换源
可以先备份一下原本的配置文件，以防出错
```bash
sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak
```
直接写入新的配置文件，国内用清华源或者阿里源都比较流畅

```bash
cat << EOF | sudo tee /etc/apt/sources.list
# 清华源 Ubuntu26.04 resolute
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ resolute main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ resolute main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ resolute-updates main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ resolute-updates main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ resolute-backports main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ resolute-backports main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ resolute-security main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ resolute-security main restricted universe multiverse
EOF
```
输入这个指令，如果输出和你上一条指令一样的东西说明换源成功
```bash
cat /etc/apt/sources.list
```
### 第二步，汉化

同样也是复制粘贴指令即可

```bash
sudo apt update
sudo apt install language-pack-zh-hans language-pack-zh-hans-base
```
下载完成之后，按照以下操作
![屏幕截图 2026-09-26 201115.png](https://img.liksy0.cn/file/1790424717219_屏幕截图_2026-09-26_201115.png)

进入之后选择"**Manage Installed Languages**"弹出的提示框选择 **install** 输入密码等待......
在Language for menus and windows中，将中文拖到第一位
![屏幕截图 2026-09-26 201558.png](https://img.liksy0.cn/file/1790424981447_屏幕截图_2026-09-26_201558.png)

然后进入**Regional Formats**中，将第一个框中选择为**汉语(中国)**

![屏幕截图 2026-09-26 201752.png](https://img.liksy0.cn/file/1790425094762_屏幕截图_2026-09-26_201752.png)

然后在刚刚选择**power off** 的菜单中选择**Log out** 之后会弹出登录，直接登录，接着出现如下提示框，建议选择**保留并且不再询问**
![image.png](https://img.liksy0.cn/file/1790425203170_image.png)

到此系统基本汉化、换源的前置条件完成，接下来正式进入***PWN环境搭建***

## 正式的PWN环境配置

在下面的安装过程中，只要带了“**--break-system-packages**”这个参数就是为了避免python包管理工具的警告，所以安装结束的时候可能会有**warming** 这是正常现象  

先执行更新软件源指令
```bash
sudo apt update
sudo apt-get update
```
在桌面上打开一个**terminal**输入以下安装命令

1. vim安装，输入以下命令即可
```bash
sudo apt install vim -y
```

2. gcc c语言编译器
```bash
sudo apt install gcc -y
# 增加对32位程序支持
sudo dpkg --add-architecture i386
sudo apt update
sudo apt install -y libc6:i386 libc6-dbg:i386
sudo apt install -y gcc-multilib libc6-dev-i386
```

3. git 
```bash
sudo apt install git -y
```

4. python pip包管理工具
```bash
sudo apt install python3-pip -y
sudo mv /usr/lib/python3.12/EXTERNALLY-MANAGED /usr/lib/python3.12/EXTERNALLY-MANAGED.bk
```

5. qemu虚拟化软件，内核调试
```bash
	sudo apt-get install qemu-user qemu-system
```

6. gdb安装
```bash
sudo apt install gdb
sudo apt install build-essential gdb -y
# 多架构gdb
sudo apt install gdb-multiarch
# libc调试符号
sudo apt install libc6-dbg
```

7. Cmake安装
```bash
sudo apt update
sudo apt install -y cmake pkg-config
```

8. pwntools 安装
```bash
# 安装系统依赖
sudo apt-get update
sudo apt-get install -y python3 python3-pip python3-dev git libssl-dev libffi-dev build-essential
# 修改pip安装源
python3 -m pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
# 升级 pip
python3 -m pip install --user --break-system-packages --upgrade pip -i https://pypi.tuna.tsinghua.edu.cn/simple
# 先安装pwntolls的unicorn预编译版本
python3 -m pip install --user --break-system-packages "unicorn==2.1.0" -i https://pypi.tuna.tsinghua.edu.cn/simple
# 安装pwntools
python3 -m pip install --user --break-system-packages --upgrade pwntools -i https://pypi.tuna.tsinghua.edu.cn/simple
# 把~/.local/bin加入PATH
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
hash -r
```
安装完pwntools之后可以进行验证，输出和下图相同即表示安装成功
```bash
# 测试1
python3 -c "from pwn import *; print(cyclic(20)); print(asm('nop').hex())"
# 测试2
checksec /bin/ls
```
> 如果修改过终端(终端美化)，或者后续进行终端美化都需要迁移最后一步

<img src="https://img.liksy0.cn/file/1790431216428_屏幕截图_2026-09-26_215533.png" alt="屏幕截图 2026-09-26 215533.png" width=100% />

9. pwndbg 
```bash
cd
mkdir PWN
cd PWN
mkdir tools
cd tools
pwd
> /home/[你的用户名]/Desktop/PWN/tools
# 正式安装
git clone https://github.com/pwndbg/pwndbg.git
git clone https://github.com/martinradev/gdb-pt-dump.git 
# 这一步要是显示连接被拒绝或者连接不通的可以用流量试试，或者在你宿主机挂代理下载之后再托进虚拟机
ls # 用ls查看，应该要能看见你刚刚clone的两个项目
cd pwndbg
vim pyproject.toml
找到 "pt @git+https://github.com/martinradev/gdb-pt-dump@..."
替换为 "pt @ file:///home/[你的用户名]/PWN/tools/gdb-pt-dump",
并且注释"gdb-for-pwndbg==...",
"lldb-for-pwndbg==...",这两条代码(参考下图)
./setup.sh
```

![屏幕截图 2026-09-27 143239.png](https://img.liksy0.cn/file/1790490918483_屏幕截图_2026-09-27_143239.png)


![屏幕截图 2026-09-27 143136.png](https://img.liksy0.cn/file/1790490961091_屏幕截图_2026-09-27_143136.png)

之后输入gdb进行检查，出现下图即表示安装完成
![屏幕截图 2026-09-27 143836.png](https://img.liksy0.cn/file/1790491129940_屏幕截图_2026-09-27_143836.png)

10. ROPgaget
```bash
sudo pip3 install capstone --break-system-packages
sudo pip3 install ROPgadget --break-system-packages
# 验证，出现帮助文档即表示安装成功
ROPgadget --help
```

11. Patchelf 用来给elf文件重链接库
```bash
sudo apt install patchelf 
```

12. Seccomp-tools
```bash
sudo apt install gcc ruby-dev
sudo gem install seccomp-tools
```

13. ARm软件包
```bash
sudo apt-get install gcc-arm-linux-gnueabi
sudo apt-get install gcc-aarch64-linux-gnu 
```

14. MIPS软件包
```bash
sudo apt-get install gcc-mips-linux-gnu
sudo apt-get install gcc-mipsel-linux-gnu
sudo apt-get install gcc-mips64-linux-gnuabi64
sudo apt-get install gcc-mips64el-linux-gnuabi64
```


## 总结
到此基本上会用到的pwn的环境都已经装好了，over~~
感谢你的阅读 :)