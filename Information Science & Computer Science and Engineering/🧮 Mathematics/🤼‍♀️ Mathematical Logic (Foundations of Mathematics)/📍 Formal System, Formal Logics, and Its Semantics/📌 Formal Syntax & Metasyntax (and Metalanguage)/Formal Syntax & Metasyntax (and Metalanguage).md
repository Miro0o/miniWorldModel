# Formal Syntax & Metasyntax (and Metalanguage)

[TOC]



## Res
### Related Topics
↗ [Proof Theory](../../Proof%20Theory/Proof%20Theory.md)
- ↗ [Gentzen-Style Proofs (Natural Deduction)](../../Proof%20Theory/Proof%20Calculus/Gentzen-Style%20Proofs%20(Natural%20Deduction).md)
↗ [Classical Logic (Standard Formal Logic)](../Classical%20Logic%20(Standard%20Formal%20Logic)/Classical%20Logic%20(Standard%20Formal%20Logic).md)
↗ [Computer Languages & Programming Methodology](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Computer%20Languages%20&%20Programming%20Methodology.md)
- ↗ [Logic Programming Languages](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20for%20Specific%20Areas/Logic%20Programming%20Languages/Logic%20Programming%20Languages.md)

↗ [Automata Theory and (Formal) Language Theory](../../😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Automata%20Theory%20and%20(Formal)%20Language%20Theory.md)
- ↗ [Regular Language (RL) & Finite Automata (FA)](../../😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Regular%20Language%20(RL)%20&%20Finite%20Automata%20(FA).md)
- ↗ [Context-Free Languages (CFL) & Push-Down Automata (PDA)](../../😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Context-Free%20Languages%20(CFL)%20&%20Push-Down%20Automata%20(PDA).md)
- ↗ [Context-Sensitive Languages (CSL) & Linear-Bounded Automata (LBA)](../../😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Context-Sensitive%20Languages%20(CSL)%20&%20Linear-Bounded%20Automata%20(LBA).md)
- ↗ [Computability (Recursion) Theory - Turing Machine and R.E. Language](../../😶‍🌫️%20Theory%20of%20Computation/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language.md)

↗ [Formal Semantics and Programming Language](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Formal%20Semantics%20and%20Programming%20Language/Formal%20Semantics%20and%20Programming%20Language.md)

↗ [Programming Language Processing & Program Execution](../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/Programming%20Language%20Processing%20&%20Program%20Execution.md)
↗ [Natural Language Processing (NLP) & Computational Linguistics](../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics.md)

↗ [Language & Literature](../../../../../Other%20Networks%20of%20Knowledge/Arts%20&%20Humanities/📃%20Language%20&%20Literature/Language%20&%20Literature.md)

↗ [Normalization](../../../../🔑%20CS%20Core/🍕%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/⚜️%20Database%20System%20Design/📌%20DBMS%20Design/Logical%20Database%20Design%20(Data%20Modeling)/Record-Based%20Data%20Models/Relational%20(Data)%20Models/Normalization/Normalization.md)


### Other Resources
https://homepage.divms.uiowa.edu/~slonnegr/
Formal Syntax and Semantics of Programming Languages: A Laboratory-Based Approach



## Intro
### Metasyntax
> 🔗 https://en.wikipedia.org/wiki/Metasyntax

