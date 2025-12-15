# Intel VT-x

[TOC]



## Res
### Related Topics



## Intro
> 🔗 https://en.wikipedia.org/wiki/X86_virtualization#I/O_MMU_virtualization_(AMD-Vi_and_Intel_VT-d)

Previously codenamed "`Vanderpool`", VT-x represents Intel's technology for virtualization on the x86 platform. On November 13, 2005, Intel released two models of Pentium 4 (Model 662 and 672) as the first Intel processors to support VT-x. The CPU flag for VT-x capability is "vmx"; in Linux, this can be checked via `/proc/cpuinfo`, or in macOS via `sysctl machdep.cpu.features`.

"VMX" stands for **Virtual Machine Extensions**, which adds 13 new instructions: `VMPTRLD`, `VMPTRST`, `VMCLEAR`, `VMREAD`, `VMWRITE`, `VMCALL`, `VMLAUNCH`, `VMRESUME`, `VMXOFF`, `VMXON`, `INVEPT`, `INVVPID`, and VMFUNC. These instructions permit entering and exiting a virtual execution mode where the guest OS perceives itself as running with full privilege (ring 0), but the host OS remains protected.

As of 2015, almost all newer server, desktop and mobile Intel processors support VT-x, with some of the Intel Atom processors as the primary exception. With some motherboards, users must enable Intel's VT-x feature in the BIOS setup before applications can make use of it.

Intel started to include **Extended Page Tables (EPT)**, a technology for page-table virtualization, since the Nehalem architecture, released in 2008. In 2010, Westmere added support for launching the logical processor directly in real mode – a feature called "unrestricted guest", which requires EPT to work.

Since the Haswell microarchitecture (announced in 2013), Intel started to include **VMCS shadowing** as a technology that accelerates nested virtualization of VMMs. The virtual machine control structure (VMCS) is a data structure in memory that exists exactly once per VM, while it is managed by the VMM. With every change of the execution context between different VMs, the VMCS is restored for the current VM, defining the state of the VM's virtual processor. As soon as more than one VMM or nested VMMs are used, a problem appears in a way similar to what required shadow page table management to be invented, as described above. In such cases, VMCS needs to be shadowed multiple times (in case of nesting) and partially implemented in software in case there is no hardware support by the processor. To make shadow VMCS handling more efficient, Intel implemented hardware support for VMCS shadowing.



## Ref

