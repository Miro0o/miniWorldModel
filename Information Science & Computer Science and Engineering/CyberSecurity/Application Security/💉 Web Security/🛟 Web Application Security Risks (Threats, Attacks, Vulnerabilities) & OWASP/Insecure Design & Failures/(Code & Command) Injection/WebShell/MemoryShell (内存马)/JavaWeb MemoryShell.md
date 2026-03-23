# JavaWeb MemoryShell

[TOC]



## Res
### Related Topics
↗ [Java](../../../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Compiled%20+%20Interpreted%20Languages/⚰️%20JVM-Based%20Languages/☕️%20Java/Java.md)
↗ [Java Web](../../../../../../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20The%20Internet%20Development%20(and%20Web%20Development)/🗄️%20Web%20BackEnd%20Dev%20&%20Middleware/Web%20BackEnd%20Language%20&%20Ecosystems/Java%20Web.md)
↗ [Apache Tomcat](../../../../../../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20The%20Internet%20Development%20(and%20Web%20Development)/🗄️%20Web%20BackEnd%20Dev%20&%20Middleware/Web%20Dev%20Middleware/🐈%20Reverse%20Proxy%20Servers%20&%20Application%20Servers/Application%20Servers/Apache%20Tomcat/Apache%20Tomcat.md)


