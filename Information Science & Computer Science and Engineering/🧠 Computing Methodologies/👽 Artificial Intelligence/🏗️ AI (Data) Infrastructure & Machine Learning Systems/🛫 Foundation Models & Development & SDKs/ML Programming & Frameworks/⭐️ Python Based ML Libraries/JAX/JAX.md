# JAX

[TOC]



## Res
🏠 https://github.com/google/jax
🏠 https://jax.readthedocs.io/en/latest/


### Related Topics
↗ [Google XLA & OpenXLA](../../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/Compilation%20&%20Program%20Loading%20Tools/Compilers/🐌%20AI%20(LLM)%20Compilers%20&%20GPU%20Operators%20DSL/Tensor%20&%20Computation%20Graph/Google%20XLA%20&%20OpenXLA.md)


### Other Resources



## Intro
JAX is **[Autograd](https://github.com/hips/autograd) and [XLA](https://www.tensorflow.org/xla)**, brought together for high-performance machine learning research.

With its updated version of [Autograd](https://github.com/hips/autograd), JAX can automatically differentiate native Python and NumPy functions. It can differentiate through loops, branches, recursion, and closures, and it can take derivatives of derivatives of derivatives. It supports reverse-mode differentiation (a.k.a. backpropagation) via [`grad`](https://github.com/google/jax#automatic-differentiation-with-grad) as well as forward-mode differentiation, and the two can be composed arbitrarily to any order.

What’s new is that JAX uses [XLA](https://www.tensorflow.org/xla) to compile and run your NumPy programs on GPUs and TPUs. Compilation happens under the hood by default, with library calls getting just-in-time compiled and executed. But JAX also lets you just-in-time compile your own Python functions into XLA-optimized kernels using a one-function API, [`jit`](https://github.com/google/jax#compilation-with-jit). Compilation and automatic differentiation can be composed arbitrarily, so you can express sophisticated algorithms and get maximal performance without leaving Python. You can even program multiple GPUs or TPU cores at once using [`pmap`](https://github.com/google/jax#spmd-programming-with-pmap), and differentiate through the whole thing.

Dig a little deeper, and you'll see that JAX is really an extensible system for [composable function transformations](https://github.com/google/jax#transformations). Both [`grad`](https://github.com/google/jax#automatic-differentiation-with-grad) and [`jit`](https://github.com/google/jax#compilation-with-jit) are instances of such transformations. Others are [`vmap`](https://github.com/google/jax#auto-vectorization-with-vmap) for automatic vectorization and[`pmap`](https://github.com/google/jax#spmd-programming-with-pmap) for single-program multiple-data (SPMD) parallel programming of multiple accelerators, with more to come.

==This is a research project, not an official Google product. Expect bugs and [sharp edges](https://jax.readthedocs.io/en/latest/notebooks/Common_Gotchas_in_JAX.html).== Please help by trying it out, [reporting bugs](https://github.com/google/jax/issues), and letting us know what you think!

```python
import jax.numpy as jnp
from jax import grad, jit, vmap

def predict(params, inputs):
  for W, b in params:
    outputs = jnp.dot(inputs, W) + b
    inputs = jnp.tanh(outputs)  # inputs to the next layer
  return outputs                # no activation on last layer

def loss(params, inputs, targets):
  preds = predict(params, inputs)
  return jnp.sum((preds - targets)**2)

grad_loss = jit(grad(loss))  # compiled gradient evaluation function
perex_grads = jit(vmap(grad_loss, in_axes=(None, 0, 0)))  # fast per-example grads
```


## Ref

