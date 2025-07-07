# KubeArmor

[TOC]



## Res
🏠 
🚧 https://github.com/kubearmor/KubeArmor


### Related Topics



## Intro
KubeArmor is a cloud-native runtime security enforcement system that restricts the behavior (such as process execution, file access, and networking operations) of pods, containers, and nodes (VMs) at the system level.

KubeArmor leverages [Linux security modules (LSMs)](https://en.wikipedia.org/wiki/Linux_Security_Modules) such as [AppArmor](https://en.wikipedia.org/wiki/AppArmor), [SELinux](https://en.wikipedia.org/wiki/Security-Enhanced_Linux), or [BPF-LSM](https://docs.kernel.org/bpf/prog_lsm.html) to enforce the user-specified policies. KubeArmor generates rich alerts/telemetry events with container/pod/namespace identities by leveraging eBPF.

![](../../../../../Assets/Pics/Pasted%20image%2020240531211128.png)



## Ref
