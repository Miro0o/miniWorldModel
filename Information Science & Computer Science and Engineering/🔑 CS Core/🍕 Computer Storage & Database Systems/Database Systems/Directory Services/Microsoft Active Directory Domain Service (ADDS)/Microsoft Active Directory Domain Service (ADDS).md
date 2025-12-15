# Microsoft Active Directory Domain Service (ADDS)

[TOC]



## Res
### Related Topics
↗ [Windows Domain](../../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Microsoft%20Operating%20Systems/Windows/📌%20Windows%20NT%20(New%20Technology)%20Kernel/Windows%20IO%20&%20Files%20Management/Windows%20Network/Windows%20Domain.md)

↗ [SAMBA](../../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/Linux%20Free%20Software%20&%20OSS%20(Open%20Source%20Software)/Network%20Management/SAMBA.md)

↗ [LDAP (Lightweight Directory Access Protocol)](../../../../🏎️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x01%20Application%20Layer/Messaging%20&%20Remote%20Accessing/LDAP%20(Lightweight%20Directory%20Access%20Protocol)/LDAP%20(Lightweight%20Directory%20Access%20Protocol).md)
↗ [SMB (Server Message Block) & CIFS](../../../../🏎️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x01%20Application%20Layer/NAS%20(Network-Attached%20Storage)%20Protocols/SMB%20(Server%20Message%20Block)%20&%20CIFS/SMB%20(Server%20Message%20Block)%20&%20CIFS.md)
↗ [Kerberos](../../../../../CyberSecurity/Network%20Security/Network%20Security%20Mechanisms/🏇%20Network%20Security%20Protocol%20Stacks/📱%20Application%20Layer%20Security%20Protocols/Authentication%20Protocols/Kerberos/Kerberos.md)



## Intro
> 🔗 https://en.wikipedia.org/wiki/Active_Directory

