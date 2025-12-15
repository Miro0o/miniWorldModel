# runc

[TOC]



## Res
🏠 https://www.opencontainers.org/
🚧 https://github.com/opencontainers/runc
📂 https://github.com/opencontainers/runc/wiki (runc wiki) 
- [Spec conformance](https://github.com/opencontainers/runc/blob/main/docs/spec-conformance.md)
- [cgroup v2](https://github.com/opencontainers/runc/blob/main/docs/cgroup-v2.md)
- [Checkpoint and restore](https://github.com/opencontainers/runc/blob/main/docs/checkpoint-restore.md)
- [systemd cgroup driver](https://github.com/opencontainers/runc/blob/main/docs/systemd.md)
- [Terminals and standard IO](https://github.com/opencontainers/runc/blob/main/docs/terminals.md)
- [Experimental features](https://github.com/opencontainers/runc/blob/main/docs/experimental.md)


### Related Topics



## Intro
> 📎 https://www.huweihuang.com/kubernetes-notes/runtime/containerd/_index.html

`runc(run container)`是一个基于OCI标准实现的一个轻量级容器运行工具，用来创建和运行容器。而Containerd是用来维持通过runc创建的容器的运行状态。即runc用来创建和运行容器，containerd作为常驻进程用来管理容器。

`runc`包含 `libcontainer`，包括对`namespace`和`cgroup`的调用操作。



## Ref
[👍 runc 启动容器过程分析（附 CVE-2019-5736 实现过程）]: https://imkira.com/runc/

