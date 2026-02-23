# Cybersecurity Architectures

[TOC]



## Res
### Related Topics


### Other Resources
📄 注册信息安全专业人员知识体系大纲（**CISE/CISO**）
版本：4.2
生效日期：2019 年3 月1 日

本大纲从我国国情出发，结合我国网络基础设施和重要信息系统安全保障的实际需求，以知识体系的全面性和实用性为原则，涵盖了CISP 中的CISE、CISO两类注册人员和CISM 需要掌握的知识要点，是CISM 和CISE/CISO 教材编制、讲师授课、学员学习以及考试命题的重要依据。

![|400](../../../Assets/Pics/Screenshot%202024-05-20%20at%201.46.37%20PM.png)



## Intro
网络空间安全的总需求是物理安全、网络安全、信息内容安全、应用系统安全和安全管理的总和，安全的最终目标是确保信息的机密性、完整性、可用性、可控性和抗抵赖性，以及信息系统主体(包括用户、团体、社会和国家)对信息资源的控制。

完整的网络空间安全体系框架由技术体系、组织机构体系和管理体系共同构建。

![](../../../Assets/Pics/Screenshot%202023-10-30%20at%209.40.46AM.png)

![risk_management_and_software_security.excalidraw | 1000](../../../Assets/Illustrations/Computer%20Security/risk_management_and_software_security.excalidraw.md)
<small>Computer Security & Risk Management</small>



## 🎯 网络空间安全技术体系与技术机制
↗ [Cybersecurity Basics & InfoSec](Cybersecurity%20Basics%20&%20InfoSec.md)
↗ [Software Security](🍦%20Software%20Security/Software%20Security.md)
↗ [Hardware Security](🪖%20Hardware%20Security/Hardware%20Security.md)

掌握网络空间安全风险状态和分布情况的变化规律，提出安全需求，建立起具有自适应能力的信息安全模型，从而驾驭风险，使网络空间安全风险被控制在可接受的最小限度内，并渐近于零风险。

安全与实现的方便性是矛盾的对立。必须牺牲方便性求得安全，我们必须在这两者之间找出平衡点，在可接受的安全状况下，尽力方便用户的使用。

![](../../../Assets/Pics/Screenshot%202023-10-30%20at%209.21.17AM.png)

![](../../../Assets/Pics/Screenshot%202023-10-30%20at%209.45.58AM.png)


### 🏛️ Cybersecurity System & Architecture (网络空间安全体系结构) （技术体系）
1）**物理安全技术（物理层安全）**：该层次的安全包括通信线路的安全、物理设备的安全、机房的安全等。物理层的安全主要体现在通信线路的可靠性（线路备份、网管软件、传输介质），软硬件设备安全性（替换设备、拆卸设备、增加设备），设备的备份，防灾害能力，防干扰能力，设备的运行环境（温度、湿度、烟尘），不间断电源保障。

2）**操作系统安全技术（系统层安全）**：该层次的安全问题来自网络内使用的操作系统的安全，如Windows系列、Unix等。主要表现在三个方面：一是操作系统本身的缺陷带来的威胁，主要包括身份鉴别、访问控制、系统漏洞等；二是对操作系统的安全配置问题；三是病毒对操作系统的威胁

3）**网络安全技术（网络层安全）**：主要体现在网络方面的安全性，包括网络层身份鉴别、网络资源的访问控制、数据传输的机密性与完整性、远程接入的安全、域名系统的安全、路由系统的安全、入侵检测、网络设施防病毒等。

4）**应用安全技术（应用层安全）**：主要由提供服务所采用的应用软件和数据的安全性产生，包括Web服务、电子邮件系统、DNS等。此外，还包括病毒对系统的威胁。

4+）**数据安全（？）**

5）**管理安全性（管理层安全）**：安全管理包括安全技术和设备的管理、安全管理制度、部门与人员的组织规则等。管理的制度化极大程度地影响着整个网络的安全，严格的安全管理制度、明确的部门安全职责划分、合理的人员角色配置都可以在很大程度上降低其他层次的安全漏洞。
#### 1️⃣ $ISC^2$ Information Security Architecture
根据OSI安全体系结构**GB/T 18794**，提出**安全服务(即安全功能)** 和 **安全机制**，在此基础上提出**网络空间安全体系框架**，结合$ICS^2$提出的网络空间安全5重屏障，划定网络空间安全技术类型，形成相应的信息安全产品。

