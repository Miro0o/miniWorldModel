# FAQ

[TOC]



## 👉 VNC Server Setup
### Setup RealVNC for kali on raspberry pi
#realvnc #kali 




[Kali 下安装VNC Server]: https://zhuanlan.zhihu.com/p/395121267




### Setup x11vnc for kali on raspberry pi
#kali #RaspberryPi #x11vnc 

Apparently, [Kali Linux 0.6 Raspberry Pi 3 w/ Nexmon](https://build.nethunter.com/rpi3-nexmon/) contains older packages. Once issuing the command `apt-get update && apt-get -y upgrade && apt-get -y dist-upgrade``tightvncserver` gets replaced by `tigervncserver`. Thus, `TightVNC` isn't part of this image of Kali Linux. `TigerVNC` is a fork that is supported by the standard Kali Linux repositories.

I managed to figure out a pretty good alternative to `TightVNC` and `TigerVNC`. Below is my expanded solution.


Solution:
I would recommend using `x11vnc` as it provides the actual desktop experience rather than a virtual one. 

To install `x11vnc` enter the following command:

`apt-get update && apt-get install -y x11vnc`

If you experience that the `framebuffer` size is too small, then to change it by doing the following:

1. Locate `/boot/config.txt` and open it using `nano` or `vim`

(**Note**: If the file `/boot/config.txt` does not exist, safely power-off the Pi using the command, `poweroff` and take the Micro-SD card out and plug it into a laptop or desktop computer. When the Micro-SD card mounts, open it. The `config.txt` file should be on the root of the mounted Micro-SD card).

2. uncomment the following text in `config.txt`: 

_Before_:

`#framebuffer_width=1280`

`#framebuffer_height=720`

_After_:

`framebuffer_width=1280`

`framebuffer_height=720`

3. Save and exit the file. Then, reboot the Pi and start `x11vnc` by using the following command to push it into a background process: `x11vnc -usepw -reopen -bg -forever &`

---

If you would like to start `x11vnc` at boot, add the following to a file called `x11vnc.desktop` in `~/.config/autostart`:

```
[Desktop Entry]
Type=Application
Name=x11vnc
Exec=x11vnc -usepw -reopen -bg -forever &
Comment=Starts an x11vnc server on port kali:5900
```

(**Note**: If `~/.config/autostart` does not exist, create the `autostart` directory by issuing the following command: `mkdir ~/.config/autostart`). 

See [how-to-execute-shell-script-on-kali-linux-startup](https://unix.stackexchange.com/questions/276463/how-to-execute-shell-script-on-kali-linux-startup) for more information on application autostart on Kali Linux.


[👍 tightvncserver - Displaying Grey Screen on Kali-Linux upon VNC Connection]: https://raspberrypi.stackexchange.com/questions/60874/tightvncserver-displaying-grey-screen-on-kali-linux-upon-vnc-connection



### Setup TightVNC for kali on raspberry pi
#tightvnc #RaspberryPi #kali 


[Kali 安装vnc | CSDN]: https://blog.csdn.net/blueicex2017/article/details/107225876




### Setup TightVNC for Rasp OS on Raspberry Pi
#tightvnc #RaspberryPi 



[树莓派开机连接桌面的两种方式]: https://blog.csdn.net/huying7664/article/details/124839349



## 👉 VNC 🆚 X11
#vnc #x11 


VNC 与 X11 之间有很多差异。X11 始终被认为是查看远程计算结果的标准方式，因此从某种角度来讲，X11 和 VNC 存在竞争关系。令人感到困惑的是，这两个工具还使用表面上截然相反的术语： 
- X11： 
    - 服务器显示图形 
    - 客户机计算要显示的结果 
- VNC： 
    - 服务器呈现图形——通常位于执行计算的同一主机上 
    - 客户机或查看器显示图形 

从网络角度来看，它们对“客户机”和“服务器”的用法是一致的。但如果稍不注意，这些标签便会让人感到迷惑不解。 

X11 和 VNC 既是对手，也是队友。在下面，您将看到 AIX 下的 VNC 服务通常都依赖于 X11。与单独使用 X11 相比，X11 和 VNC 的组合具有多项优点：例如，与（单纯的）X11 相比，VNC 在较长和/或较慢的连接上工作时运行较好，有时是好得多。另外，VNC 查看器无需进行字体管理，因而比安装 X11 服务器要容易得多。现在，除了在 UNIX® 主机的控制台上外，通常都将 X11 与 VNC 一起使用。

在选择了各个部分后，请在 AIX 主机上用 `vncserver :2` 或类似命令以及保障安全的密码启动 vncserver。这会新建一个 X 服务器；另外，请在 AIX 主机上启动 `xterm -display :2`，以便提供一些用于显示的数据。

现在，请转到已安装 VNC 查看器的桌面。启动一个指向 `$AIX_IP_ADDRESS:2` 的新查看器，输入密码。稍等片刻，您应看到 AIX 控制台，其中会显示已弹出的全新 `xterm`。


[👍 VNC 发展动态 | CSDN]: http://t.csdnimg.cn/h947m
