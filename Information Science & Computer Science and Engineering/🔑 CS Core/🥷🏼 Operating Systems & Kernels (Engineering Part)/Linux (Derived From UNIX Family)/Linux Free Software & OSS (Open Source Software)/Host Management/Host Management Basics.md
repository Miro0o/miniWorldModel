# Host Management Basics

[TOC]



## Res
### Related Topics



## Shell
↗ [Shell & Terminals (Console)](../../../🐚%20Shell%20&%20Terminals%20(Console)/Shell%20&%20Terminals%20(Console).md)


### Env Variable
> 🖇 [How to Set and List Environment Variables in Linux](https://linuxize.com/post/how-to-set-and-list-environment-variables-in-linux/)
#### What is `env variables`
In Linux and Unix based systems **environment variables are a set of dynamic named values**, stored within the system that are used by applications launched in shells or subshells. In simple words, an environment variable is a variable with a name and an associated value.

Environment variables allow you to customize how the system works and the behavior of the applications on the system. For example, the environment variable can store information about the default [text editor](https://linuxize.com/post/how-to-use-nano-text-editor/) or browser, the path to executable files, or the system locale and keyboard layout settings.
#### How to list `env variables`
There are several commands available that allow you to list and set environment variables in Linux:

For `environment variables`:
- `env` – The command allows you to run another program in a custom environment without modifying the current one. When used without an argument it will print a list of the current environment variables.
- `printenv` – The command prints all or the specified environment variables.

For `environment variables` & `shell variables`: 
- `set` – The command sets or unsets shell variables. When used without an argument it will print a list of all variables including environment and shell variables, and shell functions.
- `unset` – The command deletes shell and environment variables.
- `export` – The command sets environment variables.



## Machine Operation
### Machine Booting

#### Booting from USB
[Rufus](https://rufus.ie/en/)

[在实体PC机上安装Linux系统](https://blog.csdn.net/Blazar/article/details/79168116)


### Machine Shutting Down
```shell
reboot

shutdown 

halt

poweroff

init 
```

 [Linux关机和重启命令]: http://c.biancheng.net/view/793.html



## Ref
[👍 Linux服务器常用巡检命令 | 微信公众号]: https://mp.weixin.qq.com/s/IjHS2l9166mMTt-Vymo3Fg


