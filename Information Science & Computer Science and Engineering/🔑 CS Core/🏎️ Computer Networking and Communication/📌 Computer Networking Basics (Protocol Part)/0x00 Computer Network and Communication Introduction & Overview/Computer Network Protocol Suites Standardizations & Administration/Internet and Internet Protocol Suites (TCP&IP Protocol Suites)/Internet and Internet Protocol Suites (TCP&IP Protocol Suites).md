# Internet and Internet Protocol Suites (TCP&IP Protocol Suites)

[TOC]



## Res
📂 https://www.rfc-editor.org
The RFC Series (ISSN 2070-1721) contains technical and organizational documents about the Internet, including the specifications and policy documents produced by five streams: the Internet Engineering Task Force ([IETF](https://www.ietf.org/)), the Internet Research Task Force ([IRTF](https://www.irtf.org/)), the Internet Architecture Board ([IAB](https://www.iab.org/)), [Independent Submissions](https://www.rfc-editor.org/independent), and [Editorial](https://www.rfc-editor.org/info/rfc9280).


### Related Topics
↗ [Web Development & The Internet](../../../../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20Web%20Development%20&%20The%20Internet/Web%20Development%20&%20The%20Internet.md)
↗ [Internet & Entertainment Industry](../../../../../../🗺%20CS%20Overview/Electronics%20&%20Information%20Technologies%20Business%20Fields%20Research/Software%20Industry%20&%20Providers/Internet%20&%20Entertainment%20Industry/Internet%20&%20Entertainment%20Industry.md)



## Intro: The Internet
> 💡 [Internet](https://www.henduohao.com/product/1065.html)

The **Internet** (or **internet**) is the **global system of interconnected [computer networks](https://en.wikipedia.org/wiki/Computer_network) that uses the [Internet protocol suite](https://en.wikipedia.org/wiki/Internet_protocol_suite) (TCP/IP) to communicate between networks and devices**. It is a *[network of networks](https://en.wikipedia.org/wiki/Internetworking)* that consists of private, public, academic, business, and government networks of local to global scope, linked by a broad array of electronic, wireless, and [optical networking](https://en.wikipedia.org/wiki/Optical_networking) technologies. The Internet carries a vast range of information resources and services, such as the interlinked [hypertext](https://en.wikipedia.org/wiki/Hypertext) documents and [applications](https://en.wikipedia.org/wiki/Web_application) of the [World Wide Web](https://en.wikipedia.org/wiki/World_Wide_Web) (WWW), [electronic mail](https://en.wikipedia.org/wiki/Email), [telephony](https://en.wikipedia.org/wiki/Internet_telephony), and [file sharing](https://en.wikipedia.org/wiki/File_sharing).

The Internet has no single centralized governance in either technological implementation or policies for access and usage; each constituent network sets its own policies. 
- The overreaching definitions of the two principal [name spaces](https://en.wikipedia.org/wiki/Name_space) in the Internet, the [Internet Protocol address](https://en.wikipedia.org/wiki/IP_address) (IP address) space and the [Domain Name System](https://en.wikipedia.org/wiki/Domain_Name_System) (DNS) are directed by a maintainer organization, **the [Internet Corporation for Assigned Names and Numbers](https://en.wikipedia.org/wiki/Internet_Corporation_for_Assigned_Names_and_Numbers) (ICANN)**.
- The technical underpinning and standardization of the core protocols is an activity of the **[Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force) (IETF)**, a non-profit organization of loosely affiliated international participants that anyone may associate with by contributing technical expertise.

![web_and_Internet_arch.excalidraw | 800](../../../../../../../Assets/Illustrations/Web/web_and_Internet_arch.excalidraw.md)


### Development of Internet
↗ [Web Development & The Internet](../../../../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20Web%20Development%20&%20The%20Internet/Web%20Development%20&%20The%20Internet.md)

> 🔗 [深入浅出计算机网络 - 1.2 因特网概述](https://www.bilibili.com/video/BV14B4y1z7Rc/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d)

![](../../../../../../../Assets/Pics/Screenshot%202023-03-22%20at%2010.18.29%20AM.png)


### 🚔 Internet Standardization & Administration
↗ [Computer Network Protocol Suites Standardizations & Administration](../Computer%20Network%20Protocol%20Suites%20Standardizations%20&%20Administration.md#1️⃣%20Internet)


### Internet Components
networks of networks

core networks
edge networks


### Hierarchy of Internet
![](../../../../../../../Assets/Pics/Screenshot%202023-03-22%20at%2010.35.21%20AM.png)

↗ [Hierarchy of Internet & ISP & IBP](Hierarchy%20of%20Internet%20&%20ISP%20&%20IBP.md)



## Intro: TCP/IP Protocol Suites

> 🔗 [Internet protocol suite -- WiKipedia](https://en.wikipedia.org/wiki/Internet_protocol_suite)
> 
> **TL;DR**
> Internet protocol suites cover the network layer and layers above, i.e. link layer and physical layer are excluded in these suites. 
> 
> Internet protocol suites are implemented primarily for the Internet but similar computer networks as well. 

The **Internet protocol suite,** commonly known as **TCP/IP,** is a framework for organizing the set of [communication protocols](https://en.wikipedia.org/wiki/Communication_protocol) used in the [Internet](https://en.wikipedia.org/wiki/Internet) and similar [computer networks](https://en.wikipedia.org/wiki/Computer_network) according to functional criteria. The foundational protocols in the suite are the [Transmission Control Protocol](https://en.wikipedia.org/wiki/Transmission_Control_Protocol) (TCP), the [User Datagram Protocol](https://en.wikipedia.org/wiki/User_Datagram_Protocol) (UDP), and the [Internet Protocol](https://en.wikipedia.org/wiki/Internet_Protocol) (IP). In the development of this networking model, early versions of it were known as the **Department of Defense** (**DoD**) **model** because the research and development were funded by the [United States Department of Defense](https://en.wikipedia.org/wiki/United_States_Department_of_Defense) through [DARPA](https://en.wikipedia.org/wiki/DARPA).


### Layering Architecture
The Internet protocol suite provides [end-to-end data communication](https://en.wikipedia.org/wiki/End-to-end_principle) specifying how data should be packetized, addressed, transmitted, [routed](https://en.wikipedia.org/wiki/Routing), and received. This functionality is organized into four [abstraction layers](https://en.wikipedia.org/wiki/Abstraction_layer), which classify all related protocols according to each protocol's scope of networking. 

![](../../../../../../../Assets/Pics/Pasted%20image%2020240510144928.png)
<small>https://mp.weixin.qq.com/s/jlstOkjnJtrLKOGtWedebA</small>


### Protocol Stack
![科来《网络通讯协议图2023版》](../../../../../../../Assets/Cheat_Sheets/科来《网络通讯协议图2023版》.pdf)


An implementation of the layers for a particular application forms a [protocol stack](https://en.wikipedia.org/wiki/Protocol_stack). From lowest to highest, the layers are 
1. the [link layer](https://en.wikipedia.org/wiki/Link_layer), containing communication methods for data that remains within a single network segment (link); 
2. the [internet layer](https://en.wikipedia.org/wiki/Internet_layer), providing [internetworking](https://en.wikipedia.org/wiki/Internetworking) between independent networks; 
3. the [transport layer](https://en.wikipedia.org/wiki/Transport_layer), handling host-to-host communication; 
4. and the [application layer](https://en.wikipedia.org/wiki/Application_layer), providing process-to-process data exchange for applications.

The technical standards underlying the Internet protocol suite and its constituent protocols are maintained by the [Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force) (IETF). 

The Internet protocol suite **predates** the [OSI model](https://en.wikipedia.org/wiki/OSI_model), a more comprehensive reference framework for general networking systems.

![](../../../../../../../Assets/Pics/Pasted%20image%2020240423222810.png)
<small>https://www.cnblogs.com/gmpy/articles/17802712.html</small>


> 🔗 https://en.wikipedia.org/wiki/List_of_network_protocols_(OSI_model)

This article lists protocols, categorized by the nearest layer in the Open Systems Interconnection model. This list is not exclusive to only the OSI protocol family. Many of these protocols are originally based on the Internet Protocol Suite (TCP/IP) and other models and they often do not fit neatly into OSI layers.
#### Layer 1 ([physical layer](https://en.wikipedia.org/wiki/Physical_layer "Physical layer"))
- Telephone network [modems](https://en.wikipedia.org/wiki/Modems "Modems")
- [IrDA](https://en.wikipedia.org/wiki/Infrared_Data_Association "Infrared Data Association") physical layer
- [USB](https://en.wikipedia.org/wiki/USB "USB") physical layer
- [EIA](https://en.wikipedia.org/wiki/Electronic_Industries_Alliance "Electronic Industries Alliance") [RS-232](https://en.wikipedia.org/wiki/RS-232 "RS-232"), [EIA-422](https://en.wikipedia.org/wiki/EIA-422 "EIA-422"), [EIA-423](https://en.wikipedia.org/wiki/RS-423 "RS-423"), [RS-449](https://en.wikipedia.org/wiki/RS-449 "RS-449"), [RS-485](https://en.wikipedia.org/wiki/RS-485 "RS-485")
- [Ethernet physical layer](https://en.wikipedia.org/wiki/Ethernet_physical_layer "Ethernet physical layer") [10BASE-T](https://en.wikipedia.org/wiki/10BASE-T "10BASE-T"), [10BASE2](https://en.wikipedia.org/wiki/10BASE2 "10BASE2"), [10BASE5](https://en.wikipedia.org/wiki/10BASE5 "10BASE5"), [100BASE-TX](https://en.wikipedia.org/wiki/100BASE-TX "100BASE-TX"), [100BASE-FX](https://en.wikipedia.org/wiki/100BASE-FX "100BASE-FX"), [1000BASE-T](https://en.wikipedia.org/wiki/1000BASE-T "1000BASE-T"), [1000BASE-SX](https://en.wikipedia.org/wiki/1000BASE-SX "1000BASE-SX") and other varieties
- Varieties of [802.11](https://en.wikipedia.org/wiki/802.11 "802.11") [Wi-Fi](https://en.wikipedia.org/wiki/Wi-Fi "Wi-Fi") physical layers
- [DSL](https://en.wikipedia.org/wiki/Digital_subscriber_line "Digital subscriber line")
- [ISDN](https://en.wikipedia.org/wiki/Integrated_Services_Digital_Network "Integrated Services Digital Network")
- T1 and other [T-carrier](https://en.wikipedia.org/wiki/T-carrier "T-carrier") links, and E1 and other [E-carrier](https://en.wikipedia.org/wiki/E-carrier "E-carrier") links
- [ITU](https://en.wikipedia.org/wiki/International_Telecommunication_Union "International Telecommunication Union") Recommendations: see [ITU-T](https://en.wikipedia.org/wiki/ITU-T "ITU-T")
- [IEEE 1394 interfaces](https://en.wikipedia.org/wiki/IEEE_1394_interface "IEEE 1394 interface")
- [TransferJet](https://en.wikipedia.org/wiki/TransferJet "TransferJet")
- [Etherloop](https://en.wikipedia.org/wiki/Etherloop "Etherloop")
- [ARINC 818](https://en.wikipedia.org/wiki/ARINC_818 "ARINC 818") Avionics Digital Video Bus
- [G.hn](https://en.wikipedia.org/wiki/G.hn "G.hn")/[G.9960](https://en.wikipedia.org/wiki/G.9960 "G.9960") physical layer
- [CAN bus](https://en.wikipedia.org/wiki/CAN_bus "CAN bus") (controller area network) physical layer
- [Mobile Industry Processor Interface](https://en.wikipedia.org/wiki/Mobile_Industry_Processor_Interface "Mobile Industry Processor Interface") physical layer
- [Infrared](https://en.wikipedia.org/wiki/Infrared "Infrared")
- Frame Relay
- FO Fiber optics
- [X.25](https://en.wikipedia.org/wiki/X.25 "X.25")
#### Layer 2 ([data link layer](https://en.wikipedia.org/wiki/Data_link_layer "Data link layer"))
- [ARCnet](https://en.wikipedia.org/wiki/ARCnet "ARCnet") Attached Resource Computer NETwork
- [ARP](https://en.wikipedia.org/wiki/Address_Resolution_Protocol "Address Resolution Protocol") Address Resolution Protocol
- [ATM](https://en.wikipedia.org/wiki/Asynchronous_Transfer_Mode "Asynchronous Transfer Mode") Asynchronous Transfer Mode
- [CHAP](https://en.wikipedia.org/wiki/Challenge-Handshake_Authentication_Protocol "Challenge-Handshake Authentication Protocol") Challenge Handshake Authentication Protocol
- [CDP](https://en.wikipedia.org/wiki/Cisco_Discovery_Protocol "Cisco Discovery Protocol") Cisco Discovery Protocol
- DCAP Data Link Switching Client Access Protocol
- [Distributed Multi-Link Trunking](https://en.wikipedia.org/wiki/Distributed_Multi-Link_Trunking "Distributed Multi-Link Trunking")
- [Distributed Split Multi-Link Trunking](https://en.wikipedia.org/wiki/Distributed_Split_Multi-Link_Trunking "Distributed Split Multi-Link Trunking")
- DTP [Dynamic Trunking Protocol](https://en.wikipedia.org/wiki/Dynamic_Trunking_Protocol "Dynamic Trunking Protocol")
- [Econet](https://en.wikipedia.org/wiki/Econet "Econet")
- [Ethernet](https://en.wikipedia.org/wiki/Ethernet "Ethernet")
- [FDDI](https://en.wikipedia.org/wiki/Fiber_distributed_data_interface "Fiber distributed data interface") Fiber Distributed Data Interface
- [Frame Relay](https://en.wikipedia.org/wiki/Frame_Relay "Frame Relay")
- [ITU-T](https://en.wikipedia.org/wiki/ITU-T "ITU-T") [G.hn](https://en.wikipedia.org/wiki/G.hn "G.hn")
- [HDLC](https://en.wikipedia.org/wiki/High-Level_Data_Link_Control "High-Level Data Link Control") High-Level Data Link Control
- [IEEE 802.11](https://en.wikipedia.org/wiki/IEEE_802.11 "IEEE 802.11") WiFi
- [IEEE 802.16](https://en.wikipedia.org/wiki/IEEE_802.16 "IEEE 802.16") WiMAX
- [LACP](https://en.wikipedia.org/wiki/Link_Aggregation_Control_Protocol "Link Aggregation Control Protocol") Link Aggregation Control Protocol
- [LattisNet](https://en.wikipedia.org/wiki/LattisNet "LattisNet")
- [LocalTalk](https://en.wikipedia.org/wiki/LocalTalk "LocalTalk")
- [L2F](https://en.wikipedia.org/wiki/L2F "L2F") Layer 2 Forwarding Protocol
- [L2TP](https://en.wikipedia.org/wiki/L2TP "L2TP") Layer 2 Tunneling Protocol
- [LLDP](https://en.wikipedia.org/wiki/Link_Layer_Discovery_Protocol "Link Layer Discovery Protocol") Link Layer Discovery Protocol
- [LLDP-MED](https://en.wikipedia.org/wiki/LLDP-MED "LLDP-MED") Link Layer Discovery Protocol - Media Endpoint Discovery
- [MAC](https://en.wikipedia.org/wiki/Media_Access_Control "Media Access Control") Media Access Control
- [Q.710](https://en.wikipedia.org/wiki/Message_Transfer_Part "Message Transfer Part") Simplified [Message Transfer Part](https://en.wikipedia.org/wiki/Message_Transfer_Part "Message Transfer Part")
- [Multi-link trunking](https://en.wikipedia.org/wiki/Multi-link_trunking "Multi-link trunking") Protocol
- [NDP](https://en.wikipedia.org/wiki/Neighbor_Discovery_Protocol "Neighbor Discovery Protocol") Neighbor Discovery Protocol
- [PAgP](https://en.wikipedia.org/wiki/Port_Aggregation_Protocol "Port Aggregation Protocol") - Cisco Systems proprietary link aggregation protocol
- [PPP](https://en.wikipedia.org/wiki/Point-to-Point_Protocol "Point-to-Point Protocol") Point-to-Point Protocol
- [PPTP](https://en.wikipedia.org/wiki/Point-to-point_tunneling_protocol "Point-to-point tunneling protocol") Point-to-Point Tunneling Protocol
- [PAP](https://en.wikipedia.org/wiki/Password_Authentication_Protocol "Password Authentication Protocol") Password Authentication Protocol
- [RPR](https://en.wikipedia.org/wiki/Resilient_Packet_Ring "Resilient Packet Ring") IEEE 802.17 Resilient Packet Ring
- [SLIP](https://en.wikipedia.org/wiki/Serial_Line_Internet_Protocol "Serial Line Internet Protocol") Serial Line Internet Protocol (obsolete)
- [StarLAN](https://en.wikipedia.org/wiki/StarLAN "StarLAN")
- Space Data Link Protocol, one of the norms for Space Data Link from the [Consultative Committee for Space Data Systems](https://en.wikipedia.org/wiki/Consultative_Committee_for_Space_Data_Systems "Consultative Committee for Space Data Systems")
- [STP](https://en.wikipedia.org/wiki/Spanning_Tree_Protocol "Spanning Tree Protocol") Spanning Tree Protocol
- [Split multi-link trunking](https://en.wikipedia.org/wiki/Split_multi-link_trunking "Split multi-link trunking") Protocol
- [Token Ring](https://en.wikipedia.org/wiki/Token_Ring "Token Ring") a protocol developed by IBM; the name can also be used to describe the [token passing](https://en.wikipedia.org/wiki/Token_passing "Token passing") ring logical topology that it popularized.
- [Virtual Extended Network (VEN)](https://en.wikipedia.org/w/index.php?title=Virtual_Extended_Network_\(VEN\)&action=edit&redlink=1 "Virtual Extended Network (VEN) (page does not exist)") a protocol developed by iQuila.
- [VTP](https://en.wikipedia.org/wiki/VTP "VTP") VLAN Trunking Protocol
- [VLAN](https://en.wikipedia.org/wiki/VLAN "VLAN") Virtual Local Area Network
#### Network Topology
- [Asynchronous Transfer Mode](https://en.wikipedia.org/wiki/Asynchronous_Transfer_Mode "Asynchronous Transfer Mode") (ATM)
- [IS-IS](https://en.wikipedia.org/wiki/IS-IS "IS-IS"), Intermediate System - Intermediate System (OSI)
- [SPB](https://en.wikipedia.org/wiki/Shortest_Path_Bridging "Shortest Path Bridging") Shortest Path Bridging
- [MTP](https://en.wikipedia.org/wiki/Message_Transfer_Part "Message Transfer Part") Message Transfer Part
- [NSP](https://en.wikipedia.org/wiki/Signalling_Connection_Control_Part "Signalling Connection Control Part") Network Service Part
- [TRILL](https://en.wikipedia.org/wiki/TRILL "TRILL") (TRansparent Interconnection of Lots of Links)
#### Layer 2.5
- [ARP](https://en.wikipedia.org/wiki/Address_Resolution_Protocol "Address Resolution Protocol") Address Resolution Protocol
- [MPLS](https://en.wikipedia.org/wiki/Multiprotocol_Label_Switching "Multiprotocol Label Switching") Multiprotocol Label Switching
- [PPPoE](https://en.wikipedia.org/wiki/Point-to-Point_Protocol_over_Ethernet "Point-to-Point Protocol over Ethernet") Point-to-Point Protocol over Ethernet
- [TIPC](https://en.wikipedia.org/wiki/Transparent_Inter-process_Communication "Transparent Inter-process Communication") Transparent Inter-process Communication
#### Layer 3 ([Network Layer](https://en.wikipedia.org/wiki/Network_layer "Network layer"))
- [CLNP](https://en.wikipedia.org/wiki/CLNP "CLNP") Connectionless Networking Protocol
- [IPX](https://en.wikipedia.org/wiki/IPX "IPX") Internetwork Packet Exchange
- [NAT](https://en.wikipedia.org/wiki/Network_address_translation "Network address translation") Network Address Translation
- [Routed-SMLT](https://en.wikipedia.org/wiki/R-SMLT "R-SMLT")
- [SCCP](https://en.wikipedia.org/wiki/Signalling_Connection_Control_Part "Signalling Connection Control Part") Signalling Connection Control Part
- AppleTalk DDP
- [HSRP](https://en.wikipedia.org/wiki/Hot_Standby_Router_Protocol "Hot Standby Router Protocol") Hot Standby Router protocol
- [VRRP](https://en.wikipedia.org/wiki/Virtual_Router_Redundancy_Protocol "Virtual Router Redundancy Protocol") Virtual Router Redundancy Protocol
- IP [Internet Protocol](https://en.wikipedia.org/wiki/Internet_Protocol "Internet Protocol")
- [ICMP](https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol "Internet Control Message Protocol") Internet Control Message Protocol
- [ARP](https://en.wikipedia.org/wiki/Address_Resolution_Protocol "Address Resolution Protocol") Address Resolution Protocol
- RIP [Routing Information Protocol](https://en.wikipedia.org/wiki/Routing_Information_Protocol "Routing Information Protocol") (v1 and v2)
- OSPF [Open Shortest Path First](https://en.wikipedia.org/wiki/Open_Shortest_Path_First "Open Shortest Path First") (v1 and v2)
- IPSEC [IPsec](https://en.wikipedia.org/wiki/IPsec "IPsec")
#### Layer 3+4 (Protocol Suites)
- [AppleTalk](https://en.wikipedia.org/wiki/AppleTalk "AppleTalk")
- [DECnet](https://en.wikipedia.org/wiki/DECnet "DECnet")
- [IPX/SPX](https://en.wikipedia.org/wiki/IPX/SPX "IPX/SPX")
- [Internet Protocol Suite](https://en.wikipedia.org/wiki/Internet_Protocol_Suite "Internet Protocol Suite")
- [Xerox Network Systems](https://en.wikipedia.org/wiki/Xerox_Network_Systems "Xerox Network Systems")
#### Layer 4 ([Transport Layer](https://en.wikipedia.org/wiki/Transport_layer "Transport layer"))
- [AEP](https://en.wikipedia.org/wiki/AppleTalk_Echo_Protocol "AppleTalk Echo Protocol") AppleTalk Echo Protocol
- [AH](https://en.wikipedia.org/wiki/Authentication_Header "Authentication Header") Authentication Header over IP or IPSec
- [DCCP](https://en.wikipedia.org/wiki/Datagram_Congestion_Control_Protocol "Datagram Congestion Control Protocol") Datagram Congestion Control Protocol
- [ESP](https://en.wikipedia.org/wiki/Encapsulating_Security_Payload "Encapsulating Security Payload") Encapsulating Security Payload over IP or IPSec
- [FCP](https://en.wikipedia.org/wiki/Fibre_Channel_Protocol "Fibre Channel Protocol") Fibre Channel Protocol
- [NetBIOS](https://en.wikipedia.org/wiki/NetBIOS "NetBIOS") NetBIOS, File Sharing and Name Resolution
- [IL](https://en.wikipedia.org/wiki/IL_Protocol "IL Protocol") Originally developed as transport layer for [9P](https://en.wikipedia.org/wiki/9P_\(protocol\) "9P (protocol)")
- [iSCSI](https://en.wikipedia.org/wiki/ISCSI "ISCSI") Internet Small Computer System Interface
- [NBF](https://en.wikipedia.org/wiki/NetBIOS_Frames "NetBIOS Frames") NetBIOS Frames protocol
- [SCTP](https://en.wikipedia.org/wiki/Stream_Control_Transmission_Protocol "Stream Control Transmission Protocol") Stream Control Transmission Protocol
- [Sinec H1](https://en.wikipedia.org/wiki/Sinec_H1 "Sinec H1") for telecontrol
- [TUP](https://en.wikipedia.org/wiki/Telephone_User_Part "Telephone User Part"), Telephone User Part
- [SPX](https://en.wikipedia.org/wiki/IPX/SPX "IPX/SPX") Sequenced Packet Exchange
- [NBP](https://en.wikipedia.org/wiki/AppleTalk#Name_Binding_Protocol "AppleTalk") Name Binding Protocol {for AppleTalk}
- TCP [Transmission Control Protocol](https://en.wikipedia.org/wiki/Transmission_Control_Protocol "Transmission Control Protocol")
- UDP [User Datagram Protocol](https://en.wikipedia.org/wiki/User_Datagram_Protocol "User Datagram Protocol")
- [QUIC](https://en.wikipedia.org/wiki/QUIC "QUIC")
#### Layer 5 ([Session Layer](https://en.wikipedia.org/wiki/Session_layer "Session layer"))
This layer, presentation Layer and application layer are combined in [TCP/IP model](https://en.wikipedia.org/wiki/TCP/IP_model "TCP/IP model").
- [9P](https://en.wikipedia.org/wiki/9P_\(protocol\) "9P (protocol)") Distributed file system protocol developed originally as part of [Plan 9](https://en.wikipedia.org/wiki/Plan_9_from_Bell_Labs "Plan 9 from Bell Labs")
- ADSP AppleTalk Data Stream Protocol
- ASP AppleTalk Session Protocol
- [H.245](https://en.wikipedia.org/wiki/H.245 "H.245") Call Control Protocol for Multimedia Communications
- [iSNS](https://en.wikipedia.org/wiki/ISNS "ISNS") Internet Storage Name Service
- [NetBIOS](https://en.wikipedia.org/wiki/NetBIOS "NetBIOS"), File Sharing and Name Resolution protocol - the basis of file sharing with Windows.
- [NetBEUI](https://en.wikipedia.org/wiki/NetBEUI "NetBEUI"), NetBIOS Enhanced User Interface
- [NCP](https://en.wikipedia.org/wiki/NetWare_Core_Protocol "NetWare Core Protocol") NetWare Core Protocol
- [PAP](http://mirror.informatimago.com/next/developer.apple.com/documentation/mac/NetworkingOT/NetworkingWOT-75.html) Printer Access Protocol
- [RPC](https://en.wikipedia.org/wiki/Remote_procedure_call "Remote procedure call") Remote Procedure Call
- [RTCP](https://en.wikipedia.org/wiki/RTP_Control_Protocol "RTP Control Protocol") RTP Control Protocol
- [SDP](https://en.wikipedia.org/wiki/Sockets_Direct_Protocol "Sockets Direct Protocol") Sockets Direct Protocol
- [SMB](https://en.wikipedia.org/wiki/Server_message_block "Server message block") Server Message Block
- [SMPP](https://en.wikipedia.org/wiki/Short_Message_Peer-to-Peer "Short Message Peer-to-Peer") Short Message Peer-to-Peer
- [SOCKS](https://en.wikipedia.org/wiki/SOCKS "SOCKS") "SOCKetS"
- [ZIP](https://en.wikipedia.org/wiki/AppleTalk#Zone_Information_Protocol "AppleTalk") Zone Information Protocol {For AppleTalk}
- This layer provides session management capabilities between hosts. For example, if some host needs a password verification for access and if credentials are provided then for that session password verification does not happen again. This layer can assist in synchronization, dialog control and critical operation management (e.g., an online bank transaction).
#### Layer 6 ([Presentation Layer](https://en.wikipedia.org/wiki/Presentation_layer "Presentation layer"))
- [TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security "Transport Layer Security") Transport Layer Security
- [SSL](https://en.wikipedia.org/wiki/Secure_Socket_Tunneling_Protocol "Secure Socket Tunneling Protocol") Secure Socket Tunneling
- [AFP](https://en.wikipedia.org/wiki/Apple_Filing_Protocol "Apple Filing Protocol") Apple Filing Protocol
- Independent Computing Architecture ([ICA](https://en.wikipedia.org/wiki/Independent_Computing_Architecture "Independent Computing Architecture")), the Citrix system core protocol
- Lightweight Presentation Protocol (LPP)
- NetWare Core Protocol (NCP)
- Network Data Representation (NDR)
- Tox, The Tox protocol is sometimes regarded as part of both the presentation and application layer
- eXternal Data Representation (XDR)
- X.25 Packet Assembler/Disassembler Protocol (PAD)
#### Layer 7 ([Application Layer](https://en.wikipedia.org/wiki/Application_layer "Application layer"))
- [SOAP](https://en.wikipedia.org/wiki/Simple_Object_Access_Protocol "Simple Object Access Protocol"), Simple Object Access Protocol
- [Simple Service Discovery Protocol](https://en.wikipedia.org/wiki/Simple_Service_Discovery_Protocol "Simple Service Discovery Protocol"), A discovery protocol employed by UPnP
- [TCAP](https://en.wikipedia.org/wiki/Transaction_Capabilities_Application_Part "Transaction Capabilities Application Part"), Transaction Capabilities Application Part
- [Universal Plug and Play](https://en.wikipedia.org/wiki/Universal_Plug_and_Play "Universal Plug and Play")
- [DHCP](https://en.wikipedia.org/wiki/DHCP "DHCP") Dynamic Host Configuration Protocol
- [DNS](https://en.wikipedia.org/wiki/DNS "DNS") Domain Name System
- [BOOTP](https://en.wikipedia.org/wiki/BOOTP "BOOTP") Bootstrap Protocol
- [HTTP](https://en.wikipedia.org/wiki/HTTP "HTTP") Hyper Text Transfer Protocol
- [HTTPS](https://en.wikipedia.org/wiki/HTTPS "HTTPS")
- [NFS](https://en.wikipedia.org/wiki/Network_File_System "Network File System")
- [POP3](https://en.wikipedia.org/wiki/POP3 "POP3") Post Office Protocol
- [SMTP](https://en.wikipedia.org/wiki/SMTP "SMTP")
- [SNMP](https://en.wikipedia.org/wiki/SNMP "SNMP")
- [FTP](https://en.wikipedia.org/wiki/FTP "FTP")
- [NTP](https://en.wikipedia.org/wiki/Network_Time_Protocol "Network Time Protocol")
- [IRC](https://en.wikipedia.org/wiki/IRC "IRC")
- [Telnet](https://en.wikipedia.org/wiki/Telnet "Telnet") Tele Communication Protocol
- [SSH](https://en.wikipedia.org/wiki/SSH "SSH")
- [IMAP](https://en.wikipedia.org/wiki/IMAP "IMAP")
- [Gemini](https://en.wikipedia.org/wiki/Gemini_\(protocol\) "Gemini (protocol)")



## Internet Security Protocol Suites
 > ↗ [Tunneling & VPN (Virtual Personal Network)](../../../../../../CyberSecurity/Network%20(&%20Communication)%20Security/Anonymous%20&%20Private%20Networks/👻%20Tunneling%20&%20VPN%20(Virtual%20Personal%20Network)/Tunneling%20&%20VPN%20(Virtual%20Personal%20Network).md)
 > ↗ [IPSec (Internet Protocol Security) & IPSec VPN](../../../../../../CyberSecurity/Network%20(&%20Communication)%20Security/Network%20Security%20Mechanisms/🏇%20Network%20Security%20Protocol%20Stacks/🫱🏻‍🫲🏿%20Network%20Layer%20Security%20Protocols/IPSec%20(Internet%20Protocol%20Security)%20&%20IPSec%20VPN/IPSec%20(Internet%20Protocol%20Security)%20&%20IPSec%20VPN.md)
 > ↗ [SSL_TLS Protocol](../../../../../../CyberSecurity/Network%20(&%20Communication)%20Security/Network%20Security%20Mechanisms/🏇%20Network%20Security%20Protocol%20Stacks/🚉%20Transportation%20Layer%20Security%20Protocols/SSL_TLS%20Protocol/SSL_TLS%20Protocol.md)

1.  [**SSL Protocol**](https://www.geeksforgeeks.org/secure-socket-layer-ssl/) **:** 
    - SSL Protocol stands for Secure Sockets Layer protocol, which is an encryption-based Internet security protocol that protects confidentiality and integrity of data.
    - SSL is used to ensure the privacy and authenticity of data over the internet.
    - SSL is located between the application and transport layers.
    - At first, SSL contained security flaws and was quickly replaced by the first version of TLS that’s why SSL is the predecessor of the modern TLS encryption.
    - TLS/SSL website has “HTTPS” in its URL rather than “HTTP”.
    - SSL is divided into three sub-protocols: the Handshake Protocol, the Record Protocol, and the Alert Protocol.

2.  [**TLS Protocol**](https://write.geeksforgeeks.org/post/3143483) **:**
    - Same as SSL, TLS which stands for Transport Layer Security is widely used for the privacy and security of data over the internet.
    - TLS uses a pseudo-random algorithm to generate the master secret which is a key used for the encryption between the protocol client and protocol server.
    - TLS is basically used for encrypting communication between online servers like a web browser loading a web page in the online server.
    - TLS also has three sub-protocols the same as SSL protocol – Handshake Protocol, Record Protocol, and Alert Protocol.

3.  **SHTTP :** 
    - SHTTP stands for Secure HyperText Transfer Protocol, which is a collection of security measures like Establishing strong passwords, setting up a firewall, thinking of antivirus protection, and so on designed to secure internet communication.
    - SHTTP includes data entry forms that are used to input data, which has previously been collected into a database. As well as internet-based transactions.
    - SHTTP’s services are quite comparable to those of the SSL protocol.
    - Secure HyperText Transfer Protocol works at the application layer (that defines the shared communications protocols and interface methods used by hosts in a network) and is thus closely linked with HTTP.
    - SHTTP can authenticate and encrypt HTTP traffic between the client and the server.
    - SHTTP operates on a message-by-message basis. It can encrypt and sign individual messages.

4.  [**Set Protocol**](https://www.geeksforgeeks.org/secure-electronic-transaction-set-protocol/) **:**
    - Secure Electronic Transaction (SET) is a method that assures the security and integrity of electronic transactions made using credit cards.
    - SET is not a payment system; rather, it is a secure transaction protocol that is used via the internet.
    - The SET protocol provides the following services:
        - It establishes a safe channel of communication between all parties engaged in an e-commerce transaction.
        - It provides confidentiality since the information is only available to the parties engaged in a transaction when and when it is needed.
    - The SET protocol includes the following participants:
        - **Cardholder**
        - **Merchant**
        - **Issuer**
        - **Acquire**
        - **Payment Gateway**
        - **Certification Authority**

5.  [**PEM Protocol**](https://www.geeksforgeeks.org/privacy-enhanced-mail-pem-and-its-working/) **:**
    - PEM Protocol stands for privacy-enhanced mail and is used for email security over the internet.
    - RFC 1421, RFC 1422, RFC 1423, and RFC 1424 are the four particular papers that explain the Privacy Enhanced Mail protocol.
    - It is capable of performing cryptographic operations such as encryption, nonrepudiation, and message integrity.

6.  **PGP Protocol :**
    - PGP Protocol stands for Pretty Good Privacy, and it is simple to use and free, including its source code documentation.
    - It also meets the fundamental criteria of cryptography.
    - When compared to the PEM protocol, the PGP protocol has grown in popularity and use.
    - The PGP protocol includes cryptographic features such as encryption, non-repudiation, and message integrity.



## Ref
[Internet Backbone]: https://en.wikipedia.org/wiki/Internet_backbone
[Types of Internet Security Protocols]: https://www.geeksforgeeks.org/types-of-internet-security-protocols/



