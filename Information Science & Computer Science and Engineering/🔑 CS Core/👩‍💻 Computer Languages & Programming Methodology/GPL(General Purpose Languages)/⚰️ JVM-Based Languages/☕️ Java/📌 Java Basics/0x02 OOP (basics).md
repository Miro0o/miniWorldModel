# OOP

> Ref: [[../../../👔 C-Based Languages/🥏 C & CPP/📌 C & CPP Basics/0x00 OOP| CPPOOP]]

## [OOP basics](https://www.liaoxuefeng.com/wiki/1252599548343744/1260451488854880)

 >⚠️ 
 >一个Java源文件可以包含多个类的定义，但只能定义一个public类，且public类名必须与文件名一致。如果要定义多个public类，必须拆到多个Java源文件中。

### Method

###### method parameter

1. variable parameter: 

``` java
class Group {
    private String[] names;

    public void setNames(String... names) {
        this.names = names;
    }
}
```

上面的`setNames()`就定义了一个可变参数 (variable parameter)。调用时，可以这么写：

``` java
Group g = new Group();
g.setNames("Xiao Ming", "Xiao Hong", "Xiao Jun"); // 传入3个String
g.setNames("Xiao Ming", "Xiao Hong"); // 传入2个String
g.setNames("Xiao Ming"); // 传入1个String
g.setNames(); // 传入0个String
```
2. parameter binding: 

when passing basic variable to a method, the change of the variable does not have an impact on the receiver side; while when passing referencing variable (string or array ), the change does have an impact on the receiver side. 

