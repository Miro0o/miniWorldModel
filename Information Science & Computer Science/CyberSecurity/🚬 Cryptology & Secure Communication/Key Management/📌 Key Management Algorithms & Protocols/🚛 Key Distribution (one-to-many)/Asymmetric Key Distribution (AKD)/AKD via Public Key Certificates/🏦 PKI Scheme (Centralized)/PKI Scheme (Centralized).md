# PKI Scheme (Centralized)

[TOC]



## Res
### Related Topics



## Intro

> 百度百科:
> 
> PKI（Public Key Infrastructure）公钥基础设施是提供公钥加密和数字签名服务的系统或平台，目的是为了管理密钥和证书。一个机构通过采用PKI 框架管理密钥和证书可以建立一个安全的网络环境。PKI 主要包括四个部分：X.509 格式的证书（X.509 V3）和证书废止列表CRL（X.509 V2）；CA 操作协议；CA 管理协议；CA 政策制定。一个典型、完整、有效的PKI 应用系统至少应具有以下五个部分:
> 	1） **认证中心CA** CA 是PKI 的核心，CA负责管理PKI 结构下的所有用户（包括各种应用程序）的证书，把用户的公钥和用户的其他信息捆绑在一起，在网上验证用户的身份，CA 还要负责用户证书的黑名单登记和黑名单发布，后面有CA 的详细描述。
> 	
> 	2）**X.500 目录服务器** X.500 目录服务器用于发布用户的证书和黑名单信息，用户可通过标准的LDAP 协议查询自己或其他人的证书和下载黑名单信息。
> 	
> 	3）**具有高强度密码算法(SSL)** 的安全WWW服务器 Secure socket layer(SSL)协议最初由Netscape 企业发展，现已成为网络用来鉴别网站和网页浏览者身份，以及在浏览器使用者及网页服务器之间进行加密通讯的全球化标准。
> 	
> 	4）**Web（安全通信平台）** Web 有Web Client 端和Web Server 端两部分，分别安装在客户端和服务器端，通过具有高强度密码算法的SSL协议保证客户端和服务器端数据的机密性、完整性、身份验证。  
> 	
> 	5）**自开发安全应用系统** 自开发安全应用系统是指各行业自开发的各种具体应用系统，例如银行、证券的应用系统等。
> 	
> 完整的PKI 包括认证政策的制定（包括遵循的技术标准、各CA 之间的上下级或同级关系、安全策略、安全程度、服务对象、管理原则和框架等）、认证规则、运作制度的制定、所涉及的各方法律关系内容以及技术的实现等。


- In a typical [public-key infrastructure](https://en.wikipedia.org/wiki/Public-key_infrastructure "Public-key infrastructure") (PKI) scheme, the certificate issuer is a [certificate authority](https://en.wikipedia.org/wiki/Certificate_authority "Certificate authority") (CA), usually a company that charges customers to issue certificates for them. 

- By contrast, in a [web of trust](https://en.wikipedia.org/wiki/Web_of_trust "Web of trust") scheme, individuals sign each other's keys directly, in a format that performs a similar function to a public key certificate. In case of key compromise, a certificate may need to be [revoked](https://en.wikipedia.org/wiki/Certificate_revocation "Certificate revocation").



### PKI Organization

![What is a PKI or public key infrastructure? | Uanataca](https://web.uanataca.com/uploads/images/l/z/z/l3y-esquema-general.png)

![](../../../../../../../../../../Assets/Pics/Screenshot%202023-04-19%20at%204.04.43%20PM.png)



## Ref
[PKI（HTTPS）体系详解]: https://www.cnblogs.com/precedeforetime/p/13390761.html
[「PKI技术」第一弹 — 什么是PKI]: https://zhuanlan.zhihu.com/p/374017585

