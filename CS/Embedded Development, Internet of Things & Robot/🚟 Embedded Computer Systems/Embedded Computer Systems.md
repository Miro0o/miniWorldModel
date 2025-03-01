# Embedded Computer Systems

[TOC]


## Res
### Related Topics
↗ [Computer System](../../🔑%20CS%20Core/🧬%20Computer%20System/Computer%20System.md)
↗ [Hardware & EE Related Theories](../../🔑%20CS%20Core/Hardware%20&%20EE%20Related%20Theories/Hardware%20&%20EE%20Related%20Theories.md)
↗ [Computer System Implementations](../../🔑%20CS%20Core/Hardware%20&%20EE%20Related%20Theories/🛠️%20Computer%20System%20Implementations/Computer%20System%20Implementations.md)


### Learning Resources
📂 [丢石头百科](https://wiki.diustou.com/cn/首页)

https://youtube.com/playlist?list=PL6rx9p3tbsMtRbJzFLswzvyl6OzHe32TC&si=QwxQTBBFTKFTK0gP
Exploring Smartphones | Branch Education
https://youtube.com/playlist?list=PL6rx9p3tbsMvYWeYUTNuRNMLXn0eyJvub&si=5cdBvJxVC4NE3vcT
Understanding Sound & Speakers | Branch Education
https://youtube.com/playlist?list=PL6rx9p3tbsMtyBSl6ihtZ5kv8Kuib3Hbu&si=DIETImDVNBoujbao
Understanding Cameras & Optics | Branch Education



## Intro
An exact definition of embedded systems is hard to come by. In every sense, they are real computers, having a CPU, memory, and some sort of I/O capabilities. But they differ from general-purpose computers because they carry out a limited set of tasks within the domain of a larger system. Most often, the larger system is something other than a computer. Embedded systems can be found in devices as simple and innocuous as coffeemakers and tennis shoes, and as complex and critical as commercial aircraft. Many of today’s automobiles contain dozens of embedded processors, each of which manages a particular subsystem. These subsystems include fuel injection, emissions control, antilock brakes, and cruise control, to name only a few. Moreover, automotive processors communicate with one another so that their efforts are coordinated and appropriate to the state of the automobile. For example, the cruise control disengages when the antilock brakes engage. Embedded systems are also found in other computers. A disk drive controller is an example of a computer within a computer. The controller positions the disk arm and encodes and decodes data as it is written and read from the disk surface.


### ⭐️ Embedded Computer Systems 🆚 General Purpose Computing
#### 1️⃣ The functional partitioning of hardware & software is fluid
We see first that the distinction between hardware and software is fuzzy and mutable. In general-purpose computing, we know in advance the capabilities of the hardware that run the programs we write. In embedded systems design, this is not always the case. The capabilities of the hardware can change while the system is under development. The principle of equivalence of hardware and software becomes a profound guiding tenet of system development. The functional partitioning of the hardware and software is a major—and sometimes contentious—issue.
#### 2️⃣ Embedded system programmers must understand every detail about the hardware
The second way in which embedded system development differs greatly from general-purpose computing is that a deep comprehension of the underlying hardware is required. A person who writes application programs in high-level languages such as Java or C++ may never know or care about the endianness of a system’s data storage, or whether an interrupt occurs at any particular time. Yet these considerations are paramount in the mind of an embedded systems programmer.
#### 3️⃣ Embedded systems are resource constrained
Along these same lines are the tremendous constraints under which many embedded systems must function. These constraints include limited CPU speed, limited memory, weight restrictions, limited power consumption, uncontrolled and often harsh operating environments, limited physical space, and unforgiving requirements as to the responsiveness demanded of the embedded system. Moreover, embedded systems designers constantly struggle under the burden of stringent cost requirements for both design and implementation! Enhancements or bug fixes made to an embedded system’s programming may cause the entire system to go over budget with respect to power consumption or memory footprint. Today’s embedded systems programmer, much like his or her grandfather who programmed a mainframe in the 1950s, may spend a good part of the day counting machine cycles—because every machine cycle counts.
##### Limited Power Consumption
Of the aforementioned constraints, limited power consumption is often at the forefront during the design process. Low power consumption means lower heat dissipation, which in turn means fewer heat sinks—which means less money for components and a smaller overall size. Lower power consumption also means that battery backup is more feasible, thus providing uninterruptible and reliable operation.

Most embedded systems can be divided into three categories, based on their power requirements: battery-operated, fixed power, and high-density systems. 
- Battery-operated systems, such as those found in portable audio devices, need to maximize battery life but minimize size. 
- Fixed power systems, such as those found in pay phones and caller ID boxes, have limited power supplies (such as phone lines), and the goal is to offer maximal performance within the constraints of the limited power available. 
- High-density systems (high- performance and multiprocessor systems) are more concerned with power efficiency primarily because of heat dissipation issues. 
	- For example, voice over IP (VoIP) systems integrate data with voice signals and require a significant number of components, and this translates into significant heat generation. These systems often have unlimited power supplies, but must limit power consumption so they do not overheat.
#### 4️⃣ Signal timing and timely event handling is crucial
The fourth, and possibly most difficult, aspect of embedded systems is the matter of signal timing. Embedded systems designers hold a precise and unambiguous awareness of the interrelationship between signals generated by events in the outside world and signals routinely taking place within the embedded system. Any set of events can take place at any time and in any order. Moreover, the reactions to these events often take place within milliseconds. In hard real-time systems, a late reaction is tantamount to failure.



## Ref
