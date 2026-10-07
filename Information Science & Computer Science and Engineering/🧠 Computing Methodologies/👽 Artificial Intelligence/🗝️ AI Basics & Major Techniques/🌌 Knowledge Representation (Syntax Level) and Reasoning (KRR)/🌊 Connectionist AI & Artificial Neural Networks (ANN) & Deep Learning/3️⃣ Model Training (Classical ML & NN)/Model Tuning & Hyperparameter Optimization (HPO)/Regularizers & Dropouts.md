# Regularizers & Dropouts

[TOC]



## Res
### Related Topics


### Other Resources



## Intro
> 🤖 GPT 6.0

| Regularization Category                 | What Is Regularized?                       | Representative Methods                                            | Main Goal                                                                     |
| --------------------------------------- | ------------------------------------------ | ----------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| **Parameter / Weight Regularization**   | Model parameters $W$                       | L1, L2, Elastic Net, Weight Decay, AdamW, Max-Norm                | Restrict parameter magnitude or complexity                                    |
| **Stochastic / Network Regularization** | Activations, connections, or network paths | Dropout, DropConnect, SpatialDropout, Stochastic Depth, DropBlock | Prevent excessive co-adaptation and reliance on particular network components |
| **Training-Process Regularization**     | Optimization process                       | Early Stopping, Noise Injection, Gradient Noise                   | Prevent excessive fitting during optimization                                 |
| **Data-Level Regularization**           | Training samples $(X,Y)$                   | Data Augmentation, Mixup, Cutout, CutMix, Random Erasing          | Increase effective data diversity and encode invariances                      |
| **Target / Output Regularization**      | Labels or predicted distributions          | Label Smoothing, Entropy Regularization, Confidence Penalty       | Prevent overly confident or overly sharp predictions                          |
| **Model / Structural Regularization**   | Model architecture or effective capacity   | Pruning, Parameter Sharing, Low-Rank Constraints                  | Restrict effective model complexity                                           |


### Parameter / Weight Regularization

| Method                             |                                           Year / Era | Mathematical Expression                                                                          | Main Idea                                                          | Effect                                                                                        | Advantages                                                                       | Limitations                                                                                  | Representative Uses                                                     |
| ---------------------------------- | ---------------------------------------------------: | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| **L1 Regularization / Lasso**      |                                                 1996 | $L_{\text{total}}=L+\lambda\sum_i \lvert w_i\rvert$                                              | Adds the absolute magnitude of parameters as a penalty to the loss | Encourages sparse weights; some weights can become exactly $0$                                | Performs implicit feature selection; produces sparse models                      | Optimization is non-smooth at $w=0$; may arbitrarily select among highly correlated features | Lasso regression, logistic regression, feature selection, sparse models |
| **L2 Regularization / Ridge**      |                                Classical; Ridge 1970 | $L_{\text{total}}=L+\lambda\sum_i w_i^2$                                                         | Penalizes large squared parameter values                           | Shrinks weights toward $0$ but usually not exactly to $0$                                     | Smooth and easy to optimize; handles correlated features well; widely applicable | Does not normally produce sparse models                                                      | Ridge regression, logistic regression, neural networks                  |
| **Weight Decay**                   |              Classical; widely used in deep learning | $w_{t+1}=(1-\eta\lambda)w_t-\eta\nabla_w L$                                                      | Directly decreases parameter magnitude during optimization         | Discourages excessively large weights                                                         | Simple and computationally inexpensive; standard in deep learning                | Equivalent to L2 regularization only for some optimizers/settings                            | Neural networks, CNNs, Transformers                                     |
| **Elastic Net**                    |                                                 2005 | $L_{\text{total}}=L+\lambda_1\sum_i\lvert w_i\rvert+\lambda_2\sum_iw_i^2$                        | Combines L1 sparsity with L2 shrinkage                             | Can produce sparse models while stabilizing correlated features                               | Combines advantages of L1 and L2; useful with many correlated features           | Introduces additional hyperparameters                                                        | High-dimensional regression, feature selection                          |
| **Max-Norm Constraint**            | Classical; popularized in deep learning c. 2012–2013 | $\lVert w\rVert_2\leq c$; if $\lVert w\rVert_2>c$, use $w\leftarrow c\frac{w}{\lVert w\rVert_2}$ | Explicitly constrains parameter vectors to a maximum norm          | Prevents weights from becoming excessively large                                              | Simple; works well with techniques such as Dropout                               | Requires selecting maximum norm $c$                                                          | Neural networks, models using Dropout                                   |
| **Decoupled Weight Decay / AdamW** |                                                 2017 | $w_{t+1}=w_t-\eta\,\operatorname{AdamGrad}_t-\eta\lambda w_t$                                    | Separates weight decay from the gradient-based optimization step   | Controls parameter magnitude without mixing the penalty into Adam's adaptive gradient scaling | More appropriate than naive L2 regularization with Adam; easy to tune            | Still requires choosing decay strength; not normally applied to every parameter              | Transformers, LLMs, modern deep learning                                |
#### L1 Regularization / Lasso

