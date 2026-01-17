# Development(History) of Operating Systems

[TOC]



## Res
### Related Topics
↗ [Digital (Logic) Electronics Foundations](../../../EE%20Related%20Theories%20&%20Hardware%20Implementation/⚡️%20Digital%20(Logic)%20Electronics%20Foundations/Digital%20(Logic)%20Electronics%20Foundations.md)



## Ease of Evolution of an OS
A major OS will evolve over time for a number of reasons:
1. **Hardware upgrades plus new types of hardware :** For example, early versions of UNIX and the Macintosh OS did not employ a paging mechanism because they were run on processors without paging hardware. Subsequent versions of these operating systems were modified to exploit paging capabilities. Also, the use of graphics terminals and page-mode terminals instead of line-at-a-time scroll mode terminals affects OS design. For example, a graphics terminal typically allows the user to view several applications at the same time through “windows” on the screen. This requires more sophisticated support in the OS.
2. **New services:** In response to user demand or inresponse to the needs of system managers, the OS expands to offer new services. For example, if it is found to be difficult to maintain good performance for users with existing tools, new measurement and control tools may be added to the OS.
3. **Fixes:** Any OS has faults. The seared is covered over the course of time and fixes are made. Of course, the fix may introduce new faults.



## The Evolution of Operating Systems
### 🦄 Uniprocessors Operating Systems
#### Serial Processing (Punched Cards /Single User)

#### Simple Batch Systems (Punched Cards /Single User)
##### Resident Monitor
**Monitors were the precursors of modern-day operating systems.** Their role was straightforward. The monitor started the job and gave control of the computer to the job, and when the job was done, the monitor resumed control of the machine. The work originally done by people was being done by the computer, thus increasing efficiency and utilization.

> However, monitors had a severe limitation in that they provided no additional protection. 
> 
> Without protection, a batch job could affect pending jobs. (For example, a “bad” job might read too many cards, thus rendering the next program incorrect.) Moreover, it was even possible for a batch job to affect the monitor code! 
> 
> To fix this problem, computer systems were provided with specialized hardware, allowing the computer to operate in either monitor mode or user mode. Programs were run in user mode, switching to monitor mode when certain system calls were necessary.
#### Multiprogrammed Batch Systems (Magnetic Tapes /Single User)
##### Simultaneous Peripheral Operations On-Line (SPOOLing)
One tape might contain several jobs. This allowed the mainframe CPU to continually switch among processes without reading cards. A similar procedure was followed for output. The output was written to tape, which was then removed and put on a smaller computer that performed the actual printing.

- It was necessary for the monitor to periodically check whether an I/O operation was needed. 

- Timers were added to jobs to allow for brief interruptions so the monitor could send pending I/O to the tape units. This allowed I/O and CPU computations to occur in parallel.

This process, prevalent in the late 1960s to late 1970s, was known as **Simultaneous Peripheral Operations On-Line**, or **SPOOLing**, and it is ==the simplest form of multiprogramming==. The word has stuck in the computer lexicon, but its contemporary meaning refers to printed output that is written to disk prior to being sent to the printer.
##### Multiprogramming Systems and Operating Systems (OS Concepts Proposed) 👈👈👈
**Multiprogramming systems** (established in the late 1960s and continuing to the present day) extend the idea of spooling and batch processing to allow several executing programs to be in memory concurrently. This is achieved by cycling through processes, allowing each one to use the CPU for a specific slice of time. 

Monitors were able to handle multiprogramming to a certain extent. They could start jobs, spool operations, perform I/O, switch between user jobs, and give some protection between jobs. It should be clear, however, that the monitor’s job was becoming more complex, necessitating software that was more elaborate. It was at this point that monitors evolved into the software we now know as **operating systems**.
#### Time-sharing Operating Systems (Multi-users)
Terminals were connected to systems that allowed access by multiple concurrent users. Batch processing was soon outmoded, as **interactive programming** facilitated **time-sharing** (also known as **time-slicing**).

In a time-sharing system, the CPU switches between user sessions very quickly, giving each user a small slice of processor time. This procedure of switching between processes is called **context switching**. The operating system performs these context switches quickly, in essence giving the user a personal virtual machine.
##### Time-sharing OS 🆚 Multiprogramming

| S.No. | TIME SHARING                                                                                                                                                                          | MULTIPROGRAMMING                                                                                                                              |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| 01.   | Time Sharing is the logical extension of multiprogramming, in this time sharing Operating system many users/processes are allocated with computer resources in respective time slots. | Multiprogramming operating system allows to execute multiple processes by monitoring their process states and switching in between processes. |
| 02.   | Processors time is shared with multiple users that’s why it is called as time sharing operating system.                                                                               | Processor and memory underutilization problem is resolved and multiple programs runs on CPU that’s why it is called multiprogramming.         |
| 03.   | In this process, two or more users can use a processor in their terminal.                                                                                                             | In this, the process can be executed by a single processor.                                                                                   |
| 04.   | Time sharing OS has fixed time slice.                                                                                                                                                 | Multi-programming OS has no fixed time slice.                                                                                                 |
| 05.   | In time sharing OS system, execution power is taken off before finishing of execution.                                                                                                | In multi-programming OS system before finishing a task the execution power is not taken off.                                                  |
| 06.   | Here the system works for the same or less time on each processes.                                                                                                                    | Here the system does not take same time to work on different processes.                                                                       |
| 07.   | In time sharing OS system depends on time to switch between different processes.                                                                                                      | In Multiprogramming OS, system depends on devices to switch between tasks such I/O interrupts etc.                                            |
| 08.   | System model of time sharing system is multiple programs and multiple users.                                                                                                          | System model of multiprogramming system is multiple programs.                                                                                 |
| 09.   | Time sharing system minimizes response time.                                                                                                                                          | Multiprogramming system maximizes processor use.                                                                                              |
| 10.   | Example: Windows NT.                                                                                                                                                                  | Example: Mac OS.                                                                                                                              |
|       |                                                                                                                                                                                       |                                                                                                                                               |



