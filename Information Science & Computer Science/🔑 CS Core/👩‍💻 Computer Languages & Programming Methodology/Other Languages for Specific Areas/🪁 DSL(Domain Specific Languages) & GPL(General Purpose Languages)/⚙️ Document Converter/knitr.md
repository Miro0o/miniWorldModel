# knitr

[TOC]



## Res
### Related Topics
↗ [Markdown](../Markup%20Languages/Markdown.md)
↗ [Sweave](Sweave.md)



## Intro
> 🔗 https://dept.stat.lsa.umich.edu/~jerrick/courses/stat701/notes/rmarkdown.html#fnref3

[knitr](https://yihui.name/knitr/), created by Yihui Xie, was created as a replacement for Sweave. Early version of knitr were compatible with Rnw files, though more recent versions drop that compatibility[1](https://dept.stat.lsa.umich.edu/~jerrick/courses/stat701/notes/rmarkdown.html#fn1)

The workhorse function in the knitr package is `knit`. By passing it a LaTeX file with knitr-compatible R chunks (a .Rnw file[2](https://dept.stat.lsa.umich.edu/~jerrick/courses/stat701/notes/rmarkdown.html#fn2)), it will execute the R code and generate a LaTeX file that can be passed to any LaTeX typesetter.

However, knitr is a more general engine than .Rnw to .pdf. Specifically, knitr works with RMarkdown and can output markdown files which are easy to convert to other formats.



## Ref

