# LLM Utilization & Prompt Engineering

[TOC]



## Res
### Related Topics


### Learning Resources
https://www.promptingguide.ai
intro to PE

[Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide)
The Prompt Engineering Guide is a project by [DAIR.AI](https://github.com/dair-ai). It aims to educate researchers and practitioners about prompt engineering.

We borrow inspirations from many open resources like [OpenAI CookBook](https://github.com/openai/openai-cookbook), [Pretrain, Prompt, Predict](http://pretrain.nlpedia.ai/), [Learn Prompting](https://learnprompting.org/), and many others.

[Learn Prompting](https://learnprompting.org/)

[ChatGPT3-Free-Prompt-List](https://github.com/mattnigh/ChatGPT3-Free-Prompt-List)

[Natural Language Processing with Deep Learning](http://web.stanford.edu/class/cs224n/slides/cs224n-2023-lecture11-prompting-rlhf.pdf)

[edx ChatGPT101](https://www.edx.org/course/introduction-to-chatgpt)

[OpenAI Examples](https://platform.openai.com/examples)

[免费 Prompt Engineering 教程](https://github.com/thinkingjimmy/Learning-Prompt)

[Promptify](https://github.com/promptslab/Promptify)



## Intro
> 🔗 https://www.promptingguide.ai

Prompt engineering is a relatively new discipline for developing and optimizing prompts to efficiently use language models (LMs) for a wide variety of applications and research topics. Prompt engineering skills help to better understand the capabilities and limitations of large language models (LLMs).

Prompt engineering is not just about designing and developing prompts. It encompasses a wide range of skills and techniques that are useful for interacting and developing with LLMs. It's an important skill to interface, build with, and understand capabilities of LLMs. You can use prompt engineering to improve safety of LLMs and build new capabilities like augmenting LLMs with domain knowledge and external tools.



## Basic Prompting Techniques
> 📎 https://deci.ai/blog/fine-tuning-peft-prompt-engineering-and-rag-which-one-is-right-for-you/


### Zero-Shot Prompting
In zero-shot prompting, we prepend a certain instruction to the user’s query without providing the model with _any_ direct examples.

Imagine you’re developing a tech support chatbot using a large language model. To make sure the model focuses on providing tech solutions without having prior examples, you can prepend a specific instruction to all user inputs:
```text
Prompt:   

Provide a tech support solution based on the following user concern. User concern: My computer won't turn on.

Solution:
```

By prepending an instruction to the user query (“My computer won’t turn on,” we give the model context for the kind of answer desired. This is a way of adapting its output for tech support even without explicit examples of tech solutions.


### Few-shot Prompting
In few-shot prompting, we prepend a few examples to the user’s query. These examples are essentially pairs of sample input and expected model output. 

Imagine creating a health app that categorizes dishes into ‘Low Fat’ or ‘High Fat’ using a language model. To orient the model, a couple of examples are prepended to the user query:  
```
Classify the following dish based on its fat content: Grilled chicken, lemon, herbs. Response: Low Fat

Classify the following dish based on its fat content: Mac and cheese with heavy cream and butter. Response: High Fat

Classify the following dish based on its fat content: Avocado toast with olive oil

Response:
```
  
Informed by the examples in the prompt, a large enough and well trained LLM will reliably respond: “High Fat.” 

Few-shot prompting is a good way of getting the model to adopt a certain response format. Going back to our tech support app example, if we wanted the model’s response to conform to a certain structure or length restrictions, we could do so through few-shot prompting.


### Chain-Of-Thought (COT) Prompting 
Chain-of-thought prompting allows for detailed problem-solving by guiding the model through intermediate steps. Pairing it with few-shot prompting can enhance performance on tasks that need thoughtful analysis before generating an answer.  
``` text
Subtracting the smallest number from the largest in this group results in an even number: 5, 8, 9.

A: Subtracting 5 from 9 gives 4. The answer is True.

Subtracting the smallest number from the largest in this group results in an even number: 10, 15, 20.

A: Subtracting 10 from 20 gives 10. The answer is True.

Subtracting the smallest number from the largest in this group results in an even number: 7, 12, 15.

A:
```
  
In fact, chain of thought prompting can also be paired with zero shot prompting to enhance performance on tasks that require step-by-step analysis. Going back to our tech support app example, if we wanted to improve the model’s performance, we could ask it to break down the solution step by step.
```text
Break down the tech support solution step by step based on the following user concern. User concern: My computer won't turn on.

Solution:
```

For a variety of applications, basic prompt engineering of a very large LLM can deliver ‘good enough’ accuracy. It provides an economical adaptation method because it is fast and doesn’t involve large amounts of computing power. The downside is that it’s simply not accurate or robust enough for use cases additional background knowledge is required.



## Advanced Prompting Techniques
### Train-of-Thought (ToT)
↗ [CoT (Chain-of-Thought)](CoT%20(Chain-of-Thought).md)


### Retrieval Augmented Generation (RAG)
↗ [RAG (Retrieval Augmented Generation)](RAG%20(Retrieval%20Augmented%20Generation).md)



## Ref
[👍 Fine-Tuning, PEFT, Prompt Engineering, and RAG]: https://deci.ai/blog/fine-tuning-peft-prompt-engineering-and-rag-which-one-is-right-for-you/

[👍 Prompt场景示例和高阶Prompt - thirsd的文章 - 知乎]: https://zhuanlan.zhihu.com/p/688732784
