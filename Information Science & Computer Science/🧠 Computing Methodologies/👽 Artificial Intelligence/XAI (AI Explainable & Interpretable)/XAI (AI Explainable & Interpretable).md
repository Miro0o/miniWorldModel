# XAI (AI Explainable & Interpretable)

[TOC]



## Res
### Related Topics



## Intro



## 👉 Statistical Machine Learning Explainability



## 👉 Traditional Neural Networks Explainability



## 👉 LLM (Large Language Model) Explainability
### LLM Explainability Methods
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
