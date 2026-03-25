# MinGW & MinGW-w64

[TOC]



## Res
🏠 https://www.mingw-w64.org


### Related Topics
↗ [Windows](../../../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Microsoft%20Operating%20Systems/Windows/Windows.md)

↗ [Cygwin Project](../../../../../../Software%20Engineering/🦄%20Computer%20Virtualization/Library%20Level%20Virtualization/Cygwin%20Project/Cygwin%20Project.md)
↗ [MSYS & MSYS2](../../../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/🐚%20Shell%20&%20Terminals%20(Console)/🦞%20Shell%20&%20Script%20Programming/MSYS%20&%20MSYS2.md)

↗ [git-bash](../../../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/🐚%20Shell%20&%20Terminals%20(Console)/Terminal%20Emulators/📌%20Windows%20Console%20&%20ConPTY%20Based/git-bash.md)


### Learning Resources



## Intro
> 🔗 https://zhuanlan.zhihu.com/p/76613134
> 2019

本文主要讲述如何安装 C语言 编译器——MinGW-w64，特点是文章附有完整详细的实际安装过程截图，文字反而起说明提示作用。  
编写本文的原因始于我的一个观点：图片可以比文字传达更多的信息，也能让其他人更容易理解作者的意图及思想。因此，我将安装 MinGW-w64 的过程和步骤，编写成了这篇以图片为主的教程，为了让看到这篇文章的任何人，都可以很容易按照图片所示正确安装 MinGW-w64。  
我希望写出一篇即使是⑨也可以看懂的 MinGW-w64 安装教程。  
  
