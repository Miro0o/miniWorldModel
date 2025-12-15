# SQL Injection

[TOC]



## Res
### Related Topics
↗ [SeedLab - Web Security /👉 SQL Injection Attack Lab](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🎯%20Cyber%20Ranges%20&%20Labs/🧪%20Ranges%20&%20Security%20Labs/SEED%20Project/SeedLab%20-%20Web%20Security.md#👉%20SQL%20Injection%20Attack%20Lab)



## Intro


## Ref
[👍 SQL注入之盲注简单总结]: https://www.cnblogs.com/zane-s/articles/12371820.html
1. 什么是盲注？  
    盲注就是在sql注入过程中，sql语句执行的选择后，选择的数据不能回显到前端页面。此时，我们需要利用一些方法进行判断或者尝试，这个过程称之为盲注。
2. SQL盲注与SQL普通注入的区别？  
    普通注入是可以根据报错提示，进行sql语句注入从而，直接爆出我们想要的信息，比如数据库版本、数据库名、用户名、操作系统版本等；而盲注只能通过多次猜测，从而猜解出有用信息。相对来说sql盲注更加考验安全人员的手注能力。
3. SQL盲注分类：  
    Sql盲注可以简单分为三类 ：布尔盲注、延时盲注和报错盲注

[👍 SQL注入之布尔盲注并使用burp进行自动化爆破]: https://www.haochen1204.com/2021/03/29/sql-zhu-ru-zhi-bu-er-mang-zhu-bing-shi-yong-burp-jin-xing-zi-dong-hua-bao-po/#toc-heading-1

[SQL injection Black Magic | p4d0rn]: https://p4d0rn.github.io/2023/08/05/sqli/
1. [延时注入](https://p4d0rn.github.io/2023/08/05/sqli/#%E5%BB%B6%E6%97%B6%E6%B3%A8%E5%85%A5)
2. [Order By盲注](https://p4d0rn.github.io/2023/08/05/sqli/#Order-By%E7%9B%B2%E6%B3%A8)
3. [黑名单绕过](https://p4d0rn.github.io/2023/08/05/sqli/#%E9%BB%91%E5%90%8D%E5%8D%95%E7%BB%95%E8%BF%87)
    1. [substr过滤](https://p4d0rn.github.io/2023/08/05/sqli/#substr%E8%BF%87%E6%BB%A4)
    2. [逗号过滤](https://p4d0rn.github.io/2023/08/05/sqli/#%E9%80%97%E5%8F%B7%E8%BF%87%E6%BB%A4)
    3. [空格过滤](https://p4d0rn.github.io/2023/08/05/sqli/#%E7%A9%BA%E6%A0%BC%E8%BF%87%E6%BB%A4)
    4. [引号过滤](https://p4d0rn.github.io/2023/08/05/sqli/#%E5%BC%95%E5%8F%B7%E8%BF%87%E6%BB%A4)
    5. [比较符过滤](https://p4d0rn.github.io/2023/08/05/sqli/#%E6%AF%94%E8%BE%83%E7%AC%A6%E8%BF%87%E6%BB%A4)
    6. [逻辑符过滤](https://p4d0rn.github.io/2023/08/05/sqli/#%E9%80%BB%E8%BE%91%E7%AC%A6%E8%BF%87%E6%BB%A4)
    7. [if过滤](https://p4d0rn.github.io/2023/08/05/sqli/#if%E8%BF%87%E6%BB%A4)
    8. [注释符过滤](https://p4d0rn.github.io/2023/08/05/sqli/#%E6%B3%A8%E9%87%8A%E7%AC%A6%E8%BF%87%E6%BB%A4)
    9. [关键字过滤](https://p4d0rn.github.io/2023/08/05/sqli/#%E5%85%B3%E9%94%AE%E5%AD%97%E8%BF%87%E6%BB%A4)
    10. [等价函数](https://p4d0rn.github.io/2023/08/05/sqli/#%E7%AD%89%E4%BB%B7%E5%87%BD%E6%95%B0)
4. Articles To Learn
	1. https://www.jianshu.com/p/d10785d22db2
	2. https://www.cnblogs.com/forforever/p/13019703.html
	3. https://www.cnblogs.com/Vinson404/p/7253255.html
	4. https://wooyun.js.org/drops/MySQL%E6%B3%A8%E5%85%A5%E6%8A%80%E5%B7%A7.html
