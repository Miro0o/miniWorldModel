# javac (Java Programming Language Compiler)

[TOC]



## Res
🏠 
🚧 
📄 https://dev.java/learn/jvm/tools/core/javac/
📂 https://docs.oracle.com/en/java/javase/22/docs/specs/man/javac.html


### Related Topics



## Intro
> 🔗 https://dev.java/learn/jvm/tools/core/javac/

The `javac` command reads class and interface definitions, written in the Java programming language, and compiles them into bytecode class files. The `javac` command can also process annotations in Java source files and classes.

A launcher environment variable, `JDK_JAVAC_OPTIONS`, was introduced in JDK 9 that prepended its content to the command line to `javac`.

There are two ways to pass source code file names to `javac`:
- For a few source files, you can list the file names on the command line.
- For a few source files, you can use the `@filename` option on the `javac` command line to include a file that lists the source file names.

Source code file names must have `.java` suffixes, class file names must have `.class` suffixes, and both source and class files must have root names that identify the class. For example, a class called MyClass would be written in a source file called `MyClass.java`:

```java
class MyClass {
    public static void main(String[] args) {
        System.out.println("this is my class");
    }
}
```

and compiled into a bytecode class file called `MyClass.class`:
```shell
javac MyClass.java

MyClass.java
MyClass.class
```

Inner class definitions produce additional class files. These class files have names that combine the inner and outer class names, such as MyClass$MyInnerClass.class.

You should arrange the source files in a directory tree that reflects their package tree. For example:
- **Linux and macOS**: If all of your source files are in `/workspace`, then put the source code for `com.mysoft.mypack.MyClass` in `/workspace/com/mysoft/mypack/MyClass.java`.
- Windows: If all of your source files are in `\workspace`, then put the source code for `com.mysoft.mypack.MyClass` in `\workspace\com\mysoft\mypack\MyClass.java`.

By default, the compiler puts each class file in the same directory as its source file. You can specify a separate destination directory with the `-d` option described in Standard Options.



## Ref
[JAVA学习之JAVAC使用详解 | CSDN]: http://t.csdnimg.cn/AXV4v
[这样处理，Java中的注释代码也会执行 | CSDN]: http://t.csdnimg.cn/8y85i

[Java 进阶巩固：什么是注解以及运行时注解的使用 | CSDN]: http://t.csdnimg.cn/sFtoF
[使用编译时注解简单实现类似 ButterKnife 的效果 | CSDN]: http://t.csdnimg.cn/atphL

