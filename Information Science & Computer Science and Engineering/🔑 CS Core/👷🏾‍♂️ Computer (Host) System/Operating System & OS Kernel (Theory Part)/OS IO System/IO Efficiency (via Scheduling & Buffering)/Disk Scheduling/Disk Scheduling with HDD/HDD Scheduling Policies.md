# HDD Scheduling Policies

[TOC]



## Res
### Related Topics



## Intro
> **HDD Scheduling Policies' Objective: For a sequence of disk access requests, determine the execution order**

Properties in consideration:
- Performance:
	- average seek distance (平均寻道长度)
	- worst-case seek time (最大寻道延迟)
- Fairness: no starvation

> ⚠ Disk scheduling is non-preemptive

![](../../../../../../../../Assets/Pics/Screenshot%202023-06-19%20at%203.38.38%20PM.png)



## HDD Scheduling Policies Basics
![](../../../../../../../../Assets/Pics/Screenshot%202023-05-25%20at%204.17.42%20PM.png)

> **Legends** 
> 
> The vertical axis corresponds to the tracks on the disk. The horizontal axis corresponds to time or, equivalently, the number of tracks traversed. For this figure, we assume the disk head is initially located at track 100. In this example, we assume a disk with 200 tracks, and the disk request queue has random requests in it. The requested tracks, in the order received by the disk scheduler, are 55, 58, 39, 18, 90, 160, 150, 38, 184. Table 11.2a tabulates the results.


### Priority
With a system based on priority (PRI), the control of the scheduling is outside the control of disk management software. Such an approach is not intended to optimize disk utilization, but to meet other objectives within the OS. Often, short batch jobs and interactive jobs are given higher priority than jobs that require longer computation. This allows a lot of short jobs to be flushed through the system quickly and may provide good interactive response time. However, longer jobs may have to wait excessively long times. Furthermore, such a policy could lead to countermeasures on the part of users, who split their jobs into smaller pieces to beat the system. This type of policy tends to be poor for database systems.


### First-In, First-Out (FIFO)
The simplest form of scheduling is first-in-first-out (FIFO) scheduling, which processes items from the queue in sequential order. This strategy has the advantage of being fair, because every request is honored, and the requests are honored in the order received. Figure 11.7a illustrates the disk arm movement with FIFO. This graph is generated directly from the data in Table 11.2a. As can be seen, the disk accesses are in the same order as the requests were originally received.

With FIFO, if there are only a few processes that require access and if many of the requests are to clustered file sectors, then we can hope for good performance. However, this technique will often approximate random scheduling in performance, if there are many processes competing for the disk. Thus, it may be profitable to con- sider a more sophisticated scheduling policy. A number of these are listed in Table 11.3 and will now be considered.

![](../../../../../../../../Assets/Pics/Screenshot%202023-05-25%20at%204.15.37%20PM.png)


### Last-In, First-Out (LIFO)
Surprisingly, a policy of always taking the most recent request has some merit. In transaction-processing systems, giving the device to the most recent user should result in little or no arm movement for moving through a sequential file. Taking advantage of this locality improves throughput and reduces queue lengths. As long as a job can actively use the file system, it is processed as fast as possible. However, if the disk is kept busy because of a large workload, there is the distinct possibility of starvation. Once a job has entered an I/O request in the queue and fallen back from the head of the line, the job can never regain the head of the line unless the queue in front of it empties.

FIFO, priority, and LIFO (last-in-first-out) scheduling are based solely on attributes of the queue or the requester. If the current track position is known to the scheduler, then scheduling based on the requested item can be employed. We will examine these policies next.


### Shortest Service Time First (SSTF)
> ⚠ while different from previous seemingly assemble policies in other scheduling scenarios, like xxx in cpu, SSTF does provide thoeretically optimal average seek time. This is because ..
> 
> But SSTF is usually better than FIFO.

The shortest-service-time-first (SSTF) policy is to select the disk I/O request that requires the least movement of the disk arm from its current position. Thus, we always choose to incur the minimum seek time. Of course, always choosing the minimum seek time does not guarantee the average seek time over a number of arm movements will be minimum. However, this should provide better performance than FIFO. Because the arm can move in two directions, a random tie-breaking algorithm may be used to resolve cases of equal distances.

