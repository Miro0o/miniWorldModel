# LBAC (Lattice-Based Access Control)

[TOC]



## Res
### Related Topics
↗ [Partial Order & Order Theory](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Relation%20Theory/Partial%20Order%20&%20Order%20Theory/Partial%20Order%20&%20Order%20Theory.md)
↗ [Lattice (Order Theory)](../../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Relation%20Theory/Partial%20Order%20&%20Order%20Theory/Lattice%20(Order%20Theory)/Lattice%20(Order%20Theory).md)

↗ [Information Flow & Information Flow Control (IFC)](../../../../../../🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/👚%20SCA%20(Static%20Code%20Analysis)%20&%20SAST/Information%20Flow%20&%20Information%20Flow%20Control%20(IFC)/Information%20Flow%20&%20Information%20Flow%20Control%20(IFC).md)


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Lattice-based_access_control

In [computer security](https://en.wikipedia.org/wiki/Computer_security "Computer security"), **lattice-based access control** (**LBAC**) is an [access control](https://en.wikipedia.org/wiki/Access_control "Access control") model defined to control data transfers between **objects** (such as resources, computers, and applications) and **subjects** (such as individuals, groups or organizations). Subjects and objects will be collectively called 'the entities' and the model is valid even if there is not a distinction between subjects and objects.

Entities are given unique _labels_, on which a _dominance_ relation _≤_ is defined. _Data can move among entities according to the dominance relation between their labels._ For example, one can define _Public_ _≤_ _Confidential_ and so if database _A_ is labeled _Public_ and database _B_ is labeled _Confidential_, data from _A_ can move to _B_. Further, this theory postulates that the set of permissible labels must form a _lattice_, i.e., a partially ordered set where for each two labels there are a unique label that dominates them both (their _join_) and a unique label that both of them dominate (their _meet_).

Lattice based access control models were first formally defined by [Denning](https://en.wikipedia.org/wiki/Dorothy_E._Denning "Dorothy E. Denning") (1976); see also Sandhu (1993).

More recent research has shown that the condition that the partial order of labels must form a lattice unnecessarily limits the power of the model. If this condition is removed, the model becomes simpler and more general. It can be proved that this more general model can define the same data flows as other security models, such as Access Control Lists, Discretionary Access Control, Role-based Access Control, Attribute-based Access Control. This model can also be implemented in network routing, by establishing a correspondence between labels and network addresses. However, this second, more general, access control model can no longer be called Lattice-based Access Control and so it appears that this model has become obsolete. Note that it is possible to complete any partial order of entities to make it a lattice, however this is unnecessary.

A short ArXiv paper discussing the history of this concept is Logrippo (2025). It contains references to several journal and conference papers.



## Ref
