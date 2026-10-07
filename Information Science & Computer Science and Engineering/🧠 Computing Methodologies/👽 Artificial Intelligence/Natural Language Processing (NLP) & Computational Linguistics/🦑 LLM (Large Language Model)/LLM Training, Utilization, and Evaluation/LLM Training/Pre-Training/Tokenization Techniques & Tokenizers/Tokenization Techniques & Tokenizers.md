# Tokenization Techniques & Tokenizers

[TOC]



## Res
### Related Topics
↗ [Lexical Analysis (Scanning)](../../../../../../../../🔑%20CS%20Core/🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Transformation%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/1️⃣%20Frontend%20-%20Programming%20Language%20Analysis/Lexical%20Analysis%20(Scanning)/Lexical%20Analysis%20(Scanning).md)

↗ [Syntactic Analysis (Parsing)](../../../../../../../../🔑%20CS%20Core/🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Transformation%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/1️⃣%20Frontend%20-%20Programming%20Language%20Analysis/Syntactic%20Analysis%20(Parsing)/Syntactic%20Analysis%20(Parsing).md)
↗ [AST & CST (Abstract & Contrete Syntax Tree)](../../../../../../../../🔑%20CS%20Core/🧞‍♂️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Transformation%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/1️⃣%20Frontend%20-%20Programming%20Language%20Analysis/Syntactic%20Analysis%20(Parsing)/AST%20&%20CST%20(Abstract%20&%20Contrete%20Syntax%20Tree).md)


### Other Resources



## Intro
> [!Papers]
> Tokenization:
> - [Between words and characters: A Brief History of Open-Vocabulary Modeling and Tokenization in NLP](https://arxiv.org/pdf/2112.10508.pdf). _Sabrina J. Mielke, Zaid Alyafeai, Elizabeth Salesky, Colin Raffel, Manan Dey, Matthias Gallé, Arun Raja, Chenglei Si, Wilson Y. Lee, Benoît Sagot, Samson Tan_. 2021. Comprehensive survey of tokenization.
> - [Neural Machine Translation of Rare Words with Subword Units](https://arxiv.org/pdf/1508.07909.pdf). _Rico Sennrich, B. Haddow, Alexandra Birch_. ACL 2015. Introduces **byte pair encoding** into NLP. Used by GPT-2, GPT-3.
> - [Google’s Neural Machine Translation System: Bridging the Gap between Human and Machine Translation](https://arxiv.org/pdf/1609.08144.pdf). _Yonghui Wu, M. Schuster, Z. Chen, Quoc V. Le, Mohammad Norouzi, Wolfgang Macherey, M. Krikun, Yuan Cao, Qin Gao, Klaus Macherey, J. Klingner, Apurva Shah, Melvin Johnson, Xiaobing Liu, Lukasz Kaiser, Stephan Gouws, Y. Kato, Taku Kudo, H. Kazawa, K. Stevens, George Kurian, Nishant Patil, W. Wang, C. Young, Jason R. Smith, Jason Riesa, Alex Rudnick, Oriol Vinyals, G. Corrado, Macduff Hughes, J. Dean_. 2016. Introduces **WordPiece**. Used by BERT.
> - [SentencePiece: A simple and language independent subword tokenizer and detokenizer for Neural Text Processing](https://arxiv.org/pdf/1808.06226.pdf). _Taku Kudo, John Richardson_. EMNLP 2018. Introduces **SentencePiece**.

> 🔗 https://stanford-cs324.github.io/winter2022/lectures/modeling/#model-architecture



## Ref
