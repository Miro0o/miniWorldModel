# E-Mail

[TOC]



## Res
### Related Topics
↗ [Email Clients](../../../../Generic%20Software%20Tools%20&%20Projects/Email%20Clients/Email%20Clients.md)
↗ [Email Security](../../../../../CyberSecurity/Network%20(&%20Communication)%20Security/Network%20Security%20Mechanisms/🏇%20Network%20Security%20Protocol%20Stacks/📱%20Application%20Layer%20Security%20Protocols/📧%20Email%20Security/Email%20Security.md)


### Learning Resources
【深入浅出计算机网络 - 6.6 电子邮件】 https://www.bilibili.com/video/BV1iV4y1T7eG/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d


### Other Resources



## Intro
![](../../../../../../Assets/Pics/Screenshot%202023-04-01%20at%205.51.10%20PM.png)


### Common Ports in EMail
**IMAP**
**Port 143** - IMAP default port number;
**Port 993** - IMAP over TLS/SSL encryption.

**POP/POP3**
**port 110** - pop/pop3 default port number without encryption;
**port 995** - POP3-over-TLS/SSL;

**SMTP**
**port 25** - SMTP default port number without encryption;
**port 465** - SMTP-over-TLS/SSL;

```text
邮箱名称                        POP3服务器地址                           SMTP服务器地址
QQ邮箱              pop.qq.com（端口：110）                        smtp.qq.com（端口：25）
QQ企业邮箱           pop.exmail.qq.com （SSL启用 端口：995）       smtp.exmail.qq.com（SSL启用 端口：587/465）
163.com             pop.163.com（端口：110）                     smtp.163.com（端口：25）
sina.com            pop3.sina.com.cn（端口：110）                smtp.sina.com.cn（端口：25）
sina.cn             pop3.sina.com（端口：110）                   smtp.sina.com（端口：25）
sinaVIP             pop3.vip.sina.com （端口：110）              smtp.vip.sina.com （端口：25）
sohu.com            pop3.sohu.com（端口：110）                   smtp.sohu.com（端口：25）
126邮箱              pop.126.com（端口：110）                      smtp.126.com（端口：25）
139邮箱：            POP.139.com（端口：110）                       SMTP.139.com(端口：25)
yahoo.com           pop.mail.yahoo.com(110)                          smtp.mail.yahoo.com（465）
yahoo.com.cn        pop.mail.yahoo.com.cn（端口：995）           smtp.mail.yahoo.com.cn（端口：587
HotMail             pop3.live.com（端口：995）                   smtp.live.com（端口：587）
gmail(google.com)   pop.gmail.com（SSL启用端口：995）              smtp.gmail.com（SSL启用 端口：587）
263.net             pop3.263.net（端口：110）                    smtp.263.net（端口：25）
263.net.cn          pop.263.net.cn（端口：110）                  smtp.263.net.cn（端口：25）
x263.net            pop.x263.net（端口：110）                    smtp.x263.net（端口：25）
21cn.com            pop.21cn.com（端口：110）                    smtp.21cn.com（端口：25）
Foxmail             POP.foxmail.com（端口：110）                 SMTP.foxmail.com（端口：25）
china.com:          pop.china.com（端口：110）                   smtp.china.com（端口：25）
tom.com             pop.tom.com（端口：110）                     smtp.tom.com（端口：25）
etang.com           pop.etang.com                               smtp.etang.com
```


### 🔬 Using `telnet` to communicate with email server
> 🔗 https://www.cnblogs.com/antLaddie/p/15546365.html
#### Telnet over SMTP
```text
发送邮箱基本流程：
①：和网易邮箱的SMTP服务器建立连接(smtp.163.com为SMTP服务器地址，25为SMTP服务器端口)
    telnet smtp.163.com 25　　 若使用QQ邮箱登录则是 telnet smtp.qq.com 587
②：使用ehlo命令告知发送者的用户名
    ehlo tom
③：选择登录认证方式
    auth login
④：分别输入加密后的用户名和密码
    eHh4QDE2My5jb20=            注：对应邮箱 xxx@163.com
    YnF3ZWhod2VyMzI=            注：对应邮箱的授权密码 bqwehhwer32（开启的SMTP服务时的那个授权码）
⑤：指明发件人邮箱和收件人邮箱
     mail from:<xxx@163.com>
     rcpt to:<xxx@qq.com>
⑥：编写发送的邮箱内容（必须按照规范）
    data                        -->回车
    from:<xxx@163.com>          注：发件人
    to:<xxx@qq.com>             注：收件人
    subject:hello world         注：subject邮件头主题
                                注：空行
    Hello! My little baby.      注：邮件内容
    .                           注：点代表结束输入-->再回车结束
⑦：结束连接
    quit
```
#### Telnet over IMAP
> 🔗 https://support.moonpoint.com/network/email/telnet-imap.php
> 🔗 https://blog.andrewc.com/2013/01/connect-to-imap-server-with-telnet/

> When you connect to the server, you should see an "OK" reply; enter the command `A login _username_ _password_` where _username_ is the account name for the relevant account and _password_ is the account's password. That will verify you can log into the account. You can then enter `B select INBOX` which should return information about the inbox for the account followed by another "OK" response. You can issue the command `C logout` to logoff the IMAP server. You should see another "OK" response and be returned to the shell prompt. E.g.:
>
> > skip.
> 
> In the example above, I entered an incrementing alphabetical character, i.e., "A", "B", "C", before each command. You can enter a word of your choosing before each command. The server will include that word at the beginning of its response, e.g. "C OK Logout completed." If you don't include a word, or letter, preceding the IMAP command, you will see an error message stating "Unknown command" such as shown below:
> ```shell
> select inbox
> select BAD Error in IMAP command INBOX: Unknown command.
> ```
> The purpose of putting a unique word before each command is to allow the client to asociate each response with the corresponding command issued by the client. A client program might issue several commands without waiting for a response, so when it gets the reponses it can associate each one with the corresponding command it issued. E.g., I could also have used "a1", "a2", "a3", etc. as in the example below:
> 
> > skip.
> 