![](../../../Assets/Pics/Screenshot%202023-11-01%20at%201.51.36PM.png)
#### 2️⃣ OSI Security Architecture（ITU-T, X.800）
> 🔗 https://rcet.org.in/uploads/academics/regulation2021/rohini_59533829499.pdf
> 
> 🔗 https://www.uio.no/studier/emner/matnat/ifi/IN5080/v22/dokumenter/x800.pdf (x.800 Standards Copy)
> 
> 🔗 https://en.wikipedia.org/wiki/Security_service_(telecommunication) (wiki pedia)

The OSI Security Architecture
- ITU-T Recommendation X.800, Security Architecture for OSI, defines such a systematicapproach. The OSI security architecture is useful to managers as a way of organizing the task ofproviding security.
- OSI : Open Systems Interconnection
- ITU-T : The International Telecommunication Union (ITU) Telecommunication Standardization Sector (ITU-T) is a United Nations sponsored agency that develops standards.

The OSI security architecture focuses on security attacks, mechanisms, and services. These can be defined briefly as follows:
- **Security attack**: Any action that compromises the security of information owned by an organization.
- **Security mechanism**: A process (or a device incorporating such a process) that is designed to detect, prevent, or recover from a security attack.
- **Security service**: A processing or communication service that enhances the security of the data processing systems and the information transfers of an organization. The services are intended to counter security attacks, and they make use of one or more security mechanisms to provide the service.

![](../../../Assets/Pics/Pasted%20image%2020231008171558.png)

![](../../../Assets/Pics/Screenshot%202023-10-30%20at%209.33.41AM.png)
##### Security Attack /Threat
Any action that compromises the security of information owned by an
organization.
##### Security Service （安全服务）
安全服务: 就是加强数据处理系统和信息传输的安全性的一类服务，其目的在于利用一种或多种安全机制保障信息系统安全或信息系统安全可靠运行。

Security service: A processing or communication service that enhances the security of the data processing systems and the information transfers of an organization. The services are intended to counter security attacks, and they make use of one or more security mechanisms to provide the service.

