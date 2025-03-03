# regex (Regular Expression)

[TOC]



## Res
### Related Subjects
↗ [Automata Theory and (Formal) Language Theory](../../../../../🧮%20Math%20&%20Theoretical%20Computer%20Science%20(TCS)/🤼‍♀️%20Mathematical%20Logics/😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Automata%20Theory%20and%20(Formal)%20Language%20Theory.md)
↗ [Regular Language](../../../../../🧮%20Math%20&%20Theoretical%20Computer%20Science%20(TCS)/🤼‍♀️%20Mathematical%20Logics/😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Regular%20Language.md)

↗ [Files & Texts Filters /Codes Filters /Finders](../../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/Linux%20Free%20Software%20&%20OSS%20(Open%20Source%20Software)/Text%20&%20File%20&%20Dir%20Management/Files%20&%20Texts%20Filters.md#Codes%20Filters%20/Finders)


### Tutorial & Docs
[short interactive regex tutorial](https://regexone.com/)
[regex101](https://regex101.com/r/qqbZqh/2)



## Intro
A **regular expression**(shortened as **regex** or **regexp**; sometimes referred to as **rational expression**) is a sequence of characters that specifies a [match pattern](https://en.wikipedia.org/wiki/Pattern_matching "Pattern matching") in text. Usually such patterns are used by [string-searching algorithms](https://en.wikipedia.org/wiki/String-searching_algorithm "String-searching algorithm") for "find" or "find and replace" operations on strings, or for [input validation](https://en.wikipedia.org/wiki/Data_validation "Data validation"). 


### Regular Expression & Regex
Regular expression techniques are developed in ↗ [Theoretical Computer Science (TCS)](../../../../../🧮%20Math%20&%20Theoretical%20Computer%20Science%20(TCS)/Math%20&%20Theoretical%20Computer%20Science%20(TCS).md) and ↗ [Automata Theory and (Formal) Language Theory](../../../../../🧮%20Math%20&%20Theoretical%20Computer%20Science%20(TCS)/🤼‍♀️%20Mathematical%20Logics/😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Automata%20Theory%20and%20(Formal)%20Language%20Theory.md). The concept of regular expressions began in the 1950s, when the American mathematician [Stephen Cole Kleene](https://en.wikipedia.org/wiki/Stephen_Cole_Kleene "Stephen Cole Kleene") formalized the concept of a [regular language](https://en.wikipedia.org/wiki/Regular_language "Regular language"). (In which description regular language is a formal language defined by regular expression) They came into common use with Unix text-processing utilities.

But distinct from these theories, when referring to "regular expression" or "regex/regexp" in this context, they often mean the technology/algorithms applied in finding patterns of both regular language/ non-regular language. Hence to be distinct, the name "regex/regexp" is coined in this context. However the use of term "regex/regexp" and regular expression are often interchanged and in most of the cases seen in internet they actually carry the same meaning.

> "In _theoretical computer science_ and _formal language theory_, a **regular language** (also called a rational language) is a **formal language** that can be defined by a **regular expression**, in the strict sense in theoretical computer science (as opposed to many modern regular expression engines, which are augmented with features that allow the recognition of non-regular languages)."
> 
> ↗ [Regular Language](../../../../../🧮%20Math%20&%20Theoretical%20Computer%20Science%20(TCS)/🤼‍♀️%20Mathematical%20Logics/😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Regular%20Language.md)


### Regular Expression Uses
Regular expressions are used in [search engines](https://en.wikipedia.org/wiki/Search_engine "Search engine"), in search and replace dialogs of [word processors](https://en.wikipedia.org/wiki/Word_processor "Word processor") and [text editors](https://en.wikipedia.org/wiki/Text_editor "Text editor"), in [text processing](https://en.wikipedia.org/wiki/Text_processing "Text processing") utilities such as [sed](https://en.wikipedia.org/wiki/Sed "Sed") and [AWK](https://en.wikipedia.org/wiki/AWK "AWK"), and in [lexical analysis](https://en.wikipedia.org/wiki/Lexical_analysis "Lexical analysis"). Regular expressions are supported in many programming languages.

Regexes are useful in a wide variety of text processing tasks, and more generally [string processing](https://en.wikipedia.org/wiki/String_processing "String processing"), where the data need not be textual. Common applications include [data validation](https://en.wikipedia.org/wiki/Data_validation "Data validation"), [data scraping](https://en.wikipedia.org/wiki/Data_scraping "Data scraping") (especially [web scraping](https://en.wikipedia.org/wiki/Web_scraping "Web scraping")), [data wrangling](https://en.wikipedia.org/wiki/Data_wrangling "Data wrangling"), simple [parsing](https://en.wikipedia.org/wiki/Parsing "Parsing"), the production of [syntax highlighting](https://en.wikipedia.org/wiki/Syntax_highlighting "Syntax highlighting") systems, and many other tasks.

While regexes would be useful on Internet [search engines](https://en.wikipedia.org/wiki/Search_engine_(computing) "Search engine (computing)"), processing them across the entire database could consume excessive computer resources depending on the complexity and design of the regex. Although in many cases system administrators can run regex-based queries internally, most search engines do not offer regex support to the public. Notable exceptions include [Google Code Search](https://en.wikipedia.org/wiki/Google_Code_Search "Google Code Search") and [Exalead](https://en.wikipedia.org/wiki/Exalead "Exalead"). However, Google Code Search was shut down in January 2012.



## Regex Syntax
Different [syntaxes](https://en.wikipedia.org/wiki/Syntax_(programming_languages) "Syntax (programming languages)") for writing regular expressions have existed since the 1980s, one being the [POSIX](https://en.wikipedia.org/wiki/POSIX "POSIX") standard and another, widely used, being the [Perl](https://en.wikipedia.org/wiki/Perl "Perl") syntax.


### 1️⃣ POSIX Regex & POSIX Compatible Regular Expressions
↗ [POSIX Regex](POSIX%20Regex/POSIX%20Regex.md)


### 2️⃣ Perl Regex & PCRE (Perl Compatible Regular Expressions)
↗ [Perl Regex](Perl%20Regex/Perl%20Regex.md)



## Implementations and Running Times
> ↗ [Files & Texts Filters /Codes Filters /Finders](../../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/Linux%20Free%20Software%20&%20OSS%20(Open%20Source%20Software)/Text%20&%20File%20&%20Dir%20Management/Files%20&%20Texts%20Filters.md#Codes%20Filters%20/Finders)

There are at least three different [algorithms](https://en.wikipedia.org/wiki/Algorithm "Algorithm") that decide whether and how a given regex matches a string.


### BSD grep


### GNU grep



## Regex Implementations & Encodings
In theoretical terms, any token set can be matched by regular expressions as long as it is pre-defined. In terms of historical implementations, regexes were originally written to use [ASCII](https://en.wikipedia.org/wiki/American_Standard_Code_for_Information_Interchange "American Standard Code for Information Interchange") characters as their token set though regex libraries have supported numerous other [character sets](https://en.wikipedia.org/wiki/Character_set "Character set"). Many modern regex engines offer at least some support for [Unicode](https://en.wikipedia.org/wiki/Unicode "Unicode"). In most respects it makes no difference what the character set is, but some issues do arise when extending regexes to support Unicode.



## Ref
[Why does this BSD grep result differ from GNU grep? | StackExchange]: https://unix.stackexchange.com/questions/352977/why-does-this-bsd-grep-result-differ-from-gnu-grep

I think this might be a bug in FreeBSD's grep. There's a [bug report](https://bugs.freebsd.org/bugzilla/show_bug.cgi?id=201650) with similar issues.
