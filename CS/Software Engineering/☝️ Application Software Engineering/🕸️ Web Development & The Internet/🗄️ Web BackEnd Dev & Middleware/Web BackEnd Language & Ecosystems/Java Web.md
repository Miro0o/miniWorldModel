# JavaWeb

[TOC]





## Res
### Related Topics
↗ [Java](../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Compiled%20+%20Interpreted%20Languages/⚰️%20JVM-Based%20Languages/☕️%20Java/Java.md)
↗ [Java Web Backend](../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tools%20Chain/🚠%20Application%20Runtimes%20&%20SDKs/Java%20Runtimes%20(JRE%20&%20JDKs%20Tools)/📌%20JAVA%20Third-party%20Libraries%20&%20JDK/Java%20Web%20Backend/Java%20Web%20Backend.md)


### 🎁 Learning resources
📂 [oracel.com java techologies](https://www.oracle.com/java/technologies/)

🎬 [尚硅谷丨2022版JavaWeb教程(全新技术栈,全程实战)](https://www.bilibili.com/video/BV1AS4y177xJ?p=1&vd_source=72104416ad988548ac73d9710091a9af)  
⭐️⭐️⭐️ [how2j.cn -- java全栈开发](https://how2j.cn) 
⭐️⭐️⭐️ [代码重工](https://heavy_code_industry.gitee.io/code_heavy_industry/) 
👉 [代码重工 （新站点，迁移中...）](https://www.wolai.com/nnRjHcUSv2mrRbFKZUpBMS)
👉 [Oracle Java official develepor doc](https://dev.java/learn/getting-started-with-java/)

[codebaoku -- 编程宝库](http://www.codebaoku.com)
[javaguide (java学习 + 面试指南)](https://javaguide.cn/home.html#java)


### Other Resources
⭐️ [Java web 技术与架构演进历史](https://congzhou09.github.io/knowledge/Java-web-技术与架构演进历史.html)
[JavaWeb发展史详述](https://blog.csdn.net/qq_39304851/article/details/108541486)
[10 Best Java Frameworks to Use in 2022](https://hackr.io/blog/java-frameworks)



## Intro
### Java Web 三大件 😅
> 🔗 https://www.freebuf.com/articles/web/274466.html
> 
> ↗ [Apache Tomcat](../Web%20Dev%20Middleware/Application%20Servers/Apache%20Tomcat/Apache%20Tomcat.md)
> 可以对照tomcat架构辅助理解三大件。三大件是java web的通用规范（？）

#### Servlet
**1.什么是servlet**
Servlet 是运行在 Web 服务器或应用服务器上的程序，它是作为来自 HTTP 客户端的请求和 HTTP 服务器上的数据库或应用程序之间的中间层。它负责处理用户的请求，并根据请求生成相应的返回信息提供给用户。

**2.请求的处理过程**
客户端发起一个http请求，比如get类型。  
Servlet容器接收到请求，根据请求信息，封装成HttpServletRequest和HttpServletResponse对象。  
Servlet容器调用HttpServlet的init()方法，init方法只在第一次请求的时候被调用。  
Servlet容器调用service()方法。  
service()方法根据请求类型，这里是get类型，分别调用doGet或者doPost方法，这里调用doGet方法。  
doXXX方法中是我们自己写的业务逻辑。  
业务逻辑处理完成之后，返回给Servlet容器，然后容器将结果返回给客户端。  
容器关闭时候，会调用destory方法

**3.servlet生命周期**
1. 服务器启动时(web.xml中配置load-on-startup=1，默认为0)或者第一次请求该servlet时，就会初始化一个Servlet对象，也就是会执行初始化方法init(ServletConfig conf)。
2. servlet对象去处理所有客户端请求，在service(ServletRequest req，ServletResponse res)方法中执行
3. 服务器关闭时，销毁这个servlet对象，执行destroy()方法。
4. 由JVM进行垃圾回收。
#### Filter
filter也称之为过滤器，是对Servlet技术的一个强补充，其主要功能是在HttpServletRequest到达 Servlet 之前，拦截客户的HttpServletRequest ，根据需要检查HttpServletRequest，也可以修改HttpServletRequest 头和数据；在HttpServletResponse到达客户端之前，拦截HttpServletResponse ，根据需要检查HttpServletResponse，也可以修改HttpServletResponse头和数据。

基本工作原理
1. Filter 程序是一个实现了特殊接口的 Java 类，与 Servlet 类似，也是由 Servlet 容器进行调用和执行的。  
2. 当在 web.xml 注册了一个 Filter 来对某个 Servlet 程序进行拦截处理时，它可以决定是否将请求继续传递给 Servlet 程序，以及对请求和响应消息是否进行修改。  
3. 当 Servlet 容器开始调用某个 Servlet 程序时，如果发现已经注册了一个 Filter 程序来对该 Servlet 进行拦截，那么容器不再直接调用 Servlet 的 service 方法，而是调用 Filter 的 doFilter 方法，再由 doFilter 方法决定是否去激活 service 方法。  
4. 但在 Filter.doFilter 方法中不能直接调用 Servlet 的 service 方法，而是调用 FilterChain.doFilter 方法来激活目标 Servlet 的 service 方法，FilterChain 对象时通过 Filter.doFilter 方法的参数传递进来的。  
5. 只要在 Filter.doFilter 方法中调用 FilterChain.doFilter 方法的语句前后增加某些程序代码，这样就可以在 Servlet 进行响应前后实现某些特殊功能。  
6. 如果在 Filter.doFilter 方法中没有调用 FilterChain.doFilter 方法，则目标 Servlet 的 service 方法不会被执行，这样通过 Filter 就可以阻止某些非法的访问请求。

**filter的生命周期**
与servlet一样，Filter的创建和销毁也由web容器负责。 web 应用程序启动时，web 服务器将创建Filter 的实例对象，并调用其init方法，读取web.xml配置，完成对象的初始化功能，从而为后续的用户请求作好拦截的准备工作（filter对象只会创建一次，init方法也只会执行一次）。开发人员通过init方法的参数，可获得代表当前filter配置信息的FilterConfig对象。  
Filter对象创建后会驻留在内存，当web应用移除或服务器停止时才销毁。在Web容器卸载 Filter 对象之前被调用。该方法在Filter的生命周期中仅执行一次。在这个方法中，可以释放过滤器使用的资源。

**filter链**  
当多个filter同时存在的时候，组成了filter链。web服务器根据Filter在web.xml文件中的注册顺序，决定先调用哪个Filter。当第一个Filter的doFilter方法被调用时，web服务器会创建一个代表Filter链的FilterChain对象传递给该方法，通过判断FilterChain中是否还有filter决定后面是否还调用filter。
#### Listener
JavaWeb开发中的监听器（Listener）就是Application、Session和Request三大对象创建、销毁或者往其中添加、修改、删除属性时自动执行代码的功能组件。  
- ServletContextListener：对Servlet上下文的创建和销毁进行监听；  
- ServletContextAttributeListener：监听Servlet上下文属性的添加、删除和替换；  
- HttpSessionListener：对Session的创建和销毁进行监听。Session的销毁有两种情况，一个中Session超时，还有一种是通过调用Session对象的invalidate()方法使session失效。  
- HttpSessionAttributeListener：对Session对象中属性的添加、删除和替换进行监听；  
- ServletRequestListener：对请求对象的初始化和销毁进行监听；  
- ServletRequestAttributeListener：对请求对象属性的添加、删除和替换进行监听。

**用途**  
可以使用监听器监听客户端的请求、服务端的操作等。通过监听器，可以自动出发一些动作，比如监听在线的用户数量，统计网站访问量、网站访问监控等。



## 📲 Refs
[廖雪峰 java web dev.]: https://www.liaoxuefeng.com/wiki/1252599548343744/1255945497738400

普通的Java程序是通过启动JVM，然后执行`main()`方法开始运行。但是Web应用程序有所不同，我们无法直接运行`war`文件，必须先启动Web服务器，再由Web服务器加载我们编写的`HelloServlet`，这样就可以让`HelloServlet`处理浏览器发送的请求。

因此，我们首先要找一个支持Servlet API的Web服务器。常用的服务器有：
-   [Tomcat](https://tomcat.apache.org/)：由Apache开发的开源免费服务器；
-   [Jetty](https://www.eclipse.org/jetty/)：由Eclipse开发的开源免费服务器；
-   [GlassFish](https://javaee.github.io/glassfish/)：一个开源的全功能JavaEE服务器。

还有一些收费的商用服务器，如Oracle的[WebLogic](https://www.oracle.com/middleware/weblogic/)，IBM的[WebSphere](https://www.ibm.com/cloud/websphere-application-platform/).

[🤔 一文看懂内存马 | Freebuf]: https://www.freebuf.com/articles/web/274466.html
![](../../../../../../Assets/Pics/Pasted%20image%2020250324210226.png)
