# ☄️ Troubleshootings

[TOC]



## 👉 Can't connect to MySql
#mysql 

[Warning about SSL connection when connecting to MySQL database](https://stackoverflow.com/questions/34189756/warning-about-ssl-connection-when-connecting-to-mysql-database)

[Cannot create PoolableConnectionFactory](https://stackoverflow.com/questions/5203696/cannot-create-poolableconnectionfactory)



## 👉 Tomcat and Spring framework incompatible.
#tomcat #mysql 

[SEVERE: Error configuring class 【org.springframework.web.context.ContextLoaderListener】NoClassDefFoundError: javax/servlet/ServletContextListener](https://stackoverflow.com/questions/68995226/severe-error-configuring-class-org-springframework-web-context-contextloaderli)

[IDEA启动项目，日志输出文件输出地址](https://blog.csdn.net/David_jiahuan/article/details/102583873)



## 👉 Authentication plugin `caching_sha2_password` cannot be loaded
#mysql #authentication

[Authentication plugin 'caching_sha2_password' cannot be loaded -- stackoverflow](https://stackoverflow.com/questions/49194719/authentication-plugin-caching-sha2-password-cannot-be-loaded)

[authentication plugin caching_sha2 - CSDN](https://blog.csdn.net/u012613251/article/details/80346665)



## 👉 _ERROR 1698 (28000): Access denied for user ‘root’@’localhost’_.
#mysql 

```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'insert_password';
```


[How to Solve MySQL Error: Access denied for user root@localhost]: https://phoenixnap.com/kb/access-denied-for-user-root-localhost



## 👉 Running mysql on localhost /127.0.01
#mysql 

[Getting Error: connect ECONNREFUSED 127.0.0.1:3306 | Stackoverflow]: https://stackoverflow.com/questions/56374530/getting-error-connect-econnrefused-127-0-0-13306



## 👉 ERROR 2002 (HY000): Can't connect to local MySQL server through socket '/var/run/mysqld/mysqld.sock' (2 "No such file or directory")
#mysql  

From the error message, I can only assume you're using the `mysql` client from your host and trying to connect it to `localhost`. The `mysql` client has a special case where it converts a hostname of `localhost` to the default Unix socket path instead, hence the error you're seeing. Swap `localhost` for `127.0.0.1` and it'll probably work.

In the future, these sorts of questions/requests would be more appropriately posted to [the Docker Community Forums](https://forums.docker.com/), [the Docker Community Slack](https://blog.docker.com/2016/11/introducing-docker-community-directory-docker-community-slack/), or [Stack Overflow](https://stackoverflow.com/search?tab=newest&q=docker).



[ERROR 2002 (HY000): Can't connect to local MySQL server through socket '/var/run/mysqld/mysqld.sock' (2 "No such file or directory") #157 | Github Issues]: https://github.com/MariaDB/mariadb-docker/issues/157



## 👉 `ER_WRONG_FIELD_WITH_GROUP` | Disable `ONLY_FULL_GROUP_BY`
#mysql 

This is related to the annoying 'ONLY_FULL_GROUP_BY' default setting in mysql. My advice, permanently switch it off.

mysql> SET GLOBAL sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''))

Refer this for more details: [Disable ONLY_FULL_GROUP_BY](https://stackoverflow.com/questions/23921117/disable-only-full-group-by#36033983) 👇

---

**Solution 1:** Remove **ONLY_FULL_GROUP_BY** from mysql console
```sql
SET GLOBAL sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));
```

you can read more [here](http://johnemb.blogspot.com.ng/2014/09/adding-or-removing-individual-sql-modes.html)


**Solution 2:** Remove **ONLY_FULL_GROUP_BY** from phpmyadmin
- Open phpmyadmin & select localhost 
- Click on menu Variables & scroll down for sql mode
- Click on edit button to change the values & remove **ONLY_FULL_GROUP_BY** & click on save.


[Disable ONLY_FULL_GROUP_BY | Stackoverflow]: https://stackoverflow.com/questions/23921117/disable-only-full-group-by

[ER_WRONG_FIELD_WITH_GROUP | Stackoverflow]: https://stackoverflow.com/questions/59467346/er-wrong-field-with-groupi



## 👉 ReferenceError: require is not defined using require("dotenv").config() | Dotenv not loading env variables
#mysql 

You can check if you have configured node to use ES Modules. This is in package.json
```json
"type": "module"
```

Remove this line and check again.

Remember that having "type": "module"you cannot use require and instead you need to use import syntax

> This is not solved yet ... miro 2023/5/27

---

You do not need path if the `.env` file is at the root, but you can define a return value from config method and check if error happend

```javascript
const result = dotenv.config()

if (result.error) {
  throw result.error
}

console.log(result.parsed)
```

source: [https://www.npmjs.com/package/dotenv](https://www.npmjs.com/package/dotenv) **config** paragraph



[ReferenceError: require is not defined using require("dotenv").config();]: https://stackoverflow.com/questions/65752833/referenceerror-require-is-not-defined-using-requiredotenv-config

[Dotenv not loading env variables with correct path]: https://stackoverflow.com/questions/68009978/dotenv-not-loading-env-variables-with-correct-path