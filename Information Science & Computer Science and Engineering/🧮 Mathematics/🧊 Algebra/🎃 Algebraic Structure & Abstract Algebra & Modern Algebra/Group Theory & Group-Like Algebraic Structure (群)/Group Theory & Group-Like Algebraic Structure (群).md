# Group Theory & Group-Like Algebraic Structure (群)

[TOC]



## Res
### Related Topics


### Other Resources
🎬 https://youtube.com/playlist?list=PLDcSwjT2BF_VuNbn8HiHZKKy59SgnIAeO&si=LUmi7hoNSh3W_bQv
**Essence of Group Theory**
Inspired by 3Blue1Brown series on Essence of Linear Algebra, this video series hopefully gives some insights into this abstract topic of group theory (which is literally a part of an abstract algebra course).

🎬 https://youtube.com/playlist?list=PLDcSwjT2BF_WDki-WvmJ__Q0nLIHuNPbP&si=T7qHhkBy7f17O6DH
**Lie groups, algebras, brackets**
New video series on the theory of Lie, focusing on the visual intuition rather than the usual boring equations.

🎬 https://youtube.com/playlist?list=PLSzBa8LQ41yQiPzLrjqBZbrjL85uWOGSM&si=HbYoU9AECzH61zGk
Group Theory in Music

🎬 https://youtu.be/mvmuCPvRoWQ?si=WOarG_mjw9TmOi0u
Euler's formula with introductory group theory | 3B1B



## Intro
<iframe width="560" height="315" src="https://www.youtube.com/embed/mH0oCDa74tE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

![Screenshot 2023-01-06 at 6.22.07 PM](../../../../../../Assets/Pics/Screenshot%202023-01-06%20at%206.22.07%20PM.png)


### Group, Ring, and Field Intro
![Screenshot 2023-01-05 at 2.42.36 PM](../../../../../Assets/Pics/Screenshot%202023-01-05%20at%202.42.36%20PM.png)
<small>【群环域串讲】 <a>https://www.bilibili.com/video/BV1L84y1k7Yc/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d</a></small>


---
👍👍【[数学直通车]写给大一学生的群、环、域】 https://www.bilibili.com/video/BV1H2NoeiE1K/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

![](../../../../../Assets/Pics/Screenshot%202025-10-07%20at%2022.06.10.png)
![](../../../../../Assets/Pics/Screenshot%202025-10-07%20at%2022.05.17.png)
![](../../../../../Assets/Pics/Screenshot%202025-10-07%20at%2022.08.01.png)
![](../../../../../Assets/Pics/Screenshot%202025-10-07%20at%2022.09.03.png)
![](../../../../../Assets/Pics/Screenshot%202025-10-07%20at%2020.36.17.png)



## Ref
[👍 伽罗华域（Galois Field）上的四则运算]: https://abcdxyzk.github.io/blog/2018/04/16/isal-erase-3/
[👍 乘法逆元]: https://www.luogu.com.cn/blog/1239004072Angel/post-shuo-xue-sheng-fa-ni-yuan

[群论简介]: https://oi-wiki.org/math/group-theory/#商群
[商群]: https://math.fandom.com/zh/wiki/商群?variant=zh
[群的引入，子群与商群 - 汝成的文章 - 知乎]: https://zhuanlan.zhihu.com/p/34104381

[语言背后的代数学（七）：数学结构]: https://thzt.github.io/2018/02/09/semantics-7/

[What are the differences between rings, groups, and fields? | Mathematics]: https://math.stackexchange.com/a/91/1230830
You're right to think that the definitions are very similar. The main difference between groups and rings is that rings have two binary operations (usually called addition and multiplication) instead of just one binary operation.

If you forget about multiplication, then a ring becomes a group with respect to addition (the identity is 0 and inverses are negatives). This group is always commutative!

If you forget about addition, then a ring does not become a group with respect to multiplication. The binary operation of multiplication is associative and it does have an identity 1, but some elements like 0 do not have inverses. (This structure is called a monoid.)

A commutative ring is a field when all nonzero elements have multiplicative inverses. In this case, if you forget about addition and remove 0, the remaining elements do form a group under multiplication. This group is again commutative.

A division ring is a (not necessarily commutative) ring in which all nonzero elements have multiplicative inverses. Again, if you forget about addition and remove 0, the remaining elements do form a group under multiplication. This group is not necessarily commutative. An example of a division ring which is not a field are the quaternions.
