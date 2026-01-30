# AFL-based

[TOC]



## Res
### Related Topics


### Other Resources



## Intro
### AFL (American Fuzz Loop)



## AFLGo



## AFL++
🚧 https://aflplus.plus/

AFLplusplus is the daughter of the [American Fuzzy Lop](http://lcamtuf.coredump.cx/afl/) fuzzer by Michał “lcamtuf” Zalewski and was created initially to incorporate all the best features developed in the years for the fuzzers in the AFL family and not merged in AFL cause it is not updated since November 2017.

The AFL++ fuzzing framework includes the following:
- A fuzzer with many mutators and configurations: afl-fuzz.
- Different source code instrumentation modules: LLVM mode, afl-as, GCC plugin.
- Different binary code instrumentation modules: QEMU mode, Unicorn mode, QBDI mode.
- Utilities for testcase/corpus minimization: afl-tmin, afl-cmin.
- Helper libraries: libtokencap, libdislocator, libcompcov.
See the [Features](https://aflplus.plus/features/) page.


### Trophies
> 🔗 https://aflplus.plus/

- VLC
    - [CVE-2019-14437](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-14437), [CVE-2019-14438](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-14438), [CVE-2019-14498](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-14498), [CVE-2019-14533](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-14533), [CVE-2019-14534](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-14534), [CVE-2019-14535](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-14535), [CVE-2019-14776](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-14776), [CVE-2019-14777](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-14777), [CVE-2019-14778](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-14778), [CVE-2019-14779](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-14779), [CVE-2019-14970](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-14970) by Antonio Morales ([GitHub Security Lab](https://securitylab.github.com/research/vlc-vulnerability-heap-overflow))
- Sqlite
    - [CVE-2019-16168](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-16168) by Xingwei Lin (Ant-Financial Light-Year Security Lab)
- Vim
    - [CVE-2019-20079](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-20079) by Dhiraj ([blog](https://www.inputzero.io/2020/03/fuzzing-vim.html))
- Pure-FTPd
    - [CVE-2019-20176](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-20176), [CVE-2020-9274](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-14437), [CVE-2020-9365](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-9365) by Antonio Morales ([GitHub Security Lab](https://securitylab.github.com/research/fuzzing-sockets-FTP))
- Bftpd
    - [CVE-2020-6162](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-6162), [CVE-2020-6835](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-6835) by Antonio Morales ([GitHub Security Lab](https://securitylab.github.com/research/fuzzing-sockets-FTP))
- Tcpdump
    - [CVE-2020-8036](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-8036) by Reza Mirzazade
- ProFTPd
    - [CVE-2020-9272](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-9272), [CVE-2020-9273](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-9273) by Antonio Morales ([GitHub Security Lab](https://securitylab.github.com/research/fuzzing-sockets-FTP))
- Gifsicle
    - [Issue 130](https://github.com/kohler/gifsicle/issues/130) by Ashish Kunwar
- FFmpeg
    - [Ticket 8592](https://trac.ffmpeg.org/ticket/8592), [Ticket 8593](https://trac.ffmpeg.org/ticket/8593), [Ticket 8594](https://trac.ffmpeg.org/ticket/8594), [Ticket 8596](https://trac.ffmpeg.org/ticket/8596) by Andrea Fioraldi
    - [Ticket 9099](https://trac.ffmpeg.org/ticket/9099) by Qiuhao Li
- Glibc
    - [Bug 25933](https://sourceware.org/bugzilla/show_bug.cgi?id=25933) by David Mendenhall
- FreeRDP
    - [CVE-2020-11095](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-11095), [CVE-2020-11096](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-11096), [CVE-2020-11097](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-11097), [CVE-2020-11098](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-11098), [CVE-2020-11099](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-11099), [CVE-2020-13397](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-13397), [CVE-2020-13398](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-13398), [CVE-2020-4030](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-4030), [CVE-2020-4031](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-4031), [CVE-2020-4032](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-4032), [CVE-2020-4033](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-4033) by Antonio Morales ([GitHub Security Lab](https://securitylab.github.com/research/fuzzing-sockets-FreeRDP))
- GNOME
    - [Libxps issue 3](https://gitlab.gnome.org/GNOME/libgxps/-/issues/3) by Qiuhao Li
- QEMU
    - [CVE-2020-29129](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-29129), [CVE-2020-29130](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-29130) by Qiuhao Li
- GNU coreutils
    - [Bug 1919775](https://bugzilla.redhat.com/show_bug.cgi?id=1919775) by Qiuhao Li
- PostgreSQL
    - [Crash while parsing zero-symbols in jsonb string](https://www.postgresql.org/message-id/7332649.x5DLKWyVIX%40thinkpad-pgpro) by [Nikolay Shaplov](https://gitlab.com/dhyannataraj) (Postgres Professional)
    - [Bug #18214](https://www.postgresql.org/message-id/flat/18214-891f77caa80a35cc%40postgresql.org), [Bug #17962](https://www.postgresql.org/message-id/17962-4f00b6f26724858d%40postgresql.org) `poly_contain` operation works almost forever (using [LibBlobStamper](https://github.com/postgrespro/libblobstamper)) by [Nikolay Shaplov](https://gitlab.com/dhyannataraj) (Postgres Professional)
- Node.js
    - [Bug #41949](https://github.com/nodejs/node/issues/41949), [Bug #46223](https://github.com/nodejs/node/issues/46223) by [Alexander Shvedov](https://github.com/a-shvedov)
- libjxl
    - [Bug #2100](https://github.com/libjxl/libjxl/issues/2100) by [Alexander Shvedov](https://github.com/a-shvedov)
- Perl
    - [Bug #20733](https://github.com/Perl/perl5/issues/20733) by [Alexander Shvedov](https://github.com/a-shvedov)
- zlog
    - [CVE-2024-22857](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-22857) ([Details](https://www.ebryx.com/blogs/arbitrary-code-execution-in-zlog-cve-2024-22857)) by [Faran Abdullah](https://github.com/faran1512)



## Ref
