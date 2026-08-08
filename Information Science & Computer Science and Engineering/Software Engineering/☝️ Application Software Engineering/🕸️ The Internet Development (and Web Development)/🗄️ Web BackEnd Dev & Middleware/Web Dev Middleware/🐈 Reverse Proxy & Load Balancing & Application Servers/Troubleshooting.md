# Troubleshooting

[TOC]



## 👉 Nginx Failed to Start
#nginx 

Most of the case this is due to port block or other web server is running. 
TO eliminate fault reasons: 
1. check out port 80, 8080, 8888, 443, etc.
2. check out other web server is runnin or not (e.g. apache2)
3. check out `systemctl status nginx`
4. check out `nginx -t`
5. `/var/log/nginx/error.log`
6. `/var/log/syslog`
7. 

[nginx.service failed because the control process exited]: https://stackoverflow.com/questions/35868976/nginx-service-failed-because-the-control-process-exited



## 👉 Change default `httpd` on Mac to homebrewed `httpd`
#httpd #apache_http_server #macos #php

Steps:

1. stop default apple httpd (if running)

2. disable auto-launch when booting 

   1. ` sudo launchctl unload -w /System/Library/LaunchDaemons/org.apache.httpd.plist `

> ERROR:
>
> here i encountered this error: [launchctl unload say: Could not find specified service](https://superuser.com/questions/1364790/launchctl-unload-say-could-not-find-specified-service)

3. install httpd on homebrew

   1. `brew install httpd`

4. start homebrew httpd service

   1. `brew services start httpd`

> NOTICE:
>
>  old apple conf : `/etc/apache2/httpd.conf`
>
> whereas homebrew's is in `/usr/local/etc/httpd/httpd.conf`


[Changing default Apache version on Mac OS]: https://stackoverflow.com/questions/68111189/changing-default-apache-version-on-mac-os
[Mac重新安装PHP和Apache]: https://www.yulei1989.com/mac重新安装php和apache/

