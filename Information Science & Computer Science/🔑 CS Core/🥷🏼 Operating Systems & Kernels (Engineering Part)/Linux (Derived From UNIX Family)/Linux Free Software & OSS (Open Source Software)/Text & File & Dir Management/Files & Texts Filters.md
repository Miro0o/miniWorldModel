# File & Texts Filters

[TOC]



## Res



## File Filters /Finders
### 👉 fd
fd is a simple, fast and user-friendly alternative to find(1).

By default fd uses regular expressions for the pattern. However, this can be

changed to use simple glob patterns with the '--glob' option.


**`fd`**
`fd` is an alternative to `find`. Aims to be faster and easier to use than `find`.

```shell
 cheat:fd
# Simple search:
fd <search query>

# Specifying the root directory for the search:
fd <search query> <directory>

# Searching for a particular file extension:
fd -e <file extension> <search query>

# Searching for a particular file name:
fd -g <file name>.<file extension>

# Search for hidden and ignored files:
fd -H <search query>

# Excluding specific files or directories:
fd -E <file or directories which should be excluded> <search query>
```


### 👉 `find`
```shell
# Find all directories named src
find . -name src -type d
# Find all python files that have a folder named test in their path
find . -path '*/test/*.py' -type f
# Find all files modified in the last day
find . -mtime -1
# Find all zip files with size in range 500k to 10M
find . -size +500k -size -10M -name '*.tar.gz'
# Delete all files with .tmp extension
find . -name '*.tmp' -exec rm {} \;
# Find all PNG files and convert them to JPG
find . -name '*.png' -exec convert {} {}.jpg \;
```

[Linux find 命令 | 菜鸟]: https://www.runoob.com/linux/linux-comm-find.html
[Find 命令介绍]: https://wangchujiang.com/linux-command/c/find.html


### 👉 `locate`
- ` sudo /usr/libexec/locate.updatedb`

