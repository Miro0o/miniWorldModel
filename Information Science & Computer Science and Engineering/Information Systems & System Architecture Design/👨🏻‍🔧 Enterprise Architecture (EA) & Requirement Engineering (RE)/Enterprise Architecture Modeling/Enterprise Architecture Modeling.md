# Enterprise Architecture Modeling

[TOC]



## Res
### Related Topics
↗ [Models of Computation & Abstract Machines](../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Models%20of%20Computation%20&%20Abstract%20Machines/Models%20of%20Computation%20&%20Abstract%20Machines.md)

↗ [ArchiMate](../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🪁%20DSL(Domain%20Specific%20Languages)%20&%20GPL(General%20Purpose%20Languages)/Modeling%20(Specification)%20Languages/ArchiMate.md)

↗ [Web Application Systems & Architecture Design](../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20Web%20Development%20&%20The%20Internet/Web%20Application%20Systems%20&%20Architecture%20Design/Web%20Application%20Systems%20&%20Architecture%20Design.md)
- ↗ [Web Application System Architecture Design Pattern](../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20Web%20Development%20&%20The%20Internet/Web%20Application%20Systems%20&%20Architecture%20Design/Web%20Application%20System%20Architecture%20Design%20Pattern/Web%20Application%20System%20Architecture%20Design%20Pattern.md)
↗ [DS Web Services' Architectures](../../../🔑%20CS%20Core/🍕%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/DS%20Web%20Services'%20Architectures.md)


### Other Resources



## Intro



## Deployment Patterns
**Logical vs Physical layers (tiers)**
- NOT to be confused with Archimate layers!
- Logical layers: separate application components with specific functions
	- Presentation: handling the visualization and interaction with end users
	- Business logic: handling the processing of information
	- Data access: handling the storage/retrieval of data
- Physical layers (tiers):
	- Where are the application components deployed


### Web Applications System Architecture
> [!links]
> ↗ [Web Application Systems & Architecture Design](../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20Web%20Development%20&%20The%20Internet/Web%20Application%20Systems%20&%20Architecture%20Design/Web%20Application%20Systems%20&%20Architecture%20Design.md)
> ↗ [Web Application System Architecture Design Pattern](../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20Web%20Development%20&%20The%20Internet/Web%20Application%20Systems%20&%20Architecture%20Design/Web%20Application%20System%20Architecture%20Design%20Pattern/Web%20Application%20System%20Architecture%20Design%20Pattern.md)
>
> ↗ [DS Web Services' Architectures](../../../🔑%20CS%20Core/🍕%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/DS%20Web%20Services'%20Architectures.md)
#### Monolithic (One-Tier) Applications
A single application component responsible for everything
- Presentation, business logic and data components all running on the same node

> [!example]
> ↗ [ArchiMate](../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🪁%20DSL(Domain%20Specific%20Languages)%20&%20GPL(General%20Purpose%20Languages)/Modeling%20(Specification)%20Languages/ArchiMate.md)
> 
> ![](../../../../Assets/Pics/Screenshot%202026-02-25%20at%2019.12.04.png)
#### Client-Server (Two-Tier) Applications
Application components running on two node types:
- Distributed presentation: presentation split between client and server nodes (e.g., web applications)
- Distributed application: business logic split between client and server nodes
- Distributed data: data access split between client and server nodes (e.g., for offline usage)
- Distributed application and data: both business logic and data split between client and server nodes


Application components running on two node types:

**Thick client** configuration:
- Business logic and presentation running on the same node (client)
- Data access in a separate node (server)

> [!example]
> ![](../../../../Assets/Pics/Screenshot%202026-02-25%20at%2019.13.20.png)


**Thin client** configuration:
- Business logic and data access running on the same node (server)
- Presentation in a separate node (client)

> [!example]
> ![](../../../../Assets/Pics/Screenshot%202026-02-25%20at%2019.14.31.png)

#### Three-Tier Applications
Application components running on three node types:
- Usually, one-to-one mapping between node types and layers:
	- One node for presentation components
	- One node for business logic components
	- One node for data access components

