# Database Query Engines

[TOC]



## Res
### Related Topics



## Intro


## Ref
[What's the difference between a "database engine" and a "query engine"? | Stackoverflow]: https://stackoverflow.com/questions/10458824/whats-the-difference-between-a-database-engine-and-a-query-engine

In my mind :

A query can ask for data, actions or else and can have many forms (SQL, JSON, custom language...). So a query is the message of an user/backend request in a software.

A database stocks your data and process requests for rendering it. Every existing database nowadays has an engine to process those request, so they have a query engine that is a part of the whole database engine called DBMS; but here, it will only respond to the right data query (SQL or JSON, depends on database).

But a query engine can be totally implemented to respond to other types of queries; for example you want to render a result to a calculation query that you have designed... You need an engine to process the query that has been sent, to calculate the result and to send it back to whatever instance asked for it.