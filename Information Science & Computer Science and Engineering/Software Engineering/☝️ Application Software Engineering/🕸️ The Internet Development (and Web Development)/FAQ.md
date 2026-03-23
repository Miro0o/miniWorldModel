# FAQ

[TOC]



## 👉 Web Frontend Buzzwords
#Web #frontend 

SaaS
https://en.wikipedia.org/wiki/Software_as_a_service

https://www.cisin.com/service/saas-development-services.htm


CGI
> Ref: 万法归宗——CGI - 果冻虾仁的文章 - 知乎 https://zhuanlan.zhihu.com/p/25013398

一个请求对应一个CGI， 一个CGI 对应一个进程。
FCGI 利用一个常驻内存的进程池提高了反应效率。
Java发明的Servlet技术也是一种常驻内存的网关通信技术，只不过它采用的是多线程而非进程。


URL/URI



## 👉 YAML / JSON /XML
#Web #frontend #yaml #json #xml #config 

YAML(YAL), JSON and XML are all widely used data serialization language.

- YAML stands for “*YAML Aint Markup Language*“.
- JSON stands for “*JavaScript Object Notation*“.
- XML is “*eXtensible Markup Language”* whereas YML is not a markup language.
- YAML uses indentation to define structured data. So each block in the YAML is differentiated by the number of white spaces.
- XML uses a tag to define the structure just like HTML.
- All three mentioned serialization language has same extension as their name. (.yaml for YAML, .json for JSON, .xml for XML). So it is easy to remember.
- In fact, file extensions are arbitrary for all the three data serialization standard. It is useful for the application and users to know what files format, type of the content and their data structure.

#### How to choose ?

TBD.. 


[YAML vs JSON vs XML | What is the Difference Between Them?]: https://www.csestack.org/yaml-vs-json-vs-xml-difference/



## 👉 `onclick` events
#python #Web #frontend #crawler #web_scraping

普通的爬虫或者网络库(比如说scrapy/urllib/requests)没有办法实现这样的功能，因为他们做到的事情跟你用迅雷等下载工具把网页文本下载回来了没什么区别。要实现访问后续网页，一般有两种解决方案。

1.自动控制浏览器访问，这里的浏览器可以是普通浏览器，也可以是占用资源较少的无窗口浏览器，主要因为浏览器有着解析js脚本的功能，可以做到跳转。实现方案一般是使用selenium+firefox或者selenium+phantomjs，网上可以找到很多教程，使用较为简单，但占用资源较多。

2.自己拦截请求或逆向网站前端代码，找到向服务器获取试卷代码的请求链接和格式，自己进行模拟，来获取试卷。

[How can I simulate onclick event in python? [closed]]: https://stackoverflow.com/questions/38298459/how-can-i-simulate-onclick-event-in-python



## 👉 Jekyll Related 
#jekyll

