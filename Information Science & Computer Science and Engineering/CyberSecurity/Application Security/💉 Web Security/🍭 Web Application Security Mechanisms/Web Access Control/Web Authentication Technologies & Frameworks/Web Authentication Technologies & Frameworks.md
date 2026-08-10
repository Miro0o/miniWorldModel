# Web Authentication Technologies & Frameworks

[TOC]



## Res
### Related Topics
↗ [Identity Cloud](../../../../../../Software%20Engineering/☁️%20Cloud%20Computing%20&%20Cloud%20Native/🌵%20Cloud%20Native%20Overview/🗿%20Cloud%20Models/Cloud%20Service%20(Delivery)%20Models/SaaS%20(Software%20as%20a%20Service)/Identity%20Cloud/Identity%20Cloud.md)
↗ [Authentication (身份鉴别)](../../../../../⛈️%20Risk%20Management%20(In%20Cyberspace)/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Identity%20&%20Access%20Management%20(IAM)/Access%20Control%20(访问控制)/Authentication%20(身份鉴别)/Authentication%20(身份鉴别).md)

↗ [HTTP Authentication](../../../../../../🔑%20CS%20Core/🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x01%20Application%20Layer/🔥%20Web%20(WWW)%20Protocols/HTTP%20(HyperText%20Transfer%20Protocol)/HTTP%20Advanced%20Controls/HTTP%20Authentication.md)
↗ [HTTP Access Control (CORS)](../../../../../../🔑%20CS%20Core/🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x01%20Application%20Layer/🔥%20Web%20(WWW)%20Protocols/HTTP%20(HyperText%20Transfer%20Protocol)/HTTP%20Advanced%20Controls/HTTP%20Access%20Control%20(CORS).md)

↗ [SAML (Security Assertion Markup Language)](../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/DSL(Domain%20Specific%20Languages)/Security%20DSL/SAML%20(Security%20Assertion%20Markup%20Language).md)


### Other Resources



## Intro
### Authentication Protocols Process
典型身份鉴别协议的基本过程: 
(1)注册
(2)登录 
(3)鉴别
(4)口令修改
(5)注销(选)


### Basic Authentication
> 🔗 https://shiva-rrad.medium.com/understanding-the-different-methods-of-authentication-and-authorization-2534de1a77f6

Basic Authentication is a simple method of authentication where the user provides their username and password in the HTTP header of each request. The server verifies the credentials and grants access if they are valid. This HTTP-based approach uses a Base64 format to encode usernames and passwords, which are stored in the HTTP header. However, sensitive credentials can travel between systems unencrypted, making it necessary to use Secure Sockets Layer (SSL) and Transport Layer Security (TLS) channels when sharing data between multiple web applications.

With Basic Authentication, login credentials are sent in the request headers with each request. Usernames and passwords are concatenated together using a : symbol to form a single string, which is then encoded using base64. This method is stateless and suitable for API calls along with simple auth workflows that do not require persistent sessions.

_Pros:_
Faster authentication due to fewer operations involved.
Easy to implement.
Supported by all major browsers.

_Cons:_
Base64 is not the same as encryption and can be easily decoded since it’s sent in plain text. HTTPS/SSL is essential.
Credentials must be sent with every request.
Users can only be logged out by rewriting the credentials with an invalid one.

Here’s how Basic Authentication works:

```
USER -> SERVER: GET /protected-resource  
USER <- SERVER: 401 Unauthorized, WWW-Authenticate: Basic realm="Restricted Area"  
USER -> SERVER: GET /protected-resource, Authorization: Basic base64(username:password)  
USER <- SERVER: 200 OK  
USER -> SERVER: GET /other-resource  
USER <- SERVER: 401 Unauthorized, WWW-Authenticate: Basic realm="Restricted Area"  
USER -> SERVER: GET /other-resource, Authorization: Basic base64(username:password)  
USER <- SERVER: 200 OK
```

In the diagram, the user requests a protected resource from the server (“/protected-resource”).

The server responds with a 401 Unauthorized status code and a WWW-Authenticate header that indicates the use of Basic Authentication.

The user sends a second request for the same resource, including an Authorization header with their base64-encoded username and password.

The server verifies the credentials and grants access to the protected resource with a 200 OK status code.

If the user requests a different protected resource (“/other-resource”), the server will respond with a 401 Unauthorized status code and a WWW-Authenticate header, and the user must include the Authorization header with their credentials for each protected resource they request.

Note that this is a simplified example, and the actual flow of Basic Authentication can vary depending on the implementation and additional security measures employed such as HTTPS.



## Session Based Authentication
> 🔗 https://shiva-rrad.medium.com/understanding-the-different-methods-of-authentication-and-authorization-2534de1a77f6

Session-based authentication is introduced to address the problem of HTTP protocol being stateless, which requires the user to authenticate themselves repeatedly for each new request. In session-based authentication, the server generates a unique token upon successful authentication and sends it to the client, which stores it in a cookie and sends it back with each subsequent request. The server uses this token to authenticate the user and returns the requested data. Logging out involves deleting the session ID stored in the cookie.

