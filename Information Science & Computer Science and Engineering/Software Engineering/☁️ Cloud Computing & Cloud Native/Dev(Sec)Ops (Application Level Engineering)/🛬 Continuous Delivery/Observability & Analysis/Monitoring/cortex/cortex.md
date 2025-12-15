# cortex

[TOC]



## Res
🏠 https://github.com/cortexproject/cortex



## Intro
Cortex provides horizontally scalable, highly available, multi-tenant, long term storage for [Prometheus](https://prometheus.io/).

- **Horizontally scalable:** Cortex can run across multiple machines in a cluster, exceeding the throughput and storage of a single machine. This enables you to send the metrics from multiple Prometheus servers to a single Cortex cluster and run "globally aggregated" queries across all data in a single place.
- **Highly available:** When run in a cluster, Cortex can replicate data between machines. This allows you to survive machine failure without gaps in your graphs.
- **Multi-tenant:** Cortex can isolate data and queries from multiple different independent Prometheus sources in a single cluster, allowing untrusted parties to share the same cluster.
- **Long term storage:** Cortex supports S3, GCS, Swift and Microsoft Azure for long term storage of metric data. This allows you to durably store data for longer than the lifetime of any single machine, and use this data for long term capacity planning.

Cortex is a [CNCF](https://cncf.io/) incubation project used in several production systems including [Amazon Managed Service for Prometheus (AMP)](https://aws.amazon.com/prometheus/).

Cortex is primarily used as a [remote write](https://prometheus.io/docs/operating/configuration/#remote_write) destination for Prometheus, with a Prometheus-compatible query API.



## Ref

