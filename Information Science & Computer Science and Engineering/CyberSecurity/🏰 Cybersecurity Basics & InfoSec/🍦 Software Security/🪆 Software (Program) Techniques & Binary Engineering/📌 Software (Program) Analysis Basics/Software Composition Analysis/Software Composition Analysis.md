# Software Composition Analysis

[TOC]



## Res
### Related Topics


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Software_composition_analysis

**Software composition analysis** (**SCA**) is a practice in the fields of Information technology and [software engineering](https://en.wikipedia.org/wiki/Software_engineering "Software engineering") for analyzing custom-built software applications to detect embedded open-source software and detect if they are up-to-date, contain security flaws, or have licensing requirements.


### Principle of Operation
> 🔗 https://en.wikipedia.org/wiki/Software_composition_analysis#Principle_of_operation

SCA products typically work as follows:
- An engine **scans** the software source code, and the associated artifacts used to **compile** a software application.
- The engine **identifies** the OSS components and their versions and usually stores this information in a database creating a **catalog** of OSS in use in the scanned application.
- This catalog is then **compared** to databases referencing known security vulnerabilities for each component, the licensing requirements for using the component, and the historical versions of the component. For security vulnerability detection, this comparison is typically made against known security vulnerabilities (CVEs) that are tracked in the [National Vulnerability Database](https://en.wikipedia.org/wiki/National_Vulnerability_Database "National Vulnerability Database") (NVD). Some products use an additional proprietary database of vulnerabilities. For [IP / Legal Compliance](https://en.wikipedia.org/wiki/Legal_governance,_risk_management,_and_compliance#Legal_compliance "Legal governance, risk management, and compliance"), SCA products will extract and **evaluate** the type of licensing used for the OSS component. Versions of components are extracted from popular open source repositories such as [GitHub](https://en.wikipedia.org/wiki/GitHub "GitHub"), [Maven](https://en.wikipedia.org/wiki/Apache_Maven "Apache Maven"), [PyPi](https://en.wikipedia.org/wiki/Python_Package_Index "Python Package Index"), [NuGet](https://en.wikipedia.org/wiki/NuGet "NuGet"), and many others.
- Modern SCA systems have incorporated advanced analysis techniques to improve accuracy and reduce false positives. Notable contributions include **vulnerable method analysis**, which determines whether vulnerable methods identified in dependencies are actually reachable from the application code. This approach, pioneered by [Asankhaya Sharma](https://en.wikipedia.org/w/index.php?title=Asankhaya_Sharma&action=edit&redlink=1 "Asankhaya Sharma (page does not exist)") and colleagues, uses call graph analysis to trace execution paths from application entry points to vulnerability-specific sinks in third-party libraries.
- **Hybrid static-dynamic analysis** techniques combine statically-constructed call graphs with dynamic instrumentation to improve the performance of false positive elimination. This modular approach addresses limitations of purely static analysis, which can introduce both [false positives and false negatives](https://en.wikipedia.org/wiki/False_positives_and_false_negatives "False positives and false negatives") on real-world projects.
- **Machine learning-based vulnerability curation** automates the process of building and maintaining vulnerability databases by predicting the vulnerability-relatedness of data items from various sources such as bug tracking systems, commits, and mailing lists. These systems use self-training techniques to iteratively improve model quality and include deployment stability metrics to evaluate new models before production deployment.
- **Natural language processing techniques** for automated vulnerability identification analyze commit messages and bug reports to identify security-related issues that may not have been publicly disclosed. This approach uses machine learning classifiers trained on textual features extracted from development artifacts to discover previously unknown vulnerabilities in open-source libraries.
- The results are then made available to end users using different digital formats. The content and format depend on the SCA product and may include guidance to evaluate and interpret the risk, and recommendations especially when it concerns the legal requirements of open source components such as [strong or weak copyleft](https://en.wikipedia.org/wiki/Copyleft#Strong_and_weak_copyleft) licensing. The output may also contain a [Software Bill of Materials](https://en.wikipedia.org/wiki/Software_supply_chain "Software supply chain") (SBOM) detailing all the open source components and associated attributes used in a software application.


### Advanced Techniques



## Ref
