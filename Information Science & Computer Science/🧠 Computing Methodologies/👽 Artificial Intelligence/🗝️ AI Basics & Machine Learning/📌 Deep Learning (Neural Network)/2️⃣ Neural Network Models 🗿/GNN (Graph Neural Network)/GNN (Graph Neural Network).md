# GNN (Graph Neural Network)

[TOC]



## Res
### Related Fields
↗ [Data Science /Graph Mining](../../../../../../Data-Oriented%20&%20Human-Centered%20Technologies/Data%20Science/⛏️%20Data%20Mining/Graph%20Mining/Graph%20Mining.md)
↗ [Graph Theory](../../../../../../🧮%20Mathematics/Graph%20Theory/Graph%20Theory.md)


### Introduction
【零基础多图详解图神经网络（GNN/GCN）【论文精读】】 https://www.bilibili.com/video/BV1iT4y1d7zP/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

👍 [A Gentle Introduction to Graph Neural Networks | distill.pub](https://distill.pub/2021/gnn-intro/)

> This article is one of two Distill publications about graph neural networks. Take a look at [Understanding Convolutions on Graphs](https://distill.pub/2021/understanding-gnns/) to understand how convolutions over images generalize naturally to convolutions over graphs.


[👍 Best Graph Neural Network architectures: GCN, GAT, MPNN and more | AI Summar](https://theaisummer.com/gnn-architectures/)

> Until then, let me recommend a few resources if you want to dive deeper. A very good introductory video is a lecture by Petar Veličković on the [Theoretical Foundations of Graph Neural Networks](https://www.youtube.com/watch?v=uF53xsT7mjc). For a more comprehensive understanding of the aforementioned papers, check out the excellent [video series by Aleksa Gordić on his AI Epiphany channel](https://www.youtube.com/playlist?list=PLBoQnSflObckArGNhOcNg7lQG_f0ZlHF5).


### Datasets
[Stanford Large Network Dataset Collection | Stanford SNAP Project](http://snap.stanford.edu/data/)

[Open Graph Benchmark (OGB)| Stanford SNAP Project](https://github.com/snap-stanford/ogb)
📄 [Open Graph Benchmark: Datasets for Machine Learning on Graphs](https://arxiv.org/abs/2005.00687)

> The Open Graph Benchmark (OGB) is a collection of realistic, large-scale, and diverse benchmark datasets for machine learning on graphs. OGB datasets are automatically downloaded, processed, and split using the [OGB Data Loader](https://ogb.stanford.edu/docs/home/#dataloader). The model performance can be evaluated using the [OGB Evaluator](https://ogb.stanford.edu/docs/home/#evaluator) in a unified manner.   
> 
> OGB is a community-driven initiative in active development. We expect the benchmark datasets to evolve. To keep up to date to major updates, **subscribe to our google group [here](https://groups.google.com/forum/#!forum/open-graph-benchmark)**.

[GNNBenchmarks](https://github.com/graphdeeplearning/benchmarking-gnns)
Repository for benchmarking graph neural networks.

[Public Datasets For Recommender Systems](https://github.com/caserec/Datasets-for-Recommender-Systems)


### Tools & Libs
↗ [Python Libs /PyG](../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/🚠%20Application%20Runtimes%20&%20SDKs/Python%20Runtime%20Environments/📌%20Python%20Third-party%20Libs/Security%20&%20Cryptology/PyG.md)

↗ [Python Libs /DGL](../../../../🏗️%20AI%20(Data)%20Infrastructure%20&%20Stack/🛫%20Foundation%20Models%20&%20Libraries%20&%20SDKs/ML%20Programming%20&%20Frameworks/⭐️%20Python%20Based%20AI/DGL/DGL.md)


### Related Researches & Learning Guides
🔥 [GNN + Community Detection Intro | ETH](https://github.com/adrian-lison/gnn-community-detection)

> The goal of this seminar work is to provide an introduction to the principles and functioning of Graph Neural Networks. In order to illustrate some of the subtleties of different approaches, the task of community detection will be used as a practical example of a promising application, where node features and graph structure can be merged into a rich network representation.


🔥 [GraphGym | Stanford SNAP Project](https://github.com/snap-stanford/GraphGym) --- Platform for designing and evaluating Graph Neural Networks (GNN)

> GraphGym is a platform for designing and evaluating Graph Neural Networks (GNN). GraphGym is proposed in _[Design Space for Graph Neural Networks](https://arxiv.org/abs/2011.08843)_, Jiaxuan You, Rex Ying, Jure Leskovec, **NeurIPS 2020 Spotlight**.
> 
> Please also refer to [PyG](https://www.pyg.org/) for a tightly integrated version of GraphGym and PyG.



## Intro
Graph Neural Networks (GNNs) is an effort to apply deep learning techniques in graphs. The term GNN is typically referred to a variety of different algorithms and not a single architecture.

![gnn-architectures-review](https://theaisummer.com/static/4ce0369b5414edb9f0c0859eb06ca93b/5a190/gnn-architectures-review.png "gnn-architectures-review")
<small>Source: Graph Neural Networks: A Review of Methods and Applications, 2021</small>



## Ref
[Graph Neural Network and Some of GNN Applications: Everything You Need to Know | Neptune.ai]: https://neptune.ai/blog/graph-neural-network-and-some-of-gnn-applications

[Graph Convolutional Networks: Introduction to GNNs]: https://mlabonne.github.io/blog/intrognn/

[A Comprehensive Introduction to Graph Neural Networks (GNNs)]: https://www.datacamp.com/tutorial/comprehensive-introduction-graph-neural-networks-gnns-tutorial

[Graph Neural Networks (GNN, GAE, STGNN)]: https://jonathan-hui.medium.com/graph-neural-networks-gnn-gae-stgnn-1ac0b5c99550

