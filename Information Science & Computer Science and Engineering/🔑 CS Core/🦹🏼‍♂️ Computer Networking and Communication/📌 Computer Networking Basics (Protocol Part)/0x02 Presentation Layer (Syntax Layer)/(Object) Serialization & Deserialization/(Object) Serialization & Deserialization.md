# (Object) Serialization & Deserialization

[TOC]



## Res
### Related Topics
↗ [Network Programming & RPC](../../../Network%20Programming%20&%20RPC/Network%20Programming%20&%20RPC.md)
- ↗ [RMI (Remote Method Invocation)](../../../Network%20Programming%20&%20RPC/RMI%20(Remote%20Method%20Invocation).md)
↗ [Remote Procedure Call (RPC)](../../../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20IO%20System/IO%20Generality%20(via%20Abstraction)/🛜%20Network%20Sockets/Remote%20Procedure%20Call%20(RPC).md)
↗ [RPC Services](../../../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20The%20Internet%20Development%20(and%20Web%20Development)/🗄️%20Web%20BackEnd%20Dev%20&%20Middleware/Web%20Dev%20Middleware/RPC%20Services/RPC%20Services.md)
- ↗ [gRPC](../../../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20The%20Internet%20Development%20(and%20Web%20Development)/🗄️%20Web%20BackEnd%20Dev%20&%20Middleware/Web%20Dev%20Middleware/RPC%20Services/gRPC/gRPC.md)
- ↗ [Apache Dubbo](../../../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20The%20Internet%20Development%20(and%20Web%20Development)/🗄️%20Web%20BackEnd%20Dev%20&%20Middleware/Web%20Dev%20Middleware/RPC%20Services/Apache%20Dubbo/Apache%20Dubbo.md)
- ↗ [Apache Thrift](../../../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20The%20Internet%20Development%20(and%20Web%20Development)/🗄️%20Web%20BackEnd%20Dev%20&%20Middleware/Web%20Dev%20Middleware/RPC%20Services/Apache%20Thrift/Apache%20Thrift.md)
- ↗ [Apache Avro](../../../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20The%20Internet%20Development%20(and%20Web%20Development)/🗄️%20Web%20BackEnd%20Dev%20&%20Middleware/Web%20Dev%20Middleware/RPC%20Services/Apache%20Avro/Apache%20Avro.md)

↗ [APIs & Interfaces in Web Development](../../../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20The%20Internet%20Development%20(and%20Web%20Development)/👬%20APIs%20&%20Interfaces%20in%20Web%20Development/APIs%20&%20Interfaces%20in%20Web%20Development.md)

↗ [IDL (Interface Description Language) & Data Exchange Formats](../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🪁%20DSL(Domain%20Specific%20Languages)%20&%20GPL(General%20Purpose%20Languages)/IDL%20(Interface%20Description%20Language)%20&%20Data%20Exchange%20&%20Serialization/IDL%20(Interface%20Description%20Language)%20&%20Data%20Exchange%20Formats.md)
- ↗ [XDR (External Data Representation)](../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🪁%20DSL(Domain%20Specific%20Languages)%20&%20GPL(General%20Purpose%20Languages)/IDL%20(Interface%20Description%20Language)%20&%20Data%20Exchange%20&%20Serialization/XDR%20(External%20Data%20Representation).md)
- ↗ [XML (Extensible Markup Language)](../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🪁%20DSL(Domain%20Specific%20Languages)%20&%20GPL(General%20Purpose%20Languages)/Markup%20Languages%20&%20Data%20Representation/XML%20(Extensible%20Markup%20Language).md) + ↗ [SOAP (Simple Object Access Protocol)](../../0x01%20Application%20Layer/🔥%20Web%20(WWW)%20Protocols/SOAP%20(Simple%20Object%20Access%20Protocol).md)
- ↗ [JSON](../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🪁%20DSL(Domain%20Specific%20Languages)%20&%20GPL(General%20Purpose%20Languages)/IDL%20(Interface%20Description%20Language)%20&%20Data%20Exchange%20&%20Serialization/JSON.md) + ↗ [HTTP (HyperText Transfer Protocol)](../../0x01%20Application%20Layer/🔥%20Web%20(WWW)%20Protocols/HTTP%20(HyperText%20Transfer%20Protocol)/HTTP%20(HyperText%20Transfer%20Protocol).md)
- ↗ [YAML (Yet Another Markup Language)](../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🪁%20DSL(Domain%20Specific%20Languages)%20&%20GPL(General%20Purpose%20Languages)/Markup%20Languages%20&%20Data%20Representation/YAML%20(Yet%20Another%20Markup%20Language).md)
- ↗ [Property List (.plist)](../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🪁%20DSL(Domain%20Specific%20Languages)%20&%20GPL(General%20Purpose%20Languages)/IDL%20(Interface%20Description%20Language)%20&%20Data%20Exchange%20&%20Serialization/Property%20List%20(.plist).md)
- etc.

