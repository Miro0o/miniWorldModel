# CNN (Convolutional Neural Network)

[TOC]



## Res
### Related Topics
↗ [CS 231n Deep Learning for Computer Vision](../../../../../../../🗺%20CS%20Overview/💋%20Intro%20to%20Computer%20Science/👩🏼‍🏫%20Courses%20of%20Universities/Stanford/CS%20231n%20Deep%20Learning%20for%20Computer%20Vision/CS%20231n%20Deep%20Learning%20for%20Computer%20Vision.md)


### Learning Resources
🏫 https://cs230.stanford.edu
- Module 2: Convolutional Neural Networks
	- [Convolutional Neural Networks: Architectures, Convolution / Pooling Layers](https://cs231n.github.io/convolutional-networks/)
		- layers, spatial arrangement, layer patterns, layer sizing patterns, AlexNet/ZFNet/VGGNet case studies, computational considerations
	- [Understanding and Visualizing Convolutional Neural Networks](https://cs231n.github.io/understanding-cnn/)
		- tSNE embeddings, deconvnets, data gradients, fooling ConvNets, human comparisons
	- [Transfer Learning and Fine-tuning Convolutional Neural Networks](https://cs231n.github.io/transfer-learning/)

Additional resources related to implementation:
- [Soumith benchmarks for CONV performance](https://github.com/soumith/convnet-benchmarks)
- [ConvNetJS CIFAR-10 demo](http://cs.stanford.edu/people/karpathy/convnetjs/demo/cifar10.html) allows you to play with ConvNet architectures and see the results and computations in real time, in the browser.
- [Caffe](http://caffe.berkeleyvision.org/), one of the popular ConvNet libraries.
- [State of the art ResNets in Torch7](http://torch.ch/blog/2016/02/04/resnets.html)


https://stanford.edu/~shervine/teaching/cs-230/cheatsheet-convolutional-neural-networks/
Convolutional Neural Networks
By [Afshine Amidi](https://www.mit.edu/~amidi/) and [Shervine Amidi](https://stanford.edu/~shervine/)


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Convolutional_neural_network


> 🔗 https://cs231n.github.io/convolutional-networks/

Convolutional Neural Networks are very similar to ordinary Neural Networks from the previous chapter: they are made up of neurons that have learnable weights and biases. Each neuron receives some inputs, performs a dot product and optionally follows it with a non-linearity. The whole network still expresses a single differentiable score function: from the raw image pixels on one end to class scores at the other. And they still have a loss function (e.g. SVM/Softmax) on the last (fully-connected) layer and all the tips/tricks we developed for learning regular Neural Networks still apply.

So what changes? ConvNet architectures make the explicit assumption that the inputs are images, which allows us to encode certain properties into the architecture. These then make the forward function more efficient to implement and vastly reduce the amount of parameters in the network.


![](../../../../../../../../../Assets/Pics/Screenshot%202023-01-29%20at%201.01.11%20AM.png)

![|200](../../../../../../../../../Assets/Pics/Screenshot%202023-01-29%20at%201.04.42%20AM.png)


Recognize objects in images:
- **Translation invariance:** similar output no matter where the object is
- **Locality**:pixels are more related to near neighbors


### Case Studies
> 🔗 https://cs231n.github.io/convolutional-networks/

There are several architectures in the field of Convolutional Networks that have a name. The most common are:
- **LeNet**. The first successful applications of Convolutional Networks were developed by Yann LeCun in 1990’s. Of these, the best known is the [LeNet](http://yann.lecun.com/exdb/publis/pdf/lecun-98.pdf) architecture that was used to read zip codes, digits, etc.
- **AlexNet**. The first work that popularized Convolutional Networks in Computer Vision was the [AlexNet](http://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks), developed by Alex Krizhevsky, Ilya Sutskever and Geoff Hinton. The AlexNet was submitted to the [ImageNet ILSVRC challenge](http://www.image-net.org/challenges/LSVRC/2014/) in 2012 and significantly outperformed the second runner-up (top 5 error of 16% compared to runner-up with 26% error). The Network had a very similar architecture to LeNet, but was deeper, bigger, and featured Convolutional Layers stacked on top of each other (previously it was common to only have a single CONV layer always immediately followed by a POOL layer).
	- ↗ [AlexNet](AlexNet.md)
- **ZF Net**. The ILSVRC 2013 winner was a Convolutional Network from Matthew Zeiler and Rob Fergus. It became known as the [ZFNet](http://arxiv.org/abs/1311.2901) (short for Zeiler & Fergus Net). It was an improvement on AlexNet by tweaking the architecture hyperparameters, in particular by expanding the size of the middle convolutional layers and making the stride and filter size on the first layer smaller.
- **GoogLeNet**. The ILSVRC 2014 winner was a Convolutional Network from [Szegedy et al.](http://arxiv.org/abs/1409.4842) from Google. Its main contribution was the development of an _Inception Module_ that dramatically reduced the number of parameters in the network (4M, compared to AlexNet with 60M). Additionally, this paper uses Average Pooling instead of Fully Connected layers at the top of the ConvNet, eliminating a large amount of parameters that do not seem to matter much. There are also several followup versions to the GoogLeNet, most recently [Inception-v4](http://arxiv.org/abs/1602.07261).
- **VGGNet**. The runner-up in ILSVRC 2014 was the network from Karen Simonyan and Andrew Zisserman that became known as the [VGGNet](http://www.robots.ox.ac.uk/~vgg/research/very_deep/). Its main contribution was in showing that the depth of the network is a critical component for good performance. Their final best network contains 16 CONV/FC layers and, appealingly, features an extremely homogeneous architecture that only performs 3x3 convolutions and 2x2 pooling from the beginning to the end. Their [pretrained model](http://www.robots.ox.ac.uk/~vgg/research/very_deep/) is available for plug and play use in Caffe. A downside of the VGGNet is that it is more expensive to evaluate and uses a lot more memory and parameters (140M). Most of these parameters are in the first fully connected layer, and it was since found that these FC layers can be removed with no performance downgrade, significantly reducing the number of necessary parameters.
	- ↗ [VGGNet](VGGNet/VGGNet.md)
- **ResNet**. [Residual Network](http://arxiv.org/abs/1512.03385) developed by Kaiming He et al. was the winner of ILSVRC 2015. It features special _skip connections_ and a heavy use of [batch normalization](http://arxiv.org/abs/1502.03167). The architecture is also missing fully connected layers at the end of the network. The reader is also referred to Kaiming’s presentation ([video](https://www.youtube.com/watch?v=1PGLj-uKT1w), [slides](http://research.microsoft.com/en-us/um/people/kahe/ilsvrc15/ilsvrc2015_deep_residual_learning_kaiminghe.pdf)), and some [recent experiments](https://github.com/gcr/torch-residual-networks) that reproduce these networks in Torch. ResNets are currently by far state of the art Convolutional Neural Network models and are the default choice for using ConvNets in practice (as of May 10, 2016). In particular, also see more recent developments that tweak the original architecture from [Kaiming He et al. Identity Mappings in Deep Residual Networks](https://arxiv.org/abs/1603.05027) (published March 2016).
	- ↗ [ResNet (Residual Networks)](ResNet%20(Residual%20Networks)/ResNet%20(Residual%20Networks).md)



## Architecture
> 🔗 https://en.wikipedia.org/wiki/Convolutional_neural_network#Architecture

A convolutional neural network consists of an input layer, [hidden layers](https://en.wikipedia.org/wiki/Artificial_neural_network#Organization "Artificial neural network") and an output layer. In a convolutional neural network, the hidden layers include one or more layers that perform convolutions. Typically this includes a layer that performs a [dot product](https://en.wikipedia.org/wiki/Dot_product "Dot product") of the convolution kernel with the layer's input matrix. This product is usually the [Frobenius inner product](https://en.wikipedia.org/wiki/Frobenius_inner_product "Frobenius inner product"), and its activation function is commonly [ReLU](https://en.wikipedia.org/wiki/Rectifier_\(neural_networks\) "Rectifier (neural networks)"). As the convolution kernel slides along the input matrix for the layer, the convolution operation generates a feature map, which in turn contributes to the input of the next layer. This is followed by other layers such as [pooling layers](https://en.wikipedia.org/wiki/Pooling_layer "Pooling layer"), fully connected layers, and normalization layers. Here it should be noted how close a convolutional neural network is to a [matched filter](https://en.wikipedia.org/wiki/Matched_filter "Matched filter")


### Convolution Layer


### Pooling Layer



## Ref

