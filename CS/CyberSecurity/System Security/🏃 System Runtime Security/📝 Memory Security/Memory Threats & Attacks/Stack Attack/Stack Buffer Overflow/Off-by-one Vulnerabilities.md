# Off-by-one Vulnerabilities

[TOC]



## Res
### Related Topics


### Other Resources
📃 http://www.icir.org/matthias/cs161-sp13/aslr-bypass.pdf “ASLR Smack & Laugh Reference” by Tilo Müller



## Intro
> 🔗 https://textbook.cs161.org/memory-safety/vulnerabilities.html#35-off-by-one-vulnerabilities

Off-by-one errors are very common in programming: for example, you might accidentally use `<=` instead of `<`, or you might accidentally start a loop at `i=0` instead of `i=1`. As it turns out, even an off-by-one error can lead to dangerous memory safety vulnerabilities.

Consider a buffer whose bounds checks are off by one. This means we can write `n+1` bytes into a buffer of size `n`, overflowing the byte immediately after the buffer (but no more than that).

![](../../../../../../../../Assets/Pics/Screenshot%202024-09-13%20at%2013.02.53.png)
<small><a>http://www.icir.org/matthias/cs161-sp13/aslr-bypass.pdf</a> “ASLR Smack & Laugh Reference” by Tilo Müller</small>
#### An example: C++ `vtable` pointers
C++ `vtable` pointers are a classic example of a _heap overflow_. In C++, the programmer can declare an object on the heap. Storing an object requires storing a `vtable` pointer, a pointer to an array of pointers. Each pointer in the array contains the address of one of that object’s methods. The object’s instance variables are stored directly above the `vtable` pointer.

If the programmer fails to check bounds correctly, the attacker can overflow one of the instance variables of object `x`. If there is another object above `x` in memory, like object `y` in this diagram, then the attacker can overwrite that object’s `vtable` pointer.

![](../../../../../../../../Assets/Pics/Pasted%20image%2020240913131430.png)

The attacker can overwrite the `vtable` pointer with the address of another attacker-controlled buffer somewhere in memory. In this buffer, the attacker can write the address of some malicious code. Now, when the program calls a method on object `y`, it will try to look up the address of the method’s code in `y`’s `vtable`. However, `y`’s `vtable` pointer has been overwritten to point to attacker-controlled memory, and the attacker has written the address of some malicious code at that memory. This causes the program to start executing the attacker’s malicious code.

This method of injection is very similar to stack smashing, where the attacker overwrites the rip to point to some malicious code. However, overwriting C++ `vtables` requires overwriting a pointer to a pointer.



## Ref
