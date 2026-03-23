# Apache Thrift

[TOC]



## Res
### Related Topics
↗ [ASF (Apache Software Foundation)](../../../../../../Open%20Source%20(Free%20Software)%20Spirits%20&%20Software%20License/Free%20Software%20Organizations/ASF%20(Apache%20Software%20Foundation).md)



## Intro
Thrift is a lightweight, language-independent software stack for point-to-point RPC implementation. Thrift provides clean abstractions and implementations for data transport, data serialization, and application level processing. The code generation system takes a simple definition language as input and generates code across programming languages that uses the abstracted stack to build interoperable RPC clients and servers.

![Apache Thrift Layered Architecture](../../../../../../../../Assets/Pics/thrift-layers.png)

Thrift makes it easy for programs written in different programming languages to share data and call remote procedures. With support for [28 programming languages](https://github.com/apache/thrift/blob/master/LANGUAGES.md), chances are Thrift supports the languages that you currently use.

Thrift is specifically designed to support non-atomic version changes across client and server code. This allows you to upgrade your server while still being able to service older clients; or have newer clients issue requests to older servers. An excellent community-provided write-up about thrift and compatibility when versioning an API can be found in the [Thrift Missing Guide](https://diwakergupta.github.io/thrift-missing-guide/#_versioning_compatibility).

For more details on Thrift's design and implementation, see the Thrift whitepaper included in this distribution, or at the README.md file in your particular subdirectory of interest.



## Ref