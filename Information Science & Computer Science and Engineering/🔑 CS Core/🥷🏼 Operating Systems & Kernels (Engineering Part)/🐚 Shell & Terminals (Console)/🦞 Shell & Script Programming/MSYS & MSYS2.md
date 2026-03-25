# MSYS & MSYS2

[TOC]



## Res
🏠 https://www.msys2.org/


### Related Topics
↗ [Windows](../../Microsoft%20Operating%20Systems/Windows/Windows.md)
↗ [MinGW & MinGW-w64](../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/🚠%20Application%20Runtimes%20&%20SDKs/C-like%20Runtimes/C-like%20Compilers%20Suites/MinGW%20&%20MinGW-w64.md)
↗ [Cygwin Project](../../../../Software%20Engineering/🦄%20Computer%20Virtualization/Library%20Level%20Virtualization/Cygwin%20Project/Cygwin%20Project.md)

↗ [WSL (Windows Subsystems for Linux)](../../../../Software%20Engineering/🦄%20Computer%20Virtualization/Library%20Level%20Virtualization/WSL%20(Windows%20Subsystem%20for%20Linux)/WSL%20(Windows%20Subsystems%20for%20Linux).md)


### Other Resources



## Intro
**MSYS2** is a collection of tools and libraries providing you with an easy-to-use environment for building, installing and running native Windows software.

