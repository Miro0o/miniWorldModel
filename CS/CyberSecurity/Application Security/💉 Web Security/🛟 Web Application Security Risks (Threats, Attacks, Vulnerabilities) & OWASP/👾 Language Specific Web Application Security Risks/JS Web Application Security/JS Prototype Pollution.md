# JS Prototype Pollution

[TOC]



## Res
### Related Topics



## Intro
> 🔗 https://wiki.wgpsec.org/knowledge/ctf/js-prototype-chain-pollution.html

js 是由对象组成的，对象与对象之间存在着继承关系。每个对象都有一个指向它的原型的内部链接，而这个原型对象又有他自己的原型，直到 null 为止。整体看来就是多个对象层层继承，实例对象的原型链接形成了一条链，也就是 js 的原型链。在 js 中每个函数都有一个 prototype 属性，而每个对象中也有一个 **proto** 属性用来指向实例对象的原型。而每个原型也都有一个 constructor 属性执行相关联的构造函数，我们就是通过构造函数生成实例化的对象。

![](../../../../../../../Assets/Pics/Pasted%20image%2020250326205058.png)

由于对象之间存在继承关系，所以当我们要使用或者输出一个变量就会通过原型链向上搜索，当上层没有就会再向上上层搜索，直到指向 null，若此时还未找到就会返回 undefined。这幅图的原型链是 cat->Cat.protype->Object.prototype->null。而如果修改了一个对象的原型，那么会影响所有来自于这个原型的对象，这就是原型链污染。原型链污染通常出现在对象，数组的键名或者属性名可控，同时是赋值语句的情况下 ( 通常使用 json 传值 )

可以使用 npm audit 检查漏洞，（npm audit 是 npm 6新增的一个命令，可以允许开发人员分析复杂的代码并查明特定的漏洞）。其中常见的危险函数有
- merge()
- clone()
- 以及一些插件，例如比赛中出现的Ciscn2020 初赛 set-value，网鼎杯2020 青龙组 undefsafe 版本<2.0.3


## Ref
[What is prototype pollution? | PortSwigger]: https://portswigger.net/web-security/prototype-pollution
[JavaScript prototypes and inheritance | PortSwigger]: https://portswigger.net/web-security/prototype-pollution/javascript-prototypes-and-inheritance
![](../../../../../../../Assets/Pics/Pasted%20image%2020250326204915.png)

[深入理解 JavaScript Prototype 污染攻击 (2019) | PHITHON]: https://www.leavesongs.com/PENETRATION/javascript-prototype-pollution-attack.html

[nodejs原型链污染 | 狼组安全]: https://wiki.wgpsec.org/knowledge/ctf/js-prototype-chain-pollution.html

