# WAF (Web Application Firewall) (Web IPS)

[TOC]



## Res
https://github.com/0xInfection/Awesome-WAF
🔥 Web-application firewalls (WAFs) from security standpoint.



## Intro
> WAF的功能: 对Web特有入侵方式的加强防护，如DDOS防护、SQL注入、XML注入、XSS等。由于重点是防SQL注入，也有人称为SQL防火墙。
> 
> 由于是应用层而非网络层的入侵，从技术角度都应该称为Web IPS，而不是Web防火墙。

### WAF Challenges
Web防火墙最大的挑战是**识别率**。这个指标不是一个容易测量的指标，因为绕过Web防火墙后入侵成功者一般不会大肆张扬，比如给网页挂马。
- 对于已知的攻击方式，可以给出识别率；
- 对未知的攻击方式，识别率可用性不大。



## WAF Deployment
Web防火墙产品部署在Web服务器的前面，串行接入，不仅在硬件性能上要求高，而且不能影响Web服务，所以HA功能、Bypass功能都是必须的，而且还要与负载均衡、Web Cache等Web服务器前的常见的产品协调部署。



## WAF Services
**Web**防火墙的主要技术是对入侵的检测能力，尤其是对**Web**服务入侵的检测，有下面几种方式


### 1️⃣ Proxy Service（代理服务）
代理方式本身就是一种安全网关，基于会话的双向代理，中断了用户与服务器的直接连接，适用于各种加密协议，这也是**Web**的**Cache**应用中最常用的技术。

代理方式防止了入侵者的直接进入，对**DDOS**攻击可以抑制，对非预料的“特别”行为也有所抑制。


### Anomaly-Based WAF (Black-list)
#### 2️⃣ Feature Recognition (Static)（特征检测）
识别出入侵者行为特征是防护的前提。

应用信息没有“标准”，但每个软件、行为都有自己的特有属性，病毒与蠕虫的识别就采用此方式。

难点：每种攻击都自己的特征，数量比较庞大，相似度大，细微差别不易被辨识出来，从而导致误报的可能性也大。

虽然目前恶意代码的特征呈指数型增长，安全界声言要淘汰此项技术，但目前应用层的识别还没有特别好的方式。
##### (Pattern Recognition) Algorithm Enhanced Recognition
问题的导出：基于特征识别的局限性
- 对攻击类型进行归类，相同类的特征进行模式化，不再是单个特征的比较，算法识别有些类似模式识别；
- 算法识别是进行语义理解，而不是靠“长相”识别。

这种方法对攻击方式依赖性很强，如**SQL**注入、**DDOS**、**XSS**等都开发了相应的识别算法。

几种经典的模式识别算法
1. K-Nearest Neighbor http://courses.cs.tamu.edu/rgutier/cs790_w02/l8.pdf
2. Bayes Classifier http://www.cs.mcgill.ca/~mcleish/644/main.html
3. Principle Component Analysis http://blog.csdn.net/ayw_hehe/archive/2010/07/16/5736659.aspx
4. Linear Discriminant Analysis http://www.csd.uwo.ca/~olga/Courses//CS434a_541a//Lecture8.pdf
5. Non-negative Matrix Factorization http://chnfyn.blog.163.com/blog/static/26954632200751625243295/
6. Gaussian Mixture Model http://neural.cs.nthu.edu.tw/jang/books/dcpr/doc/08gmm.pdf

#### 3️⃣ Pattern Matching (Dynamic)（模式匹配）
- 模式匹配是IDS中传统的技术实现方案，把攻击行为归纳成一定模式，匹配后能确定是入侵行为，当然模式的定义有一定的难度。
- 协议模式是其中简单的，是按标准协议的规程来定义模式；
- 行为模式匹配，但难度大。


### Normal-Based WAF (White-list)
#### 4️⃣ Self-learning（自学习）
技术原理：
- 建立正常模式：通过一段时间的用户访问，WAF记录了常用网页的访问模式，如一个网页中有几个输入点，输入的是什么类型的内容，通常情况的长度是多少等等，在学习完毕后，定义出一个网页的正常使用模式。
- 执行：当有用户突破了所定义的正常使用模式，WAF就会根据预先定义的方式预警或阻断。
	- 一般的帐号输入不应该有特殊字符，而XML注入时需要有“<”之类的语言标记
	- 密码长度一般不超过20位，在SQL注入时加入代码会很长，同样突破了网页访问的模式

