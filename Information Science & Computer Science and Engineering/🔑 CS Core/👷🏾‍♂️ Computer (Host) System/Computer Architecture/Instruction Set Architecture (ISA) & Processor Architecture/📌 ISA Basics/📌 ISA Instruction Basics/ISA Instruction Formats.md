# ISA Instruction Formats

[TOC]



## Res
### Related Topics



## Instruction Organization
### Numbers of Operands
There can be variable operands for a single instruction.

The following are some common instruction formats based on different operands' numbers:

1. OPCODE only (zero addresses)  
2. OPCODE + 1 address (usually a memory address, e.g. `load x` )
3. OPCODE + 2 addresses (usually registers, or one register and one memory address, e.g. `add x y` )
4. OPCODE + 3 addresses (usually registers, or combinations of registers and memory, e.g. `add result a b` )

#### ⭐️ Stack & RPN (Reverse Polish Notation)
To operate on those variable-length operands, stack and RPN are often applied.

> 💡 **Operators & operands order in operation expressions**
> 
> **Infix Notation**: x + y
> 
> **Prefix Notation**: + x y 
> 
> **Postfix Notation (RPN)**: x y +


### ⭐️ Expanding Opcodes
We can expand the number of opcodes by lessening the number of operands without changing the length of an instruction:

![](../../../../../../../Assets/Pics/Screenshot%202023-03-28%20at%205.32.13%20PM.png)


### Instruction Length
Instructions on current architectures can be formatted in two ways:
1. **Fixed length**: Wastes space but is fast and results in better performance when instruction-level pipelining is used;

2. **Variable length**: More complex to decode but saves storage space.

> The number of operands has a direct impact on instruction length, as discussed above. However, we can also maintain a fixed instruction length by adding or reducing the number of opcodes according to the number of operands, as discussed above.



## Ref

