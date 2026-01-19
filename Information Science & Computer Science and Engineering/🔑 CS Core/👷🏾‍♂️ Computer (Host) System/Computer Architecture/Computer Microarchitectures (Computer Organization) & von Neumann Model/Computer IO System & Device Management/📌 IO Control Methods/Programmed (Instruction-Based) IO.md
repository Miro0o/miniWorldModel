# Programmed (Instruction-Based) I/O 

[TOC]



## Res
### Related Topics



## Intro

> With **instruction-based I/O**, the CPU has specialized instructions that perform the input and output. Although this does not use memory space, it requires **specific I/O instructions**, which implies that it can be used only by CPUs that can execute these specific instructions.
> 
> When the processor is executing a program and encounters an instruction relating to I/O, it executes that instruction by issuing a command to the appropriate I/O module. 

In the case of programmed I/O, the **I/O module** performs the requested action, then sets the appropriate bits in the **I/O status register** but takes no further action to alert the processor. ==In particular, it does not interrupt the processor.== Thus, after the I/O instruction is invoked, the processor must take some active role in determining when the I/O instruction is completed. For this purpose, the processor periodically checks (**polls, 轮询**) the status of the I/O module until it finds that the operation is complete.


**Pros**
The benefit of using this approach is that we have programmatic control over the behavior of each device. By modifying a few lines of code, we can adjust the number and types of devices in the system, as well as their polling priorities and intervals. 

**Cons**
> With programmed I/O, the processor has to wait a long time for the I/O module of concern to be ready for either reception or transmission of more data. The processor, while waiting, must repeatedly **interrogate** the status of the I/O module. As a result, the performance level of the entire system is severely degraded.

Constant register polling, however, is a problem. The CPU is in a continual “busy wait” loop until it starts servicing an I/O request. It doesn’t do any useful work until there is I/O to process. 

Another problem is in deciding how frequently to poll; some devices might need to be polled more frequently than others.

Because of these limitations, programmed I/O is best suited for **special-purpose systems** such as automated teller machines and embedded systems that control or monitor environmental events.



## Ref

