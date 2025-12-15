# OpenHarmony

[TOC]



## Res
🏠 https://www.openharmony.cn/mainPlay
🚧 https://gitee.com/openharmony

📂 [OpenHarmony开发者文档](https://gitee.com/openharmony/docs/tree/master/zh-cn)
📂 [English Version](https://gitee.com/openharmony/docs/tree/master/en)

🚀 [设备开发快速入门](https://gitee.com/openharmony/docs/blob/master/zh-cn/device-dev/quick-start/quickstart-overview.md)
🚀 [应用开发快速入门](https://gitee.com/openharmony/docs/blob/master/zh-cn/application-dev/quick-start/start-overview.md)

获取OpenHarmony源码：[下载说明](https://gitee.com/openharmony/docs/blob/master/zh-cn/device-dev/get-code/sourcecode-acquire.md)

Samples：[示例代码](https://gitee.com/openharmony/applications_app_samples)
Codelabs：[教程指导](https://gitee.com/openharmony/codelabs)


### Related Topics
↗ [Huawei HarmonyOS Runtimes & ArkCompiler](../📌%20Huawei%20HarmonyOS%20Runtimes%20&%20ArkCompiler/Huawei%20HarmonyOS%20Runtimes%20&%20ArkCompiler.md)

↗ [OpenAtom Foundation (开放原子开源基金会)](../../../../../Software%20Engineering/Open%20Source%20(Free%20Software)%20Spirits%20&%20Software%20License/Free%20Software%20Organizations/OpenAtom%20Foundation%20(开放原子开源基金会).md)
↗ [Linux (Derived From UNIX Family)](../../../Linux%20(Derived%20From%20UNIX%20Family)/Linux%20(Derived%20From%20UNIX%20Family).md)
↗ [Android & AOSP](../../../Android%20&%20AOSP/Android%20&%20AOSP.md)

↗ [🍸 Linux Kernel](../../../Linux%20(Derived%20From%20UNIX%20Family)/🔩%20Linux%20Kernel/🍸%20Linux%20Kernel.md)


### Communities & Resources
https://ost.51cto.com
https://bbs.kanxue.com/forum-178.htm


## Intro
> 🔗 https://gitee.com/openharmony
> ↗ [Huawei HarmonyOS Runtimes & ArkCompiler](../📌%20Huawei%20HarmonyOS%20Runtimes%20&%20ArkCompiler/Huawei%20HarmonyOS%20Runtimes%20&%20ArkCompiler.md)

OpenHarmony是由开放原子开源基金会（OpenAtom Foundation）孵化及运营的开源项目，目标是面向全场景、全连接、全智能时代，搭建一个智能终端设备操作系统的框架和平台，促进万物互联产业的繁荣发展。

OpenHarmony整体遵从分层设计，从下向上依次为：内核层、系统服务层、框架层和应用层。系统功能按照“系统 > 子系统 > 组件”逐级展开，在多设备部署场景下，支持根据实际需求裁剪某些非必要的组件。OpenHarmony技术架构如下所示：

![](../../../../../../../Assets/Pics/Pasted%20image%2020240304125406.png)

**内核层**
- 内核子系统：采用多内核（Linux内核或者LiteOS）设计，支持针对不同资源受限设备选用适合的OS内核。内核抽象层（KAL，Kernel Abstract Layer）通过屏蔽多内核差异，对上层提供基础的内核能力，包括进程/线程管理、内存管理、文件系统、网络管理和外设管理等。
- 驱动子系统：驱动框架（HDF）是系统硬件生态开放的基础，提供统一外设访问能力和驱动开发、管理框架。

**系统服务层**
系统服务层是OpenHarmony的核心能力集合，通过框架层对应用程序提供服务。该层包含以下几个部分：
- 系统基本能力子系统集：为分布式应用在多设备上的运行、调度、迁移等操作提供了基础能力，由分布式软总线、分布式数据管理、分布式任务调度、公共基础库、多模输入、图形、安全、AI等子系统组成。
- 基础软件服务子系统集：提供公共的、通用的软件服务，由事件通知、电话、多媒体、DFX（Design For X） 等子系统组成。
- 增强软件服务子系统集：提供针对不同设备的、差异化的能力增强型软件服务，由智慧屏专有业务、穿戴专有业务、IoT专有业务等子系统组成。
- 硬件服务子系统集：提供硬件服务，由位置服务、用户IAM、穿戴专有硬件服务、IoT专有硬件服务等子系统组成。

根据不同设备形态的部署环境，基础软件服务子系统集、增强软件服务子系统集、硬件服务子系统集内部可以按子系统粒度裁剪，每个子系统内部又可以按功能粒度裁剪。

**框架层**
框架层为应用开发提供了C/C++/JS等多语言的用户程序框架和Ability框架，适用于JS语言的ArkUI框架，以及各种软硬件服务对外开放的多语言框架API。根据系统的组件化裁剪程度，设备支持的API也会有所不同。

**应用层**
应用层包括系统应用和第三方非系统应用。应用由一个或多个FA（Feature Ability）或PA（Particle Ability）组成。其中，FA有UI界面，提供与用户交互的能力；而PA无UI界面，提供后台运行任务的能力以及统一的数据访问抽象。基于FA/PA开发的应用，能够实现特定的业务功能，支持跨设备调度与分发，为用户提供一致、高效的应用体验。



## Ref
[鸿蒙、OpenHarmony、HarmonyOS傻傻的分不清楚。。。看这篇就够了]: https://developer.huawei.com/consumer/cn/forum/topic/0201608876378300239

- HarmonyOS = “鸿蒙操作系统”，或者简称为“鸿蒙OS”是基于 OpenHarmony、AOSP等开源项目的**商用版本**。
- OpenHarmony、AOSP等是**开源版本**，鸿蒙系统的底座。
