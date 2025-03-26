# # HTTP Parsers Inconsistencies

[TOC]



## Res
### Related Topics



## Intro



## Ref
[Exploiting HTTP Parsers Inconsistencies - Unveiling Vulnerabilities in HTTP Parsers: Exploiting Inconsistencies for Security Breaches]: https://blog.bugport.net/exploiting-http-parsers-inconsistencies#heading-bypassing-nginx-acl-rules-with-php-fpm-integration
- [Pathname Manipulation: Bypassing Reverse Proxies and Load Balancers Security Rules](https://blog.bugport.net/exploiting-http-parsers-inconsistencies#heading-pathname-manipulation-bypassing-reverse-proxies-and-load-balancers-security-rules)
    - [Nginx ACL Rules](https://blog.bugport.net/exploiting-http-parsers-inconsistencies#heading-nginx-acl-rules)
    - [Trim Inconsistencies](https://blog.bugport.net/exploiting-http-parsers-inconsistencies#heading-trim-inconsistencies)
    - [Bypassing Nginx ACL Rules With Node.js](https://blog.bugport.net/exploiting-http-parsers-inconsistencies#heading-bypassing-nginx-acl-rules-with-nodejs)
    - [Bypassing Nginx ACL Rules With Flask](https://blog.bugport.net/exploiting-http-parsers-inconsistencies#heading-bypassing-nginx-acl-rules-with-flask)
    - [Bypassing Nginx ACL Rules With Spring Boot](https://blog.bugport.net/exploiting-http-parsers-inconsistencies#heading-bypassing-nginx-acl-rules-with-spring-boot)
    - [Bypassing Nginx ACL Rules With PHP-FPM Integration](https://blog.bugport.net/exploiting-http-parsers-inconsistencies#heading-bypassing-nginx-acl-rules-with-php-fpm-integration)
    - [How to prevent](https://blog.bugport.net/exploiting-http-parsers-inconsistencies#heading-how-to-prevent)
- [Bypassing AWS WAF ACL](https://blog.bugport.net/exploiting-http-parsers-inconsistencies#heading-bypassing-aws-waf-acl)
    - [How AWS WAF ACLs Work](https://blog.bugport.net/exploiting-http-parsers-inconsistencies#heading-how-aws-waf-acls-work)
    - [Bypassing AWS WAF ACL With Line Folding](https://blog.bugport.net/exploiting-http-parsers-inconsistencies#heading-bypassing-aws-waf-acl-with-line-folding)
- [Incorrect Path Parsing Leads to Server-Side Request Forgery](https://blog.bugport.net/exploiting-http-parsers-inconsistencies#heading-incorrect-path-parsing-leads-to-server-side-request-forgery)
    - [SSRF on Flask Through Incorrect Pathname Interpretation](https://blog.bugport.net/exploiting-http-parsers-inconsistencies#heading-ssrf-on-flask-through-incorrect-pathname-interpretation)
    - [SSRF on Spring Boot Through Incorrect Pathname Interpretation](https://blog.bugport.net/exploiting-http-parsers-inconsistencies#heading-ssrf-on-spring-boot-through-incorrect-pathname-interpretation)
    - [PHP Built-in Web Server Case Study - SSRF Through Incorrect Pathname Interpretation](https://blog.bugport.net/exploiting-http-parsers-inconsistencies#heading-php-built-in-web-server-case-study-ssrf-through-incorrect-pathname-interpretation)
    - [How to prevent](https://blog.bugport.net/exploiting-http-parsers-inconsistencies#heading-how-to-prevent-1)
- [HTTP Desync Cache Poisoning Attacks](https://blog.bugport.net/exploiting-http-parsers-inconsistencies#heading-http-desync-cache-poisoning-attacks)
    - [Cache Keys](https://blog.bugport.net/exploiting-http-parsers-inconsistencies#heading-cache-keys)
    - [S3 HTTP Desync Cache Poisoning Issue](https://blog.bugport.net/exploiting-http-parsers-inconsistencies#heading-s3-http-desync-cache-poisoning-issue)
        - [The Vulnerability](https://blog.bugport.net/exploiting-http-parsers-inconsistencies#heading-the-vulnerability)
- [Conclusion](https://blog.bugport.net/exploiting-http-parsers-inconsistencies#heading-conclusion)

[HTTP解析差异利用 - p4d0rn]: https://p4d0rn.github.io/2023/11/21/http-parsers/
HTTP 协议在 Web 应用程序的无缝运行中起着至关重要的作用，然而不同的语言、模块、中间件，其对HTTP协议的解析存在细微的差异，这些差异可能导致潜在的安全漏洞。

> 实际尝试Windows和Linux有出入，不一定准确，谨慎观看

