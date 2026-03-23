# Name Services

[TOC]



## Res
↗ [Directory Services](../../../🤱🏻%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/Directory%20Services/Directory%20Services.md)
↗ [LDAP (Lightweight Directory Access Protocol)](../../../🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x01%20Application%20Layer/Messaging%20&%20Remote%20Accessing/LDAP%20(Lightweight%20Directory%20Access%20Protocol)/LDAP%20(Lightweight%20Directory%20Access%20Protocol).md)



## Intro
Name services on Unix systems are typically configured through [nsswitch.conf](https://en.wikipedia.org/wiki/Nsswitch.conf "Nsswitch.conf"). Information from name services can be retrieved with [getent](https://en.wikipedia.org/wiki/Getent "Getent").

#TODO 


### Name Service Switch (NSS)
> 🔗 https://en.wikipedia.org/wiki/Name_Service_Switch

The **Name Service Switch** (**NSS**) connects the computer with a variety of sources of common configuration databases and name resolution mechanisms. These sources include local operating system files (such as [/etc/passwd](https://en.wikipedia.org/wiki//etc/passwd "/etc/passwd"), /etc/group, and [/etc/hosts](https://en.wikipedia.org/wiki//etc/hosts "/etc/hosts")), the [Domain Name System](https://en.wikipedia.org/wiki/Domain_Name_System "Domain Name System") (DNS), the [Network Information Service](https://en.wikipedia.org/wiki/Network_Information_Service "Network Information Service") (NIS, NIS+), and [LDAP](https://en.wikipedia.org/wiki/LDAP "LDAP").


### `nsswitch.conf`
A [system administrator](https://en.wikipedia.org/wiki/System_administrator "System administrator") usually configures the operating system's name services using the file /etc/nsswitch.conf. This file lists databases (such as [passwd](https://en.wikipedia.org/wiki//etc/passwd "/etc/passwd"), [shadow](https://en.wikipedia.org/wiki/Shadow_password "Shadow password") and [group](https://en.wikipedia.org/wiki/Group_(database) "Group (database)")), and one or more sources for obtaining that information. Examples for sources are _files_ for local files,  _ldap_ for the [Lightweight Directory Access Protocol](https://en.wikipedia.org/wiki/Lightweight_Directory_Access_Protocol "Lightweight Directory Access Protocol"), _nis_ for the [Network Information Service](https://en.wikipedia.org/wiki/Network_Information_Service "Network Information Service"), _nisplus_ for [NIS+](https://en.wikipedia.org/wiki/Nisplus "Nisplus"), _dns_ for the [Domain Name System](https://en.wikipedia.org/wiki/Domain_Name_System "Domain Name System") (DNS), and _wins_ for [Windows Internet Name Service](https://en.wikipedia.org/wiki/Windows_Internet_Name_Service "Windows Internet Name Service").

The nsswitch.conf file has line entries for each service consisting of a database name in the first field, terminated by a colon, and a list of possible source databases in the second field.



## Ref

