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


### Stochastic / Network Regularization

| Method | Year / Era | Mathematical Expression | Main Idea | Effect | Advantages | Limitations | Representative Uses |
|---|---:|---|---|---|---|---|---|
| **Dropout** | 2012 / 2014 | $m_i\sim\operatorname{Bernoulli}(1-p)$; $\tilde{h}_i=\frac{m_i}{1-p}h_i$ | Randomly sets activations to zero during training | Prevents neurons from relying excessively on specific other neurons | Simple; effective against overfitting; approximates training many subnetworks | Can slow convergence; often less important in architectures with large datasets and strong normalization | MLPs, CNNs, Transformers |
| **DropConnect** | 2013 | $M_{ij}\sim\operatorname{Bernoulli}(1-p)$; $\tilde{W}=M\odot W$ | Randomly removes individual weights rather than neuron activations | Introduces stochastic connectivity during training | More fine-grained than Dropout | More computationally awkward; less commonly used | Neural networks |
| **SpatialDropout / Dropout2D** | 2015 era | $m_c\sim\operatorname{Bernoulli}(1-p)$; $\tilde{X}_{c,:,:}=\frac{m_c}{1-p}X_{c,:,:}$ | Drops entire feature maps/channels rather than individual elements | Prevents strong dependence on particular feature maps | Better suited than element-wise Dropout for strongly correlated CNN activations | Can remove substantial information when $p$ is too high | CNNs, image models |
| **Stochastic Depth** | 2016 | $h_{l+1}=h_l+b_lF_l(h_l)$, where $b_l\sim\operatorname{Bernoulli}(1-p_l)$ | Randomly skips residual blocks during training | Effectively trains networks of varying depth | Particularly effective for very deep residual networks; reduces training computation | Primarily useful for residual architectures | ResNets, Vision Transformers |
| **DropBlock** | 2018 | $\tilde{X}=M_{\text{block}}\odot X$ | Drops contiguous regions of feature maps instead of independent activations | Forces CNNs to use spatially distributed evidence | Better suited to convolutional features than ordinary Dropout | Block size and drop rate require tuning | CNNs, image recognition |


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
