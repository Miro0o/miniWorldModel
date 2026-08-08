# TLS@1.3

[TOC]



## Res
### Related Topics



## 📌 Updates Logs
The most recent version of TLS, 1.3, was officially finalized by IETF in 2018. The primary benefit over previous versions of the protocol is added encryption mechanisms when establishing a connection handshake between a client and server. While earlier TLS versions offer encryption as well, TLS manages to establish an encrypted session earlier in the handshake process. Additionally, the number of steps required to complete a handshake is reduced, substantially lowering the amount of time it takes to complete a handshake and begin transmitting or receiving data between the client and server.

Another enhancement of TLS 1.3 is that several cryptographic algorithms used to encrypt data were removed, as they were deemed obsolete and weren't recommended for secure transport. Additionally, some security features that were once optional are now required. For example, message-digest algorithm 5 ([MD5](https://www.techtarget.com/searchsecurity/definition/MD5)) cryptographic hashes are no longer supported, perfect forward secrecy ([PFS](https://www.techtarget.com/whatis/definition/perfect-forward-secrecy)) is required and Rivest Cipher 4 (RC4) negotiation is prohibited. This eliminates the chance that a TLS-encrypted session uses a known insecure encryption algorithm or method in TLS version 1.3.



## TLS@1.3 Mechanism
![TLS 1.3: Faster, Simpler, More Secure - NetBurner](https://www.netburner.com/wp-content/uploads/2020/11/TLS1.21.3.png)
#TODO 


## Ref
[Transport Layer Security (TLS)]: https://www.techtarget.com/searchsecurity/definition/Transport-Layer-Security-TLS

