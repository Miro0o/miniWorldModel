# Markov Chain Monte Carlo (MCMC) Methods

[TOC]



## Res
### Related Topics
↗ [Markov Process & Markov Chain (MC)](../../🏌🏻‍♂️%20Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process/Markov%20Process%20&%20Markov%20Chain%20(MC)/Markov%20Process%20&%20Markov%20Chain%20(MC).md)


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Markov_chain_Monte_Carlo

In [statistics](https://en.wikipedia.org/wiki/Statistics "Statistics"), **Markov chain Monte Carlo** (**MCMC**) is a class of [algorithms](https://en.wikipedia.org/wiki/Algorithm "Algorithm") used to draw samples from a [probability distribution](https://en.wikipedia.org/wiki/Probability_distribution "Probability distribution"). Given a probability distribution, one can construct a [Markov chain](https://en.wikipedia.org/wiki/Markov_chain "Markov chain") whose elements' distribution approximates it – that is, the Markov chain's [equilibrium distribution](https://en.wikipedia.org/wiki/Discrete-time_Markov_chain#Stationary_distributions "Discrete-time Markov chain") matches the target distribution. The more steps that are included, the more closely the distribution of the sample matches the actual desired distribution.

Markov chain Monte Carlo methods are used to study probability distributions that are too complex or too high [dimensional](https://en.wikipedia.org/wiki/N-dimensional_space "N-dimensional space") to study with analytic techniques alone. Various algorithms exist for constructing such Markov chains, including the [Metropolis–Hastings algorithm](https://en.wikipedia.org/wiki/Metropolis%E2%80%93Hastings_algorithm "Metropolis–Hastings algorithm").


**General explanation**

Markov chain Monte Carlo methods create samples from a continuous [random variable](https://en.wikipedia.org/wiki/Random_variable "Random variable"), with [probability density](https://en.wikipedia.org/wiki/Probability_density "Probability density") proportional to a known function. These samples can be used to evaluate an integral over that variable, as its [expected value](https://en.wikipedia.org/wiki/Expected_value "Expected value") or [variance](https://en.wikipedia.org/wiki/Variance "Variance").

Practically, an [ensemble](https://en.wikipedia.org/wiki/Statistical_ensemble "Statistical ensemble") of chains is generally developed, starting from a set of points arbitrarily chosen and sufficiently distant from each other. These chains are [stochastic processes](https://en.wikipedia.org/wiki/Stochastic_processes "Stochastic processes") of "walkers" which move around randomly according to an algorithm that looks for places with a reasonably high contribution to the integral to move into next, assigning them higher probabilities.

Random walk Monte Carlo methods are a kind of random [simulation](https://en.wikipedia.org/wiki/Computer_simulation "Computer simulation") or [Monte Carlo method](https://en.wikipedia.org/wiki/Monte_Carlo_method "Monte Carlo method"). However, whereas the random samples of the integrand used in a conventional [Monte Carlo integration](https://en.wikipedia.org/wiki/Monte_Carlo_integration "Monte Carlo integration") are [statistically independent](https://en.wikipedia.org/wiki/Statistically_independent "Statistically independent"), those used in MCMC are [autocorrelated](https://en.wikipedia.org/wiki/Autocorrelation "Autocorrelation"). Correlations of samples introduces the need to use the [Markov chain central limit theorem](https://en.wikipedia.org/wiki/Markov_chain_central_limit_theorem "Markov chain central limit theorem") when estimating the error of mean values.

==These algorithms create [Markov chains](https://en.wikipedia.org/wiki/Markov_chains "Markov chains") such that they have an [equilibrium distribution](https://en.wikipedia.org/wiki/Markov_chain#Steady-state_analysis_and_limiting_distributions "Markov chain") which is proportional to the function given.==



## Ref
[MCMC 背后的故事]: http://xhslink.com/o/7HLzGi5Irvc 
