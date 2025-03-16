# Access Control (访问控制)

[TOC]



## Res
### Related Topics
↗ [Security Evaluation Frameworks](../../../../🏰%20Cybersecurity%20Basics%20&%20InfoSec/👩🏻‍⚖️%20Security%20Laws%20&%20Regulations%20&%20Standards/Cybersecurity%20Related%20Standards%20&%20Organizations/Security%20Evaluation%20Frameworks/Security%20Evaluation%20Frameworks.md)
↗ [TCB & TCSEC (Trusted Criteria Base & Security Evaluation Criteria)](../../../../🏰%20Cybersecurity%20Basics%20&%20InfoSec/👩🏻‍⚖️%20Security%20Laws%20&%20Regulations%20&%20Standards/Cybersecurity%20Related%20Standards%20&%20Organizations/Security%20Evaluation%20Frameworks/TCB%20&%20TCSEC%20(Trusted%20Criteria%20Base%20&%20Security%20Evaluation%20Criteria).md)

↗ [NAC (Network Access Control)](../../🛌%20Comprehensive%20Defense%20Systems%20&%20Security%20Products/Network%20&%20Web%20Security%20Products/NAC%20(Network%20Access%20Control).md)
↗ [Web Access Control](../../../../Application%20Security/💉%20Web%20Security/🍭%20Web%20Application%20Security%20Mechanisms/Web%20Access%20Control/Web%20Access%20Control.md)



## Intro
![](../../../../../../../Assets/Pics/Screenshot%202023-03-26%20at%205.29.39%20PM.png)

访问控制：合法的主体访问合法的客体
- 目标：防止对任何资源（如计算资源、通信资源或信息资源）进行未授权的访问，从而使资源在授权范围内使用，决定用户能做什么，也决定代表一定用户利益的程序能做什么。
	- 为了从整体上维护系统的安全，访问控制应遵循**最小特权原则**，即用户和代表用户的进程只应拥有完成其职责的最小的访问权限的集合，系统不应给用户超过执行任务所需特权以外的特权
- 未授权访问：包括未经授权的使用、泄露、修改、销毁信息以及颁发指令等。
	- **非法用户对系统资源的使用**
	- **合法用户对系统资源的非法使用**
- 作用：机密性、完整性和可用性

![](../../../../../../../Assets/Pics/Screenshot%202023-03-26%20at%205.25.15%20PM.png)

> 🔗 https://en.wikipedia.org/wiki/Access_control

In the fields of physical security and information security, **access control** (**AC**) is the selective restriction of access to a place or other resource, while access management describes the process. The act of *accessing* may mean consuming, entering, or using. Permission to access a resource is called *authorization*.

> Locks and login credentials are two analogous mechanisms of access control.

In the field of access control, there are three major aspects:
- Physical Security
- Computer Security
- Telecommunication Security

![](../../../../../../../Assets/Pics/Screenshot%202023-03-26%20at%205.30.09%20PM.png)



## Access Control (AC) Principles
### Access Control Models
↗ [Access Control Models](📌%20Access%20Control%20Models/Access%20Control%20Models.md)


### Access Control Mechanisms /Taxonomy
#### High-Layer /Low-Layer AC
访问控制是通过对访问者的有关信息进行检查来限制或禁止访问者使用资源的技术，分为高层访问控制和低层访问控制。
- 高层访问控制：包括身份检查和权限确认，是通过对用户口令、用户权限、资源属性的检查和对比来实现的。
- 低层访问控制：通过对通信协议中的某些特征信息的识别、判断，来禁止或允许用户访问的措施。如在路由器上设置过滤规则进行数据包过滤，就属于低层访问控制。
#### AAA Mechanism (Authentication, Authorization, Auditing)
![](../../../../../../../Assets/Pics/Screenshot%202023-06-14%20at%202.56.16%20PM.png)



## Ref
[CISSP Concepts – Trusted Computing Base/ TCEC, ITSEC and Common Criteria]: https://www.cm-alliance.com/cissp/trusted-computing-base/-tcec-itsec-and-common-criteria

[CISP——访问控制（自主访问控制和强制访问控制）]: https://blog.csdn.net/honest_run/article/details/122793277

[身份鉴别与访问控制 | CSDN]: https://blog.csdn.net/PK_666/article/details/122678753

[👍 全网最全网络基础思维导图（38张) | SDNLAB]: https://mp.weixin.qq.com/s/jlstOkjnJtrLKOGtWedebA
![](../../../../../../Assets/Pics/Pasted%20image%2020250316223443.png)
