# SSH3: faster and rich secure shell using HTTP/3

[TOC]



## Res
🏠 
🚧 https://github.com/francoismichel/ssh3


### Related Topics



## Intro
SSH3 is a complete revisit of the SSH protocol, mapping its semantics on top of the HTTP mechanisms. It comes from our research work and we (researchers) recently proposed it as an [Internet-Draft](https://www.ietf.org/how/ids/) ([draft-michel-ssh3-00](https://www.ietf.org/archive/id/draft-michel-ssh3-00.html)).

In a nutshell, SSH3 uses [QUIC](https://datatracker.ietf.org/doc/html/rfc9000)+[TLS1.3](https://datatracker.ietf.org/doc/html/rfc8446) for secure channel establishment and the [HTTP Authorization](https://www.rfc-editor.org/rfc/rfc9110.html#name-authorization) mechanisms for user authentication. Among others, SSH3 allows the following improvements:

- Significantly faster session establishment
- New HTTP authentication methods such as [OAuth 2.0](https://datatracker.ietf.org/doc/html/rfc6749) and [OpenID Connect](https://openid.net/specs/openid-connect-core-1_0.html) in addition to classical SSH authentication
- Robustness to port scanning attacks: your SSH3 server can be made **invisible** to other Internet users
- UDP port forwarding in addition to classical TCP port forwarding
- All the features allowed by the modern QUIC protocol: including connection migration (soon) and multipath connections



## Ref
