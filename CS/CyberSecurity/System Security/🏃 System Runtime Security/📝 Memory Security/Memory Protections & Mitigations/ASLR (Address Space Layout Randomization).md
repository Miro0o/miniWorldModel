# ASLR (Address Space Layout Randomization)

[TOC]



## Res
### Related Topics



## Intro
- Address space layout randomization (ASLR): Put each segment of memory in a different, random location each time the program is run
	- Within each segment of memory, relative addresses are the same (e.g. the RIP is always 4 bytes above the SFP)
- ASLR can shuffle all four segments of memory
- ASLR has very low performance overhead
	- Programs are dynamically linked at runtime
	- We already have to do the work of going through the executable and rewriting code to contain known addresses before executing it, so not much extra cost to ASLR

![](../../../../../../Assets/Pics/Screenshot%202024-09-17%20at%2010.38.37.png)

![](../../../../../../Assets/Pics/Screenshot%202024-09-17%20at%2010.39.27.png)



## Ref

