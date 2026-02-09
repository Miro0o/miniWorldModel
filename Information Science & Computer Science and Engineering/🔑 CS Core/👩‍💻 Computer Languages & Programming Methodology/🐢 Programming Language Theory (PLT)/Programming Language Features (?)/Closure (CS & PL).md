# Closure (CS & PL)

[TOC]



## Res
### Related Topics
↗ [Set Theory & Axiomatic Set Theory](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/Set%20Theory%20&%20Axiomatic%20Set%20Theory.md)
↗ [Number Sets & Field Construction (Completion) and Extension](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/Number%20Sets%20&%20Field%20Construction%20(Completion)%20and%20Extension/Number%20Sets%20&%20Field%20Construction%20(Completion)%20and%20Extension.md)


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Closure_(computer_programming)

In [programming languages](https://en.wikipedia.org/wiki/Programming_language "Programming language"), a **closure**, also **lexical closure** or **function closure**, is a technique for implementing [lexically scoped](https://en.wikipedia.org/wiki/Lexically_scoped "Lexically scoped") [name binding](https://en.wikipedia.org/wiki/Name_binding "Name binding") in a language with [first-class functions](https://en.wikipedia.org/wiki/First-class_function "First-class function"). [Operationally](https://en.wikipedia.org/wiki/Operational_semantics "Operational semantics"), a closure is a [record](https://en.wikipedia.org/wiki/Record_\(computer_science\) "Record (computer science)") storing a [function](https://en.wikipedia.org/wiki/Function_\(computer_science\) "Function (computer science)")together with an environment. The environment is a mapping associating each [free variable](https://en.wikipedia.org/wiki/Free_variable "Free variable") of the function (variables that are used locally, but defined in an enclosing scope) with the [value](https://en.wikipedia.org/wiki/Value_\(computer_science\) "Value (computer science)") or [reference](https://en.wikipedia.org/wiki/Reference_\(computer_science\) "Reference (computer science)") to which the name was bound when the closure was created. Unlike a plain function, a closure allows the function to access those _captured variables_ through the closure's copies of their values or references, even when the function is invoked outside their scope.



## Ref
[闭包 Closure]: https://course.rs/advance/functional-programing/closure.html
闭包这个词语由来已久，自上世纪 60 年代就由 `Scheme` 语言引进之后，被广泛用于函数式编程语言中，进入 21 世纪后，各种现代化的编程语言也都不约而同地把闭包作为核心特性纳入到语言设计中来。那么到底何为闭包？

闭包是**一种匿名函数，它可以赋值给变量也可以作为参数传递给其它函数，不同于函数的是，它允许捕获调用者作用域中的值**，例如：
```rust
fn main() {
   let x = 1;
   let sum = |y| x + y;

    assert_eq!(3, sum(2));
}
```

上面的代码展示了非常简单的闭包 `sum`，它拥有一个入参 `y`，同时捕获了作用域中的 `x` 的值，因此调用 `sum(2)` 意味着将 2（参数 `y`）跟 1（`x`）进行相加，最终返回它们的和：`3`。

可以看到 `sum` 非常符合闭包的定义：可以赋值给变量，允许捕获调用者作用域中的值。
