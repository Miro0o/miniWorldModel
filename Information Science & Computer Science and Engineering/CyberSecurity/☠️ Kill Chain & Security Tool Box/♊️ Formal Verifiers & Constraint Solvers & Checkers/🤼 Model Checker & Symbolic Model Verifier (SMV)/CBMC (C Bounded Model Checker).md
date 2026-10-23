# CBMC (C Bounded Model Checker)

[TOC]



## Res
🚧 https://github.com/diffblue/cbmc
🏠 https://www.cprover.org/cbmc
📂 https://model-checking.github.io/cbmc-training/index.html


### Related Topics


### Other Resources



## Intro
> [!note] CBMC (C Bounded Model Checker)
> https://chatgpt.com/share/6adacbaf-2d04-83ec-8a2b-c85b343f50d6
> 
> - **Purpose**
>     - 对 C/C++ 程序进行 Bounded Model Checking。
>     - 通过 Symbolic Analysis 检查程序是否存在违反指定 Properties 的执行。
>     - 主要用于 Program Verification、Memory Safety 和 Undefined Behavior Detection。
> - **Core Idea**
>     - 将程序在有限范围内的执行转换为可分析的符号约束。
>     - 寻找能够违反 Property 的输入或执行路径（Counterexample）。
>     - 验证结论取决于分析范围、程序模型和环境假设。
>
> - **Basic Constructs**
>     - Assertion: `assert(e)`
>         - 定义需要验证的 Property。
>         - 检查所有被考虑的执行是否满足 e。
>         - 存在 e = false 的可行执行时，Assertion Failure。
>     - Non-determinism: `nondet_int()`
>         - 引入 Symbolic Input，表示所有可能的整数取值。
>         - 不同于 Random Testing，不是随机选择一个具体值。
>     - Assumption: `__CPROVER_assume(e)`
>         - 限制可行执行路径，只考虑满足 e 的情况。
>         - Assumption 是验证前提，而不是已经被证明的性质。
>     - Key Distinction
>         - nondet：定义可能的输入。
>         - assume：限定需要考虑的执行。
>         - assert：指定需要证明的性质。
>
> - **Loop Unwinding**
>     - 将循环展开成有限次执行，以便进行 Bounded Model Checking。
>     - 固定次数的循环通常可以被完整展开。
>     - 对不确定次数的循环，可能需要指定 `--unwind k`。
>     - Unwinding Assertion
>         - 检查循环在达到展开界限时是否已经终止。
>         - Failure 表示存在尚未覆盖的循环执行，当前展开不完整。
>         - 不等同于程序自身的 Assertion Failure。
>     - Key Distinction
>         - Bounded Verification：在给定展开范围内没有发现违反性质的执行。
>         - Complete Verification：所有相关执行均被覆盖，且 Properties 成立。
>         - 未发现 Counterexample 不一定意味着完整程序已经被证明安全。
>
> - **Property Checking**
>     - CBMC 不仅检查程序员显式编写的 Assertions，还能自动生成 Safety Claims。
>     - 使用 `--show-claims` 查看待检查的 Claims。
>     - Memory Safety
>         - Array Bounds Check：数组访问是否越界。
>         - Pointer Check：指针解引用是否有效。
>     - Arithmetic Safety
>         - Signed Overflow：有符号整数运算是否溢出。
>         - Float Overflow：浮点运算是否超出表示范围。
>         - Division by Zero：除数是否可能为零。
>         - NaN Check：浮点运算是否产生 NaN。
>     - Other Safety Checks
>         - Conversion Check：类型转换是否造成信息丢失。
>         - Undefined Shift：位移操作是否合法。
>     - Key Idea
>         - Property Violation 不一定等价于 Undefined Behavior。
>         - 例如整数转换丢失信息可能是定义良好的 C 行为，但仍违反检查性质。
>
> - **Proof Harnesses**
>     - Purpose
>         - 为 Function under Test 构造验证环境（Environment Model）。
>         - 将验证所需的输入、状态和 Assumptions 集中管理。
>         - 支持独立验证函数或模块，而不必运行完整系统。
>     - Responsibilities
>         - Modeling Input / Global State
>         - Modeling External Interfaces
>         - Allocating and Validating Data
>         - Specifying Proof Assumptions
>     - Modeling Input
>         - 使用 Symbolic Input 覆盖多种可能的函数参数。
>         - 例如 alpha(a) = a + 1：
>             - a = INT_MAX 可能造成 Signed Overflow。
>             - 函数的实际行为可能违反调用者设定的 Assertion。
>     - Modeling Interfaces
>         - 用模型替换外部依赖，例如 Network APIs。
>         - Unconstrained Interface：允许任意输入。
>         - Constrained Interface：使用 assume 限制允许的输入。
>         - 相同函数在不同 Environment Models 下可能得到不同的验证结果。
>     - Workflow
>         - `goto-cc`：将 Library 和 Harness 编译成 GOTO Programs。
>         - Link：组合 Function Implementation 和 Proof Harness。
>         - `cbmc`：对组合后的程序进行验证。
>
> - **Proof Assumptions**
>     - Explicit Assumptions
>         - 使用 `__CPROVER_assume(e)` 明确指定验证前提。
>         - 例如 size < 100 限制 Buffer Size。
>     - Implicit Assumptions
>         - 来自 CBMC 内部模型或分析配置的隐含限制。
>         - 例如可建模的最大动态内存对象大小。
>     - Key Idea
>         - Assumptions 决定验证覆盖哪些执行。
>         - 过强或不符合真实环境的 Assumptions 可能排除实际存在的 Bugs。
>         - Verification Results 只能在相应 Assumptions 和 Model 下解释。
>
> - **Key Takeaways**
>     - CBMC = Symbolic Analysis + Bounded Model Checking。
>     - nondet / assume / assert 分别对应输入、前提和验证目标。
>     - Loop Unwinding 决定循环执行的分析范围。
>     - Unwinding Assertion 用于检查展开是否完整。
>     - Proof Harness 决定被验证函数的执行环境。
>     - Verification Success 不自动等于程序在所有真实场景下正确。
>     - 核心思想：在指定模型和约束下寻找 Property Violation 的 Counterexample。

