# Virtual Security Switch

[TOC]



## Res
🏠 
🚧 


### Related Topics



## Intro
> 🔗 https://en.wikipedia.org/wiki/Virtual_security_switch

A virtual security switch is a **software Ethernet switch** with embedded security controls within it that runs within virtual environments such as VMware vSphere, Citrix XenDesktop, Microsoft Hyper-V and Virtual Iron. The primary purpose of a virtual security switch is to provide security measures such as isolation, control and content inspection between virtual machines.
Virtual machines within enterprise server environments began to gain popularity in 2005 and quickly started to become a standard in the way companies deploy servers and applications. In order to deploy these servers within a virtual environment, a virtual network needed to be formed. As a result, companies such as VMware created a resource called a virtual switch. The purpose of the virtual switch was to provide network connectivity within the virtual environment so that virtual machines and applications could communicate within the virtual network as well as with the physical network.

This concept of a virtual network introduced a number of problems, as it related to security within virtual environment, due to only having virtual switching technology within the environment and not security technologies. Unlike physical networks that have switches with access control lists (ACLs), firewalls, antivirus gateways, or intrusion prevention devices, the virtual network was wide open. The virtual security switch concept is one where switching and security have joined forces, so that security controls could be placed within the virtual switch and provide per-port inspection and isolation within the virtual environment. This concept allowed security to get as close as possible to the end points that it intends to protect, without having to reside on the end points (host-based on virtual machines) themselves.
By eliminating the need to deploy host-based security solutions on virtual machines, a significant performance improvement can be achieved when deploying security within the virtual environment. This is because virtual machines share computing resources (e.g. CPU time, memory or disk space) while physical servers that have dedicated resources. One way of understanding this, is to picture 20 virtual machines running on a dual-CPU server and each virtual server having its own host-based firewall running on them. This would make up 20 firewalls using the same resources that the 20 virtual machines are using. This defeats the purpose of virtualization, which is to apply those resources to virtual servers not security applications. Deploying security centrally within the virtual environment is in a sense one firewall versus 20 firewalls.



## Ref