通过对B/S端双向流量来学习Web服务的用户行为模式，建立用户正常模型
##### Machine-learning /Deep Network Based Abnamaly Recognition
传统Web入侵检测技术通过维护规则集对入侵访问进行拦截局限性大，且基于以往知识的规则集难以应对0day攻击。

机器学习应用于Web入侵检测也存在挑战，其中**最大的困难就是标签数据的缺乏**。尽管有大量的正常访问流量数据，但Web入侵样本稀少，且变化多样，对模型的学习和训练造成困难。

目前大多数Web入侵检测都是基于无监督的学习方法，针对大量正常日志建立模型(Profile)，而与正常流量不符的则被识别为异常。这个思路与拦截规则的构造恰恰相反。拦截规则意在识别入侵行为，因而需要在对抗中“随机应变”。

而基于Profile的方法旨在建模正常流量，在对抗中“以不变应万变”，且更难被绕过。

![](../../../../../../../../../Assets/Pics/Screenshot%202023-12-16%20at%2011.37.31AM.png)

###### **Profile**的建立
- **基于统计学习模型**。基于统计学习的Web异常检测，通常需要对正常流量进行数值化的特征提取和分析。特征例如，URL参数个数、参数值长度的均值和方差、参数字符分布、URL的访问频率等等。接着，通过对大量样本进行特征分布统计，建立数学模型，进而通过统计学方法进行异常检测。
	- 基于统计学习模型的方法，首先要对数据建立特征集，然后对每个特征进行统计建模。对于测试样本，首先计算每个特征的异常程度，再通过模型对异常值进行融合打分，作为最终异常检测判断依据
	- 特征：
		- 特征1: 参数值**value**长度 模型：长度值分布，均值**μ**，方差**σ2**，利用切比雪夫不等式计算异常值**p**
		- 特征2: 字符分布：对字符分布建立模型，通过卡方检验计算异常值**p**
		- 特征3: 参数缺失：建立参数表，通过查表检测参数错误或缺失
		- 特征4: 参数顺序：参数顺序有向图，判断是否有违规顺序关系
			- ![](../../../../../../../../../Assets/Pics/Screenshot%202023-11-24%20at%209.25.58AM.png)
		- 特征5: 访问频率（单IP的访问频率，总访问频率）：时段内访问频率分布，均值μ，方差σ2，利用切比雪夫不等式计算异常值p
		- 特征6： 访问时间间隔： 间隔时间分布，通过卡方检验计算异常值p
			- 最终，通过异常打分模型将多个特征异常值融合，得到最终异常打分
- **基于文本分析的机器学习模型**。Web异常检测归根结底还是基于日志文本的分析，因而可以借鉴NLP中的一些方法思路，进行文本分析建模。
	- **URL**参数输入的背后，是后台代码的解析，通常来说，每个参数的取值都有一个范围，其允许的输入也具有一定模式。由于异常流量和正常流量在参数、取值长度、字符分布上都很相似，基于上述特征统计的方式难以识别。进一步看，正常流量尽管每个都不相同，但有共同的模式，而异常流量并不符合。
		- ![](../../../../../../../../../Assets/Pics/Screenshot%202023-12-16%20at%2011.43.04AM.png)
	- 比较成功的是基于隐马尔科夫模型(HMM)的参数值异常检测。
- **基于单分类模型**。由于Web入侵黑样本稀少，传统监督学习方法难以训练。基于白样本的异常检测，可以通过非监督或单分类模型进行样本学习，构造能够充分表达白样本的最小模型作为Profile，实现异常检测。
	- 这类方法中，比较成功的应用是单类支持向量机(one-class SVM)
	- 成功案例：**McPAD**的方案
		- 略
- **基于聚类模型**。通常正常流量是大量重复性存在的，而入侵行为则极为稀少。因此，通过Web访问的聚类分析，可以识别大量正常行为之外，小簇的异常行为，判断为入侵。

## Ref
[CS259D: Data Mining for CyberSecurity]:  http://web.stanford.edu/class/cs259d/
[楚安，数据科学在Web威胁感知中的应用]:  http://www.jianshu.com/p/942d1beb7fdd

McPAD : A Multiple Classifier System for Accurate
Payload-based Anomaly Detection, Roberto Perdisci

AI2 : Training a big data machine to defend, Kalyan
Veeramachaneni
