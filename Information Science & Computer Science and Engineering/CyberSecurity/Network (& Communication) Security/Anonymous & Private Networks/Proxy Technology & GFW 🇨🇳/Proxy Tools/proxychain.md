# proxychain

[TOC]



## Res
🏠 https://github.com/haad/proxychains



## Intro
`proxychains` - a tool that forces any TCP connection made by any given application to follow through proxy like TOR or any other SOCKS4, SOCKS5 or HTTP(S) proxy. Supported auth-types: "user/pass" for SOCKS4/5, "basic" for HTTP.

`ProxyChains` is a UNIX program, that hooks network-related `libc` functions in dynamically linked programs via a preloaded DLL and redirects the connections through SOCKS4a/5 or HTTP proxies.

> ⚠ Warning: this program works only on dynamically linked programs. also both `proxychains` and the program to call must use the same dynamic linker (i.e. same `libc`)

---
edit file `/etc/proxychains.conf ` 

Proxy servers may be down, or they may be experiencing a heavy load (causing slow or latent connections); if this occurs, a defined or strict ProxyChain will fail because an expected link is missing. Therefore, disable the use of `strict_chain` and enable `dynamic_chain`, which ensures that the connection will be routed.

Open proxies can be easily found online (an example would be https://www.proxynova.com/proxy-server-list/) and added to the proxychains.conf file. Testers can take advantage of this to further obfuscate their identity.



## Ref


