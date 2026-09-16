# Optimization Software & Solver Implementation

[TOC]



## Res
### Related Topics
↗ [AML (Algebraic Modeling Language)](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20&%20Formats/Modeling%20%28Specification%29%20Languages/AML%20%28Algebraic%20Modeling%20Language%29.md)

↗ [Model Tuning & Hyperparameter Optimization (HPO)](../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20%28Syntax%20Level%29%20and%20Reasoning%20%28KRR%29/🌊%20Connectionist%20AI%20&%20Artificial%20Neural%20Networks%20%28ANN%29%20&%20Deep%20Learning/3️⃣%20Model%20Training%20%28Classical%20ML%20&%20NN%29/Model%20Tuning%20&%20Hyperparameter%20Optimization%20%28HPO%29/Model%20Tuning%20&%20Hyperparameter%20Optimization%20%28HPO%29.md)
↗ [Optimizers](../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20%28Syntax%20Level%29%20and%20Reasoning%20%28KRR%29/🌊%20Connectionist%20AI%20&%20Artificial%20Neural%20Networks%20%28ANN%29%20&%20Deep%20Learning/3️⃣%20Model%20Training%20%28Classical%20ML%20&%20NN%29/Model%20Tuning%20&%20Hyperparameter%20Optimization%20%28HPO%29/Optimizers/Optimizers.md)

↗ [Constraint Solving & Theorem Proving](../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20%28InfoSec%29/🙇‍♂️%20Formal%20Verification%20%28FV%29%20&%20Reasoning%20Systems%20%28Formal%20Methods%29/🎮%20Constraint%20Solving%20&%20Theorem%20Proving/Constraint%20Solving%20&%20Theorem%20Proving.md)
↗ [Formal Verifiers & Constraint Solvers (Proof Assistants)](../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20%28Proof%20Assistants%29/Formal%20Verifiers%20&%20Constraint%20Solvers%20%28Proof%20Assistants%29.md)
- ↗ [SAT (Boolean Satisfiability Problem) Solvers](../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20%28Proof%20Assistants%29/SAT%20%28Boolean%20Satisfiability%20Problem%29%20Solvers/SAT%20%28Boolean%20Satisfiability%20Problem%29%20Solvers.md)
- ↗ [SMT (Satisfiability Modulo Theory) Solvers](../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifiers%20&%20Constraint%20Solvers%20%28Proof%20Assistants%29/SMT%20%28Satisfiability%20Modulo%20Theory%29%20Solvers/SMT%20%28Satisfiability%20Modulo%20Theory%29%20Solvers.md)

↗ [Constraint Based Search & Constraint Programming & Constraint Satisfaction](../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Major%20Techniques/Problem%20Solving%20&%20Search-Based%20Methods/Constraint%20Based%20Search%20&%20Constraint%20Programming%20&%20Constraint%20Satisfaction/Constraint%20Based%20Search%20&%20Constraint%20Programming%20&%20Constraint%20Satisfaction.md)


### Learning Resources


