# MC Algorithms

[TOC]



## Res
### Related Topics
↗ [AST & CST (Abstract & Contrete Syntax Tree)](../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Transformation%20&%20Compilation%20Theory%20%28Compile-time%29/Compilation%20Phase/1️⃣%20Frontend%20-%20Programming%20Language%20Analysis/Syntactic%20Analysis%20%28Parsing%29/AST%20&%20CST%20%28Abstract%20&%20Contrete%20Syntax%20Tree%29.md)
↗ [Data Structure in Logic Formulas](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/🧶%20Data%20Structure%20in%20Logic%20Formulas/Data%20Structure%20in%20Logic%20Formulas.md)

↗ [Modal Logic (模态逻辑)](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Modal%20Logic%20%28模态逻辑%29/Modal%20Logic%20%28模态逻辑%29.md)
- ↗ [Dynamic Logic (DL)](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Modal%20Logic%20%28模态逻辑%29/Dynamic%20Logic%20%28DL%29/Dynamic%20Logic%20%28DL%29.md)
- ↗ [Temporal Logic (时态逻辑)](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Modal%20Logic%20%28模态逻辑%29/Temporal%20Logic%20%28时态逻辑%29/Temporal%20Logic%20%28时态逻辑%29.md)
	- ↗ [Computation-Tree Logic (CTL*) Family](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Modal%20Logic%20%28模态逻辑%29/Temporal%20Logic%20%28时态逻辑%29/Computation-Tree%20Logic%20%28CTLstar%29%20Family/Computation-Tree%20Logic%20%28CTLstar%29%20Family.md)
		- ↗ [Linear Temporal Logic (LTL)](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Modal%20Logic%20%28模态逻辑%29/Temporal%20Logic%20%28时态逻辑%29/Computation-Tree%20Logic%20%28CTLstar%29%20Family/Linear%20Temporal%20Logic%20%28LTL%29.md)
		- ↗ [Branching Time Logic (Computation-Tree Logic, CTL)](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Modal%20Logic%20%28模态逻辑%29/Temporal%20Logic%20%28时态逻辑%29/Computation-Tree%20Logic%20%28CTLstar%29%20Family/Branching%20Time%20Logic%20%28Computation-Tree%20Logic,%20CTL%29.md)

↗ [Data Flow Analysis](../../../🍦%20Software%20Security/🪆%20Software%20%28Program%29%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/👚%20SCA%20%28Static%20Code%20Analysis%29%20&%20SAST/Data%20Flow%20Analysis/Data%20Flow%20Analysis.md)

↗ [Set Mapping & Function](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/Set%20Mapping%20&%20Function/Set%20Mapping%20&%20Function.md)
↗ [Lattice (Order Theory)](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Relation%20Theory/Partial%20Order%20&%20Order%20Theory/Lattice%20%28Order%20Theory%29/Lattice%20%28Order%20Theory%29.md)
↗ [Computability (Recursion) Theory - Turing Machine and R.E. Language](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/😶‍🌫️%20Theory%20of%20Computation/Computability%20%28Recursion%29%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language/Computability%20%28Recursion%29%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language.md)


### Other Resources



## Intro
> [!links]
> ↗ [Models of Computation & Abstract Machines](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/😶‍🌫️%20Theory%20of%20Computation/Models%20of%20Computation%20&%20Abstract%20Machines/Models%20of%20Computation%20&%20Abstract%20Machines.md) "transition system"
> forward reachability
> backward reachability
> 
> ↗ [Set Mapping & Function](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/Set%20Mapping%20&%20Function/Set%20Mapping%20&%20Function.md)
> ↗ [Lattice (Order Theory)](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Relation%20Theory/Partial%20Order%20&%20Order%20Theory/Lattice%20%28Order%20Theory%29/Lattice%20%28Order%20Theory%29.md)
> Fixed point, greatest fixed point & least fixed point