> 🤖 GPT 6.1 Sol
> https://chatgpt.com/share/6adacbaf-2d04-83ec-8a2b-c85b343f50d6

经典 Model Checking 通常从一个已经定义好的模型开始：$M=(S,I,T,L)$
然后验证：$M\models\varphi$

CBMC 的主要区别是，它从程序出发：$\text{C Program} \longrightarrow \text{Program Model}$
再构造有界验证问题。

| 维度       | 经典显式状态 Model Checking | CBMC             |
| -------- | --------------------- | ---------------- |
| 输入       | Transition System     | C/C++ 程序         |
| 状态       | 显式系统状态                | 程序变量、内存、控制位置     |
| 转移       | 显式定义的 \(T\)           | 程序语句与控制流         |
| Property | 如 CTL 状态性质            | Assertions、安全性检查 |
| 主要思路     | 遍历状态、求不动点等            | 符号化约束与有界展开       |
| 求解方法     | 状态标记、图算法等             | SAT/SMT 等        |
| 核心挑战     | State-space explosion | 展开规模、求解复杂度、建模完整性 |

这里的比较主要针对课程中介绍的经典显式状态方法，并不是说所有 Model Checking 都只能使用某一种算法。

事实上，CBMC 自己就是 Symbolic Model Checking 相关方法的一个重要实际应用。


---
整理 Pages 9–11 的全部检查类型

|检查类型|命令选项|典型错误|
|---|---|---|
|Array Bounds|`--bounds-check`|`array[10]` 越界|
|Pointer Safety|`--pointer-check`|解引用无效指针|
|Signed Integer Overflow|`--signed-overflow-check`|`INT_MAX + 1`|
|Float Overflow|`--float-overflow-check`|浮点计算超出有限范围|
|NaN|`--nan-check`|`0.0 / 0.0`|
|Division by Zero|`--div-by-zero-check`|`a / 0`|
|Conversion|`--conversion-check`|较大整数转换到较小类型导致信息丢失|
|Undefined Shift|`--undefined-shift-check`|`x << -1` 或过大的位移量|

请注意：讲义用这些选项突出展示不同类别的检查，不代表每次使用 CBMC 都必须手动指定所有选项；默认启用哪些检查取决于 CBMC 版本和配置。

到这里，你应该已经能理解 CBMC 的两个主要作用：
$\boxed{ \begin{array}{l} 1.\quad \text{Checking user-defined assertions}\\[3pt] 2.\quad \text{Checking automatically generated safety properties} \end{array} }$

但还有一个更重要的问题：
我们如何告诉 CBMC，现实世界中一个函数究竟会接收到哪些输入、外部函数会返回什么，以及它应该在什么环境下运行？

这正是下面 Proof Harnesses 要解决的问题。


---
Proof Harness 的六种责任
讲义列出了六项责任。

| Responsibility        | 含义                 |
| --------------------- | ------------------ |
| Modeling Input        | 给函数构造输入，可以是符号化输入   |
| Modeling Global State | 构造函数依赖的全局变量或系统状态   |
| Modeling Interfaces   | 模拟外部 API、网络、硬件等    |
| Allocating Data       | 分配函数使用的内存和数据结构     |
| Validating Data       | 保证输入数据符合所需格式、结构或约束 |
| Proof Assumptions     | 明确验证所依赖的前提         |



## Ref
