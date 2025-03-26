# FAQ

[TOC]



## 👉 Kali Linux Setup
#kali #qemu 

### Host Kali on QEMU



[Hosting a Kali Linux virtual machine using KVM on a Ubuntu 20.10 box]: https://heds.nz/posts/hosting-kali-linux-kvm-ubuntu/


### Organize Kali Linux
---
**Installation Process & Tweaks**

Setup kali vm and ssh it from local. 
1. Download corresponding version of kali based on plantforms. 

2. Implement kali (via emulator as qemu or vm manager like parallel, VMware or virt-manager)

3. Enable cli-mode only. ( Optional, 👀 see [Troubleshooting](Troubleshooting.md#Boot kali on text mode (CLI only)) for more).
   1. `sudo systemctl set-default multi-user.target` then reboot.

4. Configure network. (Kali disables DHCP as default)
   1. `ipconfig` look up NIC.
   2. `dhclient eth0` using DHCP allocate an ip number to `eth0`.
   3. or manually allocate IP number
      1. `inonconfig` 
      2. `/etc/network/interfaces`

5. Setup proxy (optional)
   1. `/root/etc/bash.bashrc`
   2. `/root/etc/apt.conf`
   3. 

6. Enable `ssh` connection. ( see ↗️ [SSH](../../🔑 CS_Core/🏎️ Networking/📌 Basics/0x02 Application Layer/Virtual Host Access/SSH/SSH.md) for details )
   1. `netstat -lnt` look up open ports.
   2. `vim /etc/ssh/sshd_config` edit sshd config. 
      1. `PubkeyAuthentication yes`
      2. `PermitRootLogin yes`  (optional)
      3. other customized settings. (optional)
   3. `service ssh start` start ssh service
   4. `service ssh status` look up ssh service status
   5. `update-rc.d ssh enable ` enable service boot start. 

7. Update Kali packages. (Kali use Debian packages system)
```shell
# From CLI:
echo deb http://http.kali.org/kali kali main contrib non-free >> /etc/apt/sources.list
# or edit sources.list:
## kali
deb http://http.kali.org/kali kali main contrib non-free
## kali-dev
deb http://http.kali.org/kali kali-dev main contrib non-free
## kali security updates
deb http://security.kali.org/kali-security kali/updates main contrib non-free
## Bleeding Edge repo, which is for non-official kali packages like aircrack-ng, dnsrecon, sqlmap, beef-xss ...
deb http://repo.kali.org/kali kali kali-bleeding-edge main
```

8. Costumize Kali Linux
   1. Reset `root` password
      1. `passwd root`

   2. Add regular user
      1. `adduser <user_name>`

   3. Accelerate Kali 
      1. `preload`
      2. `bleachbit`
      3. `bum`
      4. `gnome-do`
   4. Share filefolder
   5. Encrypt filefolder

9. Manage third-party package
   1. use third-party package
      1. `apt-file` search for info of package in `apt`
      2. `gnome-tweak-tool`
      3. `instanbul` 
      4. `openoffice`
      5. `scrub`
      6. `shutter`
      7. `team viewer`
      8. `terminator`

   2. run third-party package as non-root user
      1. `ps aux | grep <process>` look up running process status
      2. `sux - <non_root_user> <process>` run process as a non-root user

10. Manage  pen testing results
    1. BT 5r3 underesocre the use of  `Draedis` and `MagicTree`.
    2. Kali provides `KeepNote` and `Zim desktop wiki`.

`iptables` configuration required. See ↗[iptables](../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/Linux%20Free%20Software%20&%20OSS%20(Open%20Source%20Software)/Network%20Management/The%20netfilter.org%20Project%20(Netfilter)/iptables.md) for further info

---
**Configuring and customizing Kali Linux**

Common customization made to Kali include the following:
- Resetting the root password
- Adding a non-root user
- Configuring network services and secure communications Adjusting network proxy settings
- Accessing the secure shell
- Speeding up Kali operations
	- When using a VM, install the VM's software drive package: Guest Additions (VirtualBox) or VMware Tools (VMware).
	- When creating a VM, select a fixed disk size instead of one that is dynamically allocated. It is faster to add files to a fixed disk, and there is less file fragmentation.
	- By default, Kali does not show all applications that are present in the start up menu. Each application that is installed during the boot up process slows the system data and may impact memory use and system performance. Install **Boot Up Manager (BUM)** to disable unnecessary services and applications that are enabled during the bootup (`apt-get install bum`).
- Sharing folders with MS Windows
- Creating encrypted folders

---

## 👉 Boot kali on text mode (CLI only)
#kali #booting #cli

1. Recovery Mode (skip)

   This mode is already on the menu. Moreover, if you boot into **Recovery Mode**, then upon a subsequent reboot, the graphical desktop environment will open (if you do not select Recovery Mode again).

2. Single User (skip)

   In single-user mode its peculiarity is that it is impossible to log in as any user other than root. But then you do not need to enter a password for root – for this reason this mode is usually used to restore a forgotten administrator password, but can also be used for other purposes of system recovery and maintenance

3. Permanently switching to the text interface (in which case i'm in)


Swithcing to text mode permanently: 
```shell
sudo systemctl set-default multi-user.target
reboot
```

Back to GUI for this one:
```shell
sudo systemctl start display-manager.service
reboot
```

Back to GUI permanently:
```shell
sudo systemctl set-default graphical.target
reboot
```

[Boot kali on text mode (CLI only)]: https://miloserdov.org/?p=3343
