# Partial Order & Total Order (Linear Order) & Well-Order

[TOC]



## Res
### Related Topics



## Intro



## Ref
[全序关系和偏序关系的区别是什么？ - 三川啦啦啦的回答 - 知乎]: https://www.zhihu.com/question/36758436/answer/500886873

偏序与完全序（离散数学知识）
**（1）偏序与完全序的概念：**
- [偏序关系](https://zhida.zhihu.com/search?content_id=131032430&content_type=Answer&match_order=1&q=%E5%81%8F%E5%BA%8F%E5%85%B3%E7%B3%BB&zhida_source=entity)、[全序关系](https://zhida.zhihu.com/search?content_id=131032430&content_type=Answer&match_order=1&q=%E5%85%A8%E5%BA%8F%E5%85%B3%E7%B3%BB&zhida_source=entity)都是[公理集合论](https://zhida.zhihu.com/search?content_id=131032430&content_type=Answer&match_order=1&q=%E5%85%AC%E7%90%86%E9%9B%86%E5%90%88%E8%AE%BA&zhida_source=entity)中的一种[二元关系](https://zhida.zhihu.com/search?content_id=131032430&content_type=Answer&match_order=1&q=%E4%BA%8C%E5%85%83%E5%85%B3%E7%B3%BB&zhida_source=entity)。
- 偏序集合：配备了偏序关系的集合。
	- 偏序：只对部分要元素成立关系（部分可比）
	- 集合内只有部分元素之间在这个关系下是可以比较的。
	- 比如：比如复数集中并不是所有的数都可以比较大小，那么“大小”就是复数集的一个偏序关系。
- 全序集合：配备了全序关系的集合。
	- 全序：对集合中任意两个元素都有关系
	- 集合内任何一对元素在在这个关系下都是相互可比较的。
	- 比如：有限长度的序列按字典序是全序的。最常见的是单词在字典中是全序的。
**（2）偏序与完全序的定义:**
- 偏序的定义：
	- 设R是集合A上的一个二元关系，若R满足：
		- Ⅰ [自反性](https://zhida.zhihu.com/search?content_id=131032430&content_type=Answer&match_order=1&q=%E8%87%AA%E5%8F%8D%E6%80%A7&zhida_source=entity)：对任意x∈A，有xRx；
		- Ⅱ [反对称性](https://zhida.zhihu.com/search?content_id=131032430&content_type=Answer&match_order=1&q=%E5%8F%8D%E5%AF%B9%E7%A7%B0%E6%80%A7&zhida_source=entity)（即反对称关系）：对任意x,y∈A，若xRy，且yRx，则x=y；
		- Ⅲ [传递性](https://zhida.zhihu.com/search?content_id=131032430&content_type=Answer&match_order=1&q=%E4%BC%A0%E9%80%92%E6%80%A7&zhida_source=entity)：对任意x, y,z∈A，若xRy，且yRz，则xRz。
	- 则称R为A上的偏序关系。
- 全序的定义：
	- 设集合X上有一全序关系，如果我们把这种关系用 ≤ 表述，则下列陈述对于 X 中的所有 a, b 和 c 成立：
		- 如果 a ≤ b 且 b ≤ a 则 a = b (反对称性)
		- 如果 a ≤ b 且 b ≤ c 则 a ≤ c (传递性)
		- a ≤ b 或 b ≤ a (完全性)
	- **注意**：
		- 完全性本身也包括了自反性。 所以，全序关系必是偏序关系。

---
以上答主好像都没有举例子，那我就当一回搬运工吧。
- 集合的包含关系是一种偏序。
- 在整数集中定义偏序：若a能整除b，我们就记为a≺b
显然它满足序公理。但整数集中，不是任何两个数都存在整除关系，这个关系是**局部**的（partial），太“偏颇”，于是被称为**偏序**。