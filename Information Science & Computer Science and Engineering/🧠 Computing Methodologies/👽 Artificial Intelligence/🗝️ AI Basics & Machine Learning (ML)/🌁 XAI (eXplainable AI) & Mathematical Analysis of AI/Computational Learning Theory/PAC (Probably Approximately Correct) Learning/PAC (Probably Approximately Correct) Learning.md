# PAC (Probably Approximately Correct) Learning

[TOC]



## Res
### Related Topics


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Probably_approximately_correct_learning

In [computational learning theory](https://en.wikipedia.org/wiki/Computational_learning_theory "Computational learning theory"), **probably approximately correct** (**PAC**) **learning** is a framework for mathematical analysis of [machine learning](https://en.wikipedia.org/wiki/Machine_learning "Machine learning"). It was proposed in 1984 by [Leslie Valiant](https://en.wikipedia.org/wiki/Leslie_Valiant "Leslie Valiant").

In this framework, the learner receives samples and must select a generalization function (called the _hypothesis_) from a certain class of possible functions. The goal is that, with high probability (the "probably" part), the selected function will have low [generalization error](https://en.wikipedia.org/wiki/Generalization_error "Generalization error") (the "approximately correct" part). The learner must be able to learn the concept given any arbitrary approximation ratio, probability of success, or [distribution of the samples](https://en.wikipedia.org/wiki/Empirical_distribution_function "Empirical distribution function").

The model was later extended to treat noise (misclassified samples).

An important innovation of the PAC framework is the introduction of [computational complexity theory](https://en.wikipedia.org/wiki/Computational_complexity_theory "Computational complexity theory") concepts to machine learning. In particular, the learner is expected to find efficient functions (time and space requirements bounded to a [polynomial](https://en.wikipedia.org/wiki/Polynomial "Polynomial") of the example size), and the learner itself must implement an efficient procedure (requiring an example count bounded to a polynomial of the concept size, modified by the approximation and [likelihood](https://en.wikipedia.org/wiki/Likelihood "Likelihood") bounds).



## Ref
