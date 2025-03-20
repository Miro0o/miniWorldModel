# Data Serialization & Deserialization

[TOC]



## Res
### Related Topics
↗ [Network Programming & RPC](../../../Network%20Programming%20&%20RPC/Network%20Programming%20&%20RPC.md)
- ↗ [RMI (Remote Method Invocation)](../../../Network%20Programming%20&%20RPC/RMI%20(Remote%20Method%20Invocation).md)
↗ [Remote Procedure Call (RPC)](../../../../👷🏾‍♂️%20Computer%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20IO%20System/IO%20Generality%20(via%20Abstraction)/🛜%20Network%20Sockets/Remote%20Procedure%20Call%20(RPC).md)
↗ [RPC Services](../../../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20Web%20Development%20&%20The%20Internet/🗄️%20Web%20BackEnd%20Dev%20&%20Middleware/Web%20Dev%20Middleware/RPC%20Services/RPC%20Services.md)
↗ [APIs & Interfaces in Web Development](../../../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20Web%20Development%20&%20The%20Internet/👬%20APIs%20&%20Interfaces%20in%20Web%20Development/APIs%20&%20Interfaces%20in%20Web%20Development.md)

↗ [IDL (Interface Description Language) & Data Exchange Formats](../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20for%20Specific%20Areas/🪁%20DSL(Domain%20Specific%20Languages)%20&%20GPL(General%20Purpose%20Languages)/IDL%20(Interface%20Description%20Language)%20&%20Data%20Exchange%20Formats/IDL%20(Interface%20Description%20Language)%20&%20Data%20Exchange%20Formats.md)
- ↗ [XDR (External Data Representation)](../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20for%20Specific%20Areas/🪁%20DSL(Domain%20Specific%20Languages)%20&%20GPL(General%20Purpose%20Languages)/IDL%20(Interface%20Description%20Language)%20&%20Data%20Exchange%20Formats/XDR%20(External%20Data%20Representation).md)
- ↗ [XML (Extensible Markup Language)](../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20for%20Specific%20Areas/🪁%20DSL(Domain%20Specific%20Languages)%20&%20GPL(General%20Purpose%20Languages)/Markup%20DSL%20&%20GPL/XML%20(Extensible%20Markup%20Language).md) + ↗ [SOAP (Simple Object Access Protocol)](../../0x01%20Application%20Layer/🔥%20Web%20(WWW)%20Protocols/SOAP%20(Simple%20Object%20Access%20Protocol).md)
- ↗ [JSON](../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20for%20Specific%20Areas/🪁%20DSL(Domain%20Specific%20Languages)%20&%20GPL(General%20Purpose%20Languages)/IDL%20(Interface%20Description%20Language)%20&%20Data%20Exchange%20Formats/JSON.md) + ↗ [HTTP (HyperText Transfer Protocol)](../../0x01%20Application%20Layer/🔥%20Web%20(WWW)%20Protocols/HTTP%20(HyperText%20Transfer%20Protocol)/HTTP%20(HyperText%20Transfer%20Protocol).md)
- ↗ [YAML (Yet Another Markup Language)](../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20for%20Specific%20Areas/🪁%20DSL(Domain%20Specific%20Languages)%20&%20GPL(General%20Purpose%20Languages)/Markup%20DSL%20&%20GPL/YAML%20(Yet%20Another%20Markup%20Language).md)
- ↗ [Property List (.plist)](../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20for%20Specific%20Areas/🪁%20DSL(Domain%20Specific%20Languages)%20&%20GPL(General%20Purpose%20Languages)/IDL%20(Interface%20Description%20Language)%20&%20Data%20Exchange%20Formats/Property%20List%20(.plist).md)
- etc.

↗ [Data Compression Technologies](../../../../🧙‍♂️%20Algorithm%20&%20Data%20Structure/Data%20Compression%20Technologies/Data%20Compression%20Technologies.md)

