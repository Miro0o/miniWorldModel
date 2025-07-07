# Serverless

[TOC]



## Res


## Intro


## Ref
[是微服务架构不香还是云不香？| Coolshell]: https://coolshell.cn/articles/22422.html#comments

这两天技术圈里热议的一件事就是Amazon的流媒体平台Prime Video在2023年3月22日发布了一篇技术博客《[规模化Prime Video的音视频监控服务，成本降低90%](https://www.primevideotech.com/video-streaming/scaling-up-the-prime-video-audio-video-monitoring-service-and-reducing-costs-by-90 "Scaling up the Prime Video audio/video monitoring service and reducing costs by 90%")》，副标题：“**从分布式微服务架构到单体应用程序的转变有助于实现更高的规模、弹性和降低成本**”，有人把这篇文章在五一期间转到了[reddit](https://www.reddit.com/r/programming/comments/137alxn/prime_video_switched_from_serverless_to_ec2_and/) 和 [hacker news](https://news.ycombinator.com/item?id=35811741) 上，在Reddit上热议。这种话题与业内推崇的微服务架构形成了鲜明的对比。从“微服务架构”转“单体架构”，还是Amazon干的，这个话题足够劲爆。然后DHH在刚[喷完Typescript](https://twitter.com/dhh/status/1655076668787097607)后继续发文《[即便是亚马逊也无法理解Servless或微服务](https://world.hey.com/dhh/even-amazon-can-t-make-sense-of-serverless-or-microservices-59625580)》，继续抨击微服务架构，于是，瞬间引爆技术圈，登上技术圈热搜。

今天上午有好几个朋友在微信里转了三篇文章给我，如下所示：
-《[微服务是不是个蠢主意？](https://mp.weixin.qq.com/s/mEmz8pviahEAWy1-SA8vcg)》
-《[单体回归？亚马逊放弃用于视频监控的微服务](https://mp.weixin.qq.com/s/7zm5YyeZhQ2mu2TJvOK5tQ) 》
-《[从微服务转为单体架构、成本降低 90%，亚马逊内部案例引发轰动](https://mp.weixin.qq.com/s/fQtAMf4BfJxdBPWDE5ygwg)》

看看这些标题就知道这些文章要的是流量而不是好好写篇文章。看到第二篇，你还真当 Prime Video 就是 Amazon 的全部么？然后，再看看这些文章后面的跟风评论，我觉得有 80%的人只看标题，而且是连原文都不看的。所以，我想我得写篇文章了……

...

好了，原文解读完了，你有自己的独立思考了吗？下面是我的独立思考，供你参考：
1）**AWS 的 Serverless 也好， 微服务也好，单体也好，在合适的场景也都很香**。这就跟汽车一样，跑车，货车，越野车各有各的场景，你用跑车拉货，还是用货车泡妞都不是一个很好的决定。

2）**这篇文章中的这个例子中的业务太过简单了，本来就是一两个服务就可以干完的事。** 就是一个转码加分析的事，要分开的话，就两个微服务就好了（一个转码一个分析），做成流式的。如果不想分，合在一起也没问题了，这个粒度是微服务没毛病。微服务的划分有好些原则，我这里只罗列几个比较重要的原则：
- **边界上下文**。微服务的粒度不能大于领域驱动里的 Bounded Context（具体是什么 大家自行 Google），也就是一个业务域。
- **单一职责，高内聚，低耦合**。把因为相同原因变化的合在一起（内聚），把不同原因变化的分开（解耦）
- **事务和一致性**。对于两个重度依赖的功能，需要完成一个事务和要保证强一致性的，最好不要拆开，要放在一起。
- **跟组织架构匹配**。把同一个团队的东西放在一起，不同团队的分开。

3）**Prime Video 遇到的问题不是技术问题，而是 AWS  Step Function 处理能力不足，而且收费还很贵的问题**。这个是 AWS 的产品问题，不是技术问题。或者说，这个是Prime Video滥用了Step Function的问题（本来这种大量的数据分析处理就不适合Step Function）。所以，大家不要用一个产品问题来得到微服务架构有问题的结论，这个没有因果关系。**试问，如果 Step Funciton 可以无限扩展，性能也很好，而且白菜价，那么 Prime Video 团队还会有动力改成单体吗？他们不会反过来吹爆 Serverless 吗？**

4）Prime Video 跟 AWS 是两个独立核算的公司，就像 Amazon 的电商和 AWS 一样，也是两个公司。Amazon 的电商和 AWS 对服务化或是微服务架构的理解和运维，我个人认为这个世界上再也找不到另外一家公司了，包括 Google 或 Microsoft。你有空可以看看本站以前的这篇文章《[Steve Yegg对Amazon和Google平台的吐槽](https://coolshell.cn/articles/5701.html "SteveY对Amazon和Google平台的吐槽")》你会了解的更多。

5）**Prime Video 这个案例本质上是“下云”，下了 AWS Serverless 的云**。云上的成本就是高，一个是费用问题，另一个是被锁定的问题。Prime Video 团队应该很庆幸这个监控系统并不复杂，重写起来也很快，所以，可以很快使用一个更传统的“服务化”+“云计算”的分布式架构，不然，就得像 DHH 那样咬牙下云——《[Why We’re Leaving the Cloud](https://world.hey.com/dhh/why-we-re-leaving-the-cloud-654b47e0)》（他们的 SRE 的这篇博文 [Our Cloud Spend in 2022](https://dev.37signals.com/our-cloud-spend-in-2022/)说明了下云的困难和节约了多少成本）