[Jekyll serve fails on Ruby 3.0 #8523](https://github.com/jekyll/jekyll/issues/8523)

[bundle exec jekyll serve: cannot load such file](https://stackoverflow.com/questions/65989040/bundle-exec-jekyll-serve-cannot-load-such-file) 

[How to install a compatible version of jekyll-feed](https://talk.jekyllrb.com/t/how-to-install-a-compatible-version-of-jekyll-feed/3512) 

[定制jekyll主题以及github pages部署完全总结](https://blog.csdn.net/qq_41437512/article/details/123001445)

http://jekyllthemes.org/page2/

[jekyll-toc](https://github.com/allejo/jekyll-toc) 

[add navigation bar in githubpage](https://stackoverflow.com/questions/70223090/how-to-add-navigation-bar-in-github-jekyll-theme)


## 👉 Mix two colors in sass /css /scss
#sass #css #scss 

Use mix:
```css
background-color: mix($background-color, $primary-color, 92%);
```

Just to be a little more explicit as to how this is working. Let's take this for example:

`$mixed-color: mix($color1, $color2, 50%);`

There are really 3 different ways to think about that percentage value — use whichever works best in your own brain or for the situation at hand. ;)

1. Think of the percentage as a slider representing the amount of each color to mix in — with 0% being all the way to the "left" (`$color1`), 100% being all the way to the "right" (`$color2`), and 50% being in the middle (an equal amount of both colors).
2. The percentage sets the _opacity_ (100% being most opaque) of `$color1` on top of `$color2`.
3. The percentage sets the _transparency_ (100% being most transparent) of `$color2` on top of `$color1`.

So to get the color resulting from overlaying `$primary-color` at 8% opacity over `$background-color` either of the following will get you the same thing (although the first one is more how you were approaching it above):

```css
$primary-color-overlay: mix($primary-color, $background-color, 8%);
```
```css
$primary-color-overlay: mix($background-color, $primary-color, 92%);
```

[Mix two colors in sass | Stackoverflow]: https://stackoverflow.com/a/67179229/16542494



## 👉 `#{}` interpolation syntax | Accessing CSS variables from SCSS
#css #scss 

There are two parts in this expression, The `.` is the css class selector, `#{}`  [**interpolation**](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#interpolation_)syntax it allows the using of the variables in selectors and property names

```bash
$name: foo;
$attr: border;
p.#{$name} {
  #{$attr}-color: blue;
}
```

the generated css:

```css
p.foo {
  border-color: blue; }
```

[What does .# mean in SCSS? | Stackoverflow]: https://stackoverflow.com/a/38165377/16542494



## 👉 Differences between SCSS and Sass???
#scss #sass 

Sass is a CSS pre-processor with syntax advancements. Style sheets in the advanced syntax are processed by the program, and turned into regular CSS style sheets. However, they do **not**extend the CSS standard itself.

CSS variables are supported and can be utilized but not as well as pre-processor variables.

For the difference between SCSS and Sass, this text on the [Sass documentation page](https://sass-lang.com/documentation/syntax) should answer the question:

> The SCSS syntax uses the file extension `.scss`. With a few small exceptions, it’s a superset of CSS, which means essentially **all valid CSS is valid SCSS as well**. Because of its similarity to CSS, it’s the easiest syntax to get used to and the most popular.

> The indented syntax was Sass’s original syntax, and so it uses the file extension `.sass`. Because of this extension, it’s sometimes just called “Sass”. The indented syntax supports all the same features as SCSS, but it uses indentation instead of curly braces and semicolons to describe the format of the document.

However, **all this works only with the Sass pre-compiler** which in the end creates CSS. It is not an extension to the CSS standard itself.

---
I'm one of the developers who helped create Sass.

The difference is syntax. Underneath the textual exterior they are identical. This is why sass and scss files can import each other. Actually, Sass has four syntax parsers: scss, sass, CSS, and less. All of these convert a different syntax into an [Abstract Syntax Tree](http://en.wikipedia.org/wiki/Abstract_syntax_tree) which is further processed into CSS output or even onto one of the other formats via the sass-convert tool.

Use the syntax you like the best, both are fully supported and you can change between them later if you change your mind.


[What's the difference between SCSS and Sass? | Stackoverflow]: https://stackoverflow.com/a/5732683/16542494




## 👉 Include `.scss` file in another `.scss.` file?
#scss 

[Include `.scss` file in another `.scss.` file? | Stackoverflow]: https://stackoverflow.com/a/38722074/16542494
[@import | Sass documentation]: https://sass-lang.com/documentation/at-rules/import/



## 👉 Add dark mode support?
#css #scss #sass #dark_mode 

[Troubleshootings /👉  $color2: "var(--accent-color)" is not a color for 'mix' | Dark Mode | Interaction of SCSS and CSS Variables](Troubleshootings.md#👉%20$color2:%20"var(--accent-color)"%20is%20not%20a%20color%20for%20`mix`%20|%20Dark%20Mode%20|%20Interaction%20of%20SCSS%20and%20CSS%20Variables)


[暗黑模式-前端视角分析从零到一实现原理]: https://juejin.cn/post/6977191814096912397

[Add dark mode support on your website with SASS and prefers-color-scheme media query]: https://www.fabrizioduroni.it/2020/05/20/dark-mode-css-sass-scss/
[Dark mode, and the interaction of SCSS and CSS variables]: https://prose.nsood.in/dark-mode-scss
