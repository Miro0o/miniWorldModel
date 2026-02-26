# ArchiMate

[TOC]



## Res
📂 https://www.archimatetool.com/downloads/archi/Archi%20User%20Guide.pdf
Archi User Guide


### Related Topics
↗ [Enterprise Architecture (EA) & Requirement Engineering (RE)](../../../../Information%20Systems%20&%20System%20Architecture%20Design/👨🏻‍🔧%20Enterprise%20Architecture%20(EA)%20&%20Requirement%20Engineering%20(RE)/Enterprise%20Architecture%20(EA)%20&%20Requirement%20Engineering%20(RE).md)
↗ [Goal-Oriented Requirement Engineering](../../../../Information%20Systems%20&%20System%20Architecture%20Design/👨🏻‍🔧%20Enterprise%20Architecture%20(EA)%20&%20Requirement%20Engineering%20(RE)/Goal-Oriented%20Requirement%20Engineering/Goal-Oriented%20Requirement%20Engineering.md)

↗ [I-Star](I-Star.md)


### ArchiMate CheatSheet
👍 https://gbruneau.github.io/ArchiMate/
This cheat sheet is a brief overview of the Archimate Standard for Architecture  
Please refer to the[Official Archimate 3 Reference from the Open Group](https://pubs.opengroup.org/architecture/archimate32-doc/) for more information and detail.  
On all the examples, you can use the mouse wheel to zoom in/zoom out.  
Enjoy.


👍 https://acrossandahead.com/wp-content/uploads/2024/08/ArchiMate-Notation-Cheat-Sheet.pdf
![ArchiMate-Notation-Cheat-Sheet](../../../../../Assets/Cheat_Sheets/ArchiMate-Notation-Cheat-Sheet.pdf)


### Other Resources
https://www.hosiaisluoma.fi/blog/archimate/
ArchiMate Cookbook

https://archimate-community.pages.opengroup.org/workgroups/archimate-101/#_why_this_book
ArchiMate 101: A Practical Introduction



## Intro
> 🔗 https://en.wikipedia.org/wiki/ArchiMate

**ArchiMate** ([/ˈɑːrkɪmeɪt/](https://en.wikipedia.org/wiki/Help:IPA/English "Help:IPA/English") [_AR-ki-mayt_](https://en.wikipedia.org/wiki/Help:Pronunciation_respelling_key "Help:Pronunciation respelling key")) is an open and independent [enterprise architecture](https://en.wikipedia.org/wiki/Enterprise_architecture "Enterprise architecture") [modeling language](https://en.wikipedia.org/wiki/Modeling_language "Modeling language") to support the description, analysis and visualization of architecture within and across [business](https://en.wikipedia.org/wiki/Business "Business") domains in an unambiguous way.

ArchiMate is a technical standard from [The Open Group](https://en.wikipedia.org/wiki/The_Open_Group "The Open Group") and is based on concepts from the now superseded [IEEE 1471](https://en.wikipedia.org/wiki/IEEE_1471 "IEEE 1471") standard. It is supported by various tool vendors and consulting firms. ArchiMate is also a registered trademark of The Open Group. The Open Group has a certification program for ArchiMate users, software tools and courses.

ArchiMate distinguishes itself from other languages such as [Unified Modeling Language](https://en.wikipedia.org/wiki/Unified_Modeling_Language "Unified Modeling Language") (UML) and [Business Process Modeling and Notation](https://en.wikipedia.org/wiki/Business_Process_Modeling_Notation "Business Process Modeling Notation") (BPMN) by its [enterprise modelling](https://en.wikipedia.org/wiki/Enterprise_modelling "Enterprise modelling") scope.

Also, UML and BPMN are meant for a specific use and they are quite heavy – containing about 150 (UML) and 250 (BPMN) modeling concepts whereas ArchiMate works with just about 50 (in version 2.0). The goal of ArchiMate is to be ”as small as possible”, not to cover every edge scenario imaginable. To be easy to learn and apply, ArchiMate was intentionally restricted “to the concepts that suffice for modeling the proverbial 80% of practical cases".

![](../../../../../Assets/Pics/Screenshot%202026-02-18%20at%2020.37.30.png)


### ArchiMate Language
> 🔗 https://en.wikipedia.org/wiki/ArchiMate#ArchiMate_language


#### ArchiMate Palette Set (Elements /Nodes + Connectors /Relations)
> 🔗 https://architectureinmotion.com.au/archimate-design-cheat-sheet/

The ArchiMate modelling language contains 62 elements organised across seven layers – strategy, business, application, technology, physical, implementation, and motivation.

There are also 12 connectors used to create relationships between elements.

The semantics of all elements and connectors are useful.

You may find that as you begin to learn a few elements and connectors, and how to create a few common diagram types you see the lack of clarity in non-ArchiMate diagrams.

As you improve with modeling, you will learn to value the semantics of elements, connectors, and layers, and you will be able to glance at a diagram and understand a lot of information quickly and accurately.

This semantic framework is at the heart of the power of ArchiMate modeling and allows fast and accurate communication of ideas and designs between Architects.

With careful design, key ideas can be socialised and agreed upon with business stakeholders.

![](../../../../../Assets/Pics/Pasted%20image%2020260218202802.png)

The following example diagram shows all 11 ArchiMate connectors being used. You typically wouldn’t expect that all connector types are used in the average diagram.

![](../../../../../Assets/Pics/Pasted%20image%2020260218202813.png)

The meaning of the ArchiMate connectors is as follows:
- **Composition** – labelled as “composes” above. The solid diamond is the parent, and the other end of the connector is the child. Use Composition when the child cannot exist without the parent. For example, an Order cannot exist without a Customer.
- **Aggregation** – labelled as “aggregates” above. The hollow diamond is the parent, and the other end of the connector is the child. Use Aggregates when the child can exist without the parent. For example, an Order has a Product, but Products can exist without having been placed on an Order.
- **Assignment** – labelled as “assigned to” above. Use Assignment to attach an entity capable of performing behaviour to the behaviour it performs. Typically, this is used when you connect an Actor to a Business Function or an Application Interface to an Application Function. For example, Sales are assigned to the Create Order function.
- **Realization** – labelled as “realizes” above. This is most commonly used in two entirely different scenarios.
    - Use Realization to connect a service to its implementation. For example, an “Ordering System” Application Component realizes (or provides) an “Ordering Services” service.
    - Use Realization to show the traceability of information across technology, application, and business layers. For example, Product Data in the Application layer realizes (or “maps to”) a Product as defined in the Business layer. Business Objects in the Business layer can be thought of as a glossary of terms level.
- **Serving** – labelled as “serves” above. Use Serves to show consumption of services. This could be vertical consumption of services from one layer to the one above, e.g. technology to application, or application to business, or consumption of services within a layer, e.g. App 1 consuming an API service from App 2.
- **Access** – labelled as “accesses” above. Use Access to show read, write, read/write, or access of information. Access can be used in the Business, Application, and Technology layers.
- **Influences** – labelled as “influences” above. Use Influences typically in the Motivation layer to show where one Assessment may influence another or where an Assessment influences or rolls up into a Driver. e.g. the Assessment of “The warehouse is inefficient” may influence another Assessment of “customers are slow to receive their orders”. Assessments used in this way are a way of analysing root cause analysis, or “The Five Why’s”.
- **Triggering** – labelled as “triggers” above. Use Triggers to show a sequence of events, typically between processes or functions, or from an event (business, application, or technology) that triggers a function in those layers. For example, the “Create Order” function triggers the “Raise Invoice” function.
#### The Rule of Three (Active -> Behavior -> Passive)
> 🔗 https://architectureinmotion.com.au/archimate-design-cheat-sheet/

One of the patterns in using ArchiMate is “==something or someone (actor) does something (verb) to something (subject/noun)==”

This pattern applies across the business, application, and technology layers.

Some examples are shown below, where top-to-bottom, we have the actor, verb, and noun.

The main point to remember is that if you have modelled one or two out of the three possible elements in the “rule of three”, you may want to think about what is missing as part of helping to build out and complete your model.

For example, if your diagram has a Business Actor and Business Function, it’s easier to see that you are missing Business Objects.

![](../../../../../Assets/Pics/Pasted%20image%2020260218203252.png)
<small>Examples of the rule of three – “something or someone does something to something.”</small>
#### Layer Traceability (Service Oriented Approach)
> 🔗 https://architectureinmotion.com.au/archimate-design-cheat-sheet/

The layers in ArchiMate exist for a reason. Typically, a lot of helpful diagram types focus on one layer only.

There is always an exception; however, the most common way elements from different layers get joined is by using the **Serving** and **Realization** connections. In terms of inter-layer connectors:
- **Serving** – shows how a service in one layer is used by the layer above. However, Serving can also be used within a layer, e.g. to show how service from App 1 is used by App 2.
- **Realization** – shows traceability of information, which can be how an Artifact in the Technology layer maps to a Data Object in the Application layer or how a Data Object in the Application layer maps to a Business Object in the Business layer.

![](../../../../../Assets/Pics/Pasted%20image%2020260218203403.png)

![](../../../../../Assets/Pics/Screenshot%202026-02-18%20at%2020.41.29.png)


### ArchiMate Framework
![](../../../../../Assets/Pics/Screenshot%202026-02-18%20at%2020.37.30.png)
#### 🎯 ArchiMate Core Framework
> 🔗 https://en.wikipedia.org/wiki/ArchiMate#Core_framework

![](../../../../../Assets/Pics/Pasted%20image%2020260218202358.png)

![](../../../../../Assets/Pics/Screenshot%202026-02-18%20at%2020.37.02.png)
##### Business Layer
![](../../../../../Assets/Pics/Screenshot%202026-02-18%20at%2021.12.45.png)
##### Application Layer
![](../../../../../Assets/Pics/Screenshot%202026-02-18%20at%2021.12.29.png)

Business to application layer alignment:
![](../../../../../Assets/Pics/Screenshot%202026-02-25%20at%2020.22.10.png)

> [!example]
> Business to application layer alignment: example
> 
> ![](../../../../../Assets/Pics/Screenshot%202026-02-18%20at%2021.13.30.png)
##### Technological Layer
![](../../../../../Assets/Pics/Screenshot%202026-02-25%20at%2008.19.13.png)

Application to technology alignment:
![](../../../../../Assets/Pics/Screenshot%202026-02-25%20at%2018.50.14.png)

> [!example]
> Application to technology alignment: example
> 
> ![](../../../../../Assets/Pics/Screenshot%202026-02-25%20at%2008.20.04.png)
#### 🎯 ArchiMate Full Framework
> 🔗 https://en.wikipedia.org/wiki/ArchiMate#Full_framework

![](../../../../../Assets/Pics/Pasted%20image%2020260218202513.png)
#### Composite Elements
##### Grouping
- Aggregate elements together
- Aggregate elements of the same (external) organization
- We group external organizations, while we usually not group the target organization for clarity

> [!example]
> Cloud computing:  service models
> 
> ![](../../../../../Assets/Pics/Screenshot%202026-02-25%20at%2019.24.46.png)
##### Derived Relationships
Relational strength:  (from weakest to strongest)
- Access (weakest)
- Serving
- Realization
- Assignment
- Aggregation
- Composition (strongest)

Association relation: generic relation
![](../../../../../Assets/Pics/Screenshot%202026-02-25%20at%2019.05.51.png)
![](../../../../../Assets/Pics/Screenshot%202026-02-25%20at%2019.06.18.png)
##### Location


### Pros & Cons of ArchiMate
> 🔗 https://en.wikipedia.org/wiki/ArchiMate#Benefits_and_pitfalls_of_ArchiMate



## Ref
