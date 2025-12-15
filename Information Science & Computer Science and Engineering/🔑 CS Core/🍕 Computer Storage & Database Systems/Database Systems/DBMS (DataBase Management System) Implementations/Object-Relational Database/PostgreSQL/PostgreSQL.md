# PostgreSQL

[TOC]



## Res
🏠 https://www.postgresql.org

📂 https://www.postgresql.org/docs/

[PostgreSQL 教程 -- 菜鸟](https://www.runoob.com/postgresql/postgresql-tutorial.html)


### Related Topics



## Intro
PostgreSQL is a powerful, open-source **object-relational database system** with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.

There is a wealth of information to be found describing how to [install](https://www.postgresql.org/download/)and [use](https://www.postgresql.org/docs/) PostgreSQL through the [official documentation](https://www.postgresql.org/docs/). The PostgreSQL community provides many helpful places to become familiar with the technology, discover how it works, and find career opportunities. Reach out to the community [here](https://www.postgresql.org/community/).


### Set-up
#### Deployment
(Brew, docker, .dmg , .zip ...)

> [3 Easy Steps to Install Docker PostgreSQL Environment](https://hevodata.com/learn/docker-postgresql/)
>
> [Official guides](https://hub.docker.com/_/postgres)



Docker for example: 
1. CLI command:
```shell
docker pull postgres
docker run --name postgresql \
-e POSTGRES_USER=myusername \
-e POSTGRES_PASSWORD=mypassword \
-p 5432:5432 \
-v /data:/var/lib/postgresql/data \
-d postgres

docker run --name psql_test \
-e POSTGRES_USER=testuser \
-e POSTGRES_PASSWORD=mypassword \
-p 5432:5432 \
-v postgres_test_db:/var/lib/postgresql/data \
-d postgres

```

2. Docker-compose.yaml: 
```yaml
# Use postgres/example user/password as credentials

version: '3.1'

  services:

    db:											# PostgreSQL DMS
      image: postgres
      restart: always
      ports:
        - 5432:5432
      environment:
        POSTGRES_USER: example_username
        POSTGRES_PASSWORD: example_password
      network:
        PSQLnet

    adminer:
      image: adminer  							# PostgreSQL Web UI (optional)
      restart: always
      ports:
        - 8080:8080
      network:
        PSQLnet

    network:
      - PSQLnet
```
#### Cnfig
```shell
jdbc:postgresql://host:port/database
```
#### Usage
[PostgreSQL操作-psql基本命令](https://www.cnblogs.com/my-blogs-for-everone/p/10226473.html) 



[理解PostgreSQL数据库、模式、表、空间、用户间的关系]:https://aozsky.com/database/postgresql.schema
[PostgreSQL 模式（SCHEMA）]:https://www.runoob.com/postgresql/postgresql-schema.html
[PostgreSQL JDBC客户端接口介绍]:https://www.modb.pro/db/52381
[sonarqube配置postgresql数据库]:https://blog.51cto.com/huny/3263674




## Ref