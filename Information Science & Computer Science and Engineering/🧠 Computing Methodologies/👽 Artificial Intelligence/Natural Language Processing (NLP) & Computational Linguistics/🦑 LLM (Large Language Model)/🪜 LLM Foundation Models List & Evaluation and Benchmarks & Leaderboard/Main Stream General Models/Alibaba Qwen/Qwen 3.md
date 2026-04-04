# Qwen3

[TOC]



## Res
🚧 https://github.com/QwenLM/qwen3?tab=readme-ov-file

💜 [**Qwen Chat**](https://chat.qwen.ai/)   |   🤗 [Hugging Face](https://huggingface.co/Qwen)   |   🤖 [ModelScope](https://modelscope.cn/organization/qwen)   |    📑 [Paper](https://arxiv.org/abs/2505.09388)    |    📑 [Blog](https://qwenlm.github.io/blog/qwen3/)    ｜   📖 [Documentation](https://qwen.readthedocs.io/)  | 🖥️ [Demo](https://huggingface.co/spaces/Qwen/Qwen3-Demo)   |   💬 [WeChat (微信)](https://github.com/QwenLM/Qwen/blob/main/assets/wechat.png)   |   🫨 [Discord](https://discord.gg/CV4E9rpNSD)


### Related Topics


### Other Resources



## Abstract
> 🤖 https://chatgpt.com/share/69d11f8b-ec20-8397-aa1c-40a5e50d5d61

Qwen3 is a recent open-weight large language model family that provides a clear case study of the **modern decoder-only Transformer**. The family includes both **dense** and **Mixture-of-Experts (MoE)** variants, and its architecture reflects many of the techniques that now characterize contemporary large language models: **causal decoder-only modeling**, **pre-normalized RMSNorm**, **Grouped Query Attention (GQA)**, **Rotary Positional Embeddings (RoPE)**, **SwiGLU feed-forward layers**, and, in the sparse variants, **expert routing through MoE**. In this sense, Qwen3 is not a departure from the Transformer architecture introduced in *Attention Is All You Need*, but rather a refined descendant of the GPT-style decoder-only branch that has been optimized for stable training, efficient inference, and long-context deployment. Qwen3 therefore serves as a useful example of what is typically meant by a “modern Transformer.” 

---

## 1. Introduction

The Transformer architecture has undergone significant refinement since its original introduction in 2017. While the high-level design of stacked attention and feed-forward blocks remains intact, modern large language models differ substantially from the original implementation in their internal design choices. Among the most important developments are the move from encoder-decoder structures to **decoder-only autoregressive models**, the replacement of classical positional encodings by **RoPE**, the adoption of more efficient attention layouts such as **GQA**, the shift from post-normalization to **pre-normalized RMSNorm**, and the increasing use of **MoE** to scale model capacity efficiently. Qwen3 integrates these developments into a single recent model family and thus provides an instructive lens through which to study the modern Transformer. 

---

## 2. Model Family Overview

Qwen3 is a family of decoder-only text models with both dense and sparse variants. According to the technical report, the released family spans model sizes from **0.6B** to **235B** parameters. The dense family includes models such as 0.6B, 1.7B, 4B, 8B, 14B, and 32B, while the MoE family includes models such as **Qwen3-30B-A3B** and **Qwen3-235B-A22B**. The tokenizer is a **byte-level BPE tokenizer** with a vocabulary size of **151,669**. The dense models support context lengths from **32K** up to **128K**, and the larger models, such as **Qwen3-32B**, use **64 layers**, **64 query heads**, and **8 key-value heads**. 

At a high level, the model pipeline is

$$
\text{tokens}
\;\to\;
\text{token embeddings}
\;\to\;
\text{stack of decoder Transformer blocks}
\;\to\;
\text{final normalization}
\;\to\;
\text{vocabulary logits}.
$$

The model is trained autoregressively, with the standard next-token prediction objective

$$
\max_\theta \sum_{t=1}^{T} \log p_\theta(x_t \mid x_{<t}).
$$

Thus, Qwen3 belongs squarely to the **decoder-only autoregressive** branch of the Transformer lineage. 

---

## 3. Architectural Skeleton

The fundamental structural unit in Qwen3 is the modern decoder block. Let $x^{(\ell)}$ denote the hidden state entering layer $\ell$. Then a dense Qwen3 block can be written abstractly as

$$
h^{(\ell)} = x^{(\ell)} + \mathrm{Attn}\!\left(\mathrm{RMSNorm}(x^{(\ell)})\right),
$$

$$
x^{(\ell+1)} = h^{(\ell)} + \mathrm{MLP}\!\left(\mathrm{RMSNorm}(h^{(\ell)})\right).
$$

This formulation makes two important structural points clear.

First, the block uses **residual connections**, so each sublayer learns a transformation on top of an identity path. Second, the normalization is applied **before** both the attention and feed-forward sublayers, which means the architecture is **pre-normalized**. Qwen3 uses **RMSNorm** rather than LayerNorm, following a pattern now common in modern decoder-only LLMs. 

---

## 4. Causal Self-Attention

Since Qwen3 is a decoder-only model, it uses **causal self-attention**, meaning that token $t$ may attend only to positions $1,\dots,t$, not to future positions. The attention mechanism is therefore

$$
\mathrm{Attn}(Q,K,V)
=
\mathrm{softmax}\!\left(
\frac{QK^\top}{\sqrt{d_k}} + M
\right)V,
$$

where \(M\) is a causal mask that assigns $-\infty$ to disallowed future positions.

This is mathematically continuous with the original Transformer, but the practical implementation in Qwen3 differs in important ways. In particular, Qwen3 adopts **Grouped Query Attention**, **Rotary Positional Embeddings**, and additional training-stability refinements such as **QK-Norm** and the removal of **QKV bias**. These changes reflect the evolution of the Transformer from a general sequence model into a production-oriented large language model architecture. 

---

## 5. Grouped Query Attention

One of the defining features of Qwen3 is its use of **Grouped Query Attention (GQA)**. In the largest dense model, **Qwen3-32B**, the architecture uses **64 query heads** but only **8 key-value heads**. This means that multiple query heads share the same key and value heads. 

Conceptually, GQA lies between standard multi-head attention and multi-query attention:

- In **full multi-head attention**, each head has its own \(Q\), \(K\), and \(V\).
- In **multi-query attention (MQA)**, many query heads share a single set of \(K\) and \(V\).
- In **grouped query attention (GQA)**, query heads are partitioned into groups, with each group sharing \(K\) and \(V\).

The main motivation is inference efficiency. During autoregressive generation, previous keys and values are stored in a **KV cache**. Reducing the number of key-value heads reduces memory usage and bandwidth, which is crucial for deployment at large scale. GQA is therefore one of the clearest indicators that Qwen3 follows the modern, inference-aware Transformer design. 

---

## 6. Rotary Positional Embeddings

Because self-attention is permutation-invariant, positional information must be injected explicitly. Qwen3 uses **Rotary Positional Embeddings (RoPE)** rather than the additive positional encodings used in the original Transformer. In RoPE, position is encoded by applying position-dependent rotations to components of the query and key vectors before the attention scores are computed. 

This can be understood as allowing positional information to enter attention directly, rather than being merely added to input embeddings. RoPE has become especially influential in autoregressive LLMs because it tends to behave well under long-context scaling.

Qwen3 further adapts RoPE for long-context use. The report states that the **RoPE base frequency** is raised from \(10{,}000\) to \(1{,}000{,}000\) during long-context training, and this is combined with **YARN** and **Dual Chunk Attention (DCA)** to improve long-context inference behavior. This is a particularly important example of how the modern Transformer is shaped not only by theoretical architecture, but also by practical long-context deployment requirements. 

---

## 7. RMSNorm and Pre-Normalization

Qwen3 uses **RMSNorm** rather than LayerNorm, and it applies this normalization in **pre-norm** form. If \(x \in \mathbb{R}^d\), RMSNorm can be written approximately as

$$
\mathrm{RMSNorm}(x)
=
\gamma \odot
\frac{x}{
\sqrt{\frac{1}{d}\sum_{i=1}^{d} x_i^2 + \epsilon}
},
$$

where \(\gamma\) is a learned scaling vector and \(\epsilon\) is a small constant for numerical stability.

Compared with LayerNorm, RMSNorm omits explicit mean-centering and instead normalizes primarily by magnitude. In deep autoregressive networks, this simpler form often yields good stability and efficiency. The shift from post-LayerNorm to pre-RMSNorm is one of the most characteristic changes distinguishing modern LLM architectures from the original Transformer design. Qwen3 exemplifies this pattern clearly. 

---

## 8. Attention Stabilization

Beyond the main architectural features, Qwen3 also includes smaller refinements aimed at stable optimization. The report notes two such choices explicitly:

1. **QKV bias is removed**
2. **QK-Norm is introduced**

These may appear minor compared with GQA or RoPE, but they are representative of an important trend in modern Transformer design: many gains come from careful numerical engineering rather than from dramatic changes in high-level architecture. In Qwen3, these modifications are described as measures to ensure stable training. 

---

## 9. Feed-Forward Subnetwork: SwiGLU

The feed-forward component in Qwen3 is not a plain two-layer FFN of the classical Transformer form. Instead, it uses **SwiGLU**, a gated feed-forward design that has become common in recent decoder-only models. 

A classical Transformer FFN may be written as

$$
\mathrm{FFN}(x)=W_2 \sigma(W_1x+b_1)+b_2.
$$

By contrast, a SwiGLU-style block has the rough form

$$
\mathrm{SwiGLU}(x)
=
\left(W_a x\right)\odot \mathrm{Swish}(W_b x),
$$

followed by a projection back to the model dimension.

This gating mechanism makes the feed-forward sublayer more expressive than a simple expansion–activation–compression pipeline. The adoption of SwiGLU is one of the clearest markers of the “modern Transformer block” and distinguishes Qwen3 from earlier GPT-era implementations. 

---

## 10. Residual Pathways and Deep Stacking

Although many internal components have changed, the overall structural backbone of the Transformer remains intact in Qwen3: deep stacking of residual blocks. If the model has \(L\) layers, then each layer repeatedly applies transformations of the form

$$
x \mapsto x + f(x).
$$

This residual formulation allows information and gradients to propagate through deep networks without the training instabilities that would otherwise arise. In Qwen3-32B, the model contains **64 layers**, which makes the residual structure essential to trainability and representational depth. 

---

## 11. Long-Context Design

A major reason Qwen3 is valuable as a case study is that it treats **long-context capability** as a first-class architectural concern. Larger dense models support **128K context**, and the report describes a long-context training stage with sequence lengths up to **32,768**, combined with inference-time strategies such as **YARN** and **DCA**. 

This matters conceptually because it shows that long-context support is not an isolated add-on. It influences:

- positional encoding design,
- attention implementation,
- KV-cache efficiency,
- training curriculum,
- and inference-time scaling methods.

Thus, the modern Transformer is not merely a larger version of the original architecture. It is a model family increasingly shaped by the realities of high-throughput, long-context generation. 

---

## 12. Dense and MoE Variants

Qwen3 includes both **dense** and **Mixture-of-Experts** variants. The dense models follow the standard block described above. The MoE models preserve the same overall decoder-only skeleton, but replace the dense feed-forward sublayer with a sparse expert-routing module.

The report states that the MoE variants use **128 total experts** and activate **8 experts per token**. It also describes **fine-grained expert segmentation**, the removal of shared experts, and the use of a **global-batch load balancing loss** to encourage specialization and balanced utilization. The flagship sparse model, **Qwen3-235B-A22B**, has **235B total parameters** but only **22B activated parameters per token**. 

The dense and sparse cases can be contrasted as follows.

For the dense case:

$$
x
\to
\mathrm{RMSNorm}
\to
\mathrm{Attention}
\to
\mathrm{Residual}
\to
\mathrm{RMSNorm}
\to
\mathrm{Dense\ SwiGLU\ MLP}
\to
\mathrm{Residual}.
$$

For the MoE case:

$$
x
\to
\mathrm{RMSNorm}
\to
\mathrm{Attention}
\to
\mathrm{Residual}
\to
\mathrm{RMSNorm}
\to
\mathrm{Router}
\to
\mathrm{Selected\ Experts}
\to
\mathrm{Residual}.
$$

This illustrates how MoE changes the feed-forward component without abandoning the Transformer framework itself. The result is a model with far greater total capacity but significantly lower active compute per token than an equivalently sized dense model. 

---

## 13. Output Layer and Language Modeling

After the final Transformer block, the hidden state \(h_t\) at position \(t\) is projected into vocabulary logits:

$$
\ell_t = h_t W_{\mathrm{vocab}}^\top.
$$

The next-token distribution is then

$$
p(x_{t+1}=v \mid x_{\le t})
=
\frac{\exp(\ell_{t,v})}{\sum_{v'}\exp(\ell_{t,v'})}.
$$

