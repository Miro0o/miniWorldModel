# OAuth (Open Authorization)

[TOC]



## Res
🏠 https://oauth.net/2/
🏠 https://oauth.net



## Intro
> An **open protocol** to allow **secure authorization** in a **simple** and **standard** method from web, mobile and desktop applications.

**OAuth** (short for "**Open Authorization**" is an open standard for **access [delegation](https://en.wikipedia.org/wiki/Delegation_(computer_security) "Delegation (computer security)")**, commonly used as a way for internet users to grant websites or applications access to their information on other websites but without giving them the passwords. This mechanism is used by companies such as Amazon, Google, Facebook, Microsoft, and Twitter to permit users to share information about their accounts with third-party applications or websites.

Generally, the OAuth protocol provides a way for resource owners to provide a client application with secure delegated access to server resources. It specifies a process for resource owners to authorize third-party access to their server resources without providing credentials. Designed specifically to work with [Hypertext Transfer Protocol](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol "Hypertext Transfer Protocol") (HTTP), OAuth essentially allows [access tokens](https://en.wikipedia.org/wiki/Access_token "Access token") to be issued to third-party clients by an authorization server, with the approval of the resource owner. The third party then uses the access token to access the protected resources hosted by the resource server



## Ref
[OAuth | Wikipedia]: https://en.wikipedia.org/wiki/OAuth

[👍 白话让你理解什么是oAuth2协议 - Kane的文章 - 知乎]: https://zhuanlan.zhihu.com/p/92051359
1. 认识OAuth 2.0
2. 从一个简单的应用场景谈起
3. OAuth 2.0基本授权流程：授权码模式
4. OAuth 2.0授权服务的EndPoint交互
5. OAuth 2.0其它授权模式及应用场景
	1. Implicit Grant：简化模式
	2. Client Credentials Grant：应用授信模式
	3. Resource Owner Credentials Grant：用户授信模式
6. 四种授权模式的联系和区别
7. 四种授权模式的时序图
8. 如何选择合适OAuth 2.0授权方式
9. OAuth 2的安全威胁和考虑
10. 文中讨论的术语（中英文对照）
11. 参考资料
	1. 《OAuth 2 in Action》，作者Justin Richer，Antonio Sanso
	2. [RFC6749](https://link.zhihu.com/?target=https%3A//tools.ietf.org/html/rfc6749)：The OAuth 2.0 Authorization Framework
	3. Alex Bilbie的博文：[A Guide To OAuth 2.0 Grants](https://link.zhihu.com/?target=https%3A//alexbilbie.com/guide-to-oauth-2-grants/)