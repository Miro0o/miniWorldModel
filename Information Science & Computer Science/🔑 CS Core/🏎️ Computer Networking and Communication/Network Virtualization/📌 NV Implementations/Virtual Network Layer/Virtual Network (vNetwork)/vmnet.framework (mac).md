# vmnet.framework (mac)

[TOC]



## Res
📂 https://developer.apple.com/documentation/vmnet


### Related Topics
↗ [Apple Operating Systems](../../../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Apple%20Operating%20Systems/Apple%20Operating%20Systems.md)



## Intro
The `vmnet framework `is an API for virtual machines to read and write packets.

The API allows a Guest OS interface to be in host mode or shared mode. Interfaces in host mode can communicate with the native host system and other interfaces running in host mode. In shared mode, the network interface can send and receive packets to the Internet, the native host, and other interfaces running in sharing mode.

![](../../../../../../../Assets/Pics/Pasted%20image%2020240321143939.png)

The VM Network API provides support for an interface in the guest operating system. The API provides the MAC address and MTU that needs to be configured on the guest OS interface. The interface receives a private IPv4 address via DHCP. IPv4 traffic originating from the guest operating system must use the private IPv4 address. Packets sent from a different IPv4 address are dropped by the system.

You can create a maximum of 32 interfaces with a limit of 4 per guest operating system. Each read/write call allows up to 200 packets to be read or written for a maximum of 256KB. Each packet written should be a complete ethernet frame.

## Ref
