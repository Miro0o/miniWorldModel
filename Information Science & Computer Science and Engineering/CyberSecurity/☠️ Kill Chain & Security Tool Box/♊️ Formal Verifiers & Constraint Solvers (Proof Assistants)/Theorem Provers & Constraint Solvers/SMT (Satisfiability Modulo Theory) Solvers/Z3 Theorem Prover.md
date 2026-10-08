# Z3 Theorem Prover

[TOC]



## Res
https://www.microsoft.com/en-us/research/project/z3-3/


### Related Topics
↗ [LEAN](../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20&%20Formats/Formal%20Verification%20&%20Analysis%20Programming%20Languages/LEAN.md)


### Learning Resources
https://theory.stanford.edu/~nikolaj/z3navigate.html
Navigating the Universe of Z3 Theory Solvers
Nikolaj Bjørner, Lev Nachmanson
Microsoft Research
 - Modular combination of theory solvers is an integral theme in engineering modern SMT solvers. The CDCL(T) architecture provides an overall setting for how theory solvers may cooperate around a SAT solver based on conflict driven clause learning. The Nelson-Oppen framework provides the interface contracts between theory solvers for disjoint signatures. This paper provides an update on theories integrated in Z3. We briefly review principles of theory integration in CDCL(T) and then examine the theory solvers available in Z3, with special emphasis on two recent solvers: a new solver for arithmetic and a pluggable user solver that allows callbacks to invoke propagations and detect conflicts.


