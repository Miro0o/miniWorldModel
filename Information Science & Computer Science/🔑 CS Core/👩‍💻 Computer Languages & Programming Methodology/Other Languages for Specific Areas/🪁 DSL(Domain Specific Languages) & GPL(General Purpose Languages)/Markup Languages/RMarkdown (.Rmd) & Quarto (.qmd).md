# RMarkdown (.Rmd) & Quarto (.qmd)

[TOC]



## Res
🏠 https://quarto.org/
🏠 https://rmarkdown.rstudio.com/
🚧 


### Related Topics
↗ [RStudio](../../../../../Software%20Engineering/CASE%20(Computer-Aided%20Software%20Engineering)%20Tools/Lower%20CASE%20Tools/IDE%20(Integrated%20Development%20Environment)/📌%20Language%20Specific%20IDE/RStudio.md)
↗ [R Language](../../../Interpreted%20Languages/R%20Language/R%20Language.md)

↗ [Project Jupyter (Julia, Python, R)](../../../Interpreted%20Languages/🐍%20Python/Python%20Applications%20&%20Programming/Python%20GUI%20Application/Project%20Jupyter%20(Julia,%20Python,%20R).md)
↗ [👍 Tex & LaTex](👍%20Tex%20&%20LaTex.md)

↗ [Document Converter](../⚙️%20Document%20Converter/Document%20Converter.md)
↗ [Pandoc](../⚙️%20Document%20Converter/Pandoc.md)
↗ [Blogdown](../⚙️%20Document%20Converter/Blogdown.md)



## Intro
### `RMarkdown`
> 🔗 https://dept.stat.lsa.umich.edu/~jerrick/courses/stat701/notes/rmarkdown.html

`RMarkdown` is an extension to markdown which includes the ability to embed code chunks and several other extensions useful for writing technical reports.

The `rmarkdown` package extends the `knitr` package to, in one step, allow conversion between an `RMarkdown` file (`.Rmd`) into PDF, HTML, word document, amongst others. The main function is `render` which can be used as follows:
```
library(rmarkdown)
library(knitr)
render("file.Rmd", "html_document")
render("file.Rmd", "pdf_document")
render("file.Rmd", "word_document")
```

See [this Rstudio page](http://rmarkdown.rstudio.com/formats.html) for a list of all the output formats supported. Behind-the-scenes, the conversions are typically done using [pandoc](http://pandoc.org/) which we will not cover here.

> 🔗 https://www.math.pku.edu.cn/teachers/lidf/docs/Rbook/html/_Rbook/intro.html#intro-rstudio-shortcuts

在科学研究中， R软件可以用来分析数据， 生成数据分析报表和图形。 Quarto(简称Qmd)是一种特殊的文件格式， 在这种文件中， 既有R程序， 又有说明文字， 通过R和RStudio软件， 可以运行其中的程序， 并将说明文字、程序、程序的文字结果、图形结果统一地转换为一个研究报告， 支持Word、PDF、网页、网站、幻灯片等许多种输出格式。 在打开的Qmd源文件中， 也可以选择其中的某一段R程序单独运行。 所以， Qmd文件也可以作为一种特殊的R源程序文件。

用RStudio的“File – New File – Quarto Document”菜单就可以生成一个新的Qmd文件并显示在编辑窗格中， 其中已经有了一些样例内容， 可以修改这些样例内容为自己的文字和程序。

Qmd文件中用` ```{r} `开头， 用` ``` `结尾的段落是R程序段， 在显示的程序段的右侧有一个向右箭头形状的小图标（类似于媒体播放图标）， 点击该图标就可以运行该程序段。

打开Qmd文件后， 用编辑窗口的Render命令可以选择将文件整个地转换为HTML(网页)或者MS Word格式， 如果操作系统中安装有LaTeX软件， 还可以以LaTeX为中间格式转换为PDF文件。

为了将网页转换为PDF文件， 建议使用Chrome浏览器打开HTML文件， 然后选择菜单“打印”， 选打印机为“另存为PDF”， 然后选“更多设置”， 将其中的“缩放”改为自定义， 比例改为“90%”。

详见[20](https://www.math.pku.edu.cn/teachers/lidf/docs/Rbook/html/_Rbook/knitr.html#knitr)、[21](https://www.math.pku.edu.cn/teachers/lidf/docs/Rbook/html/_Rbook/markdown.html#markdown)、[22](https://www.math.pku.edu.cn/teachers/lidf/docs/Rbook/html/_Rbook/quarto.html#quarto)。


### Quarto
> 🔗 https://www.math.pku.edu.cn/teachers/lidf/docs/Rbook/html/_Rbook/quarto.html

[Quarto](https://quarto.org/)是POSIT(原RStudio)团队开发的一个开源软件， 可以将包含R、Python、Julia、Observable JS源程序的markdown文件产生运行结果后转换为各种输出格式， 这些源文件可以是普通的包含程序代码的markdown文件(扩展名为`.qmd`)， 也可以是Jupyter笔记本文件(扩展名为`.ipynb`)。 支持HTML、MS Word、LaTeX PDF、ePub、网站、幻灯片等多种输出格式。

软件基于Pandoc的扩展的markdown文件转换功能。 在转换前， 会运行其中的源程序， 将得到的文字、表格、图形结果插入到文档中。 可以在R的knitr包支持下运行这些程序， 也可以在Jupyter软件的支持下运行。

有另外一种较早的“R Markdown”格式， 与quarto格式相似， 但是R markdown主要针对R语言用户， 而quarto软件则可以支持多种编程语言， 可以适用于更广泛的程序语言用户。

现在qmd格式还有一些不完善的地方， 比如多行公式编号还没有实现， 仅能对一个公式使用统一编号。(?)


**简单样例文件**

Quarto可以用来生成多个源文件组成的图书、网站， 但最简单的用法是用单个源文件生成单个的网页、Word、PDF文件结果。 在RStudio中， 可以用“File – New File – Quarto Document”菜单生成一个包含模板内容的空文件。 在文件开头， 一般有用三个减号组成的行在首尾界定的一部分， 称为YAML属性设置。 后面是正文内容。 一个简单的文件如：

```
---
title: "演示基本功能"
format: html
---
```

````
## 格式介绍

Quarto格式基于markdown格式与pandoc软件，
可以转换“.qmd”和“.ipynb”(Jupyter笔记本)格式的文件，
参见<https://quarto.org>.

## R代码

可以用如下方法插入R代码段：

```{r}
1 + 1
```

可以用“`#|`”添加特殊注释，
作为代码段属性，如：

```{r}
#| echo: false
2 * 2
```
````



## Ref
