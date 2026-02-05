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

**Functions** are central to mathematics. ==A function is an object that sets up an *input–output relationship*.== A function takes an input and produces an output. In every function, the same input always produces the same output. If f is a function whose output value is b when the input value is a, we write $$f(a) = b.$$
A function also is called a **mapping**, and, if $f(a) = b$, we say that $f$ maps $a$ to $b$.

For example, the absolute value function $abs$ takes a number $x$ as input and returns $x$ if $x$ is positive and $−x$ if $x$ is negative. Thus $abs(2) = abs(−2) =2$. Addition is another example of a function, written $add$. The input to the addition function is an ordered pair of numbers, and the output is the sum of those numbers.

The set of possible inputs to the function is called its **domain**. The outputs of a function come from a set called its **range**. The notation for saying that $f$ is a function with domain $D$ and range $R$ is $$f: D \to R.$$
In the case of the function $abs$, if we are working with integers, the domain and the range are $Z$, so we write $abs: Z \to Z$. In the case of the addition function for integers, the domain is the set of pairs of integers $Z\times Z$ and the range is $Z$, so we write $add: Z \times Z \to Z$. Note that a function may not necessarily use all the elements of the specified range. The function $abs$ never takes on the value $−1$ even though $−1 \in Z$. A function that does use all the elements of the range is said to be **onto** the range (满射).

We may describe a specific function in several ways. One way is with a procedure for computing an output from a specified input. Another way is with a table that lists all possible inputs and gives the output for each input.

When the domain of a function $f$ is $A_1 \times ··· \times A_k$ for some sets $A_1$, ..., $A_k$ , the input to $f$ is a k-tuple $(a_1, a_2, ..., a_k)$ and we call the ai the arguments to $f$. A function with $k$ arguments is called a **k-ary function**, and $k$ is called the **arity** of the function. If $k$ is 1, $f$ has a single argument and $f$ is called a **unary function**. If $k$ is 2, $f$ is a $binary function$. Certain familiar binary functions are written in a special **infix notation**, with the symbol for the function placed between its two arguments, rather than in **prefix notation**, with the symbol preceding. For example, the addition function $add$ usually is written in infix notation with the symbol between its two arguments as in $a + b$ instead of in prefix notation $add(a, b)$.
#### Partial Function vs Total Function
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

部分函数在计算机科学中是非常重要的，因为对于每一个 $a \in A$，一个算法可以表示为，计算出集合 $B$ 中与之对应元素的过程。==这个算法可能对于某些 $a \in A$ 不会终止（non-termination），而这种情况是很常见的。==
#### One-Way Function
↗ [Cryptography](../../../../CyberSecurity/🚬%20Cryptology%20&%20Secure%20Communication/🤐%20Cryptography/Cryptography.md)
- ↗ [Message Digest & Hash Function (Integrity)](../../../../CyberSecurity/🚬%20Cryptology%20&%20Secure%20Communication/🤐%20Cryptography/Modern%20Cryptography/Cryptographic%20Techniques%20for%20Integrity%20&%20Authentication/Message%20Digest%20&%20Hash%20Function%20(Integrity)/Message%20Digest%20&%20Hash%20Function%20(Integrity).md)
- ↗ [Message Digest (Hash Function) Based Message Authentication](../../../../CyberSecurity/🚬%20Cryptology%20&%20Secure%20Communication/🤐%20Cryptography/Modern%20Cryptography/Cryptographic%20Techniques%20for%20Integrity%20&%20Authentication/Message%20Authentication%20(报文鉴别，消息鉴别)/Message%20Digest%20(Hash%20Function)%20Based%20Message%20Authentication/Message%20Digest%20(Hash%20Function)%20Based%20Message%20Authentication.md)

↗ [Elementary Theory of Numbers](../../../🧊%20Algebra/Elementary%20Theory%20of%20Numbers/Elementary%20Theory%20of%20Numbers.md)


