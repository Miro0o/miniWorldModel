# HCI (Hyber-Converged Infrastructure)

[TOC]



## Res
🏠 
🚧 


### Related Topics
↗ [Network Virtualization](../../../🔑%20CS%20Core/🏎️%20Computer%20Networking%20and%20Communication/Network%20Virtualization/Network%20Virtualization.md)
↗ [Software Defined Network (SDN)](../../../🔑%20CS%20Core/🏎️%20Computer%20Networking%20and%20Communication/🙌🏻%20Software%20Defined%20Network%20(SDN)/Software%20Defined%20Network%20(SDN).md)
↗ [Cloud Computing & Cloud Native](../../../../Software%20Engineering/☁️%20Cloud%20Computing%20&%20Cloud%20Native/Cloud%20Computing%20&%20Cloud%20Native.md)

↗ [SmartX](../../../🗺%20CS%20Overview/Electronics%20&%20Information%20Technologies%20Business%20Fields%20Research/Software%20Industry%20&%20Providers/System%20Level%20Software%20Producers/SmartX.md)
↗ [VMWare](../../../🗺%20CS%20Overview/Electronics%20&%20Information%20Technologies%20Business%20Fields%20Research/Software%20Industry%20&%20Providers/System%20Level%20Software%20Producers/VMWare.md)
↗ [Nutanix](../../../🗺%20CS%20Overview/Electronics%20&%20Information%20Technologies%20Business%20Fields%20Research/Software%20Industry%20&%20Providers/System%20Level%20Software%20Producers/Nutanix.md)



## Intro
> 🔗 https://en.wikipedia.org/wiki/Hyper-converged_infrastructure

**Hyper-converged infrastructure (HCI)** is a software-defined IT infrastructure that virtualizes all of the elements of conventional "hardware-defined" systems. HCI includes, at a minimum, virtualized computing (a hypervisor), software-defined storage, and virtualized networking (software-defined networking). HCI typically runs on commercial off-the-shelf (COTS) servers.

![](../../../../../Assets/Pics/Pasted%20image%2020240410132451.png)
<small>Difference between non-converged, converged and hyper-converged network storage</small>

The primary difference between converged infrastructure and hyper-converged infrastructure is that in HCI both the storage area network and the underlying storage abstractions are implemented virtually in software (at or via the hypervisor) rather than physically in hardware. Because software-defined elements are implemented in the context of the hypervisor, management of all resources can be **federated (shared)** across all instances of a hyper-converged infrastructure.

Hyper-convergence evolves away from discrete, software-defined systems that are connected and packaged together toward a purely software-defined environment where all functional elements run on **🔗 [commercial, off-the-shelf (COTS) servers](https://en.wikipedia.org/wiki/Commercial_off-the-shelf)**, with the convergence of elements enabled by a hypervisor. HCI systems are usually made up of server systems equipped with direct-attached storage. HCI includes the ability to pool like systems together. All physical data-center resources reside on a single administrative platform for both hardware and software layers. Consolidation of all functional elements at the hypervisor level, together with **federated identity management**, was promoted to improve data-center inefficiencies and reduce the **total cost of ownership (TCO)** for data centers.

The potential impact of the hyper-converged infrastructure is that companies will no longer need to rely on different compute and storage systems, though it is still too early to prove that it can replace storage arrays in all market segments. It is likely to further simplify management and increase resource-utilization rates where it does apply



## Ref
[What Is Hyperconverged Infrastructure? | Vmware]: https://www.vmware.com/products/hyper-converged-infrastructure.html

Hyperconverged infrastructure (HCI) is a software-defined, unified system that combines all the elements of a traditional data center: storage, compute, networking and management.
