# Nping

[TOC]



## Res
📂 https://nmap.org/book/nping-man.html



## Intro
Nping is an open-source tool for network packet generation, response analysis and response time measurement. Nping allows users to generate network packets of a wide range of protocols, letting them tune virtually any field of the protocol headers. While Nping can be used as a simple ping utility to detect active hosts, it can also be used as a raw packet generator for network stack stress tests, ARP poisoning, Denial of Service attacks, route tracing, and other purposes.

Additionally, Nping offers a special mode of operation called the "Echo Mode", that lets users see how the generated probes change in transit, revealing the differences between the transmitted packets and the packets received at the other end. See section "Echo Mode" for details.

The output from Nping is a list of the packets that are being sent and received. The level of detail depends on the options used.

A typical Nping execution is shown in Example 18.1. The only Nping arguments used in this example are -c, to specify the number of times to target each host, --tcp to specify TCP Probe Mode, -p 80,433 to specify the target ports; and then the two target hostnames.




## Ref