A **metasyntax** is a syntax used to define the syntax of a [programming language](https://en.wikipedia.org/wiki/Programming_language "Programming language") or [formal language](https://en.wikipedia.org/wiki/Formal_language "Formal language"). It describes the allowable structure and composition of phrases and sentences of a [metalanguage](https://en.wikipedia.org/wiki/Metalanguage "Metalanguage"), which is used to describe either a [natural language](https://en.wikipedia.org/wiki/Natural_language "Natural language") or a [computer programming language](https://en.wikipedia.org/wiki/Programming_language "Programming language"). Some of the widely used formal metalanguages for computer languages are [Backus–Naur form](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form "Backus–Naur form") (BNF), [extended Backus–Naur form](https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form "Extended Backus–Naur form") (EBNF), [Wirth syntax notation](https://en.wikipedia.org/wiki/Wirth_syntax_notation "Wirth syntax notation") (WSN), and [augmented Backus–Naur form](https://en.wikipedia.org/wiki/Augmented_Backus%E2%80%93Naur_form "Augmented Backus–Naur form") (ABNF).

Metalanguages have their own metasyntax each composed of [terminal symbols](https://en.wikipedia.org/wiki/Terminal_symbol "Terminal symbol"), [nonterminal symbols](https://en.wikipedia.org/wiki/Nonterminal_symbol "Nonterminal symbol"), and _metasymbols_. A terminal symbol, such as a word or a token, is a stand-alone structure in a language being defined. A nonterminal symbol represents a [syntactic](https://en.wikipedia.org/wiki/Syntactic "Syntactic") category, which defines one or more valid phrasal or sentence structure consisted of an n-element subset. Metasymbols provide syntactic information for denotational purposes in a given metasyntax. Terminals, nonterminals, and metasymbols do not apply across all metalanguages.

Typically, the metalanguage for token-level languages (formally called "[regular languages](https://en.wikipedia.org/wiki/Regular_language "Regular language")") does not have nonterminals because nesting is not an issue in these regular languages. English, as a metalanguage for describing certain languages, does not contain metasymbols since all explanation could be done using English expression. There are only certain formal metalanguages used for describing recursive languages (formally called [context-free languages](https://en.wikipedia.org/wiki/Context-free_language "Context-free language")) that have terminals, nonterminals, and metasymbols in their metasyntax.


### Metalanguage
↗ [Zeroth-Order Logic & Propositional Logic - (零阶) 命题逻辑](../Classical%20Logic%20(Standard%20Formal%20Logic)/Zeroth-Order%20Logic%20&%20Propositional%20Logic%20-%20(零阶)%20命题逻辑.md)
↗ [First-Order Logic (FOL) & Predicate Calculus -（一阶）谓词逻辑](../Classical%20Logic%20(Standard%20Formal%20Logic)/First-Order%20Logic%20(FOL)%20&%20Predicate%20Calculus%20-（一阶）谓词逻辑/First-Order%20Logic%20(FOL)%20&%20Predicate%20Calculus%20-（一阶）谓词逻辑.md)
↗ [Second-Order Predicate Logic (二阶谓词逻辑)](../Classical%20Logic%20(Standard%20Formal%20Logic)/Second-Order%20Predicate%20Logic%20(二阶谓词逻辑).md)
↗ [Higher-Order Languages & Logics (HOL)](../🎩%20Higher-Order%20Languages%20&%20Logics%20(HOL)/Higher-Order%20Languages%20&%20Logics%20(HOL).md)

> 🔗 https://en.wikipedia.org/wiki/Metalanguage

In [logic](https://en.wikipedia.org/wiki/Logic "Logic") and [linguistics](https://en.wikipedia.org/wiki/Linguistics "Linguistics"), a **metalanguage** is a language used to describe another language, often called the _object language_. Expressions in a metalanguage are often distinguished from those in the object language by the use of italics, [quotation marks](https://en.wikipedia.org/wiki/Quotation_mark "Quotation mark"), or writing on a separate line. The structure of sentences and phrases in a metalanguage can be described by a [metasyntax](https://en.wikipedia.org/wiki/Metasyntax "Metasyntax"). For example, to say that the word "noun" can be used as a noun in a sentence, one could write "noun" is a \<noun\>.
#### Types of Metalanguage
> 🔗 https://en.wikipedia.org/wiki/Metalanguage#Types_of_metalanguage

There are a variety of recognized types of metalanguage, including _embedded_, _ordered_, and _nested_ (or _hierarchical_) metalanguages.
##### Embedded
An _embedded metalanguage_ is a language formally, naturally and firmly fixed in an object language. This idea is found in [Douglas Hofstadter](https://en.wikipedia.org/wiki/Douglas_Hofstadter "Douglas Hofstadter")'s book, _[Gödel, Escher, Bach](https://en.wikipedia.org/wiki/G%C3%B6del,_Escher,_Bach "Gödel, Escher, Bach")_, in a discussion of the relationship between formal languages and [number theory](https://en.wikipedia.org/wiki/Number_theory "Number theory"): "... it is in the nature of any formalization of number theory that its metalanguage is embedded within it."[[3]](https://en.wikipedia.org/wiki/Metalanguage#cite_note-3)

It occurs in natural, or informal, languages, as well—such as in English, where words such as _noun_, _verb_, or even _word_ describe features and concepts pertaining to the English language itself.
##### Ordered
↗ [First-Order Logic (FOL) & Predicate Calculus -（一阶）谓词逻辑](../Classical%20Logic%20(Standard%20Formal%20Logic)/First-Order%20Logic%20(FOL)%20&%20Predicate%20Calculus%20-（一阶）谓词逻辑/First-Order%20Logic%20(FOL)%20&%20Predicate%20Calculus%20-（一阶）谓词逻辑.md)

An _ordered metalanguage_ is analogous to an [ordered logic](https://en.wikipedia.org/wiki/Ordered_logic "Ordered logic"). An example of an ordered metalanguage is the construction of one metalanguage to discuss an object language, followed by the creation of another metalanguage to discuss the first, etc.
##### Nested
A _nested_ (or _hierarchical_) _metalanguage_ is similar to an ordered metalanguage in that each level represents a greater degree of abstraction. However, a nested metalanguage differs from an ordered one in that each level includes the one below.

The [paradigmatic](https://en.wikipedia.org/wiki/Paradigmatic "Paradigmatic") example of a nested metalanguage comes from the [Linnean taxonomic system](https://en.wikipedia.org/wiki/Scientific_classification "Scientific classification") in biology. Each level in the system incorporates the one below it. The language used to discuss genus is also used to discuss species; the one used to discuss orders is also used to discuss genera, etc., up to kingdoms.
#### Natural Language as A Metalanguage
> 🔗 https://en.wikipedia.org/wiki/Metalanguage#In_natural_language

Natural language combines nested and ordered metalanguages. In a natural language there is an infinite regress of metalanguages, each with more specialized vocabulary and simpler syntax.


### Entities Expressed In a Metalanguage
> 🔗 https://en.wikipedia.org/wiki/Metalanguage#Types_of_expressions

There are several entities commonly expressed in a metalanguage. In logic usually the object language that the metalanguage is discussing is a [formal language](https://en.wikipedia.org/wiki/Formal_language "Formal language"), and very often the metalanguage as well.
#### Deductive Systems
> 🔗 [Deductive system](https://en.wikipedia.org/wiki/Deductive_system "Deductive system")
> ↗ [Proof Theory](../../Proof%20Theory/Proof%20Theory.md)
> - ↗ [Gentzen-Style Proofs (Natural Deduction)](../../Proof%20Theory/Proof%20Calculus/Gentzen-Style%20Proofs%20(Natural%20Deduction).md)

A _deductive system_ (or, _deductive apparatus_ of a [formal system](https://en.wikipedia.org/wiki/Formal_system "Formal system")) consists of the [axioms](https://en.wikipedia.org/wiki/Axiom "Axiom") (or [axiom schemata](https://en.wikipedia.org/wiki/Axiom_schema "Axiom schema")) and [rules of inference](https://en.wikipedia.org/wiki/Rules_of_inference "Rules of inference") that can be used to [derive](https://en.wikipedia.org/wiki/Formal_proof "Formal proof") the [theorems](https://en.wikipedia.org/wiki/Theorem "Theorem") of the system.
#### Metavariables
> 🔗 [Metavariable (logic)](https://en.wikipedia.org/wiki/Metavariable_\(logic\) "Metavariable (logic)")

A _metavariable_ (or _metalinguistic_ or _metasyntactic_ variable) is a [symbol](https://en.wikipedia.org/wiki/Symbol_\(formal\) "Symbol (formal)") or set of symbols in a metalanguage which stands for a symbol or set of symbols in some object language. For instance, in the sentence:

Let $A$ and $B$ be arbitrary [formulas](https://en.wikipedia.org/wiki/Well-formed_formula "Well-formed formula") of a [formal language](https://en.wikipedia.org/wiki/Formal_language "Formal language") $L$.

The symbols $A$ and $B$ are not symbols of the object language $L$, they are metavariables in the metalanguage (in this case, English) that is discussing the object language $L$.
#### Metatheories and Metatheorems
> 🔗 [Metatheory](https://en.wikipedia.org/wiki/Metatheory "Metatheory") and 🔗 [Metatheorem](https://en.wikipedia.org/wiki/Metatheorem "Metatheorem")

A _metatheory_ is a [theory](https://en.wikipedia.org/wiki/Theory "Theory") whose subject matter is some other theory (a theory about a theory). [Statements](https://en.wikipedia.org/wiki/Statement_\(logic\) "Statement (logic)") made in the metatheory about the theory are called [metatheorems](https://en.wikipedia.org/wiki/Metatheorem "Metatheorem"). A _metatheorem_ is a [true](https://en.wikipedia.org/wiki/Truth "Truth") statement about a [formal system](https://en.wikipedia.org/wiki/Formal_system "Formal system") expressed in a metalanguage. Unlike theorems proved within a given formal system, a metatheorem is proved within a [metatheory](https://en.wikipedia.org/wiki/Metatheory "Metatheory"), and may reference concepts that are present in the [metatheory](https://en.wikipedia.org/wiki/Metatheory "Metatheory") but not the object theory.
#### Interpretations
> 🔗 [Interpretation (logic)](https://en.wikipedia.org/wiki/Interpretation_\(logic\) "Interpretation (logic)")

An _interpretation_ is an [assignment](https://en.wikipedia.org/wiki/Valuation_\(logic\) "Valuation (logic)") of meanings to the [symbols](https://en.wikipedia.org/wiki/Symbol_\(formal\) "Symbol (formal)") and [words](https://en.wikipedia.org/wiki/Word "Word") of a language.


### Semantics & Formal Semantics
↗ [Mathematical Logic Basics (Formal Logic) /Semantic & The Semantics of Mathematical Logics](../Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics.md#Semantic%20&%20The%20Semantics%20of%20Mathematical%20Logics)

↗ [Formal Semantics and Programming Language](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Formal%20Semantics%20and%20Programming%20Language/Formal%20Semantics%20and%20Programming%20Language.md)



## Formal Syntax Basics: Grammatical Category & Logic Formula
> ↗ [Formal System, Formal Logics, and Its Semantics](../Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics.md)
> ↗ [Syntactic Analysis (Parsing)](../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Processing%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/1️⃣%20Frontend%20-%20Programming%20Language%20Analysis/Syntactic%20Analysis%20(Parsing)/Syntactic%20Analysis%20(Parsing).md)

> 🔗 https://thzt.github.io/2018/01/27/semantics-3/

![](../../../../../Assets/Pics/Pasted%20image%2020251011204655.png)

从形式语言的角度来看，除了知道语言包含哪些符号之外，还要指定语法，
习惯上，我们经常使用[BNF](https://zh.wikipedia.org/wiki/%E5%B7%B4%E7%A7%91%E6%96%AF%E8%8C%83%E5%BC%8F)来指定：$t::=c∣x∣ft1⋯tn$

即一个合法的**项**，可以归纳定义为，
（1）每一个常元都是合法的项，
（2）每一个变元都是合法的项，
（3）如果t1,t2,⋯,tn​​都是合法的项，而ff是一个n元函数符号，那么ft​1​​⋯t​n​​也是一个合法的项。

初等算术语言Π中的合法项：
以下符号串都是合法的：
S0，Sx​1​​，+S0SSx，⋅x1+Sx1x2，
而SS<是不合法的。

我们知道逻辑证明，并不是建立在形式语法之上的，而是建立在公理系统上面，而每一个推导规则都表明了前提和结论之间的关系，这些前提和结论，称为**逻辑公式**。

一阶语言LL中的逻辑公式，用大写字母A,B,⋯表示，定义为，
$$A::=t1≐t2∣Rt1⋅⋅⋅tn∣¬A∣A∧B∣A∨B∣A→B∣A↔B∣∀xA∣∃xA$$

即，逻辑公式可以归纳的定义为，
（1）如果$t1$​​和$t2$是合法的项，则$t1≐t2$​​是公式，
（2）如果$t1,...,tn$是合法的项，而R是一个n元谓词，则$Rt1⋅⋅⋅tn$是公式，
（3）如果A是公式，则¬A是公式，
（4）若A,B是公式，则A∧B,A∨B,A→B,A↔B都是公式，
（5）若AA是公式并且x是一个变元，那么∀xA和∃xA也是公式，x称为**约束变元**。

例，以下符号串可以看做一个初等算术公式，$$∀x¬(Sx≐0),∀x∀y(<xy→(∃(y≐+xz)))$$

> 🔗 https://thzt.github.io/2018/01/30/semantics-4/
> 语法（符号）
> 1. 序贯
> 2. 协调性、一致性


### Sequent (序贯): Antecedent + Succedent
> 🔗 https://thzt.github.io/2018/01/30/semantics-4/

我们知道，在公理系统中，序贯可以用来表示前提和结论之间的符号联系。

序贯$Γ⊢Δ$，表示从公式集Γ出发，根据推导规则，可以证明出Δ中至少有一条公式成立。

习惯上，序贯$Γ⊢Δ$成立，也称$Γ⊢Δ$**可证**。
值得注意的是，序贯谈论的都是语法层面（符号层面）上的，和这些符号的所选择的具体语义无关。


### Consistance (协调性，一致性)
> 🔗 https://thzt.github.io/2018/01/30/semantics-4/

设Γ为公式集，

如果不存在一个公式A使得序贯$Γ⊢A$与$Γ⊢¬A$均可证，我们就称，公式集Γ是**协调的**，也称一致的。

设Γ是一阶语言L的公式集，该集合可以是有限集或可数集，如果Γ协调，则称Γ是一阶语言L的**形式理论**。



## Ref
