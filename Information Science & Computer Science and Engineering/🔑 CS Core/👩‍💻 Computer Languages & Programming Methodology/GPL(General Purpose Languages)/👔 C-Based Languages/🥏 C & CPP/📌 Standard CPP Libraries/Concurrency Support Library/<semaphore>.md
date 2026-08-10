# `<semaphore>`

[TOC]



## Res
### Related Topics



## Intro


## Ref
[iOS 或者 Mac OS X 使用 sem_init 总是返回 -1]: https://blog.csdn.net/h_o_w_e/article/details/14176803

> OS X不支持创建无名的信号量，只能使用sem_open创建有名的信号量。
> 
> "<semaphore.h> declares sem_init so that it compiles properly on OS X, but it returns -1 with errno set to ENOSYS (function not implemented)."
> 
> 创建：
> sem_t* psemaphore = sem_open("/mysem",O_CREAT, S_IRUSR | S_IWUSR, 10)
> 销毁：
> sem_close(psemaphore);  
> sem_unlink("/mysem");
