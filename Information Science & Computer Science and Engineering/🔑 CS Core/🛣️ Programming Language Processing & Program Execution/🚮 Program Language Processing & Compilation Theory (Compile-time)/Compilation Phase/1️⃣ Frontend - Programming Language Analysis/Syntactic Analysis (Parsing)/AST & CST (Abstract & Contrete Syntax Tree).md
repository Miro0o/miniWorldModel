# AST & CST (Abstract & Contrete Syntax Tree)

[TOC]



## Res
### Related Topics
↗ [Mathematical Modeling & Abstraction](../../../../../../🧮%20Mathematics/Mathematical%20Modeling%20&%20Abstraction.md)
↗ [Data Structures](../../../../../🧙‍♂️%20Algorithm%20&%20Data%20Structure/📌%20Algorithms%20Basics%20&%20Data%20Structure/Data%20Structures/Data%20Structures.md)

↗ [(Text) Data Representations & Storage in Computer](../../../../../../🗺%20CS%20Overview/💋%20Intro%20to%20Computer%20Science/😤%20Information,%20Data,%20Number%20and%20Math%20in%20Digital%20Systems/(Text)%20Data%20Representations%20&%20Storage%20in%20Computer.md)

↗ [The Essence of Computing - Programs & The Semantics of Programs](../../../../../../🗺%20CS%20Overview/The%20Essence%20of%20Computing%20-%20Programs%20&%20The%20Semantics%20of%20Programs.md)

↗ [Symbol-Table Management](../../Symbol-Table%20Management/Symbol-Table%20Management.md)

↗ [Tokenization Techniques & Tokenizers](../../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/LLM%20Training,%20Utilization,%20and%20Evaluation/Pre-Training/Tokenization%20Techniques%20&%20Tokenizers/Tokenization%20Techniques%20&%20Tokenizers.md)


### Other Resources



## Intro
### AST (Abstract Syntax Tree)
> 🔗 https://en.wikipedia.org/wiki/Abstract_syntax_tree

