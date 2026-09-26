# Model Validation & Metrics

[TOC]



## Res
### Related Topics


### Other Resources



## Intro



## Bias & Variance Tradeoff
> 🔗 https://en.wikipedia.org/wiki/Bias%E2%80%93variance_tradeoff

In [statistics](https://en.wikipedia.org/wiki/Statistics "Statistics") and [machine learning](https://en.wikipedia.org/wiki/Machine_learning "Machine learning"), the **bias–variance tradeoff** describes the relationship between a model's complexity, the accuracy of its predictions, and how well it can make predictions on previously unseen data that were not used to train the model. In general, as the number of tunable parameters in a model increases, it becomes more flexible, and can better fit a training data set. That is, the model has lower error or lower [bias](https://en.wikipedia.org/wiki/Bias_of_an_estimator "Bias of an estimator"). However, for more flexible models, there will tend to be greater **variance** to the model fit each time we take a set of [samples](https://en.wikipedia.org/wiki/Sample_\(statistics\) "Sample (statistics)") to create a new training data set. It is said that there is greater [variance](https://en.wikipedia.org/wiki/Variance "Variance") in the model's [estimated](https://en.wikipedia.org/wiki/Estimation_theory "Estimation theory") [parameters](https://en.wikipedia.org/wiki/Statistical_parameter "Statistical parameter").

The **bias–variance dilemma** or **bias–variance problem** is the conflict in trying to simultaneously minimize these two sources of [error](https://en.wikipedia.org/wiki/Errors_and_residuals_in_statistics "Errors and residuals in statistics") that prevent [supervised learning](https://en.wikipedia.org/wiki/Supervised_learning "Supervised learning") algorithms from generalizing beyond their [training set](https://en.wikipedia.org/wiki/Training_set "Training set"):
- The [_bias_](https://en.wikipedia.org/wiki/Bias_of_an_estimator "Bias of an estimator") error is an error from erroneous assumptions in the learning [algorithm](https://en.wikipedia.org/wiki/Algorithm "Algorithm"). High bias can cause an algorithm to miss the relevant relations between features and target outputs ([underfitting](https://en.wikipedia.org/wiki/Overfitting#Underfitting "Overfitting")).
- The _[variance](https://en.wikipedia.org/wiki/Variance "Variance")_ is an error from sensitivity to small fluctuations in the training set. High variance may result from an algorithm modeling the random [noise](https://en.wikipedia.org/wiki/Noise_\(signal_processing\) "Noise (signal processing)") in the training data ([overfitting](https://en.wikipedia.org/wiki/Overfitting "Overfitting")).

The **bias–variance decomposition** is a way of analyzing a learning algorithm's [expected](https://en.wikipedia.org/wiki/Expected_value "Expected value") [generalization error](https://en.wikipedia.org/wiki/Generalization_error "Generalization error") with respect to a particular problem as a sum of three terms, the bias, variance, and a quantity called the _irreducible error_, resulting from noise in the problem itself.

![](../../../../../../../../Assets/Pics/Pasted%20image%2020260922161826.png)

---
**Bias & variance Tradeoff in Deep Learning**

> 📄 Belkin, Mikhail, et al. "Reconciling modern machine-learning practice and the classical bias–variance trade-off." _Proceedings of the National Academy of Sciences_ 116.32 (2019): 15849-15854.
> 
> Breakthroughs in machine learning are rapidly changing science and society, yet our fundamental understanding of this technology has lagged far behind. Indeed, one of the central tenets of the field, the bias-variance trade-off, appears to be at odds with the observed behavior of methods used in the modern machine learning practice. The bias-variance trade-off implies that a model should balance under-fitting and over-fitting: rich enough to express underlying structure in data, simple enough to avoid fitting spurious patterns. However, in the modern practice, very rich models such as neural networks are trained to exactly fit (i.e., interpolate) the data. Classically, such models would be considered over-fit, and yet they often obtain high accuracy on test data. This apparent contradiction has raised questions about the mathematical foundations of machine learning and their relevance to practitioners.
> 
> In this paper, we reconcile the classical understanding and the modern practice within a unified performance curve. This “double descent” curve subsumes the textbook U-shaped biasvariance trade-off curve by showing how increasing model capacity beyond the point of interpolation results in improved performance. We provide evidence for the existence and ubiquity of double descent for a wide spectrum of models and datasets, and we posit a mechanism for its emergence. This connection between the performance and the structure of machine learning models delineates the limits of classical analyses, and has implications for both the theory and practice of machine learning.

![](../../../../../../../../Assets/Pics/Screenshot%202026-09-22%20at%2016.23.29.png)
<small>Curves for training risk (dashed line) and test risk (solid line). (a) The classicalU-shaped risk curve arising from the bias-variance trade-off. (b) The double descent risk curve, which incorporates the U-shaped risk curve (i.e., the “classical” regime) together with the observed behavior from using high capacity function classes (i.e., the “modern” interpolating regime), separated by the interpolation threshold. The predictors to the right of the interpolation threshold have zero training risk.</small>


### Bias–variance Decomposition of MSE (Mean Squared Error)


### Approaches


### Applications



## Precision & Recall Tradeoff
> 🔗 https://en.wikipedia.org/wiki/Precision_and_recall

![|300](../../../../../../../../Assets/Pics/Pasted%20image%2020260922160307.png)

For ==classification tasks==, the terms _true positives_, _true negatives_, _false positives_, and _false negatives_ compare the results of the classifier under test with trusted external judgments. The terms _positive_ and _negative_ refer to the classifier's prediction (sometimes known as the _expectation_), and the terms _true_ and _false_ refer to whether that prediction corresponds to the external judgment (sometimes known as the _observation_).

Let us define an experiment from _P_ positive instances and _N_ negative instances for some condition. The four outcomes can be formulated in a 2×2 [contingency table](https://en.wikipedia.org/wiki/Contingency_table "Contingency table") or [confusion matrix](https://en.wikipedia.org/wiki/Confusion_matrix "Confusion matrix"), as follows:

![](../../../../../../../../Assets/Pics/Screenshot%202026-09-22%20at%2016.09.22.png)


### F-measure
> 🔗 https://en.wikipedia.org/wiki/Precision_and_recall#F-measure

A measure that combines precision and recall is the [harmonic mean](https://en.wikipedia.org/wiki/Harmonic_mean "Harmonic mean") of precision and recall, the ==traditional F-measure or balanced F-score==: $$F = 2 \cdot \frac{\mathrm{precision} \cdot \mathrm{recall}}{\mathrm{precision} + \mathrm{recall}}$$
This measure is approximately the average of the two when they are close, and is more generally the [harmonic mean](https://en.wikipedia.org/wiki/Harmonic_mean "Harmonic mean"), which, for the case of two numbers, coincides with the square of the [geometric mean](https://en.wikipedia.org/wiki/Geometric_mean "Geometric mean") divided by the [arithmetic mean](https://en.wikipedia.org/wiki/Arithmetic_mean "Arithmetic mean"). There are several reasons that the F-score can be criticized, in particular circumstances, due to its bias as an evaluation metric.[1](https://en.wikipedia.org/wiki/Precision_and_recall#cite_note-Powers2011-1) This is also known as the $F_1$ measure, because recall and precision are evenly weighted.

It is a special case of ==the general $F_\beta$ measure== (for non-negative real values of $\beta$): $$F_\beta = (1+\beta^2)\cdot \frac{\mathrm{precision}\cdot\mathrm{recall}}{\beta^2\cdot\mathrm{precision}+\mathrm{recall}}$$
Two other commonly used $F$ measures are the ==$F_2$ measure==, which weights recall higher than precision, and the ==$F_{0.5}$ measure==, which puts more emphasis on precision than recall.

The F-measure was derived by van Rijsbergen (1979) so that $F_\beta$ "measures the effectiveness of retrieval with respect to a user who attaches $\beta$ times as much importance to recall as precision". It is based on van Rijsbergen's effectiveness measure $E_\alpha = 1 - \frac{1}{\frac{\alpha}{P} + \frac{1-\alpha}{R}}$, the second term being the weighted harmonic mean of precision and recall with weights $(\alpha, 1-\alpha)$. Their relationship is $F_\beta = 1 - E_\alpha$ where $\alpha = \frac{1}{1+\beta^2}$


### Generalization to Continuous Distribution
> 🔗 https://en.wikipedia.org/wiki/Precision_and_recall#Generalisation_to_continuous_distributions

The classical definitions of precision, recall, and F-score are formulated for [binary classification](https://en.wikipedia.org/wiki/Binary_classification "Binary classification"), where each instance is either true or false. Many practical domains, however, produce inherently _continuous_ signals rather than discrete labels. Generalising these metrics to continuous distributions enables their direct application to such data without the information loss introduced by thresholding.[25](https://en.wikipedia.org/wiki/Precision_and_recall#cite_note-31)

Two motivating examples illustrate the limitation of binary frameworks:
- **Quantitative finance.** A model may output a continuous buy/sell signal proportional to its conviction for each asset at a given moment. Applying a fixed threshold (e.g. signal > 0.1 = buy) discards conviction magnitude and conflates strong and mild signals, limiting the model's ability to correctly distinguish a strong buy from a mild one.
- **DNA methylation analysis.** Sequencing tools detect differentially methylated regions whose underlying signal is continuous, typically ranging from −1 to +1. Forcing this into a binary framework introduces similar distortions by treating all positive deviations as equivalent regardless of magnitude.

---
Definitions

Let $x_i$ denote the expected (ground-truth) signal and $y_i$ the observed (predicted) signal at each data point $i$. Then, precision, recall, and F-score can be calculated as:

$\text{Precision} = \frac{\sum \frac{2x_i y_i}{x_i^2+y_i^2} y_i^2}{\sum y_i^2}$

$\text{Recall} = \frac{\sum \frac{2x_i y_i}{x_i^2+y_i^2} x_i^2}{\sum x_i^2}$

$F = \frac{\sum 2x_i y_i}{\sum x_i^2+y_i^2}$

Note, sums may be replaced with integrals for continuous distributions depending on other continuous variables (i.e. $\sum \rightarrow \int d\xi$, $x_i \rightarrow x(\xi)$, $y_i \rightarrow y(\xi)$).

These definitions reduce to the classical binary versions when $x_i,y_i \in {0,1}$. However, continuous metrics reveal a deeper mathematical elegance. Consider a completely wrong ML model with random signal. Traditional binary metrics, blind to magnitude and sign, can still award such a model positive precision, recall and/or F-score (even 25% or higher for dense signal). The continuous formulas, by contrast, return exactly 0 for precision, recall, and F-score in this situation – because when expected and observed signals do not correlate, the numerator terms cancel to zero



## Cross-Validation
↗ [K-Folds Cross Validation](General%20Evaluation%20Metrics/K-Folds%20Cross%20Validation.md)



## Ref
[Precision & Recall | Wikipedia]: https://en.wikipedia.org/wiki/Precision_and_recall