#### L2 Regularization / Ridge


### Stochastic / Network Regularization

| Method | Year / Era | Mathematical Expression | Main Idea | Effect | Advantages | Limitations | Representative Uses |
|---|---:|---|---|---|---|---|---|
| **Dropout** | 2012 / 2014 | $m_i\sim\operatorname{Bernoulli}(1-p)$; $\tilde{h}_i=\frac{m_i}{1-p}h_i$ | Randomly sets activations to zero during training | Prevents neurons from relying excessively on specific other neurons | Simple; effective against overfitting; approximates training many subnetworks | Can slow convergence; often less important in architectures with large datasets and strong normalization | MLPs, CNNs, Transformers |
| **DropConnect** | 2013 | $M_{ij}\sim\operatorname{Bernoulli}(1-p)$; $\tilde{W}=M\odot W$ | Randomly removes individual weights rather than neuron activations | Introduces stochastic connectivity during training | More fine-grained than Dropout | More computationally awkward; less commonly used | Neural networks |
| **SpatialDropout / Dropout2D** | 2015 era | $m_c\sim\operatorname{Bernoulli}(1-p)$; $\tilde{X}_{c,:,:}=\frac{m_c}{1-p}X_{c,:,:}$ | Drops entire feature maps/channels rather than individual elements | Prevents strong dependence on particular feature maps | Better suited than element-wise Dropout for strongly correlated CNN activations | Can remove substantial information when $p$ is too high | CNNs, image models |
| **Stochastic Depth** | 2016 | $h_{l+1}=h_l+b_lF_l(h_l)$, where $b_l\sim\operatorname{Bernoulli}(1-p_l)$ | Randomly skips residual blocks during training | Effectively trains networks of varying depth | Particularly effective for very deep residual networks; reduces training computation | Primarily useful for residual architectures | ResNets, Vision Transformers |
| **DropBlock** | 2018 | $\tilde{X}=M_{\text{block}}\odot X$ | Drops contiguous regions of feature maps instead of independent activations | Forces CNNs to use spatially distributed evidence | Better suited to convolutional features than ordinary Dropout | Block size and drop rate require tuning | CNNs, image recognition |
#### Dropout


### Training-Process Regularization

| Method | Year / Era | Mathematical Expression | Main Idea | Effect | Advantages | Limitations | Representative Uses |
|---|---:|---|---|---|---|---|---|
| **Early Stopping** | Classical | $t^*=\arg\min_t L_{\text{val}}(t)$ | Stops training when validation performance stops improving | Prevents the model from continuing to fit training-specific noise | Very simple; no modification to model architecture; saves computation | Requires a validation set and stopping criterion; noisy validation metrics can stop training prematurely | Neural networks, gradient boosting, iterative optimization |
| **Noise Injection** | Classical | $\tilde{x}=x+\epsilon$, where $\epsilon\sim\mathcal{N}(0,\sigma^2)$ | Adds random perturbations to inputs, activations, gradients, or parameters during training | Encourages robustness to small perturbations | Flexible; can improve generalization and robustness | Noise magnitude must be tuned; excessive noise harms learning | Neural networks, denoising models, robust learning |
| **Gradient Noise** | Modern deep learning | $\tilde{g}_t=g_t+\epsilon_t$ | Adds noise directly to optimization gradients | Can discourage overly deterministic optimization trajectories and improve exploration | Easy to incorporate into stochastic optimization | Benefits are problem-dependent; adds another noise schedule/hyperparameter | Deep neural-network optimization |