### Other Resources
https://microsoft.github.io/z3guide/docs/logic/intro/
- [Logic](https://microsoft.github.io/z3guide/docs/logic/intro#)
    - [Introduction](https://microsoft.github.io/z3guide/docs/logic/intro)
    - [Basic Commands](https://microsoft.github.io/z3guide/docs/logic/basiccommands)
    - [Propositional Logic](https://microsoft.github.io/z3guide/docs/logic/propositional-logic)
    - [Uninterpreted Functions and Constants](https://microsoft.github.io/z3guide/docs/logic/Uninterpreted-functions-and-constants)
    - [Quantifiers](https://microsoft.github.io/z3guide/docs/logic/Quantifiers)
    - [Lambdas](https://microsoft.github.io/z3guide/docs/logic/Lambdas)
    - [Recursive Functions](https://microsoft.github.io/z3guide/docs/logic/Recursive%20Functions)
    - [Conclusion](https://microsoft.github.io/z3guide/docs/logic/Conclusion)
- [Theories](https://microsoft.github.io/z3guide/docs/logic/intro#)
    - [Arithmetic](https://microsoft.github.io/z3guide/docs/theories/Arithmetic)
    - [Bitvectors](https://microsoft.github.io/z3guide/docs/theories/Bitvectors)
    - [IEEE Floats](https://microsoft.github.io/z3guide/docs/theories/IEEE%20Floats)
    - [Arrays](https://microsoft.github.io/z3guide/docs/theories/Arrays)
    - [Datatypes](https://microsoft.github.io/z3guide/docs/theories/Datatypes)
    - [Strings](https://microsoft.github.io/z3guide/docs/theories/Strings)
    - [Sequences](https://microsoft.github.io/z3guide/docs/theories/Sequences)
    - [Regular Expressions](https://microsoft.github.io/z3guide/docs/theories/Regular%20Expressions)
    - [Unicode Characters](https://microsoft.github.io/z3guide/docs/theories/Characters)
    - [Special Relations](https://microsoft.github.io/z3guide/docs/theories/Special%20Relations)
- [Strategies](https://microsoft.github.io/z3guide/docs/logic/intro#)
    - [Introduction](https://microsoft.github.io/z3guide/docs/strategies/intro)
    - [Goals](https://microsoft.github.io/z3guide/docs/strategies/goals)
    - [Tactics](https://microsoft.github.io/z3guide/docs/strategies/tactics)
    - [Probes](https://microsoft.github.io/z3guide/docs/strategies/probes)
    - [Simplifiers](https://microsoft.github.io/z3guide/docs/strategies/simplifiers)
    - [Tactics Summary](https://microsoft.github.io/z3guide/docs/strategies/summary)
    - [Simplifiers Summary](https://microsoft.github.io/z3guide/docs/strategies/simplifiers-summary)
- [Optimization](https://microsoft.github.io/z3guide/docs/logic/intro#)
    - [Introduction](https://microsoft.github.io/z3guide/docs/optimization/intro)
    - [Optimization from the API](https://microsoft.github.io/z3guide/docs/optimization/apioptimization)
    - [Arithmetical Optimization](https://microsoft.github.io/z3guide/docs/optimization/arithmeticaloptimization)
    - [Soft Constraints](https://microsoft.github.io/z3guide/docs/optimization/softconstraints)
    - [Combining Objectives](https://microsoft.github.io/z3guide/docs/optimization/combiningobjectives)
    - [A Small Case Study](https://microsoft.github.io/z3guide/docs/optimization/asmallcasestudy)
    - [Advanced Topics](https://microsoft.github.io/z3guide/docs/optimization/advancedtopics)
- [FixedPoints](https://microsoft.github.io/z3guide/docs/logic/intro#)
    - [Introduction](https://microsoft.github.io/z3guide/docs/fixedpoints/intro)
    - [Basic Datalog](https://microsoft.github.io/z3guide/docs/fixedpoints/basicdatalog)
    - [Generalized PDR with SPACER](https://microsoft.github.io/z3guide/docs/fixedpoints/engineforpdr)
    - [Syntax](https://microsoft.github.io/z3guide/docs/fixedpoints/syntax)


https://ericpony.github.io/z3py-tutorial/guide-examples.htm
Z3 API in Python
This tutorial demonstrates the main capabilities of Z3Py: the Z3 API in [Python](http://www.python.org/). No Python background is needed to read this tutorial. However, it is useful to learn Python (a fun language!) at some point, and there are many excellent free resources for doing so ([Python Tutorial](http://docs.python.org/tutorial/)).
The Z3 distribution also contains the **C**, **.Net** and **OCaml** APIs. The source code of Z3Py is available in the Z3 distribution, feel free to modify it to meet your needs. The source code also demonstrates how to use new features in Z3 4.0. Other cool front-ends for Z3 include [Scala^Z3](http://lara.epfl.ch/~psuter/ScalaZ3/) and [SBV](http://hackage.haskell.org/package/sbv).

[Programming Z3](https://z3prover.github.io/papers/programmingz3.html)
[Z3 Playground](https://jfmc.github.io/z3-play)



## Intro
> [!Abstract] 🤖 GPT 6.0 Astra
> https://chatgpt.com/share/6ac79f7b-8098-83ec-b872-fb9aac05d70d
> 
> $\boxed{ \begin{array}{c} \textbf{Z3 / SMT} \\[3mm] \downarrow \\[3mm] \text{Declare symbols + sorts} \\ x:\mathrm{Int}, \quad f:A\to A \\[3mm] \downarrow \\[3mm] \text{Construct terms / formulas} \\ f(x)=y,\quad x+y=10 \\[3mm] \downarrow \\[3mm] \text{Assert constraints} \\ \Gamma=\{\phi_1,\ldots,\phi_n\} \\[3mm] \downarrow \\[3mm] \texttt{check()} \\[3mm] \begin{cases} sat & \exists M.\;M\models\Gamma\\ unsat & \nexists M.\;M\models\Gamma\\ unknown & \text{solver cannot determine} \end{cases} \\[5mm] \downarrow \\ \texttt{model()} \\ M \end{array} }$
> 
> $\texttt{prove}(F) \quad\Longleftrightarrow\quad \text{check whether }\neg F\text{ is UNSAT}$
> $\models F \iff \neg F\text{ unsatisfiable}$


Z3 is a high performance theorem prover developed at [Microsoft Research](http://research.microsoft.com/). Z3 is used in many applications such as: software/hardware verification and testing, constraint solving, analysis of hybrid systems, security, biology (in silico analysis), and geometrical problems.

> 🔗 https://en.wikipedia.org/wiki/Z3_Theorem_Prover

Z3 was developed in the _Research in Software Engineering_ (RiSE) group at [Microsoft Research Redmond](https://en.wikipedia.org/wiki/Microsoft_Research_Redmond "Microsoft Research Redmond") and is targeted at solving problems that arise in [software verification](https://en.wikipedia.org/wiki/Software_verification "Software verification") and [program analysis](https://en.wikipedia.org/wiki/Program_analysis "Program analysis"). Z3 supports arithmetic, fixed-size bit-vectors, extensional arrays, datatypes, uninterpreted functions, and [quantifiers](https://en.wikipedia.org/wiki/Quantifier_\(logic\) "Quantifier (logic)"). Its main applications are [extended static checking](https://en.wikipedia.org/wiki/Extended_static_checking "Extended static checking"), test case generation, and [predicate abstraction](https://en.wikipedia.org/wiki/Predicate_abstraction "Predicate abstraction").

Z3 was open sourced in the beginning of 2015. The source code is licensed under [MIT License](https://en.wikipedia.org/wiki/MIT_License "MIT License") and hosted on [GitHub](https://en.wikipedia.org/wiki/GitHub "GitHub"). The solver can be built using [Visual Studio](https://en.wikipedia.org/wiki/Visual_Studio "Visual Studio"), a [makefile](https://en.wikipedia.org/wiki/Makefile "Makefile") or using [CMake](https://en.wikipedia.org/wiki/CMake "CMake") and runs on [Windows](https://en.wikipedia.org/wiki/Microsoft_Windows "Microsoft Windows"), [FreeBSD](https://en.wikipedia.org/wiki/FreeBSD "FreeBSD"), [Linux](https://en.wikipedia.org/wiki/Linux "Linux"), and [macOS](https://en.wikipedia.org/wiki/MacOS "MacOS").

The default input format for Z3 is [SMTLIB2](https://en.wikipedia.org/wiki/Smt2_\(file_format\) "Smt2 (file format)"). It also has officially supported [bindings](https://en.wikipedia.org/wiki/Language_binding "Language binding") for several [programming languages](https://en.wikipedia.org/wiki/Programming_language "Programming language"), including [C](https://en.wikipedia.org/wiki/C_\(programming_language\) "C (programming language)"), [C++](https://en.wikipedia.org/wiki/C++ "C++"), [Python](https://en.wikipedia.org/wiki/Python_\(programming_language\) "Python (programming language)"), [.NET](https://en.wikipedia.org/wiki/.NET ".NET"), [Java](https://en.wikipedia.org/wiki/Java_\(programming_language\) "Java (programming language)"), and [OCaml](https://en.wikipedia.org/wiki/OCaml "OCaml").

Z3 also provides a strategy language that lets users control how the solver attacks a problem. Strategies are built from _tactics_, which transform a goal into a set of subgoals (for example by simplification, Gaussian elimination, or bit-blasting); _tacticals_, combinators such as sequencing, alternation, repetition, timeouts and parallel composition that build compound tactics from simpler ones; and _probes_, which measure properties of a goal so that a strategy can branch on them. The design adapts the tactic framework of [LCF](https://en.wikipedia.org/wiki/LCF_\(theorem_prover\) "LCF (theorem prover)")-style interactive theorem provers to SMT solving, allowing users to tailor the solver's heuristics to specific classes of problems.


### Supported Theories
| Theory                             | Z3                      |
| ---------------------------------- | ----------------------- |
| Equality + uninterpreted functions | `Function`              |
| Integer / Real arithmetic          | `IntSort`, `RealSort`   |
| Arrays                             | `ArraySort`             |
| Bit-vectors                        | `BitVecSort`            |
| Floating point                     | `FPSort`                |
| Algebraic datatypes                | `Datatype`              |
| Strings / sequences                | `StringSort`, `SeqSort` |


#### Function, Array, and Lambda
> [!Links]
> ↗ [Set Mapping & Function](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/Set%20Mapping%20&%20Function/Set%20Mapping%20&%20Function.md)
> ↗ [Lambda Calculus (λ-Calculus)](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/🎩%20Higher-Order%20Languages%20&%20Logics%20(HOL)/Lambda%20Calculus%20(λ-Calculus)/Lambda%20Calculus%20(λ-Calculus).md)

#lambda #function #array #formal_semantics 

> 🤖 GPT 6.0 Astra
> https://chatgpt.com/share/6ac79f7b-8098-83ec-b872-fb9aac05d70d

三者最清晰的关系可以画成：

$\boxed{ \begin{array}{ccc} \textbf{Function symbol} & \textbf{Array value} & \textbf{Lambda term} \\[2mm] f:A\to B & a:\mathrm{Array}(A,B) & \lambda x.\,t(x) \\[2mm] \text{symbol in language} & \text{object in function space} & \text{expression constructing such an object} \end{array} }$

然后它们可以互相联系：
$f \xrightarrow{\mathrm{AsArray}} \text{array representing }f$
以及： $\lambda x.t(x)$
本身直接就是：$Array(A,B)$ sort 的一个 term。


$\boxed{ \begin{array}{ccc} \textbf{Syntax} && \textbf{Semantics} \\[2mm] f\text{ function symbol} && f^M:A\to B \\[2mm] a\text{ array variable} && a^M\in B^A \\[2mm] \lambda x.t && \text{the mapping }d\mapsto [t]_{x:=d} \end{array} }$


---
Lambda 的作用？最直接的用处是：**构造一个函数式对象**。
为什么不能全都用 `Function`？
因为 `Function` 只是 symbol。
比如：
```
f = Function('f', IntSort(), IntSort())
```

你不能直接说：
```
f = x*x
```

因为左边是 function declaration，右边是普通 term。

你当然可以通过公理约束：
```
s.add(ForAll(x, f(x) == x*x))
```

这样就表达：$\forall x.\ f(x)=x^2$

但相比：
```
Lambda([x], x*x)
```

明显更绕。
所以 lambda 给你的是一种**函数作为 expression** 的能力。


---
这和 lambda calculus 是一个东西吗？
是同一个核心概念，但不能说“Z3 的 Lambda 就等于整个 lambda calculus”。
更准确地说：
$\boxed{ \text{Z3 的 Lambda 使用了 lambda calculus 中的 lambda abstraction 这个概念} }$

**lambda calculus 是一整套计算形式系统**。
它研究：
- lambda abstraction
- application
- substitution
- alpha conversion
- beta reduction
- eta conversion
- normalization
- computability
甚至 pure lambda calculus 里，连 Boolean、number、pair 都可以编码出来。

而 Z3：
> 只是把 lambda abstraction 当成逻辑表达式的一种构造工具。



## Ref
[🤔 Understanding SMT solvers: An Introduction to Z3]: https://de-engineer.github.io/SMT-Solvers/
This post was an overview of SMT solvers with the practical example of a CTF challenge and we also touched a bit on their limitations. I’m not an expert on the topic, I tried to cover all the introductory knowledge that I could put in without increasing the complexity of the blog. There is indeed far more to learn about and you can do so by checking all the links in the resources section.
- [Symbolic Execution Lecture from MIT](https://www.youtube.com/watch?v=yRVZPvHYHzw)
- [Symbolic Execution with Triton Engine](https://pwn.umasscybersec.org/lectures/index.html)
- [HexRays CTF solution with Z3](https://www.youtube.com/watch?v=kZd1Hi0ZBYc)
- [OST2 Course on Symbolic Analysis (teaches angr)](https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2+RE3201_symexec+2021_V1/course/)
- [Papers by Z3 team](https://z3prover.github.io/papers/)
- [The Path Explosion Problem in Symbolic Execution - Paper](https://studenttheses.uu.nl/bitstream/handle/20.500.12932/35856/thesis.pdf?sequence=1&isAllowed=y)

---
Further topics:
- **Foundations**
    - Herbrand's theorem
    - Undecidability of first-order logic
    - Decidable fragments
        - EPR
    - Completeness and compactness
- **Quantifier reasoning**
    - Skolemization
    - Quantifier elimination
    - E-matching
    - Model-based quantifier instantiation
    - Model-based projection
- **SMT solving**
    - Nelson–Oppen theory combination
- **Theorem proving**
    - Resolution
    - Superposition
- **Verification**
    - Craig interpolation
    - Constrained Horn clauses
    - Induction
    - Bounded model checking
    - IC3 / PDR
    - Symbolic execution
