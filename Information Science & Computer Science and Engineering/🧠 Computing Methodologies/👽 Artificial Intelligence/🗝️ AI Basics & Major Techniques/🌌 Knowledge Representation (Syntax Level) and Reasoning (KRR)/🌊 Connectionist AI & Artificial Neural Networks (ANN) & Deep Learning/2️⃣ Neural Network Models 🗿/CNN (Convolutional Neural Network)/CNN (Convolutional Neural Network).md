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
> 🤖 GPT 6.0 Astra
> https://chatgpt.com/share/6ac4aef0-7a44-83ec-a16f-99f94482d62b (cnn overview & components)
> https://chatgpt.com/share/6ac4af0f-ebec-83ec-879d-1e7276a38b34 (cnn arch)


> 🔗 https://en.wikipedia.org/wiki/Convolutional_neural_network


> 🔗 https://cs231n.github.io/convolutional-networks/

Convolutional Neural Networks are very similar to ordinary Neural Networks from the previous chapter: they are made up of neurons that have learnable weights and biases. Each neuron receives some inputs, performs a dot product and optionally follows it with a non-linearity. The whole network still expresses a single differentiable score function: from the raw image pixels on one end to class scores at the other. And they still have a loss function (e.g. SVM/Softmax) on the last (fully-connected) layer and all the tips/tricks we developed for learning regular Neural Networks still apply.

So what changes? ConvNet architectures make the explicit assumption that the inputs are images, which allows us to encode certain properties into the architecture. These then make the forward function more efficient to implement and vastly reduce the amount of parameters in the network.


### Convolution
> 🤖 GPT 6.0 Astra
> https://chatgpt.com/share/6ac4b29a-909c-83ec-81c7-0adf38b46388

【中文】

卷积是一种描述“一个局部模式如何在整个空间或时间轴上作用”的数学运算。对于两个函数 $x(t)$ 和 $h(t)$，卷积定义为

$y(t)=(x*h)(t)=\int_{-\infty}^{\infty}x(\tau)h(t-\tau)d\tau$。

理解这个公式的关键不是首先去记积分形式，而是理解其中的“平移、加权和叠加”。固定一个时刻 $t$，函数 $h(t-\tau)$ 表示把同一个函数 $h$ 平移到不同的位置；$x(\tau)$ 决定每个平移版本应当具有多大的权重；最后对所有 $\tau$ 的贡献进行积分，就得到当前位置的输出 $y(t)$。因此，卷积本质上是在问：如果同一种响应模式可以发生在任意位置，那么所有位置产生的响应叠加起来会得到什么结果？

在线性时不变系统中，这种数学结构具有特别清楚的物理意义。任意信号都可以看成无穷多个移位冲激的加权叠加：

$x(t)=\int_{-\infty}^{\infty}x(\tau)\delta(t-\tau)d\tau$。

如果系统对单位冲激 $\delta(t)$ 的响应是 $h(t)$，那么由于系统具有时不变性，对移位冲激 $\delta(t-\tau)$ 的响应必然是 $h(t-\tau)$；又由于系统具有线性性，当输入由许多冲激叠加而成时，输出就是这些冲激响应的相同加权叠加。因此

$y(t)=\int_{-\infty}^{\infty}x(\tau)h(t-\tau)d\tau$，

这正是卷积。由此可以看到，卷积并不是人为规定出来的一种奇怪运算，而是“线性性”和“平移不变性”自然推导出来的结果。

因果性则是另一个独立的概念。卷积本身并不意味着“过去影响未来”，也不要求系统一定是因果的。如果系统是因果系统，那么它的冲激响应满足

$h(t)=0,\qquad t<0$，

于是输出可以写成

$y(t)=\int_{-\infty}^{t}x(\tau)h(t-\tau)d\tau$。

