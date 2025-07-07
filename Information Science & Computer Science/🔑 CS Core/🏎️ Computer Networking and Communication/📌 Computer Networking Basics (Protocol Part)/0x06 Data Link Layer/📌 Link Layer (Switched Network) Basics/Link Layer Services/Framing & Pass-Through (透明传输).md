# Framing & Pass-Through (透明传输)

[TOC]



## Res
【深入浅出计算机网络 微课视频】 https://www.bilibili.com/video/BV1NT411g7n6/?p=19&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d



## Intro
**Framing**. Almost all link-layer protocols encapsulate each network-layer datagram within a link-layer frame before transmission over the link. A frame consists of a data field, in which the network-layer datagram is inserted, and a number of header fields. The structure of the frame is specified by the link-layer protocol. 

![](../../../../../../../Assets/Pics/Screenshot%202023-06-02%20at%202.15.03%20PM.png)



## Framing
![](../../../../../../../Assets/Pics/Screenshot%202023-06-02%20at%202.05.18%20PM.png)

![](../../../../../../../Assets/Pics/Screenshot%202023-06-16%20at%208.18.06%20PM.png)

### Frame Boarding 
#### Frame Boarding with Frame Header /Tailer
![](../../../../../../../Assets/Pics/Screenshot%202023-06-16%20at%208.19.49%20PM.png)


#### Frame Boarding without Frame Header /Tailer
![](../../../../../../../Assets/Pics/Screenshot%202023-06-16%20at%208.20.50%20PM.png)
![](../../../../../../../Assets/Pics/Screenshot%202023-06-16%20at%208.21.12%20PM.png)




## Pass-Through
![](../../../../../../../Assets/Pics/Screenshot%202023-06-16%20at%208.15.41%20PM.png)

![](../../../../../../../Assets/Pics/Screenshot%202023-06-02%20at%202.06.17%20PM.png)


### Frame Delimiters & ESC Character
#### Character Filling (Byte-oriented Physical Link)
![](../../../../../../../Assets/Pics/Screenshot%202023-06-16%20at%208.27.47%20PM.png)


#### Bit Filling (Bit-Oriented Physical Link)
![](../../../../../../../Assets/Pics/Screenshot%202023-06-16%20at%208.24.33%20PM.png)

![](../../../../../../../Assets/Pics/Screenshot%202023-06-16%20at%208.25.00%20PM.png)

## Ref

