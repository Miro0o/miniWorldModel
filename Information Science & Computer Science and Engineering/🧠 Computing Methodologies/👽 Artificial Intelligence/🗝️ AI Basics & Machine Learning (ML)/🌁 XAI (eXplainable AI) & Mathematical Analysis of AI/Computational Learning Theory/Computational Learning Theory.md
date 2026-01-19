# Computational Learning Theory

[TOC]



## Res
### Related Topics


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Computational_learning_theory

In [computer science](https://en.wikipedia.org/wiki/Computer_science "Computer science"), **computational learning theory** (or just **learning theory**) is a subfield of [artificial intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence "Artificial intelligence") devoted to studying the design and analysis of [machine learning](https://en.wikipedia.org/wiki/Machine_learning "Machine learning") algorithms.

Theoretical results in machine learning often focus on a type of inductive learning known as [supervised learning](https://en.wikipedia.org/wiki/Supervised_learning "Supervised learning"). In supervised learning, an algorithm is provided with [labeled](https://en.wikipedia.org/wiki/Labeled_data "Labeled data") samples. For instance, the samples might be descriptions of mushrooms, with labels indicating whether they are edible or not. The algorithm uses these labeled samples to create a classifier. This classifier assigns labels to new samples, including those it has not previously encountered. The goal of the supervised learning algorithm is to optimize performance metrics, such as minimizing errors on new samples.

In addition to performance bounds, computational learning theory studies the time complexity and feasibility of learning. In computational learning theory, a computation is considered feasible if it can be done in [polynomial time](https://en.wikipedia.org/wiki/Polynomial_time "Polynomial time"). There are two kinds of time complexity results:
- Positive results – Showing that a certain class of functions is learnable in polynomial time.
- Negative results – Showing that certain classes cannot be learned in polynomial time.

Negative results often rely on commonly believed, but yet unproven assumptions, such as:
- Computational complexity – [P ≠ NP (the P versus NP problem)](https://en.wikipedia.org/wiki/P_versus_NP_problem "P versus NP problem");
- [Cryptographic](https://en.wikipedia.org/wiki/Cryptography "Cryptography") – [One-way functions](https://en.wikipedia.org/wiki/One-way_function "One-way function") exist.

There are several different approaches to computational learning theory based on making different assumptions about the [inference](https://en.wikipedia.org/wiki/Inference "Inference") principles used to generalise from limited data. This includes different definitions of [probability](https://en.wikipedia.org/wiki/Probability "Probability") (see [frequency probability](https://en.wikipedia.org/wiki/Frequency_probability "Frequency probability"), [Bayesian probability](https://en.wikipedia.org/wiki/Bayesian_probability "Bayesian probability")) and different assumptions on the generation of samples. The different approaches include:
- Exact learning, proposed by [Dana Angluin](https://en.wikipedia.org/wiki/Dana_Angluin "Dana Angluin");
- [Probably approximately correct learning](https://en.wikipedia.org/wiki/Probably_approximately_correct_learning "Probably approximately correct learning") (PAC learning), proposed by [Leslie Valiant](https://en.wikipedia.org/wiki/Leslie_Valiant "Leslie Valiant");
- [VC theory](https://en.wikipedia.org/wiki/VC_theory "VC theory"), proposed by [Vladimir Vapnik](https://en.wikipedia.org/wiki/Vladimir_Vapnik "Vladimir Vapnik") and [Alexey Chervonenkis](https://en.wikipedia.org/wiki/Alexey_Chervonenkis "Alexey Chervonenkis");
- [Inductive inference](https://en.wikipedia.org/wiki/Solomonoff%27s_theory_of_inductive_inference "Solomonoff's theory of inductive inference") as developed by [Ray Solomonoff](https://en.wikipedia.org/wiki/Ray_Solomonoff "Ray Solomonoff");
- [Algorithmic learning theory](https://en.wikipedia.org/wiki/Algorithmic_learning_theory "Algorithmic learning theory"), from the work of [E. Mark Gold](https://en.wikipedia.org/wiki/E._Mark_Gold "E. Mark Gold");
- [Online machine learning](https://en.wikipedia.org/wiki/Online_machine_learning "Online machine learning"), from the work of Nick Littlestone

While its primary goal is to understand learning abstractly, computational learning theory has led to the development of practical algorithms. For example, PAC theory inspired [boosting](https://en.wikipedia.org/wiki/Boosting_\(meta-algorithm\) "Boosting (meta-algorithm)"), VC theory led to [support vector machines](https://en.wikipedia.org/wiki/Support_vector_machine "Support vector machine"), and Bayesian inference led to [belief networks](https://en.wikipedia.org/wiki/Belief_networks "Belief networks").



## Ref
