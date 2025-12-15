# Disk Scheduling with HDD

[TOC]



## Res
### Related Topics



## Intro
### Recap: Magnetic Disk

![|400](../../../../../../../../Assets/Pics/Pasted%20image%2020230619155434.png)



### ⭐️ Disk Performance Parameters

![](../../../../../../../../Assets/Pics/Screenshot%202023-05-25%20at%203.51.34%20PM.png)


#### Seek Time
Seek time is the time required to move the disk arm to the required track. It turns out this is a difficult quantity to pin down. The seek time consists of two key components: the initial startup time, and the time taken to traverse the tracks that have to be crossed once the access arm is up to speed. Unfortunately, the traversal time is not a linear function of the number of tracks but includes a settling time (time after positioning the head over the target track until track identification is confirmed).

Much improvement comes from smaller and lighter disk components. Some years ago, a typical disk was 14 inches (36 cm) in diameter, whereas the most common size today is 3.5 inches (8.9 cm), reducing the distance that the arm has to travel. A typical average seek time on contemporary hard disks is under 10 ms.

##### Seek Time & Optimization
![](../../../../../../../../Assets/Pics/Screenshot%202023-06-19%20at%204.07.26%20PM.png)

#TODO 


#### Rotational Latency/Delay
Rotational delay is the time required for the addressed area of the disk to rotate into a position where it is accessible by the read/write head. Disks rotate at speeds ranging from 3,600 rpm (for handheld devices such as digital cameras) up to, as of this writing, 15,000 rpm; at this latter speed, there is one revolution per 4 ms. Thus, on average, the rotational delay will be 2 ms.


#### Transfer Time
The transfer time to or from the disk depends on the rotation speed of the disk in the following fashion:
$$T = \frac{b}{rN}$$ 
where

T = transfer time,  
b = number of bytes to be transferred,  
N = number of bytes on a track, and  
r = rotation speed, in revolutions per second.


#### 🎯 Average Access Time
**Average time** to complete a read/write
$$T=T_s+T_r+T_d$$

$T_s$: Average seek time (平均寻道时间)
- time to move the head to the target track

$T_r$: Average rotational latency (平均旋转延迟)
- time to move the head to the target sector

$T_d$: Time to transfer the data (数据传输时间)
- time to move a sector under the head

Thus, the total average access time can be expressed as
$$T_a = T_s + \frac{1}{2r} + \frac{b}{rN}$$
where Ts is the average seek time.


#### 🏁 A Timing Comparision
#TODO 



## HHD Scheduling Policies (Optimization of Seek Time)
> Disk scheduling optimizes average seek time by controlling the order of processing I/O requests

↗ [HDD Scheduling Policies](HDD%20Scheduling%20Policies.md)



## Ref

