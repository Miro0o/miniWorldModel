# Models of Computation & UTM (universal Turing Machine)

[TOC]



## Res
### Related Topics
↗ [Model Theory (模型论)](../../Model%20Theory%20(模型论)/Model%20Theory%20(模型论).md)

↗ [Mathematical Logic Basics (Formal Logic & Its Semantics)](../../📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Mathematical%20Logic%20Basics%20(Formal%20Logic%20&%20Its%20Semantics).md)
- ↗ [Classical Logic (Standard Logic)](../../📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Classical%20Logic%20(Standard%20Logic)/Classical%20Logic%20(Standard%20Logic).md)
- ↗ [Lambda Calculus (λ-Calculus)](../../📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Higher-Order%20Logic%20(HOL)/Lambda%20Calculus%20(λ-Calculus)/Lambda%20Calculus%20(λ-Calculus).md)

↗ [Logic Programming Languages](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20for%20Specific%20Areas/Logic%20Programming%20Languages/Logic%20Programming%20Languages.md)

↗ [(Formal) Model Checking](../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Analysis%20&%20Binary%20Engineering/📌%20Software%20(Program)%20Analysis%20Basics/🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/(Formal)%20Model%20Checking/(Formal)%20Model%20Checking.md)
↗ [Probabilistic Models & Stochastic Process](../../../🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probabilities%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20&%20Stochastic%20Process/Probabilistic%20Models%20&%20Stochastic%20Process.md)


### Other Resources



