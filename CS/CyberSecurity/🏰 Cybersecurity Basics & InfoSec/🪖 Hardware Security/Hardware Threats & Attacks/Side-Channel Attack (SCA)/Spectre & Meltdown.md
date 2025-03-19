# Spectre & Meltdown

[TOC]



## Res
### Related Topics


### Other Resources
https://spectreattack.com/

Lipp, Moritz, Michael Schwarz, Daniel Gruss, Thomas Prescher, Werner Haas, Stefan Mangard, Paul Kocher, Daniel Genkin, Yuval Yarom, and Mike Hamburg. "Meltdown." _arXiv preprint arXiv:1801.01207_ (2018).
https://arxiv.org/abs/1801.01207

Kocher, Paul, Jann Horn, Anders Fogh, Daniel Genkin, Daniel Gruss, Werner Haas, Mike Hamburg et al. "Spectre attacks: Exploiting speculative execution." _Communications of the ACM_ 63, no. 7 (2020): 93-101.
https://arxiv.org/abs/1801.01203



## Intro
On January 3rd [Project Zero revealed](https://googleprojectzero.blogspot.com/2018/01/reading-privileged-memory-with-side.html) vulnerabilities in modern CPUs that a process can use to read (at worst) arbitrary memory — including memory that doesn’t belong to that process. These vulnerabilities have been named [Spectre](https://spectreattack.com/spectre.pdf) and [Meltdown](https://meltdownattack.com/meltdown.pdf).



## Ref
[👍 科普幽灵(Spectre) 与熔断(Meltdown)以及自测方法]: https://blog.sciencenet.cn/blog-684007-1093420.html

刚在网上看了一些文章试图解释最近发现的计算机处理器硬件安全漏洞，有些文章笼统把幽灵(Spectre) 与熔断(Meltdown) 混为一谈。其实这两者非常不同。
- 熔断是 INTEL 特有的缺陷，是 INTEL处理器设计中允许猜测性非法访问的严重错误，熔断漏洞很容易被利用。
- 幽灵(Spectre) 缺陷则是利用所谓间接分叉预测 （indirect branch prediction --- IBP）。幽灵缺陷存在许多不确定因素，要利用相对困难许多。

[熔断漏洞原理与解决方案]: https://www.cnblogs.com/kvm-qemu/articles/8284508.html

[👍 浅谈熔断和幽灵]: https://www.wenhui.space/docs/08-ic-design/cpu/meltdown-and-spectre/#%E9%87%8D%E8%A6%81%E6%A6%82%E5%BF%B5
![](../../../../../../Assets/Pics/Pasted%20image%2020240105135937.png)

[Meltdown/Spectre | google blog (2018)]: https://developer.chrome.com/blog/meltdown-spectre
As a **user browsing the web**, you should make sure you keep your operating system and your browser updated. In addition, Chrome users can consider enabling [Site Isolation](https://support.google.com/chrome/answer/7623121).

If you are a **web developer**, the [Chrome team advises](https://www.chromium.org/Home/chromium-security/ssca):
- Where possible, prevent cookies from entering the renderer process' memory by using the `SameSite` and `HTTPOnly` cookie attributes, and by avoiding reading from `document.cookie`.
- Make sure your MIME types are correct and specify an `X-Content-Type-Options: nosniff` header for any URLs with user-specific or sensitive content, to get the most out of [Cross-Origin Read Blocking](https://developer.chrome.com/web/updates/2018/07/site-isolation#corb) for users who have Site Isolation enabled.
- Enable [Site Isolation](https://www.chromium.org/Home/chromium-security/site-isolation) and [let the Chrome team know](http://crbug.com/new) if it causes problems for your site.

If you are wondering _why_ these steps help, read on!
