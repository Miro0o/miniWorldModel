# 🦜🔗 LangChain & LangGraph

[TOC]



## Res
🏠 https://github.com/hwchase17/langchain
📂 https://docs.langchain.com/
📂 https://python.langchain.com/en/latest/index.html
🗣 https://blog.langchain.dev


### Related Topics


### Other Resources
https://academy.langchain.com/courses/deep-research-with-langgraph/
Project: Deep Research with LangGraph
Build your own deep research agent to handle research tasks. Learn how to use LangGraph to build a multi-agent system, then use LangSmith to evaluate its performance.

【简直逆天！我居然只花了2小时就掌握了吴恩达教授讲的【LangChain+ChatGLM-6B】LLM应用开发实践！强烈推荐！！   人工智能|深度学习】 https://www.bilibili.com/video/BV1pz4y1e7T9/?p=6&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d



## Intro
Large language models (LLMs) are emerging as a transformative technology, enabling developers to build applications that they previously could not. However, using these LLMs in isolation is often insufficient for creating a truly powerful app - the real power comes when you can combine them with other sources of computation or knowledge.

This library aims to assist in the development of those types of applications. Common examples of these applications include:
**❓ Question Answering over specific documents**
- [Documentation](https://langchain.readthedocs.io/en/latest/use_cases/question_answering.html)
- End-to-end Example: [Question Answering over Notion Database](https://github.com/hwchase17/notion-qa)

**💬 Chatbots**
- [Documentation](https://langchain.readthedocs.io/en/latest/use_cases/chatbots.html)
- End-to-end Example: [Chat-LangChain](https://github.com/hwchase17/chat-langchain)

**🤖 Agents**
- [Documentation](https://langchain.readthedocs.io/en/latest/modules/agents.html)
- End-to-end Example: [GPT+WolframAlpha](https://huggingface.co/spaces/JavaFXpert/Chat-GPT-LangChain)

---
> 🔗 https://docs.langchain.com/

LangChain is the platform for agent engineering. AI teams at Replit, Clay, Rippling, Cloudflare, Workday, and more trust LangChain’s products to engineer reliable agents.Our **open source frameworks** help you build agents:
- [**LangChain**](https://docs.langchain.com/oss/python/langchain/overview) helps you quickly get started building agents, with any model provider of your choice.
- [**LangGraph**](https://docs.langchain.com/oss/python/langgraph/overview) allows you to control every step of your custom agent with low-level orchestration, memory, and human-in-the-loop support. You can manage long-running tasks with durable execution.

[**LangSmith**](https://docs.langchain.com/langsmith/home) is a platform that helps AI teams use live production data for continuous testing and improvement. LangSmith provides:
- **Observability** to see exactly how your agent thinks and acts with detailed tracing and aggregate trend metrics.
- **Evaluation** to test and score agent behavior on production data and offline datasets for continuous improvement.
- **Deployment** to ship your agent in one click, using scalable infrastructure built for long-running tasks.


---
> 🤖 Google Gemini 2.5 Flash

**LangChain is an open-source framework (a software development kit or SDK) for building applications that are powered by Large Language Models (LLMs).2**

It is a **code-first library**, primarily available in Python and JavaScript/TypeScript.3 Its main purpose is to simplify the steps needed to connect an LLM (like GPT-4 or Gemini) with other components, allowing it to move beyond a single prompt/response and perform complex tasks.4

|**Core Functionality of LangChain**|**What It Does**|
|---|---|
|**Chains**|Allows you to define a sequence of actions or steps (a "chain") for your application. The output of one step becomes the input of the next.|
|**Agents**|Gives the LLM the ability to decide **what to do next**, using a variety of **Tools** (like a search engine or a calculator) to achieve a goal.|
|**Retrieval**|Provides tools for implementing **RAG (Retrieval-Augmented Generation)**, including document loaders, text splitters, and vector store integrations, to inject external data into the LLM's context.|
|**Memory**|Enables conversational applications to remember past interactions and maintain context over a long conversation.|
|**Model Interface**|Offers a unified interface to easily swap between hundreds of different LLMs (OpenAI, Anthropic, open-source models, etc.).|



## Ref
[Getting started with LangChain — A powerful tool for working with Large Language Models | medium]: https://medium.com/@avra42/getting-started-with-langchain-a-powerful-tool-for-working-with-large-language-models-286419ba0842

[深入剖析大模型安全问题：Langchain框架的隐藏风险 | 腾讯技术工程]: https://www.secrss.com/articles/59635
