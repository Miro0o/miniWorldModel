# FAQ

[TOC]



## 👉 Why do people in academia tend to write their email address with "(dot)", "(at)", instead of ".", "@"?
#email #academia

As others have said, it's to prevent email address harvesting. So why academic users mainly, and why do they use this pathetically ineffective technique? 

Academic users were among the first to actually use the web for any purpose. Universities were the first large-scale source of email addresses, and when the web became available, academic users were the first large-scale group to take advantage of it. When spam started to become an issue in the early to mid 1990s, address obfuscation was actually an effective way of preventing address harvesting -- at least, for a few months, or a year or two, before spammers were doing the obvious corrections. 

Even after spammers were correcting obfuscations, the early web users often continued to obfuscate: They had already done it and didn't bother changing it back, or they figured it might help and wouldn't hurt, or maybe they copied a template from someone else and just followed it. Again, these early web pages were not really _designed_ as such, they were just some student or early-stage professor hand-coding html. If new web pages are still obfuscating, they're presumably just copying their mentor, or their mentor's mentor, without really thinking much about it.

That's the same reason you see this sort of thing among the other early-adopter classes of web users, like tech folks. People who put out pages in the early 90s had a more or less legitimate reason for it, and the tradition has just hung around.

(I just looked at my web page, first hand-coded with HTML in 1995, to see if I did this, but I don't even see an email address on my page any more. I don't think I ever bothered to obfuscate even when I did include contact links.)



[Why do people in academia tend to write their email address with "(dot)", "(at)", instead of ".", "@"? | Stackoverflow]: https://academia.stackexchange.com/q/55612


## 👉 Differences Between Symposium, Conference, and Workshop?
#academia #conference #workshop #symposium

> 🤖 Contents below are AI-generated

The terms **symposium**, **conference**, and **workshop** refer to different types of academic or professional gatherings, each with distinct characteristics:

Symposium
- **Definition:** A formal meeting or discussion focused on a specific topic or theme.
- **Format:** Often features presentations by invited speakers, followed by discussions or panels.
- **Purpose:** Primarily to share research findings and facilitate discussions among experts in a specific area.
- **Duration:** Typically shorter than conferences, often lasting a day or two.

Conference
- **Definition:** A larger event that gathers people to discuss a broader range of topics within a specific field.
- **Format:** Includes multiple sessions with presentations, keynote speeches, panels, and networking opportunities.
- **Purpose:** To disseminate research, share knowledge, and foster collaboration. Conferences often have submitted papers that are peer-reviewed.
- **Duration:** Usually spans several days.

Workshop
- **Definition:** A more interactive and hands-on gathering focusing on practical skills or specific topics.
- **Format:** Involves activities, discussions, and exercises rather than just presentations. Participants may engage in collaborative work.
- **Purpose:** To teach skills, explore new methods, or develop solutions to specific problems. Workshops often encourage participant involvement.
- **Duration:** Can vary from a few hours to a couple of days but is generally shorter than conferences.



## 👉 Google Scholar: We are sorry... but your computer or network maybe sending automated queries...
#google_scholar #network 

https://v2xtls.org/google-scholar-%E8%B0%B7%E6%AD%8C%E5%AD%A6%E6%9C%AF403-your-client-does-not-have-permission-to-get-url%E6%88%96%E8%80%85were-sorry%E7%9A%84%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95/
出现这些问题的本质原因：VPS或者机场的IP以前被人滥用过，例如做过爬虫、Google反向代理，导致IP被Google拉入了黑名单。对于黑明单IP，谷歌搜索只会让输验证码，而谷歌学术直接不让访问。

本文给出几种解决谷歌学术问题的办法，建议大多数网友使用谷歌上网助手插件解决该问题。

https://blog.csdn.net/m0_49423868/article/details/138311267?fromshare=blogdetail&sharetype=blogdetail&sharerId=138311267&sharerefer=PC&sharesource=weixin_43336330&sharefrom=from_link
此处修改一个博客的方法，缺失了一个步骤，所以评论都说没用
关闭Chrome浏览器QUIC协议
1）Chrome地址栏输入chrome://flags
2）搜索栏中输入quic，找到Experimental QUIC protocol，改为Disabled
3）打开浏览器设置！！！清除cookie！！！
