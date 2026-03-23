# DDD (Domain Driven Design)

[TOC]



## Res
### 📂 Docs



### 📃 Articles
👍 [DDD 实战教程](https://zq99299.github.io/note-book2/ddd/00/)

[领域驱动设计在互联网业务开发中的实践 -- 美团技术团队](https://tech.meituan.com/2017/12/22/ddd-in-practice.html)

[DDD 落地实例 （？）](https://www.cnblogs.com/wlandwl/)

[DDD 概念参考](https://domain-driven-design.org/zh/ddd-concept-reference.html)

殷浩详解DDD：领域层设计规范 - 阿里云网站的文章 - 知乎 https://zhuanlan.zhihu.com/p/373498306

[殷浩详解DDD：领域层设计规范](https://developer.aliyun.com/article/784117?utm_content=g_1000272076#slide-1)


[Office Automation (OA)](https://www.techopedia.com/definition/4319/office-automation-oa)

[Enterprise Resource Planning](http://en.wikipedia.org/wiki/Enterprise_resource_planning)



### 🎬 Videos

【B站讲的最好的DDD领域驱动设计实战教程全集（2022最新版）】 https://www.bilibili.com/video/BV1Ca411W7Y4/?p=12&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

- 用一个实例简单演示了DDD在实际开发中的流程

【领域驱动设计精粹【中英字幕 Domain-Driven Design Distilled】】 https://www.bilibili.com/video/BV1oS4y1F73g/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

【1-熊锐-DDD的理解及实践探讨 -- 美团技术开发团队】 https://www.bilibili.com/video/BV1pG4y167jF/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d



## Intro
![img](../../../../../../../Assets/Pics/concept-map-hd.png)

![img](../../../../../../../Assets/Pics/dc32e8e4a317fe00121ce18adc407c66.dc32e8e4.jpg)


> 我认为，要想应用 DDD，首要任务就是要吃透 DDD 的核心设计思想，搞清楚 DDD、微服务和中台之间的关系 。
>
> - 中台本质是业务模型，
> - 微服务是业务模型的系统落地，
> - DDD 是一种设计思想，它可以同时指导中台业务建模和微服务设计
>
> 它们之间就是这样的一个铁三角关系。**DDD 强调领域模型和微服务设计的一体性，先有领域模型然后才有微服务，而不是脱离领域模型来谈微服务设计** 。
>
> 其次，就是通过战略设计，建立领域模型，划分微服务边界。这步是关键，你可以借助专栏中的一些经验。
>
> 最后，通过战术设计，我们会从领域模型转向微服务设计和落地。此时，边界清晰、可持续演进的微服务架构雏形就在你面前了。
>
> 遵循以上过程，这门课的设计思路也就诞生了。
>
> 总结一下的话，我希望这个专栏能带给你这样几点收获：
>
> 1. 用浅显易懂的案例带你了解 DDD 必知必会的 10 大核心概念，深入设计思想，厘清各知识域之间的关系；
> 2. 用 DDD 分层架构带你弄懂微服务架构各层之间的关系，并完成微服务分层和代码模型设计；
> 3. 用 DDD 战略设计和事件风暴带你完成领域建模和企业级中台业务建模；
> 4. 用一个典型的案例带你完整走一遍 DDD 战略设计和战术设计的全流程，学习 DDD 在领域模型和微服务设计过程中的技术要点；
> 5. 带你深化微服务架构设计原则和注意事项，建立适应你公司技术能力和文化的微服务，建立演进式的微服务架构。


![Screenshot 2023-01-24 at 12.41.07 AM](../../../../../../../Assets/Pics/Screenshot%202023-01-24%20at%2012.41.07%20AM.png)



## Ref

[领域驱动设计(DDD)-基础思想 - Ebiubiu的文章 - 知乎]: https://zhuanlan.zhihu.com/p/109114670
[DDD 领域驱动设计：贫血模型、充血模型的深入解读！]: https://cloud.tencent.com/developer/article/1787209
[什么是DDD（领域驱动设计）？ 这是我见过最容易理解的一篇关于DDD 的文章了 - 终端研发部的文章 - 知乎]: https://zhuanlan.zhihu.com/p/361427612
