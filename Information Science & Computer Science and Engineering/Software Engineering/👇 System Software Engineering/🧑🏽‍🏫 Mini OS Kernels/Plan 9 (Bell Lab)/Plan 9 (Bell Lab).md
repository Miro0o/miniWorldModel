# Plan 9 (Bell Lab)

[TOC]



## Res
🏠 https://9p.io/plan9/about.html
🚧 


### Related Topics



## Intro
> 🔗 https://9p.io/plan9/about.html

Plan 9 from Bell Labs is a research system developed at Bell Labs starting in the late 1980s. Its original designers and authors were Ken Thompson, Rob Pike, Dave Presotto, and Phil Winterbottom. They were joined by many others as development continued throughout the 1990s to the present.

Plan 9 demonstrates a new and often cleaner way to solve most systems problems. The system as a whole is likely to feel tantalizingly familiar to Unix users but at the same time quite foreign.

In Plan 9, each process has its own mutable name space. A process may rearrange, add to, and remove from its own name space without affecting the name spaces of unrelated processes. Included in the name space mutations is the ability to _mount_ a connection to a file server speaking 9P, a simple file protocol. The connection may be a network connection, a pipe, or any other file descriptor open for reading and writing with a 9P server on the other end. Customized name spaces are used heavily throughout the system, to present new resources (e.g., the window system), to import resources from another machine (e.g., the network stack), or to browse backward in time (e.g., the dump file system).

Plan 9 is an operating system kernel but also a collection of accompanying software. The bulk of the software is predominantly new, written for Plan 9 rather than ported from Unix or other systems. The window system, compilers, file server, and network services are all freshly written for Plan 9. Although classic Unix programs like [](https://9p.io/magic/man2html/1/dc) [_dc_(1)](https://9p.io/magic/man2html/1/dc), [](https://9p.io/magic/man2html/1/ed) [_ed_(1)](https://9p.io/magic/man2html/1/ed), and even [](https://9p.io/magic/man2html/1/troff) [_troff_(1)](https://9p.io/magic/man2html/1/troff) have been brought along, they are often in an updated form. For example, _troff_ accepts Unicode documents encoded in UTF-8, as does the rest of the system.

The paper [Plan 9 from Bell Labs](https://9p.io/sys/doc/) gives a more in-depth introduction to the system.



## Ref