**Active Directory** (**AD**) is a [directory service](https://en.wikipedia.org/wiki/Directory_service "Directory service") developed by [Microsoft](https://en.wikipedia.org/wiki/Microsoft "Microsoft") for [Windows domain](https://en.wikipedia.org/wiki/Windows_domain "Windows domain") networks. [Windows Server](https://en.wikipedia.org/wiki/Windows_Server "Windows Server") [operating systems](https://en.wikipedia.org/wiki/Operating_system "Operating system") include it as a set of [processes](https://en.wikipedia.org/wiki/Process_(computing) "Process (computing)") and [services](https://en.wikipedia.org/wiki/Windows_service "Windows service"). Originally, only centralized domain management used Active Directory. However, it ultimately became an umbrella title for various directory-based identity-related services.

A domain controller is a server running the **Active Directory Domain Service** (**AD DS**) role. It [authenticates](https://en.wikipedia.org/wiki/Authentication "Authentication") and [authorizes](https://en.wikipedia.org/wiki/Authorization "Authorization") all users and computers in a [Windows](https://en.wikipedia.org/wiki/Microsoft_Windows "Microsoft Windows")domain-type network, assigning and enforcing security policies for all computers and installing or updating software. For example, when a user [logs into](https://en.wikipedia.org/wiki/Login "Login") a computer part of a Windows domain, Active Directory checks the submitted username and password and determines whether the user is a [system administrator](https://en.wikipedia.org/wiki/System_administrator "System administrator") or a non-admin user. Furthermore, it allows the management and storage of information, provides authentication and authorization mechanisms, and establishes a framework to deploy other related services: Certificate Services, [Active Directory Federation Services](https://en.wikipedia.org/wiki/Active_Directory_Federation_Services "Active Directory Federation Services"), Lightweight Directory Services, and [Rights Management Services](https://en.wikipedia.org/wiki/Active_Directory_Rights_Management_Services "Active Directory Rights Management Services").

Active Directory uses [Lightweight Directory Access Protocol](https://en.wikipedia.org/wiki/Lightweight_Directory_Access_Protocol "Lightweight Directory Access Protocol") (LDAP) versions 2 and 3, Microsoft's version of [Kerberos](https://en.wikipedia.org/wiki/Kerberos_(protocol) "Kerberos (protocol)"), and [DNS](https://en.wikipedia.org/wiki/Domain_Name_System "Domain Name System").

Robert R. King defined it in the following way:

> "A domain represents a database. That database holds records about network services-things like computers, users, groups and other things that use, support, or exist on a network. **The domain database is, in effect, Active Directory**."
> 
> 🔗 https://www.worldcat.org/title/62876800


### Active Directory Services
> 🤖 Google Gemini 2.5 Flash

The Central Database (The Directory)
AD is like the ultimate phone book and security locker for your entire company network.6 It stores information as **objects** in a hierarchical structure:7
- **Users:** Names, passwords, phone numbers, department, etc.8
- **Computers:** Workstations, laptops, and servers that are members of the domain.9
- **Groups:** Collections of users (e.g., "Finance Team," "IT Admins") used to easily assign permissions.10
- **Shared Resources:** Printers, shared folders, and applications.11

Core Functions
AD's main job is to provide **centralized management** and **security** for the domain:

| **Function**             | **Explanation**                                                                                                                                                                               |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Authentication**       | Verifies a user's identity. When you log in, the server running AD (the **Domain Controller**) checks your username and password against the AD database.                                     |
| **Authorization**        | Determines what resources you can access _after_ you've logged in. This is based on your user account and the groups you belong to.                                                           |
| **Group Policy**         | Allows administrators to centrally define and enforce configuration settings (like desktop wallpaper, security rules, or firewall settings) across **all** computers and users in the domain. |
| **Single Sign-On (SSO)** | Allows a user to log in once (to their computer) and seamlessly access all authorized resources (file shares, printers, servers) without needing to re-enter their credentials.               |


#### Domain Services
> 🔗 https://en.wikipedia.org/wiki/Active_Directory#Active_Directory_Services

#### Lightweight Directory Services
> 🔗 https://en.wikipedia.org/wiki/Active_Directory#Active_Directory_Services

#### Certificate Services
> 🔗 https://en.wikipedia.org/wiki/Active_Directory#Active_Directory_Services

#### Federation Services
> 🔗 https://en.wikipedia.org/wiki/Active_Directory#Active_Directory_Services

#### Rights Management Services
> 🔗 https://en.wikipedia.org/wiki/Active_Directory#Active_Directory_Services


### How Communication Works in a Windows Domain
↗ [Windows Domain](../../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Microsoft%20Operating%20Systems/Windows/📌%20Windows%20NT%20(New%20Technology)%20Kernel/Windows%20IO%20&%20Files%20Management/Windows%20Network/Windows%20Domain.md)

Domain communication relies heavily on standard network protocols that work at a much lower level than a URL:
- **Kerberos (TCP/UDP Port 88):** This is the **primary authentication protocol**. When a user logs in or a computer needs to access a resource, Kerberos is used to securely verify their identity.
- **LDAP (TCP/UDP Port 389):** **Lightweight Directory Access Protocol** is used to query and update the central database (**Active Directory**). For example, a client uses LDAP to look up a user's security groups or a server's properties.
- **SMB (TCP Port 445):** **Server Message Block** is the protocol used for **file and print sharing** and for applying group policies from the Domain Controller.
- **DNS (TCP/UDP Port 53):** As mentioned, this is essential for name resolution so that all the above protocols know which IP address to send their traffic to.


### Unix Integration
> 🔗 https://en.wikipedia.org/wiki/Active_Directory#Unix_integration

Varying levels of interoperability with Active Directory can be achieved on most [Unix-like](https://en.wikipedia.org/wiki/Unix-like "Unix-like") operating systems (including [Unix](https://en.wikipedia.org/wiki/Unix "Unix"), [Linux](https://en.wikipedia.org/wiki/Linux "Linux"), [Mac OS X](https://en.wikipedia.org/wiki/Mac_OS_X "Mac OS X") or Java and Unix-based programs) through standards-compliant LDAP clients, but these systems usually do not interpret many attributes associated with Windows components, such as [Group Policy](https://en.wikipedia.org/wiki/Group_Policy "Group Policy") and support for one-way trusts.

Third parties offer Active Directory integration for Unix-like platforms, including:
- _PowerBroker Identity Services_, formerly _Likewise_ ([BeyondTrust](https://en.wikipedia.org/wiki/BeyondTrust "BeyondTrust"), formerly Likewise Software) – Allows a non-Windows client to join Active Directory
- _ADmitMac_ ([Thursby Software Systems](https://en.wikipedia.org/wiki/Thursby_Software_Systems "Thursby Software Systems"))
- _[Samba](https://en.wikipedia.org/wiki/Samba_\(software\) "Samba (software)")_ ([free software](https://en.wikipedia.org/wiki/Free_software "Free software") under [GPLv3](https://en.wikipedia.org/wiki/GPLv3 "GPLv3")) – Can act as a fully functional Active Directory

The schema additions shipped with [Windows Server 2003 R2](https://en.wikipedia.org/wiki/Windows_Server_2003_R2 "Windows Server 2003 R2") include attributes that map closely enough to RFC 2307 to be generally usable. The reference implementation of RFC 2307, nss_ldap and pam_ldap provided by PADL.com, support these attributes directly. The default schema for group membership complies with RFC 2307bis (proposed). Windows Server 2003 R2 includes a [Microsoft Management Console](https://en.wikipedia.org/wiki/Microsoft_Management_Console "Microsoft Management Console") snap-in that creates and edits the attributes.

An alternative option is to use another directory service as non-Windows clients authenticate to this while Windows Clients authenticate to Active Directory. Non-Windows clients include [389 Directory Server](https://en.wikipedia.org/wiki/389_Directory_Server "389 Directory Server") (formerly Fedora Directory Server, FDS), ViewDS v7.2 [XML Enabled Directory](https://en.wikipedia.org/wiki/XML_Enabled_Directory "XML Enabled Directory"), and Sun Microsystems [Sun Java System Directory Server](https://en.wikipedia.org/wiki/Sun_Java_System_Directory_Server "Sun Java System Directory Server"). The latter two are both able to perform two-way synchronization with Active Directory and thus provide a "deflected" integration.

Another option is to use [OpenLDAP](https://en.wikipedia.org/wiki/OpenLDAP "OpenLDAP") with its _translucent_ overlay, which can extend entries in any remote LDAP server with additional attributes stored in a local database. Clients pointed at the local database see entries containing both the remote and local attributes, while the remote database remains completely untouched.

Administration (querying, modifying, and monitoring) of Active Directory can be achieved via many scripting languages, including [PowerShell](https://en.wikipedia.org/wiki/PowerShell "PowerShell"), [VBScript](https://en.wikipedia.org/wiki/VBScript "VBScript"), [JScript/JavaScript](https://en.wikipedia.org/wiki/JavaScript "JavaScript"), [Perl](https://en.wikipedia.org/wiki/Perl "Perl"), [Python](https://en.wikipedia.org/wiki/Python_\(programming_language\) "Python (programming language)"), and [Ruby](https://en.wikipedia.org/wiki/Ruby_\(programming_language\) "Ruby (programming language)"). Free and non-free Active Directory administration tools can help to simplify and possibly automate Active Directory management tasks.

Since October 2017 Amazon [AWS](https://en.wikipedia.org/wiki/Amazon_Web_Services "Amazon Web Services") offers integration with Microsoft Active Directory.



## Architecture /Structure of An Active Directory Service
### Logical Structure
> 🔗 https://en.wikipedia.org/wiki/Active_Directory#Logical_structure


### Physical Structure
> 🔗 https://en.wikipedia.org/wiki/Active_Directory#Physical_structure



## Ref