🔗 [locate vs find: usage, pros and cons of each other](https://unix.stackexchange.com/questions/60205/locate-vs-find-usage-pros-and-cons-of-each-other) 



## Text Filters /Finders
### 👉 `grep` (`GNU grep` & `BSD grep`) | `xgrep`
📃 https://www.man7.org/linux/man-pages/man1/grep.1.html

↗ [regex (Regular Expression) /Implementations and Running Times](../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20for%20Specific%20Areas/🪁%20DSL(Domain%20Specific%20Languages)%20&%20GPL(General%20Purpose%20Languages)/📌%20regex%20(Regular%20Expression)/regex%20(Regular%20Expression).md#Implementations%20and%20Running%20Times)

> `grep`, `egrep`, `fgrep`, `rgrep`, `bzgrep`, `bzegrep`, `bzfgrep`, `zgrep`, `zegrep`, `zfgrep` – file pattern searcher

**`grep`** is a command-line utility for searching plain-text data sets for lines that match a regular expression. Its name comes from the [ed](https://en.wikipedia.org/wiki/Ed_(text_editor) "Ed (text editor)") command `g/re/p`(_**g**lobal / **r**egular **e**xpression search **/** and **p**rint_), which has the same effect.`grep` was originally developed for the Unix operating system, but later available for all Unix-like systems and some others such as [OS-9](https://en.wikipedia.org/wiki/OS-9 "OS-9")


[grep | Wikipeida]: https://en.wikipedia.org/wiki/Grep
[Grep Command in Linux (Find Text in Files)]: https://linuxize.com/post/how-to-use-grep-command-to-search-files-in-linux/

[Learning Grep – Searching for content on Linux/Mac]: https://xebia.com/blog/learning-grep/

The difference between the BSD and GNU version of Grep is the Regex engine that it uses. The BSD version uses the [POSIX Compatible Regular Expressions](https://en.wikipedia.org/wiki/Regular_expression#POSIX) and the GNU version uses the [Perl Compatible Regular Expressions (PCRE)](https://en.wikipedia.org/wiki/Perl_Compatible_Regular_Expressions). The short explanation of the difference is that the GNU version of grep is much easier to use.


### 👉 `ack`
📃 [ack](https://github.com/beyondgrep/ack3)


### 👉 `ag`
📃 [ag](https://github.com/ggreer/the_silver_searcher) (The Silver Search)


### 👉 `rg`
📃 [rg](https://github.com/BurntSushi/ripgrep) (Ripgrep)



## Finding Shell CMDs
### 👉 `history`

`Ctrl+R`: perform backwards search 

- [fzf](https://github.com/junegunn/fzf/wiki/Configuring-shell-key-bindings#ctrl-r) can be enabled for `Ctrl + R` after activated in `oh-my-zsh` (?)

> You can modify your shell’s history behavior, like preventing commands with a leading space from being included. This comes in handy when you are typing commands with passwords or other bits of sensitive information. To do this, add `HISTCONTROL=ignorespace` to your `.bashrc` or `setopt HIST_IGNORE_SPACE` to your `.zshrc`. If you make the mistake of not adding the leading space, you can always manually remove the entry by editing your `.bash_history` or `.zhistory`.


**history-based autosuggestions**



## File Comparison
### Text Interface
#### 👉 `diff`

> 注意，diff 命令能够分析并输出两个文件的不同的行。diff 的输出结果表明需要对一个文件做怎样的操作之后才能与第二个文件相匹配（与第一个文件相比，第二个文件发生了哪些变化），其中包含三种操作分别为：a=add，c=change，d=delete。diff 命令并不会改变文件的内容，但是 diff 可以输出一个 ed 脚本来应用这些改变。

```shell
[root@bogon ~]# diff test test1  
3c3  
<  
---  
> aa

7c7  
<  
---  
> bb

9,10d8  
< 77  
<


# 输出信息的含义分别为：
# - < 表示第一个文件中的数据行。
# - > 表示第二个文件中的数据行。
# - “3c3”：表示第一个文件的第 3 行需要修改才能和第二个文件的第3行相匹配；
# - “---”：表示分隔线；
# - “>aa”：> 表示第二个文件，第一个文件中需要添加的内容为 aa，该内容存放在第二个文件中；
# - “>bb”：> 表示第二个文件，第一个文件中需要添加的内容为 bb，该内容存放在第二个文件中；
# - “9，10d8”：表示删除第一个文件中的第 9 和第 10 行才能和第二个文件中的第 8 行相匹配；
# - “<77”：表示第一个文件中待删除的内容为 77。
```

##### `diff` + `tree`

##### `diff` + `find`

#### 👉 `rsync`


### Graphics Interface
#### 👉 `vimdiff`

#### 👉 `meld` (python)



## Ref
[Linux diff --比较两个文件并输出不同之处 | CSDN]: https://blog.csdn.net/mosesmo1989/article/details/51093631

[👍 Linux下快速比较两个目录的不同 | cnblog]: https://www.cnblogs.com/f-ck-need-u/p/9071033.html

[bash：如何直接diff两条命令的输出 | CSDN]: https://blog.csdn.net/imred/article/details/124740947

process substitution有两种形式：
第一种：
```shell
<(command)
>(command)
```
其中第一种比较常用，它会创建一个文件（实际上是一个命名管道），`command`的标准输出会被重定向到这个文件中，然后`<(command)`整体会被替换为这个文件路径，我们可以从下面的命令以及输出中观察上述过程：
```shell
$ echo <(ls)  
/dev/fd/63

$ file <(ls)  
/dev/fd/63: symbolic link to pipe:[9008834]

$ ls -lh <(ls)  
lr-x------ 1 root root 64 May 12 14:32 /dev/fd/63 -> ‘pipe:[9008840]’

$ cat <(ls)  
a.out  
a.out.full  
a.txt  
b.txt  
main.cpp

```
使用`echo`命令将传给它的命令行参数进行输出，我们看到`<(ls)`被替换成了一个文件，`/dev/fd/63`。使用`file`和`ls`检查这个文件，发现它是一个符号链接，指向一个管道。使用`cat`输出这个文件的内容，可以看出来正是`ls`命令标准输出的内容。

process substitution的第二种形式`>(command)`同样也会创建一个文件，并且整体同样会被替换为这个文件的路径。与第一种形式不同的地方在于，`command`命令会把这个文件中的内容作为标准输入使用，而不是把标准输出重定向到这个文件。

第二种形式通常要与重定向配合使用，就像这样：
```shell
$ls > >(tee)
```

`ls`命令会将标准输出重定向到一个临时创建的命名管道中，这个命名管道中的内容会作为`tee`命令的标准输入，而`tee`命令会把标准输入原样打印到标准输出，因此你最终会看到`ls`的输出。

而这样使用是没有什么意义的：
```shell
$ls >(tee)
```

你只会看到`>(tee)`被替换成的文件路径：
```shell
/dev/fd/63
```

[Linux下使用使用管道时多个参数的问题的解决方案 | CSDN]: https://blog.csdn.net/zw0283/article/details/50115569
