# Invariant Synthesis

[TOC]



## Res
### Related Topics
↗ [Program Synthesis & Code Generation](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Transformation%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/3️⃣%20Backend%20-%20Programming%20Language%20Synthesis/Program%20Synthesis%20&%20Code%20Generation/Program%20Synthesis%20&%20Code%20Generation.md)
↗ [Counterexample-Guided Inductive Synthesis (CEGIS)](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Transformation%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/3️⃣%20Backend%20-%20Programming%20Language%20Synthesis/Program%20Synthesis%20&%20Code%20Generation/Counterexample-Guided%20Inductive%20Synthesis%20(CEGIS)/Counterexample-Guided%20Inductive%20Synthesis%20(CEGIS).md)


### Other Resources



## Intro



## Ref
Google AI Search:

Core Technologies for Invariant Synthesis

Engineers and researchers use three primary paradigms to automatically generate these properties:
1. Inductive Logic & Constraint-Based Synthesis (The SMT Approach)
This technique turns the search for an invariant into a math puzzle for an SMT solver (like Z3).
- **Template Matching:** The user or tool defines a skeletal math formula (e.g., ax + by ≤ c).
- **Constraint Generation:** The tool converts the program's loop transitions into logical constraints using the template.
- **Solving:** An SMT solver calculates the exact values for the coefficients (a, b, and c) that satisfy the program's safety requirements.

2. Abstract Interpretation & Data-Flow Analysis (The Static Approach)
Instead of guessing, this method mathematically over-approximates what a loop can do by executing it over an "abstract domain" (like intervals or polyhedra).
- **Widening:** If a loop counts upwards (1, 2, 3...), abstract interpretation accelerates this to infinity $[1, \infty)$ to find a stable bounding property instantly.
- **Tools:** Standard frameworks like **Astrée** or **IKOS** use this to find runtime invariants and prove the absence of buffer overflows.

3. Data-Driven & Machine Learning Synthesis (The Modern Approach)
Traditional engines struggle with complex, non-linear math (e.g., loops containing multiplication or bitwise operations). Modern techniques treat invariant synthesis as a learning problem:
- **ICE Learning Framework:** An algorithm learns invariants from **I**nductive samples (execution traces), **C**ounterexamples (failed proofs), and **E**xamples of safe states.
- **LLM Verification Loops:** Large Language Models draft candidate invariants based on the code's natural language comments and variable names. If an ATP tool like Z3 or a verification tool like SeaHorn rejects the candidate with a counterexample, the LLM reads the counterexample trace and mutates the invariant until it is mathematically sound.
