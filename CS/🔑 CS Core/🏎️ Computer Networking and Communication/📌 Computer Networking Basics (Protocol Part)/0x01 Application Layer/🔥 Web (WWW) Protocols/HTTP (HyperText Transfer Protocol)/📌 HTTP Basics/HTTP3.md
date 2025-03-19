# HTTP/3

[TOC]



## Res
### Related Topics
↗ [QUIC (Quick UDP Internet Connection)](../../../../0x04%20Transport%20Layer/QUIC%20(Quick%20UDP%20Internet%20Connection)/QUIC%20(Quick%20UDP%20Internet%20Connection).md)



## Intro
> 🙈 [What is HTTP3](https://en.wikipedia.org/wiki/HTTP/3) ?

**HTTP/3** is the third major version of the [Hypertext Transfer Protocol](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) used to exchange information on the [World Wide Web](https://en.wikipedia.org/wiki/World_Wide_Web), alongside [HTTP/1.1](https://en.wikipedia.org/wiki/HTTP/1.1) and [HTTP/2](https://en.wikipedia.org/wiki/HTTP/2). HTTP/3 always runs over [QUIC](https://en.wikipedia.org/wiki/QUIC) (not the [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol) of TCP/IP, which QUIC is a replacement for), which *is* completed (and is the heart of HTTP/3), published as [RFC](https://en.wikipedia.org/wiki/RFC_(identifier)) [9000](https://datatracker.ietf.org/doc/html/rfc9000).
[![img](../../../../../../../../Assets/Pics/336px-HTTP-1.1_vs._HTTP-2_vs._HTTP-3_Protocol_Stack.svg.png)](https://en.wikipedia.org/wiki/File:HTTP-1.1_vs._HTTP-2_vs._HTTP-3_Protocol_Stack.svg)

<small>Protocol Stack of HTTP/3 compared to HTTP/1.1 and HTTP/2</small>


HTTP/3 uses the same semantics as the earlier revisions, including the same [request methods](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods), [status codes](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Response_status_codes), and [message fields](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields), but encodes them differently and maintains session state differently.

As of May 2022, the HTTP/3 protocol is an [Internet Draft](https://en.wikipedia.org/wiki/Internet_Draft) awaiting final author review before publication (one of three already approved). HTTP/3 is already supported by 73% of running web browsers, and according to W3Techs 25% of the top 10 million websites. 
- It has been supported by [Chromium](https://en.wikipedia.org/wiki/Chromium_(web_browser)) (including [Google Chrome](https://en.wikipedia.org/wiki/Google_Chrome), [Microsoft Edge](https://en.wikipedia.org/wiki/Microsoft_Edge), [Samsung Internet](https://en.wikipedia.org/wiki/Samsung_Internet), and [Opera](https://en.wikipedia.org/wiki/Opera_(web_browser)) which are based on it, and Chrome for Android) since April 2020
- by [Mozilla Firefox](https://en.wikipedia.org/wiki/Mozilla_Firefox) since May 2021.
- [Safari](https://en.wikipedia.org/wiki/Safari_(web_browser)) 14 (on macOS Big Sur and iOS 14) has also implemented the protocol but it is [disabled by default](https://en.wikipedia.org/wiki/Feature_toggle).



## Ref



