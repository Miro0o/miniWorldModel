# Security Account Manager (SAM)

[TOC]



## Res
### Related Topics
↗ [Password Attack](../../../../⛈️%20Risk%20Management%20(In%20Cyberspace)/🐗%20Cybersecurity%20Threats%20&%20Attacks/🛰️%20Cyber%20Threat%20Intelligence%20(CTI)%20&%20Reconnaissance/Active%20Recon%20&%20Offensive%20OSINT/Password%20Attack.md)

↗ [Credentials & Password Related Tools](../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/Credentials%20&%20Password%20Related%20Tools/Credentials%20&%20Password%20Related%20Tools.md)
- ↗ [Credential Manager](../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/Credentials%20&%20Password%20Related%20Tools/Credential%20Manager/Credential%20Manager.md)


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Security_Account_Manager

The Security Account Manager or System Account Manager[1] (SAM) is a database file[2] in Windows NT, Windows 2000, Windows XP, Windows Vista, Windows 7, 8.1, 10 and 11 that stores users' passwords. It can be used to authenticate local and remote users. Beginning with Windows 2000 SP4, Active Directory authenticates remote users. SAM uses cryptographic measures to prevent unauthenticated users accessing the system.

The user passwords are stored in a hashed format in a registry hive either as an LM hash or as an NTLM hash. This file can be found in %SystemRoot%/system32/config/SAM and is mounted on HKLM/SAM and SYSTEM privileges are required to view it.

In an attempt to improve the security of the SAM database against offline software cracking, Microsoft introduced the SYSKEY function in Windows NT 4.0. When SYSKEY is enabled, the on-disk copy of the SAM file is partially encrypted, so that the password hash values for all local accounts stored in the SAM are encrypted with a key (usually also referred to as the "SYSKEY"). It can be enabled by running the syskey program.[3] As of Windows 10 version 1709, syskey was removed due to a combination of insecure security[4] and misuse by bad actors to lock users out of systems.



## Ref
[Sam]: https://viperone.gitbook.io/pentest-everything/writeups/cyberseclabs/windows/sam
