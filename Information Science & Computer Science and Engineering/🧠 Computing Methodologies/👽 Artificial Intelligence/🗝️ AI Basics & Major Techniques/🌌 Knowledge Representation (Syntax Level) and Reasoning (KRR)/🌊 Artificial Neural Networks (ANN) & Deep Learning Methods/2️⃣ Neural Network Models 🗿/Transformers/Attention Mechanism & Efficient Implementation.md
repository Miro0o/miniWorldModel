# (Efficient) Attention Mechanism

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



## Intro



## Ref