> [!example]
> ![](../../../../Assets/Pics/Screenshot%202026-02-25%20at%2019.19.00.png)


### Virtualization Software Architecture
> [!links]
> ↗ [Computer Virtualization](../../../Software%20Engineering/🦄%20Computer%20Virtualization/Computer%20Virtualization.md)

Abstracts the physical resources of a computer (CPU, RAM, disks, network) making them available via virtual machines
- Decouples physical resources and application software (OS and applications)
- Splits a physical resource into many virtual resources (e.g., RAM)
- Shares a physical resource across multiple virtual resources (e.g., CPU, network)
- You can consolidate multiple virtual machines onto a single physical machine
- Creation, execution and management of virtual machines performed by hypervisors:
	- Type 1 (bare metal): do not require any underlying (host) operating system to run
		- Vmware ESXi, Microsoft Hyper-V, Citrix XenServer
	- Type 2 (hosted): run on top of a regular (host) operating system
		- Vmware Workstation, Virtualbox, QEMU

> [!example]
> **Bare metal virtualization**:
> ![](../../../../Assets/Pics/Screenshot%202026-02-25%20at%2019.22.07.png)
> 
> **Hosted virtualization**:
> ![](../../../../Assets/Pics/Screenshot%202026-02-25%20at%2019.22.46.png)


### Cloud Computing Architecture
> [!links]
> ↗ [Cloud Computing & Cloud Native](../../../Software%20Engineering/☁️%20Cloud%20Computing%20&%20Cloud%20Native/Cloud%20Computing%20&%20Cloud%20Native.md)
> ↗ [Cloud Architectures](../../../Software%20Engineering/☁️%20Cloud%20Computing%20&%20Cloud%20Native/🌵%20Cloud%20Native%20Overview/Cloud%20Architectures/Cloud%20Architectures.md)
> ↗ [Cloud Computing Security Architecture](../../../Software%20Engineering/☁️%20Cloud%20Computing%20&%20Cloud%20Native/🌵%20Cloud%20Native%20Overview/🗿%20Cloud%20Models/Cloud%20Computing%20Security%20Architecture.md)
> ↗ [Cloud Service (Delivery) Models](../../../Software%20Engineering/☁️%20Cloud%20Computing%20&%20Cloud%20Native/🌵%20Cloud%20Native%20Overview/🗿%20Cloud%20Models/Cloud%20Service%20(Delivery)%20Models/Cloud%20Service%20(Delivery)%20Models.md)

> [!quote]
> 🔗 https://csrc.nist.gov/pubs/sp/800/145/final
> 
> _“Cloud computing is a model for enabling ubiquitous, convenient, on-demand network access to a shared pool of configurable computing resources (e.g., networks, servers, storage, applications, and services) that can be rapidly provisioned and released with minimal management effort or service provider interaction. This cloud model is composed of five essential characteristics, three service models, and four deployment models.”_ 

- On-demand self-service: Users can obtain resources such as runtime or storage by themselves, without human interaction with provider
- Broad network access: standard networks and internet devices can access resources
- Resource pooling: resources dynamically assigned independent from physical infrastructure
- Rapid elasticity: resources quickly assigned, increased or reduced to meet user demands
- Measured service: usage of resources monitored and available to all parties

> [!example]
> Cloud computing:  service models
> 
> ![](../../../../Assets/Pics/Screenshot%202026-02-25%20at%2019.24.46.png)



## Enterprise Software Architecture
> [!links]
> ↗ [Application Software Engineering](../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/Application%20Software%20Engineering.md)
> - ↗ [Enterprise Level Software Systems](../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/👑%20Enterprise%20Level%20Software%20Systems/Enterprise%20Level%20Software%20Systems.md)
>
> ↗ [System Software Engineering](../../../Software%20Engineering/👇%20System%20Software%20Engineering/System%20Software%20Engineering.md)
> 
> ↗ [Information Systems & System Architecture Design](../../Information%20Systems%20&%20System%20Architecture%20Design.md)


### File Servers
- Store and make files accessible to other users/systems
- File sharing interface provided by the operating system
	- CIFS on Windows
	- AFP on MacOS
	- NFS on Unix/Linux
