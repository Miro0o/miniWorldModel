# Automata Theory and Formal Language Theory

[TOC]



## Res
### Related Topics
↗ [Set Theory](../../Set%20Theory/Set%20Theory.md)
↗ [Normalization](../../../../🔑%20CS%20Core/🍕%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/⚜️%20Database%20System%20Design/📌%20DBMS%20Design/Logical%20Database%20Design%20(Data%20Modeling)/Record-Based%20Data%20Models/Relational%20(Data)%20Models/Normalization/Normalization.md)

↗ [Programming Language Theory (PLT)](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Programming%20Language%20Theory%20(PLT).md)


### Other Resources
🎬【【有限状态自动机】王彧弋】 https://www.bilibili.com/video/BV1gg411c7ab/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

🎬【状态机模型的应用 (细胞自动机; gdb/rr/perf; 代码验证工具) [南京大学2022操作系统-P10]】 https://www.bilibili.com/video/BV1xU4y1Z7xK/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

📖 交大陳穎平教授正規語言講義

https://www.cs.unc.edu/~otternes/comp455/fsm_designer/
Finit State Machine Designer

http://regexvisualizer.apphb.com/
Regular expression visualizer

http://jflap.org/tutorial/fa/dfa2mindfa/index.html
Converting a DFA to a Minimal State DFA



## Intro
![Automata_Formal_Lan.excalidraw | 900](../../../../../../Assets/Illustrations/Math/Automata_Formal_Lan.excalidraw.md)


### Formal Definition: Strings & Langauges
> 📖  Introduction to the Theory of Computation | Sipser

Strings of characters are fundamental building blocks in computer science. The alphabet over which the strings are defined may vary with the application. For our purposes, we define an **alphabet** to be any nonempty finite set. The members of the alphabet are the **symbols** of the alphabet. We generally use capital Greek letters $\Sigma$ and $\Gamma$ to designate alphabets and a typewriter font for symbols from an alphabet. The following are a few examples of alphabets.
- $\Sigma_1={0,1}$
- $\Sigma_2​={a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z}$
- $\Gamma={0,1,x,y,z}$

A **string** _over_ an **alphabet** is a finite sequence of symbols from that alphabet, usually written next to one another and not separated by commas. If $\Sigma_1​={0,1}$, then $01001$ is a string over $\Sigma_1$​. If $\Sigma_2​={a,b,c,…,z}$, then $abracadabra$ is a string over $\Sigma_2$​. If $w$ is a string over $\Sigma$, the **length** of $w$, written $∣w∣$, is the number of symbols that it contains. The string of length zero is called the **empty string** and is written $\varepsilon$. The empty string plays the role of 0 in a number system. If $w$ has length $n$, we can write $w=w_1​w_2​…w_n$​, where each $w_i​ \in \Sigma$. The **reverse** of $w$, written $w^R$, is the string obtained by writing $w$ in the opposite order (i.e., $w_n​w_{n−1}​…w_1$​). String $x$ is a **substring** of $w$ if $x$ appears consecutively within $w$. For example, $cad$ is a substring of $abracadabra$.

If we have string $x$ of length $m$ and string $y$ of length $n$, the **concatenation** of $x$ and $y$, written $xy$, is the string obtained by appending $y$ to the end of $x$, as in $x_1​…x_m​y_1​…y_n$​. To concatenate a string with itself many times, we use the superscript notation $x_k$ to mean $$\underbrace{x x \dots x}_{k}$$
The **lexicographic order** of strings is the same as the familiar dictionary order. We'll occasionally use a modified lexicographic order, called **shortlex order** or simply **string order**, that is identical to lexicographic order, except that shorter strings precede longer strings. Thus the string ordering of all strings over the alphabet ${0,1}$ is $$(\varepsilon,0,1,00,01,10,11,000,…).$$
Say that string $x$ is a **prefix** of string $y$ if a string $z$ exists where $xz=y$, and that $x$ is a **proper prefix** of $y$ if in addition $x \neq y$. 

A **language** is a set of strings. A language is **prefix-free** if no member is a proper prefix of another member.
#### Production Rules & Grammar of A Language (?)
> 🔗 https://courses.compute.dtu.dk/02242/topics/syntactic-analysis.html##sec:2.3

