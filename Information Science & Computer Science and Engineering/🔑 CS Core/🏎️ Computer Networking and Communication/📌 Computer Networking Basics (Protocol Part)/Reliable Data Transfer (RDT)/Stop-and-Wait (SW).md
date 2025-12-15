# Stop-and-Wait (SW)

[TOC]



## Res
### Related Topics


### Learning Resources
🔗【深入浅出计算机网络 - 3.2.3 （2）可靠传输的实现机制 - 停止-等待协议】 https://www.bilibili.com/video/BV1WG4y167Gr/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d



## Overview
![](../../../../../../Assets/Pics/Screenshot%202023-06-16%20at%208.47.09%20PM.png)


### rdt 1.0: reliable transfer over reliable channel
![](../../../../../../Assets/Pics/Screenshot%202022-11-20%20at%2010.27.32%20AM.png)


### rdt 2.0: channel with bit errors （否认重传）
![](../../../../../../Assets/Pics/Screenshot%202022-11-20%20at%2010.29.42%20AM.png)
<small>rdt 2.0 corrupted packet scenario</small>

![](../../../../../../Assets/Pics/Screenshot%202023-04-15%20at%209.57.30%20AM.png)

![](../../../../../../Assets/Pics/Screenshot%202023-04-19%20at%2012.36.41%20PM.png)

### rdt 2.1: handling garbled ack/nak（否认重传+数据分组）
![](../../../../../../Assets/Pics/Screenshot%202022-11-20%20at%2010.30.10%20AM.png)
<small>rdt 2.1 Sender, handling garbled ACK/NAKs</small>


![](../../../../../../Assets/Pics/Screenshot%202022-11-20%20at%2010.30.20%20AM.png)
<small>rdt 2.1 Reseiver, handling garbled ACK/NAKs</small>


### rdt 2.2: NAK-free（确认分组）
![](../../../../../../Assets/Pics/Screenshot%202022-11-20%20at%2010.32.54%20AM.png)
<small>rdt 2.2 Sender, Receiver fragments</small>


### rdt 3.0: channel with errors and loss (超时重传 + 分组确认)

![](../../../../../../Assets/Pics/Screenshot%202022-11-20%20at%2010.33.57%20AM.png)
<small>rdt 3.0 Sender</small>


![](../../../../../../Assets/Pics/Screenshot%202023-04-15%20at%209.57.41%20AM.png)
![](../../../../../../Assets/Pics/Screenshot%202023-04-15%20at%209.58.00%20AM.png)![](../../../../../../Assets/Pics/Screenshot%202023-04-15%20at%209.58.21%20AM.png)

![](../../../../../../Assets/Pics/Screenshot%202023-04-15%20at%209.44.37%20AM.png)



## SW Utilization
![](../../../../../../Assets/Pics/Screenshot%202023-04-19%20at%208.56.34%20AM.png)

![](../../../../../../Assets/Pics/Screenshot%202023-04-15%20at%209.59.30%20AM.png)

![](../../../../../../Assets/Pics/Screenshot%202023-06-16%20at%208.50.40%20PM.png)

![](../../../../../../Assets/Pics/Screenshot%202023-06-16%20at%208.52.09%20PM.png)


## Ref

