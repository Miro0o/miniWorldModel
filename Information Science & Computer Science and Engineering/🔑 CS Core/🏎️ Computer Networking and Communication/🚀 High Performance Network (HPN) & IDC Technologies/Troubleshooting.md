# Troubleshoting

[TOC]



## 👉 Cannot allocate memory :Failed to create packet memory pool (rte_pktmbuf_pool_create failed) - for port_id 0
#dpdk #c #network  #memory 

1. Memory allocation failure happens by moving from `DPDK 17.02 to 21.11`. This is expected for fixed 512 * 2MB and memory requirements from custom application.
2. DPDK 21.11 introduces new features like telemetry, fb_arrary, MP communication sockets, service cores, which requires more internal memory allocation (not everything is from HEAP region but hugepage).
3. rte_pktmbuf_pool_create tries to create (267008 * 2176 + additional place holder) is about 0.8GB.

hence with the above new memory model and services, a total huge page potential shoots over 1GB MMAPED area. Currently, the Huge pages allocated in the system are 512 * 2MB only.

Solutions:
1. reduce the number of MBUF from 267008 to a lower value like 200000 to satisfy the memory requirement.
2. Increase the number of available huge pages from 512 to 600
3. use the new EAL to use `legacy memory, no telemetry, no multiprocess, no service cores`, to reduce memory footprint.
4. use real arg `--socket-mem or -m`, to fix the memory allocations.

Note: the RPM package was not initially housing `libdpdk.pc`. This is required for obtaining platform-specific CFLAGS and LDFLAGS.


[ 👍 Cannot allocate memory :Failed to create packet memory pool (rte_pktmbuf_pool_create failed) - for port_id 0 | Stackoverflow]: https://stackoverflow.com/q/73658673

