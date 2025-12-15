# DNS Servers Architecture

[TOC]



## Res
### Related Topics



## Intro
### Why Decentralized DNS Servers Architectures?
Problems that arise when we try to centralize DNS.
1. Single point of failure
2. Increase in traffic volume
3. Distant centralized database
4. Maintenance

As centralized DNS does not scale because of the reasons mentioned above, a need arose to implement DNS in a distributed manner . The DNS is a distributed system, implemented in a hierarchy of many name servers. The decentralized administration is achieved through delegation.



## Structure of DNS
![](../../../../../../../Assets/Pics/Screenshot%202023-06-17%20at%2010.20.26%20AM.png)

![](../../../../../../../Assets/Pics/Screenshot%202023-06-17%20at%205.45.56%20PM.png)

The structure of DNS is similar to the structure of **Unix file system**. It is a tree-like structure in which the root is known as the **Root DNS sever**. Each node in the tree is associated with a resource record which holds the information associated with it, and can have any number of branches. 

> There can be a maximum of **127 levels** in a tree; however, you will never find any domain name that long. 
> Each node in a tree represents its part in a domain name which can contain a maximum of **63 characters** long. 


### Domain Name Space
↗ [DNS (Domain Name Systems)](../../../../../🏎️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x01%20Application%20Layer/🚔%20Network%20Managements%20&%20Standards/🏘️%20Local%20Configuration%20&%20Discovery/Name%20Service%20Discovery/DNS%20(Domain%20Name%20Systems)/DNS%20(Domain%20Name%20Systems).md)


### 1️⃣ Root DNS Servers
The root DNS servers (root name servers) keep track of all the authoritative name servers of each of the Top Level Domain (TLD) name servers. The client queries the root name servers to resolve a request for the given domain name. In response the root name server provides the address of the TLD name server for the given query in which the domain name ends with. E.g. If a client requests for google.com, the root name server will address the client to the com DNS server so as to solve his query. The top level name server holds the list of authoritative name server in their respective domain. E.g. The com domain holds the address of yahoo.com, google.com etc. The querier (the term querier is given because there are two approach for resolving a request – iterative and recursive approach) then queries the top level name server to resolve the query which returns the address of the authoritative name server. Each name server query gives the querier the required information or takes him one step ahead towards its destination. 

Root name servers play a key role in resolving any DNS query. Usually DNS provides caching which reduces the load at the root name server. In event when the local name server is unable to find the given domain in its cache the query arrives at the root name server.


### 2️⃣ TLD (Top Level Domain) DNS Servers
As discussed earlier, each domain name is made up of a series of character strings (called "labels") separated by dots. The right-most label in a domain name is referred to "Top-Level Domain" (TLD). Every TLD includes many second-level domains E.g. sjsu.edu. Every second level TLD may include number of third level domains. E.g. se.sjsu.edu. This process can go on.

Refer to the fig. structure of domain to find out where exactly are TLD located in the DNS hierarchy. The TLD divides the internet domain name space into several domains. Most commonly used domains are:

1. com – Usually used by commercial organization. E.g. Yahoo (yahoo.com)

2. edu – Usually used by educational institutes. E.g. San Jose State University (sjsu.edu)

3. org – Used by non profit organizations. E.g. IEEE (ieee.org)

4. mil – used by military organizations. E.g. US army (army.mil)

5. net – In earlier days it was used to represent the network infrastructure. Nowadays it is open public for any commercial organization.

6. gov – used to represents government organization. E.g. NASA (nasa.gov)

Apart from those mentioned above there are many more domains available. Every country has its own domain name space, which is represented by the name of the country. E.g. United States has a domain name ‘us’, India has a domain name ‘in’.

### Zones
Before jumping to the authoritative name servers, we will have a quick overview of zones and delegates. A zone is similar to a domain except a subtle difference. The Top Level Domain and the domains under a Top Level Domain are divided into smaller units with the help of delegation. The need arises to divide these domains into small units, so that it can be managed easily. These small units are called zones. E.g. There would be many zones which are present under the root name servers. They might be com zone, edu zone, org zone etc. similar to a sub-domain concept; here too we have zones present inside zones. Therefore we would have many zones insides the com zone, edu zone, org zone etc. E.g. The edu zone may hold a zone name sjsu.edu, mit.edu etc. In the similar fashion, the com zone may hold yahoo.com zone, cisco.com zone, etc. By dividing the DNS structure into zones, it is each zones responsibility to manage their own domain. E.g. If the edu domain was not divided into different zones, it would be the responsibility of edu to manage sjsu.edu, mit.edu etc. which would become cumbersome for the people who manage the edu domain, therefore it is a natural to break up into different zones depending upon their responsibility.


### 3️⃣ Authoritative DNS Servers


### 4️⃣ Local DNS Server
Apart from the Root DNS Server, Top Level DNS server, and the Authoritative DNS server we have a Local DNS Sever. The local name server does not belong strictly to the hierarchy, and that’s the reason you won’t find the local name server in the fig. Structure of Domain Name System. However it still plays an important role indirectly while resolving a DNS query. 

Every ISP has a Local DNS server which is some times referred to as default name server. When the host is connected to the ISP, the ISP issues a single IP address through DHCP mechanism (More details of DHCP is covered in section 5.1). You can check your IP address of your computer with the ‘ipconfig’ command in Windows or 'ipconfig' command in Linux.

A host makes a DNS request and when it arrives to the Local DNS server it first checks in cache (more details on DNS caching is covered in further) to see if it can solves the DNS request. If it finds the requested information in the cache, it returns the response to the host. The response it return is called Not Authoritative answer. If the requested information is not found in the cache, then there are two approaches to resolve the given query.

1. Iterative 

2. Recursive

In short we can say that the Local DNS server is a proxy to forward the query into the DNS hierarchy. The entire process of resolving the query through the hierarchy remains transparent to the user.



## Ref

