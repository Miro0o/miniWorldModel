# cpython

[TOC]



## Res
🏠 
🚧 https://github.com/python/cpython


### Related Topics
↗ [Python](../../../../Interpreted%20Languages/Python/Python.md)


### Learning Resources
https://devguide.python.org/internals/
CPython’s internals | Python Developer's Guide

> This guide describes the basics of CPython’s internals. It explains the layout of CPython’s source code. It also explains how the parser, compiler, and interpreter work together to run your Python code. Finally, it covers the garbage collector and how it manages memory.



## Intro
> 🔗 https://stackoverflow.com/a/17130986/16542494

### So what is CPython?
CPython is the _original_ Python implementation. It is the implementation you download from Python.org. People call it CPython to distinguish it from other, later, Python implementations, and to distinguish the implementation of the language engine from the Python _programming language_ itself.

The latter part is where your confusion comes from; you need to keep Python-the-language separate from whatever _runs_ the Python code.

CPython _happens_ to be implemented in C. That is just an implementation detail, really. CPython compiles your Python code into bytecode (transparently) and interprets that bytecode in a evaluation loop.

CPython is also the first to implement new features; Python-the-language development uses CPython as the base; other implementations follow.


### What about Jython, etc.?
[Jython](http://www.jython.org/), [IronPython](http://ironpython.net/) and [PyPy](https://pypy.org/) are the current "other" implementations of the Python programming language; these are implemented in Java, C# and RPython (a subset of Python), respectively. Jython compiles your Python code to _Java_ bytecode, so your Python code can run on the JVM. IronPython lets you run Python on the [Microsoft CLR](https://learn.microsoft.com/en-us/dotnet/standard/clr). And PyPy, being implemented in (a subset of) Python, lets you run Python code faster than CPython, which rightly should blow your mind. :-)


### Actually compiling to C
So CPython does **not** translate your Python code to C by itself. Instead, it runs an interpreter loop. There _is_ a project that _does_ translate Python-ish code to C, and that is called [Cython](http://cython.org/). Cython adds a few extensions to the Python language, and lets you compile your code to C extensions, code that plugs _into_ the CPython interpreter.



## Ref
