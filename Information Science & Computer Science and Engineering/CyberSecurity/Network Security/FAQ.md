# FAQ

[TOC]


## IKE vs ISAKMP ?
#IKE #ISAKMP #IPSec #network_security

There seems to be disputes about this. But overall i agree with the first answer below ;>

---
Let's clear up some confusion here first. [Internet Key Exchange (IKE)](https://en.wikipedia.org/wiki/Internet_Key_Exchange) is a hybrid protocol, it consists of 3 "protocols"
- [ISAKMP](https://en.wikipedia.org/wiki/Internet_Security_Association_and_Key_Management_Protocol): It's not a key exchange protocol per se, it's a framework on which key exchange protocols operate.
- [Oakley](https://en.wikipedia.org/wiki/Oakley_protocol): Describes the "modes" of key exchange (e.g. perfect forward secrecy for keys, identity protection, and authentication)
- [SKEME](http://www.di.unisa.it/~ads/corso-security/www/CORSO-9900/oracle/skeme.pdf): Provides support for public-key-based key exchange, key distribution centres, and manual installation, it also outlines methods of secure and fast key refreshment.

**So yes, IPSec _does_ use IKE, but ISAKMP is part of IKE.**

---
![](../../../Assets/Pics/Pasted%20image%2020240106142858.png)

I agree with the above, i'm reading on the microsoft site about this and they have ISAKMP encapsulating IKE not ISAKMP, perhaps a mistake from them? 

http://technet.microsoft.com/en-us/library/cc759130(v=ws.10).aspx


[Does IPSec use IKE or ISAKMP? | StackExchange - Information Security]: https://security.stackexchange.com/q/35872/298278

[ISAKMP and IkE | Cisco]: https://learningnetwork.cisco.com/s/question/0D53i00000KsuAGCAZ/isakmp-and-ike
[What's the difference between IKE and ISAKMP ? | StackExchange - Network Engineering]: https://networkengineering.stackexchange.com/q/1/92965
