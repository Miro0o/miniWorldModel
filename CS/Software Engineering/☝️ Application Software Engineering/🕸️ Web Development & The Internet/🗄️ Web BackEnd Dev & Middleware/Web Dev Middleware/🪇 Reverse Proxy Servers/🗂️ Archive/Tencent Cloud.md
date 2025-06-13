# [My personal site](http://110.42.183.220/wordpress)

[TOC]



# [My OS Dash -- Centos8mJO](https://console.cloud.tencent.com/lighthouse/instance/detail?rid=4&id=lhins-o90a1tc4)

htpp://110.42.183.220/webdemo/index.html



# 0. Cloud Virtual Machine, CVM



# 1. [config server:](https://cloud.tencent.com/document/product/213/54831)

### Before Building... 
###### [[../../../../../../../../Assets/🗃 Archive/🗂️ Archive/Protocols#SSH https en wikipedia org wiki Secure_Shell|SSH]] & file transmiting

[ssh installation & login](https://blog.csdn.net/li528405176/article/details/82810342)
- OpenSSH for instance
- 2 ways login:

	1. usrname + psword
	2. key pair (pb key & pr key)

[manage ssh key pair](https://cloud.tencent.com/document/product/213/16691#bindingSSH)
+ [add multiple ssh key pair to a host](https://support.huaweicloud.com/codehub_faq/codehub_faq_0002.html)


[upload files to web server](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Upload_files_to_a_web_server)
+ [linux file transmit](https://blog.csdn.net/qw_xingzhe/article/details/80167888)

###### [[../../../../../../CASE (Computer-Aided Software Engineering) Tools/Upper CASE Tools/🐙 VCM (Version Control Management)/Git/Git]]
using git sync files from server to host.

add remote git repo... 



### Start Building...

######  Environment:

in my case i chose [LNMP on CentOS 8](https://cloud.tencent.com/document/product/213/49304)
other Dev-env includes: 

###### steps:

1.  [[../../../../../../../CyberSecurity/☠️ Kill Chain & Security Tool Box/🐉 Kali Linux/Troubleshooting|Linux]]: 

[to lookup process on linux](https://cloud.tencent.com/developer/article/1711858)
```shell
ps aux
ps -elf
top
pstree -aup
```

[yum install & yum localinstall](https://www.cnblogs.com/zhangshuaihui/p/12336509.html)
yum & dnf

[zip & unzip](http://note.drx.tw/2008/04/command.html) 
other comands to zip & unzip : https://blog.csdn.net/zhenwenxian/article/details/4400404

```shell
.tgz
.tar.gz
.zip
.gz
.tar
```

[using FTP transmit fiiles  on linux & macos](https://cloud.tencent.com/document/product/1207/53216)
[[../../../../../../../../Assets/🗃 Archive/🗂️ Archive/Protocols#FTP|More FTP...]]

[lookup user group & user 查看用户组](https://blog.csdn.net/rainbow702/article/details/50985672)
[Linux 用户管理和ssh 远程配置](https://www.xiaog.info/blog/post/user_manager_and_ssh_config)
[Linux 用户和用户组管理](https://www.runoob.com/linux/linux-user-manage.html)

2. Nginx:

```shell
/etc/nginx/nginx.conf/default.conf
```

```php
location ~ \.php$ {
include /path/to/fastcgi_params;
fastcgi_pass  127.0.0.1:9000; // here should coordinate with php config.
fastcgi_index index.php;
fastcgi_param SCRIPT_FILENAME $document_root/$fastcgi_script_name;
}
```

[nginx showing blank PHP pages](https://stackoverflow.com/questions/15423500/nginx-showing-blank-php-pages)
	
[booting Nginx error occurs](https://blog.csdn.net/see__you__again/article/details/116123488): this is because some ports Nginx listening is occupied by other processes. (in my case apache server process.) 
=> [Solusion](https://stackoverflow.com/questions/35868976/nginx-service-failed-because-the-control-process-exited): #recent

```shell
sudo fuser -k 80/tcp

sudo fuser -k 443/tcp
```


2. MySQL:

MySQL or MariaDB??


4. php

```shell
/etc/php-fpm.d/www.conf  #original path in the tutorial
/etc/opt/remi/php72/php-fpm.d/www.conf # my remi php 
```

[epel & remi third-party yum image](https://blog.csdn.net/lituxiu/article/details/90057277)
- yum-config-manager

[`.sock` file on php --> TCP/IP or Socket ?](https://www.codenong.com/35367676/)

[CentOS php-fpm 启动失败](https://learnku.com/articles/10763/failure-of-centos-7x-php-fpm-startup-personal-reasons) (default boot config confliction)



# 2. deploy site:
### framework of blog
> [wordpres vs hexo](https://www.zhihu.com/question/53068081)
> WP is richer in content and support while hexo is simpler and easy-to-go. 

##### [WordPress: ](https://wordpress.com/support/start/)
1. [deploy wordpress on linux](https://cloud.tencent.com/document/product/213/8044)
2. register a domain name:
	- purchase a domain name
	- register domain name on state office
		- wait for the check
	- DNS Resolution

##### [hexo](https://hexo.io/docs/)

