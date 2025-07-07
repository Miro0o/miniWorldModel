# SDP (Software Defined Perimeter)

[TOC]



## Res
### Related Topics
↗ [Tunneling & VPN](../👻%20Tunneling%20&%20VPN/Tunneling%20&%20VPN.md)
↗ [Zero Trust Security](../../../🏰%20Cybersecurity%20Basics%20&%20InfoSec/Zero%20Trust%20Security/Zero%20Trust%20Security.md)



## Intro
> 🔗 https://www.cloudflare.com/learning/access-management/software-defined-perimeter/

A software-defined perimeter (SDP) is a way to hide Internet-connected infrastructure (servers, routers, etc.) so that external parties and attackers cannot see it, whether it is hosted on-premise or in the cloud. The goal of the SDP approach is to base the network perimeter on software instead of hardware. A company that uses an SDP is essentially draping a cloak of invisibility over their servers and other infrastructure so that no one can see it from the outside; however, authorized users can still access the infrastructure.

A software-defined perimeter forms a virtual boundary around company assets at the network layer, not the application layer. This separates it from other access-based controls that restrict user privileges but allow wide network access. Another key difference is that an SDP authenticates devices as well as user identity. The Cloud Security Alliance first developed the SDP concept.


### Difference Between SDP and VPN
#SDP #VPN 

> 🔗 https://www.cloudflare.com/learning/access-management/software-defined-perimeter/

SDPs may incorporate VPNs into their architecture to create secure network connections between user devices and the servers they need to access. However, SDPs are very different from VPNs. In some ways, they are more secure: while VPNs enable all connected users to access the entire network, SDPs do not share network connections. SDPs may also be easier to manage than VPNs, especially if internal users need multiple levels of access.

Managing several different levels of network access using VPNs involves deploying multiple VPNs. Suppose Bob works at Acme Inc. in accounting, Carol works in sales, and Alice works in engineering. Managing their access at the network level involves setting up three VPNs: 1) an accounting VPN to provide access to the accounting database, 2) a sales VPN for the customer database, and 3) an engineering VPN for the codebase. Not only is this difficult for IT to manage, it is also less secure: anyone who gains access to the accounting VPN, for instance, can now access the financial information of Acme Inc. If Bob accidentally gives his login credentials to Carol, then security is compromised — and IT may not even be aware of it.

Now imagine a fourth person: David, the CFO of Acme Inc. David needs access to both the accounting database and the customer database. Should David have to log in to two separate VPNs in order to do his work? Or should Acme's IT department set up a new VPN that provides access to both accounting and the customer database? Both options are unwieldy to manage, and the second option introduces a high degree of risk: an attacker who compromises this new VPN with broad access across two databases is able to do twice as much damage as before.

SDPs, on the other hand, are much more granular. There is no overall VPN that everyone who accesses the same resources logs in to; instead, a separate network connection is established for each user. It is almost as if everyone has their own private VPN. In addition, SDPs verify devices as well as users, making it much more difficult for an attacker to breach the system with stolen credentials alone.

A couple other key features separate SDPs from VPNs: SDPs are location- and infrastructure-agnostic. Because they are based on software rather than hardware, SDPs can be deployed anywhere to protect on-premise infrastructure, cloud infrastructure, or both. SDPs also easily integrate with [multi-cloud](https://www.cloudflare.com/learning/cloud/what-is-multicloud/) and [hybrid cloud](https://www.cloudflare.com/learning/cloud/what-is-hybrid-cloud/) deployments. And finally, SDPs can connect users in any location; they do not need to be within a company's physical network perimeter. This makes SDPs useful for managing remote teams that do not work within a corporate office.


### SDP and Zero Trust Security
> 🔗 https://www.cloudflare.com/learning/access-management/software-defined-perimeter/

As the name implies, there is no trust in Zero Trust security; no user, device, or network is considered trustworthy by default. Zero Trust security is a security model that requires strict identity verification for every person and device trying to access internal resources, no matter whether they are sitting inside or outside the network perimeter (or, the software-defined perimeter).

An SDP is one way to [implement Zero Trust security](https://www.cloudflare.com/learning/access-management/how-to-implement-zero-trust/). Users and devices must both be verified before they can connect, and they have only the minimum network access they need. No device, not even a CEO's laptop, can form a network connection with a resource it is not authorized to use.



## Ref

