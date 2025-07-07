# ABC (Ark Bytecode) File

[TOC]



## Res
🏠 
🚧 


### Related Topics



## Intro



## Ref
[有方舟字节码.abc文件指令介绍的文档吗 | huawei Develope Docs]: https://developer.huawei.com/consumer/cn/forum/topic/0202133786472167066

不提供哦(\*^◯^\*) 望采纳。

[abc 文件格式解析模板（010Editor） | kanxue]: https://bbs.kanxue.com/thread-279669.htm

照着官方文档和代码写了个 010Editor 解析模板，还不是很完善，凑合着用。放到 [GitHub](https://github.com/hx1997/ark-bytecode-010editor-template) 了，附件里也传了一份，附带一个测试用的 abc。大部分是照着 [OpenHarmony 官方文档](https://gitee.com/openharmony/arkcompiler_runtime_core/blob/master/docs/file_format.md)写的，小部分文档不准确，自己扒了源码看。

这个不是方舟字节码（Ark Bytecode）的反汇编器，只是解析 abc 文件格式的模板，abc 文件里面包含方舟字节码，类比 .dex 和里面的 Dalvik 字节码的关系。  
方舟字节码的反汇编器[在 OpenHarmony 官方仓库有](https://gitee.com/openharmony/arkcompiler_runtime_core#%E5%8F%8D%E6%B1%87%E7%BC%96%E5%99%A8%E5%B7%A5%E5%85%B7%E6%A6%82%E8%BF%B0)，需要自己编译源码，附件里传了个我编译的 Linux 版本和 PolyOS 模拟器里带的 Windows 版本。

