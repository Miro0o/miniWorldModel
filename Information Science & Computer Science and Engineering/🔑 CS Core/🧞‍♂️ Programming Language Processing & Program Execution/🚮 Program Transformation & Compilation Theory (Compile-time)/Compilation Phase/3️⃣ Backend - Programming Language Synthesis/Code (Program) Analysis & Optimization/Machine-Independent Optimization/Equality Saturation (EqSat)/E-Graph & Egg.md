# E-Graph & Egg

[TOC]



## Res
🏠 https://egraphs.org/
EGRAPHS Community
- [Home](https://egraphs.org/)
 - [Community Meeting](https://egraphs.org/meeting/)
 - [Workshop](https://egraphs.org/workshop/)
 - [Zulip Chat](https://egraphs.org/zulip/)
The EGRAPHS community brings together researchers and practitioners that use e-graphs and related techniques. E-graphs are data structures for working with large equivalence classes of programs. While originally designed for use in automated theorem provers (such as SMT solvers), they have recently been employed to build new kinds of program optimizers and synthesizers using a technique called _equality saturation_.
Curious what people are doing with e-graphs? Check out [Philip Zucker’s](https://www.philipzucker.com/) page on [Awesome E-graphs](https://github.com/philzook58/awesome-egraphs).


🚧 https://egraphs-good.github.io/
The egg project uses e-graphs to provide a new way to build program optimizers and synthesizers.
📄 https://dl.acm.org/doi/pdf/10.1145/3434304
egg: Fast and Extensible Equality Saturation


🚧 https://github.com/egraphs-good/egglog
This is the repo for the core of the `egglog` engine, which combines the power of equality saturation and Datalog.
📄 https://dl.acm.org/doi/pdf/10.1145/3591239
Beer Together: Unifying Datalog and Equality Saturation


### Related Topics
↗ [Datalog (Data Logic)](../../../../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/GPL%20(General%20Purpose%20Languages)/📌%20Logic%20Programming%20Languages/Prolog%20(Programmation%20en%20Logique)/Datalog%20(Data%20Logic)/Datalog%20(Data%20Logic).md)
↗ [Equational Reasoning & Term Rewriting](../../../../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Program%20Equivalence%20and%20Metatheory/Equational%20Reasoning%20&%20Term%20Rewriting/Equational%20Reasoning%20&%20Term%20Rewriting.md)

↗ [Universal Algebra (泛代数)](../../../../../../../../🧮%20Mathematics/🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/👽%20Universal%20Algebra%20(泛代数)/Universal%20Algebra%20(泛代数).md)


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/E-graph

In [computer science](https://en.wikipedia.org/wiki/Computer_science "Computer science"), an **e-graph** is a [data structure](https://en.wikipedia.org/wiki/Data_structure "Data structure") that stores an [equivalence relation](https://en.wikipedia.org/wiki/Equivalence_relation "Equivalence relation") over [terms](https://en.wikipedia.org/wiki/Term_\(logic\) "Term (logic)") of some [language](https://en.wikipedia.org/wiki/Formal_language "Formal language").

> 🤖 GPT 6.0 Astra

```
                 source expression
                        │
                        ▼
                    E-GRAPH
                        │
          ┌─────────────┼─────────────┐
          │             │             │
          ▼             ▼             ▼
      rewriting      analysis      relations
          │             │             │
          └─────────────┼─────────────┘
                        │
                        ▼
                 new equalities
                 new information
                        │
                        ▼
                     rebuild
                        │
                        ▼
                   fixed point
                        │
                        ▼
                    extractor
                        │
                        ▼
                 best expression
                 


---
所以更准确地讲，一个 EqSat optimizer 可以拆成三个相互独立的问题：

        ① 哪些变换是合法的？
                │
             rewrites
                │
                ▼
        ② 要探索哪些候选？ (① + ② rewrite scheduling)
                │
       e-graph + scheduling
                │
                ▼
        ③ 哪一个候选最好？ (program extraction)
                │
          cost + extraction
                │
                ▼
             output
             

---
# 我会把整个问题分成四层
这个模型可能最适合你现在的理解：  
──────────────────────────────
Layer 1: Semantics
──────────────────────────────

哪些东西真的相等？

x + 0 = x
a(b+c) = ab+ac
...

用户 / theorem / synthesis 决定


──────────────────────────────
Layer 2: Representation
──────────────────────────────

如何同时保存大量 equality？

              E-GRAPH


──────────────────────────────
Layer 3: Search
──────────────────────────────

探索哪些 equality？

rule scheduling
limits
phases
guidance
analysis


──────────────────────────────
Layer 4: Objective
──────────────────────────────

哪个程序最好？

cost model
+
extraction



其中 e-graph 最直接解决的是：
Layer 2。

Equality Saturation 是：
Layer 2 + 一种 Layer 3 策略。

`egg` 给你的是：
Layer 2 + Layer 3 的高效基础设施，同时开放 Layer 1 和 Layer 4 给用户。
```

cost model 怎么得到？

| 方法                 | 思路                 | 例子                          |
| ------------------ | ------------------ | --------------------------- |
| 手工 cost            | 人定义每个 operator 的成本 | AST size、instruction count  |
| analytic model     | 数学估算 hardware cost | latency、area、memory traffic |
| profiling          | 真正在机器上跑            | GPU kernel latency          |
| learned cost model | ML 预测性能            | tensor compiler、autotuning  |
| solver-based       | 把全局约束交给 solver     | ILP/MILP extraction         |
| multi-objective    | 同时考虑多个指标           | latency + area + energy     |


### Overview
> 🤖 GPT 6.1 Sol
> https://chatgpt.com/share/6ad4cba4-7738-83ec-9133-c0d8c4a560cd

**Part X. E-graph 的数学基础、算法框架与研究方向总结**

**1. E-graph 的数学基础：Equational Theory、Term Algebra 与 Congruence**

E-graph 可以从 Universal Algebra 和 Equational Logic 的角度理解。
首先定义一个 signature：
- $\Sigma=(F,\operatorname{arity})$
- $F$：函数符号与常量符号集合，常量可以看作 arity 为 $0$ 的函数符号。
- $\operatorname{arity}$：给出每个函数符号的参数数量。
例如：
- $F=\{+,\times,0,1,\ldots\}$
- $\operatorname{arity}(+)=2$
- $\operatorname{arity}(\times)=2$
- $\operatorname{arity}(0)=0$

给定变量集合 $X=\{x,y,a,b,\ldots\}$，可以构造 Term Algebra：
- $T_\Sigma(X)$：由 signature $\Sigma$ 和变量集合 $X$ 生成的所有 well-formed terms。
例如：
- $x$
- $x+0$
- $x\times1$
- $(x+y)\times z$

给定一组等式公理（Equational Axioms）：
- $E=\{x+0=x,\ x\times1=x,\ x+y=y+x,\ldots\}$

这些等式在 $T_\Sigma(X)$ 上生成一个 Congruence Relation：
- $\equiv_E$：包含等式 $E$ 的所有替换实例，并对等价关系与同余规则封闭的最小 congruence relation。

Congruence 的核心性质：
- 若 $a_i\equiv_E b_i$ 对所有 $i=1,\ldots,n$ 成立，则 $f(a_1,\ldots,a_n)\equiv_E f(b_1,\ldots,b_n)$。

因此可以构造 Quotient Algebra：
- $T_\Sigma(X)/{\equiv_E}$
也就是将所有等价的 terms 归入同一个 equivalence class。

**E-graph 的代数理解：**
- E-node：函数符号及其 child E-classes。
- E-class：保存已知等价的 E-nodes，紧凑表示相应的等价表达式。
- Congruence Closure：确保子表达式等价时，相应父表达式的等价关系也得到维护。
- E-graph：有限的数据结构，紧凑表示当前已经发现的等价关系及其表达式空间。
- Equality Saturation：通过 Rewrite Rules 不断扩展这些已知等价关系。

需要注意：
- $T_\Sigma(X)/{\equiv_E}$ 是数学上的完整 quotient construction。
- 实际 E-graph 通常只包含初始输入及 rewriting 过程中发现的结构。
- 因此，有限运行得到的 E-graph 不一定完整表示整个 Equational Theory 所蕴含的全部等价关系。
- E-graph 可以通过共享结构和 cycles，用有限空间表示无限多个 expressions。

---

**2. E-graph、Equality Saturation、Extraction、Proof 与 Analysis 的关系**

```tikz
\begin{document}
\begin{tikzpicture}[
    >=stealth,
    every node/.style={font=\small},
    main/.style={
        draw,
        rounded corners,
        align=center,
        minimum width=7cm,
        minimum height=1.05cm
    },
    branch/.style={
        draw,
        rounded corners,
        align=center,
        minimum width=3.5cm,
        minimum height=1.1cm
    }
]

\node[main] (theory) at (0,5.5)
    {Equational Theory\\$\Sigma,\ E,\ \equiv_E$};

\node[main] (graph) at (0,3.8)
    {E-graph\\E-nodes + E-classes + Congruence};

\node[main] (sat) at (0,2.1)
    {Equality Saturation\\Matching + Rewriting + Merging + Rebuilding};

\node[branch] (extract) at (-2.1,0)
    {Extraction\\Optimal / Low-cost Expression};

\node[branch] (proof) at (2.1,0)
    {Proof / Analysis\\Explanation + Verification};

\draw[->,thick] (theory) -- (graph);
\draw[->,thick] (graph) -- (sat);
\draw[->,thick] (sat.south) -- ++(0,-0.55) -| (extract.north);
\draw[->,thick] (sat.south) -- ++(0,-0.55) -| (proof.north);

\end{tikzpicture}
\end{document}
```

上述图表示概念关系。实际执行中，Equality Saturation 会反复修改和维护 E-graph，而不是一次性的单向过程。


**从 Program Optimization 的角度：**
- Input Program $\rightarrow$ Equality Saturation $\rightarrow$ Extraction $\rightarrow$ Optimized Program
其中：
- Equality Saturation：探索大量语义等价的程序表示。
- Extraction：根据 Cost Model 选择合适的表示。
- Cost Model：可以是 AST size、runtime、hardware area、delay、energy consumption 等。
优化目标：
- $e^*=\arg\min_{e\in[e_{\mathrm{input}}]}\operatorname{Cost}(e)$


**从 Theorem Proving 的角度：**
- Axioms + Expressions $\rightarrow$ Equality Reasoning $\rightarrow$ Proof
其中：
- Rewrite Rules：提供基础等式。
- Congruence Closure：推导上下文中的等价关系。
- Proof Construction：记录或重建推导过程。
- Proof Checking：检查等式推导是否符合给定的逻辑规则和公理。


**从 Abstract Interpretation 的角度：**
- E-graph + Abstract Domain $\rightarrow$ E-class Analysis $\rightarrow$ Refined Properties
其中：
- Abstract Domain：如 Interval、Constant Propagation、Sign Analysis。
- E-class Analysis：维护每个 E-class 的抽象信息。
- 同一个 E-class 的不同表达式可以分别参与分析。
- 通过合适的 Meet Operation 合并分析结果，可以提高分析精度。
例如：
- $e_1\equiv e_2\equiv e_3$
- $A(e_1)=[-3,\frac13]$
- $A(e_2)=[-2,0]$
- $A(e_3)=[-1,1]$
则：
- $A([e])=[-3,\frac13]\cap[-2,0]\cap[-1,1]=[-1,0]$


---

**4. E-graph 与 Model Checking 的联系和区别**

两者都属于 Automated Reasoning，并且可能使用 Graph、Symbolic Representation、Fixed Point 和 Equivalence Relations。

但研究对象和主要问题不同。

| 维度 | E-graph / Equality Saturation | Model Checking |
|---|---|---|
| 主要表示对象 | Terms / Expressions | States / Transitions |
| 数学结构 | Term Algebra、Congruence Classes | Transition System、Kripke Structure |
| 核心问题 | 哪些表达式等价？如何选择或证明？ | 系统是否满足给定 Property？ |
| 等价关系 | Equational Congruence | State Equivalence、Bisimulation 等 |
| 主要推理方式 | Rewriting、Congruence Closure | Temporal Logic、Reachability、Fixed Points |
| 主要数据结构 | E-nodes、E-classes | State Graph、Transition Relation |
| 常见算法 | E-matching、Saturation、Extraction | State Labeling、Worklist、Symbolic Model Checking |
| 典型输出 | Optimized Term、Proof、Analysis Result | Satisfaction Result、Counterexample、Certificate |
| 常见应用 | Compilers、Optimization、Synthesis | Hardware / Software Verification |

**二者的结合：**
- E-graph 可以优化 Model Checking 中使用的符号表达式。
- Equality Reasoning 可以帮助发现或维护具有相同语义的表达式。
- Program Verification 可以利用 E-graph 寻找更容易证明的程序表示。
- Relational Verification 可以利用 Equality Saturation 搜索合适的 Program Alignment。
- E-class Analysis 可以结合 Abstract Interpretation，生成有助于验证的抽象事实。

需要特别区分：
- E-graph 中的 Congruence：通常针对 Terms。
- Model Checking 中的 Bisimulation：通常针对 States 及其 Transition Behavior。

两者都是等价关系，但定义、语义对象和保存的性质不同，不能直接视为同一个概念。

---

**5. 这份 Tutorial 需要掌握的六个知识层次**

**Level 1 — Basic E-graph Mechanisms**
能够理解并手动构造 E-graph。
- E-node
- E-class
- Term Representation
- Congruence
- Congruence Closure
- Union-Find
- Hash-consing
- Rebuilding
- E-class Analysis
核心问题：
- 为什么一个 E-class 可以包含多个 E-nodes？
- 为什么 E-node 的 children 指向 E-classes？
- 为什么子类 merge 会引起父类 merge？
- 为什么 E-graph 可以出现 cycle？
- 为什么 Rebuilding 可以提高效率？

**Level 2 — E-matching and Database Queries**
理解 E-matching 如何转换为关系查询。
- Pattern Matching
- Relational E-Matching
- Conjunctive Query
- Relational Join
- Generic Join
- Trie Index
- Variable Projection
- Intersection
核心关系：
- $f(\alpha,g(\alpha))$
- $Q(root,\alpha)\leftarrow R_f(root,\alpha,x),R_g(x,\alpha)$
核心问题：
- 为什么传统 Backtracking 可能产生大量无效匹配？
- 为什么 Join 能减少不必要的候选组合？
- Trie 如何支持按变量顺序的高效查询？

**Level 3 — Extraction and Global Optimization**
理解不同 Cost Models 如何改变 Extraction 的计算复杂度。
- Tree Cost
- DAG Cost
- Common Subexpression Sharing
- Dynamic Programming
- NP-hardness
- Set Cover Reduction
- Integer Linear Programming
- Acyclicity Constraints
- Tree Decomposition
- Treewidth
- Differentiable Relaxation
- Heuristic Pruning
关键区别：
- Tree Cost：子树成本可以局部累加。
- DAG Cost：共享节点只计费一次，因此需要考虑全局依赖。
- Delay Cost：在适当的局部单调模型下，可以使用 Bottom-up DP。
- DAG Area Extraction：一般是 NP-hard 的全局优化问题。

**Level 4 — Richer Representations**
理解不同 E-graph 扩展处理什么问题。
- Slotted E-graphs：处理参数化结构共享、变量上下文和重命名。
- Colored E-graphs：在不同 Assumptions 下维护不同的 Equality Relations。
- Cyclic PEG：利用图结构表达程序循环和递归数据依赖。
需要区分：
- Structural Sharing $\neq$ Semantic Equality
- Conditional Equality $\neq$ Unconditional Equality
- Rewrite-induced Cycle $\neq$ Program Loop Cycle

**Level 5 — Proof and Verification**
理解等价关系如何转化为可验证的证明。
- Equality Reasoning
- Congruence Closure
- Explanation
- Proof Certificate
- Proof Checking
- Program Equivalence
- Relational Verification
- Program Alignment
核心关系：
- $a=b\Rightarrow f(a)=f(b)$
- $A=B\land B=C\Rightarrow A=C$
需要区分：
- E-graph 中已经合并的 E-classes。
- 能解释这些合并的 Proof。
- 能检查 Proof 的独立验证机制。
- Rewrite Axioms 本身是否对目标语义有效。

**Level 6 — Abstract Interpretation and Fixed Points**
理解 E-class Analysis 与 Lattice、LFP、GFP 的关系。
- Abstract Domain
- Partial Order
- Meet / Join
- Transfer Function
- Fixed Point
- Least Fixed Point (LFP)
- Greatest Fixed Point (GFP)
- Soundness
- Precision
核心问题：
- 为什么同一个 E-class 的多个等价表达式可以提高分析精度？
- 为什么分析结果可以通过 Meet 合并？
- 为什么 Rewrite-induced Cycle 和 Loop-induced Cycle 可能需要不同的 Fixed-point 处理？
- 为什么一个结果可能 Sound 但过于粗糙？
- 为什么不能不加区分地对所有递归分析统一使用 LFP 或 GFP？
需要理解：
- Soundness：分析不能遗漏真实可能的行为或值。
- Precision：在保持 Soundness 的前提下，尽量排除不可能的行为或值。
- LFP / GFP：根据所定义的算子、偏序和目标语义选择，并不是某一个永远更正确。

---

**6. 整份 Tutorial 的核心研究主线**

```tikz
\begin{document}
\begin{tikzpicture}[
    >=stealth,
    every node/.style={font=\small},
    concept/.style={
        draw,
        rounded corners,
        align=center,
        minimum width=8.4cm,
        minimum height=1cm
    }
]

\node[concept] (a) at (0,7.5)
    {Equational Reasoning\\Terms + Axioms + Congruence};

\node[concept] (b) at (0,5.9)
    {Compact Representation\\E-graphs + E-classes + Sharing};

\node[concept] (c) at (0,4.3)
    {Efficient Matching and Saturation\\E-matching + Rewriting + Rebuilding};

\node[concept] (d) at (0,2.7)
    {Global Optimization / Proof / Analysis\\Extraction + Certificates + Abstract Interpretation};

\node[concept] (e) at (0,1.1)
    {Program Optimization and Verification\\Compilers + Synthesis + Hardware + Formal Methods};

\draw[->,thick] (a) -- (b);
\draw[->,thick] (b) -- (c);
\draw[->,thick] (c) -- (d);
\draw[->,thick] (d) -- (e);

\end{tikzpicture}
\end{document}
```

这条主线可以概括为：
- **Equational Reasoning**：通过 Equational Theory 定义和推导表达式等价关系。
- **Compact Representation**：利用 E-graph 高效存储大量等价表达式。
- **Efficient Exploration**：使用 E-matching、Rewriting 和 Rebuilding 扩展等价关系。
- **Optimization / Proof / Analysis**：根据具体任务执行最优表达式提取、等式证明构造或静态分析。
- **Applications**：将这些方法用于程序优化、程序综合、程序验证和硬件设计。

因此，E-graph 不是仅仅属于某一个研究领域的工具，而是连接多个领域的一种通用 Equality Reasoning Infrastructure。

主要相关研究社区：
- Programming Languages (PL)
- Compilers and Program Optimization
- Automated Reasoning
- Formal Methods
- Program Verification
- Program Synthesis
- Abstract Interpretation
- Database Systems
- Hardware Optimization and Verification

**最终核心思想：**
E-graph 的关键价值是将：
- **Equality Discovery（发现等价关系）**
- **Equality Representation（紧凑表示等价关系）**
- **Optimization / Proof / Analysis（利用等价关系解决具体问题）**

在概念和算法上分离。

Equality Saturation 使系统能够保留不同的等价表示，而不必过早选定某条 Rewrite Path；Extraction、Proof Construction 和 E-class Analysis 则分别从优化、证明与分析的角度利用这个共同的等价表示空间。


### Application & Research Directions
> 🤖 GPT 6.0 Astra

| 领域                              | e-graph 在做什么                                      |
| ------------------------------- | ------------------------------------------------- |
| **Compiler optimization**       | 搜索等价程序，避免 pass-ordering 问题                        |
| **Tensor / ML compiler**        | 搜索 kernel fusion、tensor graph 等价变换                |
| **DSP / vectorization**         | 从 scalar computation 搜索 SIMD/vectorized 实现        |
| **Linear algebra optimization** | 矩阵代数重写、选择低成本表达式                                   |
| **Numerical computing**         | 搜索数值等价但 floating-point error 更小的公式                |
| **Hardware synthesis**          | 搜索等价 circuit / implementation，再按 latency/area 等抽取 |
| **Program synthesis**           | 用等价关系压缩 program search space                      |
| **CAD / program restructuring** | 从低层几何程序恢复更紧凑、可编辑结构                                |
| **Theorem proving / SMT**       | 维护 equality / congruence，这是 e-graph 的历史来源         |
| **Query optimization**          | 把等价 query/plan 放进共同搜索空间，再按成本选择                    |

Related papers:


---
> 🤖 GPT 6.1 Sol
> https://chatgpt.com/share/6ad4cba4-7738-83ec-9133-c0d8c4a560cd

**3. E-graph 的主要研究问题与代表性技术**

| 研究问题 | 相关技术 / 论文 | 核心思想 |
|---|---|---|
| 如何高效维护 E-graph？ | egg、Rebuilding | Union-Find、Hash-consing、Batch Merging、Congruence Repair |
| 如何快速发现 Rewrite Rule 的匹配？ | Relational E-Matching、Generic Join | 将 Pattern Matching 转换成 Conjunctive Query |
| 如何表达变量作用域和结构复用？ | Slotted E-Graphs | Slots、Renaming、Parameterized Structure Sharing |
| 如何维护条件等价？ | Colored E-Graphs | 将 Equality 与 Assumptions 关联 |
| 如何找到最优 Extraction？ | ILP、Sparse Extraction、SmoothE、e-boost | Integer Programming、Tree Decomposition、Continuous Relaxation、Heuristics |
| 如何生成可检查的等式证明？ | Small Proofs、ROVER | Proof Explanation、Proof Certificates、Equivalence Checking |
| 如何结合逻辑规则推理？ | egglog | Unify Datalog and Equality Saturation |
| 如何自动学习 Rewrite Rules？ | Ruler | Term Enumeration、Candidate Equalities、Validation |
| 如何学习可复用程序结构？ | babble | Anti-unification、Library Learning |
| 如何引导大规模搜索？ | Guided Equality Saturation | Intermediate Goals、Goal-directed Search |
| 如何处理循环与 Cyclic Programs？ | PEG、KestRel | Cyclic Representation、Program Alignment、Relational Verification |
| 如何得到更精确的静态分析结果？ | Abstract Interpretation、Optimism | E-class Analysis、Lattice、Fixpoint Reasoning |

这些研究可以进一步划分为几类。

**A. E-graph Infrastructure**
研究 E-graph 数据结构本身的效率与表达能力。
- E-node / E-class Representation
- Congruence Closure
- Rebuilding
- E-matching
- E-class Analysis
- Slotted E-graphs
- Colored E-graphs

**B. Search and Optimization**
研究如何高效探索并选择等价表达式。
- Equality Saturation
- Rewrite Scheduling
- Guided Equality Saturation
- E-graph Extraction
- DAG Cost Optimization
- ILP / SMT / Constraint Solving
- Dynamic Programming
- Tree Decomposition
- Heuristic Pruning
- Differentiable Extraction

**C. Equality Reasoning and Proof**
研究如何发现、维护与解释等价性。
- Equational Reasoning
- Congruence Closure
- Proof Construction
- Equality Certificates
- Proof Checking
- Conditional Equality
- Relational Verification

**D. Learning and Synthesis**
研究如何自动生成规则或抽象结构。
- Rewrite Rule Synthesis
- Equality Discovery
- Term Enumeration
- Anti-unification
- Library Learning
- Program Synthesis

**E. Program Analysis and Verification**
研究如何将 E-graph 用于程序语义分析与正确性验证。
- Abstract Interpretation
- Program Optimization
- Loop Optimization
- Program Equivalence
- Relational Verification
- Hardware Verification
- Fixpoint Analysis



## Ref
