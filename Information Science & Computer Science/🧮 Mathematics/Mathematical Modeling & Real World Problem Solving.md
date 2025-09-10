# Mathematical Modeling & Real World Problem Solving

[TOC]



## Res
### Related Topics
↗ [Algorithm & Data Structure](../🔑%20CS%20Core/🧙‍♂️%20Algorithm%20&%20Data%20Structure/Algorithm%20&%20Data%20Structure.md)
↗ [AI Basics & Machine Learning](../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Machine%20Learning/AI%20Basics%20&%20Machine%20Learning.md)
↗ [Statistical Learning Theory](../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Machine%20Learning/📌%20Statistical%20Learning%20Theory/Statistical%20Learning%20Theory.md)

↗ [Theory of Computation](🤼‍♀️%20Mathematical%20Logic/😶‍🌫️%20Theory%20of%20Computation/Theory%20of%20Computation.md)

↗ [Neural Network Models](../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Machine%20Learning/📌%20Deep%20Learning%20(Neural%20Network)/2️⃣%20Neural%20Network%20Models%20🗿/Neural%20Network%20Models.md)
↗ [LLM Models Guide & Leaderboard](../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/Natural%20Language%20Processing%20(NLP)/🦑%20LLM%20(Large%20Language%20Model)/🪜%20LLM%20Models%20Guide%20&%20Leaderboard/LLM%20Models%20Guide%20&%20Leaderboard.md)

↗ [Modeling and Simulation](../🧠%20Computing%20Methodologies/👑%20Scientific%20Computing/🗿%20Modeling%20and%20Simulation/Modeling%20and%20Simulation.md)

↗ [Logical Database Design (Data Modeling)](../🔑%20CS%20Core/🍕%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/⚜️%20Database%20System%20Design/📌%20DBMS%20Design/Logical%20Database%20Design%20(Data%20Modeling)/Logical%20Database%20Design%20(Data%20Modeling).md)
↗ [UML (Unified Modeling Language)](../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20for%20Specific%20Areas/🪁%20DSL(Domain%20Specific%20Languages)%20&%20GPL(General%20Purpose%20Languages)/Modeling%20(Specification)%20Languages/UML%20(Unified%20Modeling%20Language).md)

↗ [Modeling Tools](../Software%20Engineering/CASE%20(Computer-Aided%20Software%20Engineering)%20Tools/Upper%20CASE%20Tools/Design%20&%20Visualization%20Tools/Modeling%20Tools/Modeling%20Tools.md)

