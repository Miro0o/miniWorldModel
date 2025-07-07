# SPIRE

[TOC]



## Res
🚧 https://github.com/spiffe/spire



## Intro
SPIRE (the [SPIFFE](https://github.com/spiffe/spiffe) Runtime Environment) is a toolchain of APIs for establishing trust between software systems across a wide variety of hosting platforms. SPIRE exposes the [SPIFFE Workload API](https://github.com/spiffe/go-spiffe/blob/main/v2/proto/spiffe/workload/workload.proto), which can attest running software systems and issue [SPIFFE IDs](https://github.com/spiffe/spiffe/blob/main/standards/SPIFFE-ID.md) and [SVID](https://github.com/spiffe/spiffe/blob/main/standards/SPIFFE-ID.md)s to them. This in turn allows two workloads to establish trust between each other, for example by establishing an mTLS connection or by signing and verifying a JWT token. SPIRE can also enable workloads to securely authenticate to a secret store, a database, or a cloud provider service.



## Ref

