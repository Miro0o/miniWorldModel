# DNS (Domain Name Systems)

[TOC]



## Res
📂 [Communication Networks/DNS | wikibooks](https://en.wikibooks.org/wiki/Communication_Networks/DNS)

📄 [IEFT RFC 2535 - Domain Name System Security Extensions](https://www.ietf.org/rfc/rfc2535.txt)
📄 [IEFT RFC 1035 - DOMAIN NAMES - IMPLEMENTATION AND SPECIFICATION](https://www.ietf.org/rfc/rfc1035.txt)


### Related Topics
↗ [Database System /Directory Services /DNS Servers](../../../../../../../🍕%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/Directory%20Services/DNS%20Server%20(DNS%20Distributed%20Database)/DNS%20Server%20(DNS%20Distributed%20Database).md)
↗ [Pen-tensting /DNS Reconnaissance](../../../../../../../../CyberSecurity/⛈️%20Risk%20Management/🐗%20Cybersecurity%20Threats%20&%20Attacks/🛰️%20Cyber%20Threat%20Intelligence%20(CTI)%20&%20Reconnaissance/Active%20Recon%20&%20Offensive%20OSINT/DNS%20&%20Domain%20Reconnaissance.md)
↗ [🌏 Global DNS Service Providers](../../../../../../../🍕%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/Directory%20Services/DNS%20Server%20(DNS%20Distributed%20Database)/DNS%20Server%20Implementations/🌏%20Global%20DNS%20Service%20Providers.md)
↗ [Domain Name Providers](Domain%20Name%20Providers.md)


### Learning Resources
【深入浅出计算机网络 - 6.4 域名系统DNS】 https://www.bilibili.com/video/BV1fT411T7NQ/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d


## Intro
### Why DNS Service?
Remembering IP addresses is difficult, as it contains all numbers. To remember IP addresses of more than one host becomes cumbersome. Therefore a **name** has been assigned to almost every IP address which makes it easier for humans to remember. **DNS provides mapping of IP address and Domain name.** 

> A **domain name** identifies the area or domain that an Internet resource resides in. 

### How often is this mapping needed?
Answer. Every time when a host needs to convert a domain name to the IP address, a DNS query is called.


### 🎯 DNS Services
#### Host name to IP address translation
The primary purpose of DNS is to provide translation of host name to IP address and vice versa. The backward facility (translating IP address to domain name) is known as Reverse DNS. 
#### Host aliasing
Host aliasing is referred to another name given to the same machine on the network. It is used because a hostname may have a complicated name instead of that a simple term may be used. E.g. relay.eastcost.rediff.com may have an alias name rediff.com
#### Mail server aliasing
It is highly desirable that an email address should contain simple letters, or should be something that can be easy to remember. E.g. richard@gmail.com can be remembered easily but if the original mail server address, say la4.mail1.google.com, were to be used it would be difficult to remember
#### Load distribution
A set of IP address is provided to one canonical name which prevents the load to be present only on one server. “When the request comes to the DNS server to resolve the domain name, it gives out one of the several canonical names in a rotated order. This redirects the request to one of the several servers in a server group. Once the BIND feature of DNS resolves the domain to one of the servers, subsequent requests from the same client are sent to the same server


### Global DNS Servers /Domani Name Providers
↗ [🌏 Global DNS Service Providers](../../../../../../../🍕%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/Directory%20Services/DNS%20Server%20(DNS%20Distributed%20Database)/DNS%20Server%20Implementations/🌏%20Global%20DNS%20Service%20Providers.md)
↗ [Domain Name Providers](Domain%20Name%20Providers.md)



## 🎒 DNS Servers Architecture Design
↗ [DNS Server (DNS Distributed Database)](../../../../../../../🍕%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/Directory%20Services/DNS%20Server%20(DNS%20Distributed%20Database)/DNS%20Server%20(DNS%20Distributed%20Database).md)



## 👨‍🏫 Domain Names Hierarchy
### Domain Name Space
![](../../../../../../../../../Assets/Pics/Screenshot%202023-06-17%20at%2010.18.02%20AM.png)

> “A domain is simply a subtree of the domain name space. The domain name of a domain is the same as the domain name of the node at the very top of the domain.” 

Consider the figure below
![](../../../../../../../../../Assets/Pics/Screenshot%202023-06-17%20at%205.47.50%20PM.png)

As you can see in the figure above that the “sjsu” domain is a part of the edu domain. In the similar fashion there can be many domains in the “sjsu” domain.

![](../../../../../../../../../Assets/Pics/Screenshot%202023-06-17%20at%2010.18.57%20AM.png)

![](../../../../../../../../../Assets/Pics/Screenshot%202023-06-17%20at%2010.19.37%20AM.png)



## ⏳ DNS Working Flow
### 🦆 DNS Query Process
![](../../../../../../../../../Assets/Pics/Screenshot%202023-06-17%20at%2010.20.54%20AM.png)

#### Iterated Queries
![](../../../../../../../../../Assets/Pics/Screenshot%202023-06-17%20at%205.56.19%20PM.png)
#### Recursive Queries
![](../../../../../../../../../Assets/Pics/Screenshot%202023-06-17%20at%205.56.34%20PM.png)
#### Exercise Problems
![](../../../../../../../../../Assets/Pics/Screenshot%202023-06-17%20at%2010.22.39%20AM.png)


### 📣 DNS Dynamic Update / Notify
The update/notify mechanism is design under [RFC 2136](https://tools.ietf.org/html/rfc2136). Many companies and usually all ISP use DHCP (DHCP is covered in section 5.1 in more detail) to assign IP address to the hosts which are connected to them (server). For this DNS is needed to support dynamic addition and deletion of resource records (RR - Resource Records are covered in further sections). This mechanism is called DNS dynamic update.

The dynamic update facility allows authorized updaters to add or delete a RR from a zone where a name server is authoritative. With the help of NS record the authorized update message is sent to the primary node of that zone. If a name server receives any update message and if that name server is not a primary node of that zone then that message is forwarded upstream to its master server. If the server who receives it is also slave then it is again forwarded upstream. This process is called “update forwarding” and it continues till the update message is received to the primary node of that zone. 

The primary master name server holds a writable copy of zone data. The slave nodes are notified when an update is performed either directly or indirectly.



## DNS Message Format
> 🔗 [IETF RFC 1035- DOMAIN NAMES - IMPLEMENTATION AND SPECIFICATION ](https://www.ietf.org/rfc/rfc1035.txt)

DNS allows you to interact with devices on the Internet without having to remember long strings of numbers. Changing of information between client and server is carried out by two types of DNS messages:
- Query message
- Response message

The format is similar for both types of messages. The information is held up in up to five different sections of DNS message format. 
- The query message is having two sections:
	- header
	- question records
- The response message consists of five sections:
	- Header 
	- Question
	- Records
	- Answer records
	- Authoritative records
	- Additional records


All communications inside of the domain protocol are carried in a single
format called a message.  The top level format of message is divided
into 5 sections (some of which are empty in certain cases) shown below:
```shell
+---------------------+
|        Header       |
+---------------------+
|       Question      | the question for the name server
+---------------------+
|        Answer       | RRs answering the question
+---------------------+
|      Authority      | RRs pointing toward an authority
+---------------------+
|      Additional     | RRs holding additional information
+---------------------+
```
The header section is always present.  The header includes fields that
specify which of the remaining sections are present, and also specify
whether the message is a query or a response, a standard query or some
other opcode, etc.

The names of the sections after the header are derived from their use in
standard queries.  The question section contains fields that describe a
question to a name server.  These fields are a query type (QTYPE), a
query class (QCLASS), and a query domain name (QNAME).  The last three
sections have the same format: a possibly empty list of concatenated
resource records (RRs).  The answer section contains RRs that answer the
question; the authority section contains RRs that point toward an
authoritative name server; the additional records section contains RRs
which relate to the query, but are not strictly answers for the
question.


### DNS Header
```shell
							   1  1  1  1  1  1
 0  1  2  3  4  5  6  7  8  9  0  1  2  3  4  5
+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
|                      ID                       |
+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
|QR|   Opcode  |AA|TC|RD|RA|   Z    |   RCODE   |
+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
|                    QDCOUNT                    |
+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
|                    ANCOUNT                    |
+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
|                    NSCOUNT                    |
+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
|                    ARCOUNT                    |
+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
```


### DNS Question Section
```shell
							   1  1  1  1  1  1
 0  1  2  3  4  5  6  7  8  9  0  1  2  3  4  5
+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
|                                               |
/                     QNAME                     /
/                                               /
+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
|                     QTYPE                     |
+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
|                     QCLASS                    |
+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
```
QNAME
- a domain name represented as a sequence of labels, where each label consists of a length octet followed by that number of octets.  The domain name terminates with the zero length octet for the null label of the root.  Note that this field may be an odd number of octets; no padding is used.

QTYPE
- a two octet code which specifies the type of the query. The values for this field include all codes valid for a TYPE field, together with some more general codes which can match more than one type of RR.

QCLASS
- a two octet code that specifies the class of the query. For example, the QCLASS field is IN for the Internet.


### DNS Resource Record Format (Response Message)
The answer, authority, and additional sections all share the same
format: a variable number of resource records, where the number of
records is specified in the corresponding count field in the header.
Each resource record has the following format:
```shell
								1  1  1  1  1  1
  0  1  2  3  4  5  6  7  8  9  0  1  2  3  4  5
+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
|                                               |
/                                               /
/                      NAME                     /
|                                               |
+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
|                      TYPE                     |
+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
|                     CLASS                     |
+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
|                      TTL                      |
|                                               |
+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
|                   RDLENGTH                    |
+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--|
/                     RDATA                     /
/                                               /
+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
```

NAME
- a domain name to which this resource record pertains.

TYPE
- two octets containing one of the RR type codes.  This field specifies the meaning of the data in the RDATA field.

CLASS
-  two octets which specify the class of the data in the RDATA field.

TTL
- a 32 bit unsigned integer that specifies the time interval (in seconds) that the resource record may be cached before it should be discarded.  Zero values are interpreted to mean that the RR can only be used for the transaction in progress, and should not be cached.

RDLENGTH
- an unsigned 16 bit integer that specifies the length in octets of the RDATA field.

RDATA
- a variable length string of octets that describes the resource.  The format of this information varies according to the TYPE and CLASS of the resource record. For example, the if the TYPE is A and the CLASS is IN, the RDATA field is a 4 octet ARPA Internet address.



## Ref
盘点国内外优秀公共DNS - 王小叹的文章 - 知乎 https://zhuanlan.zhihu.com/p/53958870

[👍 通过DNS数据包解释DNS协议各个字段含义 | CSDN]: https://blog.csdn.net/javajiawei/article/details/129699615
