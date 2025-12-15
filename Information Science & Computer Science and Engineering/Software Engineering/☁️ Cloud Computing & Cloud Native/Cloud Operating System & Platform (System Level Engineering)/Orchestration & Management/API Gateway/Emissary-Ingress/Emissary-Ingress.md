# Emissary-Ingress

[TOC]



## Res
🏠 https://github.com/emissary-ingress/emissary



## Intro
[Emissary-Ingress](https://www.getambassador.io/) is an open-source Kubernetes-native API Gateway + Layer 7 load balancer + Kubernetes Ingress built on [Envoy Proxy](https://www.envoyproxy.io/). Emissary-ingress is a CNCF incubation project (and was formerly known as Ambassador API Gateway).

Emissary-ingress enables its users to:
- Manage ingress traffic with [load balancing](https://www.getambassador.io/docs/emissary/latest/topics/running/load-balancer/), support for multiple protocols ([gRPC and HTTP/2](https://www.getambassador.io/docs/emissary/latest/howtos/grpc/), [TCP](https://www.getambassador.io/docs/emissary/latest/topics/using/tcpmappings/), and [web sockets](https://www.getambassador.io/docs/emissary/latest/topics/using/tcpmappings/)), and Kubernetes integration
- Manage changes to routing with an easy to use declarative policy engine and [self-service configuration](https://www.getambassador.io/docs/emissary/latest/topics/using/mappings/), via Kubernetes [CRDs](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/) or annotations
- Secure microservices with [authentication](https://www.getambassador.io/docs/emissary/latest/topics/running/services/auth-service/), [rate limiting](https://www.getambassador.io/docs/emissary/latest/topics/running/services/rate-limit-service/), and [TLS](https://www.getambassador.io/docs/emissary/latest/howtos/tls-termination/)
- Ensure high availability with [sticky sessions](https://www.getambassador.io/docs/emissary/latest/topics/running/load-balancer/#sticky-sessions--session-affinity), [rate limiting](https://www.getambassador.io/docs/emissary/latest/topics/running/services/rate-limit-service/), and [circuit breaking](https://www.getambassador.io/docs/emissary/latest/topics/using/circuit-breakers/)
- Leverage observability with integrations with [Grafana](https://www.getambassador.io/docs/emissary/latest/topics/running/statistics/#grafana), [Prometheus](https://www.getambassador.io/docs/emissary/latest/topics/running/statistics/#prometheus), and [Datadog](https://www.getambassador.io/docs/emissary/latest/topics/running/statistics/#datadog), and comprehensive [metrics](https://www.getambassador.io/docs/emissary/latest/topics/running/statistics/)support
- Enable progressive delivery with [canary releases](https://www.getambassador.io/docs/emissary/latest/topics/using/canary/)
- Connect service meshes including [Consul](https://www.getambassador.io/docs/emissary/latest/howtos/consul/), [Linkerd](https://www.getambassador.io/docs/emissary/latest/howtos/linkerd2/), and [Istio](https://www.getambassador.io/docs/emissary/latest/howtos/istio/)
- [Knative serverless integration](https://www.getambassador.io/docs/emissary/latest/howtos/knative/)

See the full list of [features](https://www.getambassador.io/features/) here.



## Ref

