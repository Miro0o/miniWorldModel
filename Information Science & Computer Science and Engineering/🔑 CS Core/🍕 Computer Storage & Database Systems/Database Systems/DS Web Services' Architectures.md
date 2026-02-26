# DS Web Services' Architectures

[TOC]



## Res
### Related Topics
↗ [Network Application Communication Architectures](../../🏎️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x01%20Application%20Layer/Network%20Application%20Communication%20Architectures.md)

↗ [Web Application Systems & Architecture Design](../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20Web%20Development%20&%20The%20Internet/Web%20Application%20Systems%20&%20Architecture%20Design/Web%20Application%20Systems%20&%20Architecture%20Design.md)
↗ [Web Development & The Internet](../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20Web%20Development%20&%20The%20Internet/Web%20Development%20&%20The%20Internet.md)



## DS Architectures in Web
> [!links]
> ↗ [Web Application Systems & Architecture Design](../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20Web%20Development%20&%20The%20Internet/Web%20Application%20Systems%20&%20Architecture%20Design/Web%20Application%20Systems%20&%20Architecture%20Design.md)
> ↗ [Web Application System Architecture Design Pattern](../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20Web%20Development%20&%20The%20Internet/Web%20Application%20Systems%20&%20Architecture%20Design/Web%20Application%20System%20Architecture%20Design%20Pattern/Web%20Application%20System%20Architecture%20Design%20Pattern.md)
> 
> ↗ [Enterprise Architecture Modeling](../../../Information%20Systems%20&%20System%20Architecture%20Design/👨🏻‍🔧%20Enterprise%20Architecture%20(EA)%20&%20Requirement%20Engineering%20(RE)/Enterprise%20Architecture%20Modeling/Enterprise%20Architecture%20Modeling.md)


### Mainframe Architecture
![](../../../../../Assets/Pics/Pasted%20image%2020230306154507.png)

| Advantages of Mainframe Architecture | Disadvantages of Mainframe Architecture |
| - | - |
| Large number of concurrent users | Does not take advantage of local computer processing power |
| Able to handle very large volume of transactions | Does not take advantage of local computer processing power |
| Suitable for slow network environments | Does not take advantage of local computer processing power |
| Central location of both application | Hardware is relatively expensive |
| Character-based interface | DBMS makes maintenance relatively simple |


### Desktop Architecture
![|500](../../../../../Assets/Pics/Pasted%20image%2020230306155045.png)

| Advantages of Mainframe Architecture | Disadvantages of Mainframe Architecture |
| - | - |
| Inexpensive to acquire | Only available to a single user at a time |
| Easy to configure | Only available at a single computer|
| Requires few resources to operate | May impose limits on how data can be stored |


### File Server Architecture
![](../../../../../Assets/Pics/Pasted%20image%2020230306155115.png)

| Advantages of Mainframe Architecture | Disadvantages of Mainframe Architecture |
| - | - |
| Inexpensive to acquire | Only viable for a limited number of users, perhaps 10 or fewer |
| Easy to configure | Query performance declines quickly as the amount of data increases |
| Low-cost option for multi-user concurrency | Multiple installation of both application software and DBMS can lead to version control issues for both |


### Client/Server Architecture (Traditional Two-Tier C/S)
![](../../../../../Assets/Pics/Pasted%20image%2020230306155216.png)

![](../../../../../Assets/Pics/Screenshot%202023-03-06%20at%208.09.02%20PM.png)

| Advantages of Mainframe Architecture | Disadvantages of Mainframe Architecture |
| - | - |
| Makes good use of processing power of multiple computers | Application software is distributed, possibly leading to version control issues |
| Handles large amounts of both data and transactions | DBMS software is relatively expensive compared to the file-server approach |
| Can support thousands of concurrent users |  |



### Web Architecture (Three-Tier C/S, MVC)
![](../../../../../Assets/Pics/Pasted%20image%2020230306155344.png)

![](../../../../../Assets/Pics/Screenshot%202023-03-06%20at%208.09.30%20PM.png)


> 🔗 More of Modle-View-Control architecture is at [MVC (Model–View–Controller)](../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20Web%20Development%20&%20The%20Internet/Web%20Application%20Systems%20&%20Architecture%20Design/Web%20Application%20System%20Architecture%20Design%20Pattern/MVC%20(Model–View–Controller).md)

| Advantages of Mainframe Architecture                                          | Disadvantages of Mainframe Architecture                             |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| All advantages of the client/server architecture                              | Adds another layer of complexity (web server)                       |
| Increased ease of application version control                                 | Various software apps must keep synchronized with database software |
| Very good at handling intermittent use from large numbers of users (millions) | Upgrades in browsers may require changes to application             |
#### Application Server
#TODO 

> 一个应用服务器必须处理以下若千复杂的问题:
> 
> - 并发
> - 网络连接管理
> - 提供对所有数据库服务器的访问
> - 数据库连接池
> - 支持遗留数据库
> - 支持集群
> - 负载平衡
> - 失效备援


### N-Tier C/S Architecture
![](../../../../../Assets/Pics/Pasted%20image%2020230306201808.png)

#TODO 


#### Middleware
↗ [Software Engineering /Middleware](../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20Web%20Development%20&%20The%20Internet/🗄️%20Web%20BackEnd%20Dev%20&%20Middleware/Web%20Dev%20Middleware/Web%20Dev%20Middleware.md)
↗ [TP Monitor](../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20Web%20Development%20&%20The%20Internet/Web%20Software%20Maintenance%20&%20Operations%20Management/Monitoring%20&%20Analyzing/TP%20Monitor.md)



## 🔥 Web & SOA
#TODO 



## 🕸️ Distributed DBMS
↗ [Architecture Design /Distributed Systems](../../../🧠%20Computing%20Methodologies/Distributed%20Computing%20&%20Systems/Distributed%20Computing%20&%20Systems.md)



## 🍧 Data Warehouse
#TODO 

数据库 与 数据仓库的本质区别是什么？ - 陈诚的回答 - 知乎 https://www.zhihu.com/question/20623931/answer/139842331



## ☁ Cloud Computing
↗ [Cloud Computing](../../../Software%20Engineering/☁️%20Cloud%20Computing%20&%20Cloud%20Native/🌵%20Cloud%20Native%20Overview/🗿%20Cloud%20Models/Cloud%20Service%20(Delivery)%20Models/SaaS%20(Software%20as%20a%20Service)/Cloud%20Computing/Cloud%20Computing.md)



## Database System Design
↗ [Database System Design](⚜️%20Database%20System%20Design/Database%20System%20Design.md)



## Ref
[Database Architectures]: https://app.myeducator.com/reader/web/617b/chapter01/gj149/
[What is N-Tier Architecture? How It Works, Examples, Tutorials, and More]: https://stackify.com/n-tier-architecture/

[🎬 FAANG System Design Interview: Design A Location Based Service (Yelp, Google Places)]: https://youtu.be/M4lR_Va97cQ?si=bPMFe72FL9T5QhdQ