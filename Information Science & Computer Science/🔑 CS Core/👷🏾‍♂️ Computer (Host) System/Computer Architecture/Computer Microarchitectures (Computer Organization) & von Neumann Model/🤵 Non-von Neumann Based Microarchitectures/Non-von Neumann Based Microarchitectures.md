# Non-von Neumann Based Microarchitectures

[TOC]



## Res
### Related Topics
↗ [Computer Microarchitectures (Computer Organization) & von Neumann Model](../Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model.md)
↗ [Quantum Computing (and Communication)](../../../../../🧠%20Computing%20Methodologies/Quantum%20Computing%20(and%20Communication)/Quantum%20Computing%20(and%20Communication).md)
↗ [Multiprocessor Architectures & Parallel Computing](../🚦%20Computer%20Processors%20&%20Logic%20Chips/Multiprocessors%20and%20Multicore%20Processors/Multiprocessor%20Architectures%20&%20Parallel%20Computing/Multiprocessor%20Architectures%20&%20Parallel%20Computing.md)



## Overview
Non–von Neumann architectures are those in which the model of computation varies from the characteristics listed for the von Neumann architecture. 
- For example, an architecture that does not store programs and data in memory or does not process a program sequentially would be considered a non–von Neumann machine. 
- Also, a computer that has two buses, one for data and a separate one for instructions, would be considered a non–von Neumann machine.

Many non–von Neumann machines are **designed for special purposes**.

A number of different subfields fall into the non–von Neumann category, including: 
1. Neural networks (using ideas from models of the brain as a computing paradigm) implemented in silicon, cellular automata, cognitive computers (machines that learn by experience rather than through programming, e.g., IBM’s SyNAPSE computer, a machine that models the human brain);
2. Quantum computation (a combination of computing and quantum physics)
3. Dataflow computation;
4. Parallel computers. 
These all have something in common -- the computation is distributed among different processing units that act in parallel. They differ in how weakly or strongly the various components are connected. 

Of these, parallel computing is currently the most popular.



## Harvard Based Models
![](../../../../../../Assets/Pics/Pasted%20image%2020230302132344.png)

Harvard architecture have two buses, thus allowing data and instructions to be transferred simultaneously, but also have separate storage for data and instructions.

Many modern general-purpose computers use a modified version of the
Harvard architecture in which they have separate pathways for data and instructions but not separate storage.

Pure Harvard architectures are typically used in microcontrollers (an entire computer system on a chip), such as those found in embedded systems, as in appliances, toys, and cars.



## Ref
