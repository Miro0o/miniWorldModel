# GNU `Coreutils`

[TOC]



## Res
🏠 https://www.gnu.org/software/coreutils/#help
🏠 https://www.maizure.org/projects/decoded-gnu-coreutils/ (overview of gnu `coreuils` & packages)

The GNU Core Utilities are the basic file, shell and text manipulation utilities of the GNU operating system. **These are the core utilities which are expected to exist on every operating system.**


### Related Topics
↗ [BusyBox](BusyBox.md)
↗ [ToyBox](ToyBox.md)


### Other Resources



## Intro
![coreutils brought to you by the GNU project](../../../../../../../../Assets/Pics/GNU.png)


### Helpful background for code reading
> 🔗 http://www.maizure.org/projects/decoded-gnu-coreutils/

The GNU `coreutils` has its foibles. Many of these utilities are approaching 30 years old and include revisions by many people over the years. Here are some things to keep in mind when reading the code:

- Tiny programs
  - These utilities are small, (mostly) single-source file programs designed to do one thing and do it well. They are not designed for long life or to scale beyond their role. Consequently, we see designs often considered 'bad practice' such as:
  - Many globals
  - Liberal use of macros
  - `goto` statements
  - Long functions with nested switches /loops
  
- **Know POSIX** - Start with the [Utility Syntax Guidelines](http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap12.html#tag_12_02). In general, POSIX supports interoperability by defining appropriate inputs and outputs, but leaves the 'work' to the implementation. While the GNU `coreutils` [may not strictly conform](https://www.gnu.org/software/coreutils/manual/html_node/Standards-conformance.html) to POSIX, many ideas are entrenched: permission bits, `uids` /`gids`, environment variables, exit status, and about [3718 pages](http://www.open-std.org/jtc1/sc22/open/n4217.pdf) of more trivia. 
  
- **Outside help** - Portability is a complex problem and `coreutils` relies on extra help from a related project: [`gnulib`](https://www.gnu.org/s/gnulib/). Almost every utility includes functions from `gnulib` which are specially designed for common problems used in many places across various systems - No need to reinvent the wheel.
  
- **Launched from a shell** - The Core utilities expect support from a shell such as `bash`, `zsh`, `ksh`, and others. The shell forks/clones in to the utility, passes the arguments, sets up the environment, redirects I/O via pipes, and retains exit values.
  
- **Three families** - GNU `coreutils` were originally three distinct packages for shell, text, and file utilities. Utilities within the same type share many of the same design patterns.


### Getting Help
- Check Questions and Answers for common problems: [`Coreutils` FAQ](https://www.gnu.org/software/coreutils/faq/coreutils-faq.html)
- Read the manual locally using info `coreutils` or see the latest [online manual](https://www.gnu.org/software/coreutils/manual/) ([日本語](https://linuxjm.osdn.jp/info/GNU_coreutils/coreutils-ja.html)).
- The [`Coreutils` Gotchas](https://www.pixelbeat.org/docs/coreutils-gotchas.html) contains a list of some quirks and unexpected behaviour (which are often mistaken for bugs).
- Search the archives for previous questions and answers:
  - Search mailing lists: 
  - General usage and advice: [`coreutils` mailing list](https://lists.gnu.org/archive/html/coreutils/).
  - Bug reports: [bug-coreutils mailing List](https://lists.gnu.org/archive/html/bug-coreutils/).
- Send general questions or suggestions to the mailing list at <[coreutils@gnu.org](mailto:coreutils@gnu.org)>.
- Send translation requests to the language team at the [Translation Project](https://translationproject.org/domain/coreutils.html).
- Report bugs, including version and distribution variant, to the list at <[bug-coreutils@gnu.org](mailto:bug-coreutils@gnu.org)>.
  Before sending the bug, please consult the FAQ and mailing list archives (above).
  Often these perceived bugs are simply due to wrong program usage.
  To learn more about reporting bugs, see [Getting help with GNU software](https://www.gnu.org/software/gethelp.html).


### Getting GNU `Coreutils`
The latest source with revision history can be browsed using [cgit](https://git.sv.gnu.org/cgit/coreutils.git), [gitweb](https://git.sv.gnu.org/gitweb/?p=coreutils.git) or [GitHub](https://github.com/coreutils/coreutils).
Assuming you have [git](https://git-scm.com/) installed, you can retrieve the latest version with this command:
```
git clone git://git.sv.gnu.org/coreutils
```

A [Coreutils code structure overview](http://www.maizure.org/projects/decoded-gnu-coreutils/) is available, which is useful for educational purposes, or for those interested in contributing changes.
To build from the latest sources please follow the instructions in [README-hacking](https://git.sv.gnu.org/cgit/coreutils.git/plain/README-hacking).
Please note that we do not suggest using test versions of Coreutils for production use.



## 🗺️ GNU `Coreutils` Overview
### Basic Design
Most CLI utilities look something close to this:
![](../../../../../../../../Assets/Pics/Screenshot%202023-06-10%20at%209.05.07%20AM.png)

The key ideas:
- A setup phase for flags, options, localization, etc
- An argument parsing phase thats reads input to set execution parameters
- A processing/execution phase that prepares input for one or more syscalls
- Many opportunities to check constraints and fail out of execution
    - Distinct EXIT status hint about problem location
    - EXIT_FAILURE is general and commonly used
- Providing feedback after failed execution

This is the framework I'll use to organize the decoding of each utility. We'll see that each has a unique variant of this idea which range from a few lines to thousands of lines. I'd categorize the variants in three groups: trivial, wrappers, and full utilities


### `coreutils` Overview
I'll link the utility pages here at the top. Click the command name for the detailed page decoding that utility. The discussion, source code, and walkthroughs are available on each page. **Bolded** utilities have been expanded as part of phase 2. Enjoy!

> This resource is for novice programmers exploring the design of command-line utilities. It is best used as an accompaniment providing useful background while reading the 🔗 [source code](https://github.com/MaiZure/coreutils-8.3/tree/master/src) of the utility you may be interested in. This is **not** a user guide -- Please see applicable 🔗 [man pages](http://man7.org/linux/man-pages/dir_by_project.html#coreutils) for instructions on using these utilities.


|Utilities|||||
|---|---|---|---|---|
|**[arch](https://www.maizure.org/projects/decoded-gnu-coreutils/arch.html)**|**[base64](https://www.maizure.org/projects/decoded-gnu-coreutils/base64.html)**|**[basename](https://www.maizure.org/projects/decoded-gnu-coreutils/basename.html)**|**[cat](https://www.maizure.org/projects/decoded-gnu-coreutils/cat.html)**|**[chcon](https://www.maizure.org/projects/decoded-gnu-coreutils/chcon.html)**|
|**[chgrp](https://www.maizure.org/projects/decoded-gnu-coreutils/chgrp.html)**|**[chmod](https://www.maizure.org/projects/decoded-gnu-coreutils/chmod.html)**|**[chown](https://www.maizure.org/projects/decoded-gnu-coreutils/chown.html)**|**[chroot](https://www.maizure.org/projects/decoded-gnu-coreutils/chroot.html)**|**[cksum](https://www.maizure.org/projects/decoded-gnu-coreutils/cksum.html)**|
|**[comm](https://www.maizure.org/projects/decoded-gnu-coreutils/comm.html)**|**[cp](https://www.maizure.org/projects/decoded-gnu-coreutils/cp.html)**|**[csplit](https://www.maizure.org/projects/decoded-gnu-coreutils/csplit.html)**|**[cut](https://www.maizure.org/projects/decoded-gnu-coreutils/cut.html)**|**[date](https://www.maizure.org/projects/decoded-gnu-coreutils/date.html)**|
|**[dd](https://www.maizure.org/projects/decoded-gnu-coreutils/dd.html)**|**[df](https://www.maizure.org/projects/decoded-gnu-coreutils/df.html)**|**[dir](https://www.maizure.org/projects/decoded-gnu-coreutils/dir.html)**|**[dircolors](https://www.maizure.org/projects/decoded-gnu-coreutils/dircolors.html)**|**[dirname](https://www.maizure.org/projects/decoded-gnu-coreutils/dirname.html)**|
|**[du](https://www.maizure.org/projects/decoded-gnu-coreutils/du.html)**|**[echo](https://www.maizure.org/projects/decoded-gnu-coreutils/echo.html)**|**[env](https://www.maizure.org/projects/decoded-gnu-coreutils/env.html)**|**[expand](https://www.maizure.org/projects/decoded-gnu-coreutils/expand.html)**|**[expr](https://www.maizure.org/projects/decoded-gnu-coreutils/expr.html)**|
|**[factor](https://www.maizure.org/projects/decoded-gnu-coreutils/factor.html)**|**[false](https://www.maizure.org/projects/decoded-gnu-coreutils/false.html)**|**[fmt](https://www.maizure.org/projects/decoded-gnu-coreutils/fmt.html)**|**[fold](https://www.maizure.org/projects/decoded-gnu-coreutils/fold.html)**|**[groups](https://www.maizure.org/projects/decoded-gnu-coreutils/groups.html)**|
|**[head](https://www.maizure.org/projects/decoded-gnu-coreutils/head.html)**|**[hostid](https://www.maizure.org/projects/decoded-gnu-coreutils/hostid.html)**|**[hostname](https://www.maizure.org/projects/decoded-gnu-coreutils/hostname.html)**|**[id](https://www.maizure.org/projects/decoded-gnu-coreutils/id.html)**|**[install](https://www.maizure.org/projects/decoded-gnu-coreutils/install.html)**|
|**[join](https://www.maizure.org/projects/decoded-gnu-coreutils/join.html)**|**[kill](https://www.maizure.org/projects/decoded-gnu-coreutils/kill.html)**|**[link](https://www.maizure.org/projects/decoded-gnu-coreutils/link.html)**|**[ln](https://www.maizure.org/projects/decoded-gnu-coreutils/ln.html)**|**[logname](https://www.maizure.org/projects/decoded-gnu-coreutils/logname.html)**|
|**[ls](https://www.maizure.org/projects/decoded-gnu-coreutils/ls.html)**|**[md5sum](https://www.maizure.org/projects/decoded-gnu-coreutils/md5sum.html)**|**[mkdir](https://www.maizure.org/projects/decoded-gnu-coreutils/mkdir.html)**|**[mkfifo](https://www.maizure.org/projects/decoded-gnu-coreutils/mkfifo.html)**|**[mknod](https://www.maizure.org/projects/decoded-gnu-coreutils/mknod.html)**|
|**[mktemp](https://www.maizure.org/projects/decoded-gnu-coreutils/mktemp.html)**|**[mv](https://www.maizure.org/projects/decoded-gnu-coreutils/mv.html)**|**[nice](https://www.maizure.org/projects/decoded-gnu-coreutils/nice.html)**|**[nl](https://www.maizure.org/projects/decoded-gnu-coreutils/nl.html)**|**[nohup](https://www.maizure.org/projects/decoded-gnu-coreutils/nohup.html)**|
|**[nproc](https://www.maizure.org/projects/decoded-gnu-coreutils/nproc.html)**|**[numfmt](https://www.maizure.org/projects/decoded-gnu-coreutils/numfmt.html)**|**[od](https://www.maizure.org/projects/decoded-gnu-coreutils/od.html)**|**[paste](https://www.maizure.org/projects/decoded-gnu-coreutils/paste.html)**|**[pathchk](https://www.maizure.org/projects/decoded-gnu-coreutils/pathchk.html)**|
|**[pinky](https://www.maizure.org/projects/decoded-gnu-coreutils/pinky.html)**|**[pr](https://www.maizure.org/projects/decoded-gnu-coreutils/pr.html)**|**[printenv](https://www.maizure.org/projects/decoded-gnu-coreutils/printenv.html)**|**[printf](https://www.maizure.org/projects/decoded-gnu-coreutils/printf.html)**|**[ptx](https://www.maizure.org/projects/decoded-gnu-coreutils/ptx.html)**|
|**[pwd](https://www.maizure.org/projects/decoded-gnu-coreutils/pwd.html)**|**[readlink](https://www.maizure.org/projects/decoded-gnu-coreutils/readlink.html)**|**[realpath](https://www.maizure.org/projects/decoded-gnu-coreutils/realpath.html)**|**[rm](https://www.maizure.org/projects/decoded-gnu-coreutils/rm.html)**|**[rmdir](https://www.maizure.org/projects/decoded-gnu-coreutils/rmdir.html)**|
|**[runcon](https://www.maizure.org/projects/decoded-gnu-coreutils/runcon.html)**|**[seq](https://www.maizure.org/projects/decoded-gnu-coreutils/seq.html)**|**[shred](https://www.maizure.org/projects/decoded-gnu-coreutils/shred.html)**|**[shuf](https://www.maizure.org/projects/decoded-gnu-coreutils/shuf.html)**|**[sleep](https://www.maizure.org/projects/decoded-gnu-coreutils/sleep.html)**|
|**[sort](https://www.maizure.org/projects/decoded-gnu-coreutils/sort.html)**|**[split](https://www.maizure.org/projects/decoded-gnu-coreutils/split.html)**|**[stat](https://www.maizure.org/projects/decoded-gnu-coreutils/stat.html)**|**[stdbuf](https://www.maizure.org/projects/decoded-gnu-coreutils/stdbuf.html)**|**[stty](https://www.maizure.org/projects/decoded-gnu-coreutils/stty.html)**|
|**[sum](https://www.maizure.org/projects/decoded-gnu-coreutils/sum.html)**|**[tac](https://www.maizure.org/projects/decoded-gnu-coreutils/tac.html)**|**[tail](https://www.maizure.org/projects/decoded-gnu-coreutils/tail.html)**|**[tee](https://www.maizure.org/projects/decoded-gnu-coreutils/tee.html)**|**[test](https://www.maizure.org/projects/decoded-gnu-coreutils/test.html)**|
|**[timeout](https://www.maizure.org/projects/decoded-gnu-coreutils/timeout.html)**|**[touch](https://www.maizure.org/projects/decoded-gnu-coreutils/touch.html)**|**[tr](https://www.maizure.org/projects/decoded-gnu-coreutils/tr.html)**|**[true](https://www.maizure.org/projects/decoded-gnu-coreutils/true.html)**|**[truncate](https://www.maizure.org/projects/decoded-gnu-coreutils/truncate.html)**|
|**[tsort](https://www.maizure.org/projects/decoded-gnu-coreutils/tsort.html)**|**[tty](https://www.maizure.org/projects/decoded-gnu-coreutils/tty.html)**|**[uname](https://www.maizure.org/projects/decoded-gnu-coreutils/uname.html)**|**[unexpand](https://www.maizure.org/projects/decoded-gnu-coreutils/unexpand.html)**|**[uniq](https://www.maizure.org/projects/decoded-gnu-coreutils/uniq.html)**|
|**[unlink](https://www.maizure.org/projects/decoded-gnu-coreutils/unlink.html)**|**[uptime](https://www.maizure.org/projects/decoded-gnu-coreutils/uptime.html)**|**[users](https://www.maizure.org/projects/decoded-gnu-coreutils/users.html)**|**[vdir](https://www.maizure.org/projects/decoded-gnu-coreutils/vdir.html)**|**[wc](https://www.maizure.org/projects/decoded-gnu-coreutils/wc.html)**|
|**[who](https://www.maizure.org/projects/decoded-gnu-coreutils/who.html)**|**[whoami](https://www.maizure.org/projects/decoded-gnu-coreutils/whoami.html)**|**[yes](https://www.maizure.org/projects/decoded-gnu-coreutils/yes.html)**|



## Ref