for more imfo, see [tutorial](https://www.liaoxuefeng.com/wiki/1252599548343744/1260452774408320).

###### method overload

> this e.g. is  actually called constructor overload, but since constructor is also a special method, so... 
``` java
class Hello {
    public void hello() {
        System.out.println("Hello, world!");
    }

    public void hello(String name) {
        System.out.println("Hello, " + name + "!");
    }

    public void hello(String name, int age) {
        if (age < 18) {
            System.out.println("Hi, " + name + "!");
        } else {
            System.out.println("Hello, " + name + "!");
        }
    }
}
```


### Constructor

在Java中，创建对象实例的时候，按照如下顺序进行初始化：
1.  字段初始化. （field initiation）
2.  执行构造方法的代码进行初始化。(constructor)

一个构造方法可以调用其他的构造方法，使用 `this()` :
``` java
class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public Person(String name) {
        this(name, 18); // 调用另一个构造方法Person(String, int)
    }

    public Person() {
        this("Unnamed"); // 调用另一个构造方法Person(String)
    }
}
```

###### Constructor overload
multiple constructors are allowed. 



### Inheritance & inheritance tree

 ###### `extends`

``` java
class Person {           // super class, parent class base class
    private String name;
    private int age;

    public String getName() {...}
    public void setName(String name) {...}
    public int getAge() {...}
    public void setAge(int age) {...}
}

class Student extends Person { // subclass, extend class
    // 不要重复name和age字段/方法,
    // 只需要定义新增score字段/方法:
    private int score;

    public int getScore() { … }
    public void setScore(int score) { … }
}
```

`super` allows access to parent class. `this` refers to the current instance. 
`protected` allows access for the child class to their parent class. 

```ascii
┌───────────┐
│  Object   │  'Object' object is the parent class of all objects 
└───────────┘
      ▲
      │
┌───────────┐
│  Person   │
└───────────┘
      ▲
      │
┌───────────┐
│  Student  │
└───────────┘
```
>⚠️⚠️⚠️  
subclass does not inherit `constructor` form its parent class. 

在Java中，任何`class`的构造方法，第一行语句必须是调用父类的构造方法。如果没有明确地调用父类的构造方法，编译器会帮我们自动加一句`super()` ;

###### inheritance obstruction
`final`
`sealed`
`permits`

e.g. 
```java
public sealed class Shape permits Rect, Circle, Triangle {
    ...
}
```

###### upcasting & downcasting

1. upcasting: 
upcasting allows a parent class instance safely refer to a subclass instance.

e.g.
``` java
Student s = new Student();
Person p = s; // upcasting, ok
Object o1 = p; // upcasting, ok
Object o2 = s; // upcasting, ok
```

2. downcasting

downcasting allows a subclass instance safely refer to a parent class instance.

e.g.
``` java
Person p1 = new Student(); // upcasting, ok
Person p2 = new Person();
Student s1 = (Student) p1; // ok
Student s2 = (Student) p2; // runtime error! ClassCastException!
```

###### instance relationship
`is` & `has` 


### Polymorphism 
多态是指，针对某个类型的方法调用，其真正执行的方法取决于运行时期实际实例的方法。

 > ⚠️⚠️⚠️
 >  方法名相同，方法参数相同，但方法返回值不同，也是不同的方法。在Java程序中，出现这种情况，编译器会报错。

###### override 
> diff from overload;
> 
> methods defined previously in `Object` parent class: 
> -  `toString()`：把instance输出为`String`；
> -  `equals()`：判断两个instance是否逻辑相等；
> -  `hashCode()`：计算一个instance的哈希值。

`@override`  can re-ride a method and use it in current filed.

e.g.
```java
public class Main {
    public static void main(String[] args) {
    }
}

class Person {
    public void run() {}
}

public class Student extends Person {
    @Override // Compile error!
    public void run(String s) {}
}
```


### Abstraction & Interface

1. Abstraction Oriented Programming

```java
abstract class Person {
    public abstract void run();
}
```

to use an `abstract` method, it has to be pre-defined in an `abstract` class; an `abstract` class cannot be instantiated. 

Outreach...  (面向抽象编程&面向接口编程)
- [AOP & IOP](https://www.cnblogs.com/chiweiming/p/9229457.html)
- [what is AOP](https://developer.aliyun.com/article/687007)

2. Interface Oriented Programming


### Static 
1. Static field
2. Static method

- static method cannot access to `this` variable, for static method is subject to class not the real instance. 
- a preferred writing is `classname.staticmethod` rather than `instancename.staticmethod`

Static methods often used for tools, such as 
-   Arrays.sort()
-   Math.random()
    

静态方法也经常用于辅助方法。注意到Java程序的入口`main()`也是静态方法。

`interface` class allows to define `public static final`  (and it's the only legal field allowed)

```java
public interface Person {
    // 编译器会自动加上public statc final:
    int MALE = 1;
    int FEMALE = 2;
}
```

### [Package](https://www.liaoxuefeng.com/wiki/1252599548343744/1260467032946976)
Package is a namespace deployed by java. 
Package use tree hierarchy, parallel to directory hierarchy. 

e.g.
```ascii
package_sample
└─ src
    ├─ hong
    │  └─ Person.java
    │  ming
    │  └─ Person.java
    └─ mr
       └─ jun
          └─ Arrays.java
```

>  要特别注意：包没有父子关系。java.util和java.util.zip是不同的包，两者没有任何继承关系。

###### import
> [[Engineering/Lang/Java/Troubleshootings#import https blog csdn net qq_25665807 article details 74747868| import]]

Java编译器最终编译出的`.class`文件只使用 _完整类名_ ，因此，在代码中，当编译器遇到一个`class`名称时：

-   如果是完整类名，就直接根据完整类名查找这个`class`；
    
-   如果是简单类名，按下面的顺序依次查找：
    
    -   查找当前`package`是否存在这个`class`；
        
    -   查找`import`的包是否包含这个`class`；
        
    -   查找`java.lang`包是否包含这个`class`。

编写class的时候，编译器会自动帮我们做两个import动作：

-   默认自动`import`当前`package`的其他`class`；
    
-   默认自动`import java.lang.*`。


==一个`.java`文件只能包含一个`public`类，但可以包含多个非`public`类。==


### More ...

###### scoping 
`public`, `private`, `protected`, `final`

###### inner class 
1. inner class
要实例化一个`Inner`，我们必须首先创建一个`Outer`的实例，然后，调用`Outer`实例的`new`来创建`Inner`实例：
观察Java编译器编译后的`.class`文件可以发现，`Outer`类被编译为`Outer.class`，而`Inner`类被编译为`Outer$Inner.class`。

 2. Anonymous Class

 3. Static Nested Class

###### classpath & .jar
1. `classpath`

`classpath` is an environment variable for `JVM` to fetch `.class` file. 

2 ways to set `classpath` : 
- set `classpath` in system environment `PATH`
- set `classpath` when `JVM` boots. (preferred)

 > ⚠️ 不要把任何Java核心库添加到classpath中！JVM根本不依赖classpath加载核心库！

2. `.jar`

`.jar` file is actually a `.zip` file with different suffix. 

`MANIFEST.MF` is a description file under a `.jar` folder manifesting the config info of the project. `Main-Class` indicates the main class entrance. 
use [Maven](https://www.liaoxuefeng.com/wiki/1252599548343744/1255945359327200) to generate `MANIFEST.MF` file. 

###### ⭐️⭐️⭐️  [module](https://www.liaoxuefeng.com/wiki/1252599548343744/1281795926523938)
> 把一堆class封装为jar仅仅是一个打包的过程，而把一堆class封装为模块则不但需要打包，还需要写入依赖关系，并且还可以包含二进制代码（通常是[JNI](https://zhuanlan.zhihu.com/p/349928909)扩展）。此外，模块支持多版本，即在同一个模块中可以为不同的JVM提供不同的版本。

`module-info.java` is the description file of a module. 
it looks like this : 
```java
module hello.world {
	requires java.base; // 可不写，任何模块都会自动引入java.base
	requires java.xml;
}
```

`.jmod` file is transformed form `.jar` file;
to run a modulized project, however, one should run its corresponding `.jar` file. `.jomd` file is for `JRE` generation. 

JRE (java runtime environment) is like docker; with JRE user don't need self-config JDK and the packages needed for the specific project any longer; JRE also makes the distribution easier. 

`.jmod` files are the component parts of a project's JRE. 
use `jlink` in JDK to generate JRE. 

**BUILD**
1. compile java src code
```bash
javac -d bin src/module-info.java src/App/testapp.java src/FrameW/Back/BackP1.java src/FrameW/Middle/*.java src/FrameW/Front/*.java
```
2. package proj into `.jar`
```bash
jar --create --file testP.jar --main-class App/tesetapp -C bin .
```
3. turn `.jar` into module `.jmod`: 
 ```bash
jmod create --class-path testP.jar testP.jmod
 ```
4. generate JRE distribution 
```bash
jlink --module-path hello.jmod --add-modules java.base,java.xml,hello.world --output jre/
```

**RUN**
1. run `.jar`
```bash
java -jar xxx.jar
```

2. run `.jmod`
```bash
 java --module-path xxx.jmod --module xxx
```

3. run jre: 
```bash
jre/bin/java --module xxx
```

inter-module reference :
``` java
module java.xml {
    exports java.xml;
    exports javax.xml.catalog;
    exports javax.xml.datatype;
    ...
}
```