Figure 11.7b and Table 11.2b show the performance of SSTF on the same example as was used for FIFO. The first track accessed is 90, because this is the closest requested track to the starting position. The next track accessed is 58 because this is the closest of the remaining requested tracks to the current position of 90. Subsequent tracks are selected accordingly.

![](../../../../../../../../Assets/Pics/Screenshot%202023-05-25%20at%204.16.05%20PM.png)


### SCAN
With the exception of FIFO, all of the policies described so far can leave some request unfulfilled until the entire queue is emptied. That is, there may always be new requests arriving that will be chosen before an existing request. A simple alternative that prevents this sort of starvation is the SCAN algorithm, also known as the elevator algorithm because it operates much the way an elevator does.

With SCAN, the arm is required to move in one direction only, satisfying all outstanding requests en route, until it reaches the last track in that direction or until there are no more requests in that direction. This latter refinement is sometimes referred to as the LOOK policy. The service direction is then reversed and the scan proceeds in the opposite direction, again picking up all requests in order.

Figure 11.7c and Table 11.2c illustrate the SCAN policy. Assuming the initial direction is of increasing track number, then the first track selected is 150, since this is the closest track to the starting track of 100 in the increasing direction.

As can be seen, the SCAN policy behaves almost identically with the SSTF policy. Indeed, if we had assumed the arm was moving in the direction of lower track numbers at the beginning of the example, then the scheduling pattern would have been identical for SSTF and SCAN. However, this is a static example in which no new items are added to the queue. Even when the queue is dynamically changing, SCAN will be similar to SSTF unless the request pattern is unusual.

Note the SCAN policy is biased against the area most recently traversed. Thus, it does not exploit locality as well as SSTF.

It is not difficult to see that the SCAN policy favors jobs whose requests are for tracks nearest to both innermost and outermost tracks and favors the latest-arriving jobs. The first problem can be avoided via the C-SCAN policy, while the second problem is addressed by the N-step-SCAN policy.

![](../../../../../../../../Assets/Pics/Screenshot%202023-05-25%20at%204.16.34%20PM.png)


#### C-SCAN 
The C-SCAN (circular SCAN) policy restricts scanning to one direction only. Thus, when the last track has been visited in one direction, the arm is returned to the opposite end of the disk and the scan begins again. This reduces the maximum delay experienced by new requests. With SCAN, if the expected time for a scan from inner track to outer track is t, then the expected service interval for sectors at the periphery is 2t. With C-SCAN, the interval is on the order of t + smax, where smax is the maximum seek time.

Figure 11.7d and Table 11.2d illustrate C-SCAN behavior. In this case, the first three requested tracks encountered are 150, 160, and 184. Then the scan begins start- ing at the lowest track number, and the next requested track encountered is 18.

![](../../../../../../../../Assets/Pics/Screenshot%202023-05-25%20at%204.16.48%20PM.png)


#### N-STEP-SCAN AND FSCAN
With SSTF, SCAN, and C-SCAN, it is possible the arm may not move for a considerable period of time. For example, if one or a few processes have high access rates to one track, they can monopolize the entire device by repeated requests to that track. High-density multisurface disks are more likely to be affected by this characteristic than lower-density disks and/or disks with only one or two surfaces. To avoid this “arm stickiness,” the disk request queue can be segmented, with one segment at a time being processed completely. Two examples of this approach are N-step-SCAN and FSCAN.

The N-step-SCAN policy segments the disk request queue into subqueues of length N. Subqueues are processed one at a time, using SCAN. While a queue is being processed, new requests must be added to some other queue. If fewer than N requests are available at the end of a scan, then all of them are processed with the next scan. With large values of N, the performance of N-step-SCAN approaches that of SCAN; with a value of N = 1, the FIFO policy is adopted.

FSCAN is a policy that uses two subqueues. When a scan begins, all of the requests are in one of the queues, with the other empty. During the scan, all new requests are put into the other queue. Thus, service of new requests is deferred until all of the old requests have been processed.



## Comparison of HDD Scheduling Algorithms

![](../../../../../../../../Assets/Pics/Screenshot%202023-05-25%20at%204.17.33%20PM.png)




## Ref

