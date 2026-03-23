# NAT (Network Address Translation)

[TOC]



## Res
### Related Topics
↗ [NAPT (Network Address & Port Translation)](NAPT%20(Network%20Address%20&%20Port%20Translation).md)
↗ [Remote Administration(Access) Tools (RAT)](../../../../../Generic%20Software%20Tools%20&%20Projects/Remote%20Administration(Access)%20Tools%20(RAT)/Remote%20Administration(Access)%20Tools%20(RAT).md)

↗ [API Gateway](../../../../../../Software%20Engineering/☁️%20Cloud%20Computing%20&%20Cloud%20Native/Cloud%20Operating%20System%20&%20Platform%20(System%20Level%20Engineering)/Orchestration%20&%20Management/API%20Gateway/API%20Gateway.md)
- ↗ [ngrok](../../../../../../Software%20Engineering/☁️%20Cloud%20Computing%20&%20Cloud%20Native/Cloud%20Operating%20System%20&%20Platform%20(System%20Level%20Engineering)/Orchestration%20&%20Management/API%20Gateway/ngrok/ngrok.md)

↗ [Reverse Proxy Servers & Application Servers](../../../../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20The%20Internet%20Development%20(and%20Web%20Development)/🗄️%20Web%20BackEnd%20Dev%20&%20Middleware/Web%20Dev%20Middleware/🐈%20Reverse%20Proxy%20Servers%20&%20Application%20Servers/Reverse%20Proxy%20Servers%20&%20Application%20Servers.md)
- ↗ [frp (A Fast Reverse Proxy)](../../../../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20The%20Internet%20Development%20(and%20Web%20Development)/🗄️%20Web%20BackEnd%20Dev%20&%20Middleware/Web%20Dev%20Middleware/🐈%20Reverse%20Proxy%20Servers%20&%20Application%20Servers/Reverse%20Proxy%20Servers/frp%20(A%20Fast%20Reverse%20Proxy).md)

↗ [Tunneling & VPN (Virtual Personal Network)](../../../../../../CyberSecurity/Network%20(&%20Communication)%20Security/Anonymous%20&%20Private%20Networks/👻%20Tunneling%20&%20VPN%20(Virtual%20Personal%20Network)/Tunneling%20&%20VPN%20(Virtual%20Personal%20Network).md) (Including NAT Tools)
↗ [tailscale](../../../../../../CyberSecurity/Network%20(&%20Communication)%20Security/Anonymous%20&%20Private%20Networks/👻%20Tunneling%20&%20VPN%20(Virtual%20Personal%20Network)/VPN%20&%20NAT%20Implementations/VPN%20&%20NAT%20Commercial%20Products/tailscale.md)



## Intro
NAT 是将一个地址域（如专用 Intranet）映射到另一个地址域（如 Internet）的标准方法，NAT 可以将内部网络中的所有节点的地址转换成一个 IP 地址，反之亦然。

![](../../../../../../../Assets/Pics/Screenshot%202023-12-16%20at%2011.02.51AM.png)


### NAT Working Principles
NAT 的实现方式有三种：静态网络地址转换、动态网络地址转换和网络地址端口映射。

![](../../../../../../../Assets/Pics/Screenshot%202023-12-16%20at%2011.01.37AM.png)
所谓静态地址转换，是指将公网 IP 地址一一对应地转换为内部私有 IP 地址

![](../../../../../../../Assets/Pics/Screenshot%202023-12-16%20at%2011.01.51AM.png)
动态地址转换将内部本地地址与内部合法地址一对一的进行转换，与静态地址转换不同的是它是从内部合法地址池动态分配临时的 IP 地址来对内部本地地址进行转换。

![](../../../../../../../Assets/Pics/Screenshot%202023-12-16%20at%2011.02.03AM.png)
网络地址端口映射就是将公网 IP 映射到私有 IP ，而外网多个 IP 被映射到同一内部共有 IP 地址的不同端口。


### NAT Traversal
↗ [NAT Traversal](NAT%20Traversal/NAT%20Traversal.md)



## Ref
[👍 Telegram: we get the IP address of the interlocutor]: https://n0a.pw/telegram-get-remote-ip/

[👍 全网最全网络基础思维导图（38张) | SDNLAB]: https://mp.weixin.qq.com/s/jlstOkjnJtrLKOGtWedebA

![](../../../../../../../Assets/Pics/Pasted%20image%2020240510150735.png)