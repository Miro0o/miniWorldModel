# Linux Namespace

[TOC]



## Res
### Related Topics
↗ [🍸 Linux Kernel](../../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/🔩%20Linux%20Kernel/🍸%20Linux%20Kernel.md)
↗ [Task Management & Scheduling (Process & Threads)](../../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/🔩%20Linux%20Kernel/⭕️%20Task%20Management%20&%20Scheduling%20(Process%20&%20Threads)/Task%20Management%20&%20Scheduling%20(Process%20&%20Threads).md)



## Intro
**Namespaces**: provides process isolation, complete isolation of containers, separate file system.
There are 6 types of namespaces:  
1. **mount ns** - for file system.  
2. **UTS(Unique time sharing) ns** - which checks for different hostnames of running containers   
3. **IPC ns** - interprocess communication  
4. **Network ns** - takes care of different ip allocation to different containers  
5. **PID ns** - process id isolation  
6. **user ns** - different username(uid)

|namespace类别|隔离资源|系统调用参数|内核版本|Docker中的例子|
|---|---|---|---|---|
|Mount namespace|挂载点|CLONE_NEWNS|2.4.19|独立的挂载点|
|UTS Namespace|hostname和domainname|CLONE_NEWUTS|2.6.19|独立的hostname|
|IPC Namespace|System V IPC, POSIX message queues|CLONE_NEWIPC|2.6.19||
|PID Namespace|进程ID|CLONE_NEWPID|2.6.24|容器进程PID为1|
|Network Namespace|网络设备，端口，网络栈|CLONE_NEWNET|2.6.24|独立的网络和端口|
|User Namespace|用户ID，group ID|CLONE_NEWUSER|3.8|独立的用户ID|



## Ref

