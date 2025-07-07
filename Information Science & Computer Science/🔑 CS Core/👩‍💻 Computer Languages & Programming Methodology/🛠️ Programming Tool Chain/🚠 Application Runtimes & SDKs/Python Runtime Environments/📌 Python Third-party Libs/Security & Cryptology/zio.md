# zio

[TOC]



## Res
↗ [pwntools](pwntools.md)



## Intro
> 需要注意的的是，zio 正在逐步被开发更活跃，功能更完善的 pwntools 取代，但如果你使用的是 32 位 Linux 系统，zio 可能是你唯一的选择。而且在线下赛中，内网环境通常都没有 pwntools 环境，但 zio 是单个文件，上传到内网机器上就可以直接使用。

zio是一个易用的 Python io 库，在 Pwn 题目中被广泛使用，zio 的主要目标是在 stdin/stdout 和 TCP socket io 之间提供统一的接口，所以当你在本地完成 利用开发后，使用 zio 可以很方便地将目标切换到远程服务器。

zio 的哲学：
```python
from zio import *

if you_are_debugging_local_server_binary:

io = zio('./buggy-server')  # used for local pwning development

elif you_are_pwning_remote_server:

io = zio(('1.2.3.4', 1337))  # used to exploit remote service

io.write(your_awesome_ropchain_or_shellcode)

# hey, we got an interactive shell!

io.interact()
```



## Ref

