# QUIC (Quick UDP Internet Connection)

[TOC]



## Res
🏠 https://quicwg.org

QUIC belongs to  [The Chromium Projects](https://www.chromium.org/)


### Related Topics



## QUIC, a multiplexed transport over UDP
![QUIC-Badge-Dark-RGB-Horiz](../../../../../../Assets/Pics/QUIC-Badge-Dark-RGB-Horiz.png)

QUIC is a new multiplexed transport built on top of UDP. HTTP/3 is designed to take advantage of QUIC's features, including lack of Head-Of-Line blocking between streams.

The QUIC project started as **an alternative to TCP+TLS+HTTP/2**, with the goal of improving user experience, particularly page load times. The [**QUIC working group**](https://datatracker.ietf.org/wg/quic/about/) at the IETF defined a clear boundary between the transport([QUIC](https://datatracker.ietf.org/doc/html/rfc9000)) and application(HTTP/3) layers, as well as migrating from QUIC Crypto to [TLS 1.3](https://datatracker.ietf.org/doc/html/rfc8446).

Because TCP is implemented in operating system kernels and middleboxes, widely deploying significant changes to TCP is next to impossible. However, since QUIC is built on top of UDP and the transport functionality is encrypted, it suffers from no such limitations.

*Key features of QUIC and HTTP/3 over TCP+TLS and HTTP/2 include**
- Reduced connection establishment time - 0 round trips in the common case
- Improved congestion control feedback
- Multiplexing without head of line blocking
- Connection migration
- Transport extensibility
- Optional unreliable delivery

The [IETF](https://www.ietf.org/) QUIC Working Group produced QUIC version 1 — **a UDP-based, stream-multiplexing, encrypted transport protocol**. The protocol itself is published as [RFC 9000](https://www.rfc-editor.org/rfc/rfc9000.html), and there are other related RFCs of note, see below.

We are now [chartered](https://datatracker.ietf.org/wg/quic/about/) to be the focal point for any QUIC-related work in the IETF. Our work covers maintenance and evolution of published specifications, the deployability of QUIC, and new extensions to QUIC.

The QUIC Working Group originated HTTP/3, the mapping of HTTP to QUIC, and the QPACK header compression scheme. These are now maintained by the [HTTP Working Group](https://httpwg.org/).

<small>* See our [contribution guidelines](https://github.com/quicwg/base-drafts/blob/master/CONTRIBUTING.md) if you want to work with us.</small>



## Refs
[The Road to QUIC]: https://blog.cloudflare.com/the-road-to-quic/
[科普：QUIC协议原理分析 - 腾讯技术工程的文章 - 知乎]: https://zhuanlan.zhihu.com/p/32553477
[让互联网更快的协议，QUIC在腾讯的实践及性能优化 - 腾讯技术工程的文章 - 知乎]: https://zhuanlan.zhihu.com/p/32560981

[入选USENIX ATC 2024|腾讯TQUIC团队最新研究 QDSR：更快更均衡的QUIC流量分发 ]: https://mp.weixin.qq.com/s/13Cs1ZMc-TB1hi7BlwrmNw

腾讯云架构平台部应用框架组TQUIC(https://github.com/Tencent/tquic)团队结合长期的开发和实践经验， 并与南方科技大学李清老师开展前沿研究探索，提出了一种**更高效的QUIC流量转发框架QDSR**。高动态内容请求和不断增长的下行中继转发服务使得7层QUIC转发工作负载过大，导致运营成本上升和端到端服务质量下降。为了解决这一问题，QDSR采用了QUIC和直接服务器返回（Direct Server Return，DSR）技术，使得真实服务器能够同时直接向客户端发送数据，消除了传统七层过重的冗余中继转发。因此，QDSR不仅仅实现了高性能、低延迟，并且几乎消除了额外的下行链路中继开销，为云服务提供商提供了一种创新且高效的解决方案。此项论文受到了USENIX ATC 2024高度认可并被录用。
