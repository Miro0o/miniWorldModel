# Nmap Scripting Engine (NSE)

[TOC]



## Res
📂 https://nmap.org/book/man-nse.html
📂 [Chapter 9, _Nmap Scripting Engine_](https://nmap.org/book/nse.html "Chapter 9. Nmap Scripting Engine")


## Intro
The Nmap Scripting Engine (NSE) is one of Nmap's most powerful and flexible features. It allows users to write (and share) simple scripts (using the [Lua programming language](http://lua.org/) ) to automate a wide variety of networking tasks. Those scripts are executed in parallel with the speed and efficiency you expect from Nmap. Users can rely on the growing and diverse set of scripts distributed with Nmap, or write their own to meet custom needs.

Tasks we had in mind when creating the system include network discovery, more sophisticated version detection, vulnerability detection. NSE can even be used for vulnerability exploitation.

To reflect those different uses and to simplify the choice of which scripts to run, each script contains a field associating it with one or more categories. Currently defined categories are `auth`, `broadcast`, `default`. `discovery`, `dos`, `exploit`, `external`, `fuzzer`, `intrusive`, `malware`,`safe`, `version`, and `vuln`. These are all described in [the section called “Script Categories”](https://nmap.org/book/nse-usage.html#nse-categories "Script Categories").

Scripts are not run in a sandbox and thus could accidentally or maliciously damage your system or invade your privacy. Never run scripts from third parties unless you trust the authors or have carefully audited the scripts yourself.



## Ref