**一、什么是 MinGW-w64 ？**  
MinGW 的全称是：Minimalist GNU on Windows 。它实际上是将经典的开源 C语言 编译器 GCC 移植到了 Windows 平台下，并且包含了 [Win32API](https://zhida.zhihu.com/search?content_id=105154835&content_type=Article&match_order=1&q=Win32API&zhida_source=entity) ，因此可以将源代码编译为可在 Windows 中运行的可执行程序。而且还可以使用一些 Windows 不具备的，Linux平台下的开发工具。一句话来概括：MinGW 就是 GCC 的 Windows 版本 。  
以上是 MinGW 的介绍，MinGW-w64 与 MinGW 的区别在于 MinGW 只能编译生成32位可执行程序，而 MinGW-w64 则可以编译生成 64位 或 32位 可执行程序。  
正因为如此，MinGW 现已被 MinGW-w64 所取代，且 MinGW 也早已停止了更新，内置的 GCC 停滞在了 4.8.1 版本，而 MinGW-w64 内置的 GCC 则更新到了 6.2.0 版本。  
  
**二、为什么使用 MinGW-w64 ？**  
1. MinGW-w64 是开源软件，可以免费使用。  
2. MinGW-w64 由一个活跃的开源社区在持续维护，因此不会过时。  
3. MinGW-w64 支持最新的 C语言 标准。  
4. MinGW-w64 使用 Windows 的C语言运行库，因此编译出的程序不需要第三方 DLL ，可以直接在 Windows 下运行。  
5. 那些著名的开源 IDE 实际只是将 MinGW-w64 封装了起来，使它拥有友好的图形化界面，简化了操作，但内部核心仍然是 MinGW-w64。  
MinGW-w64 是稳定可靠的、持续更新的 C/C++ 编译器，使用它可以免去很多麻烦，不用担心跟不上时代，也不用担心编译器本身有bug，可以放心的去编写程序。  

**三、MinGW-w64 适合做什么？**  
对于熟悉 MinGW-w64 的高手而言，它可以编译任何 C语言 程序。但对于一般人来说，MinGW-w64 太过简陋，连图形用户界面都没有。这让习惯使用鼠标的人，感到很痛苦。虽然也可以通过一些配置，让 MinGW-w64 拥有图形用户界面，但那个过程非常麻烦。  
除此之外，编译复杂的程序时，还需要你会编写 Makefile ，否则只能一个文件一个文件的编译，可想而知会多么辛苦。  
但对于初学 C语言 的人来说，MinGW-w64 是正合适的编译器，至少黑色的[命令提示符](https://zhida.zhihu.com/search?content_id=105154835&content_type=Article&match_order=1&q=%E5%91%BD%E4%BB%A4%E6%8F%90%E7%A4%BA%E7%AC%A6&zhida_source=entity)界面很有编程的气氛，感觉很酷。  
在刚开始学 C语言 时，所有代码通常都写在一个文件中，只要输入几个简单的命令，就能用 MinGW-w64 编译成可执行文件。虽然 VS2015 等编译器，只要点击下鼠标就可以完成编译，但它会自动生成一大堆工程文件，让初学者摸不着头脑。而 MinGW-w64 则只会生成一个可执行文件。  
如果对 MinGW-w64 和 VS2015 等编译器进行一下形容，那么 MinGW-w64 是手动的，而 VS2015 等编译器则是自动的。因此 MinGW-w64 的编译过程更加直观容易理解，也比较适合C语言学习。  
总而言之，对于一般人来说，MinGW-w64 适合学习 C语言 时使用，真正工作还是用 VS2015 更好。当然如果您是在 Linux 下工作，那么[Code::Blocks](https://zhida.zhihu.com/search?content_id=105154835&content_type=Article&match_order=1&q=Code%3A%3ABlocks&zhida_source=entity)可能是一个选择，不过最大的可能是您必须习惯使用 GCC 来编译程序。


### Comparison With Other Projects
> [!links]
> ↗ [MSYS & MSYS2](../../../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/🐚%20Shell%20&%20Terminals%20(Console)/🦞%20Shell%20&%20Script%20Programming/MSYS%20&%20MSYS2.md)

> 🤖 Claude 4.6 Sonnet

| Category                     | PowerShell                   | Cygwin                                    | MSYS2                                                    | MinGW-w64                               | MSVC                          | Git Bash                   | Chocolatey                                                 | Scoop                                          | WSL2                                    | Arch Linux                         |
| ---------------------------- | ---------------------------- | ----------------------------------------- | -------------------------------------------------------- | --------------------------------------- | ----------------------------- | -------------------------- | ---------------------------------------------------------- | ---------------------------------------------- | --------------------------------------- | ---------------------------------- |
| Type                         | Shell + scripting            | POSIX emulation layer                     | Package manager + Unix-like environment (MinGW)          | Compiler toolchain                      | Compiler + IDE toolchain      | Minimal Bash environment   | Windows package manager                                    | Windows package manager                        | Linux VM                                | Full Linux OS                      |
| Primary purpose              | Windows automation           | Run Unix software on Windows as-is        | Build native Windows software in a Unix-like environment | Compile Unix code to native Windows exe | Build native Windows software | Git + basic shell use      | Install/update pre-built Windows software                  | Install/update portable Windows software       | Full Linux on Windows                   | General purpose Linux OS           |
| Shell                        | PowerShell                   | Bash (included)                           | Bash (multiple sub-environments)                         | None                                    | None (uses cmd/PS)            | Bash                       | None (uses PS/cmd)                                         | None (uses PS/cmd)                             | Bash/Zsh/any Linux shell                | Bash/Zsh/any                       |
| Package manager              | None (winget separately)     | apt-cyg (unofficial)                      | pacman (same as Arch Linux)                              | None                                    | choco                         | None                       | choco                                                      | scoop                                          | distro's (apt, pacman)                  | pacman                             |
| Package source               | N/A                          | Built from source                         | Built from source, reproducible                          | N/A                                     | N/A                           | N/A                        | Pre-built binaries (open + closed source)                  | Pre-built binaries                             | Built from source                       | Built from source                  |
| Compiler                     | None                         | GCC (Cygwin-linked)                       | GCC via MinGW (native)                                   | GCC (native)                            | MSVC/Clang-cl                 | None                       | None                                                       | None                                           | GCC/Clang (Linux native)                | GCC/Clang                          |
| Output binaries              | N/A                          | Needs cygwin1.dll                         | Native .exe                                              | Native .exe                             | Native .exe                   | N/A                        | N/A                                                        | N/A                                            | Linux ELF (not .exe)                    | Linux ELF                          |
| Runtime dependency           | Windows                      | cygwin1.dll                               | None                                                     | None                                    | MSVC redistributable          | MSYS2 runtime              | None                                                       | None                                           | Linux kernel (Hyper-V)                  | Linux kernel                       |
| Unix compatibility           | None                         | Very high (focus: Unix as-is)             | Partial (focus: native Windows APIs)                     | Partial (porting needed)                | None                          | Minimal                    | None                                                       | None                                           | Complete (real Linux)                   | Complete                           |
| Windows integration          | Native                       | Poor                                      | Good                                                     | Good                                    | Native                        | Good                       | Good (file associations, shortcuts)                        | Moderate (portable, no system changes)         | Moderate (improving)                    | N/A                                |
| Closed source software       | N/A                          | No                                        | No                                                       | No                                      | Yes (MSVC)                    | No                         | Yes (Visual Studio, etc.)                                  | Limited                                        | No                                      | No                                 |
| Build reproducibility        | N/A                          | Yes                                       | Yes (builds from source)                                 | Yes                                     | No (pre-built)                | N/A                        | No (pre-built)                                             | N/A                                            | Yes                                     | Yes                                |
| Drive paths                  | C:\                          | /cygdrive/c/                              | /c/                                                      | /c/                                     | C:\                           | /c/                        | C:\                                                        | C:\                                            | /mnt/c/                                 | N/A                                |
| Performance                  | Native                       | Slower (translation overhead)             | Native                                                   | Native                                  | Native                        | Native                     | Native                                                     | Native                                         | Near-native                             | Native                             |
| Porting effort for Unix code | N/A                          | Near zero                                 | Some manual work                                         | Some manual work                        | High                          | N/A                        | N/A                                                        | N/A                                            | Zero                                    | Zero                               |
| Disk footprint               | Tiny (built-in)              | Medium                                    | Medium                                                   | Small                                   | Large                         | Small                      | Small                                                      | Small                                          | Large (full Linux)                      | Large                              |
| Rolling release              | No                           | No                                        | Yes (like Arch)                                          | No                                      | No                            | No                         | No                                                         | No                                             | Depends on distro                       | Yes                                |
| Best for                     | Windows sysadmin, automation | Legacy Unix software, zero porting budget | Unix shell + native Windows C/C++ dev                    | Cross-compiling, GCC-specific code      | Windows-first C/C++ apps      | Git + light scripting      | Installing mainstream Windows software incl. closed source | Portable Windows tools, no admin rights needed | Full Linux dev, Linux-targeted software | Full Linux OS with rolling release |
| Popularity today             | High (Windows standard)      | Declining (legacy)                        | High (modern standard)                                   | High (embedded in many tools)           | High (Windows dev standard)   | Very high (ships with Git) | High (IT/DevOps)                                           | Growing                                        | Very high (growing fast)                | High (Linux power users)           |
| Maintained by                | Microsoft                    | Cygwin community                          | MSYS2 project                                            | MinGW-w64 project                       | Microsoft                     | Git for Windows project    | Chocolatey Inc.                                            | Community                                      | Microsoft                               | Arch Linux team                    |

| Goal | Recommendation |
|------|----------------|
| Windows scripting/automation | PowerShell |
| Git + occasional shell use | Git Bash |
| Unix shell as primary on Windows | MSYS2 or WSL2 |
| Full Linux environment on Windows | WSL2 |
| Build native Windows apps in C/C++ | MSVC |
| Build native Windows apps from Unix code | MSYS2 |
| Port Unix code, run it as-is on Windows | Cygwin |
| Software that runs on Linux servers | WSL2 (no cross-compile hassle) |
| Install mainstream Windows software (incl. closed source) | Chocolatey |
| Install portable tools without admin rights | Scoop |
| Familiar Arch Linux tooling on Windows | MSYS2 |
| Full rolling-release Linux OS | Arch Linux |



## Ref
Architecture:
> https://superuser.com/questions/238112/what-is-the-difference-between-i686-and-x86-64
- i686
	- 32-bit Intel x86 arch 
- x86_64
	- 64-bit Intel x86 arch 

> CPU architectures:
>8086, i386, i686,x86, x86_64, arm64,
>https://blog.csdn.net/wf19930209/article/details/79536506 
> 
> 8086
> 
>x86 : 32-bit intel arch
> - i386
> - i686
> 
> arm86 : 64-bit arm arch
> 
> x86_64 : 64-bit intel arch
> - stands for x86 arch's 64-bit extension

Threads:
- posix thread
	- posix, Portable Operating System Interface
- win32 thread

Exception:
- dwarf
- sjlj
- seh

Build version:
