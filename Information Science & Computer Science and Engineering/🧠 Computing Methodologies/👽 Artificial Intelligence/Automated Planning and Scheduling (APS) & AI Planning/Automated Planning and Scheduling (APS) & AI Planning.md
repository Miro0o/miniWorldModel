# Automated Planning and Scheduling (APS) & AI Planning

[TOC]



## Res
### Related Topics
↗ [Game Theory & Decision Making in Multi-Agents Environments](../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Game%20Theory%20&%20Decision%20Making%20in%20Multi-Agents%20Environments/Game%20Theory%20&%20Decision%20Making%20in%20Multi-Agents%20Environments.md)

↗ [Problem Solving & Search-Based Methods](../🗝️%20AI%20Basics%20&%20Major%20Techniques/Problem%20Solving%20&%20Search-Based%20Methods/Problem%20Solving%20&%20Search-Based%20Methods.md)
↗ [Statistical Learning (Data-Driven) & Machine Learning Methods](../🗝️%20AI%20Basics%20&%20Major%20Techniques/Statistical%20Learning%20(Data-Driven)%20&%20Machine%20Learning%20Methods/Statistical%20Learning%20(Data-Driven)%20&%20Machine%20Learning%20Methods.md)
- ↗ [Reinforcement Learning (RL) & Sequential Decision Making](../🗝️%20AI%20Basics%20&%20Major%20Techniques/Statistical%20Learning%20(Data-Driven)%20&%20Machine%20Learning%20Methods/Reinforcement%20Learning%20(RL)%20&%20Sequential%20Decision%20Making/Reinforcement%20Learning%20(RL)%20&%20Sequential%20Decision%20Making.md)
↗ [Artificial Neural Networks (ANN) & Deep Learning Methods](../🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR)/🌊%20Artificial%20Neural%20Networks%20(ANN)%20&%20Deep%20Learning%20Methods/Artificial%20Neural%20Networks%20(ANN)%20&%20Deep%20Learning%20Methods.md)

↗ [PDDL (Planning Domain Definition Language)](../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🪁%20DSL(Domain%20Specific%20Languages)%20&%20GPL(General%20Purpose%20Languages)/Modeling%20(Specification)%20Languages/PDDL%20(Planning%20Domain%20Definition%20Language).md)


### Papers


### Learning Resources
https://ml.rwth-aachen.de/~hector.geffner/www.dtic.upf.edu/~hgeffner/morgan-book-fragment-2013.pdf
A Concise Introduction to Models and Methods for Automated Planning (2013)
Hector Geffner | ICREA and Universitat Pompeu Fabra, Barcelona, Spain
Blai Bonet | Universidad Simón Bolívar, Caracas, Venezuela


