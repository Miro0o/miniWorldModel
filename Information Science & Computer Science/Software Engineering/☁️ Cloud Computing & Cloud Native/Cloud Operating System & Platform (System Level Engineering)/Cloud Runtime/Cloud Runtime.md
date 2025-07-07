# Cloud Runtime

[TOC]



## Res
📂 https://landscape.cncf.io/guide#runtime



## Intro
Cloud runtime layer encompasses everything a container needs to run in a cloud native environment. That includes the code used to start a container, referred to as a container runtime; tools to make persistent storage available to containers; and those that manage the container environment networks.

But note, these resources are not to be confused with the networking and storage work handled by the provisioning layer discussed above. Those focused on getting the container platform running. Tools in this category are used to start and stop containers, help them store data, and allow them to talk to each other.

### Container Runtime
As discussed under container registry, a container is a set of compute constraints used to execute (or launch) an application. Containerized apps believe they are running on their own dedicated computer and are oblivious that they are sharing resources with other processes (similar to virtual machines).

The container runtime is the software that executes containerized (or "constrained") applications. Without the runtime, you only have the container image, the at-rest file specifying how the containerized app should look like. The runtime will start an app within a container and provide it with the needed resources.

More at ↗ [OS Level Virtualization & Containers Technology](../../🏂%20OS%20Level%20Virtualization%20&%20Containers%20Technology/OS%20Level%20Virtualization%20&%20Containers%20Technology.md) ;)


### Cloud Native Network
↗ [Cloud Native Network](Cloud%20Native%20Network/Cloud%20Native%20Network.md)


### Cloud Native Storage
↗ [Cloud Native Storage](Cloud%20Native%20Storage/Cloud%20Native%20Storage.md)



## Ref

