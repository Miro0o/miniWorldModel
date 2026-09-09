# Activation Functions (Transfer Functions)

[TOC]



## Res
### Related Topics


### Other Resources



## Intro
> 🤖 GPT5.6-Sol

An **activation function** transforms a neuron’s preactivation and is usually responsible for a network’s nonlinearity. An **output link/normalizer** instead maps logits to the domain required by a prediction distribution, while a **gated unit** combines two learned projections. This distinction matters: softmax is normally an output normalization; GLU/SwiGLU describe a two-branch feed-forward unit; and ReLU6 or hard-swish are hardware-oriented approximations rather than independent modeling paradigms.

The catalog below includes canonical activation families and historically influential named variants. It does not include every small algebraic mutation or paper-specific learned function. Dates refer to the cited formulation or its influential neural-network use; historical functions such as logistic sigmoid and hyperbolic tangent predate neural networks.


### Taxonomy and summary

```text
Activation functions and output transformations
│
├── 1. Linear, threshold, and radial-basis activations
│   ├── Identity and binary threshold
│   ├── Sign/bipolar threshold
│   └── Gaussian radial-basis functions
│
├── 2. Bounded sigmoid-family activations
│   ├── Logistic sigmoid and tanh
│   ├── Softsign
│   └── Hard/piecewise-linear approximations
│
├── 3. Rectifier-family activations
│   ├── ReLU and leaky/learnable variants
│   ├── Clipped rectifiers
│   └── Exponential and self-normalizing rectifiers
│
├── 4. Smooth non-monotonic and self-gated activations
│   ├── GELU
│   ├── SiLU/Swish
│   ├── Mish
│   └── Hardware-friendly approximations
│
├── 5. Gated Transformer feed-forward units
│   ├── GLU
│   ├── ReGLU and GEGLU
│   └── SwiGLU
│
├── 6. Learnable and dynamically conditioned activations
│   ├── Maxout and learned piecewise-linear functions
│   ├── Learnable exponential/rectified functions
│   └── Input-conditioned dynamic activations
│
├── 7. Output normalizers and discrete relaxations
│   ├── Softmax and log-softmax
│   ├── Sparsemax and entmax
│   └── Gumbel–Softmax / Concrete relaxation
│
└── 8. Periodic and implicit-representation activations
    ├── Sine/SIREN
    ├── Snake periodic activation
    └── Gabor/WIRE wavelet activation
```

| Major category                                    | Explicit subcategories                                                      | Main purpose                                                   | Representative canonical functions                          | Important aliases, instances, or composites                                                    | Key milestones                                   |
| ------------------------------------------------- | --------------------------------------------------------------------------- | -------------------------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------ |
| **1. Linear, threshold, and radial basis**         | Identity; binary/sign threshold; Gaussian RBF                               | Preserve linear outputs, make hard decisions, or localize response | Identity, Heaviside step, sign, Gaussian RBF                 | Threshold functions have zero derivative almost everywhere; RBF is often a hidden-unit family    | McCulloch–Pitts neurons; RBF networks             |
| **2. Bounded sigmoid family**                      | Logistic; tanh; softsign; hard approximations                               | Smoothly squash scalar states into bounded ranges              | Sigmoid, tanh, softsign, hard sigmoid, hard tanh             | Logistic/tanh saturate; sigmoid is also a Bernoulli output link                                  | Backpropagation; gated recurrent networks         |
| **3. Rectifier family**                            | ReLU; leaky/random/parametric; clipped; exponential/self-normalizing        | Provide sparse, inexpensive, mostly nonsaturating hidden units | ReLU, Leaky ReLU, PReLU, RReLU, ReLU6, ELU, CELU, SELU      | SELU’s self-normalization depends on architecture, initialization, and AlphaDropout assumptions   | Deep rectifier networks; self-normalization       |
| **4. Smooth non-monotonic and self-gated**         | Gaussian gating; sigmoid gating; softplus–tanh gating; hard approximations  | Improve smooth gradient flow in deep CNNs and Transformers     | GELU, SiLU/Swish, Mish, hard-swish                           | SiLU equals Swish with $\beta=1$; exact and approximate GELU formulas coexist                     | BERT/GPT-style Transformers; EfficientNet/MobileNet |
| **5. Gated Transformer feed-forward**              | Sigmoid, ReLU, GELU, and Swish gates                                        | Multiply content and gate projections in an FFN                | GLU, ReGLU, GEGLU, SwiGLU                                   | These are two-projection units rather than scalar substitutions; parameter counts must be matched | Gated CNNs; modern LLM feed-forward blocks        |
| **6. Learnable and dynamic**                       | Max-affine; learned piecewise linear; parametric exponential; conditioned   | Learn the activation shape or condition it on the input        | Maxout, APL, SReLU, PELU, Dynamic ReLU, ACON/Meta-ACON       | Extra parameters/conditioning can improve flexibility but add cost and complicate comparisons     | Maxout; mobile dynamic networks                   |
| **7. Output normalizers and discrete relaxations** | Dense probability maps; sparse probability maps; differentiable sampling   | Map logits to probability simplices or relaxed discrete samples | Softmax, log-softmax, sparsemax, entmax, Gumbel–Softmax      | These generally belong at outputs/attention, not as ordinary elementwise hidden activations        | Multiclass likelihood; sparse attention; reparameterization |
| **8. Periodic and implicit representations**       | Sinusoidal; periodic monotonic trend; wavelet/Gabor                          | Represent high-frequency coordinates and continuous signals   | Sine/SIREN, Snake, complex Gabor/WIRE                        | Initialization and frequency scales are part of the method, not incidental details                | Neural fields; coordinate networks                |


