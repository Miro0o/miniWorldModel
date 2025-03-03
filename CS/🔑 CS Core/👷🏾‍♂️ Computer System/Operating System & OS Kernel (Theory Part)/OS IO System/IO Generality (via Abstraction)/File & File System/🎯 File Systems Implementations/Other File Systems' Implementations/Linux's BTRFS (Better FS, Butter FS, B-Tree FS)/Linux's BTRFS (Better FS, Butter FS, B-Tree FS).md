# Linux's BTRFS (Better FS, Butter FS, B-Tree FS)

[TOC]



## Res
🏠 
🚧 
📂 https://btrfs.readthedocs.io/en/latest/Introduction.html

https://www.kernel.org/doc/html/latest/filesystems/btrfs.html
https://wiki.archlinux.org/title/Btrfs
https://wiki.debian.org/Btrfs


### Related Topics



## Intro
BTRFS is a modern copy on write (COW) filesystem for Linux aimed at implementing advanced features while also focusing on fault tolerance, repair and easy administration. Its main features and benefits are:
- Snapshots which do not make a full copy of the files
- Built-in volume management, support for software-based RAID 0, RAID 1, RAID 10 and others
- Self-healing - checksums for data and metadata, automatic detection of silent data corruptions



## Ref
[👍 Btrfs 介绍与相关操作]: https://arch.icekylin.online/guide/advanced/btrfs

Btrfs 是一种新型的写时复制（CoW）Linux 文件系统，已经并入内核主线。你可以读作 **B**e**t**te**r****F**ile **S**ystem、**B**-**tr**ee **F**ile **S**ystem、**B**u**t**ter **F**ile **S**ystem 等等，都是正确的。Btrfs 在设计实现高级功能的同时，着重于容错、修复以及易于管理。它由 Oracle、Red Hat、Fujitsu、Intel、SUSE、STRATO 等企业和开发者共同开发。Btrfs 以 **GNU GPL** 协议授权，同时也欢迎任何人的贡献。

- Btrfs 的特性 (查看链接原文)
- Btrfs 的历史 (查看链接原文)
- Btrfs 与其它文件系统功能比较:

| Feature                       | Ext 2 / 3 | Ext 4 | ReiserFS | XFS     | OCFS2  | Btrfs      |
| ----------------------------- | --------- | ----- | -------- | ------- | ------ | ---------- |
| Journal (date / metadata)     | ⚫ / ⚫     | ⚫ / ⚫ | ⚪ / ⚫    | ⚪ / ⚫   | ⚪ / ⚫  | **N/A**    |
| Journal (internal / external) | ⚫ / ⚫     | ⚫ / ⚫ | ⚫ / ⚫    | ⚫ / ⚫   | ⚫ / ⚪  | N/A        |
| Offline extend / shrink       | ⚫ / ⚫     | ⚫ / ⚫ | ⚫ / ⚫    | ⚪ / ⚪   | ⚫ / ⚪  | ⚫ / ⚫      |
| Online extend / shrink        | ⚫ / ⚪     | ⚫ / ⚪ | ⚫ / ⚪    | ⚫ / ⚪   | ⚫ / ⚪  | ⚫ / ⚫      |
| Inode allocation map          | table     | table | B*-tree  | B+-tree | table  | B-tree     |
| Sparse files                  | ⚫         | ⚫     | ⚫        | ⚫       | ⚫      | ⚫          |
| Tail packing                  | ⚪         | ⚫     | ⚫        | ⚪       | ⚪      | ⚫          |
| Defragmentation               | ⚪         | ⚫     | ⚪        | ⚫       | ⚪      | ⚫          |
| ExtArributes / ACLs           | ⚫ / ⚫     | ⚫ / ⚫ | ⚫ / ⚫    | ⚫ / ⚫   | ⚫ / ⚫  | ⚫ / ⚫      |
| Quotas                        | ⚫         | ⚫     | ⚫        | ⚫       | ⚫      | 🔴         |
| Dump / restore                | ⚫         | ⚫     | ⚪        | ⚫       | ⚪      | ⚪          |
| Default block size            | 4 KiB     | 4 KiB | 4 KiB    | 4 KiB   | 4 KiB  | 4 KiB      |
| max. file system size         | 16 TiB    | 1 EiB | 16 TiB   | 8 EiB   | 4 PiB  | **16 EiB** |
| max. file size                | 2 TiB     | 1 EiB | 1 EiB    | 8 EiB   | 4 PiB  | **16 EiB** |
| Support status                | SLES      | SLES  | SLES     | SLES    | SLE HA | SLES       |
