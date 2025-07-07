# Dev(Sec)Ops (Application Level Engineering)

[TOC]



## Res
🗺️ https://landscape.cd.foundation


### Related Topics
↗ [Project Cooperation & Team Messaging](../../../🔑%20CS%20Core/Generic%20Software%20Tools%20&%20Projects/Project%20Cooperation%20&%20Team%20Messaging/Project%20Cooperation%20&%20Team%20Messaging.md)


### Learning Resources
🎞 [DevOps -- 马士兵](https://www.bilibili.com/video/BV13Y411E7nd?share_source=copy_web)


### Projects
[moby project](https://mobyproject.org/projects/)
Moby is an open-source project, created by Docker, to enable and accelerate software containerization.



## Intro
### Agile Development
[什么是敏捷开发 -- 阮一峰](https://www.ruanyifeng.com/blog/2019/03/agile-development.html)

> [agile manifesto](https://agilemanifesto.org)


### DevOps
[DevOps概念，文化](https://doc.devpod.cn/devops/devops-9732257.html)


![Screen Shot 2022-06-29 at 2.45.09 PM](../../../../Assets/Pics/Screen%20Shot%202022-06-29%20at%202.45.09%20PM.png)

![](../../../../Assets/Pics/Screen%20Shot%202022-06-29%20at%202.50.46%20PM.png)

![](../../../../Assets/Pics/Screen%20Shot%202022-06-29%20at%202.54.40%20PM.png)

![Screen Shot 2022-06-29 at 2.58.40 PM](../../../../Assets/Pics/Screen%20Shot%202022-06-29%20at%202.58.40%20PM.png)



## Refs
[了解 DevOps -- RedHat](https://www.redhat.com/zh/topics/devops#持续部署)

[什么是DevOps -- 知乎](https://www.zhihu.com/question/58702398)

[万字长文带你彻底搞懂什么是 DevOps](https://dockone.io/article/2434765)

[8 种基本软件开发模型：选择哪一种？](https://cloud.tencent.com/developer/article/1724043)


[DevOps toolchain]: https://library.prof.wang/handbook/h/hdbk-MWnS99ThmLVDi7U5mVFrB9

`项目管理（PM）`：jira。运营可以上去提问题，可以看到各个问题的完整的工作流，待解决未解决等；https://zhuanlan.zhihu.com/p/44837233

`代码管理`：gitlab。jenkins或者K8S都可以集成gitlab，进行代码管理，上线，回滚等；

`持续集成CI（Continuous Integration）`：[gitlab ci](https://www.zhihu.com/search?q=gitlab+ci&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A1755254160})。开发人员提交了新代码之后，立刻进行构建、（单元）测试。根据测试结果，我们可以确定新代码和原有代码能否正确地集成在一起。

`持续交付CD（Continuous Delivery）`：[gitlab cd](https://www.zhihu.com/search?q=gitlab+cd&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A1755254160})。完成单元测试后，可以把代码部署到连接数据库的 Staging 环境中更多的测试。如果代码没有问题，可以继续手动部署到生产环境中。

`代码检测`： SonarQube,  [7 个顶级静态代码分析工具](https://www.infoq.cn/article/w0dqwy4dwzxyixbaxl5d) [代码检查、评审、单元测试工具 大搜集](https://blog.csdn.net/sinat_27382047/article/details/102485270)

`镜像仓库`：VMware Harbor，私服nexus。

`容器`：Docker。

`编排`：K8S。

`服务治理`：Consul。

`容器平台`： Rancher

`镜像扫描`：Clairctl

`脚本语言`：Python

`日志管理`：Cat+Sentry，还有种常用的是ELK/EFK

`系统监控`：Prometheus

`负载均衡`：Nginx

`网关`：Kong，zuul

`链路追踪`：Zipkin

`服务注册与发现`：etcd

`产品和UI图`：[蓝湖](https://www.zhihu.com/search?q=蓝湖&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A1755254160})

`公司内部文档`：Confluence

`报警`：推送到工作群 