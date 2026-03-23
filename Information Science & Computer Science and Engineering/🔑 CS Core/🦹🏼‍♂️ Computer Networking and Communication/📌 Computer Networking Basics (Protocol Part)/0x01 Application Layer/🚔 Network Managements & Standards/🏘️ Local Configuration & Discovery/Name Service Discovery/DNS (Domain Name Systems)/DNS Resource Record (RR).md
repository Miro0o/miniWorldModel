# DNS Resource Record (RR)

[TOC]



## Res
### Related Topics



## Intro
Every domain, whether it is a Top Level Domain, or an Authoritative server, or simply a single host have a set of **resource records** associated with it in the DNS distributed database. **These RR provide the mapping of hostname to IP address.** The RR is stored in binary format for internal use, but when a RR is transmitted in cyberspace it is text format.

When a query is made to the DNS server, the querier (host/server who sends that query) receives a response which is nothing but the resource record associated with it.



## RR Scheme
The Resource Records is a 5 tuple that contains the following: 
```json
( Name,  Time to live, Class, Type, Value)
```

### 1️⃣ RR Name
Name: It is the domain name to which this resource record belongs to. More than one resource records may exists for the same domain.


### 2️⃣ RR TTL
Time to live: This is a 32 bit integer. The TTL is measured in seconds. The value zero indicates the data should not be cached.


### 3️⃣ RR Class
Class: The field usually contains the value ‘IN’ it represents if this record is to be used by internet.


### 4️⃣ RR Type
Type: The type field defines the type of resource record – Address, Name Service, Mail Exchange, Canonical Name.

Various type fields along with the details are mentioned below.
#### A /AAA
‘A’ stands for address where 
``` json
Name = Hostname (e.g. yahoo.com)
Value = IP address (e.g. 216.109.112.135)    
```

Thus it can provide mapping of hostname to IP address.
#### CNAME
#### NS
‘NS’ stands for Name Service
``` json
Name = Domain name (e.g. yahoo.com)
Value = Host name of Authoritative DNS server (e.g. dns.yahoo.com)

#### Type = ‘CNAME’
‘CNAME’ refers to canonical name. It is used to define alias hostname
```json
Name = Alias name (e.g. www.ibm.com)
Value = Real name of that host (e.g. servereast.backup2.ibm.com)
```
#### MX
'MX’ stands for Mail Exchange.
```json
Name = Domain name (e.g. yahoo.com)
Value = Name of mail server associated with that name. (e.g. mx.mail.yahoo.com)
```
#### TXT
#### SOA
#### SRV
#### PTR
#### DNSKEY
#### SPF
#### DMARC
#### DKIM
#### CERT
#### CAA
### 5️⃣ RR Value
Value: This field can be a number, ASCII strings or any domain. The semantics of Name and Value depends on the type field.



## DNS Resource Record Updates
Until now we have seen how DNS is used to find IP address of any host in the cyberspace and the use of it. Here the most important question arise is: How these resource records are inserted into DNS database. For this we consider a real time example, Lets say a company name INetwork is established and want to publish a website on internet. 

The company INetwork approaches the registrar to register its domain name ‘inetwork.com’. The registrar is responsible to maintain uniqueness of domain.

The company INetwork provides the registrar with the names and IP address of their primary and secondary authority DNS server. The registrar enters the information in form of resource record and stores it into DNS database
```json
(   inetwork.com,           NS    ,     dns.inetwork.com   )
(   dns.inetwork.com,       A     ,     203.166.178.34     )
```

The company needs to make sure that the Type ‘A’ resource record for the their web server inetwork.com and Type ‘MX’ resource record for the company’s mail server are entered into our authority DNS server to make sure that others can access your website and employees can use the system to send mails.

#TODO 


## Ref
[Communication Networks/DNS | wikibooks]: https://en.wikibooks.org/wiki/Communication_Networks/DNS

[👍 DNS的各种记录类型的应用解析]: https://www.cnblogs.com/mengdd/p/dns-types.html