#  Supervised Learning

[TOC]



## Res
### Related Topics



## Intro
The main goal in supervised learning is to learn a model from **labeled training data** that allows us to make predictions about unseen or future data. Here, the term "supervised" refers to a set of training examples (data inputs) where the desired output signals (labels) are already known. The following figure summarizes a typical supervised learning workflow, where the labeled training data is passed to a machine learning algorithm for fitting a predictive model that can make predictions on new, unlabeled data inputs:

![Screenshot 2023-01-28 at 12.27.24 PM](../../../../../../../Assets/Pics/Screenshot%202023-01-28%20at%2012.27.24%20PM.png)
#### ⭐️ Self-Supervised Learning
> Differ from ↗ [Semi-supervised Learning](🥝%20Semi-supervised%20Learning/Semi-supervised%20Learning.md)

generate labels from data.

E.g. word2vec, BERT
#### 1️⃣ Classification (Discrete)
Classification is a subcategory of supervised learning where the goal is to predict the categorical class labels of new instances, based on past observations. Those class labels are **discrete**, unordered values that can be understood as the group memberships of the instances. 

↗ [ML Classification Algorithms](ML%20Classification%20Algorithms/ML%20Classification%20Algorithms.md)
#### 2️⃣ Regression (Continuous)
A second type of supervised learning is the prediction of **continuous outcomes**, which is also called **regression analysis**. In regression analysis, we are given a number of predictor (**explanatory**) variables and a continuous response variable (**outcome**), and we try to find a relationship between those variables that allows us to predict an outcome.

> 💡 The emphases here is **continuous outcomes**, which means the input might still be discrete while the outcome required is continuous. 

↗ [ML Regression Algorithms](ML%20Regression%20Algorithms/ML%20Regression%20Algorithms.md)
↗ [Regression (Correlation) Analysis](../../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probabilities%20&%20Statistics/🏒%20Statistics%20(Data)%20Analyzing%20Methods%20&%20Statistical%20Model/Regression%20(Correlation)%20Analysis/Regression%20(Correlation)%20Analysis.md)



## Components in Supervised Training
![Screenshot 2023-01-28 at 8.34.46 PM](../../../../../../../Assets/Pics/Screenshot%202023-01-28%20at%208.34.46%20PM.png)



## Types of Supervised Models
### Model Selections
![Screenshot 2023-01-29 at 12.51.59 AM](../../../../../../../Assets/Pics/Screenshot%202023-01-29%20at%2012.51.59%20AM.png)


### 👉 Decision Trees
Use trees to make decisions


### 👉 Linear Methods
Decisions is made from a linear combination of input features


### 👉 Kernel Machines
Use kernel functions to compute feature similarities


### 👉 Neural Networks



## Ref
