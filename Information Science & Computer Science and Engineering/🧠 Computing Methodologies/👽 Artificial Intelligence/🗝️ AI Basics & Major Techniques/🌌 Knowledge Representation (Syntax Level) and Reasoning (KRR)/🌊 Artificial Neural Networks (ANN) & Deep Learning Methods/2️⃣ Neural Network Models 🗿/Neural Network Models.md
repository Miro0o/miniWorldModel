# Neural Network Models

[TOC]



## Res
### Related Topics
↗ [Statistical Learning (Data-Driven) & Machine Learning Methods](../../../Statistical%20Learning%20(Data-Driven)%20&%20Machine%20Learning%20Methods/Statistical%20Learning%20(Data-Driven)%20&%20Machine%20Learning%20Methods.md)
↗ [Probabilistic Models (Distributions) & Stochastic Process](../../../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probability%20Theory%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process/Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process.md)


### Other Resources



## Intro



## Discriminative Models



## Generative Models
### Autoregressive Models


### GAN (Generative Adversarial Network)


### Latent-Variable Models


### Diffusion-Based Models


### Energy-Based Models



## Ref
[Foukalas, F. A Survey of Artificial Neural Network Computing Systems. _Cogn Comput_ 17, 4 (2025). ]: https://doi.org/10.1007/s12559-024-10383-0

https://chatgpt.com/share/6994cb5c-c1cc-800f-8483-024b9f5e35e7
A rigorous taxonomy splits models into:
1. Explicit density models
2. Implicit density models
3. Energy-based models
4. Latent-variable models
5. Autoregressive models
6. Score-based models (diffusion)

LLMs fall under:
> Autoregressive explicit density models implemented via Transformers.

----
Clean Structural Taxonomy
- A. Static Function Approximators $y=f(x)$
	- MLP
	- CNN
	- Transformer
- B. Dynamical Systems $h_{t+1}=f(ht)$
	- RNN
	- Hopfield
	- Neural ODE
- C. Energy-Based Models $E(x)$
	- Boltzmann Machines
	- Modern EBMs
- D. Explicit Probabilistic Models $p(x)$
	- Autoregressive models
	- Diffusion
	- Graphical models

The Deep Insight
Almost all modern AI systems reduce to one of three mathematical views:
1. Function approximation
2. Dynamical systems
3. Energy minimization
4. Probabilistic modeling

Feedforward networks live in (1).  But many powerful models live in (2) and (3).
