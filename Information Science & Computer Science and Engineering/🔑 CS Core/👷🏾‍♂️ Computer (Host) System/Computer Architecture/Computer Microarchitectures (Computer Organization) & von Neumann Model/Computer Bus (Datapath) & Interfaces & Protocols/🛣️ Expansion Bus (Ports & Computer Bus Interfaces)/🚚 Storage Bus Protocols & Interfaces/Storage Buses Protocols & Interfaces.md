# Storage Buses Protocols & Interfaces

[TOC]



## Res
### Related Topics
↗ [Computer Memory & Storage](../../../Computer%20Memory%20&%20Storage/Computer%20Memory%20&%20Storage.md)
- ↗ [Secondary (Auxiliary) Storage Technologies & DAS (Directly Attached Storage)](../../../Computer%20Memory%20&%20Storage/Secondary%20(Auxiliary)%20Storage%20Technologies%20&%20DAS%20(Directly%20Attached%20Storage)/Secondary%20(Auxiliary)%20Storage%20Technologies%20&%20DAS%20(Directly%20Attached%20Storage).md)

↗ [Memory Bus](../../Memory%20Bus/Memory%20Bus.md)

↗ [PCIe (PCI-Express)](../Expansion%20Slot%20&%20Internal%20Bus/PCI%20(Peripheral%20Component%20Interconnect)/PCIe%20(PCI-Express)/PCIe%20(PCI-Express).md)



## Intro
> 🔗 http://t.csdnimg.cn/IEn6O

硬盘想要正常工作，离不开三个条件：数据协议做沟通、传输总线做媒介、物理接口来接入。

![](../../../../../../../../Assets/Pics/Pasted%20image%2020240422152104.png)

---
 Disk interface
	+ IDE (Iintegrated Drive Electronics)
		+ variant of IDE --- **ATA** ()
		+ 2 IDE ports --- primary prot & secondary port
		+ each port support 2 disk
	+ SATA
	+ SCSI
	+ SAS (series attached scis)

SCSI (pronounced “scuzzy”) is one of the most important and enduring I/O interfaces. It has been around since 1981, when it set standards for connecting and transferring data between a computer and an I/O device. Although it is used most frequently for hard disk drives and older tape drives, it can be used with other I/O devices, such as scanners. SCSI is technically available in a variety of different interfaces, including parallel and serial attached. Serial-attached SCSI (SAS) is an evolution of parallel SCSI, in which the disk controllers are linked directly to the disk drives, which enables up to 128 different devices simultaneously. SCSI is fast, has a wide range of applications, has great scalability, is better for storing and moving large amounts of data, and is reliable. It is, however, more expensive than other interfaces, and because there are so many different types of SCSI interfaces, it can get confusing.


The ATA interface is based on IBM’s PC ISA bus. ATA is often used to connect hard disk drives, CD drives, and other similar peripherals and is the least expensive of the hard disk interfaces. The main disadvantages of the ATA interface are that only one device on the cable can read/write at a time and that a limited cable length is allowed for each device (typically 18 inches). However, the low price and ease of setup made this interface very popular. Parallel ATA (PATA) is actually the same as ATA; the term PATA was introduced to differentiate parallel ATA from serial ATA (SATA). ATA allowed for data to be sent 16 bits at a time through a single 16-bit connection that was used for data traveling in both directions.

Today, the majority of computers are switching from ATA and SCSI to SATA disk drives. Serial ATA is a bit-serial interface and the most common interface for all but enterprise hard disk drives. Bit-serial interfaces typically use one data/control cable to connect a device to a computer, meaning data are sent one bit at a time down a single connection in each direction; however, there is a separate connection for data going into and out of the device. Although it might seem faster to send 16 bits in parallel, SATA is faster than the older ATA, basically because of the transfer speeds each can reach: ATA transfers data up to 133 megabytes per second, whereas SATA interfaces can reach up to 600 megabytes per second, depending on the actual interface being used. Serial and parallel modes are discussed in the next section.



## Ref
[SSD中，SATA、m2、PCIE和NVME各有什么意义呢？ - 知乎]: https://www.zhihu.com/question/48972075

[👍 #SATA# 常用硬盘一览 之《协议、总线、接口》| CSDN]: http://t.csdnimg.cn/IEn6O

现实生活中，硬盘的种类可谓是多种多样，有时候搞得头晕。今天，我们总结一下。并不会涉及很深的知识点，只是比较初浅的认识。

[👍 ATA/SATA/SCSI/SAS/FC总线简介 | cnblog]: https://www.cnblogs.com/liuzhengliang/p/5548451.html

ATA/SATA/SCSI/SAS/FC 都是应用于存储领域的总线，
- ATA 发展至今经过多次修改和升级，每新一代的接口都建立在前一代标准之上，并保持着向后兼容性。到目前为止，一共推出7 个版本： ATA-1 、 ATA-2 、 ATA-3 、 ATA-4 、 ATA-5 、 ATA-6 、 ATA-7 。
- SATA 有两个标准，分别为 SATA 和 SATA II 。 SATA 的有效带宽为 150MB/s ，数据速率为 1.5Gbps( 传输的数据经过了8B/10B 变换， 150MB/s*10=1.5Gbps) ， SATA II 的有效带宽为 300MB/s ，数据速率为 3Gbps 。
- 内置型SCSI 总线接口有三种：分别为50PIN 、68PIN 和80PIN。 外置型SCSI 总线接口有七种：分别为Apple SCSI 、Centronics 、SCSI-2 、Sun Microsystem 、SCSI-3 、Wide SCSI-2 、SCA。
- etc..
