# Direct Memory Access (DMA)

[TOC]



## Res
### Related Topics
↗ [RDMA (Remote DMA)](../../../../../🏎️%20Computer%20Networking%20and%20Communication/🚀%20High%20Performance%20Network%20(HPN)%20&%20IDC%20Technologies/RDMA%20(Remote%20DMA)/RDMA%20(Remote%20DMA).md)



## Intro
![](../../../../../../../../Assets/Pics/Screenshot%202023-06-24%20at%205.03.11%20PM.png)

The DMA function can be either performed by a separate module on the system bus, or it can be incorporated into an I/O module.

It works by cpu sending DMA modules following commands:
- Whether a read or write is requested
- The address of the I/O device involved
- The starting location in memory to read data from or write data to
- The number of words to be read or written

The processor is hence involved only at the beginning and end of the transfer.

The DMA module needs to take control of the bus to transfer data to and from memory. Because of this competition for bus usage, there may be times when the processor needs the bus and must wait for the DMA module. Note this is not an interrupt; the processor does not save a context and do something else. Rather, the processor pauses for one **bus cycle** (the time it takes to transfer one word across the bus). The overall effect is to cause the processor to execute more slowly during a DMA transfer when processor access to the bus is required.

![|450](../../../../../../../../Assets/Pics/Screenshot%202023-06-08%20at%201.39.29%20PM.png)

**Pros**

**Cons**

---
The DMA technique works as follows. When the processor wishes to read or write a block of data, it issues a command to the DMA module by sending to the DMA module the following information:
- Whether a read or write is requested, using the read or write control line between the processor and the DMA module
- The address of the I/O device involved, communicated on the data lines
- The starting location in memory to read from or write to, communicated on the data lines and stored by the DMA module in its address register
- The number of words to be read or written, again communicated via the data lines and stored in the data count register

The processor then continues with other work. It has delegated this I/O operation to the DMA module. The DMA module transfers the entire block of data, one word at a time, directly to or from memory, without going through the processor. When the transfer is complete, the DMA module sends an interrupt signal to the processor. Thus, the processor is involved only at the beginning and end of the transfer (see Figure C.4c).

![|450](../../../../../../../../Assets/Pics/Screenshot%202023-06-08%20at%201.40.12%20PM.png)

The DMA mechanism can be configured in a variety of ways. Some possibilities are shown in Figure 11.3.
- In the first example, all modules share the same system bus. The DMA module, acting as a surrogate processor, uses programmed I/O to exchange data between memory and an I/O module through the DMA module. This configuration, while it may be inexpensive, is clearly inefficient: As with processor-controlled programmed I/O, each transfer of a word consumes two bus cycles (transfer request followed by transfer).
- The number of required bus cycles can be cut substantially by integrating the DMA and I/O functions. As Figure 11.3b indicates, this means there is a path between the DMA module and one or more I/O modules that does not include the system bus. 
- The DMA logic may actually be a part of an I/O module, or it may be a separate module that controls one or more I/O modules. This concept can be taken one step further by connecting I/O modules to the DMA module using an I/O bus (see Figure 11.3c). This reduces the number of I/O interfaces in the DMA module to one and provides for an easily expandable configuration. In all of these cases (see Figures 11.3b and 11.3c), the system bus that the DMA module shares with the processor and main memory is used by the DMA module only to exchange data with memory and to exchange control signals with the processor. The exchange of data between the DMA and I/O modules takes place off the system bus.



## Ref

