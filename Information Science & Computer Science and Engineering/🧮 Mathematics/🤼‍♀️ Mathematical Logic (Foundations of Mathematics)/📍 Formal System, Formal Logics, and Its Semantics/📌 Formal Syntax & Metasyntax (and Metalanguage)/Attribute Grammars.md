# Attribute Grammars

[TOC]



## Res
### Related Topics
↗ [Context-Free Languages (CFL) & Push-Down Automata (PDA)](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Context-Free%20Languages%20(CFL)%20&%20Push-Down%20Automata%20(PDA).md)

↗ [Formal Semantics and Programming Language](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Formal%20Semantics%20and%20Programming%20Language/Formal%20Semantics%20and%20Programming%20Language.md)


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Attribute_grammar

An **attribute grammar** is a formal way to supplement a [formal grammar](https://en.wikipedia.org/wiki/Formal_grammar "Formal grammar") with semantic information processing. Semantic information is stored in [attributes](https://en.wikipedia.org/wiki/Attribute_\(computing\) "Attribute (computing)") associated with [terminal and nonterminal symbols](https://en.wikipedia.org/wiki/Terminal_and_nonterminal_symbols "Terminal and nonterminal symbols") of the grammar. The values of attributes are the result of attribute evaluation rules associated with productions of the grammar. Attributes allow the transfer of information from anywhere in the [abstract syntax tree](https://en.wikipedia.org/wiki/Abstract_syntax_tree "Abstract syntax tree") to anywhere else, in a controlled and formal way.

Each semantic function deals with attributes of symbols occurring only in one production rule: both semantic function parameters and its result are attributes of symbols from one particular rule. When a semantic function defines the value of an attribute of the symbol on the left hand side of the rule, the attribute is called _synthesized_; otherwise it is called _inherited_. Thus, synthesized attributes serve to pass semantic information up the parse tree, while inherited attributes allow values to be passed from the parent nodes down and across the syntax tree.

In simple applications, such as evaluation of arithmetic expressions, attribute grammar may be used to describe the entire task to be performed besides parsing in straightforward way; in complicated systems, for instance, when constructing a language translation tool, such as a compiler, it may be used to validate semantic checks associated with a grammar, representing the rules of a language not explicitly imparted by the syntax definition. It may be also used by [parsers](https://en.wikipedia.org/wiki/Parser "Parser") or [compilers](https://en.wikipedia.org/wiki/Compiler "Compiler") to translate the syntax tree directly into code for some specific machine, or into some [intermediate language](https://en.wikipedia.org/wiki/Intermediate_language "Intermediate language").



## Ref
