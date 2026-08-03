# Effects & Effect Systems

[TOC]



## Res
### Related Topics


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Effect_system

In [computing](https://en.wikipedia.org/wiki/Computing), an **effect system** is a [formal system](https://en.wikipedia.org/wiki/Formal_system "Formal system") that describes the computational effects of computer programs, such as [side effects](https://en.wikipedia.org/wiki/Side_effect_\(computer_science\) "Side effect (computer science)"). An effect system can be used to provide a [compile-time](https://en.wikipedia.org/wiki/Compile-time "Compile-time") check of the possible effects of the program.

The effect system extends the notion of type to have an "effect" component, which comprises an **effect kind** and a **region**. The effect kind describes _what_ is being done, and the region describes _with what_ (parameters) it is being done.

An effect system is typically an extension of a [type system](https://en.wikipedia.org/wiki/Type_system "Type system"). The term "**type and effect system**" is sometimes used in this case. Often, a type of a value is denoted together with its effect as _type ! effect_, where both the type component and the effect component mention certain regions (for example, a type of a mutable memory cell is parameterized by the label of the memory region in which the cell resides). The term "algebraic effect" follows from the type system.

Effect systems may be used to prove the external [purity](https://en.wikipedia.org/wiki/Pure_function "Pure function") of certain internally impure definitions: for example, if a function internally allocates and modifies a region of memory, but the function's type does not mention the region, then the corresponding effect may be erased from the function's effect.



## Ref
