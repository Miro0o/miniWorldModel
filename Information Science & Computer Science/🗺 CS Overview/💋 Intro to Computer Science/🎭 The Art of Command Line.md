# 👏  The Art of Command Line

[TOC]



## Res
### Related Topics



## Intro
![](../../../Assets/Pics/cowsay.png)

The full list of the content of this tutorial is as below: 
- [Meta](https://github.com/jlevy/the-art-of-command-line/blob/master/README.md#meta)
- [Basics](https://github.com/jlevy/the-art-of-command-line/blob/master/README.md#basics)
- [Everyday use](https://github.com/jlevy/the-art-of-command-line/blob/master/README.md#everyday-use)
- [Processing files and data](https://github.com/jlevy/the-art-of-command-line/blob/master/README.md#processing-files-and-data)
- [System debugging](https://github.com/jlevy/the-art-of-command-line/blob/master/README.md#system-debugging)
- [One-liners](https://github.com/jlevy/the-art-of-command-line/blob/master/README.md#one-liners)
- [Obscure but useful](https://github.com/jlevy/the-art-of-command-line/blob/master/README.md#obscure-but-useful)
- [macOS only](https://github.com/jlevy/the-art-of-command-line/blob/master/README.md#macos-only)
- [Windows only](https://github.com/jlevy/the-art-of-command-line/blob/master/README.md#windows-only)
- [More resources](https://github.com/jlevy/the-art-of-command-line/blob/master/README.md#more-resources)
- [Disclaimer](https://github.com/jlevy/the-art-of-command-line/blob/master/README.md#disclaimer)



## More resources
- [awesome-shell](https://github.com/alebcay/awesome-shell): A curated list of shell tools and resources.
- [awesome-osx-command-line](https://github.com/herrbischoff/awesome-osx-command-line): A more in-depth guide for the macOS command line.
- [Strict mode](http://redsymbol.net/articles/unofficial-bash-strict-mode/) for writing better shell scripts.
- [shellcheck](https://github.com/koalaman/shellcheck): A shell script static analysis tool. Essentially, lint for bash/sh/zsh.
- [Filenames and Pathnames in Shell](http://www.dwheeler.com/essays/filenames-in-shell.html): The sadly complex minutiae on how to handle filenames correctly in shell scripts.
- [Data Science at the Command Line](http://datascienceatthecommandline.com/#tools): More commands and tools helpful for doing data science, from the book of the same name



## Some Excerptions 
### macOS only
These are items relevant *only* on macOS.

- Package management with `brew` (Homebrew) and/or `port` (MacPorts). These can be used to install on macOS many of the above commands.
- Copy output of any command to a desktop app with `pbcopy` and paste input from one with `pbpaste`.
- To enable the Option key in macOS Terminal as an alt key (such as used in the commands above like **alt-b**, **alt-f**, etc.), open Preferences -> Profiles -> Keyboard and select "Use Option as Meta key".
- To open a file with a desktop app, use `open` or `open -a /Applications/Whatever.app`.
- Spotlight: Search files with `mdfind` and list metadata (such as photo EXIF info) with `mdls`.
- Be aware macOS is based on BSD Unix, and many commands (for example `ps`, `ls`, `tail`, `awk`, `sed`) have many subtle variations from Linux, which is largely influenced by System V-style Unix and GNU tools. You can often tell the difference by noting a man page has the heading "BSD General Commands Manual." In some cases GNU versions can be installed, too (such as `gawk` and `gsed` for GNU awk and sed). If writing cross-platform Bash scripts, avoid such commands (for example, consider Python or `perl`) or test carefully.
- To get macOS release information, use `sw_vers`.



## Ref
