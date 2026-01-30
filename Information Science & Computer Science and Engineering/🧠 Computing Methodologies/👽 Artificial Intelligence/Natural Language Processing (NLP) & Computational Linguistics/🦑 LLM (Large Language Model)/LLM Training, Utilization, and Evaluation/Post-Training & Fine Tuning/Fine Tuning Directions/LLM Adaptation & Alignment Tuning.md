# LLM Adaptation & Alignment Tuning

[TOC]



## Res
### Related Topics
↗ [Statistical Learning (Data-Driven) & Machine Learning Methods](../../../../../🗝️%20AI%20Basics%20&%20Major%20Techniques/Statistical%20Learning%20(Data-Driven)%20&%20Machine%20Learning%20Methods/Statistical%20Learning%20(Data-Driven)%20&%20Machine%20Learning%20Methods.md)
- ↗ [Supervised Learning](../../../../../🗝️%20AI%20Basics%20&%20Major%20Techniques/Statistical%20Learning%20(Data-Driven)%20&%20Machine%20Learning%20Methods/Supervised%20Learning/Supervised%20Learning.md)
- ↗ [Reinforcement Learning (RL) & Sequential Decision Making](../../../../../🗝️%20AI%20Basics%20&%20Major%20Techniques/Statistical%20Learning%20(Data-Driven)%20&%20Machine%20Learning%20Methods/Reinforcement%20Learning%20(RL)%20&%20Sequential%20Decision%20Making/Reinforcement%20Learning%20(RL)%20&%20Sequential%20Decision%20Making.md)


### Other Resources



