# SHA-1

[TOC]



## Res


## Intro
In [cryptography](https://en.wikipedia.org/wiki/Cryptography "Cryptography"), **SHA-1** (**Secure Hash Algorithm 1**) is a [hash function](https://en.wikipedia.org/wiki/Hash_function "Hash function") which takes an input and produces a 160-[bit](https://en.wikipedia.org/wiki/Bit "Bit") (20-[byte](https://en.wikipedia.org/wiki/Byte "Byte")) hash value known as a [message digest](https://en.wikipedia.org/wiki/Message_digest "Message digest") – typically rendered as 40 [hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal "Hexadecimal") digits. It was designed by the United States [National Security Agency](https://en.wikipedia.org/wiki/National_Security_Agency "National Security Agency"), and is a U.S. [Federal Information Processing Standard](https://en.wikipedia.org/wiki/Federal_Information_Processing_Standard "Federal Information Processing Standard"). The algorithm has been cryptographically broken but is still widely used.

Since 2005, SHA-1 has not been considered secure against well-funded opponents; as of 2010 many organizations have recommended its replacement. [NIST](https://en.wikipedia.org/wiki/NIST "NIST")formally deprecated use of SHA-1 in 2011 and disallowed its use for digital signatures in 2013, and declared that it should be phased out by 2030. As of 2020, [chosen-prefix attacks](https://en.wikipedia.org/wiki/Chosen-prefix_attack "Chosen-prefix attack") against SHA-1 are practical. As such, it is recommended to remove SHA-1 from products as soon as possible and instead use [SHA-2](https://en.wikipedia.org/wiki/SHA-2 "SHA-2") or [SHA-3](https://en.wikipedia.org/wiki/SHA-3 "SHA-3"). Replacing SHA-1 is urgent where it is used for [digital signatures](https://en.wikipedia.org/wiki/Digital_signatures "Digital signatures").

All major [web browser](https://en.wikipedia.org/wiki/Web_browser "Web browser") vendors ceased acceptance of SHA-1 [SSL certificates](https://en.wikipedia.org/wiki/SSL_certificate "SSL certificate") in 2017. In February 2017, [CWI Amsterdam](https://en.wikipedia.org/wiki/CWI_Amsterdam "CWI Amsterdam") and [Google](https://en.wikipedia.org/wiki/Google "Google") announced they had performed a [collision attack](https://en.wikipedia.org/wiki/Collision_attack "Collision attack") against SHA-1, publishing two dissimilar PDF files which produced the same SHA-1 hash. However, SHA-1 is still secure for [HMAC](https://en.wikipedia.org/wiki/HMAC "HMAC").

Microsoft has discontinued SHA-1 code signing support for Windows Update on August 7, 2020



## Ref
[👍【密码学】一文读懂SHA-1]: https://juejin.cn/post/7001281473299316744

[SHA 1 | Wikipedia]: https://en.wikipedia.org/wiki/SHA-1

