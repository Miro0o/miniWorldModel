# CFG (Control Flow Graph) & ICFG (Interprocedure CFG)

[TOC]



## Res
### Related Topics
↗ [Constraint-Based Analysis & Control Flow Analysis](../../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Analysis%20&%20Binary%20Engineering/📌%20Software%20(Program)%20Analysis%20Basics/👚%20SCA%20(Static%20Code%20Analysis)%20&%20SAST/Constraint-Based%20Analysis%20&%20Control%20Flow%20Analysis/Constraint-Based%20Analysis%20&%20Control%20Flow%20Analysis.md)
↗ [Interprocedural Analysis](../../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Analysis%20&%20Binary%20Engineering/📌%20Software%20(Program)%20Analysis%20Basics/👚%20SCA%20(Static%20Code%20Analysis)%20&%20SAST/Data%20Flow%20Analysis/📲%20Inter-procedural%20Analysis/Interprocedural%20Analysis.md)
↗ [Data Flow Graph (DFG)](../../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Analysis%20&%20Binary%20Engineering/📌%20Software%20(Program)%20Analysis%20Basics/👚%20SCA%20(Static%20Code%20Analysis)%20&%20SAST/Data%20Flow%20Analysis/📲%20Inter-procedural%20Analysis/Data%20Flow%20Graph%20(DFG).md)

↗ [IR (Intermediate Representation) & IR Generation](../../2️⃣%20IR%20(Intermediate%20Representation)%20&%20IR%20Generation/IR%20(Intermediate%20Representation)%20&%20IR%20Generation.md)



## Intro: Control Flow Graph
> 🔗 [Constraint-Based Analysis & Control Flow Analysis](../../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Analysis%20&%20Binary%20Engineering/📌%20Software%20(Program)%20Analysis%20Basics/👚%20SCA%20(Static%20Code%20Analysis)%20&%20SAST/Constraint-Based%20Analysis%20&%20Control%20Flow%20Analysis/Constraint-Based%20Analysis%20&%20Control%20Flow%20Analysis.md)

> 程序分析 - 南京大学

Control Flow Analysis
- Usually refer to building Control Flow Graph (CFG)
- CFG serves as the basic structure for static analysis
- The node in CFG can be an individual 3-address instruction, or (usually) a Basic Block (BB)

![](../../../../../../../Assets/Pics/Screenshot%202025-11-11%20at%2023.46.27.png)


### IR (Intermediate Representation)
↗ [IR (Intermediate Representation) & IR Generation](../../2️⃣%20IR%20(Intermediate%20Representation)%20&%20IR%20Generation/IR%20(Intermediate%20Representation)%20&%20IR%20Generation.md)


### Basic Blocks (BB)
> 程序分析 - 南京大学

Basic blocks (BB) are maximal sequences of consecutive three-address instructions with the properties that
- It can be entered only at the beginning, i.e., _the first instruction in the block_
- It can be exited only at the end, i.e., _the last instruction in the block_
- ![|400](../../../../../../../Assets/Pics/Screenshot%202025-11-11%20at%2023.49.49.png)
#### The Construction of BB
**Algorithm:**
- **INPUT**: A sequence of three-address instructions of _P_
- **OUTPUT**: A list of basic blocks of _P_
- **METHOD**:
	1. Determine the leaders in _P_
		1. The first instruction in _P_ is a leader
		2. Any target instruction of a conditional or unconditional jump is a leader
		3. Any instruction that immediately follows a conditional or unconditional jump is a leader
	2. Build BBs for P
		1. A BB consists of a leader and all its subsequent instructions until the next leader

**Example:**
![](../../../../../../../Assets/Pics/Screenshot%202025-11-11%20at%2023.55.29.png)
(please refer to the slides of the course for explanation on the example: 程序分析 - 南京大学)


### Construction of CFG Based on BBs
**Construction of CFG** 
- The nodes of CFG are basic blocks;
- There is an edge from block A to block B if and only if 
	- There is a conditional or unconditional jump from the end of A to the beginning of B
	- B immediately follows A in the original order of instructions and A does not end in an unconditional jump
		- ![](../../../../../../../Assets/Pics/Screenshot%202025-11-11%20at%2023.58.52.png)
	- It is normal to replace the jumps to instruction labels by jumps to basic blocks
		- ![](../../../../../../../Assets/Pics/Screenshot%202025-11-11%20at%2023.59.20.png)


**Example**
![](../../../../../../../Assets/Pics/Screenshot%202025-11-12%20at%2000.01.14.png)



## Interprocedure CFG (ICFG)
### Call Graph and Call Graph Construction (CHA)


### ICFG Construction



## Ref
