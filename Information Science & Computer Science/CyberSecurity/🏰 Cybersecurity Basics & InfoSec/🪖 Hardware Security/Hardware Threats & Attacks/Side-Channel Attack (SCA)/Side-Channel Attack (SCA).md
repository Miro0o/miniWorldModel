# Side-Channel Attack (SCA)

[TOC]



## Res
### Related Topics



## Intro
> 🔗 https://en.wikipedia.org/wiki/Side-channel_attack

In computer security, a side-channel attack is any attack **based on extra information** that can be gathered because of the fundamental way a computer protocol or algorithm is implemented, rather than flaws in the design of the protocol or algorithm itself (e.g. flaws found in a cryptanalysis of a cryptographic algorithm) or minor, but potentially devastating, mistakes or oversights in the implementation. (Cryptanalysis also includes searching for side-channel attacks.) 
- ✅ Timing information, power consumption, electromagnetic leaks, and sound are examples of extra information which could be exploited to facilitate side-channel attacks.
- ❌ Attempts to break a cryptosystem by deceiving or coercing people with legitimate access are **NOT** typically considered side-channel attacks: see ↗ [Social Engineering & Physical Security](../../../../⛈️%20Risk%20Management/🐗%20Cybersecurity%20Threats%20&%20Attacks/Social%20Engineering%20&%20Physical%20Security/Social%20Engineering%20&%20Physical%20Security.md) and ↗ [Rubber-Hose Cryptanalysis](../../../../🚬%20Cryptology%20&%20Secure%20Communication/🤮%20Cryptanalysis/Rubber-Hose%20Cryptanalysis.md) 

Some side-channel attacks require technical knowledge of the internal operation of the system, although others such as differential power analysis are effective as black-box attacks. The rise of Web 2.0 applications and software-as-a-service has also significantly raised the possibility of side-channel attacks on the web, even when transmissions between a web browser and server are encrypted (e.g. through HTTPS or WiFi encryption), according to researchers from Microsoft Research and Indiana University.



## Side Channel Attacks Taxonomy
General classes of side-channel attack include:
- **[Cache attack](https://en.wikipedia.org/wiki/Cache_timing_attack "Cache timing attack")** — attacks based on attacker's ability to monitor [cache](https://en.wikipedia.org/wiki/Cache_(computing) "Cache (computing)") accesses made by the victim in a shared physical system as in virtualized environment or a type of cloud service.
- **[Timing attack](https://en.wikipedia.org/wiki/Timing_attack "Timing attack")** — attacks based on measuring how much time various computations (such as, say, comparing an attacker's given password with the victim's unknown one) take to perform.
- **[Power-monitoring attack](https://en.wikipedia.org/wiki/Power_analysis "Power analysis")** — attacks that make use of varying power consumption by the hardware during computation.
- **[Electromagnetic attack](https://en.wikipedia.org/wiki/Electromagnetic_attack "Electromagnetic attack")** — attacks based on leaked electromagnetic radiation, which can directly provide plaintexts and other information. Such measurements can be used to infer cryptographic keys using techniques equivalent to those in power analysis or can be used in non-cryptographic attacks, e.g. [TEMPEST](https://en.wikipedia.org/wiki/Tempest_(codename) "Tempest (codename)") (aka [van Eck phreaking](https://en.wikipedia.org/wiki/Van_Eck_phreaking "Van Eck phreaking") or radiation monitoring) attacks.
- **[Acoustic cryptanalysis](https://en.wikipedia.org/wiki/Acoustic_cryptanalysis "Acoustic cryptanalysis")** — attacks that exploit sound produced during a computation (rather like power analysis).
- **[Differential fault analysis](https://en.wikipedia.org/wiki/Differential_fault_analysis "Differential fault analysis")** — in which secrets are discovered by introducing faults in a computation.
- **[Data remanence](https://en.wikipedia.org/wiki/Data_remanence "Data remanence")** — in which sensitive data are read after supposedly having been deleted. (e.g. [Cold boot attack](https://en.wikipedia.org/wiki/Cold_boot_attack "Cold boot attack"))
- **Software-initiated fault attacks** — Currently a rare class of side channels, [Row hammer](https://en.wikipedia.org/wiki/Row_hammer "Row hammer") is an example in which off-limits memory can be changed by accessing adjacent memory too often (causing state retention loss).
- **[Allowlist](https://en.wikipedia.org/wiki/Allowlist "Allowlist")** — attacks based on the fact that the allowlisting devices will behave differently when communicating with allowlisted (sending back the responses) and non-allowlisted (not responding to the devices at all) devices. Allowlist-based side channel may be used to track Bluetooth MAC addresses.
- **Optical** - in which secrets and sensitive data can be read by visual recording using a high resolution camera, or other devices that have such capabilities (see examples below).

In all cases, the underlying principle is that physical effects caused by the operation of a [cryptosystem](https://en.wikipedia.org/wiki/Cryptosystem "Cryptosystem") (_on the side_) can provide useful extra information about secrets in the system, for example, the [cryptographic key](https://en.wikipedia.org/wiki/Cryptographic_key "Cryptographic key"), partial state information, full or partial [plaintexts](https://en.wikipedia.org/wiki/Plaintext "Plaintext") and so forth. The term cryptophthora (secret degradation) is sometimes used to express the degradation of secret key material resulting from side-channel leakage.



## Ref
[Side-channel Attack | Wikipedia]: https://en.wikipedia.org/wiki/Side-channel_attack
[简单来看看什么是侧信道攻击 | CSDN]: https://blog.csdn.net/weixin_45264425/article/details/130611071

