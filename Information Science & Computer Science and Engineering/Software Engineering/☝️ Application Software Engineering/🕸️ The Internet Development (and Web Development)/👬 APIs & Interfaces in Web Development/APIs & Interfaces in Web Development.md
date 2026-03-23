# APIs & Interfaces in Web Development

[TOC]



## Res
📂 [Web APIs | Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/API)


### Related Topics
↗ [API (Application Program Interface)](../../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Interfaces%20&%20Hardware%20Drivers/API%20(Application%20Program%20Interface).md)
↗ [API Testing](../../../🎭%20Software%20Quality%20Assurance%20(SQA)/🧪%20Software%20Testing/Types%20of%20Software%20Testing/Integration%20Test/API%20Testing/API%20Testing.md)
↗ [API Gateway](../../../☁️%20Cloud%20Computing%20&%20Cloud%20Native/Cloud%20Operating%20System%20&%20Platform%20(System%20Level%20Engineering)/Orchestration%20&%20Management/API%20Gateway/API%20Gateway.md)
↗ [Web API Security](../../../../CyberSecurity/Application%20Security/💉%20Web%20Security/🍭%20Web%20Application%20Security%20Mechanisms/Web%20API%20Security/Web%20API%20Security.md)
↗ [API Dev Tool Chain](../../../CASE%20(Computer-Aided%20Software%20Engineering)%20Tools/Lower%20CASE%20Tools/API%20Dev%20Tool%20Chain/API%20Dev%20Tool%20Chain.md)

↗ [CGI (Common Gateway Interface)](Web%20Server%20Side%20API/CGI%20(Common%20Gateway%20Interface).md)
- ↗ [WSGI (Web Server Gateway Interface)](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/🚠%20Application%20Runtimes%20&%20SDKs/Python%20Runtime%20Environments/📌%20Python%20Third-party%20Libs/SE%20&%20Web/WSGI%20(Web%20Server%20Gateway%20Interface).md)

↗ [Remote Procedure Call (RPC)](../../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20IO%20System/IO%20Generality%20(via%20Abstraction)/🛜%20Network%20Sockets/Remote%20Procedure%20Call%20(RPC).md)
↗ [Network Programming & RPC](../../../../🔑%20CS%20Core/🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/Network%20Programming%20&%20RPC/Network%20Programming%20&%20RPC.md)

↗ [0x01 Application Layer](../../../../🔑%20CS%20Core/🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x01%20Application%20Layer/0x01%20Application%20Layer.md)
↗ [0x02 Presentation Layer (Syntax Layer)](../../../../🔑%20CS%20Core/🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x02%20Presentation%20Layer%20(Syntax%20Layer)/0x02%20Presentation%20Layer%20(Syntax%20Layer).md)
- ↗ [(Object) Serialization & Deserialization](../../../../🔑%20CS%20Core/🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x02%20Presentation%20Layer%20(Syntax%20Layer)/(Object)%20Serialization%20&%20Deserialization/(Object)%20Serialization%20&%20Deserialization.md)
↗ [0x03 Session Layer](../../../../🔑%20CS%20Core/🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x03%20Session%20Layer/0x03%20Session%20Layer.md)

↗ [Cloud Computing & Cloud Native](../../../☁️%20Cloud%20Computing%20&%20Cloud%20Native/Cloud%20Computing%20&%20Cloud%20Native.md)

↗ [GraphQL](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20for%20Specific%20Areas/Database%20Languages/🦆%20Query%20Languages%20(Data%20Query%20Languages,%20DQL)/GraphQL/GraphQL.md)



## Intro
> 🔗 https://en.wikipedia.org/wiki/Web_API

