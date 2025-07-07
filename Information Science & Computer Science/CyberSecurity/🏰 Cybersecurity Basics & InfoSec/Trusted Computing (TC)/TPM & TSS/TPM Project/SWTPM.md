# SWTPM

[TOC]



## Res


## Intro

### Install virtual TPM via SWTPM on QEMU
1. Install the guest os
Install the guest OS. This will be guest-OS specific. The general commands are to build a virtual disk:
```shell
qemu-img create -f qcow2 ubuntu-20.04-amd64.img 30G
```

Then attach it to a VM and start it with the installation media, usually an ISO:
```shell
qemu-system-x86_64 -hda ~/qemu-images/ubuntu-20.04-amd64.img -boot d -cdrom ~/Downloads/ubuntu-20.04.1-desktop-amd64.iso -m 2048 -enable-kvm
```


2. start TPM2.0 virtual device

Now start the guest with a virtualized TPM2.0 device. To do this, one needs to start the SWTPM simulator in tpm2 mode using the option `--tpm2`, like so:
```shell
mkdir /tmp/test_tpm

# this is optional (?)
swtpm_setup --tpmstate /tmp/test_tpm --create-ek-cert --create-platform-cert --allow-signing --tpm2


swtpm socket --tpmstate dir=/tmp/test_tpm --ctrl type=unixio,path=/tmp/test_tpm/swtpm-sock --log level=20 --tpm2
```


3. start guest os using virtual TPM device

```shell
qemu-system-x86_64 -hda ~/qemu-images/ubuntu-20.04-amd64.img -boot d -m 2048 -enable-kvm \
  -chardev socket,id=chrtpm,path=/tmp/emulated_tpm/swtpm-sock \
  -tpmdev emulator,id=tpm0,chardev=chrtpm -device tpm-tis,tpmdev=tpm0
```

Now verify that the device nodes are present in the guest VM by opening a console and running the following command:
```shell
ls /dev/tpm*
```

#TODO 



## Ref
[Tpm2 Device Emulation With Qemu]: https://tpm2-software.github.io/2020/10/19/TPM2-Device-Emulation-With-QEMU.html
1. install swtpm
2. install qemu
	1. install guest os
3. start guest with tpm2.0

[How to Emulate a TPM 2.0 Module on LibVirt/QEMU]: https://www.smoothnet.org/qemu-tpm/


[How to install/start using swtpm on Linux]: https://stackoverflow.com/questions/71220170/how-to-install-start-using-swtpm-on-linux

[qemu-x86_64: Could not open '/lib64/ld-linux-x86-64.so.2': No such file or directory]: https://stackoverflow.com/questions/71040681/qemu-x86-64-could-not-open-lib64-ld-linux-x86-64-so-2-no-such-file-or-direc

[Apparmor > swtpm: Could not open UnixIO socket: Permission denied #487]: https://github.com/quickemu-project/quickemu/issues/487
[`cosa run` sometimes fails with "swtpm: Could not open UnixIO socket: No such file or directory" #969]: https://github.com/coreos/coreos-assembler/issues/969

