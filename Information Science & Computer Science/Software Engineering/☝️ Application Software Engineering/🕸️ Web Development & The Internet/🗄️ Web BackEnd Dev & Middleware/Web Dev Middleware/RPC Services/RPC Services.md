# RPC Services

[TOC]



## Res
### Related Topics
↗ [IPC (Inter Process Communication)](../../../../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource)/IPC%20(Inter%20Process%20Communication)/IPC%20(Inter%20Process%20Communication).md)
↗ [Network Sockets](../../../../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20IO%20System/IO%20Generality%20(via%20Abstraction)/🛜%20Network%20Sockets/Network%20Sockets.md)
↗ [Remote Procedure Call (RPC)](../../../../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20IO%20System/IO%20Generality%20(via%20Abstraction)/🛜%20Network%20Sockets/Remote%20Procedure%20Call%20(RPC).md)
↗ [Procedure (Function) Call & Runtime Memory Layout](../../../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🤡%20Program%20Execution%20(Runtime)/Procedure%20(Function)%20Call%20&%20Runtime%20Memory%20Layout.md)

↗ [Network Programming & RPC](../../../../../../🔑%20CS%20Core/🏎️%20Computer%20Networking%20and%20Communication/Network%20Programming%20&%20RPC/Network%20Programming%20&%20RPC.md)
↗ [Cloud Native/Remote Procedure Call (RPC)](../../../../../☁️%20Cloud%20Computing%20&%20Cloud%20Native/Cloud%20Operating%20System%20&%20Platform%20(System%20Level%20Engineering)/Orchestration%20&%20Management/Cloud%20RPC%20Services.md)

↗ [Linux /Concurrency & Locking & IPC (Inter-Process Communication)](../../../../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/🔩%20Linux%20Kernel/⭕️%20Task%20Management%20&%20Scheduling%20(Process%20&%20Threads)/Concurrency%20&%20Locking%20&%20IPC%20(Inter-Process%20Communication)/Concurrency%20&%20Locking%20&%20IPC%20(Inter-Process%20Communication).md)



## Intro
look at ↗ [Network Sockets](../../../../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20IO%20System/IO%20Generality%20(via%20Abstraction)/🛜%20Network%20Sockets/Network%20Sockets.md)



## 🤓 Reading List
[从一个简单例子聊RPC]:https://www.jianshu.com/p/32ca4fd5a7e2
[(近)万字总结，RPC 项目相关问题及解答 ]:https://www.nowcoder.com/discuss/588903?from=zhnkw


![Screenshot 2022-11-12 at 12.27.15 AM](../../../../../../../Assets/Pics/Screenshot%202022-11-12%20at%2012.27.15%20AM.png)
<span style="position:center"><small>RPC Design Arch</small></span>

![Screenshot 2022-11-12 at 12.29.06 AM](../../../../../../../Assets/Pics/Screenshot%202022-11-12%20at%2012.29.06%20AM.png)
<span style="position:center"><small>RPC APP Arch</small></span>

![Screenshot 2022-11-12 at 12.29.40 AM](../../../../../../../Assets/Pics/Screenshot%202022-11-12%20at%2012.29.40%20AM.png)
<span style="position:center"><small>RPC Call Process</small></span>

