# Link Layer Services

[TOC]



## Res
【深入浅出计算机网络 微课视频】 https://www.bilibili.com/video/BV1NT411g7n6/?p=18&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d



## Overview
> 数据链路层把物理层转换为可靠的链路，主要功能包括组帧、物理编址、流量控制、差错控制和接入控制。

![](../../../../../../../Assets/Pics/Screenshot%202023-06-02%20at%202.07.55%20PM.png)



## 1️⃣ Framing & Pass-Through
↗ [Framing & Pass-Through (透明传输)](Framing%20&%20Pass-Through%20(透明传输).md)



## 2️⃣ Link Access
**Link access**. A **medium access control (MAC) protocol** specifies the rules by which a frame is transmitted onto the link. For point-to-point links that have a single sender at one end of the link and a single receiver at the other end of the link, the MAC protocol is simple (or nonexistent) -- the sender can send a frame whenever the link is idle. The more interesting case is when multiple nodes share a single broadcast link -- the so-called **multiple access problem**. Here, the MAC protocol serves to coordinate the frame transmissions of the many nodes.

↗ [Multiple Access Links & Protocols](../../Switched%20LAN/📢%20Broadcast%20Channels/Multiple%20Access%20Links%20&%20Protocols/Multiple%20Access%20Links%20&%20Protocols.md)



## Error Control & RDT
### 3️⃣ Error Control
> ↗ [Error Control & EDAC](../../../Error%20Control%20&%20EDAC/Error%20Control%20&%20EDAC.md)

> A full treatment of the theory and implementation of this topic is itself the topic of many textbooks (e.g., [Schwartz 1980] or [Bertsekas 1991]), and our treatment here is necessarily brief. Our goal here is to develop an intuitive feel for the capabilities that error-detection and -correction techniques provide and to see how a few simple techniques work and are used in practice in the link layer.

![](../../../../../../../Assets/Pics/Screenshot%202023-06-16%20at%208.29.41%20PM.png)

**Error detection and correction**. The link-layer hardware in a receiving node can incorrectly decide that a bit in a frame is zero when it was transmitted as a one, and vice versa. Such bit errors are introduced by **signal attenuation** and **electromagnetic noise**. 

Because there is no need to forward a datagram that has an error, many link-layer protocols provide a mechanism to only detect such bit errors. This is done by having the transmitting node include error-detection bits in the frame, and having the receiving node perform an error check. 

> Recall from Chapters 3 and 4 that the Internet’s transport layer and network layer also provide a limited form of error detection -- the **Internet checksum**. **Error detection in the link layer is usually more sophisticated and is implemented in hardware**. Error correction is similar to error detection, except that a receiver not only detects when bit errors have occurred in the frame but also determines exactly where in the frame the errors have occurred (and then corrects these errors).


![](../../../../../../../Assets/Pics/Screenshot%202023-05-31%20at%208.45.59%20AM.png)

Generally, more sophisticated error-detection and -correction techniques (that is, those that have a smaller probability of allowing undetected bit errors) incur a larger overhead -- more computation is needed to compute and transmit a larger number of error-detection and -correction bits.

---
Let’s now examine three techniques for detecting errors in the transmitted data
- **parity checks** (to illustrate the basic ideas behind error detection and correction)
- **check-summing methods** (which are more typically used in the transport layer)
- **cyclic redundancy checks (CRC)** (which are more typically used in the link layer in an adapter).

Go to the link above for error control mechanisms in the field of communication.


### 4️⃣ Reliable Data Transfer (RDT)
> ↗ [Reliable Data Transfer (RDT)](../../../Reliable%20Data%20Transfer%20(RDT)/Reliable%20Data%20Transfer%20(RDT).md)

![](../../../../../../../Assets/Pics/Screenshot%202023-06-16%20at%208.33.18%20PM.png)

**Reliable delivery**. When a link-layer protocol provides reliable delivery service, it guarantees to move each network-layer datagram across the link without error.

Recall that certain transport-layer protocols (such as TCP) also provide a reliable delivery service. Similar to a transport-layer reliable delivery service, a link-layer reliable delivery service can be achieved with acknowledgments and retransmissions.

- A link-layer reliable delivery service is often used for links that are prone to **high error rates**, such as a **wireless link**, with the goal of **correcting an error locally** -- on the link where the error occurs -- rather than forcing an end-to-end retransmission of the data by a transport- or application-layer protocol. 
- However, link-layer reliable delivery can be considered an unnecessary overhead for **low bit-error links**, including fiber, coax, and many twisted-pair copper links. For this reason, many wired link-layer protocols do not provide a reliable delivery service.

![](../../../../../../../Assets/Pics/Screenshot%202023-06-16%20at%208.36.10%20PM.png)



## Ref

