# ConEmu

[TOC]



## Res
🏠 https://conemu.github.io



## Intro
> 🔗 https://silaoa.github.io/2019/2019-12-29-Cygwin系列（十）：折腾终端1.html

ConEmu是混合型的，首要支持Windows Console功能，可看作是`conhost`的增强版本，同时也部分地支持pty，具备ANSI转义序列直接解析能力，总体上是`conhost`+`Mintty`的全能选手。

主要功能特性包括：
- **多标签页、多标签页、多标签页**，重要事情说3遍，并且支持多种布局方式；
- **不同标签页独立配置Task**，也就是运行不同的命令行程序，特别是shell，Task支持名字分组和分配快捷键；
- 界面现代化，有标签页、快捷菜单、控制台区、状态栏、滚动条；
- 支持连接到多种类型命令行程序环境，Cygwin、msys、WSL都不在话下；
- 图形化配置方式，每一部分都支持个性化配置，所有配置项保存到文件`ConEmu.xml`；
- 支持集成到其他程序界面中，比如文件管理器Explorer；
- 支持字符加粗、斜体、下划线、闪烁、前后景色等风格；
- 全面支持Unicode，支持ANSI X3.64标准和`xterm`256色；
- 附带字符界面的文本管理器Far Manager及其插件；
- 能运行在Windows 2000及以上版本的Windows系统，开箱即用；

由于前文所述原因，ConEmu与Cygwin命令行程序的配合暂时还不完美，等未来ConEmu完全支持pty，能骗过Cygwin了，ANSI转义序列直接解析能力才有用武之地。为此，ConEmu临时提供了间接解决办法——cygwin terminal connector。随ConEmu打包的`conemu-cyg-64.exe`或`conemu-cyg-32.exe`程序就是一个terminal connector，本身也是个Cygwin程序，依赖`cygwin1.dll`。ConEmu通过它启动Cygwin命令行程序，并强迫Cygwin核心关掉ANSI转义序列处理，原封不动地交给ConEmu，这好比在Cygwin中安插间谍，抓取第一手情报，但仍只是部分地解决了问题，比如颜色显示就存在不一致。

ConEmu官方提供了一个在ConEmu内连接Cygwin bash的Task配置示例。  
```shell
set "PATH=C:\cygwin64\bin;%PATH%" &   
%ConEmuBaseDirShort%\conemu-cyg-64.exe /usr/bin/bash.exe --login -i   
-new_console:p:C:"C:\cygwin64\Cygwin.ico"
```

解释如下：
- 将`C:\cygwin64\bin`加到Windows PATH环境变量是为了让`conemu-cyg-64.exe`准确找到Cygwin核心（`cygwin1.dll`），明确Cygwin根路径；
- `/usr/bin/bash.exe --login -i`是指定ConEmu要连接的命令行程序及其参数，此处是连接到Cygwin的bash，也可以配置为其他；
- 最后一行是ConEmu特有的选项开关，选项间用”:”隔开，`-new_console`含义是打开新标签页，`p`是指定pty模式，`C:\cygwin64\Cygwin.ico`是指定标签页使用的图标文件。

更详细解释及其他有效配置见官方文档 [https://conemu.github.io/en/CygwinMsysConnector.html](https://conemu.github.io/en/CygwinMsysConnector.html)。ConEmu还打包了msys、msys2的terminal connector——`conemu-msys-32.exe`和`conemu-msys2-32/64.exe`；给WSL的terminal connector和Cygwin的一样，也是需要与`wslbrige`配合起来，官网也提供了连接到msys、msys2、WSL的Task配置示例。搭配一个Windows的ssh客户端程序，配置好Task，也能将ConEmu连接到远程的ssh server。

配置Task较多，分组的作用就体现出来了。比如把Windows中的cmd、Power Shell、python shell、ipython都分到Windows组，在Cygwin中有bash、zsh、fish、ipython等等，可以归并到Cygwin组，如果同时还用msys、WSL什么的，也可以相应增加分组。这样可以做到**每种环境独立划分一个组**，不至于同名的程序难以区分，界面上也干净清爽。



## Ref

