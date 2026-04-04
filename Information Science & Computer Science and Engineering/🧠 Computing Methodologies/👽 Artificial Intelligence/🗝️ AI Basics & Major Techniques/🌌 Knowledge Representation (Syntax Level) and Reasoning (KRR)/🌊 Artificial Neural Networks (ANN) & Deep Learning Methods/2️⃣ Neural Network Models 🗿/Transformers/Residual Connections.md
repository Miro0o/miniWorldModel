# Residual Connections

[TOC]



## Res
### Related Topics
↗ [ResNet (Residual Networks)](../CNN%20(Convolutional%20Neural%20Network)/ResNet%20(Residual%20Networks)/ResNet%20(Residual%20Networks).md)


### Papers
https://arxiv.org/abs/2409.19606
Hyper-Connections
- [Defa Zhu](https://arxiv.org/search/cs?searchtype=author&query=Zhu,+D), [Hongzhi Huang](https://arxiv.org/search/cs?searchtype=author&query=Huang,+H), [Zihao Huang](https://arxiv.org/search/cs?searchtype=author&query=Huang,+Z), [Yutao Zeng](https://arxiv.org/search/cs?searchtype=author&query=Zeng,+Y), [Yunyao Mao](https://arxiv.org/search/cs?searchtype=author&query=Mao,+Y), [Banggu Wu](https://arxiv.org/search/cs?searchtype=author&query=Wu,+B), [Qiyang Min](https://arxiv.org/search/cs?searchtype=author&query=Min,+Q), [Xun Zhou](https://arxiv.org/search/cs?searchtype=author&query=Zhou,+X)
- We present hyper-connections, a simple yet effective method that can serve as an alternative to residual connections. This approach specifically addresses common drawbacks observed in residual connection variants, such as the seesaw effect between gradient vanishing and representation collapse. Theoretically, hyper-connections allow the network to adjust the strength of connections between features at different depths and dynamically rearrange layers. We conduct experiments focusing on the pre-training of large language models, including dense and sparse models, where hyper-connections show significant performance improvements over residual connections. Additional experiments conducted on vision tasks also demonstrate similar improvements. We anticipate that this method will be broadly applicable and beneficial across a wide range of AI problems.

https://arxiv.org/abs/2512.24880
mHC: Manifold-Constrained Hyper-Connections
- [Zhenda Xie](https://arxiv.org/search/cs?searchtype=author&query=Xie,+Z), [Yixuan Wei](https://arxiv.org/search/cs?searchtype=author&query=Wei,+Y), [Huanqi Cao](https://arxiv.org/search/cs?searchtype=author&query=Cao,+H), [Chenggang Zhao](https://arxiv.org/search/cs?searchtype=author&query=Zhao,+C), [Chengqi Deng](https://arxiv.org/search/cs?searchtype=author&query=Deng,+C), [Jiashi Li](https://arxiv.org/search/cs?searchtype=author&query=Li,+J), [Damai Dai](https://arxiv.org/search/cs?searchtype=author&query=Dai,+D), [Huazuo Gao](https://arxiv.org/search/cs?searchtype=author&query=Gao,+H), [Jiang Chang](https://arxiv.org/search/cs?searchtype=author&query=Chang,+J), [Kuai Yu](https://arxiv.org/search/cs?searchtype=author&query=Yu,+K), [Liang Zhao](https://arxiv.org/search/cs?searchtype=author&query=Zhao,+L), [Shangyan Zhou](https://arxiv.org/search/cs?searchtype=author&query=Zhou,+S), [Zhean Xu](https://arxiv.org/search/cs?searchtype=author&query=Xu,+Z), [Zhengyan Zhang](https://arxiv.org/search/cs?searchtype=author&query=Zhang,+Z), [Wangding Zeng](https://arxiv.org/search/cs?searchtype=author&query=Zeng,+W), [Shengding Hu](https://arxiv.org/search/cs?searchtype=author&query=Hu,+S), [Yuqing Wang](https://arxiv.org/search/cs?searchtype=author&query=Wang,+Y), [Jingyang Yuan](https://arxiv.org/search/cs?searchtype=author&query=Yuan,+J), [Lean Wang](https://arxiv.org/search/cs?searchtype=author&query=Wang,+L), [Wenfeng Liang](https://arxiv.org/search/cs?searchtype=author&query=Liang,+W)
- Recently, studies exemplified by Hyper-Connections (HC) have extended the ubiquitous residual connection paradigm established over the past decade by expanding the residual stream width and diversifying connectivity patterns. While yielding substantial performance gains, this diversification fundamentally compromises the identity mapping property intrinsic to the residual connection, which causes severe training instability and restricted scalability, and additionally incurs notable memory access overhead. To address these challenges, we propose Manifold-Constrained Hyper-Connections (mHC), a general framework that projects the residual connection space of HC onto a specific manifold to restore the identity mapping property, while incorporating rigorous infrastructure optimization to ensure efficiency. Empirical experiments demonstrate that mHC is effective for training at scale, offering tangible performance improvements and superior scalability. We anticipate that mHC, as a flexible and practical extension of HC, will contribute to a deeper understanding of topological architecture design and suggest promising directions for the evolution of foundational models.

https://arxiv.org/abs/2603.15031
Attention Residuals
- [Kimi Team](https://arxiv.org/search/cs?searchtype=author&query=Kimi+Team): [Guangyu Chen](https://arxiv.org/search/cs?searchtype=author&query=Chen,+G), [Yu Zhang](https://arxiv.org/search/cs?searchtype=author&query=Zhang,+Y), [Jianlin Su](https://arxiv.org/search/cs?searchtype=author&query=Su,+J), [Weixin Xu](https://arxiv.org/search/cs?searchtype=author&query=Xu,+W), [Siyuan Pan](https://arxiv.org/search/cs?searchtype=author&query=Pan,+S), [Yaoyu Wang](https://arxiv.org/search/cs?searchtype=author&query=Wang,+Y), [Yucheng Wang](https://arxiv.org/search/cs?searchtype=author&query=Wang,+Y), [Guanduo Chen](https://arxiv.org/search/cs?searchtype=author&query=Chen,+G), [Bohong Yin](https://arxiv.org/search/cs?searchtype=author&query=Yin,+B), [Yutian Chen](https://arxiv.org/search/cs?searchtype=author&query=Chen,+Y), [Junjie Yan](https://arxiv.org/search/cs?searchtype=author&query=Yan,+J), [Ming Wei](https://arxiv.org/search/cs?searchtype=author&query=Wei,+M), [Y. Zhang](https://arxiv.org/search/cs?searchtype=author&query=Zhang,+Y), [Fanqing Meng](https://arxiv.org/search/cs?searchtype=author&query=Meng,+F), [Chao Hong](https://arxiv.org/search/cs?searchtype=author&query=Hong,+C), [Xiaotong Xie](https://arxiv.org/search/cs?searchtype=author&query=Xie,+X), [Shaowei Liu](https://arxiv.org/search/cs?searchtype=author&query=Liu,+S), [Enzhe Lu](https://arxiv.org/search/cs?searchtype=author&query=Lu,+E), [Yunpeng Tai](https://arxiv.org/search/cs?searchtype=author&query=Tai,+Y), [Yanru Chen](https://arxiv.org/search/cs?searchtype=author&query=Chen,+Y), [Xin Men](https://arxiv.org/search/cs?searchtype=author&query=Men,+X), [Haiqing Guo](https://arxiv.org/search/cs?searchtype=author&query=Guo,+H), [Y. Charles](https://arxiv.org/search/cs?searchtype=author&query=Charles,+Y), [Haoyu Lu](https://arxiv.org/search/cs?searchtype=author&query=Lu,+H), [Lin Sui](https://arxiv.org/search/cs?searchtype=author&query=Sui,+L), [Jinguo Zhu](https://arxiv.org/search/cs?searchtype=author&query=Zhu,+J), [Zaida Zhou](https://arxiv.org/search/cs?searchtype=author&query=Zhou,+Z), [Weiran He](https://arxiv.org/search/cs?searchtype=author&query=He,+W), [Weixiao Huang](https://arxiv.org/search/cs?searchtype=author&query=Huang,+W), [Xinran Xu](https://arxiv.org/search/cs?searchtype=author&query=Xu,+X), [Yuzhi Wang](https://arxiv.org/search/cs?searchtype=author&query=Wang,+Y), [Guokun Lai](https://arxiv.org/search/cs?searchtype=author&query=Lai,+G), [Yulun Du](https://arxiv.org/search/cs?searchtype=author&query=Du,+Y), [Yuxin Wu](https://arxiv.org/search/cs?searchtype=author&query=Wu,+Y), [Zhilin Yang](https://arxiv.org/search/cs?searchtype=author&query=Yang,+Z), [Xinyu Zhou](https://arxiv.org/search/cs?searchtype=author&query=Zhou,+X)
- Residual connections with PreNorm are standard in modern LLMs, yet they accumulate all layer outputs with fixed unit weights. This uniform aggregation causes uncontrolled hidden-state growth with depth, progressively diluting each layer's contribution. We propose Attention Residuals (AttnRes), which replaces this fixed accumulation with softmax attention over preceding layer outputs, allowing each layer to selectively aggregate earlier representations with learned, input-dependent weights. To address the memory and communication overhead of attending over all preceding layer outputs for large-scale model training, we introduce Block AttnRes, which partitions layers into blocks and attends over block-level representations, reducing the memory footprint while preserving most of the gains of full AttnRes. Combined with cache-based pipeline communication and a two-phase computation strategy, Block AttnRes becomes a practical drop-in replacement for standard residual connections with minimal overhead.  
- Scaling law experiments confirm that the improvement is consistent across model sizes, and ablations validate the benefit of content-dependent depth-wise selection. We further integrate AttnRes into the Kimi Linear architecture (48B total / 3B activated parameters) and pre-train on 1.4T tokens, where AttnRes mitigates PreNorm dilution, yielding more uniform output magnitudes and gradient distribution across depth, and improves downstream performance across all evaluated tasks.


### Other Resources



## Intro
> 🤖 https://chatgpt.com/share/69d16306-b57c-8387-a8ee-348d1ee220c7

A compact timeline is:
1. **Original Transformer**: simple additive residuals, **Post-LN**.
2. **Pre-LN era**: move normalization inside the residual block for stable large-scale training; becomes standard in LLMs.
3. **Residual rescaling era**: methods like **DeepNorm** stabilize very deep models by changing residual magnitude and initialization.
4. **Richer skip-path era**:
    - **RealFormer**: residualize attention scores.
    - **Hyper-Connections**: learned multi-branch depth mixing.
    - **mHC**: constrain hyper-connections to preserve identity/stability.
    - **Attention Residuals**: replace fixed additive residuals with attention over earlier layers.
    - **Keel**: revive Post-LN by changing the residual path to a highway-style one.



## Ref
