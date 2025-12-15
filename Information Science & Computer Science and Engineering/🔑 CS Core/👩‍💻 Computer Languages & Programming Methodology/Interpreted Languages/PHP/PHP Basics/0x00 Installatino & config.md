# Installation & Configuration 



👉 Before dive into PHP, check PHP official manual 📑 [General Installation Considerations](https://www.php.net/manual/en/install.general.php#install.general)

1. For setting up server using PHP, it can be loaded as SAPI or CGI/FCGI
2. For desktop GUI application, use PHP_GTK extension. 



## brew install PHP

> [PHP已经从macOS 中移除](https://www.oschina.net/news/146493/php-has-been-removed-in-macos-monterey?utm_source=feedburner&utm_medium=email&utm_campaign=Feed%3A+oschina%2FxBNv+%28OSCHINA+社区最新新闻%29)
> 
> i failed to correctly set up the server on my Mac to support PHP though. : (



i use [homebrew](../../../Software/CLI/homebrew.md) to install `php@8.0`. 

First, search php in brew mirro site. 
``` shell
brew search php
```
find the latest available php `php@8.0`

> 2022.5.23 fixed 
>
> Here i made a mistake. `php@8.0` is NOT the latest version in brew repo. As always, brew's repo names the latest formulea WITHOUT its version sufix. 
>
> For instance, here `php` should be the latest version supported instead of `php@8.0`. As one can see all history versions supported here are surfixed with its verion number. So the `php@8.0` here i downloaded is actually a historic veresion of php. So sad i have to unlink this old version of php now since i want to keep everything up-to-date. Concerning how to switch versions of php check the post after. 

Then, install.
```shell
brew install php@8.0
```

After a couple of network-failed resumes, it completed as below:  
```shell
To enable PHP in Apache add the following to httpd.conf and restart Apache:
    LoadModule php_module /usr/local/opt/php@8.0/lib/httpd/modules/libphp.so

    <FilesMatch \.php$>
        SetHandler application/x-httpd-php
    </FilesMatch>

Finally, check DirectoryIndex includes index.php
    DirectoryIndex index.php index.html

The php.ini and php-fpm.ini file can be found in:
    /usr/local/etc/php/8.0/

php@8.0 is keg-only, which means it was not symlinked into /usr/local,
because this is an alternate version of another formula.

If you need to have php@8.0 first in your PATH, run:
  echo 'export PATH="/usr/local/opt/php@8.0/bin:$PATH"' >> ~/.zshrc
  echo 'export PATH="/usr/local/opt/php@8.0/sbin:$PATH"' >> ~/.zshrc

For compilers to find php@8.0 you may need to set:
  export LDFLAGS="-L/usr/local/opt/php@8.0/lib"
  export CPPFLAGS="-I/usr/local/opt/php@8.0/include"


To restart php@8.0 after an upgrade:
  brew services restart php@8.0
Or, if you don't want/need a background service you can just run:
  /usr/local/opt/php@8.0/sbin/php-fpm --nodaemonize
```



## Switch from between PHP

Since i mistakenly brewed an old version of php then, now i need to brew the latest one and switch my env from the old one to this new one.

First, since `LDFLAGS` and `CPPFLAGS` are exported in previous php@8.0 ocnfig, here we need unset LDFLAGS & CPPFLAGS from the env para: (this step is critical ⭐️)

```shell
unset LDFLAGS
unset CPPFLAGS
```

After `unset` operation, it is noticed that the usr's global `$PATH`  chaned accordingly. The previous path linked to `php@8.0` has been removed. 

Then, brew the latest php: 

```shell
brew install php
```

Now since both versions are downloaded by brew, i can switch them using brew: 

```shell
brew unlink php@8.0
brew link php

# do otherwise to switch from php to php@8.0
```

brew can also be used to manage all services installed :

```shell
brew services list 
brew services start [service-name]
```

A successfully brewed page adhered as follow: (can be seen from `brew info php` at any time )
```shell
==> Caveats
To enable PHP in Apache add the following to httpd.conf and restart Apache:
    LoadModule php_module /usr/local/opt/php/lib/httpd/modules/libphp.so

    <FilesMatch \.php$>
        SetHandler application/x-httpd-php
    </FilesMatch>

Finally, check DirectoryIndex includes index.php
    DirectoryIndex index.php index.html

The php.ini and php-fpm.ini file can be found in:
    /usr/local/etc/php/8.1/

To restart php after an upgrade:
  brew services restart php
Or, if you don't want/need a background service you can just run:
  /usr/local/opt/php/sbin/php-fpm --nodaemonize
```



###### Refs:

[macos上使用brew切换PHP版本](https://segmentfault.com/a/1190000022004395)

[MAC使用brew配置nginx、php、mysql、php-fpm、redis](https://juejin.cn/post/6844903802361888782#heading-2)

[How can I easily switch between PHP versions on Mac OSX? -- stackoverflow](https://stackoverflow.com/questions/34909101/how-can-i-easily-switch-between-php-versions-on-mac-osx)



##  [FastCGI Process Manager (FPM)](https://www.php.net/manual/en/install.fpm.php#install.fpm)



## [PECL Installations](https://www.php.net/manual/en/install.pecl.intro.php#install.pecl.intro)



## [Runtime Configuration](https://www.php.net/manual/en/configuration.php#configuration)

