# Syntactic Analysis (Parsing)

[TOC]



## Res
### Related Topics
↗ [Formal Syntax & Metasyntax (and Metalanguage)](../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/📌%20Formal%20Syntax%20&%20Metasyntax%20(and%20Metalanguage)/Formal%20Syntax%20&%20Metasyntax%20(and%20Metalanguage).md)
↗ [Attribute Grammars](../../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Formal%20Semantics%20and%20Programming%20Language/Attribute%20Grammars.md)

↗ [Theory of Computation](../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Theory%20of%20Computation.md)
- ↗ [Automata Theory and (Formal) Language Theory](../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Automata%20Theory%20and%20(Formal)%20Language%20Theory.md)
	- ↗ [Context-Free Languages (CFL) & Push-Down Automata (PDA)](../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Context-Free%20Languages%20(CFL)%20&%20Push-Down%20Automata%20(PDA).md)
	- ↗ [Context-Sensitive Languages (CSL) & Linear-Bounded Automata (LBA)](../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Context-Sensitive%20Languages%20(CSL)%20&%20Linear-Bounded%20Automata%20(LBA).md)
- ↗ [Computability (Recursion) Theory - Turing Machine and R.E. Language](../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language.md)

↗ [Software (Program) Analysis Basics](../../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/📌%20Software%20(Program)%20Analysis%20Basics/Software%20(Program)%20Analysis%20Basics.md)
↗ [SCA (Static Code Analysis) & SAST](../../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/📌%20Software%20(Program)%20Analysis%20Basics/👚%20SCA%20(Static%20Code%20Analysis)%20&%20SAST/SCA%20(Static%20Code%20Analysis)%20&%20SAST.md)


