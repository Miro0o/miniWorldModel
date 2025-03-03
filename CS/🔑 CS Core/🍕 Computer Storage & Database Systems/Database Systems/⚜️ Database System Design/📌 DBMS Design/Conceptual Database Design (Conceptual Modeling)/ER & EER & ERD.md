# ER & EER & ERD

[TOC]



## Res
↗ [SE /Design & Modeling & Docs /UML](../../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20for%20Specific%20Areas/🪁%20DSL(Domain%20Specific%20Languages)%20&%20GPL(General%20Purpose%20Languages)/Modeling%20(Specification)%20DSL%20&%20GPL/UML%20(Unified%20Modeling%20Language).md)

↗ [SE /Design & Modeling & Docs /ERD](../../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20for%20Specific%20Areas/🪁%20DSL(Domain%20Specific%20Languages)%20&%20GPL(General%20Purpose%20Languages)/Modeling%20(Specification)%20DSL%20&%20GPL/ERD%20(Entity-Relationship%20Diagram).md)



## ER (Entity-Relationship) Basics
![](../../../../../../../../../Assets/Pics/Screenshot%202023-04-23%20at%209.08.56%20PM.png)


### 1️⃣ Entity Types (实体类型)
#### Strong and Weak Entity Types
Strong entity type: An entity type that is not existence-dependent on some other entity type.

Week entity type: An entity type that is existence-dependent on some other entity type.

![](../../../../../../../../../Assets/Pics/Screenshot%202023-04-23%20at%209.17.44%20PM.png)



### 2️⃣ Relationship Types (联系/关系类型)
A set of meaningful associations among entity types.

A uniquely identifiable association that includes one occurrence from each participating entity type.

#### Semantic Net

#### Diagrammatic Representation of Relationship Types

#### Degree of Relationship Type
![](../../../../../../../../../Assets/Pics/Screenshot%202023-04-23%20at%209.10.45%20PM.png)

![](../../../../../../../../../Assets/Pics/Screenshot%202023-04-23%20at%209.10.54%20PM.png)

![](../../../../../../../../../Assets/Pics/Screenshot%202023-04-23%20at%209.11.55%20PM.png)

Diagrammatic representation of complex relationships


#### Recursive Relationship
![](../../../../../../../../../Assets/Pics/Screenshot%202023-04-23%20at%209.12.22%20PM.png)


### 3️⃣ Attributes
- **Simple attributes**: An attribute composed of a single component with an independent existence.

- **Composite attributes**: An attribute composed of multiple components, each with an independent existence.

- **Single-valued attributes**: An attribute that holds a single value for each occurrence of an entity type.

- **Multi-valued attributes**: An attribute that holds multiple values for each occurrence of an entity type.

- **Derived attributes**: An attribute that represents a value that is derivable from the value of a related attribute or set of attributes, not necessarily in the same entity type.


![](../../../../../../../../../Assets/Pics/Screenshot%202023-04-23%20at%209.16.30%20PM.png)


#### ⭐️ Attributes on Relationships
Attributes can also be assigned to relationships. 

> For example, consider the relationship Advertises, which associates the Newspaper and PropertyForRent entity types as shown in Figure 12.1. To record the date the property was advertised and the cost, we associate this information with the Advertises relationship as attributes called dateAdvert and cost, rather than with the Newspaper or the PropertyForRent entities.
> ![](../../../../../../../Assets/Pics/Screenshot%202023-06-16%20at%204.30.57%20PM.png)

We represent attributes associated with a relationship type using the same symbol as an entity type. However, to distinguish between a relationship with an attribute and an entity, the rectangle representing the attribute(s) is associated with the relationship using a dashed line. 

> For example, Figure 12.13 shows the Advertises relationship with the attributes dateAdvert and cost. A second example shown in Figure 12.1 is the Manages relationship with the mgrStartDate and bonus attributes.

**The presence of one or more attributes assigned to a relationship may indicate that the relationship conceals an unidentified entity type.** For example, the presence of the dateAdvert and cost attributes on the Advertises relationship indicates the presence of an entity called Advert.


### 4️⃣ Keys
- **Candidate keys**: The minimal set of attributes that uniquely identifies each occurrence of an entity type.

- **Primary key**s: The candidate key that is selected to uniquely identify each occurrence of an entity type.

- **Composite keys**: A candidate key that consists of two or more at


### 5️⃣ Structural Constraints
#### Multiplicity
Multiplicity: The number (or range) of possible occurrences of an entity type that may relate to a single occurrence of an associated entity type through a particular relationship.

