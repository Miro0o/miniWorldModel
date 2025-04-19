# Real-Time Scheduling

[TOC]



## Res
↗ [RTOS (Real-Time Operating System)](../../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Operating%20Systems/🐎%20RTOS%20(Real-Time%20Operating%20System)/RTOS%20(Real-Time%20Operating%20System).md)



## Intro

![|500](../../../../../../Assets/Pics/Screenshot%202023-05-25%20at%202.14.38%20PM.png)

### Important Real-Time System Properties
#### 1️⃣ Deadline-sensitive
There are two types of deadlines
- Hard (硬性截止时间):  time before which a job must complete
- Soft (软截止时间): time before which a job is preferred to complete

Quantified by the proportion of jobs that meet their hard deadlines (时限内完成/总任务数) or penalties of jobs that miss their soft deadline


In practice, the following attributes must be considered
- Start time (release time): the time when a job must start (启动期限)
- Stop time (finish time): the time when a job must complete (完成期限)
- Priority: some jobs must finish before others (优先级)
- Hierarchy: some jobs must finish together (层次结构)


#### 2️⃣ Periodic



## RT Scheduling Algorithms


## Priority Inversion
Priority inversion is a phenomenon that can occur in any priority-based preemptive scheduling scheme, but is particularly relevant in the context of real-time scheduling. The best-known instance of priority inversion involved the Mars Pathfinder mission. ThisroverrobotlandedonMarsonJuly4,1997,andbegangatheringandtransmitting voluminous data back to Earth. But a few days into the mission, the lander software began experiencing total system resets, each resulting in losses of data. After much effort by the Jet Propulsion Laboratory (JPL) team that built the Pathfinder, the problem was traced to priority inversion [JONE97].




## Ref

