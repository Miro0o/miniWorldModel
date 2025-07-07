# Dragonfly

[TOC]



## Res
🚧 https://github.com/dragonflyoss/Dragonfly2

📂 You can find the full documentation on the [d7y.io](https://d7y.io/).



## Intro
Dragonfly is an open source P2P-based file distribution and image acceleration system. It is hosted by the Cloud Native Computing Foundation ([CNCF](https://cncf.io/)) as an Incubating Level Project. Its goal is to tackle all distribution problems in cloud native architectures. Currently Dragonfly focuses on being:

- **Simple**: Well-defined user-facing API (HTTP), non-invasive to all container engines;
- **Efficient**: Seed peer support, P2P based file distribution to save enterprise bandwidth;
- **Intelligent**: Host-level speed limit, intelligent flow control due to host detection;
- **Secure**: Block transmission encryption, HTTPS connection support.

### Dragonfly Architecture
[![alt](https://github.com/dragonflyoss/Dragonfly2/raw/main/docs/images/arch.png)](https://github.com/dragonflyoss/Dragonfly2/blob/main/docs/images/arch.png)

**Manager:** Maintain the relationship between each P2P cluster, dynamic configuration management and RBAC. It also includes a front-end console, which is convenient for users to visually operate the cluster.

**Scheduler:** Select the optimal download parent peer for the download peer. Exceptions control Dfdaemon's back-to-source.

**Seed Peer**: Dfdaemon turns on the Seed Peer mode can be used as a back-to-source download peer in a P2P cluster, which is the root peer for download in the entire cluster.

**Peer**: Deploy with dfdaemon, based on the C/S architecture, it provides the `dfget` command download tool, and the `dfget daemon` running daemon to provide task download capabilities.




## Ref