### 🎏 Multi-processor Operating Systems
For the most part, operating systems for multiprocessors need not differ significantly from those for uniprocessor systems. **Scheduling** is one of the main differences, however, because multiple CPUs must be kept busy. If scheduling is not done properly, the inherent advantages of the multiprocessor parallelism are not fully realized. In particular, if the operating system does not provide the proper tools to exploit parallelism, performance will suffer.

Typically, in a multiprocessing environment, the CPUs cooperate with each other to solve problems, working in parallel to achieve a common goal. 
- Coordination of processor activities requires that they have some means of communicating with one another. 
- System synchronization requirements determine whether the processors are designed using tightly coupled or loosely coupled communication methods.
#### Loosely Coupled Multiprocessors (Distributed Systems)
**Loosely coupled multiprocessors** have a **physically distributed memory** and are also known as **distributed systems**. 

Distributed systems can be viewed in two different ways. 

A distributed collection of workstations on a LAN, each with its own operating system, is typically referred to as a **networked system**. These systems were motivated by a need for multiple computers to share resources. 
- A **networked operating system** includes the necessary **provisions**, such as remote command execution, remote file access, and remote login, to attach machines to the network. User processes also have the ability to communicate over the network with processes on other machines. 

- **Networked file systems** are one of the most important applications of networked systems. These allow multiple machines to share one logical file system, although the machines are located in different geographical locations and may have different architectures and unrelated operating systems. Synchronization among these systems is an important issue, but communication is even more important, because this communication may occur over large networked distances. 

==Although networked systems may be distributed over geographical areas, they are not considered true distributed systems.==
#### Tightly Coupled Multiprocessors
Tightly coupled multiprocessors share a single centralized memory, which requires an operating system to synchronize processes carefully to ensure protection. This type of coupling is typically used for multiprocessor systems consisting of 16 or fewer processors. Symmetric multiprocessors (SMPs) are a popular form of tightly coupled architecture. These systems have multiple processors that share memory and I/O devices. All processors perform the same functions, with the processing

load being distributed among all of them.


### Real-time Operating Systems
↗ [RTOS (Real-Time Operating System)](../../../../Computer%20Engineering,%20Embedded%20&%20IoT/🚟%20Embedded%20Computer%20Systems/Embedded%20Operating%20Systems/🐎%20RTOS%20(Real-Time%20Operating%20System)/RTOS%20(Real-Time%20Operating%20System).md)


### Distributed Operating Systems
↗ [Distributed Operating System](../../../../🧠%20Computing%20Methodologies/Distributed%20Computing%20&%20Systems/Distributed%20Managing%20&%20Operating/Distributed%20Operating%20System/Distributed%20Operating%20System.md)


### Personal Computers & OS
↗ [Windows](../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Microsoft%20Operating%20Systems/Windows/Windows.md)
↗ [Linux (Derived From UNIX Family)](../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/Linux%20(Derived%20From%20UNIX%20Family).md)
↗ [macOS (Derived From UNIX Family)](../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Apple%20Operating%20Systems/macOS%20(Derived%20From%20UNIX%20Family)/macOS%20(Derived%20From%20UNIX%20Family).md)



## ⭐️ Major Achievements
[DENN80a] proposes that there have been four major theoretical advances in the development of operating systems:

- Processes
- Memory management
- Information protection and security
- Scheduling and resource management

Each advance is characterized by principles, or abstractions, developed to meet difficult practical problems. Taken together, these four areas span many of the key design and implementation issues of modern operating systems.



## Modern OS Designs ...
↗ [Operating System Design (OS Kernel Design) & Kernel Architecture](Operating%20System%20Design%20(OS%20Kernel%20Design)%20&%20Kernel%20Architecture/Operating%20System%20Design%20(OS%20Kernel%20Design)%20&%20Kernel%20Architecture.md)



## Ref
[操作系统原理——第2章 操作系统概述]: https://blog.csdn.net/tangkcc/article/details/114852154
[单道批处理系统]: https://blog.csdn.net/TakahashiRyosuke/article/details/108230334
[操作系统的批处理和多道概念]: https://my.oschina.net/openK/blog/87193

[Difference between Time Sharing OS and Multiprogramming OS | GeeksfroGeeks]: https://www.geeksforgeeks.org/difference-between-time-sharing-os-and-multiprogramming-os/

[操作系统的发展历史 - Drew的文章 - 知乎]: https://zhuanlan.zhihu.com/p/367996835
