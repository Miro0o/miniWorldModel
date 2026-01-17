# DPU (Data Processing Unit)

[TOC]



## Res
### Related Topics
↗ [NIC (Network Adapter)](../../../../../../../🏎️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x06%20Data%20Link%20Layer/📌%20Link%20Layer%20(Switched%20Network)%20Basics/Link%20Layer%20Network%20Devices/NIC%20(Network%20Adapter).md)
↗ [WiFi Chips](../../../../../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Computing%20Units%20&%20Chips%20&%20Boards/📌%20ASIC%20(Application-Specific%20Integrated%20Circuit)/📌%20Application-wise%20Chips/WiFi%20Chips.md)
↗ [NPU (Network Processing Unit)](../../../../../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Hardwares%20&%20Chips/Computing%20Units%20&%20Chips%20&%20Boards/📌%20ASIC%20(Application-Specific%20Integrated%20Circuit)/Semi-Customized%20ASIC/NPU%20(Network%20Processing%20Unit)/NPU%20(Network%20Processing%20Unit).md)


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Data_processing_unit

A data processing unit (DPU) is a programmable computer processor that tightly integrates a general-purpose CPU with network interface hardware.[1] Sometimes they are called "IPUs" (for "infrastructure processing unit") or "SmartNICs".[2] They can be used in place of traditional NICs to relieve the main CPU of complex networking responsibilities and other "infrastructural" duties; although their features vary, they may be used to perform encryption/decryption, serve as a firewall, handle TCP/IP, process HTTP requests, or even function as a hypervisor or storage controller.[1][3] These devices can be attractive to cloud computing providers whose servers might otherwise spend a significant amount of CPU time on these tasks, cutting into the cycles they can provide to guests.[1]

Large-scale AI data centers are an emerging use case for DPUs. In these environments, massive amounts of data must be moved rapidly among CPUs, GPUs, and storage systems to handle complex AI workloads. By offloading tasks such as packet processing, encryption, and traffic management, DPUs help reduce latency and improve energy efficiency, enabling these data centers to maintain the high throughput and scalability needed for advanced machine learning operations.[4]

Alongside their role in accelerating network and storage functions, DPUs are increasingly viewed as the “third pillar of computing,” complementing both CPUs and GPUs. Unlike traditional processors, a DPU typically resides on a network interface card, allowing data to be processed at the network’s line rate before it reaches the CPU. This approach offloads critical but lower-level system duties—such as security, load balancing, and data routing—from the central processor, thus freeing CPUs and GPUs to focus on application logic and AI-specific computations.[5]





## Ref
[从DPU看大芯片的发展趋势]:https://www.sdnlab.com/25922.html
[DPU创业，至少死掉九成？]:https://www.sdnlab.com/25917.html
[从DPU看大芯片的发展趋势]:https://www.sdnlab.com/25922.html
