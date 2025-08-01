# [Oracle Java](https://www.oracle.com/java/technologies/downloads/)



## [Intro](https://www.liaoxuefeng.com/wiki/1252599548343744/1255876875896416)
```ascii
┌───────────────────────────┐
│Java EE                    │
│    ┌────────────────────┐ │
│    │Java SE             │ │
│    │    ┌─────────────┐ │ │
│    │    │   Java ME   │ │ │
│    │    └─────────────┘ │ │
│    └────────────────────┘ │
└───────────────────────────┘
```

```ascii
  ┌─    ┌──────────────────────────────────┐
  │     │     Compiler, debugger, etc.     │
  │     └──────────────────────────────────┘
 JDK ┌─ ┌──────────────────────────────────┐
  │  │  │                                  │
  │ JRE │      JVM + Runtime Library       │
  │  │  │                                  │
  └─ └─ └──────────────────────────────────┘
        ┌───────┐┌───────┐┌───────┐┌───────┐
        │Windows││ Linux ││ macOS ││others │
        └───────┘└───────┘└───────┘└───────┘
```

> [Java EE vs JEE vs J2EE](https://stackoverflow.com/questions/36702229/what-is-the-difference-between-jee-and-j2ee)
>
> [Java Naming](https://www.oracle.com/java/technologies/javase/javanaming.html)


### JDK(Java Develop Kits)

> 细心的童鞋还可以在`JAVA_HOME`的`bin`目录下找到很多可执行文件：
>
> -   java：这个可执行程序其实就是JVM，运行Java程序，就是启动JVM，然后让JVM执行指定的编译后的代码;
> -   javac：这是Java的编译器，它用于把Java源码文件（以`.java`后缀结尾）编译为Java字节码文件（以`.class`后缀结尾);
> -   jar：用于把一组`.class`文件打包成一个`.jar`文件，便于发布；
> -   javadoc：用于从Java源码中自动提取注释并生成文档；
> -   jdb：Java调试器，用于开发阶段的运行调试。

- JRE (Java Runtime Environment)
- JSR (Java Specification Request)
- JCP (Java Community Progress)
- RI (Reference Implementation)
- TCK (Technology Compatibility Kit)


### hello, world!
`Java_home` specifies the default java version used.
```java
// filename: javahelloword.java 

public class javahelloword {
	public static void main (String[] args){
		System.out.println("Hello, world!");
	}
}
```

```shell
(base) mir0@fkSCU java % javac javahelloword.java
(base) mir0@fkSCU java % lsd
 javahelloword.class   javahelloword.java
(base) mir0@fkSCU java % java javahelloword
Hello, world!
(base) mir0@fkSCU java %
```


==⚠️ NOTICE== 

1. file name is identical to the main class name. 
2. `javac` takes the `.java` file  and compiles it and produce `.class` file, while `java` takes the `class` name intended to run in the compiled `.class` file.
3. 目前，我们只需要知道，==Java入口程序规定的方法必须是静态方法==，方法名必须为`main`，括号内的参数必须是String数组。
4. 对于整型类型，Java只定义了带符号的整型



## [Language Basics](https://www.liaoxuefeng.com/wiki/1252599548343744/1255884132971296)
### variable (basic variable / referencing variable)
- var
- char:
- ASCII & Unicode supported


### integer operation
- **Overflow** 
 - 特别注意：整数的除法对于除数为0时运行时将报错，但编译不会报错。
   - 要特别注意，整数由于存在范围限制，如果计算结果超出了范围，就会产生溢出，而溢出_不会出错_，却会得到一个奇怪的结果
- Arithmetic shift : `>>` ; Logistic shift: `>>>`


### float operation
- 浮点数`0.1`在计算机中就无法精确表示，因为十进制的`0.1`换算成二进制是一个无限循环小数，很显然，无论使用`float`还是`double`，都只能存储一个`0.1`的近似值。但是，`0.5`这个浮点数又可以精确地表示。
- Java的浮点数完全遵循[IEEE-754](https://web.archive.org/web/20070505021348/http://babbage.cs.qc.edu/courses/cs341/IEEE-754references.html)标准
- 整数运算在除数为`0`时会报错，而浮点数运算在除数为`0`时，不会报错，但会返回几个特殊值：
 - `NaN`表示Not a Number
   -   `Infinity`表示无穷大
   -   `-Infinity`表示负无穷大
- 如果要进行四舍五入，可以对浮点数加上0.5再强制转型


### char & string
- `+`  operater is supported in operation. it connects operated object into a single `string` .
- multi-line string: `"""..."""`
 - e.g. 
   ```java
   public class Main {
   	public static void main(String[] args) {
   		
      	 String s = """
      	            SELECT * FROM
      	              users
      	            WHERE id > 100
      	            ORDER BY name DESC
      	            """;
   		 
      	 System.out.println(s);
   	}		
   }
   
   ```

   in the String s the common onset white-blank is ignored.
- **String Immutability**
	 - e.g.
   ```java
   public class Main {
      	 public static void main(String[] args) {
   	 
      	     String s = "hello";
      	     System.out.println(s); // 显示 hello
   	 
      	     s = "world";
      	     System.out.println(s); // 显示 world
   	 
      	 }
   }
   
   ```

   where the actual memory is :
   ```ascii
   	  s ──────────────┐
   					  │
   					  ▼
   ┌───┬───────────┬───┬───────────┬───┐
   │   │  "hello"  │   │  "world"  │   │
   └───┴───────────┴───┴───────────┴───┘
   ```

- NULL
	 - `NULL`  doesn't point to any actual object. and it should be noted that the `NULL` is not value 0 or any other.


### array
```java
int[] ns = new int[5];

int[] ns;
ns = new int[] { 68, 79, 91, 85, 62 };

int[] ns = { 68, 79, 91, 85, 62 };
```

对于`String[]`类型的数组变量`names`，它实际上包含3个元素，但每个元素都指向某个字符串对象：
``` java
String[] names = {
    "ABC", "XYZ", "zoo"
};
```

```ascii
          ┌─────────────────────────┐
    names │   ┌─────────────────────┼───────────┐
      │   │   │                     │           │
      ▼   │   │                     ▼           ▼
┌───┬───┬─┴─┬─┴─┬───┬───────┬───┬───────┬───┬───────┬───┐
│   │░░░│░░░│░░░│   │ "ABC" │   │ "XYZ" │   │ "zoo" │   │
└───┴─┬─┴───┴───┴───┴───────┴───┴───────┴───┴───────┴───┘
      │                 ▲
      └─────────────────┘
```

对`names[1]`进行赋值，例如`names[1] = "cat";`，效果如下：
```ascii
          ┌─────────────────────────────────────────────────┐
    names │   ┌─────────────────────────────────┐           │
      │   │   │                                 │           │
      ▼   │   │                                 ▼           ▼
┌───┬───┬─┴─┬─┴─┬───┬───────┬───┬───────┬───┬───────┬───┬───────┬───┐
│   │░░░│░░░│░░░│   │ "ABC" │   │ "XYZ" │   │ "zoo" │   │ "cat" │   │
└───┴─┬─┴───┴───┴───┴───────┴───┴───────┴───┴───────┴───┴───────┴───┘
      │                 ▲
      └─────────────────┘
```



## Ref