# Neuro-Symbolic AI

[TOC]



## Res
### Related Topics
↗ [Mathematical Logic (Foundations of Mathematics)](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/Mathematical%20Logic%20(Foundations%20of%20Mathematics).md)
↗ [Formal System, Formal Logics, and Its Semantics](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics.md)
↗ [Classical Logic (Standard Formal Logic)](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/Classical%20Logic%20(Standard%20Formal%20Logic)/Classical%20Logic%20(Standard%20Formal%20Logic).md)
↗ [Mechanized (Formal) Reasoning & Automated Reasoning](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/Mechanized%20(Formal)%20Reasoning%20&%20Automated%20Reasoning/Mechanized%20(Formal)%20Reasoning%20&%20Automated%20Reasoning.md)

↗ [Logic Programs & Symbolic Artificial Intelligence](../Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR)/🦴%20Logic%20Programs%20&%20Symbolic%20Artificial%20Intelligence/Logic%20Programs%20&%20Symbolic%20Artificial%20Intelligence.md)

↗ [Software (Program) Techniques & Binary Engineering](../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/Software%20(Program)%20Techniques%20&%20Binary%20Engineering.md)
↗ [Formal Methods & Formal Verification (FV)](../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/📌%20Software%20(Program)%20Analysis%20Basics/🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/Formal%20Methods%20&%20Formal%20Verification%20(FV).md)

↗ [Formal Verifications & Constraint Solvers (Proof Assistants)](../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifications%20&%20Constraint%20Solvers%20(Proof%20Assistants)/Formal%20Verifications%20&%20Constraint%20Solvers%20(Proof%20Assistants).md)
↗ [Automated & Generic Theorem Provers](../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifications%20&%20Constraint%20Solvers%20(Proof%20Assistants)/Automated%20&%20Generic%20Theorem%20Provers/Automated%20&%20Generic%20Theorem%20Provers.md)
↗ [SMT (Satisfiability Modulo Theory) Solvers](../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/♊️%20Formal%20Verifications%20&%20Constraint%20Solvers%20(Proof%20Assistants)/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers/SMT%20(Satisfiability%20Modulo%20Theory)%20Solvers.md)

↗ [Neural Networks & Deep Learning Methods](../Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR)/🌊%20Neural%20Networks%20&%20Deep%20Learning%20Methods/Neural%20Networks%20&%20Deep%20Learning%20Methods.md)
↗ [Neural Network Models](../Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR)/🌊%20Neural%20Networks%20&%20Deep%20Learning%20Methods/2️⃣%20Neural%20Network%20Models%20🗿/Neural%20Network%20Models.md)

↗ [LLM (Large Language Model)](../../Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/LLM%20(Large%20Language%20Model).md)
↗ [AI4SE](../../../../Software%20Engineering/🤖%20AI4SE/AI4SE.md)
↗ [AI4Security](../../../../CyberSecurity/🫧%20AI4Security/AI4Security.md)


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Neuro-symbolic_AI

