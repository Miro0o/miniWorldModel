# Control Unit

[TOC]



## Res
↗ [Control Signals' Pattern](../../../../../../../🛣️%20Program%20Compilation%20&%20Execution/🤡%20Program%20Execution%20(Runtime)/Instruction%20Execution/Control%20Signals'%20Pattern.md)



## Intro
> 👉 quick look at [👧🏽 MARIE](../../../../👧🏽%20MARIE.md) for gists of control units

### Hardware Control


### Microprogrammed Control
All machine instructions are input into a special program, the microprogram, that converts machine instructions of 0s and 1s into control signals. The microprogram is essentially an interpreter, written in microcode, that is stored in firmware (ROM, PROM, or EPROM), which is often referred to as the control store. 

A microcode microinstruction is retrieved during each clock cycle. The particular instruction retrieved is a function of the current state of the machine and the value of the microsequencer, which is somewhat like a program counter that selects the next instruction from the control store.

↗ [Firmware and Computer (OS) Booting](../../../../../../Firmware%20and%20Computer%20(OS)%20Booting/Firmware%20and%20Computer%20(OS)%20Booting.md)



## Ref

