# NVMe (NVM Express)

[TOC]



## Res
🏠 
🚧 


### Related Topics



## Intro
> 🔗 https://en.wikipedia.org/wiki/NVM_Express

**NVM Express** (**NVMe**) or **Non-Volatile Memory Host Controller Interface Specification** (**NVMHCIS**) is an [open](https://en.wikipedia.org/wiki/Open_standard "Open standard"), [logical-device](https://en.wikipedia.org/wiki/Logical_device "Logical device") [interface](https://en.wikipedia.org/wiki/Interface_\(computing\) "Interface (computing)") [specification](https://en.wikipedia.org/wiki/Functional_specification "Functional specification") for accessing a computer's [non-volatile storage](https://en.wikipedia.org/wiki/Non-volatile_storage "Non-volatile storage") media usually attached via the [PCI Express](https://en.wikipedia.org/wiki/PCI_Express "PCI Express") bus. The initial _NVM_ stands for _[non-volatile memory](https://en.wikipedia.org/wiki/Non-volatile_memory "Non-volatile memory")_, which is often NAND [flash memory](https://en.wikipedia.org/wiki/Flash_memory "Flash memory") that comes in several physical form factors, including [solid-state drives](https://en.wikipedia.org/wiki/Solid-state_drive "Solid-state drive") (SSDs), PCIe add-in cards, and [M.2](https://en.wikipedia.org/wiki/M.2 "M.2") cards, the successor to [mSATA](https://en.wikipedia.org/wiki/MSATA "MSATA") cards. NVM Express, as a logical-device interface, has been designed to capitalize on the low [latency](https://en.wikipedia.org/wiki/Hard_disk_drive_performance_characteristics#Access_time "Hard disk drive performance characteristics") and internal parallelism of solid-state storage devices.

Architecturally, the logic for NVMe is physically stored within and executed by the NVMe controller chip that is physically co-located with the storage media, usually an SSD. Version changes for NVMe, e.g., 1.3 to 1.4, are incorporated within the storage media, and do not affect PCIe-compatible components such as motherboards and CPUs.

By its design, NVM Express allows host hardware and software to fully exploit the levels of [parallelism](https://en.wikipedia.org/wiki/Parallel_computing "Parallel computing") possible in modern SSDs. As a result, NVM Express reduces [I/O](https://en.wikipedia.org/wiki/Input/output "Input/output") overhead and brings various performance improvements relative to previous logical-device interfaces, including multiple long command queues, and reduced latency. The previous interface protocols like [AHCI](https://en.wikipedia.org/wiki/Advanced_Host_Controller_Interface "Advanced Host Controller Interface") were developed for use with far slower [hard disk drives](https://en.wikipedia.org/wiki/Hard_disk_drive "Hard disk drive") (HDD) where a very lengthy delay (relative to CPU operations) exists between a request and data transfer, where data speeds are much slower than RAM speeds, and where disk rotation and [seek time](https://en.wikipedia.org/wiki/Seek_time "Seek time") give rise to further optimization requirements.

NVM Express devices are chiefly available in the miniature [M.2](https://en.wikipedia.org/wiki/M.2 "M.2") form factor, while standard-sized PCI Express [expansion cards](https://en.wikipedia.org/wiki/Expansion_card "Expansion card") and 2.5-inch form-factor devices that provide a four-lane PCI Express interface through the [U.2](https://en.wikipedia.org/wiki/U.2 "U.2") connector (formerly known as SFF-8639) are also available.



## Ref
