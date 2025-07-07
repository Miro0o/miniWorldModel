# Kerberos

[TOC]



## Res
🏠 https://web.mit.edu/kerberos/
Kerberos: The Network Authentication Protocol | MIT
🏠 https://kerberos.org

📂 https://web.mit.edu/kerberos/krb5-1.21/doc/index.html
MIT Kerberos Documentation (1.21.2)

📂 https://opensource.apple.com/source/Kerberos/Kerberos-62/KerberosClients/KerberosApp/Documentation/using-osx.html
Using the Kerberos Application on Mac OS X


### Related Topics



### Related Projects
https://github.com/GhostPack/Rubeus
Rubeus is a C# toolset for raw Kerberos interaction and abuses. It is **heavily** adapted from [Benjamin Delpy](https://twitter.com/gentilkiwi)'s [Kekeo](https://github.com/gentilkiwi/kekeo/)project (CC BY-NC-SA 4.0 license) and [Vincent LE TOUX](https://twitter.com/mysmartlogon)'s [MakeMeEnterpriseAdmin](https://github.com/vletoux/MakeMeEnterpriseAdmin) project (GPL v3.0 license). Full credit goes to Benjamin and Vincent for working out the hard components of weaponization- without their prior work this project would not exist.



## Intro
![](../../../../../../../../../../Assets/Pics/kerberos.sml.png)

