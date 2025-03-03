# gdbinit

[TOC]



## Res


## Intro


## Ref
[Pwndbg + GEF + Peda — One for all, and all for one]: https://infosecwriteups.com/pwndbg-gef-peda-one-for-all-and-all-for-one-714d71bf36b8

In `.gdbinit` file define instruction:
```shell
define init-peda  
source ~/peda/peda.py  
end  
document init-peda  
Initializes the PEDA (Python Exploit Development Assistant for GDB) framework  
end  
  
define init-pwndbg  
source ~/.gdbinit_pwndbg  
end  
document init-pwndbg  
Initializes PwnDBG  
end  
  
define init-gef  
source ~/.gdbinit-gef.py  
end  
document init-gef  
Initializes GEF (GDB Enhanced Features)  
end
```

In `/usr/local/bin/gdb-xxx` file call defined instruction:
```shell
#!/bin/sh  
exec gdb -q -ex init-peda "$@"
```


[👍 GDB - Init File]: https://www.cse.unsw.edu.au/~learn/debugging/modules/gdb_init_file/
