# BPMN (Business Process Model and Notation)

[TOC]



## Res
### Related Topics
↗ [System Modeling & Integration](../../../../Information%20Systems%20&%20System%20Architecture%20Design/👨🏻‍🔧%20System%20Modeling%20&%20Integration/System%20Modeling%20&%20Integration.md)
↗ [BPMS (Business Process Management Systems)](../../../../Information%20Systems%20&%20System%20Architecture%20Design/👨🏻‍🔧%20System%20Modeling%20&%20Integration/Process%20Modeling%20(Process%20Integration)/Declarative%20Process%20Modeling/BPMS%20(Business%20Process%20Management%20Systems).md)


### Other Resources



## Intro
> [!links]
> ↗ [I-Star](I-Star.md)
> ↗ [ArchiMate](ArchiMate.md)

ArchiMate Business layer:
- Simple control flow structure
- Generic business events
- **No temporal constraints**
- **Not executable**

BPMN: Business Process Modeling Notation
- A visual language to model business processes
- Can be understood by both computer scientists and non-computer scientists (Business Analyst, Process Designer, ...)
- Support both the analysis/definition of processes, and the execution through a BPMS (Business Process Management System)
- Supports Orchestration: Workflows, internal processes of an organization, private processes
- Supports Collaboration: Multi-party processes, B2B processes

**Business Process Management Systems**
- Automates the execution of business processes
- (usually) takes as input a BPMN model + extensions to model data and forms
- Examples:
	- Camunda BPM
	- Bonita Platform
	- Bizagi Platform
	- Red Hat jBPM
- Sometimes integrated into ECM, ERP and ESB services

> 🔗 https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation

**Business Process Model and Notation** (**BPMN**) is a [graphical representation](https://en.wikipedia.org/wiki/Information_visualization "Information visualization") for specifying [business processes](https://en.wikipedia.org/wiki/Business_process "Business process") in a [business process model](https://en.wikipedia.org/wiki/Business_process_modeling "Business process modeling").

Originally developed by the [Business Process Management Initiative](https://en.wikipedia.org/wiki/Business_Process_Management_Initiative "Business Process Management Initiative") (BPMI), BPMN has been maintained by the [Object Management Group](https://en.wikipedia.org/wiki/Object_Management_Group "Object Management Group") (OMG) since the two organizations merged in 2005. Version 2.0 of BPMN was released in January 2011, at which point the name was amended to **Business Process Model _and_ Notation** to reflect the introduction of execution semantics, which were introduced alongside the existing notational and diagramming elements. Though it is an OMG specification, BPMN is also ratified as [ISO](https://en.wikipedia.org/wiki/International_Organization_for_Standardization "International Organization for Standardization") 19510. The latest version is BPMN 2.0.2, published in January 2014.


### Scope
> 🔗 https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation#Scope

BPMN is constrained to support only the concepts of modeling applicable to business processes. Other types of modeling done by organizations for non-process purposes are out of scope for BPMN. Examples of modeling excluded from BPMN are:
- Organizational structures
- Functional breakdowns
- Data models

In addition, while BPMN shows the flow of data (messages), and the association of data artifacts to activities, it is not a [data flow diagram](https://en.wikipedia.org/wiki/Data_flow_diagram "Data flow diagram").


### Elements & Connections
> [!links]
> ↗ [Models of Computation & Abstract Machines](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Models%20of%20Computation%20&%20Abstract%20Machines/Models%20of%20Computation%20&%20Abstract%20Machines.md) "transition system"

> 🔗 https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation#Elements

BPMN models are expressed by simple diagrams constructed from a limited set of graphical elements. For both business users and developers, they simplify understanding of business activities' flow and process. BPMN's four basic element categories are:
- Flow objects: Events, activities, gateways
- Connecting objects: Sequence flow, message flow, association
- [Swim lanes](https://en.wikipedia.org/wiki/Swim_lane "Swim lane"): Pool, lane, Dark Pool
- Artifacts: Data object, group, annotation

These four categories enable creation of simple business process diagrams (BPDs). BPDs also permit making new types of flow object or artifact, to make the diagram more understandable.

#### Flow Objects
> 🔗 https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation#Flow_objects_and_connecting_objects

_**Flow objects**_ are the main describing elements within BPMN, and consist of three core elements: events, activities, and gateways.
- Events
	- ![|250](../../../../../Assets/Pics/Pasted%20image%2020260306093443.png)
- Activities
	- ![|400](../../../../../Assets/Pics/Pasted%20image%2020260306093511.png)
	- Task
		- Atomic Operation Performed Only Once
	- Cyclical activity
		- Atomic operation performed repeatedly until a condition is true
	- Parallel multi-instance activity
		- Multiple operations of the same type carried out in parallel
	- Receive /Send Tasks
		- Allows sending/receiving a message (similar to a Message event)
	- Sub-process
		- A non-atomic operation that can also be represented as a process
- Gateways
	- ![](../../../../../Assets/Pics/Pasted%20image%2020260306093542.png)
#### Connecting Objects
> 🔗 https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation#Flow_objects_and_connecting_objects

_Flow objects_ are connected to each other using **Connecting objects**, which are of three types: sequences, messages, and associations.
- ![|300](../../../../../Assets/Pics/Pasted%20image%2020260306093553.png)
#### Pools, Lanes, and Artifacts
> 🔗 https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation#Pools,_Lanes,_and_artifacts

[Swim lanes](https://en.wikipedia.org/wiki/Swim_lane "Swim lane") are a visual mechanism of organising and categorising activities, based on [cross functional flowcharting](https://en.wikipedia.org/wiki/Cross_functional_flowchart "Cross functional flowchart"), and in BPMN consist of two types:
- Pool
	- Represents major participants in a process, typically separating different organisations. A pool contains one or more lanes (like a real swimming pool). A pool can be open (i.e., showing internal detail) when it is depicted as a large rectangle showing one or more lanes, or collapsed (i.e., hiding internal detail) when it is depicted as an empty rectangle stretching the width or height of the diagram.
- Lane
	- Used to organise and categorise activities within a pool according to function or role, and depicted as a rectangle stretching the width or height of the pool. A lane contains the flow objects, connecting objects and artifacts.

**Artifacts** allow developers to bring some more information into the model/diagram. In this way the model/diagram becomes more readable. There are three pre-defined Artifacts, and they are:
- **Data objects**: Data objects show the reader which data is required or produced in an activity.
	- Shows the physical or virtual objects used by the process
	- Data collection
		- Aggregates multiple data objects of the same type
	- Data state
		- Specifies the state of a data object
	- Data association
		- Links a data object to an activity
		- Can be input, output, or both
- **Data store**
	- Shows where the data reside
- **Group**: A Group is represented with a rounded-corner rectangle and dashed lines. The group is used to group different activities but does not affect the flow in the diagram.
	- Groups related process elements
	- Has no effect on the execution of the process
- **Annotation**: An annotation is used to give the reader of the model/diagram an understandable impression.
	- Adds a comment to a linked element


### Types of BPMN Sub-model
> 🔗 https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation#Types_of_BPMN_sub-model



## BPMN Analysis
### Comparison of BPMN Versions
> 🔗 https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation#Comparison_of_BPMN_versions


### Comparison with Other Process Modeling Notations
> 🔗 https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation#Comparison_with_other_process_modeling_notations



## Ref
