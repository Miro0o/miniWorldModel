# GPU (Graphics Processing Unit)

[TOC]



## Res
### Related Topics
↗ [GPU Virtualization](../../../../../../../../Software%20Engineering/🦄%20Computer%20Virtualization/Hardware%20Level%20Virtualization%20&%20Hypervisors/📌%20Hardware%20Virtualization/GPU%20Virtualization.md)

↗ [Computer Graphics Programming](../../../../../../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🎨%20Computer%20Graphics%20Programming/Computer%20Graphics%20Programming.md)
↗ [Media Processing & GUI SDK](../../../../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/🚠%20Application%20Runtimes%20&%20SDKs/🧩%20Media%20Processing%20&%20GUI%20SDK/Media%20Processing%20&%20GUI%20SDK.md)
- ↗ [Graphics Rendering Frameworks (2D & 3D)](../../../../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/🚠%20Application%20Runtimes%20&%20SDKs/🧩%20Media%20Processing%20&%20GUI%20SDK/🖼️%20Graphics%20Rendering%20Frameworks%20(2D%20&%203D)/Graphics%20Rendering%20Frameworks%20(2D%20&%203D).md)

↗ [Compute Unified Device Architecture & CUDA Programming](../../../../../../Computer%20Interfaces%20&%20Hardware%20Drivers/🛞%20Computer%20(IO%20Devices)%20Drivers%20&%20Programming/Graphics%20Devices%20Drivers/Compute%20Unified%20Device%20Architecture%20&%20CUDA%20Programming/Compute%20Unified%20Device%20Architecture%20&%20CUDA%20Programming.md)
↗ [Parallel Programming Libraries & SDK](../../../../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/🚠%20Application%20Runtimes%20&%20SDKs/👯‍♀️%20Parallel%20Programming%20Libraries%20&%20SDK/Parallel%20Programming%20Libraries%20&%20SDK.md)

↗ [Nvidia](../../../../../../../../🗺%20CS%20Overview/Electronics%20&%20Information%20Technologies%20Business%20Fields%20Research/Hardware%20Industry%20&%20Manufacturers/🏖️%20Semiconductor%20Industry%20&%20Companies/Chip%20Manufacturers/Nvidia.md)
↗ [Nvidia Chips](../../../../../../../EE%20Related%20Theories%20&%20Hardware%20Implementation/🛠️%20Computer%20Manufacturers%20&%20Implementations/Computer%20Processors%20&%20Logic%20Chips%20(Implementation%20Part)/Nvidia%20Chips.md)

↗ [国产芯片](../../../../../../../EE%20Related%20Theories%20&%20Hardware%20Implementation/🛠️%20Computer%20Manufacturers%20&%20Implementations/Computer%20Processors%20&%20Logic%20Chips%20(Implementation%20Part)/国产芯片.md)


### Learning Resources
> 🔗 https://github.com/mikeroyal/GPU-Guide#gpu-learning-resources

