# Knowledge Graph

[TOC]



## Res
### Related Topics
↗ [Syntax & Semantics of (Natural) Language](../../../../../../../Other%20Networks%20of%20Knowledge/Arts%20&%20Humanities/📃%20Language%20&%20Literature/Linguistics/Syntax%20&%20Semantics%20of%20(Natural)%20Language/Syntax%20&%20Semantics%20of%20(Natural)%20Language.md)
↗ [Semantic Analysis](../../../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Processing%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/1️⃣%20Frontend%20-%20Programming%20Language%20Analysis/Semantic%20Analysis/Semantic%20Analysis.md)
↗ [Natural Language Processing (NLP) & Computational Linguistics](../../../../Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics.md)

↗ [Graph Theory](../../../../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Combinatorics%20(Combinatorial%20Mathematics)/🫆%20Graph%20Theory/Graph%20Theory.md)
- ↗ [Graph Basics](../../../../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Combinatorics%20(Combinatorial%20Mathematics)/🫆%20Graph%20Theory/📌%20Graph%20Theory%20Basics/Graph%20Basics.md)
↗ [Tree & Graph](../../../../../../🔑%20CS%20Core/🧙‍♂️%20Algorithm%20&%20Data%20Structure/📌%20Algorithms%20Basics%20&%20Data%20Structure/Data%20Structures/Tree%20&%20Graph/Tree%20&%20Graph.md)

↗ [Knowledge Management & Computational Notebook](../../../../../../🔑%20CS%20Core/Generic%20Software%20Tools%20&%20Projects/Knowledge%20Management%20&%20Computational%20Notebook/Knowledge%20Management%20&%20Computational%20Notebook.md)
↗ [📇 Docs Management](../../../../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/Linux%20Free%20Software%20&%20OSS%20(Open%20Source%20Software)/Text%20&%20File%20&%20Dir%20Management/📇%20Docs%20Management.md)

↗ [Graph Mining](../../../../../../Data-Oriented%20&%20Human-Centered%20Technologies/Data%20Science/⛏️%20Data%20Mining/Graph%20Mining/Graph%20Mining.md)
↗ [GNN (Graph Neural Network)](../../🌊%20Artificial%20Neural%20Networks%20(ANN)%20&%20Deep%20Learning%20Methods/2️⃣%20Neural%20Network%20Models%20🗿/GNN%20(Graph%20Neural%20Network)/GNN%20(Graph%20Neural%20Network).md)
↗ [GDBMS (Graph)](../../../../../../🔑%20CS%20Core/🍕%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/DBMS%20(DataBase%20Management%20System)%20Implementations/GDBMS%20(Graph)/GDBMS%20(Graph).md)


### Other Resources
[什么是知识图谱?](https://zhuanlan.zhihu.com/p/71128505)

[知识图谱的技术与应用（18版）](https://zhuanlan.zhihu.com/p/38056557)

[这是一份通俗易懂的知识图谱技术与应用指南](https://www.jiqizhixin.com/articles/2018-06-20-4)
- https://www.youtube.com/playlist?app=desktop&list=PLFI1Cd4723_QRcDU28fm2TBcMkMk2Rbz7
- https://mp.weixin.qq.com/s/9bc8b-VtlW0seKgloLEvRQ
- https://mp.weixin.qq.com/s/gZ2k2BdM1T-Xf0hdNqzH0Q

https://learn.deeplearning.ai/courses/agentic-knowledge-graph-construction/lesson/hhqjv/introduction
Agentic Knowledge Graph Construction
- Traditional relational DB:
	- ![](../../../../../../../Assets/Pics/Screenshot%202025-11-06%20at%2017.03.45.png)
- Graph-based DB:
	- ![](../../../../../../../Assets/Pics/Screenshot%202025-11-06%20at%2017.04.13.png)
- Knowledge Graph in General:
	- ![](../../../../../../../Assets/Pics/Screenshot%202025-11-06%20at%2016.58.28.png)
- Knowledge Graph: An exmaple:
	- ![](../../../../../../../Assets/Pics/Screenshot%202025-11-06%20at%2017.04.54.png)



## Intro
> 🔗 https://en.wikipedia.org/wiki/Knowledge_graph

In [knowledge representation and reasoning](https://en.wikipedia.org/wiki/Knowledge_representation_and_reasoning "Knowledge representation and reasoning"), a **knowledge graph** is a [knowledge base](https://en.wikipedia.org/wiki/Knowledge_base "Knowledge base") that uses a [graph](https://en.wikipedia.org/wiki/Graph_\(discrete_mathematics\) "Graph (discrete mathematics)")-structured [data model](https://en.wikipedia.org/wiki/Data_model "Data model") or [topology](https://en.wikipedia.org/wiki/Topology "Topology") to represent and operate on [data](https://en.wikipedia.org/wiki/Data "Data"). Knowledge graphs are often used to store interlinked descriptions of [entities](https://en.wikipedia.org/wiki/Named_entity "Named entity") – objects, events, situations or abstract concepts – while also encoding the free-form [semantics](https://en.wikipedia.org/wiki/Semantics "Semantics") or relationships underlying these entities.

Since the development of the [Semantic Web](https://en.wikipedia.org/wiki/Semantic_Web "Semantic Web"), knowledge graphs have often been associated with [linked open data](https://en.wikipedia.org/wiki/Linked_data "Linked data") projects, focusing on the connections between [concepts](https://en.wikipedia.org/wiki/Concept "Concept") and entities. They are also historically associated with and used by [search engines](https://en.wikipedia.org/wiki/Search_engine "Search engine") such as [Google](https://en.wikipedia.org/wiki/Knowledge_Graph_\(Google\) "Knowledge Graph (Google)"), [Bing](https://en.wikipedia.org/wiki/Bing_\(search_engine\) "Bing (search engine)"), and [Yahoo](https://en.wikipedia.org/wiki/Yahoo "Yahoo"); [knowledge engines](https://en.wikipedia.org/wiki/Knowledge_engine "Knowledge engine") and question-answering services such as [WolframAlpha](https://en.wikipedia.org/wiki/WolframAlpha "WolframAlpha"), Apple's [Siri](https://en.wikipedia.org/wiki/Siri "Siri"), and [Amazon Alexa](https://en.wikipedia.org/wiki/Amazon_Alexa "Amazon Alexa"); and [social networks](https://en.wikipedia.org/wiki/Social_network "Social network") such as [LinkedIn](https://en.wikipedia.org/wiki/LinkedIn "LinkedIn") and [Facebook](https://en.wikipedia.org/wiki/Facebook "Facebook").

Recent developments in data science and machine learning, particularly in graph neural networks and representation learning and also in machine learning, have broadened the scope of knowledge graphs beyond their traditional use in search engines and recommender systems. They are increasingly used in scientific research, with notable applications in fields such as [genomics](https://en.wikipedia.org/wiki/Genomics "Genomics"), [proteomics](https://en.wikipedia.org/wiki/Proteomics "Proteomics"), and [systems biology](https://en.wikipedia.org/wiki/Systems_biology "Systems biology")



## Ref
[Leading Pharmaceutical Company Cuts Drug Discovery Timelines in Half with Neo4j-Powered Knowledge Platform on AWS]: https://neo4j.com/customer-stories/leading-pharma-company/

[Semantic Web| wikipeida]: https://en.wikipedia.org/wiki/Semantic_Web
