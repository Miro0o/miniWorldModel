# Function & Mapping of Set

[TOC]



## Res
### Related Topics
↗ [Analytical Mathematics](../../../Analytical%20Mathematics/Analytical%20Mathematics.md)

↗ [Sequence of Number](../../../Analytical%20Mathematics/Sequence%20of%20Number%20&%20Functions%20Basics/Sequence%20of%20Number.md)
↗ [Limits & Continuity of Functions](../../../Analytical%20Mathematics/Sequence%20of%20Number%20&%20Functions%20Basics/Limits%20&%20Continuity%20of%20Functions.md)


### Learning Resources



## Intro
![computing.excalidraw | 800](../../../../../Assets/Illustrations/Computer%20Science%20Philosophy/computing.excalidraw.md)


### Formal Definition: Functions
>  📖 Introduction to the Theory of Computation, 3rd edition, by Michael Sipser

**Functions** are central to mathematics. A function is an object that sets up an *input–output relationship*. A function takes an input and produces an output. In every function, the same input always produces the same output. If f is a function whose output value is b when the input value is a, we write $$f(a) = b.$$
A function also is called a **mapping**, and, if $f(a) = b$, we say that $f$ maps $a$ to $b$.

For example, the absolute value function $abs$ takes a number $x$ as input and returns $x$ if $x$ is positive and $−x$ if $x$ is negative. Thus $abs(2) = abs(−2) =2$. Addition is another example of a function, written $add$. The input to the addition function is an ordered pair of numbers, and the output is the sum of those numbers.

The set of possible inputs to the function is called its **domain**. The outputs of a function come from a set called its **range**. The notation for saying that $f$ is a function with domain $D$ and range $R$ is $$f: D \to R.$$
In the case of the function $abs$, if we are working with integers, the domain and the range are $Z$, so we write $abs: Z \to Z$. In the case of the addition function for integers, the domain is the set of pairs of integers $Z\times Z$ and the range is $Z$, so we write $add: Z \times Z \to Z$. Note that a function may not necessarily use all the elements of the specified range. The function $abs$ never takes on the value $−1$ even though $−1 \in Z$. A function that does use all the elements of the range is said to be **onto** the range (满射).

We may describe a specific function in several ways. One way is with a procedure for computing an output from a specified input. Another way is with a table that lists all possible inputs and gives the output for each input.

When the domain of a function $f$ is $A_1 \times ··· \times A_k$ for some sets $A_1$, ..., $A_k$ , the input to $f$ is a k-tuple $(a_1, a_2, ..., a_k)$ and we call the ai the arguments to $f$. A function with $k$ arguments is called a **k-ary function**, and $k$ is called the **arity** of the function. If $k$ is 1, $f$ has a single argument and $f$ is called a **unary function**. If $k$ is 2, $f$ is a $binary function$. Certain familiar binary functions are written in a special **infix notation**, with the symbol for the function placed between its two arguments, rather than in **prefix notation**, with the symbol preceding. For example, the addition function $add$ usually is written in infix notation with the symbol between its two arguments as in $a + b$ instead of in prefix notation $add(a, b)$.



## Ref
