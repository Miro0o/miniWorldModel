# Type and Effect Systems

[TOC]



## Res
### Related Topics
↗ [Type Theory (类型论)](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/🪸%20Type%20Theory%20(类型论)/Type%20Theory%20(类型论).md)
↗ [Type Analysis](../../../../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Processing%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/1️⃣%20Frontend%20-%20Programming%20Language%20Analysis/Semantic%20Analysis/Type%20Analysis/Type%20Analysis.md)

↗ [Program Language Processing & Compilation Theory (Compile-time)](../../../../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Processing%20&%20Compilation%20Theory%20(Compile-time)/Program%20Language%20Processing%20&%20Compilation%20Theory%20(Compile-time).md)
- ↗ [Compilation Phase](../../../../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Processing%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/Compilation%20Phase.md)
- ↗ [Semantic Analysis](../../../../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Processing%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/1️⃣%20Frontend%20-%20Programming%20Language%20Analysis/Semantic%20Analysis/Semantic%20Analysis.md)

↗ [Formal Syntax & Metasyntax (and Metalanguage)](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/📌%20Formal%20Syntax%20&%20Metasyntax%20(and%20Metalanguage)/Formal%20Syntax%20&%20Metasyntax%20(and%20Metalanguage).md)
↗ [Formal Semantics and Programming Language](../../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Formal%20Semantics%20and%20Programming%20Language/Formal%20Semantics%20and%20Programming%20Language.md)

↗ [Formal System, Formal Logics, and Its Semantics](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics.md)
- ↗ [Classical Logic (Standard Formal Logic)](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/Classical%20Logic%20(Standard%20Formal%20Logic)/Classical%20Logic%20(Standard%20Formal%20Logic).md)
	- ↗ [First-Order Logic & Predicate Calculus -（一阶）谓词逻辑](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/Classical%20Logic%20(Standard%20Formal%20Logic)/First-Order%20Logic%20&%20Predicate%20Calculus%20-（一阶）谓词逻辑/First-Order%20Logic%20&%20Predicate%20Calculus%20-（一阶）谓词逻辑.md)
	- ↗ [Zeroth-Order Logic & Propositional Logic - (零阶) 命题逻辑](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/Classical%20Logic%20(Standard%20Formal%20Logic)/Zeroth-Order%20Logic%20&%20Propositional%20Logic%20-%20(零阶)%20命题逻辑.md)

↗ [Lambda Calculus (λ-Calculus)](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/Higher-Order%20Logic%20(HOL)/Lambda%20Calculus%20(λ-Calculus)/Lambda%20Calculus%20(λ-Calculus).md)

↗ [Programming Language Theory (PLT)](../../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Programming%20Language%20Theory%20(PLT).md)


### Learning Resources
Types and Programming Languages by Benjamin C. Pierce
ISBN:0262162091 The MIT Press© 2002(623 pages)
https://theswissbay.ch/pdf/Gentoomen%20Library/Maths/Comp%20Sci%20Math/Benjamin_C._Pierce-Types_and_Programming_Languages-The_MIT_Press%282002%29.pdf
- Chapter 1 - Introduction
- Chapter 2 - Mathematical Preliminaries
- Part I- Untyped Systems
	- Chapter 3 - Untyped Arithmetic Expressions
	- Chapter 4 - An ML Implementation of Arithmetic Expressions
	- Chapter 5 - The Untyped Lambda-Calculus
	- Chapter 6 - Nameless Representation of Terms
	- Chapter 7 - An ML Implementation of the Lambda-Calculus
- Part II- Simple Types
	- Chapter 8 - Typed Arithmetic Expressions
	- Chapter 9 - Simply Typed Lambda-Calculus
	- Chapter 10 - An ML Implementation of Simple Types
	- Chapter 11 - Simple Extensions
	- Chapter 12 - Normalization
	- Chapter 13 - References
	- Chapter 14 - Exceptions
- Part III - Subtyping
	- Chapter 15 - Subtyping
	- Chapter 16 - Metatheory of Subtyping
	- Chapter 17 - An ML Implementation of Subtyping
	- Chapter 18 - Case Study: Imperative Objects
	- Chapter 19 - Case Study: Featherweight Java
- Part IV- Recursive Types
	- Chapter 20 - Recursive Types
	- Chapter 21 - Metatheory of Recursive Types
- Part V- Polymorphism
	- Chapter 22 - Type Reconstruction
	- Chapter 23 - Universal Types
	- Chapter 24 - Existential Types
	- Chapter 25 - An ML Implementation of System F
	- Chapter 26 - Bounded Quantification
	- Chapter 27 - Case Study: Imperative Objects, Redux
	- Chapter 28 - Metatheory of Bounded Quantification
