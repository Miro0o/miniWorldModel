# Underfitting & Overfitting

[TOC]



## Res



## Intro
![](../../../../../../../../Assets/Pics/Screenshot%202023-07-07%20at%209.19.22%20AM.png)


### Errors & Complexity (Learning Curve & Testing Curve)
![Screenshot 2023-01-30 at 2.36.10 PM](../../../../../../../../Assets/Pics/Screenshot%202023-01-30%20at%202.36.10%20PM.png)

![Screenshot 2023-01-30 at 2.37.22 PM](../../../../../../../../Assets/Pics/Screenshot%202023-01-30%20at%202.37.22%20PM.png)



## Dealing with OverFitting
If we notice that a model performs much better on a training dataset than on the test dataset, this observation is a strong indicator of **overfitting**. Overfitting means the model fits the parameters too closely with regard to the particular observations in the training dataset, but does not generalize well to new data; we say that the model has a **high variance**. The reason for the overfitting is that our model is too complex for the given training data. Common solutions to reduce the generalization error are as follows:
- Collect more training data
- Introduce a penalty for complexity via regularization
- Choose a simpler model with fewer parameters
- Reduce the dimensionality of the data


### 1️⃣ Dropout Layers



### 2️⃣ Noise Layers
🔗 https://keras.io/layers/noise/



### 3️⃣ Regularizers
> ↗ [Regulations](Regulations.md)

Regularizers are added to individual layers:
- kernel_regularizer: Controls the main weights (lines connecting the green nodes)
- bias_regularizer: Controls the bias weights (lines connecting the orange nodes)
- activity_regularizer: Controls based on layer output (o1 and o2)


#### L1 and L2 regularization as penalties against model complexity

We defined the squared L2 norm of our weight vector, w, as follows:
$$L2: \Vert w \Vert ^2_2 = \displaystyle\sum_{j=0}^n w_j^2$$

Another approach to reduce the model complexity is the related L1 regularization:
$$L1: \Vert w \Vert _1 = \displaystyle\sum_{j=0}^n |w_j|$$

Here, we simply replaced the square of the weights by the sum of the absolute values of the weights. **In contrast to L2 regularization, L1 regularization usually yields sparse feature vectors and most feature weights will be zero**. Sparsity can be useful in practice if we have a high-dimensional dataset with many features that are irrelevant, especially in cases where we have more irrelevant dimensions than training examples. In this sense, L1 regularization can be understood as a technique for feature selection.


### 4️⃣ (Data) Dimensionality Reduction
↗ [Dimensionality Reduction (Data Compression)](../../../../📊%20Statistical%20Learning%20Theory%20&%20ML%20Types/Unsupervised%20Learning/Dimensionality%20Reduction%20(Data%20Compression)/Dimensionality%20Reduction%20(Data%20Compression).md)

An alternative way to reduce the complexity of the model and avoid overfitting is dimensionality reduction via feature selection, which is especially useful for un-regularized models. There are two main categories of dimensionality reduction techniques: **feature selection** and **feature extraction**. Via feature selection, we select a subset of the original features, whereas in feature extraction, we derive information from the feature set to construct a new feature subspace.

↗ [Feature Engineering](../../../1️⃣%20Datasets%20Preparation/Data%20Preprocessing/Feature%20Engineering/Feature%20Engineering.md)



## Dealing with UnderFitting
#TODO 



## Ref
[Overfitting and Underfitting | Kaggle]: https://www.kaggle.com/code/ryanholbrook/overfitting-and-underfitting#

