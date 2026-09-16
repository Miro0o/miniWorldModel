# First-Order & Gradient Methods

[TOC]



## Res
### Related Topics
↗ [Mathematical Analysis (& Analytical Mathematics)](../../../../../🧐%20Mathematical%20Analysis%20%28&%20Analytical%20Mathematics%29/Mathematical%20Analysis%20%28&%20Analytical%20Mathematics%29.md)
↗ [Differential Calculus & Derivative of Function](../../../../../🧐%20Mathematical%20Analysis%20%28&%20Analytical%20Mathematics%29/Differential%20Calculus%20&%20Derivative%20of%20Function/Differential%20Calculus%20&%20Derivative%20of%20Function.md)
↗ [Derivative Equation (DE)](../../../../../🧐%20Mathematical%20Analysis%20%28&%20Analytical%20Mathematics%29/Differential%20Calculus%20&%20Derivative%20of%20Function/Derivative%20Equation%20%28DE%29.md)

↗ [Connectionist AI & Artificial Neural Networks (ANN) & Deep Learning](../../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20%28Syntax%20Level%29%20and%20Reasoning%20%28KRR%29/🌊%20Connectionist%20AI%20&%20Artificial%20Neural%20Networks%20%28ANN%29%20&%20Deep%20Learning/Connectionist%20AI%20&%20Artificial%20Neural%20Networks%20%28ANN%29%20&%20Deep%20Learning.md)
↗ [Model Training (Classical ML & NN)](../../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20%28Syntax%20Level%29%20and%20Reasoning%20%28KRR%29/🌊%20Connectionist%20AI%20&%20Artificial%20Neural%20Networks%20%28ANN%29%20&%20Deep%20Learning/3️⃣%20Model%20Training%20%28Classical%20ML%20&%20NN%29/Model%20Training%20%28Classical%20ML%20&%20NN%29.md)
↗ [Model Tuning & Hyperparameter Optimization (HPO)](../../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20%28Syntax%20Level%29%20and%20Reasoning%20%28KRR%29/🌊%20Connectionist%20AI%20&%20Artificial%20Neural%20Networks%20%28ANN%29%20&%20Deep%20Learning/3️⃣%20Model%20Training%20%28Classical%20ML%20&%20NN%29/Model%20Tuning%20&%20Hyperparameter%20Optimization%20%28HPO%29/Model%20Tuning%20&%20Hyperparameter%20Optimization%20%28HPO%29.md)
↗ [Optimizers](../../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20%28Syntax%20Level%29%20and%20Reasoning%20%28KRR%29/🌊%20Connectionist%20AI%20&%20Artificial%20Neural%20Networks%20%28ANN%29%20&%20Deep%20Learning/3️⃣%20Model%20Training%20%28Classical%20ML%20&%20NN%29/Model%20Tuning%20&%20Hyperparameter%20Optimization%20%28HPO%29/Optimizers/Optimizers.md)

↗ [LLM (Large Language Model)](../../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/Natural%20Language%20Processing%20%28NLP%29%20&%20Computational%20Linguistics/🦑%20LLM%20%28Large%20Language%20Model%29/LLM%20%28Large%20Language%20Model%29.md)
↗ [LLM Training, Utilization, and Evaluation](../../../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/Natural%20Language%20Processing%20%28NLP%29%20&%20Computational%20Linguistics/🦑%20LLM%20%28Large%20Language%20Model%29/LLM%20Training,%20Utilization,%20and%20Evaluation/LLM%20Training,%20Utilization,%20and%20Evaluation.md)


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Gradient_method



## Gradient Decent (GD) Methods
> 🔗 https://en.wikipedia.org/wiki/Gradient_descent