这时，时刻 $t$ 的输出只依赖 $t$ 以及 $t$ 以前的输入，所以才可以赋予它“过去的输入经过系统作用，累积形成当前输出”的物理解释。如果 $h(t)$ 在 $t<0$ 时也不为零，那么该算子是非因果的，数学上当前输出可能使用所谓“未来”的数据。但这并不意味着物理上的未来真的影响了过去，只意味着这个运算需要同时访问目标位置两侧的信息。例如对一幅已经完整存储的图像进行滤波时，一个像素的输出完全可以同时使用它左边和右边的像素，这里根本不存在时间因果关系。

卷积还有另一个非常重要的视角：频域。傅里叶变换将一个复杂信号分解为不同频率的复指数成分 $e^{j\omega t}$。复指数对于线性时不变系统具有特殊性质：它是 LTI 系统的特征函数。也就是说，如果输入是 $e^{j\omega t}$，经过系统后仍然是同一个频率，只是被乘上一个复数 $H(\omega)$：

$e^{j\omega t}\rightarrow H(\omega)e^{j\omega t}$。

这个复数同时描述了该频率上的幅度变化和相位变化。因此，一个任意信号经过 LTI 系统时，可以先把信号分解成不同频率，再分别把每个频率乘上系统在该频率上的响应。由此得到著名的卷积定理：

$x(t)*h(t)\quad\longleftrightarrow\quad X(\omega)H(\omega)$。

也就是说，时域中看起来较复杂的“平移、乘积、积分”在频域中变成了简单的逐频率乘法。这不是一个偶然的计算技巧，而是因为傅里叶基函数恰好能够把“平移不变”的线性算子对角化。

对于离散时间信号，傅里叶变换通常写成

$X(e^{j\omega})=\sum_{n=-\infty}^{\infty}x[n]e^{-j\omega n}$。

这里的 $e^{j\omega}$ 可以看成 $z$ 平面单位圆上的点，因此在离散时间信号处理中经常会出现“单位圆”的几何语言。不过，单位圆只是离散时间傅里叶分析和 Z 变换的一种表示方式，并不是卷积的本质。卷积真正重要的结构仍然是平移和叠加，而傅里叶变换提供了一个能够把这种结构变成乘法的坐标系。

FFT 也不应理解成“未来影响过去”的结果。FFT 只是快速计算离散傅里叶变换 DFT 的算法。DFT 中经常同时出现循环卷积：

$y[n]=\sum_{m=0}^{N-1}x[m]h[(n-m)\bmod N]$。

其中的模 $N$ 运算意味着序列被看成周期性的，因此序列尾部会绕回到序列开头。这种“首尾相接”来自周期边界条件，而不是信息从未来传播到过去。FFT、DFT、循环卷积和因果性是彼此相关但性质不同的概念，不能混为一谈。

卷积神经网络中的“卷积”也来自同一个数学结构，只不过时间轴被换成了空间坐标。对于二维图像或特征图，可以用一个小的核 $K$ 在输入 $X$ 上不断移动，在每一个位置计算局部区域的加权和：

$Y[i,j]=\sum_{m,n}X[i+m,j+n]K[m,n]$。

这里最关键的思想是，同一组参数 $K$ 被重复应用到不同空间位置。换句话说，CNN 假设一个有意义的局部模式无论出现在图像左上角、中央还是右下角，都应该使用同一种检测规则。例如，一个检测竖直边缘的局部模式，并不应该因为它移动到了图像的另一个位置就需要重新学习一套完全不同的参数。

因此，卷积层同时体现了两个重要结构。第一是局部性：每个输出位置只观察输入的一个局部邻域。第二是权重共享：同一个核在所有位置重复使用。由此进一步产生平移等变性：如果输入中的某个模式发生平移，那么卷积得到的特征通常也会相应地发生平移。正是这些性质使卷积特别适合图像、音频以及其他具有空间或时间局部结构的数据。

严格从数学定义来说，现代深度学习框架中所谓的“卷积”通常其实是互相关。真正的离散卷积要求把核进行翻转，例如

$Y[i,j]=\sum_{m,n}X[i-m,j-n]K[m,n]$，

而深度学习中通常直接计算

$Y[i,j]=\sum_{m,n}X[i+m,j+n]K[m,n]$。

