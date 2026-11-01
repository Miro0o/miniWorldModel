# HDL (Hardware Description & Definition Languages)

[TOC]



## Res
### Related Topics


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Hardware_description_language

In computer engineering, a **hardware description language** (**HDL**) is a specialized [computer language](https://en.wikipedia.org/wiki/Computer_language "Computer language") used to describe the structure and behavior of [electronic circuits](https://en.wikipedia.org/wiki/Electronic_circuit "Electronic circuit"), usually to design [application-specific integrated circuits](https://en.wikipedia.org/wiki/Application-specific_integrated_circuit "Application-specific integrated circuit") (ASICs) and to program [field-programmable gate arrays](https://en.wikipedia.org/wiki/Field-programmable_gate_array "Field-programmable gate array") (FPGAs).

A hardware description language enables a precise, formal description of an electronic circuit that allows for the automated analysis and simulation of the circuit. It also allows for the synthesis of an HDL description into a  [netlist](https://en.wikipedia.org/wiki/Netlist "Netlist") (a specification of physical electronic components and how they are connected together), which can then be placed and routed to produce the set of masks used to create an integrated circuit.

A hardware description language looks much like a programming language such as C or ALGOL; it is a textual description consisting of expressions, statements and control structures. One important difference between most programming languages and HDLs is that HDLs explicitly include the notion of time.

HDLs form an integral part of [electronic design automation](https://en.wikipedia.org/wiki/Electronic_design_automation "Electronic design automation") (EDA) systems, especially for complex circuits, such as [application-specific integrated circuits](https://en.wikipedia.org/wiki/Application-specific_integrated_circuit "Application-specific integrated circuit"), [microprocessors](https://en.wikipedia.org/wiki/Microprocessor "Microprocessor"), and [programmable logic devices](https://en.wikipedia.org/wiki/Programmable_logic_device "Programmable logic device").


---
Direct manual synthesis of logic components is feasible only for very small circuits. Today’s ASICs consist of hundreds of thousands of gates and millions of transistors. The complexity of these chips escapes human comprehension. Various tools and design languages help manage the complexity, but the constantly increasing gate densities are forcing the design process to a higher plane of abstraction. One of the tools used in dealing with this complexity is the **hardware definition language (HDL)**. 

Hardware definition languages allow a designer to specify circuit behavior on an **algorithmic level**. Instead of thinking about the circuit in terms of gates and wires, a designer works with variables and control structures in a manner similar to working with a second- or third-generation programming language. 

Instead of creating a stream of binary machine code, the HDL source code produces a specification for gates and wires called a **netlist**. The **netlist** is suitable input for the software that ultimately produces the silicon die layout.



## Ref
