# Clickhouse

[TOC]



## Res
🏠 https://clickhouse.com


### Related Topics



## Intro
ClickHouse® is a column-oriented database management system (DBMS) for online analytical processing of queries (OLAP). ClickHouse’s performance exceeds all other column-oriented database management systems. It processes billions of rows and tens of gigabytes of data per server per second.

[ClickHouse Doc](https://clickhouse.com/docs/en/home/)

[ClickHouse Academy](https://clickhouse.com/learn)



### Quick Start

Watch 25-minutes [Getting Started Video](https://clickhouse.com/company/events/getting-started-with-clickhouse), or

- [Open source quickstart ](https://clickhouse.com/docs/en/getting-started/quick-start)

- [Try ClickHouse Cloud now ](https://clickhouse.cloud/signUp)



```shell
# MacOS Intel
wget 'https://builds.clickhouse.com/master/macos/clickhouse'
chmod a+x ./clickhouse
./clickhouse


# Ubuntu or Debian
sudo apt-get install apt-transport-https ca-certificates dirmngr
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 8919F6BD2B48D754

echo "deb https://packages.clickhouse.com/deb stable main" | sudo tee /etc/apt/sources.list.d/clickhouse.list
sudo apt-get update

sudo apt-get install -y clickhouse-server clickhouse-client

sudo service clickhouse-server start
clickhouse-client # or "clickhouse-client --password" if you set up a password.


# CentOS or RedHat
sudo yum install -y yum-utils
sudo yum-config-manager --add-repo https://packages.clickhouse.com/rpm/clickhouse.repo
sudo yum install -y clickhouse-server clickhouse-client

sudo /etc/init.d/clickhouse-server start
clickhouse-client # or "clickhouse-client --password" if you set up a password.
```



### What Experts say about ClickHouse ...

[ClickHouse vs TimescaleDB]: https://www.youtube.com/watch?v=cMdQsxolcqc "GitLab"
[1.1 Billion Taxi Rides: 108-core ClickHouse Cluster]:https://tech.marksblogg.com/billion-nyc-taxi-rides-clickhouse-cluster.html "Mark Litwintschik"
[ClickHouse, Redshift and 2.5 Billion Rows of Time Series Data]:http://brandonharris.io/redshift-clickhouse-time-series/ "Brandon Harris"
[ClickHouse vs MariaDB ColumnStore]:https://www.percona.com/blog/2020/07/27/clickhouse-and-columnstore-in-the-star-schema-benchmark/ "Percona"



## Ref

[最近很火的 ClickHouse 是什么？](https://jishuin.proginn.com/p/763bfbd2fb27)

