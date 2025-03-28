# Nvidia Chips

[TOC]



## Res
### Related Topics



## Intro
> 🔗 https://en.wikipedia.org/wiki/List_of_Nvidia_graphics_processing_units#
> List of Nvidia graphics processing units



## Ref
[GPU型号那么多，该如何选择呢？ - Mr.Lucky的文章 - 知乎]: https://zhuanlan.zhihu.com/p/528078173

NVIDIA常见的三大产品线如下  
- **[Quadro](https://zhida.zhihu.com/search?content_id=205483614&content_type=Article&match_order=1&q=Quadro&zhida_source=entity)类型**: Quadro系列显卡一般用于特定行业，比如设计、建筑等，图像处理专业显卡，比如CAD、Maya等软件。  
- **[GeForce](https://zhida.zhihu.com/search?content_id=205483614&content_type=Article&match_order=1&q=GeForce&zhida_source=entity)类型**: 这个系列显卡官方定位是消费级，常用来打游戏。但是它在深度学习上的表现也非常不错，很多人用来做推理、训练，单张卡的性能跟深度学习专业卡[Tesla](https://zhida.zhihu.com/search?content_id=205483614&content_type=Article&match_order=1&q=Tesla&zhida_source=entity)系列比起来其实差不太多，但是性价比却高很多。  
- **Tesla类型**: Tesla系列显卡定位并行计算，一般用于数据中心，具体点，比如用于深度学习，做训练、推理等。Tesla系列显卡针对GPU集群做了优化，像那种4卡、8卡、甚至16卡服务器，Tesla多块显卡合起来的性能不会受>很大影响，但是Geforce这种游戏卡性能损失严重，这也是Tesla主推并行计算的优势之一。  

Quadro类型分为如下几个常见系列  
- **NVIDIA [RTX Series](https://zhida.zhihu.com/search?content_id=205483614&content_type=Article&match_order=1&q=RTX+Series&zhida_source=entity)系列**: RTX A2000、RTX A4000、RTX A4500、RTX A5000、RTX A6000  
- **Quadro RTX Series系列**: RTX 3000、RTX 4000、RTX 5000、RTX 6000、RTX 8000

GeForce类型分为如下几个常见系列  
- **Geforce 10系列**: GTX 1050、GTX 1050Ti、GTX 1060、GTX 1070、GTX 1070Ti、GTX 1080、GTX 1080Ti  
- **Geforce 16系列**：GTX 1650、GTX 1650 Super、GTX 1660、GTX 1660 Super、GTX 1660Ti  
- **Geforce 20系列**：RTX 2060、RTX 2060 Super、RTX 2070、RTX 2070 Super、RTX 2080、RTX 2080 Super、RTX 2080Ti  
- **Geforce 30系列**: RTX 3050、RTX 3060、RTX 3060Ti、RTX 3070、RTX 3070Ti、RTX 3080、RTX 3080Ti、RTX 3090 RTX 3090Ti  
- Geforce 40
- Geforce 50

Tesla类型分为如下几个常见系列  
- **A-Series系列**: A10、A16、A30、A40、A100  
- **T-Series系列**: T4  
- **V-Series系列**: V100  
- **P-Series系列**: P4、P6、P40、P100  
- **K-Series系列**: K8、K10、K20c、K20s、K20m、K20Xm、K40t、K40st、K40s、K40m、K40c、K520、K80
- H-Series:
- L-Series:

显卡性能主要根据如下几个参数来判断：
1. **显存**: 显存即显卡内存，显存主要用于存放数据模型，决定了我们一次读入显卡进行运算的数据多少(`batch size`)和我们能够搭建的模型大小(网络层数、单元数)，是对深度学习研究人员来说很重要的指标，简述来讲，显存越大越好。
2. **架构**：在显卡**流处理器**、**核心频率**等条件相同的情况下，不同款的GPU可能采用不同设计架构，不同的设计架构间的性能差距还是不小的，显卡架构性能排序为：Ampere > Turing > Volta > Pascal > Maxwell > Kepler > Fermi > Tesla
3. **CUDA核心数量**：CUDA是NVIDIA推出的统一计算架构，NVIDIA几乎每款GPU都有CUDA核心，CUDA核心是每一个GPU始终执行一次值乘法运算，一般来说，同等计算架构下，CUDA核心数越高，计算能力会递增。
4. **Tensor(张量)核心数量**：Tensor 核心是专为执行张量或矩阵运算而设计的专用执行单元，而这些运算正是深度学习所采用的核心计算函数，它能够大幅加速处于深度学习神经网络训练和推理运算核心的矩阵计算。Tensor Core使用的计算能力要比Cuda Core高得多，这就是为什么Tensor Core能加速处于深度学习神经网络训练和推理运算核心的矩阵计算，能够在维持超低精度损失的同时大幅加速推理吞吐效率。
5. **半精度**：如果对运算的精度要求不高，那么就可以尝试使用半精度浮点数进行运算。这个时候，Tensor核心就派上了用场。Tensor Core专门执行矩阵数学运算，适用于深度学习和某些类型的HPC。Tensor Core执行融合乘法加法，其中两个`4*4` FP16矩阵相乘，然后将结果添加到`4*4` FP16或FP32矩阵中，最终输出新的`4*4` FP16或FP32矩阵。NVIDIA将Tensor Core进行的这种运算称为混合精度数学，因为输入矩阵的精度为半精度，但乘积可以达到完全精度。Tensor Core所做的这种运算在深度学习训练和推理中很常见。
6. **单精度**: Float32 是在深度学习中最常用的数值类型，称为单精度浮点数，每一个单精度浮点数占用4Byte的显存。
7. **双精度**：双精度适合要求非常高的专业人士，例如医学图像，CAD。

**具体的显卡使用需求，还要根据使用显卡处理的任务内容进行选择合适的卡，除了显卡性能外，还要考虑CPU、内存以及磁盘性能，关于GPU、CPU、内存、磁盘IO性能。**

[全面介绍英伟达A100、H100、L100、V100、T、B系列产品型号、性能、技术 | CSDN]: https://blog.csdn.net/2402_84466582/article/details/139599990?fromshare=blogdetail&sharetype=blogdetail&sharerId=139599990&sharerefer=PC&sharesource=weixin_43336330&sharefrom=from_link
B 系列 (Base or Budget)
B系列可能是指面向预算市场的GPU，或者是指某些产品线中的基础型号，例如RTX 30系列中的RTX 3060 Ti可能有一个B系列版本，但这个通常不是正式的产品线命名。

请注意，随着时间的推移，NVIDIA的产品线可能会有所变化，上述信息基于截至2024年的最新信息。对于最新的产品规格和性能，建议直接参考NVIDIA官方网站或官方发布的信息。每个系列的具体型号、性能和特点都会在NVIDIA的官方文档中有详细的说明。

V 系列 (Virtual GPU)
V系列可能指的是NVIDIA虚拟GPU解决方案，如NVIDIA vGPU软件，允许在虚拟化环境中使用GPU资源，适合远程工作站和云游戏服务。

[一文读懂 NVIDIA GPU 产品线 | 腾讯云]: https://cloud.tencent.com/developer/article/2482831?shareByChannel=link
NVIDIA 数据中心 GPU 的命名规则通常包含以下几个维度的信息：
1. **字母：** 或称之为“架构代号（Architecture）”代表 GPU 的核心架构，通常用一个或多个字母表示，代表 GPU 的微架构。例如：
	- A：Ampere 架构
	- T：Turing 架构
	- K：Kepler 架构
	- H：Hopper 架构
	- L: Ada Lovelace 架构
在 NVIDIA GPU 的命名体系中，首字母通常代表该 GPU 采用的微架构。微架构是 GPU 芯片设计的核心，决定了其基本的运算方式、指令集以及内部结构。每隔几年，NVIDIA 都会针对其消费级和数据中心产品线推出全新的微架构，以实现性能和能效比的显著提升。

2. **性能层级（Tier）**： 通常用数字表示，数字越大通常代表性能越强。
在同一微架构下，NVIDIA 会根据不同的市场定位和应用需求，推出多款不同性能层级的 GPU 产品，以满足各种计算负载的需求。这些不同的层级通常通过数字来区分，数字越大，代表该 GPU 的性能越强、价格越高，通常也意味着更高的功耗。 不同层级的 GPU 针对不同的计算负载进行了优化，以下是近年来一些常见层级的特点和应用场景：
-  “4” 系列：入门级或低功耗级
	- “4” 系列 GPU 通常是同代产品中体积最小、功耗最低的型号，其设计目标是在有限的功耗预算下提供足够的计算性能。这类 GPU 适合对性能要求不高、注重成本效益的应用场景，例如：
		- 轻量级的模型推理任务，例如图像分类、[自然语言处理](https://cloud.tencent.com/product/nlp?from_column=20065&from=20065)等。
		- 边缘计算设备或低功耗服务器。
		- 对成本敏感的应用部署。
- “10” 系列：中端推理优化级
	- “10” 系列 GPU 通常是针对人工智能推理应用进行优化的中端产品。它们在性能、功耗和成本之间取得了较好的平衡，适合需要较高推理吞吐量和较低延迟的应用场景，例如：
		- 大规模的在线推理服务。
		- 视频分析和图像处理。
		- [实时语音识别](https://cloud.tencent.com/product/asr?from_column=20065&from=20065)和翻译。
- “40” 系列：高端图形和虚拟工作站级
	- “40” 系列 GPU 通常是面向专业图形应用和虚拟工作站的高端产品。它们拥有强大的图形渲染能力和计算性能，适合对图形处理和计算性能要求较高的应用场景，例如：
		- 专业级图形设计和渲染。
		- [高性能计算](https://cloud.tencent.com/product/thpc?from_column=20065&from=20065)可视化。
		- 虚拟桌面基础设施 (VDI)。
- “100” 系列：旗舰级高性能计算和人工智能级
	- “100” 系列 GPU 是同代产品中性能最强、价格最高的旗舰级产品。它们拥有最多的内核数量、最大的显存容量和最高的内存带宽，专为处理最 demanding 的计算负载而设计，例如：
		- 大规模的模型训练和微调。
		- 高性能科学计算和模拟。
		- 超大规模数据中心部署。

3. 其他标识符： 有时还会包含其他字母或数字，用于表示特定的变体、配置或目标应用场景。例如：
	- T4 中的 "4" 可能暗示其定位是推理（Inference）应用。
	- 某些针对特定工作负载优化的 GPU 可能会带有后缀。
