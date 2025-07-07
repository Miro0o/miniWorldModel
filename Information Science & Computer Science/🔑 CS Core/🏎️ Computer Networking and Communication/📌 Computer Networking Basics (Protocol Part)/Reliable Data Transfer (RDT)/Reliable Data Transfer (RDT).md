# Reliable Data Transfer (RDT)

[TOC]



## Res
【深入浅出计算机网络 微课视频】 https://www.bilibili.com/video/BV1NT411g7n6/?p=21&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

🔗 【深入浅出计算机网络 - 3.2.3 （1）可靠传输的相关基本概念】 https://www.bilibili.com/video/BV1mG41157Tb/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

↗ [Error Control & EDAC](../Error%20Control%20&%20EDAC/Error%20Control%20&%20EDAC.md)


## Intro
==RDT exits on every layer of OIS!==

![](../../../../../../Assets/Pics/Screenshot%202023-04-19%20at%208.48.18%20AM.png)

> In the following, we use the terminology “packet” rather than transport-layer “segment.” Because ==the theory developed in this section applies to computer networks in general and not just to the Internet transport layer,== the generic term “packet” is perhaps more appropriate here.


![](../../../../../../Assets/Pics/Screenshot%202023-06-16%20at%208.38.13%20PM.png)
![](../../../../../../Assets/Pics/Screenshot%202023-06-16%20at%208.37.12%20PM.png)


![](../../../../../../Assets/Pics/Screenshot%202023-04-15%20at%209.35.42%20AM.png)
![](../../../../../../Assets/Pics/Screenshot%202023-04-15%20at%209.37.53%20AM.png)
![](../../../../../../Assets/Pics/Screenshot%202023-04-15%20at%209.38.22%20AM.png)


### FSM (Finite Satate Machine)
![](../../../../../../Assets/Pics/Screenshot%202022-11-13%20at%2010.38.37%20AM.png)
<small>FSM is used for RDT demonstration</small>

![](../../../../../../Assets/Pics/Screenshot%202023-04-14%20at%2011.49.52%20AM.png)
<small>FSM Legends</small>

🙈 See ↗ [Automata Theory and (Formal) Language Theory](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logics/😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Automata%20Theory%20and%20(Formal)%20Language%20Theory.md) for detailed FSM info.


### RDT Developments & Main Design Thoughts
1. ↗ [Stop-and-Wait (SW)](Stop-and-Wait%20(SW).md)
2. ↗ [Go-Back-N (GBN)](Go-Back-N%20(GBN).md)
3. ↗ [Select Repeat (SR)](Select%20Repeat%20(SR).md)



## 📌 ARQ (Automatic Repeat reQuest)
Control messages allowing the receiver to let the sender know what has been received correctly, and what has been received in error and thus requires repeating --- in a computer network setting, reliable data transfer protocols based on such retransmission are known as **ARQ (Automatic Repeat reQuest)** protocols.

Fundamentally, **three additional protocol capabilities are required in ARQ protocols** to handle the presence of bit errors:

1. **Error detection**. First, a mechanism is needed to allow the receiver to detect when bit errors have occurred. Recall from the previous section that UDP uses the Inter- net checksum field for exactly this purpose. In Chapter 6, we’ll examine error- detection and -correction techniques in greater detail; these techniques allow the receiver to detect and possibly correct packet bit errors. For now, we need only know that these techniques require that extra bits (beyond the bits of original data to be transferred) be sent from the sender to the receiver; these bits will be gath- ered into the packet checksum field of the rdt2.0 data packet.

2. **Receiver feedback**. Since the sender and receiver are typically executing on dif- ferent end systems, possibly separated by thousands of miles, the only way for the sender to learn of the receiver’s view of the world (in this case, whether or not a packet was received correctly) is for the receiver to provide explicit feedback to the sender. The positive (ACK) and negative (NAK) acknowledgment replies in the message-dictation scenario are examples of such feedback. Our rdt2.0 protocol will similarly send ACK and NAK packets back from the receiver to the sender. In principle, these packets need only be one bit long; for example, a 0 value could indicate a NAK and a value of 1 could indicate an ACK.
 
3. **Retransmission**. A packet that is received in error at the receiver will be retrans- mitted by the sender.


#### Continuing ARQ



## Pipelined RDT (Pipelined Error Recovery)
![](../../../../../../Assets/Pics/Screenshot%202023-04-15%20at%2010.25.21%20AM.png)

Pipelining has the following consequences for reliable data transfer protocols:
- The range of **sequence numbers must be increased**, since each in-transit packet (not counting retransmissions) must have a unique sequence number and there may be multiple, in-transit, unacknowledged packets.  
- The sender and receiver sides of the protocols may have to **buffer more than one packet**. Minimally, the sender will have to buffer packets that have been transmit- ted but not yet acknowledged. Buffering of correctly received packets may also be needed at the receiver, as discussed below.
- The range of sequence numbers needed and the buffering requirements will depend on the manner in which a data transfer protocol responds to lost, corrupted, and overly delayed packets. 

Two basic approaches toward pipelined error recovery can be identified: **Go-Back-N** and **selective repeat**.



## Sliding-Windows Protocol （滑动窗口协议）
#TODO 



## Ref

