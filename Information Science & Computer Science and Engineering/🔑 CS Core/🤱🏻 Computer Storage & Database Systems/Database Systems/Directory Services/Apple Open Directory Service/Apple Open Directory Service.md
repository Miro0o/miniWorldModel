# Apple Open Directory Service

[TOC]



## Res
### Related Topics
↗ [LDAP (Lightweight Directory Access Protocol)](../../../../🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x01%20Application%20Layer/Messaging%20&%20Remote%20Accessing/LDAP%20(Lightweight%20Directory%20Access%20Protocol)/LDAP%20(Lightweight%20Directory%20Access%20Protocol).md)


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Apple_Open_Directory

**Apple Open Directory** is the [LDAP](https://en.wikipedia.org/wiki/LDAP "LDAP") [directory service](https://en.wikipedia.org/wiki/Directory_service "Directory service") model implementation from [Apple Inc.](https://en.wikipedia.org/wiki/Apple_Inc. "Apple Inc.") A directory service is [software](https://en.wikipedia.org/wiki/Computer_software "Computer software") which stores and organizes information about a [computer network](https://en.wikipedia.org/wiki/Computer_network "Computer network")'s users and network resources and which allows network administrators to manage users' access to the resources.

In the context of [macOS Server](https://en.wikipedia.org/wiki/MacOS_Server "MacOS Server"), _Open Directory_ describes a shared [LDAPv3](https://en.wikipedia.org/wiki/Lightweight_Directory_Access_Protocol "Lightweight Directory Access Protocol") directory domain and a corresponding authentication model composed of Apple Password Server and [Kerberos](https://en.wikipedia.org/wiki/Kerberos_\(protocol\) "Kerberos (protocol)") 5 tied together using a modular Directory Services system. Apple Open Directory is a [fork](https://en.wikipedia.org/wiki/Fork_\(software_development\) "Fork (software development)") of [OpenLDAP](https://en.wikipedia.org/wiki/OpenLDAP "OpenLDAP").

The term _Open Directory_ can also be used to describe the entire directory services framework used by [macOS](https://en.wikipedia.org/wiki/MacOS "MacOS") and macOS Server. In this context, it describes the role of a macOS or macOS Server system when it is connected to an existing directory domain, in which context it is sometimes referred to as _Directory Services_.

Apple, Inc. also publishes an [API](https://en.wikipedia.org/wiki/Application_programming_interface "Application programming interface") called the _OpenDirectory_ framework, permitting macOS applications to interrogate and edit the Open Directory data.

With the release of [Mac OS X Leopard](https://en.wikipedia.org/wiki/Mac_OS_X_Leopard "Mac OS X Leopard") (10.5), Apple chose to move away from using the [NetInfo](https://en.wikipedia.org/wiki/NetInfo "NetInfo") directory service (originally found in [NeXTSTEP](https://en.wikipedia.org/wiki/NeXTSTEP "NeXTSTEP") and [OPENSTEP](https://en.wikipedia.org/wiki/OPENSTEP "OPENSTEP")), which had been used by default for all local accounts and groups in every release of [Mac OS X](https://en.wikipedia.org/wiki/MacOS "MacOS") from 10.0 to 10.4. Mac OS X 10.5 now uses Directory Services and its plugins for all directory information. Local accounts are now registered in the Local Plugin, which uses XML [property list](https://en.wikipedia.org/wiki/Property_list "Property list") (plist) files stored in `/var/db/dslocal/nodes/Default/` as its backing storage.



## Ref