The idea is to take repeated steps in the opposite direction of the [gradient](https://en.wikipedia.org/wiki/Gradient "Gradient") (or approximate gradient) of the function at the current point, because this is the direction of steepest descent. Conversely, stepping in the direction of the gradient will lead to a trajectory that maximizes that function; the procedure is then known as _gradient ascent_. Gradient descent should not be confused with [local search](https://en.wikipedia.org/wiki/Local_search_\(optimization\) "Local search (optimization)") algorithms, although both are [iterative methods](https://en.wikipedia.org/wiki/Iterative_method "Iterative method") for [optimization](https://en.wikipedia.org/wiki/Global_optimization "Global optimization").

Gradient descent is particularly useful in [machine learning](https://en.wikipedia.org/wiki/Machine_learning "Machine learning") and [artificial intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence "Artificial intelligence") for minimizing the cost or loss function.

Gradient descent is generally attributed to [Augustin-Louis Cauchy](https://en.wikipedia.org/wiki/Augustin-Louis_Cauchy "Augustin-Louis Cauchy"), who first suggested it in 1847. [Jacques Hadamard](https://en.wikipedia.org/wiki/Jacques_Hadamard "Jacques Hadamard") independently proposed a similar method in 1907. Its convergence properties for non-linear optimization problems were first studied by [Haskell Curry](https://en.wikipedia.org/wiki/Haskell_Curry "Haskell Curry") in 1944,[[5]](https://en.wikipedia.org/wiki/Gradient_descent#cite_note-5) with the method becoming increasingly well-studied and used in the following decades.

A simple extension of gradient descent, [stochastic gradient descent](https://en.wikipedia.org/wiki/Stochastic_gradient_descent "Stochastic gradient descent"), serves as the most basic algorithm used for training most [deep networks](https://en.wikipedia.org/wiki/Deep_neural_network "Deep neural network") today.


### Projected & Proximal Gradient Descent
↗ [Projected Gradient Methods](Projected%20Gradient%20Methods.md)
↗ [Proximal Gradient Methods](Proximal%20Gradient%20Methods.md)


### Accelerated Gradient Descent
#### Momentum
##### Polyak Momentum

##### Nesterov Accelerated Gradient

#### Preconditioning



## Conjugate Gradient (CG) Methods
> 🔗 https://en.wikipedia.org/wiki/Conjugate_gradient_method

In [mathematics](https://en.wikipedia.org/wiki/Mathematics "Mathematics"), the **conjugate gradient method** is an [algorithm](https://en.wikipedia.org/wiki/Algorithm "Algorithm") for the [numerical solution](https://en.wikipedia.org/wiki/Numerical_solution "Numerical solution") of particular [systems of linear equations](https://en.wikipedia.org/wiki/System_of_linear_equations "System of linear equations"), namely those whose matrix is [positive-semidefinite](https://en.wikipedia.org/wiki/Positive-semidefinite_matrix "Positive-semidefinite matrix"). The conjugate gradient method is often implemented as an [iterative algorithm](https://en.wikipedia.org/wiki/Iterative_method "Iterative method"), applicable to [sparse](https://en.wikipedia.org/wiki/Sparse_matrix "Sparse matrix") systems that are too large to be handled by a direct implementation or other direct methods such as the [Cholesky decomposition](https://en.wikipedia.org/wiki/Cholesky_decomposition "Cholesky decomposition"). Large sparse systems often arise when numerically solving [partial differential equations](https://en.wikipedia.org/wiki/Partial_differential_equation "Partial differential equation") or optimization problems.

The conjugate gradient method can also be used to solve unconstrained [optimization](https://en.wikipedia.org/wiki/Mathematical_optimization "Mathematical optimization") problems such as [energy minimization](https://en.wikipedia.org/wiki/Energy_minimization "Energy minimization"). It is commonly attributed to [Magnus Hestenes](https://en.wikipedia.org/wiki/Magnus_Hestenes "Magnus Hestenes") and [Eduard Stiefel](https://en.wikipedia.org/wiki/Eduard_Stiefel "Eduard Stiefel"), who programmed it on the [Z4](https://en.wikipedia.org/wiki/Z4_\(computer\) "Z4 (computer)"), and extensively researched it.

The [biconjugate gradient method](https://en.wikipedia.org/wiki/Biconjugate_gradient_method "Biconjugate gradient method") provides a generalization to non-symmetric matrices. Various [nonlinear conjugate gradient methods](https://en.wikipedia.org/wiki/Nonlinear_conjugate_gradient_method "Nonlinear conjugate gradient method") seek minima of nonlinear optimization problems.



## Ref
