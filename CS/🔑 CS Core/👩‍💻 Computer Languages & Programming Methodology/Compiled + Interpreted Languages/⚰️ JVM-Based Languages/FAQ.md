# FAQ

[TOC]



## 👉 Oracle JDK vs OpenJDK
#java #OracleJDK #OpenJDK

Both OpenJDK and Oracle JDK are created and maintained currently by Oracle only.

OpenJDK and Oracle JDK are implementations of the same Java specification passed the TCK (Java Technology Certification Kit).

Most of the vendors of JDK are written on top of OpenJDK by doing a few tweaks to [mostly to replace licensed proprietary parts / replace with more high-performance items that only work on specific OS] components without breaking the TCK compatibility.

Many vendors implemented the Java specification and got TCK passed. For example, IBM J9, Azul Zulu, Azul Zing, and Oracle JDK.

Almost every existing JDK is derived from OpenJDK.

As suggested by many, licensing is a change between JDKs. 

Starting with JDK 11 accessing the long time support Oracle JDK/Java SE will now require a commercial license. You should now pay attention to which JDK you're installing as Oracle JDK without subscription could stop working. [source](https://www.infoworld.com/article/3284164/java/oracle-now-requires-a-subscription-to-use-java-se.html)

[List of Java virtual machines]: https://en.wikipedia.org/wiki/List_of_Java_virtual_machines#Proprietary_implementations

[Oracle JDK vs OpenJDK]: https://stackoverflow.com/questions/22358071/differences-between-oracle-jdk-and-openjdk



## 👉 `public void main (String... args)`
#java 

The `string[]` parameter is used to save command line arguments with first being the class name. Moreover, if you call your main method without `string[]` it will simply be an overload and JVM will not be calling that method.And if you skip this signature main method JVM will throw an exception.

[public void main (String... args)]: https://stackoverflow.com/q/1672083/16542494



## 👉 `import`
#java 

1. import & import static 
`import` : targets _java-class or _interface_
`static import` : static member

> static import和import其中一个不一致的地方就是static import导入的是**静态成员**，而import导入的是**类或接口类型**。

2. single-type-import & type-import-on-demand (单类型导入&按需导入)

==type-import-on-demand (按需导入) has impact on compiling efficiency whereas not runtime efficiency.==

format : 
```java
import path.to.java-class

import path.to.parent.folder.*
```

[import ]: https://blog.csdn.net/qq_25665807/article/details/74747868



## 👉 `getProperty`
#java 

```java
public static String getProperty(String key)
```

where `key` can be passed as : 
- file.separator
- java.specification.version
- java.vm.version
- java.class.path
- java.vendor
- java.class.version
- os.arch
- java.compiler
- line.separator
- java.version
- java.vendor.url
- os.name



## 👉 '\=\=' & `.eaual()`
#java 

'\=\=' is for reference comparison
`.eaual()` is for content comparison



## 👉 判断对象是否为null
#java 

1. 对象存在实例，但是对象属性都为空 ``
2. 对象不存在实例 `Object == null`

[判断对象是否为null]: https://www.cnblogs.com/DFX339/p/9945771.html

[通俗易懂，什么是.NET?什么是.NET Framework？什么是.NET Core?]: https://www.cnblogs.com/1996V/p/9037603.html

[CLR vs JVM：.NET和Java之间的争斗如何扩展到VM级别]: https://blog.csdn.net/danpu0978/article/details/106767365

[模块依赖（Java9）]: https://www.cnblogs.com/IcanFixIt/p/6994501.html



## 👉 to get the type name of a variable in java
#java 

1. for variable of primitive class (简单类型变量), to access its type directly is not allowed; 
2. for variable of  [[☕️ Java/📌 Java Basics/0x03 OOP (java core)#Wrapper Class 包装类型 https www liaoxuefeng com wiki 1252599548343744 1260473794166400|wrapper class ]](包装类型变量), use `.getClass().getName()` 

[to get the type name of a variable in java: ]: https://www.cnblogs.com/smuxiaolei/p/7692392.html

https://sunilkanzar.wordpress.com/2017/11/11/wrapper-vs-primitive/



## 👉 lookup installed JDK
#OpenJDK #OracleJDK #java 

... turned out i forgot to export JDK's path to `$PATH` . 

```shell
## ~/.zshrc : 

  47   │
  48   │ ## export java path to env path
  49   │ ##export JAVA_HOME='/usr/libexec/java_home -v 17' ????
  50   │ export JAVA_HOME='/Library/Java/JavaVirtualMachines/jdk-17.0.2.jdk/Contents/Home'
  51   │ export PATH=$JAVA_HOME/bin:$PATH
  52   │
───────┴─────────────────────────────────────────────────────────────────────────────────────────────
(base) mir0@fkSCU ~ % java --version
java 17.0.2 2022-01-18 LTS
Java(TM) SE Runtime Environment (build 17.0.2+8-LTS-86)
Java HotSpot(TM) 64-Bit Server VM (build 17.0.2+8-LTS-86, mixed mode, sharing)
(base) mir0@fkSCU ~ % whereis java
/usr/bin/java
(base) mir0@fkSCU ~ % whereis jmod
(base) mir0@fkSCU ~ % which jmod
/Library/Java/JavaVirtualMachines/jdk-17.0.2.jdk/Contents/Home/bin/jmod
```

https://blog.csdn.net/caoxiaohong1005/article/details/73611424

https://www.liaoxuefeng.com/wiki/1252599548343744/1280507291631649



## 👉 使用idea修改jar包源码并重新打包
#java #idea


[使用idea修改jar包源码并重新打包]: https://blog.csdn.net/weixin_43178406/article/details/119037447
