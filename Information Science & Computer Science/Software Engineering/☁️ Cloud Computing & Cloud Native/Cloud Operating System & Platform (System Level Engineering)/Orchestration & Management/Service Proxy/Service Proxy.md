# Service Proxy

[TOC]



## Res
📂 https://landscape.cncf.io/guide#orchestration-management--service-proxy



## Intro
A service proxy is a tool that intercepts traffic to or from a given service, applies some logic to it, then forwards that traffic to another service. It essentially acts as a “go-between” that can collect information about network traffic as well as apply rules to it. This can be as simple as serving as a load balancer that forwards traffic to individual applications or as complex as an interconnected mesh of proxies running side by side with individual containerized applications handling all network connections.

While a service proxy is useful in and of itself, especially when driving traffic from the broader network into a Kubernetes cluster, service proxies are also building blocks for other systems, such as API gateways or service meshes, which we'll discuss below.



## Ref

