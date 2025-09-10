# Microcode & Micro-Program

[TOC]



## Res
### Related Topics
↗ [Firmware and Computer (OS) Booting](../../../../Firmware%20and%20Computer%20(OS)%20Booting/Firmware%20and%20Computer%20(OS)%20Booting.md)
↗ [FAQ /👉 Do microcode and micro-operation mean the same?](../../../../Firmware%20and%20Computer%20(OS)%20Booting/FAQ.md#👉%20Do%20microcode%20and%20micro-operation%20mean%20the%20same?)



## Intro
> 🔗 [Microcode](https://en.wikipedia.org/wiki/Microcode "Microcode")

In processor design, **microcode** serves as an intermediary layer situated between the central processing unit (CPU) hardware and the programmer-visible instruction set architecture of a computer. It consists of a set of hardware-level instructions that implement higher-level [machine code](https://en.wikipedia.org/wiki/Machine_code "Machine code") instructions or control internal [finite-state machine](https://en.wikipedia.org/wiki/Finite-state_machine "Finite-state machine") sequencing in many digital processing components. While microcode is utilized in general-purpose CPUs in contemporary desktops, it also functions as a fallback path for scenarios that the faster [hardwired control unit](https://en.wikipedia.org/wiki/Hardwired_control_unit "Hardwired control unit") is unable to manage.

Housed in special high-speed memory, microcode translates machine instructions, [state machine](https://en.wikipedia.org/wiki/State_machine "State machine") data, or other input into sequences of detailed circuit-level operations. It separates the machine instructions from the underlying [electronics](https://en.wikipedia.org/wiki/Electronics "Electronics"), thereby enabling greater flexibility in designing and altering instructions. Moreover, it facilitates the construction of complex multi-step instructions, while simultaneously reducing the complexity of computer circuits. 

> 💡 
> The act of writing microcode is often referred to as **microprogramming**, and the microcode in a specific processor implementation is sometimes termed a **microprogram**.
> Accordingly, the instructions consists of a microcode or microprogram is termed **microinstruction**

Through extensive microprograming, [microarchitectures](https://en.wikipedia.org/wiki/Microarchitecture "Microarchitecture") of smaller scale and simplicity can [emulate](https://en.wikipedia.org/wiki/Emulator "Emulator") more robust architectures with wider [word](https://en.wikipedia.org/wiki/Word_(computer_architecture) "Word (computer architecture)") lengths, additional [execution units](https://en.wikipedia.org/wiki/Execution_unit "Execution unit"), and so forth. This approach provides a relatively straightforward method of ensuring software compatibility between different products within a processor family.

Some hardware vendors, notably [IBM](https://en.wikipedia.org/wiki/IBM "IBM")/[Lenovo](https://en.wikipedia.org/wiki/Lenovo "Lenovo"), use the term microcode interchangeably with [firmware](https://en.wikipedia.org/wiki/Firmware "Firmware"). In this context, all code within a device is termed microcode, whether it is microcode or machine code. For instance, updates to a [hard disk drive](https://en.wikipedia.org/wiki/Hard_disk_drive "Hard disk drive")'s microcode often encompass updates to both its microcode and firmware



## Ref
[Microcode | Wikipedia]: https://en.wikipedia.org/wiki/Microcode


