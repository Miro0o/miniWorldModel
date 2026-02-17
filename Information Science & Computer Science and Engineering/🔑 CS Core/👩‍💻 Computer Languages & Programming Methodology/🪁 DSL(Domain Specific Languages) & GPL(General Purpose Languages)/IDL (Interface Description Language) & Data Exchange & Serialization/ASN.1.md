# ASN.1

[TOC]



## Res
🏠 https://www.itu.int/en/ITU-T/asn1/Pages/introduction.aspx


### Related Topics
↗ [(Object) Serialization & Deserialization](../../../🏎️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x02%20Presentation%20Layer%20(Syntax%20Layer)/(Object)%20Serialization%20&%20Deserialization/(Object)%20Serialization%20&%20Deserialization.md)

↗ [Computer Network Protocol Suites Standardizations & Administration](../../../🏎️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x00%20Computer%20Network%20and%20Communication%20Introduction%20&%20Overview/Computer%20Network%20Protocol%20Suites%20Standardizations%20&%20Administration/Computer%20Network%20Protocol%20Suites%20Standardizations%20&%20Administration.md)
↗ [Internet and Internet Protocol Suites (TCP&IP Protocol Suites)](../../../🏎️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x00%20Computer%20Network%20and%20Communication%20Introduction%20&%20Overview/Computer%20Network%20Protocol%20Suites%20Standardizations%20&%20Administration/Internet%20and%20Internet%20Protocol%20Suites%20(TCP&IP%20Protocol%20Suites)/Internet%20and%20Internet%20Protocol%20Suites%20(TCP&IP%20Protocol%20Suites).md)
↗ [OSI-ISO Protocol Suites](../../../🏎️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x00%20Computer%20Network%20and%20Communication%20Introduction%20&%20Overview/Computer%20Network%20Protocol%20Suites%20Standardizations%20&%20Administration/OSI-ISO%20Protocol%20Suites/OSI-ISO%20Protocol%20Suites.md)


### Other Resources
https://en.wikipedia.org/wiki/X.690
**X.690** is an [ITU-T](https://en.wikipedia.org/wiki/ITU-T "ITU-T") standard specifying several [ASN.1](https://en.wikipedia.org/wiki/Abstract_Syntax_Notation_One "Abstract Syntax Notation One") encoding formats:
- [Basic Encoding Rules](https://en.wikipedia.org/wiki/X.690#BER_encoding) (BER)
- [Canonical Encoding Rules](https://en.wikipedia.org/wiki/X.690#CER_encoding) (CER)
- [Distinguished Encoding Rules](https://en.wikipedia.org/wiki/X.690#DER_encoding) (DER)

The Basic Encoding Rules (BER) were the original rules laid out by the ASN.1 standard for encoding data into a binary format. The rules, collectively referred to as a _transfer syntax_ in ASN.1 parlance, specify the exact [octets](https://en.wikipedia.org/wiki/Octet_(computing) "Octet (computing)") (8-bit bytes) used to encode data.



## Intro
> 🔗 https://en.wikipedia.org/wiki/ASN.1

**Abstract Syntax Notation One** (**ASN.1**) is a standard [interface description language](https://en.wikipedia.org/wiki/Interface_description_language "Interface description language")(IDL) for defining [data structures](https://en.wikipedia.org/wiki/Data_structures "Data structures") that can be [serialized and deserialized](https://en.wikipedia.org/wiki/Serialization "Serialization") in a cross-platform way. It is broadly used in telecommunications and computer networking, and especially in cryptography.

Protocol developers define data structures in ASN.1 modules, which are generally a section of a broader standards document written in the ASN.1 language. The advantage is that the ASN.1 description of the data encoding is independent of a particular computer or programming language. Because ASN.1 is both [human-readable](https://en.wikipedia.org/wiki/Human-readable "Human-readable") and [machine-readable](https://en.wikipedia.org/wiki/Machine-readable "Machine-readable"), an ASN.1 compiler can compile modules into libraries of code, [codecs](https://en.wikipedia.org/wiki/Codec "Codec"), that decode or encode the data structures. Some ASN.1 compilers can produce code to encode or decode several encodings, e.g. packed, [BER](https://en.wikipedia.org/wiki/X.690#BER_encoding "X.690") or [XML](https://en.wikipedia.org/wiki/XML "XML").

ASN.1 is a joint standard of the [International Telecommunication Union Telecommunication Standardization Sector](https://en.wikipedia.org/wiki/International_Telecommunication_Union_Telecommunication_Standardization_Sector "International Telecommunication Union Telecommunication Standardization Sector") (ITU-T) in [ITU-T Study Group 17](https://en.wikipedia.org/wiki/ITU-T_Study_Group_17 "ITU-T Study Group 17") and [International Organization for Standardization](https://en.wikipedia.org/wiki/International_Organization_for_Standardization "International Organization for Standardization")/[International Electrotechnical Commission](https://en.wikipedia.org/wiki/International_Electrotechnical_Commission "International Electrotechnical Commission")(ISO/IEC), originally defined in 1984 as part of CCITT [X.409](https://en.wikipedia.org/w/index.php?title=X.409&action=edit&redlink=1 "X.409 (page does not exist)"):1984. In 1988, ASN.1 moved to its own standard, **X.208**, due to wide applicability. The substantially revised 1995 version is covered by the **X.680** series. The latest revision of the X.680 series of recommendations is the 6.0 Edition, published in 2021



## Ref
[Abstract Syntax - science digest]: https://www.sciencedirect.com/topics/computer-science/abstract-syntax