### Other Resources
🚧 https://github.com/W01fh4cker/LearnJavaMemshellFromZero
- [一、前言](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#%E4%B8%80%E5%89%8D%E8%A8%80)
- [二、前置知识](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#%E4%BA%8C%E5%89%8D%E7%BD%AE%E7%9F%A5%E8%AF%86)
    - [2.1 Servlet容器与Engine、Host、Context和Wrapper](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#21-servlet%E5%AE%B9%E5%99%A8%E4%B8%8Eenginehostcontext%E5%92%8Cwrapper)
    - [2.2 编写一个简单的servlet](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#22-%E7%BC%96%E5%86%99%E4%B8%80%E4%B8%AA%E7%AE%80%E5%8D%95%E7%9A%84servlet)
    - [2.3 从代码层面看servlet初始化与装载流程](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#23-%E4%BB%8E%E4%BB%A3%E7%A0%81%E5%B1%82%E9%9D%A2%E7%9C%8Bservlet%E5%88%9D%E5%A7%8B%E5%8C%96%E4%B8%8E%E8%A3%85%E8%BD%BD%E6%B5%81%E7%A8%8B)
        - [2.3.1 servlet初始化流程分析](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#231-servlet%E5%88%9D%E5%A7%8B%E5%8C%96%E6%B5%81%E7%A8%8B%E5%88%86%E6%9E%90)
        - [2.3.2 servlet装载流程分析](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#232-servlet%E8%A3%85%E8%BD%BD%E6%B5%81%E7%A8%8B%E5%88%86%E6%9E%90)
    - [2.4 Filter容器与FilterDefs、FilterConfigs、FilterMaps、FilterChain](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#24-filter%E5%AE%B9%E5%99%A8%E4%B8%8Efilterdefsfilterconfigsfiltermapsfilterchain)
    - [2.5 编写一个简单的Filter](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#25-%E7%BC%96%E5%86%99%E4%B8%80%E4%B8%AA%E7%AE%80%E5%8D%95%E7%9A%84filter)
    - [2.6 从代码层面分析Filter运行的整体流程](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#26-%E4%BB%8E%E4%BB%A3%E7%A0%81%E5%B1%82%E9%9D%A2%E5%88%86%E6%9E%90filter%E8%BF%90%E8%A1%8C%E7%9A%84%E6%95%B4%E4%BD%93%E6%B5%81%E7%A8%8B)
    - [2.7 Listener简单介绍](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#27-listener%E7%AE%80%E5%8D%95%E4%BB%8B%E7%BB%8D)
    - [2.8 编写一个简单的Listener（ServletRequestListener）](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#28-%E7%BC%96%E5%86%99%E4%B8%80%E4%B8%AA%E7%AE%80%E5%8D%95%E7%9A%84listenerservletrequestlistener)
    - [2.9 从代码层面分析Listener运行的整体流程](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#29-%E4%BB%8E%E4%BB%A3%E7%A0%81%E5%B1%82%E9%9D%A2%E5%88%86%E6%9E%90listener%E8%BF%90%E8%A1%8C%E7%9A%84%E6%95%B4%E4%BD%93%E6%B5%81%E7%A8%8B)
    - [2.10 简单的spring项目搭建](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#210-%E7%AE%80%E5%8D%95%E7%9A%84spring%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA)
        - [2.10.1 编写一个简单的Spring Controller](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#2101-%E7%BC%96%E5%86%99%E4%B8%80%E4%B8%AA%E7%AE%80%E5%8D%95%E7%9A%84spring-controller)
        - [2.10.2 编写一个简单的Spring Interceptor](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#2102-%E7%BC%96%E5%86%99%E4%B8%80%E4%B8%AA%E7%AE%80%E5%8D%95%E7%9A%84spring-interceptor)
        - [2.10.3 编写一个简单的Spring WebFlux的Demo（基于Netty）](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#2103-%E7%BC%96%E5%86%99%E4%B8%80%E4%B8%AA%E7%AE%80%E5%8D%95%E7%9A%84spring-webflux%E7%9A%84demo%E5%9F%BA%E4%BA%8Enetty)
    - [2.11 Spring MVC介绍](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#211-spring-mvc%E4%BB%8B%E7%BB%8D)
        - [2.11.1 Spring MVC九大组件](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#2111-spring-mvc%E4%B9%9D%E5%A4%A7%E7%BB%84%E4%BB%B6)
        - [2.11.2 简单的源码分析](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#2112-%E7%AE%80%E5%8D%95%E7%9A%84%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90)
            - [2.11.2.1 九大组件的初始化](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#21121-%E4%B9%9D%E5%A4%A7%E7%BB%84%E4%BB%B6%E7%9A%84%E5%88%9D%E5%A7%8B%E5%8C%96)
            - [2.11.2.2 url和Controller的关系的建立](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#21122-url%E5%92%8Ccontroller%E7%9A%84%E5%85%B3%E7%B3%BB%E7%9A%84%E5%BB%BA%E7%AB%8B)
            - [2.11.2.3 Spring Interceptor引入与执行流程分析](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#21123-spring-interceptor%E5%BC%95%E5%85%A5%E4%B8%8E%E6%89%A7%E8%A1%8C%E6%B5%81%E7%A8%8B%E5%88%86%E6%9E%90)
    - [2.12 Spring WebFlux介绍与代码调试分析](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#212-spring-webflux%E4%BB%8B%E7%BB%8D%E4%B8%8E%E4%BB%A3%E7%A0%81%E8%B0%83%E8%AF%95%E5%88%86%E6%9E%90)
        - [2.12.1 什么是Mono？](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#2121-%E4%BB%80%E4%B9%88%E6%98%AFmono)
        - [2.12.2 什么是Flux？](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#2122-%E4%BB%80%E4%B9%88%E6%98%AFflux)
        - [2.12.3 Spring WebFlux启动过程分析](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#2123-spring-webflux%E5%90%AF%E5%8A%A8%E8%BF%87%E7%A8%8B%E5%88%86%E6%9E%90)
        - [2.12.4 Spring WebFlux请求处理过程分析](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#2124-spring-webflux%E8%AF%B7%E6%B1%82%E5%A4%84%E7%90%86%E8%BF%87%E7%A8%8B%E5%88%86%E6%9E%90)
        - [2.12.5 Spring WebFlux过滤器WebFilter运行过程分析](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#2125-spring-webflux%E8%BF%87%E6%BB%A4%E5%99%A8webfilter%E8%BF%90%E8%A1%8C%E8%BF%87%E7%A8%8B%E5%88%86%E6%9E%90)
    - [2.13 Tomcat Valve介绍与运行过程分析](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#213-tomcat-valve%E4%BB%8B%E7%BB%8D%E4%B8%8E%E8%BF%90%E8%A1%8C%E8%BF%87%E7%A8%8B%E5%88%86%E6%9E%90)
        - [2.13.1 Valve与Pipeline](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#2131-valve%E4%B8%8Epipeline)
        - [2.13.2 编写一个简单Tomcat Valve的demo](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#2132-%E7%BC%96%E5%86%99%E4%B8%80%E4%B8%AA%E7%AE%80%E5%8D%95tomcat-valve%E7%9A%84demo)
        - [2.13.3 Tomcat Valve打入内存马思路分析](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#2133-tomcat-valve%E6%89%93%E5%85%A5%E5%86%85%E5%AD%98%E9%A9%AC%E6%80%9D%E8%B7%AF%E5%88%86%E6%9E%90)
    - [2.14 Tomcat Upgrade介绍与打入内存马思路分析](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#214-tomcat-upgrade%E4%BB%8B%E7%BB%8D%E4%B8%8E%E6%89%93%E5%85%A5%E5%86%85%E5%AD%98%E9%A9%AC%E6%80%9D%E8%B7%AF%E5%88%86%E6%9E%90)
        - [2.14.1 编写一个简单的Tomcat Upgrade的demo](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#2141-%E7%BC%96%E5%86%99%E4%B8%80%E4%B8%AA%E7%AE%80%E5%8D%95%E7%9A%84tomcat-upgrade%E7%9A%84demo)
            - [2.14.1.1 利用SpringBoot搭建](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#21411-%E5%88%A9%E7%94%A8springboot%E6%90%AD%E5%BB%BA)
            - [2.14.1.2 利用Tomcat搭建](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#21412-%E5%88%A9%E7%94%A8tomcat%E6%90%AD%E5%BB%BA)
        - [2.14.2 Tomcat Upgrade内存马介绍与相关代码调试分析](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#2142-tomcat-upgrade%E5%86%85%E5%AD%98%E9%A9%AC%E4%BB%8B%E7%BB%8D%E4%B8%8E%E7%9B%B8%E5%85%B3%E4%BB%A3%E7%A0%81%E8%B0%83%E8%AF%95%E5%88%86%E6%9E%90)
    - [2.15 Tomcat Executor内存马介绍与打入内存马思路分析](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#215-tomcat-executor%E5%86%85%E5%AD%98%E9%A9%AC%E4%BB%8B%E7%BB%8D%E4%B8%8E%E6%89%93%E5%85%A5%E5%86%85%E5%AD%98%E9%A9%AC%E6%80%9D%E8%B7%AF%E5%88%86%E6%9E%90)
        - [2.15.1](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#2151)
        - [2.15.2 Tomcat Executor内存马介绍与代码调试分析](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#2152-tomcat-executor%E5%86%85%E5%AD%98%E9%A9%AC%E4%BB%8B%E7%BB%8D%E4%B8%8E%E4%BB%A3%E7%A0%81%E8%B0%83%E8%AF%95%E5%88%86%E6%9E%90)
            - [2.15.2.1 Endpoint五大组件](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#21521-endpoint%E4%BA%94%E5%A4%A7%E7%BB%84%E4%BB%B6)
            - [2.15.2.2 Endpoint分类](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#21522-endpoint%E5%88%86%E7%B1%BB)
            - [2.15.2.3 Executor相关代码分析](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#21523-executor%E7%9B%B8%E5%85%B3%E4%BB%A3%E7%A0%81%E5%88%86%E6%9E%90)
- [三、传统Web型内存马](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#%E4%B8%89%E4%BC%A0%E7%BB%9Fweb%E5%9E%8B%E5%86%85%E5%AD%98%E9%A9%AC)
    - [3.1 Servlet内存马](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#31-servlet%E5%86%85%E5%AD%98%E9%A9%AC)
        - [3.1.1 简单的servlet内存马demo编写](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#311-%E7%AE%80%E5%8D%95%E7%9A%84servlet%E5%86%85%E5%AD%98%E9%A9%ACdemo%E7%BC%96%E5%86%99)
        - [3.1.2 servlet内存马demo代码分析](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#312-servlet%E5%86%85%E5%AD%98%E9%A9%ACdemo%E4%BB%A3%E7%A0%81%E5%88%86%E6%9E%90)
        - [3.1.3 关于StandardContext、ApplicationContext、ServletContext的理解](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#313-%E5%85%B3%E4%BA%8Estandardcontextapplicationcontextservletcontext%E7%9A%84%E7%90%86%E8%A7%A3)
    - [3.2 Filter内存马](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#32-filter%E5%86%85%E5%AD%98%E9%A9%AC)
        - [3.2.1 简单的filter内存马demo编写](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#321-%E7%AE%80%E5%8D%95%E7%9A%84filter%E5%86%85%E5%AD%98%E9%A9%ACdemo%E7%BC%96%E5%86%99)
        - [3.2.2 servlet内存马demo代码分析](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#322-servlet%E5%86%85%E5%AD%98%E9%A9%ACdemo%E4%BB%A3%E7%A0%81%E5%88%86%E6%9E%90)
        - [3.2.3 tomcat6下filter内存马的编写](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#323-tomcat6%E4%B8%8Bfilter%E5%86%85%E5%AD%98%E9%A9%AC%E7%9A%84%E7%BC%96%E5%86%99)
    - [3.3 Listener内存马](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#33-listener%E5%86%85%E5%AD%98%E9%A9%AC)
        - [3.3.1 简单的Listener内存马demo编写](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#331-%E7%AE%80%E5%8D%95%E7%9A%84listener%E5%86%85%E5%AD%98%E9%A9%ACdemo%E7%BC%96%E5%86%99)
        - [3.3.2 Listener内存马demo代码分析](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#332-listener%E5%86%85%E5%AD%98%E9%A9%ACdemo%E4%BB%A3%E7%A0%81%E5%88%86%E6%9E%90)
- [四、Spring MVC框架型内存马](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#%E5%9B%9Bspring-mvc%E6%A1%86%E6%9E%B6%E5%9E%8B%E5%86%85%E5%AD%98%E9%A9%AC)
    - [4.1 Spring Controller型内存马](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#41-spring-controller%E5%9E%8B%E5%86%85%E5%AD%98%E9%A9%AC)
        - [4.1.1 简单的Spring Controller型内存马demo编写](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#411-%E7%AE%80%E5%8D%95%E7%9A%84spring-controller%E5%9E%8B%E5%86%85%E5%AD%98%E9%A9%ACdemo%E7%BC%96%E5%86%99)
        - [4.1.2 Spring Controller型内存马demo代码分析](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#412-spring-controller%E5%9E%8B%E5%86%85%E5%AD%98%E9%A9%ACdemo%E4%BB%A3%E7%A0%81%E5%88%86%E6%9E%90)
    - [4.2 Spring Interceptor型内存马](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#42-spring-interceptor%E5%9E%8B%E5%86%85%E5%AD%98%E9%A9%AC)
    - [4.3 Spring WebFlux内存马](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#43-spring-webflux%E5%86%85%E5%AD%98%E9%A9%AC)
        - [4.3.1 简单的Spring WebFlux内存马demo编写](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#431-%E7%AE%80%E5%8D%95%E7%9A%84spring-webflux%E5%86%85%E5%AD%98%E9%A9%ACdemo%E7%BC%96%E5%86%99)
        - [4.3.2 Spring WebFlux内存马demo代码分析](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#432-spring-webflux%E5%86%85%E5%AD%98%E9%A9%ACdemo%E4%BB%A3%E7%A0%81%E5%88%86%E6%9E%90)
- [五、中间件型内存马](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#%E4%BA%94%E4%B8%AD%E9%97%B4%E4%BB%B6%E5%9E%8B%E5%86%85%E5%AD%98%E9%A9%AC)
    - [5.1 Tomcat Valve型内存马](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#51-tomcat-valve%E5%9E%8B%E5%86%85%E5%AD%98%E9%A9%AC)
    - [5.2 Tomcat Upgrade内存马](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#52-tomcat-upgrade%E5%86%85%E5%AD%98%E9%A9%AC)
    - [5.3 Tomcat Executor内存马](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#53-tomcat-executor%E5%86%85%E5%AD%98%E9%A9%AC)
- [六、致谢](https://github.com/W01fh4cker/LearnJavaMemshellFromZero#%E5%85%AD%E8%87%B4%E8%B0%A2)



## Intro
### Java Web Dev Background Knowledge
> ↗ [Apache Tomcat](../../../../../../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20The%20Internet%20Development%20(and%20Web%20Development)/🗄️%20Web%20BackEnd%20Dev%20&%20Middleware/Web%20Dev%20Middleware/🐈%20Reverse%20Proxy%20Servers%20&%20Application%20Servers/Application%20Servers/Apache%20Tomcat/Apache%20Tomcat.md)
> ↗ [Java Web](../../../../../../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20The%20Internet%20Development%20(and%20Web%20Development)/🗄️%20Web%20BackEnd%20Dev%20&%20Middleware/Web%20BackEnd%20Language%20&%20Ecosystems/Java%20Web.md)


### How to JW MemoryShell
> 🔗 https://www.freebuf.com/articles/web/274466.html

**如何实现webshell内存马**
- **目标**：访问任意url或者指定url，带上命令执行参数，即可让服务器返回命令执行结果  
- **实现**：客户端发起的web请求会依次经过Listener、Filter、Servlet三个组件，我们只要在这个请求的过程中做手脚，在内存中修改已有的组件或者动态注册一个新的组件，插入恶意的shellcode，就可以达到我们的目的。
![](../../../../../../../../../Assets/Pics/Pasted%20image%2020240331133927.png)


**内存马类型**
根据内存马注入的方式，大致可以将JAVA内存马划分为如下两类
- **servlet-api型**
	- 通过命令执行等方式动态注册一个新的listener、filter或者servlet，从而实现命令执行等功能。特定框架、容器的内存马原理与此类似，如spring的controller内存马，tomcat的valve内存马
- **字节码增强型**
	- 通过java的instrumentation动态修改已有代码，进而实现命令执行等功能。



## Ref
[👍 一文看懂内存马 | freebuf]: https://www.freebuf.com/articles/web/274466.html
一、内存马简介
- 1.1 webshell变迁
- 1.2 如何实现webshell内存马
- 1.3 内存马类型
二、背景知识
- 2.1 Java web三大件
- 2.2Tomcat
- 2.3 其他java背景知识
三、内存马实现
四、内存马检测与排查
- 4.1源码检测
- 4.2 内存马排查
参考链接

[java web请求三大器——listener、filter、servlet]: https://blog.csdn.net/chenwiehuang/article/details/80811193
- 启动顺序为listener->filter->servlet, 但是执行顺序与特性有关
[Tomcat架构原理]: https://segmentfault.com/a/1190000023475177
[利用“进程注入”实现无文件复活 WebShell]: https://www.freebuf.com/articles/web/172753.html
[深入理解反射]: https://mp.weixin.qq.com/s/TqSLUWYWfhHjpfI_srETJg
[查杀Java web filter型内存马]: http://gv7.me/articles/2020/kill-java-web-filter-memshell/

[👍 分享几个直接可用的内存马，记录一下学习过程中看过的文章 | github]: https://github.com/bitterzzZZ/MemoryShellLearn
仓库主要分享一下学习内存马以来的成果：
- 几个jsp文件，可以直接注入tomcat的listener、filter、servlet内存马
- spring mvc 结合JNDI注入可以使用的java代码，通过java恶意类可以注入litener、filter、servlet、controller和interceptor内存马(tomcat环境下)

看了大佬们的无私技术分享文章，学到很多东西，所以把收集的文章列举在后面，respect ！

[👍 Java安全学习——内存马]: https://goodapple.top/archives/1355

[🤔 Shell中的幽灵王者—JAVAWEB 内存马 【认知篇】]: https://nosec.org/home/detail/5049.html

[java security - memory shell | p4d0rn]: https://p4d0rn.gitbook.io/java/memory-shell/tomcat
🐎Memory Shell
- [Tomcat-Architecture](https://p4d0rn.gitbook.io/java/memory-shell/tomcat)
- [Servlet API](https://p4d0rn.gitbook.io/java/memory-shell/servlet-api)
	- [Listener](https://p4d0rn.gitbook.io/java/memory-shell/servlet-api/listener)
	- [Filter](https://p4d0rn.gitbook.io/java/memory-shell/servlet-api/filter)
	- [Servlet](https://p4d0rn.gitbook.io/java/memory-shell/servlet-api/servlet)
- [Tomcat-Middlewares](https://p4d0rn.gitbook.io/java/memory-shell/tomcat-middlewares)
	- [Tomcat-Valve](https://p4d0rn.gitbook.io/java/memory-shell/tomcat-middlewares/valve)
	- [Tomcat-Executor](https://p4d0rn.gitbook.io/java/memory-shell/tomcat-middlewares/executor)
	- [Tomcat-Upgrade](https://p4d0rn.gitbook.io/java/memory-shell/tomcat-middlewares/upgrade)
- [Agent MemShell](https://p4d0rn.gitbook.io/java/memory-shell/agent)
- [WebSocket](https://p4d0rn.gitbook.io/java/memory-shell/websocket)
- [内存马查杀](https://blog.csdn.net/SimoSimoSimo/article/details/127700190)
- [IDEA本地调试Tomcat](https://p4d0rn.gitbook.io/java/memory-shell/de_tomcat)
