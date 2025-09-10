# POSIX Regex

[TOC]



## Res
### Related Topics




## Intro
> 🔗 https://en.wikipedia.org/wiki/Regular_expression#Standards

The [IEEE](https://en.wikipedia.org/wiki/Institute_of_Electrical_and_Electronics_Engineers "Institute of Electrical and Electronics Engineers") [POSIX](https://en.wikipedia.org/wiki/POSIX "POSIX") standard has three sets of compliance: **BRE** (Basic Regular Expressions), **ERE** (Extended Regular Expressions), and **SRE** (Simple Regular Expressions). 
- **SRE** is deprecated, in favor of BRE, as both provide backward compatibility. 
- **BRE** and **ERE** work together. ERE adds `?`, `+`, and `|`, and it removes the need to escape the meta-characters `( )` and `{ }`, which are required in BRE. 
- Furthermore, as long as the POSIX standard syntax for regexes is adhered to, there can be, and often is, additional syntax to serve specific (yet POSIX compliant) applications. Although POSIX.2 leaves some implementation specifics undefined, BRE and ERE provide a "standard" which has since been adopted as the default syntax of many tools, where the choice of BRE or ERE modes is usually a supported option.
	- For example, [GNU](https://en.wikipedia.org/wiki/GNU "GNU") `grep` has the following options: "`grep -E`" for ERE, and "`grep -G`" for BRE (the default), and "`grep -P`" for [Perl](https://en.wikipedia.org/wiki/Perl "Perl") regexes.



## Ref
[👍 Posix Basic Regular Expressions | GeeksforGeeks]: https://www.geeksforgeeks.org/posix-basic-regular-expressions/

One of the standards of POSIX defines two methods for using regular expressions. “`grep`” and “`egrep`” is used to implement regular expressions on POSIX systems.

In POSIX Basic Regex syntax, most chars are treated as literals, i.e. they match only themselves (e.g. _**j**will match with “**j**“_). However, there are some exceptions, which are called **`Metacharacters`**.


