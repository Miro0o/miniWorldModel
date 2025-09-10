# Memcached

[TOC]



## Res
🏠 https://memcached.org


### Related Topics



## Intro
[Memcached](https://memcached.org/) is a free and open-source, simple yet powerful, distributed memory object caching system. It is an in-memory key-value store for small chunks of data such as results of database calls, API calls, or page rendering. It runs on Unix-like operating systems including Linux and OS X and also on Microsoft Windows.

Being a developer tool, it is intended for use in boosting speeds of dynamic web applications by caching content (by default, a **Least Recently Used** (**LRU**) cache) thus reducing the on-disk database load – it acts as a short-term memory for applications. It offers an API for the most popular programming languages.

**Memcached** supports strings as the only data type. It has a client-server architecture, where half of the logic happens on the client side and the other half on the server side. Importantly, clients understand how to pick which server to write to or read from, for an item. Also, a client knows very well what to do in case it can not connect to a server.

Although it is a distributed caching system, thus supports clustering, the Memcached servers are disconnected from each other (i.e they are unaware of each other). This means that there is no replication support like in Redis. They also understand how to store and fetch items, and manage when to evict, or reuse memory. You can increase available memory by adding more servers.

It supports authentication and encryption via TLS as of Memcached 1.5.13, but this feature is still in the experimental phase.



## Ref
[👍 10 Top Open Source Caching Tools for Linux in 2023]: https://www.tecmint.com/open-source-caching-tools-for-linux/

