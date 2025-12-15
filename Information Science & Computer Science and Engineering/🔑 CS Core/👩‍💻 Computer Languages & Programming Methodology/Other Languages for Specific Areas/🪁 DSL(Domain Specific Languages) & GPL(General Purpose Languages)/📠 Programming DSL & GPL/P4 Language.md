# P4 Language

[TOC]



## Res
🏠 
🚧 https://github.com/p4lang
📂 https://github.com/p4lang/tutorials

📄 https://dl.acm.org/doi/10.1145/2656877.2656890
Pat Bosshart, Dan Daly, Glen Gibb, Martin Izzard, Nick McKeown, Jennifer Rexford, Cole Schlesinger, Dan Talayco, Amin Vahdat, George Varghese, and David Walker. 2014. P4: programming protocol-independent packet processors. SIGCOMM Comput. Commun. Rev. 44, 3 (July 2014), 87–95. https://doi.org/10.1145/2656877.2656890


### Related Topics
↗ [Software Defined Network (SDN)](../../../../🏎️%20Computer%20Networking%20and%20Communication/🙌🏻%20Software%20Defined%20Network%20(SDN)/Software%20Defined%20Network%20(SDN).md)
↗ [Network Programming & RPC](../../../../🏎️%20Computer%20Networking%20and%20Communication/Network%20Programming%20&%20RPC/Network%20Programming%20&%20RPC.md)
↗ [High Performance Network (HPN) & IDC Technologies](../../../../🏎️%20Computer%20Networking%20and%20Communication/🚀%20High%20Performance%20Network%20(HPN)%20&%20IDC%20Technologies/High%20Performance%20Network%20(HPN)%20&%20IDC%20Technologies.md)


### Learning Resources
https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIxODA5MzQ2MQ==&action=getalbum&album_id=2258770492021080069&scene=21&from_msgid=2247484125&from_itemidx=1&count=3&nolastread=1#wechat_redirect
P4 交换机论文



## Intro



## Ref
[益思芯知识讲堂 | 什么是P4编程语言？]: http://www.resnics.com/news/yi-si-xin-zhi-shi-jiang-tang-shi-me-shi-p4-bian-cheng-yu-yan-

[👍 P4语言编程详解 | SDNLab]: https://www.sdnlab.com/17882.html

[P4语言介绍]: https://yeya24.github.io/post/p4/

[被引用3000多次，这篇论文为何获得SIGCOMM"经典之作奖" ！]: https://mp.weixin.qq.com/s/8mi_2CHifbWDPcjEY53Cpg

P4: programming protocol-independent packet processors.

这篇论文意义重大，因为它为 P4 语言和使用 P4 的程序员社区奠定了基础。P4 改变了我们对网络的看法，使转发平面（即通过网络转发数据包的交换机、路由器、防火墙、负载平衡器和 NIC）完全可编程。P4 是第一种让程序员可以完全控制数据包通过网络时如何处理数据包的语言。提供端到端网络可编程性，可实现数据包处理管道的定制化、变更的敏捷性、性能优化、异构环境中的互操作性、创新以及供应商的中立性。

自 2014 年 P4 发明以来，许多公司都使用它来更快地发展他们的网络，增加了网络内遥测 （INT） 等新功能，从而提供了对网络工作方式的更深入的了解。P4 还引入了几种可编程交换机和 SmartNIC，展示了可以在不影响其速度或功耗的情况下对网元进行编程。

“在P4之前，网络还停留在黑暗时代，”英特尔高级研究员、斯坦福大学教授 Nick McKeown说。“更改一个简单的功能通常需要三到四年的时间才能走完标准机构和芯片设计的流程。这是计算机系统中固定的、僵化的处理的最后的遗迹。P4 将网络从缓慢发展的标准中解放出来，允许程序员在短短几个小时内定义和部署新功能，将协议和功能从固定功能硬件提升到软件中。P4 使网络能够更快地发展和改进，因此已成为 SDN（软件定义网络）的重要组成部分。（参考阅读：[Nick McKeown终于说出Tofino芯片失败的根源！](https://mp.weixin.qq.com/s?__biz=MzIwNjI2MDU3OA==&mid=2650812652&idx=1&sn=6336194ad96aa9c4936d5354806f6f07&chksm=8cd0c0e1bba749f746c4c08904fa0988abbd4bb70524c76c9457f433ff170181b1392b6fdf73&token=139452160&lang=zh_CN&scene=21#wechat_redirect)）

“在过去十年中，P4对网络领域产生了巨大影响，”P4专项基金管理委员会主席、康奈尔大学教授Nate Foster说。“在工业界，P4 彻底改变了交流内容，从考虑可编程性是否可行或是否需要，到询问如何在各种目标上实现可编程性。在学术界，P4 使研究界能够尝试各种以前禁止使用的数据平面算法。可以看作是完成了SDN的最初愿景，使整个网络可编程，既有控制面，也有数据面。很少有论文可以达到同样的高度。"（参考阅读：[Nate Foster 函数式编程被评为最具影响力论文！](https://mp.weixin.qq.com/s?__biz=MzIwNjI2MDU3OA==&mid=2650812828&idx=1&sn=c69bc4c5862d46d16fe5c15a0142a3ea&chksm=8cd0c191bba74887294003cdc03e010b8af6e20c37fb606fa630897bf6711d0903ffdc5c5746&token=139452160&lang=zh_CN&scene=21#wechat_redirect)）

ACM SIGCOMM Test of Time Award是一项年度奖项，旨在表彰过去10-12年在《Computer Communication Review》或SIGCOMM赞助或共同赞助的活动中发表的论文，这些论文被认为是一篇杰出的论文，其内容仍然充满活力，并且在现今任何发挥作用的资源。奖项评选由SIGCOMM奖项委员会主席任命的委员会进行。
