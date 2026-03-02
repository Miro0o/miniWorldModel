# BurpSuite

[TOC]



## Res
📂 https://portswigger.net/burp/documentation
- https://portswigger.net/burp/documentation/desktop


### Related Topics
↗ [BeautifulSoup](../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/🚠%20Application%20Runtimes%20&%20SDKs/Python%20Runtime%20Environments/📌%20Python%20Third-party%20Libs/SE%20&%20Web/BeautifulSoup.md)


### Other Resources
📚 [Burpsuite 实战指南](https://t0data.gitbooks.io/burpsuite/content/)

[burpsuite入门，实用教程](https://blog.csdn.net/qq_35544379/article/details/76696106)



## Intro



## Ref
[BurpSuite- x-Ai]: https://github.com/x-Ai/BurpSuite
[MacOS安装破解BurpSuite2022.3.9【持续更新】]: https://www.lzskyline.com/index.php/archives/121/
[Burp Suite 实战指南]: https://t0data.gitbooks.io/burpsuite/content/

[👍 👍 👍 Burp Suite Pro Loader & Keygen ( burp v1.7+ )]: https://github.com/h3110w0r1d-y/BurpLoaderKeygen/blob/main/how-to-use.md
本项目由以下项目整合而成 / This project is integrated by the following projects
- [https://github.com/x-Ai/BurpSuiteLoader](https://github.com/x-Ai/BurpSuiteLoader)
- BurpSuitePro Loader&Keygen By surferxyz
- [https://github.com/googleweb/loader](https://github.com/googleweb/loader)

[https://t.me/BurpLoaderKeygen](https://t.me/BurpLoaderKeygen)
[使用方法 | How to Use](https://github.com/h3110w0r1d-y/BurpLoaderKeygen/blob/main/how-to-use.md)

核心的patch代码和算号代码并不是我写的，本项目1.9版本后的破解方案来自这位大佬 @googleweb ，我只是把各位大佬的Loader和Keygen整合到一块加了点小功能方便使用
**项目仅供学习和交流使用，商业使用请购买正版软件！链接:[https://portswigger.net/burp](https://portswigger.net/burp)**

特性 / Features
- 检测Burp更新，如果不需要检测请勾选`Ignore Update`
- 不用编写脚本，自动启动burp，只需要勾选`Auto Run`
- 支持指定Java版本，只需要把指定版本的Java放到同目录下，注册机会自动调用
- 支持Java8+
- 支持BurpSuite v1.7+
- 支持BurpBounty
- Detect burp updates. If you don't need, please check `Ignore Update`
- Auto start burp without write command manually, just check `Auto Run`
- Support for specifying java versions, just put java files in same path
- Support Java 8+
- Support BurpSuite v1.7+
- Support BurpBounty

**Jar包未混淆，欢迎dalao们改进！**

食用方法
- 命令行
```
java -jar Burploaderkeygen.jar [-a|-auto [0|1]] [-i|-ignore [0|1]] [-n|-name <UserName>]
```

- Mac版食用方法
	- 安装Mac版Burp
	- 将注册机放置到`/Applications/Burp Suite Professional.app/Contents/Resources/app`目录下
	- 执行以下命令启动注册机
```
cd "/Applications/Burp Suite Professional.app/Contents/Resources/app"
"/Applications/Burp Suite Professional.app/Contents/Resources/jre.bundle/Contents/Home/bin/java" -jar BurpLoaderKeygen.jar
```

点击run启动Burp, 激活后关闭注册机
3. 修改`/Applications/Burp Suite Professional.app/Contents/vmoptions.txt`, 增加以下参数

```
--add-opens=java.base/java.lang=ALL-UNNAMED
--add-opens=java.base/java.lang=ALL-UNNAMED
--add-opens=java.base/jdk.internal.org.objectweb.asm=ALL-UNNAMED
--add-opens=java.base/jdk.internal.org.objectweb.asm.tree=ALL-UNNAMED
--add-opens=java.base/jdk.internal.org.objectweb.asm.Opcodes=ALL-UNNAMED
-javaagent:BurpLoaderKeygen.jar
-noverify
```

之后便可以正常启动了

如果报错说文件已损坏无法打开：
```
sudo xattr -r -d com.apple.quarantine /Applications/Burp\ Suite\ Professional.app
```
