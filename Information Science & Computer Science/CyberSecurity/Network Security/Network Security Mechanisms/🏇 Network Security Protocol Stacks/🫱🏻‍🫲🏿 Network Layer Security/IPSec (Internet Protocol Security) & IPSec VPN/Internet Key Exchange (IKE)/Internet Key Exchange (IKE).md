# Internet Key Exchange (IKE)

[TOC]



## Res

https://www.ibm.com/docs/en/zos/2.3.0?topic=guide-ike-protocol-details
IKE protocol details - This topic provides an overview of the IKE protocols, IKE version 1 (IKEv1) and IKE version 2 (IKEv2). | IBM Documentation, z/OS

### Related Topics
↗ [Key Management](../../../../../../🚬%20Cryptology%20&%20Secure%20Communication/Key%20Management/Key%20Management.md)
↗ [Key Exchange & Agreement (one-to-one)](../../../../../../🚬%20Cryptology%20&%20Secure%20Communication/Key%20Management/📌%20Key%20Management%20Algorithms%20&%20Protocols/👥%20Key%20Exchange%20&%20Agreement%20(one-to-one)/Key%20Exchange%20&%20Agreement%20(one-to-one).md)



## Intro



## Key Exchange Principles
IPsec采用IKE完成SA 的协商，IKE通过两个阶段的协商来完成SA的建立。它遵从了ISAKMP中给出的两步式协商，采用两阶段式协商完成SA的协商。
- 第一阶段，由IKE交换的发起方发起的一个主模式（Main Mode）交换，交换的结果是建立一个名为ISAKMP SA的安全关联。这个安全关联的作用是保护为安全协议协商SA的后续通信。
- 第二阶段，在ISAKMP SA的保护之下，可由通信的任何一方发起一个快捷模式（Quick Mode）的消息交换序列，完成用于保护通信数据的IPsec SA的协商。（这种模式必须在第一阶段运行后运行，它用于定义Diffie—Hellman专用组）请参RFC2409.



## Ref

[👍 Does IPSec use IKE or ISAKMP? | StackExchange - Information Security]: https://security.stackexchange.com/q/35872/298278
[ISAKMP and IkE | Cisco]: https://learningnetwork.cisco.com/s/question/0D53i00000KsuAGCAZ/isakmp-and-ike
[What's the difference between IKE and ISAKMP ? | StackExchange - Network Engineering]: https://networkengineering.stackexchange.com/q/1/92965
