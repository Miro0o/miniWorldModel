# socket_vmnet

[TOC]



🏠 https://github.com/lima-vm/socket_vmnet

## Overview
`socket_vmnet` provides [vmnet.framework](https://developer.apple.com/documentation/vmnet) support for QEMU.

`socket_vmnet` does not require QEMU to run as the root user.

(But `socket_vmnet` itself has to run as the root, in most cases.)

`socket_vmnet` was forked from [`vde_vmnet`](https://github.com/lima-vm/vde_vmnet) v0.6.0. Unlike `vde_vmnet`, `socket_vmnet` does not depend on VDE.



## Usage
### QEMU
Make sure that the `socket_vmnet` daemon is running, and execute QEMU via `socket_vmnet_client` as follows:
```shell
${HOMEBREW_PREFIX}/opt/socket_vmnet/bin/socket_vmnet_client \
  ${HOMEBREW_PREFIX}/var/run/socket_vmnet \
  qemu-system-x86_64 \
  -device virtio-net-pci,netdev=net0 -netdev socket,id=net0,fd=3 \
  -m 4096 -accel hvf -cdrom ubuntu-22.04-desktop-amd64.iso
```
The guest IP is assigned by the DHCP server provided by macOS.

The guest is accessible to the internet, and the guest IP is accessible from the host.

> To confirm, run `sudo apt-get update && sudo apt-get install -y apache2` in the guest, and access the guest IP via Safari on the host.


### Lima
Lima (since v0.12.0) provides built-in support for `socket_vmnet`:
```shell
limactl sudoers | sudo tee /etc/sudoers.d/lima
limactl start --name=default template://vmnet
```
🔗 See also [https://github.com/lima-vm/lima/blob/master/docs/network.md](https://github.com/lima-vm/lima/blob/master/docs/network.md)


### More...
🔗 Visit https://github.com/lima-vm/socket_vmnet
