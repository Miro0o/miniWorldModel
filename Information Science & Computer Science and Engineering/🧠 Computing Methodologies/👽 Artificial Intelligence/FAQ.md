# FAQ

[TOC]



## 👉 Difference between AI, machine learning, data science, statistics, deep learning ?
#AI #machine_learning #data_science #neural_networks #deep_learning

> ↗️ [Data Science](../../Data-Oriented%20&%20Human-Centered%20Technologies/Data%20Science/Data%20Science.md)

1. 数据科学家具有哪些不同类型？
   要更详细地了解数据科学家的类型，可参阅文章：http://suo.im/28rlX1 和http://suo.im/3NNUpd。更多有用的信息可参阅：
   - 数据科学家与数据架构师：http://suo.im/4bRkRG

   - 数据科学家与数据工程师：http://suo.im/3mpo6E

   - 数据科学家与统计学家：http://suo.im/2GGtfG

   - 数据科学家与业务分析师：http://suo.im/3h0hkX

2. 机器学习中的很多算法用到了数据科学中的统计学思想和方法；机器学习和统计学都是数据科学的一部分。机器学习中的学习一词表示算法依赖于一些数据（被用作训练集），来调整模型或算法的参数。这包含了许多的技术，比如回归、朴素贝叶斯或监督聚类。
3. 数据科学要比机器学习广泛。数据科学中的数据可能并非来自机器或机器处理（调查数据可能就是手动收集，临床试验涉及到专业类型的小数据），就像我刚才所说的，它可能与「学习」没有任何关系。但**主要的区别在于数据科学覆盖整个数据处理**，并非只是算法的或统计类分支。细说之，数据科学也包括：
   - 数据集成（data integration）
   - 分布式架构（distributed architecture）
   - 自动机器学习（automating machine learning）
   - 数据可视化（data visualization）
   - dashboards和BI
   - 数据工程（data engineering）
   - 产品模式中的部署（deployment in production mode）
   - 自动的、数据驱动的决策（automated,data-driven decisions）
4. 深度学习是机器学习的一种实现方法，机器学习属于人工智能。
5. 目前的人工智能的实现方式来看，仍普遍采用统计原理实现，即是基于先验知识的数据处理（预测，模式识别，等等），而这某种程度上可以看作是自动化的数据科学；但是人工智能的终极目标是达到强人工智能，即赋予机器类人的行为模式（包括自我决策，动作行为，甚至情感，社会性，等等，后面两个是我猜的），在未来也许会有不同于当前的基于统计原理的人工智能的实现方式。

> So in this post, I’m proposing an *oversimplified* definition of the difference between the three fields:
>
> - **Data science** produces **insights**
> - **Machine learning** produces **predictions**
> - **Artificial intelligence** produces **actions**
>
> To be clear, this isn’t a *sufficient* qualification: not everything that fits each definition is a part of that field. (A fortune teller makes predictions, but we’d never say that they’re doing machine learning!) These also aren’t a good way of determining someone’s role or job title (“Am I a data scientist?”), which is a matter of focus and experience. (This is true of any job description: I write as part of my job but I’m not a professional writer).
>
> But I think this definition is a useful way to *distinguish* the three types of work, and to avoid sounding silly when you’re talking about it. It’s worth noting that I’m taking a [descriptivist rather than a prescriptivist approach](http://english.blogoverflow.com/2012/10/prescriptivism-and-descriptivism/): I’m not interested in what these terms “should mean”, but rather how people in the field typically use them.
> 
> [What's the difference between data science, machine learning, and artificial intelligence?]: http://varianceexplained.org/r/ds-ml-ai/


[一文读懂机器学习、数据科学、人工智能、深度学习和统计学之间的区别]: http://www.bibdr.org/nd.jsp?id=86
[数据科学、机器学习和AI的区别]: https://developer.aliyun.com/article/374192
[What's the difference between data science, machine learning, and artificial intelligence?]: http://varianceexplained.org/r/ds-ml-ai



## 👉 How to interpret increase in both loss and accuracy
#machine_learning #accuracy #loss


The loss decreases as the training process goes on, except for some fluctuation introduced by the mini-batch gradient descent and/or regularization techniques like dropout (that introduces random noise).

If the loss decreases, the training process is going well.

The (validation I suppose) accuracy, instead, it's a measure of how good the predictions of your model are.

If the model is learning, the accuracy increases. If the model is overfitting, instead, the accuracy stops to increase and can even start to decrease.

If the loss decreases and the accuracy decreases, your model is overfitting.

If the loss increases and the accuracy increase too is because your regularization techniques are working well and you're fighting the overfitting problem. This is true only if the loss, then, starts to decrease whilst the accuracy continues to increase. Otherwise, if the loss keep growing your model is diverging and you should look for the cause (usually you're using a too high learning rate value).


[How to interpret increase in both loss and accuracy | Stackoverflow]: https://stackoverflow.com/questions/40910857/how-to-interpret-increase-in-both-loss-and-accuracy


---
There is no relationship between these two metrics.   
Loss can be seen as a **distance** between the true values of the problem and the values predicted by the model. Greater the loss is, more huge is the errors you made on the data.

Accuracy can be seen as the **number** of error you made on the data.

That means:  
- a low accuracy and huge loss means you made huge errors on a lot of data  
- a low accuracy but low loss means you made little errors on a lot of data  
- a great accuracy with low loss means you made low errors on a few data (best case)  
- your situation: a great accuracy but a huge loss, means you made huge errors on a few data.

For you case, the third model can correctly predict more examples, but on those where it was wrong, it made more errors (the distance between true value and predicted values is more huge).

**NOTE:**
Don't forget that low or huge loss is a subjective metric, which **depends** on the problem and the data. It's a distance between the true value of the prediction, and the prediction made by the model. It depends also on the loss you use.  

Think:  
- If your data are between 0 and 1, a loss of 0.5 is huge, but if your data are between 0 and 255, an error of 0.5 is low.  
- Maybe think of cancer detection, and probability of detecting a cancer. Maybe an error of 0.1 is huge for this problem, whereas an error f 0.1 for image classification is fine.


[🤔 What is the relationship between the accuracy and the loss in deep learning? | Stack exchange ]: https://datascience.stackexchange.com/questions/42599/what-is-the-relationship-between-the-accuracy-and-the-loss-in-deep-learning

