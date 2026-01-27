# WireGuard

[TOC]



## Res
🏠 https://www.wireguard.com

📂 https://www.wireguard.com/papers/wireguard.pdf
WireGuard: Next Generation Kernel Network Tunnel



## Intro
![](https://www.wireguard.com/img/wireguard.svg)

WireGuard® is an extremely simple yet fast and modern VPN that utilizes **state-of-the-art [cryptography](https://www.wireguard.com/protocol/)**. It aims to be [faster](https://www.wireguard.com/performance/), [simpler](https://www.wireguard.com/quickstart/), leaner, and more useful than IPsec, while avoiding the massive headache. It intends to be considerably more performant than OpenVPN.

WireGuard is designed as a **general purpose VPN** for running on embedded interfaces and super computers alike, fit for many different circumstances. Initially released for the Linux kernel, it is now cross-platform (Windows, macOS, BSD, iOS, Android) and widely deployable. It is currently under heavy development, but already it might be regarded as the most secure, easiest to use, and simplest VPN solution in the industry.


### Extensibility
WireGuard is designed to be extended by third-party programmes and scripts. This has been used to augment WireGuard with various features including more user-friendly management interfaces (including easier setting up of keys), logging, dynamic firewall updates, and [LDAP](https://en.wikipedia.org/wiki/Directory_service "Directory service") integration.

Excluding such complex features from the minimal core codebase improves its stability and security. For ensuring security, WireGuard restricts the options for implementing cryptographic controls, limits the choices for [key exchange](https://en.wikipedia.org/wiki/Key_exchange "Key exchange") processes, and maps algorithms to a small subset of modern [cryptographic primitives](https://en.wikipedia.org/wiki/Cryptographic_primitive "Cryptographic primitive"). If a flaw is found in any of the primitives, a new version can be released that resolves the issue. Also, configuration settings that affect the security of the overall application cannot be modified by unprivileged users


### Implementations
Implementations of the WireGuard protocol include:
- Donenfeld's initial implementation, written in C and Go.
- [Cloudflare](https://en.wikipedia.org/wiki/Cloudflare "Cloudflare")'s BoringTun, a [user space](https://en.wikipedia.org/wiki/User_space "User space") implementation written in [Rust](https://en.wikipedia.org/wiki/Rust_(programming_language) "Rust (programming language)").
- Matt Dunwoodie's implementation for OpenBSD, written in C.
- Ryota Ozaki's wg(4) implementation, for NetBSD, is written in C.
- The FreeBSD implementation is written in C and shares most of the data path with the OpenBSD implementation.
- Native [Windows](https://en.wikipedia.org/wiki/Microsoft_Windows "Microsoft Windows") kernel implementation named "wireguard-nt", since August 2021.
- [OPNsense](https://en.wikipedia.org/wiki/OPNsense "OPNsense") via standard package os-WireGuard.
- [pfSense](https://en.wikipedia.org/wiki/PfSense "PfSense") via experimental add-on package on pfSense Plus 21.05, pfSense CE 2.5.2, and later versions.
- [Mikrotik](https://en.wikipedia.org/wiki/MikroTik "MikroTik") has an implementation on all modern routers



## WireGuard 🆚 Others
### WireGuard VS OpenVPN


### WireGuard vs IPSec/IKEv2


### WireGuard vs SSL VPN



## Ref
[🎬 Wireguard quick start]: https://youtu.be/bVKNSf1p1d0

[What is WireGuard?]: https://cybernews.com/what-is-vpn/wireguard-protocol/

[WireGuard | WikiPedia]: https://en.wikipedia.org/wiki/WireGuard#:~:text=WireGuard%20is%20a%20communication%20protocol,performance%2C%20and%20low%20attack%20surface
[VPN Service | WikiPedia]: https://en.wikipedia.org/wiki/VPN_service#comparison
