# MC Algorithms

[TOC]



## Res
### Related Topics
↗ [AST & CST (Abstract & Contrete Syntax Tree)](../../../../../🔑%20CS%20Core/🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Transformation%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/1️⃣%20Frontend%20-%20Programming%20Language%20Analysis/Syntactic%20Analysis%20(Parsing)/AST%20&%20CST%20(Abstract%20&%20Contrete%20Syntax%20Tree).md)
↗ [Data Structure in Logic Formulas](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/🧶%20Data%20Structure%20in%20Logic%20Formulas/Data%20Structure%20in%20Logic%20Formulas.md)

↗ [Modal Logic (模态逻辑)](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Modal%20Logic%20(模态逻辑)/Modal%20Logic%20(模态逻辑).md)
- ↗ [Dynamic Logic (DL)](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Modal%20Logic%20(模态逻辑)/Dynamic%20Logic%20(DL)/Dynamic%20Logic%20(DL).md)
- ↗ [Temporal Logic (时态逻辑)](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Modal%20Logic%20(模态逻辑)/Temporal%20Logic%20(时态逻辑)/Temporal%20Logic%20(时态逻辑).md)
	- ↗ [Computation-Tree Logic (CTL*) Family](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Modal%20Logic%20(模态逻辑)/Temporal%20Logic%20(时态逻辑)/Computation-Tree%20Logic%20(CTL*)%20Family/Computation-Tree%20Logic%20(CTL*)%20Family.md)
		- ↗ [Linear Temporal Logic (LTL)](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Modal%20Logic%20(模态逻辑)/Temporal%20Logic%20(时态逻辑)/Computation-Tree%20Logic%20(CTL*)%20Family/Linear%20Temporal%20Logic%20(LTL).md)
		- ↗ [Branching Time Logic (Computation-Tree Logic, CTL)](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/Modal%20Logic%20(模态逻辑)/Temporal%20Logic%20(时态逻辑)/Computation-Tree%20Logic%20(CTL*)%20Family/Branching%20Time%20Logic%20(Computation-Tree%20Logic,%20CTL).md)

↗ [Data Flow Analysis](../../../🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/👚%20SCA%20(Static%20Code%20Analysis)%20&%20SAST/Data%20Flow%20Analysis/Data%20Flow%20Analysis.md)

↗ [Set Mapping & Function](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/Set%20Mapping%20&%20Function/Set%20Mapping%20&%20Function.md)
↗ [Lattice (Order Theory)](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Relation%20Theory/Partial%20Order%20&%20Order%20Theory/Lattice%20(Order%20Theory)/Lattice%20(Order%20Theory).md)
↗ [Computability (Recursion) Theory - Turing Machine and R.E. Language](../../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language.md)


### Other Resources



## Intro
> [!links]
> ↗ [Models of Computation & Abstract Machines](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Models%20of%20Computation%20&%20Abstract%20Machines/Models%20of%20Computation%20&%20Abstract%20Machines.md) "transition system"
> forward reachability
> backward reachability
> 
> ↗ [Set Mapping & Function](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/Set%20Mapping%20&%20Function/Set%20Mapping%20&%20Function.md)
> ↗ [Lattice (Order Theory)](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Relation%20Theory/Partial%20Order%20&%20Order%20Theory/Lattice%20(Order%20Theory)/Lattice%20(Order%20Theory).md)
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
↗ [Set Mapping & Function](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/Set%20Mapping%20&%20Function/Set%20Mapping%20&%20Function.md)
↗ [Computability (Recursion) Theory - Turing Machine and R.E. Language](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language.md)

↗ [Lattice (Order Theory)](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Relation%20Theory/Partial%20Order%20&%20Order%20Theory/Lattice%20(Order%20Theory)/Lattice%20(Order%20Theory).md) ⭐


#### CTL \* Based MC Algorithm
Bottom-up Marking Algorithm
- ↗ [MC Algorithms For CTL*](MC%20Algorithms%20For%20CTL*%20Family/MC%20Algorithms%20For%20CTL*.md)
- ↗ [MC Algorithms For CTL](MC%20Algorithms%20For%20CTL*%20Family/MC%20Algorithms%20For%20CTL.md)
- ↗ [MC Algorithms For PCTL](MC%20Algorithms%20For%20CTL*%20Family/MC%20Algorithms%20For%20PCTL.md)

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
> ↗ [BDDs (Binary Decision Diagrams) & ROBDD](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/🧶%20Data%20Structure%20in%20Logic%20Formulas/BDDs%20(Binary%20Decision%20Diagrams)%20&%20ROBDD.md)