↗ [(Formal) Model Checking /1️⃣ System Modeling](../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20Analysis%20&%20Binary%20Engineering/📌%20Software%20Analysis%20Basics/🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/(Formal)%20Model%20Checking.md#1️⃣%20System%20Modeling)


### Other Resources
https://m3challenge.siam.org/what-is-math-modeling/

https://ubcmath.github.io/MATH360/process/overview.html
Introduction to Mathematical Modeling



## Intro
> 🔗 https://zh.wikipedia.org/zh-hans/%E6%95%B0%E5%AD%A6%E6%A8%A1%E5%9E%8B

数学模型（mathematical model）是使用数学来将一个系统简化后予以描述。数学模型广泛应用在自然科学（如物理学、化学、生物学、宇宙学）、工程学科（如计算机科学，人工智能）、以及社会科学（如经济学、心理学、社会学和政治科学）上。科学家和工程师用模型来解释一个系统，研究不同组成部分的影响，以及对行为做出预测。常见的模型包括动态系统、概率模型、微分方程或赛局模型等等。描述不同对象的模型可能有相同的形式，同一个模型也可能包含了不同的抽象结构。

### Taxonomy of Mathematical Models
> 🔗 https://zh.wikipedia.org/zh-hans/%E6%95%B0%E5%AD%A6%E6%A8%A1%E5%9E%8B#%E5%88%86%E7%B1%BB

数学模型通常由关系与变量组成。关系可用算符描述，例如代数算符、函数、微分算符等。变量是关注的可量化的系统参数的抽象形式。算符可以与变量相结合发挥作用，也可以不与变量结合。[1] 通常情况下，数学模型可被分为以下几类：
- **线性与非线性**：在数学模型中，如果所有变量表现出线性关系，由此产生的数学模型为线性模型。否则，就为非线性模型。对线性与非线性的定义取决于具体数据，线性相关模型中也可能含有非线性表达式。例如，在一个线性统计模型中，假定参数之间的关系是线性的，但预测变量可能是非线性的。同理，如果一个微分方程定义为线性微分方程，指的是它可以写成线性微分算子的形式，但其中仍可能有非线性的表达式。在数学规划模型中，如果目标函数和约束条件都完全可以由线性方程表示，那么模型为线性模型。如果一个或多个目标函数或约束表示为非线性方程，那么模型是一个非线性模型。 
	- 即使在相对简单的系统中，非线性也往往与混沌和不可逆性等现象有关。虽然也有例外，非线性系统和模型往往比线性研究起来更加困难。解决非线性问题的一个常见方法是线性化，但在尝试用来研究对非线性依赖性很强的不可逆性等方面时就会出现问题[2]。
- **静态与动态**：动态模型对系统状态随时间变化情况起作用，而静态（或稳态）模型是在系统保持平稳状态下进行计算的，因而与时间无关。动态模型通常用微分方程描述。
- **显式与隐式**：如果整体模型的所有输入参数都已知，且输出参数可以由有限次计算求得（称为线性规划，不要与上面描述的线性模型相混淆），该模型称作显式模型。但有时输出参数未知，相应的输入必须通过迭代过程求解，如牛顿法（如果是线性模型）或布洛登法（如是非线性模型）。例如喷气发动机物理特性如涡轮和喷管喉道面积，可以在给定特定飞行条件和功率设置的热力学循环（空气和燃油的流量、压力、温度）的情况下显式计算出来，但不能用物理性质常量显式计算出其他飞行条件和功率设置下发动机的工作周期。
- **离散与连续**：离散模型将对象视作离散的，例如分子模型中的微粒，又如概率模型中的状态。而连续模型则由连续的对象所描述，例如管道中流体的速度场，固体中的温度和压力，电场中连续作用于整个模型的点电荷等。
- **确定性与概率性（随机性）**：确定性模型是所有变量集合的状态都能由模型参数和这些变量的先前状态唯一确定的一种模型；因此，在一组给定的初始条件下确定性模型总会表现相同。相反，在随机模型（通常成为“概率模型”）中存在随机性，而且变量状态并不能用唯一值来描述，而用概率分布来描述。
- **演绎，归纳与漂移**：演绎模型是建立在理论上的一种逻辑结构。归纳模型由实证研究及演绎模型推广而得。漂移模型则既不依赖于理论，也不依赖于观察，而仅仅是对预期结构的调用。[3] 当数学应用在经济学以外的社会科学时，此类模型一直被批评为毫无根据的模型。科学中在突变理论的应用已被定性为漂移模型。


### Mathematical Modeling Process
![](../../Assets/Pics/Pasted%20image%2020250905221825.png)
<small><a>https://m3challenge.siam.org/what-is-math-modeling/</a></small>



## Ref
https://github.com/BENAGP/Models-for-ICM-MCM
https://www.yooongchun.com/2018/07/09/wo-de-shu-xue-jian-mo-zhi-lu/

[数学建模常用算法总结 - 夜雨星驰的文章 - 知乎]: https://zhuanlan.zhihu.com/p/560364156
- 数据处理：插值、拟合、筛选、预测
	- 拟合以及插值还有逼近是数值分析的三大基础工具，通俗意义上它们的区别在于：拟合是已知点列，从整体上靠近它们；插值是已知点列并且完全经过点列；逼近是已知曲线，或者点列，通过逼近使得构造的函数无限靠近它们。利用插值和拟合可以大致明白数据的变化规律，也可以补全一些缺失值。
	- 插值与拟合有：Lagrange插值、Newton插值、Hermite插值、三次样条插值、线性最小二乘法等
	- 参数估计（点估计、极大似然估计、Bayes估计）
	- 假设检验（U-检验、T-检验、卡方检验、F-检验、最优性检验、分布拟合检验）
	- 方差分析（单因素、多因素、相关性检验）
	- 经验分布函数、正交试验
- 数据分析：方差分析、回归分析、层次分析法、判别分析、多元分析
	- 回归分析预测
		- 一般常见的回归算法：（一元线性回归、多元线性回归MLR、非线性回归、多元逐步回归MSR、主元回归法PCR、部分最小二乘回归法PLSR）
	- 概率方法：
		- 马尔可夫预测
	- 时间序列预测
	- 小波分析预测
	- 混沌序列预测
	- 多元分析
		- 聚类分析：聚类分析是根据在数据中发现的描述对象及其关系的信息，将数据对象分组。目的是，组内的对象相互之间是相似的（相关的），而不同组中的对象是不同的（不相关的）。组内相似性越大，组间差距越大，说明聚类效果越好。
		- 因子分析：研究从变量群中提取共性因子的统计技术，这里的共性因子指的是不同变量之间内在的隐藏因子，因子分析的过程其实是寻找共性因子和个性因子并得到最优解释的过程。
		- 主成分分析：主成分分析是因子分析处理过程的一部分，可以通过分析各指标数据的变化情况，然后将数据变化相似的指标用一种具有代表性的来代替，从而达到降维的目的。
		- 判别分析：距离判别、Fisher判别、Bayes判别
		- 典型相关分析
		- 对应分析
		- 多维标度法
		- 偏最小二乘回归分析
	- 关联与因果
		- 需要对数据间的变量进行典型相关分析（例：因变量组 Y1、Y2、Y3、Y4，自变量组 X1、X2、X3、X4，各自变量组相关性比较强，问哪一个因变量与哪一个自变量关系比较紧密？），通过关联分析可以对变量进行降维处理。
		- （1）、灰色关联分析方法
		- （2）、Sperman 或 kendall 等级相关分析
		- （3）、Person 相关（样本点的个数比较多）
		- （4）、Copula 相关（金融数学，概率密度）
		- （5）、标准化回归分析：若干自变量，一个因变量，问哪一个自变量与因变量关系比较紧密
- 优化算法：
	- 神经网络
	- 现代优化算法（贪婪算法、禁忌搜索、模拟退火、遗传算法、人工神经网络、蚁群算法、粒子群算法、人群搜索算法、人工免疫算法、集成算法、TSP问题、QAP问题、JSP问题）
	- 量子优化算法
		- 模糊逼近、动态加权、ES、DWRR、序列分析、主成分分析、因子分析、聚类分析、灰色关联分析法、数据包络分析法（DEA）
- 目标规划问题：整数规划、线性规划、非线性规划、动态规划
	- 线性规划（运输问题、指派问题、对偶理论、灵敏度分析）
	- 整数规划（分支定界、枚举试探、蒙特卡洛）
	- 非线性规划（约束极值、无约束极值）
		- 非线性规划包括：无约束问题、约束极值问题
		- 智能优化算法包括：模拟退火算法、遗传算法、改进的遗传算法、禁忌搜索算法、神经网络、粒子群、蚁群等
	- 目标规划（单目标、多目标）
	- 动态规划（动态、静态、线性动规、区域动规、树形动规、背包动规）
	- 动态优化（变分法）
- 图与网络
	- 最小生成树（prim算法、Kruskal算法）
	- 最短路径（Dijkstra算法、Floyed算法（弗洛伊德算法）、Floyd-Warshall算法、Bellman-Ford算法、SPFA算法）
	- 匹配问题（匈牙利算法）
	- Euler图和Hamilton图
	- 网络流（最大流问题、最小费用最大流问题）
- 方程建模：微分方程、偏微分方程、差分方程
	- 微分方程（Malthus人口模型、Logistic模型、战争模型）
	- 稳定状态模型（Volterra 模型）
	- 常微分方程的解法（离散化、Euler方法、Runge—Kutta方法、线性多步法）
	- 差分方程（蛛网模型、遗传模型）
	- 偏微分方程数值解（定解问题、差分解法、有限元分析）
- 分类算法
	- 支持向量机：实现是通过某种事先选择的非线性映射（核函数）将输入向量映射到一个高维特征空间，在这个空间中构造最优分类超平面，主要用于分类。
	- 逻辑回归：逻辑回归也称作logistic回归分析，是一种广义的线性回归分析模型，属于机器学习中的监督学习。其推导过程与计算方式类似于回归的过程，但实际上主要是用来解决二分类问题（也可以解决多分类问题）。通过给定的n组数据（训练集）来训练模型，并在训练结束后对给定的一组或多组数据（测试集）进行分类。
	- 决策树：可以当作一种基本的分类与回归方法，在分类问题中，表示基于特征对实例进行分类的过程，可以认为是if-then的集合，也可以认为是定义在特征空间与类空间上的条件概率分布。
	- 神经网络，神经网络同样可以用作分类，且效果不错，神经网络的分类器种类繁多，有需求的可以去了解相关的神经网络分类算法。
	- 随机森林：随机森林是机器学习中十分常用的算法，也是Bagging集成策略中最实用的算法之一。首先对数据集进行随机采样，分别训练多个树模型，最终将其结果整合在一起即可。
- 模糊数学模型
- 排队论与计算机仿真
- 图像处理
- 其他方法
	-  模糊综合评判
		- 不建议单独使用，评价一个对象优、良、中、差等层次评价，评价一个学校等，不能排序
	- 层次分析法（AHP）
		- 不建议单独使用作决策，去哪旅游，通过指标，综合考虑作决策
	- 数据包络（DEA ）分析法
		- 综合评价类优化问题，对各省发展状况进行评判，多输入多输出，数据量大，针对一个优化系统，得到的结果较为客观。这个方法特别适用于多输入多输出的大数据评价类问题中，效果特别好。
	- 秩和比综合评价法和熵权法
		- 秩和比综合评价法是评价各个对象并排序，但要求指标间关联性不强；熵权法是根据各指标数据变化的相互影响，来进行赋权。两者在对指标处理的方法类似。
	- 优劣解距离法(TOPSIS 法)
		- 其基本原理，是通过检测评价对象与最优解、最劣解的距离来进行排序，若评价对象最靠近最优解同时又最远离最劣解，则为最好；否则为最差。其中最优解的各指标值都达到各评价指标的最优值。最劣解的各指标值都达到各评价指标的最差值。
	- 投影寻踪综合评价法