An **abstract syntax tree** (**AST**) is a data structure used in [computer science](https://en.wikipedia.org/wiki/Computer_science "Computer science") to represent the structure of a program or code snippet. It is a [tree](https://en.wikipedia.org/wiki/Tree_\(data_structure\) "Tree (data structure)") representation of the [abstract syntactic](https://en.wikipedia.org/wiki/Abstract_syntax "Abstract syntax") structure of text (often [source code](https://en.wikipedia.org/wiki/Source_code "Source code")) written in a [formal language](https://en.wikipedia.org/wiki/Formal_language "Formal language"). Each node of the tree denotes a construct occurring in the text. It is sometimes called just a **syntax tree**.

The syntax is "abstract" in the sense that it does not represent every detail appearing in the real syntax, but rather just the structural or content-related details. For instance, grouping [parentheses](https://en.wikipedia.org/wiki/Bracket#Parentheses "Bracket") are implicit in the tree structure, so these do not have to be represented as separate nodes. Likewise, a syntactic construct like an if-condition-then statement may be denoted by means of a single node with three branches.

This distinguishes abstract syntax trees from concrete syntax trees, traditionally designated [parse trees](https://en.wikipedia.org/wiki/Parse_tree "Parse tree"). Parse trees are typically built by a [parser](https://en.wikipedia.org/wiki/Parser "Parser") during the source code translation and [compiling](https://en.wikipedia.org/wiki/Compiler "Compiler") process. Once built, additional information is added to the AST by means of subsequent processing, e.g., [contextual analysis](https://en.wikipedia.org/wiki/Semantic_analysis_\(compilers\) "Semantic analysis (compilers)").

Abstract syntax trees are also used in [program analysis](https://en.wikipedia.org/wiki/Program_analysis "Program analysis") and [program transformation](https://en.wikipedia.org/wiki/Program_transformation "Program transformation") systems.

> [!quote]
> 🔗 https://en.wikipedia.org/wiki/Abstract_syntax_tree
> 
> An abstract syntax tree for the following code for the [Euclidean algorithm](https://en.wikipedia.org/wiki/Euclidean_algorithm "Euclidean algorithm"):
> ``` C
> while b != 0:
> 	if a > b:
> 		a := a - b
> 	else:
> 		b := b - a
> return a
> ```
> 
> ![](../../../../../../../Assets/Pics/Pasted%20image%2020260205222454.png)
#### AST Applications & Static Program Analysis
##### Compilation
> 🔗 https://en.wikipedia.org/wiki/Abstract_syntax_tree#Application_in_compilers

##### AST Differencing
> 🔗 https://en.wikipedia.org/wiki/Abstract_syntax_tree#Other_usages

AST differencing, or for short tree differencing, consists of computing the list of differences between two ASTs.[[1]](https://en.wikipedia.org/wiki/Abstract_syntax_tree#cite_note-1) This list of differences is typically called an edit script. The edit script directly refers to the AST of the code. For instance, an edit action may result in the addition of a new AST node representing a function.
##### Clone Detection
> 🔗 https://en.wikipedia.org/wiki/Abstract_syntax_tree#Other_usages

An AST is a powerful abstraction to perform code [clone detection](https://en.wikipedia.org/wiki/Clone_detection "Clone detection").


### CST (Concrete Syntax Tree) & Parse Trees
> 🔗 https://en.wikipedia.org/wiki/Parse_tree

A **parse tree** or **parsing tree** (also known as a **derivation tree** or **concrete syntax tree**) is an ordered, rooted [tree](https://en.wikipedia.org/wiki/Tree_\(data_structure\) "Tree (data structure)") that represents the [syntactic](https://en.wikipedia.org/wiki/Syntax "Syntax") structure of a [string](https://en.wikipedia.org/wiki/String_\(computer_science\) "String (computer science)") according to some [context-free grammar](https://en.wikipedia.org/wiki/Context-free_grammar "Context-free grammar"). The term _parse tree_ itself is used primarily in [computational linguistics](https://en.wikipedia.org/wiki/Computational_linguistics "Computational linguistics"); in theoretical syntax, the term _syntax tree_ is more common.

Concrete syntax trees reflect the syntax of the input language, making them distinct from the [abstract syntax trees](https://en.wikipedia.org/wiki/Abstract_syntax_tree "Abstract syntax tree") used in computer programming. Unlike [Reed-Kellogg sentence diagrams](https://en.wikipedia.org/wiki/Sentence_diagram#Reed-Kellogg_system "Sentence diagram") used for teaching grammar, parse trees do not use distinct symbol shapes for different types of [constituents](https://en.wikipedia.org/wiki/Constituent_\(linguistics\) "Constituent (linguistics)").

Parse trees are usually constructed based on either the constituency relation of constituency grammars ([phrase structure grammars](https://en.wikipedia.org/wiki/Phrase_structure_grammar "Phrase structure grammar")) or the dependency relation of [dependency grammars](https://en.wikipedia.org/wiki/Dependency_grammar "Dependency grammar"). Parse trees may be generated for [sentences](https://en.wikipedia.org/wiki/Sentence_\(linguistics\) "Sentence (linguistics)") in [natural languages](https://en.wikipedia.org/wiki/Natural_language "Natural language") (see [natural language processing](https://en.wikipedia.org/wiki/Natural_language_processing "Natural language processing")), as well as during [processing](https://en.wikipedia.org/wiki/Compiler "Compiler") of computer languages, such as [programming languages](https://en.wikipedia.org/wiki/Programming_language "Programming language").

A related concept is that of **phrase marker** or **P-marker**, as used in [transformational generative grammar](https://en.wikipedia.org/wiki/Transformational_generative_grammar "Transformational generative grammar"). A phrase marker is a linguistic expression marked as to its phrase structure. This may be presented in the form of a tree, or as a bracketed expression. Phrase markers are generated by applying [phrase structure rules](https://en.wikipedia.org/wiki/Phrase_structure_rules "Phrase structure rules"), and themselves are subject to further transformational rules. A set of possible parse trees for a [syntactically ambiguous](https://en.wikipedia.org/wiki/Syntactically_ambiguous "Syntactically ambiguous") sentence is called a "parse forest".
#### Constituency-Based Parse Trees

#### Dependency-Based Parse Trees



## AST Algorithms
### Pointer
![Screenshot 2023-01-23 at 1.14.03 AM](../../../../../../../../Assets/Pics/Screenshot%202023-01-23%20at%201.14.03%20AM.png)

一个简单的双指针。

就题目本身来说可以直接进行单调栈判断。


### Recursion
![Screenshot 2023-01-23 at 1.19.32 AM](../../../../../../../../Assets/Pics/Screenshot%202023-01-23%20at%201.19.32%20AM.png)

![Screenshot 2023-01-23 at 1.16.57 AM](../../../../../../../../Assets/Pics/Screenshot%202023-01-23%20at%201.16.57%20AM.png)

![Screenshot 2023-01-23 at 1.15.45 AM](../../../../../../../../Assets/Pics/Screenshot%202023-01-23%20at%201.15.45%20AM.png)

主要思想就是递归+记忆化。这里JS实现的比较简洁，利用了JS语言的一些特性。


### Stack
![Screenshot 2023-01-23 at 1.20.05 AM](../../../../../../../../Assets/Pics/Screenshot%202023-01-23%20at%201.20.05%20AM.png)

![Screenshot 2023-01-23 at 1.20.52 AM](../../../../../../../../Assets/Pics/Screenshot%202023-01-23%20at%201.20.52%20AM.png)

利用栈的后进先出的特点进行问题的数学建模。



## Ref
[AST(抽象语法树)超详细 | CSDN]: https://blog.csdn.net/weixin_39408343/article/details/95984062

[🎬【尚硅谷】Vue源码解析之AST抽象语法树]: https://www.bilibili.com/video/BV1GK4y1W7fi/?p=9&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