## MC Algorithms By Modeling & Logic
### Vanilla Transition System Based MC Algorithm
> 🤖 GPT 6.1 Sol
> https://chatgpt.com/share/6ad0796a-ce24-83ec-88e1-255bfe34bc33

Model Checking 算法实际上计算什么？

给定：$M=\langle S,S_0,T,L\rangle$
和一个 CTL formula：$\varphi$

我们希望判断：$M\models\varphi$

一个重要技巧是：
不直接计算公式的一个真假值，而是先计算哪些状态满足这个公式。

定义：$\boxed{ Sat(\varphi)= \{s\in S\mid M,s\models\varphi\} }$

于是：$M\models\varphi$
等价于：$\boxed{S_0\subseteq Sat(\varphi)}$

也就是说：
如果所有 initial states 都属于公式的 satisfaction set，那么 property 成立。


#### Fixed Point Computation & Worklist Algorithm ⭐
↗ [Set Mapping & Function](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/Set%20Mapping%20&%20Function/Set%20Mapping%20&%20Function.md)
↗ [Computability (Recursion) Theory - Turing Machine and R.E. Language](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/😶‍🌫️%20Theory%20of%20Computation/Computability%20%28Recursion%29%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language/Computability%20%28Recursion%29%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language.md)

↗ [Lattice (Order Theory)](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Relation%20Theory/Partial%20Order%20&%20Order%20Theory/Lattice%20%28Order%20Theory%29/Lattice%20%28Order%20Theory%29.md) ⭐


#### CTL \* Based MC Algorithm
Bottom-up Marking Algorithm
- ↗ [MC Algorithms For CTL*](MC%20Algorithms%20For%20CTLstar%20Family/MC%20Algorithms%20For%20CTLstar.md)
- ↗ [MC Algorithms For CTL](MC%20Algorithms%20For%20CTLstar%20Family/MC%20Algorithms%20For%20CTL.md)
- ↗ [MC Algorithms For PCTL](MC%20Algorithms%20For%20CTLstar%20Family/MC%20Algorithms%20For%20PCTL.md)

> 🤖 GPT 6.1 Sol
> https://chatgpt.com/share/6ad0cd1e-97c0-83ec-936a-fe2a9b897395

| 对比维度                             | CTL                                              | CTL*                                            | LTL                                                | PCTL                                                                         |
| -------------------------------- | ------------------------------------------------ | ----------------------------------------------- | -------------------------------------------------- | ---------------------------------------------------------------------------- |
| 公式类型                             | State formulas                                   | State + Path formulas                           | Path formulas                                      | State + Path formulas                                                        |
| 底层模型                             | Kripke Structure / Transition System             | Kripke Structure / Transition System            | Kripke Structure / Transition System               | DTMC / MDP                                                                   |
| 能否按子公式 Bottom-up？                | 可以                                               | 可以，但需要区分 state 和 path formulas                  | 可以进行语法递归处理，但不是经典 state marking                     | 可以                                                                           |
| 经典 Bottom-up State Marking 是否适用？ | 直接适用                                             | 需要扩展，结合路径公式分析                                   | 通常不直接适用                                            | 直接适用于 state-formula evaluation                                               |
| 主要 Model Checking 算法             | Bottom-up State Labeling + Fixed-point Iteration | Bottom-up Labeling + Automata-based Checking    | Automata-based Model Checking                      | Bottom-up State Labeling + Probabilistic Computation                         |
| 核心计算对象                           | 状态集合 $Sat(\varphi)\subseteq S$                   | 状态集合 + 路径性质                                     | 路径性质 / Automata                                    | 状态集合 + 概率向量 $x\in[0,1]^S$                                                    |
| Fixed-point Computation          | LFP / GFP（集合上的不动点）                               | LFP / GFP，可结合 Automata                          | 可用于 Automata 的接受条件与 Emptiness Checking             | 数值 Fixed Point（如 Reachability Probability）                                   |
| 典型算法与技术                          | Predecessor、LFP、GFP、Worklist                     | Subformula Substitution、Automata、State Labeling | Büchi Automata、Product Construction、SCC、Nested DFS | Linear Equations、Value Iteration、Bellman Operator、Probabilistic Reachability |