It consists of a command line terminal called [mintty](https://mintty.github.io/), bash, version control systems like git and subversion, tools like tar and awk and even build systems like autotools, all based on a modified version of [Cygwin](https://cygwin.com/). Despite some of these central parts being based on Cygwin, the main focus of MSYS2 is to provide a build environment for native Windows software and the Cygwin-using parts are kept at a minimum. MSYS2 provides up-to-date native builds for GCC, mingw-w64, CPython, CMake, Meson, OpenSSL, FFmpeg, Rust, Ruby, just to name a few.

To provide easy installation of packages and a way to keep them updated it features a package management system called [Pacman](https://wiki.archlinux.org/index.php/pacman), which should be familiar to Arch Linux users. It brings many powerful features such as dependency resolution and simple complete system upgrades, as well as straight-forward and reproducible package building. Our package repository contains [more than 3700 pre-built packages](https://packages.msys2.org/base) ready to install.

For more details see ['What is MSYS2?'](https://www.msys2.org/docs/what-is-msys2/) which also compares MSYS2 to other software distributions and development environments like [Cygwin](https://cygwin.com/), [WSL](https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux), [Chocolatey](https://chocolatey.org/), [Scoop](https://scoop.sh/), ... and ['Who Is Using MSYS2?'](https://www.msys2.org/docs/who-is-using-msys2/) to see which projects are using MSYS2 and what for.


### MSYS2 🆚 Other Projects
#msys2 #powershell #cygwin #minGW #git-bash #wsl #MSVC #scoop #chocolatey #arch_linux

> 🤖 Claude 4.6 Sonnet

| Category                     | PowerShell                   | Cygwin                                    | MinGW-w64                               | MSYS2                                                    | Git Bash                   | WSL2                                    | MSVC                          | Chocolatey                                                 | Scoop                                          | Arch Linux                         |
| ---------------------------- | ---------------------------- | ----------------------------------------- | --------------------------------------- | -------------------------------------------------------- | -------------------------- | --------------------------------------- | ----------------------------- | ---------------------------------------------------------- | ---------------------------------------------- | ---------------------------------- |
| Type                         | Shell + scripting            | POSIX emulation layer                     | Compiler toolchain                      | Package manager + environment                            | Minimal Bash environment   | Linux VM                                | Compiler + IDE toolchain      | Windows package manager                                    | Windows package manager                        | Full Linux OS                      |
| Primary purpose              | Windows automation           | Run Unix software on Windows as-is        | Compile Unix code to native Windows exe | Build native Windows software in a Unix-like environment | Git + basic shell use      | Full Linux on Windows                   | Build native Windows software | Install/update pre-built Windows software                  | Install/update portable Windows software       | General purpose Linux OS           |
| Shell                        | PowerShell                   | Bash (included)                           | None                                    | Bash (multiple sub-environments)                         | Bash                       | Bash/Zsh/any Linux shell                | None (uses cmd/PS)            | None (uses PS/cmd)                                         | None (uses PS/cmd)                             | Bash/Zsh/any                       |
| Package manager              | None (winget separately)     | apt-cyg (unofficial)                      | None                                    | pacman (same as Arch Linux)                              | None                       | distro's (apt, pacman)                  | choco                         | choco                                                      | scoop                                          | pacman                             |
| Package source               | N/A                          | Built from source                         | N/A                                     | Built from source, reproducible                          | N/A                        | Built from source                       | N/A                           | Pre-built binaries (open + closed source)                  | Pre-built binaries                             | Built from source                  |
| Compiler                     | None                         | GCC (Cygwin-linked)                       | GCC (native)                            | GCC via MinGW (native)                                   | None                       | GCC/Clang (Linux native)                | MSVC/Clang-cl                 | None                                                       | None                                           | GCC/Clang                          |
| Output binaries              | N/A                          | Needs cygwin1.dll                         | Native .exe                             | Native .exe                                              | N/A                        | Linux ELF (not .exe)                    | Native .exe                   | N/A                                                        | N/A                                            | Linux ELF                          |
| Runtime dependency           | Windows                      | cygwin1.dll                               | None                                    | None                                                     | MSYS2 runtime              | Linux kernel (Hyper-V)                  | MSVC redistributable          | None                                                       | None                                           | Linux kernel                       |
| Unix compatibility           | None                         | Very high (focus: Unix as-is)             | Partial (porting needed)                | Partial (focus: native Windows APIs)                     | Minimal                    | Complete (real Linux)                   | None                          | None                                                       | None                                           | Complete                           |
| Windows integration          | Native                       | Poor                                      | Good                                    | Good                                                     | Good                       | Moderate (improving)                    | Native                        | Good (file associations, shortcuts)                        | Moderate (portable, no system changes)         | N/A                                |
| Closed source software       | N/A                          | No                                        | No                                      | No                                                       | No                         | No                                      | Yes (MSVC)                    | Yes (Visual Studio, etc.)                                  | Limited                                        | No                                 |
| Build reproducibility        | N/A                          | Yes                                       | Yes                                     | Yes (builds from source)                                 | N/A                        | Yes                                     | No (pre-built)                | No (pre-built)                                             | N/A                                            | Yes                                |
| Drive paths                  | C:\                          | /cygdrive/c/                              | /c/                                     | /c/                                                      | /c/                        | /mnt/c/                                 | C:\                           | C:\                                                        | C:\                                            | N/A                                |
| Performance                  | Native                       | Slower (translation overhead)             | Native                                  | Native                                                   | Native                     | Near-native                             | Native                        | Native                                                     | Native                                         | Native                             |
| Porting effort for Unix code | N/A                          | Near zero                                 | Some manual work                        | Some manual work                                         | N/A                        | Zero                                    | High                          | N/A                                                        | N/A                                            | Zero                               |
| Disk footprint               | Tiny (built-in)              | Medium                                    | Small                                   | Medium                                                   | Small                      | Large (full Linux)                      | Large                         | Small                                                      | Small                                          | Large                              |
| Rolling release              | No                           | No                                        | No                                      | Yes (like Arch)                                          | No                         | Depends on distro                       | No                            | No                                                         | No                                             | Yes                                |
| Best for                     | Windows sysadmin, automation | Legacy Unix software, zero porting budget | Cross-compiling, GCC-specific code      | Unix shell + native Windows C/C++ dev                    | Git + light scripting      | Full Linux dev, Linux-targeted software | Windows-first C/C++ apps      | Installing mainstream Windows software incl. closed source | Portable Windows tools, no admin rights needed | Full Linux OS with rolling release |
| Popularity today             | High (Windows standard)      | Declining (legacy)                        | High (embedded in many tools)           | High (modern standard)                                   | Very high (ships with Git) | Very high (growing fast)                | High (Windows dev standard)   | High (IT/DevOps)                                           | Growing                                        | High (Linux power users)           |
| Maintained by                | Microsoft                    | Cygwin community                          | MinGW-w64 project                       | MSYS2 project                                            | Git for Windows project    | Microsoft                               | Microsoft                     | Chocolatey Inc.                                            | Community                                      | Arch Linux team                    |

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


> 🔗 https://www.msys2.org/docs/what-is-msys2/

In case you'd like to see more comparisons or feel that they could be improved please let us know.
#### MSYS2 vs WSL
MSYS2 allows you to build native Windows programs, while with [WSL](https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux) you can only cross compile them which makes things more complicated. If you are just looking for Linux CLI tools, or want to build software that ends up on a Linux server anyway then WSL is the better choice.
#### MSYS2 vs Chocolatey
[Chocolatey](https://chocolatey.org/) mainly bundles already built (open and closed source) software and makes it easy to install/update them. In MSYS2 on the other hand all packages are built from source and you can easily reproduce the builds on your machine. Chocolatey packages have the advantage that the bundled installers usually have better Windows integration, in that they set up file associations, shortcuts, etc. and because they are not built from source there are also lots of packages for closed source software like Visual Studio etc. that would be hard to manage/update otherwise.
#### MSYS2 vs Cygwin
The unixy tools in MSYS2 are directly based on [Cygwin](https://cygwin.com/), so there is some overlap there. While Cygwin focuses on building Unix software on Windows as is, MSYS2 focuses on building native software built against the Windows APIs.
#### MSYS2 vs Arch Linux
MSYS2 and [Arch Linux](https://www.archlinux.org/) share the package manager and all that comes with it, like build definitions, rules for how to package things, how updates work, how packages are signed, how packages are shipped, the rolling release nature and so on. By re-using this functionality and concepts we can focus on the actual packages and profit from the experience and work of Arch Linux developers. Users already familiar with Arch Linux will also have an easier time getting started.
#### MSYS2 vs Scoop
Due to lack of experience with [scoop](https://scoop.sh/) see their comparison page:
- [https://github.com/lukesampson/scoop/wiki/Chocolatey-Comparison](https://github.com/lukesampson/scoop/wiki/Chocolatey-Comparison)
- [https://github.com/lukesampson/scoop/wiki/Cygwin-and-MSYS-Comparison](https://github.com/lukesampson/scoop/wiki/Cygwin-and-MSYS-Comparison)



## Ref
