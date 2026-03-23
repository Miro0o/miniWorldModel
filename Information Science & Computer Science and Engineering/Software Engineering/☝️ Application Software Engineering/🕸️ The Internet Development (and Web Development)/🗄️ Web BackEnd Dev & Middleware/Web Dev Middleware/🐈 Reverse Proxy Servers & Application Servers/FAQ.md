# FAQ

[TOC]



## 👉 Nginx Basics
#nginx 

### ⚙️ Installation
Since on my newly-bought Baidu Cloud LS with CentOS8 the `dnf` package manager cannot install the LST version of Nginx, i had to manually install it. below is the how.

The KEY is to get Ningx installed under appropriate directory as neat and elegant as other things installed on a package manger. 

The right directory for binary file is `/usr/local/src` and then unzipped file on `/usr/local/nginx` then the executable under `/usr/local/bin` 

Finally symlink to `/usr/local/bin`

```shell
ln -s /usr/local/nodejs/bin/npm /usr/local/bin/ 
ln -s /usr/local/nodejs/bin/node /usr/local/bin/
```

[符号链接]: https://www.geek-share.com/detail/2783343863.html


### 📦 Configs
use `nginx -t`  to check out  `nginx.config` file.

[Full Example Configuration]: https://www.nginx.com/resources/wiki/start/topics/examples/full/

>  By default, the configuration file is named `nginx.conf` and placed in the directory `/usr/local/nginx/conf`, `/etc/nginx`, or `/usr/local/etc/nginx`.

in my case : `/usr/local/etc/nginx`



[nginx入门系列之安装与卸载]: https://www.cnblogs.com/nuccch/p/11874221.html
[nginx搭建静态资源服务器]: https://zhuanlan.zhihu.com/p/55698543
[Nginx（二）------nginx.conf 配置文件]: https://www.cnblogs.com/ysocean/p/9384880.html