A **web API** is an [application programming interface](https://en.wikipedia.org/wiki/Application_programming_interface "Application programming interface") (API) for either a [web server](https://en.wikipedia.org/wiki/Web_server "Web server") or a [web browser](https://en.wikipedia.org/wiki/Web_browser "Web browser"). 
- As a [web development](https://en.wikipedia.org/wiki/Web_development "Web development") concept, it can be related to a [web application](https://en.wikipedia.org/wiki/Web_application "Web application")'s [client side](https://en.wikipedia.org/wiki/Client_side "Client side") (including any [web frameworks](https://en.wikipedia.org/wiki/Web_framework "Web framework") being used). 
- A [server-side](https://en.wikipedia.org/wiki/Server-side "Server-side") web API consists of one or more publicly exposed **endpoints** to a defined [request–response](https://en.wikipedia.org/wiki/Request%E2%80%93response "Request–response") message system, typically expressed in [JSON](https://en.wikipedia.org/wiki/JSON "JSON") or [XML](https://en.wikipedia.org/wiki/XML "XML") by means of an [HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol "Hypertext Transfer Protocol")-based [web server](https://en.wikipedia.org/wiki/Web_server "Web server"). 
- A [server API](https://en.wikipedia.org/wiki/Server_application_programming_interface "Server application programming interface") (SAPI) is NOT CONSIDERED a server-side web API, unless it is publicly accessible by a remote web application.

![](../../../../../Assets/Pics/Screenshot%202025-03-20%20at%2014.46.38.png)



## Ref
[Web API | Wikipedia]: https://en.wikipedia.org/wiki/Web_API

[Best API documentation tools you need]: https://medium.com/@ezinneanne/best-api-documentation-tools-you-need-cf3ef2c47e89
- Swagger
- Postman
- ==Readme==
- Stoplight
- Redocly
- Document360

[网关有哪些？API网关、流量网关、业务网关 |CSDN]: http://t.csdnimg.cn/OTIQ7

1、流量网关：
	流量网关主要用于控制和管理网络流量，包括负载均衡、流量限制、数据过滤等功能。它通常位于网络架构中的最前端，作为应用程序和网络之间的入口。 流量网关的主要作用是确保网络的可用性和可靠性。
2、API网关
	API网关主要用于管理和控制API的访问，提供API的管理、认证、授权、监视等功能。同时还提供API的转换、聚合、过滤器等服务。API网关通常位于架构的中心，作为应用程序和后端服务之间的接口层。
3、业务网关
	业务网关主要用于连接企业内部系统和外部服务，包括企业内部系统之间、企业内部系统和外部云服务之间、企业内部系统和第三方应用程序之间等。它提供服务发现、路由、协议转换、安全性、可靠性等各种功能。业务网关的主要作用是简化复杂的IT环境，提高系统的互操作性和可扩展性。

[🤔 亿级流量架构网关设计思路，常用网关对比，写得太好了。。（2）]: https://developer.aliyun.com/article/1036809

![](../../../../../../../Assets/Pics/Pasted%20image%2020240908130749.png)

|                          |                                       |                              |                                                          |                               |                        |                         |
| ------------------------ | ------------------------------------- | ---------------------------- | -------------------------------------------------------- | ----------------------------- | ---------------------- | ----------------------- |
| 网关                       | 限流                                    | 鉴权                           | 监控                                                       | 易用性                           | 可维护性                   | 成熟度                     |
| **Spring Cloud Gateway** | 可以通过IP，用户，集群限流，提供了相应的接口进行扩展           | 普通鉴权、auth2.0                 | Gateway Metrics Filter                                   | 简单易用                          | spring系列可扩展强，易配置 可维护性好 | spring社区成熟，但gateway资源较少 |
| **Zuul2**                | 可以通过配置文件配置集群限流和单服务器限流亦可通过filter实现限流扩展 | filter中实现                    | filter中实现                                                | 参考资料较少                        | 可维护性较差                 | 开源不久，资料少                |
| **OpenResty**            | 需要lua开发                               | 需要lua开发                      | 需要开发                                                     | 简单易用，但是需要进行的lua开发很多           | 可维护性较差，将来需要维护大量lua脚本   | 很成熟资料很多                 |
| **Kong**                 | 根据秒，分，时，天，月，年，根据用户进行限流。可在原码的基础上进行开发   | 普通鉴权，Key Auth鉴权，HMAC，auth2.0 | 可上报datadog，记录请求数量，请求数据量，应答数据量，接收于发送的时间间隔，状态码数量，kong内运行时间 | 简单易用，api转发通过管理员接口配置，开发需要lua脚本 | "可维护性较差，将来需要维护大量lua库   | 相对成熟，用户问题汇总，社区，插件开源     |
