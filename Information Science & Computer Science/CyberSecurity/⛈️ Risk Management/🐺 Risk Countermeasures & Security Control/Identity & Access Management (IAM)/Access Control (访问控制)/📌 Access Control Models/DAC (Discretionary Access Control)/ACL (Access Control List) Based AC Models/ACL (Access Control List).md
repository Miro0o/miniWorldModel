# ACL (Access Control List)

[TOC]



## Res
### Related Topics


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Access-control_list

In [computer security](https://en.wikipedia.org/wiki/Computer_security), an **access control list** (**ACL**) is a list of [permissions](https://en.wikipedia.org/wiki/File-system_permissions) associated with a [system resource](https://en.wikipedia.org/wiki/System_resource) (object). An ACL specifies which [users](https://en.wikipedia.org/wiki/User_(computing)) or [system processes](https://en.wikipedia.org/wiki/Process_(computing)) are granted access to objects, as well as what operations are allowed on given objects. Each entry in a typical ACL specifies a subject and an operation. 



## Implementations
### 🗄️ Filesystem ACLs
#### POSIX ACL
[POSIX](https://en.wikipedia.org/wiki/POSIX) 1003.1e/1003.2c working group made an effort to standardize ACLs, resulting in what is now known as "POSIX.1e ACL" or simply "POSIX ACL". The POSIX.1e/POSIX.2c drafts were withdrawn in 1997 due to participants losing interest in funding the project and turning to more powerful alternatives such as NFSv4 AC

😮‍💨 As of December 2019, no live sources of the draft could be found on the Internet, but they can still be found in the [Internet Archive](https://en.wikipedia.org/wiki/Internet_Archive).
#### Windows NT ACLs
#TODO 
#### NFSv4 ACL
[NFSv4](https://en.wikipedia.org/wiki/NFSv4) ACLs are much more powerful than POSIX draft ACLs. Unlike draft POSIX ACLs, NFSv4 ACLs are defined by an actually published standard, as part of the [Network File System](https://en.wikipedia.org/wiki/Network_File_System).

NFSv4 ACLs are supported by many Unix and Unix-like operating systems.

NFSv4 ACLs are organized nearly identically to the Windows NT ACLs used in [NTFS](https://en.wikipedia.org/wiki/NTFS). NFSv4.1 ACLs are a superset of both NT ACLs and POSIX draft ACLs. [Samba](https://en.wikipedia.org/wiki/Samba_(software)) supports saving the NT ACLs of SMB-shared files in many ways, one of which is as NFSv4-encoded ACLs.Active Directory ACLs


### 🕷️ Networking ACLs
On some types of proprietary computer hardware (in particular, [routers](https://en.wikipedia.org/wiki/Router_(computing)) and [switches](https://en.wikipedia.org/wiki/Network_switch)), an access-control list provides rules that are applied to [port numbers](https://en.wikipedia.org/wiki/TCP_and_UDP_port) or [IP addresses](https://en.wikipedia.org/wiki/IP_address) that are available on a [host](https://en.wikipedia.org/wiki/Server_(computing)) or other [layer 3](https://en.wikipedia.org/wiki/Network_Layer), each with a list of hosts and/or networks permitted to use the service.

Both individual [servers](https://en.wikipedia.org/wiki/Server_(computing)) and [routers](https://en.wikipedia.org/wiki/Router_(computing)) can have network ACLs. Access-control lists can generally be configured to control both inbound and outbound traffic, and in this context, they are similar to [firewalls](https://en.wikipedia.org/wiki/Firewall_(networking)).

> More on ↗️ [Networking ACL](../../../../../../../Network%20Security/🏇%20Network%20Security%20Basics%20&%20Protocols/Networking%20Access%20Control/Networking%20ACL/Networking%20ACL.md)

### Other ACLs..
#### Active Directory ACLs
[Microsoft](https://en.wikipedia.org/wiki/Microsoft)'s [Active Directory](https://en.wikipedia.org/wiki/Active_Directory) service implements an [LDAP](https://en.wikipedia.org/wiki/LDAP) server that stores and disseminates configuration information about users and computers in a domain.


#### SQL Implementations
ACL algorithms have been ported to [SQL](https://en.wikipedia.org/wiki/SQL) and to [relational database systems](https://en.wikipedia.org/wiki/Relational_database_management_system). Many "modern" (2000s and 2010s) [SQL](https://en.wikipedia.org/wiki/SQL)-based systems, like [enterprise resource planning](https://en.wikipedia.org/wiki/Enterprise_resource_planning) and [content management](https://en.wikipedia.org/wiki/Content_management_system) systems, have used ACL models in their administration modules.



## Ref





