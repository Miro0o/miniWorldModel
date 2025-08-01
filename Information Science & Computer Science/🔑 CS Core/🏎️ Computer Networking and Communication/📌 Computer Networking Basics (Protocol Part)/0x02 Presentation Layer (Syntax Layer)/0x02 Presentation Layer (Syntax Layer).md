# Presentation Layer (Syntax Layer)

[TOC]



## Res
### Related Topics
↗ [Encodings](../../../../🗺%20CS%20Overview/💋%20Intro%20to%20Computer%20Science/😤%20Information,%20Data,%20Number%20and%20Math%20in%20Digital%20Systems/Encodings.md)
↗ [Data Compression Technologies](../../../🧙‍♂️%20Algorithm%20&%20Data%20Structure/Advanced%20Topics%20in%20Algorithms/Data%20Compression%20Technologies/Data%20Compression%20Technologies.md)
↗ [Cryptology & Secure Communication](../../../../CyberSecurity/🚬%20Cryptology%20&%20Secure%20Communication/Cryptology%20&%20Secure%20Communication.md)


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Presentation_layer

In the seven-layer OSI model of computer networking, the presentation layer is layer 6 and serves as the **data translator** for the network. It is sometimes called the **syntax layer**.

Within the service layering semantics of the OSI network architecture, the presentation layer responds to service requests from the application layer and issues service requests to the session layer through a unique **presentation service access point (PSAP)**.

==The presentation layer ensures the information that the application layer of one system sends out is readable by the application layer of another system.== On the sending system it is responsible for conversion to standard, transmittable formats. On the receiving system it is responsible for the translation, formatting, and delivery of information for processing or display. In theory, it relieves application layer protocols of concern regarding syntactical differences in data representation within the end-user systems. 

> An example of a presentation service would be the conversion of an extended binary coded decimal interchange code (EBCDIC-coded) text computer file to an ASCII-coded file. If necessary, the presentation layer might be able to translate between multiple data formats using a common format.

In many widely used applications and protocols no distinction is actually made between the presentation and application layers. For example, HyperText Transfer Protocol (HTTP), generally regarded as an application-layer protocol, has presentation-layer aspects such as the ability to identify character encoding for proper conversion, which is then done in the application layer.

- **The presentation layer is the lowest layer at which application programmers consider data structure and presentation**, instead of simply sending data in the form of datagrams or packets between hosts. This layer deals with issues of string representation - whether they use the Pascal method (an integer length field followed by the specified amount of bytes) or the C/C++ method (null-terminated strings, e.g. "thisisastring\\0"). The idea is that the application layer should be able to point at the data to be moved, and the presentation layer will translate this to commands able to be understood by other applications and processes.
- **Serialization** of complex data structures into flat byte-strings (using mechanisms such as TLV, XML or JSON) can be thought of as the key functionality of the presentation layer. Structure representation is normally standardized at this level, often by using XML or JSON. As well as simple pieces of data, like strings, more complicated things are standardized in this layer. Two common examples are 'objects' in object-oriented programming, and the exact way that streaming video is transmitted.
- **Encryption and Decryption** are typically done at this level too, although it can be done on the application, session, transport, or network layers, each having its own advantages and disadvantages. For example, when logging on to bank account sites the presentation layer will decrypt the data as it is received.



## Ref
