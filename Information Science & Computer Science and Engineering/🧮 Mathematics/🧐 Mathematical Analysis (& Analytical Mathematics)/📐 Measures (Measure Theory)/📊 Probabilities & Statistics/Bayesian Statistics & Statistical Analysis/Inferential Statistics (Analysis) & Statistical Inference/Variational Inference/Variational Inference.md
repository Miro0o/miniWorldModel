# Variational Inference

[TOC]



## Res
### Related Topcis


### Other Resources
【「变分推断-1」贝叶斯统计 详细推导 Variational Inference「机器学习」】 https://www.bilibili.com/video/BV1Qf4y1e7jN/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d



## Intro
> 🔗 https://en.wikipedia.org/wiki/Variational_Bayesian_methods

**Variational Bayesian methods** are a family of techniques for approximating intractable [integrals](https://en.wikipedia.org/wiki/Integral "Integral") arising in [Bayesian inference](https://en.wikipedia.org/wiki/Bayesian_inference "Bayesian inference") and [machine learning](https://en.wikipedia.org/wiki/Machine_learning "Machine learning"). They are typically used in complex [statistical models](https://en.wikipedia.org/wiki/Statistical_model "Statistical model") consisting of observed variables (usually termed "data") as well as unknown [parameters](https://en.wikipedia.org/wiki/Parameter "Parameter") and [latent variables](https://en.wikipedia.org/wiki/Latent_variable "Latent variable"), with various sorts of relationships among the three types of [random variables](https://en.wikipedia.org/wiki/Random_variable "Random variable"), as might be described by a [graphical model](https://en.wikipedia.org/wiki/Graphical_model "Graphical model"). As typical in Bayesian inference, the parameters and latent variables are grouped together as "unobserved variables". Variational Bayesian methods are primarily used for two purposes:
1. To provide an analytical approximation to the [posterior probability](https://en.wikipedia.org/wiki/Posterior_probability "Posterior probability") of the unobserved variables, in order to do [statistical inference](https://en.wikipedia.org/wiki/Statistical_inference "Statistical inference") over these variables.
2. To derive a [lower bound](https://en.wikipedia.org/wiki/Lower_bound "Lower bound") for the [marginal likelihood](https://en.wikipedia.org/wiki/Marginal_likelihood "Marginal likelihood") (sometimes called the _evidence_) of the observed data (i.e. the [marginal probability](https://en.wikipedia.org/wiki/Marginal_probability "Marginal probability") of the data given the model, with marginalization performed over unobserved variables). This is typically used for performing [model selection](https://en.wikipedia.org/wiki/Model_selection "Model selection"), the general idea being that a higher marginal likelihood for a given model indicates a better fit of the data by that model and hence a greater probability that the model in question was the one that generated the data. (See also the [Bayes factor](https://en.wikipedia.org/wiki/Bayes_factor "Bayes factor") article.)

In the former purpose (that of approximating a posterior probability), variational Bayes is an alternative to [Monte Carlo sampling](https://en.wikipedia.org/wiki/Monte_Carlo_sampling "Monte Carlo sampling") methods—particularly, [Markov chain Monte Carlo](https://en.wikipedia.org/wiki/Markov_chain_Monte_Carlo "Markov chain Monte Carlo") methods such as [Gibbs sampling](https://en.wikipedia.org/wiki/Gibbs_sampling "Gibbs sampling")—for taking a fully Bayesian approach to [statistical inference](https://en.wikipedia.org/wiki/Statistical_inference "Statistical inference") over complex [distributions](https://en.wikipedia.org/wiki/Probability_distribution "Probability distribution") that are difficult to evaluate directly or [sample](https://en.wikipedia.org/wiki/Sample_\(statistics\) "Sample (statistics)"). In particular, whereas Monte Carlo techniques provide a numerical approximation to the exact posterior using a set of samples, variational Bayes provides a locally-optimal, exact analytical solution to an approximation of the posterior.

Variational Bayes can be seen as an extension of the [expectation–maximization](https://en.wikipedia.org/wiki/Expectation%E2%80%93maximization_algorithm "Expectation–maximization algorithm") (EM) algorithm from [maximum likelihood](https://en.wikipedia.org/wiki/Maximum_likelihood_estimation "Maximum likelihood estimation") (ML) or [maximum a posteriori](https://en.wikipedia.org/wiki/Maximum_a_posteriori_estimation "Maximum a posteriori estimation") (MAP) estimation of the single most probable value of each parameter to fully Bayesian estimation which computes (an approximation to) the entire [posterior distribution](https://en.wikipedia.org/wiki/Posterior_distribution "Posterior distribution") of the parameters and latent variables. As in EM, it finds a set of optimal parameter values, and it has the same alternating structure as does EM, based on a set of interlocked (mutually dependent) equations that cannot be solved analytically.

For many applications, variational Bayes produces solutions of comparable accuracy to Gibbs sampling at greater speed. However, deriving the set of equations used to update the parameters iteratively often requires a large amount of work compared with deriving the comparable Gibbs sampling equations. This is the case even for many models that are conceptually quite simple, as is demonstrated below in the case of a basic non-hierarchical model with only two parameters and no latent variables.

> 🤖 Gemini 3.0
> Variational inference /variational bayesian methods

Both terms refer to a method used to solve a major problem in Bayesian statistics: **Intractability.**


**The Core Concept (The "What" and "Why")**
In Bayesian analysis, you want to find the Posterior (your updated belief). $$P(\text{Posterior}) = \frac{P(\text{Likelihood}) \times P(\text{Prior})}{P(\text{Evidence})}$$
The denominator (Evidence) is often a nightmare to calculate because it requires integrating over all possible parameter values. In complex models (like neural networks), this integral is impossible to solve.

Variational Inference solves this by turning integration into optimization.

Instead of trying to calculate the exact posterior, VI says: "Let's pick a simple distribution we know (like a Gaussian), and tweak its shape until it looks as close as possible to the true posterior."


**How they work (The "Variational" part)**
The term "Variational" comes from the _Calculus of Variations_, which is the math of finding functions that minimize/maximize other quantities.
1. **Choose a Family:** You pick a family of simple distributions 6$Q$ (e.g., Gaussians).
2. **Define Closeness:** You use a metric called **KL Divergence** to measure how different your simple distribution 8$Q$ is from the messy true posterior 9$P$.
3. **Optimize:** You tweak the parameters of 11$Q$ to minimize that difference.

Since you can't calculate the true posterior to measure the difference directly, you instead maximize a proxy called the **ELBO** (Evidence Lower Bound).


Why do people use two names?
- **Statisticians** tend to say **Variational Bayes** to emphasize that they are doing Bayesian statistics (using priors and posteriors) rather than Frequentist statistics.
- **Machine Learning Engineers** tend to say **Variational Inference** because they focus on the algorithmic process (inference as optimization) rather than the statistical philosophy. This is especially common in Deep Learning (e.g., Variational Autoencoders).


Summary Table

| **Term**                  | **Context**           | **nuance**                                                                              |
| ------------------------- | --------------------- | --------------------------------------------------------------------------------------- |
| **Variational Inference** | Machine Learning / CS | Focuses on the _algorithm_: "We are using optimization to infer a distribution."        |
| **Variational Bayes**     | Statistics            | Focuses on the _framework_: "We are doing Bayesian analysis using variational methods." |



## Ref

