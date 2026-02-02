# Double Ratchet Algorithm

[TOC]



## Res
### Related Topics


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Double_Ratchet_Algorithm#

In [cryptography](https://en.wikipedia.org/wiki/Cryptography "Cryptography"), the **Double Ratchet Algorithm** (previously referred to as the **Axolotl Ratchet** is a [key](https://en.wikipedia.org/wiki/Key_(cryptography) "Key (cryptography)") management algorithm that was developed by [Trevor Perrin](https://en.wikipedia.org/w/index.php?title=Trevor_Perrin&action=edit&redlink=1 "Trevor Perrin (page does not exist)") and [Moxie Marlinspike](https://en.wikipedia.org/wiki/Moxie_Marlinspike "Moxie Marlinspike") in 2013. It can be used as part of a [cryptographic protocol](https://en.wikipedia.org/wiki/Cryptographic_protocol "Cryptographic protocol") to provide [end-to-end encryption](https://en.wikipedia.org/wiki/End-to-end_encryption "End-to-end encryption") for [instant messaging](https://en.wikipedia.org/wiki/Instant_messaging "Instant messaging"). After an initial [key exchange](https://en.wikipedia.org/wiki/Key-agreement_protocol "Key-agreement protocol") it manages the ongoing renewal and maintenance of short-lived session keys. It combines a cryptographic so-called "ratchet" based on the [Diffie–Hellman key exchange](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange "Diffie–Hellman key exchange") (DH) and a ratchet based on a [key derivation function](https://en.wikipedia.org/wiki/Key_derivation_function "Key derivation function") (KDF), such as a [hash function](https://en.wikipedia.org/wiki/Hash_function), and is therefore called a double ratchet.

The algorithm provides forward secrecy for messages, and implicit renegotiation of forward keys; properties for which the protocol is name



## Ref
