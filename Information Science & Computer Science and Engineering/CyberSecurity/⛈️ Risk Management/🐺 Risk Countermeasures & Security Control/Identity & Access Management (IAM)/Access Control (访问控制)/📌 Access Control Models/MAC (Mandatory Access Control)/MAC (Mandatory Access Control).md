# MAC (Mandatory Access Control)

[TOC]



## Res
### Related Topics


### Other Resources



## Intro
![](../../../../../../../../../Assets/Pics/Screenshot%202023-03-26%20at%205.32.56%20PM.png)
![](../../../../../../../../../Assets/Pics/Screenshot%202023-03-26%20at%205.33.07%20PM.png)

> 🔗 https://en.wikipedia.org/wiki/Mandatory_access_control

In [computer security](https://en.wikipedia.org/wiki/Computer_security "Computer security"), **mandatory access control** (**MAC**) refers to a type of [access control](https://en.wikipedia.org/wiki/Access_control "Access control") by which a [secured environment](https://en.wikipedia.org/wiki/Secured_environment "Secured environment") (e.g., an [operating system](https://en.wikipedia.org/wiki/Operating_system "Operating system") or a database) constrains the ability of a _subject_ or _initiator_ to access or modify on an _object_ or _target_. In the case of operating systems, the subject is a process or thread, while objects are files, directories, [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol "Transmission Control Protocol")/[UDP](https://en.wikipedia.org/wiki/User_Datagram_Protocol "User Datagram Protocol") ports, shared memory segments, or IO devices. Subjects and objects each have a set of security attributes. Whenever a subject attempts to access an object, the [operating system kernel](https://en.wikipedia.org/wiki/Kernel_\(operating_system\) "Kernel (operating system)") examines these security attributes, examines the authorization rules (aka _policy_) in place, and decides whether to grant access. A [database management system](https://en.wikipedia.org/wiki/Database_management_system "Database management system"), in its access control mechanism, can also apply mandatory access control; in this case, the objects are tables, views, procedures, etc.

In mandatory access control, the security policy is centrally controlled by a policy administrator and is guaranteed (in principle) to be enforced for all users. Users cannot override the policy and, for example, grant access to files that would otherwise be restricted. By contrast, [discretionary access control](https://en.wikipedia.org/wiki/Discretionary_access_control "Discretionary access control") (DAC), which also governs the ability of subjects to access objects, allows users the ability to make policy decisions or assign security attributes.

Historically and traditionally, MAC has been closely associated with [multilevel security](https://en.wikipedia.org/wiki/Multilevel_security "Multilevel security") (MLS) and specialized military systems. In this context, MAC implies a high degree of rigor to satisfy the constraints of MLS systems. More recently, however, MAC has deviated out of the MLS niche and has started to become more mainstream. The more recent MAC implementations, such as [SELinux](https://en.wikipedia.org/wiki/SELinux "SELinux") and [AppArmor](https://en.wikipedia.org/wiki/AppArmor "AppArmor") for Linux and [Mandatory Integrity Control](https://en.wikipedia.org/wiki/Mandatory_Integrity_Control "Mandatory Integrity Control") for Windows, allow administrators to focus on issues such as network attacks and malware without the rigor or constraints of MLS.



## Ref
