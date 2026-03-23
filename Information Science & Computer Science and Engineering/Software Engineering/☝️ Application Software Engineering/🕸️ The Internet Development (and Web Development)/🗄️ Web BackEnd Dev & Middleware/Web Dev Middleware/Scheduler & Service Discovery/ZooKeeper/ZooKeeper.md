# ZooKeeper

[TOC]



## Res
🏠 https://zookeeper.apache.org
🚧 https://github.com/apache/zookeeper

🤠 [ZooKeeper Wiki](https://cwiki.apache.org/confluence/display/ZOOKEEPER/Index)

### Getting Started
Start by installing ZooKeeper on a single machine or a very small cluster.
1. [Learn about](https://zookeeper.apache.org/doc/current/index.html) ZooKeeper by reading the documentation.
2. [Download](https://zookeeper.apache.org/releases.html) ZooKeeper from the release page.

### Getting Involved
Apache ZooKeeper is an open source volunteer project under the Apache Software Foundation. We encourage you to learn about the project and contribute your expertise. Here are some starter links:

1. See our [How to Contribute to ZooKeeper](https://cwiki.apache.org/confluence/display/ZOOKEEPER/HowToContribute) page.
2. Give us [feedback](https://issues.apache.org/jira/browse/ZOOKEEPER): What can we do better?
3. Join the [mailing list](https://zookeeper.apache.org/lists.html): Meet the community.



## Intro
![Apache Zookeeper Internals. This article describes the internal… | by sudan  | Medium](../../../../../../../../Assets/Pics/C54208C8-B426-45DF-BF5B-BACE98C21BE3.png)

> Apache ZooKeeper is an effort to develop and maintain an open-source server which enables highly reliable distributed coordination.

ZooKeeper is a centralized service for maintaining configuration information, naming, providing distributed synchronization, and providing group services. All of these kinds of services are used in some form or another by distributed applications. Each time they are implemented there is a lot of work that goes into fixing the bugs and race conditions that are inevitable. Because of the difficulty of implementing these kinds of services, applications initially usually skimp on them, which make them brittle in the presence of change and difficult to manage. Even when done correctly, different implementations of these services lead to management complexity when the applications are deployed.



## Ref

