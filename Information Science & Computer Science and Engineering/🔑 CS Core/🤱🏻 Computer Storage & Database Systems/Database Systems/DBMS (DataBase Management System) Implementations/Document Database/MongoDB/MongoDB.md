# MongoDB

[TOC]



## Res
🏠 https://www.mongodb.com/home


### Learn MongoDB
Documentation - https://docs.mongodb.com/manual/ 
Developer Center - https://www.mongodb.com/developer/MongoDB University - [https://learn.mongodb.com](https://learn.mongodb.com/)

Forums:
- [https://community.mongodb.com](https://community.mongodb.com/)
  Technical questions about using MongoDB.
- https://community.mongodb.com/c/server-dev
  Technical questions about building and developing MongoDB.


### Support
#### Mongo Drivers
Client drivers for most programming languages are available athttps://docs.mongodb.com/manual/applications/drivers/. Use the shell (`mongo`) for administrative tasks.

#### Bug Reports
See https://github.com/mongodb/mongo/wiki/Submit-Bug-Reports.

#### Packaging
Packages are created dynamically by the [buildscripts/packager.py](https://github.com/mongodb/mongo/blob/master/buildscripts/packager.py) script. This will generate RPM and Debian packages.


### Download MongoDB
- [Host MongoDB on the Cloud](https://www.mongodb.com/cloud/atlas)
- [Download Source](https://www.mongodb.com/try/download/community)
- Using homebrew `brew tap mongodb/brew`
- Using docker image `docker pull mongo`


### Building
See [Building MongoDB](https://github.com/mongodb/mongo/blob/master/docs/building.md).


### Running
For command line options invoke:
```
$ ./mongod --help
```

To run a single server database:
```
  $ sudo mkdir -p /data/db
  $ ./mongod
  $
  $ # The mongo javascript shell connects to localhost and test database by default:
  $ ./mongo
  > help
```


## Intro
![Logo](../../../../../../../Assets/Pics/leaf.svg)

A record in MongoDB is a document, which is a data structure composed of field and value pairs. MongoDB documents are similar to JSON objects. The values of fields may include other documents, arrays, and arrays of documents.

![A MongoDB document.](https://www.mongodb.com/docs/manual/images/crud-annotated-document.bakedsvg.svg)

The advantages of using documents are:
- Documents correspond to native data types in many programming languages.
- Embedded documents and arrays reduce need for expensive joins.
- Dynamic schema supports fluent polymorphism.


### Components
- `mongod` - The database server.
- `mongos` - Sharding router.
- `mongo` - The database shell (uses interactive javascript).


### Installing Compass
You can install compass using the `install_compass` script packaged with MongoDB:
```
  $ ./install_compass
```

This will download the appropriate MongoDB Compass package for your platform and install it.



## Ref
