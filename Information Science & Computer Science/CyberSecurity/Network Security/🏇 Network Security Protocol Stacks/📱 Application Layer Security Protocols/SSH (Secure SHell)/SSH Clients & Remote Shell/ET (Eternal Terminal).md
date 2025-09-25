# ET (Eternal Terminal)

[TOC]



## Res
🏠 https://eternalterminal.dev
🚧 https://github.com/MisterTea


### Related Topics
↗ [OpenSSH](OpenSSH.md)
↗ [autossh](autossh.md)
↗ [Mosh (Mobile SHell)](Mosh%20(Mobile%20SHell).md)



## Intro
Eternal Terminal (ET) is a remote shell that automatically reconnects without interrupting the session. Learn how to install and use it [here](https://eternalterminal.dev/usermanual).

ET was heavily inspired by several other projects:
- [**ssh**](https://www.openssh.com/): Ssh is a great remote terminal program, and in fact ET uses ssh to initialize the connection. The big difference between ET and ssh is that an ET session can survive network outages and IP roaming. With ssh, one must kill the ssh session and reconnect after a network outage.
- [**autossh**](https://linux.die.net/man/1/autossh): Autossh is a utility that automatically restarts an ssh session when it detects a reconnect. It's a more advanced version of doing "while true; ssh myhost.com". Although autossh will automatically reconnect, it will start a new session each time. This means, if we use tmux with control mode, we must wait for the ssh connection to die and then re-attach. ET saves valuable time by maintaining your tmux session even when the TCP connection dies and resuming quickly.
- [**mosh**](https://mosh.org/): Mosh is a popular alternative to ET. While mosh provides the same core functionality as ET, it does not support native scrolling nor tmux control mode (tmux -CC).



## Ref
