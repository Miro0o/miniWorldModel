# Kernel Machines

[TOC]



## Res
### Related Topics
↗ [Gaussian Process](../../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probability%20Theory%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process/Markov%20Process%20&%20Markov%20Chain%20(MC)/Stationary%20Processes%20and%20Brownian%20Motion%20(Wiener%20Process)/Gaussian%20Process/Gaussian%20Process.md)


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Kernel_method

In [machine learning](https://en.wikipedia.org/wiki/Machine_learning "Machine learning"), **kernel machines** are a class of algorithms for [pattern analysis](https://en.wikipedia.org/wiki/Pattern_analysis "Pattern analysis"), whose best known member is the [support-vector machine](https://en.wikipedia.org/wiki/Support-vector_machine "Support-vector machine") (SVM). These methods involve using linear classifiers to solve nonlinear problems. The general task of [pattern analysis](https://en.wikipedia.org/wiki/Pattern_analysis "Pattern analysis") is to find and study general types of relations (for example [clusters](https://en.wikipedia.org/wiki/Cluster_analysis "Cluster analysis"), [rankings](https://en.wikipedia.org/wiki/Ranking "Ranking"), [principal components](https://en.wikipedia.org/wiki/Principal_components "Principal components"), [correlations](https://en.wikipedia.org/wiki/Correlation "Correlation"), [classifications](https://en.wikipedia.org/wiki/Statistical_classification "Statistical classification")) in datasets. For many algorithms that solve these tasks, the data in raw representation have to be explicitly transformed into [feature vector](https://en.wikipedia.org/wiki/Feature_vector "Feature vector") representations via a user-specified _feature map_: in contrast, kernel methods require only a user-specified _kernel_, i.e., a [similarity function](https://en.wikipedia.org/wiki/Similarity_function "Similarity function") over all pairs of data points computed using [inner products](https://en.wikipedia.org/wiki/Inner_products "Inner products"). The feature map in kernel machines is infinite dimensional but only requires a finite dimensional matrix from user-input according to the [representer theorem](https://en.wikipedia.org/wiki/Representer_theorem "Representer theorem"). Kernel machines are slow to compute for datasets larger than a couple of thousand examples without parallel processing.

Kernel methods owe their name to the use of [kernel functions](https://en.wikipedia.org/wiki/Positive-definite_kernel "Positive-definite kernel"), which enable them to operate in a high-dimensional, _implicit_ [feature space](https://en.wikipedia.org/wiki/Feature_space "Feature space") without ever computing the coordinates of the data in that space, but rather by simply computing the [inner products](https://en.wikipedia.org/wiki/Inner_product "Inner product") between the [images](https://en.wikipedia.org/wiki/Image_\(mathematics\) "Image (mathematics)") of all pairs of data in the feature space. This operation is often computationally cheaper than the explicit computation of the coordinates. This approach is called the "**kernel trick**". Kernel functions have been introduced for sequence data, [graphs](https://en.wikipedia.org/wiki/Graph_kernel "Graph kernel"), text, images, as well as vectors.

Algorithms capable of operating with kernels include the [kernel perceptron](https://en.wikipedia.org/wiki/Kernel_perceptron "Kernel perceptron"), support-vector machines (SVM), [Gaussian processes](https://en.wikipedia.org/wiki/Gaussian_process "Gaussian process"), [principal components analysis](https://en.wikipedia.org/wiki/Principal_components_analysis "Principal components analysis") (PCA), [canonical correlation analysis](https://en.wikipedia.org/wiki/Canonical_correlation_analysis "Canonical correlation analysis"), [ridge regression](https://en.wikipedia.org/wiki/Ridge_regression "Ridge regression"), [spectral clustering](https://en.wikipedia.org/wiki/Spectral_clustering "Spectral clustering"), [linear adaptive filters](https://en.wikipedia.org/wiki/Adaptive_filter "Adaptive filter") and many others.

Most kernel algorithms are based on [convex optimization](https://en.wikipedia.org/wiki/Convex_optimization "Convex optimization") or [eigenproblems](https://en.wikipedia.org/wiki/Eigenvalue,_eigenvector_and_eigenspace "Eigenvalue, eigenvector and eigenspace") and are statistically well-founded. Typically, their statistical properties are analyzed using [statistical learning theory](https://en.wikipedia.org/wiki/Statistical_learning_theory "Statistical learning theory") (for example, using [Rademacher complexity](https://en.wikipedia.org/wiki/Rademacher_complexity "Rademacher complexity")).



## Ref
