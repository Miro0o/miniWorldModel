# Sweave

[TOC]



## Res
### Related Topics
↗ [Markdown](../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20&%20Formats/Markup%20Languages%20&%20Data%20Representation/Markdown.md)
↗ [knitr](knitr.md)



## Intro
> 🔗 https://dept.stat.lsa.umich.edu/~jerrick/courses/stat701/notes/rmarkdown.html#fnref3

Before knitr was created, the original software for combining embedding R code inside LaTeX documents was [Sweave](https://stat.ethz.ch/R-manual/R-devel/library/utils/doc/Sweave.pdf). Sweave files generally have the extension .Rnw and are complete LaTeX files with R “chunks” which should produce the desired output. For example, in the middle of a LaTeX file an author may wish to include a plot. They could use the following chunk:

```
<<>>=
data("airquality")
plot(airquality$Ozone ~ airquality$Wind)
@
```

Options can be passed into the `<<>>=` header, for example we can name a chunk (to allow `\ref` calls to it later) and define the size of the figure:

```
<<plot1, height=4, width=5>>=
```

Note that not all chunks have to produce output. If you are writing a publication, you may only want to include some key lines of code, but you need preprocessing code before they will work. You can suppress output with the argument `results=hide`. Alternatively, you can include properly formatted and syntax highlighted R code that isn’t actually run by `eval=FALSE`.

Once you have created your .Rnw file, the function `Sweave` will process the file, executing the R chunks and replacing them with output as appropriate before creating the PDF document.

However, Sweave has fallen out of fashion lately with the advent of knitr. Knitr offers everything Sweave does, plus it extends it further. With Sweave, additional tools are required for advanced operations, whereas knitr supports more internally. In addition, Sweave is old and has some legacy issues connected to that, such as fragile handling of graphics.



## Ref

