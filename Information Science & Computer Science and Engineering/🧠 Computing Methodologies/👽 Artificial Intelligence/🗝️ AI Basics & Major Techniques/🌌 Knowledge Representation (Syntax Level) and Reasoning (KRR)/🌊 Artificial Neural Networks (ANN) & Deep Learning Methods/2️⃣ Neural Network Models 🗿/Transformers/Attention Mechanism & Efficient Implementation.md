# Attention Mechanism & Efficient Implementation

[TOC]



## Res
### Related Topics


### Papers
https://attention-survey.github.io/
A Survey of Efficient Attention Methods:   Hardware-efficient, Sparse, Compact, and Linear Attention
- [Jintao Zhang](https://jt-zhang.github.io/)1, [Rundong Su](https://attention-survey.github.io/#)\*1, [Chunyu Liu](https://attention-survey.github.io/#)\*1, [Jia Wei](https://attention-survey.github.io/#)\*1, [Ziteng Wang](https://attention-survey.github.io/#)*1, [Haoxu Wang](https://attention-survey.github.io/#)\*1, [Pengle Zhang](https://attention-survey.github.io/#)1, [Huiqiang Jiang](https://attention-survey.github.io/#)1, [Haofeng Huang](https://attention-survey.github.io/#)1, [Chendong Xiang](https://attention-survey.github.io/#)1, [Haocheng Xi](https://haochengxi.github.io/)2, [Shuo Yang](https://andy-yang-1.github.io/)2, [Xingyang Li](https://attention-survey.github.io/#)3, [Yuezhou Hu](https://attention-survey.github.io/#)2, [Tianyu Fu](https://github.com/fuvty)1, [Tianchen Zhao](https://attention-survey.github.io/#)1, [Yicheng Zhang](https://attention-survey.github.io/#)1, [Boqun Cao](https://attention-survey.github.io/#)1, [Youhe Jiang](https://attention-survey.github.io/#)1, [Chang Chen](https://attention-survey.github.io/#)1, [Kai Jiang](https://attention-survey.github.io/#)1, [Huayu Chen](https://attention-survey.github.io/#)1, [Min Zhao](https://attention-survey.github.io/#)1, [Xiaoming Xu](https://attention-survey.github.io/#)1, [Yi Wu](https://attention-survey.github.io/#)4, [Fan Bao](https://attention-survey.github.io/#)4, [Jun Zhu](https://ml.cs.tsinghua.edu.cn/~jun/)1, [Jianfei Chen](https://ml.cs.tsinghua.edu.cn/~jianfei/)1
- 1 Tsinghua University 2 UC Berkeley 3 MIT 4 ShengShu  | \*Co-second authorship
- In modern transformers, the attention operation is the only component with a time complexity of , whereas all other operations scale linearly as , where  denotes the sequence length. As sequence lengths in generative models (e.g., language and video generation) continue to increase, improving the efficiency of attention has become increasingly critical. Recently, numerous excellent works have been proposed to enhance the computational efficiency of attention operation. Broadly, these works can be classified into four categories: (1) Hardware-efficient attention: Optimizing attention computation efficiency by leveraging hardware characteristics. (2) Sparse attention: Selectively performing a subset of computations in attention while omitting others. (3) Compact attention: Compressing the KV cache of attention by weight sharing or low rank decomposition while keeping computational cost unchanged, as with a full‑sized KV cache. (4) Linear attention: Redesigning the computational formulation of attention to achieve  time complexity. In this paper, we present a comprehensive survey of these efficient attention methods.
- ![](../../../../../../../../Assets/Pics/Screenshot%202025-09-20%20at%2023.40.32.png)


### Other Resources
Sparse Attention Mechanism
Blockwise Attention
Linformer
Reformer
Ring Attention
Longformer
Adaptive Sparse Span
Mamba

https://arxiv.org/abs/2603.15031
Attention Residuals
- [Kimi Team](https://arxiv.org/search/cs?searchtype=author&query=Kimi+Team): [Guangyu Chen](https://arxiv.org/search/cs?searchtype=author&query=Chen,+G), [Yu Zhang](https://arxiv.org/search/cs?searchtype=author&query=Zhang,+Y), [Jianlin Su](https://arxiv.org/search/cs?searchtype=author&query=Su,+J), [Weixin Xu](https://arxiv.org/search/cs?searchtype=author&query=Xu,+W), [Siyuan Pan](https://arxiv.org/search/cs?searchtype=author&query=Pan,+S), [Yaoyu Wang](https://arxiv.org/search/cs?searchtype=author&query=Wang,+Y), [Yucheng Wang](https://arxiv.org/search/cs?searchtype=author&query=Wang,+Y), [Guanduo Chen](https://arxiv.org/search/cs?searchtype=author&query=Chen,+G), [Bohong Yin](https://arxiv.org/search/cs?searchtype=author&query=Yin,+B), [Yutian Chen](https://arxiv.org/search/cs?searchtype=author&query=Chen,+Y), [Junjie Yan](https://arxiv.org/search/cs?searchtype=author&query=Yan,+J), [Ming Wei](https://arxiv.org/search/cs?searchtype=author&query=Wei,+M), [Y. Zhang](https://arxiv.org/search/cs?searchtype=author&query=Zhang,+Y), [Fanqing Meng](https://arxiv.org/search/cs?searchtype=author&query=Meng,+F), [Chao Hong](https://arxiv.org/search/cs?searchtype=author&query=Hong,+C), [Xiaotong Xie](https://arxiv.org/search/cs?searchtype=author&query=Xie,+X), [Shaowei Liu](https://arxiv.org/search/cs?searchtype=author&query=Liu,+S), [Enzhe Lu](https://arxiv.org/search/cs?searchtype=author&query=Lu,+E), [Yunpeng Tai](https://arxiv.org/search/cs?searchtype=author&query=Tai,+Y), [Yanru Chen](https://arxiv.org/search/cs?searchtype=author&query=Chen,+Y), [Xin Men](https://arxiv.org/search/cs?searchtype=author&query=Men,+X), [Haiqing Guo](https://arxiv.org/search/cs?searchtype=author&query=Guo,+H), [Y. Charles](https://arxiv.org/search/cs?searchtype=author&query=Charles,+Y), [Haoyu Lu](https://arxiv.org/search/cs?searchtype=author&query=Lu,+H), [Lin Sui](https://arxiv.org/search/cs?searchtype=author&query=Sui,+L), [Jinguo Zhu](https://arxiv.org/search/cs?searchtype=author&query=Zhu,+J), [Zaida Zhou](https://arxiv.org/search/cs?searchtype=author&query=Zhou,+Z), [Weiran He](https://arxiv.org/search/cs?searchtype=author&query=He,+W), [Weixiao Huang](https://arxiv.org/search/cs?searchtype=author&query=Huang,+W), [Xinran Xu](https://arxiv.org/search/cs?searchtype=author&query=Xu,+X), [Yuzhi Wang](https://arxiv.org/search/cs?searchtype=author&query=Wang,+Y), [Guokun Lai](https://arxiv.org/search/cs?searchtype=author&query=Lai,+G), [Yulun Du](https://arxiv.org/search/cs?searchtype=author&query=Du,+Y), [Yuxin Wu](https://arxiv.org/search/cs?searchtype=author&query=Wu,+Y), [Zhilin Yang](https://arxiv.org/search/cs?searchtype=author&query=Yang,+Z), [Xinyu Zhou](https://arxiv.org/search/cs?searchtype=author&query=Zhou,+X)



## Intro



## Ref
