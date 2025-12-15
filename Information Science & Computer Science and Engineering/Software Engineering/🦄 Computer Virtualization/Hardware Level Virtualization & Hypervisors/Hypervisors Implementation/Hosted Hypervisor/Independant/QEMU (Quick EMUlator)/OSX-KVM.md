# OSX-KVM

[TOC]



## Res
🏠 https://github.com/kholia/OSX-KVM



## Intro
This project enables running macOS on linux with QEMU/KVM. 


### Is This Legal?
The "secret" Apple OSK string is widely available on the Internet. It is also included in a public court document [available here](http://www.rcfp.org/sites/default/files/docs/20120105_202426_apple_sealing.pdf). I am not a lawyer but it seems that Apple's attempt(s) to get the OSK string treated as a trade secret did not work out. Due to these reasons, the OSK string is freely included in this repository.

Please review the ['Legality of Hackintoshing' documentation bits from Dortania's OpenCore Install Guide](https://dortania.github.io/OpenCore-Install-Guide/why-oc.html#legality-of-hackintoshing).

Gabriel Somlo also has [some thoughts](http://www.contrib.andrew.cmu.edu/~somlo/OSXKVM/) on the legal aspects involved in running macOS under QEMU/KVM.

You may also find [this 'Announcing Amazon EC2 Mac instances for macOS' article](https://aws.amazon.com/about-aws/whats-new/2020/11/announcing-amazon-ec2-mac-instances-for-macos/) interesting.

Note: It is your responsibility to understand, and accept (or not accept) the Apple EULA.

Note: This is not legal advice, so please make the proper assessments yourself and discuss with your lawyers if you have any concerns (Text credit: Dortania)


### Motivation
My aim is to enable macOS based educational tasks, builds + testing, kernel debugging, reversing, and macOS security research in an easy, reproducible manner without getting 'invested' in Apple's closed ecosystem (too heavily).

These `Virtual Hackintosh` systems are not intended to replace the genuine physical macOS systems.

Personally speaking, this repository has been a way for me to 'exit' the Apple ecosystem. It has helped me to test and compare the interoperability of `Canon CanoScan LiDE 120` scanner, and `Brother HL-2250DN` laser printer. And these devices now work decently enough on modern versions of Ubuntu (Yay for free software). Also, a long time back, I had to completely wipe my (then) brand new `MacBook Pro (Retina, 15-inch, Late 2013)` and install Xubuntu on it - as the `OS X` kernel kept crashing on it!

Backstory: I was a (poor) student in Canada in a previous life and Apple made [my work on cracking Apple Keychains](https://github.com/openwall/john/blob/bleeding-jumbo/src/keychain_fmt_plug.c) a lot harder than it needed to be. This is how I got interested in Hackintosh systems.



## Ref

