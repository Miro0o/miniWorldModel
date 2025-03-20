# NetBIOS (Network Basic Input/Output System)

[TOC]



## Res
### Related Topics
↗ [mDNS (Multicast DNS)](DNS%20(Domain%20Name%20Systems)/mDNS%20(Multicast%20DNS).md)


### Other Resources



## Intro
> As of April 2022, Microsoft has begun the process of phasing out both LLMNR and [NetBIOS](https://en.wikipedia.org/wiki/NetBIOS#Name_service "NetBIOS") name resolution in favour of [mDNS](https://en.wikipedia.org/wiki/Multicast_DNS "Multicast DNS")

> 🔗 https://www.techtarget.com/searchnetworking/definition/NetBIOS

**NetBIOS (Network Basic Input/Output System)** is a network service that enables applications on different computers to communicate with each other across a **local area network (LAN)**. It was developed in the 1980s for use on early, IBM-developed PC networks. A few years later, Microsoft adopted NetBIOS and it became a de facto industry standard. Currently, NetBIOS is mostly relegated to specific legacy application use cases that still rely on the suite of communication services.

NetBIOS has been used in Ethernet and Token Ring networks and, is included as part of the NetBIOS Extended User Interface ([NetBEUI](https://www.techtarget.com/searchwindowsserver/definition/NetBEUI-NetBIOS-Extended-User-Interface)). Because NetBIOS is not a network protocol, it originally used NetBEUI to facilitate network communications on NetBIOS's behalf. NetBEUI was used to create network delivery frames with data being loaded into the frame's payload section. While NetBEUI could operate on a flat network, it could not route data between networks. Thus, NetBEUI was quickly replaced with a TCP/IP transport alternative and has long become extinct.

NetBIOS was originally created to standardize and free applications from having to understand the details of the network, including error recovery in session mode. A NetBIOS request is provided in the form of a network control block, or NCB, which, among other things, specifies a message location and the name of a destination.

NetBIOS delivers services at the session layer -- Layer 5 -- of the Open Systems Interconnection ([OSI](https://www.techtarget.com/searchnetworking/definition/OSI)) model.


### What is the difference between NetBIOS and DNS?
> 🔗 https://www.techtarget.com/searchnetworking/definition/NetBIOS

Both NetBIOS and the domain name system ([DNS](https://www.techtarget.com/searchnetworking/definition/domain-name-system)) use naming processes that map physical or logical computer addresses to names that are easier for humans to work with. In the case of DNS, a computer or device's IP address is mapped to a unique domain name such as techtarget.com. From a NetBIOS over TCP/IP perspective, the IP address is mapped to a human-friendly NetBIOS name that uses up to 16 alphanumeric characters. However, note that Microsoft's implementation of NetBIOS reserves one of those 16 characters to define specific NetBIOS functions. Thus, Microsoft NBT uses names up to 15 alphanumeric characters long.

The other major difference between DNS and NetBIOS is that DNS uses a hierarchical naming structure while the NetBIOS structure is flat. With DNS, a "." designates the hierarchy within the system. For example: test1.techtarget.com and test2.techtarget.com both live within the ".com" top-level domain and ".techtarget" second-level domain. This enables improved efficiencies within the mapping structure itself.

NetBIOS, on the other hand, does not use a hierarchical or nested structure. Instead, all devices on a corporate LAN reside inside a single, flat structure. This makes NetBIOS far less scalable as the number of devices increases when compared to DNS.

Finally, DNS has become far more popular compared to NetBIOS. DNS is used on virtually all corporate networks and across the internet, while NetBIOS is now only used for legacy application use cases.



## Ref
[👍 NetBIOS (Network Basic Input/Output System)]: https://www.techtarget.com/searchnetworking/definition/NetBIOS
