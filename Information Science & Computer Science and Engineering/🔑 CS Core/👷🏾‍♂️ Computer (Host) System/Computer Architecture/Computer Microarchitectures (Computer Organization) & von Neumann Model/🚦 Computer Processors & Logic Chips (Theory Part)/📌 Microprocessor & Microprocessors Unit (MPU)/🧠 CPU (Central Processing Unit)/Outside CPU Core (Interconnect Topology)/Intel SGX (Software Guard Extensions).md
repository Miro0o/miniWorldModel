# Intel SGX (Software Guard Extensions)

[TOC]



## Res
### Related Topics
↗ [Intel](../../../../../../../../🗺%20CS%20Overview/Electronics%20&%20Information%20Technologies%20Business%20Fields%20Research/Hardware%20Industry%20&%20Manufacturers/🏖️%20Semiconductor%20Industry%20&%20Companies/Chip%20Manufacturers/Intel.md)
↗ [x86 Architecture Family (80x86, 8086 family)](../../../../../Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture/CISC%20(Complex%20Instruction%20Set%20Computer)/x86%20Architecture%20Family%20(80x86,%208086%20family)/x86%20Architecture%20Family%20(80x86,%208086%20family).md)
↗ [CPU (Central Processing Unit)](../CPU%20(Central%20Processing%20Unit).md)


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Software_Guard_Extensions

**Intel Software Guard Extensions (SGX)** is a set of instruction codes implementing trusted execution environment that are built into some Intel central processing units (CPUs). They allow user-level and operating system code to define protected private regions of memory, called enclaves. SGX is designed to be useful for implementing **secure remote computation**, **secure web browsing**, and **digital rights management (DRM)**. Other applications include concealment of proprietary algorithms and of encryption keys.

SGX involves encryption by the CPU of a portion of memory (the enclave). Data and code originating in the enclave are decrypted on the fly within the CPU, protecting them from being examined or read by other code, including code running at higher privilege levels such the operating system and any underlying hypervisors. While this can mitigate many kinds of attacks, it does not protect against side-channel attacks.

A pivot by Intel in 2021 resulted in the deprecation of SGX from the 11th and 12th generation Intel Core Processors, but development continues on Intel Xeon for cloud and enterprise use.



## Ref

