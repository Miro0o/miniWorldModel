# Sundown

[TOC]



## Res
🏠 https://github.com/vmg/sundown



## Intro
`Sundown` is **a Markdown parser** based on the original code of the [Upskirt library](http://fossil.instinctive.eu/libupskirt/index) by Natacha Porté.


### Features
- **Fully standards compliant**
  `Sundown` passes out of the box the official Markdown v1.0.0 and v1.0.3 test suites, and has been extensively tested with additional corner cases to make sure its output is as sane as possible at all times.

- **Massive extension support**
  `Sundown` has optional support for several (unofficial) Markdown extensions, such as non-strict emphasis, fenced code blocks, tables, autolinks, strikethrough and more.

- **UTF-8 aware**
  `Sundown` is fully UTF-8 aware, both when parsing the source document and when generating the resulting (X)HTML code.

- **Tested & Ready to be used on production**
  `Sundown` has been extensively security audited, and includes protection against all possible DOS attacks (stack overflows, out of memory situations, malformed Markdown syntax...) and against client attacks through malicious embedded HTML.

  We've worked very hard to make `Sundown` never crash or run out of memory under *any* input. `Sundown`renders all the Markdown content in GitHub and so far hasn't crashed a single time.

- **Customizable renderers**
  `Sundown` is not stuck with XHTML output: the Markdown parser of the library is decoupled from the renderer, so it's trivial to extend the library with custom renderers. A fully functional (X)HTML renderer is included.

- **Optimized for speed**
  `Sundown` is written in C, with a special emphasis on performance. When wrapped on a dynamic language such as Python or Ruby, it has shown to be up to 40 times faster than other native alternatives.

- **Zero-dependency**
  `Sundown` is a zero-dependency library composed of 3 `.c` files and their headers. No dependencies, no bullshit. Only standard C99 that builds everywhere.



### Bindings
`Sundown` is available from other programming languages thanks to these bindings developed by our awesome contributors.

- [Redcarpet](https://github.com/vmg/redcarpet) (Ruby)
- [RobotSkirt](https://github.com/benmills/robotskirt) (Node.js)
- [Misaka](https://github.com/FSX/misaka) (Python)
- [ffi-sundown](https://github.com/postmodern/ffi-sundown) (Ruby FFI)
- [Sundown HS](https://github.com/bitonic/sundown) (Haskell)
- [Goskirt](https://github.com/madari/goskirt) (Go)
- [Upskirt.go](https://github.com/buu700/upskirt.go) (Go)
- [MoonShine](https://github.com/brandonc/moonshine) (.NET)
- [PHP-Sundown](https://github.com/chobie/php-sundown) (PHP)
- [Sundown.net](https://github.com/txdv/sundown.net) (.NET)




## Ref

