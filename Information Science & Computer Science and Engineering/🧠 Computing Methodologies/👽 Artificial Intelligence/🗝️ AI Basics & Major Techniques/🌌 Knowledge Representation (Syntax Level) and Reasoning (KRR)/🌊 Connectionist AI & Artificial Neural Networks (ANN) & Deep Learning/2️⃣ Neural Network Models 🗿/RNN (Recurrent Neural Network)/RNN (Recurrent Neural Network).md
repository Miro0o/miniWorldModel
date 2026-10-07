# RNN (Recurrent Neural Network)

[TOC]



## Res
### Related Topics


### Learning Resources
https://stanford.edu/~shervine/teaching/cs-230/cheatsheet-recurrent-neural-networks/
Recurrent Neural Networks
By [Afshine Amidi](https://www.mit.edu/~amidi/) and [Shervine Amidi](https://stanford.edu/~shervine/)


### Other Resources
https://karpathy.github.io/2015/05/21/rnn-effectiveness/
The Unreasonable Effectiveness of Recurrent Neural Networks
Andrej Karpathy blog | May 21, 2015



## Intro
> 🤖 GPT 6.0 Astra
> https://chatgpt.com/share/6ac4fbdb-f7f4-83ec-99e8-a5b822dcbbea

> [!Quote] Sequence modeling
> ↗ [Statistical (Data-Driven) Learning & Machine Learning (ML)](../../../../Statistical%20(Data-Driven)%20Learning%20&%20Machine%20Learning%20(ML)/Statistical%20(Data-Driven)%20Learning%20&%20Machine%20Learning%20(ML).md)
> 
> Sequence modeling:
> ![](../../../../../../../../Assets/Pics/Screenshot%202026-09-10%20at%2000.27.59.png)
> 
> The model only sees present and previous state: 
> general:
> ![](../../../../../../../../Assets/Pics/Screenshot%202026-10-06%20at%2022.30.59.png)
> RNN:
> ![](../../../../../../../../Assets/Pics/Screenshot%202026-10-06%20at%2021.45.07.png)
> 
> What serves as memor:
> ![](../../../../../../../../Assets/Pics/Screenshot%202026-10-06%20at%2022.20.54.png)
> 
> Maximum path lengths, per-layer complexity and minimum number of sequential operations for different layer types. $n$ is the sequence length, $d$ is the representation dimension, $k$ is the kernel size of convolutions, and $r$ is the size of the neighborhood in restricted self-attention.
> 
> | Layer Type | Complexity per Layer | Sequential Operations | Maximum Path Length |
> |---|---:|---:|---:|
> | Self-Attention | $O(n^2 \cdot d)$ | $O(1)$ | $O(1)$ |
> | Recurrent | $O(n \cdot d^2)$ | $O(n)$ | $O(n)$ |
> | Convolutional | $O(k \cdot n \cdot d^2)$ | $O(1)$ | $O(\log_k(n))$ |
> | Self-Attention (restricted) | $O(r \cdot n \cdot d)$ | $O(1)$ | $O(n/r)$ |

![](../../../../../../../../Assets/Pics/Screenshot%202026-10-06%20at%2021.44.30.png)
**Hidden state**: summary of the past sequence
**Local connection**: across time
**Weight-sharing**: across time


### BackProp Through Time (BPTT): Gradient Vanishing & Gradient Explosion
![](../../../../../../../../Assets/Pics/Screenshot%202026-10-06%20at%2021.43.06.png)

![](../../../../../../../../Assets/Pics/Screenshot%202026-10-06%20at%2021.42.43.png)

solution: 
- exploding gradients: gradient clipping
- vanishing gradients: architecture change
	- ↗ [LSTM (Long-Short Term Memories)](RNN%20Architecture%20Design/LSTM%20(Long-Short%20Term%20Memories).md)
	- ↗ [GRU (Gated Recurrent Units)](RNN%20Architecture%20Design/GRU%20(Gated%20Recurrent%20Units).md)


### Gated RNN
![](../../../../../../../../Assets/Pics/Screenshot%202023-01-29%20at%2012.56.03%20AM.png)


### Bi-RNN & Deep RNN
![](../../../../../../../../Assets/Pics/Screenshot%202023-01-29%20at%2012.55.19%20AM.png)

Bidirectional RNN:
![](../../../../../../../../Assets/Pics/Screenshot%202026-10-06%20at%2022.14.21.png)

Deep RNN:
![](../../../../../../../../Assets/Pics/Screenshot%202026-10-06%20at%2022.14.35.png)


### Modern RNN & State Space Models
↗ [SSM (State-Space Model)](SSM%20(State-Space%20Model)/SSM%20(State-Space%20Model).md)
↗ [Mamba](SSM%20(State-Space%20Model)/Mamba.md)

Sometimes called “state space models”
- Hidden state

Main advantages:
- Unlimited context length
- Compute scales linearly with sequence length



## Ref
