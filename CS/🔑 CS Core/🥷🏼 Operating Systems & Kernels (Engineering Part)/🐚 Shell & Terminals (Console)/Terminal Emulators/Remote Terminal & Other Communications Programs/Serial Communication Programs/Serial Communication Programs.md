# Serial Communication Programs

[TOC]



## Res
🏠 
🚧 


### Related Topics
↗ [Serial Port (COM, Cluster Communication Port)](../../../../../👷🏾‍♂️%20Computer%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/Computer%20Bus%20(Datapath)%20&%20Interfaces%20&%20Protocols/Expansion%20Bus%20(Ports%20&%20Computer%20Bus%20Interfaces)/Expansion%20Ports%20(External%20Bus)/📌%20Obsolete%20Ports/Serial%20Port%20(COM,%20Cluster%20Communication%20Port).md)
↗ [Xshell](../../📌%20Windows%20Console%20&%20ConPTY%20Based/Xshell.md)



## Intro



## Ref
[macOS免费串口工具coolTerm/Minicom/Comtool/Volt+(伏特加)/友善串口调试助手/screen/picocom | CSDN]: http://t.csdnimg.cn/aROgg
1. coolTerm
2. Minicom
3. COMTool
4. Volt+
5. 友善串口调试助手
6. screen
7. picocom
8. minicom

[How To Check and Use Serial Ports Under Linux]: https://www.cyberciti.biz/faq/find-out-linux-serial-ports-with-setserial/
```
dmesg | grep tty
grep -i 'tty' /var/log/dmesg

sudo apt install setserial
```

Linux serial console programs

Once serial ports identified you can configure Linux box and use serial ports using various utilities:
1. **[minicom](https://www.cyberciti.biz/tips/connect-soekris-single-board-computer-using-minicom.html)**– The best friendly serial communication program for controlling modems and connecting to dump devices
2. **[wvidial or other GUI dial](https://www.cyberciti.biz/tips/linux-configure-modem-to-connect-to-the-internet-using-a-ppp-dialup-account.html) up networking program** – a PPP dialer with built-in intelligence.
3. **[Screen Command:](https://www.cyberciti.biz/faq/unix-linux-apple-osx-bsd-screen-set-baud-rate/)** Set Baud Rate Terminal Communication
4. **getty / agetty** – agetty opens a tty port, prompts for a login name and invokes the /bin/login command.
5. **grub / lilo configuration** – To configure serial port as the system console


