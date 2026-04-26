# (M)LLM Explainability

[TOC]



## Res
### Related Topics
↗ [Logic (and Critical Thinking)](../../../../../../../../Other%20Networks%20of%20Knowledge/♂%20Philosophy%20&%20Its%20History/Classical%20Philosophy/Western%20Philosophy%20&%20Its%20History/🎼%20Logic%20(and%20Critical%20Thinking)/Logic%20(and%20Critical%20Thinking).md)
↗ [Formal System, Formal Logics, and Its Semantics](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics.md)

↗ [LLM (Large Language Model)](../../../Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/LLM%20(Large%20Language%20Model).md)
↗ [Multimodal AI & MLLM](../../../Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🐝%20Multimodal%20AI%20&%20MLLM/Multimodal%20AI%20&%20MLLM.md)

↗ [Generative Models](../../🌌%20Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR)/🪽%20Generative%20Models/Generative%20Models.md)

↗ [Transformers](../../🌌%20Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR)/🌊%20Artificial%20Neural%20Networks%20(ANN)%20&%20Deep%20Learning%20Methods/2️⃣%20Neural%20Network%20Models%20🗿/Transformers/Transformers.md)
↗ [Attention in Transformer & Efficient Implementation](../../🌌%20Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR)/🌊%20Artificial%20Neural%20Networks%20(ANN)%20&%20Deep%20Learning%20Methods/2️⃣%20Neural%20Network%20Models%20🗿/Transformers/Attention%20in%20Transformer%20&%20Efficient%20Implementation.md)


