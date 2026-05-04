# Autoregressive (AR) Models

[TOC]



## Res
### Related Topics
↗ [LLM (Large Language Model)](../../../../Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/LLM%20(Large%20Language%20Model).md)


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Autoregressive_model

In [statistics](https://en.wikipedia.org/wiki/Statistics "Statistics"), an **autoregressive** (**AR**) **model** is a [modelled](https://en.wikipedia.org/wiki/Mathematical_model "Mathematical model") representation of a type of [random process](https://en.wikipedia.org/wiki/Stochastic_process "Stochastic process"). It can be used to describe [time-varying processes](https://en.wikipedia.org/wiki/Time_series "Time series") from many natural and artificial sources. The model specifies output variables that are dependent [linearly](https://en.wikipedia.org/wiki/Linear_relation "Linear relation") on their own previous values on a [stochastic](https://en.wikipedia.org/wiki/Stochastic "Stochastic") basis. The model is in the form of a stochastic [difference equation](https://en.wikipedia.org/wiki/Difference_equation "Difference equation") (or [recurrence relation](https://en.wikipedia.org/wiki/Recurrence_relation "Recurrence relation")) which should not be confused with a [differential equation](https://en.wikipedia.org/wiki/Differential_equation "Differential equation"). Together with the [moving-average (MA) model](https://en.wikipedia.org/wiki/Moving-average_model "Moving-average model"), it is a special case and key component of the more general [autoregressive–moving-average](https://en.wikipedia.org/wiki/Autoregressive%E2%80%93moving-average_model "Autoregressive–moving-average model") (ARMA) and [autoregressive integrated moving average](https://en.wikipedia.org/wiki/Autoregressive_integrated_moving_average "Autoregressive integrated moving average") (ARIMA) models of time series, which have a more complicated stochastic structure; it is also a special case of the vector autoregressive model (VAR), which consists of a system of more than one interlocking stochastic difference equation in more than one evolving random variable. Another important extension is the time-varying autoregressive (TVAR) model, where the autoregressive coefficients are allowed to change over time to model evolving or non-stationary processes. TVAR models are widely applied in cases where the underlying dynamics of the system are not constant, such as in sensors time series modelling, [1][2] climate science,[3] economics and finance (as econometrics),[4][5] signal processing,[6] telecommunications,[7] radar systems,[8] and biological signals.[9]

Unlike the moving-average (MA) model, the autoregressive model is not always stationary; non-stationarity can arise either due to the presence of a [unit root](https://en.wikipedia.org/wiki/Unit_root "Unit root") or due to time-varying model parameters, as in time-varying autoregressive models.

==[Large language models](https://en.wikipedia.org/wiki/Large_language_model "Large language model") are called autoregressive, but they are not a classical autoregressive model in this sense because they are not linear.==



## Ref
