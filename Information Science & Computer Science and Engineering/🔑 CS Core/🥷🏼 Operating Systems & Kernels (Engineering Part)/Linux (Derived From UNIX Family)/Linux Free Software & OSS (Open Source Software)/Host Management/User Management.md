# User Management Basics

[TOC]



## Res


## User Data Query
```shell
# lookup users&groups
cat /etc/passwd
cat /etc/group

cat /etc/passwd|grep -v nologin|grep -v halt|grep -v shutdown|awk -F":" '{ print $1"|"$3"|"$4 }'|more

```




## User Data Update
### `su` | `login` | `sudo`
The _su_ (short for _substitute user_) [command](http://www.linfo.org/command.html) makes it possible to change a [login](http://www.linfo.org/login_def.html) session's _owner_ (i.e., the user who originally created that session by logging on to the system) without the owner having to first log out of that session. 

Although su can be used to change the ownership of a session to any user, it is most commonly employed to change the ownership from an ordinary user to the [_root_](http://www.linfo.org/root.html) (i.e., administrative) user, thereby providing access to all parts of and all commands on the computer or system. For this reason, it is often referred to (although somewhat inaccurately) as the _superuser_ command. It is also sometimes called the _switch user_ command.


[The su Command]: http://www.linfo.org/su.html


### `chpasswd` | `chfn` | `passwd` | `login.def`



### `userdel` | `usermod` | `chmod`
``` shell
# delete user
userdel user_name

# force quit user
# w/ uptime/ finger/ ps/ top(htop gtop)
pkill -kill -t TTY

# change user group
usermod 
```



[Linux下查看用户列表和删除用户]: https://blog.csdn.net/qq_36850813/article/details/83899789
[Linux修改用户所在组方法]: https://blog.csdn.net/czl8897098/article/details/51636407 
[权限详解]: https://blog.csdn.net/u013197629/article/details/73608613
[linux下添加用户并赋予root权限]: https://blog.csdn.net/stormbjm/article/details/9086163
[Linux chmod command](https://www.computerhope.com/unix/uchmod.htm)



## Ref
[Linux 用户和用户组管理]: https://www.runoob.com/linux/linux-user-manage.html
