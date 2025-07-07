# pexpect

[TOC]



## Res
🏠 
🚧 https://github.com/pexpect/pexpect
📂 https://pexpect.readthedocs.io/en/stable/


### Related Topics



## Intro
`Pexpect` is a Pure Python Expect-like module

`Pexpect` makes Python a better tool for controlling other applications.

`Pexpect` is a pure Python module for spawning child applications; controlling them; and responding to expected patterns in their output. `Pexpect` works like Don Libes' Expect. `Pexpect` allows your script to spawn a child application and control it as if a human were typing commands.

`Pexpect` can be used for automating interactive applications such as ssh, ftp, passwd, telnet, etc. It can be used to automate setup scripts for duplicating software package installations on different servers. It can be used for automated software testing. `Pexpect` is in the spirit of Don Libes' Expect, but `Pexpect` is pure Python.

The main features of `Pexpect` require the `pty` module in the Python standard library, which is only available on Unix-like systems. Some features—waiting for patterns from file descriptors or subprocesses—are also available on Windows.



## Ref
[Python之pexpect详解 | cnblog]: https://www.cnblogs.com/baishuchao/p/9339159.html

`Pexpect`程序主要用于人机对话的模拟，就是那种系统提问，人来回答yes/no，或者账号登陆输入用户名和密码等等的情况。因为这种情况特别多而且繁琐，所以很多语言都有各种自己的实现。最初的第一个 Expect 是由 TCL 语言实现的，所以后来的 Expect 都大致参考了最初的用法和流程，整体来说大致的流程包括：
- 运行程序
- 程序要求人的判断和输入
- Expect 通过关键字匹配
- 根据关键字向程序发送符合的字符串

TCL 语言实现的 Expect 功能非常强大，我曾经用它实现了防火墙设备的完整测试平台。也因为它使用方便、范围广，几乎所有脚本语言都实现了各种各样的类似与Expect的功能，它们叫法虽然不同，但原理都相差不大

pexpect 是 Python 语言的类 Expect 实现。从我的角度来看，它在功能上与 TCL 语言的实现还是有一些差距，比如没有buffer_full 事件、比如没有 expect before/after 事件等，但用来做一般的应用还是足够了

