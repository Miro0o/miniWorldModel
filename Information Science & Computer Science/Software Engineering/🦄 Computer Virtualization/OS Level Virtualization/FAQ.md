# FAQ

[TOC]



## 👉 Difference between linux namespace & Cgroup?
> ❗ Anwser from 2016

The proper links for those two notions have been fixed in [PR 14307](https://github.com/docker/docker/pull/14307/files):

> Under the hood, Docker is built on the following components:
> 
> The **[cgroups](https://www.kernel.org/doc/Documentation/cgroups/cgroups.txt)** and [namespaces](http://man7.org/linux/man-pages/man7/namespaces.7.html) capabilities of the Linux kernel

With:
- **cgroup**: Control Groups provide a mechanism for aggregating/partitioning sets of tasks, and all their future children, into hierarchical groups with specialized behaviour.
- **namespace**: wraps a global system resource in an abstraction that makes it appear to the processes within the namespace that they have their own isolated instance of the global resource.

In short:
- **Cgroups** = limits how much you can use;
- **namespaces** = limits what you can see (and therefore use)

See more at "[Anatomy of a Container: Namespaces, cgroups & Some Filesystem Magic](http://fr.slideshare.net/jpetazzo/anatomy-of-a-container-namespaces-cgroups-some-filesystem-magic-linuxcon)" by [Jérôme Petazzoni](http://fr.slideshare.net/jpetazzo).

Cgroups involve resource metering and limiting:
- memory
- CPU
- block I/O
- network

Namespaces provide processes with their own view of the system
Multiple namespaces:
- pid
- net
- mnt
- uts
- ipc
- user: **userns** it is [graduating from experimental in docker 1.10](https://github.com/docker/docker/pull/19187)  

> (per-daemon-instance remapping of container root to an unprivileged user is in progress: [PR 12648](https://github.com/docker/docker/pull/12648): see its [design](https://github.com/docker/docker/pull/11253))



> ❗ Updates from 2019

No, chroot is not based on a namespace: see [itnext.io/…](https://itnext.io/chroot-cgroups-and-namespaces-an-overview-37124d995e3d). More than three years later though, keep in mind the new Docker (19.03, still in beta) can be run as rootless: [github.com/moby/moby/blob/…](https://github.com/moby/moby/blob/c12f09bf99b54f274a5ae241dd154fa74020cbab/contrib/dockerd-rootless.sh). And can expose resources on the host namespace: [github.com/moby/moby/pull/38913](https://github.com/moby/moby/pull/38913)



> ❗ Updates from 2020

**Cgroups(control groups) does resource management.**  
It determines how much host machine resources to be given to containers.

for example:- we define resources in docker-compose yaml file for creating services like:

resources:
  limits:
    cpus: "0.1" (100 millicores)
    memory: 50M

Here, in this example we are explicitly asking cgroups to allocate these resources to particular container.

---

**Namespaces**: provides process isolation, complete isolation of containers, separate file system.

There are 6 types of namespaces:  
1. mount ns - for file system.  
2. UTS(Unique time sharing) ns- which checks for different hostnames of running containers   
3. IPC ns - interprocess communication  
4. Network ns- takes care of different ip allocation to different containers  
5. PID ns - process id isolation  
6. user ns- different username(uid)



[Difference between linux namespace & Cgroup?]: https://stackoverflow.com/a/34825184/16542494

[Docker Namespace and Cgroups]: https://medium.com/@kasunmaduraeng/docker-namespace-and-cgroups-dece27c209c7

> In Summary, **Namespace** gives the isolation for the container with the underline host where **Cgroup** gives the ability to allocate things to those containers.


