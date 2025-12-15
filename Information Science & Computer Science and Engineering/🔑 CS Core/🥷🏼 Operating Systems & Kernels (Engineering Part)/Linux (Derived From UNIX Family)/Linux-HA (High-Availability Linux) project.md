# **Linux-HA** (High-Availability Linux) project

[TOC]



## Res
https://www.usenix.org/conference/als-2000/linux-ha-heartbeat-system-design
Linux-HA Heartbeat System Design - USENIX



## Intro
> 🔗 https://en.wikipedia.org/wiki/Linux-HA

The Linux-HA (High-Availability Linux) project provides a high-availability (clustering) solution for Linux, FreeBSD, OpenBSD, Solaris and Mac OS X which promotes reliability, availability, and serviceability (RAS).[1]

The project's main software product is Heartbeat, a GPL-licensed portable cluster management program for high-availability clustering. Its most important features are:

no fixed maximum number of nodes - Heartbeat can be used to build large clusters as well as very simple ones
resource monitoring: resources can be automatically restarted or moved to another node on failure
fencing mechanism to remove failed nodes from the cluster
sophisticated policy-based resource management, resource inter-dependencies and constraints
time-based rules allow for different policies depending on time
several resource scripts (for Apache, IBM Db2, Oracle, PostgreSQL etc.) included
GUI for configuring, controlling and monitoring resources and nodes



## Ref

