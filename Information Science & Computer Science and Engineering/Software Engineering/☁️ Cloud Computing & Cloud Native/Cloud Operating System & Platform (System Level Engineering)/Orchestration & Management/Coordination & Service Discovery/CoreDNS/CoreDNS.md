# CoreDNS

[TOC]



## Res
🏠 https://coredns.io



## Intro
### What is it?
CoreDNS is a [DNS](https://en.wikipedia.org/wiki/Domain_Name_System) server. It is written in [Go](https://golang.org/). It can be used in a multitude of environments because of its flexibility. CoreDNS is licensed under the[Apache License Version 2](http://www.apache.org/licenses/LICENSE-2.0), and completely open source.   
Development takes place on [Github](https://github.com/coredns/coredns). Some devs hang out on [Slack](https://slack.cncf.io/) on the `#coredns` channel


### Plugins
CoreDNS chains [plugins](https://coredns.io/plugins). Each plugin performs a DNS function, such as [Kubernetes service discovery](https://coredns.io/plugins/kubernetes), [prometheus metrics](https://coredns.io/plugins/metrics), [rewriting queries](https://coredns.io/plugins/rewrite), or _just_ serving from [zone files](https://coredns.io/plugins/file). And [many](https://coredns.io/plugins/) [more](https://coredns.io/explugins/).


### CNCF
We are a [Cloud Native Computing Foundation](https://cncf.io/)graduated project.


### Service Discovery
CoreDNS integrates with [Kubernetes](https://kubernetes.io/) via the[Kubernetes plugin](https://coredns.io/plugins/kubernetes/), or with [etcd](https://coreos.com/etcd/) with the [etcd plugin](https://coredns.io/plugins/etcd/). All major cloud providers have plugins too:[Microsoft Azure DNS](https://coredns.io/plugins/azure), [GCP Cloud DNS](https://coredns.io/plugins/clouddns) and [AWS Route53](https://coredns.io/plugins/route53).



## Ref