[Graphics Processing Unit (GPU)](https://en.wikipedia.org/wiki/Graphics_processing_unit) is a circuit that's composed of hundreds of cores that can handle thousands of threads simultaneously. GPUS can rapidly manipulate and alter memory to accelerate the creation of images in a frame buffer intended for output to a display device. They are used in embedded systems, mobile phones, personal computers, professional workstations, and game consoles.

[Random Access Memory (RAM)](https://en.wikipedia.org/wiki/Random-access_memory) is a form of computer memory that can be read and changed in any order, typically used to store working data and machine code. A random access memory device allows data items to be read or written in almost the same amount of time irrespective of the physical location of data inside the memory, in contrast with other direct-access data storage media.

[Video Random Access Memory (VRAM)](https://en.wikipedia.org/wiki/VRAM) is the RAM allocated to store image or graphics related data. It functions in the same way as RAM, storing specific data for easier access and performance. Image data is first read by the processor and written on the VRAM. It is then converted by a [RAMDAC](https://en.wikipedia.org/wiki/RAMDAC) or a RAM digital-to-analog converter and display as graphics output.

[Graphics Double Data Rate (GDDR) SDRAM](https://en.wikipedia.org/wiki/GDDR6_SDRAM#GDDR6X) is a type of synchronous graphics random-access memory (SGRAM) with a high bandwidth ("double data rate") interface designed for use in graphics cards, game consoles, and high-performance computing.

[Integrated Graphics Processing Unit (IGPU)](https://en.wikipedia.org/wiki/Graphics_processing_unit#Integrated_graphics_processing_unit) is a component built on the same die (integrated circuit) with the CPU ([AMD Ryzen APU](https://www.amd.com/en/processors/ryzen-with-graphics) or [Intel HD Graphics](https://en.wikipedia.org/wiki/Intel_Graphics_Technology)) that utilizes a portion of the computer's system RAM rather than dedicated graphics memory.

[Tensor](https://en.wikipedia.org/wiki/Tensor) is an algebraic object that describes a multilinear relationship between sets of algebraic objects related to a vector space.Objects that tensors may map between vectors, scalars, and other tensors.

[Tensors](https://www.tensorflow.org/guide/tensor) are multi-dimensional arrays with a uniform type (called a dtype).

[Tensor Cores](https://www.nvidia.com/en-us/data-center/tensor-cores/) are an AI inference accelerator in NVIDIA GPUs that provide an order-of-magnitude higher performance with reduced precisions like TF32, bfloat16, FP16, INT8, INT4, and FP64, to accelerate scientific computing with the highest accuracy needed.

[RT (Real-time ray tracing) Cores](https://developer.nvidia.com/blog/nvidia-turing-architecture-in-depth/) is a hardware-based ray tracing acceleration accelerate Bounding Volume Hierarchy (BVH) traversal and ray/triangle intersection testing (ray casting) functions. RT Cores perform visibility testing on behalf of threads running in the SM, allowing it to handle another vertex, pixel, and compute shading work.

[Central Processing Unit (CPU)](https://en.wikipedia.org/wiki/Central_processing_unit) is a circuit that's composed of multiple cores that executes instructions comprising a computer program. The CPU performs basic arithmetic, logic, controlling, and input/output (I/O) operations specified by the instructions in the program. This is different from other external components such as main memory, I/O circuitry, and graphics processing units (GPUs).

[AMD Accelerated Processing Unit (APU)](https://en.wikipedia.org/wiki/AMD_Accelerated_Processing_Unit) a series of 64-bit microprocessors from Advanced Micro Devices (AMD), designed to act as a central processing unit (CPU) and graphics processing unit (GPU) on a single die.

[Vector Processor](https://en.wikipedia.org/wiki/Vector_processor) is a central processing unit (CPU) that implements an instruction set where its instructions are designed to operate efficiently and effectively on large one-dimensional arrays of data called vectors.

[Digital Signal Processing (DSP)](https://en.wikipedia.org/wiki/Digital_signal_processing) is the application of a digital computer to modify an analog or digital signal. It's wadely used in many applications including video/audio/data communications and networking, medical imaging and computer vision, speech synthesis and coding, digital audio and video, and control of complex systems and industrial processes.

[Image Signal Processing (ISP)](https://en.wikipedia.org/wiki/Image_processor) is the processs of converting an image into digital form by performing operations like noise reduction, auto exposure, autofocus, auto white balance, HDR correction, and image sharpening with a Specialized type of media processor.

[Application Specific Integrated Circuits (ASICs)](https://en.wikipedia.org/wiki/Application-specific_integrated_circuit) is an integrated circuit (IC) chip customized for a particular use in embedded systems, mobile phones, personal computers, professional workstations, rather than intended for general use.

[Single Instruction, Multiple Data (SIMD)](https://en.wikipedia.org/wiki/SIMD) is a type of parallel processing that describes computers with multiple processing elements that perform the same operation on multiple data points simultaneously.

[What Is a GPU? Graphics Processing Units Defined | Intel](https://www.intel.com/content/www/us/en/products/docs/processors/what-is-a-gpu.html)

[Deep Learning Institute and Training Solutions | NVIDIA](https://www.nvidia.com/en-us/training/)

[Deep Learning Online Courses | NVIDIA](https://www.nvidia.com/en-us/training/online/)

[Existing University Courses | NVIDIA Developer](https://developer.nvidia.com/educators/existing-courses)

[Using GPUs to Scale and Speed-up Deep Learning | edX](https://www.edx.org/course/using-gpus-to-scale-and-speed-up-deep-learning)

[Top GPU Courses Online | Coursera](https://www.coursera.org/courses?query=gpu&page=1)

[CUDA GPU Programming Beginner To Advanced | Udemy](https://www.udemy.com/course/cuda-gpu-programming-beginner-to-advanced/)

[GPU computing in Vulkan | Udemy](https://www.udemy.com/course/vulkan-gpu-computing/)

[GPU Architectures Course | Unversity of Washington](https://courses.cs.washington.edu/courses/cse471/13sp/lectures/GPUsStudents.pdf)


### Other Resources
https://github.com/mikeroyal/gpu-guide
A guide covering how a GPU works including the applications, libraries, hardware, and tools. It will also give you a better understanding of how GPU-based tasks work in embedded systems, mobile phones, personal computers, professional workstations, and game consoles.
1. [GPU Learning Resources](https://github.com/mikeroyal/GPU-Guide#gpu-learning-resources)
2. [Electric charge, field, and potential](https://github.com/mikeroyal/GPU-Guide#electric-charge-field-and-potential)
    - Charge and electric force (Coulomb's law): Electric charge, field, and potential
    - Electric field: Electric charge, field, and potential
    - Electric potential energy, electric potential, and voltage: Electric charge, field, and potential
3. [Circuits](https://github.com/mikeroyal/GPU-Guide#Circuits)
    - Ohm's law and circuits with resistors: Circuits
    - Circuits with capacitors: Circuits
4. [Magnetic forces, magnetic fields, and Faraday's law](https://github.com/mikeroyal/GPU-Guide#magnetic-forces-magnetic-fields-and-Faradays-law)
    - Magnets and Magnetic Force: Magnetic forces, magnetic fields, and Faraday's law
    - Magnetic field created by a current: Magnetic forces, magnetic fields, and Faraday's law
    - Electric motors: Magnetic forces, magnetic fields, and Faraday's law
    - Magnetic flux and Faraday's law
5. [Electromagnetic waves and interference](https://github.com/mikeroyal/GPU-Guide#electromagnetic-waves-and-interference)
    - Introduction to electromagnetic waves: Electromagnetic waves and interference
    - Interference of electromagnetic waves
6. [Geometric optics](https://github.com/mikeroyal/GPU-Guide#Geometric-optics)
    - Reflection and refraction: Geometric optics
    - Mirrors: Geometric optics
    - Lenses
7. [Linear Algebra](https://github.com/mikeroyal/GPU-Guide#Linear-Algebra)
8. [Virtualization](https://github.com/mikeroyal/GPU-Guide#virtualization)
9. [Parallel Computing](https://github.com/mikeroyal/GPU-Guide#Parallel-Computing)
10. [OpenCL Development](https://github.com/mikeroyal/GPU-Guide#opencl-development)
11. [CUDA Development](https://github.com/mikeroyal/GPU-Guide#cuda-development)
12. [Algorithms](https://github.com/mikeroyal/GPU-Guide#algorithms)
13. [Machine Learning](https://github.com/mikeroyal/GPU-Guide#machine-learning)
14. [Deep Learning Development](https://github.com/mikeroyal/GPU-Guide#Deep-Learning-Development)
15. [Computer Vision Development](https://github.com/mikeroyal/GPU-Guide#computer-vision-development)
16. [Gaming](https://github.com/mikeroyal/GPU-Guide#gaming)
17. [Game Development](https://github.com/mikeroyal/GPU-Guide#game-development)
18. [OpenGL Development](https://github.com/mikeroyal/GPU-Guide#opengl-development)
19. [Vulkan Development](https://github.com/mikeroyal/GPU-Guide#vulkan-development)
20. [DirectX Development](https://github.com/mikeroyal/GPU-Guide#directx-development)
21. [Professional Audio/Video Development](https://github.com/mikeroyal/GPU-Guide#professional-audiovideo-development)
22. [3D Graphics & Design](https://github.com/mikeroyal/GPU-Guide#3d-graphics-and-design)
23. [Apple Silicon](https://github.com/mikeroyal/GPU-Guide#Apple-Silicon)
24. [Core ML Development](https://github.com/mikeroyal/GPU-Guide#core-ml-development)
25. [Metal Development](https://github.com/mikeroyal/GPU-Guide#Metal-development)
26. [MATLAB Development](https://github.com/mikeroyal/GPU-Guide#matlab-development)
27. [C/C++ Development](https://github.com/mikeroyal/GPU-Guide#cc-development)
28. [Python Development](https://github.com/mikeroyal/GPU-Guide#python-development)
29. [R Development](https://github.com/mikeroyal/GPU-Guide#r-development)
30. [Julia Development](https://github.com/mikeroyal/GPU-Guide#julia-development)



## Intro
![](../../../../../../../../../Assets/Pics/Screenshot%202024-07-26%20at%201.51.35%20PM.png)
<small><a>https://en.wikipedia.org/wiki/Graphics_processing_unit</a></small>


### GPU Layout & Microarchitecture ⭐
> [!links]
> ↗ [Computer Architecture](../../../../../Computer%20Architecture.md)"microarchitecture =? organization =? CPU =? CPU core"
> 
> ↗ [Computer Processors & Logic Chips (Implementation Part)](../../../../../../../EE%20Related%20Theories%20&%20Hardware%20Implementation/🛠️%20Computer%20Manufacturers%20&%20Implementations/Computer%20Processors%20&%20Logic%20Chips%20(Implementation%20Part)/Computer%20Processors%20&%20Logic%20Chips%20(Implementation%20Part).md)
> - ↗ [Nvidia Chips](../../../../../../../EE%20Related%20Theories%20&%20Hardware%20Implementation/🛠️%20Computer%20Manufacturers%20&%20Implementations/Computer%20Processors%20&%20Logic%20Chips%20(Implementation%20Part)/Nvidia%20Chips.md)
> - ↗ [Intel Chips](../../../../../../../EE%20Related%20Theories%20&%20Hardware%20Implementation/🛠️%20Computer%20Manufacturers%20&%20Implementations/Computer%20Processors%20&%20Logic%20Chips%20(Implementation%20Part)/Intel%20Chips.md)
> - ↗ [AMD Chips](../../../../../../../EE%20Related%20Theories%20&%20Hardware%20Implementation/🛠️%20Computer%20Manufacturers%20&%20Implementations/Computer%20Processors%20&%20Logic%20Chips%20(Implementation%20Part)/AMD%20Chips.md)

> [!TIp]
> 🔗 [List of Nvidia graphics processing units](https://en.wikipedia.org/wiki/List_of_Nvidia_graphics_processing_units)
> - Desktop GPUs
> 	- ![](../../../../../../../../../Assets/Pics/Screenshot%202026-04-01%20at%2014.29.42.png)
> - Mobile GPUs
> - Workstation GPUs
> - Data Center GPUs
> 	- ![](../../../../../../../../../Assets/Pics/Screenshot%202026-04-01%20at%2014.27.31.png)
> - Console/handheld GPUs
> 
> 🔗 [List of AMD graphics processing units](https://en.wikipedia.org/wiki/List_of_AMD_graphics_processing_units "List of AMD graphics processing units")
> 
> 🔗 [List of Intel graphics processing units](https://en.wikipedia.org/wiki/List_of_Intel_graphics_processing_units "List of Intel graphics processing units")



## 🎯 Performance Metrics & Specifications
### Tensor Core
![](../../../../../../../../../Assets/Pics/Screenshot%202026-04-01%20at%2014.54.42.png)
<small>NVIDIA RTX BLACKWELL GPU ARCHITECTURE <br> <a>https://images.nvidia.com/aem-dam/Solutions/geforce/blackwell/nvidia-rtx-blackwell-gpu-architecture.pdf</a></small>



## 🎯 GPU Manufacture



## Ref
[Google的DirectTCPX技术方案分析]: https://mp.weixin.qq.com/s/S6XiMXsxSSs23JgLdHI_1g
