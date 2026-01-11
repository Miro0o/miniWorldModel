# Mathematical Optimization (Programming)

[TOC]



## Res
### Related Topics
↗ [Mathematical Modeling & Real World Problem Solving](../../Mathematical%20Modeling%20&%20Real%20World%20Problem%20Solving.md)
↗ [Multi-Criteria Decision Making (MCDM) & Analysis (MCDA)](../../../../Other%20Networks%20of%20Knowledge/Science%20&%20Application/Social%20Science/Decision%20Theory%20&%20Decision%20Analysis/Multi-Criteria%20Decision%20Making%20(MCDM)%20&%20Analysis%20(MCDA)/Multi-Criteria%20Decision%20Making%20(MCDM)%20&%20Analysis%20(MCDA).md)

↗ [Mathematical Analysis (& Analytical Mathematics)](../../🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/Mathematical%20Analysis%20(&%20Analytical%20Mathematics).md)
- ↗ [Differential Geometry & Differential Manifold](../../Geometry/Differential%20Geometry%20&%20Differential%20Manifold/Differential%20Geometry%20&%20Differential%20Manifold.md)
↗ [Topology](../../Topology/Topology.md)
↗ [Logic And Mechanized (Formal) Reasoning](../../🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/Logic%20And%20Mechanized%20(Formal)%20Reasoning.md)

↗ [Formal Verification & Analysis Programming Languages](../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20for%20Specific%20Areas/Formal%20Verification%20&%20Analysis%20Programming%20Languages/Formal%20Verification%20&%20Analysis%20Programming%20Languages.md)
- ↗ [LEAN](../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20for%20Specific%20Areas/Formal%20Verification%20&%20Analysis%20Programming%20Languages/LEAN.md)

↗ [Formal Methods & Formal Verification (FV)](../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Analysis%20&%20Binary%20Engineering/📌%20Software%20(Program)%20Analysis%20Basics/🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/Formal%20Methods%20&%20Formal%20Verification%20(FV).md)

↗ [Symbolic Execution & Constrain Solvers (Proof Assistants)](../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Symbolic%20Execution%20&%20Constrain%20Solvers%20(Proof%20Assistants)/Symbolic%20Execution%20&%20Constrain%20Solvers%20(Proof%20Assistants).md)
- ↗ [Automated & Generic Theorem Provers](../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Symbolic%20Execution%20&%20Constrain%20Solvers%20(Proof%20Assistants)/Automated%20&%20Generic%20Theorem%20Provers/Automated%20&%20Generic%20Theorem%20Provers.md)
- ↗ [SAT (Boolean Satisfiability Problem) Solvers](../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Symbolic%20Execution%20&%20Constrain%20Solvers%20(Proof%20Assistants)/SAT%20(Boolean%20Satisfiability%20Problem)%20Solvers/SAT%20(Boolean%20Satisfiability%20Problem)%20Solvers.md)
- ↗ [SMT (Satisfiability Modulo Theory) Solvers](../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Symbolic%20Execution%20&%20Constrain%20Solvers%20(Proof%20Assistants)/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers.md)

↗ [Scientific Computing](../../../🧠%20Computing%20Methodologies/👑%20Scientific%20Computing/Scientific%20Computing.md)
↗ [Julia](../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Compiled%20Languages/Julia/Julia.md)

↗ [AI For Math](../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/❌%20AI4X,%20AGI%20(Artificial%20General%20Intelligence)%20&%20AIGC/AI4SCI/AI%20For%20Math.md)


### Learning Resources
https://www.nicolasboumal.net/book/IntroOptimManifolds_Boumal_2023.pdf
An introduction to optimization on smooth manifolds
Nicolas Boumal
- https://www.nicolasboumal.net/


https://enpocourses.github.io/enpo811203/optimization-intro/
neos， apmonitor， pyomo，jump，

**JuMP.jl**

**NEOS** 如果你想尝试不同的求解器，包括一些商业的求解器，你可以使用[NEOS-Server](https://neos-server.org/neos/)。他们提供了不同格式输入，并且还提供api调用。就是要求不能滥用。

**APMonitor和Gekko**

**GalacticOptim.jl**

**pyomo**

**OpenMDAO**


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Mathematical_optimization

**Mathematical optimization** (alternatively spelled _optimisation_) or **mathematical programming** is the selection of a best element, with regard to some criteria, from some set of available alternatives. It is generally divided into two subfields: [discrete optimization](https://en.wikipedia.org/wiki/Discrete_optimization "Discrete optimization") and [continuous optimization](https://en.wikipedia.org/wiki/Continuous_optimization "Continuous optimization"). Optimization problems arise in all quantitative disciplines from [computer science](https://en.wikipedia.org/wiki/Computer_science "Computer science") and [engineering](https://en.wikipedia.org/wiki/Engineering "Engineering") to [operations research](https://en.wikipedia.org/wiki/Operations_research "Operations research") and [economics](https://en.wikipedia.org/wiki/Economics "Economics"), and the development of solution methods has been of interest in [mathematics](https://en.wikipedia.org/wiki/Mathematics "Mathematics") for centuries.

In the more general approach, an [optimization problem](https://en.wikipedia.org/wiki/Optimization_problem "Optimization problem") consists of [maximizing or minimizing](https://en.wikipedia.org/wiki/Maxima_and_minima "Maxima and minima") a [real function](https://en.wikipedia.org/wiki/Function_of_a_real_variable "Function of a real variable") by systematically choosing [input](https://en.wikipedia.org/wiki/Argument_of_a_function "Argument of a function") values from within an allowed set and computing the [value](https://en.wikipedia.org/wiki/Value_\(mathematics\) "Value (mathematics)") of the function. The generalization of optimization theory and techniques to other formulations constitutes a large area of [applied mathematics](https://en.wikipedia.org/wiki/Applied_mathematics "Applied mathematics").



## Ref