### Other Resources
[Syntactic Analysis](https://courses.compute.dtu.dk/02242/topics/syntactic-analysis.html)



## Intro
![Drawing 2025-09-09 22.37.45.excalidraw | 800](../../../../../../../Assets/Illustrations/Computer%20Language/Language_and_Programming_Language_Processing.md)
<small>For different levels in code analysis, we use different computational models. </small>

> 🔗 https://courses.compute.dtu.dk/02242/topics/syntactic-analysis.html

As mentioned in the introduction, a syntactic analysis analyses the structure of a program, instead of looking at the meaning of it. For example, in syntactic analysis `2 + 1` is different from `1 + 2`. This makes it ideal for capturing the intent of the developer, but not great for detecting complex logical bugs.

Many static analyses in the wild, often called ↗ _[Code Linters](../../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/Code%20Linters%20&%20Formatters/Code%20Linters.md)_, are simply syntactic analyses, matching patterns in the code. They do this for two reasons. The first is that it is easier than to develop and maintain and the second is that it gives better feedback to the developer, as you can highlight the pattern in the source.

==To conclude, to do syntactic analysis is to match patterns in the (computer) language.==


### The Scope of Syntactic Analysis & The Levels of Syntax by Programming Language Processing
> 🔗 https://courses.compute.dtu.dk/02242/topics/syntactic-analysis.html

When matching syntax it is important to match at the right level of abstraction. Initial levels contain more of the developers intention, but later levels gives us more structure, making the analysis more robust and easier to write.

We can start by analysing the text directly, this allows us to extract information about the white-space of the program. However, if we don't think that the white-space is important for the analysis, we can look at the tokens instead. The _tokens_ is a list of elements matched by the parser to group patterns like integer literals `1232` and `232`, so that they appear the same to the parser.

The parser converts the list of tokens into a _Concrete Syntax Tree_. A CST is the collection of all the tokens of the program, but placed in a tree like structure. For example `10 + (5 + 3)` is turned into a tree like `(parenthesis (+ 10 (parenthesis (+ 5 3))))` instead. This deals with precedence and other headaches we don't want to think about. E.g ., is `10 + 3 * 5` equal to `10 + (3 * 5)` or `(10 + 3) * 5`?

In contrast to CST, _Abstract Syntax Tree_ does not have to follow directly from the structure of the text. This allows the AST to remove seemingly unimportant information from the tree. E.g ., parenthesis: `(( 10 ))` and `( 10 )` are both stored as `10`.

The compiler then coverts the AST into a some kind of _Intermediate Representation_, this can be the [LLVM-IR](https://llvm.org/devmtg/2017-06/1-Davis-Chisnall-LLVM-2017.pdf), [ClangIR](https://llvm.github.io/clangir), or [RTL](https://gcc.gnu.org/onlinedocs/gccint/RTL.html). At this level, a lot of work has been done by the compiler to disambiguate references (making all variables fully qualified) and optimize some cases. `x + 2 + 4` might now be `mypackage.Class.x + 6`, which makes some kinds of analysis easier.

Finally the IR is complied to _Bytecode_, now the style from the original language is gone, and only pure functionality is left.

While every step down the latter makes it easier to write analyses, we lose a little of the context and intention of the developer.


### The Goal of Syntactic Analysis
> 🔗 https://courses.compute.dtu.dk/02242/topics/syntactic-analysis.html#sec:1.2

Since a syntactic analysis can never be sound (accepting only good programs), we often have to aim for complete (rejecting no good program). This is in line with a study by [Christakis (2016)](https://courses.compute.dtu.dk/02242/topics/syntactic-analysis.html#ref:christakis2016what), that shows that most developers would rather have an unsound analysis than too many warnings. Here are two quotes from the findings:

> Program analysis design should aim for a false-positive rate no higher than **15–20%**.
> 
> — Christakis and Bird

> When forced to choose between more bugs or fewer false positives, [developers] typically choose the latter.
> 
> — Christakis and Bird


### Formal Language and Formal Syntax
> ↗ [Formal Syntax & Metasyntax (and Metalanguage)](../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/📌%20Formal%20Syntax%20&%20Metasyntax%20(and%20Metalanguage)/Formal%20Syntax%20&%20Metasyntax%20(and%20Metalanguage).md)
> 
> 🔗 https://courses.compute.dtu.dk/02242/topics/syntactic-analysis.html#sec:2.1

In Computer Science, we refer to a _language_ as a set of a sequence of _symbols_ (or, a set of *words*) from the _alphabet_.

The goal is automatically to figure out if a given word is in the language or not. We differentiate between _Recognizers_ and _Deciders_. A decider, is a machine (or _Automaton_), which can determine if a string is in a language or not. A recognizer does the same thing, but is allowed to never give an answer. Essentially run forever.

↗ [Automata Theory and (Formal) Language Theory](../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Automata%20Theory%20and%20(Formal)%20Language%20Theory.md)
#### Levels of Syntax by Chomsky Hierarchy
![](../../../../../../../Assets/Pics/Pasted%20image%2020240909175821.png)

> 🔗 https://courses.compute.dtu.dk/02242/topics/syntactic-analysis.html#sec:2.3

It separates languages into four categories of decreasing expressive power. On the top of the hierarchy, we _type 3_ languages. The _type 3_ language category is the most restrictive, and contain all languages definable by regular expressions. In practice, this only allows for repeats of small languages and cannot match nested parenthesis. Figuring out if a string is in a _type 3_ language is decidable.

In a _type 2_ language we can have words defined by nesting. This is very useful if you want nested parenthesis. This language is the basis of the syntax of most programming languages (except C: `typedef` I'm looking at you!). Type 2 languages can be recognized using a [push down automaton](https://en.wikipedia.org/wiki/Pushdown_automaton).

In a _type 1_ language, we can define our language recursively, but we are also allowed to give context to the recursion. For example checking a program to see if a variable is in scope, is context sensitive because it depends on the declarations and how nested we are in the curly parenthesis:

```C
int hello(int x) { 
  // Context { x , y }
  int y; 
  { 
    int z; 
    // Context { x , y, z} is z in scope? Yes
  }
  // Context { x , y} is z in scope? No
}
```

Finally, we have _type 0_ languages, is a set of words which can be recognized by a Turing machine. One example is all programs that terminate.



## Syntactic Analysis (Pattern Match) In Practice
### Type-3 Regular Language: Regular Expression
> ↗ [Regular Language (RL) & Finite Automata (FA)](../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Regular%20Language%20(RL)%20&%20Finite%20Automata%20(FA).md)
> ↗ [regex (Regular Expression)](../../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20for%20Specific%20Areas/🪁%20DSL(Domain%20Specific%20Languages)%20&%20GPL(General%20Purpose%20Languages)/📌%20regex%20(Regular%20Expression)/regex%20(Regular%20Expression).md)

> 🔗 https://courses.compute.dtu.dk/02242/topics/syntactic-analysis.html#sec:3.1


### Type-2 Context-Free Language: Grammars and Parsers 🤔
> ↗ [Context-Free Languages (CFL) & Push-Down Automata (PDA)](../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Context-Free%20Languages%20(CFL)%20&%20Push-Down%20Automata%20(PDA).md)
> 
> 🔗 [Backus–Naur form - Wikipedia](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form)
> 🔗 [Deterministic context-free language - Wikipedia](https://en.wikipedia.org/wiki/Deterministic_context-free_language)
> 🔗 [LR parser - Wikipedia](https://en.wikipedia.org/wiki/LR_parser)

> 🔗 https://courses.compute.dtu.dk/02242/topics/syntactic-analysis.html#sec:3.2

At this point it should be clear that using regular expressions for matching a Context Free language is a bad idea. The problem of course happens when we want to match items nested within other items.

Instead we want to use a _Parser_. A parser is a structured program which goal is to take in a stream of tokens and turn them into a CST.

Parsers are often generated automatically from grammars, and the grammars are often written in what is known as _Backus-Naur form_. In programming language theory, this is the primary way to define the syntax of a programming language.

It is created by a set of productions (like with our grammar), but we allow each production to have multiple matches, separated by `|`: $A:=abc|B|x*$ and $B := a$. The BNF is often extended with syntax for many "$⋅*$" and some "$⋅+$". Furthermore, we often uses first-match semantics where we match on the first production we can. This makes the language _deterministically context-free_, which changes the complexity of parsing a program from $O(n^3)$ to $O(n$).

(There are many categories of parsers. Compilation theory covers most of them. 🤔 ↗ [Program Language Processing & Compilation Theory (Compile-time)](../../../Program%20Language%20Processing%20&%20Compilation%20Theory%20(Compile-time).md))
#### `Tree-sitter`
🔗
-  [Tree-sitter](https://tree-sitter.github.io/)
-  [Wagner (1998)](https://courses.compute.dtu.dk/02242/topics/syntactic-analysis.html#ref:wagner1998efficient)
-  [Van Wyk (2007)](https://courses.compute.dtu.dk/02242/topics/syntactic-analysis.html#ref:vanwyk2007contextaware)
-  [Wagner (1997)](https://courses.compute.dtu.dk/02242/topics/syntactic-analysis.html#ref:wagner1997practical)
-  [A presentation of Tree-Sitter](https://www.youtube.com/watch?v=Jes3bD6P0To)
-  [A Comprehensive Introduction to Tree-sitter](https://derek.stride.host/posts/comprehensive-introduction-to-tree-sitter)

In practice, we can take a look at the grammars written for the [Tree-Sitter](https://tree-sitter.github.io/tree-sitter/creating-parsers#writing-the-grammar) generator. The cool thing about Tree-Sitter is that there [are defined grammars for most language](https://tree-sitter.github.io/tree-sitter) you would like to analyse, and has bindings to many languages including Java, Python, Go and Rust. In this example we are going to use Python (but try your own).

The result of parsing a program is an parse tree, or a CST. You can play around with seeing different parse trees in the [tree-sitter playground](https://tree-sitter.github.io/tree-sitter/7-playground.html).

At this point we would like to use this technology to match patterns in the code, to which we have two options. One solution is to extend the grammar to explicitly add rules that detect common errors. E.g ., we can write a parse rule that matches `x / 0`, and assigns it to a `div_error` group. However this is cumbersome, and not easily done. Our second option is to match patterns using Tree Sitters support for Queries, a built-in language for matching elements in the syntax tree. These queries are essentially regular expressions, but are matched at every level of the syntax tree.

You can write your own queries using the [Query Syntax](https://tree-sitter.github.io/tree-sitter/using-parsers#pattern-matching-with-queries).


**Example: Lambda Calculus**


### Type-1 Context-Sensitive Language: Trees 🤔
> ↗ [Context-Sensitive Languages (CSL) & Linear-Bounded Automata (LBA)](../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Context-Sensitive%20Languages%20(CSL)%20&%20Linear-Bounded%20Automata%20(LBA).md)

> 🔗 https://courses.compute.dtu.dk/02242/topics/syntactic-analysis.html#sec:3.3

One big limitation of Tree-sitter queries (in context-free language) is that they do not currently support nested queries, and we need those if we want to match patterns with context.


**Example: Code Context**
The context of the match is important, in the following code, we want to see if `assertFalse` contains a divide by 0 exception. But because our match matches every thing without context, we match the 1/0 in `divideByZero` by mistake.

```java
public class Simple {
  public static int assertFalse() {
    assert False;
  }
  public static int divideByZero() {
    return 1 / 0;
  }
}
```
#### Folds: General Matching of Patterns in Trees
> 🔗 [Fold (higher-order function) - Wikipedia](https://en.wikipedia.org/wiki/Fold_\(higher-order_function\))
> 🔗 [Catamorphism - Wikipedia](https://en.wikipedia.org/wiki/Catamorphism)
> 🔗 [Catamorphisms - School of Haskell | School of Haskell](https://www.schoolofhaskell.com/user/edwardk/recursion-schemes/catamorphisms)
> 🔗 [Meijer (1991)](https://courses.compute.dtu.dk/02242/topics/syntactic-analysis.html#ref:meijer1991functional)

We call recursively matching a pattern on a tree structure a fold. Actually, there is whole discipline in math devoted to this problem called Abstract Algebra (↗ [Algebraic Structure & Abstract Algebra & Modern Algebra](../../../../../../🧮%20Mathematics/🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra.md)). Here they have spend a lot of effort categorizing all kinds of folds (and unfolds). Here we refer to patterns as _Initial Algebras_, and we can see them as the nodes of the tree, where each edge is replaced by a hole. E.g ., the initial algebra of a list of $x$'s $[x]$ is $F[x]a=(x,a)+⊥$. The most common is called a catamorphism: $$𝚌𝚊𝚝𝚊:(F_Xa→a)→X→a$$which says I can reduce any structure $X$, with initial algebra $F_X$, given a function that given the algebra with have computed the value for all of your children, what is the value I should replace you with in your parent.
#### Tree Traversals & Traversal Order
> ↗ [Tree Basics](../../../../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Combinatorics%20(Combinatorial%20Mathematics)/🫆%20Graph%20Theory/📌%20Graph%20Theory%20Basics/Tree%20Basics.md)
> ↗ [Basic Searching](../../../../../🧙‍♂️%20Algorithm%20&%20Data%20Structure/Classic%20Algorithms%20by%20Problems%20&%20Contexts/Basic%20Searching/Basic%20Searching.md)
> 
> 🔗 [Tree traversal - Wikipedia](https://en.wikipedia.org/wiki/Tree_traversal) "An interactive demonstration of different tree traversal methods"

In practice, general recursion often expensive in terms of speed and memory. Luckily, all recursions can be made into iterative traversals by mimicking the stack. When we traverse we differentiate between pre and post orders. I.e., do we match for patterns on the way down or on the way up.

(In our case, we can use the built-in Tree-sitter cursor to traverse the tree.)

Tree traversal order comes from the DFS order to a binary tree: 

```C
struct node{
	int node_value;
	int left_child;
	int right_child;
}


// suppose the sentence "exec(node_value)" hit the current node.
// the position "exec()" is palced determin the tree traversal order.

int dfs(node n){
	// if "exec()" is placed here, this is the pre-order;
	dfs(n.left_child);
	// if "exec()" is placed here, this is the in-order;
	dfs(n.right_child);
	// if "exec()" is placed here, this is the post-order;
	
	return 0;
}


// reverse xx-order just means we go to right first, instead of left first.
int reverse_dfs(node n){
	// if "exec()" is placed here, this is the reverse pre-order;
	reverse_dfs(n.right_child);
	// if "exec()" is placed here, this is the reverse in-order;
	reverse_dfs(n.left_child);
	// if "exec()" is placed here, this is the reverse post-order;
	
	return 0;
}


// e.g.: reverse post-order
int reverse_dfs(node n){
	reverse_dfs(n.right_child);
	reverse_dfs(n.left_child);
	exec(n.note_value);
	
	return 0;
}
```


### Type-0 R.E. Language: Bespoke ⭐
> ↗ [Computability (Recursion) Theory - Turing Machine and R.E. Language](../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language.md)
> ↗ [SCA (Static Code Analysis) & SAST](../../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/📌%20Software%20(Program)%20Analysis%20Basics/👚%20SCA%20(Static%20Code%20Analysis)%20&%20SAST/SCA%20(Static%20Code%20Analysis)%20&%20SAST.md)
> ↗ [Static Code Analysis Tools (SCAT)](../../../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/⛰️%20Static%20Code%20Analysis%20Tools%20(SCAT)/Static%20Code%20Analysis%20Tools%20(SCAT).md)
> ↗ [Code Linters & Formatters](../../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/Code%20Linters%20&%20Formatters/Code%20Linters%20&%20Formatters.md)

> 🔗 https://courses.compute.dtu.dk/02242/topics/syntactic-analysis.html#sec:3.4

To match languages beyond Context-Insensitive languages, there exist some tools, but it becomes harder and harder to match full languages efficiently. In this case you have to write bespoke analyses in your favorite language.

Almost all syntactic static analyses or linters falls into this category. Here are some examples:
- [`https://spotbugs.github.io`](https://spotbugs.github.io/)
- [`https://eslint.org`](https://eslint.org/)

There is still interesting work in building an easy and intuitive system for pattern match normal programming constructs with recent work like [Rafnsson (2020)](https://courses.compute.dtu.dk/02242/topics/syntactic-analysis.html#ref:rafnsson2020fixing) and [Tomasdottir (2020)](https://courses.compute.dtu.dk/02242/topics/syntactic-analysis.html#ref:tomasdottir2020adoption).

Another approach is to use LLMs. An LLM due to its fixed input window, can only recognize regular languages, however in practice, they tend to do well on simple analysis tasks because of its ability to recognize common patterns.



## Ref
