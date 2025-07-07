# SNMP & MIB

[TOC]



## Res
📂 https://csrc.nist.gov/glossary/term/simple_network_management_protocol
Simple Network Management Protocol (SNMP) | NIST

🎬 https://youtu.be/Lq7j-QipNrI?si=qy_XAN4KpojJvssp


## Intro
> 🔗 https://csrc.nist.gov/glossary/term/simple_network_management_protocol (NIST Computer Security Resource Center)

A standard TCP/IP protocol for network management. Network administrators use SNMP to monitor and map network availability, performance, and error rates. To work with SNMP, network devices utilize a distributed data store called the Management Information Base (MIB). All SNMP-compliant devices contain a MIB which supplies the pertinent attributes of a device. Some attributes are fixed or “hard-coded” in the MIB, while others are dynamic values calculated by agent software running on the device.

### SNMP Implementations
> Following are AI generated contents.

1. **Nagios**: Nagios is a widely used open-source network monitoring system. It supports SNMP for monitoring network devices, collecting performance data, and generating alerts. Nagios can monitor various metrics, including CPU usage, memory utilization, network bandwidth, and device availability.
2. **Zabbix**: Zabbix is another open-source network monitoring and management platform. It utilizes SNMP to monitor network devices, servers, and applications. It provides comprehensive monitoring capabilities, including performance metrics, event detection, and alerting.
3. **SolarWinds Network Performance Monitor (NPM)**: SolarWinds NPM is a commercial network monitoring tool. It supports SNMP to monitor network devices, interfaces, and traffic. It offers real-time monitoring, historical data analysis, and customizable reporting features.
4. **Cacti**: Cacti is an open-source network graphing solution that leverages SNMP for data collection. It provides a web-based interface to create and display custom graphs of SNMP-based metrics, such as network bandwidth utilization, CPU load, or memory usage.
5. **PRTG Network Monitor**: PRTG is a comprehensive network monitoring tool that supports SNMP for data collection. It offers a wide range of monitoring capabilities, including network devices, servers, virtual machines, and applications. PRTG provides real-time monitoring, customizable dashboards, and alerting features.
6. **HP OpenView/Operations Manager**: HP OpenView, now known as Operations Manager, is an enterprise-level network management software suite. It includes SNMP-based monitoring capabilities for network devices, servers, and applications. It offers features like event correlation, performance monitoring, and centralized management.
7. **Paessler SNMP Tester**: While not a complete network monitoring solution, Paessler SNMP Tester is a free tool that allows you to test and query SNMP-enabled devices. It helps verify SNMP connectivity, retrieve SNMP values, and troubleshoot SNMP-related issues.

These are just a few examples of software applications that implement network monitoring, configuration, and management functions using SNMP. There are many more options available in the market, both open-source and commercial, catering to different requirements and scales of network management.



## Ref
[Snmp学习总结(一)——Snmp的基本概念]: https://www.cnblogs.com/xdp-gacl/p/3978825.html

[SNMP – What Is Simple Network Management Protocol]: https://www.softwaretestinghelp.com/snmp-protocol/
[Simple Network Management Protocol (SNMP) | GeeksforGeeks]: https://www.geeksforgeeks.org/simple-network-management-protocol-snmp/

[Simple Network Management Protocol | Wiki]: https://en.wikipedia.org/wiki/Simple_Network_Management_Protocol

[Network Basics: What Is SNMP and How Does It Work?]: https://www.auvik.com/franklyit/blog/network-basics-what-is-snmp/

[![MIB tree diagram](https://cdn-fainj.nitrocdn.com/HMhNvtGdkXCThiYKondeUNdKlFRQtHkp/assets/images/optimized/rev-917d04c/www.auvik.com/wp-content/uploads/2016/07/blogrefresh-snmpdiagram-nsm.jpeg)](https://www.auvik.com/wp-content/uploads/2016/07/blogrefresh-snmpdiagram-nsm.jpeg)