> Recall 
> ↗ [Cybersecurity Basics & InfoSec /🛡️ InfoSec Principles & Objectives](Cybersecurity%20Basics%20&%20InfoSec.md#🛡️%20InfoSec%20Principles%20&%20Objectives)
> ↗ [Cybersecurity Threats & Attacks](../⛈️%20Risk%20Management/🐗%20Cybersecurity%20Threats%20&%20Attacks/Cybersecurity%20Threats%20&%20Attacks.md)

**X.800** defines a security service as a service provided by a protocol layer of communicating open systems, which ensures adequate security of the systems or of data transfers.

X.800 divides these services into 5 categories and 14 specific services:
1. **Authentication (Availability)** (who created or sent the data)  -- assurance that the communicating entity is the one that it claims to be. (↗ [Authentication (身份鉴别)](../⛈️%20Risk%20Management/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Identity%20&%20Access%20Management%20(IAM)/Access%20Control%20(访问控制)/Authentication%20(身份鉴别)/Authentication%20(身份鉴别).md))
	1. The process of proving one's identity. (鉴别服务提供对通信中的对等实体和数据来源的鉴别)
		1. Peer Entity Authentication (对等实体鉴别)
			1. Used in association with a logical connection to provide confidence in the identity of the entities connected.
		2. Data Origin Authentication (数据原发鉴别)
			1. In a connectionless transfer, provides assurance that the source of received data is as claimed.
2. **Access control (Availability)** (prevent misuse of resources) (↗ [Access Control (访问控制)](../⛈️%20Risk%20Management/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Identity%20&%20Access%20Management%20(IAM)/Access%20Control%20(访问控制)/Access%20Control%20(访问控制).md))
	1. Prevention of the unauthorized use of a resource. (该服务提供保护以对抗开放系统互连可访问资源的非授权使用。)
3. **Data Confidentiality (Privacy)** ( ↗ [CIA Threats & Countermeasures /1️⃣ Data Confidentiality](../⛈️%20Risk%20Management/🐗%20Cybersecurity%20Threats%20&%20Attacks/CIA%20Threats%20&%20Countermeasures.md#1️⃣%20Data%20Confidentiality))
	1.  Privacy - Ensuring that no one can read the message except the intended receiver. (该服务对数据提供保护使之不被非授权地泄漏。)
		1. Connection Confidentiality (连接机密性)
		2. Connectionless Confidentiality (无连接机密)
		3. Selective-Field Confidentiality (选择字段机密性)
		4. Traffic Flow Confidentiality (业务机密性)
4. **Data Integrity** (has not been altered) (↗ [CIA Threats & Countermeasures /2️⃣ Data Integirty (and Authenticity)](../⛈️%20Risk%20Management/🐗%20Cybersecurity%20Threats%20&%20Attacks/CIA%20Threats%20&%20Countermeasures.md#2️⃣%20Data%20Integrity%20(and%20Authenticity)))
	1. Assuring the receiver that the received message has not been altered in any way from the original. (该服务可以针对有连接或无连接的条件下，对数据进行完整性检验。在连接状态下，当数据遭到任何篡改、插入、删除时还可进行补救或恢复。)
		1. Connection Integrity with Recovery (可恢复的连接完整性)
		2. Connection Integrity without Recovery (不可恢复的连接完整性)
		3. Selective-Field Connection Integrity (选择字段的连接完整性)
		4. Connectionless Integrity (无连接完整性)
		5. Selective-Field Connectionless Integrity (选择字段的无连接完整性)
5. **Non-repudiation** (the order is final) (↗ [CIA Threats & Countermeasures /4️⃣ Non-Repudiation](../⛈️%20Risk%20Management/🐗%20Cybersecurity%20Threats%20&%20Attacks/CIA%20Threats%20&%20Countermeasures.md#4️⃣%20Non-Repudiation))
	1. protection against denial by one of the parties in a communication. A mechanism to prove that the sender really sent this message. (对发送者来说，数据发送将被证据保留，并将这一证据提供给接收者，以此证明发送者的发送**行为**。同样，接收者接收数据后将产生交付证据并送回原发送者，接收者不能否认收到过这些**数据**。)
		1. Non-repudiation, Origin (数据源证明的抗抵赖)
		2. Non-repudiation, Destination (交付证明的抗抵赖)


Security Service 🆚 TCP/IP
![](../../../Assets/Pics/Screenshot%202023-11-01%20at%201.57.28PM.png)

Security Service 🆚 OSI 7 Layers
tbd..
##### Security Mechanism /Technologies（安全机制，安全技术）
安全机制：是指用来保护或保障信息系统安全的一种或一类技术的总称。

Security mechanism: A process (or a device incorporating such a process) that is designed to detect, prevent, or recover from a security attack.

**See section below "Cybersecurity Technologies" 👇**


### 📡 Cybersecurity Technologies（网络空间安全技术）（技术机制/安全技术/安全机制）

> This notion is proposed by OSI Security Architecture

Cybersecurity Core Knowledge Domain:
↗ [Cybersecurity Basics & InfoSec](Cybersecurity%20Basics%20&%20InfoSec.md)
↗ [Cryptology & Secure Communication](../🚬%20Cryptology%20&%20Secure%20Communication/Cryptology%20&%20Secure%20Communication.md)


Cyber Security Extended Knowledge Domain:
↗ [Data Security](../Data%20Security/Data%20Security.md)
↗ [Application Security](../Application%20Security/Application%20Security.md)
↗ [Network (& Communication) Security](../Network%20(&%20Communication)%20Security/Network%20(&%20Communication)%20Security.md)
↗ [System Security](../System%20Security/System%20Security.md)
↗ [Physical Security](../Physical%20Security/Physical%20Security.md)


Cybersecurity Mechanism: (网络空间安全技术机制)

![](../../../Assets/Pics/Screenshot%202023-10-30%20at%2010.37.48AM.png)

1. **Specific Security Mechanisms**:
	1. **Encipherment** (↗ [Modern Cryptography](../🚬%20Cryptology%20&%20Secure%20Communication/🤐%20Cryptography/Modern%20Cryptography/Modern%20Cryptography.md))
		1. The use of mathematical algorithms to transform data into a form that is not readily intelligible. The transformation and subsequent recovery of the data depend on an algorithm and zero or more encryption keys.
	2. **Digital Signature** (↗ [Digital Signature & DSA](../🚬%20Cryptology%20&%20Secure%20Communication/🤐%20Cryptography/Modern%20Cryptography/Cryptographic%20Techniques%20for%20Integrity%20&%20Authentication/Message%20Authentication%20(报文鉴别，消息鉴别)/Digital%20Signature%20&%20DSA/Digital%20Signature%20&%20DSA.md))
		1. Data appended to, or a cryptographic transformation of, a data unit that allows a recipient of the data unit to prove the source and integrity of the data unit and protect against forgery (e.g., by the recipient).
	3. **Access Control** (↗ [Access Control (访问控制)](../⛈️%20Risk%20Management/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Identity%20&%20Access%20Management%20(IAM)/Access%20Control%20(访问控制)/Access%20Control%20(访问控制).md))
		1. A variety of mechanisms that enforce access rights to resources.
	4. **Data Integrity** (↗ [CIA Threats & Countermeasures /2️⃣ Data Integrity (and Authenticity)](../⛈️%20Risk%20Management/🐗%20Cybersecurity%20Threats%20&%20Attacks/CIA%20Threats%20&%20Countermeasures.md#2️⃣%20Data%20Integrity%20(and%20Authenticity)) )
		1. A variety of mechanisms used to assure the integrity of a data unit or stream of data units.
		2. 数据据完整性是防止非法实体对交换数据的修改、插入、替换和删除，或者如果被修改、插入、替换和删除时可以被检测出来。数据完整性可以通过消息认证模式来保证。
			1. 通过密码学提供完整性
			2. 通过上下文提供完整性
			3. 通过探测和确认提供完整性
			4. 通过阻止提供完整性
	5. **Authentication Exchange** (↗ [Identification (身份证明)](../⛈️%20Risk%20Management/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Identity%20&%20Access%20Management%20(IAM)/Identification%20(身份证明)/Identification%20(身份证明).md), ↗[Authentication (身份鉴别)](../⛈️%20Risk%20Management/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Identity%20&%20Access%20Management%20(IAM)/Access%20Control%20(访问控制)/Authentication%20(身份鉴别)/Authentication%20(身份鉴别).md))
		1. A mechanism intended to ensure the identity of an entity by means of information exchange.
	6. **Traffic Padding** ()
		1. The insertion of bits into gaps in a data stream to frustrate traffic analysis attempts.
		2. 通信业务填充机制能用来提供各种不同级别的保护，抵抗通信业务分析。这种机制只有在通信业务填充受到机密服务保护时才是有效的。它包括屏蔽协议、实体通信的频率、长度、发端和收端的码型，选定的随机数据率，更新填充信息的参数等，以防止业务量分析，即防止通过观察通信流量获得敏感信息。
		3. 这种机制主要是对抗非法者在线路上监听数据并对其进行流量和流向分析。
		4. 采用的方法一般由机密装置在无信息传输时，连续发出伪随机序列，使得非法者不知哪些是有用信息、哪些是无用信息。
	7. **Routing Control** (↗ [Anonymous Network & Host](../Network%20(&%20Communication)%20Security/Anonymous%20&%20Private%20Networks/👺%20Anonymous%20Network%20&%20Host/Anonymous%20Network%20&%20Host.md))
		1. Enables selection of particular physically secure routes for certain data and allows routing changes, especially when a breach of security is suspected.
		2.  路由可通过动态方式或预选方式，使用物理上安全可靠的子网、中继或链路。当发现信息受到连续性的非法处理时，它可以另选安全路由来建立连接；带某种安全标记的信息将受到检验，防止非法信息通过某些子网、中继或链路，并告警。
	8. **Notarization** ()
		1. The use of a trusted third party to assure certain properties of a data exchange.
		2. 定义：在通信过程中，信息的完整性、信源、通信时间和目的地、密钥分配、数字签名等，均可以借助公证机制加以保证。保证是由第三方公证机制提供，它接受通信实体的委托，并掌握可供证明的可信赖的所需信息。公证可以是仲裁方式或判决方式的。
		3. 在一个大型网络中，有许多节点或端节点。在使用这个网络时，并不是所有用户都是诚实的、可信的，同时也可能由于系统故障等原因使信息丢失、迟到等，这很可能引起责任问题，为了解决这个问题，就需要有一个各方都信任的实体——公证机构，如同一个国家设立的公证机构一样，提供公证服务，仲裁出现的问题
		4. 一旦引入公证机制，通信双方进行数据通信时必须经过这个机构来转换，以确保公证机构能得到必要的信息，供以后仲裁
2. **Pervasive Security Mechanisms** (Mechanisms that is not specific to any particular OSI security service or protocol layer.)
	1. **Trusted Functionality** (↗ [Trusted Computing (TC)](Other%20Security%20Aspects%20(Other%20Countermeasures)/Trusted%20Computing%20(TC)/Trusted%20Computing%20(TC).md))
		2. That which is perceived to be correct with respect to some criteria (e.g., as established by a security policy).
	2. **Security Label** ()
		1. The marking bound to a resource (which may be a data unit) that names or designates the security attributes of that resource.
	3. **Event Detection** (↗ [Cyberspace Situation Awareness (CSA)](../⛈️%20Risk%20Management/🐗%20Cybersecurity%20Threats%20&%20Attacks/Cyberspace%20Situation%20Awareness%20(CSA)/Cyberspace%20Situation%20Awareness%20(CSA).md), ↗ [IDS (Intrusion Detection Systems)](../⛈️%20Risk%20Management/🐺%20Risk%20Countermeasures%20&%20Security%20Control/🛌%20Comprehensive%20Defense%20Systems%20&%20Security%20Products/Network%20&%20Web%20Security%20Products/IDS%20(Intrusion%20Detection%20Systems)/IDS%20(Intrusion%20Detection%20Systems).md))
		1. Detection of security-relevant events.
	4. **Security Audit Trail** (↗ [Security Audit & Security Audit Trail](../⛈️%20Risk%20Management/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Security%20Audit%20&%20Security%20Audit%20Trail/Security%20Audit%20&%20Security%20Audit%20Trail.md))
		1. Data collected and potentially used to facilitate a security audit, which is an independent review and examination of system records and activities.
		2. 安全审计跟踪是一种很有价值的安全机制，可以通过事后的安全审计来检测和调查安全策略执行的情况以及安全遭到的破坏情况。
		3. 安全审计是对系统记录和活动的独立评估、考核、以测试系统控制是否充分，确保与既定策略和操作规程相一致，有助于对入侵进行评估，指出控制、策略和程序的变化。
		4. 安全审计需要审计跟踪与安全有关的记录信息，和从安全审计跟踪中得到的分析和报告信息。
		5. 日志或记录被视为一种安全机制，而分析和报告生成被视为一种安全管理功能。
		6. 通过指明所记录的与安全有关的事件的类别，安全审计跟踪信息的收集可以适应各种需要。
		7. 安全审计跟踪的存在对潜在的安全攻击源的攻击可以起到威慑作用。
	5. **Security Recovery** (↗ [Disaster Recovery (DR)](../⛈️%20Risk%20Management/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Disaster%20&%20Incidence%20Response%20(IR)/Disaster%20Recovery%20(DR)/Disaster%20Recovery%20(DR).md))
		1. Deals with requests from mechanisms, such as event handling and management functions, and takes recovery actions.



## 🎯 网络空间安全组织机构体系
组织机构体系是信息系统安全的组织保障系统，由机构、岗位和人事三个模块构成一个体系。
机构的设置分为三个层次：决策层、管理层和执行层
岗位是信息系统安全管理机关根据系统安全需要设定的负责某一个或某几个安全事务的职位人事是根据管理机构设定的岗位，对岗位上在职、待职和离职的雇员进行素质教育、业绩考核和安全监管的机构。



## 🎯 网络空间安全管理(治理)体系
↗ [Security Laws & Regulations & Standards](🗂️%20Protocol%20&%20Policy%20Security/👩🏻‍⚖️%20Security%20Laws%20&%20Regulations%20&%20Standards/Security%20Laws%20&%20Regulations%20&%20Standards.md) 
 
管理是信息系统安全的灵魂（**三分技术，七分管理；管理与技术并重**）。信息系统安全的管理体系由法律管理、制度管理和培训管理三个部分组成。
1. **法律管理**是根据相关的国家法律、法规对信息系统主体及其与外界关联行为的规范和约束。
2. **制度管理**是信息系统内部依据系统必要的国家、团体的安全需求制定的一系列内部规章制度。
3. **培训管理**是确保信息系统安全的前提。



## Ref
