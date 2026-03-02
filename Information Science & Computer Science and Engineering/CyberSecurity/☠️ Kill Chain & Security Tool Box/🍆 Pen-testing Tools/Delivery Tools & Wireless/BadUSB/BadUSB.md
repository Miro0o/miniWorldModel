# BadUSB

[TOC]



## Res
🏠 
🚧 


### Related Topics



## Intro
在2014年美国黑帽大会上，安全研究人员JakobLell和独立安全研究人员Karsten Nohl展示了他们称为“BadUSB”的攻击方法，这种攻击方法让USB安全和几乎所有和USB相关的设备(包括具有USB端口的电脑)都陷入相当危险的状态

从这张图便可以了解到--Badusb和普通的U盘并没有什么两样，因此迷惑性极高，很容易攻击成功
![](../../../../../../Assets/Pics/Pasted%20image%2020240318203937.png)

HID是Human Interface Device的缩写，由其名称可以了解HID设备是直接与人交互的设备，。一般来讲针对HID的攻击主要集中在键盘鼠标上，因为只要控制了用户键盘，基本上就等于控制了用户的电脑。攻击者会把攻击隐藏在一个正常的鼠标键盘中，当用户将含有攻击向量的鼠标或键盘，插入电脑时，恶意代码会被加载并执行。Badusb利用的是虚拟键盘来实现恶意代码的执行。

攻击者将恶意代码存放于Badusb的固件中，PC上的杀毒软件无法访问到U盘存放固件的区域，因此也就意味着杀毒软件无法应对BadUSB的攻击。



## Ref
[👍 插一个U盘黑一台电脑-Badusb最详细制作教程 | Tencent Cloud]: https://cloud.tencent.com/developer/article/1544687?shareByChannel=link
