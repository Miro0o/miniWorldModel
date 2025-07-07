# Device Drivers

[TOC]



## Res
🏠 
🚧 


### Related Topics



## Intro
> 📎 https://linux-kernel-labs.github.io/refs/heads/master/lectures/intro.html

The Linux kernel uses a unified device model whose purpose is to maintain internal data structures that reflect the state and structure of the system. Such information includes what devices are present, what is their status, what bus they are attached to, to what driver they are attached, etc. This information is essential for implementing system wide power management, as well as device discovery and dynamic device removal.

Each subsystem has its own specific driver interface that is tailored to the devices it represents in order to make it easier to write correct drivers and to reduce code duplication.

Linux supports one of the most diverse set of device drivers type, some examples are: TTY, serial, SCSI, fileystem, ethernet, USB, framebuffer, input, sound, etc.



## Ref
