# Ncurses

[TOC]



## Intro

> TL;DR
>
> ncurses is a programming library providing an application programming interface that allows the programmer to write text-based user interfaces in a terminal-independent manner. It is a toolkit for developing "GUI-like" application software that runs under a terminal emulator.

The *ncurses* (new curses) library is a free software emulation of curses in System V Release 4.0 (SVr4), and more. It uses terminfo format, supports pads and color and multiple highlights and forms characters and function-key mapping, and has all the other SVr4-curses enhancements over BSD curses. SVr4 curses became the basis of X/Open Curses.

In mid-June 1995, the maintainer of 4.4BSD curses declared that he considered 4.4BSD curses obsolete, and encouraged the keepers of *unix* releases such as BSD/OS, FreeBSD and NetBSD to switch over to *ncurses*.

Since 1995, *ncurses* has been ported to many systems:

- It is used in almost every system based on the Linux kernel (aside from some embedded applications).
- It is used as the system curses library on OpenBSD, FreeBSD and MacOS.
- It is used in environments such as Cygwin and MinGW. The first of these was EMX on OS/2 Warp.
- It is used (though usually not as the *system* curses) on all of the vendor *unix* systems, e.g., AIX, HP-UX, IRIX64, SCO, Solaris, Tru64.
- It should work readily on any ANSI/POSIX-conforming *unix*.

The distribution includes the library and support utilities, including

- [**captoinfo**](https://invisible-island.net/ncurses/man/captoinfo.1m.html), a termcap conversion tool
- [**clear**](https://invisible-island.net/ncurses/man/clear.1.html), utility for clearing the screen
- [**infocmp**](https://invisible-island.net/ncurses/man/infocmp.1m.html), the terminfo decompiler
- [**tabs**](https://invisible-island.net/ncurses/man/tabs.1.html), set tabs on a terminal
- [**tic**](https://invisible-island.net/ncurses/man/tic.1m.html), the terminfo compiler
- [**toe**](https://invisible-island.net/ncurses/man/toe.1m.html), list (table of) terminfo entries
- [**tput**](https://invisible-island.net/ncurses/man/tput.1.html), utility for retrieving terminal capabilities in shell scripts
- [**tset**](https://invisible-island.net/ncurses/man/tset.1.html), to initialize the terminal

Full manual pages are provided for the library and tools.

The *ncurses* distribution is available at *ncurses*' [homepage](https://invisible-island.net/ncurses/):

> [ftp://ftp.invisible-island.net/ncurses/](https://invisible-island.net/archives/ncurses/) or
> https://invisible-mirror.net/archives/ncurses/ .

It is also available via anonymous FTP at the GNU distribution site

> [ftp://ftp.gnu.org/gnu/ncurses/](ftp://ftp.gnu.org/gnu/ncurses/) .



## Ref