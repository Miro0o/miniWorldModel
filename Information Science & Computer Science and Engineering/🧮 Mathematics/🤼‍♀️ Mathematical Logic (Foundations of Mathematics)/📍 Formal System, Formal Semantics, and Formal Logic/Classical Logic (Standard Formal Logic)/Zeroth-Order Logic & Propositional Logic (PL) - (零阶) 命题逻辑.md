# Zeroth-Order Logic & Propositional Logic (PL) - (零阶) 命题逻辑

[TOC]



## Res
### Related Topics
↗ [Lambda Calculus (λ-Calculus)](../🎩%20Higher-Order%20Languages%20&%20Logics%20(HOL)/Lambda%20Calculus%20(λ-Calculus)/Lambda%20Calculus%20(λ-Calculus).md)
↗ [Boolean Algebra](../../../🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Order%20Theory%20&%20Lattice-Like%20Algebraic%20Structure%20(格)/Boolean%20Algebra/Boolean%20Algebra.md)

↗ [Digital (Logic) Electronics Foundations](../../../../🔑%20CS%20Core/EE%20Related%20Theories%20&%20Hardware%20Implementation/⚡️%20Digital%20(Logic)%20Electronics%20Foundations/Digital%20(Logic)%20Electronics%20Foundations.md)
↗ [Sequential Logic Circuits (时序逻辑电路)](../../../../🔑%20CS%20Core/EE%20Related%20Theories%20&%20Hardware%20Implementation/⚡️%20Digital%20(Logic)%20Electronics%20Foundations/0x04%20Sequential%20Logic%20Circuits%20(时序逻辑电路)/Sequential%20Logic%20Circuits%20(时序逻辑电路).md)
↗ [Combinational Logic Circuits (组合逻辑电路)](../../../../🔑%20CS%20Core/EE%20Related%20Theories%20&%20Hardware%20Implementation/⚡️%20Digital%20(Logic)%20Electronics%20Foundations/0x02%20Combinational%20Logic%20Circuits%20(组合逻辑电路)/Combinational%20Logic%20Circuits%20(组合逻辑电路).md)

↗ [Game Theory & Multi-Agent Decision-Making](../../../🧑‍🦯‍➡️%20Operations%20Research%20(OR)%20&%20Optimization%20&%20Rational%20Decision-Making/👩🏻‍⚖️%20Rational%20Decision-Making%20Problems%20&%20Theory/Game%20Theory%20&%20Multi-Agent%20Decision-Making/Game%20Theory%20&%20Multi-Agent%20Decision-Making.md)

↗ [Propositional Logic Model Checking & Algorithms](../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🙇‍♂️%20Formal%20Verification%20(FV)%20&%20Reasoning%20Systems%20(Formal%20Methods)/🧳%20(Formal)%20Model%20Checking/MC%20Algorithms/Propositional%20Logic%20Model%20Checking%20&%20Algorithms.md)


### Other Resources
https://users.aalto.fi/~rintanj1/notes-logic.pdf
Logic and Applications, Jussi Rintanen
Department of Computer Science, Aalto University, Helsinki, Finland
March 29, 2025



## Intro
> 🔗 https://en.wikipedia.org/wiki/Propositional_logic

