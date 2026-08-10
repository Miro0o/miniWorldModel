# Access Control (访问控制)

[TOC]



## Res
### Related Topics


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Access_control

In [physical security](https://en.wikipedia.org/wiki/Physical_security "Physical security") and [information security](https://en.wikipedia.org/wiki/Information_security "Information security"), **access control** (**AC**) is the action of deciding whether a subject should be granted or denied access to an object (for example, a place or a resource). The act of _accessing_ may mean consuming, entering, or using. It is often used interchangeably with [authorization](https://en.wikipedia.org/wiki/Authorization "Authorization"), although the authorization may be granted well in advance of the access control decision.

Access control on digital platforms is also termed [admission control](https://en.wikipedia.org/wiki/Admission_control "Admission control"). The protection of external [databases](https://en.wikipedia.org/wiki/Databases "Databases") is essential to preserve [digital security](https://en.wikipedia.org/wiki/Digital_security "Digital security").

Access control is considered to be a significant aspect of privacy that should be further studied. **Access control policy** (also **access policy**) is part of an organization’s [security policy](https://en.wikipedia.org/wiki/Security_policy "Security policy"). In order to verify the access control policy, organizations use an access control model. General security policies require designing or selecting appropriate [security controls](https://en.wikipedia.org/wiki/Security_controls "Security controls") to satisfy an organization's [risk appetite](https://en.wikipedia.org/wiki/Risk_appetite "Risk appetite") - access policies similarly require the organization to design or select access controls.

Broken access control is often listed as the number one risk in web applications. On the basis of the "[principle of least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege "Principle of least privilege")", consumers should only be authorized to access whatever they need to do their jobs, and nothing more

> Locks and login credentials are two analogous mechanisms of access control.

In the field of access control, there are three major aspects:
- Physical Security
- Computer Security
- Telecommunication Security



## 🎯 Access Control In Physical Security 
> 🔗 https://en.wikipedia.org/wiki/Access_control#Physical_security

Geographical access control may be enforced by personnel (e.g. [border guard](https://en.wikipedia.org/wiki/Border_guard "Border guard"), [bouncer](https://en.wikipedia.org/wiki/Bouncer_\(doorman\)), [ticket](https://en.wikipedia.org/wiki/Ticket_\(admission\) "Ticket (admission)") checker), or with a device such as a [turnstile](https://en.wikipedia.org/wiki/Turnstile "Turnstile"). There may be [fences](https://en.wikipedia.org/wiki/Fence "Fence") to avoid circumventing this access control. An alternative of access control in the strict sense (physically controlling access itself) is a system of checking authorized presence, see e.g. [Ticket controller (transportation)](https://en.wikipedia.org/wiki/Ticket_controller_\(transportation\) "Ticket controller (transportation)"). A variant is exit control, e.g. of a shop (checkout) or a country.

The term access control refers to the practice of restricting entrance to a property, a [building](https://en.wikipedia.org/wiki/Building "Building"), or a room to authorized persons. Physical access control can be achieved by a human (a guard, bouncer, or receptionist), through mechanical means such as locks and keys, or through technological means such as access control systems like the [mantrap](https://en.wikipedia.org/wiki/Mantrap_\(access_control\) "Mantrap (access control)"). Within these environments, physical key management may also be employed as a means of further managing and monitoring access to mechanically keyed areas or access to certain small assets.

Physical access control is a matter of who, where, and when. An access control system determines who is allowed to enter or exit, where they are allowed to exit or enter, and when they are allowed to enter or exit. Historically, this was partially accomplished through keys and locks. When a door is locked, only someone with a key can enter through the door, depending on how the lock is configured. Mechanical locks and keys do not allow restriction of the key holder to specific times or dates. Mechanical locks and keys do not provide records of the key used on any specific door, and the keys can be easily copied or transferred to an unauthorized person. When a mechanical key is lost or the key holder is no longer authorized to use the protected area, the locks must be re-keyed.



## 🎯 Access Control In Computer Security /Information Systems ⭐
> [!links]
> ↗ [Information Flow & Information Flow Control (IFC)](../../../../🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/👚%20SCA%20(Static%20Code%20Analysis)%20&%20SAST/Information%20Flow%20&%20Information%20Flow%20Control%20(IFC)/Information%20Flow%20&%20Information%20Flow%20Control%20(IFC).md)
> 
> ↗ [Security Evaluation Frameworks](../../../../🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🗂️%20Protocol%20&%20Policy%20Security/👩🏻‍⚖️%20Security%20Laws%20&%20Regulations%20&%20Standards/Cybersecurity%20Related%20Standards%20&%20Organizations/Security%20Evaluation%20Frameworks/Security%20Evaluation%20Frameworks.md)
> ↗ [TCB & TCSEC (Trusted Criteria Base & Security Evaluation Criteria)](../../../../🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🗂️%20Protocol%20&%20Policy%20Security/👩🏻‍⚖️%20Security%20Laws%20&%20Regulations%20&%20Standards/Cybersecurity%20Related%20Standards%20&%20Organizations/Security%20Evaluation%20Frameworks/TCB%20&%20TCSEC%20(Trusted%20Criteria%20Base%20&%20Security%20Evaluation%20Criteria).md)
> 
> ↗ [Networking Access Control](../../../../Network%20(&%20Communication)%20Security/Network%20Security%20Mechanisms/🏇%20Network%20Security%20Protocol%20Stacks/Networking%20Access%20Control/Networking%20Access%20Control.md)
> ↗ [NAC (Network Access Control)](../../🛌%20Comprehensive%20Defense%20Systems%20&%20Security%20Products/Network%20&%20Web%20Security%20Products/NAC%20(Network%20Access%20Control).md)
> 
> ↗ [Web Access Control](../../../../Application%20Security/💉%20Web%20Security/🍭%20Web%20Application%20Security%20Mechanisms/Web%20Access%20Control/Web%20Access%20Control.md)
> ↗ [Web Authentication Technologies & Frameworks](../../../../Application%20Security/💉%20Web%20Security/🍭%20Web%20Application%20Security%20Mechanisms/Web%20Access%20Control/Web%20Authentication%20Technologies%20&%20Frameworks/Web%20Authentication%20Technologies%20&%20Frameworks.md)
> - [HTTP Authentication](../../../../../🔑%20CS%20Core/🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x01%20Application%20Layer/🔥%20Web%20(WWW)%20Protocols/HTTP%20(HyperText%20Transfer%20Protocol)/HTTP%20Advanced%20Controls/HTTP%20Authentication.md)
> - [HTTP Access Control (CORS)](../../../../../🔑%20CS%20Core/🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x01%20Application%20Layer/🔥%20Web%20(WWW)%20Protocols/HTTP%20(HyperText%20Transfer%20Protocol)/HTTP%20Advanced%20Controls/HTTP%20Access%20Control%20(CORS).md)
> 
> ↗ [DBMS Access Control](../../../../System%20Security/Database%20System%20Security/DBMS%20Access%20Control/DBMS%20Access%20Control.md)
> ↗ [SQL & Access Control](../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/DSL(Domain%20Specific%20Languages)/Database%20Languages/🦆%20Query%20Languages%20(Data%20Query%20Languages,%20DQL)/🩼%20SQL%20(Structured%20Query%20Language)/SQL%20Data%20Control%20(DCL)/SQL%20&%20Access%20Control/SQL%20&%20Access%20Control.md)
> ↗ [File Sharing & Access Control](../../../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20IO%20System/IO%20Generality%20(via%20Abstraction)/File%20&%20File%20System/File%20Management%20(User%20Level)/File%20Sharing%20&%20Access%20Control/File%20Sharing%20&%20Access%20Control.md)
> 
> ↗ [Physical (& Link) Layer Security Protocols](../../../../Network%20(&%20Communication)%20Security/Network%20Security%20Mechanisms/🏇%20Network%20Security%20Protocol%20Stacks/🔌%20Physical%20(&%20Link)%20Layer%20Security%20Protocols/Physical%20(&%20Link)%20Layer%20Security%20Protocols.md)
> - ↗ [IEEE 802.11 Security Standards & WPA](../../../../Network%20(&%20Communication)%20Security/Network%20Security%20Mechanisms/🏇%20Network%20Security%20Protocol%20Stacks/🔌%20Physical%20(&%20Link)%20Layer%20Security%20Protocols/📌%20Physical%20&%20Link%20Layer%20Standards/IEEE%20802.11%20Security%20Standards%20&%20WPA/IEEE%20802.11%20Security%20Standards%20&%20WPA.md)
> - ↗ [IEEE 802.1x](../../../../Network%20(&%20Communication)%20Security/Network%20Security%20Mechanisms/🏇%20Network%20Security%20Protocol%20Stacks/🔌%20Physical%20(&%20Link)%20Layer%20Security%20Protocols/📌%20Physical%20&%20Link%20Layer%20Standards/IEEE%20802.1x/IEEE%20802.1x.md)

> 🔗 https://en.wikipedia.org/wiki/Computer_access_control

==In [computer security](https://en.wikipedia.org/wiki/Computer_security "Computer security"), general [access control](https://en.wikipedia.org/wiki/Access_control "Access control") includes [identification](https://en.wikipedia.org/wiki/Identity_document "Identity document"), [authorization](https://en.wikipedia.org/wiki/Authorization "Authorization"), [authentication](https://en.wikipedia.org/wiki/Authentication "Authentication"), access approval, and [audit](https://en.wikipedia.org/wiki/Audit_trail "Audit trail").== A more narrow definition of access control would cover only access approval, whereby the system makes a decision to grant or reject an access request from an already authenticated subject, based on what the subject is authorized to access. Authentication and access control are often combined into a single operation, so that access is approved based on successful authentication, or based on an anonymous access token. Authentication methods and tokens include [passwords](https://en.wikipedia.org/wiki/Password "Password"), biometric scans, physical [keys](https://en.wikipedia.org/wiki/Lock_\(security_device\) "Lock (security device)"), [electronic keys](https://en.wikipedia.org/wiki/Electronic_key "Electronic key") and devices, hidden paths, social barriers, and monitoring by humans and automated systems.


> 🔗 https://en.wikipedia.org/wiki/Access_control#Computer_security

In [computer security](https://en.wikipedia.org/wiki/Computer_security "Computer security"), general access control includes [authentication](https://en.wikipedia.org/wiki/Authentication "Authentication"), [authorization](https://en.wikipedia.org/wiki/Authorization "Authorization"), and audit. A more narrow definition of access control would cover only access approval, whereby the system makes a decision to grant or reject an access request from an already authenticated subject, based on what the subject is authorized to access. Authentication and access control are often combined into a single operation, so that access is approved based on successful authentication, or based on an anonymous access token. Authentication methods and tokens include passwords, biometric analysis, physical keys, electronic keys and devices, hidden paths, social barriers, and monitoring by humans and automated systems.

In any access-control model, the entities that can perform actions on the system are called _subjects_, and the entities representing resources to which access may need to be controlled are called _objects_ (see also [Access Control Matrix](https://en.wikipedia.org/wiki/Access_Control_Matrix "Access Control Matrix")). Subjects and objects should both be considered as software entities, rather than as human users: any human users can only have an effect on the system via the software entities that they control.

Although some systems equate subjects with _user IDs_, so that all processes started by a user by default have the same authority, this level of control is not fine-grained enough to satisfy the [principle of least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege "Principle of least privilege"), and arguably is responsible for the prevalence of [malware](https://en.wikipedia.org/wiki/Malware "Malware") in such systems (see [computer insecurity](https://en.wikipedia.org/wiki/Computer_insecurity "Computer insecurity")).

In some models, for example the [object-capability model](https://en.wikipedia.org/wiki/Object-capability_model "Object-capability model"), any software entity can potentially act as both subject and object.

==As of 2014, access-control models tend to fall into one of two classes:== those based on [capabilities](https://en.wikipedia.org/wiki/Capability-based_security "Capability-based security") and those based on [access control lists](https://en.wikipedia.org/wiki/Access_control_lists "Access control lists") (ACLs).
- In a capability-based model, holding an unforgeable reference or _capability_ to an object provides access to the object (roughly analogous to how possession of one's house key grants one access to one's house); access is conveyed to another party by transmitting such a capability over a secure channel
- In an ACL-based model, a subject's access to an object depends on whether its identity appears on a list associated with the object (roughly analogous to how a bouncer at a private party would check an ID to see if a name appears on the guest list); access is conveyed by editing the list. (Different ACL systems have a variety of different conventions regarding who or what is responsible for editing the list and how it is edited.)

Both capability-based and ACL-based models have mechanisms to allow access rights to be granted to all members of a _group_ of subjects (often the group is itself modeled as a subject).

Access control systems provide the essential services of _authorization_, _identification and authentication_ (_I&A_), _access approval_, and _accountability_ where:
- authorization specifies what a subject can do
- identification and authentication ensure that only legitimate subjects can log on to a system
- access approval grants access during operations, by association of users with the resources that they are allowed to access, based on the authorization policy
- accountability identifies what a subject (or all subjects associated with a user) did


---

![](../../../../../../../Assets/Pics/Screenshot%202023-03-26%20at%205.29.39%20PM.png)

访问控制：合法的主体访问合法的客体
- 目标：防止对任何资源（如计算资源、通信资源或信息资源）进行未授权的访问，从而使资源在授权范围内使用，决定用户能做什么，也决定代表一定用户利益的程序能做什么。
	- 为了从整体上维护系统的安全，访问控制应遵循**最小特权原则**，即用户和代表用户的进程只应拥有完成其职责的最小的访问权限的集合，系统不应给用户超过执行任务所需特权以外的特权
- 未授权访问：包括未经授权的使用、泄露、修改、销毁信息以及颁发指令等。
	- **非法用户对系统资源的使用**
	- **合法用户对系统资源的非法使用**
- 作用：机密性、完整性和可用性

![](../../../../../../../Assets/Pics/Screenshot%202023-03-26%20at%205.25.15%20PM.png)

![](../../../../../../../Assets/Pics/Screenshot%202023-03-26%20at%205.30.09%20PM.png)


### AAA Mechanism (Authentication, Authorization, Auditing)
#AAA #authentication #authorization #auditing

![](../../../../../../../Assets/Pics/Screenshot%202023-06-14%20at%202.56.16%20PM.png)


### Access Control Models
↗ [Access Control Models](📌%20Access%20Control%20Models/Access%20Control%20Models.md)

#### High-Layer /Low-Layer AC
访问控制是通过对访问者的有关信息进行检查来限制或禁止访问者使用资源的技术，分为高层访问控制和低层访问控制。
- 高层访问控制：包括身份检查和权限确认，是通过对用户口令、用户权限、资源属性的检查和对比来实现的。
- 低层访问控制：通过对通信协议中的某些特征信息的识别、判断，来禁止或允许用户访问的措施。如在路由器上设置过滤规则进行数据包过滤，就属于低层访问控制。



## 🎯 Access Control In Telecommunication Security 
> 🔗 https://en.wikipedia.org/wiki/Access_control#Telecommunications

In [telecommunications](https://en.wikipedia.org/wiki/Telecommunications "Telecommunications"), the term _access control_ is defined in US [Federal Standard 1037C](https://en.wikipedia.org/wiki/Federal_Standard_1037C "Federal Standard 1037C")[39](https://en.wikipedia.org/wiki/Access_control#cite_note-39) with the following meanings:
1. A [service feature](https://en.wikipedia.org/wiki/Service_feature "Service feature") or technique used to permit or deny use of the components of a communication [system](https://en.wikipedia.org/wiki/System "System").
2. A technique used to define or restrict the rights of individuals or application programs to obtain [data](https://en.wikipedia.org/wiki/Data "Data") from, or place data onto, a [storage device](https://en.wikipedia.org/wiki/Data_storage_device "Data storage device").
3. The definition or restriction of the rights of individuals or application programs to obtain data from, or place data into, a [storage device](https://en.wikipedia.org/wiki/Data_storage_device "Data storage device").
4. The process of limiting access to the resources of an [AIS](https://en.wikipedia.org/wiki/Automated_information_system "Automated information system") (Automated Information System) to authorized users, programs, processes, or other systems.
5. That function performed by the resource controller that allocates system resources to satisfy [user](https://en.wikipedia.org/wiki/User_\(telecommunications\) "User (telecommunications)") requests.

This definition depends on several other technical terms from Federal Standard 1037C.



## Ref
[CISSP Concepts – Trusted Computing Base/ TCEC, ITSEC and Common Criteria]: https://www.cm-alliance.com/cissp/trusted-computing-base/-tcec-itsec-and-common-criteria

[CISP——访问控制（自主访问控制和强制访问控制）]: https://blog.csdn.net/honest_run/article/details/122793277

[身份鉴别与访问控制 | CSDN]: https://blog.csdn.net/PK_666/article/details/122678753

[👍 全网最全网络基础思维导图（38张) | SDNLAB]: https://mp.weixin.qq.com/s/jlstOkjnJtrLKOGtWedebA
![](../../../../../../Assets/Pics/Pasted%20image%2020250316223443.png)
