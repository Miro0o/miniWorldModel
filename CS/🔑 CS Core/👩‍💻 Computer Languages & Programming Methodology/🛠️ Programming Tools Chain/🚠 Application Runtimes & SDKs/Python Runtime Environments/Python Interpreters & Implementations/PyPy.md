# PyPy

[TOC]



## Res
🏠 https://www.pypy.org

> A [fast](http://speed.pypy.org/), [compliant](https://www.pypy.org/compat.html) alternative implementation of [Python](http://python.org/)

📂 https://doc.pypy.org/

📄 [What is PyPy](https://www.pypy.org/features.html) ?



## Intro
PyPy is an implementation of the Python programming language. PyPy often runs faster than the standard implementation CPython because PyPy uses a just-in-time compile. PyPy (with JIT) benchmark times normalized to CPython. Smaller is better. Based on the geometric average of all benchmarks

**Advantages and distinct Features**
- **Speed:** thanks to its Just-in-Time compiler, Python programs often run [faster](http://speed.pypy.org/) on PyPy.  [(What is a JIT compiler?)](http://en.wikipedia.org/wiki/Just-in-time_compilation)
- **Memory usage:** memory-hungry Python programs (several hundreds of MBs or more) might end up taking [less space](https://www.pypy.org/posts/2009/10/gc-improvements-6174120095428192954.html) than they do in CPython.
- **Compatibility:** PyPy is [highly compatible](https://www.pypy.org/compat.html) with existing python code. It supports [cffi](https://cffi.readthedocs.org/), [cppyy](https://cppyy.readthedocs.org/), and can run popular python libraries like [twisted](https://twistedmatrix.com/), and [django](https://www.djangoproject.com/). It can also run NumPy, Scikit-learn and more via a c-extension compatibility layer.
- **Stackless:** PyPy comes by default with support for [stackless mode](https://www.pypy.org/features.html#stackless), providing micro-threads for massive concurrency.
- As well as other [features](https://www.pypy.org/features.html).



## Ref