### Equation (方程) & Constrains of Function
> [!link]
> ↗ [Computability (Recursion) Theory - Turing Machine and R.E. Language](../../😶‍🌫️%20Theory%20of%20Computation/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language.md)
> 
> ↗ [Operations Research (OR)](../../../🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Operations%20Research%20(OR).md)
> ↗ [Mathematical Optimization (Programming)](../../../🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Mathematical%20Optimization%20(Programming)/Mathematical%20Optimization%20(Programming).md)
> ↗ [Dynamic Programming (DP) & Multi-Objective Optimization](../../../../🔑%20CS%20Core/🧙‍♂️%20Algorithm%20&%20Data%20Structure/Classic%20Algorithms%20by%20Problems%20&%20Contexts/Dynamic%20Programming%20(DP)%20&%20Multi-Objective%20Optimization/Dynamic%20Programming%20(DP)%20&%20Multi-Objective%20Optimization.md)
> ↗ [Dynamic Programming (DP)](../../../🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Mathematical%20Optimization%20(Programming)/COP%20(Convex%20Optimization%20Programming)/Dynamic%20Programming%20(DP)/Dynamic%20Programming%20(DP).md)
> 
> ↗ [Haskell](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20for%20Specific%20Areas/Functional%20Programming%20Languages/Haskell/Haskell.md)

> 🔗 https://thzt.github.io/2017/03/14/recursive-function-7/

在中学时代，我们学过“方程”的概念，方程可以简单表述为含有未知数的等式，例如，$3x+3=2$。
未知数可以同时出现在等式的两边，例如，$2x+3=2−x$。通过合并同类项，我们可以求解$x$。

