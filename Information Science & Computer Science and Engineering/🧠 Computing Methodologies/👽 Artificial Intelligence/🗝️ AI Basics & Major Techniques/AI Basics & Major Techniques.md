# AI Basics & Major Techniques

[TOC]



## Res
### Related Topics
↗ [Information Theory](../../../🧮%20Mathematics/🥸%20Information%20Theory/Information%20Theory.md)
↗️ [Possibilities & Statistics](../🔑 CS_Core/🧮 Math for CS/Possibilities & Statistics/Possibilities & Statistics.md)
- ↗ [Probabilistic Models (Distributions) & Stochastic Process](../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probability%20Theory%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process/Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process.md)
- ↗ [Bayesian Statistics & Statistical Analysis](../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probability%20Theory%20&%20Statistics/Bayesian%20Statistics%20&%20Statistical%20Analysis/Bayesian%20Statistics%20&%20Statistical%20Analysis.md)
	- ↗ [Variational Inference](../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probability%20Theory%20&%20Statistics/Bayesian%20Statistics%20&%20Statistical%20Analysis/Inferential%20Statistics%20(Analysis)%20&%20Statistical%20Inference/Variational%20Inference/Variational%20Inference.md)
	- ↗ [Causal Inference in Statistics](../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probability%20Theory%20&%20Statistics/Bayesian%20Statistics%20&%20Statistical%20Analysis/Inferential%20Statistics%20(Analysis)%20&%20Statistical%20Inference/Causal%20Inference%20in%20Statistics/Causal%20Inference%20in%20Statistics.md)
↗️ [Linear Algebra](../🔑 CS_Core/🧮 Math for CS/🧊 Algebra/Linear Algebra/Linear Algebra.md) 

↗️ [Neural Networks & Deep Learning Methods](Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR)/🌊%20Neural%20Networks%20&%20Deep%20Learning%20Methods/Neural%20Networks%20&%20Deep%20Learning%20Methods.md)
↗ [Statistical Learning (Data-Driven) & Machine Learning Methods](Statistical%20Learning%20(Data-Driven)%20&%20Machine%20Learning%20Methods/Statistical%20Learning%20(Data-Driven)%20&%20Machine%20Learning%20Methods.md)


### Learning Resource
📖 Information Theory, Inference, and Learning Algorithms. David J.C. MacKay

📖 PEARSON SERIES IN ARTIFICIAL INTELLIGENCE | Stuart Russell and Peter Norvig, Editors
- FORSYTH & PONCE 
	- Computer Vision: A Modern Approach, 2nd ed.
- GRAHAM ANSI
	- Common Lisp
- JURAFSKY & MARTIN
	- Speech and Language Processing, 2nd ed.
- NEAPOLITAN 
	- Learning Bayesian Networks
- RUSSELL & NORVIG
	- Artificial Intelligence: A Modern Approach, 4th ed.


### Other Resources



## Intro
### The Layering Perspective in AI Technologies
> 🤖 GPT 5.0
> https://chatgpt.com/share/696e493e-9e7c-800f-930c-a9b4bdce5309

Think in **layers**:


**Layer 1 — Representation / reasoning paradigm** -- Semantic role of memory and reasoning
It comes from **classical AI / agent models** (often inspired by Russell & Norvig), and it is about **how an agent decides what action to take**, not _how it learns_.
- ↗ [Reflex-Based Models](Agent%20Decision%20Models%20(Semantic%20Level)/Reflex-Based%20Models.md)
- ↗ [State-Based Models](Agent%20Decision%20Models%20(Semantic%20Level)/State-Based%20Models.md)
- ↗ [Variables-Based Models](Agent%20Decision%20Models%20(Semantic%20Level)/Variables-Based%20Models.md)
- ↗ [Logic-Based Models](Agent%20Decision%20Models%20(Semantic%20Level)/Logic-Based%20Models.md)


**Layer 2 — Model / implementation tools** -- Concrete representation of the mapping. (syntax level)
Layer 2 includes function representation mechanisms:
- Deterministic
	- Decision trees
	- Rule sets
	- Linear models
	- Programs
- Probabilistic
	- Bayesian networks
	- HMMs
	- Probabilistic programs
- Parametric / differentiable
	- Neural networks 🔥
		- ↗ [Neural Networks & Deep Learning Methods](Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR)/🌊%20Neural%20Networks%20&%20Deep%20Learning%20Methods/Neural%20Networks%20&%20Deep%20Learning%20Methods.md)
		- ↗ [Neural Network Models](Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR)/🌊%20Neural%20Networks%20&%20Deep%20Learning%20Methods/2️⃣%20Neural%20Network%20Models%20🗿/Neural%20Network%20Models.md)
	- Kernel machines
All of these can be embedded into **any Layer-1 paradigm**.


**Layer 3 — Learning paradigm** -- How the system is obtained
- hand-coded
- machine learning 🔥
	- ↗ [Supervised Learning](Statistical%20Learning%20(Data-Driven)%20&%20Machine%20Learning%20Methods/Supervised%20Learning/Supervised%20Learning.md)
		- ↗ [Semi-supervised Learning](Statistical%20Learning%20(Data-Driven)%20&%20Machine%20Learning%20Methods/Supervised%20Learning/🥝%20Semi-supervised%20Learning/Semi-supervised%20Learning.md)
	- ↗ [Unsupervised Learning](Statistical%20Learning%20(Data-Driven)%20&%20Machine%20Learning%20Methods/Unsupervised%20Learning/Unsupervised%20Learning.md)
	- ↗ [Reinforcement Learning (RL) & Sequential Decision Making](Statistical%20Learning%20(Data-Driven)%20&%20Machine%20Learning%20Methods/Reinforcement%20Learning%20(RL)%20&%20Sequential%20Decision%20Making/Reinforcement%20Learning%20(RL)%20&%20Sequential%20Decision%20Making.md)
	- (Deep learning = model family, spans all three) 🔥
		- ↗ [Neural Networks & Deep Learning Methods](Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR)/🌊%20Neural%20Networks%20&%20Deep%20Learning%20Methods/Neural%20Networks%20&%20Deep%20Learning%20Methods.md)
- hybrid

---
Layer 1 is about the _semantics_ of decision-making (what information matters).
Layer 2 is about the _syntax / machinery_ used to compute decisions (how it’s encoded).

People confuse:
- **Internal control flow** (inside a model)  
    with
- **Agent state** (memory across time)
They are _not_ the same.


**Layer 1: _What information does the agent use?_**
Layer 1 answers:
> _At the moment of acting, what does the agent’s decision depend on?_

Layer 1 categories (rephrased intuitively)

|Layer 1 type|Decision depends on|
|---|---|
|Reflex-based|Current percept only|
|State-based|Current percept **+ internal memory**|
|Variables-based|Explicit variables + uncertainty + inference|
|Logic-based|Symbolic facts + rules + logical reasoning|
Layer 1 is about **meaning**, not implementation.


**Layer 2: _How is the decision computed?_**
Layer 2 answers:
> _What computational object represents the mapping from information to action?_

Examples:
- Decision trees
- Neural networks
- Rule sets
- Linear models
- Bayesian networks
- Programs

Layer 2 is about **form**, not meaning.
#### Connections of Decision Representation and Machine Learning Paradigm
==Reflex-based models==
**Decision form:** percept → action

| Learning paradigm | Example                                |
| ----------------- | -------------------------------------- |
| Supervised        | Image → CNN → label/action             |
| Reinforcement     | Policy network mapping state to action |
| Unsupervised      | Rare (e.g. feature learning only)      |
| Deep learning     | Deep policy network                    |

> [!warning]
> learned ≠ reflex agent in classical AI, even if stateless.


==State-based models==
**Decision form:** (percept, internal state) → action

| Learning paradigm | Example                       |
| ----------------- | ----------------------------- |
| Supervised        | RNN trained on sequences      |
| Reinforcement     | RL with belief state / memory |
| Unsupervised      | Sequence modeling             |
| Deep learning     | LSTM / Transformer agents     |


==Variables-based models==
**Decision form:** inference over random variables

| Learning paradigm | Example                  |
| ----------------- | ------------------------ |
| Supervised        | Bayesian networks        |
| Unsupervised      | HMMs, topic models       |
| Reinforcement     | POMDPs                   |
| Deep learning     | Variational autoencoders |


==Logic-based models==
**Decision form:** symbolic reasoning

| Learning paradigm | Example                |
| ----------------- | ---------------------- |
| Supervised        | Learning logical rules |
| Unsupervised      | Concept induction      |
| Reinforcement     | Learning action rules  |
| Deep learning     | Neuro-symbolic systems |

---
==Examples==

Example 1: Decision tree classifier
`input → decision tree → output`
- Uses current input only
- No memory of past inputs
**Layer 1:** Reflex-based
**Layer 2:** Decision tree
Even though the tree has “nodes,” those are **not memory states**.

Example 2: Same decision tree, but with memory
`(percept, previous_mode) → decision tree → action`
- Agent remembers `previous_mode`
**Layer 1:** State-based 
**Layer 2:** Decision tree
The tree didn’t change — the **information used** did.

Example 3: Feedforward neural network
`image → neural network → label`
**Layer 1:** Reflex-based
**Layer 2:** Neural network
Learned ≠ state-based.

Example 4: Recurrent neural network
`(percept, hidden_state) → RNN → action + new_state`
**Layer 1:** State-based 
**Layer 2:** Neural network
Same Layer 2 tool, different Layer 1 semantics.

Example 5: Bayesian network
- Explicit random variables
- Probabilistic inference
**Layer 1:** Variables-based
**Layer 2:** Graphical model

Example 6: Prolog system
- Facts + rules + inference
**Layer 1:** Logic-based  
**Layer 2:** Logic program
#### Connections of Decision Representation and Deep Learning
Reflex-based (overlap, not membership)
- Feedforward NN: input → output
- Appears stimulus–response
- But behavior is **learned**, not rule-based
👉 **Implements reflex-like behavior**, but is not a reflex model.

State-based (strong overlap)
- RNNs, LSTMs, Transformers
- Hidden state / memory
👉 Neural networks can **implement state-based models**, but the category is defined by _state_, not by _NNs_.

Variables-based (probabilistic overlap)
- Bayesian neural networks
- VAEs
- Energy-based models
👉 Neural networks can **parameterize probabilistic models**, but the variables-based nature comes from the probabilistic structure, not the NN itself.

Logic-based (neuro-symbolic overlap)
- Neural logic machines
- Differentiable reasoning
- ILP with neural components
👉 Neural networks can **support or approximate logic**, but they are not symbolic reasoning systems.



## Ref
