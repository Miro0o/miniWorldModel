# [Lima](https://github.com/lima-vm/lima)

![lima-logo-01](../../../../../../Assets/Pics/lima-logo-01.svg)



[TOC]



## ☕️ Res
📂 [README.md](https://github.com/lima-vm/lima)


### Official Troubleshooting 🎧 List
#### Generic
- ["What's my login password?"](https://github.com/lima-vm/lima#whats-my-login-password)
- ["Does Lima work on ARM Mac?"](https://github.com/lima-vm/lima#does-lima-work-on-arm-mac)
- ["Can I run non-Ubuntu guests?"](https://github.com/lima-vm/lima#can-i-run-non-ubuntu-guests)
- ["Can I run other container engines such as Docker and Podman? What about Kubernetes?"](https://github.com/lima-vm/lima#can-i-run-other-container-engines-such-as-docker-and-podman-what-about-kubernetes)
- ["Can I run Lima with a remote Linux machine?"](https://github.com/lima-vm/lima#can-i-run-lima-with-a-remote-linux-machine)
- ["Advantages compared to Docker for Mac?"](https://github.com/lima-vm/lima#advantages-compared-to-docker-for-mac)
#### QEMU
- ["QEMU crashes with `HV_ERROR`"](https://github.com/lima-vm/lima#qemu-crashes-with-hv_error)
- ["QEMU is slow"](https://github.com/lima-vm/lima#qemu-is-slow)
- [error "killed -9"](https://github.com/lima-vm/lima#error-killed--9)
- ["QEMU crashes with `vmx_write_mem: mmu_gva_to_gpa XXXXXXXXXXXXXXXX failed`"](https://github.com/lima-vm/lima#qemu-crashes-with-vmx_write_mem-mmu_gva_to_gpa-xxxxxxxxxxxxxxxx-failed)
#### SSH
- ["Port forwarding does not work"](https://github.com/lima-vm/lima#port-forwarding-does-not-work)
- [stuck on "Waiting for the essential requirement 1 of X: "ssh"](https://github.com/lima-vm/lima#stuck-on-waiting-for-the-essential-requirement-1-of-x-ssh)
- ["permission denied" for `limactl cp` command](https://github.com/lima-vm/lima#permission-denied-for-limactl-cp-command)
#### Networking
- ==["Cannot access the guest IP 192.168.5.15 from the host"](https://github.com/lima-vm/lima#cannot-access-the-guest-ip-192168515-from-the-host)==
- [Ping shows duplicate packets and massive response times](https://github.com/lima-vm/lima#ping-shows-duplicate-packets-and-massive-response-times)
#### External projects
- ["I am using Rancher Desktop. How to deal with the underlying Lima?"](https://github.com/lima-vm/lima#i-am-using-rancher-desktop-how-to-deal-with-the-underlying-lima)
- ["Hints for debugging other problems?"](https://github.com/lima-vm/lima#hints-for-debugging-other-problems)



## 🧑🏿‍🦯 Guides
### 🌈 Intro
#### What is Lima
Lima launches Linux virtual machines with automatic file sharing and port forwarding (similar to [WSL2](https://docs.microsoft.com/en-us/windows/wsl/install)), and [containerd](https://containerd.io/).

The goal of Lima is to promote [containerd](https://containerd.io/) including [nerdctl (contaiNERD ctl)](https://github.com/containerd/nerdctl) to Mac users, but Lima can be used for non-container applications as well.


#### What is containerd? And what is nerdctl?
[containerd](https://github.com/containerd/containerd) is an open-source container runtime used by several projects including Docker and the typical set-up of Kubernetes such as AKS, EKS, and GKE.

As [the core scope of the containerd project](https://containerd.io/scope/) is limited to non-user facing areas, it had been difficult for users to interact with containerd directly.
So, we recently contributed a human-friendly CLI as a non-core subproject of contai**nerd**: “**nerd**ctl”.

The features and the usage of nerdctl are almost identical as Docker CLI, however, nerdctl also supports several cutting-edge features of containerd that are not present in Docker. Such features include, but not limited to, [lazy-pulling](https://github.com/containerd/nerdctl/blob/master/docs/stargz.md)(stargz) and [running encrypted images](https://github.com/containerd/nerdctl/blob/master/docs/ocicrypt.md) (ocicrypt).

![img](../../../../../../Assets/Pics/1LR42FXPvmZydGw5o2jRSCw.jpeg)


#### Lima Technological Terms
Here are the technical details of Lima, for those who are interested in:

- **Hypervisor**: QEMU, with `hvf` accelerator ( `Hypervisor.framework` )
- **Supported guest OS**: Ubuntu (default), Debian, Fedora, Alpine, Arch, and openSUSE
- **File sharing (host → guest)**: “Reverse SSHFS” in the current version, but subject to change in a future version. Probably we will switch to Samba.
- **File sharing (guest → host)**: WebDAV over SSH (experimented in https://github.com/lima-vm/sshwebdav)
- **Port forwarding**: `ssh -L` , with an agent process that watches `/proc/net/tcp*` inside the guest
- **Networking**: user-mode networking (“slirp”) by default. Advanced networking with `vmnet.framework` is also supported with sudo and [VDE](https://github.com/lima-vm/vde_vmnet)
- **Security**: designed not to require the root privilege (sudo) on the host, except for optional `vmnet.framework` support



### 🧱 Deployment (Lima for Docker)
#### Installation
```shell
brew install lima
limactl start 
# `lima` is short for `limactl start default`
```


#### Configuration (lima.yml)
```yaml
# 定义每个平台架构需要使用的启动镜像
images:
- location: "https://cloud-images.ubuntu.com/releases/22.04/release/ubuntu-22.04-server-cloudimg-amd64.img"
  arch: "x86_64"
- location: "https://cloud-images.ubuntu.com/releases/22.04/release/ubuntu-22.04-server-cloudimg-arm64.img"
  arch: "aarch64"

# 定义虚拟机需要使用哪个架构启动(对应上面的镜像)
arch: "x86_64"

# CPU 数量
cpus: 4

# 内存大小
memory: "8G"

# 磁盘大小
disk: "100G"

# 虚拟机与 macOS 宿主机挂载时使用的挂载技术
# 目前推荐 9p, 可换成 sshfs, 但是 sshfs 会有权限问题
mountType: 9p

# 定义虚拟机和 macOS 宿主机有哪些目录可以共享
mounts:
- location: "~"
  # 定义虚拟机对这个目录是否可写
  writable: true
  9p:
    # 对于可写的共享目录, cache 推荐类型为 mmap, 不写好像默认 fscache
    cache: "mmap"
- location: "/tmp/lima"
  writable: true
  9p:
    cache: "mmap"
# containerd is managed by Docker, not by Lima, so the values are set to false here.
containerd:
  system: false
  user: false

# cloud-init hook 定义
provision:
# 定义以什么权限在虚拟机内执行脚本
- mode: system
  # This script defines the host.docker.internal hostname when hostResolver is disabled.
  # It is also needed for lima 0.8.2 and earlier, which does not support hostResolver.hosts.
  # Names defined in /etc/hosts inside the VM are not resolved inside containers when
  # using the hostResolver; use hostResolver.hosts instead (requires lima 0.8.3 or later).
  script: |
    #!/bin/sh
    sed -i 's/host.lima.internal.*/host.lima.internal host.docker.internal/' /etc/hosts
- mode: system
  script: |
    #!/bin/bash
    set -eux -o pipefail
    if command -v docker >/dev/null 2>&1; then
      docker run --platform=linux/amd64 --privileged --rm tonistiigi/binfmt --install all
      exit 0
    else
      export DEBIAN_FRONTEND=noninteractive
      curl -fsSL https://get.docker.com | sh
      docker run --platform=linux/amd64 --privileged --rm tonistiigi/binfmt --install all
      # NOTE: you may remove the lines below, if you prefer to use rootful docker, not rootless
      systemctl disable --now docker
      apt-get install -y uidmap dbus-user-session
    fi
- mode: user
  script: |
    #!/bin/bash
    set -eux -o pipefail
    systemctl --user start dbus
    dockerd-rootless-setuptool.sh install
    docker context use rootless
probes:
- script: |
    #!/bin/bash
    set -eux -o pipefail
    if ! timeout 30s bash -c "until command -v docker >/dev/null 2>&1; do sleep 3; done"; then
      echo >&2 "docker is not installed yet"
      exit 1
    fi
    if ! timeout 30s bash -c "until pgrep rootlesskit; do sleep 3; done"; then
      echo >&2 "rootlesskit (used by rootless docker) is not running"
      exit 1
    fi
  hint: See "/var/log/cloud-init-output.log". in the guest
hostResolver:
  # hostResolver.hosts requires lima 0.8.3 or later. Names defined here will also
  # resolve inside containers, and not just inside the VM itself.
  hosts:
    host.docker.internal: host.lima.internal
portForwards:
- guestSocket: "/run/user/{{.UID}}/docker.sock"
  hostSocket: "{{.Dir}}/sock/docker.sock"
# 自己定义的启动后消息输出
message: |
  To run `docker` on the host (assumes docker-cli is installed), run the following commands:
  ------
  docker context create amd64 --docker "host=unix://{{.Dir}}/sock/docker.sock"
  docker context use amd64
  ------
```


#### Link lima to docker context
Following steps in the prompt, link lima to docker context. 
```shell
docker context create lima-docker --docker "host=unix:///Users/mir0/.lima/docker/sock/docker.sock"
docker context use lima-docker
```

> ⚠️ NOTE
>
> Choose `9p` mount type. 


#### 🖇 Refs:
[👍 如何在 Mac 上愉快的使用 Docker]: https://www.modb.pro/db/414518

[Replace Docker-Desktop in Mac with Lima-VM, nerdctl and containerd]: https://techexpertise.medium.com/replace-docker-desktop-in-mac-with-lima-vm-nerdctl-and-containerd-4a0cdc36d9ec
[containerd & Lima: Open source alternative to Docker for Mac]:https://medium.com/nttlabs/containerd-and-lima-39e0b64d2a59



## Network
> 🔗 https://github.com/lima-vm/lima/blob/master/docs/network.md


1. user-mode network (192.168.5.0/24)

2. VMNet networks
	1. ↗ [socket_vmnet](../../../../../🔑%20CS%20Core/🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/Network%20Virtualization%20(NV)/📌%20NV%20Implementations/Virtual%20Network%20Layer/Virtual%20Network%20(vNetwork)/socket_vmnet.md)
	2. vzNAT
	> ⚠ "vz" mode is experimental



## Ref