核心区别： CTL 和 PCTL 都非常适合 Bottom-up State Marking；CTL* 需要额外处理路径公式；LTL 则通常使用 Automata-based Model Checking。

事实上，经典 CTL* Model Checking 可以结合 CTL 的 state labeling 与 LTL 的 automata-based checking：先计算内层量化子公式的满足状态集合，将其替换为新的 atomic propositions，再处理外层公式。


### Symbolic Model Checking
> [!TIP]
> $$\boxed{ \text{State Set} \longleftrightarrow \text{Characteristic Function} \longleftrightarrow \text{Boolean Formula} }$$
> 
> Pre-image & symbolic backward traversal

#### BDD-Based Symbolic Model Checking
> [!links]
> ↗ [BDDs (Binary Decision Diagrams) & ROBDD](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/🧶%20Data%20Structure%20in%20Logic%20Formulas/BDDs%20%28Binary%20Decision%20Diagrams%29%20&%20ROBDD.md)

#### Bounded (SAT-Based) Symbolic Model Checking (BMC)
> [!links]
> ↗ [SAT (Boolean Satisfiability Problem) Solvers](../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20&%20Checkers/Theorem%20Provers%20&%20Constraint%20Solvers/SAT%20%28Boolean%20Satisfiability%20Problem%29%20Solvers/SAT%20%28Boolean%20Satisfiability%20Problem%29%20Solvers.md)
> ↗ [SAT Solving & Algorithms](../../🎮%20Constraint%20Solving%20&%20Theorem%20Proving/SAT%20Solving%20&%20Algorithms/SAT%20Solving%20&%20Algorithms.md)

> used to find bugs

> 🤖 GPT 6.1 Sol
> https://chatgpt.com/share/6ad085a1-6104-83ec-851f-371c8ed85df3

用更清楚的伪代码表示：
```
def BMC(k_max, property_q):
    for k in range(k_max + 1):
        F = EncodePath(k) & EncodeViolation(property_q, k)

        result = SAT_Solve(F)

        if result == SAT:
            return Counterexample(F)

    return NO_COUNTEREXAMPLE_WITHIN_BOUND
```

这个过程每次执行三个操作：
1. Unroll transition relation 到深度 \(k\)。
2. 构造违反 property 的 Boolean formula。
3. 使用 SAT solver 检查 satisfiability。

如果找到 SAT，就提取 satisfying assignment，得到一条真实的 counterexample path。
如果连续检查： $k=0,1,\ldots,K$

都没有找到反例，我们只能得出：$\boxed{\text{No counterexample of length }\leq K}$

而不是：$\boxed{M\models AG\,q}$

除非我们额外知道 \(K\) 已经达到某个足以覆盖所有可能错误的界限。

---
① Bounded execution path
$Path(k)=Init(V_0)\land \bigwedge_{i=0}^{k-1}T(V_i,V_{i+1})$
描述所有长度为 \(k\) 的合法执行。

② BMC bug finding
$B(M,q,k)=Path(k)\land\neg q(V_k)$
SAT 表示存在长度为 \(k\) 的 counterexample。
##### Completeness & Diameter

#### Unbounded Symbolic Model Checking ⭐
> [!links]
> ↗ [Invariant Synthesis](../../🌋%20Invariant%20Synthesis/Invariant%20Synthesis.md)

> used to proof safety

- Simple Induction
	- invariant proof 
		- $\begin{aligned} Init(V)&\Rightarrow q(V)\\ q(V)\land T(V,V')&\Rightarrow q(V') \end{aligned}$
		- 两者都成立，可以证明 unbounded safety。
	- Invariant Generation / Invariant Synthesis
- k-Induction
- Interpolant-based Verification
#### BDD-based 🆚 BMC-based MC?
> 🤖 GPT 6.1 Sol
> https://chatgpt.com/share/6ad085a1-6104-83ec-851f-371c8ed85df3