### Other Resources
https://enpocourses.github.io/enpo811203/optimization-intro/
neos， apmonitor， pyomo，jump，
**JuMP.jl**
**NEOS** 如果你想尝试不同的求解器，包括一些商业的求解器，你可以使用[NEOS-Server](https://neos-server.org/neos/)。他们提供了不同格式输入，并且还提供api调用。就是要求不能滥用。
**APMonitor和Gekko**
**GalacticOptim.jl**
**pyomo**
**OpenMDAO**

wikipedia
- [Comparison of optimization software](https://en.wikipedia.org/wiki/Comparison_of_optimization_software "Comparison of optimization software")
- [List of computer algebra systems](https://en.wikipedia.org/wiki/List_of_computer_algebra_systems "List of computer algebra systems")
- [List of constraint programming languages](https://en.wikipedia.org/wiki/List_of_constraint_programming_languages "List of constraint programming languages")
- [List of numerical libraries](https://en.wikipedia.org/wiki/List_of_numerical_libraries "List of numerical libraries")
- [List of optimization algorithms](https://en.wikipedia.org/wiki/List_of_optimization_algorithms "List of optimization algorithms")
- [List of SMT solvers](https://en.wikipedia.org/wiki/List_of_SMT_solvers "List of SMT solvers")



## Intro
> 🔗 https://en.wikipedia.org/wiki/List_of_optimization_software

Given a [transformation](https://en.wikipedia.org/wiki/Transformation_\(function\) "Transformation (function)") between input and output values, described by a [mathematical function](https://en.wikipedia.org/wiki/Function_\(mathematics\) "Function (mathematics)"), [optimization](https://en.wikipedia.org/wiki/Optimisation "Optimisation") deals with generating and selecting the best solution from some set of available alternatives, by systematically choosing input values from within an allowed set, computing the output of the function and recording the best output values found during the process. Many real-world problems can be modeled in this way. For example, the inputs could be design parameters for a motor, the output could be the power consumption. For another optimization, the inputs could be business choices and the output could be the profit obtained.

An [optimization problem](https://en.wikipedia.org/wiki/Optimization_problem "Optimization problem"), (in this case a minimization problem), can be represented in the following way:
- _Given:_ a [function](https://en.wikipedia.org/wiki/Function_\(mathematics\) "Function (mathematics)") $f: A \to R$ from some [set](https://en.wikipedia.org/wiki/Set_\(mathematics\) "Set (mathematics)") _A_ to the [real numbers](https://en.wikipedia.org/wiki/Real_number "Real number")
- _Search for:_ an element $x_0$ in _A_ such that $f(x_0) ≤ f(x)$ for all _x_ in _A_.

In continuous optimization, _A_ is some [subset](https://en.wikipedia.org/wiki/Subset "Subset") of the [Euclidean space](https://en.wikipedia.org/wiki/Euclidean_space "Euclidean space") $R^n$, often specified by a set of _[constraints](https://en.wikipedia.org/wiki/Constraint_\(mathematics\) "Constraint (mathematics)")_, equalities or inequalities that the members of _A_ have to satisfy. In combinatorial optimization, _A_ is some [subset](https://en.wikipedia.org/wiki/Subset "Subset") of a discrete space, like binary strings, permutations, or sets of integers.

The use of **optimization software** requires that the function _f_ is defined in a suitable [programming language](https://en.wikipedia.org/wiki/Programming_language "Programming language") and connected at compilation or run time to the optimization software. The optimization software will deliver input values in _A_, the software module realizing _f_ will deliver the computed value _f_(_x_) and, in some cases, additional information about the function like derivatives.

In this manner, a clear separation of concerns is obtained: different optimization software modules can be easily tested on the same function _f_, or a given optimization software can be used for different functions _f_.

The following tables provide a list of notable optimization software organized according to license and business model type.

![](../../../../../Assets/Pics/Screenshot%202026-09-15%20at%2016.10.15.png)


### List of Optimization Software
#### Free and open-source software
> 🔗 https://en.wikipedia.org/wiki/List_of_optimization_software

#### Freeware/free for academic use
> 🔗 https://en.wikipedia.org/wiki/List_of_optimization_software

- [AIMMS](https://en.wikipedia.org/wiki/AIMMS "AIMMS")
- [AMPL](https://en.wikipedia.org/wiki/AMPL "AMPL")
- [APMonitor](https://en.wikipedia.org/wiki/APMonitor "APMonitor") – free for academic and commercial use alike, with [Python](https://en.wikipedia.org/wiki/Python_\(programming_language\) "Python (programming language)") and [MATLAB](https://en.wikipedia.org/wiki/MATLAB "MATLAB") integrations.
- [ASTOS](https://en.wikipedia.org/wiki/ASTOS "ASTOS")
- [CPLEX](https://en.wikipedia.org/wiki/CPLEX "CPLEX")
- [Couenne](https://en.wikipedia.org/wiki/Couenne "Couenne") – An open source solver for the deterministic global optimization of MINLPs licensed under the Eclipse Public License.
- [FICO Xpress](https://en.wikipedia.org/wiki/FICO_Xpress "FICO Xpress")
- [Galahad library](https://en.wikipedia.org/wiki/Galahad_library "Galahad library")
- [Gekko](https://en.wikipedia.org/wiki/Gekko_\(optimization_software\) "Gekko (optimization software)")
- [Gurobi Optimizer](https://en.wikipedia.org/wiki/Gurobi_Optimizer "Gurobi Optimizer") - free for academic users
- [LIONsolver](https://en.wikipedia.org/wiki/LIONsolver "LIONsolver")
- [MIDACO](https://en.wikipedia.org/wiki/MIDACO "MIDACO") – a software package for numerical [optimization](https://en.wikipedia.org/wiki/Mathematical_optimization "Mathematical optimization") based on [evolutionary computing](https://en.wikipedia.org/wiki/Evolutionary_computation "Evolutionary computation").
- [MINTO](https://en.wikipedia.org/wiki/MINTO "MINTO") – [integer programming](https://en.wikipedia.org/wiki/Integer_programming "Integer programming") solver using branch and bound algorithm; freeware for personal use.
- [MOSEK](https://en.wikipedia.org/wiki/MOSEK "MOSEK") – a large scale optimization software. Solves linear, quadratic, conic and convex nonlinear, continuous and integer optimization.
- [OptimJ](https://en.wikipedia.org/wiki/OptimJ "OptimJ") – Java-based modelling language; the free edition includes support for lp_solve, [GLPK](https://en.wikipedia.org/wiki/GNU_Linear_Programming_Kit "GNU Linear Programming Kit") and [LP](https://en.wikipedia.org/wiki/Linear_programming "Linear programming") or [MPS](https://en.wikipedia.org/wiki/MPS_\(format\) "MPS (format)") file formats.
- [PottersWheel](https://en.wikipedia.org/wiki/PottersWheel "PottersWheel") – parameter estimation in ordinary differential equations (free MATLAB toolbox for academic use).
- [Pyomo](https://en.wikipedia.org/wiki/Pyomo "Pyomo") – collection of Python software packages for formulating optimization models.
- [WORHP](https://en.wikipedia.org/wiki/WORHP "WORHP")
#### Proprietary software
> 🔗 https://en.wikipedia.org/wiki/List_of_optimization_software

- [AIMMS](https://en.wikipedia.org/wiki/AIMMS "AIMMS") – optimization modelling system, including GUI building facilities.
- [ALGLIB](https://en.wikipedia.org/wiki/ALGLIB "ALGLIB") – dual licensed (GPL/commercial) constrained quadratic and nonlinear optimization library with C++ and C# interfaces.
- [Altair HyperStudy](https://en.wikipedia.org/wiki/Altair_Engineering "Altair Engineering") – design of experiments and multidisciplinary design optimization.
- [AMPL](https://en.wikipedia.org/wiki/AMPL "AMPL") – modelling language for large-scale linear, mixed integer and nonlinear optimization.
- [ANTIGONE](https://en.wikipedia.org/wiki/ANTIGONE "ANTIGONE") – a [deterministic global optimization](https://en.wikipedia.org/wiki/Deterministic_global_optimization "Deterministic global optimization") MINLP solver.
- [APMonitor](https://en.wikipedia.org/wiki/APMonitor "APMonitor") – modelling language and optimization suite for large-scale, nonlinear, mixed integer, differential, and algebraic equations with interfaces to MATLAB, Python, and Julia.
- [Artelys Knitro](https://en.wikipedia.org/wiki/Artelys_Knitro "Artelys Knitro") – large scale nonlinear optimization for continuous and mixed-integer programming.
- [ASTOS](https://en.wikipedia.org/wiki/ASTOS "ASTOS") – AeroSpace Trajectory optimization Software for launch, re-entry, and generic aerospace problems.
- [BARON](https://en.wikipedia.org/wiki/BARON "BARON") – optimization of algebraic nonlinear and mixed-integer nonlinear problems.
- [COMSOL Multiphysics](https://en.wikipedia.org/wiki/COMSOL_Multiphysics "COMSOL Multiphysics") – a cross-platform [finite element](https://en.wikipedia.org/wiki/Finite_element_method "Finite element method") analysis, solver and [multiphysics](https://en.wikipedia.org/wiki/Multiphysics "Multiphysics") [simulation software](https://en.wikipedia.org/wiki/Simulation_software "Simulation software").
- [CPLEX](https://en.wikipedia.org/wiki/CPLEX "CPLEX") – solver for linear and quadratic programming with continuous or integer variables (MIP).
- [FEATool Multiphysics](https://en.wikipedia.org/wiki/FEATool_Multiphysics "FEATool Multiphysics") – FEA GUI Toolbox for MATLAB.
- [FICO Xpress](https://en.wikipedia.org/wiki/FICO_Xpress "FICO Xpress") – solver for linear and quadratic programming with continuous or integer variables (MIP).
- [FortMP](https://en.wikipedia.org/wiki/FortMP "FortMP") – linear and quadratic programming.
- [FortSP](https://en.wikipedia.org/wiki/FortSP "FortSP") – stochastic programming.
- [GAMS](https://en.wikipedia.org/wiki/General_Algebraic_Modeling_System "General Algebraic Modeling System") – General Algebraic Modeling System.
- [Gurobi Optimizer](https://en.wikipedia.org/wiki/Gurobi_Optimizer "Gurobi Optimizer") – solver for linear and quadratic programming with continuous or integer variables (MIP).
- [HEEDS MDO](https://en.wikipedia.org/wiki/Red_Cedar_Technology#HEEDS_MDO "Red Cedar Technology") – multidisciplinary design optimization using SHERPA, a hybrid, adaptive optimization algorithm.
- [IMSL Numerical Libraries](https://en.wikipedia.org/wiki/IMSL_Numerical_Libraries "IMSL Numerical Libraries") – linear, quadratic, nonlinear, and sparse QP and LP optimization algorithms implemented in standard programming languages C, Java, C# .NET, Fortran, and Python.
- [IOSO](https://en.wikipedia.org/wiki/IOSO "IOSO") – (Indirect optimization on the basis of Self-Organization) a multi-objective, multidimensional nonlinear optimization technology.
- [Kimeme](https://en.wikipedia.org/wiki/Kimeme "Kimeme") – an open platform for multi-objective optimization and multidisciplinary design optimization.
- [LINDO](https://en.wikipedia.org/wiki/LINDO "LINDO") – (Linear, Interactive, and Discrete optimizer) a software package for linear programming, integer programming, [nonlinear programming](https://en.wikipedia.org/wiki/Nonlinear_programming "Nonlinear programming"), stochastic programming, and global optimization. The "What's Best!" Excel add-in performs linear, integer, and nonlinear optimization using LINDO.
- [LIONsolver](https://en.wikipedia.org/wiki/LIONsolver "LIONsolver") – an integrated software for [data mining](https://en.wikipedia.org/wiki/Data_mining "Data mining"), [analytics](https://en.wikipedia.org/wiki/Analytics "Analytics"), modelling **L**earning and **I**ntelligent **O**ptimizatio**N** and reactive [business intelligence](https://en.wikipedia.org/wiki/Business_intelligence "Business intelligence") approach.
- [modeFRONTIER](https://en.wikipedia.org/wiki/ModeFRONTIER "ModeFRONTIER") – an integration platform for multi-objective and multidisciplinary optimization, which provides a seamless coupling with third party engineering tools, enables the automation of the design simulation process, and facilitates analytic decision-making.
- [Maple](https://en.wikipedia.org/wiki/Maple_\(software\) "Maple (software)") – linear, quadratic, and nonlinear, continuous and integer optimization. Constrained and unconstrained. Global optimization with add-on toolbox.
- [MATLAB](https://en.wikipedia.org/wiki/MATLAB "MATLAB") – linear, integer, quadratic, and nonlinear problems with [Optimization Toolbox](https://en.wikipedia.org/wiki/Optimization_Toolbox "Optimization Toolbox"); multiple maxima, multiple minima, and non-smooth optimization problems; estimation and optimization of model parameters.
- [MIDACO](https://en.wikipedia.org/wiki/MIDACO "MIDACO") a lightweight software tool for single- and multi-objective [optimization](https://en.wikipedia.org/wiki/Mathematical_optimization "Mathematical optimization") based on [evolutionary computing](https://en.wikipedia.org/wiki/Evolutionary_computation "Evolutionary computation"). Written in C/C++ and Fortran with gateways to Excel, VBA, Java, Python, Matlab, Octave, R, C#, and Julia.
- [Mathematica](https://en.wikipedia.org/wiki/Wolfram_Mathematica "Wolfram Mathematica") – large-scale multivariate constrained and unconstrained, linear, quadratic and nonlinear, continuous, and integer optimization.
- [ModelCenter](https://en.wikipedia.org/wiki/ModelCenter "ModelCenter") – a graphical environment for integration, automation, and design optimization.
- [MOSEK](https://en.wikipedia.org/wiki/MOSEK "MOSEK") – linear, quadratic, conic and convex nonlinear, continuous, and integer optimization.
- [NAG](https://en.wikipedia.org/wiki/NAG_Numerical_Library "NAG Numerical Library") – linear, quadratic, nonlinear, sums of squares of linear or nonlinear functions; linear, sparse linear, nonlinear, bounded or no constraints; local and global optimizations; continuous or integer problems.
- [NMath](https://en.wikipedia.org/wiki/NMath "NMath") – linear, quadratic and nonlinear programming.
- [Octeract Engine](https://en.wikipedia.org/wiki/Octeract_Engine "Octeract Engine") – a [deterministic global optimization](https://en.wikipedia.org/wiki/Deterministic_global_optimization "Deterministic global optimization") MINLP solver. Plans exist for additional features.
- [OptimJ](https://en.wikipedia.org/wiki/OptimJ "OptimJ") – Java-based modelling language. Premium Edition includes support for Mosek and CPLEX solvers.
- [Optimus platform](https://en.wikipedia.org/wiki/Optimus_platform "Optimus platform") – a process integration and design optimization platform developed by Noesis Solutions.
- [optiSLang](https://en.wikipedia.org/wiki/OptiSLang "OptiSLang") – software for CAE-based sensitivity analysis, optimization, and robustness evaluation.
- [OptiStruct](https://en.wikipedia.org/wiki/OptiStruct "OptiStruct") – CAE technology for conceptual design synthesis and structural optimization.
- [OptQuest](https://en.wikipedia.org/wiki/OptQuest "OptQuest") – metaheuristics-based optimization plugin for simulation-based optimization in conjunction with discrete-event simulation software.
- [PottersWheel](https://en.wikipedia.org/wiki/PottersWheel "PottersWheel") – parameter estimation in ordinary differential equations (MATLAB toolbox, free for academic use).
- [SAS](https://en.wikipedia.org/wiki/SAS_\(software\) "SAS (software)") – a software suite developed by SAS Institute for advanced analytics (statistics, forecasting, machine learning, optimization, etc.), business intelligence, customer intelligence, data management, risk management, and many more.
- [SmartDO](https://en.wikipedia.org/wiki/SmartDO "SmartDO") – multidisciplinary global design optimization, specialized in computer-aided engineering (CAE). using the direct global search approaches.
- [SNOPT](https://en.wikipedia.org/wiki/SNOPT "SNOPT") – large-scale optimization problems.
- [The Unscrambler](https://en.wikipedia.org/wiki/The_Unscrambler "The Unscrambler") – product formulation and process optimization software.
- [TOMLAB](https://en.wikipedia.org/wiki/TOMLAB "TOMLAB") – supports global optimization, integer programming, all types of least squares, linear, quadratic, and unconstrained programming for [MATLAB](https://en.wikipedia.org/wiki/MATLAB "MATLAB"). TOMLAB supports solvers like [CPLEX](https://en.wikipedia.org/wiki/CPLEX "CPLEX"), [SNOPT](https://en.wikipedia.org/wiki/SNOPT "SNOPT"), [KNITRO](https://en.wikipedia.org/wiki/Artelys_Knitro "Artelys Knitro") and [MIDACO](https://en.wikipedia.org/wiki/MIDACO "MIDACO").
- [VisSim](https://en.wikipedia.org/wiki/VisSim "VisSim") – a visual [block diagram](https://en.wikipedia.org/wiki/Block_diagram "Block diagram") language for simulation and optimization of [dynamical systems](https://en.wikipedia.org/wiki/Dynamical_system "Dynamical system").
- [WORHP](https://en.wikipedia.org/wiki/WORHP "WORHP") – a large-scale sparse solver for continuous nonlinear optimization.



## Ref
