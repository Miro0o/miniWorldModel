# Hardware Verification

[TOC]



## Res
### Related Topics
↗ [Formal Methods & Formal Verification (FV)](../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/📌%20Software%20(Program)%20Analysis%20Basics/🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/Formal%20Methods%20&%20Formal%20Verification%20(FV).md)
↗ [Software (Program) Verification](../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/📌%20Software%20(Program)%20Analysis%20Basics/🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/Software%20(Program)%20Verification/Software%20(Program)%20Verification.md)


### Other Resources



## Intro
> 📖 Principles of Model Checking, Christel Baier and Joost-Pieter Katoen

**Hardware verification**: *Emulation*, *simulation*, and *structural analysis* are the major techniques used in hardware verification.
- **Structural analysis** comprises several specific techniques such as synthesis, timing analysis, and equivalence checking that are not described in further detail here.
- **Emulation** is a kind of testing. A reconfigurable generic hardware system (the emulator) is configured such that it behaves like the circuit under consideration and is then extensively tested. As with software testing, emulation amounts to providing a set of stimuli to the circuit and comparing the generated output with the expected output as laid down in the chip specification. To fully test the circuit, all possible input combinations in every possible system state should be examined. This is impractical and the number of tests needs to be reduced significantly, yielding potential undiscovered errors.
- With **simulation**, a model of the circuit at hand is constructed and simulated. Models are typically provided using hardware description languages such as Verilog or VHDL that are both standardized by IEEE. Based on stimuli, execution paths of the chip model are examined using a simulator. These stimuli may be provided by a user, or by automated means such as a random generator. A mismatch between the simulator’s output and the output described in the specification determines the presence of errors. Simulation is like testing, but is applied to models. It suﬀers from the same limitations, though: the number of scenarios to be checked in a model to get full confidence goes beyond any reasonable subset of scenarios that can be examined in practice.
	- Simulation is the most popular hardware verification technique and is used in various design stages, e.g., at register-transfer level, gate and transistor level. Besides these error detection techniques, hardware testing is needed to find fabrication faults resulting from layout defects in the fabrication process.



## Ref
