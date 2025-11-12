# Windows Credentials Editor (WCE)

[TOC]



## Res
🚧 https://github.com/returnvar/wce


### Related Topics



## Intro
Windows Credentials Editor (WCE) v1.3beta allows you to

NTLM authentication:
- List logon sessions and add, change, list and delete associated credentials (e.g.: LM/NT hashes)
- Perform pass-the-hash on Windows natively
- Obtain NT/LM hashes from memory (from interactive logons, services, remote desktop connections, etc.) which can be used to authenticate to other systems. WCE can perform this task without injecting code, just by reading and decrypting information stored in Windows internal memory structures. It also has the capability to automatically switch to code injection when the aforementioned method cannot be performed

Kerberos authentication:
- Dump Kerberos tickets (including the TGT) stored in Windows machines
- Reuse/Load those tickets on another Windows machines, to authenticate to other systems and services
- Reuse/Load those tickets on *Unix machines, to authenticate to other systems and services

Digest Authentication:
- Obtain cleartext passwords entered by the user when logging into a Windows system, and stored by the Windows Digest Authentication security package



## Ref