Training maximizes the likelihood of the correct next token across the sequence. This final projection-and-softmax stage completes the causal language-modeling pipeline and connects the internal Transformer representation back to the discrete token vocabulary. 

---

## 14. Discussion

Qwen3 is a useful case study because it captures, in a single recent family, the main ingredients that define the modern decoder-only Transformer:

- **autoregressive decoder-only architecture**
- **pre-normalized RMSNorm**
- **Grouped Query Attention**
- **Rotary Positional Embeddings**
- **SwiGLU feed-forward layers**
- **attention-stability refinements such as QK-Norm**
- **long-context engineering**
- **optional MoE sparsity**

Taken together, these features show that the modern Transformer is best understood not as a fundamentally new architecture after the Transformer, but as a mature and refined form of the Transformer itself. The broad structural pattern of stacked residual attention-and-MLP blocks remains unchanged; what has evolved are the internal choices that make such models stable, scalable, and efficient in practice. 

---

## 15. Conclusion

Qwen3 provides a clear example of the current mainstream design of large language models. Its architecture preserves the standard decoder-only autoregressive Transformer framework while incorporating the major refinements that now distinguish modern systems from the original 2017 design. In particular, Qwen3 shows how contemporary Transformer models combine improved normalization, more efficient attention layouts, stronger feed-forward designs, long-context adaptations, and optional sparse-expert scaling within a single coherent framework.

For this reason, Qwen3 is best understood not as an exotic variant, but as a representative example of the **modern Transformer** in its mature form. 



## Ref
