# Automated Planning and Scheduling (APS) & AI Planning

[TOC]



## Res
### Related Topics
↗ [Game Theory & Decision Making in Multi-Agents Environments](../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Game%20Theory%20&%20Decision%20Making%20in%20Multi-Agents%20Environments/Game%20Theory%20&%20Decision%20Making%20in%20Multi-Agents%20Environments.md)

↗ [Problem Solving & Search-Based Methods](../🗝️%20AI%20Basics%20&%20Major%20Techniques/Problem%20Solving%20&%20Search-Based%20Methods/Problem%20Solving%20&%20Search-Based%20Methods.md)
↗ [Statistical Learning (Data-Driven) & Machine Learning Methods](../🗝️%20AI%20Basics%20&%20Major%20Techniques/Statistical%20Learning%20(Data-Driven)%20&%20Machine%20Learning%20Methods/Statistical%20Learning%20(Data-Driven)%20&%20Machine%20Learning%20Methods.md)
- ↗ [Reinforcement Learning (RL) & Sequential Decision Making](../🗝️%20AI%20Basics%20&%20Major%20Techniques/Statistical%20Learning%20(Data-Driven)%20&%20Machine%20Learning%20Methods/Reinforcement%20Learning%20(RL)%20&%20Sequential%20Decision%20Making/Reinforcement%20Learning%20(RL)%20&%20Sequential%20Decision%20Making.md)
↗ [Artificial Neural Networks (ANN) & Deep Learning Methods](../🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR)/🌊%20Artificial%20Neural%20Networks%20(ANN)%20&%20Deep%20Learning%20Methods/Artificial%20Neural%20Networks%20(ANN)%20&%20Deep%20Learning%20Methods.md)


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Automated_planning_and_scheduling