- Part VI- Higher-Order Systems
	- Chapter 29 - Type Operators and Kinding
	- Chapter 30 - Higher-Order Polymorphism
	- Chapter 31 - Higher-Order Subtyping
	- Chapter 32 - Case Study: Purely Functional Objects
- Part VII - Appendices
	- Appendix A - Solutions to Selected Exercises
	- Appendix B - Notational Conventions
	- References
	- Index
	- List of Figures


👍 https://thzt.github.io/2017/09/05/type-1/
类型（type），是编程语言中一个经常被人们提及的概念，当我们看待一门编程语言的时候，言必谈之类型系统（type system）。

它到底是显式类型的（explicit typing），还是隐式类型的（implicit typing），是静态类型的（static typing），还是动态类型的（dynamic typing），类型检查（type check）是较强的（stronger），还是较弱的（weaker）。它是否支持高阶类型（high-order type），是否支持递归类型（recusive type），是否支持子类型（subtype），是否支持多态（polymorphism）。等等，都是与类型系统相关的问题。
然而，我发现理解它们并不容易，我们欠缺最基本的数理逻辑和证明论相关的知识。

类型系统，可以看做是附着在语言语法之上的一套符号证明系统。

> In programming languages, a type system is a set of rules that assigns a property called type to the various constructs of a computer program, such as variables, expressions, functions or modules.

给表达式确定类型的过程，相当于对程序应该具备的属性做形式证明，因此，数理逻辑是我们的朋友。

另一方面，从语义（semantics）角度对类型进行理解，我们会遇到更大的阻碍，因为，这又涉及到了公理集合论和代数学相关的必备知识。

本系列文章，我计划从无类型λ演算开始，逐步介绍简单类型（simply typed）λ演算，介绍递归类型和不动点（fixed point）之间关系，介绍组合子逻辑（combinatory logic）。然后，回归到本原，学习命题逻辑和一阶谓词逻辑相关的内容，建立起逻辑学与类型理论之间的桥梁。

时间允许的话，我们还可以探讨模型论相关的内容，在补充了代数学相关的内容之后，我们就可以讨论CPO，Henkin模型，Kripke模型，以及笛卡儿闭范畴（CCC）了。