## Intro
> ↗ [Mathematical Modeling & Real World Problem Solving](../../../Mathematical%20Modeling%20&%20Real%20World%20Problem%20Solving.md)
> ↗ [(Formal) Model Checking /1️⃣ System Modeling](../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Analysis%20&%20Binary%20Engineering/📌%20Software%20(Program)%20Analysis%20Basics/🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/(Formal)%20Model%20Checking/(Formal)%20Model%20Checking.md#1️⃣%20System%20Modeling)
> ↗ [The Essence of Computing - Programs & The Semantics of Programs](../../../../🗺%20CS%20Overview/The%20Essence%20of%20Computing%20-%20Programs%20&%20The%20Semantics%20of%20Programs.md)
> ↗ [Formal Semantics and Programming Language](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Formal%20Semantics%20and%20Programming%20Language/Formal%20Semantics%20and%20Programming%20Language.md)
> 
> ↗ [Proof Theory](../../Proof%20Theory/Proof%20Theory.md)
> - ↗ [Curry–Howard(–Lambek) Correspondence](../../Proof%20Theory/Curry–Howard(–Lambek)%20Correspondence.md)
> ↗ [Model Theory (模型论)](../../Model%20Theory%20(模型论)/Model%20Theory%20(模型论).md)

![Drawing 2025-09-09 22.37.45.excalidraw | 800](../../../../../Assets/Illustrations/Computer%20Language/Language_and_Programming_Language_Processing.md)
<small>The process of compilation</small>

> 🔗 https://en.wikipedia.org/wiki/Model_of_computation

In computer science, and more specifically in computability theory and computational complexity theory, a model of computation is a model which describes how an output of a mathematical function is computed given an input. A model describes how units of computations, memories, and communications are organized. The computational complexity of an algorithm can be measured given a model of computation. Using a model allows studying the performance of algorithms independently of the variations that are specific to particular implementations and specific technology.


### Sequential Models
Sequential models include:
- [Finite-state machines](https://en.wikipedia.org/wiki/Finite-state_machine "Finite-state machine")
- Post machines ([Post–Turing machines](https://en.wikipedia.org/wiki/Post%E2%80%93Turing_machine "Post–Turing machine") and [tag machines](https://en.wikipedia.org/wiki/Tag_system "Tag system")).
- [Pushdown automata](https://en.wikipedia.org/wiki/Pushdown_automata "Pushdown automata")
- [Register machines](https://en.wikipedia.org/wiki/Register_machine "Register machine")
    - [Random-access machines](https://en.wikipedia.org/wiki/Random-access_machine "Random-access machine")
- [Turing machines](https://en.wikipedia.org/wiki/Turing_machine "Turing machine")
- [Decision tree model](https://en.wikipedia.org/wiki/Decision_tree_model "Decision tree model")
- [External memory model](https://en.wikipedia.org/wiki/External_memory_model "External memory model")


### Functional Models
Functional models include:
- [Abstract rewriting systems](https://en.wikipedia.org/wiki/Abstract_rewriting_system "Abstract rewriting system")
- [Combinatory logic](https://en.wikipedia.org/wiki/Combinatory_logic "Combinatory logic")
- [General recursive functions](https://en.wikipedia.org/wiki/General_recursive_function "General recursive function")
- [Lambda calculus](https://en.wikipedia.org/wiki/Lambda_calculus "Lambda calculus")


### Concurrent Models
Concurrent models include:
- [Actor model](https://en.wikipedia.org/wiki/Actor_model "Actor model")
- [Cellular automaton](https://en.wikipedia.org/wiki/Cellular_automaton "Cellular automaton")
- [Interaction nets](https://en.wikipedia.org/wiki/Interaction_nets "Interaction nets")
- [Kahn process networks](https://en.wikipedia.org/wiki/Kahn_process_networks "Kahn process networks")
- [Logic gates](https://en.wikipedia.org/wiki/Logic_gate "Logic gate") and [digital circuits](https://en.wikipedia.org/wiki/Circuit_\(computer_science\) "Circuit (computer science)")
- [Petri nets](https://en.wikipedia.org/wiki/Petri_nets "Petri nets")
- [Process calculus](https://en.wikipedia.org/wiki/Process_calculus "Process calculus")
- [Synchronous Data Flow](https://en.wikipedia.org/wiki/Synchronous_Data_Flow "Synchronous Data Flow")

Some of these models have both [deterministic](https://en.wikipedia.org/wiki/Deterministic_model#In_computer_science "Deterministic model") and [nondeterministic](https://en.wikipedia.org/wiki/Nondeterministic_model_of_computation "Nondeterministic model of computation") variants. Nondeterministic models correspond to limits of certain sequences of finite computers, but do not correspond to any subset of finite computers;[_[citation needed](https://en.wikipedia.org/wiki/Wikipedia:Citation_needed "Wikipedia:Citation needed")_] they are used in the study of [computational complexity](https://en.wikipedia.org/wiki/Computational_complexity "Computational complexity") of algorithms.

Models differ in their expressive power; for example, each function that can be computed by a _finite-state machine_ can also be computed by a _Turing machine_, but not vice versa.



## (Symbolic) Transition System ⭐
> ↗ [The Essence of Computing - Programs & The Semantics of Programs](../../../../🗺%20CS%20Overview/The%20Essence%20of%20Computing%20-%20Programs%20&%20The%20Semantics%20of%20Programs.md)
> - programs are transition systems
> - hardware circuits are transition systems
> - communication processes are transition systems
> - etc.

> 🔗 https://en.wikipedia.org/wiki/Transition_system

In [theoretical computer science](https://en.wikipedia.org/wiki/Theoretical_computer_science "Theoretical computer science"), a **transition system** is a concept used in the study of [computation](https://en.wikipedia.org/wiki/Computation "Computation"). It is used to describe the potential behavior of [discrete systems](https://en.wikipedia.org/wiki/Discrete_system "Discrete system"). It consists of [states](https://en.wikipedia.org/wiki/State_\(computer_science\) "State (computer science)") and transitions between states, which may be labeled with labels chosen from a set; the same label may appear on more than one transition. If the label set is a [singleton](https://en.wikipedia.org/wiki/Singleton_\(mathematics\) "Singleton (mathematics)"), the system is essentially unlabeled, and a simpler definition that omits the labels is possible.

Transition systems coincide mathematically with [abstract rewriting systems](https://en.wikipedia.org/wiki/Abstract_rewriting_system "Abstract rewriting system") (as explained further in this article) and [directed graphs](https://en.wikipedia.org/wiki/Directed_graph "Directed graph"). They differ from [finite-state automata](https://en.wikipedia.org/wiki/Finite-state_automata "Finite-state automata") in several ways:
- The set of states is not necessarily finite, or even countable.
- The set of transitions is not necessarily finite, or even countable.
- No "start" state or "final" states are given.

Transition systems can be represented as **directed graphs**.

---
**Formal Definition of Transition System**

Formally, a **transition system** is a pair $(S,T)$ where $S$ is a set of states and $T$, the _transition relation_, is a subset of $S\times S$. We say that there is a transition from state $p$ to state $q$ if $(p,q)\in T$, and denote it $p\to q$.

A **labelled transition system** is a tuple $(S,\Lambda,T)$ where $S$ is a set of states, $\Lambda$ is a set of labels, and $T$, the _labelled transition relation_, is a subset of $S\times\Lambda\times S$. We say that there is a transition from state $p$ to state $q$ with label $\alpha \iff (p,\alpha ,q)\in T$ and denote it $p\xrightarrow {\alpha } q$.

Labels can represent different things depending on the language of interest. Typical uses of labels include representing input expected, conditions that must be true to trigger the transition, or actions performed during the transition. Labelled transitions systems were originally introduced as _named_ transition systems.


**Special cases**
- If, for any given $p$ and $\alpha$, there exists only a single tuple $(p,α,q)$ in $T$, then one says that $α$ is ==deterministic (for $p$)==.
- If, for any given $p$ and $\alpha$, there exists at least one tuple $(p,\alpha,q)$ in $T$, then one says that $\alpha$ is ==executable (for $p$)==.


**Coalgebra Formulation**
The formal definition can be rephrased as follows. Labelled state transition systems on $S$ with labels from $\Lambda$ correspond [one-to-one](https://en.wikipedia.org/wiki/Bijection "Bijection") with functions $S\to P(\Lambda\times S)$, where $P$ is the (covariant) [powerset functor](https://en.wikipedia.org/wiki/Power_set "Power set"). Under this bijection $(S,\Lambda,T)$ is sent to $\xi _{T}:S\to {\mathcal {P}}(\Lambda \times S)$, defined by $$p\mapsto \{\,(\alpha ,q)\in \Lambda \times S\mid p\xrightarrow {\alpha } q\,\}$$
In other words, a labelled state transition system is a [coalgebra](https://en.wikipedia.org/wiki/F-coalgebra "F-coalgebra") for the functor $P(\Lambda \times {-})$

In [model checking](https://en.wikipedia.org/wiki/Model_checking "Model checking"), a transition system is sometimes defined to include an additional labeling function for the states as well, resulting in a notion that encompasses that of [Kripke structure](https://en.wikipedia.org/wiki/Kripke_structure "Kripke structure").


**Forward and backwards reachability**
We sometimes need to talk about how states can reach each other.
The set of direct successors of a state s is defined as
𝑃𝑜𝑠𝑡(𝑠) = {𝑠 ∣ ∃𝛼. 𝑠 𝛼→𝑠′}
Similarly, we can define the direct predecessors of a state s as
𝑃𝑟𝑒(𝑠) = {𝑠 ∣ ∃𝛼. 𝑠′ 𝛼→𝑠}
The above definitions can be lifted to sets of states A.
𝑃𝑜𝑠𝑡(𝐴) =
. . .
𝑃𝑟𝑒(𝐴) =
. . .
Successors/predecessors in any number of transitions can be defined likewise.
On a related note, one is typically interested in the part of a transition system that is
reachable from the initial state(s).


**Non-deterministic & Deterministic Transition System**
A transition system is action-deterministic iff
(1) There is no more than 1 initial state
|𝐼| ≤ 1
(2) For every state s and every action a, there is only one outgoing transition from s
labelled with a.
|{𝑠′ ∣ 𝑠 𝑎→𝑠′}| ≤ 1


**Terminal States**
A state is a terminal state if it has no outgoing transition.
We can write this formally in several ways: a state s is terminal iff
¬∃𝑠′
. 𝑠 → 𝑠′
𝑃𝑜𝑠𝑡(𝑠) = ∅
Terminal states usually represent final states (the system finished doing its job)
…or deadlock states (the system is stuck).

**Transition systems with no terminals**
From now on we consider w.l.o.g. transition systems with no terminal states.
If you have a terminal state, just add a self-loop.
If you are interested in marking the state as “terminal” and distinguish it from proper self-loops, just add as special label to it.


###  Kripke Structure (of Transition System)
> 🔗 https://en.wikipedia.org/wiki/Kripke_structure_(model_checking)

A **Kripke structure** is a variation of the [transition system](https://en.wikipedia.org/wiki/Transition_system "Transition system"), originally proposed by [Saul Kripke](https://en.wikipedia.org/wiki/Saul_Kripke "Saul Kripke"), used in [model checking](https://en.wikipedia.org/wiki/Model_checking "Model checking") to represent the behavior of a system. It consists of a [graph](https://en.wikipedia.org/wiki/Graph_\(discrete_mathematics\) "Graph (discrete mathematics)") whose nodes represent the reachable states of the system and whose edges represent state transitions, together with a labelling function which maps each node to a set of properties that hold in the corresponding state. [Temporal logics](https://en.wikipedia.org/wiki/Temporal_logic "Temporal logic") are traditionally interpreted in terms of Kripke structures.

---
**Formal Definition of Kripke Structure**

A transition system (of Kripke Structure) $TS$ is a tuple $(S,Act,\to,I,AP,L)$ where
- $S$ is a set of states,
- $Act$ is a set of actions,
- $\to \subseteq S \times Act \times S$ is a transition relation,
	-  or use $\delta$ to express $\to$
- $I \subseteq S$ is a set of initial states,
	- $\sigma\in I$
	- or, when using $\tau$ or $\pi$ to symbol a trace on $TS$, $\tau_0 = \sigma \in I$ or $\pi_0=\sigma\in I$
- $AP$ is a set of atomic propositions, 
- $L$: $S→AP^2$ is a labeling function.

$TS$ is called **finite** if $S$, $Act$, and $AP$ are **finite**.

It is important to realize that in case a state has more than one outgoing transition, the
“next” transition is chosen in a purely **nondeterministic** fashion. That is, the outcome of
this selection process is not known a priori, and, hence, no statement can be made about the likelihood with which a certain transition is selected. Similarly, when the set of initial states consists of more than one state, the start state is selected nondeterministically.

For convenience, we write $s \xrightarrow[]{\alpha}s'$ instead of $(s,α,s') \in \to$.

The labeling function $L$ relates a set $L(s) \in AP^2$ of atomic propositions to any state $s$. $L(s)$ intuitively stands for exactly those atomic propositions $a \in AP$ which are satisfied by state $s$. Given that $Φ$ is a propositional logic formula, then $s$ satisfies the formula $Φ$ if the evaluation induced by $L(s)$ makes the formula Φ true; that is: $s \models \Phi \iff L(s) \models \Phi$.

![](../../../../../../../../Assets/Pics/Screenshot%202025-09-23%20at%2018.33.15.png)
<small><a>https://www.cs.cmu.edu/~emc/15414-f12/lecture/temporal_logics.pdf#page=1.00</a></small>
![](../../../../../../../../Assets/Pics/Screenshot%202025-09-23%20at%2018.34.43.png)
<small><a>https://www.cs.cmu.edu/~emc/15414-f12/lecture/temporal_logics.pdf#page=1.00</a></small>


### Semantics of Transition System
> ↗ [Graph Basics](../../../Graph%20Theory/📌%20Graph%20Theory%20Basics/Graph%20Basics.md)
#### Execution & Trace
**Execution**
An execution fragment is a sequence of transitions.
$s_0\overset{click}{\to}s_1\overset{click}{\to}s_2...$

An execution is finite/infinite if the sequence is finite/infinite.
$s_0\overset{click}{\to}s_1 \text{ or }(s_2\overset{click}{\to}s_2)^w$

An execution is initial if the first state of the sequence is in I.

An execution is maximal if it cannot be extended: either it is finite and the last state is a terminal state, or it is infinite.

NOTE: by our assumption of “no terminal state”, only the second case applies.
NOTE: often, we drop the arrows.


**Trace**
Executions may contain too much information, i.e. actual states.
Often, one is interested in the **atomic properties** of states.
Replacing every state in an execution by its atomic properties yields a trace.

We may even drop the transitions and their actions.
#### Computational Tree
Executions and traces can be seen as the system running with a fixed scheduler.
They are not appropriate if we want to see how the system makes choices.
Computation trees can save the day!

**A computation tree is a tree whose nodes are states of a TS (or their atomic propositions).**

The successor of each state in the computation tree is the immediate successor of the state as it appears in the TS.
A computation tree is the unfolding of the transition system.

![](../../../../../../../../Assets/Pics/Screenshot%202025-12-08%20at%2012.19.55.png)


### Composing Transition System
Often, systems (and their models) are made of several components, which interact with each other.
There is a plethora of interaction mechanisms:
- Shared memory / objects / storage (consistent, weak, safe, etc.)
- Networks (synchronous/asynchronous, binary/multi-party, value-passing /rendezvous, etc.)

The transition system of the composition S1⊗S2 of two systems S1, S2 can be obtained in two ways.
1. Build TS(S1) and TS(S2), then compose
2. Build the composed TS directly from S1,S2

![](../../../../../../../../Assets/Pics/Screenshot%202025-12-11%20at%2018.27.55.png)

We will see 2 examples of (1): pure interleaving and action-synchronisation and 1 example of (2): concurrent threads with shared memory
#### Interleaving & Synchronised Composition
Interleaving composition of concurrent threads with shared memory: 
- ![](../../../../../../../../Assets/Pics/Screenshot%202025-12-11%20at%2018.28.36.png)
- ![](../../../../../../../../Assets/Pics/Screenshot%202025-12-11%20at%2018.29.13.png)

Formal semantics of the composition typically specified using operational semantics (common in programming languages).

- Synchronised Composition of Transition Systems
	- ![](../../../../../../../../Assets/Pics/Screenshot%202025-12-11%20at%2018.29.29.png)
##### Examples of TS Composition
- ![|400](../../../../../../../../Assets/Pics/Screenshot%202025-12-11%20at%2018.30.21.png)
- ![|400](../../../../../../../../Assets/Pics/Screenshot%202025-12-11%20at%2018.31.12.png)
- ![|400](../../../../../../../../Assets/Pics/Screenshot%202025-12-11%20at%2018.31.31.png)
- ![|400](../../../../../../../../Assets/Pics/Screenshot%202025-12-11%20at%2018.31.44.png)
#### State Space Explosion
In general, the size of the interleaving of n transition systems of m states each is $m^n$
Synchronizations may reduce the size composition but the worstcase is still exponential in the number of components.



## Ref
