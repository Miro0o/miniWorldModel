# Port-based vLAN

[TOC]



## Res
### Related Topics



## Intro
### Basic Port-based VLAN
![|600](../../../../../../../../Assets/Pics/Screenshot%202023-06-02%20at%2011.57.59%20AM.png)


### Inter-vLAN Communicating
But by completely isolating the two VLANs, we have introduced a new difficulty! How can traffic from the EE Department be sent to the CS Department? One way to handle this would be to connect a VLAN switch port (e.g., port 1 in Figure 6.25) to an external router and configure that port to belong both the EE and CS VLANs. In this case, even though the EE and CS departments share the same physical switch, the logical configuration would look as if the EE and CS departments had separate switches connected via a router. An IP datagram going from the EE to the CS department would first cross the EE VLAN to reach the router and then be forwarded by the router back over the CS VLAN to the CS host. Fortunately, switch vendors make such configurations easy for the network manager by building a single device that contains both a VLAN switch and a router, so a separate external router is not needed. A homework problem at the end of the chapter explores this scenario in more detail.


### Inter-network Communicating via vLAN & vLAN Trunking
> One easy solution would be to define a port belonging to the CS VLAN on each switch (similarly for the EE VLAN) and to connect these ports to each other, as shown in Figure 6.26(a). This solution doesn’t scale, however, since N VLANS would require N ports on each switch simply to interconnect the two switches.

A more scalable approach to interconnecting VLAN switches is known as **VLAN trunking**. In the VLAN trunking approach shown in Figure 6.26(b), a special port on each switch (port 16 on the left switch and port 1 on the right switch) is configured as a **trunk port** to interconnect the two VLAN switches. The trunk port belongs to all VLANs, and frames sent to any VLAN are forwarded over the trunk link to the other switch. 

But this raises yet another question: How does a switch know that a frame arriving on a trunk port belongs to a particular VLAN? The IEEE has defined an extended Ethernet frame format, **802.1Q**, for frames crossing a VLAN trunk.

![](../../../../../../../../Assets/Pics/Screenshot%202023-06-02%20at%2011.58.45%20AM.png)
#### 802.1Q
> For more at ↗ [IEEE 802.1Q](../📌%20IEEE%20802.1Q/IEEE%20802.1Q.md)

As shown in Figure 6.27, the 802.1Q frame consists of the standard Ethernet frame with a four-byte VLAN tag added into the header that carries the identity of the VLAN to which the frame belongs. The VLAN tag is added into a frame by the switch at the sending side of a VLAN trunk, parsed, and removed by the switch at the receiving side of the trunk. The VLAN tag itself consists of a 2-byte **Tag Protocol Identifier (TPID)** field (with a fixed hexadecimal value of 81-00), a 2-byte Tag Control Information field that contains a 12-bit VLAN identifier field, and a 3-bit priority field that is similar in intent to the IP datagram TOS field.

![](../../../../../../../../Assets/Pics/Screenshot%202023-06-02%20at%2011.59.20%20AM.png)



## Ref

