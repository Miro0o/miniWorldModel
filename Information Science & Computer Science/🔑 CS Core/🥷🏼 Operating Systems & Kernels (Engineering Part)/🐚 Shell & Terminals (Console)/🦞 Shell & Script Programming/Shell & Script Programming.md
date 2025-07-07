# Shell Implementations & Script Programming

[TOC]



## Res
### Related Topics
↗ [Cygwin Project](../../../../Software%20Engineering/🦄%20Computer%20Virtualization/Library%20Level%20Virtualization/Cygwin%20Project/Cygwin%20Project.md)


### Lots of notes about CLI & Shell Commands!
↗ [🏫 Missing Semester](../../../../🗺%20CS%20Overview/💋%20Intro%20to%20Computer%20Science/🏫%20Missing%20Semester.md)
↗ [🎭 The Art of Command Line](../../../../🗺%20CS%20Overview/💋%20Intro%20to%20Computer%20Science/🎭%20The%20Art%20of%20Command%20Line.md)
↗ [🤯 Awesome List](../../../../🗺%20CS%20Overview/🤯%20Awesome%20List.md)
↗ [Linux Free Software & FLOSS & FOSS](../../Linux%20(Derived%20From%20UNIX%20Family)/Linux%20Free%20Software%20&%20OSS%20(Open%20Source%20Software)/Linux%20Free%20Software%20&%20FLOSS%20&%20FOSS.md)
↗ [macOS CLI Software](../../Apple%20Operating%20Systems/macOS%20(Derived%20From%20UNIX%20Family)/🪓%20macOS%20CLI%20Software/macOS%20CLI%20Software.md)
↗ [Commands CheatCheet & Online Search](🧑‍🍳%20Shell%20Helper/Shell%20Commands%20Prompts%20&%20Correction/Commands%20CheatCheet%20&%20Online%20Search.md)
- ↗ [MacOS cmd Cheatsheet](../../../../🗺%20CS%20Overview/💋%20Intro%20to%20Computer%20Science/MacOS%20cmd%20Cheatsheet.md)
- ↗ [Shell Commands Prompts & Correction](🧑‍🍳%20Shell%20Helper/Shell%20Commands%20Prompts%20&%20Correction/Shell%20Commands%20Prompts%20&%20Correction.md)
↗ [👍 Vim](../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/Text%20Editors/Vim/👍%20Vim.md)

🔍 https://ss64.com
Command Line Reference


### Also Lots notes about Shell Script!
↗ [Shell & Script Programming](Shell%20&%20Script%20Programming.md)
↗ [Shell Helper](🧑‍🍳%20Shell%20Helper/Shell%20Helper.md)
- ↗ [Commands CheatCheet & Online Search](🧑‍🍳%20Shell%20Helper/Shell%20Commands%20Prompts%20&%20Correction/Commands%20CheatCheet%20&%20Online%20Search.md)
- and more!

📄 https://learnbyexample.github.io/tips/#command-line-tools
useful tips about command line tools !


