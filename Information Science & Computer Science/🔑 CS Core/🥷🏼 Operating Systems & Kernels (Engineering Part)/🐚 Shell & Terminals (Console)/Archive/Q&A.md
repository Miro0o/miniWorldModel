# Shell commands Q&A

#### [查看当前使用的shell](https://www.cnblogs.com/softwaretesting/archive/2012/02/14/2350688.html)
`ps |  grep $$  |  awk '{print $4}'`

不带参数的ps命令显示和当前终端有关的进程状况 。
`$$` 变量存储当前进程的PID。 
ps第四列是进程所使用的命令，如果是Shell，那么显示shell名，比如sh/ksh等  
awk '{print $4}'就是只显示第四列的值  

> PS：用**echo $SHELL**可以查看系统默认的shell


######  查看当前发行版可以使用的shell  
```shell
[jack@localhost ~]$ cat /etc/shells   
/bin/sh  
/bin/bash  
/sbin/nologin
```
###### 查看当前使用的shell  
一、最常用的查看shell的命令，但不能实时反映当前shell  
```shell
[jack@localhost ~]$ echo $SHELL  
/bin/bash
```

二、下面这个用法并不是所有shell都支持  
``` shell
[jack@localhost ~]$ echo $0  
bash
```

三、环境变量中shell的匹配查找  
``` shell
[jack@localhost ~]$ env | grep SHELL  
SHELL=/bin/bash
```

四、口令文件中shell的匹配查找  
``` shell
[jack@localhost ~]$ cat /etc/passwd | grep jack  
jack:x:500:500:mengfei:/home/jack:/bin/bash
```

五、查看当前进程  
```shell 
[jack@localhost ~]$ ps  
PID TTY          TIME CMD  
3052 pts/0    00:00:00 bash  
3254 pts/0    00:00:00 ps
```

六、先查看当前shell的pid，再定位到此shell进程  
``` shell
[jack@localhost ~]$ echo $$  
3052  
[jack@localhost ~]$ ps -ef | grep 3052  
jack        3052 3047 0 11:33 pts/0    00:00:00 bash  
jack        3420 3052 0 11:57 pts/0    00:00:00 ps -ef  
jack        3421 3052 0 11:57 pts/0    00:00:00 grep 3052

```

附：一条命令即可实现：  
```shell
[jack@localhost ~]$ ps -ef | grep `echo $$` | grep -v grep | grep -v ps  
jack        3052 3047 0 11:33 pts/0    00:00:00 bash
```

七、输入一条不存的命令，查看出错的shell提示  
```shell
[jack@localhost ~]$ tom  
bash: tom: command not found
```


#### Scratch 
- echo -n  增加`-n`选项，就不会换行了。
- read -n `-n`选项表示读取固定长度的字符串 
 e.g.  read -n 1 sex


+ cd
+ touch
+ mkdir
+ cp  -r
+ mv -r
+ rm -r
+ cat 
	+ cat >
	+ cat >>
+ echo
	+ echo >
	+ echo >>
	+ echo $(())