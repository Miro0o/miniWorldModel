# Password Attack

[TOC]



## Res
### Related Topics
↗ [Credentials & Password Related Tools](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/Credentials%20&%20Password%20Related%20Tools/Credentials%20&%20Password%20Related%20Tools.md)
↗ [Login Cracker](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/Credentials%20&%20Password%20Related%20Tools/Login%20Cracker/Login%20Cracker.md)



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