- File sharing interface provided by additional system software
	- E.g., SAMBA for CIFS
- Offered as cloud PaaS service with custom APIs:
	- E.g., Amazon S3 and EBS

> [!example]
> ![](../../../../Assets/Pics/Screenshot%202026-02-25%20at%2019.27.10.png)


### AAA Servers
- Authentication Authorization Accounting
- Allow centralized management of user credentials
- Services provided by the operating system:
	- Active Directory on Windows (Server)
	- NIS/NIS+ on Unix/Linux
	- RACF on z/OS
- Services provided by additional system software:
	- Apache Directory or OpenLDAP for LDAP
	- FreeRADIUS for RADIUS

> [!example]
> ![ |400](../../../../Assets/Pics/Screenshot%202026-02-25%20at%2019.27.26.png)


### Web Application Systems
> [!links]
> ↗ [Web Application Systems & Architecture Design](../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20Web%20Development%20&%20The%20Internet/Web%20Application%20Systems%20&%20Architecture%20Design/Web%20Application%20Systems%20&%20Architecture%20Design.md)
> ↗ [Web Application System Architecture Design Pattern](../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20Web%20Development%20&%20The%20Internet/Web%20Application%20Systems%20&%20Architecture%20Design/Web%20Application%20System%20Architecture%20Design%20Pattern/Web%20Application%20System%20Architecture%20Design%20Pattern.md)
>
> ↗ [DS Web Services' Architectures](../../../🔑%20CS%20Core/🍕%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/DS%20Web%20Services'%20Architectures.md)
#### Web Application Server
> [!links]
> ↗ [Reverse Proxy Servers & Application Servers](../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20Web%20Development%20&%20The%20Internet/🗄️%20Web%20BackEnd%20Dev%20&%20Middleware/Web%20Dev%20Middleware/🐈%20Reverse%20Proxy%20Servers%20&%20Application%20Servers/Reverse%20Proxy%20Servers%20&%20Application%20Servers.md)

> [!example]
> 
> **Jakarta EE application servers**
> - Run Java applications conforming to Jakarta EE specifications
> - Typically used for implementing application business logic
> - Multiple application services deployed under the same Application Server
> - Currently phased out in favour of monolithic microservices applications (e.g., SpringBoot)
> - Examples:
> 	- Red Hat WildFly
> 	- IBM WebSphere Liberty
> 	- Apache TomEE
> 	- Eclipse Glassfish
> 
> ![|400](../../../../Assets/Pics/Screenshot%202026-02-25%20at%2020.00.19.png)
#### Message Queuing Services
> [!links]
> ↗ [Messaging Services](../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20Web%20Development%20&%20The%20Internet/🗄️%20Web%20BackEnd%20Dev%20&%20Middleware/Web%20Dev%20Middleware/Messaging%20Services/Messaging%20Services.md)
> ↗ [Message Queue](../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20Web%20Development%20&%20The%20Internet/🗄️%20Web%20BackEnd%20Dev%20&%20Middleware/Web%20Dev%20Middleware/Messaging%20Services/Message%20Queue/Message%20Queue.md)

Allow applications to communicate with each other by exchanging messages
- Follow the publish-subscribe pattern
- May support advanced message prioritization and routing
- Examples:
	- IBM WebSphere MQ
	- Apache ActiveMQ
	- RabbitMQ

> [!example]
> ![](../../../../Assets/Pics/Screenshot%202026-02-25%20at%2019.45.23.png)
#### Email Servers
- Handle e-mail messages
- Roles:
	- MTA: sends and forwards messages MDA: receives and stores messages in a mailbox
- Rely on SMTP protocol for exchanging messages and on POP3, IMAP or proprietary protocols for making mailboxes accessible to end users
- Examples:
	- Postfix
	- CommuniGate
	- Exim
	- Zmailer
	- Cyrus IMAP

> [!example]
> ![](../../../../Assets/Pics/Screenshot%202026-02-25%20at%2019.52.06.png)
#### Groupware Servers
Extend e-mail services with calendars, forms and documents
- Features accessible through web-based interfaces, proprietary protocols or APIs
- Examples:
	- Microsoft Exchange Server
	- Google Workspace
	- OpenText Groupwise
	- OpenText FirstClass
	- HCL Notes
	- Zimbra

