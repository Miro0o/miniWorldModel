# Shell 教程摘抄：

---
#### command [选项] [参数]
		`[]`表示可选的，也就是可有可无。有些命令不写选项和参数也能执行，有些命令在必要的时候可以附带选项和参数。
> - `#ls` 是常用的一个命令，它属于目录操作命令，用来列出当前目录下的文件和文件夹。ls 可以附带选项，也可以不带。
+ Linux 的[选项]又分为短格式选项和长格式选项
	+  短格式选项是长格式选项的简写，用一个减号`-`和一个字母表示，例如`ls -l`
	+ 长格式选项是完整的英文单词，用两个减号`--`和一个单词表示，例如`ls --all`

>- `#echo -n`  增加`-n`选项，就不会换行了。
>- `#read -n`.  `-n`选项表示读取固定长度的字符串 
> e.g. ` #read -n 1 sex`

---

#### 不同的 Linux 发行版使用的提示符格式大同小异，例如在 CentOS 中，默认的提示符类似下面这样：

[mozhiyan@localhost ~]$

各个部分的含义如下：

-   `[]`是提示符的分隔符号，没有特殊含义。
-   `mozhiyan`表示当前登录的用户，我现在使用的是 mozhiyan 用户登录。
-   `@`是分隔符号，没有特殊含义。
-   `localhost`表示当前系统的简写主机名（完整主机名是 localhost.localdomain）。
-   `~`代表用户当前所在的目录为主目录（home 目录）。如果用户当前位于主目录下的 bin 目录中，那么这里显示的就是`bin`。
-   `$`是命令提示符。Linux 用这个符号标识登录的用户权限等级：如果是超级用户（root 用户），提示符就是`#`；如果是普通用户，提示符就是`$`。

---

#### Shell 通过`PS1`和`PS2`这两个环境变量来控制提示符的格式，修改`PS1`和`PS2`的值就能修改命令提示符的格式。

-   PS1 控制最外层的命令提示符格式。
-   PS2 控制第二层的命令提示符格式。

``` 
[mozhiyan@localhost ~]$ echo $PS1
[\u@\h \W]\$
[mozhiyan@localhost ~]$ echo $PS2
>
```

---

#### `#!`是一个约定的标记，它告诉系统这个脚本需要什么解释器来执行，即使用哪一种 Shell；后面的`/bin/bash`就是指明了解释器的具体位置。

---


#### pro rpasdf	与 Bash Shell 有关的配置文件主要有 /etc/profile、~/.bash_profile、~/.bash_login、~/.profile、~/.bashrc、/etc/bashrc、/etc/profile.d/*.sh，不同的启动方式会加载不同的配置文件。

> `~`表示用户主目录。`*`是通配符，/etc/profile.d/*.sh 表示 /etc/profile.d/ 目录下所有的脚本文件（以`.sh`结尾的文件）。

---

#### 下面演示一下环境变量的使用：

```
[c.biancheng.net]$ a=22       #定义一个全局变量
[c.biancheng.net]$ echo $a    #在当前Shell中输出a，成功
22
[c.biancheng.net]$ bash       #进入Shell子进程
[c.biancheng.net]$ echo $a    #在子进程中输出a，失败

[c.biancheng.net]$ exit       #退出Shell子进程，返回上一级Shell
exit
[c.biancheng.net]$ export a   #将a导出为环境变量
[c.biancheng.net]$ bash       #重新进入Shell子进程
[c.biancheng.net]$ echo $a    #在子进程中再次输出a，成功
22
[c.biancheng.net]$ exit       #退出Shell子进程
exit
[c.biancheng.net]$ exit       #退出父进程，结束整个Shell会话
```

可以发现，默认情况下，a 在 Shell 子进程中是无效的；使用 export 将 a 导出为环境变量后，在子进程中就可以使用了。  

 通过` #exit` 命令可以一层一层地退出 Shell。  

`#export a` 这种形式是在定义变量 a 以后再将它导出为环境变量，如果想在定义的同时导出为环境变量，可以写作`export a=22`。