### Learning Resources
📂 [Advanced Bash-Scripting Guide](https://tldp.org/LDP/abs/html/) --- from LDP (Linux Document Project)

This tutorial assumes no previous knowledge of scripting or programming, yet progresses rapidly toward an intermediate/advanced level of instruction . . . all the while sneaking in little nuggets of UNIX® wisdom and lore. It serves as a textbook, a manual for self-study, and as a reference and source of knowledge on shell scripting techniques. The exercises and heavily-commented examples invite active reader participation, under the premise that **the only way to really learn scripting is to write scripts**.

This book is suitable for classroom use as a general introduction to programming concepts.

This document is herewith granted to the Public Domain. **No copyright!**



## Intro
> `man sh`
> `man dash`
> `man bash; man zsh`

> Here "shell" more specifically refers to Linux shell because windows' shells are rarely used in production. But in general shell refers to a kind of software running on whatever platform that interprates user's text commands to the OS.  
> 
> Shell 是一门把用户指令翻译成系统调用的编程语言。


![|300](../../../../../../../Assets/Pics/Screenshot%202024-02-15%20at%2011.47.13PM.png)
<small>终端、Shell、系统内核与用户的关系示意</small>

终端自身并不执行用户输入的命令，它只是负责把输入的内容传送到主机系统，并把主机系统返回的结果呈现给用户。负责解释执行用户输入的命令并返回结果的，正是Shell！它是沟通用户和系统内核的中间桥梁。

从这个功能讲，广义上的Shell可以是图形界面的也可以是命令行界面的。比如Windows上的Explorer，双击文件名为什么可以让一个程序打开这个文件？其实可以理解为Explorer捕捉到了“鼠标双击文件名”这个事件，然后根据文件名去请求Windows内核启动了一个关联程序，并传入相关参数(文件名等信息)，然后这个程序自己再“打开”用户双击的文件，呈现到屏幕上。Windows上运行“命令提示符”时，在任务管理器中可以看到运行了两个进程：Console Windows Host和cmd，前者是终端模拟器（console host在用户启动cmd的时候由Windows系统自动创建），后者则是Shell程序。除了图形、命令行交互，未来还可能出现更加高级的Shell，比如语音、动作等等。

狭义的Shell仅指字符界面的命令解释器，在UNIX/Linux系统上广泛应用，所做的工作主要是:
1. 读入用户输入（Read）
2. 解释执行（Evaluate）
3. 打印执行结果和提示符（Print）
4. 回到1循环（Loop）

这种工作方式被称为交互式Shell（Interactive Shell），Shell通常还支持批处理方式（Batch），用户提前写好要执行的命令，形成脚本（Shell Script），Shell一次性把脚本中的命令执行完。


### Types of Shell Commands
Shell中可以执行的指令可分为3类：  
①**内建(built-in)命令**，仅与Shell自身有关，不同的Shell（如sh、bash、zsh、fish等）支持的内建命令；  
②**用户定义函数（function）、别名（alias）等**，用户可自定义一些Shell函数，给命名设置别名等；  
③**外部命令**，额外安装的可执行程序越多，可供执行的外部命令就越多，比如ls就是外部命令。

对于用户的输入，Shell**按照②①③的顺序依次查找**匹配命令名称，一旦匹配就执行该命令（执行是否成功是下一步的事情暂忽略），即使可能有多个匹配结果也不再继续匹配，如果无法找到就报错“未找到命令”。
- 内建命令的名称是固定的;
- 用户自定义的别名、函数等，在Shell加载完配置文件后也是固定的;
- 而外部命令则是不可预期的，Shell到哪里去找呢？答案是PATH环境变量。


### 🤔 Global Environment Variables, Shell Variables and Shell Attributes
↗ [FAQ /👉👉 Global Environment Variables | Regular Shell Variables | `env`, `export`, `set`, `declare`](../FAQ.md#👉👉%20Global%20Environment%20Variables%20|%20Regular%20Shell%20Variables%20|%20`env`,%20`export`,%20`set`,%20`declare`)



## Shell's Objectives /Services /Functions
> STFM /RTFM :3

### OS's Perspective
#### Job (Process Group) Control & Signals
#### OS Resources /Process Management


### User's Perspective
#### UX Enhancement
Completion System
Line Editor
#### Functions /Commands Execution
#### Programming & Interpretation



## 🍼 Shell Configuration
### Configuration File Loading
> 🔗 https://unix.stackexchange.com/a/3085

`~/.profile` is the right place for environment variable definitions and for non-graphical programs that you want to run when you log in (e.g. `ssh-agent`, `screen -m`). It is executed by your login shell if that is a Bourne-style shell (sh, ksh, bash). Zsh runs `~/.zprofile` instead, and Csh and tcsh run `~/.login`.

If you log in under an X display manager (xdm, gdm, kdm, ...), whether `~/.profile` is run depends on how your display manager and perhaps desktop environment were configured by your distribution. If you log in under a “custom session”, that usually executes `~/.xsession`.

`~/.bashrc` is the right place for bash-specific settings, such as aliases, functions, shell options and prompts. As the name indicates, it is specific to bash; csh has `~/.cshrc`, ksh has `~/.kshrc`, and zsh has \<drumroll\> `~/.zshrc`. 

> ❗ For shell specific configurations go to their specific docs.


🔗 See also: 
- [Difference between `.bashrc` and `.bash_profile`](https://superuser.com/questions/183870/difference-between-bashrc-and-bash-profile)
- [Which setup files should be used for setting up environment variables with bash?](https://superuser.com/questions/183845/which-setup-files-should-be-used-for-setting-up-environment-variables-with-bash)
- [Zsh not hitting `~/.profile`](https://superuser.com/questions/187639/zsh-not-hitting-profile)


### Default Shell
> 🔗 [Default Shell | Fish Doc](https://fishshell.com/docs/current/index.html#default-shell "Permalink to this heading")
> Applys to other shells.

There are multiple ways to switch to fish (or any other shell) as your default.

1️⃣ The simplest method is to set your terminal emulator (eg GNOME Terminal, Apple’s Terminal.app, or Konsole) to start fish directly. See its configuration and set the program to start to `/usr/local/bin/fish` (if that’s where fish is installed - substitute another location as appropriate).

2️⃣ Alternatively, you can set fish as your login shell so that it will be started by all terminal logins, including SSH.

> ⚠ Warning
> 
> Setting fish as your login shell may cause issues, such as an incorrect [`PATH`](https://fishshell.com/docs/current/language.html#envvar-PATH). Some operating systems, including a number of Linux distributions, require the login shell to be Bourne-compatible and to read configuration from `/etc/profile`. fish may not be suitable as a login shell on these systems.

To change your login shell to fish:

1.  Add the shell to `/etc/shells` with:
	```shell
	echo /usr/local/bin/fish | sudo tee -a /etc/shells
	```
1.  Change your default shell with:
	```shell
	chsh -s /usr/local/bin/fish
	```

Again, substitute the path to fish for `/usr/local/bin/fish` - see `command -s fish` inside fish. To change it back to another shell, just substitute `/usr/local/bin/fish` with `/bin/bash`, `/bin/tcsh` or `/bin/zsh` as appropriate in the steps above.


### Shell Language & Locale
> 🔗 https://silaoa.github.io/2019/2019-03-20-Cygwin系列（六）：使用Cygwin常见问题及应对.html

Linux、Cygwin是支持多语言环境的系统，语言环境由语言、地区、字符集三元组合唯一指示，命名规则为“<语言>\_<地区>.<字符集编码>”，比如zh_CN.UTF-8，zh表示中文，CN指中国大陆地区，UTF-8指使用UTF-8字符编码；en_US.UTF-8，en表示英语，US指美国。

Linux、Cygwin通过`locale`程序和一组环境变量为设置特定的语言环境。`locale -a`命令可列出系统支持的所有语言环境。一组环境变量包括：`LANG`、LC_起始的12个类别（日期时间、数字、电话号码、货币等表示习惯）变量、`LC_ALL`，优先级依次降低。因此在`~/.bashrc`（如果使用的Shell是Bash）、`~/.zshrc`（如果使用的Shell是zsh）直接写好LC_ALL即可。  
```shell
#locale设置，包含12大类的locale属性，优先级LC_ALL > LC_*(12个) >LANG  
# LANG  
# LC_CTYPE  
# LC_NUMERIC  
# LC_TIME  
# LC_COLLATE  
# LC_MONETARY  
# LC_MESSAGES  
# LC_PAPER  
# LC_NAME  
# LC_ADDRESS  
# LC_TELEPHONE  
# LC_MEASUREMENT  
# LC_IDENTIFICATION  
# LC_ALL  
export LC_ALL="zh_CN.UTF-8"
```



## Ref
[Shell脚本中的while getopts用法小结]: https://www.cnblogs.com/kevingrace/p/11753294.html
[linux 下 `dirname $0`]: https://www.cnblogs.com/xupeizhi/archive/2013/02/19/2917644.html
[shell 判断文件/目录是否为空]: https://blog.csdn.net/wenjjing2lianee/article/details/5633251

[👍 Linux Cygwin知识库（一）：一文搞清控制台、终端、shell概念]: https://silaoa.github.io/2019/2019-04-04-Linux%20Cygwin知识库（一）：一文搞清控制台、终端、shell概念.html

(This website has been archived under the 'Shell & terminals (Console)' directory)

[👍 Cygwin系列（六）：使用Cygwin常见问题及应对]: https://silaoa.github.io/2019/2019-03-20-Cygwin系列（六）：使用Cygwin常见问题及应对.html

[👍 Process groups, jobs and sessions]: https://biriukov.dev/docs/fd-pipe-session-terminal/3-process-groups-jobs-and-sessions/
