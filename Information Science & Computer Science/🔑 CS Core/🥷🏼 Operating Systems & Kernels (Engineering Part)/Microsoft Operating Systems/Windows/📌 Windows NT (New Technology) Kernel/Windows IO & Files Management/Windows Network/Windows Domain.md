# Windows Domain

[TOC]



## Res
### Related Topics
↗ [Microsoft Active Directory Domain Service (ADDS)](../../../../../../🍕%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/Directory%20Services/Microsoft%20Active%20Directory%20Domain%20Service%20(ADDS)/Microsoft%20Active%20Directory%20Domain%20Service%20(ADDS).md)

↗ [Network Management Basics](../../../../../Linux%20(Derived%20From%20UNIX%20Family)/Linux%20Free%20Software%20&%20OSS%20(Open%20Source%20Software)/Network%20Management/Network%20Management%20Basics.md)
↗ [SAMBA](../../../../../Linux%20(Derived%20From%20UNIX%20Family)/Linux%20Free%20Software%20&%20OSS%20(Open%20Source%20Software)/Network%20Management/SAMBA.md)


### Other Resources



## Intro
> ↗ https://en.wikipedia.org/wiki/Windows_domain

A **Windows domain** is a form of a [computer network](https://en.wikipedia.org/wiki/Computer_network "Computer network") in which all [user accounts](https://en.wikipedia.org/wiki/User_account "User account"), computers, printers and other [security principals](https://en.wikipedia.org/wiki/Principal_\(computer_security\) "Principal (computer security)"), are registered with a central database located on one or more clusters of central computers known as [domain controllers](https://en.wikipedia.org/wiki/Domain_controller_\(Windows\) "Domain controller (Windows)"). Authentication takes place on domain controllers. Each person who uses computers within a domain receives a unique user account that can then be assigned access to resources within the domain. Starting with [Windows Server 2000](https://en.wikipedia.org/wiki/Windows_Server_2000 "Windows Server 2000"), [Active Directory](https://en.wikipedia.org/wiki/Active_Directory "Active Directory") is the Windows component in charge of maintaining that central database. The concept of Windows domain is in contrast with that of a [workgroup](https://en.wikipedia.org/wiki/Workgroup_\(computer_networking\) "Workgroup (computer networking)") in which each computer maintains its own database of security principals.

> Google Gemini 2.5 Flash
> 
> While **Windows Domain** refers to a large-scale, **centralized** network management system (_Active Directory_), Unix-like operating systems (like Linux) traditionally use a more modular, **decentralized** approach for administrative grouping, hence there is no a counterpart in Unix-like OS. The closest analogues in Unix in "administrative grouping".
>
>Windows domain has nothing to do with Unix domain sockets.  
>
>All computers in a Windows domain must be connected to the same LAN (or connected to each other via a WAN, which is just multiple interconnected LANs) to be able to communicate with the Domain Controller. The local network provides the _pipes_; the domain provides the _identity and rules_ for what flows through those pipes.
>
>A Windows domain (managed by **Active Directory**) is primarily an **internal network structure** that uses specific **networking protocols** for communication, not web-based URLs.

Computers can connect to a domain via [LAN](https://en.wikipedia.org/wiki/LAN "LAN"), [WAN](https://en.wikipedia.org/wiki/Wide_area_network "Wide area network") or using a [VPN](https://en.wikipedia.org/wiki/Virtual_private_network "Virtual private network") connection. Users of a domain are able to use enhanced security for their VPN connection due to the support for a [certification authority](https://en.wikipedia.org/wiki/Certification_authority "Certification authority") which is gained when a domain is added to a network, and as a result, [smart cards](https://en.wikipedia.org/wiki/Smart_cards "Smart cards") and [digital certificates](https://en.wikipedia.org/wiki/Digital_certificates "Digital certificates") can be used to confirm identities and protect stored information.


### Domain Controller
> ↗ [Microsoft Active Directory Domain Service (ADDS)](../../../../../../🍕%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/Directory%20Services/Microsoft%20Active%20Directory%20Domain%20Service%20(ADDS)/Microsoft%20Active%20Directory%20Domain%20Service%20(ADDS).md)
> ↗ [SAMBA](../../../../../Linux%20(Derived%20From%20UNIX%20Family)/Linux%20Free%20Software%20&%20OSS%20(Open%20Source%20Software)/Network%20Management/SAMBA.md)

> 🔗 https://en.wikipedia.org/wiki/Windows_domain#Domain_controller

In a Windows domain, the directory resides on computers that are configured as [domain controllers](https://en.wikipedia.org/wiki/Domain_controller_\(Windows\) "Domain controller (Windows)"). A domain controller is a Windows or [Samba](https://en.wikipedia.org/wiki/Samba_\(software\) "Samba (software)") server that manages all security-related aspects between user and domain interactions, centralizing security and administration. A domain controller is generally suitable for networks with more than 10 [PCs](https://en.wikipedia.org/wiki/Personal_computer "Personal computer"). A domain is a logical grouping of computers. The computers in a domain can share physical proximity on a small [LAN](https://en.wikipedia.org/wiki/Local_area_network "Local area network") or they can be located in different parts of the world. As long as they can communicate, their physical location is irrelevant.


### How Communication Works in a Windows Domain
#web #windows_domain #url 

> 🤖 Google Gemini 2.5 Flash

Communication within a Windows domain is based on a set of low-level network protocols and internal naming, not the URL structure used for web browsing.

**1. Naming, Not URLs**
- **Internal Domain Name:** The Windows domain itself has a name (e.g., `company.local` or `ad.contoso.com`), which is an administrative identifier.
- **Computer/Resource Names:** Each computer and resource (like a server or printer) in the domain has a network name (e.g., `SERVER01` or `HR-PRINTER`).
- **DNS is Key:** The **Domain Name System (DNS)** is _critical_ for a Windows domain. It translates the internal domain and computer names into **IP addresses** (e.g., translating `SERVER01` to `192.168.1.5`). This is how one computer locates another.

**2. Core Protocols**
Domain communication relies heavily on standard network protocols that work at a much lower level than a URL:
- **Kerberos (TCP/UDP Port 88):** This is the **primary authentication protocol**. When a user logs in or a computer needs to access a resource, Kerberos is used to securely verify their identity.
- **LDAP (TCP/UDP Port 389):** **Lightweight Directory Access Protocol** is used to query and update the central database (**Active Directory**). For example, a client uses LDAP to look up a user's security groups or a server's properties.
- **SMB (TCP Port 445):** **Server Message Block** is the protocol used for **file and print sharing** and for applying group policies from the Domain Controller.
- **DNS (TCP/UDP Port 53):** As mentioned, this is essential for name resolution so that all the above protocols know which IP address to send their traffic to.

The term **URL** is a concept tied to the web, specifying a location and how to access a **web resource** (like a specific HTML file, image, or video) using protocols like HTTP/HTTPS. A Windows domain is about **identity, security, and resource access** on an internal network


### Windows Workgroup 🆚 Windows Domain
#windows_domain #windows_workgroup

> 🔗 https://en.wikipedia.org/wiki/Workgroup_(computer_networking)

In computer networking a **work group** is a collection of computers connected on a LAN that share the common resources and responsibilities. **Workgroup** is [Microsoft](https://en.wikipedia.org/wiki/Microsoft "Microsoft")'s term for a [peer-to-peer](https://en.wikipedia.org/wiki/Peer-to-peer "Peer-to-peer") [local area network](https://en.wikipedia.org/wiki/Local_area_network "Local area network"). Computers running Microsoft [operating systems](https://en.wikipedia.org/wiki/Operating_system "Operating system") in the same work group may share [files](https://en.wikipedia.org/wiki/Computer_file "Computer file"), [printers](https://en.wikipedia.org/wiki/Computer_printer "Computer printer"), or [Internet connection](https://en.wikipedia.org/wiki/Internetworking "Internetworking"). Work group contrasts with a [domain](https://en.wikipedia.org/wiki/Windows_domain "Windows domain"), in which computers rely on centralized authentication.



## Ref
