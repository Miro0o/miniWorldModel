# ArkTS

[TOC]



## Res
🏠 https://developer.huawei.com/consumer/cn/arkts/

📂 https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-get-started-0000001504769321-V2

安装最新版[DevEco Studio](https://gitee.com/openharmony/docs/blob/master/zh-cn/release-notes/OpenHarmony-v4.1-beta1.md#%E9%85%8D%E5%A5%97%E5%85%B3%E7%B3%BB)。
请参考[配置开发环境](https://gitee.com/link?target=https%3A%2F%2Fdeveloper.harmonyos.com%2Fcn%2Fdocs%2Fdocumentation%2Fdoc-guides-V3%2Fenvironment_config-0000001052902427-V3)，完成**DevEco Studio**的安装和开发环境配置。


### Related Topics
↗ [OpenHarmony](../../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/国产操作系统%20💦/Huawei%20Operating%20Systems/OpenHarmony/OpenHarmony.md)
↗ [TypeScript](../TypeScript/TypeScript.md)



## Intro
> 🔗 https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-get-started-0000001504769321-V2

ArkTS是HarmonyOS优选的主力应用开发语言。ArkTS围绕应用开发在[TypeScript](https://www.typescriptlang.org/)（简称TS）生态基础上做了进一步扩展，继承了TS的所有特性，是TS的超集。因此，在学习ArkTS语言之前，建议开发者具备TS语言开发能力。

当前，ArkTS在TS的基础上主要扩展了如下能力：
- [基本语法](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-basic-syntax-overview-0000001531611153-V2)：ArkTS定义了声明式UI描述、自定义组件和动态扩展UI元素的能力，再配合ArkUI开发框架中的系统组件及其相关的事件方法、属性方法等共同构成了UI开发的主体。
- [状态管理](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-state-management-overview-0000001524537145-V2)：ArkTS提供了多维度的状态管理机制。在UI开发框架中，与UI相关联的数据可以在组件内使用，也可以在不同组件层级间传递，比如父子组件之间、爷孙组件之间，还可以在应用全局范围内传递或跨设备传递。另外，从数据的传递形式来看，可分为只读的单向传递和可变更的双向传递。开发者可以灵活地利用这些能力来实现数据和UI的联动。
- [渲染控制](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-rendering-control-overview-0000001543911149-V2)：ArkTS提供了渲染控制的能力。条件渲染可根据应用的不同状态，渲染对应状态下的UI内容。循环渲染可从数据源中迭代获取数据，并在每次迭代过程中创建相应的组件。数据懒加载从数据源中按需迭代数据，并在每次迭代过程中创建相应的组件。

未来，ArkTS会结合应用开发/运行的需求持续演进，逐步提供并行和并发能力增强、系统类型增强、分布式开发范式等更多特性。



## Ref

