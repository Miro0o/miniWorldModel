# Compute Unified Device Architecture & CUDA Programming

[TOC]



## Res
🏠 
🚧 
📂 https://docs.nvidia.com/cuda/cuda-c-programming-guide/contents.html


### Related Topics
↗ [GPU (Graphics Processing Unit)](../../../../Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/🚦%20Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part)/📌%20Microprocessor%20&%20Microprocessors%20Unit%20(MPU)/Accelerators%20(Coprocessors)/GPU%20(Graphics%20Processing%20Unit)/GPU%20(Graphics%20Processing%20Unit).md)
↗ [GPU Virtualization](../../../../../../Software%20Engineering/🦄%20Computer%20Virtualization/Hardware%20Level%20Virtualization%20&%20Hypervisors/📌%20Hardware%20Virtualization/GPU%20Virtualization.md)
↗ [Nvidia](../../../../../../🗺%20CS%20Overview/Electronics%20&%20Information%20Technologies%20Business%20Fields%20Research/Hardware%20Industry%20&%20Manufacturers/🏖️%20Semiconductor%20Industry%20&%20Companies/Chip%20Manufacturers/Nvidia.md)
↗ [Nvidia Chips](../../../../../EE%20Related%20Theories%20&%20Hardware%20Implementation/🛠️%20Computer%20Manufacturers%20&%20Implementations/Computer%20Processors%20&%20Logic%20Chips%20(Implementation%20Part)/Nvidia%20Chips.md)

↗ [Parallel Computing & Programming](../../../../../../🧠%20Computing%20Methodologies/⚡️%20High%20Performance%20Computing/Parallel%20Computing%20&%20Programming/Parallel%20Computing%20&%20Programming.md)
↗ [Parallel Programming Libraries & SDK](../../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/🚠%20Application%20Runtimes%20&%20SDKs/👯‍♀️%20Parallel%20Programming%20Libraries%20&%20SDK/Parallel%20Programming%20Libraries%20&%20SDK.md)


