# Web Server Env

[TOC]



## LAMP / LNMP

## ⛲️ Gists

1. Install a Linux release (CenOS/ [Debian](https://lab.twidc.net/debian10-lamp/)/ Ubuntu ...)
   1. Create new sser
   2. Change new uer's privilege
   3. Configure SSH
      1. login only (Security concern)

2. Install web server (httpd, nginx, tomcat, ...)

   1. Configure web server
      1. Server name, port, protocols, etc
      2. **configrue server to support php**
         1. For httpd, it has build-in modul that support php, so all needed is enable php modul in config file.
         2. For nginx, since it doesn't handle php inherently, php-fpm is needed to be installed to support php. See more on [如何快速正确配置完整的php环境（nginx和php)](https://www.php.cn/php-weizijiaocheng-476519.html),  [nginx php-fpm安装配置](https://wizardforcel.gitbooks.io/nginx-doc/content/Text/6.5_nginx_php_fpm.html)

3. Install MariaDB/ Mysql

   1. Create new user

   2. Set passwd for new user

      > Since Mysql 8.0, default password authetication plugin is `caching_sha2_password` instead of `mysql_native_password` in the previous version. 
      >
      > For php < 7.2, there's no way for it to identify this new plugin `caching_sha2_password` which may be the cause of failing to access database. In this case set mysql to use original authetication method of 'mysql_native_password'.
      >
      > Two ways to change authentication method:
      >
      > 1. edit `my.cnf` file (default location: )
      >
      >    ``` shell
      >    default_authentication_plugin = mysql_native_password
      >    ```
      >
      > 2. use mysql statement: 
      >
      >    ```mysql
      >    ALTER USER 'yourusername'@'localhost' IDENTIFIED WITH mysql_native_password BY 'youpassword';
      >    ```
      >
      >    
      >
      > 🖇 Refs: 
      >
      > 1. [Authentication plugin 'caching_sha2_password' cannot be loaded](https://stackoverflow.com/questions/49194719/authentication-plugin-caching-sha2-password-cannot-be-loaded) 

   3. grant priviledges to new user

4. Install PHP

   1. Counfigure Web server to implement PHP. 

      1. [如何在Debian 10 Linux上安装PHP](https://www.myfreax.com/how-to-install-php-on-debian-10/)
      2. 

   2. **Make sure php connector is installed** so as to connect to database ( mysql in my case). 

      > php connector is an overall term reference to the implementation of PDO (php database object) to the various databases. In the case of mysql, use `pdo_mysql`. 
      >
      > 
      >
      > It seems that i installed `pdo_mysql 5.0.2` on my server, however my mysql version is 8.0.2. So i changed my mysql to the version of 5.0.2. 
      >
      > 
      >
      > 🖇 Refs:
      >
      > 1. [PHP 7 RC3: How to install missing MySQL PDO](https://stackoverflow.com/questions/32728860/php-7-rc3-how-to-install-missing-mysql-pdo) 
      > 2. [How to connect to MySQL using PDO](https://phpdelusions.net/pdo_examples/connect_to_mysql)

      

      1. 




### 🧭 Guides

#### ⚱️ Resources

1. [手动搭建LNMP环境（CentOS8）](https://cloud.tencent.com/document/product/213/49304)
2. [手动搭建LAMP环境（CentOS8）](https://cloud.tencent.com/document/product/213/38402)



#### 🏀 Troubelshootings

##### 👉 Service&Package Management

> [CentOS 初体验三： Yum 安装、卸载软件](https://blog.csdn.net/zhaoyanjun6/article/details/78894974)
>
> [查看 Linux 系统服务的 5 大方法](https://www.cnblogs.com/yychuyu/p/13428335.html)



##### 👉 User Management

>  [Linux 中授予普通用户 sudo 权限的正确方法](https://p3terx.com/archives/linux-grants-normal-user-sudo-permission.html)
>
> [linux下添加用户并赋予root权限](https://blog.csdn.net/stormbjm/article/details/9086163)

三种方法，推荐第三种。



##### 👉 SSH Login ONLY

###### 1. Generate SSH key

>  [SSH简介及两种远程登录的方法](https://blog.csdn.net/li528405176/article/details/82810342)



###### 2. Setting SSH only

>  [设置 SSH 通过密钥登录](https://www.runoob.com/w3cnote/set-ssh-login-key.html)



###### 检查文件权限正确：

```shell
[root@host .ssh]$ chmod 600 authorized_keys
[root@host .ssh]$ chmod 700 ~/.ssh
```

设置 /etc/ssh/sshd_config 文件：

```shell
RSAAuthentication yes
PubkeyAuthentication yes
PermitRootLogin yes
PasswordAuthentication no
```

重启 SSH 服务：

```shell
[root@host .ssh]$ service sshd restart
```