**Kerberos** ([/ˈkɜːrbərɒs/](https://en.wikipedia.org/wiki/Help:IPA/English "Help:IPA/English")) is a computer-network authentication protocol that works on the basis of **tickets** to allow nodes communicating over a non-secure network to prove their identity to one another in a secure manner. Its designers aimed it primarily at a **client–server** model, and it provides **mutual authentication** — both the user and the server verify each other's identity. Kerberos protocol messages are protected against [eavesdropping](https://en.wikipedia.org/wiki/Computer_insecurity#Eavesdropping "Computer insecurity") and [replay attacks](https://en.wikipedia.org/wiki/Replay_attack "Replay attack").

Kerberos builds on **symmetric-key cryptography** and requires a trusted third party, and optionally may use **public-key cryptography** during certain phases of authentication. Kerberos uses UDP port 88 by default.

The protocol was named after the character _[Kerberos](https://en.wikipedia.org/wiki/Cerberus "Cerberus")_ (or _[Cerberus](https://en.wikipedia.org/wiki/Cerberus "Cerberus")_) from Greek mythology, the ferocious three-headed guard dog of [Hades](https://en.wikipedia.org/wiki/Hades "Hades").


### Kerberos Overview
Kerberos协议的工作过程：Client从KDC获取TGT，Client利用获取的TGT向KDC请求其他Service的Ticket（通过获取的session进行访问）。这个部分简单总结了kerberos协议的认证流程，如下：

![](../../../../../../../../../../Assets/Pics/Pasted%20image%2020231111095817.png)

② User向KDC中的AS请求身份验证，AS为user和TGS生成一个session key：SK_TGS，并发送{TGT，SK_TGS} K_USER；其中，{TGT，SK_TGS}K_USER表示使用user的密码加密的packet，包含了TGT和用户与TGS的session key；这个请求验证的过程实际上是使用kinit来完成的，kinit将username传给AS，AS查找username的密码，将TGT和SK_TGS使用用户密码加密后发送给kinit，kinit要求用户输入密码，解密后得到TGT和SK；其中，TGT使用TGS的密码加密，信息内容为{user，address，tgs_name，start_time，lisftime，SK_TGS} K_TGS

④ User向KDC中的TGS请求访问某个Service的ST，发送[ TGT，Authenticator]；其中，Authenticator用于验证发送该请求的user就是TGT中所声明的user，内容为：{ user,address,start_time,lifetime}；Authenticator使用的TGS和user之间的session key加密的，防止TGT被盗。TGS先使用自己的密码解开TGT获得它与user之间的session key，然后使用session key解密Authenticator，验证用户和有效期；

⑤ TGS判断无误后，为user和Service之间生成一个新的session key：SK_Service；然后发送给user一个包：[{ SK_Service } SK_TGS, ST]；其中，ST是使用Service的密码加密的，SK_Service使用TGS和user之间的session key加密的；ST的内容为：{ user, address, start_time, lifetime, SK_Service } K_Service

⑥ User使用与TGS之间的会话密钥解开包得到与Service之间的会话密钥SK_Service，然后使用SK_Service生成一个Authenticator，向Service发送[ ST，Authenticator ]; 其中，此处的Authenticator是使用user和service之间的会话密钥加密的，Service收到包后先使用自己的密码解密ST，或者会话密钥SK_Service，然后使用SK_Service解密Authenticator来验证发送请求的用户就是票中所声明的用户。

Service向用户发送一个包以证明自己的身份，这个包使用SK_Service加密。

此后user与Service之间使用SK_Service进行通信，且在TGT有效期内，user直接跳过第一步直接从第二步使用TGT想TGS证明自己的身份。

**注意**：user client会等待service server发送确认信息，如果不是正确的service server，就无法解开ST，也就无法获得会话密钥，从而避免用户使用错误的服务器。上述流程图也就是CAS的原理：用户访问某个应用程序，应用服务器接受请求后检查ST和TGT，如果都有则用户正常进行访问；如果没有或者不对（步骤1），转到CAS认证服务器的登录页面，通过安全认证后得到相应应用的TGT（步骤2-3）和该应用的ST（步骤4-5），再重定向到相关的应用服务器（步骤6），如果在会话周期内再定向到别的应用（步骤7），将出示TGT和该应用的ST（如果没有，就直接通过步骤4-5得到该应用的ST，步骤8）进行认证。


### Kerberos Features
优点
- 单点登录，只要用户拿到了**TGT**并且该**TGT**没有过期，就可以使用该**TGT**通过**TGS**完成到任一个服务器的鉴别而不必重新输入密码
- 与授权机制相结合
- 支持双向的身份鉴别通过交换“跨域密钥”实现分布式网 络环境下的鉴别

缺点
- **AS**和**TGS**是集中式管理，容易形成瓶颈，系统的性能和安全也严重依赖于**AS**和**TGS**的性能和安全
- 时钟同步问题
- 身份鉴别采用的是对称加密机制，随用户数量增加，密钥管理较复杂



## Ref
[Kerberos (protocol) | Wikipedia]: https://en.wikipedia.org/wiki/Kerberos_(protocol)

[Kerberos | GeeksforGeeks]: https://www.geeksforgeeks.org/kerberos/

[👍 7 使用 Kerberos 进行网络身份验证 | SUSE]: https://documentation.suse.com/zh-cn/sles/15-SP4/html/SLES-all/cha-security-kerberos.html

[kerberos使用手册]: https://wzktravel.github.io/2016/03/01/how-to-use-kerberos-in-CDH/
```shell
# Normal User
kinit username
kpassword
kinit -R
kdestroy
kinit -k -t user.keytab username
klist -k user.keytab

# Admin User
# etc...

# key generation
ktutil
ktutil: rkt a.keytab
ktutil: rkt b.keytab
ktutil: wkt merge.keytab
ktutil: exit
```

[👍 kerberos使用详解 | CSDN]: https://blog.csdn.net/snail_bing/article/details/118081091

[👍 Kerberos基本原理、安装部署及用法]: https://www.cnblogs.com/swordfall/p/12009716.html

[👍 Kerberos for macOS | The University of Edinburgh - informatics]: https://computing.help.inf.ed.ac.uk/kerberos-mac-os-x

[👍 Using the Kerberos Applciation on Mac OS X | MIT Macintoch Development]: https://opensource.apple.com/source/Kerberos/Kerberos-62/KerberosClients/KerberosApp/Documentation/using-osx.html?f=text
