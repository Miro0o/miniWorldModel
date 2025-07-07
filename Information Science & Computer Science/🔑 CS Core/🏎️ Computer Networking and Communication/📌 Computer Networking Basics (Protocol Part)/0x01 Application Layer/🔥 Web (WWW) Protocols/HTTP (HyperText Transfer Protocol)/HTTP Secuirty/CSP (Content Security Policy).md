# CSP (Content Security Policy)

[TOC]



## Res
📂 https://content-security-policy.com/


### Related Topics
↗ [SeedLab - Web Security /👉 Cross-Site Scripting (XSS) Attack Lab](../../../../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🎯%20Cyber%20Ranges%20&%20Labs/🧪%20Ranges%20&%20Security%20Labs/SEED%20Project/SeedLab%20-%20Web%20Security.md#👉%20Cross-Site%20Scripting%20(XSS)%20Attack%20Lab)



## Intro
**Content-Security-Policy** is the name of a **HTTP response header** that modern browsers use to enhance the security of the document (or web page). The Content-Security-Policy header allows you to restrict which resources (such as JavaScript, CSS, Images, etc.) can be loaded, and the URLs that they can be loaded from.

- To enable CSP, you need to configure your web server to return the [`Content-Security-Policy`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) HTTP header. (Sometimes you may see mentions of the `X-Content-Security-Policy` header, but that's an older version and you don't need to specify it anymore.)
- Alternatively, the [`<meta>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta) element can be used to configure a policy, e.g.
```html
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self'; img-src https://*; child-src 'none';" />
```

CSP was first designed to reduce the attack surface of ↗ [XSS (Cross Site Scripting)](../../../../../../../CyberSecurity/Application%20Security/💉%20Web%20Security/🛟%20Web%20Application%20Security%20Risks%20(Threats,%20Attacks,%20Vulnerabilities)%20&%20OWASP/Injection/XSS%20(Cross%20Site%20Scripting)/XSS%20(Cross%20Site%20Scripting).md) attacks, later versions of the spec also protect against other forms of attack such as Click Jacking.



## CSP Directive
> 🔗 https://content-security-policy.com/

The `Content-Security-Policy` header value is made up of one or more directives, multiple directives are separated with a semicolon `;`

This documentation is provided based on the Content Security Policy Level 2 [W3C Recommendation](https://www.w3.org/TR/CSP2/), and the CSP Level 3 [W3C Working Draft](https://www.w3.org/TR/CSP3/)



## Ref
[Content Security Policy (CSP) Quick Reference Guide]: https://content-security-policy.com/nonce/

[👍 Content Security Policy 入门教程 | 阮一峰的网络日志]: http://www.ruanyifeng.com/blog/2016/09/csp.html
[👍 CSP 简介]: https://www.cnblogs.com/mutudou/p/14373644.html