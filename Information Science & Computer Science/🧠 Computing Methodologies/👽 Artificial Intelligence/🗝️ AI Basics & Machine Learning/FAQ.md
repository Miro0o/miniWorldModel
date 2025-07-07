# FAQ

[TOC]


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

