# Memory Protections & Mitigations

[TOC]



## Res
### Related Topics
↗ [Win Memory Protection Mechanism](../../../🧸%20Operating%20System%20Security%20(&%20Mobile%20Security)/🪟%20Windows%20Security/Windows%20Security%20Mechanisms/📌%20Win%20Memory%20Protection%20Mechanism/Win%20Memory%20Protection%20Mechanism.md)
↗ [Linux Memory Protection Mechanism](../../../🧸%20Operating%20System%20Security%20(&%20Mobile%20Security)/🐏%20Linux%20Security/Linux%20Kernel%20Security%20Mechanisms/📌%20Linux%20Memory%20Protection%20Mechanism/Linux%20Memory%20Protection%20Mechanism.md)

↗ [Computer Languages & Programming Methodology](../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Computer%20Languages%20&%20Programming%20Methodology.md)
↗ [Compilation & Program Loading Tools](../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/Compilation%20&%20Program%20Loading%20Tools/Compilation%20&%20Program%20Loading%20Tools.md)
↗ [Operating System Security (& Mobile Security)](../../../🧸%20Operating%20System%20Security%20(&%20Mobile%20Security)/Operating%20System%20Security%20(&%20Mobile%20Security).md)


### Other Resources
📖 https://textbook.cs161.org/memory-safety/mitigations.html



## 🎯 How to Mitigate /Eliminate Memory Vulnerabilities?
> 🔗 https://textbook.cs161.org/memory-safety/mitigations.html

> Since most OS kernels are written in C/C++, which relied by all above applications, we cannot really eliminate memory vulnerabilities because eventually all codes are running in c compiled instructions. However, by principle of "defense-in-depth", we can ensure we don't write programs that has memory safety issues using multiple methods, including memory-safety languages, which fundamentally guarantee the we produce memory safety code (which will also eventually implemented in memory-unsafe language, C, but memory-safety languages like java make sue our ultimate memory-unsafe C language version of code is safe 🥺). Except using memory-safety languages, all other means do not eliminate such insecurity, these includes writing memory safety codes by programmer (but they still would make mistakes), using software testing tools (but they don't guarantee 100% coverage), mitigating specific exploits, and so on.
> ![](../../../../../../../Assets/Pics/Pasted%20image%2020240915011047.png)


