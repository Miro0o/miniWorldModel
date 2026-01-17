# LLC (Last Level Cache) - L3 (L4)

[TOC]



## Res
### Related Topics
↗ [MCU (Memory Controller Unit) & IMC (Integrated Memory Controller)](MCU%20(Memory%20Controller%20Unit)%20&%20IMC%20(Integrated%20Memory%20Controller).md)
↗ [Computer Memory & Storage](../../../../Computer%20Memory%20&%20Storage/Computer%20Memory%20&%20Storage.md)


### Other Resources



## Intro
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




## Ref
