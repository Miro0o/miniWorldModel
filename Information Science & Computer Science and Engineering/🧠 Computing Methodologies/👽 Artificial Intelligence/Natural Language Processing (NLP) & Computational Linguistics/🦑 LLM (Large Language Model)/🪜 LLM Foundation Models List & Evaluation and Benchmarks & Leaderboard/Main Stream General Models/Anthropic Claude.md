# # Anthropic Claude

[TOC]



## Res
📨 https://www.anthropic.com/index/introducing-claude
🏠 https://claude.ai/


### Related Topics


### Other Resources
https://red.anthropic.com/2026/mythos-preview/
Assessing Claude Mythos Preview’s cybersecurity capabilities | April 7, 2026
Nicholas Carlini, Newton Cheng, Keane Lucas, Michael Moore, Milad Nasr, Vinay Prabhushankar, Winnie Xiao



## Intro



## Ref
[Assessing Claude Mythos Preview’s cybersecurity capabilities]: https://red.anthropic.com/2026/mythos-preview/

[Our evaluation of Claude Mythos Preview’s cyber capabilities | AISI]: https://www.aisi.gov.uk/blog/our-evaluation-of-claude-mythos-previews-cyber-capabilities
![](../../../../../../../Assets/Pics/Pasted%20image%2020260425235529.png)
<small>Figure 3: Average number of steps completed on 'The Last Ones' (a 32-step simulated corporate network attack) as a function of total token spend. Each line represents a different model, with the shaded region showing the min–max range across all runs at each token budget. The vertical dashed line at 10M tokens marks where sample sizes decrease for several models. Mythos Preview, Opus 4.6, and GPT-5.4 average 10 runs up to 100M tokens. Opus 4.5, GPT-5.1 Codex, and Sonnet 4.5 each average 15 runs up to 10M and 5 runs up to 100M tokens. GPT-5.3-Codex averages 10 runs up to 10M and 5 runs up to 100M tokens. Sonnet 3.7 and GPT-4o average 10 runs up to 10M tokens only. Models continue making progress with increased token budgets across the token budgets tested. Grey horizontal lines indicate significant milestones in the attack chain.</small>

[90分钟攻破20年Linux漏洞！Claude 5.0惊现内测，Anthropic都害怕]: https://mp.weixin.qq.com/s/k9QGE4kgcNmmxX3BqFuHQg

[刚刚，Claude4小时血洗全球最安全系统！人类最后防线失守 | 机器学习算法与自然语言处理]: https://mp.weixin.qq.com/s/VGz3UNxeB_dXpfmSd11eIw
[美英报告称Mythos模型无限压缩漏洞披露到武器化时间窗口 | 奇安网情局]: https://mp.weixin.qq.com/s/bJU8T8sILzvZsc68L05mHg
美国网络安全领域权威机构与英国人工智能安全研究所（AISI）最新报告显示，Anthropic公司Claude Mythos预览版模型在自主网络攻击能力上实现突破，在夺旗挑战及端到端网络攻击模拟中表现远超以往模型，极大缩短了漏洞从发现到武器化的时间窗口，使得攻击方获得非对称优势。相关报告建议，防御体系必须加快采用人工智能驱动的手段，构建弹性架构，以应对即将到来的大规模漏洞利用浪潮。

美国云安全联盟（CSA）、SANS研究所和开放式全球应用程序安全项目（OWASP）4月12日联合发布题为《“人工智能漏洞风暴”：构建“Mythos准备就绪”的安全计划》称，Mythos模型在技术和战略层面都与以往的能力截然不同，该模型展现出三种与众不同的能力：一是无需框架搭建即可进行漏洞利用；二是能够识别复杂的连锁漏洞；三是仅需单次提示即可完成更多任务，无需复杂的框架搭建或代理配置。

英国人工智能安全研究所结合夺旗演练和网络靶场测试发现，Mythos模型不仅提高了非专家和初级技术人员的能力上限，还缩小了两者间黑客技术水平的整体差距。在夺旗竞赛方面，没有任何大模型在2025年4月前能够完成任何专家级夺旗题目，而Mythos成功解决了其中近四分之三（73%）的题目；在网络靶场测试方面，Mythos模型是首个彻底解决包含32个步骤的整体网络攻击模拟问题的模型，在10次尝试中成功了3次，平均完成了32步中的22步，而表现次优的Claude Opus 4.6模型平均只完成了16步。英国人工智能安全研究所指出，Mythos预览版模型在评估范围内也展现出一些网络能力上的不足，例如无法完成以运营技术为重点的网络靶场“冷却塔”的测试，但这并不一定意味着该模型在运营技术环境中执行攻击的能力很差，该模型只是在该靶场的IT部分遇到了困难；Mythos预览版模型在网络靶场上的优异表现表明，它在获得网络访问权限的前提下，至少能够自主攻击小型、防御薄弱且易受攻击的企业系统。

美国网络安全权威机构报告提出，基于人工智能的攻击代表着攻防方式的结构性转变，而且这种转变不会逆转，Mythos模型代表人工智能驱动的漏洞发现和利用正加速发展的趋势；该模型能够自主地在主要操作系统和浏览器中发现数千个关键漏洞，无需人工指导即可生成可用的漏洞利用程序，并支持自主攻击编排，所有这些都以超越以往任何能力的速度和规模实现；人工智能降低了发现和利用漏洞的成本和技能门槛，漏洞披露到武器化的时间正在无限缩短，以前需要国家级资源才能实现的能力现在正变得触手可及，使得攻击者获得了非对称优势；短期内，攻击者利用人工智能发现和利用漏洞的速度比防御者修复漏洞的速度更快，因此防御方“很可能不堪重负”。报告提出，当前的补丁周期、响应流程和风险指标无法应对最新网络威胁发展动态，防御方必须做好“Mythos准备就绪”的准备，重点包括三项：一是构建弹性架构，限制攻击者利用漏洞的能力，控制被利用后的影响；二是强化主动发现，在对手或供应商公告发布前，自行发现更多漏洞；三是实施快速响应，应对大规模安全事件，减少业务中断。英国人工智能安全研究所则指出，Mythos模型测试凸显出网络安全基础知识的重要性，例如定期应用安全更新、实施强有力的访问控制、进行安全配置以及全面记录日志；未来的前沿模型将更加强大，因此立即投资于网络防御至关重要；人工智能网络能力具有双重用途，在带来安全挑战的同时，也能帮助实现防御方面的颠覆性改进。