### 1. Memory-Safety Languages (SDK/Library)
Some modern languages are designed to be intrinsically memory-safe, no matter what the programmer does. Java, Python, Go, Rust, Swift, and many other programming languages include a combination of compile-time and runtime checks that prevent memory errors from occurring. Using a memory safe language is the _only_ way to stop 100% of memory safety vulnerabilities. In an ideal world, everyone would program in memory-safe languages and buffer overflow vulnerabilities would no longer exist. However, because of legacy code and perceived[1](https://textbook.cs161.org/memory-safety/mitigations.html#fn:1) performance concerns, memory-unsafe languages such as C are still prevalent today.


### 2. Memory-Safety Codes /Defensive Programming (Programmer)
> ↗ [Program Debugging & Defensive Programming](../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Program%20Debugging%20&%20Defensive%20Programming.md)

One way to ensure memory safety is to carefully reason about memory accesses in your code, by defining pre-conditions and post-conditions for every function you write and using invariants to prove that these conditions are satisfied. Although it is a good skill to have, this process is painstakingly tedious and rarely used in practice, so it is no longer in scope for this class. 

> If you’d like to learn more, see this lecture from David Wagner: [video](https://www.youtube.com/watch?v=d8UGf6aWiQI), [slides](https://su20.cs161.org/lectures/4/lec04_optional.pdf).

Another example of defending against memory safety vulnerabilities is writing memory-safe code through defensive programming and using safe libraries. 
- **Defensive programming** is very similar to defining pre and post conditions for every written function, wherein you always add checks in your code just in case something could go wrong. For example, you would always check that a pointer is not null before dereferencing it, even if you are sure that the pointer is always going to be valid. However, as mentioned earlier, this relies a lot on programmer discipline and is very tedious to properly implement.
- As such, a more common method is to use **safe libraries**, which, in turn, use functions that check bounds so you don’t have to. For example, 
	- using `fgets` instead of `gets`, 
	- `strncpy` or `strlcpy` instead of `strcpy`,
	- `snprintf` instead of `sprintf`
- **Reason carefully** about your code
	- When writing code, define a set of preconditions, postconditions, and invariants that must be satisfied for the code to be memory-safe
	- Very tedious and rarely used in practice,  


### 3. Software Analyzing /Testing
> ↗ [Software (Program) Techniques & Binary Engineering](../../../../🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/Software%20(Program)%20Techniques%20&%20Binary%20Engineering.md)
> ↗ [Techniques - Vulnerability Disclosure & Discovery](../../../../🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🐒%20Software%20Vulnerability%20&%20Weakness/Vulnerability%20Mangement%20Techniques/Techniques%20-%20Vulnerability%20Disclosure%20&%20Discovery.md)
> ↗ [Security Audit & Security Audit Trail](../../../../⛈️%20Risk%20Management/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Security%20Audit%20&%20Security%20Audit%20Trail/Security%20Audit%20&%20Security%20Audit%20Trail.md)
> ↗ [Code Review](../../../../⛈️%20Risk%20Management/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Security%20Audit%20&%20Security%20Audit%20Trail/Code%20Review.md)

Yet another way to defend your code is to use tools to analyze and patch insecure code. 
- Utilizing **run-time checks** that do automatic bound-checking, for example is an excellent way to help your code stay safe. If your check fails, you can direct it towards a controlled crash, ensuring that the attacker does not succeed. 
	- Monitor code for run-time misbehavior
		- Example: Look for illegal calling sequences
		- Example: Your code never calls execve, but you notice that your code is executing execve
		- Probably too late by the time you detect it
	- Contain potential damage
		- Example: Run system components in sandboxes or virtual machines (VMs)
		- Think about privilege separation 
- You can also probe your own system for vulnerabilities, by subjecting your code to **thorough software tests**. Though it is pretty difficult to know whether you have tested your code “enough” to deem it safe, there are several code-coverage tools that can help you out.
	- Bug-finding tools
		- Excellent resource, as long as there aren’t too many false alarms
		- ↗ [Valgrind](../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/Debuggers%20&%20Disassemblers%20&%20Decompilers/Disassemblers%20&%20Decompilers/Valgrind.md) (to detect memory leaks)
		- ↗ [Fuzzing (Concrete Execution)](../../../../🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/👙%20DCA%20(Dynamic%20Code%20Analysis)%20&%20DAST/Fuzzing%20(Concrete%20Execution)/Fuzzing%20(Concrete%20Execution).md), or testing with random inputs, testing corner cases
	- Code review
		- Have someone look over your code for memory safety errors. Can be very effective… but also expensive
	- Vulnerability scanning
		- Probe your systems for known flaws
	- Penetration testing (“pen-testing”)
		- Pay someone to break into your system



## 🎯 4. Exploit Mitigations /Code Hardening Defenses (Our Topics Here 🥺)
### 📌 Synergistic Protection & Combining Mitigations 
We can use multiple mitigations together to force the attacker to find multiple vulnerabilities to exploit the program; this is a process known as **synergistic protection**, where one mitigation helps strengthen another mitigation. For example, combining ASLR and non-executable pages results in an attacker not being able to write their own shellcode, because of non-executable pages, and not being able to use existing code in memory, because they don’t know the addresses of that code (ASLR). Thus, to defeat ASLR and non-executable pages, the attacker needs to find two vulnerabilities. First, they need to find a way to leak memory and reveal the address location (to defeat ASLR). Next, they need to find a way to write to memory and write an ROP chain (to defeat non-executable pages).


### Non-executable Pages
> ↗ [Return-to-libc Attack](../Memory%20Threats%20&%20Attacks/Stack%20Attack/Return-to-libc%20&%20ROP/Return-to-libc%20Attack.md)
> ↗ [ROP (Return-Oriented Programming)](../Memory%20Threats%20&%20Attacks/Stack%20Attack/Return-to-libc%20&%20ROP/ROP%20(Return-Oriented%20Programming).md)


### Stack Canaries
> In reality, stack canaries are **usually guaranteed to contain a null byte (usually as the first byte)**. This lets the canary defend against string-based memory safety exploits, such as vulnerable calls to `strcpy` that read or write values from the stack until they encounter a null byte. The null byte in the canary stops the `strcpy` call before it can copy past the canary and affect the rip.
#### Subverting Stack Canaries
Stack canaries make buffer overflow attacks harder for an attacker, but they do not defend programs against all buffer overflow attacks. There are many exploits that the stack canary cannot detect:
- Stack canaries can’t defend against attacks outside of the stack. For example, stack canaries do nothing to protect vulnerable heap memory.
- Stack canaries don’t stop an attacker from overwriting other local variables. Consider the `authenticated` example from the previous section. An attacker overflowing a buffer to overwrite the `authenticated` variable never actually changes the canary value.
- Some exploits can write to non-consecutive parts of memory. For example, format string vulnerabilities let an attacker write directly to the rip without having to overwrite everything between a local variable and the rip. This lets the attacker write "around" the canary and overwrite the rip without changing the value of the canary.

Additionally, there are several techniques for defeating the stack canary. These usually involve the attacker modifying their exploit to overwrite the canary with its original value. When the program returns, it will see that the canary is unchanged, and the program won’t detect the exploit.

**Guess the canary**: On a 32-bit architecture, the stack canary usually only has 24 bits of entropy (randomness), because one of the four bytes is always a null byte. If the attacker runs the program with an exploit, there is a roughly 1 in 224 chance that the the value the attacker is overwriting the canary with matches the actual canary value. Although the probability of success is low on one try, the attacker can simply run the program 224 times and successfully exploit the program at least once with high probability.

Depending on the setting, it may be easy or hard to run a program and inject an exploit 224 times. If each try takes 1 second, the attacker would need to try for over 100 days before they succeed. If the program is configured to take exponentially longer to run each time the attacker crashes it, the attacker might never be able to try enough times to succeed. However, if the attacker can try thousands of times per second, then the attacker will probably succeed in just a few hours.

On a 64-bit architecture, the stack canary has 56 bits of randomness, so it is significantly harder to guess the canary value. Even at 1,000 tries per second, an attacker would need over 2 million years on average to guess the canary!

**Leak the canary**: Sometimes the program has a vulnerability that allows the attacker to read parts of memory. For example, a format string vulnerability might let the attacker print out values from the stack. An attacker could use this vulnerability to leak the value of the canary, write it down, and then inject an exploit that overwrites the canary with its leaked value. All of this can happen within a single run of the program, so the canary value doesn’t change on program restart.


### Pointer Authentication
> ↗ [Message Authentication (报文鉴别，消息鉴别)](../../../../🚬%20Cryptology%20&%20Secure%20Communication/🤐%20Cryptography/Modern%20Cryptography/Cryptographic%20Techniques%20for%20Integrity%20&%20Authentication/Message%20Authentication%20(报文鉴别，消息鉴别)/Message%20Authentication%20(报文鉴别，消息鉴别).md)

#### Subverting Pointer Authentication
Using a different PAC for every address makes this defense extremely strong. An attacker who can write to random parts of memory can defeat the stack canary, but cannot easily defeat pointer authentication: they could try to leave the PAC untouched, but because they’ve changed the address, the old secret value will no longer check out. The CPU will run f on the attacker-generated address, and the output will be different from the old secret value (which was generated by running f on the original address). The attacker also cannot generate the correct secret value for their malicious address, because they don’t know what the secret key is. Finally, an attacker could try to leak some addresses and secret values from memory, but knowing the PACs doesn’t help the attacker generate a valid PAC for their chosen malicious address.

With pointer authentication enabled, an attacker is never able to overwrite pointers on the stack (including the rip) without generating the corresponding secret for the attacker’s malicious address. Without knowing the key, the attacker is forced to guess the correct secret value for their address. For a 20-bit secret, the attacker has a 1 in 220 chance of success.

Another way to subvert pointer authentication is to find a separate vulnerability in the program that allows the attacker to trick the program into creating a validated pointer. The attacker could also try to discover the secret key stored in the CPU, or find a way to subvert the function f used to generate the secret values.


### Address Space Layout Randomization (ASLR)
> ↗ [ASLR (Address Space Layout Randomization)](ASLR%20(Address%20Space%20Layout%20Randomization).md)

#### Subverting ASLR
The two main ways to subvert ASLR are similar to the main ways to subvert the stack canary: guess the address, or leak the address.

**Guess the address**: Because of the constraints on address randomization, a 32-bit system will sometimes only have around 16 bits of entropy for address randomization. In other words, the attacker can guess the correct address with a 1 in 216 probability, or the attacker can try the exploit 216 times and expect to succeed at least once. This is less of a problem on 64-bit systems, which have more entropy available for address randomization.

Like guessing the stack canary, the feasibility of guessing addresses in ASLR depends on the attack setting. For example, if each try takes 1 second, then the attacker can make 216 attempts in less than a day. However, if each try after a crash takes exponentially longer, 216 attempts may become infeasible.

**Leak the address**: Sometimes the program has a vulnerability that allows the attacker to read parts of memory. For example, a format string vulnerability might let the attacker print out values from the stack. The stack often stores absolute addresses, such as pointers and saved registers (`sfp` and `rip`). If the attacker can leak an absolute address, they may be able to determine the absolute address of other parts of memory relative to the absolute address they leaked.

Note that ASLR randomizes absolute addresses by changing the start of sections of memory, but it does not randomize the _relative_ addresses of variables. For example, even if ASLR is enabled, the rip will still be 4 bytes above the `sfp` in a function stack frame. This means that an attacker who leaks the absolute address of the `sfp` could deduce the address of the rip (and possibly other values on the stack).


### Control Flow Integrity (CFI)
↗ [CFI (Control-Flow Integrity)](CFI%20(Control-Flow%20Integrity).md)



## Ref
[缓冲区溢出与攻防博弈]: https://cloud.tencent.com/developer/article/2201574

微软的内存保护机制大致分为以下几种：
1. 堆栈缓冲区溢出检测保护 GS (编译器)
2. 安全结构化异常处理保护 Safe SEH
3. 堆栈 SEH 覆盖保护 SEHOP
4. 地址空间布局随机化保护 ASLR
5. 堆栈数据执行保护 DEP