但是在 CNN 中，核 $K$ 本身就是训练得到的参数。假设严格卷积需要学习一个核 $K$，那么不翻转核的网络只需要学习它的翻转版本即可。因此对于神经网络的表达能力而言，两者基本没有区别，“convolution”这一名称也就沿用了下来。

从最统一的角度看，卷积可以理解为：用同一个模式在不同位置进行匹配或作用，并把各个位置产生的贡献按照权重组合起来。在线性系统中，它表现为冲激响应的叠加；在信号处理中，它表现为滤波器沿信号滑动；在图像处理中，它表现为局部模板在二维空间中移动；在卷积神经网络中，它表现为同一个可学习的局部特征检测器在整个特征图上共享；而在傅里叶域中，同一个结构又表现为简单的逐频率乘法。

因此，“卷积”真正统一这些领域的不是“过去影响未来”这一种特定的物理解释，而是更一般的数学结构：平移一个固定的响应或模板，对局部重叠部分进行加权，然后把所有贡献叠加起来。


【English】

Convolution is a mathematical operation that describes how the same local pattern or response acts across different positions in time or space. For two functions $x(t)$ and $h(t)$, convolution is defined as

$y(t)=(x*h)(t)=\int_{-\infty}^{\infty}x(\tau)h(t-\tau)d\tau$.

The essential idea behind this formula is not the integral itself, but the combination of shifting, weighting, and superposition. For a fixed output position $t$, the term $h(t-\tau)$ represents shifted versions of the same function $h$. The value $x(\tau)$ determines how strongly each shifted copy contributes, and the integral adds all of these contributions together. Thus, convolution asks a general question: if the same response pattern can occur at every possible position, what is the total result obtained by combining all of those shifted responses?

In a linear time-invariant, or LTI, system, this mathematical structure has a particularly natural interpretation. Any signal can be represented as a weighted superposition of shifted impulses:

$x(t)=\int_{-\infty}^{\infty}x(\tau)\delta(t-\tau)d\tau$.

Suppose the system produces the response $h(t)$ when the input is the unit impulse $\delta(t)$. Because the system is time invariant, the shifted impulse $\delta(t-\tau)$ must produce the shifted response $h(t-\tau)$. Because the system is linear, if the input is a weighted sum of many impulses, the output must be the same weighted sum of their responses. Therefore,

$y(t)=\int_{-\infty}^{\infty}x(\tau)h(t-\tau)d\tau$,

which is exactly convolution. In this sense, convolution is not an arbitrary mathematical definition. It follows naturally from the combination of linearity and translation invariance.

Causality is a separate concept. Convolution itself does not mean “the past influences the future,” nor does convolution require a system to be causal. If an LTI system is causal, then its impulse response satisfies

$h(t)=0,\qquad t<0$,

and the convolution becomes

$y(t)=\int_{-\infty}^{t}x(\tau)h(t-\tau)d\tau$.

Only in this special case does the output at time $t$ depend exclusively on present and past inputs. Then it is physically meaningful to say that previous inputs produce responses that accumulate to form the present output.

If $h(t)$ is also nonzero for $t<0$, the operator is noncausal, and mathematically the output at a given time may depend on values that would be called “future” inputs. This does not mean that information physically travels backward in time. It only means that the mathematical operation requires data on both sides of the point being evaluated. For example, when filtering an image that is already stored in memory, the value of one output pixel may depend on pixels both to its left and to its right. No temporal causality is involved at all.

Convolution also has a fundamental interpretation in the frequency domain. Fourier analysis decomposes a complicated signal into complex exponential components of the form $e^{j\omega t}$. Complex exponentials have a special relationship with LTI systems: they are eigenfunctions of such systems. If the input is $e^{j\omega t}$, then the output has the same frequency and differs only by multiplication by a complex number $H(\omega)$:

$e^{j\omega t}\rightarrow H(\omega)e^{j\omega t}$.

