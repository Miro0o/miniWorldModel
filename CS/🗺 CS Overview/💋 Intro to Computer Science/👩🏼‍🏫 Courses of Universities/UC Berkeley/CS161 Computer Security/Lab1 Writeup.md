# Lab1 Writeup

[TOC]



## Question 2: Spica
### Main Idea
The code has integer conversion vulnerability. It defines `size` as an signed integer `int8_t`, using `if` sentence as boundary checker (`if size > 128`), but passing it to the function of `fread` and being treated there as an unsigned integer. Hence a negative number of `size = -1` can bypass the boundary checker while creating huge length of inputs for `fread`.


### Magic Numbers
- The number of bytes we want to write, `0xff = -1`
- The address of SHELLCODE (`0xffffd648`)


### Exploit Structure
The exploit is as below: 
- First is the number of file size (`0xff = -1`)
- then garbage bytes
- then SHELLCODE
- then garbage bytes
- then the address of SHELlCODE (`\x48\xd6\xff\xff`)
- then garbage bytes

![|700](../../../../../../Assets/Pics/Screenshot%202024-09-21%20at%2000.31.01.png)


### Exploit GDB Output
The screenshot below shows the memory layout after we overflowed the buffer of `msg`: 
- first is the garbage bytes. the program will not store the first byte of `0xff` in `msg`.
- then the SHELLCODE, starting with the value of `0xcd58326a`
- then garbage bytes
- then the SHELLCODE's address, `0xffffd648`
- then also garbage bytes.

![|700](../../../../../../Assets/Pics/Screenshot%202024-09-21%20at%2000.33.11.png)



## Question 3: Polaris
### Main Idea
This program's vulnerability comes from its own programing logic: if it sees two character `\x` it automatically reads four bytes following `\x` and print those four bytes, without any boundary checking. We thus make the last two character of our inputing to the buffer as `\x`, which is right below of the canary value in memory. When the program reads our `\x`, it assumes the following four bytes is an integer value and thus reads them, which is the canary value in our case, and print them to us. We thus cheated the program to leak the canary. 


### Magic Numbers
- The address of SHELLCODE (`0xffffd6f0`)
- The value of canary (`0xe465fc28`)


### Exploit Structure
- First we send `ABCD*3 + \\x\n` to trick the program to print the canary value 
- Then we send `A*15 + \x00 + CANARY + B*9 + \xf0\xd6\xff\xff + SHELLCODE + \n`
	- `A` and `B` are just garbage bytes
	- `\x00` is the normal terminating character. This is to prevent the program to crash. 
	- `\xf0\xd6\xff\xff` is the address of SHELLCODE


### Exploit GDB Output
As the screenshot shows below, we successfully tick the program to leak the canary. From c.buffer, first is our 16 garbage bytes ending with `\x00`, then is the leaked canary, the garbage bytes, the `rip` overwritten to the address of our shellcode, then our shellcode. 

![](../../../../../../Assets/Pics/Screenshot%202024-09-21%20at%2000.17.00.png)



