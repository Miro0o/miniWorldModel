# Representation (Feature) Learning

[TOC]



## Res
### Related Topics
↗ [Information Theory](../../../../🧮%20Mathematics/🥸%20Information%20Theory/Information%20Theory.md)

↗ [Feature Engineering](../🌌%20Knowledge%20Representation%20(Syntax%20Level)%20and%20Reasoning%20(KRR)/🌊%20Connectionist%20AI%20&%20Artificial%20Neural%20Networks%20(ANN)%20&%20Deep%20Learning/1️⃣%20Datasets%20Preparation/Data%20Preprocessing/Feature%20Engineering/Feature%20Engineering.md)

↗ [Data Science](../../../../Data-Oriented%20&%20Human-Centered%20Technologies/Data%20Science/Data%20Science.md)
↗ [Data Mining](../../../../Data-Oriented%20&%20Human-Centered%20Technologies/Data%20Science/⛏️%20Data%20Mining/Data%20Mining.md)


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Representation_learning

In [machine learning](https://en.wikipedia.org/wiki/Machine_learning "Machine learning") (ML), **representation learning** or **feature learning**[[2]](https://en.wikipedia.org/wiki/Representation_learning#cite_note-pami-2) is a set of techniques that allow a system to automatically discover the representations needed for [feature](https://en.wikipedia.org/wiki/Feature_\(machine_learning\) "Feature (machine learning)") detection or classification from raw data. This replaces manual [feature engineering](https://en.wikipedia.org/wiki/Feature_engineering "Feature engineering") and allows a machine to both learn the features and use them to perform a specific task.

Feature learning is motivated by the fact that ML tasks such as [classification](https://en.wikipedia.org/wiki/Statistical_classification "Statistical classification") often require input that is mathematically and computationally convenient to process. However, real-world data, such as image, video, and sensor data, have not yielded to attempts to algorithmically define specific features. An alternative is to discover such features or representations through examination, without relying on explicit algorithms.

Feature learning can be either supervised, unsupervised, or self-supervised:
- In [supervised feature learning](https://en.wikipedia.org/wiki/Supervised_feature_learning "Supervised feature learning"), features are learned using labeled input data. Labeled data includes input-label pairs where the input is given to the model, and it must produce the ground truth label as the output. This can be leveraged to generate feature representations with the model which result in high label prediction accuracy. Examples include supervised [neural networks](https://en.wikipedia.org/wiki/Neural_network_\(machine_learning\) "Neural network (machine learning)"), [multilayer perceptrons](https://en.wikipedia.org/wiki/Multilayer_perceptron "Multilayer perceptron"), and [dictionary learning](https://en.wikipedia.org/wiki/Dictionary_learning "Dictionary learning").
- In [unsupervised feature learning](https://en.wikipedia.org/wiki/Unsupervised_learning "Unsupervised learning"), features are learned with unlabeled input data by analyzing the relationship between points in the dataset. Examples include dictionary learning, [independent component analysis](https://en.wikipedia.org/wiki/Independent_component_analysis "Independent component analysis"), [matrix factorization](https://en.wikipedia.org/wiki/Matrix_decomposition "Matrix decomposition"), and various forms of [clustering](https://en.wikipedia.org/wiki/Cluster_analysis "Cluster analysis").
- In [self-supervised feature learning](https://en.wikipedia.org/wiki/Self-supervised_learning "Self-supervised learning"), features are learned using unlabeled data like unsupervised learning, however input-label pairs are constructed from each data point, enabling learning the structure of the data through supervised methods such as [gradient descent](https://en.wikipedia.org/wiki/Gradient_descent "Gradient descent"). Classical examples include [word embeddings](https://en.wikipedia.org/wiki/Word_embedding "Word embedding") and [autoencoders](https://en.wikipedia.org/wiki/Autoencoder "Autoencoder"). Self-supervised learning has since been applied to many modalities through the use of [deep neural network architectures](https://en.wikipedia.org/wiki/Deep_learning "Deep learning") such as [convolutional neural networks](https://en.wikipedia.org/wiki/Convolutional_neural_network "Convolutional neural network") and [transformers](https://en.wikipedia.org/wiki/Transformer_\(machine_learning_model\) "Transformer (machine learning model)").



## Ref