↗ [Data Compression Technologies](../../../../🧙‍♂️%20Algorithm%20&%20Data%20Structure/Other%20Topics%20in%20Algorithms/Data%20Compression%20Technologies/Data%20Compression%20Technologies.md)
↗ [Media Formats & Standards & Codec (Coder-Decoder)](../../../../🧙‍♂️%20Algorithm%20&%20Data%20Structure/Other%20Topics%20in%20Algorithms/Data%20Compression%20Technologies/Media%20Formats%20&%20Standards%20&%20Codec%20(Coder-Decoder)/Media%20Formats%20&%20Standards%20&%20Codec%20(Coder-Decoder).md)

↗ [Insecure Deserialization](../../../../../CyberSecurity/Application%20Security/💉%20Web%20Security/🛟%20Web%20Application%20Security%20Risks%20(Threats,%20Attacks,%20Vulnerabilities)%20&%20OWASP/Insecure%20Design%20&%20Failures/Software%20and%20Data%20Integrity%20Failures/Insecure%20Deserialization.md)



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
> **序列化**（serialization）在计算机科学的数据处理中，是指将数据结构或对象状态转换成可取用格式（例如存成文件，存于缓冲，或经由网络中发送），==以留待后续在相同或另一台计算机环境中，能恢复原先状态的过程==。依照序列化格式重新获取字节的结果时，可以利用它来产生与原始对象**相同语义**的副本。对于许多对象，像是使用大量引用的复杂对象，这种序列化重建的过程并不容易。面向对象中的对象序列化，并不概括之前原始对象所关系的函数。这种过程也称为对象编组（marshalling）。从一系列字节提取数据结构的反向操作，是反序列化（也称为解编组、deserialization、unmarshalling）。
> 
> 🔗 https://en.wikipedia.org/wiki/Serialization
> In computing, **serialization** (or **serialisation**) is the process of translating a data structure or object state into a format that can be stored (e.g. files in secondary storage devices, data buffers in primary storage devices) or transmitted (e.g. data streams over computer networks and reconstructed later (possibly in a different computer environment). When the resulting series of bits is reread according to the serialization format, it can be used to create a semantically identical clone of the original object. For many complex objects, such as those that make extensive use of references, this process is not straightforward. Serialization of objects does not include any of their associated methods with which they were previously linked.
> This process of serializing an object is also called [marshalling](https://en.wikipedia.org/wiki/Marshalling_(computer_science) "Marshalling (computer science)") an object in some situations. The opposite operation, extracting a data structure from a series of bytes, is **deserialization**, (also called **unserialization** or **[unmarshalling](https://en.wikipedia.org/wiki/Unmarshalling "Unmarshalling")**).
> In networking equipment hardware, the part that is responsible for serialization and deserialization is commonly called [SerDes](https://en.wikipedia.org/wiki/SerDes "SerDes").

综上：**序列化的主要目的是通过网络传输对象或者说是将对象存储到文件系统、数据库、内存中。**
![](https://oss.javaguide.cn/github/javaguide/a478c74d-2c48-40ae-9374-87aacf05188c.png)


### Why need serialization?

![Serialization.excalidraw | 800](../../../../../../Assets/Illustrations/Computer%20Network/Serialization.excalidraw.md)


> 🔗 https://stackoverflow.com/a/3042714/16542494

Say you have two applications that run on two different physical machines. Both of the applications need to exchange data that is commonly used by both applications. These application talk to each other to share the data with some mediums, these mediums could be a file-system, tcp or udp connections or any other suitable network protocol or may be direct in-memory data exchange. Any of these mediums would only understand data that is described in the form of a series of bits. So when one application needs to send a value 10 to another, the value 10 would be sent as its binary representation 1010 and you would also pass some information that describes 1010. This meta information will also be a series of bits that the other application can easily understand. That was easy though.

Lets take another example, wherein these two apps need to exchange a more complex, non primitive data-type. Lets say they need to exchange the objects of type Book where Book is a custom defined class in your application and both the applications have the definition of type Book.

```csharp
public class Book
{
    Book() { }

    public long BookId { get;set; }
    public string Author { get;set; }
    public string Title { get;set; }
}
```

How will you exchange the objects of type book between the two applications? To be able to share the object between two apps, you will need to be able to convert the Book objects into binary representation. This is where serialization comes into the picture.

> This answer does not cover the actual important details behind why serialization is needed. Serialization is not needed because we need a binary representation, it's already in binary! The problem is you just can't do a naive copy and paste of the binary data. This is because of references / pointers (you want actual numbers/values not an address), endianess, and data / metadata that becomes junk because it would have no usefulness out of context. You also have the issue of logically converting the data to the desired serialization format.

With the help of Serialization you can define how an object can be converted into its binary representation. The receiving application would do the reverse process, that is De-Serialization, that constructs a Book object from its binary representation.

---
> 🔗 https://stackoverflow.com/a/53598923/16542494

In procedural language such as Cobol or C there is no concept of serialization. Why do we then use it in OOP? Let us take Java. You have a class which is instantiating multiple classes called Objects, and you want to pass one of those objects state (current values of variables) over network through Message Oriented Middleware in the form of byte stream, and you need serialization and de-serialization. If multiple languages agree on this byte stream format, serialization can even provide a way for otherwise incompatible systems to exchange data.


### Serialization Uses
> 🔗 https://en.wikipedia.org/wiki/Serialization

Uses of serialization include:
- serializing data for transfer across wires and networks (messaging).
- storing data (in databases, on hard disk drives).
- remote procedure calls, e.g., as in SOAP.
- distributing objects, especially in component-based software engineering such as COM, CORBA, etc.
- detecting changes in time-varying data.

For some of these features to be useful, architecture independence must be maintained. For example, for maximal use of distribution, a computer running on a different hardware architecture should be able to reliably reconstruct a serialized data stream, regardless of endianness. This means that the simpler and faster procedure of directly copying the memory layout of the data structure cannot work reliably for all architectures. Serializing the data structure in an architecture-independent format means preventing the problems of byte ordering, memory layout, or simply different ways of representing data structures in different programming languages.

Inherent to any serialization scheme is that, because the encoding of the data is by definition serial, extracting one part of the serialized data structure requires that the entire object be read from start to end, and reconstructed. In many applications, this linearity is an asset, because it enables simple, common I/O interfaces to be utilized to hold and pass on the state of an object. In applications where higher performance is an issue, it can make sense to expend more effort to deal with a more complex, non-linear storage organization.

Even on a single machine, primitive pointer objects are too fragile to save because the objects to which they point may be reloaded to a different location in memory. To deal with this, the serialization process includes a step called unswizzling or pointer unswizzling, where direct pointer references are converted to references based on name or position. The deserialization process includes an inverse step called pointer swizzling.

Since both serializing and deserializing can be driven from common code (for example, the Serialize function in Microsoft Foundation Classes), it is possible for the common code to do both at the same time, and thus, 1) detect differences between the objects being serialized and their prior copies, and 2) provide the input for the next such detection. It is not necessary to actually build the prior copy because differences can be detected on the fly, a technique called differential execution. This is useful in the programming of user interfaces whose contents are time-varying — graphical objects can be created, removed, altered, or made to handle input events without necessarily having to write separate code to do those things.


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


### Insecure Deserialization as Vulnerability
↗ [Insecure Deserialization](../../../../../CyberSecurity/Application%20Security/💉%20Web%20Security/🛟%20Web%20Application%20Security%20Risks%20(Threats,%20Attacks,%20Vulnerabilities)%20&%20OWASP/Insecure%20Design%20&%20Failures/Software%20and%20Data%20Integrity%20Failures/Insecure%20Deserialization.md)



## Data Serialization Formats & Protocols
> 🔗 https://en.wikipedia.org/wiki/Serialization

The [Xerox Network Systems](https://en.wikipedia.org/wiki/Xerox_Network_Systems "Xerox Network Systems") Courier technology in the early 1980s influenced the first widely adopted standard. [Sun Microsystems](https://en.wikipedia.org/wiki/Sun_Microsystems "Sun Microsystems") published the [External Data Representation](https://en.wikipedia.org/wiki/External_Data_Representation "External Data Representation") (XDR) in 1987. XDR is an [open format](https://en.wikipedia.org/wiki/Open_format "Open format"), and standardized as [STD 67](https://tools.ietf.org/html/std67) (RFC 4506).

In the late 1990s, a push to provide an alternative to the standard serialization protocols started: [XML](https://en.wikipedia.org/wiki/XML "XML"), an [SGML](https://en.wikipedia.org/wiki/SGML "SGML") subset, was used to produce a human-readable [text-based encoding](https://en.wikipedia.org/wiki/Binary-to-text_encoding "Binary-to-text encoding"). Such an encoding can be useful for persistent objects that may be read and understood by humans, or communicated to other systems regardless of programming language. It has the disadvantage of losing the more compact, byte-stream-based encoding, but by this point larger storage and transmission capacities made file size less of a concern than in the early days of computing. In the 2000s, XML was often used for asynchronous transfer of structured data between client and server in [Ajax](https://en.wikipedia.org/wiki/Ajax_(programming) "Ajax (programming)") web applications. XML is an open format, and standardized as a [W3C recommendation](https://www.w3.org/TR/xml11/).

[JSON](https://en.wikipedia.org/wiki/JSON "JSON") is a lightweight plain-text alternative to XML, and is also commonly used for client-server communication in web applications. JSON is based on [JavaScript syntax](https://en.wikipedia.org/wiki/JavaScript_syntax "JavaScript syntax"), but is independent of JavaScript and supported in many other programming languages. JSON is an open format, standardized as [STD 90](https://tools.ietf.org/html/std90) ([RFC](https://en.wikipedia.org/wiki/RFC_(identifier) "RFC (identifier)") [8259](https://datatracker.ietf.org/doc/html/rfc8259)), [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf), and [ISO/IEC 21778:2017](https://www.iso.org/standard/71616.html).

[YAML](https://en.wikipedia.org/wiki/YAML "YAML") is a strict superset of JSON and includes additional features such as a data type tags, support for cyclic data structures, indentation-sensitive syntax, and multiple forms of scalar data quoting. YAML is an open format.

[Property lists](https://en.wikipedia.org/wiki/Property_list "Property list") are used for serialization by [NeXTSTEP](https://en.wikipedia.org/wiki/NeXTSTEP "NeXTSTEP"), [GNUstep](https://en.wikipedia.org/wiki/GNUstep "GNUstep"), [macOS](https://en.wikipedia.org/wiki/MacOS "MacOS"), and [iOS](https://en.wikipedia.org/wiki/IOS "IOS") [frameworks](https://en.wikipedia.org/wiki/Software_framework "Software framework"). _Property list_, or _p-list_ for short, doesn't refer to a single serialization format but instead several different variants, some human-readable and one binary.

For large volume scientific datasets, such as satellite data and output of numerical climate, weather, or ocean models, specific binary serialization standards have been developed, e.g. [HDF](https://en.wikipedia.org/wiki/Hierarchical_Data_Format "Hierarchical Data Format"), [netCDF](https://en.wikipedia.org/wiki/NetCDF "NetCDF") and the older [GRIB](https://en.wikipedia.org/wiki/GRIB "GRIB").

|                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Human readable](https://en.wikipedia.org/wiki/Human-readable_medium_and_data "Human-readable medium and data") | - [Atom](https://en.wikipedia.org/wiki/Atom_\(web_standard\) "Atom (web standard)")<br>- [CSV](https://en.wikipedia.org/wiki/Comma-separated_values "Comma-separated values")<br>- [EDIFACT](https://en.wikipedia.org/wiki/EDIFACT "EDIFACT")<br>- [JSON](https://en.wikipedia.org/wiki/JSON "JSON") <br>    - [Web Encryption](https://en.wikipedia.org/wiki/JSON_Web_Encryption "JSON Web Encryption")<br>    - [Web Token](https://en.wikipedia.org/wiki/JSON_Web_Token "JSON Web Token")<br>    - [Web Signature](https://en.wikipedia.org/wiki/JSON_Web_Signature "JSON Web Signature")<br>- [Property list](https://en.wikipedia.org/wiki/Property_list "Property list")<br>- [RDF](https://en.wikipedia.org/wiki/Resource_Description_Framework "Resource Description Framework")<br>- [Rebol](https://en.wikipedia.org/wiki/Rebol "Rebol")<br>- [TOML](https://en.wikipedia.org/wiki/TOML "TOML")<br>- [XML](https://en.wikipedia.org/wiki/XML "XML")<br>- [YAML](https://en.wikipedia.org/wiki/YAML "YAML")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [Binary](https://en.wikipedia.org/wiki/Binary_file "Binary file")                                               | - [AMF](https://en.wikipedia.org/wiki/Action_Message_Format "Action Message Format")<br>- [Ascii85](https://en.wikipedia.org/wiki/Ascii85 "Ascii85")<br>- [ASN.1](https://en.wikipedia.org/wiki/ASN.1 "ASN.1") <br>    - [SMI](https://en.wikipedia.org/wiki/Structure_of_Management_Information "Structure of Management Information")<br>- [Avro](https://en.wikipedia.org/wiki/Apache_Avro "Apache Avro")<br>- [Base32](https://en.wikipedia.org/wiki/Base32 "Base32")<br>- [Base64](https://en.wikipedia.org/wiki/Base64 "Base64")<br>- [Bencode](https://en.wikipedia.org/wiki/Bencode "Bencode")<br>- [BSON](https://en.wikipedia.org/wiki/BSON "BSON") <br>    - [UBJSON](https://en.wikipedia.org/wiki/UBJSON "UBJSON")<br>- [Cap'n Proto](https://en.wikipedia.org/wiki/Cap%27n_Proto "Cap'n Proto")<br>- [CBOR](https://en.wikipedia.org/wiki/CBOR "CBOR")<br>- [FlatBuffers](https://en.wikipedia.org/wiki/FlatBuffers "FlatBuffers")<br>- [MessagePack](https://en.wikipedia.org/wiki/MessagePack "MessagePack")<br>- [Property list](https://en.wikipedia.org/wiki/Property_list "Property list")<br>- [Protocol Buffers](https://en.wikipedia.org/wiki/Protocol_Buffers "Protocol Buffers")<br>- [Thrift](https://en.wikipedia.org/wiki/Apache_Thrift "Apache Thrift")<br>- [Cyphal](https://en.wikipedia.org/wiki/Cyphal "Cyphal") DSDL<br>- [XDR](https://en.wikipedia.org/wiki/External_Data_Representation "External Data Representation")<br>- [uuencode](https://en.wikipedia.org/wiki/Uuencoding "Uuencoding")<br>- [yEnc](https://en.wikipedia.org/wiki/YEnc "YEnc") |



## Programming Languages Supports
> 🔗 https://en.wikipedia.org/wiki/Serialization

Several object-oriented programming languages directly support object serialization (or object archival), either by syntactic sugar elements or providing a standard interface for doing so. The languages which do so include Ruby, Smalltalk, Python, PHP, Objective-C, Delphi, Java, and the .NET family of languages. There are also libraries available that add serialization support to languages that lack native support for it.


### C and C++
[C](https://en.wikipedia.org/wiki/C_\(programming_language\) "C (programming language)") and [C++](https://en.wikipedia.org/wiki/C%2B%2B "C++") do not provide serialization as any sort of high-level construct, but both languages support writing any of the built-in [data types](https://en.wikipedia.org/wiki/C_data_types "C data types"), as well as [plain old data](https://en.wikipedia.org/wiki/Plain_old_data "Plain old data") [structs](https://en.wikipedia.org/wiki/Struct_\(C_programming_language\) "Struct (C programming language)"), as binary data. As such, it is usually trivial to write custom serialization functions. Moreover, compiler-based solutions, such as the ODB [ORM](https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping "Object–relational mapping") system for C++ and the [gSOAP](https://en.wikipedia.org/wiki/GSOAP "GSOAP") toolkit for C and C++, are capable of automatically producing serialization code with few or no modifications to class declarations. Other popular serialization frameworks are Boost.Serialization[[7]](https://en.wikipedia.org/wiki/Serialization#cite_note-7) from the [Boost Framework](https://en.wikipedia.org/wiki/Boost_C%2B%2B_Libraries "Boost C++ Libraries"), the S11n framework,[[8]](https://en.wikipedia.org/wiki/Serialization#cite_note-8) and Cereal.[[9]](https://en.wikipedia.org/wiki/Serialization#cite_note-9) [MFC framework](https://en.wikipedia.org/wiki/Microsoft_Foundation_Class_Library "Microsoft Foundation Class Library") (Microsoft) also provides serialization methodology as part of its Document-View architecture.


### CFML
[CFML](https://en.wikipedia.org/wiki/CFML "CFML") allows data structures to be serialized to [WDDX](https://en.wikipedia.org/wiki/WDDX "WDDX") with the `[<cfwddx>](https://wikidocs.adobe.com/wiki/display/coldfusionen/cfwddx)` tag and to [JSON](https://en.wikipedia.org/wiki/JSON "JSON") with the [SerializeJSON()](https://wikidocs.adobe.com/wiki/display/coldfusionen/serializejson) function.


### Delphi
[Delphi](https://en.wikipedia.org/wiki/Delphi_\(programming_language\) "Delphi (programming language)") provides a built-in mechanism for serialization of components (also called persistent objects), which is fully integrated with its [IDE](https://en.wikipedia.org/wiki/Integrated_development_environment "Integrated development environment"). The component's contents are saved to a DFM file and reloaded on-the-fly.


### Go
[Go](https://en.wikipedia.org/wiki/Go_\(programming_language\) "Go (programming language)") natively supports unmarshalling/marshalling of [JSON](https://en.wikipedia.org/wiki/JSON "JSON") and [XML](https://en.wikipedia.org/wiki/XML "XML") data.[[10]](https://en.wikipedia.org/wiki/Serialization#cite_note-10) There are also third-party modules that support [YAML](https://en.wikipedia.org/wiki/YAML "YAML")[[11]](https://en.wikipedia.org/wiki/Serialization#cite_note-11) and [Protocol Buffers](https://en.wikipedia.org/wiki/Protocol_Buffers "Protocol Buffers").[[12]](https://en.wikipedia.org/wiki/Serialization#cite_note-12) Go also supports _Gobs_.[[13]](https://en.wikipedia.org/wiki/Serialization#cite_note-13)


### Haskell
In Haskell, serialization is supported for types that are members of the Read and Show [type classes](https://en.wikipedia.org/wiki/Type_class "Type class"). Every type that is a member of the `Read` type class defines a function that will extract the data from the string representation of the dumped data. The `Show` type class, in turn, contains the `show` function from which a string representation of the object can be generated. The programmer need not define the functions explicitly—merely declaring a type to be deriving Read or deriving Show, or both, can make the compiler generate the appropriate functions for many cases (but not all: function types, for example, cannot automatically derive Show or Read). The auto-generated instance for Show also produces valid source code, so the same Haskell value can be generated by running the code produced by show in, for example, a Haskell interpreter.[[14]](https://en.wikipedia.org/wiki/Serialization#cite_note-14) For more efficient serialization, there are haskell libraries that allow high-speed serialization in binary format, e.g. [binary](http://hackage.haskell.org/package/binary).


### Java
Java provides automatic serialization which requires that the object be [marked](https://en.wikipedia.org/wiki/Marker_interface_pattern "Marker interface pattern") by implementing the `java.io.Serializable` ([link]((https://docs.oracle.com/en/java/javase/19/docs/api/java.base/java/io/Serializable.html)) [interface](https://en.wikipedia.org/wiki/Interface_\(Java\) "Interface (Java)"). Implementing the interface marks the class as "okay to serialize", and Java then handles serialization internally. There are no serialization methods defined on the `Serializable` interface, but a serializable class can optionally define methods with certain special names and signatures that if defined, will be called as part of the serialization/deserialization process. The language also allows the developer to override the serialization process more thoroughly by implementing another interface, the `Externalizable` ([link]((https://docs.oracle.com/en/java/javase/19/docs/api/java.base/java/io/Externalizable.html)) interface, which includes two special methods that are used to save and restore the object's state.  
There are three primary reasons why objects are not serializable by default and must implement the `Serializable` interface to access Java's serialization mechanism.  
Firstly, not all objects capture useful semantics in a serialized state. For example, a `Thread` ([link]((https://docs.oracle.com/en/java/javase/19/docs/api/java.base/java/lang/Thread.html)) object is tied to the state of the current [JVM](https://en.wikipedia.org/wiki/JVM "JVM"). There is no context in which a deserialized `Thread` object would maintain useful semantics.  
Secondly, the serialized state of an object forms part of its class' compatibility contract. Maintaining compatibility between versions of serializable classes requires additional effort and consideration. Therefore, making a class serializable needs to be a deliberate design decision and not a default condition.  
Lastly, serialization allows access to non-[transient](https://en.wikipedia.org/wiki/Transient_\(computer_programming\) "Transient (computer programming)") private members of a class that are not otherwise accessible. Classes containing sensitive information (for example, a password) should not be serializable nor externalizable.[[15]](https://en.wikipedia.org/wiki/Serialization#cite_note-Bloch-15): 339–345  The standard encoding method uses a recursive graph-based translation of the object's class descriptor and serializable fields into a byte stream. [Primitives](https://en.wikipedia.org/wiki/Primitive_data_type "Primitive data type") as well as non-transient, non-static referenced objects are encoded into the stream. Each object that is referenced by the serialized object via a field that is not marked as `transient` must also be serialized; and if any object in the complete graph of non-transient object references is not serializable, then serialization will fail. The developer can influence this behavior by marking objects as transient, or by redefining the serialization for an object so that some portion of the reference graph is truncated and not serialized.  
Java does not use constructor to serialize objects. It is possible to serialize Java objects through [JDBC](https://en.wikipedia.org/wiki/JDBC "JDBC") and store them into a database.[[16]](https://en.wikipedia.org/wiki/Serialization#cite_note-16) While [Swing](https://en.wikipedia.org/wiki/Swing_\(Java\) "Swing (Java)") components do implement the Serializable interface, they are not guaranteed to be portable between different versions of the Java Virtual Machine. As such, a Swing component, or any component which inherits it, may be serialized to a byte stream, but it is not guaranteed that this will be re-constitutable on another machine.


### JavaScript
Since ECMAScript 5.1,[[17]](https://en.wikipedia.org/wiki/Serialization#cite_note-17) [JavaScript](https://en.wikipedia.org/wiki/JavaScript "JavaScript") has included the built-in `JSON` object and its methods `JSON.parse()` and `JSON.stringify()`. Although JSON is originally based on a subset of JavaScript,[[18]](https://en.wikipedia.org/wiki/Serialization#cite_note-18) there are boundary cases where JSON is not valid JavaScript. Specifically, JSON allows the [Unicode line terminators](https://en.wikipedia.org/wiki/Unicode#Newlines "Unicode") U+2028 LINE SEPARATOR and U+2029 PARAGRAPH SEPARATOR to appear unescaped in quoted strings, while ECMAScript 2018 and older does not.[[19]](https://en.wikipedia.org/wiki/Serialization#cite_note-json-2028-19)[[20]](https://en.wikipedia.org/wiki/Serialization#cite_note-20) See [the main article on JSON](https://en.wikipedia.org/wiki/JSON#Data_portability_issues "JSON").


### Julia
[Julia](https://en.wikipedia.org/wiki/Julia_\(programming_language\) "Julia (programming language)") implements serialization through the `serialize()` / `deserialize()` modules,[[21]](https://en.wikipedia.org/wiki/Serialization#cite_note-21) intended to work within the same version of Julia, and/or instance of the same system image.[[22]](https://en.wikipedia.org/wiki/Serialization#cite_note-22) The `HDF5.jl` package offers a more stable alternative, using a documented format and common library with wrappers for different languages,[[23]](https://en.wikipedia.org/wiki/Serialization#cite_note-23) while the default serialization format is suggested to have been designed rather with maximal performance for network communication in mind.[[24]](https://en.wikipedia.org/wiki/Serialization#cite_note-24)


### Lisp
Generally a [Lisp](https://en.wikipedia.org/wiki/Lisp_\(programming_language\) "Lisp (programming language)") data structure can be serialized with the functions "`read`" and "`print`". A variable foo containing, for example, a list of arrays would be printed by `(print foo)`. Similarly an object can be read from a stream named s by `(read s)`. These two parts of the Lisp implementation are called the Printer and the Reader. The output of "`print`" is human readable; it uses lists demarked by parentheses, for example: `(4 2.9 "x" y)`. In many types of Lisp, including [Common Lisp](https://en.wikipedia.org/wiki/Common_Lisp "Common Lisp"), the printer cannot represent every type of data because it is not clear how to do so. In Common Lisp for example the printer cannot print CLOS objects. Instead the programmer may write a method on the generic function `print-object`, this will be invoked when the object is printed. This is somewhat similar to the method used in Ruby. Lisp code itself is written in the syntax of the reader, called read syntax. Most languages use separate and different parsers to deal with code and data, Lisp only uses one. A file containing lisp code may be read into memory as a data structure, transformed by another program, then possibly executed or written out, such as in a [read–eval–print loop](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop "Read–eval–print loop"). Not all readers/writers support cyclic, recursive or shared structures.


### .NET
[.NET](https://en.wikipedia.org/wiki/.NET ".NET") has several serializers designed by [Microsoft](https://en.wikipedia.org/wiki/Microsoft "Microsoft"). There are also many serializers by third parties. More than a dozen serializers are discussed and tested [here](http://geekswithblogs.net/LeonidGaneline/archive/2015/05/06/serializers-in-.net.-v.2.aspx).[[25]](https://en.wikipedia.org/wiki/Serialization#cite_note-25) and [here](https://aumcode.github.io/serbench)[[26]](https://en.wikipedia.org/wiki/Serialization#cite_note-26)


### OCaml
[OCaml](https://en.wikipedia.org/wiki/OCaml "OCaml")'s standard library provides marshalling through the `Marshal` module[[3]](https://en.wikipedia.org/wiki/Serialization#cite_note-ocaml-3) and the Pervasives functions `output_value` and `input_value`. While OCaml programming is statically type-checked, uses of the `Marshal` module may break type guarantees, as there is no way to check whether an unmarshalled stream represents objects of the expected type. In OCaml it is difficult to marshal a function or a data structure which contains a function (e.g. an object which contains a method), because executable code in functions cannot be transmitted across different programs. (There is a flag to marshal the code position of a function but it can only be unmarshalled in exactly the same program). The standard marshalling functions can preserve sharing and handle cyclic data, which can be configured by a flag.


### Perl
Several [Perl](https://en.wikipedia.org/wiki/Perl "Perl") modules available from [CPAN](https://en.wikipedia.org/wiki/CPAN "CPAN") provide serialization mechanisms, including `Storable` , `JSON::XS` and `FreezeThaw`. Storable includes functions to serialize and deserialize Perl data structures to and from files or Perl scalars. In addition to serializing directly to files, `Storable` includes the `freeze` function to return a serialized copy of the data packed into a scalar, and `thaw` to deserialize such a scalar. This is useful for sending a complex data structure over a [network socket](https://en.wikipedia.org/wiki/Network_socket "Network socket") or storing it in a database. When serializing structures with `Storable`, there are network safe functions that always store their data in a format that is readable on any computer at a small cost of speed. These functions are named `nstore`, `nfreeze`, etc. There are no "n" functions for deserializing these structures — the regular `thaw` and `retrieve` deserialize structures serialized with the "`n`" functions and their machine-specific equivalents.


### PHP
[PHP](https://en.wikipedia.org/wiki/PHP "PHP") originally implemented serialization through the built-in `serialize()` and `unserialize()` functions.[[27]](https://en.wikipedia.org/wiki/Serialization#cite_note-27) PHP can serialize any of its data types except resources (file pointers, sockets, etc.). The built-in `unserialize()` function is often dangerous when used on completely untrusted data.[[28]](https://en.wikipedia.org/wiki/Serialization#cite_note-28) For objects, there are two "[magic](https://en.wikipedia.org/wiki/Magic_\(programming\) "Magic (programming)") methods" that can be implemented within a class — `__sleep()` and `__wakeup()` — that are called from within `serialize()` and `unserialize()`, respectively, that can clean up and restore an object. For example, it may be desirable to close a database connection on serialization and restore the connection on deserialization; this functionality would be handled in these two magic methods. They also permit the object to pick which properties are serialized. Since PHP 5.1, there is an object-oriented serialization mechanism for objects, the `Serializable` interface.[[29]](https://en.wikipedia.org/wiki/Serialization#cite_note-Serializable-29)


### Prolog
[Prolog](https://en.wikipedia.org/wiki/Prolog "Prolog")'s _term_ structure, which is the only data structure of the language, can be serialized out through the built-in predicate `write_term/3` and serialized-in through the built-in predicates `read/1` and `read_term/2`. The resulting stream is uncompressed text (in some encoding determined by configuration of the target stream), with any free variables in the term represented by placeholder variable names. The predicate `write_term/3` is standardized in the [ISO Specification for Prolog](https://en.wikipedia.org/wiki/Prolog#ISO_Prolog "Prolog") (ISO/IEC 13211-1) on pages 59 ff. ("Writing a term, § 7.10.5"). Therefore it is expected that terms serialized-out by one implementation can be serialized-in by another without ambiguity or surprises. In practice, implementation-specific extensions (e.g. SWI-Prolog's dictionaries) may use non-standard term structures, so interoperability may break in edge cases. As examples, see the corresponding manual pages for SWI-Prolog,[[30]](https://en.wikipedia.org/wiki/Serialization#cite_note-30) SICStus Prolog,[[31]](https://en.wikipedia.org/wiki/Serialization#cite_note-31) GNU Prolog.[[32]](https://en.wikipedia.org/wiki/Serialization#cite_note-32) Whether and how serialized terms received over the network are checked against a specification (after deserialization from the character stream has happened) is left to the implementer. Prolog's built-in [Definite Clause Grammars](https://en.wikipedia.org/wiki/Prolog_syntax_and_semantics#Definite_clause_grammars "Prolog syntax and semantics") can be applied at that stage.


### Python
The core general serialization mechanism is the `pickle` [standard library](https://en.wikipedia.org/wiki/Python_\(programming_language\)#Libraries "Python (programming language)") module, alluding to the database systems term _pickling_[[33]](https://en.wikipedia.org/wiki/Serialization#cite_note-33)[[34]](https://en.wikipedia.org/wiki/Serialization#cite_note-34)[[35]](https://en.wikipedia.org/wiki/Serialization#cite_note-35) to describe data serialization (_unpickling_ for _deserializing_). Pickle uses a simple [stack](https://en.wikipedia.org/wiki/Stack_\(abstract_data_type\) "Stack (abstract data type)")-based [virtual machine](https://en.wikipedia.org/wiki/Virtual_machine "Virtual machine") that records the instructions used to reconstruct the object. It is a cross-version [customisable](https://docs.python.org/library/pickle.html#pickle-protocol) but unsafe (not secure against erroneous or malicious data) serialization format. Malformed or maliciously constructed data, may cause the deserializer to import arbitrary modules and instantiate any object.[[36]](https://en.wikipedia.org/wiki/Serialization#cite_note-autogenerated1-36)[[37]](https://en.wikipedia.org/wiki/Serialization#cite_note-37) The standard library also includes modules serializing to standard data formats: `[json](https://docs.python.org/library/json.html)` (with built-in support for basic scalar and collection types and able to support arbitrary types via [encoding and decoding hooks](https://docs.python.org/library/json.html#encoders-and-decoders)). `[plistlib](https://docs.python.org/library/plistlib.html)` (with support for both binary and XML [property list](https://en.wikipedia.org/wiki/Property_list "Property list") formats). `[xdrlib](https://docs.python.org/library/xdrlib.html)` (with support for the External Data Representation (XDR) standard as described in RFC 1014). Finally, it is recommended that an object's `[__repr__](https://docs.python.org/reference/datamodel.html#object.__repr__)` be evaluable in the right environment, making it a rough match for Common Lisp's `[print-object](http://www.lispworks.com/documentation/HyperSpec/Body/f_pr_obj.htm)`. Not all object types can be pickled automatically, especially ones that hold [operating system](https://en.wikipedia.org/wiki/Operating_system "Operating system") resources like [file handles](https://en.wikipedia.org/wiki/File_handle "File handle"), but users can register custom "reduction" and construction functions to support the pickling and unpickling of arbitrary types. Pickle was originally implemented as the pure Python `pickle` module, but, in versions of Python prior to 3.0, the `cPickle` module (also a built-in) offers improved performance (up to 1000 times faster[[36]](https://en.wikipedia.org/wiki/Serialization#cite_note-autogenerated1-36)). The `cPickle` was adapted from the [Unladen Swallow](https://en.wikipedia.org/wiki/Unladen_Swallow "Unladen Swallow") project. In Python 3, users should always import the standard version, which attempts to import the accelerated version and falls back to the pure Python version.[[38]](https://en.wikipedia.org/wiki/Serialization#cite_note-38)


### R
[R](https://en.wikipedia.org/wiki/R_\(programming_language\) "R (programming language)") has the function `dput` which writes an ASCII text representation of an R object to a file or connection. A representation can be read from a file using `dget`.[[39]](https://en.wikipedia.org/wiki/Serialization#cite_note-39) More specific, the function `serialize` serializes an R object to a connection, the output being a raw vector coded in hexadecimal format. The `unserialize` function allows to read an object from a connection or a raw vector.[[40]](https://en.wikipedia.org/wiki/Serialization#cite_note-40)


### REBOL
[REBOL](https://en.wikipedia.org/wiki/REBOL "REBOL") will serialize to file (`save/all`) or to a `string!` (`mold/all`). Strings and files can be deserialized using the [polymorphic](https://en.wikipedia.org/wiki/Type_polymorphism "Type polymorphism") `load` function. `RProtoBuf` provides cross-language data serialization in R, using [Protocol Buffers](https://en.wikipedia.org/wiki/Protocol_Buffers "Protocol Buffers").[[41]](https://en.wikipedia.org/wiki/Serialization#cite_note-41)


### Ruby
[Ruby](https://en.wikipedia.org/wiki/Ruby_programming_language "Ruby programming language") includes the standard module `[Marshal](http://www.ruby-doc.org/core/classes/Marshal.html)` with 2 methods `dump` and `load`, akin to the standard Unix utilities `[dump](https://en.wikipedia.org/wiki/Dump_\(Unix\) "Dump (Unix)")` and `[restore](https://en.wikipedia.org/w/index.php?title=Restore_\(program\)&action=edit&redlink=1 "Restore (program) (page does not exist)")`. These methods serialize to the standard class `String`, that is, they effectively become a sequence of bytes. Some objects cannot be serialized (doing so would raise a `TypeError` exception): bindings, procedure objects, instances of class IO, singleton objects and interfaces. If a class requires custom serialization (for example, it requires certain cleanup actions done on dumping / restoring), it can be done by implementing 2 methods: `_dump` and `_load`. The [instance method](https://en.wikipedia.org/wiki/Instance_method "Instance method") `_dump` should return a `String` object containing all the information necessary to reconstitute objects of this class and all referenced objects up to a maximum depth given as an integer parameter (a value of -1 implies that depth checking should be disabled). The [class method](https://en.wikipedia.org/wiki/Class_method "Class method") `_load` should take a `String` and return an object of this class.



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
