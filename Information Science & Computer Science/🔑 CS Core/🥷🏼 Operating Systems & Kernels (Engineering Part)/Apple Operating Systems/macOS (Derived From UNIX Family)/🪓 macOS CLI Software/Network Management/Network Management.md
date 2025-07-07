# Network Management

[TOC]



## Res
> 🔗 [Mac Network Commands Cheat Sheet](https://gist.github.com/jjnilton/add1eeeb3a9616f53e4c)
> **Note**: Since this seems to be helpful to some people, I formatted it to improve readability of the [original](https://gist.githubusercontent.com/jjnilton/add1eeeb3a9616f53e4c/raw/d7561c2ad6ab2b15aa85dafb9613c3c338e7583e/mac%2520network%2520commands%2520terminal). Also, note that this is from 2016, many things may have changed, and I don't use macOS anymore, so I probably can't help in case of questions, but maybe someone else can.



## Network Security Management
### 👉 pfctl
↗ [Firewall Management](Firewall%20Management.md)



## Network Configuration
### 👉 scutil
↗ [System Configuration Management](../Host%20Management/System%20Configuration%20Management.md)


### 👉 networksetup
Configuration tool for network settings in System Preferences.
```shell
sudo networksetup -setdnsservers Wi-Fi 185.228.168.168 185.228.169.168
sudo networksetup -listallnetworkservices

networksetup -setdnsservers Wi-Fi
networksetup -getdnsservers Wi-Fi
```


[manpagez: man pages & more | man networksetup(8)]: http://manpagez.com/man/8/networksetup/
[Where does scutil store its information]: https://apple.stackexchange.com/a/395647
[Change DNS on a Mac using Terminal]: https://cleanbrowsing.org/help/docs/manually-change-dns-on-a-mac-terminal/


### DNS Configuration

`/etc/resolv.conf`

To view the DNS configuration used by this system, use:
scutil --dns

SEE ALSO
dns-sd(1), scutil(8)

↗ [Network Diagnostic Tools](Network%20Diagnostic%20Tools.md)



## Ref

