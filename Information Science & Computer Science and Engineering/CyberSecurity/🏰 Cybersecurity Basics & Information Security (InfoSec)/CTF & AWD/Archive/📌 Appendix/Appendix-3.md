# CTF

[TOC]



## Res

[Beginner’s Guide to CTFs](https://infosecwriteups.com/beginners-guide-to-ctfs-c934a0d7f5f9)

[What is CTF and how to get started!](https://dev.to/atan/what-is-ctf-and-how-to-get-started-3f04)

[So, You Want to CTF? (A Beginner’s Guide to CTFing)](https://jaimelightfoot.com/blog/so-you-want-to-ctf-a-beginners-guide/)

[CTF Practice](https://zaratec.io/ctf-practice/)

[CTF Field Guide](http://trailofbits.github.io/ctf/)



## Challenge types
Jeopardy style CTFs challenges are typically divided into categories. I'll try to briefly cover the common ones.
- Cryptography - Typically involves decrypting or encrypting a piece of data
- Steganography - Tasked with finding information hidden in files or images
- Binary - Reverse engineering or exploiting a binary file
- Web - Exploiting web pages to find the flag
- Pwn - Exploiting a server to find the flag


## Where do I start?
If I managed to pique your curiosity, I've compiled a list of resources that helped me get started learning. CTF veterans, feel free to add your own resources in the comments below!

### Learning
- http://ctfs.github.io/resources/ - Introduction to common CTF techniques such as cryptography, steganography, web exploits (Incomplete)
- https://trailofbits.github.io/ctf/forensics/ - Tips and tricks relating to typical CTF challenges/scenarios
- https://ctftime.org/writeups - Explanations of solutions to past CTF challenges

### Resources
- [https://ctftime.org](https://ctftime.org/) - CTF event tracker 
- https://github.com/apsdehal/awesome-ctf - Comprehensive list of tools and further reading



https://resources.infosecinstitute.com/tools-of-trade-and-resources-to-prepare-in-a-hacker-ctf-competition-or-challenge/#gref

[TryHackMe | Learn Cybersecurity](https://tryhackme.com/)

https://tryhackme.com/

[Hack The Box |Penetration Testing Labs](https://www.hackthebox.eu/)

[www.hackthebox.eu](http://www.hackthebox.eu/)

Hacksplaining

https://www.hacksplaining.com/

Practice CTF List / Permanent CTF List

https://captf.com/practice-ctf/



### Tools (That I use often)
- [binwalk](https://github.com/ReFirmLabs/binwalk) - Analyze and extract files
- [burp suite](https://portswigger.net/burp) - Feature packed web penetration testing framework
- [stegsolve](http://www.caesum.com/handbook/Stegsolve.jar) - Pass various filters over images to look for hidden text
- [GDB](https://www.gnu.org/software/gdb/) - Binary debugger
- The command line :)



**WEB**
[Burp suite ](https://portswigger.net/): common used tool for testing web applications with several features one of them is burp proxy for intercepting HTTP requests . 

[Cookie Editor](https://chrome.google.com/webstore/detail/fngmhnnpilhplaeedifhccceomclgfbg?hl=en-US) : useful browser extension for editing cookies .

[SQLMap](https://github.com/sqlmapproject/sqlmap) : SQL injection and Database Exploitation tool .

[DirBuster](https://wiki.owasp.org/index.php/Category:OWASP_DirBuster_Project) : directory brute forcing tool .

[XSSer](https://xsser.03c8.net/) : useful tool to detect, exploit and report XSS vulnerabilities.

 

**Crypto**
[rsatool ](https://github.com/ius/rsatool): tool used to calculate RSA and RSA-CRT parameters.

[CyberChef](https://gchq.github.io/CyberChef) - Web app for analysing and decoding data.

[PkCrack](https://www.unix-ag.uni-kl.de/~conrad/krypto/pkcrack.html) - A tool for Breaking PkZip-encryption.

[QuipQuip](https://quipqiup.com/) - An online tool for breaking substitution ciphers or vigenere ciphers (without key).

[XORTool](https://github.com/hellman/xortool) - A tool to analyze multi-byte xor ciphers.

**Digital Forensics** 
[ExifTool](https://exiftool.org/) : used for reading, writing and editing meta information in a wide variety of files (e.g [JPEG, JPG, JPE](https://exiftool.org/TagNames/JPEG.html))

[Wireshark](https://www.wireshark.org/) : tool for analyzing Network traffic and PCAP files .

linux install : apt-get install wireshark

[Audacity](https://sourceforge.net/projects/audacity/) : tool for analyzing audio files (e.g .mp3,.wav ,etc).

[Foremost ](http://foremost.sourceforge.net/): extracting files based on their headers, footers, and internal data structures.

[Stegsolve](http://www.caesum.com/handbook/Stegsolve.jar) : used for applying different techniques on images

[Volatility](https://github.com/volatilityfoundation/volatility): To investigate memory dumps

 

**Reverse** 
[IDA Pro](https://www.hex-rays.com/products/ida/): most used Disassembler and Debugger.

 

**Exploitation** 
[DLLInjector](https://github.com/OpenSecurityResearch/dllinjector): Inject dlls in processes

[libformatstr](https://github.com/hellman/libformatstr): Simplify format string exploitation.

[Metasploit](http://www.metasploit.com/): Penetration testing software

[one_gadget](https://github.com/david942j/one_gadget): A tool to find the one gadget

[Pwntools](https://github.com/Gallopsled/pwntools): CTF Framework for writing exploits

[Qira](https://github.com/BinaryAnalysisPlatform/qira): QEMU Interactive Runtime Analyser

[ROP Gadget](https://github.com/JonathanSalwan/ROPgadget): Framework for ROP exploitation

[V0lt](https://github.com/P1kachu/v0lt):Security CTF Toolkit



### Practice
Many of the "official" CTFs hosted by universities and companies are time-limited competitions. There are many CTFs however that are online 24/7 that can be used as practice and learning tools. Here are some that I found to be friendly for beginners.

- [https://ctflearn.com](https://ctflearn.com/) - A collection of various user-submitted challenges aimed towards newcomers
- https://overthewire.org/wargames/ - A series of progressively more difficult pwn-style challenges. (Start with the bandit series)
- https://2018game.picoctf.com/ - Yearly time-limited CTF now available to use as practice



## Ref

