# GNU Binutils

[TOC]



## Res
🏠 https://www.gnu.org/software/binutils/


### Related Topics
↗ [GNU (GNU's Not Unix)](../../🐑%20GNU%20(GNU's%20Not%20Unix)/GNU%20(GNU's%20Not%20Unix).md)


### Learning Resources



## Intro
The GNU Binutils are a collection of binary tools. The main ones are:
- **ld** - the GNU linker.
- **as** - the GNU assembler.
- **gold** - a new, faster, ELF only linker.

But they also include:
- **addr2line** - Converts addresses into filenames and line numbers.
- **ar** - A utility for creating, modifying and extracting from archives.
- **c++filt** - Filter to demangle encoded C++ symbols.
- **dlltool** - Creates files for building and using DLLs.
- **elfedit** - Allows alteration of ELF format files.
- **gprof** - Displays profiling information.
- **gprofng** - Collects and displays application performance data.
- **nlmconv** - Converts object code into an NLM.
- **nm** - Lists symbols from object files.
- **objcopy** - Copies and translates object files.
- **objdump** - Displays information from object files.
- **ranlib** - Generates an index to the contents of an archive.
- **readelf** - Displays information from any ELF format object file.
- **size** - Lists the section sizes of an object or archive file.
- **strings** - Lists printable strings from files.
- **strip** - Discards symbols.
- **windmc** - A Windows compatible message compiler.
- **windres** - A compiler for Windows resource files.

As well as some libraries:
- **libbfd** - A library for manipulating binary files in a variety of different formats.
- **libctf** - A library for manipulating the CTF debug format.
- **libopcodes** - A library for assembling and disassembling a variety of different assembler languages.
- **libsframe** - A library for manipulating the SFRAME debug format.

Most of these programs use **BFD**, the Binary File Descriptor library, to do low-level manipulation. Many of them also use the **opcodes** library to assemble and disassemble machine instructions.

The binutils have been ported to most major Unix variants as well as Wintel systems, and their main reason for existence is to give the [GNU system](https://www.gnu.org/gnu/gnu-history.html) (and [GNU/Linux](https://www.gnu.org/gnu/linux-and-gnu.html)) the facility to compile and link programs.



## Main `Binutils` Tools
### 👉 `ld` - the GNU linker


### 👉 `as` - the GNU assembler


### 👉 `gold` - a new, faster, ELF only linker



## Other `Binutils` Tools
### 👉 `c++filt` - Filter to demangle encoded C++ symbols



## Ref

