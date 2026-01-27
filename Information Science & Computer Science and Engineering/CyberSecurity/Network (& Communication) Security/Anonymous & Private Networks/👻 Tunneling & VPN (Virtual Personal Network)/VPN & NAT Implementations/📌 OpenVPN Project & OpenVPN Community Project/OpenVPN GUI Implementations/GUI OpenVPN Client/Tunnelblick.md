# Tunnelblick

[TOC]



## Res
🏠 https://tunnelblick.net/
🚧 


### Related Topics



## Intro
**Tunnelblick** helps you control [OpenVPN®](https://openvpn.net/community) VPNs on macOS. It is [Free Software](https://www.fsf.org/about/what-is-free-software) that puts its users first. There are no ads, no affiliate marketers, no tracking — we don't even keep logs of your IP address or other information. We just supply open technology for fast, easy, private, and secure control of VPNs.

Tunnelblick comes as a ready-to-use application with all necessary binaries and drivers (including OpenVPN, easy-rsa, and tun/tap drivers). No additional installation is necessary — just [add your OpenVPN configuration and encryption information](https://tunnelblick.net/cConfigAndEncryptInfo.html).

To use Tunnelblick you need access to a VPN server: your computer is one end of the tunnel and the VPN server is the other end. For more information, see [Getting VPN Service](https://tunnelblick.net/cGettingVPNService.html).

Tunnelblick is licensed under the [GNU General Public License, version 2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html) and may be distributed only in accordance with the terms of that license.



## Ref
[`brew install openvpn` vs. Tunnelblick for OpenVPN client | Stackoverflow]: https://apple.stackexchange.com/q/341917

The open source project has a client for the macOS operating system as well. It is called Tunnelblick and it is less limited in functionality than the OpenVPN Connect Client because it does support the option to connect to multiple OpenVPN servers at the same time. On the other hand, it does miss some features that Connect Client does have as well like Python support for post-auth scripting and other functions that integrate Connect Client with Access Server, like the ability to import connection profiles directly from an Access Server, or the ability to authenticate any valid user on your Access Server and have them connect without having to install a connection profile for each separate user account. This is accomplished on the Connect Client with a universal server-locked profile which is not supported by the OpenVPN GUI program.

This program supports drag and drop to place OpenVPN connection profiles into Tunnelblick. These can be of .conf or .ovpn file extension. You can for example download a user-locked or an auto-login profile from the OpenVPN Access Server web interface, and drag and drop it on the Tunnelblick icon. The tray menu in the system tray will then show you options to use this connection profile – to start or stop the connection. Server-locked profiles are not supported, as mentioned earlier.

This program does support connecting to multiple OpenVPN servers at the same time, but there is a catch. You have to be careful not to implement conflicting routes and subnets when connecting to multiple OpenVPN servers at the same time. Unlike on Windows platform however, you do not need to worry about adding multiple virtual network adapters. These are provisioned automatically.

(2019)

