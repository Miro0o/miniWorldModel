# Linux Kernel Security Mechanisms

[TOC]



## Res
### Related Topics
↗ [Set-UID Programs](../../../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/🔩%20Linux%20Kernel/⭕️%20Task%20Management%20&%20Scheduling%20(Process%20&%20Threads)/Set-UID%20Programs.md)
↗ [Linux File Permissions](../../../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/🔩%20Linux%20Kernel/Linux%20IO%20&%20Files%20Management/🤔%20Linux%20File%20System/Linux%20File%20Permissions.md)

↗ [Network Management Basics](../../../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/Linux%20Free%20Software%20&%20OSS%20(Open%20Source%20Software)/Network%20Management/Network%20Management%20Basics.md)
↗ [Firewall & Network Filters (Open Source Command Line Tools)](../../../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/Linux%20Free%20Software%20&%20OSS%20(Open%20Source%20Software)/Network%20Management/Firewall%20&%20Network%20Filters%20(Open%20Source%20Command%20Line%20Tools).md)



## Intro
### Core Linux Security Mechanisms
> 🤖 Google Gemini 2.5 Flash

The Linux security architecture can be broken down into three main components: user authentication, fundamental access control, and advanced confinement.
#### 1. User Authentication and Privileges
- **User/Group Identity:** Every process and file is owned by a single **User ID (UID)** and a single **Group ID (GID)**.
    - The **root** user (UID 0) is the "superuser" with absolute, unrestricted access to the entire system, overriding all standard file permissions.
    - All other users are regular accounts with limited privileges, enforcing the **principle of least privilege** by default.
- **PAM (Pluggable Authentication Modules):** This is a centralized framework that handles how users are authenticated (e.g., password, SSH key, multi-factor) without requiring applications to implement the authentication logic themselves. This provides flexibility for system administrators to enforce complex, system-wide login policies.
- **`sudo` and `su`:** Regular users use the `sudo` (Substitute User Do) command to execute specific, pre-authorized administrative commands as the root user without logging in as root directly.
#### 2. Discretionary Access Control (DAC)
The traditional Unix/Linux security model is a form of DAC, where the **owner** of a resource (a file or directory) has the discretion to set its access permissions.
- **Standard Permissions (`rwx`):** Every file and directory is assigned permissions for three classes of users:
    1. **Owner** (`u`): The user who owns the file.
    2. **Group** (`g`): Members of the group assigned to the file.
    3. **Others** (`o`): All other users on the system (the 'world').
- **Permission Types:** Within each class, permissions are defined as:
    - **Read (`r`):** View contents (file) or list contents (directory).
    - **Write (`w`):** Modify/delete contents (file) or create/delete files in the directory.
    - **Execute (`x`):** Run a file as a program or traverse into a directory.
- **Access Control Lists (ACLs):** These are an extension to the standard `rwx` permissions, allowing for **finer-grained control** by assigning specific permissions to arbitrary users or groups beyond the three standard classes.
#### 3. Mandatory Access Control (MAC)
MAC systems introduce an extra layer of security that enforces **system-wide policies** which even the owner of the resource cannot override, providing defense against compromises of the root account or vulnerable applications. These are implemented via the **Linux Security Modules (LSM)** framework in the kernel.
- **SELinux (Security-Enhanced Linux):**
    - **Model:** Uses a **label-based** approach. Every file, process, and port is given a security **context** or **label**. Policies define which labeled subjects (processes) can interact with which labeled objects (files).
    - **Enforcement:** Highly granular and system-wide, often more complex to configure. It's the default on distributions like Red Hat Enterprise Linux and Fedora.
- **AppArmor (Application Armor):**
    - **Model:** Uses a **path-based** approach. Security policies, called **profiles**, are tied to the execution path of a program (e.g., `/usr/sbin/nginx`).
    - **Enforcement:** Simpler and easier to manage, focusing on confining specific applications. It's the default on distributions like Ubuntu and SUSE.


### Other Key Security Features
- **Firewall (`iptables`/`nftables`):** The Linux kernel contains the **Netfilter** framework, which is managed by userspace tools like `iptables` or `nftables` to filter network traffic and act as the system's firewall.
- **Memory Protection:** Modern Linux systems use mechanisms like **Address Space Layout Randomization (ASLR)** and **Non-Executable (NX) stacks** to make memory-based exploits (like buffer overflows) significantly harder to execute successfully



## Ref
