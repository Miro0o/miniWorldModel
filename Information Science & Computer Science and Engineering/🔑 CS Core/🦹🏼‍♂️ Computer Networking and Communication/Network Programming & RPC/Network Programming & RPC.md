# Network Programming & RPC

[TOC]



## Res
### Related Topics
↗ [IPC (Inter Process Communication)](../../👷🏾‍♂️%20Computer%20%28Host%29%20System/Operating%20System%20&%20OS%20Kernel%20%28Theory%20Part%29/OS%20Processes%20&%20Automata%20Management%20%28CPU%20+%20Main%20Memory%20Resource%29/IPC%20%28Inter%20Process%20Communication%29/IPC%20%28Inter%20Process%20Communication%29.md)
↗ [Network Sockets](../../👷🏾‍♂️%20Computer%20%28Host%29%20System/Operating%20System%20&%20OS%20Kernel%20%28Theory%20Part%29/OS%20IO%20System/IO%20Generality%20%28via%20Abstraction%29/🛜%20Network%20Sockets/Network%20Sockets.md)
- ↗ [Internet Domain Socket](../../👷🏾‍♂️%20Computer%20%28Host%29%20System/Operating%20System%20&%20OS%20Kernel%20%28Theory%20Part%29/OS%20IO%20System/IO%20Generality%20%28via%20Abstraction%29/🛜%20Network%20Sockets/Internet%20Domain%20Socket.md)
- ↗ [Remote Procedure Call (RPC)](../../👷🏾‍♂️%20Computer%20%28Host%29%20System/Operating%20System%20&%20OS%20Kernel%20%28Theory%20Part%29/OS%20IO%20System/IO%20Generality%20%28via%20Abstraction%29/🛜%20Network%20Sockets/Remote%20Procedure%20Call%20%28RPC%29.md)

↗ [System Software Engineering](../../../Software%20Engineering/👇%20System%20Software%20Engineering/System%20Software%20Engineering.md)
↗ [Computer (IO Devices) Drivers & Programming](../../👷🏾‍♂️%20Computer%20%28Host%29%20System/Computer%20Interfaces%20&%20Hardware%20Drivers/🛞%20Computer%20%28IO%20Devices%29%20Drivers%20&%20Programming/Computer%20%28IO%20Devices%29%20Drivers%20&%20Programming.md)
↗ [(Object) Serialization & Deserialization](../📌%20Computer%20Networking%20Basics%20%28Protocol%20Part%29/0x02%20Presentation%20Layer%20%28Syntax%20Layer%29/%28Object%29%20Serialization%20&%20Deserialization/%28Object%29%20Serialization%20&%20Deserialization.md)
↗ [IDL (Interface Description Language) & Data Exchange Formats](../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20&%20Formats/IDL%20%28Interface%20Description%20Language%29%20&%20Data%20Exchange%20&%20Serialization/IDL%20%28Interface%20Description%20Language%29%20&%20Data%20Exchange%20Formats.md)

↗ [APIs & Interfaces in Web Development](../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20The%20Internet%20Development%20%28and%20Web%20Development%29/👬%20APIs%20&%20Interfaces%20in%20Web%20Development/APIs%20&%20Interfaces%20in%20Web%20Development.md)
↗ [RPC Services](../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20The%20Internet%20Development%20%28and%20Web%20Development%29/🗄️%20Web%20BackEnd%20Dev%20&%20Middleware/Web%20Dev%20Middleware/RPC%20Services/RPC%20Services.md)
↗ [Cloud RPC Services](../../../Software%20Engineering/☁️%20Cloud%20Computing%20&%20Cloud%20Native/Cloud%20Operating%20System%20&%20Platform%20%28System%20Level%20Engineering%29/Orchestration%20&%20Management/Cloud%20RPC%20Services.md)

↗ [P4 Language](../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/DSL%20%28Domain%20Specific%20Languages%29/Configuration%20&%20Scripting%20Languages/P4%20Language.md)

↗ [Firewall & Network Filters](../../../CyberSecurity/⛈️%20Risk%20Management%20%28In%20Cyberspace%29/🐺%20Risk%20Countermeasures%20&%20Security%20Control/🛌%20Comprehensive%20Defense%20Systems%20&%20Security%20Products/Network%20&%20Web%20Security%20Products/Firewall%20&%20Network%20Filters/Firewall%20&%20Network%20Filters.md)


### Other Resources



## Intro
### Network Programming


### RPC (Remote Procedure Call)
RPC is an implementation of ↗ [IPC (Inter Process Communication)](../../👷🏾‍♂️%20Computer%20%28Host%29%20System/Operating%20System%20&%20OS%20Kernel%20%28Theory%20Part%29/OS%20Processes%20&%20Automata%20Management%20%28CPU%20+%20Main%20Memory%20Resource%29/IPC%20%28Inter%20Process%20Communication%29/IPC%20%28Inter%20Process%20Communication%29.md)
↗ [Network Sockets](../../👷🏾‍♂️%20Computer%20%28Host%29%20System/Operating%20System%20&%20OS%20Kernel%20%28Theory%20Part%29/OS%20IO%20System/IO%20Generality%20%28via%20Abstraction%29/🛜%20Network%20Sockets/Network%20Sockets.md)
↗ [Remote Procedure Call (RPC)](../../👷🏾‍♂️%20Computer%20%28Host%29%20System/Operating%20System%20&%20OS%20Kernel%20%28Theory%20Part%29/OS%20IO%20System/IO%20Generality%20%28via%20Abstraction%29/🛜%20Network%20Sockets/Remote%20Procedure%20Call%20%28RPC%29.md)

↗ [SE / Middleware /RPC](../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20The%20Internet%20Development%20%28and%20Web%20Development%29/🗄️%20Web%20BackEnd%20Dev%20&%20Middleware/Web%20Dev%20Middleware/RPC%20Services/RPC%20Services.md)
↗ [Cloud Native /RPC](../../../Software%20Engineering/☁️%20Cloud%20Computing%20&%20Cloud%20Native/Cloud%20Operating%20System%20&%20Platform%20%28System%20Level%20Engineering%29/Orchestration%20&%20Management/Cloud%20RPC%20Services.md)

↗ [Appendix /什么是RPC?](../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20The%20Internet%20Development%20%28and%20Web%20Development%29/🗄️%20Web%20BackEnd%20Dev%20&%20Middleware/Web%20Dev%20Middleware/RPC%20Services/Appendix.md)



## Ref
