# pdb

[TOC]



## Res
🏠 
🚧 
📂 https://docs.python.org/3/library/pdb.html


### Related Topics



## Intro
> 🔗 https://docs.python.org/3/library/pdb.html

The module [`pdb`](https://docs.python.org/3/library/pdb.html#module-pdb "pdb: The Python debugger for interactive interpreters.") defines an interactive source code debugger for Python programs. It supports setting (conditional) breakpoints and single stepping at the source line level, inspection of stack frames, source code listing, and evaluation of arbitrary Python code in the context of any stack frame. It also supports post-mortem debugging and can be called under program control.

The debugger is extensible – it is actually defined as the class [`Pdb`](https://docs.python.org/3/library/pdb.html#pdb.Pdb "pdb.Pdb"). This is currently undocumented but easily understood by reading the source. The extension interface uses the modules [`bdb`](https://docs.python.org/3/library/bdb.html#module-bdb "bdb: Debugger framework.") and [`cmd`](https://docs.python.org/3/library/cmd.html#module-cmd "cmd: Build line-oriented command interpreters.").

> See also
> Module [`faulthandler`](https://docs.python.org/3/library/faulthandler.html#module-faulthandler "faulthandler: Dump the Python traceback.")
> - Used to dump Python tracebacks explicitly, on a fault, after a timeout, or on a user signal.
> 
> Module [`traceback`](https://docs.python.org/3/library/traceback.html#module-traceback "traceback: Print or retrieve a stack traceback.")
> - Standard interface to extract, format and print stack traces of Python programs.



## Ref
