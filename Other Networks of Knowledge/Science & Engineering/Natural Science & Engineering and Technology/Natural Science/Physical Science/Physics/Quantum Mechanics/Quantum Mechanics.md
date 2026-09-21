# Quantum Mechanics

[TOC]



## Res
### Related Topics
↗ [Hilbert Space](../../../../../../../Information%20Science%20&%20Computer%20Science%20and%20Engineering/🧮%20Mathematics/🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/🛸%20Hybrid%20Algebraic%20Structures/Hilbert%20Space.md)

↗ [Quantum Computing (and Communication)](../../../../../../../Information%20Science%20&%20Computer%20Science%20and%20Engineering/🧠%20Computing%20Methodologies/Quantum%20Computing%20(and%20Communication)/Quantum%20Computing%20(and%20Communication).md)
↗ [Quantum Cryptography & Post-Quantum Cryptography (PQ)](../../../../../../../Information%20Science%20&%20Computer%20Science%20and%20Engineering/CyberSecurity/🚬%20Cryptology%20&%20Secure%20Communication/🤐%20Cryptography/Quantum%20Cryptography%20&%20Post-Quantum%20Cryptography%20(PQ)/Quantum%20Cryptography%20&%20Post-Quantum%20Cryptography%20(PQ).md)

↗ [Philosophy & Its History](../../../../../../♂%20Philosophy%20&%20Its%20History/Philosophy%20&%20Its%20History.md)
↗ [Buddhism (Buddha Dharma)](../../../../../../♂%20Philosophy%20&%20Its%20History/Classical%20Philosophy/🙏🏿%20Global%20Religions/Buddhism%20(Buddha%20Dharma)/Buddhism%20(Buddha%20Dharma).md)


### Learning Resources
https://www.rivercitymalone.com/wp-content/uploads/2011/12/David-Albert-Quantum-Mechanics-Experience-1992.pdf
Quantum Mechanicsand Experience
David Z Albert

【麻省理工：量子物理学 | Quantum physics】 https://www.bilibili.com/video/BV1D2xjzjEFt/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2013/pages/syllabus/
- There are many good texts on introductory quantum mechanics. Which text is most appropriate for you depends on your interests and goals. To give you some choice, equivalent readings will be assigned each week from each of the following four texts:
	- Eisberg, Robert M., and Robert Resnick. _Quantum Physics of Atoms, Molecules, Solids, Nuclei, and Particles_. Wiley, 1985. ISBN: 9780471873730.
	- Liboff, Richard L. _Introductory Quantum Mechanics_. Addison Wesley, 2002. ISBN: 9780805387148.
	- Gasiorowicz, Stephen. _Quantum Physics_. John Wiley & Sons, 2003. ISBN: 9780471429456.
	- Shankar, Ramamurti. _Principles of Quantum Mechanics_. Springer, 2008. ISBN: 9780306447907.
