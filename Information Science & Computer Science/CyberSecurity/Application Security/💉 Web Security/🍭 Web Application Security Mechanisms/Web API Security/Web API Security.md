# Web API Security

[TOC]



## Res
### Related Topics
↗ [API (Application Program Interface)](../../../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Interfaces%20&%20Hardware%20Drivers/API%20(Application%20Program%20Interface).md)

↗ [API Testing](../../../../../Software%20Engineering/🎭%20Software%20Quality%20Assurance%20(SQA)/🧪%20Software%20Testing/Types%20of%20Software%20Testing/Integration%20Test/API%20Testing/API%20Testing.md)
↗ [API Gateway](../../../../../Software%20Engineering/☁️%20Cloud%20Computing%20&%20Cloud%20Native/Cloud%20Operating%20System%20&%20Platform%20(System%20Level%20Engineering)/Orchestration%20&%20Management/API%20Gateway/API%20Gateway.md)
↗ [APIs & Interfaces in Web Development](../../../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20Web%20Development%20&%20The%20Internet/👬%20APIs%20&%20Interfaces%20in%20Web%20Development/APIs%20&%20Interfaces%20in%20Web%20Development.md)

↗ [WSGI (Web Server Gateway Interface)](../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/🚠%20Application%20Runtimes%20&%20SDKs/Python%20Runtime%20Environments/📌%20Python%20Third-party%20Libs/SE%20&%20Web/WSGI%20(Web%20Server%20Gateway%20Interface).md)



## Intro