### Data-Level Regularization / Augmentation

| Method | Year / Era | Mathematical Expression | Main Idea | Effect | Advantages | Limitations | Representative Uses |
|---|---:|---|---|---|---|---|---|
| **Data Augmentation** | Classical; central to modern deep learning | $(x',y')=(T(x),y)$ | Applies label-preserving transformations $T$ to training examples | Increases effective training-data diversity | Often extremely effective; incorporates useful invariances | Transformations must preserve semantic labels; domain-specific | Images, audio, text, time series |
| **Mixup** | 2017 | $\tilde{x}=\lambda x_i+(1-\lambda)x_j$; $\tilde{y}=\lambda y_i+(1-\lambda)y_j$; $\lambda\sim\operatorname{Beta}(\alpha,\alpha)$ | Creates synthetic examples by interpolating both inputs and labels | Encourages smoother decision boundaries between examples | Simple; can improve generalization, robustness, and calibration | Mixed examples may be unrealistic for some domains | Image classification, neural networks |
| **Cutout** | 2017 | $\tilde{x}=M\odot x$ | Randomly masks a rectangular region of an input image | Prevents reliance on a small set of highly discriminative pixels | Simple; encourages use of broader image context | Primarily designed for image data; may remove important objects | Image classification, CNNs |
| **CutMix** | 2019 | $\tilde{x}=M\odot x_A+(1-M)\odot x_B$; $\tilde{y}=\lambda y_A+(1-\lambda)y_B$ | Replaces an image region with a patch from another image and mixes the labels accordingly | Encourages localization and reduces reliance on individual regions | Preserves more realistic local image statistics than Mixup | Primarily useful for visual data; mixed labels are approximate | CNNs, Vision Transformers, image classification |
| **Random Erasing** | 2017 | $\tilde{x}=T_{\text{erase}}(x)$ | Randomly selects and replaces a rectangular image region | Simulates occlusion and encourages robust visual representations | Simple and effective for vision tasks | Domain-specific; aggressive erasing can destroy class information | Image classification, person re-identification |


### Target / Output Regularization

| Method | Year / Era | Mathematical Expression | Main Idea | Effect | Advantages | Limitations | Representative Uses |
|---|---:|---|---|---|---|---|---|
| **Label Smoothing** | 1980s origins; popularized in deep learning in 2015 | $\tilde{y}_k=(1-\epsilon)y_k+\frac{\epsilon}{K}$ | Replaces hard one-hot labels with slightly softened target distributions | Discourages extreme confidence in a single class | Simple; often improves generalization and calibration | Can reduce useful confidence information; may interfere with some distillation methods | Multiclass classification, CNNs, Transformers |
| **Entropy Regularization** | Classical / modern | $L_{\text{total}}=L-\lambda H(p)$, where $H(p)=-\sum_kp_k\log p_k$ | Adds an entropy-based objective to control how sharp or diffuse predictions are | Can encourage or discourage confident predictions depending on sign and formulation | Direct control over prediction distributions | Correct formulation depends strongly on the task | Semi-supervised learning, domain adaptation, classification |
| **Confidence Penalty** | 2017 | $L_{\text{total}}=L-\lambda H(p)$ | Penalizes predictions with excessively low entropy | Prevents the model from becoming overly confident | Conceptually simple; related to label smoothing | Hyperparameter-sensitive; not universally beneficial | Neural-network classification |


### Model / Structural Regularization