**Neuro-symbolic AI** is an [artificial intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence "Artificial intelligence") paradigm that combines [neural networks](https://en.wikipedia.org/wiki/Connectionism "Connectionism"), particularly [deep learning](https://en.wikipedia.org/wiki/Deep_learning "Deep learning"), with [symbolic AI](https://en.wikipedia.org/wiki/Symbolic_artificial_intelligence "Symbolic artificial intelligence") based on [formal logic](https://en.wikipedia.org/wiki/Formal_logic "Formal logic") and [knowledge representation](https://en.wikipedia.org/wiki/Knowledge_representation "Knowledge representation"). This integration serves to address the inherent limitations of the two approaches, resulting in AI systems that exhibit enhanced interpretability, robustness, and generalizability, while maintaining [reasoning](https://en.wikipedia.org/wiki/Automated_reasoning "Automated reasoning"), learning, and [cognitive modeling](https://en.wikipedia.org/wiki/Cognitive_model "Cognitive model") capabilities. As argued by [Leslie Valiant](https://en.wikipedia.org/wiki/Leslie_Valiant "Leslie Valiant") and others, the effective construction of rich computational [cognitive models](https://en.wikipedia.org/wiki/Cognitive_model "Cognitive model") demands the combination of [symbolic reasoning](https://en.wikipedia.org/wiki/Symbolic_reasoning "Symbolic reasoning") and efficient [machine learning](https://en.wikipedia.org/wiki/Machine_learning "Machine learning").

[Gary Marcus](https://en.wikipedia.org/wiki/Gary_Marcus "Gary Marcus") argued, "We cannot construct rich [cognitive models](https://en.wikipedia.org/wiki/Cognitive_model "Cognitive model") in an adequate, automated way without the triumvirate of hybrid architecture, rich prior knowledge, and sophisticated techniques for reasoning." Further, "To build a robust, knowledge-driven approach to AI we must have the machinery of symbol manipulation in our toolkit. Too much of useful knowledge is abstract to make do without tools that represent and manipulate abstraction, and to date, the only known machinery that can manipulate such abstract knowledge reliably is the apparatus of symbol manipulation."

[Angelo Dalli](https://en.wikipedia.org/wiki/Angelo_Dalli "Angelo Dalli"), [Henry Kautz](https://en.wikipedia.org/wiki/Henry_Kautz "Henry Kautz"), [Francesca Rossi](https://en.wikipedia.org/wiki/Francesca_Rossi "Francesca Rossi"), and [Bart Selman](https://en.wikipedia.org/wiki/Bart_Selman "Bart Selman") also argued for such a synthesis. Their arguments attempt to address the two kinds of thinking, as discussed in [Daniel Kahneman](https://en.wikipedia.org/wiki/Daniel_Kahneman "Daniel Kahneman")'s book _[Thinking, Fast and Slow](https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow "Thinking, Fast and Slow")_. It describes cognition as encompassing two components: System 1 is fast, reflexive, intuitive, and unconscious. System 2 is slower, step-by-step, and explicit. System 1 is used for [pattern recognition](https://en.wikipedia.org/wiki/Pattern_recognition "Pattern recognition"). System 2 handles planning, deduction, and deliberative thinking. In this view, [deep learning](https://en.wikipedia.org/wiki/Deep_learning "Deep learning") best handles the first kind of cognition, while symbolic reasoning best handles the second kind. Both are necessary for the development of a robust and reliable AI system capable of learning, reasoning, and interacting with humans to accept advice and answer questions. Since the 1990s, dual-process models with explicit references to the two contrasting systems have been the focus of research in both the fields of AI and cognitive science by numerous researchers.

In 2025, the adoption of neurosymbolic AI, an approach that integrates neural networks with symbolic reasoning, increased in response to the need to address [hallucination](https://en.wikipedia.org/wiki/Hallucination_\(artificial_intelligence\) "Hallucination (artificial intelligence)") issues in [large language models](https://en.wikipedia.org/wiki/Large_language_model "Large language model"). For example, Amazon implemented Neurosymbolic AI in its Vulcan warehouse robots and Rufus shopping assistant to enhance accuracy and decision-making.


### Applications
Approaches for integration are diverse.[16] Henry Kautz's taxonomy of neuro-symbolic architectures[17] follows, along with some examples:
- Symbolic Neural symbolic is the current approach of many neural models in natural language processing, where words or subword tokens are the ultimate input and output of large language models. Examples include BERT, RoBERTa, and GPT-3.
- Symbolic[Neural] is exemplified by AlphaGo, where symbolic techniques are used to invoke neural techniques. In this case, the symbolic approach is Monte Carlo tree search and the neural techniques learn how to evaluate game positions.
- Neural | Symbolic uses a neural architecture to interpret perceptual data as symbols and relationships that are reasoned about symbolically. Neural-Concept Learner[18] is an example.
- Neural: Symbolic → Neural relies on symbolic reasoning to generate or label training data that is subsequently learned by a deep learning model, e.g., to train a neural model for symbolic computation by using a Macsyma-like symbolic mathematics system to create or label examples.
- NeuralSymbolic uses a neural net that is generated from symbolic rules. An example is the Neural Theorem Prover,[19] which constructs a neural network from an AND-OR proof tree generated from knowledge base rules and terms. Logic Tensor Networks[20] also fall into this category.
- Neural[Symbolic] according to Kautz, this approach embeds true symbolic reasoning inside a neural network. These are tightly-coupled neural-symbolic systems, in which the logical inference rules are internal to the neural network. This way, the neural network internally computes the inference from the premises and learns to reason based on logical inference systems. Early work on connectionist modal and temporal logics by Garcez, Lamb, and Gabbay [21] is aligned with this approach.

These categories are not exhaustive, as they do not consider multi-agent systems. In 2005, Bader and Hitzler presented a more fine-grained categorization that took into account, e.g., whether the use of symbols included logic and, if so, whether the logic was propositional or first-order logic.[22] The 2005 categorization and Kautz's taxonomy above are compared and contrasted in a 2021 article.[17] Sepp Hochreiter argued that Graph Neural Networks "...are the predominant models of neural-symbolic computing"[23] since "[t]hey describe the properties of molecules, simulate social networks, or predict future states in physical and engineering applications with particle-particle interactions."[24]



## Ref
