# CPU Cache

[TOC]



## Res
### Related Topics



## Intro
> 🔗 https://en.wikipedia.org/wiki/CPU_cache

A **CPU cache** is a [hardware cache](https://en.wikipedia.org/wiki/Hardware_cache "Hardware cache") used by the [central processing unit](https://en.wikipedia.org/wiki/Central_processing_unit "Central processing unit") (CPU) of a [computer](https://en.wikipedia.org/wiki/Computer "Computer") to reduce the average cost (time or energy) to access [data](https://en.wikipedia.org/wiki/Data_\(computer_science\) "Data (computer science)") from the [main memory](https://en.wikipedia.org/wiki/Main_memory "Main memory"). A cache is a smaller, faster memory, located closer to a [processor core](https://en.wikipedia.org/wiki/Processor_core "Processor core"), which stores copies of the data from frequently used main [memory locations](https://en.wikipedia.org/wiki/Memory_location "Memory location"), avoiding the need to always refer to main memory which may be tens to hundreds of times slower to access.

Cache memory is typically implemented with [static random-access memory](https://en.wikipedia.org/wiki/Static_random-access_memory "Static random-access memory") (SRAM), which requires multiple [transistors](https://en.wikipedia.org/wiki/Transistor "Transistor") to store a single [bit](https://en.wikipedia.org/wiki/Bit "Bit"). This makes it expensive in terms of the area it takes up, and in modern CPUs the cache is typically the largest part by chip area. The size of the cache needs to be balanced with the general desire for smaller chips which cost less. Some modern designs implement some or all of their cache using the physically smaller [eDRAM](https://en.wikipedia.org/wiki/EDRAM "EDRAM"), which is slower to use than SRAM but allows larger amounts of cache for any given amount of chip area.

Most CPUs have a hierarchy of multiple cache [levels](https://en.wikipedia.org/wiki/CPU_cache#MULTILEVEL) (L1, L2, often L3, and rarely even L4), with separate instruction-specific (I-cache) and data-specific (D-cache) caches at level 1.[[2]](https://en.wikipedia.org/wiki/CPU_cache#cite_note-2) The different levels are implemented in different areas of the chip; L1 is located as close to a CPU core as possible and thus offers the highest speed due to short signal paths, but requires careful design. L2 caches are physically separate from the CPU and operate slower, but place fewer demands on the chip designer and can be made much larger without impacting the CPU design. L3 caches are generally shared among multiple CPU cores.

Other types of caches exist (that are not counted towards the "cache size" of the most important caches mentioned above), such as the [translation lookaside buffer](https://en.wikipedia.org/wiki/Translation_lookaside_buffer "Translation lookaside buffer") (TLB) which is part of the [memory management unit](https://en.wikipedia.org/wiki/Memory_management_unit "Memory management unit") (MMU) which most CPUs have. [Input/output](https://en.wikipedia.org/wiki/Input/output "Input/output") sections also often contain [data buffers](https://en.wikipedia.org/wiki/Data_buffer "Data buffer") that serve a similar purpose.



## Ref