| Method | Year / Era | Mathematical Expression | Main Idea | Effect | Advantages | Limitations | Representative Uses |
|---|---:|---|---|---|---|---|---|
| **Pruning** | Classical; modern deep-learning revival | $w_i\leftarrow0$ if $\lvert w_i\rvert<\tau$ | Removes parameters or structures considered unimportant | Reduces effective model complexity and can improve generalization | Can also reduce model size and inference cost | Aggressive pruning reduces accuracy; often requires fine-tuning | Neural-network compression, sparse models |
| **Parameter Sharing** | Classical | $w_i=w_j$ for selected parameter groups | Forces different parts of a model to reuse the same parameters | Reduces number of independent degrees of freedom | Strong inductive bias; reduces parameter count | Only appropriate when the assumed shared structure is meaningful | CNNs, RNNs, Transformers |
| **Low-Rank Constraint / Factorization** | Classical / modern | $W\approx UV^\top$, where $\operatorname{rank}(W)\leq r$ | Restricts a large parameter matrix to a lower-dimensional structure | Reduces effective model capacity | Can improve efficiency as well as regularization | Rank $r$ must be selected; may reduce expressive power | Matrix models, neural networks, parameter-efficient models |



## Ref
[🔥 机器学习中使用正则化来防止过拟合是什么原理？ - 俞扬的回答 - 知乎]: https://www.zhihu.com/question/20700829/answer/64824761

过拟合是一种现象。当我们提高在训练数据上的表现时，在测试数据上反而下降，这就被称为过拟合，或过配。

过拟合发生的本质原因，是由于监督学习问题的不适定：在高中数学我们知道，从n个（线性无关）方程可以解n个变量，解n+1个变量就会解不出。在监督学习中，往往数据(对应了方程）远远少于模型空间(对应了变量）。因此过拟合现象的发生，可以分解成以下三点：
1. ﻿﻿﻿有限的训练数据不能完全反映出一个模型的好坏，然而我们却不得不在这有限的数据上挑选模型，因此我们完全有可能挑选到在训练数据上表现很好而在测试数据上表现很差的模型，因为我们完全无法知道模型在测试数据上的表现。
2. ﻿﻿﻿如果模型空问很大，也就是有很多很多模型可以给我们挑选，那么挑到对的模型的机会就会很小。
3. ﻿﻿与此同时，如果我们要在训练数据上表现良好，最为直接的方法就是要在足够大的模型空间中挑选模型，否则如果模型空问很小，就不存在能够拟合数据很好的模型。

由上3点可见，要拟合训练数据，就要足够大的模型空问；用了足够大的模型空问，挑选到测试性能好的模型的概率就会下降。因此，就会出现训练数据拟合越好，测试性能越差的过拟合现象。

过拟合现象有多种解释:
- ﻿经典的是bias-variance decomposition， 但个人认为这种解释更加倾向于直观理解；
- ﻿PAC-learning 泛化界解释，这种解释是最透彻，最fundamental的；
- ﻿Bayes先验解释，这种解释把正则变成先验，在我看来等于没解释。

另外值得一提的是，不少人会用“模型复杂度"替代上面我讲的”模型空间”。这其实是一回事，但"模型复杂度"往往容易给人一个误解，认为是一个模型本身长得复杂。例如5次多项式就要比2次多项式复杂，这是错的。因此我更愿意用"模型空间”，强调"复杂度"是候选模型的"数量”，而不是模型本事的“长相"。

最后回答为什么正则化能够避免过拟合：因为正则化就是控制模型空间的一种办法。

[🔥 机器学习中使用正则化来防止过拟合是什么原理？ - 慧航的回答 - 知乎]: https://www.zhihu.com/question/20700829/answer/586902014


[👍 机器学习中使用正则化来防止过拟合是什么原理？ - 蛤蟆仙人的回答 - 知乎]: https://www.zhihu.com/question/20700829/answer/52064924

最简单的解释就是加了先验。在数据少的时候，先验知识可以防止过拟合。
举2个例子：
1. 抛硬币，推断正面朝上的概率。如果只能抛5次，很可能5次全正面朝上，这样你就得出错误的结论：正面朝上的概率是1--------过拟合！如果你在模型里加正面朝上概率是0.5的先验，结果就不会那么离谱。这其实就是正则。

2. 最小二乘回归问题：**加2范数正则等价于加了高斯分布的先验，加1范数正则相当于加拉普拉斯分布先验**。
