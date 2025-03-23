# RTOS (Real-Time Operating System)

[TOC]



## Res
↗ [Real-Time Scheduling](../../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Scheduling%20&%20Resource%20Management/Real-Time%20Scheduling/Real-Time%20Scheduling.md)



## Intro
Real-time systems are used for **process control** in manufacturing plants, assembly lines, robotics, and complex physical systems such as the space station, to name only a few.

Real-time systems have severe **timing constraints**. If specific deadlines are not met, physical damage or other undesirable effects to persons or property can occur. Because these systems must respond to external events, **correct process scheduling** is critical. 

> Imagine a system controlling a nuclear power plant that couldn’t respond quickly enough to an alarm signaling critically high temperatures in the core! 

- In **hard real-time systems** (with potentially fatal results if deadlines aren’t met), there can be no errors. 
- In **soft real-time systems**, meeting deadlines is desirable, but does not result in catastrophic results if deadlines are missed. 

Real-time systems, as we have mentioned, require specially designed operating systems. Real-time and embedded systems require an operating system of minimal size and minimal resource utilization.

Wireless networks, which combine the compactness of embedded systems with issues characteristic of networked systems, have also motivated innovations in operating systems design.



## Ref

