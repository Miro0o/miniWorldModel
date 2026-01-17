# Symbolic Execution & Concolic Execution

[TOC]



## Res
### Related Topics
↗ [Symbolic and Algebraic Manipulation](../../../../../../../🧠%20Computing%20Methodologies/Symbolic%20and%20Algebraic%20Manipulation/Symbolic%20and%20Algebraic%20Manipulation.md)
↗ [Logic And Mechanized (Formal) Reasoning](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/Logic%20And%20Mechanized%20(Formal)%20Reasoning.md)

↗ [Formal Methods & Formal Verification (FV)](../../🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/Formal%20Methods%20&%20Formal%20Verification%20(FV).md)
↗ [Constraint Solving & Theorem Proving](../../🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/Constraint%20Solving%20&%20Theorem%20Proving/Constraint%20Solving%20&%20Theorem%20Proving.md)
↗ [Constraint-Based Analysis & Control Flow Analysis](../../👚%20SCA%20(Static%20Code%20Analysis)%20&%20SAST/Constraint-Based%20Analysis%20&%20Control%20Flow%20Analysis/Constraint-Based%20Analysis%20&%20Control%20Flow%20Analysis.md)

↗ [Symbolic Execution & Constrain Solvers (Proof Assistants)](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Symbolic%20Execution%20&%20Constrain%20Solvers%20(Proof%20Assistants)/Symbolic%20Execution%20&%20Constrain%20Solvers%20(Proof%20Assistants).md)
- ↗ [SAT (Boolean Satisfiability Problem) Solvers](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Symbolic%20Execution%20&%20Constrain%20Solvers%20(Proof%20Assistants)/SAT%20(Boolean%20Satisfiability%20Problem)%20Solvers/SAT%20(Boolean%20Satisfiability%20Problem)%20Solvers.md)
- ↗ [SMT (Satisfiability Modulo Theory) Solvers](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Symbolic%20Execution%20&%20Constrain%20Solvers%20(Proof%20Assistants)/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers.md)
	- ↗ [Z3 Theorem Prover](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Symbolic%20Execution%20&%20Constrain%20Solvers%20(Proof%20Assistants)/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers/Z3%20Theorem%20Prover.md)
	- ↗ [cvc5 (Cooperating Validity Checker)](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Symbolic%20Execution%20&%20Constrain%20Solvers%20(Proof%20Assistants)/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers/cvc5%20(Cooperating%20Validity%20Checker).md)
- ↗ [Automated & Generic Theorem Provers](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Symbolic%20Execution%20&%20Constrain%20Solvers%20(Proof%20Assistants)/Automated%20&%20Generic%20Theorem%20Provers/Automated%20&%20Generic%20Theorem%20Provers.md)
	- ↗ [Isabelle](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Symbolic%20Execution%20&%20Constrain%20Solvers%20(Proof%20Assistants)/Automated%20&%20Generic%20Theorem%20Provers/Isabelle.md)
	- ↗ [Rocq Prover (Formerly Coq)](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Symbolic%20Execution%20&%20Constrain%20Solvers%20(Proof%20Assistants)/Automated%20&%20Generic%20Theorem%20Provers/Rocq%20Prover%20(Formerly%20Coq).md)
↗ [angr](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Symbolic%20Execution%20&%20Constrain%20Solvers%20(Proof%20Assistants)/angr.md)
↗ [SymCC](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Symbolic%20Execution%20&%20Constrain%20Solvers%20(Proof%20Assistants)/SymCC.md)
↗ [SymQemu](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Symbolic%20Execution%20&%20Constrain%20Solvers%20(Proof%20Assistants)/SymQemu.md)