### Papers
https://arxiv.org/abs/2603.21687
MIRAGE: The Illusion of Visual Understanding
[Mohammad Asadi](https://arxiv.org/search/cs?searchtype=author&query=Asadi,+M), [Jack W. O'Sullivan](https://arxiv.org/search/cs?searchtype=author&query=O%27Sullivan,+J+W), [Fang Cao](https://arxiv.org/search/cs?searchtype=author&query=Cao,+F), [Tahoura Nedaee](https://arxiv.org/search/cs?searchtype=author&query=Nedaee,+T), [Kamyar Rajabalifardi](https://arxiv.org/search/cs?searchtype=author&query=Rajabalifardi,+K), [Fei-Fei Li](https://arxiv.org/search/cs?searchtype=author&query=Li,+F), [Ehsan Adeli](https://arxiv.org/search/cs?searchtype=author&query=Adeli,+E), [Euan Ashley](https://arxiv.org/search/cs?searchtype=author&query=Ashley,+E)
- Multimodal AI systems have achieved remarkable performance across a broad range of real-world tasks, yet the mechanisms underlying visual-language reasoning remain surprisingly poorly understood. We report three findings that challenge prevailing assumptions about how these systems process and integrate visual information. First, Frontier models readily generate detailed image descriptions and elaborate reasoning traces, including pathology-biased clinical findings, for images never provided; we term this phenomenon mirage reasoning. Second, without any image input, models also attain strikingly high scores across general and medical multimodal benchmarks, bringing into question their utility and design. In the most extreme case, our model achieved the top rank on a standard chest X-ray question-answering benchmark without access to any images. Third, when models were explicitly instructed to guess answers without image access, rather than being implicitly prompted to assume images were present, performance declined markedly. Explicit guessing appears to engage a more conservative response regime, in contrast to the mirage regime in which models behave as though images have been provided. These findings expose fundamental vulnerabilities in how visual-language models reason and are evaluated, pointing to an urgent need for private benchmarks that eliminate textual cues enabling non-visual inference, particularly in medical contexts where miscalibrated AI carries the greatest consequence. We introduce B-Clean as a principled solution for fair, vision-grounded evaluation of multimodal AI systems.


### Other Resources
#### Anthropic’sInterpretability Research
👍 https://transformer-circuits.pub/
Anthropic’s Interpretability Research
A surprising fact about modern large language models is that nobody really knows how they work internally. The Interpretability team strives to change that — to understand these models to better plan for a future of safe AI.

🤔 https://transformer-circuits.pub/2025/attribution-graphs/biology.html
**On the Biology of a Large Language Model | Anthropic**
- We investigate the internal mechanisms used by Claude 3.5 Haiku — Anthropic's lightweight production model — in a variety of contexts, using our circuit tracing methodology.
- In this paper, we focus on applying attribution graphs to study a particular language model – Claude 3.5 Haiku, released in October 2024, which serves as Anthropic’s lightweight production model as of this writing. We investigate a wide range of phenomena. Many of these have been explored before (see [§ 16 Related Work](https://transformer-circuits.pub/2025/attribution-graphs/biology.html#related-work)), but our methods are able to offer additional insight, in the context of a frontier model:
	- [Introductory Example: Multi-step Reasoning.](https://transformer-circuits.pub/2025/attribution-graphs/biology.html#dives-tracing) We present a simple example where the model performs “two-hop” reasoning “in its head” to identify that “the capital of the state containing Dallas” is “Austin.” We can see and manipulate an internal step where the model represents “Texas”.
	- [Planning in Poems.](https://transformer-circuits.pub/2025/attribution-graphs/biology.html#dives-poems) We discover that the model plans its outputs ahead of time when writing lines of poetry. Before beginning to write each line, the model identifies potential rhyming words that could appear at the end. These preselected rhyming options then shape how the model constructs the entire line.
	- [Multilingual Circuits.](https://transformer-circuits.pub/2025/attribution-graphs/biology.html#dives-multilingual) We find the model uses a mixture of language-specific and abstract, language-independent circuits. The language-independent circuits are more prominent in Claude 3.5 Haiku than in a smaller, less capable model.
	- [Addition.](https://transformer-circuits.pub/2025/attribution-graphs/biology.html#dives-addition) We highlight cases where the same addition circuitry generalizes between very different contexts.
	- [Medical](https://transformer-circuits.pub/2025/attribution-graphs/biology.html#dives-medical) [Diagnoses](https://transformer-circuits.pub/2025/attribution-graphs/biology.html#dives-medical). We show an example in which the model identifies candidate diagnoses based on reported symptoms, and uses these to inform follow-up questions about additional symptoms that could corroborate the diagnosis – all “in its head,” without writing down its steps.
	- [Entity Recognition and Hallucinations.](https://transformer-circuits.pub/2025/attribution-graphs/biology.html#dives-hallucinations) We uncover circuit mechanisms that allow the model to distinguish between familiar and unfamiliar entities, which determine whether it elects to answer a factual question or profess ignorance. “Misfires” of this circuit can cause hallucinations.
	- [Refusal of Harmful Requests.](https://transformer-circuits.pub/2025/attribution-graphs/biology.html#dives-refusals) We find evidence that the model constructs a general-purpose “harmful requests” feature during finetuning, aggregated from features representing specific harmful requests learned during pretraining.
	- [An Analysis of a Jailbreak.](https://transformer-circuits.pub/2025/attribution-graphs/biology.html#dives-jailbreak) We investigate an attack which works by first tricking the model into starting to give dangerous instructions “without realizing it,” after which it continues to do so due to pressure to adhere to syntactic and grammatical rules.
	- [Chain-of-thought Faithfulness.](https://transformer-circuits.pub/2025/attribution-graphs/biology.html#dives-cot) We explore the faithfulness of chain-of-thought reasoning to the model’s actual mechanisms. We are able to distinguish between cases where the model genuinely performs the steps it says it is performing, cases where it makes up its reasoning without regard for truth, and cases where it works backwards from a human-provided clue so that its “reasoning” will end up at the human-suggested answer.
	- [A Model with a Hidden Goal.](https://transformer-circuits.pub/2025/attribution-graphs/biology.html#dives-misaligned) We also apply our method to a variant of the model that has been finetuned to pursue a secret goal: exploiting “bugs” in its training process. While the model avoids revealing its goal when asked, our method identifies mechanisms involved in pursuing the goal. Interestingly, these mechanisms are embedded within the model’s representation of its “Assistant” persona.
- ![](../../../../../../../../Assets/Pics/Screenshot%202025-09-19%20at%2021.32.17.png)
- ![](../../../../../../../../Assets/Pics/Screenshot%202025-09-19%20at%2021.37.17.png)
- ![](../../../../../../../../Assets/Pics/Screenshot%202025-09-19%20at%2021.40.26.png)
- ![](../../../../../../../../Assets/Pics/Screenshot%202025-09-19%20at%2022.00.57.png)
	- The graph indicates that the replacement model does in fact perform “multi-hop reasoning” – that is, its decision to say Austin hinges on a chain of several intermediate computational steps (Dallas → Texas, and Texas + capital → Austin). We stress that this graph simplifies the true mechanisms considerably, and encourage the reader to interact with the [more comprehensive visualization](https://transformer-circuits.pub/2025/attribution-graphs/static_js/attribution_graphs/index.html?slug=capital-state-dallas) to appreciate the underlying complexity.

https://transformer-circuits.pub/2025/attribution-graphs/methods.html
**Circuit Tracing: Revealing Computational Graphs in Language Models | Anthropic**
- We introduce a method to uncover mechanisms underlying behaviors of language models. We produce graph descriptions of the model’s computation on prompts of interest by tracing individual computational steps in a “replacement model”. This replacement model substitutes a more interpretable component (here, a “cross-layer transcoder”) for parts of the underlying model (here, the multi-layer perceptrons) that it is trained to approximate. We develop a suite of visualization and validation tools we use to investigate these “attribution graphs” supporting simple behaviors of an 18-layer language model, and lay the groundwork for a [companion paper](https://transformer-circuits.pub/2025/attribution-graphs/biology.html) applying these methods to a frontier model, Claude 3.5 Haiku.

https://transformer-circuits.pub/2026/emotions/index.html
Emotion Concepts and their Function in a Large Language Model
- Large language models (LLMs) sometimes appear to exhibit emotional reactions. We investigate why this is the case in Claude Sonnet 4.5 and explore implications for alignment-relevant behavior. We find internal representations of emotion concepts, which encode the broad concept of a particular emotion and generalize across contexts and behaviors it might be linked to. These representations track the operative emotion concept at a given token position in a conversation, activating in accordance with that emotion’s relevance to processing the present context and predicting upcoming text. Our key finding is that these representations causally influence the LLM’s outputs, including Claude’s preferences and its rate of exhibiting misaligned behaviors such as reward hacking, blackmail, and sycophancy. We refer to this phenomenon as the LLM exhibiting functional emotions: patterns of expression and behavior modeled after humans under the influence of an emotion, which are mediated by underlying abstract representations of emotion concepts. Functional emotions may work quite differently from human emotions, and do not imply that LLMs have any subjective experience of emotions, but appear to be important for understanding the model’s behavior.



## Intro
### LLM Explainability Methodologies
> Gemini 2.5 Flash, Aug.30.2025
#### Post-Hoc Explanations
Post-hoc explanation methods are techniques used to provide transparency for a model _after_ it has made a prediction, without altering its internal architecture. These methods are often "model-agnostic," meaning they can be applied to any black box model.  
##### Feature Attribution Methods: LIME and SHAP
**LIME (Local Interpretable Model-agnostic Explanations)** provides explanations for individual predictions by approximating the complex black box model's behavior around a specific data point with a simpler, local, interpretable model, such as linear regression. It works by perturbing the input data (e.g., removing words from a sentence) and observing how the model's prediction changes. Based on these observations, LIME builds a linear model that highlights the words or features most influential in that specific prediction.  

**SHAP (SHapley Additive exPlanations)** is a more theoretically grounded method based on cooperative game theory. It assigns a contribution score to each input feature, quantifying its impact on the final prediction by calculating its marginal contribution across all possible feature combinations. While computationally more expensive than LIME, SHAP provides consistently correct local explanations and is preferred for complex models that demand consistency and robustness. For LLMs, both LIME and SHAP can be used to identify key tokens or phrases that contribute to a generated response or classification.  
##### Saliency and Attention Mechanisms
**Saliency maps** are visual heatmaps that highlight the most "salient" or influential parts of an input that contribute most to a model's prediction. Originally developed for computer vision to highlight important pixels in an image, this concept has been extended to text-based LLMs to visually indicate which words or tokens were most influential.  

In transformer-based LLMs, the **attention mechanism** itself provides a form of saliency. This mechanism, which allows a model to weigh the importance of different words in a sequence when processing a specific word, can be visualized as an attention map. These maps show which tokens the model is "focusing" on to generate a response, providing a plausible visual explanation of its decision process.  
- However, it is a critical oversimplification to assume that attention is a direct explanation of a model's reasoning. A model's behavior is influenced by complex interactions beyond just attention scores. While an attention map may show what a model focused on, it does not explain the deeper "why" or the complex, causal reasoning that led to a specific decision. For example, a model might assign high attention to a word for syntactic reasons that are not the primary driver of the final semantic output. This shows that the causal chain is:  

_Attention weights highlight token relationships -> a visual map is generated -> this provides a plausible, but incomplete, explanation for a human_. This is a crucial nuance that prevents a naive over-reliance on a single explanation method and reinforces the need for a multi-faceted approach.
##### Counterfactual Explanations
Counterfactual explanations illuminate a model's decision boundaries by identifying the minimum changes to an input that would flip the model's output to a desired outcome. For example, in a loan application scenario, a counterfactual explanation could state, "If your income were $5,000 higher, your loan would have been approved". These explanations are particularly useful for users who want to understand the sensitivity of a model's decision to certain features and to see what they could change to achieve a different result.  
#### Intrinsically Interpretable Models
An alternative to post-hoc methods is to build models that are inherently transparent from the outset. Simple models like decision trees and linear regression are prime examples, as their logic is directly inspectable by a human.  

Traditionally, there has been a significant trade-off between model performance and interpretability. Simpler, more transparent models often struggle to match the sophisticated capabilities of complex LLMs, forcing developers to choose between accuracy and transparency. However, recent architectural innovations are beginning to challenge this dilemma. The development of models like MoE-X (Mixture of Experts) suggests a future where the trade-off is not an insurmountable barrier but an engineering problem to be solved. MoE architectures achieve scalability by activating only a subset of experts for any given input, and techniques like sparse activation within each expert can enforce interpretability objectives while maintaining high performance. This demonstrates that architectural innovation is helping to mitigate the traditional performance-interpretability trade-off.  
#### Mechanistic Interpretability
Mechanistic interpretability is an advanced field that aims to reverse-engineer the actual computational mechanisms that a model has learned during training. It goes beyond a simple input/output analysis to probe the causal relationships between a model's internal components. This level of analysis is a direct counterpoint to more superficial, post-hoc methods, as it seeks to understand the "why" at a fundamental, causal level.  

One key technique is **activation patching**, a causal analysis method used to identify which internal activations are crucial for a model to complete a specific task. This involves running a "clean" prompt and a "corrupted" prompt, then injecting activations from the clean run into the corrupted run to see how much of the original performance is recovered. If the performance is restored, it demonstrates that the injected representations causally contribute to producing the correct output. Another technique involves the use of  

**Sparse Autoencoders (SAEs)**, which are used to disentangle the information encoded within a single neuron. Since LLM neurons often exhibit "polysemanticity," simultaneously encoding multiple unrelated concepts, SAEs help separate these concepts into a higher-dimensional, more interpretable space. This shows a clear progression in research from external observation to internal, causal analysis.  
#### Leveraging LLMs for Self-Explanation
A new paradigm involves using LLMs themselves to generate explanations. A promising strategy is to prompt the LLM to provide its own step-by-step reasoning, a method often referred to as **"Chain of Thought" (CoT)**. This allows users to review the intermediate steps and check the justification of the final answer.  
- However, a critical caveat exists: research has shown that these self-generated explanations may not always accurately reflect the model's true internal workings; they can be post-hoc rationalizations rather than true reflections of the decision process. This raises a new layer of trust and validation challenges, as the explanation itself is a product of the same opaque process it is meant to elucidate. This introduces a paradoxical loop where the black box is being used to explain the black box. This points to the need for a **"Human-in-the-Loop" (HITL) framework** to cross-reference the generated explanation with other metrics to ensure its veracity.  

Other innovations in this area include **Retrieval-Augmented Generation (RAG)** models, which enhance transparency by providing clear references and sources for their information, allowing users to verify the data on which a response is based. Furthermore, LLMs can be used as explainers themselves, transforming complex, technical explanations generated by other methods into easy-to-understand natural language narratives for a lay audience.



## Ref
[LLM与可解释性 - 金琴的文章 - 知乎]: https://zhuanlan.zhihu.com/p/701346692
[Understanding Reasoning LLMs]: https://magazine.sebastianraschka.com/p/understanding-reasoning-llms

[斯坦福李飞飞团队实锤：GPT-5、Gemini、Claude根本没在「看图」！拔掉图片照样拿80%高分，30亿小模型吊打所有视觉大模型]: https://mp.weixin.qq.com/s/yoOoNDC0DiJ0SgPdTr9n0Q
