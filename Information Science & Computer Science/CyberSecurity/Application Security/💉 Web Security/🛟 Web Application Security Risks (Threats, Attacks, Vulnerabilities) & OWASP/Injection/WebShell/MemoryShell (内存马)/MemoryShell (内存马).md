# MemoryShell (内存马)

[TOC]



## Res
### Related Topics
↗ [RASP (Runtime Application Self-Protection)](../../../../../../System%20Security/🏃%20Software%20Runtime%20Security/RASP%20(Runtime%20Application%20Self-Protection)/RASP%20(Runtime%20Application%20Self-Protection).md)


### Other Resources
🚧 https://github.com/gobysec/Memory-Shell
Traditional webshell backdoors, no matter how much effort is put into hiding or how they are disguised, are unable to persist in the target system under existing defense measures. Some simple examples of defense measures include: For terminal security: file monitoring, anti-tampering, and EDR; For backdoors: webshell detection and traffic monitoring; For the network layer: firewalls to prevent reverse connections, and reverse proxy systems to hide real IPs; and so on.

**From asset detection, vulnerability scanning, injection of memory shells to management of webshells, they can all be directly completed by Goby.**

Here are some articles to introduce:  
[The king of shell Javaweb Memory Shell-Cognitive Section](https://github.com/gobysec/Memory-Shell/blob/main/Memory%20shell%20%5BCognitive%20Section%5D.md)
[Use Goby to break into the memory horse through the deserialization vulnerability-exploitation Edition](https://github.com/gobysec/Memory-Shell/blob/main/Goby%20memory%20shell%5Bexploitation%5D.md)
[Goby Exploits Memory Shellcode Technology Details-Technical Edition](https://github.com/gobysec/Memory-Shell/blob/main/Memory%20shellcode%5BTechnical%5D.md)
[Goby Official URL](https://gobies.org/)
1. GitHub issue: [https://github.com/gobysec/Goby/issues](https://github.com/gobysec/Goby/issues)
2. Telegram Group: [http://t.me/gobies](http://t.me/gobies) (Group benefits: enjoy the version update 1 month in advance)
3. Telegram Channel: [https://t.me/joinchat/ENkApMqOonRhZjFl](https://t.me/joinchat/ENkApMqOonRhZjFl) (Channel benefits: enjoy the version update 1 month in advance)
4. WeChat Group: First add my personal WeChat: **gobyteam**, I will add everyone to the official WeChat group of Goby. (Group benefits: enjoy the version update 1 month in advance)



## Intro
> 🔗 https://www.freebuf.com/articles/web/274466.html

webshell的变迁过程大致如下所述：web服务器管理页面——> 大马——>小马拉大马——>一句话木马——>加密一句话木马——>加密内存马

![](../../../../../../../../Assets/Pics/Pasted%20image%2020240331133657.png)

内存马是无文件攻击的一种常用手段，随着攻防演练热度越来越高：攻防双方的博弈，流量分析、EDR等专业安全设备被蓝方广泛使用，传统的文件上传的webshll或以文件形式驻留的后门越来越容易被检测到，内存马使用越来越多。

Webshell内存马，是在内存中写入恶意后门和木马并执行，达到远程控制Web服务器的一类内存马，其瞄准了企业的对外窗口：网站、应用。但传统的Webshell都是基于文件类型的，黑客可以利用上传工具或网站漏洞植入木马，区别在于Webshell内存马是无文件马，利用中间件的进程执行某些恶意代码，不会有文件落地，给检测带来巨大难度。



## Ref
[👍 一文看懂内存马 | freebuf]: https://www.freebuf.com/articles/web/274466.html
一、内存马简介
- 1.1 webshell变迁
- 1.2 如何实现webshell内存马
- 1.3 内存马类型
二、背景知识
- 2.1 Java web三大件
- 2.2Tomcat
- 2.3 其他java背景知识
三、内存马实现
四、内存马检测与排查
- 4.1源码检测
- 4.2 内存马排查
参考链接

[分享几个直接可用的内存马，记录一下学习过程中看过的文章 | github]: https://github.com/bitterzzZZ/MemoryShellLearn
