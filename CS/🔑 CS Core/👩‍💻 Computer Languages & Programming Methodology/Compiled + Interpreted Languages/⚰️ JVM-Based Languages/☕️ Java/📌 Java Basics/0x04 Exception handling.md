# [Exception handing](https://www.liaoxuefeng.com/wiki/1252599548343744/1255943543190176)
```ascii
Java Throwable class : 
                     ┌───────────┐
                     │  Object   │
                     └───────────┘
                           ▲
                           │
                     ┌───────────┐
                     │ Throwable │
                     └───────────┘
                           ▲
                 ┌─────────┴─────────┐
                 │                   │
           ┌───────────┐       ┌───────────┐
           │   Error   │       │ Exception │
           └───────────┘       └───────────┘
                 ▲                   ▲
         ┌───────┘              ┌────┴──────────┐
         │                      │               │
┌─────────────────┐    ┌─────────────────┐┌───────────┐
│OutOfMemoryError │... │RuntimeException ││IOException│...
└─────────────────┘    └─────────────────┘└───────────┘
                                ▲
                    ┌───────────┴─────────────┐
                    │                         │
         ┌─────────────────────┐ ┌─────────────────────────┐
         │NullPointerException │ │IllegalArgumentException │...
         └─────────────────────┘ └─────────────────────────┘

Error: serious fault, usually irrelevant to process per se. 
-> OutOfMemoryError：内存耗尽
-> NoClassDefFoundError：无法加载某个Class
-> StackOverflowError：栈溢出

Exception: runtime fault, usually programme's logical fault. 
-> NumberFormatException：数值类型的格式错误
-> FileNotFoundException：未找到文件
-> SocketException：读取网络失败
```

Java规定：

-   必须捕获的异常，包括`Exception`及其子类，但不包括`RuntimeException`及其子类，这种类型的异常称为Checked Exception。
    
-   不需要捕获的异常，包括`Error`及其子类，`RuntimeException`及其子类。

```ascii
Exception (RuntimeException + NonRuntimeException)
│
├─ RuntimeException
│  │
│  ├─ NullPointerException
│  │
│  ├─ IndexOutOfBoundsException
│  │
│  ├─ SecurityException
│  │
│  └─ IllegalArgumentException
│     │
│     └─ NumberFormatException
│
├─ IOException
│  │
│  ├─ UnsupportedCharsetException
│  │
│  ├─ FileNotFoundException
│  │
│  └─ SocketException
│
├─ ParseException
│
├─ GeneralSecurityException
│
├─ SQLException
│
└─ TimeoutException
```

