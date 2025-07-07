# BetterCap

[TOC]



## Res
🏠 https://www.bettercap.org
📂 https://www.bettercap.org/modules/
🚧 https://github.com/bettercap/bettercap



## Intro
[![](https://www.bettercap.org/logo.png)](https://www.bettercap.org/logo.png)

> While the first version (up to 1.6.2) of bettercap was implemented in Ruby and only offered basic MITM, sniffing and proxying capabilities, the 2.x is a complete reimplementation using the [Go programming language](https://golang.org/).
> 
> **Any version prior to 2.x is considered deprecated** and any type of support has been dropped in favor of the new implementation. An archived copy of the legacy documentation is [available here](https://www.bettercap.org/legacy/), however **it is strongly suggested to upgrade**.

Bettercap is a powerful, easily extensible and portable framework written in Go which aims to offer to security researchers, red teamers and reverse engineers an **easy to use**, **all-in-one solution** with all the features they might possibly need for performing reconnaissance and attacking [WiFi](https://www.bettercap.org/modules/wifi/) networks, [Bluetooth Low Energy](https://www.bettercap.org/modules/ble/) devices, wireless [HID](https://www.bettercap.org/modules/hid/) devices and [IPv4/IPv6](https://www.bettercap.org/modules/ethernet)networks.

### Features
- **WiFi** networks scanning, [deauthentication attack](https://www.evilsocket.net/2018/07/28/Project-PITA-Writeup-build-a-mini-mass-deauther-using-bettercap-and-a-Raspberry-Pi-Zero-W/), [clientless PMKID association attack](https://www.evilsocket.net/2019/02/13/Pwning-WiFi-networks-with-bettercap-and-the-PMKID-client-less-attack/) and automatic WPA/WPA2 client handshakes capture.
- **Bluetooth Low Energy** devices scanning, characteristics enumeration, reading and writing.
- 2.4Ghz wireless devices scanning and **MouseJacking** attacks with over-the-air HID frames injection (with DuckyScript support).
- Passive and active IP network hosts probing and recon.
- **ARP, DNS, DHCPv6 and NDP spoofers** for MITM attacks on IPv4 and IPv6 based networks.
- **Proxies at packet level, TCP level and HTTP/HTTPS** application level fully scriptable with easy to implement **javascript plugins**.
- A powerful **network sniffer** for **credentials harvesting** which can also be used as a **network protocol fuzzer**.
- A very fast port scanner.
- A powerful [REST API](https://www.bettercap.org/modules/core/api.rest/) with support for asynchronous events notification on websocket to orchestrate your attacks easily.
- An easy to use [web user interface](https://www.bettercap.org/usage/#web-ui).
- [More!](https://www.bettercap.org/modules/)



## Ref