_Pros:_
- Simple implementation: Session-based authentication is relatively simple to implement and does not require complex cryptographic operations.
- Scalability: Sessions can be scaled horizontally across multiple servers in a load-balanced environment, making it easy to handle large numbers of simultaneous users.
- Security: By using a session ID stored in a cookie, session-based authentication can protect against cross-site request forgery (CSRF) attacks, which occur when an attacker sends unauthorized requests to a website on behalf of an authenticated user.
- Logout functionality: Session-based authentication makes it easy to implement a logout functionality as it only requires deleting the session ID stored in the cookie.

_Cons:_
- Session fixation attacks: Session fixation attacks occur when an attacker sets the session ID before the user logs in, thereby allowing the attacker to hijack the user’s session.
- Session hijacking attacks: Session hijacking attacks occur when an attacker steals the user’s session ID and uses it to gain unauthorized access to the user’s account. To mitigate this risk, developers should use secure cookies and implement measures to prevent session hijacking, such as IP tracking and reauthentication after a certain period of inactivity.
- Session management: Managing user sessions can be a challenge, especially when the server is required to maintain a session store to keep track of authenticated users.
- Stateful servers: Session-based authentication requires servers to be stateful, which means that they need to store session information on the server-side. This can be a performance bottleneck for high-traffic applications.
- Mobile applications: Session-based authentication can be challenging to implement in mobile applications, where cookies are not always supported, and it is difficult to prevent unauthorized access to session information stored on the device.

Session-based authentication has scalability limitations, especially with regards to session management as sessions are usually stored in memory. When servers are replicated to multiple instances, all user sessions must also be replicated to each server, making it challenging to handle a large number of concurrent users. To overcome this issue, developers often use specialized session management tools or third-party services to centralize session management and distribute session data across multiple servers. Distributed caching technologies such as Redis or Memcached can also be used to store session data in a centralized cache accessible by multiple servers, reducing the need for replication and simplifying session management. However, having a dedicated server for session management may not always be feasible for small to mid-sized applications. In such cases, developers should consider other authentication methods that better suit their needs. Therefore, developers should carefully evaluate the scalability requirements of their application and choose an appropriate authentication method accordingly.


### Session + Cookie


### Session + Header
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


### Session 🆚 JWT
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



## Token Based Authentication
> [!links]
> ↗ [SWT (Simple Web Token)](Token%20Based%20Authentication/SWT%20(Simple%20Web%20Token).md)
> ↗ [JWT (Json Web Token)](Token%20Based%20Authentication/JWT%20(Json%20Web%20Token).md)
> ↗ [x-auth-token](Token%20Based%20Authentication/x-auth-token.md)


> 🔗 https://shiva-rrad.medium.com/understanding-the-different-methods-of-authentication-and-authorization-2534de1a77f6

Token-based authentication is a popular method, particularly with the emergence of single-page applications, web APIs, and IoT devices. This authentication method is stateless, meaning that no user information needs to be stored on the server-side. Instead of usernames and passwords, tokens are used for authentication. When a user provides their credentials, the server generates a token which can be exchanged between the client and server to authenticate the user. Tokens contain a unique identifier for the user and an expiration date/time. They do not need to be saved on the server-side as they can be validated using their signature, making requests faster without the need for database lookups.

Token-based authentication works well for microservices architecture, where multiple services require authentication. It’s easy to configure how each service handles the token and token secret. Despite its benefits, there are some downsides to token-based authentication. Storing the token on the client-side can lead to XSS attacks via localStorage or CSRF attacks via cookies. Tokens cannot be deleted, only expired. If leaked, an attacker can misuse the token until it expires. To mitigate these risks, it’s important to set short expiry times and use refresh tokens that automatically issue new tokens at expiry. A blacklisting database can also be created to delete tokens, but this adds extra overhead and introduces state to the microservice architecture.

JSON Web Tokens (JWT) are the most commonly used tokens for this mechanism because of their versatility and ease of use. Other examples of token-based authentication include SWT (Simple Web Tokens), OAuth, SAML, and OpenID.

Overall, token-based authentication offers improved security, scalability, and flexibility over traditional authentication methods. However, it’s essential to consider the potential risks and implement proper measures to avoid security breaches.JWT Authentication.



## Ref
[secure authentication]: https://www.securecoding.com/blog/secure-authentication/
[自己动手做一个简单的 Telegram 入群验证 Bot |]: https://tstrs.me/1490.html
[用于识别、认证和验证的生物识别认证系统]: https://www.boonedam.com/zh-cn/accessories-and-additions/biometric-authentication-systems

[微信官方文档 -- 生物认证]: https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/bio-auth.html

- 小程序通过 [SOTER](https://github.com/Tencent/soter) 提供生物认证方式。
- 目前暂时只支持指纹识别认证。设备支持的生物认证方式可使用 [wx.checkIsSupportSoterAuthentication](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/soter/wx.checkIsSupportSoterAuthentication.html) 查询

[22. Anonymous Authentication（匿名认证）]: https://www.cnblogs.com/jrkl/p/13513429.html

[SAML Explained in Plain English]: https://www.onelogin.com/learn/saml