二者的根本区别

| 维度          | BDD-based                | SAT-based BMC           |
| ----------- | ------------------------ | ----------------------- |
| 核心问题        | 哪些 states reachable？     | 有没有一条 bad path？         |
| 主要对象        | State sets               | Paths                   |
| 中间结果        | 计算和维护 \(F_i\)            | 构造 \(Path(k)\)          |
| 计算方式        | Symbolic state traversal | SAT solving             |
| Fixed point | 通常需要                     | 基本 BMC 不需要              |
| 找 bug       | 可以                       | 非常擅长                    |
| 证明无 bug     | 可以利用 fixed point         | 一般受 bound 限制            |
| 主要挑战        | BDD size explosion       | Formula size 随 \(k\) 增长 |



## Model Checking For Real Systems
> [!links]
> ↗ [Program Analysis Basics](../../../🍦%20Software%20Security/🪆%20Software%20%28Program%29%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/Program%20Analysis%20Basics.md)
> 
> ↗ [Syntactic Analysis (Parsing)](../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Transformation%20&%20Compilation%20Theory%20%28Compile-time%29/Compilation%20Phase/1️⃣%20Frontend%20-%20Programming%20Language%20Analysis/Syntactic%20Analysis%20%28Parsing%29/Syntactic%20Analysis%20%28Parsing%29.md)
> ↗ [Semantic Analysis](../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Transformation%20&%20Compilation%20Theory%20%28Compile-time%29/Compilation%20Phase/1️⃣%20Frontend%20-%20Programming%20Language%20Analysis/Semantic%20Analysis/Semantic%20Analysis.md)
> 
> ↗ [CBMC (C Bounded Model Checker)](../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20&%20Checkers/🤼%20Model%20Checker%20&%20Symbolic%20Model%20Verifier%20%28SMV%29/CBMC%20%28C%20Bounded%20Model%20Checker%29.md)
> ↗ [PRISM](../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20&%20Checkers/🤼%20Model%20Checker%20&%20Symbolic%20Model%20Verifier%20%28SMV%29/PRISM.md)
> ↗ [OFMC (Open-Source Fixed-Point Model-Checker)](../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20&%20Checkers/🤼%20Model%20Checker%20&%20Symbolic%20Model%20Verifier%20%28SMV%29/OFMC%20%28Open-Source%20Fixed-Point%20Model-Checker%29.md)


### Problem (System) Modeling & Intermediate Representation
> [!links]
> ↗ [IR (Intermediate Representation) & IR Generation](../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Transformation%20&%20Compilation%20Theory%20%28Compile-time%29/Compilation%20Phase/2️⃣%20IR%20%28Intermediate%20Representation%29%20&%20IR%20Generation/IR%20%28Intermediate%20Representation%29%20&%20IR%20Generation.md)

> 🤖 GPT 6.1 Sol
> https://chatgpt.com/share/6ad085a1-6104-83ec-851f-371c8ed85df3

program -> IR -> formula


assertion
- 我要求所有被检查的执行在这里都满足 \(e\)。
- Program assertion checking 
	- $ProgramConstraints\land\neg Assertion$
	- UNSAT 表示在所有被建模并覆盖的执行中，没有 assertion violation。
assumption
- 只考虑满足 \(e\) 的执行，忽略不满足 \(e\) 的执行。
nondeterminism
- \(x\) 可以取任何被建模为合法的整数值。

重要区别：

|               | `assume(e)` | `assert(e)`       |
| ------------- | ----------- | ----------------- |
| 含义            | 限定允许的执行     | 要求性质必须成立          |
| \(e=False\) 时 | 该执行被排除      | 发现违反性质            |
| 逻辑作用          | 加入前提 \(e\)  | 检查能否满足 \(\neg e\) |

从逻辑角度看：$\underbrace{Assumptions}_{\Gamma} \models \underbrace{Assertions}_{\varphi}$
恰好就是：$\Gamma\models\varphi$
的形式。