**Automated planning and scheduling**, sometimes denoted as simply **AI planning**, is a branch of [artificial intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence "Artificial intelligence") that concerns the realization of [strategies](https://en.wikipedia.org/wiki/Strategy "Strategy") or action sequences, typically for execution by [intelligent agents](https://en.wikipedia.org/wiki/Intelligent_agent "Intelligent agent"), [autonomous robots](https://en.wikipedia.org/wiki/Autonomous_robot "Autonomous robot") and [unmanned vehicles](https://en.wikipedia.org/wiki/Unmanned_vehicle "Unmanned vehicle"). Unlike classical [control](https://en.wikipedia.org/wiki/Control_system "Control system") and [classification](https://en.wikipedia.org/wiki/Statistical_classification "Statistical classification") problems, the solutions are complex and must be discovered and optimized in multidimensional space. Planning is also related to [decision theory](https://en.wikipedia.org/wiki/Decision_theory "Decision theory").

In known environments with available models, planning can be done offline. Solutions can be found and evaluated prior to execution. In dynamically unknown environments, the [strategy](https://en.wikipedia.org/wiki/Strategy "Strategy") often needs to be revised online. Models and policies must be adapted. Solutions usually resort to iterative [trial and error](https://en.wikipedia.org/wiki/Trial_and_error "Trial and error") processes commonly seen in [artificial intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence "Artificial intelligence"). These include [dynamic programming](https://en.wikipedia.org/wiki/Dynamic_programming "Dynamic programming"), [reinforcement learning](https://en.wikipedia.org/wiki/Reinforcement_learning "Reinforcement learning") and [combinatorial optimization](https://en.wikipedia.org/wiki/Combinatorial_optimization "Combinatorial optimization"). Languages used to describe planning and scheduling are often called [action languages](https://en.wikipedia.org/wiki/Action_language "Action language").

> 📖 Artificial Intelligence: A Modern Approach, 4th ed.
> RUSSELL & NORVIG
> Chapter 11

> In which we see how an agent can take advantage of the structure of a problem to efficiently construct complex plans of action.

Planning a course of action is a key requirement for an intelligent agent. The right representation for actions and states and the right algorithms can make this easier. In Section 11.1 we introduce a general factored representation language for planning problems that can naturally and succinctly represent a wide variety of domains, can efficiently scale up to large problems, and does not require ad hoc heuristics for a new domain. Section 11.4 extends the representation language to allow for hierarchical actions, allowing us to tackle more complex problems. We cover efficient algorithms for planning in Section 11.2, and heuristics for them in Section 11.3. In Section 11.5 we account for partially observable and nondeterministic domains, and in Section 11.6 we extend the language once again to cover scheduling problems with resource constraints. This gets us closer to planners that are used in the real world for planning and scheduling the operations of spacecraft, factories, and military campaigns. Section 11.7 analyzes the effectiveness of these techniques.

...

In this chapter, we described the PDDL representation for both classical and extended planning problems, and presented several algorithmic approaches for finding solutions. The points to remember:
- Planning systems are problem-solving algorithms that operate on explicit factored representations of states and actions. These representations make possible the derivation of effective domain-independent heuristics and the development of powerful and flexible algorithms for solving problems.
- PDDL, the Planning Domain Definition Language, describes the initial and goal states as conjunctions of literals, and actions in terms of their preconditions and effects. Extensions represent time, resources, percepts, contingent plans, and hierarchical plans.
- State-space search can operate in the forward direction (**progression**) or the backward direction (**regression**). Effective heuristics can be derived by subgoal independence assumptions and by various relaxations of the planning problem.
- Other approaches include encoding a planning problem as a Boolean satisfiability problem or as a constraint satisfaction problem; and explicitly searching through the space of partially ordered plans.
- **Hierarchical task network (HTN)** planning allows the agent to take advice from the domain designer in the form of **high-level actions (HLAs)** that can be implemented in various ways by lower-level action sequences. The effects of HLAs can be defined with **angelic semantics**, allowing provably correct high-level plans to be derived without consideration of lower-level implementations. HTN methods can create the very large plans required by many real-world applications.
- **Contingent plans** allow the agent to sense the world during execution to decide what branch of the plan to follow. In some cases, **sensorless** or **conformant planning** can be used to construct a plan that works without the need for perception. Both conformant and contingent plans can be constructed by search in the space of belief states. Efficient representation or computation of **belief states** is a key problem.
- An **online planning agent** uses execution monitoring and splices in repairs as needed to recover from unexpected situations, which can be due to nondeterministic actions, exogenous events, or incorrect models of the environment.
- Many actions consume **resources**, such as money, gas, or raw materials. It is convenient to treat these resources as numeric measures in a pool rather than try to reason about, say, each individual coin and bill in the world. Time is one of the most important resources. It can be handled by specialized scheduling algorithms, or scheduling can be integrated with planning.
- This chapter extends classical planning to cover nondeterministic environments (where outcomes of actions are uncertain), but it is not the last word on planning. Chapter 16 describes techniques for stochastic environments (in which outcomes of actions have probabilities associated with them): Markov decision processes, partially observable Markov decision processes, and game theory. In Chapter 23 we show that reinforcement learning allows an agent to learn how to behave from past successes and failures.


### APS Under Different Environments 🤔
#### Known /Unknown Environments (Model-Based /Model-Free)

#### Deterministic /Nondeterministic Environments



## 📊 Analysis of Planning Approaches



## Classical (Basic) Planning & PDDL
> [!links]
> ↗ [PDDL (Planning Domain Definition Language)](../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🪁%20DSL(Domain%20Specific%20Languages)%20&%20GPL(General%20Purpose%20Languages)/Modeling%20(Specification)%20Languages/PDDL%20(Planning%20Domain%20Definition%20Language).md)

> 📖 Artificial Intelligence: A Modern Approach, 4th ed.
> RUSSELL & NORVIG
> Chapter 11

==Classical planning is defined as the task of finding a sequence of actions to accomplish a goal in a discrete, deterministic, static, fully observable environment.== We have seen two approaches to this task: the problem-solving agent of Chapter 3 and the hybrid propositional logical agent of Chapter 7. Both share two limitations. First, they both require ad hoc heuristics for each new domain: a heuristic evaluation function for search, and hand-written code for the hybrid wumpus agent. Second, they both need to explicitly represent an exponentially large state space. For example, in the propositional logic model of the wumpus world, the axiom for moving a step forward had to be repeated for all four agent orientations, T time steps, and n2 current locations.

In response to these limitations, planning researchers have invested in a **factored representation** using a family of languages called **PDDL, the Planning Domain Definition Language** (Ghallab et al., 1998), which allows us to express all $4Tn^2$ actions with a single action schema, and does not need domain-specific knowledge. ==Basic PDDL can handle classical planning domains, and extensions can handle non-classical domains that are continuous, partially observable, concurrent, and multi-agent==. The syntax of PDDL is based on Lisp, but we will translate it into a form that matches the notation used in this book.

==In PDDL, a **state** is represented as a conjunction of **ground atomic fluents**.== Recall that “ground” means no variables, “fluent” means an aspect of the world that changes over time, and “ground atomic” means there is a single predicate, and if there are any arguments, they must be constants. For example, $Poor ∧Unknown$ might represent the state of a hapless agent, and $At(Truck1,Melbourne) ∧At(Truck2,Sydney)$ could represent a state in a package delivery problem. PDDL uses **database semantics**: the **closed-world assumption** means that any fluents that are not mentioned are false, and the **unique names assumption** means that `Truck1` and `Truck2` are distinct.

The following fluents are not allowed in a state: $At(x,y)$ (because it has variables), $¬Poor$ (because it is a negation), and $At(Spouse(Ali),Sydney)$ (because it uses a function symbol, Spouse). When convenient, we can think of the conjunction of fluents as a set of fluents. 

An **action schema** represents a family of ground actions. For example, here is an action schema for flying a plane from one location to another:
- Action($Fly(p, from, to)$),  
- Precond: $At(p, from) \land Plane(p) \land Airport(from) \land Airport(to)$  
- Effect: $\neg At(p, from) \land At(p, to)$

The schema consists of the action name, a list of all the variables used in the schema, a **precondition** and an **effect**. The precondition and the effect are each conjunctions of literals (positive or negated atomic sentences). We can choose constants to instantiate the variables, yielding a ground (variable-free) action:
- Action($Fly(P_1, SFO, JFK)$),  
- Precond: $At(P_1, SFO) \land Plane(P_1) \land Airport(SFO) \land Airport(JFK)$  
- Effect: $\neg At(P_1, SFO) \land At(P_1, JFK)$

A ground action $a$ is **applicable** in state $s$ if $s$ entails the precondition of $a$; that is, if every positive literal in the precondition is in $s$ and every negated literal is not.

The **result** of executing applicable action $a$ in state $s$ is defined as a state $s'$ which is represented by the set of fluents formed by starting with $s$, removing the fluents that appear as negative literals in the action’s effects (what we call the delete list or $DEL(a)$), and adding the fluents that are positive literals in the action’s effects (what we call the add list or $ADD(a)$): $$ RESULT(s, a) = (s - DEL(a)) \cup ADD(a). $$
For example, with the action $Fly(P_1, SFO, JFK)$, we would remove the fluent $At(P_1, SFO)$ and add the fluent $At(P_1, JFK)$.

A set of action schemas serves as a definition of a planning **domain**. A specific **problem** within the domain is defined with the addition of an initial state and a goal. The **initial state** is a conjunction of ground fluents (introduced with the keyword $Init$ in Figure 11.1). As with all states, the closed-world assumption is used, which means that any atoms that are not mentioned are false. The **goal** (introduced with $Goal$) is just like a precondition: a conjunction of literals (positive or negative) that may contain variables. For example, the goal $$ At(C_1, SFO) \land \neg At(C_2, SFO) \land At(p, SFO) $$
refers to any state in which cargo $C_1$ is at $SFO$ but $C_2$ is not, and in which there is a plane at $SFO$.


### Algorithms for Classical Planning
> 📖 Artificial Intelligence: A Modern Approach, 4th ed.
> RUSSELL & NORVIG
> Chapter 11

Forward state-space search (progression) for planning
Backward search (regression search) for planning
Planning as Boolean satisfiability
Other classical planning approaches


### Heuristics For Planning
> 📖 Artificial Intelligence: A Modern Approach, 4th ed.
> RUSSELL & NORVIG
> Chapter 11

Neither forward nor backward search is efficient without a good heuristic function. Recall from Chapter 3 that a heuristic function h(s) estimates the distance from a state s to the goal, and that if we can derive an **admissible** heuristic for this distance—one that does not overestimate—then we can use A\*search to find optimal solutions.

By definition, there is no way to analyze an atomic state, and thus it requires some ingenuity by an analyst (usually human) to define good domain-specific heuristics for search problems with atomic states. But planning uses a factored representation for states and actions, which makes it possible to define good domain-independent heuristics.

Recall that an admissible heuristic can be derived by defining a **relaxed problem** that is easier to solve. The exact cost of a solution to this easier problem then becomes the heuristic for the original problem. A search problem is a graph where the nodes are states and the edges are actions. The problem is to find a path connecting the initial state to a goal state. There are two main ways we can relax this problem to make it easier: by adding more edges to the graph, making it strictly easier to find a path, or by grouping multiple nodes together, forming an abstraction of the state space that has fewer states, and thus is easier to search.

We look first at heuristics that add edges to the graph. Perhaps the simplest is the **ignore-preconditions heuristic**, which drops all preconditions from actions. Every action becomes applicable in every state, and any single goal fluent can be achieved in one step (if there are any applicable actions—if not, the problem is impossible). This almost implies that the number of steps required to solve the relaxed problem is the number of unsatisfied goals—almost but not quite, because (1) some action may achieve multiple goals and (2) some actions may undo the effects of others.

For many problems an accurate heuristic is obtained by considering (1) and ignoring (2). First, we relax the actions by removing all preconditions and all effects except those that are literals in the goal. Then, we count the minimum number of actions required such that the union of those actions’ effects satisfies the goal. This is an instance of the **set-cover problem**. There is one minor irritation: the set-cover problem is NP-hard. Fortunately a simple greedy algorithm is guaranteed to return a set covering whose size is within a factor of $\log n$ of the true minimum covering, where $n$ is the number of literals in the goal. Unfortunately, the greedy algorithm loses the guarantee of admissibility.

It is also possible to ignore only selected preconditions of actions. Consider the sliding-tile puzzle (8-puzzle or 15-puzzle) from Section 3.2. We could encode this as a planning problem involving tiles with a single schema $Slide$:
- Action($Slide(t, s_1, s_2)$),  
- Precond: $On(t, s_1) \land Tile(t) \land Blank(s_2) \land Adjacent(s_1, s_2)$  
- Effect: $On(t, s_2) \land Blank(s_1) \land \neg On(t, s_1) \land \neg Blank(s_2)$

As we saw in Section 3.6, if we remove the preconditions $Blank(s_2) \land Adjacent(s_1, s_2)$ then any tile can move in one action to any space and we get the number-of-misplaced-tiles heuristic. If we remove only the $Blank(s_2)$ precondition then we get the Manhattan-distance heuristic. It is easy to see how these heuristics could be derived automatically from the action schema description. The ease of manipulating the action schemas is the great advantage of the factored representation of planning problems, as compared with the atomic representation of search problems.

#### Domain-independent pruning

#### State abstraction in planning



## Hierarchical Planning
### Hierarchical Task Network (HTN) & High-Level Actions (HLAs)



## Time, Schedules, and Resources
Classical planning talks about what to do, in what order, but does not talk about **time**: how long an action takes and when it occurs. For example, in the airport domain we could produce a plan saying what planes go where, carrying what, but could not specify departure and arrival times. This is the subject matter of **scheduling**.

The real world also imposes **resource constraints**: an airline has a limited number of staff, and staff who are on one flight cannot be on another at the same time. This section introduces techniques for planning and scheduling problems with resource constraints.

The approach we take is “plan first, schedule later”: divide the overall problem into a planning phase in which actions are selected, with some ordering constraints, to meet the goals of the problem, and a later scheduling phase, in which temporal information is added to the plan to ensure that it meets resource and deadline constraints. This approach is common in real-world manufacturing and logistical settings, where the planning phase is sometimes automated, and sometimes performed by human experts.



## Ref
