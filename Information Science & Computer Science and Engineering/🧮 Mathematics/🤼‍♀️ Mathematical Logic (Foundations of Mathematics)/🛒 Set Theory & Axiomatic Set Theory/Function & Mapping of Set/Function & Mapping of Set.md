# Function & Mapping of Set

[TOC]



## Res
### Related Topics
↗ [Mathematical Analysis (& Analytical Mathematics)](../../../🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/Mathematical%20Analysis%20(&%20Analytical%20Mathematics).md)
- ↗ [Number Sequence](../../../🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/Number%20Sequence,%20Series,%20and%20Basic%20Properties%20of%20Function/Number%20Sequence.md)
- ↗ [Limits & Continuity of Functions](../../../🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/Number%20Sequence,%20Series,%20and%20Basic%20Properties%20of%20Function/Limits%20&%20Continuity%20of%20Functions.md)

↗ [Computability (Recursion) Theory - Turing Machine and R.E. Language](../../😶‍🌫️%20Theory%20of%20Computation/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language.md)
↗ [Computer Languages & Programming Methodology](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Computer%20Languages%20&%20Programming%20Methodology.md)
- ↗ [Programming Language Theory (PLT)](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Programming%20Language%20Theory%20(PLT).md)


### Learning Resources


### Other Resources



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



## Properties /Types of Function
### Partial Function vs Total Function
> 🔗 https://thzt.github.io/2017/03/06/recursive-function-4/

**部分函数 (Partial Function)**
如果 $f$ 是从 $A$ 到 $B$ 的二元关系，且 $\forall a \in A, f(a) = \emptyset$ 或 $\{b\}$，则称 $f$ 是从 $A$ 到 $B$ 的**部分函数**，或 $A$ 上的部分函数。
![](../../../../../Assets/Pics/Pasted%20image%2020260113004114.png)
其中：
* 如果 $f(a) = \{b\}$，则称 $f(a)$ 有定义，记为 $f(a) \downarrow$。也称 $b$ 为 $f$ 在 $a$ 点的函数值，记为 $f(a) = b$。
* 如果 $f(a) = \emptyset$，则称 $f(a)$ 无定义，记为 $f(a) \uparrow$。


**全函数 (Total Function)**
如果 $\forall a \in A$ 都有 $f(a) \downarrow$，则称 $f$ 是 $A$ 上的**全函数**。
此时，可以记为 $f : A \to B$。
![](../../../../../Assets/Pics/Pasted%20image%2020260113004135.png)

> [!NOTE] 
> 可见，我们熟悉的“函数”，指的就是**全函数**。
> 值得注意的是，部分函数的定义已经包含了我们学过的“函数”的定义。
> 后文中，我们提到的“函数”如果不强调它的完全性的话，都泛指部分函数。


### Non-termination & Terminated Function
> 🔗 https://thzt.github.io/2017/03/06/recursive-function-4/

部分函数在计算机科学中是非常重要的，因为对于每一个 $a \in A$，一个算法可以表示为，计算出集合 $B$ 中与之对应元素的过程。这个算法可能对于某些 $a \in A$ 不会终止，而这种情况是很常见的。

例如：
```haskell
f :: Int -> Int
f 1 = 1
f n = n + f(n-2)
```

这样定义的函数 $f$，对应了数学上的一个部分函数 $f$，它只在某些情况下有意义。只有当 `n` 是奇数时，我们才能得到终止性的结果。而当 `n` 是偶数时，算法会无限的递归下去，直到堆栈溢出。

因此，将 `Int` 解释为整数集 $N$，将 `f :: Int -> Int` 解释为整数集上的函数，似乎是有问题的。因为，$f(2)$ 并不是一个整数，它的计算不能终止。

为了描述非终止性，就需要对整数集进行扩充，我们给整数集加上一个特殊元素 “$\perp$”，称为 **bottom**，来表示非终止性，而将 `f :: Int -> Int` 解释为集合 $N \cup \{\perp\}$ 上的一个数学函数。

像这种通过构造表达程序含义的数学对象，来对程序进行分析的方法，来自**指称语义学**。
- ↗ [Denotational Semantics](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Formal%20Semantics%20and%20Programming%20Language/Denotational%20Semantics.md)

指称语义中，人们会区分函数的严格性。
- 一个函数称为严格的 (strict)，如果接受一个非终止的输入表达式，函数的计算仍然不会终止，即：$f(\perp) = \perp$
- 否则，称函数为不严格的 (non-strict)。


### Recursion & Recursive Function ⭐
> [!links]
> ↗ [Mathematics](../../../Mathematics.md) "proof by induction /well-founded induction"
> ↗ [Computability (Recursion) Theory - Turing Machine and R.E. Language](../../😶‍🌫️%20Theory%20of%20Computation/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language.md)
> ↗ [Number Sequence](../../../🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/Number%20Sequence,%20Series,%20and%20Basic%20Properties%20of%20Function/Number%20Sequence.md)

> 🔗 https://thzt.github.io/2017/03/06/recursive-function-4/

我们看到在程序中使用递归，可能会导致非终止性的计算，而有些递归又不会。
这是为什么呢？

我们可以从递归函数论中找到一些线索。==递归函数论是和图灵机以及$λ$演算相等价的计算模型，它从另一个角度刻画了可计算性。== 可计算性是一个有趣的话题，后续文章中，我们会详细讨论。

==在递归函数论中，人们把函数划分为了3个层次：==
- 原始递归函数，
- 递归函数，
- 和其他的不能用递归函数表示的“函数”。

这些函数集合的范围越来越大。

↗ [Computability (Recursion) Theory - Turing Machine and R.E. Language](../../😶‍🌫️%20Theory%20of%20Computation/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language.md)


### Arithmetic Function (数论函数)
↗ [Elementary Theory of Numbers](../../../🧊%20Algebra/Elementary%20Theory%20of%20Numbers/Elementary%20Theory%20of%20Numbers.md)
↗ [Number-Theoretic Function (Arithmetic Function)](../../../🧊%20Algebra/Elementary%20Theory%20of%20Numbers/0x02%20Number-Theoretic%20Function%20(Arithmetic%20Function)/Number-Theoretic%20Function%20(Arithmetic%20Function).md)

> 🔗 https://thzt.github.io/2017/03/09/recursive-function-5/


### Continuity & Continuous Function
↗ [Partial Order & Total Order (Linear Order) & Well-Order](../👬%20Relation%20&%20Order%20Theory/Partial%20Order%20&%20Total%20Order%20(Linear%20Order)%20&%20Well-Order/Partial%20Order%20&%20Total%20Order%20(Linear%20Order)%20&%20Well-Order.md)
↗ [Limits & Continuity of Functions](../../../🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/Number%20Sequence,%20Series,%20and%20Basic%20Properties%20of%20Function/Limits%20&%20Continuity%20of%20Functions.md)


### Differentiable Function & Integrable Function
↗ [Differential Calculus & Derivative of Function](../../../🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/Differential%20Calculus%20&%20Derivative%20of%20Function/Differential%20Calculus%20&%20Derivative%20of%20Function.md)

↗ [Definite Integral](../../../🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/Integral%20of%20Function/Definite%20Integral.md)
↗ [Indefinite Integral](../../../🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/Integral%20of%20Function/Indefinite%20Integral.md)



## Ref
