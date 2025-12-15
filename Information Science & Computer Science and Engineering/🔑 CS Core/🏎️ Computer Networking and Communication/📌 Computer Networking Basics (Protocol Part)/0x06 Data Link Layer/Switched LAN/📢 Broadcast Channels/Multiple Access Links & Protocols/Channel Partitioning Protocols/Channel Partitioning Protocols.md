# Channel Partitioning Protocols

[TOC]



## Res
### Related Topics



## Intro
### TDM(TDMA) & FDM(FDMA): Review
> TDM: Time-division Multiplexing
> TDMA: Time-division Multiple Access
> 
> FDM: Frequency-division Multiplexing
> FDMA: Frequency-division Multiple Access


Recall from our early discussion back in Section 1.3 that **time-division multiplexing (TDM)** and **frequency-division multiplexing (FDM)** are two techniques that can be used to partition a broadcast channel’s bandwidth among all nodes sharing that channel. 

![](../../../../../../../../../Assets/Pics/Screenshot%202023-06-12%20at%204.47.42%20PM.png)

TDM is appealing because it eliminates collisions and is perfectly fair: Each node gets a dedicated transmission rate of R/N bps during each frame time. However, it has two major drawbacks. 
1. First, a node is limited to an average rate of R/N bps even when it is the only node with packets to send. 
2. A second drawback is that a node must always wait for its turn in the transmission sequence -- again, even when it is the only node with a frame to send. Imagine the partygoer who is the only one with anything to say (and imagine that this is the even rarer circumstance where everyone wants to hear what that one person has to say).
Clearly, TDM would be a poor choice for a multiple access protocol for this particular party.

While TDM shares the broadcast channel in time, FDM divides the R bps channel into different frequencies (each with a bandwidth of R/N) and assigns each frequency to one of the N nodes. FDM thus creates N smaller channels of R/N bps out of the single, larger R bps channel. 

FDM shares both the advantages and drawbacks of TDM. It avoids collisions and divides the bandwidth fairly among the N nodes. However, FDM also shares a principal disadvantage with TDM—a node is limited to a bandwidth of R/N, even when it is the only node with packets to send.

Given above reasons, a third protocols is needed...



## Code Division Multiple Access (CDMA)
↗ [Code Division Multiple Access (CDMA)](../../../../../0x07%20Physical%20Layer/Wireless%20&%20Mobile%20Network/Wireless%20Access/Code%20Division%20Multiple%20Access%20(CDMA)/Code%20Division%20Multiple%20Access%20(CDMA).md)



## Ref

