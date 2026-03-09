# Computer Profiling & System Visibility

[TOC]



## Res
### Related Topics
↗ [Code Instrumentation, System Visibility, & Computer Profiling](../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/👙%20DCA%20(Dynamic%20Code%20Analysis)%20&%20DAST/🥁%20Code%20Instrumentation,%20System%20Visibility,%20&%20Computer%20Profiling/Code%20Instrumentation,%20System%20Visibility,%20&%20Computer%20Profiling.md)

↗ [Process Management Basics](../🪆%20Process%20Management/Process%20Management%20Basics.md)
↗ [End Host Management & Hardware Profiling](../../../../Generic%20Software%20Tools%20&%20Projects/🧱%20Hardware%20Related%20Tools/End%20Host%20Management%20&%20Hardware%20Profiling.md)
↗ [Software (Program) Techniques & Binary Engineering](../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/Software%20(Program)%20Techniques%20&%20Binary%20Engineering.md)
↗ [Software Analysis Tools](../../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/Software%20Analysis%20Tools.md)

↗ [Computer Profiling](../../../Apple%20Operating%20Systems/macOS%20(Derived%20From%20UNIX%20Family)/🪓%20macOS%20CLI%20Software/Host%20Management/Computer%20Profiling.md)



## 🎯 System Configurations & Runtimes
### 👉 `lscpu`
↗ [macOS /Computer Profiling](../../../Apple%20Operating%20Systems/macOS%20(Derived%20From%20UNIX%20Family)/🪓%20macOS%20CLI%20Software/Host%20Management/Computer%20Profiling.md)
```
system_profiler SPHardwareDataType
```


### 👉 `lshw` | `hwinfo`


### 👉 `lnxi`
Inxi is a 10K line mega bash script that fetches hardware details from multiple different sources and commands on the system, and generates a beautiful looking report that non technical users can read easily.


### 👉 `uname`


### 👉 `hostname` | `hostnamectl`
Display the system's hostname using:
```shell
$ hostname
```

You can also use the `hostname` command to modify the system's name temporarily. Here's an example:
```shll
$ hostname demo.example.com
```

To persistently change the hostname, use the `hostnamectl` command, or directly modify the default configuration file `/etc/hostname`.
```shell
 hostnamectl set-hostname server1.example.com
```

[如何在 Ubuntu 20.04 上修改主机名]: https://cloud.tencent.com/developer/article/1649332


### 👉 `getconf`



