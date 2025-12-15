# [precess control](https://www.liaoxuefeng.com/wiki/1252599548343744/1255943455934400)
## output
```java
System.out.println()
System.out.print()
System.out.printf() // formatting output
```

more on formatting output, see [java.util.Formatter](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Formatter.html#syntax)

## input
``` java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in); // 创建Scanner对象
        System.out.print("Input your name: "); // 打印提示
        String name = scanner.nextLine(); // 读取一行输入并获取字符串
        System.out.print("Input your age: "); // 打印提示
        int age = scanner.nextInt(); // 读取一行输入并获取整数
        System.out.printf("Hi, %s, you are %d\n", name, age); // 格式化输出
    }
}
```

other input methods: 
```java
scanner.nextInt()
scanner.nextDouble()
scanner.nextLine()
```

## if
`NullPointerException` 

`equals()`


## switch
```java
public class Main {
    public static void main(String[] args) {
        String fruit = "apple";
        switch (fruit) {
	        case "apple" -> System.out.println("Selected apple");
	        case "pear" -> System.out.println("Selected pear");
	        case "mango" -> {
	            System.out.println("Selected mango");
	            System.out.println("Good choice!");
		    }
	        default -> {
	            int code = fruit.hashCode();
                yield code; // switch语句返回值
            }
        }

		// switch return value 
		String fruit = "apple";
        int opt = switch (fruit) {
            case "apple" -> 1;
            case "pear", "mango" -> 2; // match multipal targets at a time
            default -> 0;
        }; // 注意赋值语句要以;结束
        System.out.println("opt = " + opt);
	
    }
}

```

## while & do while & for 
```java
int enum[];
for (int item : enum){
	/*
	* 
	*
	*/
}
```

# array operation
`Arrays.toString()`
`Arrays.sort()` 
- for array, `Arrays.sort` changes each element stored in the memory. 
- for string, `Arrays.sort` changes the referencing pointer, not the string element in actual memory. 

###### e.g.

1. before `Arrays.sort`: 

```ascii
      ┌───┬───┬───┬───┐
ns───>│ 9 │ 3 │ 6 │ 5 │
      └───┴───┴───┴───┘
```

```ascii
                   ┌──────────────────────────────────┐
               ┌───┼──────────────────────┐           │
               │   │                      ▼           ▼
         ┌───┬─┴─┬─┴─┬───┬────────┬───┬───────┬───┬──────┬───┐
ns ─────>│░░░│░░░│░░░│   │"banana"│   │"apple"│   │"pear"│   │
         └─┬─┴───┴───┴───┴────────┴───┴───────┴───┴──────┴───┘
           │                 ▲
           └─────────────────┘
```

2. after `Arrays.sort` : 


```ascii
      ┌───┬───┬───┬───┐
ns───>│ 3 │ 5 │ 6 │ 9 │
      └───┴───┴───┴───┘
```

```ascii
                   ┌──────────────────────────────────┐
               ┌───┼──────────┐                       │
               │   │          ▼                       ▼
         ┌───┬─┴─┬─┴─┬───┬────────┬───┬───────┬───┬──────┬───┐
ns ─────>│░░░│░░░│░░░│   │"banana"│   │"apple"│   │"pear"│   │
         └─┬─┴───┴───┴───┴────────┴───┴───────┴───┴──────┴───┘
           │                              ▲
           └──────────────────────────────┘
```

###### multidimensional array

`Arrays.deepToString()`

```ascii
ns[][][]

							  ┌───┬───┬───┐
                   ┌───┐  ┌──>│ 1 │ 2 │ 3 │
               ┌──>│░░░│──┘   └───┴───┴───┘
               │   ├───┤      ┌───┬───┬───┐
               │   │░░░│─────>│ 4 │ 5 │ 6 │
               │   ├───┤      └───┴───┴───┘
               │   │░░░│──┐   ┌───┬───┬───┐
        ┌───┐  │   └───┘  └──>│ 7 │ 8 │ 9 │
ns ────>│░░░│──┘              └───┴───┴───┘
        ├───┤      ┌───┐      ┌───┬───┐
        │░░░│─────>│░░░│─────>│10 │11 │
        ├───┤      ├───┤      └───┴───┘
        │░░░│──┐   │░░░│──┐   ┌───┬───┐
        └───┘  │   └───┘  └──>│12 │13 │
               │              └───┴───┘
               │   ┌───┐      ┌───┬───┬───┐
               └──>│░░░│─────>│14 │15 │16 │
                   ├───┤      └───┴───┴───┘
                   │░░░│──┐   ┌───┬───┐
                   └───┘  └──>│17 │18 │
                              └───┴───┘


```

