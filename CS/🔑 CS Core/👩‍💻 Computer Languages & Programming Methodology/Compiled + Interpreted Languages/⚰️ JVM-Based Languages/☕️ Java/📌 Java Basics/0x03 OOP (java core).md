# [OOP java core class](https://www.liaoxuefeng.com/wiki/1252599548343744/1260576204194144)
- String
- StringBuilder
- StringJoiner
- Wrapper Class 
- JavaBean
- Enumerate
- utilies
----
## [String & encoding](https://www.liaoxuefeng.com/wiki/1252599548343744/1260469698963456)

###### String

`String` is a class type. 
to compare the content of two `String` type variable, use `.equals()` or `equalsIgnoreCase()`

```java
/*
* scratch notes of String learning
* Mir0. 2022/4/7
*
*/


public class Main{
    public static void main(String[] args) {
        // Person p = new Person();
        // // Person q = new Person();
        // String n = "15"; // n的值为15
        // char [] x = {'1','2','3','4'};

        // p.setAge(n); // 传入n的值
        // p.getAge();// 15
        // n = "20"; // n的值改为20
        // p.getAge(); // 15还是20?
        
        // p.setAge(x);
        // p.getAge();
        // x[0] = '2';
        // p.getAge();

// ------------------------------------------------------------------------        

        // char[] x = {'1','2','3','4'};
        // char[] y = new char[] {'1','2','3','4'};
        // char[] z = x;
        // y[0]='9';
        // System.out.println("y= " + y[0]);
        // System.out.println("x= " + x[0]);
        // System.out.println("z= " + z[0]);
        // System.out.println("y==x?" + (x == y));
        // System.out.println("z==x?" + (x == z));

        // String xx = "1234";
        // String yy = "1234";
        // String zz = xx;

        // System.out.println("yy= " + yy);
        // System.out.println("xx= " + xx);
        // System.out.println("zz= " + zz);
        // System.out.println("yy==xx?" + (xx == yy));
        // System.out.println("zz==xx?" + (xx == zz));
        // yy = "4567";
        // System.out.println(xx);
        // zz = "6789";
        // System.out.println(xx);

// ------------------------------------------------------------------------

        // System.out.println("Helllllo".contains("ll"));
        // System.out.println("Helllllo".indexOf("ll"));           // return 2
        // System.out.println("Helllllo".lastIndexOf("ll"));       // return 5
        // System.out.println("Helllllo".startsWith("He"));
        // System.out.println("Helllllo".endsWith("He"));
        // System.out.println("Helllllo".substring(2,5));
        // System.out.println("   Helllllo.    ".trim());
        // System.out.println("   Helllllo.    ".isBlank());
        // System.out.println("   Helllllo.    ".isEmpty());

        // char[] cs = "Hello".toCharArray();                          // String -> char[]
        // String s = new String(cs);                                  // char[] -> String
        // String c = new String ("hellp");                            //  String -> String

        // System.out.println(cs);
        // System.out.println(s);
        // System.out.println(c);

// ------------------------------------------------------------------------

        int[] x = {1,2,3,4,5};
        Person p = new Person();
        p.setNum(x);
        p.getNum();
        x[1] = 0;
        p.getNum();

    }
}

class Person {
    private String age;
    // public char[] age_char = {"1","2"};
    private int[] num;

    public void getAge() {        
        System.out.println(this.age);
        // System.out.println(this.age_char);
    }

    public void setAge(String age) {
        this.age = age;
    }

    public void setAge(char[] age){
        this.age = new String(age); // 指向新的实例的地址， 改变原变量的值不影响this.age
    }

    public void getNum(){
        // System.out.println(this.num[]);
        for(int i : this.num){
            System.out.print(i);
        }
        System.out.println();
    }

    public void setNum(int[] num){
        this.num = num; 
    }

}

```

###### StringBuilder

`StringBuilder` is a variable object: instead of pre-assigning memory before compiling like `String`, `StringBuilder` assigning memory dynamicaly during runtime. 

`StringBuilder` support chain operation.

```java
public class Main {
    public static void main(String[] args) {
        var sb = new StringBuilder(1024);
        sb.append("Mr ")
          .append("Bob")
          .append("!")
          .insert(0, "Hello, ");
        System.out.println(sb.toString());
    }
}
```

NOTE: `StringBuilder` is for loop or likes (iteration, recursion, etc.). When the code is multi-addition (like str1 + str2 + str3 + ...) the compiler turns them automatically into `StringConcatFactory`.

###### StringJoiner

Using seperator concats target String. 

```java
import java.util.StringJoiner;

public class javahelloword{
	public static void main(String... args){
        String Str[] = {"Aa","Bb","Cc","Dd","Ee","Ff"};
		var StrJ = new StringJoiner(", ","begin, ",", end");		// #1 new StringJoiner(seperator, begin, end)
        for(var item: Str){
            StrJ.add(item);
        }
        System.out.println(StrJ);
        
        System.out.print(String.join(",",Str));						// #2 String.join(seperator, tagertString)
	}
}
```







