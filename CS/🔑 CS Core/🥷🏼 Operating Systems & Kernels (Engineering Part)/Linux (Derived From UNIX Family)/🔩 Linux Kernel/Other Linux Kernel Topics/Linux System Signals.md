# Linux System Signals

[TOC]



## Res
🏠 
🚧 


### Related Topics
↗ [System Signals & Exception Handling](../../../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource)/📌%20Processes%20Description%20&%20Control/System%20Calls/System%20Signals%20&%20Exception%20Handling.md)
↗ [Signal](../../../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource)/IPC%20(Inter%20Process%20Communication)/Signal/Signal.md)



## Intro
A feature of LINUX programming is the idea of sending and receiving signals. A signal is a kind of (usually software) interrupt, used to announce asynchronous events to a process.

The number of possible signals is limited. The first 31 signals are standardized in LINUX; all have names starting with SIG. Some are from POSIX.

\# Signal Name Default Action Comment POSIX
 1 SIGHUP     Terminate   Hang up controlling terminal or      Yes
                          process 
 2 SIGINT     Terminate   Interrupt from keyboard, Control-C   Yes
 3 SIGQUIT    Dump        Quit from keyboard, Control-\        Yes
 4 SIGILL     Dump        Illegal instruction                  Yes
 5 SIGTRAP    Dump        Breakpoint for debugging             No
 6 SIGABRT    Dump        Abnormal termination                 Yes
 6 SIGIOT     Dump        Equivalent to SIGABRT                No
 7 SIGBUS     Dump        Bus error                            No
 8 SIGFPE     Dump        Floating-point exception             Yes
 9 SIGKILL    Terminate   Forced-process termination           Yes
10 SIGUSR1    Terminate   Available to processes               Yes
11 SIGSEGV    Dump        Invalid memory reference             Yes
12 SIGUSR2    Terminate   Available to processes               Yes
13 SIGPIPE    Terminate   Write to pipe with no readers        Yes
14 SIGALRM    Terminate   Real-timer clock                     Yes
15 SIGTERM    Terminate   Process termination                  Yes
16 SIGSTKFLT  Terminate   Coprocessor stack error              No
17 SIGCHLD    Ignore      Child process stopped or terminated  Yes
                          or got a signal if traced 
18 SIGCONT    Continue    Resume execution, if stopped         Yes
19 SIGSTOP    Stop        Stop process execution, Ctrl-Z       Yes
20 SIGTSTP    Stop        Stop process issued from tty         Yes
21 SIGTTIN    Stop        Background process requires input    Yes
22 SIGTTOU    Stop        Background process requires output   Yes
23 SIGURG     Ignore      Urgent condition on socket           No
24 SIGXCPU    Dump        CPU time limit exceeded              No
25 SIGXFSZ    Dump        File size limit exceeded             No
26 SIGVTALRM  Terminate   Virtual timer clock                  No
27 SIGPROF    Terminate   Profile timer clock                  No
28 SIGWINCH   Ignore      Window resizing                      No
29 SIGIO      Terminate   I/O now possible                     No
29 SIGPOLL    Terminate   Equivalent to SIGIO                  No
30 SIGPWR     Terminate   Power supply failure                 No
31 SIGSYS     Dump        Bad system call                      No
31 SIGUNUSED  Dump        Equivalent to SIGSYS                 No

Notice SIGUSR1 and SIGUSR2. These are available for customized use. For each the default action is Terminate, but the programmer can change that. A programmer can use these to provide an absolutely minimal amount of communication, i.e., "something happened", between processes.


## Ref
[👍 LINUX Signals]: https://faculty.cs.niu.edu/~hutchins/csci480/signals.htm
