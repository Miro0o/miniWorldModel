# lldb Basics

[TOC]



## Res

<iframe width="560" height="315" src="https://www.youtube.com/embed/2GV0K9Y2MKA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/rU78J2MlXOk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## Intro
#### Quick Notes
##### 1. basics
```shell

######## Compile program
clang++ -g demo.cpp
lldb a.out


######## load lldb to the executable:
# at start
lldb <src.out> arg1 argv[]

# set args in the lldb
(lldb) settings set -- target.run-args  "arg1"

# or in the lldb
(lldb) file <src.out>


######### Set breakpoints
(lldb) break set -f <src.cpp> -l #
(lldb) br s -f <src.cpp> -l #
(lldb) b <src.cpp> : #
(lldb) b <functionName>
(lldb) b <className>::<functionName>()
(lldb) b <namespace>::<functionName>(int, int)

######## List breakpoints
(lldb) br list
(lldb) b l 
(lldb) b

(lldb) br del #
(lldb) br del 


######## Navigating 
# Step over
(lldb) next
(lldb) n

# Step into
(lldb) step
(lldb) s

# Continue
(lldb) continue
(lldb) c


######## Inspecting Variables
# print variable 
(lldb) p varname

# look up variables of the frame
(lldb) frame variable
(lldb) fr v

# Frame select (to get back to the active frame)
(lldb) frame select
(lldb) fr s
(lldb) fr s #
(lldb) f #


######## Backtrace and Frames
# Backtrace 
(lldb) bt

# Switching Frames
(lldb) frame select 0
(lldb) f 2


######## Set watchpoint
# Global Variable
(lldb) watchpoint set variable [-w read | write | read_write] <variableName>
(lldb) w s v <variableName>

# Member Variable
(lldb) b main
(lldb) w s v <variableName>


######## Terminating
(lldb) kill

```

##### 2. diff file compilement
```shell
> clang -g <src.c> -o <dst>
	> dst.out
	> dst.dYSM
> clang <src.c> -o <dst>
	> dst (excutable)
```
<small>Output for `lldb dst`</small>

```shell
Process 31912 launched: '/Users/mir0/Desktop/labs/t1' (x86_64)
Process 31912 stopped
* thread #1, queue = 'com.apple.main-thread', stop reason = breakpoint 1.1
    frame #0: 0x00000001000030a0 t1`main
t1`main:
->  0x1000030a0 <+0>: pushq  %rbp
    0x1000030a1 <+1>: movq   %rsp, %rbp
    0x1000030a4 <+4>: subq   $0x10, %rsp
    0x1000030a8 <+8>: movq   0xf51(%rip), %rdi         ; (void *)0x00007ff847b955e0: std::__1::cout
Target 0: (t1) stopped.
```
<small>Output for `lldb dst.out`</small>


 > [a.out](https://www.cnblogs.com/zhangfeionline/p/5967671.html)

```shell
Process 32094 launched: '/Users/mir0/Desktop/labs/debuglab1' (x86_64)
Process 32094 stopped
* thread #1, queue = 'com.apple.main-thread', stop reason = breakpoint 1.1
    frame #0: 0x0000000100003df6 debuglab1`main(argc=2, argv=0x00007ff7bfeff7d8) at lab1_src.c:89:6
   86
   87  	int main (int argc, char *argv[])
   88  	{
-> 89  		int dummy = 1;
   90  		int start, stride;
   91  		int key1, key2, key3, key4;
   92  		char * msg1, * msg2;
Target 0: (debuglab1) stopped.
```





## Ref

