# Windows Console & ConPTY Based

[TOC]



## Res
### Related Topics
↗ [mintty](../📌%20Pseudo%20tty%20(pty)%20Based/mintty.md)



## Intro: From Windows Console To ConPTY
> 🔗 https://silaoa.github.io/2019/2019-12-29-Cygwin系列（十）：折腾终端1.html
> 
> 🔗 https://silaoa.github.io/2020/2020-01-13-Cygwin系列（十一）：折腾终端2.html
> Windows Console和POSIX的pty机制完全不同，为了补齐二者之间的差异性，`ansicon`、`winpty`项目打造的中间层，在不同方向上做出了很大努力，微软亲自打造的`ConPTY`基本填满两者间以往难以逾越的鸿沟，而且允许连接到任何终端窗口。基于`ConPTY`，微软还出品了酷炫的终端程序Windows Terminal。
> 
> 可以预见，**未来基于ConPTY和Windows Terminal加强版的第三方终端模拟器将大放异彩**，Windows与Windows、Windows与UNIX/Linux主机之间远程执行命令行程序也会十分常见。


### `Windows Console`


### `Ansicon`
🚧 https://github.com/adoxa/ansicon

Windows Console缺陷之一是无法处理ANSI转义序列，自然而然地有人想到做一款专门用于处理ANSI转义序列的工具，`ansicon`便是，而且开源，项目地址 [https://github.com/adoxa/ansicon](https://github.com/adoxa/ansicon)。从名字上看，应是”ansi”和”conversion”结合的缩写，望名知义。在MS-DOS还在流行的年代，有个`ANSI.SYS`的程序，也是干这个活。到Windows替代DOS时，`ansicon`替代了`ANSI.SYS`的位置，它早在2010年就已诞生。

`ansicon`十分轻量，软件包压缩后仅100多kB，程序文件就3个：`ANSI32.dll`、`ANSI64.dll`和`ansicon.exe`。`--help`选项输出`ansicon`的用法，如果不加任何选项、参数的话，`ansicon`启动新的解释器实例，默认是`cmd`。

![](../../../../../../Assets/Pics/Screenshot%202024-03-09%20at%203.05.42%20PM.png)
<small>ansicon用法</small>

`ansicon`用在什么场合呢？用在给基于Windows Console的终端增加ANSI转义序列处理能力，运行POSIX兼容的命令行程序，比如在conhost窗口中运行git for Windows、mingw-gcc等，它被[consolez](https://github.com/cbucher/console)等项目所采用。但受制于`conhost`的终端能力（capability），`ansicon`处理ANSI转义序列也受到较大限制，比如只支持16色等。


### `winpty`
🚧 https://github.com/rprichard/winpty

鉴于基于Windows Console API的命令行程序与基于pty的终端之间的鸿沟，特别是后者运行交互式程序（如`cmd`、`python`）时，`winpty`项目便设法在其中架起一座桥梁，项目开源，地址：[https://github.com/rprichard/winpty](https://github.com/rprichard/winpty)。它的作用实质是**提升基于pty的终端对基于Windows Console API的命令行程序的兼容性**，也就是说和`ansicon`的作用方向恰恰相反。

`winpty`在Windows Console基础之上造了一个类pty主设备的接口，用于和Windows命令行程序通信。`winpty`的程序文件可以分为两部分：
- winpty-agent.exe，运行在Windows命令行侧，是原生win32程序，创建一个隐藏的conhost窗口、执行用户指定的命令行程序，同时监控键盘、鼠标、触屏事件，抓取命令行程序输出，和其他基于Windows Console的第三方终端干着差不多的活；
- winpty.exe，运行在基于pty的终端侧，称作“Unix Adapter”（Unix适配器），是一个Cygwin程序，依赖于`cygwin1.dll`，负责将输入输出传给基于pty的终端。

以上虽然是分别在两侧发挥作用，实际是打包在一起的，还有一个winpty.dll，都放在Cygwin或MSYS环境中运行，winpty.exe和winpty-agent.exe之间保持着进程通信。工作流程是这样的，在基于pty的终端（如`Mintty`）中输入形如“winpty <程序名> <参数>”的命令，发起要执行的Windows命令行程序，winpty-agent.exe创建出一个隐藏的conhost窗口、照常执行Windows命令行程序，返回的输出交给winpty.exe处理，再传给终端渲染，两端相互配合。

![](../../../../../../Assets/Pics/Screenshot%202024-03-09%20at%203.07.08%20PM.png)
<small>winpty示意图</small>

如果还能想起 [Linux Cygwin知识库（一）：一文搞清控制台、终端、shell概念](https://silaoa.github.io/2019/2019-04-04-Linux%20Cygwin%E7%9F%A5%E8%AF%86%E5%BA%93%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E4%B8%80%E6%96%87%E6%90%9E%E6%B8%85%E6%8E%A7%E5%88%B6%E5%8F%B0%E3%80%81%E7%BB%88%E7%AB%AF%E3%80%81shell%E6%A6%82%E5%BF%B5.html) 中描述的终端上执行远程主机程序的过程，可以发现与上图有着惊人的相似性，**winpty像是客户端（ssh），winpty-agent像是代理程序（ssh server）**，winpty、winpty-agent这一对名字都标识了他们的角色！Unix Adapter（winpty.exe）可以在Cygwin/MSYS中编译、运行，当然也能在UNIX/Linux中编译、运行，winpty项目还提供了开发库和头文件，**若能做出基于winpty的ssh server，那么在UNIX/Linux上远程运行Windows命令行程序就变为可能**！以前在UNIX/Linux主机上远程执行Windows命令行程序是不可行的，个人认为这是winpty项目更大的意义所在。上述在Mintty中运行`winpty ping www.cygwin.com`过程，与`ssh ping www.cygwin.com`何其相似，只不过winpty和ping在同一个Windows主机上。


### `ConPTY`
👍 📄 [Windows Command-Line: Introducing the Windows Pseudo Console (ConPTY)](https://devblogs.microsoft.com/commandline/windows-command-line-introducing-the-windows-pseudo-console-conpty/)

Windows Console组件已有多年历史，支撑着数不清的命令行程序，纵使和pty管道机制不一样，也不能贸然抛弃。但如何支持pty管道，微软也一直没什么作为，第三方的`ansicon`增加ANSI转义序列处理能力毕竟只是临时的“补丁”办法。

但，事情还是有所转机，自Satya Nadella执掌微软帝国以来，微软对开源社区、对Linux态度发生180度转变，以实际行动践行“Microsoft love Linux”的誓言：Azure支持Linux、开源.Net Core、开源VS Code、收购GitHub等，甚至主动在Windows 10中嵌入Linux这个毒瘤（WSL），一系列动作让人眼花缭乱。与此同时，微软还专门成立了命令行团队，下定决心完善命令行生态。终于在2018年，**以Windows Console核心为基础，官宣了Windows Pseudo Console（简称ConPTY）组件和配套API，提供近似于pty的支持**。

ConPTY相当于是微软自家打造的“中间层”。`ConHost`还是那个`ConHost`，`ConDrv`也还是那个`ConDrv`，但稍稍不同的是：

- `ConHost`的核心之上，多了一层ConPTY；
- 更重要的是，ConPTY对外还留了标准输入/输出接口给终端，这个终端不再限死在微软自家的`conhost`，可以是任何第三方软件，这就给了第三方终端开发更大的自由度。

![](../../../../../../Assets/Pics/Screenshot%202024-03-09%20at%203.08.32%20PM.png)
<small>ConPTY架构 图片源于微软官方博客</small>

那么现有环境下，**命令行程序有Console API和ConPTY API两套可调用**，这和Cygwin环境下同时有Win32 API和POSIX API两套是类似的，旧有的程序继续用老的Console API，新的程序则建议直接上ConPTY API。在历史兼容性方面，旧有的程序不必做任何改变，输出照常传递给`conhost`核心，但经由ConPTY转成包含ANSI转义序列的文本，输出到新终端中，**也就是说基于ConPTY的终端，既能运行POSIX命令行程序，也能运行基于Windows Console的命令行程序**！

`OpenSSH`也移植到了Windows 10中，ssh server可通过ConPTY与Windows命令行程序连接，使得执行远程Windows主机的命令行程序过程更为简洁。

![](../../../../../../Assets/Pics/Screenshot%202024-03-09%20at%203.08.59%20PM.png)
<small>基于ConPTY的ssh server 图片源于微软官方博客</small>

为了推广ConPTY，微软在WSL、VS、VS Code等产品中积极支持ConPTY，同时也在与第三方合作，如`ConEmu`开发团队。



## Ref
[👍 Cygwin系列（十）：折腾终端1]: https://silaoa.github.io/2019/2019-12-29-Cygwin系列（十）：折腾终端1.html

- cmder是一款默认配置十分漂亮的开源终端，项目地址：[https://cmder.net](https://cmder.net/)。cmder是基于ConEmu而开发的，它分为mini版和full版，mini版基本就是一套ConEmu了，full版就是把git bash for Windows也打包在一起。
- console2、consoleZ都是基于Windows Console的开源终端，支持多标签页，是`conhost`的包装。console2项目地址 [https://sourceforge.net/projects/console](https://sourceforge.net/projects/console)，由于长久未更新，才有了分支consoleZ，后者项目地址[https://github.com/cbucher/console](https://github.com/cbucher/console)，支持连接到cmd/Power Shell、Cygwin、msys(2)，**界面与Mintty极其相似**。
- git bash for Windows是git官方给Windows平台做的git打包，可以看作是msys(2)的子集，使用的终端是Mintty，另外把整套git和少数UNIX常用命令行程序打包在一起。
- Xshell、MobaXterm均为商业产品，界面华丽，不是单纯的终端了，它们把telnet、ssh、ftp这些常用客户端程序也打包进来了，MobaXterm甚至把x server都打包进来。

[👍 Cygwin系列（十一）：折腾终端2]: https://silaoa.github.io/2020/2020-01-13-Cygwin系列（十一）：折腾终端2.html
