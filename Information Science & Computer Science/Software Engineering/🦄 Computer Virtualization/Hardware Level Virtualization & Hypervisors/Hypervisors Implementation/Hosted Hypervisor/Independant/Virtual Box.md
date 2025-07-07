> 👀 👀 how is Virtual Box  different from VMware ?
> https://phoenixnap.com/kb/virtualbox-vs-vmware

There are [two types of hypervisors](https://phoenixnap.com/kb/what-is-hypervisor-type-1-2): 

-   Type 1 [bare metal hypervisor](https://phoenixnap.com/blog/what-is-bare-metal-hypervisor), which are installed on the physical server. 
-   Type 2 (hosted) hypervisors, installed on top of the host operating system.

both Virtual Box & VMware belong to the second ☝️☝️ type.While type 1 is more suitable for large production environments.

> 🤔 **Note:** Another way to create isolated virtual environments is to use Docker containers. Take a look at [how virtual machines compare to containers](https://phoenixnap.com/kb/containers-vs-vms) in a head-to-head comparison.

here i chose Virtual Box as my VM, for it has better compatibility on my Mac & it has more extensional features free of charge.🥶 🥶  cost control is IMPORTANT !

---


# Virtual Box


> 📖 as a tutorial on 知乎® : https://zhuanlan.zhihu.com/p/111567471
> 🔖  also see docs on its official site : https://www.virtualbox.org/manual/UserManual.html#install-mac-performing
> 🎯 sepecifically for Mac:
> https://www.jianshu.com/p/d10e3ce34ba5
> + [Fatal: Could not read from the boot medium](https://www.cnblogs.com/ibgo/p/4144134.html)

Allocation type:
- pre-allocated
- dynamic allocated

which are respectively termed as **fixed** & **allocated** in Virtual Box and **thick provisioned** & **thin provisioned** in VMware. 