#### Bounded (SAT-Based) Symbolic Model Checking (BMC)
> [!links]
> ↗ [SAT (Boolean Satisfiability Problem) Solvers](../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20&%20Checkers/Theorem%20Provers%20&%20Constraint%20Solvers/SAT%20(Boolean%20Satisfiability%20Problem)%20Solvers/SAT%20(Boolean%20Satisfiability%20Problem)%20Solvers.md)
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

#### Unbounded (SAT-Based) Symbolic Model Checking?
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
> ↗ [Program Analysis Basics](../../../🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/Program%20Analysis%20Basics.md)
> 
> ↗ [Syntactic Analysis (Parsing)](../../../../../🔑%20CS%20Core/🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Transformation%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/1️⃣%20Frontend%20-%20Programming%20Language%20Analysis/Syntactic%20Analysis%20(Parsing)/Syntactic%20Analysis%20(Parsing).md)
> ↗ [Semantic Analysis](../../../../../🔑%20CS%20Core/🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Transformation%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/1️⃣%20Frontend%20-%20Programming%20Language%20Analysis/Semantic%20Analysis/Semantic%20Analysis.md)
> 
> ↗ [CBMC (C Bounded Model Checker)](../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20&%20Checkers/🤼%20Model%20Checker%20&%20Symbolic%20Model%20Verifier%20(SMV)/CBMC%20(C%20Bounded%20Model%20Checker).md)
> ↗ [PRISM](../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20&%20Checkers/🤼%20Model%20Checker%20&%20Symbolic%20Model%20Verifier%20(SMV)/PRISM.md)
> ↗ [OFMC (Open-Source Fixed-Point Model-Checker)](../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20&%20Checkers/🤼%20Model%20Checker%20&%20Symbolic%20Model%20Verifier%20(SMV)/OFMC%20(Open-Source%20Fixed-Point%20Model-Checker).md)


### Problem (System) Modeling & Intermediate Representation
> [!links]
> ↗ [IR (Intermediate Representation) & IR Generation](../../../../../🔑%20CS%20Core/🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Transformation%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/2️⃣%20IR%20(Intermediate%20Representation)%20&%20IR%20Generation/IR%20(Intermediate%20Representation)%20&%20IR%20Generation.md)

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
> ↗ [CBMC (C Bounded Model Checker)](../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20&%20Checkers/🤼%20Model%20Checker%20&%20Symbolic%20Model%20Verifier%20(SMV)/CBMC%20(C%20Bounded%20Model%20Checker).md)

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
> [!links]
> ↗ [Models Analysis & Improvement](../Models%20Analysis%20&%20Improvement/Models%20Analysis%20&%20Improvement.md)


### MC Algorithms Complexity
> [!links]
> ↗ [Complexity Theory & Computational Complexity](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Complexity%20Theory%20&%20Computational%20Complexity/Complexity%20Theory%20&%20Computational%20Complexity.md)

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
↗ [Exploring Neuro-Symbolic AI](../../../../../Academics%20🎓%20(In%20CS)/🗒️%20My%20Academic%20Projects%20Workspace/Exploring%20Neuro-Symbolic%20AI/Exploring%20Neuro-Symbolic%20AI.md)

---
↗ [Program Analysis Basics](../../../🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/Program%20Analysis%20Basics.md)
↗ [Program Abstraction & Abstract Interpretation](../../../🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/👚%20SCA%20(Static%20Code%20Analysis)%20&%20SAST/🛗%20Program%20Abstraction%20&%20Abstract%20Interpretation/Program%20Abstraction%20&%20Abstract%20Interpretation.md)

↗ [Lattice (Order Theory)](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Relation%20Theory/Partial%20Order%20&%20Order%20Theory/Lattice%20(Order%20Theory)/Lattice%20(Order%20Theory).md)
partial order reduction

symbolic model checking
- ↗ [BDDs (Binary Decision Diagrams) & ROBDD](../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Semantics,%20and%20Formal%20Logic/🧶%20Data%20Structure%20in%20Logic%20Formulas/BDDs%20(Binary%20Decision%20Diagrams)%20&%20ROBDD.md)
- ↗ [SAT (Boolean Satisfiability Problem) Solvers](../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20&%20Checkers/Theorem%20Provers%20&%20Constraint%20Solvers/SAT%20(Boolean%20Satisfiability%20Problem)%20Solvers/SAT%20(Boolean%20Satisfiability%20Problem)%20Solvers.md)

compositional reasoning



## Ref