- In addition, I recommend the following as useful and entertaining references:
	- Dirac, Paul Adrien Maurice. _The Principles of Quantum Mechanics_. Clarendon Press, 2011. ISBN: 9780198520115.  
		- A beautiful text, strongly recommended.
	- Griffiths, David J. _Introduction to Quantum Mechanics_. Upper Saddle River, Pearson Prentice Hall, 2005. ISBN: 9780131118928. [Preview with [Google Books](http://books.google.com/books?id=9sqIaRGx_EoC&printsec=frontcover)]  
		- A very popular undergraduate text.
	- Feynman, Richard P., Robert B. Leighton, and Matthew L. Sands. _The Feynman Lectures on Physics_. Addison Wesley, 1989. ISBN: 9780201500646.  
		- Read again and again.
	- Albert, David Z. _Quantum Mechanics and Experience_. Harvard University Press, 1994. ISBN: 9780674741133. [Preview with [Google Books](http://books.google.com/books?id=HYEZD0Mh8JEC&printsec=frontcover)]  
		- Chapters 1–3 provide an elegant introduction for philosophers; avoid the later chapters.


### Other Resources
https://www.systemsci.org/jinshanw/wp-content/uploads/sites/2/2021/03/%E9%87%8F%E5%AD%90%E5%8A%9B%E5%AD%A6%E6%97%A0%E5%9F%BA%E7%A1%80%E5%85%A5%E9%97%A8%E8%AE%B2%E7%A8%BF.pdf#page=1.00
量子力学入门
吴金闪 北京师范大学 系统科学学院
September 7, 2019
- ![](../../../../../../../Assets/Pics/Screenshot%202026-03-30%20at%2019.14.29.png)



## Intro
> 🔗 https://en.wikipedia.org/wiki/Quantum_mechanics

**Quantum mechanics** is the fundamental physical [theory](https://en.wikipedia.org/wiki/Scientific_theory "Scientific theory") that describes the behavior of matter and of light; its unusual characteristics typically occur at and below the scale of [atoms](https://en.wikipedia.org/wiki/Atom "Atom"): 1.1  It is the foundation of all **quantum physics**, which includes [quantum chemistry](https://en.wikipedia.org/wiki/Quantum_chemistry "Quantum chemistry"), [quantum biology](https://en.wikipedia.org/wiki/Quantum_biology "Quantum biology"), [quantum field theory](https://en.wikipedia.org/wiki/Quantum_field_theory "Quantum field theory"), [quantum technology](https://en.wikipedia.org/wiki/Quantum_technology "Quantum technology"), and [quantum information science](https://en.wikipedia.org/wiki/Quantum_information_science "Quantum information science").

Quantum mechanics can describe many systems that [classical physics](https://en.wikipedia.org/wiki/Classical_physics "Classical physics") cannot. Classical physics can describe many aspects of nature at an ordinary ([macroscopic](https://en.wikipedia.org/wiki/Macroscopic "Macroscopic") and [(optical) microscopic](https://en.wikipedia.org/wiki/Microscopic_scale "Microscopic scale")) scale, however is insufficient for describing them at very small [submicroscopic](https://en.wikipedia.org/wiki/Submicroscopic "Submicroscopic") (atomic and [subatomic](https://en.wikipedia.org/wiki/Subatomic "Subatomic")) scales. Classical mechanics can be derived from quantum mechanics as an approximation that is valid at ordinary scales.

**Quantum systems** have [bound](https://en.wikipedia.org/wiki/Bound_state "Bound state") states that are [quantized](https://en.wikipedia.org/wiki/Quantization_\(physics\) "Quantization (physics)") to [discrete values](https://en.wikipedia.org/wiki/Discrete_mathematics "Discrete mathematics") of [energy](https://en.wikipedia.org/wiki/Energy "Energy"), [momentum](https://en.wikipedia.org/wiki/Momentum "Momentum"), [angular momentum](https://en.wikipedia.org/wiki/Angular_momentum "Angular momentum"), and other quantities, in contrast to classical systems where these quantities can be measured continuously. Measurements of quantum systems show characteristics of both [particles](https://en.wikipedia.org/wiki/Particle "Particle") and [waves](https://en.wikipedia.org/wiki/Wave "Wave") ([wave–particle duality](https://en.wikipedia.org/wiki/Wave%E2%80%93particle_duality "Wave–particle duality")), and there are limits to how accurately the value of a physical quantity can be predicted prior to its measurement, given a complete set of initial conditions (the [uncertainty principle](https://en.wikipedia.org/wiki/Uncertainty_principle "Uncertainty principle")).

Quantum mechanics arose gradually from theories to explain observations that could not be reconciled with [classical physics](https://en.wikipedia.org/wiki/Classical_physics "Classical physics"), such as [Max Planck](https://en.wikipedia.org/wiki/Max_Planck "Max Planck")'s solution in 1900 to the [black-body radiation](https://en.wikipedia.org/wiki/Black-body_radiation "Black-body radiation") problem, and the correspondence between energy and frequency in [Albert Einstein](https://en.wikipedia.org/wiki/Albert_Einstein "Albert Einstein")'s [1905 paper](https://en.wikipedia.org/wiki/Annus_Mirabilis_papers#Photoelectric_effect "Annus Mirabilis papers"), which explained the [photoelectric effect](https://en.wikipedia.org/wiki/Photoelectric_effect "Photoelectric effect"). These early attempts to understand microscopic phenomena, now known as the "[old quantum theory](https://en.wikipedia.org/wiki/Old_quantum_theory "Old quantum theory")", led to the full development of quantum mechanics in the mid-1920s by [Niels Bohr](https://en.wikipedia.org/wiki/Niels_Bohr "Niels Bohr"), [Erwin Schrödinger](https://en.wikipedia.org/wiki/Erwin_Schr%C3%B6dinger "Erwin Schrödinger"), [Werner Heisenberg](https://en.wikipedia.org/wiki/Werner_Heisenberg "Werner Heisenberg"), [Max Born](https://en.wikipedia.org/wiki/Max_Born "Max Born"), [Paul Dirac](https://en.wikipedia.org/wiki/Paul_Dirac "Paul Dirac") and others. The modern theory is formulated in various [specially developed mathematical formalisms](https://en.wikipedia.org/wiki/Mathematical_formulations_of_quantum_mechanics "Mathematical formulations of quantum mechanics"). In one of them, a mathematical entity called the [wave function](https://en.wikipedia.org/wiki/Wave_function "Wave function") provides information, in the form of [probability amplitudes](https://en.wikipedia.org/wiki/Probability_amplitude "Probability amplitude"), about what measurements of a particle's energy, momentum, and other physical properties may yield.

![](../../../../../../../Assets/Pics/Pasted%20image%2020260326231848.png)
<small> [Wave functions](https://en.wikipedia.org/wiki/Wave_function "Wave function") of the [electron](https://en.wikipedia.org/wiki/Electron "Electron") in a hydrogen atom at different energy levels. Quantum mechanics cannot predict the exact location of a particle in space, only the probability of finding it at different locations. The brighter areas represent a higher probability of finding the electron. </small>

> [!TIP]
> 🔗 https://chatgpt.com/share/69c6cc40-57f0-838d-bf73-67f5dc19cbbb
>
> 量子力学首先是一套描述微观世界的基本理论。它研究的对象包括电子、光子、原子、分子，以及由此延伸出的化学键、半导体、激光、超导和现代电子器件。它之所以出现，是因为经典物理无法解释一些关键现象，比如黑体辐射、光电效应、原子光谱的离散性，以及电子为什么不会掉进原子核。量子力学不是玄学，恰恰相反，它是现代科学中最成功、预测最精确的理论之一。
>
> ##### 简单介绍
> 理解量子力学时，最先要放下的直觉，就是“微观世界像许多很小的小球在运动”。经典直觉默认，一个东西总有确定位置、确定速度，不看它时它也已经以某种确定方式存在，而测量只是把这些预先存在的性质读出来。量子力学则告诉我们，微观对象并不总能用这种图景理解。更合适的说法是：微观系统由**量子态**描述，而量子态更像一个“可能性结构”。它不是粒子真实样子的一张照片，而是关于各种可能测量结果的总体编码。
> 
> 在位置表象中，量子态常写成**波函数**。波函数本身不是简单的“物质波”，而是一个数学对象；它的模平方给出的是在某个位置附近找到粒子的概率密度。也就是说，量子力学一开始给出的往往不是“它现在确定就在这里”，而是“如果你去测，它会以这样的概率分布出现”。因此，量子力学和经典力学最根本的差别之一，就是前者不是直接从确定点出发，而是从态和概率结构出发。
> 
> 量子力学最核心的结构之一是**叠加原理**。如果两个状态都可能，那么它们的线性组合也是可能状态。叠加并不意味着“粒子一半在这里、一半在那里”这种过于形象化的说法，更准确地讲，它意味着系统处于一种尚未被测量区分开的可能性组合中。一个比较直观的比喻是和弦：和弦不是单独一个音，而是多个音以特定方式同时存在；测量则像把其中一个结果具体显现出来。但必须强调，叠加是严格的数学结构，不应被误解为某种泛泛的“万物合一”。
> 
> 量子态并不是静止不动的，它会随时间演化。这个演化由**薛定谔方程**控制。直观上可以把它理解为量子世界中的“运动方程”：如果没有测量的干预，量子态会按照确定的规律连续演化。于是量子理论内部存在一种张力：一方面，量子态本身按照平滑而确定的规律演化；另一方面，真正进行测量时，结果却表现为概率性的。这正是量子测量问题之所以重要的原因。
> 
> 在量子力学中，位置、动量、能量等物理量不再只是普通数值，而是用**算符**表示。一个物理量可以取哪些值，与算符的**本征值**有关；如果系统处于某个算符的本征态，那么测量这个物理量时就会得到确定结果。定态就是一个典型例子：如果系统处于哈密顿量的本征态，那么它的概率分布随时间不变。定态并不是说“一切静止”，而是说某些可观测的统计性质不变。原子的离散能级正是这样出现的。如果一个系统是多个定态的线性组合，那么它通常就不再是单一定态，不同本征态积累不同相位后会产生干涉，因此概率分布常常会随时间变化。
> 
> 测量是量子力学中最容易引起误解的部分。对处于叠加态的系统测量某个物理量时，得到的不是“叠加本身”，而是某个本征值，并且各结果出现的概率由相应振幅的平方给出。传统上人们会用“坍缩”来描述这个过程。这里特别需要澄清的是，“观察者”并不一定意味着人的意识。现代物理的主流理解首先指的是测量装置和系统之间的物理相互作用，而不是“人的念头创造现实”。把量子力学理解成“意识决定世界”通常是一种误读。
> 
> 另一个核心概念是**不确定性原理**。它并不是说我们的仪器不够精确，而是说量子系统本身不允许位置和动量同时被无限精确地确定。你越把位置压得很准，动量分布通常就越散。这说明量子世界的“不确定”不是知识不足造成的，而是理论结构本身的一部分。
> 
> 双缝实验是量子力学最经典的例子。即使电子一个一个地通过双缝，最终屏幕上仍会积累出干涉条纹，这说明电子的行为不能简单地理解为“一颗小球走了一条确定路径”。如果你试图测量它到底走哪条缝，干涉现象往往会消失。这意味着量子态中的不同可能性不是像普通概率那样简单相加，而会像波一样彼此增强或抵消。
> 
> **纠缠**则更进一步挑战经典直觉。如果两个系统相互作用后进入一个整体态，那么这个整体态有时不能拆成“甲的状态乘以乙的状态”的简单组合。此时单独看甲不完整，单独看乙也不完整，只有整体才完整。经典世界里我们习惯先有彼此独立的对象，再有对象之间的关系；量子纠缠则表明，在某些情况下，关系本身比单个对象更基本。
> 
> **量子隧穿**也是一个重要现象。经典上，一个球如果能量不够，就翻不过势垒；量子上，一个粒子即使能量低于势垒高度，也有一定概率出现在另一边。这不是“偷偷穿过去”，而是因为波函数在势垒区域并不严格为零。扫描隧道显微镜、某些核衰变和半导体器件都与此有关。
> 
> 如果把量子力学和经典力学的差别压缩起来，可以说有四点最关键：
> - 第一，状态不再是位置和速度构成的确定点，而是量子态或波函数。
> - 第二，结果不再总是确定值，而通常是概率分布。
> - 第三，叠加存在，也就是说系统可以处于尚未被测量区分开的可能性组合中。
> - 第四，测量方式和整体关系本身变得重要，性质不再总像经典直觉里那样是预先完整存在的。
> 
> 从数学上看，量子力学有一套清晰骨架：系统状态位于**希尔伯特空间**中；状态由**态矢**表示；可观测量由**厄米算符**表示；测量结果是**算符本征值**；测量概率由**振幅平方**给出；时间演化由**薛定谔方程**或更一般的**幺正演化**控制。真正入门时，掌握这条骨架非常重要。
> 
> 很多误解都来自跳过基础直觉，直接把量子力学和“意识”“宇宙”“宗教”混在一起。最常见的误解包括：量子力学说明意识创造现实，叠加意味着“什么都既是又不是”，量子力学证明佛教，或者量子世界完全混乱。实际上，这些说法都不准确。量子理论有非常严格的数学结构，只是它的结构不符合经典直觉。
> 
> 如果一定要借助佛教作一些非常松散的类比，它最多只能帮助直觉，而不能当成严格对应。比如，量子态不是固定小球图像，这可以提醒我们不要把现象执成固定实体；叠加态可以启发我们，世界未必总是按日常分别心已经切分完毕的方式存在；纠缠可以让人联想到关系性比孤立实体更重要；测量依赖具体设置，可以让人想到显现与条件有关；不确定性原理则提醒我们，不能总要求现象满足经典式的“固定自性”直觉。但这些都只是启发，而不是映射。尤其要避免几个错误等同：空性不等于不确定性，缘起不等于纠缠，觉知不等于波函数坍缩，常寂光也不等于定态叠加。
> 
> ==如果想更深地理解量子力学，比较合理的路径是先掌握直觉层，再进入数学层，最后才去接触哲学解释。== 直觉层最重要的是双缝实验、波函数与概率、测量、不确定性、定态与能级、纠缠。数学层需要线性代数、复数、本征值与本征向量、微分方程以及希尔伯特空间的基础。哲学层则可以再看哥本哈根解释、多世界解释、去相干、关系量子力学和 QBism。很多人一开始就跳到佛教、意识和宇宙，反而把真正的量子力学弄丢了。
> 
> 在完全不带公式的直觉层面，可以把量子力学概括为一句话：
> > [!important]
> > 微观世界不是由确定的小物体组成，而是由可能性结构组成；测量使其中一种可能性具体化，而系统的行为取决于整体结构和测量方式。粒子不是简单的小球，更像一团分布在空间中的可能性；叠加意味着系统还没有被分解成互斥的确定结果；测量不是单纯“看见”，而是选择一种提问方式，从而使某种结果显现出来；有些属性不能同时无限精确；关系有时比单个对象更基本；不同可能性之间还能发生干涉。
>
> ##### 微观到宏观的过渡
> 从微观过渡到宏观，关键不是“量子力学失效了”，而是量子系统与环境发生强烈相互作用，导致去相干。单个、隔离得很好的电子可以保持细腻的相位关系、显示叠加和干涉；但现实世界中的大系统会持续与空气分子、光子、热振动、周围原子和各种场相互作用，原本那些脆弱的相位关系很快就被破坏。于是，宏观世界里某些“经典状态”会变得极其稳定，而可见的量子叠加效应几乎消失。宏观经典性并不是与量子力学对立的第二套法则，而是量子世界在强相互作用、强去相干条件下涌现出来的一种有效近似。
> 
> 因此，宏观物体不应被理解成“放大了的基本粒子”，而更像是由海量粒子组成、并由相互作用维持的稳定模式。它们的真实方式不是不可分的小块本体，而是结构、模式和动态组织。一个漩涡就是很好的比喻：构成它的水分子不断更换，但“漩涡这个模式”却稳定存在。桌子、石头、生命体，乃至“我”，都更接近这种意义上的真实。
>
> ##### 量子力学和自我意识
> 从物理角度看，“我”不是某个单独基本粒子，而是一个高度复杂、持续自我维持的生物—神经—信息模式。它包括身体结构、新陈代谢、神经网络活动、记忆延续、感知与行动回路，以及自我模型的维持。更准确地说，“我”至少可以分为三个层次：第一是物质层，身体由原子、分子和细胞组成；第二是生物层，这些成分组织成具有代谢、稳态、自修复和自我维持能力的活体；第三是认知层，神经系统进一步形成感知、记忆、预测、语言、反思和自我叙事。所谓“我”，不是某个绝对不变的小核心，而是一个跨时间延续的、多层级涌现出来的稳定自我系统。
> 
> 这并不意味着“我”是假的。更合理的说法是，“我”是真实的，但它真实的方式不是基本粒子式的真实，而是高层模式式的真实。漩涡是真的，生命是真的，语言和国家也是真的，虽然它们都不是一个不可分的物理小块；“我”也属于这种真实。
> 
> 思维则可以理解为大脑这个复杂系统中的动态信息处理过程。它不是“脑子里坐着一个小人”的模型，而是整个系统在实时建模世界、建模身体、建模自己，并据此产生感知、记忆、想象、判断和行动。意识、自我感和念头更像是一种持续活动着的组织模式，而不是一个坚固的小东西。之所以我们会强烈感觉自己是一个统一实体，是因为脑系统不断把分散的视觉、听觉、身体感觉、记忆、欲望和社会反馈整合成一个统一的自我模型。这个“我感”非常真实，也非常有功能，因为它帮助系统维持长期目标、组织记忆、协调行动、与他人互动并承担责任。
> 
> 微观量子性之所以没有把“我”搞散，是因为“我”这个层级并不是靠单个粒子的精确位置维持的，而是靠大量成分的**统计稳定性**、生物组织的**稳态机制**、神经系统的**冗余与误差纠正**，以及与环境的**持续耦合**来维持。就像一杯热水中每个分子都在乱动，但“一杯热水”仍然是稳定对象一样，身体内部的粒子虽然服从量子规律，但“你”作为一个高层组织模式仍然可以高度稳定。
> 
> 因此，比较好的整体图像不是“底层是一团混乱概率云，上层突然神秘地跳出一个坚固的我”，而是：底层由量子态描述的物质通过相互作用形成化学，化学形成生命，生命形成神经系统，神经系统形成自我模型，于是“我”作为一个稳定但过程性的实体一步步涌现出来。换句话说，不是从虚无跳到实体，而是从量子态，到复杂组织，到稳定模式，再到自我与思维，一层一层过渡而来。
> 
> 如果要把上述内容压缩成最简短的总结，可以这样说：
> > [!important]
> > 量子力学告诉我们，微观世界不是由总有确定位置和速度的小球构成，而是由量子态描述的可能性结构构成；这些量子态按照确定规律演化，在测量时给出概率性的具体结果。叠加、干涉、纠缠和不确定性构成了它与经典世界的根本差别。宏观世界之所以看起来稳定，不是因为量子力学失效，而是因为去相干、统计平均和复杂组织使经典行为作为高层近似涌现出来。于是“我”并不是一个神秘的独立实体，而是建立在量子物质基础之上，经由化学、生物学和神经科学逐层形成的稳定自组织模式；思维则是这个系统中的动态信息处理与自我建模过程。


### Overview and Fundamental Concepts
> 🔗 https://en.wikipedia.org/wiki/Quantum_mechanics#Overview_and_fundamental_concepts



> [!TIP]
> 🔗 https://chatgpt.com/share/69caba87-7da0-8387-a3e4-28e9847e45fd
>
> 量子力学是一套以**希尔伯特空间结构**为基础的物理理论，用来描述微观系统（电子、光子、原子等）。它的基本对象不是“粒子的位置和速度”，而是定义在复向量空间中的态向量 $|\psi\rangle \in \mathcal{H}$。这一点构成了它与经典物理的根本区别。
> ##### 一、量子态：从“点”到“向量”
> 在经典力学中，一个系统的状态可以表示为相空间中的一个点：$(x, p)$，而在量子力学中，系统状态是希尔伯特空间中的向量：$|\psi\rangle \in \mathcal{H}$，其物理含义不是“粒子的真实位置”，而是：对所有可能测量结果的概率结构编码。
> 
> 在位置表象中，这个态可以写成波函数：$\psi(x,t)$，并满足概率解释（Born规则）：$P(x) = |\psi(x,t)|^2$。这意味着：状态不是确定值，而是一个定义在测量结果空间上的概率振幅。
> ##### 二、叠加原理：线性结构的核心
> 希尔伯特空间的线性结构意味着：如果 $|\psi_1\rangle, |\psi_2\rangle \in \mathcal{H}$，那么$|\psi\rangle = c_1 |\psi_1\rangle + c_2 |\psi_2\rangle$仍然是一个合法态。这就是叠加原理。
> 
> 关键点：
> - 概率不是直接相加，而是**振幅先相加再取模平方**
> - 因此存在干涉：$|c_1 + c_2|^2 \neq |c_1|^2 + |c_2|^2$
> 
> 这使得==量子系统本质上是 一个带有相位结构的概率理论==
> ##### 三、动力学：薛定谔方程
> 量子态随时间的演化由幺正算符控制，其生成元是哈密顿算符 $\hat{H}$：$$i\hbar \frac{\partial}{\partial t}\psi = \hat{H}\psi$$
> 这表示：
> - 时间演化是线性的  
> - 且保持内积（概率守恒）  
> 
> 即：$\langle \psi(t) | \psi(t) \rangle = 1$
> 
> ##### 四、可观测量与谱结构
> 在量子力学中，物理量对应于厄米算符：
> - 位置：$\hat{x}$
> - 动量：$\hat{p}$
> - 能量：$\hat{H}$
> 
> 测量结果来自算符的谱（本征值）：$\hat{A} |a_i\rangle = a_i |a_i\rangle$
> 如果系统处于态$|\psi\rangle$，测量结果为$a_i$ 的概率为： $P(a_i) = |\langle a_i | \psi \rangle|^2$
> 
> ##### 五、不确定性：非对易结构
> 量子不确定性来源于算符的不对易性：$[\hat{x}, \hat{p}] = i\hbar$
> 由此推出：$$ΔxΔp≥\frac{h}{2}$$
> 这说明：
> - 不确定性不是统计噪声  
> - 而是理论结构本身的限制  
> 
> ##### 六、纠缠：张量积空间
> 复合系统的状态空间是张量积：$\mathcal{H}_{AB} = \mathcal{H}_A \otimes \mathcal{H}_B$
> 纠缠态是不能写成分离形式的状态：$|\psi\rangle \neq |\psi_A\rangle \otimes |\psi_B\rangle$
> 这意味着：
> - 系统整体态不可约分  
> - 局域描述不完备  
> 
> ##### 七、从量子到经典：去相干机制
> 真实系统不是封闭的，而是开放系统： $$\mathcal{H}_{total} = \mathcal{H}_{system} \otimes \mathcal{H}_{environment} $$
> 
> 系统与环境相互作用后，总态演化为：$$|\Psi\rangle = \sum_i c_i |s_i\rangle \otimes |E_i\rangle$$
> 
> 对环境做偏迹（trace out environment）得到约化密度矩阵： $$\rho_S = \text{Tr}_E (|\Psi\rangle \langle \Psi|)$$
> 
> 当环境态近似正交时：$$\langle E_i | E_j \rangle \approx \delta_{ij}$$
> 
> 非对角项消失：$$\rho_S \approx \sum_i |c_i|^2 |s_i\rangle \langle s_i|$$
> 这就是去相干。
> 
> 结果：
> - 叠加 → 经典概率混合  
> - 相位信息 → 消失  
> 
> 因此：==经典世界是量子系统在环境耦合下的有效描述。==
> 
> ##### 八、宏观实体：从态到模式
> 宏观系统可以表示为：
> - 多体量子系统 + 强相互作用 + 去相干  
> 
> 其稳定性来自：
> - 统计平均  
> - 自组织结构  
> - 动态吸引子（attractor）  
> 
> 因此宏观物体更接近：stable pattern in state space
> 
> 而不是：fundamental particle
> 
> ##### 九、“我”的数学化理解
> “我”可以看作一个多层级系统：
> 
> 1. 物理层 $$
> |\Psi\rangle \in \mathcal{H}_{body}
> $$
> 2. 生物层: 非平衡开放系统：$$
> \frac{d\rho}{dt} = \mathcal{L}(\rho)
> $$（李乌维尔方程/主方程形式）
> 3. 认知层: 信息处理系统：
> 	1. 状态空间：$$ S $$
> 	2. 输入输出映射：$$ f: S \rightarrow S $$
> 	3. 形成一个递归系统： $$
> S_{t+1} = f(S_t, input_t)
> $$
> 
> ##### 十、思维：动态信息过程
> 思维可以形式化为：
> - 高维状态空间中的轨迹  
> - 非线性动力系统   $x_{t+1} = F(x_t)$
> - 或连续形式：$\frac{dx}{dt} = F(x)$
> 
> “自我”则对应于：
> - 一个稳定吸引子（attractor）  
> - 或一个持续的闭环结构（feedback loop）  
> 
> ##### 十一、为什么宏观稳定
> 尽管微观遵循量子规律，但宏观稳定来自：
> - 大数定律（law of large numbers）  
> - 去相干（off-diagonal decay）  
> - 稳态结构（fixed points / attractors）  
> 
> 因此： $\text{micro uncertainty} \not\Rightarrow \text{macro instability}$
> 
> ##### 十二、完整结构链条
> 可以形式化为一个层级映射： $\text{Quantum state} \rightarrow \text{Many-body system} \rightarrow \text{Decoherence} \rightarrow \text{Classical phase space} \rightarrow \text{Biological system} \rightarrow \text{Cognitive system}$
> 
> 最终得到： $\text{Self} = \text{emergent stable structure}$
> 
> ##### 十三、与佛教的“弱对应”（非严格）
> 仅作为启发：
> - 量子态 → 非固定实体  
> - 叠加 → 未分化结构  
> - 纠缠 → 关系优先  
> - 测量 → 条件依赖显现  
> 
> 但严格区分：$\text{emptiness} \neq \text{uncertainty}$，$\text{dependent origination} \neq \text{entanglement}$
> 
> ##### 十四、最终总结（数学表达）
> 量子力学可以压缩为：
> - 状态：$|\psi\rangle \in \mathcal{H}$
> - 演化：幺正算符 $U(t)$
> - 测量：投影算符 $P_i$
> - 概率：$P(i) = \langle \psi | P_i | \psi \rangle$
> 
> 宏观世界：$\rho \xrightarrow{\text{decoherence}} \text{classical mixture}$
> 
> “我”：$\text{Self} = \text{stable emergent pattern in a high-dimensional dynamical system}$
> 
> 思维：$\text{Mind} = \text{information dynamics over neural state space}$
> 
> 一句话总结：微观层面是希尔伯特空间中的量子态及其线性演化；宏观世界是通过去相干和统计机制从这些态中涌现出的稳定经典结构；“我”和思维则是建立在这一结构之上的高维动力系统中的稳定模式。


### Mathematical Formulation
> 🔗 https://en.wikipedia.org/wiki/Quantum_mechanics#Mathematical_formulation



## Ref
