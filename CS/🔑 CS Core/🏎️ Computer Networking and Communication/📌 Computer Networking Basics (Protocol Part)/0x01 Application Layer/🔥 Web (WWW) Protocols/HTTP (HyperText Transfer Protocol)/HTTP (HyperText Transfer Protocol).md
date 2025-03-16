# HTTP (HyperText Transfer Protocol)

[TOC]



## Res
### Related Topics
↗ [HTTPS (HTTP Security)](../../../../../../CyberSecurity/Network%20Security/🏇%20Network%20Security%20Basics%20&%20Protocols/📱%20Application%20Layer%20Security%20Protocols/HTTPS%20(HTTP%20Security)/HTTPS%20(HTTP%20Security).md)


### Learning Resoruces
📂 [MDN Docs /HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP)
- [Tutorials on HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP#tutorials)
- [MDN Docs Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP#reference)
- [Tools & resources](https://developer.mozilla.org/en-US/docs/Web/HTTP#tools_resources) 

📂 [HTTP Specifications](https://developer.mozilla.org/en-US/docs/Web/HTTP/Resources_and_specifications)

🎬【深入浅出计算机网络 - 6.7 万维网WWW】 https://www.bilibili.com/video/BV1Bd4y1z7bd/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d



## Overview
![](../../../../../../../Assets/Pics/Pasted%20image%2020230319124630.png)
<small>HTTP Based System Overview</small>

> 🔗 https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview

**_Hypertext Transfer Protocol (HTTP)_** is an [application-layer](https://en.wikipedia.org/wiki/Application_Layer) protocol for transmitting hypermedia documents, such as HTML. It was designed for communication between web browsers and web servers, but it can also be used for other purposes.
- HTTP follows a classical [client-server model](https://en.wikipedia.org/wiki/Client%E2%80%93server_model), with a client opening a connection to make a request, then waiting until it receives a response. 
- HTTP is a [stateless protocol](https://en.wikipedia.org/wiki/Stateless_protocol), meaning that the server does not keep any data (state) between two requests.

![web_application_arch.excalidraw | 800](../../../../../../../Assets/Illustrations/Computer%20Network/web_and_Internet_arch.excalidraw.md)
<small>Overview of HTTP-Based Web</small>


### Resources & URIs
↗ [Web (WWW) Protocols](../Web%20(WWW)%20Protocols.md#Resources%20&%20URIs)


### Components of HTTP-Based Web
1. **Client, or user-agent**: HTTP is a client-server protocol: requests are sent by one entity, the **user-agent** (or a proxy on behalf of it).
2. **Server**: Each individual request is sent to a **server**, which handles it and provides an answer called the _response_. 
3. **Proxy**: Between the client and the server there are numerous entities, collectively called **[proxies](https://developer.mozilla.org/en-US/docs/Glossary/Proxy_server)**, which perform different operations and act as gateways or [caches](https://developer.mozilla.org/en-US/docs/Glossary/Cache), for example.


### 🎯 Basic Aspects of HTTP
#### Simple
#### Extensible
#### Stateless, but not Sessionless
#### 🐝 HTTP and Connection
Before a client and server can exchange an HTTP request/response pair, they must establish a TCP connection, a process which requires several round-trips. 
- The default behavior of **HTTP/1.0** is to open a separate TCP connection for each HTTP request/response pair. This is less efficient than sharing a single TCP connection when multiple requests are sent in close succession.

Relentless efforts have been made to mitigate this flaw:
- **HTTP/1.1** introduced _pipelining_ (which proved difficult to implement) and _persistent connections_: the underlying TCP connection can be partially controlled using the [`Connection`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Connection) header.
- **HTTP/2** went a step further by multiplexing messages over a single connection, helping keep the connection warm and more efficient.
- Experiments are in progress to design a better transport protocol more suited to HTTP. For example, Google is experimenting with [QUIC](https://en.wikipedia.org/wiki/QUIC) which builds on UDP to provide a more reliable and efficient transport protocol. This is very like to be the next **HTTP/3** standards.

[![img](../../../../../../../Assets/Pics/336px-HTTP-1.1_vs._HTTP-2_vs._HTTP-3_Protocol_Stack.svg.png)](https://en.wikipedia.org/wiki/File:HTTP-1.1_vs._HTTP-2_vs._HTTP-3_Protocol_Stack.svg)
<small>Protocol Stack of HTTP/3 compared to HTTP/1.1 and HTTP/2</small>

More at ↗ [HTTP Connection Management](📌%20HTTP%20Basics/HTTP%20Connection%20Management.md)



## What are Controlled by HTTP
Here is a list of common features controllable with HTTP:

- **[Caching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching)**: How documents are cached can be controlled by HTTP. The server can instruct proxies and clients about what to cache and for how long. The client can instruct intermediate cache proxies to ignore the stored document.
- **Relaxing the origin constraint**: To prevent snooping and other privacy invasions, Web browsers enforce strict separation between Web sites. Only pages from the **same origin** can access all the information of a Web page. Though such a constraint is a burden to the server, HTTP headers can relax this strict separation on the server side, allowing a document to become a patchwork of information sourced from different domains; there could even be security-related reasons to do so.
- **Authentication**: Some pages may be protected so that only specific users can access them. Basic authentication may be provided by HTTP, either using the [`WWW-Authenticate`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/WWW-Authenticate) and similar headers, or by setting a specific session using [HTTP cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies).
- **[Proxy and tunneling](https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling)**: Servers or clients are often located on intranets and hide their true IP address from other computers. HTTP requests then go through proxies to cross this network barrier. Not all proxies are HTTP proxies. The SOCKS protocol, for example, operates at a lower level. Other protocols, like ftp, can be handled by these proxies.
- **Sessions**: Using HTTP cookies allows you to link requests with the state of the server. This creates sessions, despite basic HTTP being a state-less protocol. This is useful not only for e-commerce shopping baskets, but also for any site allowing user configuration of the output.



## HTTP Messages Format
As in ↗ [HTTP Messages Format](📌%20HTTP%20Basics/HTTP%20Messages%20Format.md)



## HTTP Flows
![](../../../../../../../../Assets/Pics/Pasted%20image%2020230319141809.png)

![](../../../../../../../../Assets/Pics/Pasted%20image%2020230319141942.png)

More at ↗ [HTTP Messages Format](📌%20HTTP%20Basics/HTTP%20Messages%20Format.md)



## APIs Based on HTTP
The most commonly used API based on HTTP is the [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) API, which can be used to exchange data between a [user agent](https://developer.mozilla.org/en-US/docs/Glossary/User_agent) and a server. The modern [`Fetch API`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) provides the same features with a more powerful and flexible feature set.

Another API, [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events), is a one-way service that allows a server to send events to the client, using HTTP as a transport mechanism. Using the [`EventSource`](https://developer.mozilla.org/en-US/docs/Web/API/EventSource) interface, the client opens a connection and establishes event handlers. The client browser automatically converts the messages that arrive on the HTTP stream into appropriate [`Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event) objects. Then it delivers them to the event handlers that have been registered for the events' [`type`](https://developer.mozilla.org/en-US/docs/Web/API/Event/type "type") if known, or to the [`onmessage`](https://developer.mozilla.org/en-US/docs/Web/API/EventSource/message_event "onmessage") event handler if no type-specific event handler was established.



## Ref
https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview#basic_aspects_of_http