## Intro
> 🔗 Zhao, W. X., Zhou, K., Li, J., Tang, T., Wang, X., Hou, Y., Min, Y., Zhang, B., Zhang, J., Dong, Z., Du, Y., Yang, C., Chen, Y., Chen, Z., Jiang, J., Ren, R., Li, Y., Tang, X., Liu, Z., … Wen, J.-R. (2025). _A Survey of Large Language Models_ (No. arXiv:2303.18223). arXiv. [https://doi.org/10.48550/arXiv.2303.18223](https://doi.org/10.48550/arXiv.2303.18223)

LLMs have shown remarkable capabilities in a wide range of NLP tasks [55, 56, 67, 90]. However, these models may sometimes exhibit unintended behaviors, e.g., fabricating false information, pursuing inaccurate objectives, and producing harmful, misleading, and biased expressions [66, 364]. For LLMs, the language modeling objective pre-trains the model parameters by word prediction while lacking the consideration of human values or preferences. To avert these unexpected behaviors, human alignment has been proposed to make LLMs act in line with human expectations [66, 365]. However, unlike the original pre-training and adaptation tuning (e.g., instruction tuning), such an alignment requires considering very different criteria (e.g., helpfulness, honesty, and harmlessness).  ==It has been shown that alignment might harm the general abilities of LLMs to some extent, which is called alignment tax in related literature [366].  ==


### Alignment Criteria
> ↗ [Trust-worthy AI & LLM Safety and Security](../../../🚮%20LLM%20Applications%20&%20LLM-Driven%20Automation/Trust-worthy%20AI%20&%20LLM%20Safety%20and%20Security/Trust-worthy%20AI%20&%20LLM%20Safety%20and%20Security.md)
> ↗ [Attack Simulation - Red, Blue, Purple, White](../../../../../../../../CyberSecurity/⛈️%20Risk%20Management/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Attack%20Simulation%20-%20Red,%20Blue,%20Purple,%20White/Attack%20Simulation%20-%20Red,%20Blue,%20Purple,%20White.md)

> 🔗 Zhao, W. X., Zhou, K., Li, J., Tang, T., Wang, X., Hou, Y., Min, Y., Zhang, B., Zhang, J., Dong, Z., Du, Y., Yang, C., Chen, Y., Chen, Z., Jiang, J., Ren, R., Li, Y., Tang, X., Liu, Z., … Wen, J.-R. (2025). _A Survey of Large Language Models_ (No. arXiv:2303.18223). arXiv. [https://doi.org/10.48550/arXiv.2303.18223](https://doi.org/10.48550/arXiv.2303.18223)

Recently, there is increasing attention on developing multifarious criteria to regulate the behaviors of LLMs. Here, we take three representative alignment criteria (i.e., helpful, honest, and harmless) as examples for discussion, which have been widely adopted in existing literature [66, 366]. In addition, there are other alignment criteria for LLMs from different perspectives including behavior, intent, incentive, and inner aspects [364], which are essentially similar (or at least with similar alignment techniques) to the above three criteria. It is also feasible to modify the three criteria according to specific needs, e.g., substituting honesty with correctness [116]. Next, we give brief explanations about the three representative alignment criteria: 
- Helpfulness. To be helpful, the LLM should demonstrate a clear attempt to assist users in solving their tasks or answering questions in a concise and efficient manner as possible. At a higher level, when further clarification is needed, the LLM should demonstrate the capability of eliciting additional relevant information through pertinent inquiries and exhibit suitable levels of sensitivity, perceptiveness, and prudence [366]. Realizing the alignment of helpful behavior is challenging for LLMs since it is difficult to precisely define and measure the intention of users [364]. 
- Honesty. At a basic level, a LLM aligned to be honest should present accurate content to users instead of fabricating information. Additionally, it is crucial for the LLM to convey appropriate degrees of uncertainty in its output, in order to avoid any form of deception or misrepresentation of information. This requires the model to know about its capabilities and levels of knowledge (e.g., “know unknowns”). According to the discussion in [366], honesty is a more objective criterion compared to helpfulness and harmlessness, hence honesty alignment could potentially be developed with less reliance on human efforts. 
- Harmlessness. To be harmless, it requires that the language produced by the model should not be offensive or discriminatory. To the best of its abilities, the model should be capable of detecting covert endeavors aimed at soliciting requests for malicious purposes. Ideally, when the model was induced to conduct a dangerous action (e.g., committing a crime), the LLM should politely refuse. Nonetheless, what behaviors are deemed harmful and to what extent vary amongst individuals or societies [366] highly depend on who is using the LLM, the type of the posed question, and the context (e.g., time) at which the LLM is being used. 

As we can see, these criteria are quite subjective, and are developed based on human cognition. Thus, it is difficult to directly formulate them as optimization objectives for LLMs. In existing work, there are many ways to fulfill these criteria when aligning LLMs. A promising technique is **red teaming** [367], which involves using manual or automated means to probe LLMs in an adversarial way to generate harmful outputs and then updates LLMs to prevent such outputs.



## Alignment With Feedback
### By Alignment Methods
#### Reinforcement Learning Based 
↗ [RLFT (Reinforcement Learning Fine Tuning)](../Fine%20Tuning%20Methods/RLFT%20(Reinforcement%20Learning%20Fine%20Tuning)/RLFT%20(Reinforcement%20Learning%20Fine%20Tuning).md)
- ↗ [RLVR (RL with Verifiable Rewards)](../Fine%20Tuning%20Methods/RLFT%20(Reinforcement%20Learning%20Fine%20Tuning)/Reward%20Models%20for%20RLFT/RLVR%20(RL%20with%20Verifiable%20Rewards).md)
- ↗ [RLHF (RL from Human Feedback)](../Fine%20Tuning%20Methods/RLFT%20(Reinforcement%20Learning%20Fine%20Tuning)/Reward%20Models%20for%20RLFT/RLHF%20(RL%20from%20Human%20Feedback).md)
- ↗ [RLAIF (RL from AI Feedback)](../Fine%20Tuning%20Methods/RLFT%20(Reinforcement%20Learning%20Fine%20Tuning)/Reward%20Models%20for%20RLFT/RLAIF%20(RL%20from%20AI%20Feedback).md)
#### Supervised Learning Based
↗ [SFT (Supervised Fine Tuning)](../Fine%20Tuning%20Methods/SFT%20(Supervised%20Fine%20Tuning)/SFT%20(Supervised%20Fine%20Tuning).md)


### By Human Factors
#### 🎯 Alignment With Human Feedback
##### Human Feedback Collection
> 🔗 Zhao, W. X., Zhou, K., Li, J., Tang, T., Wang, X., Hou, Y., Min, Y., Zhang, B., Zhang, J., Dong, Z., Du, Y., Yang, C., Chen, Y., Chen, Z., Jiang, J., Ren, R., Li, Y., Tang, X., Liu, Z., … Wen, J.-R. (2025). _A Survey of Large Language Models_ (No. arXiv:2303.18223). arXiv. [https://doi.org/10.48550/arXiv.2303.18223](https://doi.org/10.48550/arXiv.2303.18223)

During the pre-training stage, LLMs are trained using the language modeling objective on a large-scale corpus. However, it cannot take into account the subjective and qualitative evaluations of LLM outputs by humans (called human feedback in this survey). High-quality human feedback is extremely important for aligning LLMs with human preferences and values. In this part, we discuss how to select a team of human labelers for feedback data collection.

**Human Labeler Selection.** 
In existing work, the dominant method for generating human feedback data is human annotation [66, 116, 365]. This highlights the critical role of selecting appropriate human labelers. To provide highquality feedback, human labelers are supposed to have a qualified level of education and excellent proficiency in English. For example, Sparrow [116] requires human labelers to be UK-based native English speakers who have obtained at least an undergraduate-level educational qualification. Even then, several studies [365] have found that there still exists a mismatch between the intentions of researchers and human labelers, which may lead to low-quality human feedback and cause LLMs to produce unexpected output. To address this issue, InstructGPT [66] further conducts a screening process to filter labelers by assessing the agreement between human labelers and researchers. Specifically, researchers first label a small amount of data and then measure the agreement between themselves and human labelers. The labelers with the highest agreement will be selected to proceed with the subsequent annotation work. In some other work [368], “super raters” are used to ensure the high quality of human feedback. Researchers evaluate the performance of human labelers and select a group of well-performing human labelers (e.g., high agreement) as super raters. The super raters will be given priority to collaborate with the researchers in the subsequent study. When human labelers annotate the output of LLMs, it is helpful to specify detailed instructions and provide instant guidance for human labelers, which can further regulate the annotation of labelers.

**Human Feedback Collection.** 
In existing work, there are mainly three kinds of approaches to collecting feedback and preference data from human labelers. 
- Ranking-based approach. In early work [365], human labelers often evaluate model-generated outputs in a coarse-grained manner (i.e., only selecting the best) without taking into account more fine-grained alignment criteria. Nonetheless, different labelers may hold diverse opinions on the selection of the best candidate output, and this method disregards the unselected samples, which may lead to inaccurate or incomplete human feedback. To address this issue, subsequent studies [116] introduce the Elo rating system to derive the preference ranking by comparing candidate outputs. The ranking of outputs serves as the training signal that guides the model to prefer certain outputs over others, thus inducing outputs that are more reliable and safer. 
- Question-based approach. Further, human labelers can provide more detailed feedback by answering certain questions designed by researchers [81], covering the alignment criteria as well as additional constraints for LLMs. Specially, in WebGPT [81], to assist the model in filtering and utilizing relevant information from retrieved documents, human labelers are required to answer questions with multiple options about whether the retrieved documents are useful for answering the given input.
- Rule-based approach. Many studies also develop rule-based methods to provide more detailed human feedback. As a typical case, Sparrow [116] not only selects the response that labelers consider the best but also uses a series of rules to test whether model-generated responses meet the alignment criteria of being helpful, correct, and harmless. In this way, two kinds of human feedback data can be obtained: (1) the response preference feedback is obtained by comparing the quality of model-generated output in pairs, and (2) the rule violation feedback is obtained by collecting the assessment from human labelers (i.e., a score indicating to what extent the generated output has violated the rules). Furthermore, GPT-4 [46] utilizes a set of zero-shot classifiers (based on GPT-4 itself) as rule-based reward models, which can automatically determine whether the model-generated outputs violate a set of human-written rules.

In the following, we focus on a well-known technique, reinforcement learning from human feedback (RLHF), which has been widely used in the recent powerful LLMs such as ChatGPT. As discussed below, the alignment criteria introduced in Section 5.2.1 can be fulfilled by learning from human feedback on the responses of LLMs to users’ queries.
##### Reinforcement Learning from Human Feedback (RLHF)
↗ [RLHF (RL from Human Feedback)](../Fine%20Tuning%20Methods/RLFT%20(Reinforcement%20Learning%20Fine%20Tuning)/Reward%20Models%20for%20RLFT/RLHF%20(RL%20from%20Human%20Feedback).md)

#### 🎯 Alignment With Non-Human Feedback



## Ref