-  [`https://en.wikipedia.org/wiki/Production_(computer_science)`](https://en.wikipedia.org/wiki/Production_\(computer_science\))
-  [`https://en.wikipedia.org/wiki/Formal_grammar`](https://en.wikipedia.org/wiki/Formal_grammar)

In practice we define languages using Grammars. A grammar is a collection of production rules of the form $\alpha \to \beta$, where $\alpha$, $\beta$ are sequences of _symbols_ (represented by $a$, $b$, and $c$) and _nonterminals_ (represented by $A$, $B$, and $C$). They are called non-terminals as we will keep applying the production rules, rewriting the string that look like $\alpha$ into $\beta$ until there no non-terminals left. Any string in a language is called a word, and the language is a programming language we call it a program.

We can now see if a word $w$ is in a language by generating all possible words in the language, and then checking if $w$ is in that set. This algorithm, clearly can run forever, so more efficient solutions are needed.


### Formal Language Theory
> 🔗 https://en.wikipedia.org/wiki/Formal_language

In [logic](https://en.wikipedia.org/wiki/Logic "Logic"), [mathematics](https://en.wikipedia.org/wiki/Mathematics "Mathematics"), [computer science](https://en.wikipedia.org/wiki/Computer_science "Computer science"), and [linguistics](https://en.wikipedia.org/wiki/Linguistics "Linguistics"), a **formal language** consists of [words](https://en.wikipedia.org/wiki/Word "Word") whose [letters](https://en.wikipedia.org/wiki/Symbol_(formal) "Symbol (formal)") are taken from an [alphabet](https://en.wikipedia.org/wiki/Alphabet_(formal_languages) "Alphabet (formal languages)") and are [well-formed](https://en.wikipedia.org/wiki/Well-formedness "Well-formedness") according to a specific set of rules.
- The alphabet of a formal language consists of symbols, letters, or [tokens](https://en.wikipedia.org/wiki/Type%E2%80%93token_distinction "Type–token distinction") that concatenate into [strings](https://en.wikipedia.org/wiki/String_(computer_science) "String (computer science)") of the language. 
	- Each string concatenated from symbols of this alphabet is called a word, and the words that belong to a particular formal language are sometimes called _well-formed words_ or _[well-formed formulas](https://en.wikipedia.org/wiki/Well-formed_formula "Well-formed formula")_. 
- A formal language is often defined by means of a [formal grammar](https://en.wikipedia.org/wiki/Formal_grammar "Formal grammar") such as a [regular grammar](https://en.wikipedia.org/wiki/Regular_grammar "Regular grammar") or [context-free grammar](https://en.wikipedia.org/wiki/Context-free_grammar "Context-free grammar"), which consists of its [formation rules](https://en.wikipedia.org/wiki/Formation_rule "Formation rule").
#### Formal Language & Other Subjects
- In computer science, formal languages are used among others as the basis for defining the grammar of [programming languages](https://en.wikipedia.org/wiki/Programming_language "Programming language") and formalized versions of subsets of natural languages in which the words of the language represent concepts that are associated with meanings or [semantics](https://en.wikipedia.org/wiki/Semantics "Semantics"). 
- In [computational complexity theory](https://en.wikipedia.org/wiki/Computational_complexity_theory "Computational complexity theory"), [decision problems](https://en.wikipedia.org/wiki/Decision_problem "Decision problem") are typically defined as formal languages, and [complexity classes](https://en.wikipedia.org/wiki/Complexity_class "Complexity class") are defined as the sets of the formal languages that can be [parsed by machines](https://en.wikipedia.org/wiki/Parsing "Parsing") with limited computational power. 
- In [logic](https://en.wikipedia.org/wiki/Logic "Logic") and the [foundations of mathematics](https://en.wikipedia.org/wiki/Foundations_of_mathematics "Foundations of mathematics"), formal languages are used to represent the syntax of [axiomatic systems](https://en.wikipedia.org/wiki/Axiomatic_system "Axiomatic system"), and [mathematical formalism](https://en.wikipedia.org/wiki/Formalism_(philosophy_of_mathematics) "Formalism (philosophy of mathematics)") is the philosophy that all of mathematics can be reduced to the syntactic manipulation of formal languages in this way.
- Formal language theory sprang out of linguistics, as a way of understanding the syntactic regularities of [natural languages](https://en.wikipedia.org/wiki/Natural_language "Natural language"). The field of formal language theory studies primarily the purely [syntactical](https://en.wikipedia.org/wiki/Syntax "Syntax") aspects of such languages — that is, their internal structural patterns. 


### Automata Theory
> 🔗 https://en.wikipedia.org/wiki/Automata_theory

**Automata theory** is the study of [abstract machines](https://en.wikipedia.org/wiki/Abstract_machine "Abstract machine") and [automata](https://en.wikipedia.org/wiki/Automaton "Automaton"), as well as the [computational problems](https://en.wikipedia.org/wiki/Computational_problem "Computational problem") that can be solved using them. It is a theory in [theoretical computer science](https://en.wikipedia.org/wiki/Theoretical_computer_science "Theoretical computer science") with close connections to [mathematical logic](https://en.wikipedia.org/wiki/Mathematical_logic "Mathematical logic"). The word _automata_ comes from the Greek word αὐτόματος, which means "self-acting, self-willed, self-moving". An automaton (automata in plural) is an abstract self-propelled computing device which follows a predetermined sequence of operations automatically. An automaton with a finite number of states is called a Finite Automaton (FA) or Finite-State Machine (FSM). The figure on the right illustrates a [finite-state machine](https://en.wikipedia.org/wiki/Finite-state_machine "Finite-state machine"), which is a well-known type of automaton. This automaton consists of [states](https://en.wikipedia.org/wiki/State_(computer_science) "State (computer science)") (represented in the figure by circles) and transitions (represented by arrows). As the automaton sees a symbol of input, it makes a transition (or jump) to another state, according to its [transition function](https://en.wikipedia.org/wiki/Transition_table "Transition table"), which takes the previous state and current input symbol as its arguments.

Automata theory is closely related to [formal language](https://en.wikipedia.org/wiki/Formal_language "Formal language") theory. In this context, automata are used as finite representations of formal languages that may be infinite. Automata are often classified by the class of formal languages they can recognize, as in the [Chomsky hierarchy](https://en.wikipedia.org/wiki/Chomsky_hierarchy "Chomsky hierarchy"), which describes a nesting relationship between major classes of automata. Automata play a major role in the [theory of computation](https://en.wikipedia.org/wiki/Theory_of_computation "Theory of computation"), [compiler construction](https://en.wikipedia.org/wiki/Compiler_construction "Compiler construction"), [artificial intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence "Artificial intelligence"), [parsing](https://en.wikipedia.org/wiki/Parsing "Parsing") and [formal verification](https://en.wikipedia.org/wiki/Formal_verification "Formal verification").


### Chomsky Hierarchy
> 🔗 https://en.wikipedia.org/wiki/Chomsky_hierarchy

The Chomsky hierarchy in the fields of [formal language theory](https://en.wikipedia.org/wiki/Formal_language "Formal language"), [computer science](https://en.wikipedia.org/wiki/Computer_science "Computer science"), and [linguistics](https://en.wikipedia.org/wiki/Linguistics "Linguistics"), is a [containment hierarch](https://en.wikipedia.org/wiki/Hierarchy#Containment_hierarchy), is a containment hierarchy of classes of formal grammars. A formal grammar describes how to form strings from a formal language's alphabet that are valid according to the language's syntax. The linguist Noam Chomsky theorized that four different classes of formal grammars existed that could generate increasingly complex languages. Each class can also completely generate the language of all inferior classes (set inclusive).

![](../../../../../../Assets/Pics/Pasted%20image%2020240909175821.png)



## Ref
[Regular Languages]: https://brilliant.org/wiki/regular-languages/

[🤔 Formal Language - Ch5 邁希爾－尼羅德定理 Myhill-Nerode Theorem]: https://www.mropengate.com/2015/04/formal-language-ch5-myhill-nerode.html
[🤔 5.3 Myhill-Nerode 定理与DFA的极小化 | CSDN]: https://blog.csdn.net/tang7mj/article/details/136974076

[👍 浅谈相等关系与等价关系]: https://evian-zhang.github.io/articles/Math/27659362/27659362.html
从数学上来讲，等价关系是在 **某个方面上** 两者的可互换性，而相等关系是在 **所有方面** 两者的可互换性。

[等价关系、等价类与划分 | CSDN]: https://blog.csdn.net/sinat_20471177/article/details/118707113

[👍 🎬【编译原理正规表达式转NFA到DFA再化简】]:  https://www.bilibili.com/video/BV1mh41187fN/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

[Streaming algorithm | Wikipedia]: https://en.wikipedia.org/wiki/Streaming_algorithm#Lower_bounds

[Lecture 7: Streaming Algorithms and Communication Complexity | Stanford]: https://people.csail.mit.edu/rrw/6.045-2020/lec7-color.pdf

[计算理论】计算理论总结 ( 上下文无关文法 | 乔姆斯基范式 | 乔姆斯基范式转化步骤 | 示例 ) ★★ | CSDN]: https://hanshuliang.blog.csdn.net/article/details/111460929?fromshare=blogdetail&sharetype=blogdetail&sharerId=111460929&sharerefer=PC&sharesource=&sharefrom=from_link