The complex factor $H(\omega)$ describes both the amplitude change and the phase shift at that frequency. Therefore, instead of thinking of an arbitrary signal as one complicated waveform passing through a system, we may decompose it into frequencies and let the system independently multiply each frequency component by the corresponding value of $H(\omega)$. This leads to the convolution theorem:

$x(t)*h(t)\quad\longleftrightarrow\quad X(\omega)H(\omega)$.

Thus, the apparently complicated operation of shifting, multiplying, and integrating in the time domain becomes simple pointwise multiplication in the frequency domain. This is not merely a computational trick. It happens because Fourier basis functions diagonalize linear translation-invariant operators.

For discrete-time signals, the Fourier transform is commonly written as

$X(e^{j\omega})=\sum_{n=-\infty}^{\infty}x[n]e^{-j\omega n}$.

The quantity $e^{j\omega}$ lies on the unit circle of the complex $z$-plane, which is why the language of the “unit circle” frequently appears in discrete-time signal processing. The unit circle, however, is a geometric representation associated with the DTFT and the Z-transform; it is not the fundamental meaning of convolution itself. The essential structure of convolution remains translation and superposition, while Fourier analysis provides a coordinate system in which this operation becomes multiplication.

The FFT should likewise not be interpreted in terms of “future information influencing the past.” The Fast Fourier Transform is simply an efficient family of algorithms for computing the Discrete Fourier Transform, or DFT. One concept associated with the DFT is circular convolution:

$y[n]=\sum_{m=0}^{N-1}x[m]h[(n-m)\bmod N]$.

Because the indices are taken modulo $N$, a finite sequence is treated as periodic: after the final sample, the indexing wraps around to the beginning. This apparent connection between the “end” and the “beginning” is a consequence of periodic boundary conditions, not backward causation. FFT, DFT, circular convolution, and causality are related concepts in signal processing, but they describe different mathematical ideas.

The word “convolution” in Convolutional Neural Networks comes from the same underlying structure, with spatial coordinates replacing the time axis. For a two-dimensional image or feature map, a small kernel $K$ is shifted across an input $X$, and a local weighted sum is computed at each position:

$Y[i,j]=\sum_{m,n}X[i+m,j+n]K[m,n]$.

The crucial idea is that the same set of parameters $K$ is applied repeatedly at different spatial locations. A useful local pattern should therefore be detectable by the same rule regardless of whether it appears near the upper-left corner, the center, or the lower-right corner of an image. For example, a detector for a vertical edge should not require an entirely different set of parameters merely because that edge appears at a different location.

A convolutional layer therefore embodies two important structural assumptions. The first is locality: each output depends only on a small neighborhood of the input. The second is weight sharing: the same kernel is reused at every spatial location. Together, these properties also lead to translation equivariance: when a pattern in the input is shifted, the corresponding detected feature generally shifts in the same way. This is one of the main reasons convolution is so effective for images, audio, and other data with meaningful local structure.

Strictly speaking, what modern deep-learning libraries usually call “convolution” is mathematically cross-correlation. A strict discrete convolution includes a reversal of the kernel, for example

$Y[i,j]=\sum_{m,n}X[i-m,j-n]K[m,n]$,

whereas neural-network implementations typically compute something of the form

$Y[i,j]=\sum_{m,n}X[i+m,j+n]K[m,n]$.

In a CNN, however, the kernel $K$ is learned from data. If strict convolution would require some kernel $K$, a network using cross-correlation can simply learn the reversed version of that kernel. The distinction therefore has essentially no effect on the expressive power of the network, and the historical term “convolution” has remained standard.

From the most unified point of view, convolution means applying the same pattern or response at many translated positions and combining the contributions produced by those positions. In an LTI system, this appears as the superposition of shifted impulse responses. In signal processing, it appears as a filter sliding across a signal. In image processing, it appears as a local template moving through two-dimensional space. In a convolutional neural network, it appears as a learnable local feature detector whose parameters are shared across an entire feature map. In the Fourier domain, the very same structure appears as simple pointwise multiplication.

