# GPU Virtualization

[TOC]



## Res
### Related Topics
↗ [GPU (Graphics Processing Unit)](../../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/🚦%20Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part)/📌%20Microprocessor%20&%20Microprocessors%20Unit%20(MPU)/Accelerators%20(Coprocessors)/GPU%20(Graphics%20Processing%20Unit)/GPU%20(Graphics%20Processing%20Unit).md)
↗ [Compute Unified Device Architecture & CUDA Programming](../../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Interfaces%20&%20Hardware%20Drivers/🛞%20Computer%20(IO%20Devices)%20Drivers%20&%20Programming/Graphics%20Devices%20Drivers/Compute%20Unified%20Device%20Architecture%20&%20CUDA%20Programming/Compute%20Unified%20Device%20Architecture%20&%20CUDA%20Programming.md)


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/GPU_virtualization

==**GPU virtualization** refers to technologies that allow the use of a [GPU](https://en.wikipedia.org/wiki/Graphics_processing_unit "Graphics processing unit") to accelerate graphics or [GPGPU](https://en.wikipedia.org/wiki/GPGPU "GPGPU") applications running on a virtual machine.== GPU virtualization is used in various applications such as [desktop virtualization](https://en.wikipedia.org/wiki/Desktop_virtualization "Desktop virtualization"), cloud gaming and [computational science](https://en.wikipedia.org/wiki/Computational_science "Computational science") (e.g. [hydrodynamics](https://en.wikipedia.org/wiki/Fluid_dynamics "Fluid dynamics") simulations).

GPU virtualization implementations generally involve one or more of the following techniques: device emulation, API remoting, fixed pass-through and mediated pass-through. Each technique presents different trade-offs regarding virtual machine to GPU [consolidation ratio](https://en.wikipedia.org/wiki/Consolidation_ratio "Consolidation ratio"), [graphics](https://en.wikipedia.org/wiki/Computer_graphics "Computer graphics") [acceleration](https://en.wikipedia.org/wiki/Hardware_acceleration "Hardware acceleration"), rendering fidelity and feature support, portability to different hardware, isolation between virtual machines, and support for suspending/resuming and [live migration](https://en.wikipedia.org/wiki/Live_migration "Live migration").



## Ref

