# IDAPython

[TOC]



## Res
🚧 https://github.com/idapython/src
📂 https://hex-rays.com//products/ida/support/idapython_docs/
IDAPython documentatio


### Related Topics


### Learning Resources
📖 The Beginner's Guide to IDAPython



## Intro



## Ref
[👍 IDApython插件编写及脚本批量分析教程]: http://t.csdnimg.cn/KLZDL

IDApython主要有三个模块（这个我忘记在哪里看的了，之前摘的笔记，侵删）：
- idc：兼容IDA Pro中idc函数的模块；
- idautils：逆向分析中常用的一个模块，大多数处理方法都是需要依托于这个模块；
- idaapi：该模块允许使用者通过类的形式，访问更多底层的数据；

框架
插件的代码可以分为两部分，这两个部分在IDA安装目录下的 plugins和python文件夹中：
- plugins目录下的插件类，用于实例化插件对象，以及作为插件调用的入口，用来调用自定义的插件模块中的功能代码；
- 另一个是在python目录中定义的插件模块，实现了自定义的插件的功能；

[IDA pro批量反汇编——将PE可执行文件反汇编生成asm文件]: http://t.csdnimg.cn/H67wJ

[How to execute ida-decompiler python script from IDAPython inside IDA Pro | Stackoverflow]: https://stackoverflow.com/q/20962038/16542494
[IDAFunctionsDecompiler | Github]: https://github.com/JCGdev/IDAFunctionsDecompiler
[ida-batch_decompile]:https://github.com/tintinweb/ida-batch_decompile

[Is there a way to install Python 3 modules into IDAPython with pip? | StackExchange]: https://reverseengineering.stackexchange.com/q/30122/41934

