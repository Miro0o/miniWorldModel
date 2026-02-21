# Knowledge Representation (Syntax Level) and Reasoning (KRR)

[TOC]



## Res
### Related Topics
↗ [Language & Literature](../../../../../Other%20Networks%20of%20Knowledge/Arts%20&%20Humanities/📃%20Language%20&%20Literature/Language%20&%20Literature.md)
↗ [Mathematics](../../../../🧮%20Mathematics/Mathematics.md)
- ↗ [Mathematical Modeling & Abstraction](../../../../🧮%20Mathematics/Mathematical%20Modeling%20&%20Abstraction.md)

↗ [Logic (and Critical Thinking)](../../../../../Other%20Networks%20of%20Knowledge/♂%20Philosophy%20&%20Its%20History/Classical%20Philosophy/Western%20Philosophy%20&%20Its%20History/🎼%20Logic%20(and%20Critical%20Thinking)/Logic%20(and%20Critical%20Thinking).md)
↗ [Mathematical Logic (Foundations of Mathematics)](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/Mathematical%20Logic%20(Foundations%20of%20Mathematics).md)
- ↗ [Formal System, Formal Logics, and Its Semantics](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics.md)
- ↗ [Classical Logic (Standard Formal Logic)](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/Classical%20Logic%20(Standard%20Formal%20Logic)/Classical%20Logic%20(Standard%20Formal%20Logic).md)

↗ [Mechanized (Formal) Reasoning & Automated Reasoning (Inference)](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/Mechanized%20(Formal)%20Reasoning%20&%20Automated%20Reasoning%20(Inference)/Mechanized%20(Formal)%20Reasoning%20&%20Automated%20Reasoning%20(Inference).md)


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Knowledge_representation_and_reasoning

