# TCP Congestion Contorl

[TOC]



## Res
### Related Topics


### Learning Resources
🔗【深入浅出计算机网络 - 5.3.4~5.3.5 TCP的拥塞控制以及与网际层拥塞控制的关系】 https://www.bilibili.com/video/BV1h24y1o7Uj/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d



## Congestion Overview
![](../../../../../../Assets/Pics/Screenshot%202023-04-22%20at%202.31.30%20PM.png)


### `cwnd` & `swnd` & `ssthresh` (Sender Side)




## 🎯 Classic TCP Congestion Control
![](../../../../../../Assets/Pics/Screenshot%202023-06-17%20at%208.56.52%20AM.png)


### 👉 TCP Tahoe (1988)
#### Slow-Start & Congestion Avoidance
![](../../../../../../Assets/Pics/Screenshot%202023-04-22%20at%202.33.10%20PM.png)
![](../../../../../../Assets/Pics/Screenshot%202023-04-22%20at%202.35.32%20PM.png)


### 👉 TCP Reno (1990)
![](../../../../../../Assets/Pics/Screenshot%202023-04-22%20at%202.40.35%20PM.png)

#### Fast Retransmit
![](../../../../../../Assets/Pics/Screenshot%202023-04-22%20at%202.37.56%20PM.png)

#### Fast Recovery
![](../../../../../../Assets/Pics/Screenshot%202023-04-22%20at%202.38.42%20PM.png)

#### TCP Reno Congestion Control Process
![](../../../../../../Assets/Pics/Screenshot%202023-04-22%20at%202.39.50%20PM.png)


![](../../../../../../Assets/Pics/Screenshot%202023-04-22%20at%202.40.05%20PM.png)


### TCP Tahoe & Reno: Retrospective
#### TCP Reno Workflow

![Screenshot 2022-11-13 at 12.44.47 AM](../../../../../../Assets/Pics/Screenshot%202022-11-13%20at%2012.58.06%20AM.png)

![](../../../../../../Assets/Pics/Screenshot%202023-04-28%20at%2011.26.17%20AM.png)


#### AIMD (Additive Increase, Multiplicative Decrease)
![Screenshot 2022-11-13 at 11.49.22 AM](../../../../../../Assets/Pics/Screenshot%202022-11-13%20at%2011.49.22%20AM.png)

![](../../../../../../Assets/Pics/Screenshot%202023-04-28%20at%2011.50.05%20AM.png)


### Macroscopic Description of TCP Reno Throughput




### 👉 TCP QUBIC
> 🔗 [ECE 416 Extra Presentation: Congestion Control: TCP Cubic, LEDBAT, and BBR](https://youtu.be/vqoLacbGIc0)
> 

Indeed, cutting the sending rate in half (or even worse, cutting the sending rate to one packet per RTT as in an earlier version of TCP known as TCP Tahoe) and then increasing rather slowly over time may be overly cautious. If the state of the congested link where packet loss occurred hasn’t changed much, then perhaps it’s better to more quickly ramp up the sending rate to get close to the pre-loss sending rate and only then probe cautiously for bandwidth. This insight lies at the heart of a flavor of TCP known as **TCP CUBIC** [Ha 2008, RFC 8312].



[CUBIC: A New TCP-Friendly High-Speed TCP Variant]: https://www.cs.princeton.edu/courses/archive/fall16/cos561/papers/Cubic08.pdf, "Lisong Xu"
[CUBIC TCP | Wikipedia]: https://en.wikipedia.org/wiki/CUBIC_TCP



## 🎯 TCP LEDBAT
#TODO 



## 🎯 TCP BBR
#TODO 



## 🆚 TCP Congestion Control & Network Congestion Control

![Screenshot 2022-11-13 at 10.58.57 AM](../../../../../../Assets/Pics/Screenshot%202022-11-13%20at%2010.58.57%20AM.png)



## Ref
[CUBIC TCP | Wikipedia]: https://en.wikipedia.org/wiki/CUBIC_TCP

