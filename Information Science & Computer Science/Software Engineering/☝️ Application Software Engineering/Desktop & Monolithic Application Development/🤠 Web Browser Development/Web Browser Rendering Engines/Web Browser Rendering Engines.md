# Web Browser Rendering Engines

[TOC]



## Res
### Related Topics



## Intro



## Ref
[五大主流浏览器及四大内核 - 小胖梅的文章 - 知乎]: https://zhuanlan.zhihu.com/p/99777087

浏览器最重要或者说核心的部分是“Rendering Engine”，可大概译为“渲染引擎”，不过我们一般习惯将之称为“浏览器内核”。负责对网页语法的解释（如标准通用标记语言下的一个应用HTML、JavaScript）并渲染（显示）网页。 所以，通常所谓的浏览器内核也就是浏览器所采用的渲染引擎，渲染引擎决定了浏览器如何显示网页的内容以及页面的格式信息。不同的浏览器内核对网页编写语法的解释也有不同，因此同一网页在不同的内核的浏览器里的渲染（显示）效果也可能不同，这也是网页编写者需要在不同内核的浏览器中测试网页显示效果的原因。

**浏览器内核简介**
- IE/Edge：微软的IE浏览器浏览器更新至IE10后，伴随着WIN10系统的上市，迁移到了全新的浏览器Edge。除了JS引擎沿用之前IE9就开始使用的查克拉(Chakra)，渲染引擎使用了新的内核EdgeHTML（本质上不是对Trident的完全推翻重建，而是在Trident基础上删除了过时的旧技术支持的代码，扩展和优化了对新的技术的支持，所以被看做是全新的内核）
- Safari：Safari自2003年面世，就一直是苹果公司的产品自带的浏览器，它使用的是苹果研发和开源的Webkit引擎。Webkit引擎包含WebCore排版引擎及JavaScriptCore解析引擎，均是从KDE的KHTML及KJS引擎衍生而来。Webkit2发布于2010年，它实现了元件的抽象画，提高了元件的重复利用效率，提供了更加干净的网页渲染和更高效的渲染效率。另外，Webkit也是苹果Mac OS X系统引擎框架版本的名称，主要用于Safari、Dashboard、Mail。
- Chrome：提到Chrome浏览器，一般人会认为使用的Webkit内核，这种说法不完全准确。Chrome发布于2008年，使用的渲染内核是Chromium，它是fork自Webkit，但把Webkit梳理得更有条理可读性更高，效率提升明显。2013年，由于Webkit2和Chromium在沙箱设计上的冲突，谷歌联手Opera自研和发布了Blink引擎，逐步脱离了Webkit的影响。所以，可以这么认为：Chromium扩展自Webkit止于Webkit2，其后Chrome切换到了Blink引擎。另外，Chrome的JS引擎使用的V8引擎，应该算是最著名和优秀的开源JS引擎，大名鼎鼎的Node.js就是选用V8作为底层架构。
- Firefox：火狐的内核Gecko也是开源引擎，任何程序员都能为其提供扩展和建议。火狐的JS引擎历经SpiderMonkey、TraceMonkey到现在的JaegerMonkey。其中JaegerMonkey部分技术借鉴了V8、JSCore和Webkit，算是集思广益。
- Opera：Opera在2013年V12.16之前使用的是Opera Software公司开发的Presto引擎，之后连同谷歌研发和选择Blink作为Opera浏览器的排版内核。

**国内浏览器情况**
> 国内浏览器厂商（QQ、2345、搜狗、猎豹、UC、360）也有一定的市场占有率。且大多数为双核

总结国内厂商内核来看，一般为三类：
一、使用的Trident单核，如：2345、世界之窗；
二、使用Trident+Webkit/Blink双核，如：qq、UC、猎豹、360、百度；
三、使用Webkit/Blink单核，如：搜狗、遨游。

双核浏览器通过WebKit内核来访问一些不需要进行网上交易的网站，使用起来速度更快更方便;双核浏览器在进行支付系统或者是网上银行的访问时，则使用的是Trident内核。这就是双核浏览器的高速模式和兼容模式。双核浏览器是一个不仅仅具有ie浏览器内核同时兼容非ie浏览器内核的浏览器，可以让用户在浏览器当中体验不同的需求。