## Question 4: Vega
### Main Idea
This program has off-by-one vulnerability. In the program it falsely check the boundary of bytes writing to the buffer, as a result if we write contents exactly of the size of the buffer, the terminating `\00` character would overflow to the bytes above buffer, i.e. the least significant byte of `fsp`. This then would make `ebp` return to the false address, ideally back to the buffer. So when it returns the second time, at the epilogue of the program `mov %esp, %ebp` would pull `esp` to the same place of `ebp`, then later `pop %eip` would assign the value we previously placed in the buffer to `eip`, as its new return address, which is our shellcode address. Thus we successfully changed the control flow of the program. The process is described as below, from  [“ASLR Smack & Laugh Reference” by Tilo Müller](http://www.icir.org/matthias/cs161-sp13/aslr-bypass.pdf):

![](../../../../../../Assets/Pics/Screenshot%202024-09-20%20at%2023.35.06.png)


### Magic Numbers
- The address of SHELLCODE (`0xffffdf9c`)
- The address of `FSP` (`0xffffd648`)


### Exploit Structure
We place our exploit as below:
- `0xaa*4*40` as garbage bytes
- `\x6b\xfd\xff\xff` as the `ebp`'s value. (this is useless thuogh)
- `\x9c\xdf\xff\xff'` as the address of SHELLCODE
- `0x48*32` as garbage bytes


### Exploit GDB Output
As we can see from below, the buffer is filled with first garbage bytes, then the SHELLCODE's address of `0xffffdf9c` at the address of `ffffd64c`, and then garbage bytes again. 

![|700](../../../../../../Assets/Pics/Screenshot%202024-09-20%20at%2023.51.37.png)



## Question 5: Deneb
### Main Idea
The program violates the atomicity principle of an operation: it allows we write to the file after it read it to check its size. So the idea here is to write few bytes to the file, waiting for `orbit.c` to check the size of that file and pass it, then writing into the file of our actual shellcode and let the program write them into the buffer/memory. Hence, we bypass the size check. 


### Magic Numbers
- address of buffer (`0xffffd678`)
- address of `rip` (`0xffffd70c`)
- the distance between them 
- address of shellcode (`0xffffd710`)


### Exploit Structure
we place our exploit as follows:
- `A*16*9 + ABCD` garbage bytes
- `\x10\xd7\xff\xff` address of shellcode
- SHELLCODE


### Exploit GDB Output
As we can see from below screenshot, there are first garbage bytes of `0x41414141` and `0x44434241` in the buffer, then the address of SHELLCODE, then the actual SHELLCODE starting with `0xdb31c031`.

![](../../../../../../Assets/Pics/Screenshot%202024-09-20%20at%2023.24.28.png)



## Question 6: Antares
### Main Idea
The program has format string vulnerability. We use `%c` to pump the argument pointer of `printf` all the way up to our buffer so that now we have the control over `printf`, and using `%u` and `%hn` to write the designated value to the designated address. The memory layout is described as below:

![](../../../../../../Assets/Pics/Screenshot%202024-09-20%20at%2022.52.51.png)


### Magic Numbers
- The address of our SHELLCODE (`0xffffd858`)
- The address of `arg[0]` of `printf` function. (`0xffffd608`)
- The address of `buf`. (`0xffffd630`)
- The address of `rip` to caliberate. (`0xffffd618`) We are supposed to overwrite this address to the address of our SHELLCODE.


### Exploit Structure
From bottum up: `A*4 + \x1c\xd6\xff\xff + A*4 + \x1e\xd6\xff\xff + %c*15 + %SECOND_HALFu + %hn + %FIRST_HALFu + %hn`
- `A` is garbage byte to hold places
- `\x1c\xd6\xff\xff` is the address of `rip`'s first byte (least significant byte)
- `\x1e\xd6\xff\xff` is the address of `rip`'s third byte
- `%c` is to move arguments of `printf` up
- `SECOND_HALF` is the value of two least significant bytes of `rip` minus the number of characters already printed out up util it was accessed
- `FIRST_HALF` is the value of two most significant bytes of `rip` minus the value of two least significant bytes of `rip`.


### Exploit GDB Output
The screenshot below corresponds to the memory layout showed in "Main Idea" section. 
- We successfully overwrite the address of `rip` to the caliberate (`0xffd61c`) to the address of shellcode (`ffffd858`). 
- Starting from `0xffffd638` is our buffer. It is filled with contents mentioned in "Exploit Structure" section.

![](../../../../../../Assets/Pics/Screenshot%202024-09-21%20at%2000.43.59.png)



## Question 7: Rigel
### Main Idea
Although ALSR and Canary are enabled, we can get the value of canary and the address of function `printf` from the program. To bypass canary, we simply use that value sent back to us; to bypass ALSR, we use `ret2ret` introduced in the paper [“ASLR Smack & Laugh Reference” by Tilo Müller](http://www.icir.org/matthias/cs161-sp13/aslr-bypass.pdf).  

![|300](../../../../../../Assets/Pics/Screenshot%202024-09-20%20at%2022.07.23.png)

The idea of `ret2ret` is, find a `ret` instruction in the assembly code of program (the `ret` instruction of `printf`, in our case), and then find a address of a real pointer (denoted `P` here) that already existing in the memory above `sfp`. For `ret` instruction, we use it to move `eip` upwords until it meets `P`. For `P`, we overwrites its least significant byte via some method to `0x00`. This would let `P` points to somewhere below it, ideally our `NOP` zone, and then from there `EIP` could slide up until it meets payload, and thus the exploitation. This process is as the diagram above.


### Magic Numbers
- The value of canary, which is printed out by `lockdown.c`.
- The memory address of `printf`, which is printed out by `lockdown.c`, and the offset from the address of `printf` to instruction of `ret`. This offset is `41` here. 


### Exploit Structure
From buffer to `P`, we place such contents: starting with `NOP` instruction, then our payload (ideally payload should be just below the SFP), then the address of `ret` instruction. We should place `ret` up until exactly below `P`, with additional terminating `\n` character which would overwrite the last byte of `P` in memory (least significant byte) to `\x00`.
From buttom up: `/90 * 184 + SHELLCODE + CANARY + a*12 + ret_address*7 + \n`


### Exploit GDB Output
For a successful attack, the memory layout should be similar to below screenshot: the highlighted address on the righthand is `P`. As is shown we successfully overwrite its last bytes to `\x00`. However in this screenshot the attack was not successful because the `rip` eventually points to somewhere else other than the area of `0x90909090`. Our shellcode, starting with `0xdb31c031`, is also visible. `0xf7f2a113` is the address of `ret` instruction.
For a successful attack the program should be run multiple times until `P` points to the right area.

![](../../../../../../Assets/Pics/Screenshot%202024-09-20%20at%2022.45.16.png)
