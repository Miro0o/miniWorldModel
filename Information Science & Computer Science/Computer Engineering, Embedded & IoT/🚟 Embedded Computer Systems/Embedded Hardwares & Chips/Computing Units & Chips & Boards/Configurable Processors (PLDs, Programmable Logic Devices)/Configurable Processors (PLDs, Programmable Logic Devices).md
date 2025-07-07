# Configurable Processors (PLDs, Programmable Logic Devices)

[TOC]



## Res
### Related Topics
↗ [Computer Processors & Logic Chips](../../../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/🚦%20Computer%20Processors%20&%20Logic%20Chips/Computer%20Processors%20&%20Logic%20Chips.md)
↗ [CPU (Central Processing Unit)](../../../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/🚦%20Computer%20Processors%20&%20Logic%20Chips/📌%20Microprocessors%20Unit%20(MPU)/CPU%20(Central%20Processing%20Unit)/CPU%20(Central%20Processing%20Unit).md)



## Intro
Some applications are so specialized that no off-the-shelf microcontroller can do the job. When designers find themselves in this situation, they can choose between two alternatives: They can elect to create a chip from scratch, or they can employ a **programmable logic device (PLD)**. When speed and die size are not primary concerns, a PLD may be a good choice. 

PLDs come in three general varieties: programmable array logic, programmable logic arrays, and field-programmable gate arrays. Any of these three types of circuits can be used as **glue logic**, or customized circuits that interconnect prefabricated IP circuit elements. 

Programmable logic devices are usually presented along with the combinational logic components.

---
https://en.wikipedia.org/wiki/Programmable_logic_device

A programmable logic device (PLD) is an electronic component used to build reconfigurable digital circuits. Unlike digital logic constructed using discrete logic gates with fixed functions, the function of a PLD is undefined at the time of manufacture. Before the PLD can be used in a circuit it must be programmed to implement the desired function. Compared to fixed logic devices, programmable logic devices simplify the design of complex logic and may offer superior performance. Unlike for microprocessors, programming a PLD changes the connections made between the gates in the device.

PLDs can broadly be categorised into, in increasing order of complexity, Simple Programmable Logic Devices (SPLDs), comprising programmable array logic, programmable logic array and generic array logic; Complex Programmable Logic Devices (CPLDs); and Field-Programmable Gate Arrays (FPGAs).

![](../../../../../../Assets/Pics/Screenshot%202024-05-23%20at%202.05.33%20PM.png)


### CPLDs
PLAs are more flexible than PALs, but they also tend to be slower and more costly than PALs. Thus, the occasional redundancy among PAL min-terms is only a minor inconvenience when speed and cost are important considerations. To maximize functionality and flexibility, PLA and PAL chips usually include several arrays on one silicon die. Both types are referred to as **complex programmable logic devices (CPLDs)**.



## Ref

