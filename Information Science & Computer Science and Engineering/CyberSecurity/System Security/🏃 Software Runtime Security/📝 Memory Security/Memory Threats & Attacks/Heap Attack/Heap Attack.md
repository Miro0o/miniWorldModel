# Heap Attack

[TOC]



## Res
### Related Topics


### Other Resources
https://github.com/shellphish/how2heap
A repository for learning various heap exploitation techniques.

https://roderickchan.github.io/zh-cn/2023-02-27-house-of-all-about-glibc-heap-exploitation/#1-%E5%89%8D%E8%A8%80
| 攻击方法               | 影响范围       | 学习链接                                                                                                                                                                                                                                        |
| ------------------ | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| house of spirit    | 2.23—— 至今  | [堆利用系列之 house of spirit - 安全客 - 安全资讯平台 (anquanke.com)](https://www.anquanke.com/post/id/244158)                                                                                                                                             |
| house of einherjar | 2.23—— 至今  | [PWN——House Of Einherjar CTF Wiki 例题详解 - 安全客 - 安全资讯平台 (anquanke.com)](https://www.anquanke.com/post/id/251596)                                                                                                                              |
| house of force     | 2.23——2.29 | [Top chunk 劫持：House of force 攻击 - 安全客 - 安全资讯平台 (anquanke.com)](https://www.anquanke.com/post/id/175630)                                                                                                                                     |
| house of lore      | 2.23—— 至今  | [House of Lore - CTF Wiki (ctf-wiki.org)](https://ctf-wiki.org/pwn/linux/user-mode/heap/ptmalloc2/house-of-lore/)                                                                                                                           |
| house of orange    | 2.23——2.26 | [House of orange - 安全客 - 安全资讯平台 (anquanke.com)](https://www.anquanke.com/post/id/218887)                                                                                                                                                    |
| house of rabbit    | 2.23——2.28 | [http://p4nda.top/2018/04/18/house-of-rabbit/](http://p4nda.top/2018/04/18/house-of-rabbit/)                                                                                                                                                |
| house of roman     | 2.23——2.29 | [House of Roman - CTF Wiki (ctf-wiki.org)](https://ctf-wiki.org/pwn/linux/user-mode/heap/ptmalloc2/house-of-roman/)                                                                                                                         |
| house of storm     | 2.23——2.29 | [House of storm 原理及利用 - 安全客 - 安全资讯平台 (anquanke.com)](https://www.anquanke.com/post/id/203096)                                                                                                                                               |
| house of corrosion | 2.23—— 至今  | [House-of-Corrosion 一种新的堆利用技巧 - 先知社区 (aliyun.com)](https://xz.aliyun.com/t/6862#toc-5)                                                                                                                                                      |
| house of husk      | 2.23—— 至今  | [house-of-husk 学习笔记 - 安全客 - 安全资讯平台 (anquanke.com)](https://www.anquanke.com/post/id/202387)                                                                                                                                                 |
| house of atum      | 2.26——2.30 | [https://abf1ag.github.io/2021/06/11/house-of-atum/](https://abf1ag.github.io/2021/06/11/house-of-atum/)                                                                                                                                    |
| house of kauri     | 2.26——2.32 | [Overview of GLIBC heap exploitation techniques (0x434b.dev)](https://0x434b.dev/overview-of-glibc-heap-exploitation-techniques/#house-of-kauri)                                                                                            |
| house of fun       | 2.23——2.30 | [Overview of GLIBC heap exploitation techniques (0x434b.dev)](https://0x434b.dev/overview-of-glibc-heap-exploitation-techniques/#house-of-fun)                                                                                              |
| house of mind      | 2.23—— 至今  | [how2heap/house_of_mind_fastbin.c at master · shellphish/how2heap (github.com)](https://github.com/shellphish/how2heap/blob/master/glibc_2.35/house_of_mind_fastbin.c)                                                                      |
| house of muney     | 2.23—— 至今  | [House of Muney 分析 - 安全客 - 安全资讯平台 (anquanke.com)](https://www.anquanke.com/post/id/254797)                                                                                                                                                  |
| house of botcake   | 2.23—— 至今  | [奇安信攻防社区 - 深入理解 House of Botcake 堆利用手法 (butian.net)](https://forum.butian.net/share/1709)                                                                                                                                                   |
| house of rust      | 2.26—— 至今  | [c4ebt/House-of-Rust](https://github.com/c4ebt/House-of-Rust)                                                                                                                                                                               |
| house of crust     | 2.26——2.37 | [c4ebt/House-of-Rust](https://github.com/c4ebt/House-of-Rust)                                                                                                                                                                               |
| house of io        | 2.26—— 至今  | [Overview of GLIBC heap exploitation techniques (0x434b.dev)](https://0x434b.dev/overview-of-glibc-heap-exploitation-techniques/#house-of-io)                                                                                               |
| house of banana    | 2.23—— 至今  | [house of banana - 安全客 - 安全资讯平台 (anquanke.com)](https://www.anquanke.com/post/id/222948)                                                                                                                                                    |
| house of kiwi      | 2.23——2.36 | [House OF Kiwi - 安全客 - 安全资讯平台 (anquanke.com)](https://www.anquanke.com/post/id/235598)                                                                                                                                                      |
| house of emma      | 2.23—— 至今  | [house of emma](https://www.anquanke.com/post/id/260614)                                                                                                                                                                                    |
| house of pig       | 2.23—— 至今  | [house of pig 一个新的堆利用详解 - 安全客 - 安全资讯平台 (anquanke.com)](https://www.anquanke.com/post/id/242640)                                                                                                                                             |
| house of obstack   | 2.23—— 至今  | [一条新的 glibc IO_FILE 利用链：_IO_obstack_jumps 利用分析 - 跳跳糖 (tttang.com)](https://tttang.com/archive/1845/)                                                                                                                                        |
| house of apple1    | 2.23—— 至今  | [House of Apple 一种新的 glibc 中 IO 攻击方法 (1) - roderick - record and learn! (roderickchan.cn)](https://roderickchan.github.io/zh-cn/house-of-apple-%e4%b8%80%e7%a7%8d%e6%96%b0%e7%9a%84glibc%e4%b8%adio%e6%94%bb%e5%87%bb%e6%96%b9%e6%b3%95-1/) |
| house of apple2    | 2.23—— 至今  | [House of Apple 一种新的 glibc 中 IO 攻击方法 (2) - roderick - record and learn! (roderickchan.cn)](https://roderickchan.github.io/zh-cn/house-of-apple-%e4%b8%80%e7%a7%8d%e6%96%b0%e7%9a%84glibc%e4%b8%adio%e6%94%bb%e5%87%bb%e6%96%b9%e6%b3%95-2/) |
| house of apple3    | 2.23—— 至今  | [House of Apple 一种新的 glibc 中 IO 攻击方法 (3) - roderick - record and learn! (roderickchan.cn)](https://roderickchan.github.io/zh-cn/house-of-apple-%e4%b8%80%e7%a7%8d%e6%96%b0%e7%9a%84glibc%e4%b8%adio%e6%94%bb%e5%87%bb%e6%96%b9%e6%b3%95-3/) |
| house of gods      | 2.23——2.27 | [house-of-gods/HOUSE_OF_GODS.TXT at master · Milo-D/house-of-gods (github.com)](https://github.com/Milo-D/house-of-gods/blob/master/rev2/HOUSE_OF_GODS.TXT)                                                                                 |
| house of lys       | 2.23—— 至今  | [[SECCON CTF 2022 Quals] babyfile \| repr](https://nasm.re/posts/babyfile/)或者[一条新的 glibc IO_FILE 利用链：_IO_obstack_jumps 利用分析 - 7resp4ss - 博客园](https://www.cnblogs.com/7resp4ss/p/17486261.html)                                             |
| house of snake     | 2.23—— 至今  | [house of snake：一条高版本 Glibc IO 调用链 - 7resp4ss - 博客园](https://www.cnblogs.com/7resp4ss/p/17300224.html)                                                                                                                                      |



## Intro



## Ref
[House of 系列堆漏洞详解(一) (2020)]: https://kabeor.cn/House%20of%20%E7%B3%BB%E5%88%97%E5%A0%86%E6%BC%8F%E6%B4%9E%E8%AF%A6%E8%A7%A3(%E4%B8%80)/#House-of-%E7%B3%BB%E5%88%97%E5%A0%86%E6%BC%8F%E6%B4%9E%E8%AF%A6%E8%A7%A3-%E4%B8%80