> [!example]
> ![](../../../../Assets/Pics/Screenshot%202026-02-25%20at%2019.51.47.png)


### DBMS
> [!links]
> ↗ [Database Systems](../../../🔑%20CS%20Core/🍕%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/Database%20Systems.md)
> ↗ [DBMS (DataBase Management System) Implementations](../../../🔑%20CS%20Core/🍕%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/DBMS%20(DataBase%20Management%20System)%20Implementations/DBMS%20(DataBase%20Management%20System)%20Implementations.md)

- Database Management Systems
- Allow to access and manipulate data in a database
- May support one or more data models:
	- Relational
	- Hierarchical
	- Document-based
	- Graph-based
	- Time-series
- May run on-premise or offered as cloud PaaS services
- May use SQL or custom query languages and APIs

> [!example]
> ![|400](../../../../Assets/Pics/Screenshot%202026-02-25%20at%2019.28.02.png)


### ECM Servers
> [!links]
> ↗ [Enterprise Content Management (ECM)](../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/👑%20Enterprise%20Level%20Software%20Systems/Enterprise%20Content%20Management%20(ECM)/Enterprise%20Content%20Management%20(ECM).md)


### ERP Systems
> [!links]
> ↗ [Enterprise Requirements Planning (ERP)](../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/👑%20Enterprise%20Level%20Software%20Systems/Enterprise%20Requirements%20Planning%20(ERP)/Enterprise%20Requirements%20Planning%20(ERP).md)

> [!example]
> ![](../../../../Assets/Pics/Screenshot%202026-02-25%20at%2019.51.01.png)


### CRM Systems
> [!links]
> ↗ [Customer Relationship Management (CRM)](../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/👑%20Enterprise%20Level%20Software%20Systems/Customer%20Relationship%20Management%20(CRM)/Customer%20Relationship%20Management%20(CRM).md)

> [!example]
> ![|400](../../../../Assets/Pics/Screenshot%202026-02-25%20at%2019.50.36.png)


### Transactional Service Systems
> [!links]
> ↗ [Transactional Service Systems](../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/👑%20Enterprise%20Level%20Software%20Systems/Transactional%20Service%20Systems/Transactional%20Service%20Systems.md)
> - ↗ [Matching & Trading Engine](../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/👑%20Enterprise%20Level%20Software%20Systems/Transactional%20Service%20Systems/Matching%20&%20Trading%20Engine/Matching%20&%20Trading%20Engine.md)
> - ↗ [Ticketing Systems & Online Booking](../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/👑%20Enterprise%20Level%20Software%20Systems/Transactional%20Service%20Systems/Ticketing%20Systems%20&%20Online%20Booking/Ticketing%20Systems%20&%20Online%20Booking.md)
> 
> ↗ [PCS (Payment and Clearing System)](../../Selected%20Information%20Systems/PCS%20(Payment%20and%20Clearing%20System)/PCS%20(Payment%20and%20Clearing%20System).md)

- Allow massive parallel executions of transactions
- A transaction is a single unit of processing that can affect many resources
- Initially designed to simplify shared access to files and terminals
- Currently transactions can invoke and be invoked through web service APIs
- Primarily used in banking and insurance industries
- Examples:
	- IBM CICS
	- Micro Focus Enterprise Server


### ESB Systems
> [!links]
> ↗ [Enterprise Service Bus (ESB)](../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/👑%20Enterprise%20Level%20Software%20Systems/Enterprise%20Service%20Bus%20(ESB)/Enterprise%20Service%20Bus%20(ESB).md)


### ... Many Others!
- Business Process Management Systems
	- Covered in the next lecture
- Data Integration services
	- Covered in lecture 8
- Data Warehouses and Data Lakes
	- Covered in lecture 11
- Many more:
	- Certificate services
	- Anti-malware services
	- Firewall and VPN services
	- Infrastructure monitoring services
	- Remote desktop services
	- Software Configuration and Deployment services



## Ref
