# 🏀 Troubleshooting

[TOC]



## 👉 "Block probing did not discover any disks"
#ubuntu #disk #block

This is the result of a [bug that is over a decade old](https://bugs.launchpad.net/ubuntu/+source/casper/+bug/684280). The problem is that the ISO image is still mounted, although the installer is started with the `toram` option. The solution is to unmount the ISO, but there are two pitfalls here:
1. you can't just `umount`, you have to detach the loop device first with `losetup`
2. you have to do this before you do _anything_ else in the installer. No, you can't even select your keyboard layout :/

As soon as you're on the first screen of the installer, switch to the terminal with F2, then enter
``` shell
losetup -d /dev/loop0
umount /isodevice
```

exit the terminal with Ctrl+D and you're good to go.

---

😭 Though above solution didn't work for me ;( -- 2023.6
TBD..

[Ubuntu Server 20.04 setup stuck at "Block probing did not discover any disks"]: https://askubuntu.com/questions/1302392/ubuntu-server-20-04-setup-stuck-at-block-probing-did-not-discover-any-disks