### Learning Resources
https://jasonkayzk.github.io/2025/07/29/%E4%B8%80%E3%80%81%E5%B9%B6%E8%A1%8C%E7%BC%96%E7%A8%8B%E5%AF%BC%E8%AE%BA%E4%B8%8ECUDA%E5%85%A5%E9%97%A8/
随着人工智能的发展，科学计算（尤其是矩阵/张量计算）越来越重要；因此，基于CUDA的张量编程也越来越重要。
在[上一篇笔记](https://github.com/JasonkayZK/high-performance-computing-learn/blob/main/cuda/0-an-even-easier-intro-to-cuda.ipynb)中翻译了[《An Even Easier Introduction to CUDA》](https://developer.nvidia.com/blog/even-easier-introduction-cuda/)，但是感觉作者写的不是很好；
这里重新写了一篇。同时，也作为CUDA和并行编程的开篇。
源代码：
- [https://github.com/JasonkayZK/high-performance-computing-learn/blob/main/cuda/1_introduction_to_parallel_programming_and_cuda.ipynb](https://github.com/JasonkayZK/high-performance-computing-learn/blob/main/cuda/1_introduction_to_parallel_programming_and_cuda.ipynb)

【CUDA 编程入门】 https://www.bilibili.com/video/BV1vJ411D73S/?p=2&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

CUDA编程入门极简教程 - 小小将的文章 - 知乎 https://zhuanlan.zhihu.com/p/34587739

👍 https://modal.com/gpu-glossary/readme
- We wrote this glossary to solve a problem we ran into working with GPUs here at [Modal](https://modal.com/) : the documentation is fragmented, making it difficult to connect concepts at different levels of the stack, like [Streaming Multiprocessor Architecture](https://modal.com/gpu-glossary/device-hardware/streaming-multiprocessor-architecture) , [Compute Capability](https://modal.com/gpu-glossary/device-software/compute-capability) , and [nvcc compiler flags](https://modal.com/gpu-glossary/host-software) .
- So we've read the [PDFs from NVIDIA](https://docs.nvidia.com/cuda/pdf/PTX_Writers_Guide_To_Interoperability.pdf) , lurked in the [good Discords](https://discord.gg/gpumode) , and even bought [dead-tree textbooks](https://www.amazon.com/Professional-CUDA-Programming-John-Cheng/dp/1118739329)  to put together a glossary that spans the whole stack in one place.
- This glossary, unlike a PDF or a Discord or a book, is a _hypertext document_ -- all pages are inter-linked with one another, so you can jump down to read about the [Warp Scheduler](https://modal.com/gpu-glossary/device-hardware/warp-scheduler)  so you can better understand the [threads](https://modal.com/gpu-glossary/device-software/thread)  that you came across in the article on the [CUDA programming model](https://modal.com/gpu-glossary/host-software/cuda-c) .
- You can also read it linearly. To navigate between pages, use the arrow keys, the arrows at the bottom of each page, or the table of contents (in the sidebar on desktop or in the hamburger menu on mobile).
- The source for the glossary is available [on GitHub](https://github.com/modal-labs/gpu-glossary) .
- TOC
	- Device Hardware
		- These terms and technologies are physical components of the GPU — the "device" in NVIDIA's lingo.
		- [CUDA (Device Architecture)](https://modal.com/gpu-glossary/device-hardware/cuda-device-architecture)
		- [Streaming Multiprocessor (SM)](https://modal.com/gpu-glossary/device-hardware/streaming-multiprocessor)
		- [Core](https://modal.com/gpu-glossary/device-hardware/core)
		- [Special Function Unit (SFU)](https://modal.com/gpu-glossary/device-hardware/special-function-unit)
		- [Load/Store Unit (LSU)](https://modal.com/gpu-glossary/device-hardware/load-store-unit)
		- [Warp Scheduler](https://modal.com/gpu-glossary/device-hardware/warp-scheduler)
		- [CUDA Core](https://modal.com/gpu-glossary/device-hardware/cuda-core)
		- [Tensor Core](https://modal.com/gpu-glossary/device-hardware/tensor-core)
		- [Tensor Memory Accelerator (TMA)](https://modal.com/gpu-glossary/device-hardware/tensor-memory-accelerator)
		- [Streaming Multiprocessor Architecture](https://modal.com/gpu-glossary/device-hardware/streaming-multiprocessor-architecture)
		- [Texture Processing Cluster (TPC)](https://modal.com/gpu-glossary/device-hardware/texture-processing-cluster)
		- [Graphics/GPU Processing Cluster (GPC)](https://modal.com/gpu-glossary/device-hardware/graphics-processing-cluster)
		- [Register File](https://modal.com/gpu-glossary/device-hardware/register-file)
		- [L1 Data Cache](https://modal.com/gpu-glossary/device-hardware/l1-data-cache)
		- [Tensor Memory](https://modal.com/gpu-glossary/device-hardware/tensor-memory)
		- [GPU RAM](https://modal.com/gpu-glossary/device-hardware/gpu-ram)
	- Device Software
		- These terms and technologies are used for software that runs on GPU — the "device" in NVIDIA's lingo.
		- [CUDA (Programming Model)](https://modal.com/gpu-glossary/device-software/cuda-programming-model)
		- [Streaming ASSembler (SASS)](https://modal.com/gpu-glossary/device-software/streaming-assembler)
		- [Parallel Thread eXecution (PTX)](https://modal.com/gpu-glossary/device-software/parallel-thread-execution)
		- [Compute Capability](https://modal.com/gpu-glossary/device-software/compute-capability)
		- [Thread](https://modal.com/gpu-glossary/device-software/thread)
		- [Warp](https://modal.com/gpu-glossary/device-software/warp)
		- [Cooperative Thread Array](https://modal.com/gpu-glossary/device-software/cooperative-thread-array)
		- [Kernel](https://modal.com/gpu-glossary/device-software/kernel)
		- [Thread Block](https://modal.com/gpu-glossary/device-software/thread-block)
		- [Thread Block Grid](https://modal.com/gpu-glossary/device-software/thread-block-grid)
		- [Thread Hierarchy](https://modal.com/gpu-glossary/device-software/thread-hierarchy)
		- [Memory Hierarchy](https://modal.com/gpu-glossary/device-software/memory-hierarchy)
		- [Registers](https://modal.com/gpu-glossary/device-software/registers)
		- [Shared Memory](https://modal.com/gpu-glossary/device-software/shared-memory)
		- [Global Memory](https://modal.com/gpu-glossary/device-software/global-memory)
	- Host Software
		- These terms and technologies are used on the CPU (the "host" in NVIDIA's lingo) when running GPU programs.
		- [CUDA (Software Platform)](https://modal.com/gpu-glossary/host-software/cuda-software-platform)
		- [CUDA C++ (programming language)](https://modal.com/gpu-glossary/host-software/cuda-c)
		- [NVIDIA GPU Drivers](https://modal.com/gpu-glossary/host-software/nvidia-gpu-drivers)
		- [nvidia.ko](https://modal.com/gpu-glossary/host-software/nvidia-ko)
		- [CUDA Driver API](https://modal.com/gpu-glossary/host-software/cuda-driver-api)
		- [libcuda.so](https://modal.com/gpu-glossary/host-software/libcuda)
		- [NVIDIA Management Library (NVML)](https://modal.com/gpu-glossary/host-software/nvml)
		- [libnvml.so](https://modal.com/gpu-glossary/host-software/libnvml)
		- [nvidia-smi](https://modal.com/gpu-glossary/host-software/nvidia-smi)
		- [CUDA Runtime API](https://modal.com/gpu-glossary/host-software/cuda-runtime-api)
		- [libcudart.so](https://modal.com/gpu-glossary/host-software/libcudart)
		- [NVIDIA CUDA Compiler Driver (nvcc)](https://modal.com/gpu-glossary/host-software/nvcc)
		- [NVIDIA Runtime Compiler](https://modal.com/gpu-glossary/host-software/nvrtc)
		- [NVIDIA CUDA Profiling Tools Interface (CUPTI)](https://modal.com/gpu-glossary/host-software/cupti)
		- [NVIDIA Nsight Systems](https://modal.com/gpu-glossary/host-software/nsight-systems)
		- [CUDA Binary Utilities](https://modal.com/gpu-glossary/host-software/cuda-binary-utilities)
		- [cuBLAS](https://modal.com/gpu-glossary/host-software/cublas)
		- [cuDNN](https://modal.com/gpu-glossary/host-software/cudnn)
	- Performance
		- [Performance Bottleneck](https://modal.com/gpu-glossary/perf/performance-bottleneck)
		- [Roofline Model](https://modal.com/gpu-glossary/perf/roofline-model)
		- [Compute-bound](https://modal.com/gpu-glossary/perf/compute-bound)
		- [Memory-bound](https://modal.com/gpu-glossary/perf/memory-bound)
		- [Arithmetic Intensity](https://modal.com/gpu-glossary/perf/arithmetic-intensity)
		- [Overhead](https://modal.com/gpu-glossary/perf/overhead)
		- [Little's Law](https://modal.com/gpu-glossary/perf/littles-law)
		- [Memory Bandwidth](https://modal.com/gpu-glossary/perf/memory-bandwidth)
		- [Arithmetic Bandwidth](https://modal.com/gpu-glossary/perf/arithmetic-bandwidth)
		- [Latency Hiding](https://modal.com/gpu-glossary/perf/latency-hiding)
		- [Warp Execution State](https://modal.com/gpu-glossary/perf/warp-execution-state)
		- [Active Cycle](https://modal.com/gpu-glossary/perf/active-cycle)
		- [Occupancy](https://modal.com/gpu-glossary/perf/occupancy)
		- [Pipe Utilization](https://modal.com/gpu-glossary/perf/pipe-utilization)
		- [Peak Rate](https://modal.com/gpu-glossary/perf/peak-rate)
		- [Issue Efficiency](https://modal.com/gpu-glossary/perf/issue-efficiency)
		- [Streaming Multiprocessor Utilization](https://modal.com/gpu-glossary/perf/streaming-multiprocessor-utilization)
		- [Warp Divergence](https://modal.com/gpu-glossary/perf/warp-divergence)
		- [Branch Efficiency](https://modal.com/gpu-glossary/perf/branch-efficiency)
		- [Bank Conflict](https://modal.com/gpu-glossary/perf/bank-conflict)
		- [Register Pressure](https://modal.com/gpu-glossary/perf/register-pressure)


### Other Resources
 > 🔗 https://developer.nvidia.com/blog/even-easier-introduction-cuda/

There is a whole series of older introductory posts that you can continue with:
- [How to Implement Performance Metrics in CUDA C++](https://developer.nvidia.com/blog/how-implement-performance-metrics-cuda-cc/)
- [How to Query Device Properties and Handle Errors in CUDA C++](https://developer.nvidia.com/blog/how-query-device-properties-and-handle-errors-cuda-cc/)
- [How to Optimize Data Transfers in CUDA C++](https://developer.nvidia.com/blog/how-optimize-data-transfers-cuda-cc/)
- [How to Overlap Data Transfers in CUDA C++](https://developer.nvidia.com/blog/how-overlap-data-transfers-cuda-cc/)
- [How to Access Global Memory Efficiently in CUDA C++](https://developer.nvidia.com/blog/how-access-global-memory-efficiently-cuda-c-kernels/)
- [Using Shared Memory in CUDA C++](https://developer.nvidia.com/blog/using-shared-memory-cuda-cc/)
- [An Efficient Matrix Transpose in CUDA C++](https://developer.nvidia.com/blog/efficient-matrix-transpose-cuda-cc/)
- [Finite Difference Methods in CUDA C++, Part 1](https://developer.nvidia.com/blog/finite-difference-methods-cuda-cc-part-1/)
- [Finite Difference Methods in CUDA C++, Part 2](https://developer.nvidia.com/blog/finite-difference-methods-cuda-c-part-2/)
- [Accelerated Ray Tracing in One Weekend with CUDA](https://developer.nvidia.com/blog/accelerated-ray-tracing-cuda/)

There is also a series of [CUDA Fortran posts](https://developer.nvidia.com/blog/tag/cuda-fortran/) mirroring the above, starting with [An Easy Introduction to CUDA Fortran](https://developer.nvidia.com/blog/easy-introduction-cuda-fortran/).

There is a wealth of other content on CUDA C++ and other GPU computing topics here on the [NVIDIA Developer Blog](https://developer.nvidia.com/blog/), so look around!

If you enjoyed this post and want to learn more, the [NVIDIA DLI](https://nvidia.com/dli) offers several in-depth CUDA programming courses.
- For those of you just starting out, see [Getting Started with Accelerated Computing in Modern CUDA C++](https://learn.nvidia.com/courses/course-detail?course_id=course-v1:DLI+S-AC-04+V1), which provides dedicated GPU resources, a more sophisticated programming environment, use of the [NVIDIA Nsight Systems](https://developer.nvidia.com/nsight-systems) visual profiler, dozens of interactive exercises, detailed presentations, over 8 hours of material, and the ability to earn a DLI Certificate of Competency.
- For Python programmers, see [Fundamentals of Accelerated Computing with CUDA Python](https://courses.nvidia.com/courses/course-v1:DLI+C-AC-02+V1/about).
- For more intermediate and advanced CUDA programming materials, see the _Accelerated Computing_ section of the NVIDIA DLI [self-paced catalog](https://learn.nvidia.com/en-us/training/self-paced-courses).



## Intro
> 🔗 https://en.wikipedia.org/wiki/CUDA

**CUDA** (**Compute Unified Device Architecture**) is a proprietary [parallel computing](https://en.wikipedia.org/wiki/Parallel_computing "Parallel computing") platform and [application programming interface](https://en.wikipedia.org/wiki/Application_programming_interface "Application programming interface") (API) that allows software to use certain types of [graphics processing units](https://en.wikipedia.org/wiki/Graphics_processing_units "Graphics processing units") (GPUs) for accelerated general-purpose processing, significantly broadening their utility in scientific and [high-performance computing](https://en.wikipedia.org/wiki/High-performance_computing "High-performance computing"). CUDA was created by [Nvidia](https://en.wikipedia.org/wiki/Nvidia "Nvidia") starting in 2004 and was officially released in 2007. When it was first introduced, the name was an acronym for _Compute Unified Device Architecture_, but Nvidia later [dropped](https://en.wikipedia.org/wiki/Orphan_initialism "Orphan initialism") the common use of the acronym and now rarely expands it.

CUDA is both a software layer that manages data, giving direct access to the GPU and [CPU](https://en.wikipedia.org/wiki/Central_processing_unit "Central processing unit") as necessary, and a library of APIs that enable parallel computation for various needs. In addition to [drivers](https://en.wikipedia.org/wiki/Driver_\(computer\) "Driver (computer)") and runtime kernels, the CUDA platform includes compilers, libraries and developer tools to help programmers accelerate their applications.

CUDA is written in the [C](https://en.wikipedia.org/wiki/C_\(programming_language\) "C (programming language)") programming language but is designed to work with a wide array of other [programming languages](https://en.wikipedia.org/wiki/Programming_language "Programming language") including [C++](https://en.wikipedia.org/wiki/C%2B%2B "C++"), [Fortran](https://en.wikipedia.org/wiki/Fortran "Fortran"), [Python](https://en.wikipedia.org/wiki/Python_\(programming_language\) "Python (programming language)") and [Julia](https://en.wikipedia.org/wiki/Julia_\(programming_language\) "Julia (programming language)"). This accessibility makes it easier for specialists in [parallel programming](https://en.wikipedia.org/wiki/Parallel_programming "Parallel programming") to use GPU resources, in contrast to prior APIs like [Direct3D](https://en.wikipedia.org/wiki/Direct3D "Direct3D") and [OpenGL](https://en.wikipedia.org/wiki/OpenGL "OpenGL"), which require advanced skills in graphics programming. CUDA-powered GPUs also support programming frameworks such as [OpenMP](https://en.wikipedia.org/wiki/OpenMP "OpenMP"), [OpenACC](https://en.wikipedia.org/wiki/OpenACC "OpenACC") and [OpenCL](https://en.wikipedia.org/wiki/OpenCL "OpenCL").



## Ref
[An Even Easier Introduction to CUDA (Updated) | Nvidia]: https://developer.nvidia.com/blog/even-easier-introduction-cuda/

[GPU与CUDA]: https://qiankunli.github.io/2025/03/22/cuda.html
