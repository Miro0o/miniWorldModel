# IP Layer Network Management

[TOC]



## Res
### Related Topics
↗ [Network Managements & Standards](../../../0x01%20Application%20Layer/🚔%20Network%20Managements%20&%20Standards/Network%20Managements%20&%20Standards.md)


### Other Resources



## Intro
An often-asked question is “What is network management?” A well-conceived, single-sentence (albeit a rather long run-on sentence) definition of network management from [Saydam 1996] is:

> Network management includes the deployment, integration, and coordination of the hardware, software, and human elements to monitor, test, poll, configure, analyze, evaluate, and control the network and element resources to meet the real-time, operational performance, and Quality of Service requirements at a reasonable cost.

👉 Given this broad definition, we **WILL COVER** only the rudiments of network management in this section—the architecture, protocols, and data used by a network administrator in performing their task. 

🙅‍♂️ We’ll **NOT COVER** the administrator’s decision-making processes, where topics such as
- fault identification [Labovitz 1997; Steinder 2002; Feamster 2005; Wu 2005; Teixeira 2006]
- anomaly detection [Lakhina 2005; Barford 2009]
- network design/engineering to meet contracted **Service Level Agree- ments (SLA’s)** [Huston 1999a], 
- and more come into consideration.

The interested reader should consult these references:
1. the excellent overviews in [Subramanian 2000; Schonwalder 2010; Claise 2019], 
2. and the more detailed treatment of network management available on the Web site for this text.



## The Network Management Framework
![](../../../../../../../Assets/Pics/Screenshot%202023-05-17%20at%209.35.55%20AM.png)


### Managing Server
The managing server is an application, typically with network managers (humans) in the loop, running in a centralized network management station in the network operations center (NOC). The managing server is the locus of activity for network management: it controls the collection, processing, analysis, and dispatching of network management information and commands. It is here that actions are initiated to configure, monitor, and control the network’s managed devices. In practice, a network may have several such managing servers.


### Managed Device
A managed device is a piece of network equipment (including its software) that resides on a managed network. A managed device might be a host, router, switch, middlebox, modem, thermometer, or other network-connected device. The device itself will have many manageable components (e.g., a network interface is but one component of a host or router), and configuration parameters for these hardware and software components (e.g., an intra-AS routing protocol, such as OSPF).


### Data
Each managed device will have data, also known as “state,” associated with it. There are several different types of data. Configuration data is device information explicitly configured by the network manager, for example, a manager-assigned/ configured IP address or interface speed for a device interface. Operational data is information that the device acquires as it operates, for example, the list of immediate neighbors in OSPF protocol. Device statistics are status indicators and counts that are updated as the device operators (e.g., the number of dropped packets on an interface, or the device’s cooling fan speed). The network manager can query remote device data, and in some cases, control the remote device by writing device data values, as discussed below. As shown in Figure 5.17, the managing server also maintains its own copy of configuration, operational and statistics data from its managed devices as well as network-wide data (e.g., the network’s topology).


### Network Management Agent
The network management agent is a software process running in the managed device that communicates with the managing server, taking local actions at the managed device under the command and control of the managing server. The network management agent is similar to the routing agent that we saw in Figure 5.2.


### Network Management Protocol
The final component of a network management framework is the network management protocol. This protocol runs between the managing server and the managed devices, allowing the managing server to query the status of managed devices and take actions at these devices via its agents. Agents can use the network management protocol to inform the managing server of exceptional events (e.g., component failures or violation of performance thresholds). It’s important to note that the network management protocol does not itself manage the network. Instead, it provides capabilities that network managers can use to manage (“monitor, test, poll, configure, analyze, evaluate, and control”) the network. This is a subtle, but important, distinction.



## ⌨️ Network Management Interfaces
### CLI
A network operator may issue direct Command Line Interface (CLI) commands to the device. These commands can be typed directly on a managed device’s console (if the operator is physically present at the device), or over a Telnet or secure shell (SSH) connection, possibly via scripting, between the managing server/controller and the managed device. 

**CLI commands are vendor- and device-specific and can be rather arcane.** 
While seasoned network wizards may be able to use CLI to flawlessly configure network devices, CLI use is **prone to errors**, and it is difficult to automate or efficiently scale for large networks. Consumer-oriented network devices, such as your wireless home router, may export a management menu that you (the network manager!) can access via HTTP to configure that device. While this approach may work well for single, simple devices and is less error-prone than CLI, it also doesn’t scale to larger-sized networks.


### SNMP/MIB
In this approach, the network operator can query/set the data contained in a device’s **Management Information Base (MIB)** objects using the **Simple Network Management Protocol (SNMP)**. 

Some MIBs are **device-specific and vendor-specific**, while other MIBs (e.g., the number of IP datagrams discarded at a router due to errors in an IP datagram header, or the number of UDP segments received at a host) are **device-agnostic**, providing abstraction and generality. 

A network operator would most typically use this approach to query and monitor operational state and device statistics, and then use CLI to actively control/configure the device. We note, importantly, that both approaches manage devices individually. 

A network-management workshop convened by the Internet Architecture Board in 2002 [RFC 3535] noted not only the value of the SNMP/ MIB approach for device monitoring but also noted its shortcomings, particularly for device configuration and network management at scale. This gave rise to the most recent approach for network management, using NETCONF and YANG.

↗ [SNMP & MIB](../../../0x01%20Application%20Layer/🚔%20Network%20Managements%20&%20Standards/SNMP%20&%20MIB/SNMP%20&%20MIB.md)


### NETCONF/YANG
The NETCONF/YANG approach takes a more abstract, network-wide, and holistic view toward network management, with a much stronger emphasis on configuration management, including specifying correctness constraints and providing atomic management operations over multiple controlled devices. YANG [RFC 6020] is a data modeling language used to model configuration and operational data. The NETCONF protocol [RFC 6241] is used to communicate YANG-compatible actions and data to/from/among remote devices.

↗ [NETCONFIG & YANG](../../../0x01%20Application%20Layer/🚔%20Network%20Managements%20&%20Standards/NETCONFIG%20&%20YANG/NETCONFIG%20&%20YANG.md)



## Ref

