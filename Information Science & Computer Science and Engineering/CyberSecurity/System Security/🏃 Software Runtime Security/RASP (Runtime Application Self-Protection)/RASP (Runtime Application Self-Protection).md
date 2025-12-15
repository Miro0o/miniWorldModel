# RASP (Runtime Application Self-Protection)

[TOC]



## Res
### Related Topics


### Other Resorces
🏠 https://rasp.baidu.com/
🚧 https://github.com/baidu/openrasp
OpenRASP 是百度安全推出的一款 免费、开源 的应用运行时自我保护产品
随着Web应用攻击手段变得复杂，基于请求特征的防护手段，已经不能满足企业安全防护需求。Gartner在2014年提出了应用自我保护技术（RASP）的概念，即将防护引擎嵌入到应用内部，不再依赖外部防护设备。OpenRASP是该技术的开源实现，可以在不依赖请求特征的情况下，准确的识别代码注入、反序列化等应用异常，很好的弥补了传统设备防护滞后的问题。若要了解更多细节，请阅读 [谢幺 - 百度安全的 OpenRASP 项目，究竟是什么？](http://www.freebuf.com/articles/web/164413.html) 以及 [OpenRASP 最佳实践](https://rasp.baidu.com/download/OpenRASP%20Internals.pdf?from=header\))。



## Intro
> 🔗 https://en.wikipedia.org/wiki/Runtime_application_self-protection

**Runtime application self-protection (RASP)** is a security technology that uses runtime instrumentation to detect and block computer attacks by taking advantage of information from inside the running software. The technology differs from perimeter-based protections such as firewalls, that can only detect and block attacks by using network information without contextual awareness. RASP technology is said to improve the security of software by monitoring its inputs, and blocking those that could allow attacks, while protecting the runtime environment from unwanted changes and tampering. RASP-protected applications rely less on external devices like firewalls to provide runtime security protection. When a threat is detected RASP can prevent exploitation and possibly take other actions, including terminating a user's session, shutting the application down, alerting security personnel and sending a warning to the user. RASP aims to close the gap left by application security testing and network perimeter controls, neither of which have enough insight into real-time data and event flows to either prevent vulnerabilities slipping through the review process or block new threats that were unforeseen during development.

RASP can be integrated as a framework or module that runs in conjunction with a program's codes, libraries and system calls. The technology can also be implemented as a virtualization. RASP is similar to **interactive application security testing (IAST)** (↗ [Software (Program) Analysis Basics](../../../🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Analysis%20&%20Binary%20Engineering/📌%20Software%20(Program)%20Analysis%20Basics/Software%20(Program)%20Analysis%20Basics.md)), the key difference is that IAST is focused on identifying vulnerabilities within the applications and RASPs are focused protecting against cybersecurity attacks that may take advantages of those vulnerabilities or other attack vectors



## Ref
[What is runtime application self-protection (RASP)? | github blog (2024)]: https://github.com/resources/articles/security/what-is-rasp

[RASP - Java Web Security | p4d0rn]: https://p4d0rn.gitbook.io/java/rasp/javaagent
RASP是一种植入到应用程序内部或其运行时环境的安全技术。RASP可将自身注入到应用程序中，与应用程序融为一体，实时监测、阻断攻击，使程序自身拥有自保护的能力。区别于传统的WAF防护，RASP检测更全面精准、不易被绕过、可预防未知漏洞。

JavaAgent是其背后的技术支持

在Java SE 5及后续版本中，开发者可以构建一个独立于应用程序的代理程序（Agent），用来监测和协助运行在JVM上的程序，还能够修改字节码，动态修改已加载或未加载的类以及它们的属性和方法。

[Rasp防御命令执行 - Java Web Security | p4d0rn]: https://p4d0rn.gitbook.io/java/rasp/rasp1
Rasp的大概原理就是，利用Java Agent插桩技术，在JVM加载特定字节码前进行hook，或者重新加载某个类的字节码，对字节码进行修改，在敏感函数执行前添加安全检测的逻辑。

因此重点就放在了类和函数的hook点。

在实际应用中，还得考虑如下因素：
- Rasp对源程序性能的影响
- 插桩后源程序是否还能正常稳定运行
- Rasp依赖与原项目依赖的冲突

![](../../../../../Assets/Pics/Pasted%20image%2020250324220100.png)

