# IDA Scripts & Automation

[TOC]



## Res
### Related Topics



## Intro



## Ref
[👍 On batch analysis]: https://hex-rays.com/blog/on-batch-analysis/
[👍 Batch operation]: https://hex-rays.com/products/decompiler/manual/batch.shtml

The decompiler supports the batch mode operation with the text and GUI versions of IDA. All you need is to specify the -Ohexrays switch in the command line. The format of this switch is:
```shell
Ohexrays:-option1:-option2:outfile:func1:func2...
```

[IDA批量模式]: https://cloud.tencent.com/developer/article/2223647
ida其实是提供了两种不同的界面，基于Gui的和基于Console的。两者都支持参数调用，但是命令行下的程序可以节省更多的资源，并且有更快的运行效率，如果同时运行数个ida那么建议使用命令行下的版本。

[How to decompile with Hex Rays via a Python API? | Stackoverflow]: https://reverseengineering.stackexchange.com/a/16491/41934

(2017)
Yes. The newer versions of IDA has official bindings for the Hex-Rays decompiler.

Originally, the Python bindings were written by `EiNSTeiN` around the Hex-Rays Decompiler SDK API. Later it has been merged into IDAPython.

You can find the documentation under "`ida_hexrays`" in the IDAPython docs.
Examples can be found in IDAPython repository. Check the scripts which starting with "`vds`".

You can check IDA Batch Decompile plugin which aims, as stated by the author, to batch decompile files in a folder:
> IDA Batch Decompile is a plugin for Hex-Ray's IDA Pro that adds the ability to batch decompile multiple files and their imports with additional annotations (xref, stack var size) to the pseudocode .c file

Notice that this is a work-in-progress project so you might encounter some bugs.

[run-ida-decompilation.py]: https://github.com/avast/retdec-idaplugin/blob/master/scripts/run-ida-decompilation.py