#TODO 
#### Telnet over POP/POP3
```text
接收邮箱基本流程操作：
①：和网易邮箱的POP3服务器建立连接(pop3.163.com为POP3服务器地址，110为POP3服务器端口)
    telnet pop.163.com 110
    若使用QQ邮箱登录则是 telnet pop.qq.com 110
        注：若pop3无法连接则使用pop连接
②：发送一条命令建立连接，此时需要写出要登录邮箱的用户名（非base64）
    user antladdie
④：告知服务器当前用户的密码，注意的是授权码（非base64）
    pass QWERTYUIOPPOIUYT
        163邮箱登录成功会返回+OK 2 message(s) [4500 byte(s)] 代表有两封邮件，总大小4500字节
```



## Email Protocols
### SMTP
↗ [SMTP](SMTP.md)

![](../../../../../../Assets/Pics/Screenshot%202023-04-01%20at%205.56.05%20PM.png)


### IMAP /POP /POP3
↗ [IMAP](IMAP.md)

↗ [POP & POP3](POP%20&%20POP3.md)

![](../../../../../../Assets/Pics/Screenshot%202023-04-01%20at%205.54.35%20PM.png)


### MIME
↗ [MIME (Multipurpose Internet Mail Extensions)](../🚔%20Network%20Managements%20&%20Standards/MIME%20(Multipurpose%20Internet%20Mail%20Extensions).md)

![](../../../../../../Assets/Pics/Screenshot%202023-04-01%20at%205.53.49%20PM.png)


### HTTP
↗ [HTTP (HyperText Transfer Protocol)](../🔥%20Web%20(WWW)%20Protocols/HTTP%20(HyperText%20Transfer%20Protocol)/HTTP%20(HyperText%20Transfer%20Protocol).md)

![](../../../../../../Assets/Pics/Screenshot%202023-04-01%20at%205.55.13%20PM.png)



## Email Message Format
![](../../../../../../Assets/Pics/Screenshot%202023-04-01%20at%205.53.04%20PM.png)



## Ref
[👍 邮件基本概念及发送方式]: https://www.cnblogs.com/antLaddie/p/15546365.html

[telnet登录SMTP和pop收发邮件(QQ邮箱)]: https://blog.csdn.net/junseven164/article/details/122177150

[Error: need EHLO and AUTH first]: https://pdf-lib.org/Home/Details/10271

> 今天通过System.Net.Mail的时候出现了如下错误： `Error: need EHLO and AUTH first`
> 解决：
> 1、启用smtp.UseDefaultCredentials = true;
> 2、启用smtp.EnableSsl = true;
> 3. 同时端口是587，并不是官方所说的465

[smtpmail 503 Error: need EHLO and AUTH first]: https://emacs-china.org/t/smtpmail-503-error-need-ehlo-and-auth-first/14783

[imap连接提示Unsafe Login，被阻止的收信行为]: https://help.mail.163.com/faqDetail.do?code=d7a5dc8471cd0c0e8b4b8f4f8e49998b374173cfe9171305fa1ce630d7f67ac211b1978002df8b23

[What information can be gained from an Email Header? | Information Secuirty, Stack Exchange]: https://security.stackexchange.com/q/48724/298278
Some of the most useful headers are:
- `User-Agent` usually reveals client [MUA](http://en.wikipedia.org/wiki/Mail_user_agent) and version, often OS and architecture
- `Received`  
    all sorts of things, overall you get to see (most of) the store-and-forward hops, but within each such [header](http://cr.yp.to/immhf/envelope.html) you can see:
	- IP addressing, possibly determine IPv6 support
	- system name, hostnames and internal domain name, possibly deduce naming conventions, deduce use of DHCP
	- possibly deduce [MTA](http://en.wikipedia.org/wiki/Mail_Transfer_Agent) software on each hop (based on Received header format, queue identifiers and format)
	- local time and time zones, possibly per-hop delays
	- TLS support (per-hop)
	- SMTP AUTH user name or client-cert use (likely first hop only)
	- the first (closest to the end of the headers) `Received` _usually_ indicates the client that originated the SMTP message, in the past I've used a regex on the reverse DNS name added by sendmail to tag potential DSL/domestic naming conventions: `(dsl|dial|ppp|dyn|user|modem|cable|catv|dhcp|pool|node|cust)`
- `Message-ID` if MUA generated it may reveal MUA details, and may contain host identifying information. If added by the first hop it may reveal MTA details. This field is [intended to uniquely identify a specific message](https://www.rfc-editor.org/rfc/rfc5322#section-3.6.4).
- `Return-Path` the envelope sender, may indicate attempted forgery
- `X-` headers often reveal scanning, anti-virus, anti-spam components; TLS support. Many systems (including MS-Exchange) add [`X-Originating-IP`](http://en.wikipedia.org/wiki/X-Originating-IP). Hotmail adds an "obscured" [X-EIP](http://answers.microsoft.com/en-us/outlook_com/forum/oemail-osend/what-does-x-eip-mean-in-an-email-message-source/63fe7edd-1cbc-4276-9e9e-e3834ecd4219) (evidently a source of much excitement).
