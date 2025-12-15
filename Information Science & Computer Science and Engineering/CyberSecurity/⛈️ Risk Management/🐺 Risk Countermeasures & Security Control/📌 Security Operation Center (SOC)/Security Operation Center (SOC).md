# SOC (Security Operation Center)

[TOC]



## Res
### Related Topics
↗ [Disaster & Incidence Response (IR)](../Disaster%20&%20Incidence%20Response%20(IR)/Disaster%20&%20Incidence%20Response%20(IR).md)
↗ [SRC (Security Response Center) & CERT CSIRT CIRT](../Disaster%20&%20Incidence%20Response%20(IR)/SRC%20(Security%20Response%20Center)%20&%20CERT%20CSIRT%20CIRT.md)

↗ [Cyber Threat Intelligence (CTI) & Reconnaissance](../../🐗%20Cybersecurity%20Threats%20&%20Attacks/🛰️%20Cyber%20Threat%20Intelligence%20(CTI)%20&%20Reconnaissance/Cyber%20Threat%20Intelligence%20(CTI)%20&%20Reconnaissance.md)


### Other Resources
🔥 https://github.com/mthcht/awesome-lists/tree/main?tab=readme-ov-file
Security lists for SOC detections


## Intro
> 🔗 https://www.techtarget.com/searchsecurity/tip/CERT-vs-CSIRT-vs-SOC-Whats-the-difference

A [security operations center](https://www.techtarget.com/searchsecurity/definition/Security-Operations-Center-SOC) (SOC) is another term you'll hear in the context of incident response teams. However, a SOC generally encompasses multiple aspects of security operations, while CSIRTs, CERTs and CIRTs focus specifically on incident response.

A SOC's purview can include the incident response function (either in whole or in part) as well as other tasks. For example, a SOC can:
- encompass monitoring operations and controls (such as an intrusion detection, system/intrusion prevention system, security information event management/security information management);
- oversee evaluation of operational and security telemetry and information gathering; and,
- manage tasks such as identity management and authorization, firewall and filtering ruleset maintenance (both review and change management), forensics and investigation support, or any other aspect of operational security.

A SOC's monitoring efforts is likely to extend beyond incident response. A SOC might harvest and collect metrics to support customer service or service delivery (at a managed security service provider, for example) or it might support management reporting like preparation of metrics and data to support risk assessment or for audit support. While a SOC often comes up in the context of incident response, it almost always has other elements of security within its scope of responsibility. A SOC is likely to have a broader operational purpose and scope than a CSIRT or CIRT. If there is a SOC in a given organization, incident response likely falls within the purview of the SOC as an operational security function. Again, the specifics depend on the organization.



## Ref
[👍 CERT vs. CSIRT vs. SOC: What's the difference?]: https://www.techtarget.com/searchsecurity/tip/CERT-vs-CSIRT-vs-SOC-Whats-the-difference

[What Is a Security Operations Center?]: https://www.trellix.com/security-awareness/operations/what-is-soc/

**Security Operation Center** (SOC) is a centralized function within an organization employing people, processes, and technology to continuously monitor and improve an organization's security posture while preventing, detecting, analyzing, and responding to cybersecurity incidents.

A SOC acts like the hub or central command post, taking in telemetry from across an organization's IT infrastructure, including its networks, devices, appliances, and information stores, wherever those assets reside. The proliferation of [advanced threats](https://www.trellix.com/advanced-research-center/threat-intelligence/) places a premium on collecting context from diverse sources. Essentially, the SOC is the correlation point for every event logged within the organization that is being monitored. For each of these events, the SOC must decide how they will be managed and acted upon.

[SIEM vs. SOAR: What's the Difference?]: https://www.blackberry.com/us/en/solutions/endpoint-security/security-information-event-management/siem-vs-soar#:~:text=With%20this%20setup%2C%20the%20SIEM,applies%20remediation%20measures%20as%20necessary

SIEM provides incident data to SOCs. The technology plays an important role in threat monitoring and response, combining log data from Security Event Management (SEM) and data analysis from Security Information Management (SIM). Although some SIEM platforms are capable of applying machine learning and behavioral analytics to their monitoring, this is ultimately not their intended purpose. 

Their core function, above all else, is to generate and send incident alerts to security teams for investigation and remediation. Although SIEM solutions allow for the management and categorization of alerts, security staff typically handle this manually. In addition to less time spent dealing with threats, this can contribute to notification fatigue.

---
SOAR solutions comprise a system of integrated technologies and tools designed to help security teams automate their data collection, threat analysis, and incident response processes. Since SOAR typically consists of multiple cybersecurity solutions operating in unison, its use cases are pretty broad. With that said, SOAR solutions typically specialize in proactively coordinating, automating, and prioritizing threat detection and remediation. 

Leveraging SOAR allows personnel to focus on tackling more complex issues and mitigating more sophisticated threats while also ensuring Security Operations Centers (SOCs) have advanced warning of possible incidents.