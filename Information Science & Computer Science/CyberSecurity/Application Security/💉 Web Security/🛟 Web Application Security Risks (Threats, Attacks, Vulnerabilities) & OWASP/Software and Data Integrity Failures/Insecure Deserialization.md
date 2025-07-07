# Insecure Deserialization

[TOC]



## Res
### Related Topics
↗ [(Object) Serialization & Deserialization](../../../../../🔑%20CS%20Core/🏎️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x02%20Presentation%20Layer%20(Syntax%20Layer)/(Object)%20Serialization%20&%20Deserialization/(Object)%20Serialization%20&%20Deserialization.md)


### Other Resources
🚧 https://github.com/frohoff/ysoserial
A proof-of-concept tool for generating payloads that exploit unsafe Java object deserialization.

[Java-Deserialization-Cheat-Sheet](https://github.com/GrrrDog/Java-Deserialization-Cheat-Sheet): info on vulnerabilities, tools, blogs/write-ups, etc.
[marshalsec](https://github.com/frohoff/marshalsec): similar project for various Java deserialization formats/libraries
[ysoserial.net](https://github.com/pwntester/ysoserial.net): similar project for .NET deserialization



## Intro
> 🔗 https://p4d0rn.gitbook.io/java/serial-journey/urldns

从反序列化到漏洞？
1. 入口类的`readObject`直接调用危险方法
2. 入口类参数中包含可控类，该类有危险方法，`readObject`时调用
3. 入口类参数中包含可控类，该类又调用其他有危险方法的类，`readObject`时调用

``` java
// Person类中重写readObject
private void readObject(ObjectInputStream ois) throws IOException, ClassNotFoundException {
    ois.defaultReadObject();
    Runtime.getRuntime().exec("calc");
}
```

此时执行反序列化操作就会触发`Runtime.getRuntime().exec("calc");`
对于利用链上的类，都需要**实现**`**Serializable**`**接口、或继承该接口的实现类**
- Source：入口类（重写`readObject`调用常见方法，参数类型宽泛，最好jdk自带）
- Gadget Chain：调用链（相同方法名、相同参数类型、不同调用过程）
- Sink：执行类（RCE、SSRF、写文件...）

常见方法：`toString`、`hashCode`、`equals`

在后面的CC链中经常看到`HashMap`作为入口类，它实现了`Serializable`接口且作为jdk自带的类，`readObject`中调用了常见方法`hashCode`，是不错的入口类。



## Ref
[👍 全网最全详细的反序列化攻击知识梳理 | 大军安全]: https://mp.weixin.qq.com/s/F31ou2nfTfZrqPC9ab_IAA
1. 理解序列化和反序列化
2. PHP反序列化
	1. 什么是序列化与反序列化
	2. 序列化的概念
	3. 反序列化的概念
	4. 反序列化漏洞的产生
		1.  PHP 反序列化漏洞又叫做 PHP 对象注入漏洞，是因为程序对输入数据处理不当导致的. 反序列化漏洞的成因在于代码中的  unserialize()  接收的参数可控，从上面的例子看，这个函数的参数是一个序列化的对象，而序列化的对象只含有对象的属性，那我们就要利用对对象属性的篡改实现最终的攻击。
		2. 一句话讲晒就是：**反序列化漏洞是由于unserialize函数接收到了恶意的序列化数据篡改成员属性后导致的。**
	5. 小试牛刀
	6. PHP魔术方法
		1. PHP讲以双下划线__保留为魔术方法，所有的魔术方法 必须 声明为 public。
		2. `__construct()`，类的构造函数
		3. `__destruct()`，类的析构函数
		4. `__call()`，在对象中调用一个不可访问方法时调用
		5. `__callStatic()`，用静态方式中调用一个不可访问方法时调用
		6. `__get()`，获得一个类的成员变量时调用
		7. `__set()`，设置一个类的成员变量时调用
		8. `__isset()`，当对不可访问属性调用`isset()`或`empty()`时调用  
		9. `__unset()`，当对不可访问属性调用`unset()`时被调用。  
		10. `__sleep()`，执行`serialize()`时，先会调用这个函数  
		11. `__wakeup()`，执行`unserialize()`时，先会调用这个函数  
		12. `__toString()`，类被当成字符串时的回应方法  
		13. `__invoke()`，调用函数的方式调用一个对象时的回应方法  
		14. `__set_state()`，调用`var_export()`导出类时，此静态方法会被调用。  
		15. `__clone()`，当对象复制完成时调用  
		16. `__autoload()`，尝试加载未定义的类  
		17. `__debugInfo()`，打印所需调试信息
3. 练习
	1. Hackthebox-Tenet
	2. 反序列化对象注入-CVE-2016-7124

[java security, serialization | p4d0rn]: https://p4d0rn.gitbook.io/java/serial-journey/urldns
👻Serial Journey
- [URLDNS](https://p4d0rn.gitbook.io/java/serial-journey/urldns)
- [SerialVersionUID](https://p4d0rn.gitbook.io/java/serial-journey/serialversionuid)
- [Commons Collection 🥏](https://p4d0rn.gitbook.io/java/serial-journey/commons-collection)
	- [CC1-TransformedMap](https://p4d0rn.gitbook.io/java/serial-journey/commons-collection/cc1_transformedmap)
	- [CC1-LazyMap](https://p4d0rn.gitbook.io/java/serial-journey/commons-collection/cc1_lazymap)
	- [CC6](https://p4d0rn.gitbook.io/java/serial-journey/commons-collection/cc6)
	- [CC3](https://p4d0rn.gitbook.io/java/serial-journey/commons-collection/cc3)
	- [CC2](https://p4d0rn.gitbook.io/java/serial-journey/commons-collection/cc2)
- [FastJson 🪁](https://p4d0rn.gitbook.io/java/serial-journey/fastjson)
	- [FastJson-Basic Usage](https://p4d0rn.gitbook.io/java/serial-journey/fastjson/fastjsonbasic)
	- [FastJson-TemplatesImpl](https://p4d0rn.gitbook.io/java/serial-journey/fastjson/fastjson_templatesimpl)
	- [FastJson-JdbcRowSetImpl](https://p4d0rn.gitbook.io/java/serial-journey/fastjson/fastjson_jdbcrowsetimpl)
	- [FastJson-BasicDataSource](https://p4d0rn.gitbook.io/java/prerequisites/lei-jia-zai/bcel)
	- [FastJson-ByPass](https://p4d0rn.gitbook.io/java/serial-journey/fastjson/fastjson-bypass)
	- [FastJson与原生反序列化(一)](https://paper.seebug.org/2055/)
	- [FastJson与原生反序列化(二)](https://y4tacker.github.io/2023/04/26/year/2023/4/FastJson%E4%B8%8E%E5%8E%9F%E7%94%9F%E5%8F%8D%E5%BA%8F%E5%88%97%E5%8C%96-%E4%BA%8C/)
	- [Jackson的原生反序列化利用](https://p4d0rn.gitbook.io/java/serial-journey/fastjson/jackson)
- [Other Components](https://p4d0rn.gitbook.io/java/serial-journey/other-components)
	- [SnakeYaml](https://p4d0rn.gitbook.io/java/serial-journey/other-components/snakeyaml)
	- [C3P0](https://p4d0rn.gitbook.io/java/serial-journey/other-components/c3p0)
	- [AspectJWeaver](https://p4d0rn.gitbook.io/java/serial-journey/other-components/aspectjweaver)
	- [Rome](https://p4d0rn.gitbook.io/java/serial-journey/other-components/rome)
	- [Spring](https://p4d0rn.gitbook.io/java/serial-journey/other-components/spring)
	- [Hessian](https://p4d0rn.gitbook.io/java/serial-journey/other-components/hessian)
	- [Hessian_Only_JDK](https://p4d0rn.gitbook.io/java/serial-journey/other-components/hessian_only_jdk)
	- [Kryo](https://p4d0rn.gitbook.io/java/serial-journey/other-components/kryo)
	- [Dubbo](https://p4d0rn.gitbook.io/java/serial-journey/other-components/dubbo)

[java security, deserialization twice | p4d0rn]: https://p4d0rn.gitbook.io/java/others/desertwice
