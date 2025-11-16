# Graph Basics

[TOC]



## Res
### Related Topics
↗ [Set Theory & Axiomatic Set Theory](../../🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/Set%20Theory%20&%20Axiomatic%20Set%20Theory.md)
↗ [Relation & Order Theory](../../🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/👬%20Relation%20&%20Order%20Theory/Relation%20&%20Order%20Theory.md)

↗ [Tree & Graph](../../../🔑%20CS%20Core/🧙‍♂️%20Algorithm%20&%20Data%20Structure/📌%20Algorithms%20Basics%20&%20Data%20Structure/Data%20Structures/Tree%20&%20Graph/Tree%20&%20Graph.md)


### Other Resources
[竞赛图详解](https://www.cnblogs.com/asd123www/p/9626066.html) 

[浅谈竞赛图](https://cmwqf.github.io/2020/04/22/浅谈竞赛图/)



## Intro: Graph
![](../../../../Assets/Pics/Screenshot%202025-10-25%20at%2021.30.25.png)
<small>📖 离散数学，四川大学计算机学院</small>

图是用于描述现实世界中离散客体之间关系的有用工具。在集合论中采用过以图形来表示二元关系的方法。在那里，用点代表客体，用一条由点指向点的有向线段代表客体和之间的二元关系，这样集合上的二元关系可以用点的集合和有向线的集合构成的二元组来描述。同样的方法也可以用来描述其他的问题。例 如，当考察全球航运时，可以用点来代表城市，用线来表示两城市间有航线通达。当研究计算机网络时，可以用点来表示计算机及终端，用线表示它们之间的信息传输通道。当研究物质的化学结构时，可以用点来表示其中的化学元素，用线来表示元素之间的化学键。在这种表示法中，点的位置及线的长短形状都是无关紧要的，重要的是两点之间是否有线相连。从图形的这种表示方法中可以抽象出图的数学概念。


### Basic Concepts
---
. 结点的度数（次数）
（1）在**无向图**G=⟨V, E⟩中，与结点u(u∈V)关联的边的条数，称为该结点的度数，简称**点度**，记为deg(u)。

•最大点度记为Δ，最小点度记为δ。

![Screenshot 2023-01-02 at 6.27.54 PM](../../../../../../Assets/Pics/Screenshot%202023-01-02%20at%206.27.54%20PM.png)

#### Graph Isomorphism
![Screenshot 2023-01-02 at 6.34.21 PM](../../../../../../Assets/Pics/Screenshot%202023-01-02%20at%206.34.21%20PM.png)

![Screenshot 2023-01-02 at 6.41.03 PM](../../../../../../Assets/Pics/Screenshot%202023-01-02%20at%206.41.03%20PM.png)

![Screenshot 2023-01-02 at 6.43.52 PM](../../../../../../Assets/Pics/Screenshot%202023-01-02%20at%206.43.52%20PM.png)

点割集同理

#### Graph Representation as Relation Matrix

#### Walk & Closed Walk

#### Trail

#### Path & Circuit (通路与回路)


### Graph Connectivity
![Screenshot 2023-01-02 at 6.49.00 PM](../../../../../../Assets/Pics/Screenshot%202023-01-02%20at%206.49.00%20PM.png)

有向图中：可达关系不是等价关系；相互可达关系是等价关系

![Screenshot 2023-01-02 at 6.48.29 PM](../../../../../../Assets/Pics/Screenshot%202023-01-02%20at%206.48.29%20PM.png)

![Screenshot 2023-01-02 at 6.48.43 PM](../../../../../../Assets/Pics/Screenshot%202023-01-02%20at%206.48.43%20PM.png)



## Tree
↗ [Tree Basics](Tree%20Basics.md)



## Planar Graph
↗ [Planar Graph Basics](Planar%20Graph%20Basics.md)



## Ref