### BMC-Based MC For C
> [!Links]
> ↗ [CBMC (C Bounded Model Checker)](../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20&%20Checkers/🤼%20Model%20Checker%20&%20Symbolic%20Model%20Verifier%20%28SMV%29/CBMC%20%28C%20Bounded%20Model%20Checker%29.md)

> 🤖 GPT 6.1 Sol
> https://chatgpt.com/share/6ad085a1-6104-83ec-851f-371c8ed85df3

其中最重要的是课件明确列出的四个 transformation steps：
1. Simplify control flow。
2. Unwind all loops。
3. Convert into Static Single Assignment (SSA) form。
4. Convert into a set of equations
	1. Conditionals & $\phi$-Functions
	2. 这种合并不同控制流来源的运算，在 SSA 中叫：$\phi\text{-function}$

完成这四步后，原本包含循环、if-else、重复赋值等复杂结构的程序，会转化成可由 SAT solver 检查的约束。



## MC Algorithms Analysis
### MC Algorithms Complexity
> [!links]
> ↗ [Complexity Theory & Computational Complexity](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/😶‍🌫️%20Theory%20of%20Computation/Complexity%20Theory%20&%20Computational%20Complexity/Complexity%20Theory%20&%20Computational%20Complexity.md)

> 🤖 GPT 6.1 Sol
> https://chatgpt.com/share/6ad0796a-ce24-83ec-88e1-255bfe34bc33

| Logic | Model Checking Complexity          |
| ----- | ---------------------------------- |
| CTL   | $O(\|M\|\cdot\|\varphi\|)$         |
| LTL   | $O(\|M\|\cdot 2^{O(\|\varphi\|)})$ |
| CTL*  | $O(\|M\|\cdot 2^{O(\|\varphi\|)})$ |

其中：
$|M|=|S|+|T|$ 是显式状态图的大小。
$|\varphi|$ 是 specification formula 的大小。

CTL 可以使用高效的 marking / graph algorithms，复杂度与图和公式的大小成线性关系。

这里需要注意：前面展示的朴素 fixed-point 反复全图扫描，是为了理解语义；要达到讲义所列的线性复杂度，需要使用合适的 worklist、图遍历或 strongly connected components 等优化算法。

LTL 通常使用 automata-theoretic model checking，复杂度在公式长度上呈指数增长。

不过实际应用中，specification 往往比系统小得多。

所以不管 CTL 还是 LTL，实际最困难的问题经常还是 state explosion。


### MC Algorithms Limitation
#### State Explosion
↗ [Neuro-Symbolic AI](../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Major%20Techniques/Neuro-Symbolic%20AI/Neuro-Symbolic%20AI.md)
↗ [Exploring Neuro-Symbolic AI](../../../../../Academics%20🎓%20%28In%20CS%29/🗒️%20My%20Academic%20Projects%20Workspace/Exploring%20Neuro-Symbolic%20AI/Exploring%20Neuro-Symbolic%20AI.md)

---
↗ [Program Analysis Basics](../../../🍦%20Software%20Security/🪆%20Software%20%28Program%29%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/Program%20Analysis%20Basics.md)
↗ [Program Abstraction & Abstract Interpretation](../../../🍦%20Software%20Security/🪆%20Software%20%28Program%29%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/👚%20SCA%20%28Static%20Code%20Analysis%29%20&%20SAST/🛗%20Program%20Abstraction%20&%20Abstract%20Interpretation/Program%20Abstraction%20&%20Abstract%20Interpretation.md)

↗ [Lattice (Order Theory)](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Relation%20Theory/Partial%20Order%20&%20Order%20Theory/Lattice%20%28Order%20Theory%29/Lattice%20%28Order%20Theory%29.md)
partial order reduction