### Other Resources
https://planning.wiki/
Planning.Wiki - The AI Planning & PDDL Wiki
- This Wiki is here to provide easy access to resources related to the field of AI Planning. AI Planning is difficult to quantify under one roof, due to the variety of ongoing research in the field.
- The International Conference on Autonomous Planning and Scheduling has in the course of supporting AI Planning research created a competition for the AI Planning Software (Planners) that have been built to solve AI Planning problems.
- This competition, dating from 1998, has defined a general purpose definition language, Planning Domain Definition Language (PDDL) [(Ghallab et al., 1998)](https://planning.wiki/#pddl1998), which is designed to be capable of specifying any planning or scheduling problem you could come across.
- In reality, PDDL since it’s first incarnation in 1998 has had serious modifications to make it capable of handling the complex tasks we expect of modern autonomous planning and scheduling techniques. [(Fox & Long, 2003; Fox & Long, 2003; Edelkamp & Hoffman, 2004; Gerevini & Long, 2005)](https://planning.wiki/#pddl212003)
- For more details on PDDL, Planning, the history, the usage and the research, see the guide.



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
In this section we extend planning to handle partially observable, nondeterministic, and unknown environments. The basic concepts mirror those in Chapter 4, but there are differences arising from the use of factored representations rather than atomic representations. This affects the way we represent the agent’s capability for action and observation and the way we represent belief states—the sets of possible physical states the agent might be in—for partially observable environments. We can also take advantage of many of the domain-independent methods given in Section 11.3 for calculating search heuristics.

We will cover sensorless planning (also known as conformant planning) for environments with no observations; contingency planning for partially observable and nondeterministic environments; and online planning and replanning for unknown environments. This will allow us to tackle sizable real-world problems.


### Complexity of Planning Problems
> [!links]
> ↗ [Complexity Theory & Computational Complexity](../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Complexity%20Theory%20&%20Computational%20Complexity/Complexity%20Theory%20&%20Computational%20Complexity.md)
#### Width of Planning Problems
> Width and Serialization of Classical Planning Problems
> Nir Lipovetzky1 and Hector Geffner2



## 📊 Analysis of Planning Approaches
> 📖 Artificial Intelligence: A Modern Approach, 4th ed.
> RUSSELL & NORVIG
> Chapter 11.7

Planning combines the two major areas of AI we have covered so far: search and logic. ==A planner can be seen either as a program that searches for a solution or as one that (constructively) proves the existence of a solution.== The cross-fertilization of ideas from the two areas has allowed planners to scale up from toy problems where the number of actions and states was limited to around a dozen, to real-world industrial applications with millions of states and thousands of actions.

Planning is foremost an exercise in ==controlling combinatorial explosion==. If there are $n$ propositions in a domain, then there are $2^n$ states. Against such pessimism, the identification of independent subproblems can be a powerful weapon. In the best case—full decomposability of the problem—we get an exponential speedup. Decomposability is destroyed, however, by negative interactions between actions. SATPLAN can encode logical relations between subproblems. Forward search addresses the problem heuristically by trying to find patterns (subsets of propositions) that cover the independent subproblems. Since this approach is heuristic, it can work even when the subproblems are not completely independent

==Unfortunately, we do not yet have a clear understanding of which techniques work best on which kinds of problems.== Quite possibly, new techniques will emerge, perhaps providing a synthesis of highly expressive first-order and hierarchical representations with the highly efficient factored and propositional representations that dominate today. We are seeing examples of **portfolio** planning systems, where a collection of algorithms are available to apply to any given problem. This can be done selectively (the system classifies each new problem to choose the best algorithm for it), or in parallel (all the algorithms run concurrently, each on a different CPU), or by interleaving the algorithms according to a schedule.



## Classical (Basic) Planning & PDDL
> [!links]
> ↗ [PDDL (Planning Domain Definition Language)](../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🪁%20DSL(Domain%20Specific%20Languages)%20&%20GPL(General%20Purpose%20Languages)/Modeling%20(Specification)%20Languages/PDDL%20(Planning%20Domain%20Definition%20Language).md)

> 📖 Artificial Intelligence: A Modern Approach, 4th ed.
> RUSSELL & NORVIG
> Chapter 11

==Classical planning is defined as the task of finding a sequence of actions to accomplish a goal in a discrete, deterministic, static, fully observable environment.== We have seen two approaches to this task: the problem-solving agent of Chapter 3 and the hybrid propositional logical agent of Chapter 7. Both share two limitations. First, they both require ad hoc heuristics for each new domain: a heuristic evaluation function for search, and hand-written code for the hybrid wumpus agent. Second, they both need to explicitly represent an exponentially large state space. For example, in the propositional logic model of the wumpus world, the axiom for moving a step forward had to be repeated for all four agent orientations, $T$ time steps, and $n^2$ current locations.


### PDDL, The Planning Domain Definition Language
> 📖 Artificial Intelligence: A Modern Approach, 4th ed.
> RUSSELL & NORVIG
> Chapter 11

In response to these limitations, planning researchers have invested in a **factored representation** using a family of languages called **PDDL, the Planning Domain Definition Language** (Ghallab et al., 1998), which allows us to express all $4Tn^2$ actions with a single action schema, and does not need domain-specific knowledge. ==Basic PDDL can handle classical planning domains, and extensions can handle non-classical domains that are continuous, partially observable, concurrent, and multi-agent==. The syntax of PDDL is based on Lisp, but we will translate it into a form that matches the notation used in this book.

==In PDDL, a **state** is represented as a conjunction of **ground atomic fluents**.== Recall that “ground” means no variables, “fluent” means an aspect of the world that changes over time, and “ground atomic” means there is a single predicate, and if there are any arguments, they must be constants. For example, $Poor ∧Unknown$ might represent the state of a hapless agent, and $At(Truck1,Melbourne) ∧At(Truck2,Sydney)$ could represent a state in a package delivery problem. PDDL uses **database semantics**: the **closed-world assumption** means that any fluents that are not mentioned are false, and the **unique names assumption** means that `Truck1` and `Truck2` are distinct.

The following fluents are not allowed in a state: $At(x,y)$ (because it has variables), $¬Poor$ (because it is a negation), and $At(Spouse(Ali),Sydney)$ (because it uses a function symbol, Spouse). When convenient, we can think of the conjunction of fluents as a set of fluents. 

An **action schema** represents a family of ground actions. For example, here is an action schema for flying a plane from one location to another:
- Action($Fly(p, from, to)$),  
- Precond: $At(p, from) \land Plane(p) \land Airport(from) \land Airport(to)$  
- Effect: $\neg At(p, from) \land At(p, to)$

The schema consists of the action name, a list of all the variables used in the schema, a **precondition** and an **effect**. The precondition and the effect are each conjunctions of **literals** (positive or negated atomic sentences). We can choose constants to instantiate the variables, yielding a ground (variable-free) action:
- Action($Fly(P_1, SFO, JFK)$),  
- Precond: $At(P_1, SFO) \land Plane(P_1) \land Airport(SFO) \land Airport(JFK)$  
- Effect: $\neg At(P_1, SFO) \land At(P_1, JFK)$

A ground action $a$ is **applicable** in state $s$ if $s$ entails the precondition of $a$; that is, if every positive literal in the precondition is in $s$ and every negated literal is not.

The **result** of executing applicable action $a$ in state $s$ is defined as a state $s'$ which is represented by the set of fluents formed by starting with $s$, removing the fluents that appear as negative literals in the action’s effects (what we call the delete list or $DEL(a)$), and adding the fluents that are positive literals in the action’s effects (what we call the add list or $ADD(a)$): $$ RESULT(s, a) = (s - DEL(a)) \cup ADD(a). $$
For example, with the action $Fly(P_1, SFO, JFK)$, we would remove the fluent $At(P_1, SFO)$ and add the fluent $At(P_1, JFK)$.

A set of action schemas serves as a definition of a planning **domain**. A specific **problem** within the domain is defined with the addition of an initial state and a goal. The **initial state** is a conjunction of ground fluents (introduced with the keyword $Init$ in Figure 11.1). As with all states, the closed-world assumption is used, which means that any atoms that are not mentioned are false. The **goal** (introduced with $Goal$) is just like a precondition: a conjunction of literals (positive or negative) that may contain variables. For example, the goal  $At(C_1, SFO) \land \neg At(C_2, SFO) \land At(p, SFO)$ refers to any state in which cargo $C_1$ is at $SFO$ but $C_2$ is not, and in which there is a plane at $SFO$.

> [!example]
> ![](../../../../Assets/Pics/Screenshot%202026-02-20%20at%2022.01.58.png)


### Algorithms for Classical Planning 🤔
> 📖 Artificial Intelligence: A Modern Approach, 4th ed.
> RUSSELL & NORVIG
> Chapter 11

#### Forward State-Space Search (Progression) for Planning
##### Fast Forward (FF) Planning System
> [!links]
> 🏠 https://fai.cs.uni-saarland.de/hoffmann/ff.html

> 🔗 https://planning.wiki/ref/planners/ff

Fast Forward is a family of planners, built predominantly on the FF System. FF’s novel heuristic, which is based on that of HSP’s delete free relaxation, forms the underlying heuristic of many other planners. FF is a forward chaining heuristic state space planner. The main heuristic principle was originally developed by Blai Bonet and Hector Geffner for the HSP [Link Needed] system: to obtain a heuristic estimate, relax the task P at hand into a simpler task P+ by ignoring the delete lists of all operators. While HSP employs a technique that gives a rough estimate for the solution length of P+ , FF extracts an explicit solution to P+.

#### Backward Search (Regression Search) for Planning

#### Planning as Boolean Satisfiability

#### Partial Order Planning (POP)
> 🔗 https://en.wikipedia.org/wiki/Partial-order_planning#

**Partial-order planning** is an approach to [automated planning](https://en.wikipedia.org/wiki/Automated_planning "Automated planning") that maintains a partial ordering between actions and only commits ordering between actions when forced to, that is, ordering of actions is partial. Also this planning doesn't specify which action will come out first when two actions are processed. By contrast, _total-order planning_ maintains a total ordering between all actions at every stage of planning. Given a problem in which some sequence of actions is needed to achieve a goal, a _partial-order plan_ specifies all actions that must be taken, but specifies an ordering between actions only where needed.

Consider the following situation: a person must travel from the start to the end of an obstacle course. The course is composed of a bridge, a see-saw, and a swing-set. The bridge must be traversed before the see-saw and swing-set are reachable. Once reachable, the see-saw and swing-set can be traversed in any order, after which the end is reachable. In a partial-order plan, ordering between these obstacles is specified only when needed. The bridge must be traversed first. Second, either the see-saw or swing-set can be traversed. Third, the remaining obstacle can be traversed. Then the end can be traversed. Partial-order planning relies upon the _principle of least commitment_ for its efficiency.
#### Other Classical Planning Approaches
> 📖 Artificial Intelligence: A Modern Approach, 4th ed.
> RUSSELL & NORVIG
> Chapter 11.2.4

- Graphplan (planning graph)
- Situation calculus
- CSP & SAT Solving
- POP

The three approaches we covered above are not the only ones tried in the 50-year history of automated planning. We briefly describe some others here.

An approach called **Graphplan** uses a specialized data structure, a **planning graph**, to encode constraints on how actions are related to their preconditions and effects, and on which things are mutually exclusive.

**Situation calculus** is a method of describing planning problems in first-order logic. It uses successor-state axioms just as SATPLAN does, but first-order logic allows for more flexibility and more succinct axioms. Overall the approach has contributed to our theoretical understanding of planning, but has not made a big impact in practical applications, perhaps because first-order provers are not as well developed as propositional satisfiability programs.

It is possible to encode a bounded planning problem (i.e., the problem of finding a plan of length *k*) as a **constraint satisfaction problem (CSP)**. The encoding is similar to the encoding to a SAT problem (Section 11.2.3), with one important simplification: at each time step we need only a single variable, *Actionᵗ*, whose domain is the set of possible actions. We no longer need one variable for every action, and we don’t need the action exclusion axioms.

All the approaches we have seen so far construct *totally ordered* plans consisting of strictly linear sequences of actions. But if an air cargo problem has 30 packages being loaded onto one plane and 50 packages being loaded onto another, it seems pointless to decree a specific linear ordering of the 80 load actions.

An alternative called **partial-order planning** represents a plan as a graph rather than a linear sequence: each action is a node in the graph, and for each precondition of the action there is an edge from another action (or from the initial state) that indicates that the predecessor action establishes the precondition. So we could have a partial-order plan that says that actions *Remove(Spare, Trunk)* and *Remove(Flat, Axle)* must come before *PutOn(Spare, Axle)*, but without saying which of the two *Remove* actions should come first. We search in the space of plans rather than world-states, inserting actions to satisfy conditions.

In the 1980s and 1990s, partial-order planning was seen as the best way to handle planning problems with independent subproblems. By 2000, forward-search planners had developed excellent heuristics that allowed them to efficiently discover the independent subproblems that partial-order planning was designed for. Moreover, SATPLAN was able to take advantage of Moore’s law: a propositionalization that was hopelessly large in 1980 now looks tiny, because computers have 10,000 times more memory today. As a result, partial-order planners are not competitive on fully automated classical planning problems.

Nonetheless, partial-order planning remains an important part of the field. For some specific tasks, such as operations scheduling, partial-order planning with domain-specific heuristics is the technology of choice. Many of these systems use libraries of high-level plans, as described in Section 11.4.

Partial-order planning is also often used in domains where it is important for humans to understand the plans. For example, operational plans for spacecraft and Mars rovers are generated by partial-order planners and are then checked by human operators before being uploaded to the vehicles for execution. The plan refinement approach makes it easier for the humans to understand what the planning algorithms are doing and to verify that the plans are correct before they are executed.


### Heuristics For Planning
> [!links]
> ↗ [Informed (Heuristic) Search](../🗝️%20AI%20Basics%20&%20Major%20Techniques/Problem%20Solving%20&%20Search-Based%20Methods/Systematic%20&%20Combinatorial%20Search%20(Classical%20Search)/Informed%20(Heuristic)%20Search/Informed%20(Heuristic)%20Search.md)
> ↗ [Heuristic Algorithms](../../../🔑%20CS%20Core/🧙‍♂️%20Algorithm%20&%20Data%20Structure/Other%20Topics%20in%20Algorithms/Heuristic%20Algorithms/Heuristic%20Algorithms.md)
> ↗ [Metaheuristic & Heuristic](../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Mathematical%20Optimization%20(Programming)/Metaheuristic%20&%20Heuristic/Metaheuristic%20&%20Heuristic.md)

> 📖 Artificial Intelligence: A Modern Approach, 4th ed.
> RUSSELL & NORVIG
> Chapter 11.3

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

![](../../../../Assets/Pics/Screenshot%202026-02-26%20at%2019.44.57.png)

Another possibility is the **ignore-delete-lists** heuristic. Assume for a moment that all goals and preconditions contain only positive literals.2 We want to create a relaxed version of the original problem that will be easier to solve, and where the length of the solution will serve as a good heuristic. We can do that by removing the delete lists from all actions (i.e., removing all negative literals from effects). That makes it possible to make monotonic progress towards the goal—no action will ever undo progress made by another action. It turns out it is still NP-hard to find the optimal solution to this relaxed problem, but an approximate solution can be found in polynomial time by hill climbing.

Figure 11.6 diagrams part of the state space for two planning problems using the ignore-delete-lists heuristic. The dots represent states and the edges actions, and the height of each dot above the bottom plane represents the heuristic value. States on the bottom plane are solutions. In both of these problems, there is a wide path to the goal. There are no dead ends, so no need for backtracking; a simple hill-climbing search will easily find a solution to these problems (although it may not be an optimal solution).
#### Domain-Independent Pruning
> 📖 Artificial Intelligence: A Modern Approach, 4th ed.
> RUSSELL & NORVIG
> Chapter 11.3.1

Factored representations make it obvious that many states are just variants of other states. For example, suppose we have a dozen blocks on a table, and the goal is to have block *A* on top of a three-block tower. The first step in a solution is to place some block *x* on top of block *y* (where *x*, *y*, and *A* are all different). After that, place *A* on top of *x* and we’re done. There are 11 choices for *x*, and given *x*, 10 choices for *y*, and thus 110 states to consider. But all these states are symmetric: choosing one over another makes no difference, and thus a planner should only consider one of them. This is the process of **symmetry reduction**: we prune out of consideration all symmetric branches of the search tree except for one. For many domains, this makes the difference between intractable and efficient solving.

Another possibility is to do forward pruning, accepting the risk that we might prune away an optimal solution, in order to focus the search on promising branches. We can define a **preferred action** as follows: First, define a relaxed version of the problem, and solve it to get a **relaxed plan**. Then a preferred action is either a step of the relaxed plan, or it achieves some precondition of the relaxed plan.

Sometimes it is possible to solve a problem efficiently by recognizing that negative interactions can be ruled out. We say that a problem has **serializable subgoals** if there exists an order of subgoals such that the planner can achieve them in that order without having to undo any of the previously achieved subgoals. For example, in the blocks world, if the goal is to build a tower (e.g., *A* on *B*, which in turn is on *C*, which in turn is on the *Table*, as in Figure 11.3 on page 365), then the subgoals are serializable bottom to top: if we first achieve *C* on *Table*, we will never have to undo it while we are achieving the other subgoals. A planner that uses the bottom-to-top trick can solve any problem in the blocks world without backtracking (although it might not always find the shortest plan). As another example, if there is a room with *n* light switches, each controlling a separate light, and the goal is to have them all on, then we don’t have to consider permutations of the order; we could arbitrarily restrict ourselves to plans that flip switches in, say, ascending order.

For the Remote Agent planner that commanded NASA’s Deep Space One spacecraft, it was determined that the propositions involved in commanding a spacecraft are serializable. This is perhaps not too surprising, because a spacecraft is *designed* by its engineers to be as easy as possible to control (subject to other constraints). Taking advantage of the serialized ordering of goals, the Remote Agent planner was able to eliminate most of the search. This meant that it was fast enough to control the spacecraft in real time, something previously considered impossible.
#### State Abstraction in Planning
> 📖 Artificial Intelligence: A Modern Approach, 4th ed.
> RUSSELL & NORVIG
> Chapter 11.3.2

A relaxed problem leaves us with a simplified planning problem just to calculate the value of the heuristic function. Many planning problems have $10^{100}$ states or more, and relaxing the *actions* does nothing to reduce the number of states, which means that it may still be expensive to compute the heuristic. Therefore, we now look at relaxations that decrease the number of states by forming a **state abstraction**—a many-to-one mapping from states in the ground representation of the problem to the abstract representation.

The easiest form of state abstraction is to ignore some fluents. For example, consider an air cargo problem with 10 airports, 50 planes, and 200 pieces of cargo. Each plane can be at one of 10 airports and each package can be either in one of the planes or unloaded at one of the airports. So there are $10^{50} × (50 + 10)^{200} ≈ 10^{405}$ states. Now consider a particular problem in that domain in which it happens that all the packages are at just 5 of the airports, and all packages at a given airport have the same destination. Then a useful abstraction of the problem is to drop all the *At* fluents except for the ones involving one plane and one package at each of the 5 airports. Now there are only $10^{5} × (5 + 10)^{5} ≈ 10^{11}$ states. A solution in this abstract state space will be shorter than a solution in the original space (and thus will be an admissible heuristic), and the abstract solution is easy to extend to a solution to the original problem (by adding additional *Load* and *Unload* actions).

A key idea in defining heuristics is **decomposition**: dividing a problem into parts, solving each part independently, and then combining the parts. The **subgoal independence** assumption is that the cost of solving a conjunction of subgoals is approximated by the sum of the costs of solving each subgoal independently. The subgoal independence assumption can be optimistic or pessimistic. It is optimistic when there are negative interactions between the subplans for each subgoal—for example, when an action in one subplan deletes a goal achieved by another subplan. It is pessimistic, and therefore inadmissible, when subplans contain redundant actions—for instance, two actions that could be replaced by a single action in the merged plan.

Suppose the goal is a set of fluents $G$, which we divide into disjoint subsets $G_1, \ldots, G_n$. We then find optimal plans $P_1, \ldots, P_n$ that solve the respective subgoals. What is an estimate of the cost of the plan for achieving all of $G$? We can think of each $\mathrm{Cost}(P_i)$ as a heuristic estimate, and we know that if we combine estimates by taking their maximum value, we always get an admissible heuristic. So $\max_i \mathrm{Cost}(P_i)$ is admissible, and sometimes it is exactly correct: it could be that $P_i$ serendipitously achieves all the $G_i$. But usually the estimate is too low. Could we sum the costs instead? For many problems that is a reasonable estimate, but it is not admissible. The best case is when $G_i$ and $G_j$ are independent, in the sense that plans for one cannot reduce the cost of plans for the other. In that case, the estimate $\mathrm{Cost}(P_i) + \mathrm{Cost}(P_j)$ is admissible, and more accurate than the max estimate.

It is clear that there is great potential for cutting down the search space by forming abstractions. The trick is choosing the right abstractions and using them in a way that makes the total cost—defining an abstraction, doing an abstract search, and mapping the abstraction back to the original problem—less than the cost of solving the original problem. The techniques of **pattern databases** from Section 3.6.3 can be useful, because the cost of creating the pattern database can be amortized over multiple problem instances.

A system that makes use of effective heuristics is FF, or FastForward (Hoffmann, 2005), a forward state-space searcher that uses the ignore-delete-lists heuristic, estimating the heuristic with the help of a planning graph. FF then uses hill climbing search (modified to keep track of the plan) with the heuristic to find a solution. FF’s hill climbing algorithm is nonstandard: it avoids local maxima by running a breadth-first search from the current state until a better one is found. If this fails, FF switches to a greedy best-first search instead.



## Improving Classical Planning Algorithms
### Hierarchical Planning
#### Hierarchical Task Network (HTN) & High-Level Actions (HLAs)

#### Searching for Primitive Solutions

#### Searching for Abstract Solutions


### Iterative Width (IW)


### Planning, Learning, AI, and LLM ⭐
> [!links]
> ↗ [Statistical Learning (Data-Driven) & Machine Learning Methods](../🗝️%20AI%20Basics%20&%20Major%20Techniques/Statistical%20Learning%20(Data-Driven)%20&%20Machine%20Learning%20Methods/Statistical%20Learning%20(Data-Driven)%20&%20Machine%20Learning%20Methods.md)
> ↗ [Knowledge Representation (Syntax Level) and Reasoning (KRR)](../🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR)/Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR).md)
> 
> ↗ [Neuro-Symbolic AI](../🗝️%20AI%20Basics%20&%20Major%20Techniques/Neuro-Symbolic%20AI/Neuro-Symbolic%20AI.md)



## Planning and Acting in Nondeterministic Domains
> [!links]
> ↗ [Uncertain Knowledge & Probabilistic Reasoning (Decision Making)](../🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR)/Uncertain%20Knowledge%20&%20Probabilistic%20Reasoning%20(Decision%20Making).md)