###### Encoding

in java, `char` & `String` types are stored in [[../../../../../../../Assets/🗃 Archive/🗂️ Archive/Projects#Character Encoding Character set https phper shujuwajue com ji-chu zi-fu-chuan zi-fu-bian-ma|Unicode]] encoding.

for different JDK, `String` are stored in different way. for earlier versions, `String` is stored as `char[]`, while on recent versions `String` is encoded as `Byte` type.

## [Wrapper Class (包装类型)](https://www.liaoxuefeng.com/wiki/1252599548343744/1260473794166400)

There are two types of variable in Java:==Primitive & Reference.==

- Primitive: `byte`，`short`，`int`，`long`，`boolean`，`float`，`double`，`char` ...
- Reference: `class` (String, ), `interface` ... 

Primitive type CANNOT be referenced as an object, hence to realize this, use `Wrapper Class` : 
``` java
public class Integer {
    private int value;

    public Integer(int value) {
        this.value = value;
    }

    public int intValue() {
        return this.value;
    }
}

int initial_value = 0x3f3f3f;
Integer x = new Integer(initail_value);
Integer y = x.intValue();
```

 `java.lang`  defines every primitive type's `Wrapper class`, 

boolean | java.lang.Boolean
--|--
byte | java.lang.Byte
short | java.lang.Short
int | java.lang.Integer
long | java.lang.Long

###### auto boxing / auto unboxing

Compiler anc switch between `Integer` and `int` automatically. 

``` java
Integer n = 100; // 编译器自动使用Integer.valueOf(int)
int x = n; // 编译器自动使用Integer.intValue()
```

######  immutable (不变类)

All Wrapper Class are immutable: 

``` java
// look into the definition of Integer: 
public final class Integer {
    private final int value;
}
```

###### Static Factory Method（静态工厂方法）

 1. [Factory Method (工厂方法)](https://juejin.cn/post/6844903801510428686)
```java
public class StudentBuilder
{
    private String _name;
    private int _age = 14;      // this has a default
    private String _motto = ""; // most students don't have one

    public StudentBuilder() { }

    public Student buildStudent()
    {
        return new Student(_name, _age, _motto);
    }

    public StudentBuilder name(String _name)
    {
        this._name = _name;
        return this;
    }

    public StudentBuilder age(int _age)
    {
        this._age = _age;
        return this;
    }

    public StudentBuilder motto(String _motto)
    {
        this._motto = _motto;
        return this;
    }
}
```

```java
Student s1 = new StudentBuilder()
				 .name("Eli")
				 .buildStudent();
				 
Student s2 = new StudentBuilder()
				 .name("Spicoli")
				 .age(16) 
				 .motto("Aloha, Mr Hand")
				 .buildStudent();
```


2. Static Factory Method (静态工厂方法)

some methods can be accessed without an instance created first. such directly accessible method is `Static Factory Method`. 

for instance, to initialize an Integer type : 
1. creat an instance: `Integer n = new Integer(100);`
2. use Static Factory Method: `Integer n = Integer.valueOf(100)` --- ⭐️ ⭐️ recommanded; （内部缓存优化）

... other Static Factory Method: 
``` java
int x1 = Integer.parseInt("100"); // 100
int x2 = Integer.parseInt("100", 16); // 256,因为按16进制解析
```

###### `number` super class

``` java
// 向上转型为Number:
Number num = new Integer(999);
// 获取byte, int, long, float, double:
byte b = num.byteValue();
int n = num.intValue();
long ln = num.longValue();
float f = num.floatValue();
double d = num.doubleValue();
```

###### unsigned type

```java
public class Main {
    public static void main(String[] args) {
        byte x = -1;
        byte y = 127;
        System.out.println(Byte.toUnsignedInt(x)); // 255
        System.out.println(Byte.toUnsignedInt(y)); // 127
    }
}
```

## [JavaBean](https://www.liaoxuefeng.com/wiki/1252599548343744/1260474416351680)

If read & write method are in following format: 

```java
public Type getXyz()					// read method 
	
public void setXyz(Type value)			// write method
```

Then such Class is named as `JavaBean`.

- For `Blooean`, there is : 

```java
public boolean isChild()				// read method

public void setChild(boolean value)		// write method
```

- Use `Introspector` to enumerate `JavaBean` property.

>  ==There is NO so called 'property' of a class== in Java official documents. The name Property is more like a convention.  

JavaBean主要用来传递数据，即把一组数据组合成一个JavaBean便于传输。此外，JavaBean可以方便地被IDE工具分析，生成读写属性的代码，主要用在图形界面的可视化设计中。										---- 廖雪峰

Example code: 

```java
import java.beans.*;

public class javahelloword {
    public static void main(String[] args) throws Exception {
        BeanInfo info = Introspector.getBeanInfo(Person.class);
        for (PropertyDescriptor pd : info.getPropertyDescriptors()) {
            System.out.println(pd.getName());
            System.out.println("  " + pd.getReadMethod());
            System.out.println("  " + pd.getWriteMethod());
        }
    }
}

class Person {
    private String name;
    private int age;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}

```



## [Enumerate](https://www.liaoxuefeng.com/wiki/1252599548343744/1260473188087424)

```java
public class javahelloword{
	public static void main(String... args){
		Whoswho item = Whoswho.The_eagles;
		switch(item){
			case miro -> System.out.println(item.name());
			case mickle -> System.out.println(item.toString());
			default -> throw new RuntimeException("attension!!! this is a RuntimeException!");
		}
	}
}

enum Whoswho{											// Whoswho is a class,

	miro("rank", 1), 									// enumerated items are class too.
	mickle("rank", 2),
	The_eagles("idk🤷‍♀️", 99),
	anothername("wuwuwu",3);

	
	private final String name;
	private final int n;

	private Whoswho(String i, int n){
		this.name = i;
		this.n = n;
	}

	// private Whoswho(){
	// 	System.out.print("this is an empty method!");
	// }

	@Override
	public String toString(){
		return this.name;
	}

}

```



## [Record](https://www.liaoxuefeng.com/wiki/1252599548343744/1331429187256353)

Use Record Class to effectively define `immutable`;

Use `Compact Cunstructor` to costumize parameters;

Costumized Static Factory method supported.

```java
public class study{
	public static void main(String... args){
		// testf item = new testf(10, -11);					// Exception thrown
		testf item = new testf(10, 11);
		System.out.println(item.x() + item.y());
		item.testmethord(1, 2, 3);

		testcopy iitem = new testcopy(10, 9);
		testf item_fake = new testf(10, 11);
		testf item_real = item; 

		if(iitem.xx() == item.x()){
			System.out.println("== successfully done!");
		}
		if(iitem.xx() == item_fake.x()){
			System.out.println("fake == successfully done!");
		}
		if(iitem.xx() == item_real.x()){
			System.out.println("real == successfully done!");
		}

		if(iitem.xx() === item.x()){
		System.out.println("== successfully done!");
		}

		if(iitem.equals(item.x())){
			System.out.println(" .equals successfully done!");
		}

		System.out.println(item.getClass());
		System.out.println(item.testc(10, "test").x());
		System.out.println(item.testc(10, "test").y());
    }
}

record testf(int x, int y){
	public testf{											// compact constructor
		if(x < 0 || y < 0){
			throw new IllegalArgumentException();
		}

		// this.x = yy;
		// this.y = xx;
	}

	public static testf testconstructor(){					// static factory method
		System.out.print("there is no parameter passing in!");
		return new testf(0 ,0);
	}

	public static testf testc(int xx, String yy){			// static factory method
		return new testf(xx, xx);
	}

	public static void testmethord(int z, int k, int u){	//static factory method
		System.out.println(z+k+u);
	}
}

record testcopy(int xx, int yy){}							// record class
```

##  [BigIneger & BigDecimal](https://www.liaoxuefeng.com/wiki/1252599548343744/1279768011997217)

```java
import java.math.BigInteger;
import java.math.BigDecimal;
import java.math.RoundingMode;

public class study{
	public static void main(String... args){
        BigInteger n = new BigInteger("999999").pow(99);
        BigInteger m = new BigInteger("123413");
        float f = n.floatValue();										// .floatValue, .intValue... derived from Number superclass
        System.out.println(f);
        System.out.println(m.longValueExact());
        
        BigDecimal N = new BigDecimal("123.456789000");					// 查看小数位 & 去尾零
        BigDecimal M = new BigDecimal("123456000");
        System.out.println(N.scale());
        System.out.println(M.scale());
        System.out.println(M.stripTrailingZeros());

        BigDecimal d1 = new BigDecimal("123.456");
		BigDecimal d2 = new BigDecimal("23.456789");
		BigDecimal d3 = d1.divide(d2, 10, RoundingMode.HALF_UP); 		// 保留10位小数并四舍五入
		// BigDecimal d4 = d1.divide(d2); 								// 报错：ArithmeticException，因为除不尽
        System.out.println(d3);
        // System.out.println(d4);

        BigDecimal a = new BigDecimal("3");								// 求余数
        BigDecimal b = new BigDecimal("2");
        BigDecimal[] dr = a.divideAndRemainder(b);
        System.out.println(dr);
        System.out.println(dr[0]);
        System.out.println(dr[1]);

    }
}
```

## [Utilities ](https://www.liaoxuefeng.com/wiki/1252599548343744/1260473555087392)

###### Math

###### Random

###### SecureRandom
