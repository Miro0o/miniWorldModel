# Android Runtime (ART) and Dalvik Virtual Machine (DVM)

[TOC]



## Res
📂 [Android OS Documentation](https://source.android.com/docs)
📂 https://source.android.com/docs/core/runtime


### Related Topics
↗ [Android & AOSP](../../../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Android%20&%20AOSP/Android%20&%20AOSP.md)
↗ [Ark Bytecode](../../../../Other%20Languages%20&%20Formats/ASM%20(Assembly%20Languages)%20🆘/🌙%20Hardware-Independent%20ASM%20&%20Bytecode%20Sets/Ark%20Bytecode/Ark%20Bytecode.md)
↗ [Android Dex (Dalvik & ART)](../../../../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture/RISC%20(Reduced%20Instruction%20Set%20Computer)/Android%20Dex%20(Dalvik%20&%20ART)/Android%20Dex%20(Dalvik%20&%20ART).md)


### Other Resources



## Intro
> 🔗 https://source.android.com/docs/core/runtime

Android runtime (ART) is the managed runtime used by apps and some system services on Android. ART and its predecessor Dalvik were originally created specifically for the Android project. ART as the runtime executes the Dalvik executable (DEX) format and DEX bytecode specification.

ART and Dalvik are compatible runtimes running DEX bytecode, so apps developed for Dalvik should work when running with ART. However, some techniques that work on Dalvik do not work on ART. For information about the most important issues, see [Verifying app behavior on the Android runtime (ART)](http://developer.android.com/guide/practices/verifying-apps-art.html).



## Ref

