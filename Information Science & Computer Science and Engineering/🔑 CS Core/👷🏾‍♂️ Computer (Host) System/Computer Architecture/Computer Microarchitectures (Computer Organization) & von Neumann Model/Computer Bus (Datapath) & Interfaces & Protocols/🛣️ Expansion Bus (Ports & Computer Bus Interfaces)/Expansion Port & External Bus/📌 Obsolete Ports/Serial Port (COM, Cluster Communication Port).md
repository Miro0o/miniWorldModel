# Serial Port (COM, Cluster Communication Port)

[TOC]



## Res
### Related Topics
↗ [Serial Communication Programs](../../../../../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/🐚%20Shell%20&%20Terminals%20(Console)/Terminal%20Emulators/Remote%20Terminal%20&%20Other%20Communications%20Programs/Serial%20Communication%20Programs/Serial%20Communication%20Programs.md)



## Intro
> 🔗 http://t.csdnimg.cn/nmDdf
> 🔗 https://wiki.sipeed.com/soft/maixpy/zh/get_started/uart.html

1. COM口( cluster communication port )即串行通讯端口，简称串口。微机上的串口通常是9针，也有25针的接口，最大速率115200bps。

![](../../../../../../../../../Assets/Pics/Pasted%20image%2020240309155513.png)

2. 注意：串口、COM口是指的**物理接口**形式(硬件)。而TTL、RS-232、RS-485指的是串口的**电平标准**(电信号)。电平标准简单来说就是：什么电压值表示0，什么电压值表示1
	1. TTL电平标准 是 低电平为0，高电平为1（电平信号）
	2. RS-232电平标准 是 正电平为0，负电平为1（电平信号）
	3. RS-485、RS-422 与RS-232类似，但是采用**差分信号**逻辑，更适合长距离、高速传输。
	4. TTL电平与RS232电平的转换：常用MAX232芯片
3. 串口的硬件实现主要有两种：D型9针插头（DB9）和 4针杜邦头
4. ![](https://img-blog.csdnimg.cn/8aa5cf53484346348b2448760f254e6e.png) 
5. ![](https://img-blog.csdnimg.cn/a3fd80689ed940c6a1703ed38123c5e3.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6LWW56WeIHwg5bWM5YWl5byP,size_11,color_FFFFFF,t_70,g_se,x_16)
6. 注意：DB9接口的协议常用的只有三种：RS-232、RS-485和RS-422。绝不会是TTL电平，80%的可能性是RS-232。



## Ref
[通俗易懂：usb和串口的区别 | CSDN]: http://t.csdnimg.cn/nmDdf

[串口是什么 | CSDN]: http://t.csdnimg.cn/dpR1B

串口，原名叫做串行接口（Serial Interface）或串列埠、序列埠，别名叫COM口（串行通讯端口( cluster communication port )）。PC 机一般有两个串行口COM1和COM2 。串行口不同于并行口之处在于它的数据和控制信息是一位接一位地传送出去的。虽然这样速度会慢一些，但传送距离较并行口更长，因此若要进行较长距离的通信时，应使用串行口。通常COM1使用的是9 针D 形连接器，也称之为RS-232接口，而COM2有的使用的是老式的DB25针连接器，也称之为RS-422接口，不过已经很少使用。只要进行串行通讯的应该都属于串口。

[求大佬，为什么会串口打开失败？ - 电子菌的回答 - 知乎]: https://www.zhihu.com/question/453589364/answer/1831763296
- 驱动问题 (版本不匹配，设备不匹配等)
- 串口占用（上一个使用串口的程序未退出等）
- 数据线/端口（换一个端口/数据线？）

[串口COM线转USB的console线无法更新驱动]: https://blog.csdn.net/qq_43784251/article/details/117096053

[win10如何解决插入串口线出现“ 非旺玖原装的PL2303,请联系您的供货商”问题]: https://blog.csdn.net/YangSong666/article/details/122957269
- 驱动版本过高

[使用Arduino报错：error: Failed to open COM3 error: espcomm_open failed]: https://blog.csdn.net/weixin_45798723/article/details/111758996
1. 没有安装驱动
2. arduion 里面没有选串口
3. 串口没有关闭
