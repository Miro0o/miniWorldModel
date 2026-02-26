# I-Star

[TOC]



## Res
### Related Topics
↗ [Enterprise Architecture (EA) & Requirement Engineering (RE)](../../../../Information%20Systems%20&%20System%20Architecture%20Design/👨🏻‍🔧%20Enterprise%20Architecture%20(EA)%20&%20Requirement%20Engineering%20(RE)/Enterprise%20Architecture%20(EA)%20&%20Requirement%20Engineering%20(RE).md)
↗ [Goal-Oriented Requirement Engineering](../../../../Information%20Systems%20&%20System%20Architecture%20Design/👨🏻‍🔧%20Enterprise%20Architecture%20(EA)%20&%20Requirement%20Engineering%20(RE)/Goal-Oriented%20Requirement%20Engineering/Goal-Oriented%20Requirement%20Engineering.md)

↗ [Models of Computation & Abstract Machines](../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Models%20of%20Computation%20&%20Abstract%20Machines/Models%20of%20Computation%20&%20Abstract%20Machines.md) "transition system"

↗ [ArchiMate](ArchiMate.md)


### Other Resources
http://istar.rwth-aachen.de/tiki-index.php?page=iStarQuickGuide
http://istar.rwth-aachen.de/tiki-index.php?page=iStarGuide
The i* Quick Guide is intended to be both an introduction to i* for new users and a reference guide for experienced users. It is intended to be brief and readable, without an in depth exploration of the motivations for, usage, and underlying philosophies of the i* Framework.

https://sites.google.com/site/istarlanguage/home?authuser=0
https://arxiv.org/pdf/1605.07767v3
iStar 2.0 Language Guide
Fabiano Dalpiaz, Xavier Franch, and Jennifer Horkoff



## Intro



## I-Star Syntax (Elements + Relationships)
![](../../../../../Assets/Pics/Screenshot%202026-02-26%20at%2018.44.48.png)
<small>iStar 2.0 Language Guide <br> Fabiano Dalpiaz, Xavier Franch, and Jennifer Horkoff <br> <a>https://arxiv.org/pdf/1605.07767v3</a></small>


### Participants
![](../../../../../Assets/Pics/Screenshot%202026-02-26%20at%2018.58.59.png)
#### Specialization Relation
![](../../../../../Assets/Pics/Screenshot%202026-02-26%20at%2018.59.56.png)
#### Assignment Relation
![](../../../../../Assets/Pics/Screenshot%202026-02-26%20at%2018.59.44.png)


### Intentional Elements
![](../../../../../Assets/Pics/Screenshot%202026-02-26%20at%2019.00.12.png)
#### Associating intentional elements to participants
![](../../../../../Assets/Pics/Screenshot%202026-02-26%20at%2019.00.34.png)
#### Refining Goals
#### Refining Tasks
![](../../../../../Assets/Pics/Screenshot%202026-02-26%20at%2019.01.27.png)
#### Resources For Task Execution

#### Contribution Links
![](../../../../../Assets/Pics/Screenshot%202026-02-26%20at%2019.02.30.png)

#### Qualification


### Social Dependencies
Represent social relationships
- Depender: an actor that depends for something (the dependum) to be provided
- DependerElement: an intentional element within the depender’s boundary where the dependency starts from, which explains why the dependency exists
- Dependum: an intentional element that is the object of the dependency
- Dependee: the actor that should provide the dependum
- **DependeeElement**: the intentional element that explains how the dependee intends to provide the dependum

Intentional elements that are DependerElement or dependum in a social dependency cannot be refined.
- Workaround: define social dependencies to leaf elements.
![|400](../../../../../Assets/Pics/Screenshot%202026-02-26%20at%2019.04.07.png)



## I-Star Sementics
### Reasoning
Goals and Tasks can be characterized with label indicating to which extent they are achieved:
- Denied (-2)
- Partially denied (-1)
- Partially satisfied (1)
- Satisfied (2)
By doing so, it is possible to identify their effect on the model

![|200](../../../../../Assets/Pics/Screenshot%202026-02-26%20at%2019.07.33.png)
#### Forward Analysis



## Ref
