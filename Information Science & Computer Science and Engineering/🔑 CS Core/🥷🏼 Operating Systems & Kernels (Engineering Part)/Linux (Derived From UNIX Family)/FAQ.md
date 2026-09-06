# FAQ

[TOC]



## 👉 Linux/Unix C Programming FAQ Collection
> 🔗 http://dbp-consulting.com/tutorials/compunixprogfaq.html

1) How does fork work?
2) How can I find out the value of/set an environment variable from a program?
3) I have to monitor more than one (fd/connection/stream) at a time. How do I manage all of them?
4) How can I tell when the other end of a connection shuts down? (question 1 of the sockets FAQ)
5) How can I get a more precise timer? (question 4.6 of comp.unix.questions FAQ)
6) How can a parent and child process communicate.
7) My program generates a lot of zombie processes. How do I get rid of them? (question 3.13 of the comp.unix.questions FAQ)
8) How do I find out the address of a remote site connected to me? (question IV.9 of the sockets FAQ)
9) How do I find out the address of my socket?
10) How do I get my program to act like a daemon?
11) What books can I read to learn about Unix programming.
12) Where can I get the source from these books?
13) How can I look at process in the system like ps does?
14) How can I debug the children after a fork?
15) How can I tell how much memory my system has?
16) Given a pid, how can I tell if it's a running program?
17) After running my program once I can't run it again until some time out happens...The os complains about the port already being in use. (question II.7 in the sockets FAQ)
18) system()/pclose()/waitpid() doesn't seem to return the exit value of my process...or the exit value is shifted left 16 bits...what's the deal?
19) How can I make my program not echo input like login does when asking for your password?
20) How can I check and see if a key was pressed?  I'm looking for something like the dos kbhit() command.
21) How can I move the cursor around the screen, to do full screen editing without using curses?



## 👉 Source release & Binary Release?
#FreeSoftware #src #linux 

