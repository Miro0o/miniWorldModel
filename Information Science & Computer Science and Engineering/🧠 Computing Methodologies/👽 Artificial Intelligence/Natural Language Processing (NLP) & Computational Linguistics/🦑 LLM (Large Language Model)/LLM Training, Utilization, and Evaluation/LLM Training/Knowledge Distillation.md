# Knowledge Distillation

[TOC]



## Res
### Related Topics
↗ [Transfer Learning](../../../../🗝️%20AI%20Basics%20&%20Major%20Techniques/🌌%20Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR)/🌊%20Artificial%20Neural%20Networks%20(ANN)%20&%20Deep%20Learning%20Methods/3️⃣%20Model%20Training/Transfer%20Learning/Transfer%20Learning.md)


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Knowledge_distillation

In machine learning, knowledge distillation or model distillation is the process of transferring knowledge from a large model to a smaller one. While large models (such as very deep neural networks or ensembles of many models) have more knowledge capacity than small models, this capacity might not be fully utilized. It can be just as computationally expensive to evaluate a model even if it utilizes little of its knowledge capacity. Knowledge distillation transfers knowledge from a large model to a smaller one without loss of validity. As smaller models are less expensive to evaluate, they can be deployed on less powerful hardware (such as a mobile device).[1]

There is also a less common technique called Reverse Knowledge Distillation, where knowledge is transferred from a smaller model to a larger one.[2]

Model distillation is not to be confused with model compression, which describes methods to decrease the size of a large model itself, without training a new model. Model compression generally preserves the architecture and the nominal parameter count of the model, while decreasing the bits-per-parameter.

Knowledge distillation has been successfully used in several applications of machine learning such as object detection,[3] acoustic models,[4] and natural language processing.[5] Recently[when?], it has also been introduced to graph neural networks applicable to non-grid data.[6]



## Ref
[【LLM】Distilling Step-by-Step——将大模型的推理能力蒸馏到小模型 - 深林有夕的文章 - 知乎]: https://zhuanlan.zhihu.com/p/666289360
