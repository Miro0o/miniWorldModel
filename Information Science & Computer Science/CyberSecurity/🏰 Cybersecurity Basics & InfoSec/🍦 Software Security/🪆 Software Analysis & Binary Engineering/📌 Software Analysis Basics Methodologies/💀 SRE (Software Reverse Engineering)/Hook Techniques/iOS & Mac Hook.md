# iOS & Mac Hook

[TOC]



## Res
### Related Topics
↗ [Apple Operating Systems](../../../../../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Apple%20Operating%20Systems/Apple%20Operating%20Systems.md)
- ↗ [iOS](../../../../../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Apple%20Operating%20Systems/iOS/iOS.md)
- ↗ [macOS (Derived From UNIX Family)](../../../../../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Apple%20Operating%20Systems/macOS%20(Derived%20From%20UNIX%20Family)/macOS%20(Derived%20From%20UNIX%20Family).md)
↗ [MacOS Security](../../../../../../System%20Security/🧸%20Operating%20System%20Security/🍎%20MacOS%20Security/MacOS%20Security.md)


### Other Resources
https://www.cydiafree.com
If you are an iOS lover, you know the importance and advantages of **Cydia**. Cydia is a third party app store consist of many jailbreak apps, tweaks, themes, packages, settings and many more things.   



## Intro



## Ref
[【iOS逆向】4种常用Hook的原理分析及示例 | 看雪学苑]: https://juejin.cn/post/7091850259483066376
- **OC runtime原理&示例**
	- runtime是iOS端的运行机制，在这种机制下，苹果给开发者提供了相关API，供开发者实现方法交换，通过这个方法`method_exchangeImplementations`即可实现方法交换。
	- 这种能力的使用场景很多：全埋点，对于老代码中某个方法的全局修改。
- **CaptainHook原理&示例**
	- Captainhook是一个头文件，由很多宏定义构成，是越狱机上的一个hook方案，配合MonkeyDev项目可以快速编写Hook。
	- **mobilesubstrate**分为`MobileHooker`、`MobileLoader`以及`Safe mode` `MobileHooker`，是`CydiaSubstrate`的一个组件，对`C`和`Objective-C`均有效, `MobileHooker`组件主要提供了`MSHookMessageEx`和`MSHookFunction`两个函数针对不同语言的`inline hook`功能，其中`MSHookMessageEx`负责用来hook `Objective-C`函数，`MSHookFunction`负责用来hook `C/C++`函数
	- `MSHookMessageEx`本质还是利用runtime去获取某个类的一些信息，然后`class_replaceMethod`。
```c
static inline Class CHLoadClass_(CHClassDeclaration_ *declaration, Class value) {
	declaration->class_ = value;//自己本身 
	declaration->metaClass_ = object_getClass(value);//他的isa地址 
	declaration->superClass_ = class_getSuperclass(value);//从父类开始查找value（也可以说是symbol） 
	return value; 
}
```
- **FishHook原理&示例**
	- C语言是静态的，调用某个函数跳转到某个地址，这是在编译链接时就决定了。
	- 如果调用的C函数是动态库中的，那么在启动前是不知道这个函数的地址的，这个地址是运行时算出来的，既然是运行时算的，那么就有机会操作。
	- 在macho文件DATA段中`__la_symbol_ptr`懒加载指针表，表中的指针一开始都指向`__stub_helper`,第一次调用才绑定值。
	- fishhook通过遍历`__la_symbol_ptr`,找到第i个元素对应的名字，就可以将`__la_symbol_ptr`中第i个元素改掉，完成hook。
- **Dobbyx原理&示例**
	- ![](../../../../../../../../Assets/Pics/Pasted%20image%2020240831173426.png)

[🤔 无埋点核心技术：iOS Hook 在字节的实践经验 | infoQ]: https://www.infoq.cn/article/dxyqidethi8did65q1df
[iOS中几种hook代码的方法 | CSDN]: http://t.csdnimg.cn/H9zNU
1. Method Swizzle
2. inline hook: dobby
3. FaceBook的fishHook

