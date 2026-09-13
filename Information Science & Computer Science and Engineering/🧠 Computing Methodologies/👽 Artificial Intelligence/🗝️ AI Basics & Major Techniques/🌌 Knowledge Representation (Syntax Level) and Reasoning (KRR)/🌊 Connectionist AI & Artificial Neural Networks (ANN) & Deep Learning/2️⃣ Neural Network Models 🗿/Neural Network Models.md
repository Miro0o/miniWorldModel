# Neural Network Models

[TOC]



## Res
### Related Topics
↗ [Statistical (Data-Driven) Learning & Machine Learning (ML)](../../../Statistical%20%28Data-Driven%29%20Learning%20&%20Machine%20Learning%20%28ML%29/Statistical%20%28Data-Driven%29%20Learning%20&%20Machine%20Learning%20%28ML%29.md)
↗ [Probabilistic Models (Distributions) & Stochastic Process](../../../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20%28&%20Analytical%20Mathematics%29/📐%20Measures%20%28Measure%20Theory%29/📊%20Probability%20Theory%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20%28Distributions%29%20&%20Stochastic%20Process/Probabilistic%20Models%20%28Distributions%29%20&%20Stochastic%20Process.md)

↗ [(Deep) Generative Models](../../../Statistical%20%28Data-Driven%29%20Learning%20&%20Machine%20Learning%20%28ML%29/Probabilistic%20Modeling%20Distinction/🪽%20%28Deep%29%20Generative%20Models/%28Deep%29%20Generative%20Models.md)

↗ [Model Tuning & Hyperparameter Optimization (HPO)](../3️⃣%20Model%20Training%20%28Classical%20ML%20&%20NN%29/Model%20Tuning%20&%20Hyperparameter%20Optimization%20%28HPO%29/Model%20Tuning%20&%20Hyperparameter%20Optimization%20%28HPO%29.md)


### Other Resources



## Intro



## Discriminative Models



## Generative Models
↗ [(Deep) Generative Models](../../../Statistical%20%28Data-Driven%29%20Learning%20&%20Machine%20Learning%20%28ML%29/Probabilistic%20Modeling%20Distinction/🪽%20%28Deep%29%20Generative%20Models/%28Deep%29%20Generative%20Models.md)



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