see [this](https://stackoverflow.com/a/5280925/16542494) answer on stack overflow. A source release is the source code of the packeg, which means user have to compile and construct the software themselves. While Binary release is the to-go software. 



## 👉 diff between hard link & soft link (symlink, symbolic link)
#symlink #filesystem #linux #hard_link #soft_link #inode #VFS

![Pictorial representation](../../../../Assets/Pics/f7Ijz.jpg)
<small>This illustration is not acurate though</small>

### Unix File System
Unix files consist of two parts: the data part and the filename part.
```shell
# the data part:

                               .---------------> ! data ! ! data ! etc
                              /                  +------+ +------+
        ! permbits, etc ! data addresses !
        +------------inode---------------+
        
        
# the filename part: 

                        .--------------> ! permbits, etc ! addresses !
                        /                 +---------inode-------------+
        ! filename ! inode # !
        +--------------------+
```

The hark link is two filename referring to the same inode number:
```shell
        ! filename ! inode # !
        +--------------------+
                        \
                         >--------------> ! permbits, etc ! addresses !
                        /                 +---------inode-------------+
        ! othername ! inode # !
        +---------------------+
```

While the soft link (or symbolic link, symlink ) is the redirection of filename link: 
```shell
       ! filename ! inode # !
        +--------------------+
                        \
                         .-------> ! permbits, etc ! addresses !
                                   +---------inode-------------+
                                                      /
                                                     /
                                                    /
    .----------------------------------------------'
   ( 
    '-->  !"/path/to/some/other/file"! 
          +---------data-------------+
                  /                      }
    .~ ~ ~ ~ ~ ~ ~                       }-- (redirected at open() time)
   (                                     }
    '~~> ! filename ! inode # !
         +--------------------+
                         \
                          '------------> ! permbits, etc ! addresses !
                                         +---------inode-------------+
                                                            /
                                                           /
     .----------------------------------------------------'
    (
     '->  ! data !  ! data ! etc.
          +------+  +------+ 

```

Now, the filename part of the file is stored in a special file of its own along with the filename parts of other files; this special file is called a directory. The directory, as a file, is just an array of filename parts of other files.

When a directory is built, it is initially populated with the filename parts of two special files: the '.' and '..' files. The filename part for the '.' file is populated with the inode# of the directory file in which the entry has been made; '.' is a hardlink to the file that implements the current directory.

The filename part for the '..' file is populated with the inode# of the directory file that contains the filename part of the current directory file. '..' is a hardlink to the file that implements the immediate parent of the current directory.

The 'ln' command knows how to build hardlinks and softlinks; the 'mkdir' command knows how to build directories (the OS takes care of the above hardlinks).

There are restrictions on what can be hardlinked (both links must reside on the same filesystem, the source file must exist, etc.) that are not applicable to softlinks (source and target can be on seperate file systems, source does not have to exist, etc.). OTOH, softlinks have other restrictions not shared by hardlinks (additional I/O necessary to complete file access, additional storage taken up by softlink file's data, etc.)

In other words, there's tradeoffs with each.


### A further note with respect to hardlink files
When deleting files, the data part isn't disposed of until all the filename parts have been deleted. There's a count in the inode that indicates how many filenames point to this file, and that count is decremented by 1 each time one of those filenames is deleted. When the count makes it to zero, the inode and its associated data are deleted.

By the way, the count also reflects how many times the file has been opened without being closed (in other words, how many references to the file are still active). This has some ramifications which aren't obvious at first: you can delete a file so that no "filename" part points to the inode, without releasing the space for the data part of the file, because the file is still open.

Have you ever found yourself in this position: you notice that `/var/log/messages` (or some other syslog-owned file) has grown too big, and you
```shell
rm /var/log/messages
touch /var/log/messages
```

to reclaim the space, but the used space doesn't reappear? This is because, although you've deleted the filename part, there's a process that's got the data part open still (syslogd), and the OS won't release the space for the data until the process closes it. In order to complete your space reclamation, you have to
```shell
kill -SIGHUP `cat /var/run/syslogd.pid`
```

to get syslogd to close and reopen the file.

You can use this to your advantage in programs: have you ever wondered how you could hide a temporary file? Well, you could do the following:
```C++
{
	FILE *fp;
	fp = fopen("some.hidden.file","w");
	unlink("some.hidden.file"); /* deletes the filename part */

	/* some.hidden.file no longer has a filename and is truely hidden */
    fprintf(fp,"This data won't be found\n"); /* access the data part */
    /*etc*/
    fclose(fp); /* finally release the data part */
}
```


[ The difference between hard and soft links]:https://linuxgazette.net/105/pitcher.html
[Questions on Stackoverflow]:https://stackoverflow.com/questions/185899/what-is-the-difference-between-a-symbolic-link-and-a-hard-link
[askubuntu]:https://askubuntu.com/questions/108771/what-is-the-difference-between-a-hard-link-and-a-symbolic-link



## 👉 What is SELinux?
#SELinux

Security-Enhanced Linux (SELinux) is a [security](https://www.redhat.com/en/topics/security) architecture for [Linux® systems](https://www.redhat.com/en/topics/linux/what-is-linux) that allows administrators to have more control over who can access the system. It was originally developed by the United States National Security Agency (NSA) as a series of patches to the [Linux kernel](https://www.redhat.com/en/topics/linux/what-is-the-linux-kernel) using Linux Security Modules (LSM). 

SELinux was released to the [open source](https://www.redhat.com/en/topics/open-source/what-is-open-source) community in 2000, and was integrated into the upstream Linux kernel in 2003.

[What is SELinux]: https://www.redhat.com/en/topics/linux/what-is-selinux



## 👉 Linux: where are environment variables (of a specific process) stored?
#linux #environment_variable #process 

The environment variables of a process exist at runtime, and are not stored in some file or so. They are stored in the process's own memory (that's where they are found to pass on to children). But there is a virtual file in 
```shell
/proc/_pid_/environ
```

This file shows all the environment variables that were passed when calling the process (unless the process overwrote that part of its memory — most programs don't). The kernel makes them visible through that virtual file. One can list them. For example to view the variables of process 3940, one can do
```shell
cat /proc/3940/environ | tr '\0' '\n'
```

Each variable is delimited by a binary zero from the next one.`tr` replaces the zero into a newline.

[Linux: where are environment variables stored?]: https://stackoverflow.com/questions/532155/linux-where-are-environment-variables-stored

The **Global** environment variables of your system are stored in `/etc/environment`.  
Any changes here will get reflected throughout the system and will affect all users of the system. Also, you need a Reboot, for any changes made here to take effect.

**User** level Environment variables are mostly stored in `.bashrc` and `.profile` files in your Home folder. Changes here only affect that particular user. Just close and open the terminal for configuration changes to take place.

_Edit_ : If you don't want to Reboot or restart your terminal, you can make use of the source command.  
Eg. `source /etc/environment` or `source .bashrc`

[Environment variables - where are they stored by linux, how do I change them and is it safe to do so?]: https://askubuntu.com/questions/164586/environment-variables-where-are-they-stored-by-linux-how-do-i-change-them-and



## 👉 Linux Library Functions Call 🆚 System Call 🆚 Procedure/Function Call
#linux #linux_kernel #system_call #library_function_call #os #procedure_call

> Linux & Windows have different function call design (?)
> micro kernel & monolithic kernel also have different function call design.

Linux下对文件操作有两种方式：系统调用（system call）和库函数调用（Library functions）。可以参考《Linux程序设计》（英文原版为《Beginning Linux Programming》，作者是Neil Matthew和Richard Stones）第三章: Working with files。系统调用实际上就是指最底层的一个调用，在linux程序设计里面就是底层调用的意思。面向的是硬件。而库函数调用则面向的是应用开发的，相当于应用程序的api,采用这样的方式有很多种原因，==第一：双缓冲技术的实现。第二，可移植性。第三，底层调用本身的一些性能方面的缺陷。第四：让api也可以有了级别和专门的工作面向。==


**1、系统调用**
系统调用提供的函数如 `open`, `close`, `read`, `write`, `ioctl` 等，需包含头文件`unistd.h`。以`write`为例：其函数原型为 `size_t write(int fd, const void *buf, size_t nbytes)`，其操作对象为文件描述符或文件句柄`fd`(file descriptor)，要想写一个文件，必须先以可写权限用open系统调用打开一个文件，获得所打开文件的`fd`，例如 `fd=open(\"/dev/video\", O_RDWR)`。`fd`是一个整型值，每新打开一个文件，所获得的`fd`为当前最大`fd`加1。Linux系统默认分配了3个文件描述符值：
- 0: standard input
- 1: standard output
- 2: standard error

**系统调用的特点：**
系统调用通常用于底层文件访问（low-level file access），例如在驱动程序中对设备文件的直接访问。
系统调用是操作系统相关的，因此一般没有跨操作系统的可移植性。
系统调用发生在内核空间，因此如果在用户空间的一般应用程序中使用系统调用来进行文件操作，会有用户空间到内核空间切换的开销。事实上，即使在用户空间使用库函数来对文件进行操作，因为文件总是存在于存储介质上，因此不管是读写操作，都是对硬件（存储器）的操作，都必然会引起系统调用。也就是说，库函数对文件的操作实际上是通过系统调用来实现的。例如C库函数`fwrite()` 就是通过 `write()` 系统调用来实现的。

这样的话，使用库函数也有系统调用的开销，为什么不直接使用系统调用呢？这是因为，读写文件通常是大量的数据（这种大量是相对于底层驱动的系统调用所实现的数据操作单位而言），**这时，使用库函数就可以大大减少系统调用的次数。这一结果又缘于缓冲区技术。** 在用户空间和内核空间，对文件操作都使用了缓冲区，例如用fwrite写文件，都是先将内容写到用户空间缓冲区，当用户空间缓冲区满或者写操作结束时，才将用户缓冲区的内容写到内核缓冲区，同样的道理，当内核缓冲区满或写结束时才将内核缓冲区内容写到文件对应的硬件媒介。


**2、库函数调用**
标准C库函数提供的文件操作函数如 `fopen`, `fread`, `fwrite`, `fclose`, `fflush`, `fseek` 等，需包含头文件`stdio.h`。以`fwrite`为例，其函数原型为`size_t fwrite(const void *buffer, size_t size, size_t item_num, FILE *pf)`，其操作对象为文件指针`FILE *pf`，要想写一个文件，必须先以可写权限用`fopen`函数打开一个文件，获得所打开文件的`FILE`结构指针`pf`，例如`pf=fopen(\"~/proj/filename\", \"w\")`。实际上，由于库函数对文件的操作最终是通过系统调用实现的，因此，每打开一个文件所获得的FILE结构指针都有一个内核空间的文件描述符`fd`与之对应。同样有相应的预定义的`FILE`指针：
1. stdin: standard input
2. stdout: standard output
3. stderr: standard error

**库函数调用的特点**
库函数调用通常用于应用程序中对一般文件的访问。
库函数调用是系统无关的，因此可移植性好。
由于库函数调用是基于C库的，因此也就不可能用于内核空间的驱动程序中对设备的操作。


**3、库函数调用vs系统调用**

|   |   |
|---|---|
|函数库调用|系统调用|
|在所有的ANSI C编译器版本中，C库函数是相同的|各个操作系统的系统调用是不同的|
|它调用函数库中的一段程序（或函数）|它调用系统内核的服务|
|与用户程序相联系|是操作系统的一个入口点|
|在用户地址空间执行|在内核地址空间执行|
|它的运行时间属于“用户时间”|它的运行时间属于“系统”时间|
|属于过程调用，调用开销较小|需要在用户空间和内核上下文环境间切换，开销较大|
|在C函数库libc中有大约300个函数|在UNIX中大约有90个系统调用|
|典型的C函数库调用：system fprintf malloc|典型的系统调用：chdir fork write brk；|

[👍 linux系统调用和库函数调用的区别]: https://www.cnblogs.com/yanlingyin/archive/2012/04/23/2466141.html



## 👉 Linux Concurrent Maxima
#linux #concurrency #network 


[Linux单机最大并发到底是多少？ - 小绿豆的文章 - 知乎]: https://zhuanlan.zhihu.com/p/150223411
