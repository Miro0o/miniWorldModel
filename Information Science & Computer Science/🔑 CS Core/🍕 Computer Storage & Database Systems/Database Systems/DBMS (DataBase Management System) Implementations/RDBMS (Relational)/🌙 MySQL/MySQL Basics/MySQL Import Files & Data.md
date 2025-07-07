# MYSQL Import Files & Data

[TOC]



## Res
[SQL-Hub.com](https://sql-hub.com/Page/index.php?Shortname=helpMSSQLMySQL)
SQL-Hub allows you to merge data from multiple databases into a single central view. SQL-Hub is ideal where you have more than one database containing the same types of data. SQL-Hub combines the data from the tables in each of the databases into corresponding merged tables in a central database. Each record is tagged so its source database can be easily identified.



## Intro


## Mysql Import/Export Files
### Mysql Import `.sql` Files
#### 👉 `mysql`
``` shell
$ for SQL in *.sql; do mysql -uroot -p"123456" mydb < $SQL; done
```

```sql
mysql -uroot -p -Ddatabase3 < schema.sql
mysql -uroot -p -Ddatabase3 < database1.sql
mysql -uroot -p -Ddatabase3 < database2.sql
```

Check 🔗 [MySQL Options](http://dev.mysql.com/doc/refman/5.0/en/mysql-command-options.html).

**Note 1:** It is better to use the full path of the SQL file `file.sql`.

**Note 2:** Use `-R` and `--triggers` with `mysqldump` to keep the routines and triggers of the original database. They are not copied by default.

**Note 3** You may have to create the (empty) database from MySQL if it doesn't exist already and the exported SQL doesn't contain `CREATE DATABASE` (exported with `--no-create-db` or `-n` option) before you can import it.


[👍 How do I import an SQL file using the command line in MySQL? | Stackoverflow]: https://stackoverflow.com/a/17666279/16542494


#### 👉 `source`
``` sql
mysql > use mydb;
mysql > source /home/gary/all.sql
```

#### 👉 `mysqldump`
```sql
mysqldump -u root -p --no-create-info database1 > database1.sql
mysqldump -u root -p --no-create-info database2 > database2.sql
mysqldump -u root -p --no-data database1 > schema.sql
```


#### ⭐️ Efficiency Improvement
对于**百M**级以上文件，如果光这样导入，**速度是极其缓慢**的，

根据MySQL官方建议，我们有几个措施可以极大提高导入的速度，如下：

1. **对于MyISAM**，调整系统参数：[bulk_insert_buffer_size](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_bulk_insert_buffer_size)（至少单个文件大小的2倍以上）
2. **对于InnoDB**，调整系统参数：[innodb_log_buffer_size](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_log_buffer_size)（至少单个文件大小的2倍以上，导入完成后可以改回默认的8M，注意不是[innodb_buffer_pool_size](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_buffer_pool_size)。）
3. 除主键外，**删除其他索引，导入完成后重建索引。**
4. **关闭自动提交**：`autocommit=0`。（**请勿用**`set global autocommit=1;`命令来关闭，否则整个MySQL系统都会停止自动`commit`，**innodb log buffer很快就会爆满**，5和6项也请仅在会话中有效，**正确做法请往下看**）
5. **关闭唯一索引检查**：`unique_checks=0`。（关闭了这一项会影响`on duplicate key update`的效果）
6. **关闭外键检查**：`foreign_key_checks=0`。
7. **`insert`值写在一条语句内**，如：`INSERT INTO yourtable VALUES (1,2), (5,5), ...;`
8. 有自增列的，设置：[innodb_autoinc_lock_mode](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_autoinc_lock_mode)的值为`2`,



### Mysql Import Other files
#### 👉 `sqlimport`


#### 👉 `LOAD DATA IN FILE`



## Mysql Merge Databases






## Ref
[🤔 How can i merge two mysql databases of same characteristics with out losing any data | Stackoverflow]: https://stackoverflow.com/questions/71050494/how-can-i-merge-two-mysql-databases-of-same-characteristics-with-out-losing-any

[Can I merge two databases into one in Mysql if they both have the same schema? | Stackoverflow]: https://stackoverflow.com/questions/6526824/can-i-merge-two-databases-into-one-in-mysql-if-they-both-have-the-same-schema


[👍 MySQL导入多个.sql文件高效方法]: https://www.awaimai.com/2382.html

MySQL有多种方法导入多个.sql文件（里面是sql语句），常用的有两个命令：`mysql`和`source`。

但是这两个命令的导入效率差别很大，具体请看最后的比较。

（还有[sqlimport](https://dev.mysql.com/doc/refman/8.0/en/mysqlimport.html)和[LOAD DATA INFILE](https://dev.mysql.com/doc/refman/8.0/en/load-data.html)等导入方法，不过它们主要用于导入`.csv`或`.xml`文件数据，不是`.sql`文件）


[Will mysql import overwrite my database]: https://dba.stackexchange.com/questions/298941/will-mysql-import-overwrite-my-database


[Can we merge two databases in MySQL without affecting the data in them? If so, how can we do it? | Quora]: https://www.quora.com/Can-we-merge-two-databases-in-MySQL-without-affecting-the-data-in-them-If-so-how-can-we-do-it

It will depend on few deciding factor.

If you have two database with same schema then you may want to use MySql database with` —no-create-info` option. Then you can use it to load it into the target database. Also you can try Sql-Hub to merge databases.

If you have database with different schema then you can simply use `mysqldump` and then go ahead with surgical merge.

Beware of primary key or auto-generated ids or indexes.

[MySQL 导出数据 | 菜鸟]: https://www.runoob.com/mysql/mysql-database-export.html
