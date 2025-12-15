# Opensearch Project

[TOC]



## Res
🏠 https://opensearch.org
📂 https://opensearch.org/docs/latest/
🚧 https://github.com/opensearch-project


### Related Topics
↗ [Elasticsearch](../📲%20Embedding%20Database/Elasticsearch.md)



## Intro
OpenSearch is a scalable, flexible, and extensible open-source software suite for search, analytics, and observability applications licensed under Apache 2.0. Powered by [Apache Lucene](https://lucene.apache.org/) and driven by the [OpenSearch Project community](https://opensearch.org/about.html), OpenSearch offers a vendor-agnostic toolset you can use to build secure, high-performance, cost-efficient applications. Use OpenSearch as an end-to-end solution or connect it with your preferred open-source tools or [partner projects](https://opensearch.org/partners).


### AWS Elasticsearch vs OpenSearch vs Open Distro for Elasticsearch (ODFE)

> 🔗 https://logit.io/blog/post/aws-elasticsearch-vs-opensearch/

With all of these terms coined in the wake of Elastic’s decision to make the ELK Stack closed-source, it can be very confusing to know the difference between the new distributions of Elasticsearch and Kibana being offered by Amazon Web Services and other cloud/Saas platforms.

**TL;DR**
**AWS Elasticsearch Service (Amazon ES)** referred to the proprietary service Amazon had offered since 2015, this solution offered managed Elasticsearch as a service.

**Amazon OpenSearch Service** is the successor to Amazon Elasticsearch Service and offers the latest version of OpenSearch as a managed solution. This news was announced on September 8th 2021.

**Open Distro for Elasticsearch (ODFE)** was the previous name for OpenSearch, on the official website for ODFE an announcement was made on June 25 2021 that all users should refer to the new OpenSearch site for news and updates as the previous site sporting the old branding will be selectively decommissioned in time.

**OpenSearch and OpenSearch dashboards** are the current rebrand of Open Distro for Elasticsearch which was also announced on September 8th, 2021. This is the latest fully open-source version of the Elastic Stack.

All of the terms above are directly connected to AWS’s involvement with the distribution of Elasticsearch and Kibana, with Logstash having been excluded from the development process.
#### 🆚 Difference Between OpenSearch, ElasticSearch, and ELK
> below are ai generated contents

OpenSearch, Elasticsearch, and ELK (Elasticsearch, Logstash, Kibana) are related technologies used for search, analytics, and log management. Here's an overview of their differences:

OpenSearch:
- OpenSearch is an open-source search and analytics engine that originated as a fork of Elasticsearch. It is designed to be community-driven and governed by the OpenSearch community. OpenSearch aims to provide a transparent and collaborative environment for development and innovation.
- OpenSearch offers capabilities similar to Elasticsearch, including full-text search, distributed indexing, and analytics. It supports various data types, advanced search features, and scalability for large-scale deployments. OpenSearch has a pluggable architecture that allows users to extend and customize its functionality.
- OpenSearch is designed to be compatible with Elasticsearch APIs, making it relatively easy to migrate applications from Elasticsearch to OpenSearch.

Elasticsearch:
- Elasticsearch is a popular distributed search and analytics engine. It is built on top of Apache Lucene and provides a RESTful API for indexing, searching, and analyzing structured and unstructured data. Elasticsearch is known for its scalability, fault tolerance, and near real-time search capabilities.
- Elasticsearch is capable of handling large volumes of data and supports horizontal scaling across multiple nodes. It provides powerful search features, aggregations, filtering, and relevance scoring. Elasticsearch is widely used for various use cases, including log analytics, monitoring, e-commerce search, and content search.
- Elasticsearch is often used as the underlying engine in the ELK Stack, which combines Elasticsearch, Logstash, and Kibana for log management and analysis.

ELK Stack:
- ELK Stack is a combination of three open-source tools: Elasticsearch, Logstash, and Kibana. It is a popular solution for log management, analysis, and visualization.
- Elasticsearch serves as the core component of ELK Stack, providing storage, indexing, and search capabilities for log data.
- Logstash is a data collection and parsing tool that enables the ingestion, transformation, and enrichment of log data from various sources. It can process logs, metrics, and other event data and send it to Elasticsearch for indexing.
- Kibana is a web-based data visualization and exploration platform. It allows users to create dashboards, perform ad hoc queries, build visualizations, and generate reports based on data stored in Elasticsearch. Kibana provides a user-friendly interface to interact with Elasticsearch data and gain insights from log files.

In summary, OpenSearch is an open-source search and analytics engine that originated as a fork of Elasticsearch. Elasticsearch is a distributed search and analytics engine known for its scalability and real-time search capabilities. ELK Stack combines Elasticsearch, Logstash, and Kibana to provide a comprehensive log management and analysis solution.
#### Compatibility 
Most clients that work with Elasticsearch OSS 7.10.2 _should_ work with OpenSearch, but the latest versions of those clients might include license or version checks that artificially break compatibility. 

👀 Visit https://opensearch.org/docs/2.6/clients/index/



## Ref
