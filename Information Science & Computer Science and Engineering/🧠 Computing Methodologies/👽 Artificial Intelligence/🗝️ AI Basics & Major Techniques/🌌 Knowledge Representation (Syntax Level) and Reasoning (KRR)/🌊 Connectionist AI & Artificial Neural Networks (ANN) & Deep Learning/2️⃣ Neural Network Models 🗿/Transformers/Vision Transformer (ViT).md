# Vision Transformer (ViT)

[TOC]



## Res
### Related Topics


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Vision_transformer

A **vision transformer** (**ViT**) is a [transformer](https://en.wikipedia.org/wiki/Transformer_\(machine_learning_model\) "Transformer (machine learning model)") designed for [computer vision](https://en.wikipedia.org/wiki/Computer_vision "Computer vision"). A ViT decomposes an input image into a series of patches (rather than text into [tokens](https://en.wikipedia.org/wiki/Byte_pair_encoding "Byte pair encoding")), serializes each patch into a vector, and maps it to a smaller dimension with a single [matrix multiplication](https://en.wikipedia.org/wiki/Matrix_multiplication "Matrix multiplication"). These vector [embeddings](https://en.wikipedia.org/wiki/Latent_space "Latent space") are then processed by a [transformer encoder](https://en.wikipedia.org/wiki/BERT_\(language_model\) "BERT (language model)") as if they were token embeddings.

ViTs were designed as alternatives to [convolutional neural networks](https://en.wikipedia.org/wiki/Convolutional_neural_network "Convolutional neural network") (CNNs) in computer vision applications. They have different inductive biases, training stability, and data efficiency. Compared to CNNs, ViTs are less data efficient, but have higher capacity. Some of the largest modern computer vision models are ViTs, such as one with 22B parameters.

Subsequent to its publication, many variants were proposed, with hybrid architectures with both features of ViTs and CNNs. ViTs have found application in [image recognition](https://en.wikipedia.org/wiki/Image_recognition "Image recognition"), [image segmentation](https://en.wikipedia.org/wiki/Image_segmentation "Image segmentation"), [weather prediction](https://en.wikipedia.org/wiki/Weather_forecasting "Weather forecasting"), and [autonomous driving](https://en.wikipedia.org/wiki/Autonomous_driving "Autonomous driving")



## Ref
