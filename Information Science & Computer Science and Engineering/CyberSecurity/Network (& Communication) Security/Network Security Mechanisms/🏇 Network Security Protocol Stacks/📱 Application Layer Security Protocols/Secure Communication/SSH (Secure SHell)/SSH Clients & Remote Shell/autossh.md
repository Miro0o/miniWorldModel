# autossh

[TOC]



## Res
🏠 https://linux.die.net/man/1/autossh
🚧 


### Related Topics



## Intro
**autossh** is a program to start a copy of ssh and monitor it, restarting it as necessary should it die or stop passing traffic.

The original idea and the mechanism were from rstunnel (Reliable SSH Tunnel). With version 1.2 of **autossh** the method changed: **autossh** uses ssh to construct a loop of ssh forwardings (one from local to remote, one from remote to local), and then sends test data that it expects to get back. (The idea is thanks to Terrence Martin.)

With version 1.3, a new method is added (thanks to Ron Yorston): a port may be specified for a remote echo service that will echo back the test data. This avoids the congestion and the aggravation of making sure all the port numbers on the remote machine do not collide. The loop-of-forwardings method remains available for situations where using an echo service may not be possible.



## Ref
