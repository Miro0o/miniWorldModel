作者：晓健周
链接：https://www.zhihu.com/question/22686770/answer/22263678
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。



# 运筹学（最优化理论）如何入门

## 学运筹学之前，在知乎查过运筹学入门方面的问题，没有得到想要的答案。现在过运筹学了，自己提问，自己回答。

涉及到专业入门书籍、资料的推荐，因为萝卜青菜各有所爱，难以保证所推荐的适合大多人。仅供参考。

说到运筹学入门书籍，似乎离不开 Frederick
S. Hillier 和 Gerald J. Lieberman 的《**Introduction to Operations Research**》（[Introduction to Operations Research (豆瓣)](https://link.zhihu.com/?target=http%3A//book.douban.com/subject/2250362/)），在国内由哈工大的胡运权翻译成《**运筹学导论**》([运筹学导论 (豆瓣)](https://link.zhihu.com/?target=http%3A//book.douban.com/subject/2253276/))，但是只是截取了部分章节，重点选取了[线性规划](https://www.zhihu.com/search?q=线性规划&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A22263678})的章节。这本书英文版网上有电子书，百度或者[谷歌](https://www.zhihu.com/search?q=谷歌&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A22263678})一下 “Introduction to Operations Research pdf ”就没问题的。

我谷歌百度了一下运筹学入门书籍，无论是英文搜索还是中文搜索，大多都提到《运筹学导论》这本书，因此最开始是使用的这本书作为入门。另外，自己偏爱 Coursera，因此选了 Coursera 上[科罗拉多大学波德分校](https://www.zhihu.com/search?q=科罗拉多大学波德分校&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A22263678})开设的《**线性和整数规划**》（[Coursera.org](https://link.zhihu.com/?target=https%3A//www.coursera.org/course/linearprogramming)）作为主要教学视频。

一般而言，对于专业课，教材加教学视频，外加不懂时谷歌搜索，就可以很好地自学了。

非常可惜的是，这本书和这个视频都不适合用于入门，对于我。《运筹学导论》在学生还没入门的时候讲了太多运筹学的复杂运用，对于最基本的单纯形法讲解跳跃性太大，行文还不加介绍直接使用“超平面”、“[凸集](https://www.zhihu.com/search?q=凸集&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A22263678})”等等概念，反复看都难以理解。此书基本内容都难以理解，作者却还同时介绍 MPL、LINGO、LINDO 编程，Excel解决线性规划问题，如果能力没有达到这样水平，只会越学越没有兴趣。顺带提一句，如果中英文对照着看的人，会发现这本书翻译瑕疵太多，部分地方直接影响阅读（比如第九版第165页将“Corner-Point Infeasible Solution” 翻译成“角点可行解”）。

另外要补充说明，我在读《运筹学导论》非单纯形法介绍部分，即运输问题、指派问题、[整数规划](https://www.zhihu.com/search?q=整数规划&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A22263678})、动态规划、决策分析的时候，觉得读的很顺，而且有实际运用的介绍，感觉学习[非单纯形法](https://www.zhihu.com/search?q=非单纯形法&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A22263678})部分用这本书作为第一教材，确实合适。

再说说 Coursera 上的《线性和整数规划》，此教学视频最大的优势在于有视频教学和课后习题搭配，加之介绍了 Excel 和 Python 解决线性规划问题，另外有 Python 代码，有兴趣的可以学习一下。不过课程由两人讲授，其中一人讲得是印度口音英语，他还是主讲，实在让人难受。

## **下面进入正题，运筹学如何入门？**

我最推荐的入门视频：[DrSalimian](https://link.zhihu.com/?target=http%3A//www.youtube.com/user/DrSalimian/videos%3Fsort%3Ddd%26view%3D46%26tag_id%3DUC8L2asKJn-kNwBHVllQCs5A.3.operations-research%26shelf_id%3D3) 的线性规划系列视频（资源地址：[MOOCOR - Masud Salimian's Operations Research Course](https://link.zhihu.com/?target=https%3A//www.youtube.com/playlist%3Flist%3DPLUm0dA6802wao5iSrkhnMDSLGu5bg_FtM)），讲得非常基础，而且十分清晰，基本上是 Step By Step的讲解，为我扫清了好多好多的疑惑。跟着他把线性规划的各个子内容（Simplex, Big-M Technique, Two-Phase Technique, Matrix Form Simplex, Revised Simplex, Duality）学好了，一步步跟下来是很简单顺畅，基本上Simplex就掌握了。

在学习 Simplex 的时候，DrSalimian的教程是主线，利用《运筹学导论》还有谷歌搜索作为补充。比如听 Big-M 不太了解，就搜索 Big-M Method，然后看看其他大学放在网上的 pdf，这样效果甚好。

学习完 Simplex 之后，《运筹学导论》就开始发挥作用了，这本书从第10章[动态规划](https://www.zhihu.com/search?q=动态规划&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A22263678})开始，是可以作为第一教材。然后有不太理解的地方，用网上资料，以及 Youtube 上的视频来补充。

---------------其他一些资源--------------
《[Linear](https://link.zhihu.com/?target=http%3A//carlossicoli.free.fr/D/Dantzig_G.%2C_Thapa_M.-Linear_programming._Vol.1._Introduction(Springer%2C1997)(474s)_MOc_.pdf)[Programming 1: Introduction](https://link.zhihu.com/?target=http%3A//carlossicoli.free.fr/D/Dantzig_G.%2C_Thapa_M.-Linear_programming._Vol.1._Introduction(Springer%2C1997)(474s)_MOc_.pdf)》, George B. Dantzig, Mukund N. Thapa: 这本书是Simplex Method发明人Dantzig写的，书，可以在一些问题不懂的时候参考，不过同样不适合作为入门的第一教材。可能因为Dantzig是数学家，书中思维很严谨，很多Lemma，Theorem，Corrolary，以及证明和推倒。

[TransportationProblems](https://link.zhihu.com/?target=http%3A//ocw.nctu.edu.tw/course/operation_research/or_lecturenotes/orchap8.pdf)，一个小专题 pdf，帮我理解了运输问题，把解法一步步讲得很清楚，初始化阶段介绍了三个方法：North-West, Russell, Vogel。

[印度理工](https://www.zhihu.com/search?q=印度理工&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A22263678})推出的系列视频，从入门到进阶十分详细，对印度英语不熟悉的同学可能会听着很难受，Salimian为我们整理了这一系列视频：[Masud Salimian's Operations Research Course](https://link.zhihu.com/?target=http%3A//salimian.webersedu.com/courses/OR/OR_videos_YouTube.html)。