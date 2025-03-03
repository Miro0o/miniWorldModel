# EROFS (Enhanced Read-Only File System)

[TOC]



## Res
🏠 
🚧 


### Related Topics



## Intro
> 📎 https://en.wikipedia.org/wiki/EROFS

**EROFS (Enhanced Read-Only File System)** is a lightweight read-only file system initially developed by Huawei, originally for the Linux kernel and now maintained by an open-source community from all over the world.

EROFS aims to form a generic read-only file system solution for various read-only use cases (embedded devices, containers and more) instead of just focusing on storage space saving without considering any side effects of runtime performance.

For example, it provides a solution to save storage space by using transparent compression as an option for scenarios that need high-performance read-only requirements on their devices with limited hardware resources, e.g. smartphones like Android and IoT operating systems such as HarmonyOS alongside it's HarmonyOS NEXT core system iteration. All of Huawei's new products shipped with EMUI 9.0.1 or later used EROFS, and it was promoted as one of the key features of EMUI 9.1. Oppo, Xiaomi and some Samsung products also use EROFS.

Also, it provides a content-addressable chunk-based container image solution together with lazy pulling feature to accelerate container startup speed by using new file-based fscache backend since Linux kernel v5.19.

The file system was formally merged into the mainline kernel with Linux kernel v5.4



## Ref
