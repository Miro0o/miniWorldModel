# WebSocket (WS) & WebSockets (WSS)

[TOC]



## Res
📂 [ WebSockets API (WebSockets)| Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)


### Related Topics



## Intro
> 🔗 https://en.wikipedia.org/wiki/WebSocket

**WebSocket** is a computer [communications protocol](https://en.wikipedia.org/wiki/Communications_protocol "Communications protocol"), providing [full-duplex](https://en.wikipedia.org/wiki/Full-duplex "Full-duplex") communication channels over a single [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol "Transmission Control Protocol") connection. The WebSocket protocol was standardized by the [IETF](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force "Internet Engineering Task Force") as [RFC](https://en.wikipedia.org/wiki/RFC_(identifier) "RFC (identifier)") [6455](https://datatracker.ietf.org/doc/html/rfc6455) in 2011. The current API specification allowing web applications to use this protocol is known as _WebSockets_.[[1]](https://en.wikipedia.org/wiki/WebSocket#cite_note-1) It is a living standard maintained by the [WHATWG](https://en.wikipedia.org/wiki/Web_Hypertext_Application_Technology_Working_Group "Web Hypertext Application Technology Working Group") and a successor to _The WebSocket API_ from the [W3C](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium "World Wide Web Consortium").

Unlike HTTP, WebSocket provides full-duplex communication. Additionally, WebSocket enables streams of messages on top of TCP. TCP alone deals with streams of bytes with no inherent concept of a message. **Before WebSocket, port 80 full-duplex communication was attainable using [Comet](https://en.wikipedia.org/wiki/Comet_(programming) "Comet (programming)") channels;** however, Comet implementation is nontrivial, and due to the TCP handshake and HTTP header overhead, it is inefficient for small messages. The WebSocket protocol aims to solve these problems without compromising the security assumptions of the web.

> **The WSS protocol establishes a WebSocket over an encrypted TLS connection, while the WS protocol uses an unencrypted connection**. At this point, the network connection remains open and can be used to send WebSocket messages in either direction.


### WebSocket Use Scenario
**When can a web socket be used:**
- **Real-time web application:** Real-time web application uses a web socket to show the data at the client end, which is continuously being sent by the backend server. In WebSocket, data is continuously pushed/transmitted into the same connection which is already open, that is why WebSocket is faster and improves the application performance. 
	- For e.g. in a trading website or bitcoin trading, for displaying the price fluctuation and movement data is continuously pushed by the backend server to the client end by using a WebSocket channel.
 
- **Gaming application:** In a Gaming application, you might focus on that, data is continuously received by the server, and without refreshing the UI, it will take effect on the screen, UI gets automatically refreshed without even establishing the new connection, so it is very helpful in a Gaming application.
 
- **Chat application:** Chat applications use WebSockets to establish the connection only once for exchange, publishing, and broadcasting the message among the subscribers. It reuses the same WebSocket connection, for sending and receiving the message and for one-to-one message transfer.

**When not to use WebSocket:**
- WebSocket can be used if we want any real-time updated or continuous streams of data that are being transmitted over the network. If we want to fetch old data, or want to get the data only once to process it with an application we should go with HTTP protocol, old data which is not required very frequently or fetched only once can be queried by the simple HTTP request, so in this scenario, it’s better not use WebSocket.

> **Note:** RESTful web services are sufficient to get the data from the server if we are loading the data only once.



## Ref
[👍 What is web socket and how it is different from the HTTP? | GeeksforGeeks]: https://www.geeksforgeeks.org/what-is-web-socket-and-how-it-is-different-from-the-http/

|WebSocket Connection|HTTP Connection|
|---|---|
|WebSocket is a bidirectional communication protocol that can send the data from the client to the server or from the server to the client by reusing the established connection channel. The connection is kept alive until terminated by either the client or the server.|The HTTP protocol is a unidirectional protocol that works on top of TCP protocol which is a connection-oriented transport layer protocol, we can create the connection by using HTTP request methods after getting the response HTTP connection get closed.|
|Almost all the real-time applications like (trading, monitoring, notification) services use WebSocket to receive the data on a single communication channel.|Simple RESTful application uses HTTP protocol which is stateless.|
|All the frequently updated applications used WebSocket because it is faster than HTTP Connection.|When we do not want to retain a connection for a particular amount of time or reuse the connection for transmitting data; An HTTP connection is slower than WebSockets.|


[Comet (programming) | wikipedia]: https://en.wikipedia.org/wiki/Comet_(programming)

[Server-sent events | wikipedia]: https://en.wikipedia.org/wiki/Server-sent_events

