# HTTP Connection Management

[TOC]



## Res
### Related Topics



## Connection Management in HTTP/1

### Protocol Upgrade Mechanism
The [HTTP/1.1 protocol](https://developer.mozilla.org/en-US/docs/Web/HTTP) provides a special mechanism that can be used to upgrade an already established connection to a different protocol, using the [`Upgrade`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade) header field.

This mechanism is optional; it cannot be used to insist on a protocol change. Implementations can choose not to take advantage of an upgrade even if they support the new protocol, and in practice, this mechanism is used mostly to bootstrap a WebSockets connection.

> ⚠ Note also that HTTP/2 explicitly disallows the use of this mechanism; it is specific to HTTP/1.1.


## Connection Management in HTTP/2



## Ref

