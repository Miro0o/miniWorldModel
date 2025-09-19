# Formal Syntax, Language Grammar, and BNF

[TOC]



## Res
### Related Topics
↗ [Automata Theory and (Formal) Language Theory](../😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Automata%20Theory%20and%20(Formal)%20Language%20Theory.md)
- ↗ [Regular Language (RL) & Finite Automata (FA)](../😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Regular%20Language%20(RL)%20&%20Finite%20Automata%20(FA).md)
- ↗ [Context-Free Languages (CFL) & Push-Down Automata (PDA)](../😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Context-Free%20Languages%20(CFL)%20&%20Push-Down%20Automata%20(PDA).md)
- ↗ [Context-Sensitive Languages (CSL) & Linear-Bounded Automata (LBA)](../😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Context-Sensitive%20Languages%20(CSL)%20&%20Linear-Bounded%20Automata%20(LBA).md)
- ↗ [Computability Theory - Turing Machine and R.E. Language](../😶‍🌫️%20Theory%20of%20Computation/Computability%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language/Computability%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language.md)
↗ [Computer Languages & Programming Methodology](../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Computer%20Languages%20&%20Programming%20Methodology.md)
- ↗ [Logic Programming Languages](../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20for%20Specific%20Areas/Logic%20Programming%20Languages/Logic%20Programming%20Languages.md)
↗ [Formal Semantics and Programming Language](../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Formal%20Semantics%20and%20Programming%20Language/Formal%20Semantics%20and%20Programming%20Language.md)

↗ [Natural Language Processing (NLP)](../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/Natural%20Language%20Processing%20(NLP)/Natural%20Language%20Processing%20(NLP).md)

↗ [Language & Literature](../../../../Other%20Networks%20of%20Knowledge/Arts%20&%20Cultures/📃%20Language%20&%20Literature/Language%20&%20Literature.md)



## Intro



## BNF (Backus–Naur form)
> 🔗 https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form

In [computer science](https://en.wikipedia.org/wiki/Computer_science "Computer science"), **Backus–Naur form** (**BNF**, pronounced [/ˌbækəs ˈnaʊər/](https://en.wikipedia.org/wiki/Help:IPA/English "Help:IPA/English")), also known as **Backus normal form**, is a notation system for defining the [syntax](https://en.wikipedia.org/wiki/Syntax_\(programming_languages\) "Syntax (programming languages)") of [programming languages](https://en.wikipedia.org/wiki/Programming_language "Programming language") and other [formal languages](https://en.wikipedia.org/wiki/Formal_language "Formal language"), developed by [John Backus](https://en.wikipedia.org/wiki/John_Backus "John Backus") and [Peter Naur](https://en.wikipedia.org/wiki/Peter_Naur "Peter Naur"). It is a [metasyntax](https://en.wikipedia.org/wiki/Metasyntax "Metasyntax") for [context-free grammars](https://en.wikipedia.org/wiki/Context-free_grammar "Context-free grammar"), providing a precise way to outline the rules of a language's structure.

It has been widely used in official specifications, manuals, and textbooks on [programming language theory](https://en.wikipedia.org/wiki/Programming_language_theory "Programming language theory"), as well as to describe [document formats](https://en.wikipedia.org/wiki/Document_format "Document format"), [instruction sets](https://en.wikipedia.org/wiki/Instruction_set "Instruction set"), and [communication protocols](https://en.wikipedia.org/wiki/Communication_protocol "Communication protocol"). Over time, variations such as [extended Backus–Naur form](https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form "Extended Backus–Naur form") (EBNF) and [augmented Backus–Naur form](https://en.wikipedia.org/wiki/Augmented_Backus%E2%80%93Naur_form "Augmented Backus–Naur form") (ABNF) have emerged, building on the original framework with added features.


### Structure
BNF specifications outline how symbols are combined to form syntactically valid sequences. Each BNF consists of three core components: a set of [non-terminal symbols](https://en.wikipedia.org/wiki/Nonterminal_symbol "Nonterminal symbol"), a set of [terminal symbols](https://en.wikipedia.org/wiki/Terminal_symbol "Terminal symbol"), and a series of derivation rules. Non-terminal symbols represent categories or variables that can be replaced, while terminal symbols are the fixed, literal elements (such as keywords or punctuation) that appear in the final sequence. Derivation rules provide the instructions for replacing non-terminal symbols with specific combinations of symbols.

A derivation rule is written in the format:
``` BNF
 <symbol> ::= __expression__
```

where:
- `<symbol)>` is a non-terminal symbol, enclosed in angle brackets (<>), identifying the category to be replaced
- `::=` is a meta-symbol meaning "is replaced by,"
- [`__expression__`](https://en.wikipedia.org/wiki/Expression_\(mathematics\) "Expression (mathematics)") is the replacement, consisting of one or more sequences of symbols—either terminal symbols (e.g., literal text like "Sr." or ",") or non-terminal symbols (e.g., `<last-name>`)—with options separated by a [vertical bar](https://en.wikipedia.org/wiki/Vertical_bar "Vertical bar") (|) to indicate alternatives.

For example, in the rule `<opt-suffix-part> ::= "Sr." | "Jr." | ""`, the entire line is the derivation rule, "Sr.", "Jr.", and "" (an empty string) are terminal symbols, and `<opt-suffix-part>` is a non-terminal symbol.

Generating a valid sequence involves starting with a designated start symbol and iteratively applying the derivation rules. This process can extend sequences incrementally. To allow flexibility, some BNF definitions include an optional "delete" symbol (represented as an empty alternative,  e.g., `<item> : : = <thing> |`), enabling the removal of certain elements while maintaining syntactic validity.



## Ref
