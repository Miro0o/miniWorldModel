# Troubleshootings

[TOC]



## 👉 Elasticsearch failed to start on macos
#elastic_search

If you run:
```shell
brew info elasticsearch
```
You will see:

> Deprecated because it is switching to an incompatible license. Check out `opensearch`instead!

So you should either use [opensearch](https://opensearch.org/), which is:

> a community-driven, open source search and analytics suite derived from Apache 2.0 licensed Elasticsearch 7.10.2 & Kibana 7.10.2.

or if you want to stay with Elasticsearch use the [official installation method for macOS](https://www.elastic.co/guide/en/elasticsearch/reference/8.1/targz.html) which consists of using a tar.gz:
```shell
wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-8.1.2-linux-x86_64.tar.gz
wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-8.1.2-linux-x86_64.tar.gz.sha512
shasum -a 512 -c elasticsearch-8.1.2-linux-x86_64.tar.gz.sha512 
tar -xzf elasticsearch-8.1.2-linux-x86_64.tar.gz
cd elasticsearch-8.1.2/
```
alternatively you can use an official [Docker image](https://www.elastic.co/guide/en/elasticsearch/reference/8.1/docker.html).

[Elasticsearch failed to start on macos | Stackoverflow]: https://stackoverflow.com/questions/71905757/elasticsearch-failed-to-start-on-macos
