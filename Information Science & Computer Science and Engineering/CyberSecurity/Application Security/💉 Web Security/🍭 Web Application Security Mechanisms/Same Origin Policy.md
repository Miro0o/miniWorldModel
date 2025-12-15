# Same Origin Policy

[TOC]



## Res
### Related Topics
↗ [HTTP Access Control (CORS)](../../../../🔑%20CS%20Core/🏎️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x01%20Application%20Layer/🔥%20Web%20(WWW)%20Protocols/HTTP%20(HyperText%20Transfer%20Protocol)/HTTP%20Advanced%20Controls/HTTP%20Access%20Control%20(CORS).md)
↗ [CSRF (Cross Site Request Forgery)](../🛟%20Web%20Application%20Security%20Risks%20(Threats,%20Attacks,%20Vulnerabilities)%20&%20OWASP/Insecure%20Design%20&%20Failures/Brocken%20Access%20Control/CSRF%20(Cross%20Site%20Request%20Forgery)/CSRF%20(Cross%20Site%20Request%20Forgery).md)



## Intro
> 🔗 https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy

The **same-origin policy** is a critical security mechanism that restricts how a document or script loaded by one [origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin) can interact with a resource from another origin.

It helps isolate potentially malicious documents, reducing possible attack vectors. For example, it prevents a malicious website on the Internet from running JS in a browser to read data from a third-party webmail service (which the user is signed into) or a company intranet (which is protected from direct access by the attacker by not having a public IP address) and relaying that data to the attacker.

> 🔗 https://textbook.cs161.org/web/sop.html

- Same-origin policy: A rule that prevents one website from tampering with other unrelated websites
	- Enforced by the web browser
	- Prevents a malicious website from tampering with behavior on other websites

![](../../../../../Assets/Pics/Screenshot%202024-10-10%20at%2012.21.48.png)

![](../../../../../Assets/Pics/Screenshot%202024-10-10%20at%2012.21.56.png)

- Webpages from different origins cannot interact with each other
	- Example: If cs161.org embeds google.com, the inner frame cannot interact with the outer frame, and the outer frame cannot interact with the inner frame
- Exception: JavaScript runs with the origin of the page that loads it
	- Example: If cs161.org fetches JavaScript from google.com, the JavaScript has the origin of cs161.org
	- Intuition: cs161.org has “copy-pasted” JavaScript onto its webpage
- Exception: webpages can fetch and display images from other origins
	- However, Javascript in the webpage only knows about the image’s size and dimensions (cannot actually manipulate the image)
- Exception: Websites can agree to allow some limited sharing
	- Cross-origin resource sharing (CORS)
	- The postMessage function in JavaScript



## Ref
[👍 跨域、CORS、CSRF]: https://www.cnblogs.com/Neeo/articles/10969256.html

>参考或者摘自：
>[跨域，不可不知的基础概念](https://juejin.cn/post/7003232769182547998)、[什么是同源策略？](https://juejin.cn/post/6973234047728386055)、[前端网络安全必修 1 同源策略和CSRF](https://juejin.cn/post/6844903991575314445)、[浅谈CSRF攻击方式](https://www.cnblogs.com/hyddd/archive/2009/04/09/1432744.html)、[前端跨域系列（2）- CSRF(跨站请求伪造)介绍](https://juejin.cn/post/6879363378381488142)、[CORS 和 CSRF的区别](https://blog.51cto.com/u_15127679/3319486)、[CSRF(跨站请求伪造)学习与理解](https://blog.51cto.com/m0re/3884882)

无论前后端开发，都绕不开跨域这个问题，要想弄明白，这一切都要从同源策略开始说起.......

> **Notes: this article can be found at the current .md file's directory**

[Same-origin policy | mdn web docs]: https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy