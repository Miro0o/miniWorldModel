# Blad

[TOC]



## Res
🏠 https://github.com/chen3feng/blade-build



## Intro
> Blade is a powerful build system from Tencent, supports many mainstream programming languages, such as C/C++, java, scala, python, protobuf...

Blade 是一个现代构建系统，期望的目标是强大而好用，把程序员从构建的繁琐中解放出来。

Blade主要定位于linux下的大型C++项目，密切配合研发流程，比如单元测试，持续集成，覆盖率统计等。 但像unix下的文本过滤程序一样，保持相对的独立性，可以单独运行。目前重点支持i386/x86_64 Linux，未来可以考虑支持其他的类Unix系统。

在[腾讯公司“台风”云计算平台](http://storage.it168.com/a2011/1203/1283/000001283196.shtml)开发过程中，为了解决 GNU Make， Autotools 的难用和繁琐的问题，参考[Google工程博客上的一些文章](http://google-engtools.blogspot.hk/2011/08/build-in-cloud-how-build-system-works.html)，我们开发了这个全新的构建系统，整个系统基于多个声明式的构建脚本，在构建脚本里， 只需要声明要构建什么目标，目标的源代码，以及其直接依赖的其它目标，不需要说明如何构建。大大降低了使用难度，提高了开发效率。

2012年，Blade对外开源，成为腾讯公司最早的开源项目。目前已经广泛应用于腾讯广告系统、微信后台服务、腾讯游戏后台服务、腾讯基础架构，以及小米，百度，爱奇艺等其他公司，也收到了来自公司内外的多个Pull Requests。

代码开源后，托管到googlecode上，因后来googlecode关闭，迁移到chen3feng个人git仓库继续维护。

- Blade 是受 Google 官方博客发表的这篇文章启发而开发的： [云构建：构建系统是如何工作的](http://google-engtools.blogspot.hk/2011/08/build-in-cloud-how-build-system-works.html)。 后来在 2015 年，他们把部分重写后系统的以 `bazel` 的新名字开源。
- Blade 生成 [Ninja](https://ninja-build.org/) 脚本进行构建，因此 Blade 的运行还需要依赖 Ninja。



## Ref

