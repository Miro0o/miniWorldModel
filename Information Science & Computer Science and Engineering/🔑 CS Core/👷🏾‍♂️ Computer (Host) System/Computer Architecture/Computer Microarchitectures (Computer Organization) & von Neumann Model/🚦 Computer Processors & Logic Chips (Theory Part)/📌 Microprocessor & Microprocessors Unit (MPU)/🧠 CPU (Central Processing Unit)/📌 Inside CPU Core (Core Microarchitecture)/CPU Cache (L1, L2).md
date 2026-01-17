# CPU Cache (L1, L2)

[TOC]



## Res
### Related Topics
↗ [Computer Memory & Storage](../../../../Computer%20Memory%20&%20Storage/Computer%20Memory%20&%20Storage.md)
↗ [LLC (Last Level Cache) - L3 (L4)](../Outside%20CPU%20Core%20(Interconnect%20Topology)/LLC%20(Last%20Level%20Cache)%20-%20L3%20(L4).md)


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/CPU_cache

A **CPU cache** is a [hardware cache](https://en.wikipedia.org/wiki/Hardware_cache "Hardware cache") used by the [central processing unit](https://en.wikipedia.org/wiki/Central_processing_unit "Central processing unit") (CPU) of a [computer](https://en.wikipedia.org/wiki/Computer "Computer") to reduce the average cost (time or energy) to access [data](https://en.wikipedia.org/wiki/Data_\(computer_science\) "Data (computer science)") from the [main memory](https://en.wikipedia.org/wiki/Main_memory "Main memory"). A cache is a smaller, faster memory, located closer to a [processor core](https://en.wikipedia.org/wiki/Processor_core "Processor core"), which stores copies of the data from frequently used main [memory locations](https://en.wikipedia.org/wiki/Memory_location "Memory location"), avoiding the need to always refer to main memory which may be tens to hundreds of times slower to access.

Cache memory is typically implemented with [static random-access memory](https://en.wikipedia.org/wiki/Static_random-access_memory "Static random-access memory") (SRAM), which requires multiple [transistors](https://en.wikipedia.org/wiki/Transistor "Transistor") to store a single [bit](https://en.wikipedia.org/wiki/Bit "Bit"). This makes it expensive in terms of the area it takes up, and in modern CPUs the cache is typically the largest part by chip area. The size of the cache needs to be balanced with the general desire for smaller chips which cost less. Some modern designs implement some or all of their cache using the physically smaller [eDRAM](https://en.wikipedia.org/wiki/EDRAM "EDRAM"), which is slower to use than SRAM but allows larger amounts of cache for any given amount of chip area.

Most CPUs have a hierarchy of multiple cache [levels](https://en.wikipedia.org/wiki/CPU_cache#MULTILEVEL) (L1, L2, often L3, and rarely even L4), with separate instruction-specific (I-cache) and data-specific (D-cache) caches at level 1.[[2]](https://en.wikipedia.org/wiki/CPU_cache#cite_note-2) The different levels are implemented in different areas of the chip; L1 is located as close to a CPU core as possible and thus offers the highest speed due to short signal paths, but requires careful design. L2 caches are physically separate from the CPU and operate slower, but place fewer demands on the chip designer and can be made much larger without impacting the CPU design. L3 caches are generally shared among multiple CPU cores.

Other types of caches exist (that are not counted towards the "cache size" of the most important caches mentioned above), such as the [translation lookaside buffer](https://en.wikipedia.org/wiki/Translation_lookaside_buffer "Translation lookaside buffer") (TLB) which is part of the [memory management unit](https://en.wikipedia.org/wiki/Memory_management_unit "Memory management unit") (MMU) which most CPUs have. [Input/output](https://en.wikipedia.org/wiki/Input/output "Input/output") sections also often contain [data buffers](https://en.wikipedia.org/wiki/Data_buffer "Data buffer") that serve a similar purpose.


### CPU Cache L1, L2, L3, L4?
#cpu_cache #memory 

> 🤖 Gemini 3.0 Pro
> https://gemini.google.com/share/ebedeb833ded

To understand why we have so many different "storage" spots (L1, L2, LLC, RAM), look at the speed difference. This is why the LLC is so critical.

|**Component**|**Location**|**Size**|**Speed (Latency)**|**Analogy**|
|---|---|---|---|---|
|**Registers**|Inside Core|Tiny (Bytes)|Instant|The food in your mouth.|
|**L1 Cache**|Inside Core|Small (KB)|~1 nanosecond|The plate in front of you.|
|**L2 Cache**|Inside Core|Medium (MB)|~3 nanoseconds|The Fridge in your kitchen.|
|**LLC (L3)**|**Uncore (Shared)**|**Large (MB)**|**~10-20 nanoseconds**|**The Community Warehouse.**|
|**RAM**|Motherboard|Huge (GB)|~100 nanoseconds|The Supermarket (The drive takes forever).|

L1, L2, and L3 are indeed the **industry standard** for almost all modern desktop and laptop CPUs (Intel Core, AMD Ryzen). This three-level hierarchy hits the "sweet spot" between cost, speed, and size.

However, **L4 Cache does exist**, but it is rare. It usually appears only in specialized processors, weird experiments, or mobile chips where it goes by a different name.

Here is the breakdown of the standard vs. the exceptions.


**The Standard: The "Holy Trinity" (L1, L2, L3)**
Virtually every modern CPU follows this pattern because it balances the physics of electricity perfectly:
- **L1 (Level 1):** The "pocket." Inside the core. Split into Instruction (Code) and Data. Incredibly fast, incredibly small.
- **L2 (Level 2):** The "backpack." Dedicated to the core (usually). Holds more data, slightly slower.
- **L3 (Level 3 / LLC):** The "trunk of the car." Shared by all cores. Big, but takes time to access.

This specific 3-step ladder is usually enough to mask the slowness of the main RAM.


**Does L4 Cache exist? (The "Unicorn")**
**Yes.** But unlike L1-L3, which are built _inside_ the main silicon die, L4 is usually a separate chip or a special block of memory sitting nearby.

Here are the three ways L4 appears in the wild:
- A. The "eDRAM" Era (Intel Broadwell / Iris Pro)
	- Around 2013-2015, Intel released CPUs (like the Core i7-5775C) that had a massive chunk of extra memory called **eDRAM (embedded DRAM)** sitting on the CPU package.
		- **What it was:** 128MB of very fast memory.
		- **The Function:** It acted as an **L4 Cache**.
		- **The Goal:** It was mostly to help the integrated Graphics (iGPU), which are hungry for memory speed. But if the GPU wasn't using it, the CPU could use it as a massive L4 cache to boost gaming and app speed.
		- **Why it vanished:** It was expensive to manufacture. As DDR4/DDR5 RAM got faster, the benefit of this expensive L4 shrank.
- B. The "System Level Cache" (SLC) in Phones (Apple & Qualcomm)
	- If you have an iPhone or a modern MacBook (M1/M2/M3 chips), you actually **do** use a form of L4, but they don't call it that. They call it **SLC (System Level Cache)**.
		- **How it works:**
		    - The CPU cores have L1 and L2.
		    - The GPU has its own caches.
		    - All of them connect to a massive shared **SLC**.
		- **Is it L4?** Technically, for the CPU, it functions exactly like an L3 or L4 cache (depending on how you count the cluster-level caches). It is a "Last Level Cache" that sits before the RAM.
- C. High Bandwidth Memory (HBM) in Supercomputers
	- In massive server chips (like Intel Xeon Max series), they physically glue huge stacks of ultra-fast memory called **HBM** right next to the CPU.
		- Sometimes, this HBM is treated as main RAM.
		- **Other times,** the system is configured to treat this HBM as a gigantic **L4 Cache** (Gigabytes in size) for the main DDR5 RAM.


**Why isn't L4 standard on my PC?**
If caching is so good, why stop at L3? Why not L4, L5, L6?
It comes down to the **Law of Diminishing Returns**.
4. **The "Uncanny Valley" of Latency:**
    - L3 Cache takes ~15 nanoseconds to access.
    - RAM takes ~80 nanoseconds.
    - An L4 Cache would likely take ~30-40 nanoseconds.
    - **The Problem:** The L4 isn't _that_ much faster than RAM anymore. The cost of building it (silicon is expensive!) isn't worth the tiny speed boost.
5. **The Alternative: Make L3 Bigger (AMD 3D V-Cache)** Instead of adding a new _layer_ (L4), engineers figured out how to just make L3 massive.
    - **AMD X3D Chips:** They physically stack a second slice of L3 cache on top of the first one (using 3D printing techniques for silicon).
    - **Result:** You get huge capacity (96MB+) without the latency penalty of going to an "L4" located further away.

Summary
- **L1/L2/L3:** The unwavering standard for general-purpose PCs.
- **L4:** Rare. Used when "Good enough" isn't enough (Supercomputers) or when sharing data between CPU and GPU (Apple Silicon/SoCs).



## Ref