> 📖 Artificial Intelligence: A Modern Approach, 4th ed.
> RUSSELL & NORVIG
> Chapter 11.5

In this section we extend planning to handle partially observable, nondeterministic, and unknown environments. The basic concepts mirror those in Chapter 4, but there are differences arising from the use of factored representations rather than atomic representations. This affects the way we represent the agent’s capability for action and observation and the way we represent **belief states**—the sets of possible physical states the agent might be in—for partially observable environments. We can also take advantage of many of the domain-independent methods given in Section 11.3 for calculating search heuristics.

We will cover **sensorless planning** (also known as **conformant planning**) for environments with no observations; **contingency planning** for partially observable and nondeterministic environments; and **online planning** and **replanning** for unknown environments. This will allow us to tackle sizable real-world problems.



## Multi-Agent Planning
↗ [Games & Search in Multi-Agents Environment](../🗝️%20AI%20Basics%20&%20Major%20Techniques/Problem%20Solving%20&%20Search-Based%20Methods/🎳%20Games%20&%20Search%20in%20Multi-Agents%20Environment/Games%20&%20Search%20in%20Multi-Agents%20Environment.md)
↗ [Game Theory & Decision Making in Multi-Agents Environments](../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Game%20Theory%20&%20Decision%20Making%20in%20Multi-Agents%20Environments/Game%20Theory%20&%20Decision%20Making%20in%20Multi-Agents%20Environments.md)

↗ [Uncertain Knowledge & Probabilistic Reasoning (Decision Making)](../🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR)/Uncertain%20Knowledge%20&%20Probabilistic%20Reasoning%20(Decision%20Making).md)



## Time, Schedules, and Resources
> 📖 Artificial Intelligence: A Modern Approach, 4th ed.
> RUSSELL & NORVIG
> Chapter 11

Classical planning talks about what to do, in what order, but does not talk about **time**: how long an action takes and when it occurs. For example, in the airport domain we could produce a plan saying what planes go where, carrying what, but could not specify departure and arrival times. This is the subject matter of **scheduling**.

The real world also imposes **resource constraints**: an airline has a limited number of staff, and staff who are on one flight cannot be on another at the same time. This section introduces techniques for planning and scheduling problems with resource constraints.

The approach we take is “plan first, schedule later”: divide the overall problem into a planning phase in which actions are selected, with some ordering constraints, to meet the goals of the problem, and a later scheduling phase, in which temporal information is added to the plan to ensure that it meets resource and deadline constraints. This approach is common in real-world manufacturing and logistical settings, where the planning phase is sometimes automated, and sometimes performed by human experts.


### Representing Temporal and Resource Constraints


### Solving Scheduling Problems



## Ref