What unifies all of these uses of convolution is therefore not the specific physical idea that “the past influences the future.” The deeper mathematical principle is that a fixed response or template is translated across different positions, local overlap is weighted, and all of the resulting contributions are combined.


### Case Studies
> 🔗 https://cs231n.github.io/convolutional-networks/

There are several architectures in the field of Convolutional Networks that have a name. The most common are:
- **LeNet**. The first successful applications of Convolutional Networks were developed by Yann LeCun in 1990’s. Of these, the best known is the [LeNet](http://yann.lecun.com/exdb/publis/pdf/lecun-98.pdf) architecture that was used to read zip codes, digits, etc.
- **AlexNet**. The first work that popularized Convolutional Networks in Computer Vision was the [AlexNet](http://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks), developed by Alex Krizhevsky, Ilya Sutskever and Geoff Hinton. The AlexNet was submitted to the [ImageNet ILSVRC challenge](http://www.image-net.org/challenges/LSVRC/2014/) in 2012 and significantly outperformed the second runner-up (top 5 error of 16% compared to runner-up with 26% error). The Network had a very similar architecture to LeNet, but was deeper, bigger, and featured Convolutional Layers stacked on top of each other (previously it was common to only have a single CONV layer always immediately followed by a POOL layer).
	- ↗ [AlexNet](CNN%20Architecture%20Design/AlexNet.md)
- **ZF Net**. The ILSVRC 2013 winner was a Convolutional Network from Matthew Zeiler and Rob Fergus. It became known as the [ZFNet](http://arxiv.org/abs/1311.2901) (short for Zeiler & Fergus Net). It was an improvement on AlexNet by tweaking the architecture hyperparameters, in particular by expanding the size of the middle convolutional layers and making the stride and filter size on the first layer smaller.
- **GoogLeNet**. The ILSVRC 2014 winner was a Convolutional Network from [Szegedy et al.](http://arxiv.org/abs/1409.4842) from Google. Its main contribution was the development of an _Inception Module_ that dramatically reduced the number of parameters in the network (4M, compared to AlexNet with 60M). Additionally, this paper uses Average Pooling instead of Fully Connected layers at the top of the ConvNet, eliminating a large amount of parameters that do not seem to matter much. There are also several followup versions to the GoogLeNet, most recently [Inception-v4](http://arxiv.org/abs/1602.07261).
- **VGGNet**. The runner-up in ILSVRC 2014 was the network from Karen Simonyan and Andrew Zisserman that became known as the [VGGNet](http://www.robots.ox.ac.uk/~vgg/research/very_deep/). Its main contribution was in showing that the depth of the network is a critical component for good performance. Their final best network contains 16 CONV/FC layers and, appealingly, features an extremely homogeneous architecture that only performs 3x3 convolutions and 2x2 pooling from the beginning to the end. Their [pretrained model](http://www.robots.ox.ac.uk/~vgg/research/very_deep/) is available for plug and play use in Caffe. A downside of the VGGNet is that it is more expensive to evaluate and uses a lot more memory and parameters (140M). Most of these parameters are in the first fully connected layer, and it was since found that these FC layers can be removed with no performance downgrade, significantly reducing the number of necessary parameters.
	- ↗ [VGGNet](CNN%20Architecture%20Design/VGGNet.md)
- **ResNet**. [Residual Network](http://arxiv.org/abs/1512.03385) developed by Kaiming He et al. was the winner of ILSVRC 2015. It features special _skip connections_ and a heavy use of [batch normalization](http://arxiv.org/abs/1502.03167). The architecture is also missing fully connected layers at the end of the network. The reader is also referred to Kaiming’s presentation ([video](https://www.youtube.com/watch?v=1PGLj-uKT1w), [slides](http://research.microsoft.com/en-us/um/people/kahe/ilsvrc15/ilsvrc2015_deep_residual_learning_kaiminghe.pdf)), and some [recent experiments](https://github.com/gcr/torch-residual-networks) that reproduce these networks in Torch. ResNets are currently by far state of the art Convolutional Neural Network models and are the default choice for using ConvNets in practice (as of May 10, 2016). In particular, also see more recent developments that tweak the original architecture from [Kaiming He et al. Identity Mappings in Deep Residual Networks](https://arxiv.org/abs/1603.05027) (published March 2016).
	- ↗ [ResNet (Residual Networks)](CNN%20Architecture%20Design/ResNet%20(Residual%20Networks).md)



## Architecture
> 🔗 https://en.wikipedia.org/wiki/Convolutional_neural_network#Architecture

A convolutional neural network consists of an input layer, [hidden layers](https://en.wikipedia.org/wiki/Artificial_neural_network#Organization "Artificial neural network") and an output layer. In a convolutional neural network, the hidden layers include one or more layers that perform convolutions. Typically this includes a layer that performs a [dot product](https://en.wikipedia.org/wiki/Dot_product "Dot product") of the convolution kernel with the layer's input matrix. This product is usually the [Frobenius inner product](https://en.wikipedia.org/wiki/Frobenius_inner_product "Frobenius inner product"), and its activation function is commonly [ReLU](https://en.wikipedia.org/wiki/Rectifier_\(neural_networks\) "Rectifier (neural networks)"). As the convolution kernel slides along the input matrix for the layer, the convolution operation generates a feature map, which in turn contributes to the input of the next layer. This is followed by other layers such as [pooling layers](https://en.wikipedia.org/wiki/Pooling_layer "Pooling layer"), fully connected layers, and normalization layers. Here it should be noted how close a convolutional neural network is to a [matched filter](https://en.wikipedia.org/wiki/Matched_filter "Matched filter")

![](../../../../../../../../Assets/Pics/Pasted%20image%2020261004195511.png)


### Architecture Components
Recognize objects in images:
- **Translation invariance:** similar output no matter where the object is
- **Locality**:pixels are more related to near neighbors
weight sharing

#### Convolution Layer

#### Pooling Layer


### Architecture Design
↗ [AlexNet](CNN%20Architecture%20Design/AlexNet.md)
↗ [VGGNet](CNN%20Architecture%20Design/VGGNet.md)
↗ [GoogLeNet](CNN%20Architecture%20Design/GoogLeNet.md)
↗ [ResNet (Residual Networks)](CNN%20Architecture%20Design/ResNet%20(Residual%20Networks).md)
#### Sequence CNN
> [!Quote] Sequence modeling
> ↗ [Statistical (Data-Driven) Learning & Machine Learning (ML)](../../../../Statistical%20(Data-Driven)%20Learning%20&%20Machine%20Learning%20(ML)/Statistical%20(Data-Driven)%20Learning%20&%20Machine%20Learning%20(ML).md)
> 
> Sequence modeling:
> ![](../../../../../../../../Assets/Pics/Screenshot%202026-09-10%20at%2000.27.59.png)
> 
> The model only sees present and previous state: 
> ![](../../../../../../../../Assets/Pics/Screenshot%202026-10-06%20at%2022.30.59.png)
> 
> What serves as memor:
> ![](../../../../../../../../Assets/Pics/Screenshot%202026-10-06%20at%2022.20.54.png)
>
> Maximum path lengths, per-layer complexity and minimum number of sequential operations for different layer types. $n$ is the sequence length, $d$ is the representation dimension, $k$ is the kernel size of convolutions, and $r$ is the size of the neighborhood in restricted self-attention.
> 
> | Layer Type | Complexity per Layer | Sequential Operations | Maximum Path Length |
> |---|---:|---:|---:|
> | Self-Attention | $O(n^2 \cdot d)$ | $O(1)$ | $O(1)$ |
> | Recurrent | $O(n \cdot d^2)$ | $O(n)$ | $O(n)$ |
> | Convolutional | $O(k \cdot n \cdot d^2)$ | $O(1)$ | $O(\log_k(n))$ |
> | Self-Attention (restricted) | $O(r \cdot n \cdot d)$ | $O(1)$ | $O(n/r)$ |



## Ref
