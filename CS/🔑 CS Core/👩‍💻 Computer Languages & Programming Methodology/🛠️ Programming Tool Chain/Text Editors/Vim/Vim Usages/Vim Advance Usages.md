# Vim Advance

[TOC]



## 🍪 Register
```shell
:help registers


There are ten types of registers:               registers {register} E354
1. The unnamed register ""
2. 10 numbered registers "0 to "9
3. The small delete register "-
4. 26 named registers "a to "z or "A to "Z
5. Three read-only registers ":, "., "%
6. Alternate buffer register "#
7. The expression register "=
8. The selection and drop registers "*, "+ and "~
9. The black hole register "_
10. Last search pattern register "/
```

Vim registers are spaces in memory that Vim uses to store some text or operation details. Each of these spaces has an identifier so that it can be accessed later.

When we want to reference a Vim register, we use a double quote followed by the register’s name. For instance, `“a` means the Vim register <span style="color:red">a</span> and `“:` means the Vim register <span style="color:red">:</span>.

In fact, **registers are used everywhere in Vim**. Let’s see some examples of common usages of Vim registers:
- When we remove texts – for example, using the *x* command – the deleted text is stored in the unnamed register “”
- Once we execute an *Ex* command (*:Command*) in Vim, the register *“:* holds the command
- When we search text by */somePattern*, the search pattern is stored in the *“/* register

#TODO 


[Using Vim Registers]: https://www.baeldung.com/linux/vim-registers
[Vim registers: The basics and beyond]: https://www.brianstorti.com/vim-registers/



## 🏍️ View & Representation
### Hex View
```shell
:%!hexdump -C
```



## ☎ Remote Control
↗ [Vim Remote](Vim%20Remote.md)




## Ref