### Other Resources
https://docs.angr.io/en/latest/core-concepts/index.html
↗ [angr](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Symbolic%20Execution%20&%20Constrain%20Solvers%20(Proof%20Assistants)/angr.md) documentation. explains core concepts in symbolic execution.
- [Core Concepts](https://docs.angr.io/en/latest/core-concepts/toplevel.html)
- [Loading a Binary](https://docs.angr.io/en/latest/core-concepts/loading.html)
- [Symbolic Expressions and Constraint Solving](https://docs.angr.io/en/latest/core-concepts/solver.html#)
- [Machine State - memory, registers, and so on](https://docs.angr.io/en/latest/core-concepts/states.html)
- [Simulation Managers](https://docs.angr.io/en/latest/core-concepts/pathgroups.html)
- [Simulation and Instrumentation](https://docs.angr.io/en/latest/core-concepts/simulation.html)
- [Analyses](https://docs.angr.io/en/latest/core-concepts/analyses.html)
- [Symbolic Execution](https://docs.angr.io/en/latest/core-concepts/symbolic.html)
- [A final word of advice](https://docs.angr.io/en/latest/core-concepts/be_creative.html)

https://jfmc.github.io/z3-play/



## Intro
### Satisfiability Problem & SMT Solving 
> For satisfiability problem:
> ↗ [Formal System, Formal Logics, and Its Semantics](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics.md)
> ↗ [Zeroth-Order Logic & Propositional Logic - (零阶) 命题逻辑](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/Classical%20Logic%20(Standard%20Formal%20Logic)/Zeroth-Order%20Logic%20&%20Propositional%20Logic%20-%20(零阶)%20命题逻辑.md)
> ↗ [(Formal) Model Checking](../../🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/(Formal)%20Model%20Checking/(Formal)%20Model%20Checking.md)

> For SMT solving:
> ↗ [SMT (Satisfiability Modulo Theory) Solvers](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Symbolic%20Execution%20&%20Constrain%20Solvers%20(Proof%20Assistants)/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers.md)
> ↗ [Z3 Theorem Prover](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Symbolic%20Execution%20&%20Constrain%20Solvers%20(Proof%20Assistants)/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers/Z3%20Theorem%20Prover.md)

> 🔗 https://courses.compute.dtu.dk/02242/topics/concolic-execution.html

The most revolutionary technology in the field of program analysis, in my opinion, is the ability to routinely and effectively solve NP-hard problems.

SMT stands for _satisfiability modulo theories_, and is essentially a solver of mathematical equations. And, since most of program analysis is essentially solving equations, this is a total game changer for our field.


---
**SMT Solving Example - Basic Concepts**
Let us solve the first equation we can: $$\begin{aligned}& ϕ_1=(A∨¬B)∧C \\
& ϕ_2=(¬A∨B)∧(A∨C)∧(B∨¬C)\end{aligned}$$
Navigate to [Z3 Playground](https://jfmc.github.io/z3-play) and type the equivalent SMTLIB statment in the textbox:

```txt
(declare-const a Bool)
(declare-const b Bool)
(declare-const c Bool)

(assert (and (or a (not b)) (not c)))
(assert (and (or (not a) b) (or a c) (or b (not c))))

(check-sat)
(get-model)
```

The check that the resulting model makes sense to you.

---


When using a SMT solver you have to do 3 steps,
- Encode your problem as a proposition that the SMT solver can check.
- Run the SMT solver, by checking if the proposition is satisfied.
- If that is true, then a model (a truth assignment) is found, you should now turn that back into a (counter -) solution the user can understand.

While this seems simple, we often tend to over complicate the problem, making it hard for the SMT solver to check, or we get some subtle details of the problem work. It is paramount that we are precise when we defined our proposition.

Some of this hazel is solved by libraries, like ↗ [Z3 Theorem Prover](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Symbolic%20Execution%20&%20Constrain%20Solvers%20(Proof%20Assistants)/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers/Z3%20Theorem%20Prover.md).


---
**SMT Solving Example - Programming using Z3**

N-Queens Problem - Exercise taken from [CSC410](https://www.cs.toronto.edu/~victorn/tutorials/z3/SAT.html)

Your goal is to solve the N-Queens problem. Given an N x N chessboard, place N queens so than none can take each other. There are three rules
1. There must be exactly one queen on each row,
2. There must be exactly one queen on each column, and
3. There can be no more than one queen on each diagonal.

First try to solve the 4-Queens problem, using your bindings to Z3. Some small hints:
- Make a boolean for whether or not each square contains a queen: `Qa1`, `Qa2`,...
- Write up logical constraints for the rules above using those booleans

```Python
import z3
import itertools


def at_most_one(props):
    conditions = []
    for p, q in itertools.permutations(props, 2):
        conditions.append(z3.Or(z3.Not(p), z3.Not(q)))
    return z3.And(*conditions)


columns = "abcd"
rows = "1234"

# Create a boolean for each possible queen location.
queen_on_square = [[z3.Bool(f"Q{c}{r}") for c in columns] for r in rows]
s = z3.Solver()

# There need to be exactly one queen per row.
for ir, r in enumerate(rows):
    row = [queen_on_square[ic][ir] for ic, c in enumerate(columns)]
    s.add(z3.Or(*row))
    s.add(at_most_one(row))

# There can be at most one queen per column.
for ic, c in enumerate(columns):
    column = [queen_on_square[ic][ir] for ir, r in enumerate(rows)]
    s.add(at_most_one(column))

# There can be no more than one queen per diagonal.
prim, secd = [[] for r in row * 2], [[] for c in column * 2]
for ir, r in enumerate(rows):
    for ic, c in enumerate(columns):
        # primary diagonals are constant over subtraction
        prim[ir - ic].append(queen_on_square[ic][ir])
        # secondary diagonals are constant over summation
        secd[ir + ic].append(queen_on_square[ic][ir])

for diag in prim + secd:
    s.add(at_most_one(diag))

# This is kind of an ugly hack.
assert str(s.check()) == "sat"

model = s.model()

for ir, r in reversed(list(enumerate(rows))):
    print(f" {r} ", end="")
    for ic, c in enumerate(columns):
        is_black = (ir + ic) % 2 == 0
        if is_black:
            print("\033[40m\033[37m ", end="")  # ]]
        else:
            print("\033[47m\033[30m ", end="")  # ]]
        has_queen = bool(model[queen_on_square[ic][ir]])
        print("♛" if has_queen else " ", end="")
        print(" \033[0m", end="")  # ]
    print()
print(f"    {'  '.join(columns)}")
```

---



## Symbolic Execution
> 🔗 [Symbolic execution - Wikipedia](https://en.wikipedia.org/wiki/Symbolic_execution)
> 🔗 [Introducing Symbolic Execution - YouTube](https://www.youtube.com/watch?v=cjNTsCqbf5k)
> 🔗 [6.858 Fall 2014 Lecture 10: Symbolic execution - YouTube](https://www.youtube.com/watch?v=mffhPgsl8Ws)

The advent of SMT solvers suddenly made a new kind of analysis possible, called _Symbolic Execution_.

> 🔗 https://docs.angr.io/en/latest/core-concepts/symbolic.html

Symbolic execution is a program analysis technique used to **explore multiple execution paths of a program simultaneously**. Unlike normal execution, which runs the program with specific inputs, symbolic execution treats inputs as **symbolic variables** rather than concrete values. This means the execution can represent a wide range of inputs with **symbolic expressions**. Symbolic execution allows, at a time in emulation, to determine for a branch all conditions necessary to take a branch or not. Every variable is represented as a **symbolic value**, and each branch as a **constraint**. ==Thus, symbolic execution allows us to see which conditions allow the program to go from point A to point B by resolving these constraints. ==The **execution paths** are then analyzed by **solving constraint**s generated by these symbolic expressions, allowing the discovery of bugs and vulnerabilities that might be missed in standard testing.


**Example**
> 🔗 https://docs.angr.io/en/latest/core-concepts/symbolic.html#example

Consider the following simple program :

``` c
const char* check_value(int x) {
    if (x > 10) {
        return "Greater";
    } else {
        return "Lesser or Equal";
    }
}
```

In normal execution, if `x` is set to 5, the program will follow the path where `x <= 10` and return “Lesser or Equal”. In symbolic execution, `x` is treated as a symbolic variable, `X`. The execution engine explores both paths:

> - Path 1: `X > 10` leading to the result “Greater”
> - Path 2: `X <= 10` leading to the result “Lesser or Equal”

Constraints for both paths are generated and solved to understand all possible behaviors of the program.

In software verification, it helps ensure that the code behaves as expected across all possible inputs and states. For security analysis, symbolic execution can uncover vulnerabilities such as input validation errors, which could be exploited by attackers. Additionally, in automated testing, it aids in generating comprehensive test cases that cover edge cases and rare execution paths, enhancing the robustness and security of software systems. Overall, symbolic execution provides a powerful means to rigorously analyze and improve software and firmware reliability.


### Symbolic Execution Components
#### Symbolic Values
> 🔗 https://courses.compute.dtu.dk/02242/topics/concolic-execution.html#sec:symbolic-execution

 Instead of running the program with concrete values, this technique builds up symbolic values. A symbolic value is a value which can contain formulas over input symbols. This is clearly very useful when analysing programs:

```java
int incr(int a) { 
  int x = a;        // x := a
  x += 1;           // x := a + 1
  x += 3;           // x := a + 1 + 3 = a + 4
  return x;         // return (a + 4)
}
```

In the example above, we do a simple symbolic execution to see that the program is in fact just adding 4 to the input. This would have been very hard to detect using regular testing and even with some kinds of static analysis.

> 🔗 https://courses.compute.dtu.dk/02242/topics/concolic-execution.html#sec:2.1

As mentioned above, a symbolic value is a formulae explaining how to calculate a value from inputs. We use symbols to indicate an input. $$\begin{aligned}s_1,s_2\in𝐒𝐲𝐦𝐕𝐚𝐥 & \ := \ v & – \text{ a symbol} \\
& | \ s_1+s_2 & – \text{ operations on the symbols} \\
& | \ … & – \text{ and so on}\end{aligned}$$
You can consider symbolic values as very simple programs or expressions, which are easy to do further analysis on.

For example, assuming the input $i$ is 42, then the concrete value of $i+2−10$ is 34, while the symbolic value is $i−8$. We can use z3 to simplify symbolic values for us using the `z3.simplify` command.

```Python
>>> import z3
>>> i = z3.Int("i")
>>> e = i + 2 - 10
>>> print(e)
i + 2 - 10 
>>> print(z3.simplify(e))
-8 + i 
```

This is very useful as for loops can add a lot of ($(x+1)+1)+1$ to your symbolic expressions:

```Python
>>> i = z3.Int("i")
>>> for r in range(10):
...     i = i + 1
... 
>>> print(i)
i + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1

>>> i = z3.Int("i")
>>> for r in range(10):
...     i = z3.simplify(i + 1)
... 
>>> print(i)
10 + i
```
#### Branches & Path Constraints
> 🔗 https://courses.compute.dtu.dk/02242/topics/concolic-execution.html#sec:2.2

When analysing real program we quickly face a problem, executions have context. If we first check if a variable $x$ is less than 10, and it is true then we know that in this branch $x<10$. This is called a path constraint, as individual values does not hold this information, but the full context of the path does. We can denote a symbolic execution like $ψ⊢σ$, where $ψ$ is the path constraints and $σ$ is the symbolic state, which is often a mapping from variables to symbolic values.

The procedure is illustrated by the following program:

```java
int incr(int a) { 
  int x = a;          // []                    |- x := a
  if (x > 10) {       // [a > 10]              |- x := a
    x =+ 1;           // [a > 10]              |- x := a + 1
    if (x < 10)       // [a > 10, a + 1 < 10]  |- UNSAT
      assert false;   // never executed
  }
  return x;           // returns [ a  > 10 |- a + 1 
                      //         , a <= 10 |- a      ]
}
```

When we get to the second branch, we need to figure out if we would enter it and raise an assertion error. Since we already know that $a>10$, we can see that that $¬(x<10)$, when $x=a+1$. This what we use our SMT solver for. In Python, we can use z3 to build up symbolic values, add the path constrains as context and then check if the current branch is satisfiable.

```Python
>>> import z3
>>> a = z3.Ints("a")[0]
>>> s = z3.Solver()
>>> path = []

>>> x = a
>>> path.append(x > 10)
>>> print(path, s.check(path), s.model())
[a > 10] sat [a = 11]

>>> x += 1
>>> print(x) 
a + 1
>>> path.add(x < 10)
>>> print(path, s.check(path))
[a > 10, a + 1 < 10] unsat 
```

After iterating over all branches of the program to some depth, we get that the program can be described using two paths: $a>10⊢a+1$ and $a≤10⊢a$. This means that we can re-implement the program like this equivalent and much simpler program:

```Java
int incr(int a) {
  if (a > 10) return a + 1;
  if (a <= 10) return a;
}
```


### Symbolic Expressions and Constraint Solving
> 🔗 https://docs.angr.io/en/latest/core-concepts/symbolic.html

The power of symbolic execution didn't come with the emulation, but with the ability to execute what is known as the **symbolic variables**. Instead of saying that a (symbolic) variable has a _concrete_ numerical value, we can say that it holds a _symbol_, effectively just a name. Then, performing arithmetic operations with that symbol/variable will yield a tree of operations (termed an _abstract syntax tree_ or _↗ [AST & CST (Abstract & Contrete Syntax Tree)](../../../../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Processing%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/1️⃣%20Frontend%20-%20Programming%20Language%20Analysis/Syntactic%20Analysis%20(Parsing)/AST%20&%20CST%20(Abstract%20&%20Contrete%20Syntax%20Tree).md)_, from compiler theory). ASTs can be translated into **constraints** for _↗ [SMT (Satisfiability Modulo Theory) Solvers](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Symbolic%20Execution%20&%20Constrain%20Solvers%20(Proof%20Assistants)/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers.md)_, like z3, in order to ask questions like “given the output of this sequence of operations, what must the input have been?”. This latter process is known for ↗ [Constraint Solving & Theorem Proving](../../🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/Constraint%20Solving%20&%20Theorem%20Proving/Constraint%20Solving%20&%20Theorem%20Proving.md).

> 🔗 https://courses.compute.dtu.dk/02242/topics/concolic-execution.html#sec:2.3

We can implement symbolic execution to depth n, like the following Python pseudo-code. The fundamental idea is to do a depth-first search through the program down to depth n. To do this we maintain a stack of paths. A path contains the next instruction to execute, a state, the path constraint, and the depth of current path.

```Python
stack : list[tuple[PC, SymState, SymPath, MaxDepth]]
```

Below, we'll assume a stepping function over symbolic states:

```Python
def step(pc: PC, state: SymState) 
  -> Iterable[PC, SymState, SymPath]]: ...
```

When analysing the program, we pop the top of the stack, and then compute the steps from there. We then add a new stack entry containing all the branches that have satisfiable path constraints. We pop a stack entry when there is no more branches in it, and then end when the stack is empty.

```Python
def analyse(pc : PC, inputs : list[tuple[str, JvmType]], max_depth : int):
  # assuming only integers, create symbolic vars for all input
  locals = z3.Ints(" ".join(i_name for i_name, _ in inputs))
  # create state.
  state = SymState.from_locals(locals)

  # Create a stack to do depth first search with.
  stack : list[tuple[PC, SymState, SymPath]] = [(pc, state, [])]

  # As long as the stack is not empty
  while stack:
    # pop the end of the stack
    (pc, state, path, n) = stack.pop(-1)

    # Check if state does something we want to warn the user about.
    if interesting(state):
      return "found interesting state"

    # otherwise create the list of next branches 
    for (pc, state_, pathc) in step(pc, state):
        # add new path constraints to the path
        path_ = path + pathc

        # check if path is reachable
        if str(z3.check(path_)) != "sat": 
          continue

        # append stack if within limits
        if n < max_depth:
          stack.append((pc, state_, path_, n + 1))

  return f"all is fine, uptil depth {max_depth}"
```


### Limitations of Symbolic Execution
> 🔗 https://courses.compute.dtu.dk/02242/topics/concolic-execution.html#sec:2.4

One big flaw in symbolic execution is that you have to be able to create a symbolic expression over the entire program. This can be problematic if we use builtin methods like `malloc`, one-way-functions like hashing or string manipulation methods (which are notoriously hard to model in SMT solvers).

Another big problem is memory aliasing and arrays. Since we can only access the arrays with concrete values we don't know what an access is pointing to.



## Concolic Execution (Dynamic Symbolic Execution)
> 🔗 [Godefroid (2005)](https://courses.compute.dtu.dk/02242/topics/concolic-execution.html#ref:godefroid2005dart)
> 🔗 [Sen (2005)](https://courses.compute.dtu.dk/02242/topics/concolic-execution.html#ref:sen2005cute)

> 🔗 https://en.wikipedia.org/wiki/Concolic_testing

**Concolic testing** (a [portmanteau](https://en.wikipedia.org/wiki/Portmanteau "Portmanteau") of _concrete_ and _symbolic_, also known as **dynamic symbolic execution**) is a hybrid [software verification](https://en.wikipedia.org/wiki/Software_verification "Software verification") technique that performs [symbolic execution](https://en.wikipedia.org/wiki/Symbolic_execution "Symbolic execution"), a classical technique that treats program variables as symbolic variables, along a _concrete execution_ ([testing](https://en.wikipedia.org/wiki/Software_testing "Software testing") on particular inputs) path. Symbolic execution is used in conjunction with an [automated theorem prover](https://en.wikipedia.org/wiki/Automated_theorem_prover "Automated theorem prover") or constraint solver based on [constraint logic programming](https://en.wikipedia.org/wiki/Constraint_logic_programming "Constraint logic programming") to generate new concrete inputs (test cases) with the aim of maximizing [code coverage](https://en.wikipedia.org/wiki/Code_coverage "Code coverage"). Its main focus is finding bugs in real-world software, rather than demonstrating program correctness.

A description and discussion of the concept was introduced in "DART: Directed Automated Random Testing" by Patrice Godefroid, Nils Klarlund, and Koushik Sen. The paper "CUTE: A concolic unit testing engine for C", by Koushik Sen, Darko Marinov, and [Gul Agha](https://en.wikipedia.org/wiki/Gul_Agha_\(computer_scientist\) "Gul Agha (computer scientist)"), further extended the idea to data structures, and first coined the term _concolic testing_. Another tool, called EGT (renamed to EXE and later improved and renamed to KLEE), based on similar ideas was independently developed by Cristian Cadar and [Dawson Engler](https://en.wikipedia.org/wiki/Dawson_Engler "Dawson Engler") in 2005, and published in 2005 and 2006. PathCrawler first proposed to perform symbolic execution along a concrete execution path, but unlike concolic testing PathCrawler does not simplify complex symbolic constraints using concrete values. These tools (DART and CUTE, EXE) applied concolic testing to unit testing of [C](https://en.wikipedia.org/wiki/C_programming_language "C programming language") programs and concolic testing was originally conceived as a [white box](https://en.wikipedia.org/wiki/White_box_\(software_engineering\) "White box (software engineering)") improvement upon established [random testing](https://en.wikipedia.org/wiki/Random_testing "Random testing") methodologies. The technique was later generalized to testing multithreaded [Java](https://en.wikipedia.org/wiki/Java_programming_language "Java programming language") programs with jCUTE, and unit testing programs from their executable codes (tool OSMOSE). It was also combined with [fuzz testing](https://en.wikipedia.org/wiki/Fuzz_testing "Fuzz testing") and extended to detect exploitable security issues in large-scale [x86](https://en.wikipedia.org/wiki/X86 "X86") binaries by [Microsoft Research](https://en.wikipedia.org/wiki/Microsoft_Research "Microsoft Research")'s SAGE.

The concolic approach is also applicable to [model checking](https://en.wikipedia.org/wiki/Model_checking "Model checking"). In a concolic model checker, the model checker traverses states of the model representing the software being checked, while storing both a concrete state and a symbolic state. The symbolic state is used for checking properties on the software, while the concrete state is used to avoid reaching unreachable states. One such tool is ExpliSAT by Sharon Barner, Cindy Eisner, Ziv Glazberg, [Daniel Kroening](https://en.wikipedia.org/wiki/Daniel_Kroening "Daniel Kroening") and Ishai Rabinovitz.

> 🔗 https://courses.compute.dtu.dk/02242/topics/concolic-execution.html#sec:3

One solution to the limitation above is to simulate the different builtin methods, however this mean we might over- or under-estimate the real behaviour of the code. The alternative solution is to additionally to the symbolic values also maintain the concrete values. By having a concrete value, we avoid having to simulate the builtin methods as we can simply use the concrete values instead. We might lose our symbolic value doing that, but it is better than giving up. This is concolic execution. Concolic is just the concatenation of the words Concrete and Symbolic.

To do concolic execution, we first run the program with a random and concrete input. For each concrete value we also keep the symbolic value. Every time we branch on a value, we emit the symbolic value as path constraint if the concrete value was true, else we emit the negated symbolic value.

When we are done we have a list of path constraints which we can use to generate new concrete inputs, that we can run the program with. We can see a single concolic run as a function from a program and a concrete input to a list of path constraints. $$concolic(P,i)=ψ_0,ψ_1,…,ψ_n$$

To get a new input, we can simply negate one of the path constraints: $$i'\in𝐬𝐨𝐥𝐯𝐞(ψ_0∧ψ_1∧…∧¬ψ_n)$$
Interestingly, we actually know that running $conclic(P,i')$ will produce a prefix of the same path constraints $ψ_0,ψ_1,…,¬ψ_n,ψ_{n+1},…,$ but might be extended, by new ones. This means, that if we keep track of which path constraints we have already negated (and have infinite time) we can do a depth first search through all possible paths of the program.


### Code Instrumentation
> ↗ [📌 Computer Profiling & System Visibility](../../../../../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/Linux%20Free%20Software%20&%20OSS%20(Open%20Source%20Software)/Host%20Management/📌%20Computer%20Profiling%20&%20System%20Visibility.md)
> ↗ [Code Instrumentation, System Visibility, & Computer Profiling](../🥁%20Code%20Instrumentation,%20System%20Visibility,%20&%20Computer%20Profiling/Code%20Instrumentation,%20System%20Visibility,%20&%20Computer%20Profiling.md)

> 🔗 https://courses.compute.dtu.dk/02242/topics/concolic-execution.html#sec:3.1

One big limitation of the dynamic techniques we have looked at so far is speed. Ideally, we would get all the information we needed while running the program instead of having to implement our own interpreter.

The way to get around this is by doing code instrumentation. Code instrumentation injects small instructions inside the code to track and trace what is happening.


> Using jvm2json
> Currently we do not support any straight forward ways to do bytecode instrumentation in this course.
> Jvm2json does allow you to create class files from jsonfiles by running it in reverse. The problem is just that we currently does not support computing the type information for changes withing the bytecode of the individual methods.
> To do concolic execution, you will have to instrument the code to keep track of the symbolic values of the entire memory, essentially keeping a shadow variable for each variable. And then update those accordingly. This is not trivial.



## Ref
[简单理解符号执行技术]: https://www.k0rz3n.com/2019/02/28/简单理解符号执行技术/

Wiki中的定义是：在计算机科学中，符号执行技术指的是通过程序分析的方法，**确定哪些输入向量会对应导致程序的执行结果为某个向量的方法**(绕)。通俗的说，如果把一个程序比作DOTA英雄，英雄的最终属性值为程序的输出（包括攻击力、防御力、血槽、蓝槽），英雄的武器出装为程序的输入（出A杖还是BKB）。那么符号执行技术的任务就是，给定了一个英雄的最终属性值，分析出该英雄可以通过哪些出装方式达到这种最终属性值效果。

可以发现，**符号执行技术是一种白盒的静态分析技术**。即，分析程序可能的输入需要能够获取到目标源代码的支持。**同时，它是静态的，因为并没有实际的执行程序本身，而是分析程序的执行路径**。如果把上述英雄的最终属性值替换成程序形成的bug状态，比如，存在数组越界复制的状态，那么，我们就能够利用此技术挖掘漏洞的输入向量了。

[🤔 Understanding SMT solvers: An Introduction to Z3]: https://de-engineer.github.io/SMT-Solvers/
This post was an overview of SMT solvers with the practical example of a CTF challenge and we also touched a bit on their limitations. I’m not an expert on the topic, I tried to cover all the introductory knowledge that I could put in without increasing the complexity of the blog. There is indeed far more to learn about and you can do so by checking all the links in the resources section.
- [Symbolic Execution Lecture from MIT](https://www.youtube.com/watch?v=yRVZPvHYHzw)
- [Symbolic Execution with Triton Engine](https://pwn.umasscybersec.org/lectures/index.html)
- [HexRays CTF solution with Z3](https://www.youtube.com/watch?v=kZd1Hi0ZBYc)
- [OST2 Course on Symbolic Analysis (teaches angr)](https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2+RE3201_symexec+2021_V1/course/)
- [Papers by Z3 team](https://z3prover.github.io/papers/)
- [The Path Explosion Problem in Symbolic Execution - Paper](https://studenttheses.uu.nl/bitstream/handle/20.500.12932/35856/thesis.pdf?sequence=1&isAllowed=y)

[Static analysis vs. symbolic execution in implementation | stackoverflow]: https://stackoverflow.com/a/40534830/16542494
