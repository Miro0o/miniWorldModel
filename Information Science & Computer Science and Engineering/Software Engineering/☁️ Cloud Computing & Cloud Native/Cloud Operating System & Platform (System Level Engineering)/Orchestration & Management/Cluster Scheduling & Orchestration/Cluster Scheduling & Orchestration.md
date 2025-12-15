# Cluster Scheduling & Orchestration

[TOC]



## Res
📂 https://landscape.cncf.io/guide#orchestration-management--scheduling-orchestration

↗ [CloudFoundry](../../../🌵%20Cloud%20Native%20Overview/🗿%20Cloud%20Models/Cloud%20Service%20(Delivery)%20Models/PaaS%20(Platform%20as%20a%20Service)/CloudFoundry.md)



## Intro
Orchestration and scheduling refer to running and managing [containers](https://github.com/cncf/glossary/blob/main/content/en/container.md) across a cluster. A cluster is a group of machines, physical or virtual, connected over a network (see cloud native networking).

Container orchestrators (and schedulers) are somewhat similar to the operating system (OS) on your laptop. The OS manages all your apps such as Microsoft 365, Slack and Zoom; executes them, and schedules when each app gets to use your laptop's hardware resources like CPU, memory and storage.

While running everything on a single machine is great, most applications today are a lot bigger than one computer can possibly handle. Think Gmail or Netflix. These massive apps are distributed across multiple machines forming a [distributed application](https://thenewstack.io/primer-distributed-systems-and-cloud-native-computing/). Most modern-day applications are built this way, requiring software that is able to manage all components running across these different machines. In short, you need a "cluster OS." That's where orchestration tools come in.

You probably noticed that containers come up time and again. Their ability to run apps in many different environments is key. Container orchestrators, in most cases, [Kubernetes](https://kubernetes.io/), provide the ability to manage these containers. Containers and Kubernetes are both central to cloud native architectures, which is why we hear so much about them.



## Ref

