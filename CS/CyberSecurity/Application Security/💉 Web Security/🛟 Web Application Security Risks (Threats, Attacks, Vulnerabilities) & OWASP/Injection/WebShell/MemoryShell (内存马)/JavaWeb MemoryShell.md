# JavaWeb MemoryShell

[TOC]



## Res
🏠 
🚧 


### Related Topics
↗ [Java](../../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Compiled%20+%20Interpreted%20Languages/⚰️%20JVM-Based%20Languages/☕️%20Java/Java.md)
↗ [Java Web](../../../../../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20Web%20Development%20&%20The%20Internet/🗄️%20Web%20BackEnd%20Dev%20&%20Middleware/Web%20BackEnd%20Language%20&%20Ecosystems/Java%20Web.md)
↗ [Apache Tomcat](../../../../../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20Web%20Development%20&%20The%20Internet/🗄️%20Web%20BackEnd%20Dev%20&%20Middleware/Web%20Dev%20Middleware/Application%20Servers/Apache%20Tomcat/Apache%20Tomcat.md)



## Intro
> 🔗 https://www.freebuf.com/articles/web/274466.html

**如何实现webshell内存马**
- **目标**：访问任意url或者指定url，带上命令执行参数，即可让服务器返回命令执行结果  
- **实现**：客户端发起的web请求会依次经过Listener、Filter、Servlet三个组件，我们只要在这个请求的过程中做手脚，在内存中修改已有的组件或者动态注册一个新的组件，插入恶意的shellcode，就可以达到我们的目的。
![](../../../../../../../../Assets/Pics/Pasted%20image%2020240331133927.png)


**内存马类型**
根据内存马注入的方式，大致可以将JAVA内存马划分为如下两类
- **servlet-api型**
	- 通过命令执行等方式动态注册一个新的listener、filter或者servlet，从而实现命令执行等功能。特定框架、容器的内存马原理与此类似，如spring的controller内存马，tomcat的valve内存马
- **字节码增强型**
	- 通过java的instrumentation动态修改已有代码，进而实现命令执行等功能。


### JavaWeb Request /Response Components
#### Listener
#### Filter
#### Servlet



## Ref
[👍 分享几个直接可用的内存马，记录一下学习过程中看过的文章 | github]: https://github.com/bitterzzZZ/MemoryShellLearn

仓库主要分享一下学习内存马以来的成果：
- 几个jsp文件，可以直接注入tomcat的listener、filter、servlet内存马
- spring mvc 结合JNDI注入可以使用的java代码，通过java恶意类可以注入litener、filter、servlet、controller和interceptor内存马(tomcat环境下)

看了大佬们的无私技术分享文章，学到很多东西，所以把收集的文章列举在后面，respect ！

[👍 Java安全学习——内存马]: https://goodapple.top/archives/1355

