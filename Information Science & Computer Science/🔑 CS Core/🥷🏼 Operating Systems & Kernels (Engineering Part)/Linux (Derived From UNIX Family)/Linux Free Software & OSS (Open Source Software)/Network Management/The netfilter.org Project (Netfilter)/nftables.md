# nftables

[TOC]



## Res
🏠 https://www.netfilter.org/projects/nftables/index.html
🚧 
📂 https://wiki.nftables.org/wiki-nftables/index.php/Main_Page


### Related Topics



## Intro
> 🔗 https://wiki.nftables.org/wiki-nftables/index.php/What_is_nftables%3F

**`nftables`** replaces the popular **`{ip,ip6,arp,eb}tables`**. This software provides a new in-kernel packet classification framework that is based on a network-specific Virtual Machine (VM) and a new **`nft`** userspace command line tool. 

**`nftables`** reuses the existing Netfilter subsystems such as the existing hook infrastructure, the connection tracking system, NAT, userspace queueing and logging subsystem.

This software also provides **`libnftables`**, the high-level userspace library that includes support for JSON, see `man (3)libnftables` for more information.

**`nftables`** is the modern Linux kernel packet classification framework. New code should use it instead of the legacy `{ip,ip6,arp,eb}_tables `(`xtables`) infrastructure. For existing codebases that have not yet converted, the legacy `xtables` infrastructure is still maintained as of 2021. Automated tools assist the `xtables` to `nftables` conversion process.

**`nftables`** in a nutshell:
- It is available in Linux kernels >= 3.13.
- It comes with a new command line utility _nft_ whose syntax is different to iptables.
- It also comes with a compatibility layer that allows you to run iptables commands over the new nftables kernel framework.
- It provides a generic set infrastructure that allows you to construct maps and concatenations. You can use these new structures to arrange your ruleset in a multidimensional tree which **drastically** reduces the number of rules that need to be inspected until reaching the final action on a packet.

### Main Features
- Network-specific VM: the **nft** command line tool compiles the ruleset into the VM bytecode in netlink format, then it pushes this into the kernel via the nftables Netlink API. When retrieving the ruleset, the VM bytecode in netlink format is decompiled back to its original ruleset representation. So **nft** behaves both as compiler and decompiler.
- High performance through maps and concatenations: Linear ruleset inspection doesn't scale up. Using maps and concatenations, you can structure your ruleset to reduce the number of rule inspections to find the final action on the packet to the bare minimum.
- Smaller kernel codebase. The intelligence is placed in userspace **nft** command line tool, which is considerably more complex than iptables in terms of codebase, however, in the midrun, this will potentially allow us to deliver new features by upgrading the userspace command line tool, with no need of kernel upgrades.
- Unified and consistent syntax for every support protocol family, contrary to xtables utilities, that are well-known to be full of inconsistencies.


### Why `nftables`?
We like `iptables` after all, this tool has been serving us (and will likely keep serving still for a while in many deployments) to filter out traffic on both per-packet and per-flow basis, log suspicious traffic activity, perform NAT and many other things. It comes with more than a hundred of extensions that have been contributed along the last 15 years!. 

Nevertheless, the `iptables` framework suffers from limitations that cannot be easily worked around:
- Avoid code duplication and inconsistencies: Many of the `iptables` extensions are protocol specific, so there is no a consolidated way to match packet fields, instead we have one extension for each protocol that it supports. This bloats the codebase with very similar code to perform a similar task: payload matching.
- Faster packet classification through enhanced generic set and map infrastructure.
- Simplified dual stack IPv4/IPv6 administration, through the new `inet` family that allows you to register base chains that see both IPv4 and IPv6 traffic.
- Better dynamic ruleset updates support.
- Provide a Netlink API for third party applications, just as other Linux Networking and Netfilter subsystem do.
- Address syntax inconsistencies and provide nicer and more compact syntax.

These, among other things not listed here, triggered the `nftables` development which was originally presented to the Netfilter community in the 6th Netfilter Workshop in Paris (France).



## Ref
