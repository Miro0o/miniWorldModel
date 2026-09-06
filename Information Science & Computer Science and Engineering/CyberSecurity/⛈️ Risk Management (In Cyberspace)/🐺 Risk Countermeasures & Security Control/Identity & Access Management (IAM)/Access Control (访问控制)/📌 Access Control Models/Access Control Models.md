# Access Control Models

[TOC]



## Res
### Related Topics
↗ [DBMS Access Control](../../../../../System%20Security/Database%20System%20Security/DBMS%20Access%20Control/DBMS%20Access%20Control.md)
↗ [SQL & Access Control](../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/DSL(Domain%20Specific%20Languages)/Database%20Languages/🦆%20Query%20Languages%20(Data%20Query%20Languages,%20DQL)/🩼%20SQL%20(Structured%20Query%20Language)/SQL%20Data%20Control%20(DCL)/SQL%20&%20Access%20Control/SQL%20&%20Access%20Control.md)
↗ [File Sharing & Access Control](../../../../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20IO%20System/IO%20Generality%20(via%20Abstraction)/File%20&%20File%20System/File%20Management%20(User%20Level)/File%20Sharing%20&%20Access%20Control/File%20Sharing%20&%20Access%20Control.md)

↗ [Information Flow & Information Flow Control (IFC)](../../../../../🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/👚%20SCA%20(Static%20Code%20Analysis)%20&%20SAST/Information%20Flow%20&%20Information%20Flow%20Control%20(IFC)/Information%20Flow%20&%20Information%20Flow%20Control%20(IFC).md)


### Other Resources



## Intro
访问控制模型: 对一系列访问控制规则集合的描述，可以是非形式化的，也可以是形式化的。

![](../../../../../../../Assets/Pics/Screenshot%202023-11-01%20at%202.34.42PM.png)


### Types of Access Control Models
![](../../../../../../../Assets/Pics/Screenshot%202023-11-01%20at%202.36.23PM.png)

> 🔗 https://en.wikipedia.org/wiki/Access_control#Access_control_models

Access to accounts can be enforced through many types of controls.[27](https://en.wikipedia.org/wiki/Access_control#cite_note-27)
1. [Attribute-based Access Control](https://en.wikipedia.org/wiki/Attribute-based_access_control "Attribute-based access control") (ABAC)  
    An access control paradigm whereby access rights are granted to users through the use of policies which evaluate attributes (user attributes, resource attributes and environment conditions).[28](https://en.wikipedia.org/wiki/Access_control#cite_note-28)
2. [Discretionary Access Control](https://en.wikipedia.org/wiki/Discretionary_access_control "Discretionary access control") (DAC)  
    In DAC, the data owner determines who can access specific resources. For example, a system administrator may create a hierarchy of files to be accessed based on certain permissions.
3. [Graph-based Access Control](https://en.wikipedia.org/wiki/Graph-based_access_control "Graph-based access control") (GBAC)  
    Compared to other approaches like RBAC or ABAC, the main difference is that in GBAC access rights are defined using an organizational query language instead of total enumeration.
4. [History-Based Access Control](https://en.wikipedia.org/w/index.php?title=History-based_access_control&action=edit&redlink=1 "History-based access control (page does not exist)") (HBAC)  
    Access is granted or declined based on the real-time evaluation of a history of activities of the inquiring party, e.g. behavior, time between requests, content of requests.[29](https://en.wikipedia.org/wiki/Access_control#cite_note-29) For example, the access to a certain service or data source can be granted or declined on the personal behavior, e.g. the request interval exceeds one query per second.
5. [History-of-Presence Based Access Control](https://en.wikipedia.org/w/index.php?title=History-of-presence_based_access_control&action=edit&redlink=1 "History-of-presence based access control (page does not exist)") (HPBAC)  
    Access control to resources is defined in terms of presence policies that need to be satisfied by presence records stored by the requestor. Policies are usually written in terms of frequency, spread and regularity. An example policy would be "The requestor has made k separate visitations, all within last week, and no two consecutive visitations are apart by more than T hours."[30](https://en.wikipedia.org/wiki/Access_control#cite_note-30)
6. [Identity-Based Access Control](https://en.wikipedia.org/wiki/Identity-based_access_control "Identity-based access control") (IBAC)  
    Using this network administrators can more effectively manage activity and access based on individual needs.[31](https://en.wikipedia.org/wiki/Access_control#cite_note-31)
7. [Lattice-Based Access Control](https://en.wikipedia.org/wiki/Lattice-based_access_control "Lattice-based access control") (LBAC)  
    A lattice is used to define the levels of security that an object may have and that a subject may have access to. The subject is only allowed to access an object if the security level of the subject is greater than or equal to that of the object.
8. [Mandatory Access Control](https://en.wikipedia.org/wiki/Mandatory_access_control "Mandatory access control") (MAC)  
    In MAC, users do not have much freedom to determine who has access to their files. For example, security clearance of users and classification of data (as confidential, secret or top secret) are used as security labels to define the level of trust.
9. [Organization-Based Access Control](https://en.wikipedia.org/wiki/Organisation-based_access_control "Organisation-based access control") (OrBAC)  
    OrBAC model allows the policy designer to define a security policy independently of the implementation.[32](https://en.wikipedia.org/wiki/Access_control#cite_note-32)
10. [Relationship-Based Access Control](https://en.wikipedia.org/wiki/Relationship-based_access_control "Relationship-based access control") (ReBAC)  
    A subject's permission to access a resource is defined by the presence of relationships between those subjects and resources.
11. [Role-Based Access Control](https://en.wikipedia.org/wiki/Role-based_access_control "Role-based access control") (RBAC)  
    RBAC allows access based on the job title. RBAC largely eliminates discretion when providing access to objects. For example, a human resources specialist should not have permissions to create network accounts; this should be a role reserved for network administrators.
12. [Rule-Based Access Control](https://en.wikipedia.org/w/index.php?title=Rule-based_access_control&action=edit&redlink=1 "Rule-based access control (page does not exist)") (RAC)  
    RAC method, also referred to as Rule-Based Role-Based Access Control (RB-RBAC), is largely context based. Example of this would be allowing students to use labs only during a certain time of day; it is the combination of students' RBAC-based information system access control with the time-based lab access rules.
13. [Responsibility Based Access Control](https://en.wikipedia.org/w/index.php?title=Responsibility-based_access_control&action=edit&redlink=1 "Responsibility-based access control (page does not exist)")  
    Information is accessed based on the responsibilities assigned to an actor or a business role.[33](https://en.wikipedia.org/wiki/Access_control#cite_note-33)
14. [Subscription-Based Access Control](https://en.wikipedia.org/w/index.php?title=Subscription-based_access_control&action=edit&redlink=1 "Subscription-based access control (page does not exist)") (SBAC)  
    SBAC assigns permissions based on a user's [subscription](https://en.wikipedia.org/wiki/Subscription "Subscription") status, automating the process of granting, modifying, or revoking access as users subscribe, upgrade, downgrade, or cancel. SBAC is particularly relevant for [SaaS](https://en.wikipedia.org/wiki/Software_as_a_service "Software as a service") business, where access to features, data, or services is tied to a user's active plan. Unlike RBAC or ABAC, which define permissions based on roles or attributes, SBAC dynamically distributes roles and policies based on billing status, ensuring real-time access alignment.[34](https://en.wikipedia.org/wiki/Access_control#cite_note-34)



## Ref
