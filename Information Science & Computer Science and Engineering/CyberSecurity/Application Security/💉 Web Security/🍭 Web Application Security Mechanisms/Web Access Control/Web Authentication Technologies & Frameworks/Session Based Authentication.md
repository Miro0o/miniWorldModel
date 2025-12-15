# Session Based Authentication

[TOC]



## Res


## Intro


## Session + Cookie


## Session + Header
> Header + Session 相较 Cookie + Session 的优缺点：
> 
> **好处**：
> - **防止跨站脚本攻击（XSS）**：使用 Cookie 存储会话 ID 的话，Cookie 是通过浏览器自动管理的，容易受到 XSS 攻击的影响。而将会话 ID 存储在头部，可以避免这种攻击。
> - **避免 CSRF 攻击**：使用 Cookie 存储会话 ID 的话，攻击者可以利用 CSRF 攻击来获取 Cookie 中的会话 ID，从而伪造用户请求。将会话 ID 存储在头部的话，可以避免这种攻击。
> - **不受第三方 Cookie 支持的限制**：如果用户的浏览器禁用了第三方 Cookie，那么使用 Cookie + Session 的方式就无法使用。而将会话 ID 存储在头部，不需要使用 Cookie，不受这个限制。
> 
> **缺点：** 
> - 会话 ID 存储在头部，可能被重放攻击利用
> - 执行性能代价较高：由于 HTTP 头比 Cookie 更大，因此将会话 ID 存储在头部通常会占用更多的网络资源，增加传输延迟。
> 
> 因此，应该根据具体的应用场景、协议、需求和安全要求来选择合适的身份认证方式。
> 
> 🔗 [一文搞懂Session和JWT登录认证](https://segmentfault.com/a/1190000043668512)



## Session 🆚 JWT


> **两者的不同**：
> 
> - **存储位置** Session 信息是存储在服务端的，而 JWT 将认证信息存储在客户端的 Token 中。
> - **是否需要状态**：Session 基于状态来维护会话，如果会话状态丢失或者被篡改，服务器将会重新初始化会话。而 JWT 身份认证机制是无状态的，每个请求均包含足够的信息，服务器不需要维持任何状态。这一点使得 JWT 身份认证机制特别适合于分布式系统。
> - **安全性**：Session 是基于某种算法生成的 Session ID 来维护用户状态的，如果 Session ID 被窃取或者伪造，会话会受到攻击，凭证会失效。而 JWT 通过签名来防止伪造和篡改，只有在经过验证后才能使用。
> - **扩展性** Session 方案一般适用于单一的服务或者单个应用，而 JWT 身份认证机制适用于跨域、分布式服务调用等多场景。
> 
> 其实Session认证更适合我们平时的场景，可以看这篇文章，讲得很好[https://www.796t.com/content/1546004284.html](https://link.segmentfault.com/?enc=uWQgeODuQEelqD9eKGkUyg%3D%3D.GyXyeGuU6tsyugZmeK%2BrFc4k4XMJqId3cN29SO%2BxIRxbZCGigV9auC9n4Gg2ppEj)
> 
> JWT更适合一次性操作的认证:，颁发一个有效期极短的JWT，即使暴露了危险也很小，由于每次操作都会生成新的JWT，因此也没必要储存JWT，真正实现无状态。  
> 例如: 服务B你好, 服务A告诉我，我可以操作<JWT内容>, 这是我的凭证（即JWT）
> 
> 🔗 [一文搞懂Session和JWT登录认证](https://segmentfault.com/a/1190000043668512)




## Ref