↗ [Insecure Deserialization](../../../../../CyberSecurity/Application%20Security/💉%20Web%20Security/🛟%20Web%20Application%20Security%20Risks%20(Threats,%20Attacks,%20Vulnerabilities)%20&%20OWASP/Software%20and%20Data%20Integrity%20Failures/Insecure%20Deserialization.md)



## Intro
> 🔗 https://docs.python-guide.org/scenarios/serialization/


### What is data serialization?
Data serialization is the process of converting structured data to a format that allows sharing or storage of the data in a form that allows recovery of its original structure. In some cases, the secondary intention of data serialization is to minimize the data’s size which then reduces disk space or bandwidth requirements.

---
> 🔗 https://javaguide.cn/java/basis/serialization.html

下面是序列化和反序列化常见应用场景：
- 对象在进行网络传输（比如远程方法调用 RPC 的时候）之前需要先被序列化，接收到序列化的对象之后需要再进行反序列化；
- 将对象存储到文件之前需要进行序列化，将对象从文件中读取出来需要进行反序列化；
- 将对象存储到数据库（如 Redis）之前需要用到序列化，将对象从缓存数据库中读取出来需要反序列化；
- 将对象存储到内存之前需要进行序列化，从内存中读取出来之后需要进行反序列化。

维基百科是如是介绍序列化的：
> **序列化**（serialization）在计算机科学的数据处理中，是指将数据结构或对象状态转换成可取用格式（例如存成文件，存于缓冲，或经由网络中发送），以留待后续在相同或另一台计算机环境中，能恢复原先状态的过程。依照序列化格式重新获取字节的结果时，可以利用它来产生与原始对象相同语义的副本。对于许多对象，像是使用大量引用的复杂对象，这种序列化重建的过程并不容易。面向对象中的对象序列化，并不概括之前原始对象所关系的函数。这种过程也称为对象编组（marshalling）。从一系列字节提取数据结构的反向操作，是反序列化（也称为解编组、deserialization、unmarshalling）。
> 
> 🔗 https://en.wikipedia.org/wiki/Serialization
> In computing, **serialization** (or **serialisation**) is the process of translating a data structure or object state into a format that can be stored (e.g. files in secondary storage devices, data buffers in primary storage devices) or transmitted (e.g. data streams over computer networks and reconstructed later (possibly in a different computer environment). When the resulting series of bits is reread according to the serialization format, it can be used to create a semantically identical clone of the original object. For many complex objects, such as those that make extensive use of references, this process is not straightforward. Serialization of objects does not include any of their associated methods with which they were previously linked.
> This process of serializing an object is also called [marshalling](https://en.wikipedia.org/wiki/Marshalling_(computer_science) "Marshalling (computer science)") an object in some situations. The opposite operation, extracting a data structure from a series of bytes, is **deserialization**, (also called **unserialization** or **[unmarshalling](https://en.wikipedia.org/wiki/Unmarshalling "Unmarshalling")**).
> In networking equipment hardware, the part that is responsible for serialization and deserialization is commonly called [SerDes](https://en.wikipedia.org/wiki/SerDes "SerDes").

综上：**序列化的主要目的是通过网络传输对象或者说是将对象存储到文件系统、数据库、内存中。**
![](https://oss.javaguide.cn/github/javaguide/a478c74d-2c48-40ae-9374-87aacf05188c.png)


### Flat vs. Nested data
Before beginning to serialize data, it is important to identify or decide how the data should be structured during data serialization - flat or nested. The differences in the two styles are shown in the below examples.

Flat style:
```python
{ "Type" : "A", "field1": "value1", "field2": "value2", "field3": "value3" }
```

Nested style:
``` python
{"A"
    { "field1": "value1", "field2": "value2", "field3": "value3" } }
```

For more reading on the two styles, please see the discussion on [Python mailing list](https://mail.python.org/pipermail/python-list/2010-October/590762.html),[IETF mailing list](https://www.ietf.org/mail-archive/web/json/current/msg03739.html) and [in stackexchange](https://softwareengineering.stackexchange.com/questions/350623/flat-or-nested-json-for-hierarchal-data).



## Data Serialization Formats & Protocols
> 🔗 https://en.wikipedia.org/wiki/Serialization

The [Xerox Network Systems](https://en.wikipedia.org/wiki/Xerox_Network_Systems "Xerox Network Systems") Courier technology in the early 1980s influenced the first widely adopted standard. [Sun Microsystems](https://en.wikipedia.org/wiki/Sun_Microsystems "Sun Microsystems") published the [External Data Representation](https://en.wikipedia.org/wiki/External_Data_Representation "External Data Representation") (XDR) in 1987. XDR is an [open format](https://en.wikipedia.org/wiki/Open_format "Open format"), and standardized as [STD 67](https://tools.ietf.org/html/std67) (RFC 4506).

In the late 1990s, a push to provide an alternative to the standard serialization protocols started: [XML](https://en.wikipedia.org/wiki/XML "XML"), an [SGML](https://en.wikipedia.org/wiki/SGML "SGML") subset, was used to produce a human-readable [text-based encoding](https://en.wikipedia.org/wiki/Binary-to-text_encoding "Binary-to-text encoding"). Such an encoding can be useful for persistent objects that may be read and understood by humans, or communicated to other systems regardless of programming language. It has the disadvantage of losing the more compact, byte-stream-based encoding, but by this point larger storage and transmission capacities made file size less of a concern than in the early days of computing. In the 2000s, XML was often used for asynchronous transfer of structured data between client and server in [Ajax](https://en.wikipedia.org/wiki/Ajax_(programming) "Ajax (programming)") web applications. XML is an open format, and standardized as a [W3C recommendation](https://www.w3.org/TR/xml11/).

[JSON](https://en.wikipedia.org/wiki/JSON "JSON") is a lightweight plain-text alternative to XML, and is also commonly used for client-server communication in web applications. JSON is based on [JavaScript syntax](https://en.wikipedia.org/wiki/JavaScript_syntax "JavaScript syntax"), but is independent of JavaScript and supported in many other programming languages. JSON is an open format, standardized as [STD 90](https://tools.ietf.org/html/std90) ([RFC](https://en.wikipedia.org/wiki/RFC_(identifier) "RFC (identifier)") [8259](https://datatracker.ietf.org/doc/html/rfc8259)), [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf), and [ISO/IEC 21778:2017](https://www.iso.org/standard/71616.html).

[YAML](https://en.wikipedia.org/wiki/YAML "YAML") is a strict superset of JSON and includes additional features such as a data type tags, support for cyclic data structures, indentation-sensitive syntax, and multiple forms of scalar data quoting. YAML is an open format.

[Property lists](https://en.wikipedia.org/wiki/Property_list "Property list") are used for serialization by [NeXTSTEP](https://en.wikipedia.org/wiki/NeXTSTEP "NeXTSTEP"), [GNUstep](https://en.wikipedia.org/wiki/GNUstep "GNUstep"), [macOS](https://en.wikipedia.org/wiki/MacOS "MacOS"), and [iOS](https://en.wikipedia.org/wiki/IOS "IOS") [frameworks](https://en.wikipedia.org/wiki/Software_framework "Software framework"). _Property list_, or _p-list_ for short, doesn't refer to a single serialization format but instead several different variants, some human-readable and one binary.

For large volume scientific datasets, such as satellite data and output of numerical climate, weather, or ocean models, specific binary serialization standards have been developed, e.g. [HDF](https://en.wikipedia.org/wiki/Hierarchical_Data_Format "Hierarchical Data Format"), [netCDF](https://en.wikipedia.org/wiki/NetCDF "NetCDF") and the older [GRIB](https://en.wikipedia.org/wiki/GRIB "GRIB").


### 🎉 Binary Based Serialization Protocols


### 🎉 Text Based Serialization Protocols
↗ [XML (Extensible Markup Language)](../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20for%20Specific%20Areas/🪁%20DSL(Domain%20Specific%20Languages)%20&%20GPL(General%20Purpose%20Languages)/Markup%20DSL%20&%20GPL/XML%20(Extensible%20Markup%20Language).md)]
↗ [JSON](../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20for%20Specific%20Areas/🪁%20DSL(Domain%20Specific%20Languages)%20&%20GPL(General%20Purpose%20Languages)/IDL%20(Interface%20Description%20Language)%20&%20Data%20Exchange%20Formats/JSON.md)



## Ref
[👍 Java 序列化详解 | Java Guide]: https://javaguide.cn/java/basis/serialization.html

[序列化和反序列化 | 美团技术团队]: https://tech.meituan.com/2015/02/26/serialization-vs-deserialization.html
温馨提醒：本文系2015年文章，相关信息可能会有变化，请参考最新的技术介绍。感谢大家理解。
1. 定义以及相关概念
2. 序列化协议特性
	1. 通用性
	2. 强健性/鲁棒性
	3. 可调试性/可读性
	4. 性能
	5. 可扩展性/兼容性
	6. 安全性/访问限制
3. 序列化和反序列化的组件
	1. ![](../../../../../../Assets/Pics/Pasted%20image%2020240831235525.png)
4. 几种常见的序列化和反序列化协议
	1. 互联网早期的序列化协议主要有COM和CORBA。
	2. XML + SOAP + WebService 框架
	3. JSON（Javascript Object Notation）+ HTTP Rest
	4. Thrift
	5. Protobuf
	6. Avro
5. Benchmark以及选型建议
	1. 解析性能 ![](../../../../../../Assets/Pics/Pasted%20image%2020240831235406.png)
	2. 空间开销 ![](../../../../../../Assets/Pics/Pasted%20image%2020240831235416.png)
	3. 以上描述的五种序列化和反序列化协议都各自具有相应的特点，适用于不同的场景：
	4. 对于公司间的系统调用，如果性能要求在100ms以上的服务，基于XML的SOAP协议是一个值得考虑的方案。
	5. 基于Web browser的Ajax，以及Mobile app与服务端之间的通讯，JSON协议是首选。对于性能要求不太高，或者以动态类型语言为主，或者传输数据载荷很小的的运用场景，JSON也是非常不错的选择
	6. 对于调试环境比较恶劣的场景，采用JSON或XML能够极大的提高调试效率，降低系统开发成本
	7. 当对性能和简洁性有极高要求的场景，Protobuf，Thrift，Avro之间具有一定的竞争关系
	8. 对于T级别的数据的持久化应用场景，Protobuf和Avro是首要选择。如果持久化后的数据存储在Hadoop子项目里，Avro会是更好的选择
	9. 由于Avro的设计理念偏向于动态类型语言，对于动态语言为主的应用场景，Avro是更好的选择
	10. 对于持久层非Hadoop项目，以静态类型语言为主的应用场景，Protobuf会更符合静态类型语言工程师的开发习惯
	11. 如果需要提供一个完整的RPC解决方案，Thrift是一个好的选择
	12. 如果序列化之后需要支持不同的传输层协议，或者需要跨防火墙访问的高性能场景，Protobuf可以优先考虑。

[全网最详细最齐全的序列化技术及深度解析与应用实战]: https://www.cnblogs.com/mic112/p/15559723.html
所谓的序列化，就是把一个对象，转化为某种特定的形式，然后以数据流的方式传输。 比如把一个对象直接转化为二进制数据流进行传输。当然这个对象可以转化为其他形式之后再转化为数据流。 比如XML、JSON等格式。它们通过另外一种数据格式表达了一个对象的状态，然后再把这些数据转化为二进制数据流进行网络传输。反序列化是序列化的逆向过程，把字节数组反序列化为对象，把字节序列恢复为对象的过程成为对象的反序列化
- XML 序列化
	- XML序列化的好处在于可读性好，方便阅读和调试。但是序列化以后的字节码文件比较大，而且效率不高，适用于对性能不高，而且QPS较低的企业级内部系统之间的数据交换的场景，同时XML又具有语言无关性，所以还可以用于异构系统之间的数据交换和协议。比如我们熟知的Webservice，就是采用XML格式对数据进行序列化的。XML序列化/反序列化的实现方式有很多，熟知的方式有XStream和Java自带的XML序列化和反序列化两种。
- JSON 序列化
	- JSON（JavaScript Object Notation）是一种轻量级的数据交换格式，相对于XML来说，JSON的字节流更小，而且可读性也非常好。现在JSON数据格式在企业运用是最普遍的
	- JSON序列化常用的开源工具有很多
		- Jackson （[https://github.com/FasterXML/jackson）](https://github.com/FasterXML/jackson%EF%BC%89)
		- 阿里开源的FastJson （[https://github.com/alibaba/fastjon）](https://github.com/alibaba/fastjon%EF%BC%89)
		- Google的GSON ([https://github.com/google/gson](https://github.com/google/gson))
	- 这几种json序列化工具中，Jackson与fastjson要比GSON的性能要好，但是Jackson、GSON的稳定性要比Fastjson好。而fastjson的优势在于提供的api非常容易使用
- Hessian序列化
	- Hessian是一个支持跨语言传输的二进制序列化协议，相对于Java默认的序列化机制来说，Hessian具有更好的性能和易用性，而且支持多种不同的语言
	- 实际上Dubbo采用的就是Hessian序列化来实现，只不过Dubbo对Hessian进行了重构，性能更高
- Avro序列化
	- Avro是一个数据序列化系统，设计用于支持大批量数据交换的应用。它的主要特点有：支持二进制序列化方式，可以便捷，快速地处理大量数据；动态语言友好，Avro提供的机制使动态语言可以方便地处理Avro数据。
	- Avro是apache下hadoop的子项目，拥有序列化、反序列化、RPC功能。序列化的效率比jdk更高，与Google的protobuffer相当，比facebook开源Thrift（后由apache管理了）更优秀。
	- 因为avro采用schema，如果是序列化大量类型相同的对象，那么只需要保存一份类的结构信息+数据，大大减少网络通信或者数据存储量。
- kyro序列化框架
	- Kryo是一种非常成熟的序列化实现，已经在Hive、Storm）中使用得比较广泛，不过它不能跨语言. 目前dubbo已经在2.6版本支持kyro的序列化机制。它的性能要优于之前的hessian2
	- zookeeper中使用jute作为序列化
- Protobuf序列化
	- Protobuf是Google的一种数据交换格式，它独立于语言、独立于平台。Google提供了多种语言来实现，比如Java、C、Go、Python，每一种实现都包含了相应语言的编译器和库文件，Protobuf是一个纯粹的表示层协议，可以和各种传输层协议一起使用。
	- Protobuf使用比较广泛，主要是空间开销小和性能比较好，非常适合用于公司内部对性能要求高的RPC调用。 另外由于解析性能比较高，序列化以后数据量相对较少，所以也可以应用在对象的持久化场景中
	- 但是要使用Protobuf会相对来说麻烦些，因为他有自己的语法，有自己的编译器，如果需要用到的话必须要去投入成本在这个技术的学习中
	- protobuf有个缺点就是要传输的每一个类的结构都要生成对应的proto文件，如果某个类发生修改，还得重新生成该类对应的proto文件

[序列化和反序列化]: https://web.suda.edu.cn/hejun/local_csharp/chapter8/csharp_8_6.html
