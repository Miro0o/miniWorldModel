# cert-manager

[TOC]



## Res
🚧 https://github.com/cert-manager/cert-manager

Documentation for cert-manager can be found at [cert-manager.io](https://cert-manager.io/docs/).

For the common use-case of automatically issuing TLS certificates for Ingress resources, see the [cert-manager nginx-ingress quick start guide](https://cert-manager.io/docs/tutorials/acme/nginx-ingress/).

For a more comprensive guide to issuing your first certificate, see our [getting started guide](https://cert-manager.io/docs/getting-started/).



## Intro
cert-manager adds certificates and certificate issuers as resource types in Kubernetes clusters, and simplifies the process of obtaining, renewing and using those certificates.

It supports issuing certificates from a variety of sources, including Let's Encrypt (ACME), HashiCorp Vault, and Venafi TPP / TLS Protect Cloud, as well as local in-cluster issuance.

cert-manager also ensures certificates remain valid and up to date, attempting to renew certificates at an appropriate time before expiry to reduce the risk of outages and remove toil.



## Ref

