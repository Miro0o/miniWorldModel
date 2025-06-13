# CS186: Introduction to Database System

[TOC]



## 课程简介
- 所属大学：UC Berkeley
- 先修要求：CS61A, CS61B, CS61C
- 编程语言：Java
- 课程难度：🌟🌟🌟🌟🌟
- 预计学时：150 小时

如何编写 SQL 查询？SQL 命令是如何被一步步拆解、优化、转变为一个个磁盘查询指令的？如何实现高并发的数据库？如何实现数据库的故障恢复？什么又是非关系型数据库？这门课会带你深入理解关系型数据库的内部细节，并在掌握理论知识之后，动手用 Java 实现一个支持 SQL 并发查询、B+ 树 Index 和故障恢复的关系型数据库。

从实用角度来说，这门课还会在编程作业中锻炼你编写 SQL 查询以及 NoSQL 查询的能力，对于构建一些全栈的工程项目很有帮助。

## 课程资源
- 课程网站：[https://cs186berkeley.net/](https://cs186berkeley.net/)
	- 👍 [fall 2020](https://cs186berkeley.net/fa20/) has most available materials (since the latest course with resources is private)
- 课程视频：[https://www.bilibili.com/video/BV13a411c7Qo](https://www.bilibili.com/video/BV13a411c7Qo)
- 课程教材：无

> There is no required textbook for this class, and we will not be assigning required readings. However, if you would like to use a textbook while in this class, we recommend the following:
> - **[Database Management Systems](http://pages.cs.wisc.edu/~dbbook/), 3rd Edition, by Ramakrishnan and Gehrke** (Former official textbook of this class)
> - **[Database Systems Concepts](https://www.db-book.com/), 6th Edition, by Silberschatz, Korth and Sudarshan**
> - **[Database Systems: The Complete Book](http://infolab.stanford.edu/~ullman/dscb.html), 2nd Edition, by Garcia-Molina, Ullman, and Widom** (Previously used by Prof. Cheung)
> 
> Note that exams and all other aspects of the course will center on material as covered in the lectures, so defer to course material if there are any discrepancies with the textbook(s) you are using.
> 
> If you want to try to target your reading to the topics of this class, reading assignments from previous offerings of CS 186 for the Database Management Systems textbook can be found [here](https://docs.google.com/spreadsheets/d/1JfrHl8hn8-iMqL2se4SYS0lxQyiwz54YIATFXuzaPlA/edit?usp=sharing). Reading assignments from a database class taught at a different university by Prof. Cheung for Database Systems: The Complete Book can be found [here](https://courses.cs.washington.edu/courses/cse414/18sp/calendar/lecturelist.html), although the topics taught in that class differ from those taught in this class.


- 课程作业：6 个 Project

> 🔗 [CS 186 Projects](https://cs186.gitbook.io/project/)


📔 [Course Notes](https://cs186berkeley.net/notes/)




## 资源汇总

@PKUFlyingPig 在学习这门课中用到的所有资源和作业实现都汇总在 🔗 [PKUFlyingPig/CS186 - GitHub](https://github.com/PKUFlyingPig/CS186) 中 🔽 🔽

### General

[Course website](https://cs186berkeley.net/fa20/): I used the 2021 spring version.

[Recorded videos](https://www.youtube.com/user/CS186Berkeley/playlists): I watched the recorded videos on Youtube, you can also find the same videos on bilibili.

Vitamin: Vitamins are short, weekly assignments to keep you on schedule and check your understanding of the basics from lecture. However these assignments are not open to the public, you can find them on the [Edx's archived CS186W](https://learning.edge.edx.org/course/course-v1:BerkeleyX+CS186+2018_SP/). You can also download the ppt and watch course videos on Edx.

[PPT](https://github.com/PKUFlyingPig/CS186/blob/master/ppt): I downloaded them from Edx.

[Notes](https://github.com/PKUFlyingPig/CS186/blob/master/notes): These notes serve as a great explanation and conclusion of the course contents. I read the 2021 spring version.

[Discussion](https://github.com/PKUFlyingPig/CS186/blob/master/discussion): Enhance your understanding of the course contents.

[Exam-preparation](https://github.com/PKUFlyingPig/CS186/blob/master/exam-prep): Review the course contents and practice on some exam-like problems.

### [Projects](https://github.com/PKUFlyingPig/CS186#projects)

There are six projects in total. There is a [gitbook](https://cs186.gitbook.io/project/) for CS186 projects, but it may be updated each semester. I cloned the 2021 spring version, you can find the projects handout that I used [here](https://github.com/PKUFlyingPig/CS186/blob/master/project-handout).

-   Project 1: SQL
    -   You will learn to write SQL queries in this project.
    -   My implementation is in this [repo](https://github.com/PKUFlyingPig/CS186-proj1).

-   Project 2 - 4 : Implement a simple relational database —— rookiedb
    -   My implementation is in this [repo](https://github.com/PKUFlyingPig/CS186-Rookiedb).
    -   project 2: B+ tree
    -   project 3: joins and query optimization
    -   project 4: concurrency
    -   project 5: recovery

-   Project 6: NoSQL
    -   You will learn to write mongodb queries in this project.
    -   My implementation is in this [repo](https://github.com/PKUFlyingPig/CS186-proj6).

