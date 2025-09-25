# wpa_supplicant

[TOC]



## Res
### Related Topics
↗ [EAP (Extensible Authentication Protocol)](../../../📌%20Physical%20&%20Link%20Layer%20Security%20Protocols/EAP%20(Extensible%20Authentication%20Protocol)/EAP%20(Extensible%20Authentication%20Protocol).md)



## Intro
> 🔗 [Linux WPA/WPA2/IEEE 802.1X Supplicant](https://w1.fi/wpa_supplicant/)
> 🔗 [wpa_supplicant](https://en.wikipedia.org/wiki/Wpa_supplicant)

**wpa_supplicant** is a [free software](https://en.wikipedia.org/wiki/Free_software) implementation of an [IEEE 802.11i](https://en.wikipedia.org/wiki/IEEE_802.11i) [supplicant](https://en.wikipedia.org/wiki/Supplicant_(computer)) for [Linux](https://en.wikipedia.org/wiki/Linux), [FreeBSD](https://en.wikipedia.org/wiki/FreeBSD), [NetBSD](https://en.wikipedia.org/wiki/NetBSD), [QNX](https://en.wikipedia.org/wiki/QNX), [AROS](https://en.wikipedia.org/wiki/AROS), [Microsoft Windows](https://en.wikipedia.org/wiki/Microsoft_Windows), [Solaris](https://en.wikipedia.org/wiki/Solaris_(operating_system)), [OS/2](https://en.wikipedia.org/wiki/OS/2) (including [ArcaOS](https://en.wikipedia.org/wiki/ArcaOS) and [eComStation](https://en.wikipedia.org/wiki/EComStation)) and [Haiku](https://en.wikipedia.org/wiki/Haiku_(operating_system)). In addition to being a [WPA3](https://en.wikipedia.org/wiki/WPA3) and [WPA2](https://en.wikipedia.org/wiki/WPA2) [supplicant](https://en.wikipedia.org/wiki/Supplicant_(computer)), it also implements [WPA](https://en.wikipedia.org/wiki/Wi-Fi_Protected_Access) and older [wireless LAN](https://en.wikipedia.org/wiki/Wireless_LAN) security protocols.


###  WPA/IEEE 802.11i features Supported
- WPA-PSK ("WPA-Personal")
- WPA with EAP (e.g., with RADIUS authentication server) ("WPA-Enterprise")
- key management for CCMP, TKIP, WEP104, WEP40
- WPA and full IEEE 802.11i/RSN/WPA2
- RSN: PMKSA caching, pre-authentication
- IEEE 802.11r
- IEEE 802.11w
- Wi-Fi Protected Setup (WPS)


###  EAP Methods Supported
- EAP-TLS
- EAP-PEAP/MSCHAPv2 (both PEAPv0 and PEAPv1)
- EAP-PEAP/TLS (both PEAPv0 and PEAPv1)
- EAP-PEAP/GTC (both PEAPv0 and PEAPv1)
- EAP-PEAP/OTP (both PEAPv0 and PEAPv1)
- EAP-PEAP/MD5-Challenge (both PEAPv0 and PEAPv1)
- EAP-TTLS/EAP-MD5-Challenge
- EAP-TTLS/EAP-GTC
- EAP-TTLS/EAP-OTP
- EAP-TTLS/EAP-MSCHAPv2
- EAP-TTLS/EAP-TLS
- EAP-TTLS/MSCHAPv2
- EAP-TTLS/MSCHAP
- EAP-TTLS/PAP
- EAP-TTLS/CHAP
- EAP-SIM
- EAP-AKA
- EAP-AKA'
- EAP-PSK
- EAP-FAST
- EAP-PAX
- EAP-SAKE
- EAP-IKEv2
- EAP-GPSK
- LEAP (note: requires special support from the driver)

Following methods are also supported, but since they do not generate keying material, they cannot be used with WPA or IEEE 802.1X WEP keying.

- EAP-MD5-Challenge
- EAP-MSCHAPv2
- EAP-GTC
- EAP-OTP
- EAP-TNC (Trusted Network Connect; TNCC, IF-IMC, IF-T, IF-TNCCS)

More information about EAP methods and interoperability testing is available in [eap_testing.txt](https://w1.fi/cgit/hostap/plain/wpa_supplicant/eap_testing.txt).



## Ref

[wpa_supplicant介绍 - 张胜飞的文章 - 知乎]: https://zhuanlan.zhihu.com/p/24246712
[基于ubuntu的wpa_supplicant工具的安装与使用]: https://blog.csdn.net/u012503786/article/details/79541811
[wpa_supplicant -- archLinux Doc Support]: https://wiki.archlinux.org/title/wpa_supplicant
