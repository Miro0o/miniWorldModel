# HTTP Messages Format

[TOC]



## Res
### Related Topics


### Other Resources
HTTP messages format's references & specification is available at 🔗 [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP).
- HTTP Headers
- HTTP Request Methods
- HTTP Response Status Codes
- CSP Directives
- CORS Errors
- Permission-policy Directives



## Overview
> 🔗 https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages

HTTP messages are how data is exchanged between a server and a client. There are two types of messages: _requests_ sent by the client to trigger an action on the server, and _responses_, the answer from the server.

==HTTP messages are composed of textual information encoded in ASCII,== and span over multiple lines. 
- In HTTP/1.1, and earlier versions of the protocol, these messages were openly sent across the connection. 
- In HTTP/2, the once human-readable message is now divided up into HTTP frames, providing optimization and performance improvements.

Web developers, or webmasters, rarely craft these textual HTTP messages themselves: software, a Web browser, proxy, or Web server, perform this action. They provide HTTP messages through config files (for proxies or servers), APIs (for browsers), or other interfaces.


![](../../../../../../../../Assets/Pics/Pasted%20image%2020230319141809.png)

![](../../../../../../../../Assets/Pics/Pasted%20image%2020230319141942.png)



## 🙋‍♀️ HTTP Request Message
![](../../../../../../../../Assets/Pics/Pasted%20image%2020230319140024.png)
![](../../../../../../../../Assets/Pics/Pasted%20image%2020230319135903.png)
<small>This diagram shows the structural elements of an HTTP request and an example of the sorts of headers a request might contain. Like most HTTP requests, this one carries no entity, so there are no entity headers and the message body is empty</samll>


### 1️⃣ HTTP Request Line (Start Line)
#### Method Field


#### URL Field


#### HTTP Version Field


### HTTP Request Message Headers 
#### 2️⃣ General Headers


#### 3️⃣ Request Headers


#### 4️⃣ Entity Headers


### 5️⃣ HTTP Request Body (Message Body)


### HTTP Conditional Request /Range Request
↗ [HTTP Range Requests](../HTTP%20Advanced%20Controls/HTTP%20Range%20Requests.md)



## 🔊 HTTP Response Message
![](../../../../../../../../Assets/Pics/Pasted%20image%2020230319140035.png)
![](../../../../../../../../Assets/Pics/Pasted%20image%2020230319135927.png)
<small>This figure illustrates the construction of an HTTP response, and includes an example of both message headers and body. The status code “200” indicates that this is a successful response to a request; it contains a brief text HTML entity in the message body.</small>


### 1️⃣ HTTP Response Status Line (Start Line)
#### Version of the Protocol

#### Status Code

#### Status Message

### HTTP Response Message Headers

#### 2️⃣ General Headers

#### 3️⃣ Request Headers

#### 4️⃣ Entity Headers


### 5️⃣ HTTP Request Body (Message Body)



## 🎞️ HTTP/2 Frames
HTTP/1.x messages have a few drawbacks for performance:
- Headers, unlike bodies, are **uncompressed**.
- Headers are often very similar from one message to the next one, yet still repeated across connections.
- **No multiplexing** can be done. Several connections need opening on the same server: and warm TCP connections are more efficient than cold ones.

HTTP/2 introduces an extra step: it divides HTTP/1.x messages into **frames** which are embedded in a stream. Data and header frames are separated, which allows header compression. Several streams can be combined together, a process called _multiplexing_, allowing more efficient use of underlying TCP connections.

HTTP frames are now transparent to Web developers.
![](../../../../../../../../Assets/Pics/Pasted%20image%2020230319142247.png)



## Ref
[MDC Docs /HTTP /Messages]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages

