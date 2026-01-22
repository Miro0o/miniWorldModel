# AI Basics & Machine Learning (ML)

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

↗️ [Neural Networks & Deep Learning Methods](Knowledge%20Representation%20and%20Reasoning%20(Syntax%20Level)/🌊%20Neural%20Networks%20&%20Deep%20Learning%20Methods/Neural%20Networks%20&%20Deep%20Learning%20Methods.md)
↗ [Statistical Learning & Machine Learning Methods](Statistical%20Learning%20&%20Machine%20Learning%20Methods/Statistical%20Learning%20&%20Machine%20Learning%20Methods.md)


### Learning Resource
🎬【00 预告【动手学深度学习v2】】 https://www.bilibili.com/video/BV1if4y147hS/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

🎬 [AI 论文精读 -- 李沐](https://space.bilibili.com/1567748478/channel/collectiondetail?sid=32744)

📖 https://github.com/rasbt/python-machine-learning-book-3rd-edition
Python Machine Learning, 3rd Ed. to be published December 12th, 2019

🏫 [CS50's Introduction to AI with Python](../../../🗺%20CS%20Overview/💋%20Intro%20to%20Computer%20Science/👩🏼‍🏫%20Courses%20of%20Universities/Harvard/CS50's%20Introduction%20to%20AI%20with%20Python/CS50's%20Introduction%20to%20AI%20with%20Python.md)
🏫 [CS188 Introduction to Artificial Intelligence](../../../🗺%20CS%20Overview/💋%20Intro%20to%20Computer%20Science/👩🏼‍🏫%20Courses%20of%20Universities/UC%20Berkeley/CS188%20Introduction%20to%20Artificial%20Intelligence/CS188%20Introduction%20to%20Artificial%20Intelligence.md)
🏫 [CS 231n Deep Learning for Computer Vision](../../../🗺%20CS%20Overview/💋%20Intro%20to%20Computer%20Science/👩🏼‍🏫%20Courses%20of%20Universities/Stanford/CS%20231n%20Deep%20Learning%20for%20Computer%20Vision/CS%20231n%20Deep%20Learning%20for%20Computer%20Vision.md)

🏫 [CS 329P Practical Machine Learning](../../../🗺%20CS%20Overview/💋%20Intro%20to%20Computer%20Science/👩🏼‍🏫%20Courses%20of%20Universities/Stanford/CS%20329P%20Practical%20Machine%20Learning/CS%20329P%20Practical%20Machine%20Learning.md)
- https://c.d2l.ai/stanford-cs329p/syllabus.html
- 【1.1 课程介绍【斯坦福21秋季：实用机器学习中文版】】 https://www.bilibili.com/video/BV13U4y1N7Uo/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

👍 👨‍💻 https://fullstackdeeplearning.com
News, community, and courses for people building AI-powered products.

[雷明-机器学习的数学](https://www.epubit.com/bookDetails?id=UB7812edb26d3f9) - 机器学习的数学基础
#### Keras Resources
- Sequential Model: https://keras.io/models/sequential/
- Functional API: https://keras.io/models/model/
- Core Layers (including Dropout): https://keras.io/layers/core/
- Noise Layers: https://keras.io/layers/noise/
- Convolution Layers: https://keras.io/layers/convolutional/
- Pooling Layers: https://keras.io/layers/pooling/
- Recurrent Layers (including LSTM): https://keras.io/layers/recurrent/
- Regularizers: https://keras.io/regularizers/
- Activations: https://keras.io/activations/
- Losses: https://keras.io/losses/
- Optimizers :https://keras.io/optimizers/


### Other Resources



## Intro
### The Layering Perspective in AI Technologies
> 🤖 GPT 5.0
> https://chatgpt.com/share/696e493e-9e7c-800f-930c-a9b4bdce5309

Think in **layers**:


**Layer 1 — Representation / reasoning paradigm** -- Semantic role of memory and reasoning
It comes from **classical AI / agent models** (often inspired by Russell & Norvig), and it is about **how an agent decides what action to take**, not _how it learns_.
- ↗ [Reflex-Based Models](Agent%20Decision%20Models%20(Semantic%20Level)/Reflex-Based%20Models/Reflex-Based%20Models.md)
- ↗ [State-Based Models](Agent%20Decision%20Models%20(Semantic%20Level)/State-Based%20Models/State-Based%20Models.md)
- ↗ [Variables-Based Models](Agent%20Decision%20Models%20(Semantic%20Level)/Variables-Based%20Models/Variables-Based%20Models.md)
- ↗ [Logic-Based Models](Agent%20Decision%20Models%20(Semantic%20Level)/Logic-Based%20Models/Logic-Based%20Models.md)


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
		- ↗ [Neural Networks & Deep Learning Methods](Knowledge%20Representation%20and%20Reasoning%20(Syntax%20Level)/🌊%20Neural%20Networks%20&%20Deep%20Learning%20Methods/Neural%20Networks%20&%20Deep%20Learning%20Methods.md)
		- ↗ [Neural Network Models](Knowledge%20Representation%20and%20Reasoning%20(Syntax%20Level)/🌊%20Neural%20Networks%20&%20Deep%20Learning%20Methods/2️⃣%20Neural%20Network%20Models%20🗿/Neural%20Network%20Models.md)
	- Kernel machines
All of these can be embedded into **any Layer-1 paradigm**.


**Layer 3 — Learning paradigm** -- How the system is obtained
- hand-coded
- machine learning 🔥
	- ↗ [Supervised Learning](Statistical%20Learning%20&%20Machine%20Learning%20Methods/Supervised%20Learning/Supervised%20Learning.md)
		- ↗ [Semi-supervised Learning](Statistical%20Learning%20&%20Machine%20Learning%20Methods/Supervised%20Learning/🥝%20Semi-supervised%20Learning/Semi-supervised%20Learning.md)
	- ↗ [Unsupervised Learning](Statistical%20Learning%20&%20Machine%20Learning%20Methods/Unsupervised%20Learning/Unsupervised%20Learning.md)
	- ↗ [Reinforcement Learning (RL) & Sequential Decision Making](Statistical%20Learning%20&%20Machine%20Learning%20Methods/Reinforcement%20Learning%20(RL)%20&%20Sequential%20Decision%20Making/Reinforcement%20Learning%20(RL)%20&%20Sequential%20Decision%20Making.md)
	- (Deep learning = model family, spans all three) 🔥
		- ↗ [Neural Networks & Deep Learning Methods](Knowledge%20Representation%20and%20Reasoning%20(Syntax%20Level)/🌊%20Neural%20Networks%20&%20Deep%20Learning%20Methods/Neural%20Networks%20&%20Deep%20Learning%20Methods.md)
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



## Machine Learning (ML)
> [!quote]
> 🤖 GPT-5.0
> Machine learning can be seen as the problem of building models that optimally compress data while preserving the information needed to make accurate predictions.
> 
> ↗ [Information Theory](../../../🧮%20Mathematics/🥸%20Information%20Theory/Information%20Theory.md)


### Machine Learning System
![](../../../../Assets/Pics/Screenshot%202023-01-28%20at%2012.50.14%20PM.png)
#### Neuron's Structure

#### Activation Function

#### Loss Minimization & Loss Function
A loss function $Loss(x,y,w)$ quantifies how unhappy we are with the weights $w$ of the model in the prediction task of output $y$ from input $x$. It is a quantity we want to minimize during the training process.


### Machine Learning Methods & Deep Learning ⭐
> [!lists]
> ↗ [Statistical Learning & Machine Learning Methods](Statistical%20Learning%20&%20Machine%20Learning%20Methods/Statistical%20Learning%20&%20Machine%20Learning%20Methods.md)
> ↗ [Neural Networks & Deep Learning Methods](Knowledge%20Representation%20and%20Reasoning%20(Syntax%20Level)/🌊%20Neural%20Networks%20&%20Deep%20Learning%20Methods/Neural%20Networks%20&%20Deep%20Learning%20Methods.md)
> ↗ [Neural Network Models](Knowledge%20Representation%20and%20Reasoning%20(Syntax%20Level)/🌊%20Neural%20Networks%20&%20Deep%20Learning%20Methods/2️⃣%20Neural%20Network%20Models%20🗿/Neural%20Network%20Models.md)

![Screenshot 2023-01-28 at 12.26.51 PM](../../../../../Assets/Pics/Screenshot%202023-01-28%20at%2012.26.51%20PM.png)

↗ [Supervised Learning](Statistical%20Learning%20&%20Machine%20Learning%20Methods/Supervised%20Learning/Supervised%20Learning.md)
- Data: $(x,y)$ input–output pairs
- Goal: learn a mapping $f(x) \rightarrow y$
- Examples:
    - Classification
    - Regression
Key idea: Learn from labeled examples.


↗ [Unsupervised Learning](Statistical%20Learning%20&%20Machine%20Learning%20Methods/Unsupervised%20Learning/Unsupervised%20Learning.md)
- Data: $x$ only (no labels)
- Goal: discover structure in data
- Examples:
    - Clustering
    - Dimensionality reduction
    - Density estimation
Key idea: Learn hidden structure or representations.


↗ [Reinforcement Learning (RL) & Sequential Decision Making](Statistical%20Learning%20&%20Machine%20Learning%20Methods/Reinforcement%20Learning%20(RL)%20&%20Sequential%20Decision%20Making/Reinforcement%20Learning%20(RL)%20&%20Sequential%20Decision%20Making.md)
- Data: interaction with environment
- Feedback: reward signal (often delayed)
- Goal: learn a **policy** that maximizes long-term reward
Key idea: Learn by trial and error through interaction.


↗ [Neural Networks & Deep Learning Methods](Knowledge%20Representation%20and%20Reasoning%20(Syntax%20Level)/🌊%20Neural%20Networks%20&%20Deep%20Learning%20Methods/Neural%20Networks%20&%20Deep%20Learning%20Methods.md) 🔥
- Not a learning paradigm by itself
- Refers to **model class + representation learning**
	- i.e. it's a bundle of both models and learning methods
- Uses deep neural networks
- Can be:
    - Supervised
    - Unsupervised
    - Reinforcement learning
Key idea: Learn representations and decision functions jointly using deep networks.


### Mathematical Notations for Machine Learning (and Deep Learning)
🚧 https://github.com/mazhengcn/suggested-notation-for-machine-learning#notation-table
Suggested Notation for Machine Learning


### Human Roles in ML /AI
- **Domain experts**: have business insights, know what data is important and where to find it, identify the real impact of a ML model,
- **Data scientists**: full stack on data mining, model training and deployment.
- **ML experts**: customize SOTA ML models.
- **SDE (Software develop engineer)**: develop/maintain data pipelines, model training and serving pipelines.

![|500](../../../../Assets/Pics/Screenshot%202023-01-28%20at%208.11.41%20PM.png)



## 📆 Machine Learning Workflow
![](../../../../Assets/Pics/Screenshot%202023-01-28%20at%208.07.44%20PM.png)

![](../../../../Assets/Pics/Screenshot%202023-01-28%20at%208.08.33%20PM.png)


### 0️⃣ Problem Formulation 🤔
↗ [Mathematical Modeling & Real World Problem Solving](../../../🧮%20Mathematics/Mathematical%20Modeling%20&%20Real%20World%20Problem%20Solving.md)

↗ [Information Theory](../../../🧮%20Mathematics/🥸%20Information%20Theory/Information%20Theory.md)
↗ [Probability Theory & Statistics](../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probability%20Theory%20&%20Statistics/Probability%20Theory%20&%20Statistics.md)
↗ [Mathematical Analysis (& Analytical Mathematics)](../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/Mathematical%20Analysis%20(&%20Analytical%20Mathematics).md)
↗ [Topology](../../../🧮%20Mathematics/Topology/Topology.md)


### 1️⃣ Data Preparation
↗ [Dataset Preparation](Knowledge%20Representation%20and%20Reasoning%20(Syntax%20Level)/🌊%20Neural%20Networks%20&%20Deep%20Learning%20Methods/1️⃣%20Datasets%20Preparation/Dataset%20Preparation.md)

↗ [LLM Training Datasets](../Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/LLM%20Training,%20Utilization,%20and%20Evaluation/LLM%20Training%20Datasets/LLM%20Training%20Datasets.md)


### 2️⃣ Model Selection
↗ [Statistical Learning & Machine Learning Methods](Statistical%20Learning%20&%20Machine%20Learning%20Methods/Statistical%20Learning%20&%20Machine%20Learning%20Methods.md)
- ↗ [Reinforcement Learning (RL) & Sequential Decision Making](Statistical%20Learning%20&%20Machine%20Learning%20Methods/Reinforcement%20Learning%20(RL)%20&%20Sequential%20Decision%20Making/Reinforcement%20Learning%20(RL)%20&%20Sequential%20Decision%20Making.md)
- ↗ [Supervised Learning](Statistical%20Learning%20&%20Machine%20Learning%20Methods/Supervised%20Learning/Supervised%20Learning.md)
	- ↗ [ML Classification Algorithms](Statistical%20Learning%20&%20Machine%20Learning%20Methods/Supervised%20Learning/ML%20Classification%20Algorithms.md)
	- ↗ [ML Regression Algorithms](Statistical%20Learning%20&%20Machine%20Learning%20Methods/Supervised%20Learning/ML%20Regression%20Algorithms.md)
- ↗ [Unsupervised Learning](Statistical%20Learning%20&%20Machine%20Learning%20Methods/Unsupervised%20Learning/Unsupervised%20Learning.md)
↗ [Neural Network Models](Knowledge%20Representation%20and%20Reasoning%20(Syntax%20Level)/🌊%20Neural%20Networks%20&%20Deep%20Learning%20Methods/2️⃣%20Neural%20Network%20Models%20🗿/Neural%20Network%20Models.md)
- ↗ [CNN (Convolutional Neural Network)](Knowledge%20Representation%20and%20Reasoning%20(Syntax%20Level)/🌊%20Neural%20Networks%20&%20Deep%20Learning%20Methods/2️⃣%20Neural%20Network%20Models%20🗿/CNN%20(Convolutional%20Neural%20Network)/CNN%20(Convolutional%20Neural%20Network).md)
- ↗ [RNN (Recurrent Neural Network)](Knowledge%20Representation%20and%20Reasoning%20(Syntax%20Level)/🌊%20Neural%20Networks%20&%20Deep%20Learning%20Methods/2️⃣%20Neural%20Network%20Models%20🗿/RNN%20(Recurrent%20Neural%20Network)/RNN%20(Recurrent%20Neural%20Network).md)
	- ↗ [LSTM (Long-Short Term Memories)](Knowledge%20Representation%20and%20Reasoning%20(Syntax%20Level)/🌊%20Neural%20Networks%20&%20Deep%20Learning%20Methods/2️⃣%20Neural%20Network%20Models%20🗿/RNN%20(Recurrent%20Neural%20Network)/LSTM%20(Long-Short%20Term%20Memories)/LSTM%20(Long-Short%20Term%20Memories).md)
- ↗ [GNN (Graph Neural Network)](Knowledge%20Representation%20and%20Reasoning%20(Syntax%20Level)/🌊%20Neural%20Networks%20&%20Deep%20Learning%20Methods/2️⃣%20Neural%20Network%20Models%20🗿/GNN%20(Graph%20Neural%20Network)/GNN%20(Graph%20Neural%20Network).md)
- ↗ [GAN (Generative Adversarial Network)](Knowledge%20Representation%20and%20Reasoning%20(Syntax%20Level)/🌊%20Neural%20Networks%20&%20Deep%20Learning%20Methods/2️⃣%20Neural%20Network%20Models%20🗿/GAN%20(Generative%20Adversarial%20Network)/GAN%20(Generative%20Adversarial%20Network).md)
- ↗ [Transformers](Knowledge%20Representation%20and%20Reasoning%20(Syntax%20Level)/🌊%20Neural%20Networks%20&%20Deep%20Learning%20Methods/2️⃣%20Neural%20Network%20Models%20🗿/Transformers/Transformers.md)


### 3️⃣ Model Training
↗ [Model Training](Knowledge%20Representation%20and%20Reasoning%20(Syntax%20Level)/🌊%20Neural%20Networks%20&%20Deep%20Learning%20Methods/3️⃣%20Model%20Training/Model%20Training.md)

↗ [LLM Training, Utilization, and Evaluation](../Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/LLM%20Training,%20Utilization,%20and%20Evaluation/LLM%20Training,%20Utilization,%20and%20Evaluation.md)
- ↗ [Pre-Training](../Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/LLM%20Training,%20Utilization,%20and%20Evaluation/Pre-Training/Pre-Training.md)
- ↗ [Post-Training & Fine Tuning](../Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/LLM%20Training,%20Utilization,%20and%20Evaluation/Post-Training%20&%20Fine%20Tuning/Post-Training%20&%20Fine%20Tuning.md)
#### 4️⃣ Training Monitoring & Fine Tuning
↗ [Process Monitoring](Knowledge%20Representation%20and%20Reasoning%20(Syntax%20Level)/🌊%20Neural%20Networks%20&%20Deep%20Learning%20Methods/4️⃣%20Process%20Monitoring/Process%20Monitoring.md)

↗ [Post-Training & Fine Tuning](../Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/LLM%20Training,%20Utilization,%20and%20Evaluation/Post-Training%20&%20Fine%20Tuning/Post-Training%20&%20Fine%20Tuning.md)
- ↗ [Instruction Tuning](../Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/LLM%20Training,%20Utilization,%20and%20Evaluation/Post-Training%20&%20Fine%20Tuning/Fine%20Tuning%20Directions/Instruction%20Tuning.md)
- ↗ [LLM Adaptation & Alignment Tuning](../Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/LLM%20Training,%20Utilization,%20and%20Evaluation/Post-Training%20&%20Fine%20Tuning/Fine%20Tuning%20Directions/LLM%20Adaptation%20&%20Alignment%20Tuning.md)
#### Model Evaluation & Metrics


### 5️⃣ Model Deployments & Applications
↗ [Deployment & Application](Knowledge%20Representation%20and%20Reasoning%20(Syntax%20Level)/🌊%20Neural%20Networks%20&%20Deep%20Learning%20Methods/5️⃣%20Deployment%20&%20Application/Deployment%20&%20Application.md)

↗ [LLM Infrastructure & Deployment](../Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/LLM%20Infrastructure%20&%20Deployment/LLM%20Infrastructure%20&%20Deployment.md)
↗ [LLM Applications & LLM-Driven Automation](../Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/🚮%20LLM%20Applications%20&%20LLM-Driven%20Automation/LLM%20Applications%20&%20LLM-Driven%20Automation.md)



## Ref
