# RAG (Retrieval Augmented Generation)

[TOC]



## Res
### Related Topics


### Other Resources



## Intro
When dealing with real-time information or specialized domain knowledge, LLMs may struggle to generate accurate outputs solely based on their internal knowledge. To address this issue, retrieval-augmented generation (RAG) technique [1024, 1025] has been proposed by incorporating external knowledge source for improving the model response. This technique aims to retrieve relevant information from external sources (e.g., the internet or domain-specific knowledge bases) using an information retrieval system, thereby providing LLMs with timely or domain-relevant context to reduce the factual errors in generated content. In the format, RAG can also be considered as a specific prompting strategy that integrates auxiliary information from external sources into the original prompt.



## Ref
[👍 Fine-Tuning, PEFT, Prompt Engineering, and RAG]: https://deci.ai/blog/fine-tuning-peft-prompt-engineering-and-rag-which-one-is-right-for-you/

[Coze与Dify知识库问答对比 | 国产AI应用开发平台扣子能遥遥领先吗？ | youtube]: https://youtu.be/yThgq4OdTdw?si=lZaZiVIpOIM2Cin8
- naive rag:
	- ![](../../../../../../../Assets/Pics/Screenshot%202025-11-01%20at%2022.49.40.png)
- Parent Document Retriever
	- ![](../../../../../../../Assets/Pics/Screenshot%202025-11-01%20at%2022.50.09.png)
