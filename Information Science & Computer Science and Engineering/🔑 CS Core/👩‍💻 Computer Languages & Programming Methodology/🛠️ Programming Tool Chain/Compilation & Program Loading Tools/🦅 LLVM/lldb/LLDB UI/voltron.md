# voltron

[TOC]



## Res
🏠 https://github.com/snare/voltron


## Intro
> Voltron is an extensible debugger UI toolkit written in Python. It aims to improve the user experience of various debuggers (LLDB, GDB, VDB and WinDbg) by enabling the attachment of utility views that can retrieve and display data from the debugger host. By running these views in other TTYs, you can build a customised debugger user interface to suit your needs.


### Setup
```shell
# 1.1 Installation via github
git clone https://github.com/snare/voltron
cd voltron
./install.sh

# 1.2 Installation via pip
/path/to/python -m pip install voltron [ --user ]
# 1.2 source entrty.py in config file (~/.lldbinit or ~/.gdbinit)
## lldb
command script import /path/to/voltron/entry.py
## gdb
source /path/to/voltron/entry.py

```




## Ref

