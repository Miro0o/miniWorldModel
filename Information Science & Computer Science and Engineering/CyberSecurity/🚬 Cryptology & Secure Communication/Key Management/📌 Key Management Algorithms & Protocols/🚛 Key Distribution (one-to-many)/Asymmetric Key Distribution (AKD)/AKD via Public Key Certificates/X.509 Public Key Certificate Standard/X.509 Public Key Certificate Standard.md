# X.509 Certificate Standard

[TOC]



## Res
### Related Topics



## Intro
> X.509 标准最早于 1988 年由国际电信联盟 ITU(International Telecommunication Union)颁布。在此之后又于 1993 年 和 1995 年进行过两次修改。目前应用最广泛的证书格式是的 X.509 版本 3 格式。
> 
> Internet 工程任务组(IETF)针对 X.509 在 Internet 环境的应用， 颁布了一个作为 X.509 子集的 [RFC2459]，从而使 X.509 在 Internet 环境中得到广泛应用。

|   |   |
|---|---|
|Status|In force (Recommendation)|
|First published|1.0 at November 25, 1988; 34 years ago|
|Latest version|9.1  <br>October 14, 2021; 19 months ago|
|Organization|[ITU-T](https://en.wikipedia.org/wiki/ITU-T)|
|Committee|[ITU-T Study Group 17](https://en.wikipedia.org/wiki/ITU-T_Study_Group_17 "ITU-T Study Group 17")|
|Series|X|
|Base standards|[ASN.1](https://en.wikipedia.org/wiki/ASN.1 "ASN.1")|
|Related standards|ISO/IEC 9594-8:2020, [X.500](https://en.wikipedia.org/wiki/X.500 "X.500")|
|Domain|[Cryptography](https://en.wikipedia.org/wiki/Cryptography "Cryptography")|
|Website|[www.itu.int/rec/T-REC-X.509](https://www.itu.int/rec/T-REC-X.509)|
<small>X.509</small>


In [cryptography](https://en.wikipedia.org/wiki/Cryptography "Cryptography"), **X.509** is an [International Telecommunication Union (ITU)](https://en.wikipedia.org/wiki/International_Telecommunication_Union "International Telecommunication Union") standard defining the format of public key certificates. X.509 certificates are used in many Internet protocols, including TLS/SSL, which is the basis for HTTPS, the secure protocol for browsing the web. They are also used in offline applications, like [electronic signatures](https://en.wikipedia.org/wiki/Electronic_signature "Electronic signature").

> X.509 is defined by the [International Telecommunications Union's](https://en.wikipedia.org/wiki/International_Telecommunication_Union "International Telecommunication Union")"Standardization Sector" ([ITU-T](https://en.wikipedia.org/wiki/ITU-T "ITU-T")'s [SG17](https://en.wikipedia.org/wiki/ITU-T_Study_Group_17 "ITU-T Study Group 17")), in ITU-T Study Group 17 and is based on [ASN.1](https://en.wikipedia.org/wiki/Abstract_Syntax_Notation_One "Abstract Syntax Notation One"), another ITU-T standard.

An X.509 certificate binds an identity to a public key using a digital signature. A certificate contains an identity (a hostname, or an organization, or an individual) and a public key ([RSA](https://en.wikipedia.org/wiki/RSA_(cryptosystem) "RSA (cryptosystem)"), [DSA](https://en.wikipedia.org/wiki/DSA_(cryptography) "DSA (cryptography)"), [ECDSA](https://en.wikipedia.org/wiki/ECDSA "ECDSA"), [ed25519](https://en.wikipedia.org/wiki/Ed25519 "Ed25519"), etc.), and is either signed by a certificate authority or is self-signed. When a certificate is signed by a trusted certificate authority, or validated by other means, someone holding that certificate can use the public key it contains to establish secure communications with another party, or validate documents [digitally signed](https://en.wikipedia.org/wiki/Digital_signature "Digital signature") by the corresponding [private key](https://en.wikipedia.org/wiki/Private_key "Private key").

X.509 also defines [certificate revocation lists](https://en.wikipedia.org/wiki/Certificate_revocation_list "Certificate revocation list"), which are a means to distribute information about certificates that have been deemed invalid by a signing authority, as well as a [certification path validation algorithm](https://en.wikipedia.org/wiki/Certification_path_validation_algorithm "Certification path validation algorithm"), which allows for certificates to be signed by intermediate CA certificates, which are, in turn, signed by other certificates, eventually reaching a [trust anchor](https://en.wikipedia.org/wiki/Trust_anchor "Trust anchor").



## Ref
[X.509 | Wikipedia]: https://en.wikipedia.org/wiki/X.509

[👍 证书格式区别 & pvk & spc & cer]: https://blog.csdn.net/titan_max/article/details/52386137

[👍 X.509证书的读取操作与分析（Python版）]: https://wyxwyx46941930.github.io/2019/01/22/X-509/
