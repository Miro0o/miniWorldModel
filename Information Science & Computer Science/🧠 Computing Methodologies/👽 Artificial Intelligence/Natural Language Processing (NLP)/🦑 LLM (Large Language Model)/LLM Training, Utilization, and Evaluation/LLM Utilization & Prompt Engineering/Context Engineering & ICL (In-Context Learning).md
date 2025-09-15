# Context Engineering & ICL (In-Context Learning)

[TOC]



## Res
### Related Topics


### Other Resources
https://deepwiki.com/davidkimai/Context-Engineering
https://github.com/davidkimai/Context-Engineering
![](../../../../../../../Assets/Pics/Pasted%20image%2020250905000938.png)



## Intro



## Ref
Deng, Y., Xia, C. S., Yang, C., Zhang, S. D., Yang, S., & Zhang, L. (2024). Large Language Models are Edge-Case Generators: Crafting Unusual Programs for Fuzzing Deep Learning Libraries. Proceedings of the IEEE/ACM 46th International Conference on Software Engineering, 1–13. https://doi.org/10.1145/3597503.3623343
- In order to apply LLMs for down-stream applications, there are two main paradigms: Fine-tuning [50] and In-context learning [7, 51]. Fine-tuning is the process of updating the model weights by learning the desired output from the given input of a specific downstream task dataset. The resulting fine-tuned LLM can be treated as specialized models designed to perform a particular task such as code summarization [4] and program repair [72]. Different from fine-tuning, which typically requires large downstream datasets to update the model, in-context learning only requires a few examples/demonstration of the downstream task. In-context learning directly uses the pre-trained LLM without any weight modification by constructing an input which contains multiple (i.e., few-shot) examples of input/output demonstrations and then the final task to be solved. Through looking at the context, LLMs can directly learn the goal of the specific task and expected output format without fine-tuning. Various techniques have been proposed to improve in-context learning, in particular via example selection [35, 53], and via multi-step reasoning using Scratchpad [44] or Chain-of-Thought [70]. Together, in-context learning and fine-tuning are two different approaches to prime LLMs for downstream tasks.
