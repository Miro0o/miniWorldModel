# Access Control (访问控制)

[TOC]



## Res
### Related Topics
↗ [🧑🏻‍🦽‍➡️ Information Flow Control (IFC) - Analysis and Security](../../../../🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/👚%20SCA%20(Static%20Code%20Analysis)%20&%20SAST/Data%20Flow%20Analysis/🧑🏻‍🦽‍➡️%20Information%20Flow%20Control%20(IFC)%20-%20Analysis%20and%20Security/🧑🏻‍🦽‍➡️%20Information%20Flow%20Control%20(IFC)%20-%20Analysis%20and%20Security.md)

↗ [Security Evaluation Frameworks](../../../../🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🗂️%20Protocol%20&%20Policy%20Security/👩🏻‍⚖️%20Security%20Laws%20&%20Regulations%20&%20Standards/Cybersecurity%20Related%20Standards%20&%20Organizations/Security%20Evaluation%20Frameworks/Security%20Evaluation%20Frameworks.md)
↗ [TCB & TCSEC (Trusted Criteria Base & Security Evaluation Criteria)](../../../../🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🗂️%20Protocol%20&%20Policy%20Security/👩🏻‍⚖️%20Security%20Laws%20&%20Regulations%20&%20Standards/Cybersecurity%20Related%20Standards%20&%20Organizations/Security%20Evaluation%20Frameworks/TCB%20&%20TCSEC%20(Trusted%20Criteria%20Base%20&%20Security%20Evaluation%20Criteria).md)

↗ [Networking Access Control](../../../../Network%20(&%20Communication)%20Security/Network%20Security%20Mechanisms/🏇%20Network%20Security%20Protocol%20Stacks/Networking%20Access%20Control/Networking%20Access%20Control.md)
↗ [NAC (Network Access Control)](../../🛌%20Comprehensive%20Defense%20Systems%20&%20Security%20Products/Network%20&%20Web%20Security%20Products/NAC%20(Network%20Access%20Control).md)

↗ [Web Access Control](../../../../Application%20Security/💉%20Web%20Security/🍭%20Web%20Application%20Security%20Mechanisms/Web%20Access%20Control/Web%20Access%20Control.md)
↗ [Web Authentication Technologies & Frameworks](../../../../Application%20Security/💉%20Web%20Security/🍭%20Web%20Application%20Security%20Mechanisms/Web%20Access%20Control/Web%20Authentication%20Technologies%20&%20Frameworks/Web%20Authentication%20Technologies%20&%20Frameworks.md)
- [HTTP Authentication](../../../../../🔑%20CS%20Core/🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x01%20Application%20Layer/🔥%20Web%20(WWW)%20Protocols/HTTP%20(HyperText%20Transfer%20Protocol)/HTTP%20Advanced%20Controls/HTTP%20Authentication.md)
- [HTTP Access Control (CORS)](../../../../../🔑%20CS%20Core/🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x01%20Application%20Layer/🔥%20Web%20(WWW)%20Protocols/HTTP%20(HyperText%20Transfer%20Protocol)/HTTP%20Advanced%20Controls/HTTP%20Access%20Control%20(CORS).md)

↗ [DBMS Access Control](../../../../System%20Security/Database%20System%20Security/DBMS%20Access%20Control/DBMS%20Access%20Control.md)
↗ [SQL & Access Control](../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20for%20Specific%20Areas/Database%20Languages/🦆%20Query%20Languages%20(Data%20Query%20Languages,%20DQL)/🩼%20SQL%20(Structured%20Query%20Language)/SQL%20Data%20Control%20(DCL)/SQL%20&%20Access%20Control/SQL%20&%20Access%20Control.md)
↗ [File Sharing & Access Control](../../../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20IO%20System/IO%20Generality%20(via%20Abstraction)/File%20&%20File%20System/File%20Management%20(User%20Level)/File%20Sharing%20&%20Access%20Control/File%20Sharing%20&%20Access%20Control.md)

↗ [Physical (Link) Layer Security Protocols](../../../../Network%20(&%20Communication)%20Security/Network%20Security%20Mechanisms/🏇%20Network%20Security%20Protocol%20Stacks/🔌%20Physical%20(Link)%20Layer%20Security%20Protocols/Physical%20(Link)%20Layer%20Security%20Protocols.md)
- ↗ [IEEE 802.11 Security Standards & WPA](../../../../Network%20(&%20Communication)%20Security/Network%20Security%20Mechanisms/🏇%20Network%20Security%20Protocol%20Stacks/🔌%20Physical%20(Link)%20Layer%20Security%20Protocols/📌%20Physical%20&%20Link%20Layer%20Standards/IEEE%20802.11%20Security%20Standards%20&%20WPA/IEEE%20802.11%20Security%20Standards%20&%20WPA.md)
- ↗ [IEEE 802.1x](../../../../Network%20(&%20Communication)%20Security/Network%20Security%20Mechanisms/🏇%20Network%20Security%20Protocol%20Stacks/🔌%20Physical%20(Link)%20Layer%20Security%20Protocols/📌%20Physical%20&%20Link%20Layer%20Standards/IEEE%20802.1x/IEEE%20802.1x.md)



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
#AAA #authentication #authorization #auditing

![](../../../../../../../Assets/Pics/Screenshot%202023-06-14%20at%202.56.16%20PM.png)



## Ref
[CISSP Concepts – Trusted Computing Base/ TCEC, ITSEC and Common Criteria]: https://www.cm-alliance.com/cissp/trusted-computing-base/-tcec-itsec-and-common-criteria

[CISP——访问控制（自主访问控制和强制访问控制）]: https://blog.csdn.net/honest_run/article/details/122793277

[身份鉴别与访问控制 | CSDN]: https://blog.csdn.net/PK_666/article/details/122678753

[👍 全网最全网络基础思维导图（38张) | SDNLAB]: https://mp.weixin.qq.com/s/jlstOkjnJtrLKOGtWedebA
![](../../../../../../Assets/Pics/Pasted%20image%2020250316223443.png)