**Propositional logic** is a branch of logic. It is also called **statement logic**, **sentential calculus**, **propositional calculus**, **sentential logic**, or sometimes **zeroth-order logic**. Sometimes, it is called first-order propositional logic to contrast it with  [System F](https://en.wikipedia.org/wiki/System_F "System F"), but it should not be confused with first-order logic. It deals with propositions (which can be true or false) and relations between propositions, including the construction of arguments based on them. Compound propositions are formed by connecting propositions by  [logical connectives](https://en.wikipedia.org/wiki/Logical_connective "Logical connective") representing the [truth functions](https://en.wikipedia.org/wiki/Truth_function "Truth function") of [conjunction](https://en.wikipedia.org/wiki/Logical_conjunction "Logical conjunction"), [disjunction](https://en.wikipedia.org/wiki/Logical_disjunction "Logical disjunction"), [implication](https://en.wikipedia.org/wiki/Material_conditional "Material conditional"), [biconditional](https://en.wikipedia.org/wiki/Logical_biconditional "Logical biconditional"), and [negation](https://en.wikipedia.org/wiki/Negation "Negation"). Some sources include other connectives, as in the table below.

Unlike first-order logic, propositional logic does not deal with non-logical objects, predicates about them, or quantifiers. However, all the machinery of propositional logic is included in first-order logic and higher-order logics. ==In this sense, propositional logic is the foundation of first-order logic and higher-order logic.==

Propositional logic is typically studied with a formal language, in which propositions are represented by letters,  which are called _[propositional variables](https://en.wikipedia.org/wiki/Propositional_variable "Propositional variable")_. These are then used, together with symbols for connectives, to make _[propositional formula](https://en.wikipedia.org/wiki/Propositional_formula "Propositional formula")_. Because of this, the propositional variables are called _[atomic formulas](https://en.wikipedia.org/wiki/Atomic_formula "Atomic formula")_ of a formal propositional language. While the atomic propositions are typically represented by letters of the alphabet, there is a variety of notations to represent the logical connectives. The following table shows the main notational variants for each of the connectives in propositional logic.

![](../../../../../Assets/Pics/Screenshot%202025-08-04%20at%2000.38.30.png)
<small>《离散数学》四川大学计算机学院</small>


### Proposition & Boolean Algebra ⭐
↗ [Boolean Algebra](../../../🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Order%20Theory%20&%20Lattice-Like%20Algebraic%20Structure%20(格)/Boolean%20Algebra/Boolean%20Algebra.md)


### Classification of Proposition
> 🔗 https://baike.baidu.com/item/%E5%91%BD%E9%A1%8C/119969#4

命题分类
- 亚里士多德在《工具论》，特别是其中的《范畴篇》中，研究了命题的不同形式及其相互关系，根据形式的不同对命题的不同类型进行了分类。亚里士多德把命题首先分为简单的和复合的两类，但他对复合命题并没有深入探讨。他进而把简单命题按质分为肯定的和否定的，按量分为全称、特称和不定的命题。他还提到个体命题，这相当于后来所谓的以专名为主项、以普遍概念为谓项的单称命题。亚里士多德着重讨论了后人以A、E、I、O为代表的4种命题。关于模态命题，他讨论了必然、不可能、可能和偶然这 4个模态词。亚里士多德所说的模态，是指事件发生的必然性、可能性等。
	- 亚里士多德以后的逻辑学家，如泰奥弗拉斯多、麦加拉学派和斯多阿学派的逻辑学家，以及中世纪的逻辑学家等，又对包含有命题联结词"或者"、"并且"、"如果，则"等的复合命题进行了不断的探讨，从而丰富了逻辑学关于命题的学说。
- 康德分类康德根据他的范畴理论对判断作了分类，这个分类对后世的影响很大。康德对判断的分类主要有4个方面：
	- 量，包括全称、特称、单称三种判断；
	- 质，包括肯定、否定、无限（所有S是非P）这几种判断；
	- 关系，有直言（两概念间的关系）、假言（两判断间的关系）、选言（若干判断间的关系）判断；
	- [模态](https://baike.baidu.com/item/%E6%A8%A1%E6%80%81/0?fromModule=lemma_inlink)，有或（概）然、实然、确然几种判断。康德所谓的模态，是指认识的程度。他认为组成假言判断、选言判断的判断，都是或然的。
- 传统逻辑分类
	- 19世纪下半叶欧洲逻辑读本对命题的分类不尽一致。大体说来，按关系即按命题主[谓项](https://baike.baidu.com/item/%E8%B0%93%E9%A1%B9/0?fromModule=lemma_inlink)之间的关系分，有[直言命题](https://baike.baidu.com/item/%E7%9B%B4%E8%A8%80%E5%91%BD%E9%A2%98/0?fromModule=lemma_inlink)、[假言命题](https://baike.baidu.com/item/%E5%81%87%E8%A8%80%E5%91%BD%E9%A2%98/0?fromModule=lemma_inlink)（后件主谓项的联系以前件为条件）和[选言命题](https://baike.baidu.com/item/%E9%80%89%E8%A8%80%E5%91%BD%E9%A2%98/0?fromModule=lemma_inlink)（谓项之间对[主项](https://baike.baidu.com/item/%E4%B8%BB%E9%A1%B9/0?fromModule=lemma_inlink)有选择关系）。从质的角度分，有肯定命题和否定命题。从量的角度分，有全称命题，包括单称命题、普遍命题（凡S是P）和[特称命题](https://baike.baidu.com/item/%E7%89%B9%E7%A7%B0%E5%91%BD%E9%A2%98/0?fromModule=lemma_inlink)。这些传统逻辑读本在讨论选言命题时，也往往论及[联言命题](https://baike.baidu.com/item/%E8%81%94%E8%A8%80%E5%91%BD%E9%A2%98/0?fromModule=lemma_inlink)、分离命题（非A并且非B）等。另外，还有一类可解析命题也是常常提到的。在这类命题中，有一种叫区别命题，其形式为"只有S才是P"；还有一种叫除外命题，其形式为"除是M的S外每个S是P"。
- 形式分析
	- 现代逻辑对命题形式的分析，由于推理的有效性只与推理的前提和结论的形式有关，而与作为前提和结论的命题的具体内容无关。因此，在经典的二值逻辑里，命题可以只看成真（记为T）和假（记为F）两种，并统称为真值。
	- 对命题形式的进一步分析，要深入到最[简单](https://baike.baidu.com/item/%E7%AE%80%E5%8D%95/0?fromModule=lemma_inlink)命题内部的非命题成分。在现代逻辑中，类似"苏格拉底是人"这样的命题，被认为是最简单的命题。若以s代表"苏格拉底",以M代表"人",该类命题就可记为M(s),这表示某一个体s具有性质R。推广来说，最简单的命题的形式为F(x)，可读作[论域](https://baike.baidu.com/item/%E8%AE%BA%E5%9F%9F/0?fromModule=lemma_inlink)中的个体x具有性质F；较为复杂的形式可以有填G(x,y)),可读作论域中的个体x,y)之间具有关系G。在这里，x,y),...称为个体变项；F,G,...称为谓词变项，而F是一元的，G是二元的。一般全称命题的形式是风x(Fx→Gx)，而存在命题、即传统逻辑所谓的特称命题的形式是 ヨx(Fx∧Gx)。所有这些都是现代逻辑里的经典一阶谓词逻辑对命题形式所作的初步分析（见[谓词逻辑](https://baike.baidu.com/item/%E8%B0%93%E8%AF%8D%E9%80%BB%E8%BE%91/0?fromModule=lemma_inlink)）。此外，把量词加之于谓词变项，便形成了[高阶逻辑](https://baike.baidu.com/item/%E9%AB%98%E9%98%B6%E9%80%BB%E8%BE%91/0?fromModule=lemma_inlink)。也还可以引入模态词，或分析疑问句、命令句等等，从而建立有关的逻辑理论。



## Syntax: Formalization of Propositional Logic
Propositional logic is about Boolean functions, which are mappings from truth-values 0 and 1 (false and true) to truth-values. Arbitrary Boolean functions can be represented as **formulas** formed with **variables** ($p, q, r, p_1, p_2, ...$) and **connectives** ($\land, \lor, \neg, ...$), and it can be shown that any Boolean function can be represented by such a formula.

---
Syntax
- Specifies *structure* only
- Formula adheres to syntax $\Leftrightarrow$ Formula is *well-formed*

<u>Atom</u>
- <u>truth symbols</u> $\top$ (“true”) and $\bot$ (“false”)
- <u>propositional variables</u> $P, Q, R, \cdots$

<u>Literal</u>
- atom $\alpha$ or its negation $\neg \alpha$

<u>Formula</u>
- literal or application of a  
- <u>logical connective</u> to formulas $F, F_1, F_2$:
$$
\begin{array}{lll}
\neg F & \text{“not”} & \text{(negation)} \\
F_1 \land F_2 & \text{“and”} & \text{(conjunction)} \\
F_1 \lor F_2 & \text{“or”} & \text{(disjunction)} \\
F_1 \to F_2 & \text{“implies”} & \text{(implication)} \\
F_1 \leftrightarrow F_2 & \text{“if and only if”} & \text{(iff)}
\end{array}
$$

<u>Example:</u>
formula $F : (P \land Q) \to (\top \lor \neg Q)$
atoms: $P, Q, \top$
literal: $\neg Q$
subformulas: $P \land Q,\quad \top \lor \neg Q$
abbreviation $F : P \land Q \to \top \lor \neg Q$

### BNF Grammar
> [!links]
> ↗ [BNF (Backus–Naur Form)](../📌%20Formal%20Syntax%20&%20Metasyntax%20(and%20Metalanguage)/Formal%20Syntax%20Notations/BNF%20(Backus–Naur%20Form).md)

$$
\begin{aligned}
\langle formula \rangle ::= {}&
\langle atom \rangle
\mid \top
\mid \bot
\mid \neg \langle formula \rangle \\
&\mid (\langle formula \rangle \land \langle formula \rangle) \\
&\mid (\langle formula \rangle \lor \langle formula \rangle) \\
&\mid (\langle formula \rangle \to \langle formula \rangle) \\
&\mid (\langle formula \rangle \leftrightarrow \langle formula \rangle)
\end{aligned}
$$

or
$$
\phi ::= p
\mid \top
\mid \bot
\mid \neg \phi
\mid (\phi_1 \land \phi_2)
\mid (\phi_1 \lor \phi_2)
\mid (\phi_1 \to \phi_2)
\mid (\phi_1 \leftrightarrow \phi_2)
$$


### Adequate Set of Connectives
![Screenshot 2023-01-02 at 5.56.43 PM](../../../../../Assets/Pics/Screenshot%202023-01-02%20at%205.56.43%20PM.png)
<small>《离散数学》四川大学计算机学院</small>
![Screenshot 2023-01-02 at 5.57.08 PM](../../../../../Assets/Pics/Screenshot%202023-01-02%20at%205.57.08%20PM.png)
<small>《离散数学》四川大学计算机学院</small>
#### Minimalistic Grammar & Primitive Connectives

The minimalistic BNF grammar for propositional logic: $$\phi :: = true ∣ p ∣ \neg \phi ∣ \phi_1 ∨ \phi_2$$



## Semantics
### Interpretation & Valuation
![](../../../../../Assets/Pics/Screenshot%202025-09-23%20at%2013.24.09.png)


PL Semantics (meaning)
Formula $F$ + Interpretation $I$ = Truth value  
$\qquad\qquad\qquad\qquad\qquad\qquad$ (true, false)

Interpretation
- mapping of propositional variables to truth values
- notation:
$$
I : \{P \mapsto \mathrm{true},\ Q \mapsto \mathrm{false},\ \cdots\}
$$

Model
$$
\begin{aligned}
I &\models F
&& \text{if } F \text{ evaluates to true under } I \\
I &\not\models F
&& \text{if } F \text{ evaluates to false under } I
\end{aligned}
$$

The *turnstile* symbol $\models$ is called the “models” symbol.
- $I \models F$ indicates $I$ is a model of $F$
- $I \not\models F$ indicates $I$ is not a model of $F$


### From Implication to Entailment
> [!TIP]
> The notations here $\implies$, $\vdash$, $\models$ can be confusing! 
> We list the truth value of these logic connectives to make things clearer:
> 
> $A\to B$ : (implication)
> - if $A=1, B=0$ then $(A\to B=0)$, otherwise $(A\to B)$ is always 1.
>
> $A\implies B$ : (implies /entailment)
> - if $A\neq B$ then $(A\to B=0)$, otherwise $(A\to B)$ is always 1.
> - It is a logical consequence relationship between $A$ and $B$. 
> - Two kinds of logical consequence: syntactic consequence /entailment & semantic consequence /entailment
> 
> $A\vdash B$ (syntactic entailment)
> - It is about what we can proof, given a starting statement and inference rule.
> - `A ⊢ B` does **not** have a truth value.  The symbol `⊢` is **not** a connective inside the logic (like ∧, ∨, →). It is a **meta-logical** symbol meaning: “B is derivable from A in some proof system.”
> - This is a _relation between sentences and proofs_, not a proposition that can be true or false _inside_ the logic.
> - You _can_ say informally that `A ⊢ B` is _true_ if there exists a syntactic proof of B from A, and _false_ if not—but that is a statement **outside** the logic, in the meta-theory.
> 
> > Where "$\Gamma \vdash \Delta$" as a whole is a **sequent** as in **sequent calculus**.
> 
> $A\models B$ (semantic entailment)
> - It is about what we define as truth.
> - Same as `A ⊢ B`, it is **not a formula of the object language**.  It is a **meta-logical statement** about semantics, meaning "In every valuation (or model) where A is true, B is also true."
> - Can it be “true” or “false”? 
> 	- Yes—but only as a **meta-theoretical fact**, not as a truth value inside the logic.
> 	- `A ⊨ B` is _true_ (in the meta-theory) if every model that satisfies A also satisfies B.
> 	- It is _false_ if there exists at least one model where A is true and B is false.

![Screenshot 2023-01-02 at 5.59.42 PM](../../../../../Assets/Pics/Screenshot%202023-01-02%20at%205.59.42%20PM.png)
<small>《离散数学》四川大学计算机学院</small>
#### Equivalence and Semantic Consequence /Entailment (逻辑后承)
$F_1$ and $F_2$ are equivalent $(F_1 \equiv F_2)$
if and only if
$\{I \mid I \models F_1\} = \{I \mid I \models F_2\}$

$F_1$ entails $F_2$ $(F_1 \models F_2)$
if and only if
$\{I \mid I \models F_1\} \subseteq \{I \mid I \models F_2\}$
#### Laws of Operations & Propositional Equivalences
![Screenshot 2023-01-02 at 5.55.50 PM](../../../../../Assets/Pics/Screenshot%202023-01-02%20at%205.55.50%20PM.png)
<small>《离散数学》四川大学计算机学院</small>


### Presentation of PL's Semantics
There are multiple (less formal, more intuitive) ways to present the semantics.
#### Truth Table
All valuations relevant to a formula are often tabulated as truth-tables so that each row corresponds to a valuation. Truth-tables are used for analyzing the most basic properties of formulas.
#### Inductive Definition
$I \models F \quad \text{if } F \text{ evaluates to true under } I$
$I \not\models F \quad \text{if } F \text{ evaluates to false under } I$

$\underline{\text{Base Case:}}$
$I \models \top$
$I \not\models \bot$
$I \models P \quad \text{iff} \quad I[P] = \text{true}$
$I \not\models P \quad \text{iff} \quad I[P] = \text{false}$

$\underline{\text{Inductive Case:}}$
$I \models \neg F \quad \text{iff} \quad I \not\models F$
$I \models F_1 \land F_2 \quad \text{iff} \quad I \models F_1 \text{ and } I \models F_2$
$I \models F_1 \lor F_2 \quad \text{iff} \quad I \models F_1 \text{ or } I \models F_2$
$I \models F_1 \to F_2 \quad \text{iff, if } I \models F_1 \text{ then } I \models F_2$
$I \models F_1 \leftrightarrow F_2 \quad \text{iff} \quad I \models F_1 \text{ and } I \models F_2,\ \text{or } I \not\models F_1 \text{ and } I \not\models F_2$

$\underline{\text{Note:}}$
$I \not\models F_1 \to F_2 \quad \text{iff} \quad I \models F_1 \text{ and } I \not\models F_2$

> [!Example]
> $$
> \begin{aligned}
> F &: P \land Q \to P \lor \neg Q \\[4pt]
> I &: \{P \mapsto \mathrm{true},\ Q \mapsto \mathrm{false}\} \\[8pt]
> 1.\quad I &\models P
> && \text{since } I[P] = \mathrm{true} \\
> 2.\quad I &\not\models Q
> && \text{since } I[Q] = \mathrm{false} \\
> 3.\quad I &\models \neg Q
> && \text{by 2 and } \neg \\
> 4.\quad I &\not\models P \land Q
> && \text{by 2 and } \land \\
> 5.\quad I &\models P \lor \neg Q
> && \text{by 1 and } \lor \\
> 6.\quad I &\models F
> && \text{by 4 and } \to \qquad \text{Why?} \\[8pt]
> &\text{Thus, } F \text{ is true under } I.
> \end{aligned}
> $$


### Main Decision Problems in Propositional Logic
> 📖 Logic and Applications, Jussi Rintanen
> Department of Computer Science, Aalto University, Helsinki, Finland, March 29, 2025

Once we have represented some facts of whatever object or system we are analyzing as a formula, we are often interested in understanding its properties.

A formula is a _logical consequence_ of another formula, if it is necessarily true when the other formula is true. In English we would say that some statement follows from another statement. For example, from “It is Tuesday” it follows that “It is Monday or it is Tuesday”. If the first sentence is true, then necessarily also the second sentence is true. Note that there does not have to be any real connection between the two statements: “It is Monday or it is not Monday” is a logical consequence of any statement. We similarly defined logical consequence from a set of formulas, viewing the set as the conjunction of all the formulas in it.

A formula is _satisfiable_ if it is true under **some** valuation of its atomic propositions. For example, if our formula described the properties of some system or some scenario, the formula being satisfiable would mean that the scenario is possible.

A formula is _valid_ (a tautology) if it is true for **all** the valuation of the atomic propositions. This is similarly to basic mathematical equalities everybody is familiar with, such as $2x = x + x$ which holds no matter which values we choose for x.
#### Satisfiability & Validity
![](../../../../../Assets/Pics/Screenshot%202025-09-23%20at%2013.38.08.png)
##### SAT Problem! (And Model Checking) ⭐
> [!links]
> ↗ [(Formal) Model Checking](../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🙇‍♂️%20Formal%20Verification%20(FV)%20&%20Reasoning%20Systems%20(Formal%20Methods)/🧳%20(Formal)%20Model%20Checking/(Formal)%20Model%20Checking.md)
> ↗ [Symbolic Execution & Concolic Execution (SSE & DSE)](../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/🎡%20Symbolic%20Execution%20&%20Concolic%20Execution%20(SSE%20&%20DSE)/Symbolic%20Execution%20&%20Concolic%20Execution%20(SSE%20&%20DSE).md)
> - ↗ [SAT (Boolean Satisfiability Problem) Solvers](../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20(Proof%20Assistants)/SAT%20(Boolean%20Satisfiability%20Problem)%20Solvers/SAT%20(Boolean%20Satisfiability%20Problem)%20Solvers.md)

> [!TIP]
> ↗ [Complexity Theory & Computational Complexity](../../😶‍🌫️%20Theory%20of%20Computation/Complexity%20Theory%20&%20Computational%20Complexity/Complexity%20Theory%20&%20Computational%20Complexity.md)
> ![|400](../../../../../Assets/Pics/Pasted%20image%2020250801223400.png)
> ↗ [Computationally Hard Problems](../../😶‍🌫️%20Theory%20of%20Computation/Complexity%20Theory%20&%20Computational%20Complexity/Algorithm%20Complexity/Computationally%20Hard%20Problems.md)
> 

**The oldest NP-complete problem: SAT Problem**
> 📄 [Cook71] S. A. Cook. The complexity of theorem proving procedures. In Proceedings of the Third Annual ACM Symposium on the Theory of Computing, pages 151–158, 1971

The SAT problem: does there exist a model $M$ that satisfies $\Phi$? $$\exists M. M\models\Phi ?$$
The model checking problem:  given $M$ and $\Phi$ decide $$M\models\Phi ?$$
NP/NP-complete problems **can be solved by encoding** them **into SAT**!
- Building a “very fast” SAT solver could be used for solving lots of other not-so-easy problems!
- **In theory**: wishful thinking, NP-problems are known to take exponential time in the worst case.
- **In practice**: modern SAT solvers are very fast most of the time! (but still not enough for solving SAT problem!)
#### Equisatisfiability
Two formulas with different propositional identifiers
- have incomparable interpretations
- can therefore not be equivalent
However, they can be equisatisfiable.

$F_1$ and $F_2$ are equisatisfiable
if and only if
$F_1$ is satisfiable iff $F_2$ is satisfiable

Example: $P \land Q$ and $R \land (R \leftrightarrow (P \land Q))$

> *Extra variables useful in translating programs to formulas*



## Representing Propositional Logic
> 📖 https://users.aalto.fi/~rintanj1/notes-logic.pdf
> Logic and Applications Jussi Rintanen, Department of Computer Science, Aalto University

Arbitrary propositional formulas can be translated into syntactically restricted forms which are still capable of expressing all Boolean functions. Use of such normal forms can serve two main purposes. First, it may be more straightforward to define algorithms and inference methods for formulas of a simple form. The **resolution rule** is an example of this. Second, the process of translating a formula into certain normal form does much of the work in solving important computational problems related to propositional formulas. For example, an answer to the question of whether a formula is valid is obtained as a by-product of translating the formula normal forms such as DNF or OBDD. A number of other operations on propositional formulas are in practice much more efficient when the formulas are in certain normal forms rather than unrestricted propositional formulas.

![|600](../../../../../Assets/Pics/Screenshot%202025-09-26%20at%2016.15.45.png)
<small>Logic and Applications Jussi Rintanen, Department of Computer Science, Aalto University <br> <a> https://users.aalto.fi/~rintanj1/notes-logic.pdf </a></small>


### 📌 Sets (and Relations) in the Propositional Logic
> [!links]
> ↗ [Set Theory & Axiomatic Set Theory](../../🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/Set%20Theory%20&%20Axiomatic%20Set%20Theory.md)
> ↗ [Relation & Relation Theory](../../🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Relation%20Theory/Relation%20&%20Relation%20Theory.md)
#### Logic Representation of Sets (and Relations)
> 📖 https://users.aalto.fi/~rintanj1/notes-logic.pdf
> Logic and Applications Jussi Rintanen, Department of Computer Science, Aalto University

==Formulas can be considered as a representation of those sets of valuations that make the formula true.== We can identify a valuation $v : X \to \{0, 1\}$ with a vector of length $|X|$, with each element of the vector corresponding to one of the atomic propositions in $X$.

> [!quote]
> Example5.1
> Let $X = \{A, B, C, D\}$. Now a valuation that assigns 1 to $A$ and $C$ and 0 to $B$ and $D$ corresponds to the bit-vector $\overset{ABCD}{1010}$, and the valuation assigning 1 only to $B$ corresponds to the bit-vector $\overset{ABCD}{0100}$. 

Any propositional formula $\phi$ can be understood as a representation of those valuations $v$ such that $v(\phi) = 1$. Since we have identified valuations and bit-vectors, a formula naturally represents a set of bit-vectors.

> [!quote]
> Example 5.2 
> Formula $B$ represents all bit-vectors of the form $?1??$, and the formula $A$ represents all bit-vectors $1???$. Formula $B$ therefore represents the set $\{0100, 0101, 0110, 0111, 1100, 1101, 1110, 1111\}$ and formula $A$ represents the set $\{1000, 1001, 1010, 1011, 1100, 1101, 1110, 1111\}$.
> 
> Similarly, $\neg B$ represents all bit-vectors of the form $?0??$, which is the set $\{0000, 0001, 0010, 0011, 1000, 1001, 1010, 1011\}$.
> This is the complement of the set represented by $B$.
#### Logic Representation of Set's (and Relation's) Operations
![|600](../../../../../Assets/Pics/Screenshot%202025-09-26%20at%2016.24.47.png)
<small>Logic and Applications Jussi Rintanen, Department of Computer Science, Aalto University <br> <a> https://users.aalto.fi/~rintanj1/notes-logic.pdf </a></small>


### Normal Forms (NF) of Propositional Logic
> [!links]
> ↗ [Formal Syntax & Metasyntax (and Metalanguage)](../📌%20Formal%20Syntax%20&%20Metasyntax%20(and%20Metalanguage)/Formal%20Syntax%20&%20Metasyntax%20(and%20Metalanguage).md)
#### NNF (Negation Normal Form)
> 🔗 https://en.wikipedia.org/wiki/Negation_normal_form

In [mathematical logic](https://en.wikipedia.org/wiki/Mathematical_logic "Mathematical logic"), a formula is in **negation normal form** (**NNF**) if the [negation](https://en.wikipedia.org/wiki/Negation "Negation") operator ($\neg$, $NOT$) is only applied to variables and the only other allowed [Boolean operators](https://en.wikipedia.org/wiki/Boolean_algebra "Boolean algebra") are [conjunction](https://en.wikipedia.org/wiki/Logical_conjunction "Logical conjunction") ($\land$, $AND$) and [disjunction](https://en.wikipedia.org/wiki/Logical_disjunction "Logical disjunction") ($\lor$, $OR$).

==Negation normal form is not a [canonical form](https://en.wikipedia.org/wiki/Canonical_form "Canonical form")==: for example, $a \land (b \lor \neg c)$ and $(a\land b)\lor(a \land \neg c)$ are equivalent, and are both in negation normal form.


---
Negations appear in *literals* only:
$$
\begin{aligned}
formula &::= formula \land formula \mid formula \lor formula \mid literal \\
literal &::= atom \mid \neg atom
\end{aligned}
$$

Transformation into NNF:
- Eliminate implication and bi-implication
$$
\begin{aligned}
F_1 \to F_2 &\equiv \neg F_1 \lor F_2 \\
F_1 \leftrightarrow F_2 &\equiv (F_1 \to F_2) \land (F_2 \to F_1)
\end{aligned}
$$

- Eliminate (double) negation:
$$
\neg\neg F \equiv F
\qquad
\neg \mathrm{true} \equiv \mathrm{false}
\qquad
\neg \mathrm{false} \equiv \mathrm{true}
$$

- “Push” negation inwards:
$$
\begin{aligned}
\neg(F_1 \land F_2) &\equiv \neg F_1 \lor \neg F_2 \\
\neg(F_1 \lor F_2) &\equiv \neg F_1 \land \neg F_2
\end{aligned}
\qquad
\text{De Morgan's Law}
$$
#### CNF (Conjunctive NF) and DNF (Disjunctive NF)
![Screenshot 2023-01-02 at 5.57.28 PM](../../../../../Assets/Pics/Screenshot%202023-01-02%20at%205.57.28%20PM.png)
<small>《离散数学》四川大学计算机学院</small>

---
> 🔗 https://en.wikipedia.org/wiki/Conjunctive_normal_form

<u>Conjunctive Normal Form (CNF)</u>

Conjunction of disjunctions of literals
$$
\bigwedge_i \bigvee_j \ell_{i,j}
\qquad
\text{for literals } \ell_{i,j}
$$

To convert $F$ into equivalent $F'$ in CNF,  
transform $F$ into NNF and then  
use the following template equivalences (left-to-right):
$$
\begin{aligned}
(F_1 \land F_2) \lor F_3
&\equiv
(F_1 \lor F_3) \land (F_2 \lor F_3)
\\
F_1 \lor (F_2 \land F_3)
&\equiv
(F_1 \lor F_2) \land (F_1 \lor F_3)
\end{aligned}
\qquad
\text{dist}
$$

---
<u>Disjunctive Normal Form (DNF)</u>

Disjunction of conjunctions of literals
$$
\bigvee_i \bigwedge_j \ell_{i,j}
\qquad
\text{for literals } \ell_{i,j}
$$
To convert $F$ into equivalent $F'$ in DNF,  
transform $F$ into NNF and then  
use the following template equivalences (left-to-right):

$$
\begin{aligned}
(F_1 \lor F_2) \land F_3
&\equiv
(F_1 \land F_3) \lor (F_2 \land F_3)
\\
F_1 \land (F_2 \lor F_3)
&\equiv
(F_1 \land F_2) \lor (F_1 \land F_3)
\end{aligned}
\qquad
\text{dist}
$$
##### Tseytin Transformation /Encoding
> 🔗 https://en.wikipedia.org/wiki/Tseytin_transformation

The **Tseytin transformation**, alternatively written **Tseitin transformation**, takes as input an arbitrary [combinatorial logic](https://en.wikipedia.org/wiki/Combinational_logic "Combinational logic") circuit and produces an [equisatisfiable](https://en.wikipedia.org/wiki/Equisatisfiable "Equisatisfiable") boolean formula in [conjunctive normal form](https://en.wikipedia.org/wiki/Conjunctive_normal_form "Conjunctive normal form") (CNF). The length of the formula is linear in the size of the circuit. Input vectors that make the circuit output "true" are in [1-to-1 correspondence](https://en.wikipedia.org/wiki/Bijection "Bijection") with assignments that satisfy the formula. This reduces the problem of [circuit satisfiability](https://en.wikipedia.org/wiki/Circuit_satisfiability "Circuit satisfiability") on any circuit (including any formula) to the [satisfiability problem](https://en.wikipedia.org/wiki/Boolean_satisfiability_problem "Boolean satisfiability problem") on 3-CNF formulas. It was discovered by the Russian scientist [Grigori Tseitin](https://en.wikipedia.org/wiki/Grigori_Tseitin "Grigori Tseitin").

Motivation
The naive approach is to write the circuit as a [Boolean expression](https://en.wikipedia.org/wiki/Boolean_expression "Boolean expression"), and use [De Morgan's law](https://en.wikipedia.org/wiki/De_Morgan's_laws "De Morgan's laws") and the [distributive property](https://en.wikipedia.org/wiki/Distributive_property "Distributive property") to convert it to CNF. However, this can result in an exponential increase in equation size. The Tseytin transformation outputs a formula whose size grows linearly relative to the input circuit's. The original application involved making 'statistical riders' for a Nordic transportation company from a day's single-trip tickets, effectively joining unlabeled trips that could be a single person.
#### DNNF (Decomposable NNF) and d-DNNF (Deterministic DNNF)
> 📖 https://users.aalto.fi/~rintanj1/notes-logic.pdf
> Logic and Applications Jussi Rintanen, Department of Computer Science, Aalto University

Darwiche et al. [Dar01, DM02] have carried out a thorough study on features of propositional formulas, to identify normal forms of practical importance.
The first new normal form identified by Darwiche was **Decomposable NNF** [Dar01]. This is NNF with the additional property of decomposability.
#### ANF (Algebraic Normal Form, Zhegalkin Polynomials)
> 🔗 https://en.wikipedia.org/wiki/Zhegalkin_polynomial


### Formulas as a Data Structure
> [!links]
> ↗ [Data Structures](../../../../🔑%20CS%20Core/🧙‍♂️%20Algorithm%20&%20Data%20Structure/📌%20Algorithms%20Basics%20&%20Data%20Structure/Data%20Structures/Data%20Structures.md)
> ↗ [Data Structure in Logic Formulas](../🧶%20Data%20Structure%20in%20Logic%20Formulas/Data%20Structure%20in%20Logic%20Formulas.md)

> 📖 https://users.aalto.fi/~rintanj1/notes-logic.pdf
> Logic and Applications Jussi Rintanen, Department of Computer Science, Aalto University

Traditional application of logic is as a language of representing data and knowledge and for deductively making inferences from it.

A different use of logic emerged in the 1980s [Bry86, CBM90, Bry92], when logical formulas were used as a data structure for representing sets (of valuations) and relations (on valuations). Many logical operations have set-theoretic counterparts, for example union can be identified with disjunction. **It turned out that logic-based data structures could scale up to much bigger sets and relations than conventional (enumerative) data structures (trees, lists, arrays, and so on.)**

Formulas can be viewed as a data structure for representing sets and relations. The advantage of logic in this application is succinctness: a formula can represent a set that has a size that is exponential in the size of the formula. Logic representation is therefore succinct. This is in strong contrast to conventional data structures which would explicitly enumerate all elements of a set, and therefore have a size that is linear in the size of the set.
#### BDDs (Binary Decision Diagrams) & ROBDD
↗ [BDDs (Binary Decision Diagrams) & ROBDD](../🧶%20Data%20Structure%20in%20Logic%20Formulas/BDDs%20(Binary%20Decision%20Diagrams)%20&%20ROBDD.md)
#### PDAG (Propositional Directed Acyclic Graph)
↗ [PDAG (Propositional Directed Acyclic Graph)](../🧶%20Data%20Structure%20in%20Logic%20Formulas/PDAG%20(Propositional%20Directed%20Acyclic%20Graph).md)



## Reasoning in Propositional Logic
> [!links]
> ↗ [Mechanized (Formal) Reasoning & Automated Reasoning (Inference)](../../Mechanized%20(Formal)%20Reasoning%20&%20Automated%20Reasoning%20(Inference)/Mechanized%20(Formal)%20Reasoning%20&%20Automated%20Reasoning%20(Inference).md)
> ↗ [Mathematics /Types of Proofs](../../../Mathematics.md#Types%20of%20Proofs)

> 🤖 GPT 6.0

Reasoning in propositional logic concerns several related questions: whether a formula can be true, whether it must be true, whether a conclusion follows from given premises, and whether two formulas always have the same truth value. These questions can all be answered using satisfiability checking, although the formula being checked—and the interpretation of the answer—depends on the task.

| Task | Question | Satisfiability-based test |
|---|---|---|
| Satisfiability | Is $F$ true under at least one valuation? | Is $F$ satisfiable? |
| Validity | Is $F$ true under every valuation? | Is $\neg F$ unsatisfiable? |
| Logical consequence | Is $F$ true whenever all premises in $\Gamma$ are true? | Is $\bigwedge\Gamma \land \neg F$ unsatisfiable? |
| Logical equivalence | Do $F$ and $G$ have the same truth value under every valuation? | Is $\neg(F \leftrightarrow G)$ unsatisfiable? |

Here, $\Gamma$ is a finite set of premises, and $\bigwedge\Gamma$ denotes their conjunction.

The key idea is **searching for a witness or a counterexample**. To establish satisfiability, we need a valuation that makes the formula true. To establish validity, consequence, or equivalence, we can instead ask whether a counterexample exists. A satisfying valuation of the formula in the last column supplies that counterexample; unsatisfiability establishes that none exists.

For example, consider whether $q$ follows from $p \to q$ and $p$. A counterexample would make both premises true while making the conclusion false, so we check:
$$
H = (p \to q) \land p \land \neg q.
$$

The conjunct $p$ requires $p$ to be true, and $\neg q$ requires $q$ to be false. But these assignments make $p \to q$ false, contradicting the remaining requirement. Thus, $H$ is unsatisfiable: no valuation makes the premises true and the conclusion false. Therefore, $\{p \to q, p\} \models q$.

Different methods approach these tasks in different ways:

| Method | How it proceeds |
|---|---|
| Truth-table enumeration | Evaluates the relevant formulas under every valuation. |
| Semantic decomposition | Breaks truth and falsity requirements into simpler conditions, exploring alternatives and identifying contradictions. |
| Deductive proof | Applies inference rules to derive a conclusion from premises; in the example above, modus ponens directly yields $q$. |
| Resolution refutation | Works with clauses and applies resolution to derive the empty clause, demonstrating unsatisfiability. |
| Automated decision procedures | Specify how operations such as simplification, propagation, and search are coordinated to obtain an answer. |

These descriptions are not mutually exclusive categories. Semantic decomposition can be formalized as a proof system, and inference rules can be incorporated into algorithms. Satisfiability provides a common computational basis for the tasks above, but a particular method may prove a conclusion directly without explicitly converting the problem into SAT.


### Truth-Table Checking
$$
\begin{array}{l}
\underline{\text{Example 1}}
\qquad
F1 : P \land Q \to P \lor \neg Q
\\[6pt]

\begin{array}{ccccc}
P\;Q & P\land Q & \neg Q & P\lor\neg Q & F1\\
\hline
0\;0 & 0 & 1 & 1 & 1\\
0\;1 & 0 & 0 & 0 & 1\\
1\;0 & 0 & 1 & 1 & 1\\
1\;1 & 1 & 0 & 1 & 1
\end{array}
\\[8pt]

\text{Thus } F1 \text{ is valid.}
\qquad
\text{(What does each row represent?)}
\\[14pt]

\underline{\text{Example 2}}
\qquad
F2 : P \lor Q \to P \land Q
\\[6pt]

\begin{array}{cccc}
P\;Q & P\lor Q & P\land Q & F2\\
\hline
0\;0 & 0 & 0 & 1\\
0\;1 & 1 & 0 & 0\\
1\;0 & 1 & 0 & 0\\
1\;1 & 1 & 1 & 1
\end{array}
\qquad
\begin{array}{l}
\leftarrow\ \text{satisfying } I\\[12pt]
\leftarrow\ \text{falsifying } I
\end{array}
\end{array}
$$


### Semantic Arguments & Semantic Tableaux
$$
\begin{array}{l}
\text{Proof rules} \\[10pt]

\begin{array}{cc}
\dfrac{I \models \neg F}{I \not\models F}
&
\dfrac{I \not\models \neg F}{I \models F}
\\[18pt]

\dfrac{I \models F \land G}
{
\begin{array}{c}
I \models F\\
I \models G
\end{array}
}
&
\dfrac{I \not\models F \land G}
{I \not\models F \;\mid\; I \not\models G}
\\[-2pt]
& \hspace{25pt}\text{or}
\\[18pt]

\dfrac{I \models F \lor G}
{I \models F \;\mid\; I \models G}
&
\dfrac{I \not\models F \lor G}
{
\begin{array}{c}
I \not\models F\\
I \not\models G
\end{array}
}
\\[18pt]

\dfrac{I \models F \to G}
{I \not\models F \;\mid\; I \models G}
&
\dfrac{I \not\models F \to G}
{
\begin{array}{c}
I \models F\\
I \not\models G
\end{array}
}
\\[18pt]

\dfrac{I \models F \leftrightarrow G}
{I \models F \land G \;\mid\; I \not\models F \lor G}
&
\dfrac{I \not\models F \leftrightarrow G}
{I \models F \land \neg G \;\mid\; I \models \neg F \land G}
\end{array}
\\[18pt]

\begin{array}{c}
I \models F\\
I \not\models F\\
\hline
I \models \bot
\end{array}
\end{array}
$$


### Direct Proof, Conditional Proof & Contradiction Proof
> [!links]
> ↗ [Logic (and Critical Thinking) / Logical Reasoning](../../../../../Other%20Networks%20of%20Knowledge/♂%20Philosophy%20&%20Its%20History/Classical%20Philosophy/Western%20Philosophy%20&%20Its%20History/🎼%20Logic%20(and%20Critical%20Thinking)/Logic%20(and%20Critical%20Thinking).md#Logical%20Reasoning)
> ↗ [Gentzen-Style Proofs (Natural Deduction)](../../Proof%20Theory/Proof%20Calculus/Gentzen-Style%20Proofs%20(Natural%20Deduction).md)

![](../../../../../Assets/Pics/Screenshot%202025-09-23%20at%2017.02.37.png)
<small>《离散数学》四川大学计算机学院</small>

![](../../../../../Assets/Pics/Screenshot%202025-09-23%20at%2017.02.57.png)
<small>《离散数学》四川大学计算机学院</small>


### Resolution Refutation
#### Resolution Rules
![Screenshot 2023-01-02 at 6.02.32 PM](../../../../../Assets/Pics/Screenshot%202023-01-02%20at%206.02.32%20PM.png)
<small>《离散数学》四川大学计算机学院</small>


消解规则：  $$(A∨B)∧(¬A∨C)⇒(B∨C)$$
这里注意是蕴含不是等价，也就是说左式成立时右式一定成立，而左式不成立时右式不一定不成立，也不一定成立。

证明的思想很简单：$A$ 和 $\neg A$ 一定同时成立一个；如果要求左式成立，$B$ 和 $C$也得至少成立一个。
#### Unit Resolution
> 📖 https://users.aalto.fi/~rintanj1/notes-logic.pdf
> Logic and ApplicationsJussi Rintanen, Department of Computer Science, Aalto University


### Automated Reasoning Algorithms

#### Subsumption

#### Unit Propagation

#### The Davis-Putnam Procedure


### Symbolic Reachability Testing



## Ref
[In what sense is propositional logic "zeroth-order logic?" | Mathematics]: https://math.stackexchange.com/a/2472352/1230830
So to tie it all together:
- Propositions are syntactically boolean variables and semantically represent specific true or false statements about our semantic domain
- First-order predicates are syntactically functions of unspecified domain and a boolean codomain (that is, they _produce_ rather than consume booleans), and semantically they are statements with "a bit missing," specifically some bound variable which may be filled in from our domain.
- Second-order predicates are syntactically higher-order functions of unspecified domain with a "first-order predicates" codomain, and semantically they are statements with "a whole formula missing," which may again be filled in from our domain.
- This process may be carried on for as many layers as you like. Each layer allows for quantifying over the previous layer, which is syntactically like a function that produces the previous layer's predicates, and semantically like introducing another layer of indirection.

[你好，类型（四）：Propositional logic]: https://thzt.github.io/2017/09/10/type-4/