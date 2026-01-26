# Password Attack

[TOC]



## Res
### Related Topics
↗ [Credentials & Password Related Tools](../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/Credentials%20&%20Password%20Related%20Tools/Credentials%20&%20Password%20Related%20Tools.md)
- ↗ [Login Cracker & Password Cracker](../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/Credentials%20&%20Password%20Related%20Tools/Login%20Cracker%20&%20Password%20Cracker/Login%20Cracker%20&%20Password%20Cracker.md)

↗ [Cryptology & Secure Communication](../../../../🚬%20Cryptology%20&%20Secure%20Communication/Cryptology%20&%20Secure%20Communication.md)
- ↗ [Cryptography](../../../../🚬%20Cryptology%20&%20Secure%20Communication/🤐%20Cryptography/Cryptography.md)
- ↗ [Message Digest & Hash Function (Integrity)](../../../../🚬%20Cryptology%20&%20Secure%20Communication/🤐%20Cryptography/Modern%20Cryptography/Cryptographic%20Techniques%20for%20Integrity%20&%20Authentication/Message%20Digest%20&%20Hash%20Function%20(Integrity)/Message%20Digest%20&%20Hash%20Function%20(Integrity).md)

↗ [Security Account Manager (SAM)](../../../../System%20Security/🧸%20Operating%20System%20Security%20(&%20Mobile%20Security)/🪟%20Windows%20Security/Windows%20Security%20Mechanisms/Security%20Account%20Manager%20(SAM).md)


### Other Resources
🔗 https://haveibeenpwned.com
Check if your email address is in a data breach



## Intro
### Online Attacks /Offline Attacks
Offline attack: The attacker performs all the computation themselves
- Example: Mallory steals the password file, and then computes hashes herself to check for matches.
- The attacker can try a huge number of passwords (e.g., use many GPUs in parallel)
- Defenses: Salt passwords, use slow hashes
- If an attacker can do an offline attack, you need a really strong password (e.g. 7 or more random words)

Online attack: The attacker interacts with the service
- Example: Mallory tries to log in to a website by trying every different password. Mallory is forcing the server to compute the hashes.
- The attacker can usually only try a few times per second, with no parallelism
- Defenses: Add a timeout or rate limit the number of tries to prevent the attacker from trying too many times



## Ref
