# Mihomo

[TOC]



## Res
🏠 https://clashmihomo.com/
🚧 https://github.com/MetaCubeX/mihomo
📂 https://wiki.metacubex.one/
- https://wiki.metacubex.one/config/

Mihomo虽然提供各操作系统平台的软件版本，但对于普通用户来说，还是图形客户端操作方便易用，所以下面是几个推荐的流行GUI客户端。查看更多客户端，可以访问[Mihomo客户端大全](https://clashmihomo.com/clients/)。


### Related Topics



## Intro
> 🔗 https://clashmihomo.com/

Mihomo原名Clash Meta，是基于广受欢迎的开源网络代理工具Clash开发的增强网络代理工具。它不仅继承了Clash的核心功能，还增加了一些独特的特性，如支持更多的出站传输协议和复杂的规则控制等。在2023年经历了Clash for Windows删库事件之后，原Clash项目删库停止更新，于是开发者将Clash Meta改名为Mihomo，继续进行维护和更新。

**Mihomo支持的协议**
Mihomo支持广泛的代理协议，可以满足多数用户的需求。支持的翻墙协议包括：HTTP、SOCKS、Shadowsocks、V2Ray(VMess、VLESS)、Trojan、Hysteria(Hysteria、Hysteria2)、TUIC、WireGuard。

**Mihomo功能特点**
- **代理模块**：支持多种协议，如VLESS XTLS、Trojan XTLS等，实现了健康检查(如urltest/fallback)和TCP连接的并发处理。
- **规则模块**：提供详细的流量分流规则，支持SRC-PORT和DST-PORT的多条件控制，支持TCP/UDP分别设置。
- **DNS模块**：增强了域名嗅探器功能，支持使用代理解析IP和DNS over QUIC等技术。
- **TUN模块**：支持在macOS、Linux和Windows平台上运行，内置了必要的驱动程序​。



## Ref
[🤔 Linux中安装Clash并且实现全局代理（纯命令行）]: http://www.fuxi.info/archives/273
给处于命令行的mihomo添加一个外部GUI界面：
- 首先需要下载一个gui界面的项目。（例如 yacd）
	- 重命名为“ui”，并将其放到`~/.config/mihomo/` 下。
- 确保`~/.config/mihomo/config.yaml` 内有如下参数：

```
external-controller: 0.0.0.0:9090
secret: "123qwe"
external-ui: "ui"
```

- `external-controller`代表外部访问地址，此处意思为允许所有人从9090端口访问（当然需要开启9090端口]）
- `secret`访问密钥，不设置密钥的话任何人都可以访问，较为危险
- `external-ui` ui文件的路径，由于此处config.yaml文件和ui文件夹在同一目录下，所以只需文件夹名称即可