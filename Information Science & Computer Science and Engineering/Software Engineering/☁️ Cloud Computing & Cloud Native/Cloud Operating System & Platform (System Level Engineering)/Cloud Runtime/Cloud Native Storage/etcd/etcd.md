# etcd

[TOC]



## Res
🚧 https://github.com/etcd-io/etcd



## Intro
etcd is a distributed reliable key-value store for the most critical data of a distributed system, with a focus on being:
- _Simple_: well-defined, user-facing API (gRPC)
- _Secure_: automatic TLS with optional client cert authentication
- _Fast_: benchmarked 10,000 writes/sec
- _Reliable_: properly distributed using Raft

etcd is written in Go and uses the [Raft](https://raft.github.io/) consensus algorithm to manage a highly-available replicated log.

etcd is used [in production by many companies](https://github.com/etcd-io/etcd/blob/main/ADOPTERS.md), and the development team stands behind it in critical deployment scenarios, where etcd is frequently teamed with applications such as [Kubernetes](http://kubernetes.io/), [locksmith](https://github.com/coreos/locksmith), [vulcand](https://github.com/vulcand/vulcand), [Doorman](https://github.com/youtube/doorman), and many others. Reliability is further ensured by rigorous [**robustness testing**](https://github.com/etcd-io/etcd/tree/main/tests/robustness).



## Ref