## Ref
[Web API 渗透测试指南]: https://blog.hackall.cn/pentest/1222.html
- [概述](https://blog.hackall.cn/pentest/1222.html#cl-1)
    - [API的基本概念](https://blog.hackall.cn/pentest/1222.html#cl-2)
    - [API的作用](https://blog.hackall.cn/pentest/1222.html#cl-3)
    - [API的类型](https://blog.hackall.cn/pentest/1222.html#cl-4)
- [Web API 渗透测试](https://blog.hackall.cn/pentest/1222.html#cl-5)
    - [测试工具](https://blog.hackall.cn/pentest/1222.html#cl-6)
    - [信息收集](https://blog.hackall.cn/pentest/1222.html#cl-7)
    - [漏洞检测](https://blog.hackall.cn/pentest/1222.html#cl-8)
    - [实战案例](https://blog.hackall.cn/pentest/1222.html#cl-9)
        - [接口枚举](https://blog.hackall.cn/pentest/1222.html#cl-10)
        - [参数枚举](https://blog.hackall.cn/pentest/1222.html#cl-11)
        - [用户名枚举](https://blog.hackall.cn/pentest/1222.html#cl-12)
        - [暴力破解](https://blog.hackall.cn/pentest/1222.html#cl-13)
        - [错误信息泄露](https://blog.hackall.cn/pentest/1222.html#cl-14)
        - [CRLF注入](https://blog.hackall.cn/pentest/1222.html#cl-15)

常用的Web API有：

|API类型|描述|优点|适用场景|
|---|---|---|---|
|RESTful API|REST是一种软件架构风格，用于设计网络应用程序。RESTful是基于HTTP协议的遵循REST的**API风格**。使用标准HTTP方法操作资源，数据格式常为JSON或XML。|扩展性好、可维护性强|大多数Web服务和应用程序|
|GraphQL API|GraphQL是一种用于API的**查询语言**，由Facebook在2015年开源。GraphQL API是使用GraphQL查询语言和运行时构建的API。允许客户端指定所需数据的精确结构，通过**单个端点（URL）**处理复杂查询。|高灵活性、高效率|复杂查询、减少数据过多或不足的问题|
|gRPC API|gRPC是由Google开发的一个高性能、开源的远程过程调用（RPC）框架，使用HTTP/2进行通信，并通过Protocol Buffers（protobuf）进行数据序列化。gRPC API是使用gRPC框架构建的API。|低延迟、高吞吐量|需要高性能和高效通信的系统|
|JSON-RPC API|使用JSON格式进行编码的RPC协议，通过HTTP或WebSocket通信，支持双向通信。|轻量级、实时应用|简单、轻量级API，实时应用|
|SOAP API|SOAP（Simple Object Access Protocol，简单对象访问协议）是一种基于XML的协议，用于在网络上交换结构化信息。SOAP API是基于SOAP协议实现的API。|高级安全性、事务支持|企业级应用、需要高级功能的系统|
|OData API|OData（Open Data Protocol）是用于查询和更新数据的协议，基于REST架构，提供标准化的数据访问接口。OData API是使用此协议实现的API。|简化CRUD操作|企业数据集成和共享|
|HATEOAS API|HATEOAS（Hypermedia as the Engine of Application State）是一种RESTful API设计原则，HATEOAS的核心思想是通过超媒体（例如链接）将客户端引导到可以进行的下一步操作，而不是依赖于硬编码的URL或其他客户端。|增强自描述性和导航性|复杂系统的自发现和自适应|
|WebSub API|WebSub（以前称为 PubSubHubbub）是一种用于Web上实现实时通知和推送更新的协议。它基于发布/订阅（Pub/Sub）模式，使得发布者可以将更新推送到订阅者，而不需要订阅者不断轮询发布者获取更新。|低延迟通知|RSS/Atom feed的实时更新|
|Falcor API|Falcor 是一个用于构建高效数据获取和管理的 JavaScript 库，由 Netflix 开发。它提供了一种简化的数据访问模型，使客户端能够通过统一的 API 请求所需的数据，并处理复杂的数据获取逻辑。|高效数据传输、灵活查询|需要高效数据传输和灵活查询的应用|
|XML-RPC API|XML-RPC 是一种简单的远程过程调用（RPC）协议，它使用 XML 作为数据编码格式，通过 HTTP 协议进行通信。|简单、易于实现|需要与老旧系统或不同平台互操作的应用|
|WSDL API|WSDL（Web Services Description Language）是一种用于描述 Web 服务的标准格式。它基|

|测试项|测试方法|
|---|---|
|接口枚举|根据接口命名规则进行枚举，获取一些隐藏接口，如当前用户无权限或暂时未使用到的接口|
|参数枚举|根据参数命名规则可以枚举接口的隐藏参数或隐藏接口的参数|
|敏感信息泄露|响应中是否返回明文或Base64等可恢复明文的编码技术编码后的密码、密钥等|
|SQL注入|对参数进行SQL注入测试，手工测试或使用sqlmap等工具，通常盲注多一些|
|XSS|构造XSS Payload对参数进行测试，检查响应是否包含未过滤或未转义的XSS数据|
|命令注入|对参数进行命令注入测试，检查是否可以注入成功，通常无回显|
|SSRF|构造SSRF Payload对参数进行测试，检查是否存在SSRF漏洞|
|任意文件读取/下载|对文件内容读取或下载的接口进行测试，检查是否存在漏洞|
|任意文件上传|对文件上传功能进行测试，检查是否可以上传任意文件或绕过限制上传其它文件|
|路径穿越|对文件读取、下载、上传等功能的接口进行路径穿越测试，检查是否未可以造成路径穿越|
|XXE|对传递的数据为XML数据的API接口参数中注入XXE Payload，检查是否存在XXE漏洞|
|反序列化|对于Json类型API接口，构造畸形Json数据，检查响应是否包含fastjson等组件名称和版本信息，进一步检测是否存在反序列化漏洞|
|CRLF注入|查看参数是否被添加到HTTP响应中，构造包含CRLF的数据尝试注入HTTP响应头|
|错误信息泄露|通过在参数中插入特殊字符、访问不存在的API接口或构造畸形数据使服务端返回错误响应，查看报错信息中是否包含服务器代码信息、数据库连接信息、SQL语句、框架和组件信息或者敏感文件的路径等信息。|
|拒绝服务|构造超长字符串对Header或参数进行测试，检测服务器是否拒绝服务|
|用户名枚举|使用用户名密码登录失败是否提示“用户不存在”等信息|
|暴力破解|检查是否有锁定机制，或防重放机制，防止暴力破解|
|令牌伪造|检查令牌随机性，是否容易伪造，是否使用JWT弱密码等|
|令牌有效期过长|检查令牌是否长时间（超过2小时）有效|
|令牌重用|会话注销后，检查令牌是否仍然可以重复使用|
|MFA绕过|删除或修改多因素认证步骤中的部分数据包，检查是否可以绕过多因素认证|
|任意密码修改/重置|检查密码修改/重置机制的安全性，是否可以绕过认证修改/重置任意用户密码|
|未授权访问|删除令牌后，检查是否仍然可以访问需要授权的资源|
|不安全的直接对象引用 (IDOR)|通过直接引用对象 ID 来访问未授权的数据|
|业务流程跨越|绕过正常的业务流程，查看是否存在漏洞|
|越权|修改请求参数的用户ID或角色ID，检查是否可以越权访问其他用户信息或高权限资源|

