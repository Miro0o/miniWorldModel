# SMTP

[TOC]



## Res
### Related Topics



## Intro
![](../../../../../../../Assets/Pics/Screenshot%202023-04-01%20at%205.52.09%20PM.png)


```text
SMTP协议中一共定义了18条命令，但是发送一封电子邮件的过程通常只需要6条命令，我针对这6条简单介绍：
命令：ehlo<SP><domain><CRLF>
    ehlo命令是SMTP邮件发送程序与SMTP邮件接收程序建立连接后必须发送的第一条SMTP命令，参数<domain>表示SMTP邮件发送者的主机名，
    ehlo命令用于替代传统SMTP协议中的helo（对于部分邮箱还只能使用helo）命令
命令：auth<SP><para><CRLF>
    如果SMTP邮件接收程序需要SMTP邮件发送程序进行认证时，它会向SMTP邮件发送程序提示它所采用的认证方式，SMTP邮件发送程序接着
    应该使用这个命令回应SMTP邮件接收程序，参数<para>表示回应的认证方式，通常是SMTP邮件接收程序先前提示的认证方式
命令：mail<SP>from:<reverse-path><CRLF>
    此命令用于指定邮件发送者的邮箱地址，参数<reverse-path>表示发件人的邮箱地址
命令：rcpt<SP>to:<forword-path><CRLF>
    此命令用于指定邮件接收者的邮箱地址，参数<forword-path>表示收件人的邮箱地址，如果邮件要发送给多个接收者，
    那么应该使用多条rcpt<SP>to命令来分别指定每一个接收者的邮箱地址
命令：data<CRLF>
    此命令用于表示SMTP邮件发送程序准备开始传送邮件内容，在这个命令后面发送的所有数据都将被当做邮件内容，
    直到遇到"<CRLF>.<CRLF>"标识符，则表示邮件内容结束
命令：quit<CRLF>
    此命令表示要结束邮件发送过程，SMTP邮件接收程序接收到此命令后，将关闭与SMTP邮件服务器的连接

注：<SP>代表空格  <CRLF>代表回车换行
```


## Ref

