# Clash core project (Clash)

[TOC]



## Res
📂 https://dreamacro.github.io/clash/
🏠 https://github.com/Dreamacro/clash


### Related Topics



## Intro
> UPDATE: clash project has been closed. 

Clash is a cross-platform rule-based proxy utility that runs on the network and application layer, supporting various proxy and anti-censorship protocols out-of-the-box.

It has been adopted widely by the Internet users in some countries and regions where the Internet is heavily censored or blocked. Either way, Clash can be used by anyone who wants to improve their Internet experience.


### Release Version of Clash
#### 👉 Clash Core (Without GUI)
There are currently two editions of Clash: meta core and premium core.
- [Clash](https://github.com/Dreamacro/clash): the open-source version released at [github.com/Dreamacro/clash](https://github.com/Dreamacro/clash)
- [Clash Premium](https://github.com/Dreamacro/clash/releases/tag/premium): proprietary core with [TUN support and more](https://dreamacro.github.io/clash/premium/introduction.html) (free of charge)
#### 👉 Clash with GUI
Those might want to consider using a GUI client instead, and we do have some recommendations:
- [Clash for Windows](https://github.com/Fndroid/clash_for_windows_pkg/releases) (Windows and macOS)
- [Clash for Android](https://github.com/Kr328/ClashForAndroid)
- [ClashX](https://github.com/yichengchen/clashX) or [ClashX Pro](https://install.appcenter.ms/users/clashx/apps/clashx-pro/distribution_groups/public) (macOS)


### Features
This is a general overview of the features that comes with Clash.
- **Inbound**: HTTP, HTTPS, SOCKS5 server, TUN device
- **Outbound**: Shadowsocks(R), VMess, Trojan, Snell, SOCKS5, HTTP(S), Wireguard
- **Rule-based Routing**: dynamic scripting, domain, IP addresses, process name and more
- **Fake-IP DNS**: minimises impact on DNS pollution and improves network performance
- **Transparent Proxy**: Redirect TCP and TProxy TCP/UDP with automatic route table/rule management
- **Proxy Groups**: automatic fallback, load balancing or latency testing
- **Remote Providers**: load remote proxy lists dynamically
- **RESTful API**: update configuration in-place via a comprehensive API

Some of the features may only be available in the [Premium core](https://dreamacro.github.io/clash/premium/introduction.html).



## Ref
[riobard/go-shadowsocks2]: https://github.com/riobard/go-shadowsocks2
[v2ray/v2ray-core]: https://github.com/v2ray/v2ray-core
[WireGuard/wireguard-go]: https://github.com/WireGuard/wireguard-go
