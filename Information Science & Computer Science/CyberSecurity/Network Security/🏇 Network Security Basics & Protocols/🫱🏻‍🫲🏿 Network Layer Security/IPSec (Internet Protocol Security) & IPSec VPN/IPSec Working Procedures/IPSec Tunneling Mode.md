# IPSec Tunneling Mode

[TOC]



## Res
### Related Topics
↗ [IP Authentication Header (AH)](../IP%20Authentication%20Header%20(AH)/IP%20Authentication%20Header%20(AH).md)

↗ [IP Encapsulation Security Payload (ESP)](../IP%20Encapsulation%20Security%20Payload%20(ESP)/IP%20Encapsulation%20Security%20Payload%20(ESP).md)



## Intro
![](../../../../../../../Assets/Pics/Screenshot%202024-01-05%20at%2012.16.42PM.png)



### 1️⃣ Tunneling Mode Basics

#### Security Association
![](../../../../../../../Assets/Pics/Screenshot%202023-04-01%20at%201.39.15%20PM.png)

![](../../../../../../../Assets/Pics/Screenshot%202023-04-01%20at%201.39.33%20PM.png)

![](../../../../../../../Assets/Pics/Screenshot%202023-04-01%20at%201.39.59%20PM.png)

SAs are needed for the encryption and decryption processes to negotiate a security level between two entities. A special router or firewall that sits between two networks usually handles the SA negotiation process.

> **Internet Key Exchange ([IKE](https://www.techtarget.com/searchsecurity/definition/Internet-Key-Exchange))** is used to generate shared security keys to establish a **security association (SA)**.

#### Constructing IPsec Package
![](../../../../../../../Assets/Pics/Screenshot%202023-04-01%20at%201.42.55%20PM.png)
#### Retrieving IPsec Package
![](../../../../../../../Assets/Pics/Screenshot%202023-04-01%20at%201.44.06%20PM.png)



## Ref