symbolic model checking
- ↗ [BDDs (Binary Decision Diagrams) & ROBDD](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20%28Foundations%20of%20Mathematics%29/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/🧶%20Data%20Structure%20in%20Logic%20Formulas/BDDs%20%28Binary%20Decision%20Diagrams%29%20&%20ROBDD.md)
- ↗ [SAT (Boolean Satisfiability Problem) Solvers](../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20&%20Checkers/Theorem%20Provers%20&%20Constraint%20Solvers/SAT%20%28Boolean%20Satisfiability%20Problem%29%20Solvers/SAT%20%28Boolean%20Satisfiability%20Problem%29%20Solvers.md)

compositional reasoning



## Ref
> [!summary] CSCI5690 Lec 6.2 — SAT-Based Model Checking & CBMC
> 
> - **1. Bounded Model Checking (BMC)**
>     - **Core Idea:** 将 Model Checking 转化为 SAT 问题，寻找长度不超过 $k$ 的 counterexample，而不是计算所有 reachable states。
>     - **Transition System:** $M=(S,I,T)$
>         - $S$: state space；$I$: initial states；$T$: transition relation。
>         - $Init(\vec V)$: 初始状态约束；$T(\vec V,\vec V')$: 单步转移约束。
>     - **Path Unrolling:** 引入 $\vec V_0,\ldots,\vec V_k$，编码长度为 $k$ 的执行路径：
>         - $Path(k)=Init(\vec V_0)\land\bigwedge_{i=0}^{k-1}T(\vec V_i,\vec V_{i+1})$
>         - 一个 symbolic formula 可以同时表示大量 concrete execution paths，无须逐条枚举。
>     - **BMC Encoding:** 对 safety property $AG\,q$，寻找第 $k$ 步违反 $q$ 的路径：
>         - $B(M,q,k)=Path(k)\land\neg q(\vec V_k)$
>         - **SAT:** 存在长度为 $k$ 的 counterexample，可以提取 execution trace。
>         - **UNSAT:** 不存在长度恰好为 $k$、在终点违反 $q$ 的路径；不代表系统永远安全。
>     - **BMC Procedure:** 从 $k=0$ 开始逐步增加 bound，每次构造公式并调用 SAT solver。
>         - 首次 SAT 得到 shortest counterexample（按 transition 数量）。
>         - Formula size 随 bound $k$ 增长。
>     - **Completeness Threshold:**
>         - 对 finite-state systems，如果所有深度直到足够大的 completeness threshold 都没有反例，可以证明 safety。
>         - Diameter = 从 initial states 到各 reachable states 的 shortest-path distance 的最大值。
>         - 实践中 threshold 可能极大或难以计算，因此基本 BMC 主要用于 falsification（找 bug）。
> 
> - **2. BMC vs. BDD-Based Symbolic Model Checking**
>     - **BDD-Based:**
>         - 通过 symbolic state traversal 计算 reachable state sets。
>         - $F_{i+1}=F_i\cup Post(F_i)$，直到达到 fixed point。
>         - 主要维护的是状态集合，BDD 可能发生 size explosion。
>     - **SAT-Based BMC:**
>         - 通过 transition unrolling 直接搜索 counterexample paths。
>         - 不显式计算或存储 intermediate reachable state sets，也不需要 fixed point。
>         - 通常更适合寻找较短的 bug traces，但受到 bound 和 formula size 限制。
>     - **Key Distinction:** BDD-based 方法主要计算 reachable states；BMC 直接求解满足约束的 bad paths。
>     - 两者都属于 symbolic model checking；区别在于 symbolic representation 和 verification algorithm。
> 
> - **3. Unbounded Verification via Induction**
>     - **Goal:** 证明 $M\models AG\,q$，即所有 reachable states 都满足 $q$。
>     - **Base Case:** 所有 initial states 满足 $q$。
>         - $Init(V)\Rightarrow q(V)$
>         - SAT check: $Init(V)\land\neg q(V)$ 应为 **UNSAT**。
>     - **Inductive Step:** 满足 $q$ 的状态经过一步合法 transition 后仍满足 $q$。
>         - $q(V)\land T(V,V')\Rightarrow q(V')$
>         - SAT check: $q(V)\land T(V,V')\land\neg q(V')$ 应为 **UNSAT**。
>     - Base Case + Inductive Step 都成立，则 $q$ 是 inductive invariant，可以证明 unbounded safety。
>     - **Important Distinction:**
>         - Inductive Step 返回 SAT 不一定代表真实 bug，因为得到的状态可能 unreachable。
>         - Invariant: $Reach\subseteq\llbracket q\rrbracket$。
>         - Inductive Invariant: 还要求 $Init\subseteq\llbracket q\rrbracket$ 以及 $Post(\llbracket q\rrbracket)\subseteq\llbracket q\rrbracket$。
>         - Inductive Invariant $\Rightarrow$ Invariant，但反过来不一定成立。
>     - **Invariant Strengthening:** 若 $q$ 本身不 inductive，可以寻找更强的 $Inv$：
>         - $Init\Rightarrow Inv$
>         - $Inv(V)\land T(V,V')\Rightarrow Inv(V')$
>         - $Inv\Rightarrow q$
> 
> - **4. Other SAT-Based Unbounded Verification Methods**
>     - **k-Induction:**
>         - 将 simple induction 扩展为使用连续 $k$ 个状态满足 $q$ 的假设。
>         - Base Case 检查从初始状态出发的 bounded paths。
>         - Inductive Step 检查任意连续合法状态序列能否从前 $k$ 个状态满足 $q$ 推出下一个状态也满足 $q$。
>         - 比 simple induction 更强，但不保证总能成功。
>     - **Interpolation-Based Verification:**
>         - 从 UNSAT proof 中提取 Craig interpolant。
>         - Interpolant 可用于 over-approximate intermediate reachable states。
>         - 利用这些状态近似信息辅助证明 unbounded safety。
> 
> - **5. SAT-Based Program Verification**
>     - **Goal:** 给定 Program $P$、Property $q$ 和 Bound $k$，检查是否存在违反 $q$ 的 bounded execution。
>     - **Main Reduction:** Program execution → Logical Constraints → SAT/SMT。
>     - **Assertion Checking:**
>         - $C$: program constraints；$A$: assertion。
>         - Verification condition: $C\models A$。
>         - SAT check: $C\land\neg A$。
>         - **SAT:** 找到满足程序约束但违反 assertion 的 execution。
>         - **UNSAT:** 被建模和覆盖的执行中不存在 assertion violation。
>     - 常见 Safety Bugs: array out-of-bounds、division by zero、null pointer dereference、arithmetic overflow、assertion violation。
> 
> - **6. CBMC (C Bounded Model Checker)**
>     - 使用 SAT-based BMC 检查 C/C++ 程序的 safety properties。
>     - **Toolflow:** C Program → Parser → Static Analysis → Equations → CNF → SAT Solver → Result / Counterexample。
>     - **Four Main Transformation Steps:**
>         - **Step 1 — Simplify Control Flow:** 消除 side effects，规范化 loops，显式表示控制流跳转。
>         - **Step 2 — Loop Unwinding:** 将循环按给定 bound 展开为有限的 conditional executions。
>         - **Step 3 — SSA Conversion:** 将重复赋值转换成不同版本的变量。
>         - **Step 4 — Formula Encoding:** 将 assignments 和 assertions 转换成逻辑约束，交给 SAT/SMT solver。
> 
> - **7. Loop Unwinding & Unwinding Assertions**
>     - SAT-based BMC 处理有限长度的 executions，因此需要为 loops 设置 unwinding bound。
>     - **Loop Unwinding:** 将 `while(cond) { Body; }` 展开为有限层 nested `if`。
>     - **Unwinding Assertion:** 检查达到展开上限后，loop condition 是否已经为 false。
>         - 典型形式：`assert(!cond)`。
>         - Assertion holds：该执行不需要超过 bound 的循环次数。
>         - Assertion fails：存在需要继续执行循环的路径，当前 unwinding 不充分。
>     - **Important:** Unwinding assertion failure 不一定是原程序的 bug，而可能只是 bound 太小。
>     - 只有所有原始 claims 和所有 unwinding assertions 都得到验证，才能在相应建模语义下证明完整 safety。
> 
> - **8. Static Single Assignment (SSA)**
>     - **Core Idea:** 每个变量版本只赋值一次，使 imperative assignments 可以转换成 declarative logical constraints。
>     - **Repeated Assignments:**
>         - 原程序：`x = 1; x = x + 2;`
>         - SSA：$x_1=1,\quad x_2=x_1+2$。
>         - 避免把 state update 错误地理解为同一个变量的逻辑等式 $x=x+2$。
>     - **Conditional Branches & $\phi$-Functions:**
>         - 不同 branches 产生不同的变量版本。
>         - 在 control-flow join point 使用 $\phi$-function 合并。
>         - 例如：$x_3=\phi(x_1,x_2)=ITE(c,x_1,x_2)$。
>         - $ITE(c,a,b)$：当 $c$ 为 true 时选择 $a$，否则选择 $b$。
>     - **Array Updates:** 可用 Array Theory 表示，例如 $a_1=Store(a_0,i,v)$。
>     - **Key Connection:** SSA 是连接 program semantics、compiler intermediate representation 和 SAT/SMT encoding 的重要桥梁。
> 
> - **9. Modeling Primitives**
>     - **`assert(e)`:** 要求所有被检查的执行都满足 $e$；违反时产生 counterexample。
>     - **`assume(e)`:** 限制允许的执行路径；不满足 $e$ 的执行被排除。
>     - **`nondet_int()`:** 返回 symbolic nondeterministic integer，表示所有可能的合法整数值，而不是随机采样一个值。
>     - **Key Distinction:**
>         - `assume(e)` = constraint / precondition。
>         - `assert(e)` = property / proof obligation。
>         - 对应逻辑关系：$\text{Assumptions}\models\text{Assertions}$。
> 
> - **10. Important CBMC Commands (Lecture Syntax)**
>     - `cbmc --show-claims -I include file.c` — 显示程序中的 verification claims。
>     - `cbmc --unwind n --claim x -I include file.c` — 使用 unwind bound `n` 检查指定 claim。
>     - `cbmc --help` — 查看命令参数。
> 
> - **11. Critical SAT / UNSAT Distinctions**
>     - **BMC SAT:** 找到真实的 bounded counterexample。
>     - **BMC UNSAT:** 指定 bound 内未找到 counterexample，不等于 unbounded safety proof。
>     - **Induction Base SAT:** 存在违反 property 的 initial state。
>     - **Induction Step SAT:** 归纳条件失败，但可能只是 unreachable states 导致的 spurious counterexample。
>     - **Induction Base + Step UNSAT:** 可以证明 unbounded safety。
>     - **CBMC UNSAT:** 没有在当前覆盖范围内发现错误；需要进一步确认 loop unwinding 和建模是否完整。
> 
> - **12. Overall Knowledge Connections**
>     - **Logic / SAT:** 将 verification condition 转成 satisfiability problem；$\Gamma\models\varphi$ iff $\Gamma\land\neg\varphi$ is UNSAT。
>     - **Transition Systems / Temporal Logic:** 用 $M\models AG\,q$ 描述系统的 unbounded safety。
>     - **BDD-Based MC:** Reachability computation + Fixed Point。
>     - **SAT-Based BMC:** Transition Unrolling + Counterexample Search。
>     - **Induction / k-Induction / Interpolation:** 从 bounded reasoning 扩展到 unbounded verification。
>     - **CBMC:** Program → Loop Unwinding → SSA → Constraints / CNF → SAT Solver。
>     - **Central Insight:** 将程序的动态执行行为编码为静态逻辑约束，再使用 automated reasoning 判断是否存在违反 specification 的执行。

