# pwntools

[TOC]



## Res
🚧 https://github.com/Gallopsled/pwntools

📂 Our documentation is available at [docs.pwntools.com](https://docs.pwntools.com/)

📂 A series of tutorials is also [available online](https://github.com/Gallopsled/pwntools-tutorial#readme)

🚀 To get you started, we've provided some example solutions for past CTF challenges in our [write-ups repository](https://github.com/Gallopsled/pwntools-write-ups).



## Intro
Pwntools is a CTF framework and exploit development library. Written in Python, it is designed for rapid prototyping and development, and intended to make exploit writing as simple as possible.

```python
from pwn import *
context(arch = 'i386', os = 'linux')

r = remote('exploitme.example.com', 31337)
# EXPLOIT CODE GOES HERE
r.send(asm(shellcraft.sh()))
r.interactive()
```



## Ref

