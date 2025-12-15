# Use After Free

[TOC]



## Res
### Related Topics



## Intro
> 🔗 https://textbook.cs161.org/memory-safety/vulnerabilities.html#36-other-memory-safety-vulnerabilities

“Use after free” bugs, where an object or structure in memory is deallocated (freed) but still used, are particularly attractive targets for exploitation. Exploiting these vulnerabilities generally involve the attacker triggering the creation of two separate objects that, because of the use-after-free on the first object, actually share the same memory. The attacker can now use the second object to manipulate the interpretation of the first object.



## Ref

