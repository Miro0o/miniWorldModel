# Model Tuning & Hyperparameter Optimization (HPO)

[TOC]



## Res
### Related Topics
↗ [Statistical (Data-Driven) Learning & Machine Learning (ML)](../../../../Statistical%20(Data-Driven)%20Learning%20&%20Machine%20Learning%20(ML)/Statistical%20(Data-Driven)%20Learning%20&%20Machine%20Learning%20(ML).md)


### Other Resources
【9.1 模型调参【斯坦福21秋季：实用机器学习中文版】】 https://www.bilibili.com/video/BV1vQ4y1e7LF/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d



## Intro
> [!links]
> ↗ [Supervised Learning](../../../../Statistical%20(Data-Driven)%20Learning%20&%20Machine%20Learning%20(ML)/Supervised%20Learning/Supervised%20Learning.md)
> ↗ [Unsupervised Learning](../../../../Statistical%20(Data-Driven)%20Learning%20&%20Machine%20Learning%20(ML)/Unsupervised%20Learning/Unsupervised%20Learning.md)
> ↗ [Reinforcement Learning (RL) & Sequential Decision Making](../../../../Statistical%20(Data-Driven)%20Learning%20&%20Machine%20Learning%20(ML)/Reinforcement%20Learning%20(RL)%20&%20Sequential%20Decision%20Making/Reinforcement%20Learning%20(RL)%20&%20Sequential%20Decision%20Making.md)

> [!links]
> ↗ [Models of Computation & Abstract Machines](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Models%20of%20Computation%20&%20Abstract%20Machines/Models%20of%20Computation%20&%20Abstract%20Machines.md)
> 
> ![](../../../../../../../../Assets/Pics/Pasted%20image%2020260318160336.png)
> <small><a>https://www.activestate.com/blog/neural-network-showdown-tensorflow-vs-pytorch/</a></small>
> 
> ![](../../../../../../../../Assets/Pics/Pasted%20image%2020260317221514.png)
> <small><a>https://towardsdatascience.com/the-concept-of-artificial-neurons-perceptrons-in-neural-networks-fab22249cbfc/</a></small>

![](../../../../../../../../Assets/Pics/Pasted%20image%2020260809132349.png)
<small>Example training process for neural networks supervised learning. <br> <a>https://medium.com/data-science-365/overview-of-a-neural-networks-learning-process-61690a502fa</a></small>


### Hyper Parameters
 >[!links]
 >Common LLM Hyperparameters Summery:
 >↗ [LLM Training, Utilization, and Evaluation](../../../../../Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/LLM%20Training,%20Utilization,%20and%20Evaluation/LLM%20Training,%20Utilization,%20and%20Evaluation.md)

The weights that are being adjusted by our optimization algorithms are called “parameters”, and neural networks are known as “parameterized models”.

There is another dimension of neural networks that must be “optimized” as well to get good results, called ”hyperparameters”. This is related to the design of the neural network. Important hyperparameters include:
- Architecture (Dense networks, Long-Short-Term Memories, Convolutional Neural Networks, Autoencoders, Generative-Adversarial Networks, etc)
- \# of input nodes (usually constraints by the problem itself) §Input and output encoding.
- \# of hidden layers.
- Size of each hidden layer.
- Loss functions
- Transfer functions.
- Optimization functions and their parameters (learning rate, momentum, etc.)
- Dropouts and Regularizers.



## Model Tuning Metrics



## Manual Hyperparameter Tuning



## Automated Hyperparameter Tuning



## Automated Machine Learning (AutoML)
### HPO (HyperParameter Optimization)
find a good set of hyperparameters through search algorithms.
#### Search Space
![](../../../../../../../../Assets/Pics/Screenshot%202023-01-31%20at%206.20.27%20PM.png)
#### HPO algorithms: Black-box or Multi-fidelity
![](../../../../../../../../Assets/Pics/Screenshot%202023-01-31%20at%206.23.16%20PM.png)

**Black-box**: treats a training job as a black-box in HPO:
- Completes the training process for each trial

**Multi-fidelity**: modifies the training job to speed up the search
- Train on subsampled datasets
- Reduce modelsize (e.g less \#layers, \#channels) 
- Stop bad configuration earlier
##### 🗃️ Black-box
###### Grid Search

###### Random Search

###### Bayesian Optimization (BO)

##### ↔️ Multi-Fidelity
###### Successive Halving

###### Hyperband


### NAS (Network Architecture Searching)
construct a good neural network model.

↗️ [NAS (Network Architecture Searching)](NAS%20(Network%20Architecture%20Searching).md) 



## Ref
