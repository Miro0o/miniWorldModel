# SATA Express

[TOC]



## Res
🏠 
🚧 


### Related Topics



## Intro
> ↗ https://en.wikipedia.org/wiki/SATA_Express

**SATA Express** (sometimes unofficially shortened to **SATAe**) is a [computer bus](https://en.wikipedia.org/wiki/Computer_bus "Computer bus") [interface](https://en.wikipedia.org/wiki/Interface_\(computing\) "Interface (computing)") that supports both [Serial ATA](https://en.wikipedia.org/wiki/Serial_ATA "Serial ATA") (SATA) and [PCI Express](https://en.wikipedia.org/wiki/PCI_Express "PCI Express") (PCIe) storage devices, initially standardized in the [SATA 3.2](https://en.wikipedia.org/wiki/SATA_3.2 "SATA 3.2") specification. The SATA Express connector used on the host side is [backward compatible](https://en.wikipedia.org/wiki/Backward_compatible "Backward compatible") with the standard [SATA data connector](https://en.wikipedia.org/wiki/Serial_ATA#DATACONN "Serial ATA"), while it also provides two [PCI Express lanes](https://en.wikipedia.org/wiki/PCI_Express_lane "PCI Express lane") as a pure PCI Express connection to the storage device.

Instead of continuing with the SATA interface's usual approach of doubling its native speed with each major version, SATA 3.2 specification included the PCI Express [bus](https://en.wikipedia.org/wiki/Computer_bus "Computer bus") for achieving data transfer speeds greater than the [SATA 3.0](https://en.wikipedia.org/wiki/SATA_3.0 "SATA 3.0") speed limit of 6 [Gbit/s](https://en.wikipedia.org/wiki/Gbit/s "Gbit/s"). Designers of the SATA interface concluded that doubling the native SATA speed would take too much time to catch up with the advancements in [solid-state drive](https://en.wikipedia.org/wiki/Solid-state_drive "Solid-state drive") (SSD) technology, would require too many changes to the SATA standard, and would result in a much greater power consumption compared with the existing PCI Express bus. As a widely adopted computer bus, PCI Express provides sufficient [bandwidth](https://en.wikipedia.org/wiki/Bandwidth_\(computing\) "Bandwidth (computing)") while allowing easy scaling up by using faster or additional [lanes](https://en.wikipedia.org/wiki/PCI_Express_lane "PCI Express lane").

In addition to supporting legacy [Advanced Host Controller Interface](https://en.wikipedia.org/wiki/Advanced_Host_Controller_Interface "Advanced Host Controller Interface") (AHCI) at the logical interface level, SATA Express also supports [NVM Express](https://en.wikipedia.org/wiki/NVM_Express "NVM Express") (NVMe) as the logical device interface for attached PCI Express storage devices. While the support for AHCI ensures software-level backward compatibility with legacy SATA devices and legacy [operating systems](https://en.wikipedia.org/wiki/Operating_system "Operating system"), NVM Express is designed to fully utilize high-speed PCI Express storage devices by leveraging their capability of executing many [I/O](https://en.wikipedia.org/wiki/I/O "I/O") operations [in parallel](https://en.wikipedia.org/wiki/Parallelism_\(computing\) "Parallelism (computing)").



## Ref