在大学时代，我们还学过线性方程组和微分方程，例如
- 求解矩阵的特征值和特征向量，$Av=λv$
- 二阶常微分方程（[贝塞尔方程](https://zh.wikipedia.org/wiki/%E8%B4%9D%E5%A1%9E%E5%B0%94%E5%87%BD%E6%95%B0)），$x^2y^{′′}+xy^′+(x^2−α^2)y=0$
- 在计算机科学中，同样的未知“数”的思想，还出现在了类型推导（例如[unification](https://en.wikipedia.org/wiki/Unification_\(computer_science)）与递归函数的定义中。

==以上这些例子，方程是“约束”的一种表现形式。==

我们回到最简单的阶乘函数`fact`的递归定义式，
```haskell
fact :: Int -> Int  
fact 1 = 1  
fact n = n * fact (n-1)
```

去掉语法糖，稍微修改一下，
```haskell
fact :: Int -> Int  
fact n = case n of   
  1 -> 1  
  n -> n * fact (n-1)
```

我们发现，`fact`的递归定义和“方程”十分相似，`fact`同时出现在了等式的两边，阶乘函数，就是这个“方程”的“解”。
#### Fixed-point of Function & Recursion ⭐
> 🔗 https://thzt.github.io/2017/03/14/recursive-function-7/
  
在中学数学中，我们已经学过不动点了，只是当时印象不是那么深刻。
函数的不动点，是指被这个函数映射到其自身的那些点。
例如：$f(x)=x2−3x+4$，则2是函数f的一个不动点，$f(2)=2$。

并不是每一个函数都有不动点，
例如，实数域上的函数$f(x)=x+1$，就没有不动点，对于任意实数$x$，永远都不等于$x+1$。（不动点是和定义域有关的，以后我们还会重新讨论$f(x)=x+1$的不动点。

==一般的，函数$f(x)$的不动点，指的是这样的$x$，使得$x=f(x)$。==

重新温习了不动点相关的知识之后，我们就可以对上面的阶乘函数`fact`进行改造了，我们要把阶乘函数看做另外一个函数的不动点。

定义函数$g$，
```haskell
g :: (Int -> Int) -> Int -> Int  
g f n = case n of   
  1 -> 1  
  n -> n * f (n-1)
```

我们可以得到，`g fact = fact`，因此，`fact`实际上就是函数`g`的不动点。于是，在“方程”中求解`fact`的过程，就转换成了求解函数`g`的不动点的过程了。


![|400](../../../../../Assets/Pics/Pasted%20image%2020260121151600.png)
<small>Fixed point (mathematics) - Wikipedia</small>
##### Solving Fixed-point & Fixed-point Combinator (不动点算子/组合子)
> 🔗 https://thzt.github.io/2017/03/14/recursive-function-7/

我们怎样求解函数`g`的不动点呢？

在Haskell中，可以很方便的定义一个高阶函数`fix`，它可以用来求解任意函数的不动点，
```haskell
fix :: (a -> a) -> a  
fix g = let x = g x in x
```

我们试验一下`fix`的强大威力，
```haskell
fact 10  
> 3628800  
  
fix g 10  
> 3628800
```
  
注意，`fix g`得到的是`g`的不动点，而不是`fact`的不动点，即`(fix g) = g (fix g)`。

有了`fix`，我们就可以构造匿名递归函数了，
```haskell
fact' :: Int -> Int  
fact' = fix $ \fact -> \n -> case n of   
  1 -> 1  
  n -> n * fact (n-1)
```

`fix`后面跟的函数没有名字，它是匿名的，但是经过`fix`作用后，可以产生一个递归函数。也就是说，为了实现递归，函数是可以没有名字的。
###### Y-Combinator
> [!links]
> ↗ [Lambda Calculus (λ-Calculus)](../../📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/🎩%20Higher-Order%20Languages%20&%20Logics%20(HOL)/Lambda%20Calculus%20(λ-Calculus)/Lambda%20Calculus%20(λ-Calculus).md)
> ↗ [Combinatory Logic](../../📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/🎩%20Higher-Order%20Languages%20&%20Logics%20(HOL)/Combinatory%20Logic.md)
> ↗ [Haskell](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20for%20Specific%20Areas/Functional%20Programming%20Languages/Haskell/Haskell.md)
> ↗ [Computational Trilogy & Curry–Howard(–Lambek) Correspondence](../../Proof%20Theory/Computational%20Trilogy%20&%20Curry–Howard(–Lambek)%20Correspondence.md)

> 🔗 https://thzt.github.io/2017/03/14/recursive-function-7/

Y 组合子是 🔗 [Haskell B. Curry](https://en.wikipedia.org/wiki/Haskell_Curry) 在研究 $\lambda$ 演算时发现的，它的表现形式如下：
$$Y := \lambda f . (\lambda x . (f\ (x\ x))\ \lambda x . (f\ (x\ x)))$$

在 $\lambda$ 演算中（通过 $\alpha$ 转换和 $\beta$ 规约），我们可以证明，对于任何函数 $g$：
$$(Y\ g) = (g(Y\ g))$$

因此，Y 组合子是一个**不动点算子**，它可以得到任意函数的不动点。其他的不动点算子还有图灵不动点组合子 $\Theta$：
$$\Theta := (\lambda x . \lambda y . (y\ (x\ x\ y)))\ (\lambda x . \lambda y . (y\ (x\ x\ y)))$$

讨论 Y 组合子在 Haskell 中的表示方式是有趣的，因为直接翻译过去会报类型错误：
```haskell
y :: (a -> a) -> a
y = \f -> (\x -> f (x x)) (\x -> f (x x))

-- Occurs check: cannot construct the infinite type: r0 ~ r0 -> a
-- Expected type: r0 -> a
-- Actual type: (r0 -> a) -> a
-- In the first argument of 'x', namely 'x'
-- In the first argument of 'f', namely '(x x)'
```

类型系统无法确定 `x` 的类型。问题出在表达式 `x x` 上面：
- 假设 `x x` 的类型为 `a`，则第一个 `x` 的类型就应该是 `? -> a`。
- 于是，第二个 `x` 的类型肯定也应该是 `? -> a`（因为都是 `x`）。
- 又因为 `x x` 的类型为 `a`，所以第一个 `x` 的类型 `? -> a` 中，`?` 的类型就应该是 `? -> a`（因为 `((? -> a) -> a)` 作用到 `(? -> a)` 才能得到 `a`）。

`?` 的类型是 `? -> a`，因此 `?` 应该是一个**递归类型**。

下面我们来定义递归类型 `Mu`，来帮助编译器进行恰当的类型推导：
```Haskell
newtype Mu a = Mu (Mu a -> a)

y :: (a -> a) -> a
y f = (\h -> h $Mu h) (\x -> f . (\(Mu g) -> g) x$ x)
```

最后，`fact'` 就可以使用 Y 组合子来定义了：
```Haskell
fact' :: Int -> Int
fact' = y $ \fact -> \n -> case n of
    1 -> 1
    n -> n * fact (n-1)
```

> 🔗 https://thzt.github.io/2017/03/20/recursive-function-8/
> 上一篇我们介绍了不动点算子和Y组合子，以及Y组合子的具体表现形式，这一篇我们根据不动点算子的性质来证明`fact`函数就是`g`函数的不动点。
##### Finite Expansion of Fixed-point Combinator
> 🔗 https://thzt.github.io/2017/03/20/recursive-function-8/

根据上一节 `fact = fix g` 的证明，我们看到，每一步递推，我们都使用了不动点算子 `fix` 的性质 $fix\ g = g\ (fix\ g)$。

但是对于一个具有有限存储空间的机器来说，递推的步骤不可能无限多。为了界定最多使用多少次递推，我们定义 $fix^{[n+1]}\ g = g\ (fix^{[n]}g)$，并且认为 $fix^{[0]}\ g$ 对于任意的 $n$ 无定义。
* $fix^{[1]}\ g\ 1 = 1$，而 $fix^{[1]}\ g\ n$ 在 $n > 1$ 时没有定义。
* $fix^{[2]}\ g\ 1 = 1, fix^{[2]}\ g\ 2 = 2$，而 $fix^{[2]}\ g\ n$ 在 $n > 2$ 时没有定义。

因此，$fix^{[n]}\ g$ 是一个部分函数，且 $fix^{[n+1]}\ g$ 所表示的函数，总是比 $fix^{[n]}\ g$ 的计算能力更强一些，离 `fact` 更近一些。当 $n \to \infty$ 时，$fix^{[\infty]}\ g$ 就是阶乘函数 `fact`。

即 $\{fix^{[n]}g \mid n \geqslant 0\}$ 的最小上界，就是 $g$ 的不动点。

那么，什么样的 $g$ 才能保证这个集合具有最小上界呢？**序理论**指出，完全偏序集上的序保持自映射具有最小不动点。

为此，我们需要先认识什么是偏序集，什么是连续函数。==使用完全偏序集上的连续函数解释程序中函数的方式，称为 **[域论模型](https://zh.wikipedia.org/wiki/%E5%9F%9F%E7%90%86%E8%AE%BA)** (Domain Theory Model)。
- ↗ [Domain Theory](../👬%20Relation%20&%20Order%20Theory/Partial%20Order%20&%20Total%20Order%20(Linear%20Order)%20&%20Well-Order/Domain%20Theory/Domain%20Theory.md)==

↗ [Partial Order & Total Order (Linear Order) & Well-Order](../👬%20Relation%20&%20Order%20Theory/Partial%20Order%20&%20Total%20Order%20(Linear%20Order)%20&%20Well-Order/Partial%20Order%20&%20Total%20Order%20(Linear%20Order)%20&%20Well-Order.md)
↗ [Lattice (Order Theory)](../👬%20Relation%20&%20Order%20Theory/Partial%20Order%20&%20Total%20Order%20(Linear%20Order)%20&%20Well-Order/Lattice%20(Order%20Theory)/Lattice%20(Order%20Theory).md)
##### Fixed-Point Theorems
> 🤖 Google search AI mode
> "fixed point theorem and least fixed point theorem"

**Fixed-Point Theorems** guarantee a function has a solution where input equals output (f(x) = x) under certain conditions (like continuity or contraction), with examples being [Brouwer's Theorem](https://www.google.com/search?q=Brouwer%27s+Theorem&newwindow=1&sca_esv=aec86fa18ae2641a&sxsrf=ANbL-n4-QSNgwApjjMsYmJQlVDYBgaOfZA%3A1769004486034&ei=xt1wabvqAcCSwPAPgKKEqA0&oq=fixed+point+theorem+and+least+fixed&gs_lp=Egxnd3Mtd2l6LXNlcnAiI2ZpeGVkIHBvaW50IHRoZW9yZW0gYW5kIGxlYXN0IGZpeGVkKgIIADIFECEYoAEyBRAhGKABMgUQIRigAUi4MVCVBlixKXAEeAGQAQCYAXSgAbYMqgEEMTMuNLgBA8gBAPgBAZgCFaACrw3CAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICBRAAGIAEwgIFEC4YgATCAgYQABgWGB7CAggQABgWGAoYHsICCxAAGIAEGIYDGIoFwgIIEAAYgAQYogTCAgUQABjvBcICBxAhGKABGArCAgUQIRifBZgDAIgGAZAGCpIHBDE2LjWgB_1gsgcEMTIuNbgHmw3CBwgwLjkuMTEuMcgHToAIAA&sclient=gws-wiz-serp&ved=2ahUKEwiIrv-m55ySAxVATVUIHeVkEuQQgK4QegQIARAB) (existence in closed balls) and [Banach's Contraction Principle](https://www.google.com/search?q=Banach%27s+Contraction+Principle&newwindow=1&sca_esv=aec86fa18ae2641a&sxsrf=ANbL-n4-QSNgwApjjMsYmJQlVDYBgaOfZA%3A1769004486034&ei=xt1wabvqAcCSwPAPgKKEqA0&oq=fixed+point+theorem+and+least+fixed&gs_lp=Egxnd3Mtd2l6LXNlcnAiI2ZpeGVkIHBvaW50IHRoZW9yZW0gYW5kIGxlYXN0IGZpeGVkKgIIADIFECEYoAEyBRAhGKABMgUQIRigAUi4MVCVBlixKXAEeAGQAQCYAXSgAbYMqgEEMTMuNLgBA8gBAPgBAZgCFaACrw3CAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICBRAAGIAEwgIFEC4YgATCAgYQABgWGB7CAggQABgWGAoYHsICCxAAGIAEGIYDGIoFwgIIEAAYgAQYogTCAgUQABjvBcICBxAhGKABGArCAgUQIRifBZgDAIgGAZAGCpIHBDE2LjWgB_1gsgcEMTIuNbgHmw3CBwgwLjkuMTEuMcgHToAIAA&sclient=gws-wiz-serp&ved=2ahUKEwiIrv-m55ySAxVATVUIHeVkEuQQgK4QegQIARAC) (unique point found by iteration). The **[Least Fixed Point Theorem](https://www.google.com/search?q=Least+Fixed+Point+Theorem&newwindow=1&sca_esv=aec86fa18ae2641a&sxsrf=ANbL-n4-QSNgwApjjMsYmJQlVDYBgaOfZA%3A1769004486034&ei=xt1wabvqAcCSwPAPgKKEqA0&oq=fixed+point+theorem+and+least+fixed&gs_lp=Egxnd3Mtd2l6LXNlcnAiI2ZpeGVkIHBvaW50IHRoZW9yZW0gYW5kIGxlYXN0IGZpeGVkKgIIADIFECEYoAEyBRAhGKABMgUQIRigAUi4MVCVBlixKXAEeAGQAQCYAXSgAbYMqgEEMTMuNLgBA8gBAPgBAZgCFaACrw3CAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICBRAAGIAEwgIFEC4YgATCAgYQABgWGB7CAggQABgWGAoYHsICCxAAGIAEGIYDGIoFwgIIEAAYgAQYogTCAgUQABjvBcICBxAhGKABGArCAgUQIRifBZgDAIgGAZAGCpIHBDE2LjWgB_1gsgcEMTIuNbgHmw3CBwgwLjkuMTEuMcgHToAIAA&sclient=gws-wiz-serp&ved=2ahUKEwiIrv-m55ySAxVATVUIHeVkEuQQgK4QegQIARAE)** (part of Knaster-Tarski) specifically deals with ordered sets (posets) and monotone functions, guaranteeing the existence of the smallest (least) fixed point in complete lattices, crucial in areas like theoretical computer science for program analysis


**General Fixed Point Theorems**
Fixed point theorems ensure the existence of a fixed point ( 𝑥 such that 𝑓(𝑥)=𝑥 ) under different conditions on the function 𝑓 and the space it operates on. 
- **Banach Fixed-Point Theorem** (Contraction Mapping Principle): This theorem guarantees the existence and uniqueness of a fixed point for a _contraction mapping_ (a function that brings points closer together) in a complete metric space. It is a constructive theorem, providing a method (fixed-point iteration) to find the point. Applications include proving the existence and uniqueness of solutions to ordinary differential equations.
- **Brouwer Fixed-Point Theorem:** A result from topology, it states that any continuous function from a closed disk (or, more generally, a compact, convex subset of a Euclidean space) to itself must have at least one fixed point. Unlike the Banach theorem, it only guarantees existence and does not provide a constructive method for finding the point.
- **Lefschetz Fixed-Point Theorem:** This advanced theorem from algebraic topology gives a way to count the number of fixed points (with multiplicity) based on the function's properties


**Least Fixed Point Theorem** 
The least fixed point theorem, often associated with the **Knaster–Tarski theorem**, operates in the context of order theory, which involves sets with a partial ordering (e.g., subset inclusion). 
- **Conditions:** It applies to a monotone (order-preserving) function 𝑓 on a complete lattice (a partially ordered set where every subset has a greatest lower bound and a least upper bound).
- **Result:** The theorem states that the set of fixed points of such a function is itself a complete lattice, and consequently, there is a unique _least fixed point_ (a fixed point that is less than or equal to every other fixed point in the given order) and a greatest fixed point.
- **Applications:** This theorem is crucial in computer science, particularly in denotational semantics, program analysis, and formal logic, to define the meaning of recursive functions and loops. The least fixed point characterizes the minimal or "most-defined" solution in these contexts.
###### Fixed Point Iteration and Contraction Mapping Theorem (Banach's Fixed Point Theorem) ⭐
↗ [Metric Spaces](../../../Topology/Point-set%20(General)%20Topology/Metric%20Spaces.md)
↗ [Banach Space](../../../🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Linear%20Algebra%20&%20Module-Like%20Algebraic%20Structure/Banach%20Space/Banach%20Space.md)
↗ [Numerical Analysis](../../../🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/Numerical%20Analysis/Numerical%20Analysis.md)
###### Brouwer's Fixed-Point Theorem
###### Least Fixed-point Theorem ⭐
↗ [Lattice (Order Theory)](../👬%20Relation%20&%20Order%20Theory/Partial%20Order%20&%20Total%20Order%20(Linear%20Order)%20&%20Well-Order/Lattice%20(Order%20Theory)/Lattice%20(Order%20Theory).md)

完全偏序集上的连续函数具有最小不动点，这称之为最小不动点定理
#### Equations Solving & Constrains Solving (and Optimization)
↗ [Mathematical Modeling & Real World Problem Solving](../../../Mathematical%20Modeling%20&%20Real%20World%20Problem%20Solving.md)

↗ [Mathematical Analysis (& Analytical Mathematics)](../../../🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/Mathematical%20Analysis%20(&%20Analytical%20Mathematics).md)
↗ [Algebra](../../../🧊%20Algebra/Algebra.md)
- ↗ [Linear Algebra & Module-Like Algebraic Structure](../../../🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Linear%20Algebra%20&%20Module-Like%20Algebraic%20Structure/Linear%20Algebra%20&%20Module-Like%20Algebraic%20Structure.md)
- ↗ [Lie Groups](../../../🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Group%20Theory%20&%20Group-Like%20Algebraic%20Structure/🪖%20Lie%20Groups/Lie%20Groups.md) & ↗ [Lie Algebra](../../../🧊%20Algebra/Lie%20Algebra/Lie%20Algebra.md)

↗ [Mathematical Optimization (Programming)](../../../🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Mathematical%20Optimization%20(Programming)/Mathematical%20Optimization%20(Programming).md)
↗ [Constraint Solving & Theorem Proving](../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/📌%20Software%20(Program)%20Analysis%20Basics/🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/Constraint%20Solving%20&%20Theorem%20Proving/Constraint%20Solving%20&%20Theorem%20Proving.md)
↗ [Formal Verifications & Constraint Solvers (Proof Assistants)](../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifications%20&%20Constraint%20Solvers%20(Proof%20Assistants)/Formal%20Verifications%20&%20Constraint%20Solvers%20(Proof%20Assistants).md)
- ↗ [Automated & Generic Theorem Provers](../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifications%20&%20Constraint%20Solvers%20(Proof%20Assistants)/Automated%20&%20Generic%20Theorem%20Provers/Automated%20&%20Generic%20Theorem%20Provers.md)
- ↗ [SAT (Boolean Satisfiability Problem) Solvers](../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifications%20&%20Constraint%20Solvers%20(Proof%20Assistants)/SAT%20(Boolean%20Satisfiability%20Problem)%20Solvers/SAT%20(Boolean%20Satisfiability%20Problem)%20Solvers.md)
- ↗ [SMT (Satisfiability Modulo Theory) Solvers](../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifications%20&%20Constraint%20Solvers%20(Proof%20Assistants)/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers.md)

↗ [Constraint-Based Analysis & Control Flow Analysis](../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/📌%20Software%20(Program)%20Analysis%20Basics/👚%20SCA%20(Static%20Code%20Analysis)%20&%20SAST/Constraint-Based%20Analysis%20&%20Control%20Flow%20Analysis/Constraint-Based%20Analysis%20&%20Control%20Flow%20Analysis.md)

↗ [(Formal) Model Checking](../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/📌%20Software%20(Program)%20Analysis%20Basics/🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/(Formal)%20Model%20Checking/(Formal)%20Model%20Checking.md)



## Properties /Types of Function
### Non-termination & Terminated Function
> 🔗 https://thzt.github.io/2017/03/06/recursive-function-4/

部分函数（partial funciton）在计算机科学中是非常重要的，因为对于每一个 $a \in A$，一个算法可以表示为，计算出集合 $B$ 中与之对应元素的过程。这个算法可能对于某些 $a \in A$ 不会终止，而这种情况是很常见的。

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
- ↗ [Denotational Semantics](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Formal%20Semantics%20and%20Programming%20Language/Denotational%20Semantics/Denotational%20Semantics.md)

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


### Limits, Continuity & Continuous Function
↗ [Partial Order & Total Order (Linear Order) & Well-Order](../👬%20Relation%20&%20Order%20Theory/Partial%20Order%20&%20Total%20Order%20(Linear%20Order)%20&%20Well-Order/Partial%20Order%20&%20Total%20Order%20(Linear%20Order)%20&%20Well-Order.md)
↗ [Limits & Continuity of Functions](../../../🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/Number%20Sequence,%20Series,%20and%20Basic%20Properties%20of%20Function/Limits%20&%20Continuity%20of%20Functions.md)


### Differentiable Function & Integrable Function
↗ [Mathematical Analysis (& Analytical Mathematics)](../../../🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/Mathematical%20Analysis%20(&%20Analytical%20Mathematics).md)

↗ [Differential Calculus & Derivative of Function](../../../🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/Differential%20Calculus%20&%20Derivative%20of%20Function/Differential%20Calculus%20&%20Derivative%20of%20Function.md)
↗ [Definite Integral](../../../🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/Integral%20of%20Function/Definite%20Integral.md)
↗ [Indefinite Integral](../../../🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/Integral%20of%20Function/Indefinite%20Integral.md)



## Ref
[18 【“函数”为什么会是“函”？ - 寧世科学辞海 | 小红书 - 你的生活兴趣社区】 😆 5S8BzU9XHLSWs1y 😆 ]: https://www.xiaohongshu.com/discovery/item/6864ee7a000000001c037de0?source=webshare&xhsshare=pc_web&xsec_token=ABHzGdmnpgYvtcNm2A8tGi6K37DylddLz7LmNksWs70Dk=&xsec_source=pc_share
