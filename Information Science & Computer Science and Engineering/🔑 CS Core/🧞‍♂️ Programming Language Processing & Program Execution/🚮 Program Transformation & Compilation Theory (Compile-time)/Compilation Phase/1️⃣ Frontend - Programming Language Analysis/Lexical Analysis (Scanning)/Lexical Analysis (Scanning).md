# Lexical Analysis (Scanning)

[TOC]



## Res
### Related Topics
↗ [Tokenization Techniques & Tokenizers](../../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/LLM%20Training,%20Utilization,%20and%20Evaluation/LLM%20Training/Pre-Training/Tokenization%20Techniques%20&%20Tokenizers/Tokenization%20Techniques%20&%20Tokenizers.md)
↗ [BPE (Byte Pair Encoding)](../../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/LLM%20Training,%20Utilization,%20and%20Evaluation/LLM%20Training/Pre-Training/Tokenization%20Techniques%20&%20Tokenizers/BPE%20(Byte%20Pair%20Encoding).md)

↗ [Code Linters & Formatters](../../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/Code%20Linters%20&%20Formatters/Code%20Linters%20&%20Formatters.md)
↗ [Code Linters](../../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/Code%20Linters%20&%20Formatters/Code%20Linters.md)
↗ [Code Formatters](../../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/Code%20Linters%20&%20Formatters/Code%20Formatters.md)


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Lexical_analysis

**Lexical tokenization** is conversion of a text into (semantically or syntactically) meaningful _lexical tokens_ belonging to categories defined by a "lexer" program. In case of a natural language, those categories include nouns, verbs, adjectives, punctuations etc. In case of a programming language, the categories include [identifiers](https://en.wikipedia.org/wiki/Identifier_\(computer_languages\) "Identifier (computer languages)"), [operators](https://en.wikipedia.org/wiki/Operator_\(computer_programming\) "Operator (computer programming)"), [grouping symbols](https://en.wikipedia.org/wiki/Symbols_of_grouping "Symbols of grouping"), [data types](https://en.wikipedia.org/wiki/Data_type "Data type") and language keywords. Lexical tokenization is related to the type of tokenization used in [large language models](https://en.wikipedia.org/wiki/Large_language_model "Large language model") (LLMs) but with two differences. First, lexical tokenization is usually based on a [lexical grammar](https://en.wikipedia.org/wiki/Lexical_grammar "Lexical grammar"), whereas LLM tokenizers are usually [probability](https://en.wikipedia.org/wiki/Probability "Probability")-based. Second, LLM tokenizers perform a second step that converts the tokens into numerical values.



## Ref