## 🎯 Logging
### 👉 `dmesg`
📂 [dmesg](https://www.man7.org/linux/man-pages/man1/dmesg.1.html)

display the system message buffer
Dmesg displays the contents of the system message buffer.  This command needs to be run as root.


### 👉 `log` | `syslog` | `logger` | `journalctl`
[log show](https://www.manpagez.com/man/1/log/)

[logger](https://www.man7.org/linux/man-pages/man1/logger.1.html)

[journalctl](https://www.man7.org/linux/man-pages/man1/journalctl.1.html)


### 👉 `lnav`
[lnav](http://lnav.org/)

lnav - ncurses-based log file viewer

The log file navigator, lnav, is an enhanced log file viewer that takes advantage of any semantic information that can be gleaned from the files being viewed, such as timestamps and log levels.  Using this extra semantic information, lnav can do things like interleaving messages from different files, generate histograms of messages over time, and providing hotkeys for navigating through the file.  It is hoped that these features will allow the user to quickly and efficiently zero in on problems.



## 🎯 System Runtime Specifics
> ↗ [End Host Management & Hardware Profiling](../../../../Generic%20Software%20Tools%20&%20Projects/🧱%20Hardware%20Related%20Tools/End%20Host%20Management%20&%20Hardware%20Profiling.md)
### General Monitoring
#### 👉 `top` | `htop` | `gtop` | `btop`
↗ [Process Management Basics /Process Activity Management](../🪆%20Process%20Management/Process%20Management%20Basics.md#Process%20Activity%20Management)
##### More Alike Projects..
https://github.com/bvaisvil/zenith
Zenith - sort of like top or htop but with zoom-able charts, CPU, GPU, network, and disk usage
#### 👉 `glances`
#### 👉 `dstat`
 `Dstat` is a versatile replacement for `vmstat`, `iostat` and `ifstat`. `Dstat` overcomes some of the limitations of these programs and adds some
 extra features.
#### 👉 `perf`
https://perf.wiki.kernel.org/index.php/Main_Page
perf: Linux profiling with performance counters
#### 👉 `sysdig` 👍 🔥
🚧 https://github.com/draios/sysdig
**Sysdig is a simple tool for deep system visibility, with native support for containers.**

The best way to understand sysdig is to [try it](https://github.com/draios/sysdig/wiki/How-to-Install-Sysdig-for-Linux) - its super easy! Or here's a quick video introduction to csysdig, the simple, intuitive, and fully customizable curses-based UI for sysdig: [https://www.youtube.com/watch?v=UJ4wVrbP-Q8](https://www.youtube.com/watch?v=UJ4wVrbP-Q8)

Far too often, system-level monitoring and troubleshooting still involves logging into a machine with SSH and using a plethora of dated tools with very inconsistent interfaces. And many of these classic Linux tools breakdown completely in containerized environments. Sysdig unites your Linux toolkit into a single, consistent, easy-to-use interface. And sysdig's unique architecture allows deep inspection into containers, right out of the box, without having to instrument the containers themselves in any way.

Sysdig instruments your physical and virtual machines at the OS level by installing into the Linux kernel and capturing system calls and other OS events. Sysdig also makes it possible to create trace files for system activity, similarly to what you can do for networks with tools like tcpdump and Wireshark. This way, problems can be analyzed at a later time, without losing important information. Rich system state is stored in the trace files, so that the captured activity can be put into full context.

Think about sysdig as strace + tcpdump + htop + iftop + lsof + ...awesome sauce.


### 🥺 System Calls & Other Function Calls
> ↗ [Software Analysis Tools](../../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/Software%20Analysis%20Tools.md)
#### 👉 `strace` | `dtrace` | `dtruss`
[strace](https://www.man7.org/linux/man-pages/man1/strace.1.html)
[dtrace](http://dtrace.org/blogs/about/)
[dtruss](https://www.manpagez.com/man/1/dtruss/)
#### 👉 `trace` | `ktrace`
#### 👉 `lstrace` | `ftrace`
#### 👉 `gdb` | `valgrind` | etc.
↗ [gdb (GNU DeBugger)](../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/Compilation%20&%20Program%20Loading%20Tools/🐐%20GCC%20(The%20GNU%20Compiler%20Collection)/gdb%20(GNU%20DeBugger)/gdb%20(GNU%20DeBugger).md)
↗ [Valgrind](../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/Debuggers%20&%20Disassemblers%20&%20Decompilers/Disassemblers%20&%20Decompilers/Valgrind.md)
#### 👉 SystemTap | Perf | Kernel Debuggers


### Resource Virtualization
↗ [Design & Visualization Tools](../../../../../Software%20Engineering/CASE%20(Computer-Aided%20Software%20Engineering)%20Tools/Upper%20CASE%20Tools/Design%20&%20Visualization%20Tools/Design%20&%20Visualization%20Tools.md)
↗ [Data Visualizers](../../../../../Software%20Engineering/CASE%20(Computer-Aided%20Software%20Engineering)%20Tools/Upper%20CASE%20Tools/Design%20&%20Visualization%20Tools/Data%20Visualizers/Data%20Visualizers.md)

#### 👉 `pprof` 👍 🔥
🚧 https://github.com/google/pprof

pprof is a tool for visualization and analysis of profiling data
#### 👉 Flame Graph
🏠 http://www.brendangregg.com/flamegraphs.html
#### 👉 `pycallgraph`
python -m [pycallgraph](https://pycallgraph.readthedocs.io/)


### Process/ Jobs Activity
↗ [Process Management Basics](../🪆%20Process%20Management/Process%20Management%20Basics.md)


### Network Profiling
↗ [Network Management Basics](../Network%20Management/Network%20Management%20Basics.md)


### CPU Profiler
There are two main types of CPU profilers: tracing and sampling profilers. 
#### Timing
Real time / User time / Sys time 

python -m  [time](https://docs.python.org/3/library/time.html) 
#### 👉 cProfile
python - cProfile
#### 👉 Line Profiler
🚧 https://github.com/pyutils/line_profiler


### I/O Operations
#### 👉 `iotop`


### Disk /Memory Profiling
[Valgrind](https://valgrind.org/) 
- [memory-profiler](https://pypi.org/project/memory-profiler/)
#### 👉 `du` | `ncdu`
The du command is a standard Linux/Unix command that **allows a user to gain disk usage information quickly**. It is best applied to specific directories and allows many variations for customizing the output to meet your needs. As with most commands, the user can take advantage of many options or flags.
#### 👉 `lsblk` | `df` | `pydf`

#### 👉 `fdisk` | `hdisk` | `gdisk`

#### 👉 `mount` | `free`

#### 👉 `vmstat`
> ↗ [📌 Computer Profiling & System Visibility /👉 `dstat`](📌%20Computer%20Profiling%20&%20System%20Visibility.md#👉%20`dstat`)

`vmstat` reports information about processes, memory, paging, block IO, traps, disks and cpu activity.

The  first  report  produced gives averages since the last reboot.  Additional reports give information on a sampling period of length delay.  The process and memory reports are instantaneous in either case.
#### 👉 `dmidecode`
The `dmidecode` command is different from all other commands. It extracts hardware information by reading data from the [SMBOIS data structures](https://en.wikipedia.org/wiki/System_Management_BIOS) (also called DMI tables).
#### 👉 `hdparm`
#### 👉 `pmap` | `mmap` 

#### 👀 Looking up files under `/proc/`
You might be asking yourself, “Where do these commands get this information from?”. In some cases, they get it from the ==`/proc/meminfo`== file. Guess what? You can read that file directly with the command `less /proc/meminfo`.

One thing you should know about `/proc/meminfo`: This is not a real file. Instead `/pro/meminfo` is a virtual file that contains real-time, dynamic information about the system. In particular, you’ll want to check the values for:
- MemTotal
- MemFree
- MemAvailable
- Buffers
- Cached
- SwapCached
- SwapTotal
- SwapFree

If you want to get fancy with `/proc/meminfo` you can use it in conjunction with the egrep command like so: `egrep –color ‘Mem|Cache|Swap’ /proc/meminfo`. This will produce an easy to read listing of all entries that contain Mem, Cache, and Swap … with a splash of color.
#### 👉 TCMalloc | gperftools 👍 🔥
🚧 https://github.com/gperftools/gperftools
🏠 https://google.github.io/tcmalloc/gperftools.html

There are two projects on Github that are based on Google’s internal TCMalloc: This repository and [gperftools](https://github.com/gperftools/gperftools). Both are fast C/C++ memory allocators designed around a fast path that avoids synchronizing with other threads for most allocations.

This repository is Google’s current implementation of TCMalloc, used by all of our C++ programs in production. The code is limited to the memory allocator implementation itself.



## Ref
[16 Commands to Check Hardware Information on Linux]: https://www.binarytides.com/linux-commands-hardware-info/

[Linux下查看电脑硬件环境的命令]: https://blog.csdn.net/wjlwangluo/article/details/77511692

[Classic SysAdmin: Linux 101: 5 Commands for Checking Memory Usage in Linux]: https://www.linuxfoundation.org/blog/blog/classic-sysadmin-linux-101-5-commands-for-checking-memory-usage-in-linux

[dmidecode command in Linux with Examples]: https://www.geeksforgeeks.org/dmidecode-command-in-linux-with-examples/

[How to get CPU utilisation, RAM utilisation in MAC from commandline]: https://stackoverflow.com/questions/28168054/how-to-get-cpu-utilisation-ram-utilisation-in-mac-from-commandline

What is the objection to `top` in logging mode?
```shell
top -l 1 | grep -E "^CPU|^Phys"

CPU usage: 3.27% user, 14.75% sys, 81.96% idle 
PhysMem: 5807M used (1458M wired), 10G unused.
```

Or use `sysctl`
``` shell
sysctl vm.loadavg
vm.loadavg: { 1.31 1.85 2.00 }
```

Or use `vm_stat`
``` shell
vm_stat
Mach Virtual Memory Statistics: (page size of 4096 bytes)
Pages free:                                3569.
Pages active:                            832177.
Pages inactive:                          283212.
Pages speculative:                      2699727.
Pages throttled:                              0.
Pages wired down:                        372883.
```