- [你好，类型（一）：开篇](http://thzt.github.io/2017/09/05/type-1/)
- [你好，类型（二）：Lambda calculus](http://thzt.github.io/2017/09/06/type-2/)
- [你好，类型（三）：Combinatory logic](http://thzt.github.io/2017/09/07/type-3/)
- [你好，类型（四）：Propositional logic](http://thzt.github.io/2017/09/10/type-4/)
- [你好，类型（五）：Predicate logic](http://thzt.github.io/2017/09/16/type-5/)
- [你好，类型（六）：Simply typed lambda calculus](http://thzt.github.io/2017/09/19/type-6/)
- [你好，类型（七）：Recursive type](http://thzt.github.io/2017/09/23/type-7/)
- [你好，类型（八）：Subtype](http://thzt.github.io/2017/10/13/type-8/)
- [你好，类型（九）：Let polymorphism](http://thzt.github.io/2017/10/14/type-9/)


### Other Resources



## Intro
### Type Theory & Type System
> 🔗 https://en.wikipedia.org/wiki/Type_system

A [programming language](https://en.wikipedia.org/wiki/Programming_language "Programming language") consists of a system of allowed sequences of symbols ([constructs](https://en.wikipedia.org/wiki/Language_construct "Language construct")) together with rules that define how each construct is interpreted. For example, a language might allow expressions representing various types of data, expressions that provide structuring rules for data, expressions representing various operations on data, and constructs that provide sequencing rules for the order in which to perform operations.

A simple type system for a programming language is a set of rules that associates a [_data type_](https://en.wikipedia.org/wiki/Type_\(computer_science\) "Type (computer science)") (for example, [integer](https://en.wikipedia.org/wiki/Integer "Integer"), [floating point](https://en.wikipedia.org/wiki/Floating_point "Floating point"), [string](https://en.wikipedia.org/wiki/String_\(computer_science\) "String (computer science)")) with each _[term](https://en.wikipedia.org/wiki/Term_\(programming\) "Term (programming)")_ (data-valued expression) in a [computer program](https://en.wikipedia.org/wiki/Computer_program "Computer program"). In more ambitious type systems, a variety of constructs, such as [variables](https://en.wikipedia.org/wiki/Variable_\(computer_science\) "Variable (computer science)"), [expressions](https://en.wikipedia.org/wiki/Expression_\(computer_science\) "Expression (computer science)"), [functions](https://en.wikipedia.org/wiki/Function_\(computer_science\) "Function (computer science)"), and [modules](https://en.wikipedia.org/wiki/Modular_programming "Modular programming"), may be assigned types.

Type systems formalize and enforce the otherwise implicit categories the programmer uses for [algebraic data types](https://en.wikipedia.org/wiki/Algebraic_data_type "Algebraic data type"), [data structures](https://en.wikipedia.org/wiki/Data_structure "Data structure"), or other [data types](https://en.wikipedia.org/wiki/Data_type "Data type"), such as "string", "array of float", "function returning boolean".

The main purpose of a type system in a programming language is to reduce possibilities for [bugs](https://en.wikipedia.org/wiki/Bug_\(computer_programming\) "Bug (computer programming)") in computer programs due to mismatches in how values are interpreted in different parts of a program. The aim is to prevent operations expecting a certain kind of value from being applied to values for which that operation does not make sense (validity errors). A type system can detect and prevent some of these mismatches. When a type mismatch is detected, it is called a [type error](https://en.wikipedia.org/wiki/Type_error "Type error").

The type of a term constrains the contexts in which it may be used. For a variable, the type system determines the allowed values of that variable. For that variable be presented as a parameter to an operation, the operation must be able to accept in that parameter any value that the type of the variable allows.

Type systems are typically specified as part of [programming language](https://en.wikipedia.org/wiki/Programming_language "Programming language") design. They are built into [interpreters](https://en.wikipedia.org/wiki/Interpreter_\(computing\) "Interpreter (computing)") and [compilers](https://en.wikipedia.org/wiki/Compiler "Compiler") for the language. In some languages, the type system can be extended by [optional tools](https://en.wikipedia.org/wiki/Extended_static_checking "Extended static checking") that perform added checks using the language's original type [syntax](https://en.wikipedia.org/wiki/Syntax_\(programming_languages\) "Syntax (programming languages)") and [grammar](https://en.wikipedia.org/wiki/Formal_grammar "Formal grammar").

Type systems allow defining [interfaces](https://en.wikipedia.org/wiki/Interface_\(computer_science\) "Interface (computer science)") between different parts of a computer program, and then checking that the parts have been connected in a consistent way. This checking can happen statically (at [compile time](https://en.wikipedia.org/wiki/Compile_time "Compile time")), dynamically (at [run time](https://en.wikipedia.org/wiki/Run_time_\(program_lifecycle_phase\) "Run time (program lifecycle phase)")), or as a combination of both.

Type systems have other purposes as well, such as expressing business rules, enabling certain [compiler optimizations](https://en.wikipedia.org/wiki/Compiler_optimization "Compiler optimization"), allowing for [multiple dispatch](https://en.wikipedia.org/wiki/Multiple_dispatch "Multiple dispatch"), and providing a form of [documentation](https://en.wikipedia.org/wiki/Software_documentation "Software documentation").


### Effect System
> 🔗 https://en.wikipedia.org/wiki/Effect_system

In [computing](https://en.wikipedia.org/wiki/Computing), an **effect system** is a [formal system](https://en.wikipedia.org/wiki/Formal_system "Formal system") that describes the computational effects of computer programs, such as [side effects](https://en.wikipedia.org/wiki/Side_effect_\(computer_science\) "Side effect (computer science)"). An effect system can be used to provide a [compile-time](https://en.wikipedia.org/wiki/Compile-time "Compile-time") check of the possible effects of the program.

The effect system extends the notion of type to have an "effect" component, which comprises an **effect kind** and a **region**. The effect kind describes _what_ is being done, and the region describes _with what_ (parameters) it is being done.

An effect system is typically an extension of a [type system](https://en.wikipedia.org/wiki/Type_system "Type system"). The term "**type and effect system**" is sometimes used in this case. Often, a type of a value is denoted together with its effect as _type ! effect_, where both the type component and the effect component mention certain regions (for example, a type of a mutable memory cell is parameterized by the label of the memory region in which the cell resides). The term "algebraic effect" follows from the type system.

Effect systems may be used to prove the external [purity](https://en.wikipedia.org/wiki/Pure_function "Pure function") of certain internally impure definitions: for example, if a function internally allocates and modifies a region of memory, but the function's type does not mention the region, then the corresponding effect may be erased from the function's effect.



## Ref
