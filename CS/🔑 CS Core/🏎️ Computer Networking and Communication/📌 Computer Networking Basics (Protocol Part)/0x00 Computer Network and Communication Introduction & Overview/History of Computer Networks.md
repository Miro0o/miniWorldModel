# History of Computer Networks

[TOC]



## Res
### Related Topics
↗ [Internet and Internet Protocol Suites (TCP&IP Protocol Suites)](Computer%20Network%20Protocol%20Suites%20Standardizations%20&%20Administration/Internet%20and%20Internet%20Protocol%20Suites%20(TCP&IP%20Protocol%20Suites)/Internet%20and%20Internet%20Protocol%20Suites%20(TCP&IP%20Protocol%20Suites).md)



## Evolution of Communication Technology
> 🔗 [深入浅出计算机网络 - 1.3 电路交换、分组交换和报文交换](https://www.bilibili.com/video/BV1LB4y1x7D9/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d)

### 1️⃣ Circuit Switching (电路交换)
![](../../../../../../Assets/Pics/Screenshot%202023-03-22%20at%2010.16.41%20AM.png)


### 2️⃣ Message Switching (报文交换)
![](../../../../../../Assets/Pics/Screenshot%202023-03-22%20at%2010.16.22%20AM.png)


### 3️⃣ Packet Switching (Store-Forward Switching) (分组交换)
![](../../../../../../Assets/Pics/Screenshot%202023-03-22%20at%2010.13.01%20AM.png)
#### 3️⃣-1️⃣ Datagram Switching Network
> Connection-less, UDP

**Datagram packet switching** is a packet switching method that treats each packet, or datagram, as a separate entity. Each packet is routed via the network on its own. It is a service that **does not require a connection**. Because there is no specific channel for a connection session, there is no need to reserve resources. As a result, packets have a header with all the destination’s information. The intermediate nodes assess a packet’s header and select an appropriate link to a different node closer to the destination.
#### 3️⃣-2️⃣ Virtual Circuit Switching Network
> Connection-oriented, TCP

**Virtual packet switching** approach in which a path is built between the source and the final destination through which all packets are routed throughout a call is known as **virtual circuit switching**. Because the connection looks to the user to be an infatuated physical circuit, this path is referred to as a virtual circuit. Other communications, on the other hand, may be sharing parts of the same path. Before the data transmission can commence, the source and destination must agree on a virtual circuit path. For the decision, all intermediary nodes between the two places add a routing entry to their routing database. Additional parameters, like the utmost packet size, also are exchanged between the source and therefore the destination during call setup. The virtual circuit is cleared after the info transfer is completed.


### Summary
#### Circuit Switching 🆚 Message Switching 🆚 Packet Switching 
![](../../../../../../Assets/Pics/Screenshot%202023-03-22%20at%209.41.57%20AM.png)
#### Datagram Switching 🆚 VS Switching
##### Datagram Switching Pros & Cons
**Advantages of Datagram Switching:**
- Scalability: Datagram switching is highly scalable and can handle large amounts of traffic on a network.
- Flexibility: Datagram switching is flexible and can support variable packet sizes and data rates.
- Simple routing: Datagram switching does not require a pre-established path for each packet, allowing packets to be routed dynamically.
- Lower latency: Datagram switching typically has lower latency than virtual circuit switching, as packets are sent immediately without any delay for setup.

**Disadvantages of Datagram Switching:**
- Higher error rates: Datagram switching is more susceptible to errors than virtual circuit switching, as there is no guaranteed delivery or error correction.
- Lack of QoS: Datagram switching does not provide any Quality of Service guarantees, meaning that different types of traffic may be treated equally.
- Increased network congestion: Without a pre-established path for each packet, datagram switching can lead to increased network congestion and potential delays.
##### VC Switching Pros & Cons
**Advantages of Virtual Circuit Switching:**
- Guaranteed delivery: Virtual circuit switching provides guaranteed delivery of packets, reducing the likelihood of lost or corrupted data.
- Lower error rates: Virtual circuit switching typically has lower error rates than datagram switching due to its error correction mechanisms.
- QoS support: Virtual circuit switching supports Quality of Service guarantees, allowing for prioritization of different types of traffic.
- Efficient use of bandwidth: Virtual circuit switching establishes a pre-determined path for each packet, resulting in efficient use of bandwidth.

**Disadvantages of Virtual Circuit Switching:**
- Limited scalability: Virtual circuit switching is less scalable than datagram switching and may not be suitable for large networks.
- Increased setup time: Virtual circuit switching requires a setup time for each connection, which can lead to increased latency and delay.
- Fixed data rates: Virtual circuit switching typically supports fixed data rates, which may not be suitable for applications that require variable packet sizes or data rates.
##### Similarities Between Datagram & VC
- Both are packet-switching technologies: Datagram switching and virtual circuit switching are both packet-switching technologies, which means that they break up data into small packets for transmission across a network.
- Both can handle multiple transmissions simultaneously: Both Datagram and virtual circuit switching can handle multiple transmissions simultaneously by dividing data into packets and transmitting them separately.
- Both use connection-oriented and connectionless communication: Virtual circuit switching can use both connection-oriented and connectionless communication, while Datagram switching typically uses connectionless communication. However, both techniques can support both types of communication.
- Both support error correction: Both Datagram and virtual circuit switching support error correction by using checksums or parity checks to ensure the accuracy of transmitted data.
- Both can handle variable-length packets: Datagram and virtual circuit switching can handle variable-length packets, which means that they can adjust to the size of the data being transmitted.
- Both can support QoS (Quality of Service): Both Datagram and virtual circuit switching can support QoS, which allows for the prioritization of certain types of data over others.
- Both can support fragmentation: Both Datagram and virtual circuit switching can support fragmentation, which allows for large data packets to be broken up into smaller packets for transmission across a network.
##### Difference Between Datagram & VC

|                                                                                                                                                                                             |                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Datagram Switching**                                                                                                                                                                      | **Virtual Circuit**                                                                                                                                                                                                     |
| It is connection less service. There is no need for reservation of resources as there is no dedicated path for a connection session.                                                        | Virtual circuits are connection-oriented, which means that there is a reservation of resources like buffers, bandwidth, etc. for the time during which the new setup VC is going to be used by a data transfer session. |
| All packets are free to use any available path. As a result, intermediate routers calculate routes on the go due to dynamically changing routing tables on routers.                         | The first sent packet reserves resources at each server along the path. Subsequent packets will follow the same path as the first sent packet for the connection time.                                                  |
| Data packets reach the destination in random order, which means they need not reach in the order in which they were sent out.                                                               | Packets reach in order to the destination as data follows the same path.                                                                                                                                                |
| Every packet is free to choose any path, and hence all the packets must be associated with a header containing information about the source and the upper layer data.                       | All the packets follow the same path and hence a global header is required only for the first packet of connection and other packets will not require it.                                                               |
| Datagram networks are not as reliable as Virtual Circuits.                                                                                                                                  | Virtual Circuits are highly reliable.                                                                                                                                                                                   |
| Efficiency high, delay more                                                                                                                                                                 | Efficiency low and delay less                                                                                                                                                                                           |
| But it is always easy and cost-efficient to implement datagram networks as there is no need of reserving resources and making a dedicated path each time an application has to communicate. | Implementation of virtual circuits is costly as each time a new connection has to be set up with reservation of resources and extra information handling at routers.                                                    |
| A Datagram based network is a true packet switched network. There is no fixed path for transmitting data.                                                                                   | A virtual circuit network uses a fixed path for a particular session, after which it breaks the connection and another path has to be set up for the next session.                                                      |
| Widely used in Internet                                                                                                                                                                     | Used in X.25, ATM(Asynchronous Transfer Mode)                                                                                                                                                                           |



## Development of Computer Networks
#TODO 



## Ref
https://www.computerhistory.org/timeline/networking-the-web/

[电路交换、报文交换与分组交换 - 一只小白的文章 - 知乎]: https://zhuanlan.zhihu.com/p/205251011

[报文交换]: https://baike.baidu.com/item/报文交换

[Types of Packet Switching Network]: https://www.tutorialspoint.com/what-is-the-concept-of-datagram-packet-switching

![](https://www.tutorialspoint.com/assets/questions/media/56329/packet_switching.jpg)

[👍 Virtual Circuits vs Datagram Networks | javaTpoint]: https://www.javatpoint.com/virtual-circuits-vs-datagram-networks

[👍 电路交换、报文交换与分组交换 - 一只小白的文章 - 知乎]: https://zhuanlan.zhihu.com/p/205251011

分组交换还可以进一步细分为数据报方式和虚电路方式。 数据报为网络层提供无连接服务，不同分组到达目的节点可能会乱序、重复或丢失。分组在交换节点时，可能会带来一定的时延。数据报方式适用于突发性通信，不适合长报文、会话式通信。 虚电路方式将数据报方式与电路交换结合，发挥两者优点。虚电路在源节点和目的节点建立一条逻辑链路，与电路交换不同的地方在于虚电路并不是独占链路资源的。虚电路方式避免了分组的乱序、重复和丢失等问题。

下面总结一下数据报服务和虚电路服务的区别：
- 建立连接：数据报服务不要建立连接，虚电路服务需要建立连接。
- 目的地址：数据报服务的每个分组有完整的目的地址，虚电路服务只在建立连接时使用目的地址，当连接建立完成后使用长度较短的虚电路号。
- 路由选择：数据报服务的每个分组都是独立进行路由选择与转发的，虚电路服务属于同一条虚电路的分组按同一路由进行转发。
- 分组顺序：数据报服务不保证分组顺序，虚电路服务保证分组有序到达。
- 可靠性：数据报服务不保证可靠通信，由用户主机保证可靠性，虚电路可靠性由网络来保证。
- 对网络故障的适应性：数据报服务出故障的节点丢失分组，其他分组路径变化可正常传输，虚电路服务所有经过故障节点的虚电路都不能工作。
- 差错处理和流量控制：数据报服务由用户主机进行流量控制，不保证数据可靠性，虚电路服务可由分组交换网或用户主机负责差错处理及流量控制。


[👍 Difference between Datagram Switching & Virtual Circuit | GeeksforGeeks]: https://www.geeksforgeeks.org/difference-between-datagram-switching-virtual-circuit/
