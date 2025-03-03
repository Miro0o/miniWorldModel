# XML (Extensible Markup Language)

[TOC]



## Res
### Related Topics
↗ [HTML (HyperText Markup Language)](HTML%20(HyperText%20Markup%20Language).md)
↗ [IDL (Interface Description Language) & Data Exchange Formats](../IDL%20(Interface%20Description%20Language)%20&%20Data%20Exchange%20Formats/IDL%20(Interface%20Description%20Language)%20&%20Data%20Exchange%20Formats.md)
↗ [Data Serialization & Deserialization](../../../../🏎️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x02%20Presentation%20Layer%20(Syntax%20Layer)/Data%20Serialization%20&%20Deserialization/Data%20Serialization%20&%20Deserialization.md)


### Learning Resources
📂 https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction
- [菜鸟](https://www.runoob.com/xml/xml-intro.html)
- [廖雪峰](https://www.liaoxuefeng.com/wiki/1252599548343744/1305161429418018)

DOM, SAX, Jackson



## Intro
XML (Extensible Markup Language) is a markup language similar to [HTML](https://developer.mozilla.org/en-US/docs/Glossary/HTML), but without predefined tags to use. Instead, you define your own tags designed specifically for your needs. This is a powerful way to store data in a format that can be stored, searched, and shared. Most importantly, since the fundamental format of XML is standardized, if you share or transmit XML across systems or platforms, either locally or over the internet, the recipient can still parse the data due to the standardized XML syntax.

There are many languages based on XML, including [XHTML](https://developer.mozilla.org/en-US/docs/Glossary/XHTML), [MathML](https://developer.mozilla.org/en-US/docs/Web/MathML), [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG), [XUL](https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XUL "This is a link to an unwritten page"), [XBL](https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XBL "This is a link to an unwritten page"), [RSS](https://developer.mozilla.org/en-US/docs/Web/RSS "This is a link to an unwritten page"), and [RDF](https://developer.mozilla.org/en-US/docs/Web/RDF "This is a link to an unwritten page"). You can also define your own.

[See also](https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction#see_also "Permalink to See also")
- [XML.com](https://www.xml.com/)
- [Extensible Markup Language (XML) @ W3.org](https://www.w3.org/XML/)
- [Using XML: A List Apart](https://alistapart.com/article/usingxml/)


### XML & Serialization
> 🔗 https://en.wikipedia.org/wiki/Serialization
> ↗ [Data Serialization & Deserialization](../../../../🏎️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x02%20Presentation%20Layer%20(Syntax%20Layer)/Data%20Serialization%20&%20Deserialization/Data%20Serialization%20&%20Deserialization.md)

In the late 1990s, a push to provide an alternative to the standard serialization protocols started: [XML](https://en.wikipedia.org/wiki/XML "XML"), an [SGML](https://en.wikipedia.org/wiki/SGML "SGML") subset, was used to produce a human-readable [text-based encoding](https://en.wikipedia.org/wiki/Binary-to-text_encoding "Binary-to-text encoding"). Such an encoding can be useful for persistent objects that may be read and understood by humans, or communicated to other systems regardless of programming language. It has the disadvantage of losing the more compact, byte-stream-based encoding, but by this point larger storage and transmission capacities made file size less of a concern than in the early days of computing. In the 2000s, XML was often used for asynchronous transfer of structured data between client and server in [Ajax](https://en.wikipedia.org/wiki/Ajax_(programming) "Ajax (programming)") web applications. XML is an open format, and standardized as a [W3C recommendation](https://www.w3.org/TR/xml11/).



## Ref