### Detailed catalog
Notation: $x$ denotes a scalar preactivation, $\sigma(x)=(1+e^{-x})^{-1}$, $\Phi$ the standard normal CDF, $\operatorname{softplus}(x)=\log(1+e^x)$, $z\in\mathbb R^K$ a logit vector, and $\odot$ elementwise multiplication. Ranges and properties refer to the scalar function unless the entry is vector-valued.

| Category                              | Subcategory              | Activation or transformation               |      Year | Definition (schematic)                                                                                    | What it contributes / important caveat                                                                                            | Original or milestone literature                                                                                          |
| ------------------------------------- | ------------------------ | ------------------------------------------ | --------: | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Linear, threshold, and radial basis   | Hard threshold           | **Heaviside / binary step**                |      1943 | $f(x)=\mathbf 1[x\ge0]$                                                                                   | Models a hard firing threshold; zero derivative almost everywhere prevents ordinary backpropagation.                              | [McCulloch & Pitts (1943)](https://doi.org/10.1007/BF02478259)                                                            |
|                                       | Hard threshold           | **Sign / bipolar step**                    |      1982 | $f(x)=\operatorname{sign}(x)\in\{-1,+1\}$                                                                 | Bipolar hard decision used in associative and binary networks; gradient training needs a surrogate or discrete rule.              | [Hopfield (1982)](https://doi.org/10.1073/pnas.79.8.2554)                                                                 |
|                                       | Linear                   | **Identity / linear activation**           |     1950s | $f(x)=x$                                                                                                  | Preserves an unbounded real value; stacked linear layers remain one linear map, so hidden networks need nonlinearity.             | [Rosenblatt (1958)](https://doi.org/10.1037/h0042519)                                                                     |
|                                       | Radial basis             | **Gaussian RBF**                           |      1988 | $f(x;c,\sigma)=\exp[-\lVert x-c\rVert^2/(2\sigma^2)]$                                                     | Localized response around a center; usually belongs to an RBF-network layer rather than a generic pointwise MLP.                  | [Broomhead & Lowe (1988)](https://apps.dtic.mil/sti/citations/ADA196234)                                                  |
| Bounded sigmoid family                | Logistic                 | **Logistic sigmoid**                       |     1980s | $f(x)=\sigma(x)$; $f'(x)=\sigma(x)[1-\sigma(x)]$                                                          | Smooth map to $(0,1)$ used for gates and Bernoulli outputs; saturates and is not zero-centered.                                   | [Rumelhart et al. (1986)](https://doi.org/10.1038/323533a0)                                                               |
|                                       | Bipolar sigmoid          | **Hyperbolic tangent (tanh)**              |     1980s | $f(x)=\tanh x$; $f'(x)=1-\tanh^2x$                                                                        | Zero-centered map to $(-1,1)$; still saturates for large-magnitude inputs.                                                        | [LeCun et al. (1998)](http://yann.lecun.com/exdb/publis/pdf/lecun-98b.pdf)                                                |
|                                       | Rational sigmoid         | **Softsign**                               |      2010 | $f(x)=x/(1+\lvert x\rvert)$                                                                               | Bounded and smooth away from the absolute-value kink representation; polynomial rather than exponential tails.                    | [Glorot & Bengio (2010)](https://proceedings.mlr.press/v9/glorot10a.html)                                                 |
|                                       | Piecewise approximation  | **Hard sigmoid**                           |      2015 | $f(x)=\operatorname{clip}(\alpha x+\beta,0,1)$                                                            | Cheap piecewise-linear sigmoid approximation used in quantized/mobile and recurrent networks.                                     | [Courbariaux et al. (2015)](https://arxiv.org/abs/1511.00363)                                                             |
|                                       | Piecewise approximation  | **Hard tanh**                              |      2015 | $f(x)=\operatorname{clip}(x,-1,1)$                                                                        | Cheap saturated bipolar activation; commonly used as a straight-through surrogate in binary networks.                             | [Courbariaux et al. (2015)](https://arxiv.org/abs/1511.00363)                                                             |
| Rectifier family                      | Smooth rectifier         | **Softplus**                               |      2001 | $f(x)=\log(1+e^x)$                                                                                        | Smooth approximation to ReLU with positive output; naive evaluation needs numerical stabilization.                                | [Dugas et al. (2001)](https://proceedings.neurips.cc/paper/2000/hash/44968aece94f667e4095002d140b5896-Abstract.html)      |
|                                       | Rectifier                | **Rectified linear unit (ReLU)**           |      2010 | $f(x)=\max(0,x)$                                                                                          | Cheap, sparse, and nonsaturating for $x>0$; inactive units can suffer the “dying ReLU” problem.                                   | [Nair & Hinton (2010)](https://www.cs.toronto.edu/~fritz/absps/reluICML.pdf)                                              |
|                                       | Leaky rectifier          | **Leaky ReLU (LReLU)**                     |      2013 | $f(x)=\max(x,\alpha x)$, fixed small $\alpha>0$                                                           | Preserves a negative-side gradient to reduce dead units.                                                                          | [Maas et al. (2013)](https://ai.stanford.edu/~amaas/papers/relu_hybrid_icml2013_final.pdf)                                |
|                                       | Randomized rectifier     | **Randomized Leaky ReLU (RReLU)**          |      2015 | $f(x)=x$ for $x\ge0$, else $a x$ with $a\sim U(l,u)$ during training                                      | Treats the negative slope as noise/regularization; inference normally uses its expectation.                                       | [Xu et al. (2015)](https://arxiv.org/abs/1505.00853)                                                                      |
|                                       | Learnable rectifier      | **Parametric ReLU (PReLU)**                |      2015 | $f(x)=\max(x,a x)$ with learned $a$                                                                       | Learns the negative slope per channel or layer; adds little parameter cost.                                                       | [He et al. (2015)](https://arxiv.org/abs/1502.01852)                                                                      |
|                                       | Exponential rectifier    | **Exponential linear unit (ELU)**          |      2015 | $f(x)=x$ if $x>0$; else $\alpha(e^x-1)$                                                                   | Smooth negative saturation can shift mean activations toward zero; exponential evaluation costs more than ReLU.                   | [Clevert et al. (2015)](https://arxiv.org/abs/1511.07289)                                                                 |
|                                       | Clipped rectifier        | **ReLU6**                                  |      2017 | $f(x)=\min(\max(0,x),6)$                                                                                  | Bounded positive activation suited to low-precision mobile inference; clipping also caps gradients.                               | [Howard et al., MobileNet (2017)](https://arxiv.org/abs/1704.04861)                                                       |
|                                       | Self-normalizing         | **Scaled ELU (SELU)**                      |      2017 | $f(x)=\lambda x$ if $x>0$; else $\lambda\alpha(e^x-1)$                                                    | Fixed constants promote mean/variance convergence under specific initialization, width, independence, and dropout assumptions.    | [Klambauer et al. (2017)](https://arxiv.org/abs/1706.02515)                                                               |
|                                       | Smooth exponential       | **Continuously differentiable ELU (CELU)** |      2017 | $f(x)=\max(0,x)+\min(0,\alpha[e^{x/\alpha}-1])$                                                           | ELU parameterization continuously differentiable with respect to $x$ for every $\alpha>0$.                                        | [Barron (2017)](https://arxiv.org/abs/1704.07483)                                                                         |
| Smooth non-monotonic and self-gated   | Gaussian gate            | **Gaussian error linear unit (GELU)**      |      2016 | $f(x)=x\Phi(x)\approx\frac{x}{2}[1+\tanh(\sqrt{2/\pi}(x+0.044715x^3))]$                                   | Smooth stochastic-gating interpretation; standard in many Transformer encoders and decoders.                                      | [Hendrycks & Gimpel (2016)](https://arxiv.org/abs/1606.08415)                                                             |
|                                       | Sigmoid gate             | **SiLU / Swish**                           | 2016/2017 | $f(x)=x\sigma(x)$ (SiLU/Swish-1); generalized Swish uses $x\sigma(\beta x)$                               | Smooth, non-monotonic self-gating. SiLU and Swish with $\beta=1$ are mathematically identical.                                    | [Elfwing et al. (2017)](https://arxiv.org/abs/1702.03118); [Ramachandran et al. (2017)](https://arxiv.org/abs/1710.05941) |
|                                       | Softplus–tanh gate       | **Mish**                                   |      2019 | $f(x)=x\tanh(\operatorname{softplus}(x))$                                                                 | Smooth non-monotonic self-gated function; empirical benefit is architecture- and tuning-dependent.                                | [Misra (2019)](https://arxiv.org/abs/1908.08681)                                                                          |
|                                       | Piecewise self-gate      | **Hard-swish (H-swish)**                   |      2019 | $f(x)=x\,\operatorname{ReLU6}(x+3)/6$                                                                     | Mobile-friendly approximation to Swish used by MobileNetV3.                                                                       | [Howard et al. (2019)](https://arxiv.org/abs/1905.02244)                                                                  |
| Gated Transformer feed-forward        | Sigmoid gate             | **Gated linear unit (GLU)**                |      2016 | $\operatorname{GLU}(x)=(xW+b)\odot\sigma(xV+c)$                                                           | Multiplies a content projection by a learned sigmoid gate; a unit/layer, not one scalar activation.                               | [Dauphin et al. (2016)](https://arxiv.org/abs/1612.08083)                                                                 |
|                                       | ReLU gate                | **ReGLU**                                  |      2020 | $\operatorname{ReGLU}(x)=\operatorname{ReLU}(xW)\odot(xV)$                                                | Replaces GLU’s sigmoid gate with ReLU in Transformer FFNs.                                                                        | [Shazeer (2020)](https://arxiv.org/abs/2002.05202)                                                                        |
|                                       | GELU gate                | **GEGLU**                                  |      2020 | $\operatorname{GEGLU}(x)=\operatorname{GELU}(xW)\odot(xV)$                                                | GELU-gated FFN variant; width should be adjusted for fair parameter/FLOP comparison.                                              | [Shazeer (2020)](https://arxiv.org/abs/2002.05202)                                                                        |
|                                       | Swish gate               | **SwiGLU**                                 |      2020 | $\operatorname{SwiGLU}(x)=\operatorname{Swish}_\beta(xW)\odot(xV)$                                        | Swish-gated FFN widely used in modern LLMs; typically paired with a reduced intermediate width.                                   | [Shazeer (2020)](https://arxiv.org/abs/2002.05202)                                                                        |
|                                       | Power gate               | **Squared ReLU**                           |      2021 | $f(x)=\operatorname{ReLU}(x)^2$                                                                           | Increases positive-side curvature and was identified in Transformer architecture search; can amplify outliers.                    | [So et al., Primer (2021)](https://arxiv.org/abs/2109.08668)                                                              |
| Learnable and dynamic                 | Max-affine               | **Maxout**                                 |      2013 | $f(x)=\max_{j\le k}(x^TW_j+b_j)$                                                                          | Learns a convex piecewise-linear activation; increases parameters/compute by using multiple affine pieces.                        | [Goodfellow et al. (2013)](https://arxiv.org/abs/1302.4389)                                                               |
|                                       | Learned piecewise linear | **Adaptive piecewise linear (APL)**        |      2015 | $f(x)=\operatorname{ReLU}(x)+\sum_{s=1}^S a_s\max(0,-x+b_s)$                                              | Learns multiple hinges to approximate flexible scalar shapes.                                                                     | [Agostinelli et al. (2015)](https://arxiv.org/abs/1412.6830)                                                              |
|                                       | Learned rectifier        | **S-shaped ReLU (SReLU)**                  |      2016 | Learned three-piece linear function with left/right thresholds and slopes                                 | Learns both saturated-side thresholds and slopes; more parameters than PReLU.                                                     | [Jin et al. (2016)](https://arxiv.org/abs/1512.07030)                                                                     |
|                                       | Learned exponential      | **Parametric ELU (PELU)**                  |      2016 | $f(x)=(a/b)x$ if $x\ge0$; else $a(e^{x/b}-1)$, learned $a,b>0$                                            | Learns positive slope and negative saturation scale while retaining continuity.                                                   | [Trottier et al. (2016)](https://arxiv.org/abs/1605.09332)                                                                |
|                                       | Input-conditioned        | **Dynamic ReLU (DY-ReLU)**                 |      2020 | $f(x)=\max_k(a_k(\mathbf x)x+b_k(\mathbf x))$, with coefficients produced from the input                  | Context-conditioned piecewise-linear activation; adds a hypernetwork/attention path.                                              | [Chen et al. (2020)](https://arxiv.org/abs/2003.10027)                                                                    |
|                                       | Smooth max/min switch    | **ACON / Meta-ACON**                       |      2021 | $f(x)=(p_1-p_2)x\sigma[\beta(p_1-p_2)x]+p_2x$; Meta-ACON predicts $\beta$                                 | Learns whether/how strongly to activate between two linear branches.                                                              | [Ma et al. (2021)](https://arxiv.org/abs/2009.04759)                                                                      |
| Output normalizers and relaxations    | Dense simplex map        | **Softmax**                                | 1959/1990 | $p_i=e^{z_i/\tau}/\sum_j e^{z_j/\tau}$                                                                    | Maps logits to a dense probability simplex; invariant to a shared logit shift and prone to overflow if unstabilized.              | [Luce (1959)](https://doi.org/10.1037/10068-000); [Bridle (1990)](https://doi.org/10.1007/978-3-642-76153-9_28)           |
|                                       | Log-probability map      | **Log-softmax**                            |     1990s | $\log p_i=z_i-\operatorname{logsumexp}_j(z_j)$                                                            | Numerically stable log probabilities, normally fused with NLL/cross-entropy.                                                      | [Bridle (1990)](https://doi.org/10.1007/978-3-642-76153-9_28)                                                             |
|                                       | Sparse simplex map       | **Sparsemax**                              |      2016 | $\operatorname{sparsemax}(z)=\arg\min_{p\in\Delta^{K-1}}\lVert p-z\rVert^2$                               | Euclidean simplex projection that yields exact zeros; piecewise linear and not everywhere differentiable.                         | [Martins & Astudillo (2016)](https://arxiv.org/abs/1602.02068)                                                            |
|                                       | Sparse simplex family    | **$\alpha$-entmax**                        |      2019 | $\operatorname{entmax}_\alpha(z)=\arg\max_{p\in\Delta}[p^Tz+H_\alpha(p)]$                                 | Tsallis-entropy family interpolating softmax ($\alpha=1$) and sparsemax ($\alpha=2$).                                             | [Peters et al. (2019)](https://arxiv.org/abs/1905.05702)                                                                  |
|                                       | Discrete relaxation      | **Gumbel–Softmax / Concrete**              |      2017 | $y_i=\frac{\exp[(\log\pi_i+g_i)/\tau]}{\sum_j\exp[(\log\pi_j+g_j)/\tau]}$, $g_i\sim\operatorname{Gumbel}$ | Differentiable stochastic relaxation for categorical samples; biased at finite temperature, especially with straight-through use. | [Jang et al. (2017)](https://arxiv.org/abs/1611.01144); [Maddison et al. (2017)](https://arxiv.org/abs/1611.00712)        |
| Periodic and implicit representations | Sinusoidal               | **Sine / SIREN activation**                |      2020 | $f(x)=\sin(\omega_0x)$                                                                                    | Represents high-frequency signals and derivatives; SIREN’s frequency-aware initialization is essential.                           | [Sitzmann et al. (2020)](https://arxiv.org/abs/2006.09661)                                                                |
|                                       | Periodic trend           | **Snake**                                  |      2020 | $f(x)=x+\sin^2(ax)/a$, learned or fixed $a$                                                               | Adds a periodic component while retaining a linear trend; designed for extrapolating periodic signals.                            | [Ziyin et al. (2020)](https://arxiv.org/abs/2006.08195)                                                                   |
|                                       | Complex Gabor wavelet    | **WIRE activation**                        |      2023 | $f(x)=e^{i\omega_0x}e^{-(s_0x)^2}$                                                                        | Complex Gabor wavelet improves locality and frequency representation in neural fields; specialized, not a general default.        | [Saragadam et al. (2023)](https://arxiv.org/abs/2301.05187)                                                               |


### Important equivalences and non-equivalences
- **SiLU and Swish:** SiLU is exactly $x\sigma(x)$; Swish-1 is the same function. The broader Swish family permits fixed or learned $\beta$ in $x\sigma(\beta x)$.
- **GELU approximations:** exact $x\Phi(x)$, tanh approximation, and sigmoid approximation are close but not identical numerically.
- **ReLU variants:** Leaky ReLU has a fixed negative slope, PReLU learns it, and RReLU samples it during training.
- **ELU variants:** CELU changes ELU’s parameterization to ensure continuous differentiability; SELU fixes scale parameters to obtain a self-normalizing regime under restrictive assumptions.
- **GLU family:** GLU, ReGLU, GEGLU, and SwiGLU require two input projections and an elementwise product. Replacing GELU with SwiGLU without adjusting width changes parameter count and compute.
- **Activation versus output link:** sigmoid/softmax may be output links coupled to BCE/cross-entropy; log-softmax, sparsemax, entmax, and Gumbel–Softmax are vector transformations rather than ordinary scalar hidden activations.
- **Activation versus architecture:** LSTM/GRU gates, max pooling, attention softmax, and mixture-of-experts routers use activations but are larger mechanisms, not new scalar activation functions.
- **Hard functions and gradients:** step/sign functions require surrogate gradients, straight-through estimators, or non-gradient training; their mathematical derivative does not become the chosen surrogate.
- **No universally best activation:** initialization, normalization, precision, architecture, and hardware matter. ReLU remains a strong sparse baseline; GELU and SwiGLU are common Transformer choices; sine/Gabor functions serve specialized coordinate networks.



## Ref
[Dubey et al. (2022), *Activation Functions in Deep Learning: A Comprehensive Survey and Benchmark*]: https://arxiv.org/abs/2109.14545
[Apicella et al. (2021), *A Survey on Modern Trainable Activation Functions*]: https://doi.org/10.1016/j.neunet.2021.01.026
[Ramachandran et al. (2017), *Searching for Activation Functions*]: https://arxiv.org/abs/1710.05941
[Shazeer (2020), *GLU Variants Improve Transformer*]: https://arxiv.org/abs/2002.05202



![](../../../../../../../../../../Assets/Pics/Screenshot%202023-05-14%20at%205.13.34%20PM.png)