##### Multiplicity for Complex Relationships
> **Multiplicity (complex relationship)**: The number (or range) of possible occurrences of an entity type in an n-ary relationship when the other (n–1) values are fixed.

![](../../../../../../../../../Assets/Pics/Screenshot%202023-04-23%20at%209.26.09%20PM.png)


#### Cardinality and Participation Constraints
> **Cardinality**: Describes the maximum number of possible relationship occurrences for an entity participating in a given relationship type.

> **Participation**: Determines whether all or only some entity occurrences participate in a relationship.

![](../../../../../../../Assets/Pics/Screenshot%202023-06-16%20at%204.42.55%20PM.png)

![](../../../../../../../../../Assets/Pics/Screenshot%202023-04-23%20at%209.26.47%20PM.png)



## 🪳 Problems with ER Models
### Fan Traps


### Chasm Traps



## 👏 EER (Enhanced Entity-Relationship)
### 6️⃣ Specialization /Generalization (特殊化/泛化)
#### Superclasses /Subclasses & Relationships


#### Attribute Inheritance


#### Specialization / Generalization Process

![](../../../../../../../../../Assets/Pics/Screenshot%202023-04-23%20at%209.36.32%20PM.png)

![](../../../../../../../../../Assets/Pics/Screenshot%202023-04-23%20at%209.35.34%20PM.png)

#### ⭐️ Constraints on Specialization/Generalization
The disjoint and participation constraints of specialization and generalization are distinct, giving rise to four categories: “mandatory and disjoint,” “optional and disjoint,” “mandatory and non-disjoint,” and “optional and non-disjoint.”

##### Participation Constraints
> **Participation constraint**: Determines whether every member in the superclass must participate as a member of a subclass.

##### Disjoint Constraints
> **Disjoint constraint**: Describes the relationship between members of the subclasses and indicates whether it is possible for a member of a superclass to be a member of one, or more than one, subclass.


### 7️⃣ Aggregation
> **Aggregation**: Represents a “has-a” or “is-part-of” relationship between entity types, where one represents the “whole” and the other the “part.”

A relationship represents an association between two entity types that are conceptually at the same level. Sometimes we want to model a “has-a” or “is-part-of” relationship, in which one entity represents a larger entity (the “whole”), consisting of smaller entities (the “parts”). This special kind of relationship is called an aggregation (Booch et al., 1998). 

Aggregation does not change the meaning of navigation across the relationship between the whole and its parts, or link the lifetimes of the whole and its parts. 

---
An example of an aggregation is the Has relationship, which relates the Branch entity (the “whole”) to the Staff entity (the “part”).

![](../../../../../../../../../Assets/Pics/Screenshot%202023-04-23%20at%209.38.04%20PM.png)


### 8️⃣ Composition
> **Composition**: A specific form of aggregation that represents an association between entities, where there is a strong ownership and **coincidental lifetime** between the “whole” and the “part.”

Aggregation is entirely conceptual and does nothing more than distinguish a “whole” from a “part.” However, there is a variation of aggregation called composition that represents a strong ownership and coincidental lifetime between the “whole” and the “part” (Booch et al., 1998). In a composite, the “whole” is responsible for the disposition of the “parts,” which means that the composition must manage the creation and destruction of its “parts.” **In other words, an object may be part of only one composite at a time.**

---
There are no examples of composition in Figure 13.8. For the purposes of discussion, consider an example of a composition, namely the Displays relationship, which relates the Newspaper entity to the Advert entity. As a composition, this emphasizes the fact that an Advert entity (the “part”) belongs to exactly one Newspaper entity (the “whole”). This is in contrast to aggregation, in which a part may be shared by many wholes. For example, a Staff entity may be “a part of” one or more Branches entities.

UML represents composition by placing a filled-in diamond shape at one end of the relationship line next to the entity that represents the “whole” in the relationship. For example, to represent the Newspaper Displays Advert composition, the filled-in diamond shape is placed next to the Newspaper entity, which is the “whole” in this relationship, as shown in Figure 13.10.

![](../../../../../../../../../Assets/Pics/Screenshot%202023-04-23%20at%209.38.15%20PM.png)





## Ref
[【数据库E-R图知识点和相关习题（复试真题）】 | CSDN]: https://blog.csdn.net/qq_44875230/article/details/123584355

[数据工程师下午试题3: ER图]: https://www.cnblogs.com/MiQing4in/p/13909043.html