**Knowledge representation** (**KR**) aims to model information in a structured manner to formally represent it as [knowledge](https://en.wikipedia.org/wiki/Knowledge "Knowledge") in knowledge-based systems whereas **knowledge representation** **and reasoning** (**KRR**, **KR&R**, or **KR²**) also aims to understand, reason, and interpret knowledge. KRR is widely used in the field of [artificial intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence "Artificial intelligence") (AI) with the goal to represent [information](https://en.wikipedia.org/wiki/Information "Information") about the world in a form that a computer system can use to solve complex tasks, such as [diagnosing a medical condition](https://en.wikipedia.org/wiki/Computer-aided_diagnosis "Computer-aided diagnosis") or [having a natural-language dialog](https://en.wikipedia.org/wiki/Natural_language_user_interface "Natural language user interface"). KR incorporates findings from psychology about how humans solve problems and represent knowledge, in order to design [formalisms](https://en.wikipedia.org/wiki/Formal_system "Formal system") that make complex systems easier to design and build. KRR also incorporates findings from [logic](https://en.wikipedia.org/wiki/Logic "Logic") to automate various kinds of _reasoning_.

Traditional KRR focuses more on the declarative representation of knowledge. Related knowledge representation formalisms mainly include [vocabularies](https://en.wikipedia.org/wiki/Vocabulary "Vocabulary"), [thesaurus](https://en.wikipedia.org/wiki/Thesaurus "Thesaurus"), [semantic networks](https://en.wikipedia.org/wiki/Semantic_network "Semantic network"), [axiom systems](https://en.wikipedia.org/wiki/Axiom_system "Axiom system"), [frames](https://en.wikipedia.org/wiki/Frame_\(artificial_intelligence\) "Frame (artificial intelligence)"), [rules](https://en.wikipedia.org/wiki/Rule-based_system "Rule-based system"), [logic programs](https://en.wikipedia.org/wiki/Logic_programming "Logic programming"), and [ontologies](https://en.wikipedia.org/wiki/Ontology_\(information_science\) "Ontology (information science)"). Examples of [automated reasoning](https://en.wikipedia.org/wiki/Automated_reasoning "Automated reasoning") engines include [inference engines](https://en.wikipedia.org/wiki/Inference_engine "Inference engine"), [theorem provers](https://en.wikipedia.org/wiki/Automated_theorem_proving "Automated theorem proving"), [model generators](https://en.wikipedia.org/wiki/Boolean_satisfiability_problem "Boolean satisfiability problem"), and [classifiers](https://en.wikipedia.org/wiki/Statistical_classification "Statistical classification").

In a broader sense, parameterized models in [machine learning](https://en.wikipedia.org/wiki/Machine_learning "Machine learning") — including [neural network](https://en.wikipedia.org/wiki/Neural_network_\(machine_learning\) "Neural network (machine learning)") architectures such as [convolutional neural networks](https://en.wikipedia.org/wiki/Convolutional_neural_network "Convolutional neural network") and [transformers](https://en.wikipedia.org/wiki/Transformer_\(deep_learning_architecture\) "Transformer (deep learning architecture)") — can also be regarded as a family of knowledge representation formalisms. The question of which formalism is most appropriate for knowledge-based systems has long been a subject of extensive debate. For instance, Frank van Harmelen et al. discussed the suitability of logic as a knowledge representation formalism and reviewed arguments presented by anti-logicists. Paul Smolensky criticized the limitations of symbolic formalisms and explored the possibilities of integrating it with connectionist approaches.

More recently, Heng Zhang et al. have demonstrated that all universal (or equally expressive and natural) knowledge representation formalisms are recursively isomorphic. This finding indicates a theoretical equivalence among mainstream knowledge representation formalisms with respect to their capacity for supporting [artificial general intelligence](https://en.wikipedia.org/wiki/Artificial_general_intelligence "Artificial general intelligence") (AGI). They further argue that while diverse technical approaches may draw insights from one another via recursive isomorphisms, the fundamental challenges remain inherently shared.


### Knowledge-Based Agents
> 📖 Artificial Intelligence: A Modern Approach, 4th ed.
> RUSSELL & NORVIG
> Chapter 7

The central component of a knowledge-based agent is its **knowledge base**, or KB. A knowledge base is a set of **sentences**. (Here “sentence” is used as a technical term. It is related but not identical to the sentences of English and other natural languages.) Each sentence is expressed in a language called a **knowledge representation language** and represents some assertion about the world. When the sentence is taken as being given without being derived from other sentences, we call it an **axiom**. 

There must be a way to add new sentences to the knowledge base and a way to query what is known. The standard names for these operations are `TELL` and `ASK`, respectively. Both operations may involve **inference**—that is, deriving new sentences from old. Inference must obey the requirement that when one ASKs a question of the knowledge base, the answer should follow from what has been told (or TELLed) to the knowledge base previously. Later in this chapter, we will be more precise about the crucial word “follow”. For now, take it to mean that the inference process should not make things up as it goes along.

Figure 7.1 shows the outline of a knowledge-based agent program. Like all our agents, it takes a percept as input and returns an action. The agent maintains a knowledge base, KB, which may initially contain some **background knowledge**.

![](../../../../../Assets/Pics/Screenshot%202026-02-19%20at%2021.04.05.png)

Each time the agent program is called, it does three things. First, it TELLs the knowledge base what it perceives. Second, it ASKs the knowledge base what action it should perform. In the process of answering this query, extensive reasoning may be done about the current state of the world, about the outcomes of possible action sequences, and so on. Third, the agent program TELLs the knowledge base which action was chosen, and returns the action so that it can be executed.

The details of the representation language are hidden inside three functions that implement the interface between the sensors and actuators on one side and the core representation and reasoning system on the other. `MAKE-PERCEPT-SENTENCE` constructs a sentence asserting that the agent perceived the given percept at the given time. `MAKE-ACTION-QUERY` constructs a sentence that asks what action should be done at the current time. Finally, `MAKE-ACTION-SENTENCE `constructs a sentence asserting that the chosen action was executed. The details of the inference mechanisms are hidden inside `TELL` and `ASK`. Later sections will reveal these details.

The agent in Figure 7.1 appears quite similar to the agents with internal state described in Chapter 2. Because of the definitions of `TELL` and `ASK`, however, the knowledge-based agent is not an arbitrary program for calculating actions. It is amenable to a description at the **knowledge level**, where we need specify only what the agent knows and what its goals are, in order to determine its behavior.

For example, an automated taxi might have the goal of taking a passenger from San Francisco to Marin County and might know that the Golden Gate Bridge is the only link between the two locations. Then we can expect it to cross the Golden Gate Bridge because it knows that that will achieve its goal. Notice that this analysis is independent of how the taxi works at the **implementation level**. It doesn’t matter whether its geographical knowledge is implemented as linked lists or pixel maps, or whether it reasons by manipulating strings of symbols stored in registers or by propagating noisy signals in a network of neurons.

A knowledge-based agent can be built simply by TELLing it what it needs to know. Starting with an empty knowledge base, the agent designer can TELL sentences one by one until the agent knows how to operate in its environment. This is called the ==declarative approach== to system building. In contrast, the ==procedural approach== encodes desired behaviors directly as program code. In the 1970s and 1980s, advocates of the two approaches engaged in heated debates. We now understand that a successful agent often combines both declarative and procedural elements in its design, and that declarative knowledge can often be compiled into more efficient procedural code.

==We can also provide a knowledge-based agent with mechanisms that allow it to learn for itself.== These mechanisms, which are discussed in Chapter 19, create general knowledge about the environment from a series of percepts. A learning agent can be fully autonomous.


### Languages, Logics, and Reasoning (Inference)
↗ [Logic Programs & Symbolic Artificial Intelligence](🦴%20Logic%20Programs%20&%20Symbolic%20Artificial%20Intelligence/Logic%20Programs%20&%20Symbolic%20Artificial%20Intelligence.md)

↗ [Logic (and Critical Thinking)](../../../../../Other%20Networks%20of%20Knowledge/♂%20Philosophy%20&%20Its%20History/Classical%20Philosophy/Western%20Philosophy%20&%20Its%20History/🎼%20Logic%20(and%20Critical%20Thinking)/Logic%20(and%20Critical%20Thinking).md)
↗ [Mathematical Logic (Foundations of Mathematics)](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/Mathematical%20Logic%20(Foundations%20of%20Mathematics).md)
- ↗ [Formal System, Formal Logics, and Its Semantics](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics.md)
- ↗ [Classical Logic (Standard Formal Logic)](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Formal%20System,%20Formal%20Logics,%20and%20Its%20Semantics/Classical%20Logic%20(Standard%20Formal%20Logic)/Classical%20Logic%20(Standard%20Formal%20Logic).md)

↗ [Mechanized (Formal) Reasoning & Automated Reasoning (Inference)](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/Mechanized%20(Formal)%20Reasoning%20&%20Automated%20Reasoning%20(Inference)/Mechanized%20(Formal)%20Reasoning%20&%20Automated%20Reasoning%20(Inference).md)


### Decision Making & Planning
↗ [Game Theory & Decision Making in Multi-Agents Environments](../../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Game%20Theory%20&%20Decision%20Making%20in%20Multi-Agents%20Environments/Game%20Theory%20&%20Decision%20Making%20in%20Multi-Agents%20Environments.md)

↗ [Probabilistic Models (Distributions) & Stochastic Process](../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probability%20Theory%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process/Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process.md)
- ↗ [Markov Decision Processes (MDP) & Stochastic Dynamic Program](../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probability%20Theory%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process/Markov%20Process%20&%20Markov%20Chain%20(MC)/Markov%20Decision%20Processes%20(MDP)%20&%20Stochastic%20Dynamic%20Program/Markov%20Decision%20Processes%20(MDP)%20&%20Stochastic%20Dynamic%20Program.md)

↗ [Automated Planning and Scheduling (APS) & AI Planning](../../Automated%20Planning%20and%20Scheduling%20(APS)%20&%20AI%20Planning/Automated%20Planning%20and%20Scheduling%20(APS)%20&%20AI%20Planning.md)



## Knowledge Representation
> 📖 Artificial Intelligence: A Modern Approach, 4th ed.
> RUSSELL & NORVIG
> Chapter 10

> In which we show how to represent diverse facts about the real world in a form that can be used to reason and solve problems.

The previous chapters showed how an agent with a knowledge base can make inferences that enable it to act appropriately. In this chapter we address the question of what content to put into such an agent’s knowledge base—how to represent facts about the world. We will use first-order logic as the representation language, but later chapters will introduce different representation formalisms such as hierarchical task networks for reasoning about plans (Chapter 11), Bayesian networks for reasoning with uncertainty (Chapter 13), Markov models for reasoning over time (Chapter 16), and deep neural networks for reasoning about images, sounds, and other data (Chapter 22). But no matter what representation you use, the facts about the world still need to be handled, and this chapter gives you a feeling for the issues.

Section 10.1 introduces the idea of a general ontology, which organizes everything in the world into a hierarchy of categories. Section 10.2 covers the basic categories of objects, substances, and measures; Section 10.3 covers events; and Section 10.4 discusses knowledge about beliefs. We then return to consider the technology for reasoning with this content: Section 10.5 discusses reasoning systems designed for efficient inference with categories, and Section 10.6 discusses reasoning with default information.


### Types of Knowledge Representations
#### Deterministic Representation 
↗ [Logic Programs & Symbolic Artificial Intelligence](🦴%20Logic%20Programs%20&%20Symbolic%20Artificial%20Intelligence/Logic%20Programs%20&%20Symbolic%20Artificial%20Intelligence.md)

↗ [Decision Trees (CART)](Decision%20Trees%20(CART)/Decision%20Trees%20(CART).md)
↗ [Rule-Based Systems](Rule-Based%20Systems/Rule-Based%20Systems.md)

↗ [Kernel Machines](Kernel%20Machines/Kernel%20Machines.md)
#### Probabilistic Representation
↗ [Probabilistic Graphical Models](Graphical%20Models/Probabilistic%20Graphical%20Models/Probabilistic%20Graphical%20Models.md)
↗ [Artificial Neural Networks (ANN) & Deep Learning Methods](🌊%20Artificial%20Neural%20Networks%20(ANN)%20&%20Deep%20Learning%20Methods/Artificial%20Neural%20Networks%20(ANN)%20&%20Deep%20Learning%20Methods.md)


### Ontological Engineering


### Categories and Objects


### Events


### Mental Objects and Modal Logics


### Reasoning with Default Information



## Uncertain Knowledge & Reasoning
> [!links]
> ↗ [Probabilistic Methods for Uncertain Reasoning](Probabilistic%20Methods%20for%20Uncertain%20Reasoning.md)
> ↗ [Statistical Learning (Data-Driven) & Machine Learning Methods](../Statistical%20Learning%20(Data-Driven)%20&%20Machine%20Learning%20Methods/Statistical%20Learning%20(Data-Driven)%20&%20Machine%20Learning%20Methods.md)

> 📖 Artificial Intelligence: A Modern Approach, 4th ed.
> RUSSELL & NORVIG
> IV Uncertain Knowledge and Reasoning


### Quantifying Uncertainty


### Probabilistic Reasoning
> [!links]
> ↗ [Probabilistic Methods for Uncertain Reasoning](Probabilistic%20Methods%20for%20Uncertain%20Reasoning.md)


### Decision Making


### Probabilistic Programming & PPL
> 📖 Artificial Intelligence: A Modern Approach, 4th ed.
> RUSSELL & NORVIG
> Chapter 18

The spectrum of representations—atomic, factored, and structured—has been a persistent theme in AI. For deterministic models, search algorithms assume only an atomic representation; CSPs and propositional logic provide factored representations; and first-order logic and planning systems take advantage of structured representations. The expressive power afforded by structured representations yields models that are vastly more concise than the equivalent factored or atomic descriptions.

For probabilistic models, Bayesian networks as described in Chapters 13 and 14 are factored representations: the set of random variables is fixed and finite, and each has a fixed range of possible values. This fact limits the applicability of Bayesian networks, because the Bayesian network representation for a complex domain is simply too large. This makes it infeasible to construct such representations by hand and infeasible to learn them from any reasonable amount of data.

The problem of creating an expressive formal language for probabilistic information has taxed some of the greatest minds in history, including Gottfried Leibniz (the co-inventor of calculus), Jacob Bernoulli (discoverer of e, the calculus of variations, and the Law of Large Numbers), Augustus De Morgan, George Boole, Charles Sanders Peirce (one of the principal logicians of the 19th century), John Maynard Keynes (the leading economist of the 20th century), and Rudolf Carnap (one of the greatest analytical philosophers of the 20th century). The problem resisted these and many other efforts until the 1990s.

Thanks in part to the development of Bayesian networks, there are now mathematically elegant and eminently practical formal languages that allow the creation of probabilistic models for very complex domains. **These languages are universal in the same sense that Turing machines are universal**: they can represent any computable probability model, just as Turing machines can represent any computable function. In addition, these languages come with general-purpose inference algorithms, roughly analogous to sound and complete logical inference algorithms such as resolution.

There are two routes to introducing expressive power into probability theory. The first is via **logic**: to devise a language that defines probabilities over first-order possible worlds, rather than the propositional possible worlds of Bayes nets. This route is covered in Sections 18.1 and 18.2, with Section 18.3 covering the specific case of temporal reasoning. The second route is via **traditional programming languages**: we introduce stochastic elements — random choices, for example — into such languages, and view programs as defining probability distributions over their own execution traces. This approach is covered in Section 18.4.

Both routes lead to a **probabilistic programming language (PPL)**. The first route leads to **declarative PPLs**, which bear roughly the same relationship to general PPLs as logic programming (Chapter 9) does to general programming languages.



## Ref
