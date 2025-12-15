# gPXE & iPEX

[TOC]



## Res
🏠 https://ipxe.org
🚧 https://github.com/ipxe/ipxe/


### Related Topics



## Intro
### gPXE
> 🔗 https://en.wikipedia.org/wiki/GPXE

gPXE is an open-source Preboot eXecution Environment (PXE) client firmware implementation and bootloader derived from Etherboot. It can be used to enable computers without built-in PXE support to boot from the network, or to extend an existing client PXE implementation with support for additional protocols. While standard PXE clients use TFTP to transfer data, gPXE client firmware adds the ability to retrieve data through other protocols like HTTP, iSCSI and ATA over Ethernet (AoE), and can work with Wi-Fi rather than requiring a wired connection.
gPXE development ceased in summer 2010, and several projects are migrating or considering migrating to iPXE as a result


### iPXE
> 🔗 https://en.wikipedia.org/wiki/IPXE

**iPXE** is an [open-source](https://en.wikipedia.org/wiki/Open-source_software "Open-source software") implementation of the [Preboot eXecution Environment](https://en.wikipedia.org/wiki/Preboot_eXecution_Environment "Preboot eXecution Environment")(PXE) client software and bootloader, created in 2010 as a [fork](https://en.wikipedia.org/wiki/Fork_(software_development) "Fork (software development)") of [gPXE](https://en.wikipedia.org/wiki/GPXE "GPXE") (gPXE was named Etherboot until 2008). It can be used to enable computers without built-in PXE capability to boot from the network, or to provide additional features beyond what built-in PXE provides.

While standard PXE clients use only [TFTP](https://en.wikipedia.org/wiki/Trivial_File_Transfer_Protocol "Trivial File Transfer Protocol") to load parameters and programs from the server, iPXE client software can use additional protocols, including [HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol "Hypertext Transfer Protocol"), [iSCSI](https://en.wikipedia.org/wiki/ISCSI "ISCSI"), [ATA over Ethernet](https://en.wikipedia.org/wiki/ATA_over_Ethernet "ATA over Ethernet") (AoE), and [Fibre Channel over Ethernet](https://en.wikipedia.org/wiki/Fibre_Channel_over_Ethernet "Fibre Channel over Ethernet")(FCoE). Also, on certain hardware, iPXE client software can use a [Wi-Fi](https://en.wikipedia.org/wiki/Wi-Fi "Wi-Fi") link, as opposed to the wired connection required by the PXE standard. 

==The iPXE client is a superset of, and can replace or supplement, prior PXE implementations.==

iPXE is the official replacement for gPXE. It has every feature of gPXE, and users can seamlessly upgrade from gPXE to iPXE.


> 🔗 https://ipxe.org

iPXE is the leading open source network boot firmware. It provides a full PXE implementation enhanced with additional features such as:
- boot from a web server via HTTP
- boot from an iSCSI SAN
- boot from a Fibre Channel SAN via FCoE
- boot from an AoE SAN
- boot from a wireless network
- boot from a wide-area network
- boot from an Infiniband network
- control the boot process with a [script](https://ipxe.org/scripting "scripting")

You can use iPXE to [replace the existing PXE ROM on your network card](https://ipxe.org/howto/romburning "howto:romburning"), or you can [chainload into iPXE](https://ipxe.org/howto/chainloading "howto:chainloading") to obtain the features of iPXE without the hassle of reflashing.

iPXE is free, open-source software [licensed](https://ipxe.org/licensing "licensing") under the GNU GPL (with some portions under GPL-compatible licences), and is included in products from several network card manufacturers and OEMs.



## Ref
