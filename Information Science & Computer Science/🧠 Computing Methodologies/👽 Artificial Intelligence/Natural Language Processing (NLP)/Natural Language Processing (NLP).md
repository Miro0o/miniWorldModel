# Natural Language Processing (NLP)

[TOC]



## Res
### Related Topics
↗ [Linguistics](../../../../Other%20Networks%20of%20Knowledge/Arts%20&%20Cultures/📃%20Language%20&%20Literature/Linguistics/Linguistics.md)
↗ [Mathematical Logic Basics (Formal Logic)](../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Mathematical%20Logic%20Basics%20(Formal%20Logic).md)
↗ [Formal Syntax, Language Grammar, and BNF](../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Formal%20Syntax,%20Language%20Grammar,%20and%20BNF.md)
↗ [Automata Theory and (Formal) Language Theory](../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic/😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Automata%20Theory%20and%20(Formal)%20Language%20Theory.md)

↗ [LLM (Large Language Model)](🦑%20LLM%20(Large%20Language%20Model)/LLM%20(Large%20Language%20Model).md)


### Other Resources



## Intro
### Language Models
> 🔗 [What is a language model?](https://stanford-cs324.github.io/winter2022/lectures/introduction/#what-is-a-language-model)

The classic definition of a language model (LM) is a **probability distribution over sequences of tokens**. Suppose we have a **vocabulary**  of a set of tokens. A language model p assigns each sequence of tokens x1,…,xL∈ a probability (a number between 0 and 1):

p(x1,…,xL).

The probability intuitively tells us how “good” a sequence of tokens is. For example, if the vocabulary is ={𝖺𝗍𝖾,𝖻𝖺𝗅𝗅,𝖼𝗁𝖾𝖾𝗌𝖾,𝗆𝗈𝗎𝗌𝖾,𝗍𝗁𝖾}, the language model might assign ([demo](http://crfm-models.stanford.edu/static/index.html?prompt=%24%7Bprompt%7D&settings=echo_prompt%3A%20true%0Amax_tokens%3A%200&environments=prompt%3A%20%5Bthe%20mouse%20ate%20the%20cheese%2C%20the%20cheese%20ate%20the%20mouse%2C%20mouse%20the%20the%20cheese%20ate%5D)):

p(𝗍𝗁𝖾,𝗆𝗈𝗎𝗌𝖾,𝖺𝗍𝖾,𝗍𝗁𝖾,𝖼𝗁𝖾𝖾𝗌𝖾)=0.02,

p(𝗍𝗁𝖾,𝖼𝗁𝖾𝖾𝗌𝖾,𝖺𝗍𝖾,𝗍𝗁𝖾,𝗆𝗈𝗎𝗌𝖾)=0.01,

p(𝗆𝗈𝗎𝗌𝖾,𝗍𝗁𝖾,𝗍𝗁𝖾,𝖼𝗁𝖾𝖾𝗌𝖾,𝖺𝗍𝖾)=0.0001.

Mathematically, a language model is a very simple and beautiful object. But the simplicity is deceiving: the ability to assign (meaningful) probabilities to all sequences requires extraordinary (but _implicit_) linguistic abilities and world knowledge.

For example, the LM should assign 𝗆𝗈𝗎𝗌𝖾 𝗍𝗁𝖾 𝗍𝗁𝖾 𝖼𝗁𝖾𝖾𝗌𝖾 𝖺𝗍𝖾 a very low probability implicitly because it’s ungrammatical (**syntactic knowledge**). The LM should assign 𝗍𝗁𝖾 𝗆𝗈𝗎𝗌𝖾 𝖺𝗍𝖾 𝗍𝗁𝖾 𝖼𝗁𝖾𝖾𝗌𝖾 higher probability than 𝗍𝗁𝖾 𝖼𝗁𝖾𝖾𝗌𝖾 𝖺𝗍𝖾 𝗍𝗁𝖾 𝗆𝗈𝗎𝗌𝖾 implicitly because of **world knowledge**: both sentences are the same syntactically, but they differ in semantic plausibility.

**Generation**. As defined, a language model p takes a sequence and returns a probability to assess its goodness. We can also generate a sequence given a language model. The purest way to do this is to sample a sequence x1:L from the language model p with probability equal to p(x1:L), denoted:

x1:L∼p.

How to do this computationally efficiently depends on the form of the language model p. In practice, we do not generally sample directly from a language model both because of limitations of real language models and because we sometimes wish to obtain not an “average” sequence but something closer to the “best” sequence.


**Autoregressive language models**

A common way to write the joint distribution p(x1:L) of a sequence x1:L is using the **chain rule of probability**:

p(x1:L)=p(x1)p(x2∣x1)p(x3∣x1,x2)⋯p(xL∣x1:L−1)=∏i=1Lp(xi∣x1:i−1).

For example ([demo](http://crfm-models.stanford.edu/static/index.html?prompt=the%20mouse%20ate%20the%20cheese&settings=echo_prompt%3A%20true%0Amax_tokens%3A%200%0Atop_k_per_token%3A%2010&environments=)):

p(𝗍𝗁𝖾,𝗆𝗈𝗎𝗌𝖾,𝖺𝗍𝖾,𝗍𝗁𝖾,𝖼𝗁𝖾𝖾𝗌𝖾)=p(𝗍𝗁𝖾)p(𝗆𝗈𝗎𝗌𝖾∣𝗍𝗁𝖾)p(𝖺𝗍𝖾∣𝗍𝗁𝖾,𝗆𝗈𝗎𝗌𝖾)p(𝗍𝗁𝖾∣𝗍𝗁𝖾,𝗆𝗈𝗎𝗌𝖾,𝖺𝗍𝖾)p(𝖼𝗁𝖾𝖾𝗌𝖾∣𝗍𝗁𝖾,𝗆𝗈𝗎𝗌𝖾,𝖺𝗍𝖾,𝗍𝗁𝖾).

In particular, p(xi∣x1:i−1) is a **conditional probability distribution** of the next token xi given the previous tokens x1:i−1.

Of course, any joint probability distribution can be written this way mathematically, but an **autoregressive language model** is one where each conditional distribution p(xi∣x1:i−1) can be computed efficiently (e.g., using a feedforward neural network).

**Generation**. Now to generate an entire sequence x1:L from an autoregressive language model p, we sample one token at a time given the tokens generated so far:

for i=1,…,L:xi∼p(xi∣x1:i−1)1/T,

where T≥0 is a **temperature** parameter that controls how much randomness we want from the language model:

- T=0: deterministically choose the most probable token xi at each position i
- T=1: sample “normally” from the pure language model
- T=∞: sample from a uniform distribution over the entire vocabulary 

However, if we just raise the probabilities to the power 1/T, the probability distribution may not sum to 1. We can fix this by re-normalizing the distribution. We call the normalized version pT(xi∣x1:i−1)∝p(xi∣x1:i−1)1/T the **annealed** conditional probability distribution. For example:

p(𝖼𝗁𝖾𝖾𝗌𝖾)=0.4,p(𝗆𝗈𝗎𝗌𝖾)=0.6

pT=0.5(𝖼𝗁𝖾𝖾𝗌𝖾)=0.31,pT=0.5(𝗆𝗈𝗎𝗌𝖾)=0.69

pT=0.2(𝖼𝗁𝖾𝖾𝗌𝖾)=0.12,pT=0.2(𝗆𝗈𝗎𝗌𝖾)=0.88

pT=0(𝖼𝗁𝖾𝖾𝗌𝖾)=0,pT=0(𝗆𝗈𝗎𝗌𝖾)=1

_Aside_: Annealing is a reference to metallurgy, where hot materials are cooled gradually, and shows up in sampling and optimization algorithms such as simulated annealing.

_Technical note_: sampling iteratively with a temperature T parameter applied to each conditional distribution p(xi∣x1:i−1)1/T is not equivalent (except when T=1) to sampling from the annealed distribution over length L sequences.

**Conditional generation**. More generally, we can perform conditional generation by specifying some prefix sequence x1:i (called a **prompt**) and sampling the rest xi+1:L (called the **completion**). For example, generating with T=0 produces ([demo](http://crfm-models.stanford.edu/static/index.html?prompt=the%20mouse%20ate&settings=temperature%3A%200%0Amax_tokens%3A%202%0Atop_k_per_token%3A%2010%0Anum_completions%3A%2010&environments=)):

𝗍𝗁𝖾,𝗆𝗈𝗎𝗌𝖾,𝖺𝗍𝖾prompt⇝T=0𝗍𝗁𝖾,𝖼𝗁𝖾𝖾𝗌𝖾completion.

If we change the temperature to T=1, we can get more variety ([demo](http://crfm-models.stanford.edu/static/index.html?prompt=the%20mouse%20ate&settings=temperature%3A%201%0Amax_tokens%3A%202%0Atop_k_per_token%3A%2010%0Anum_completions%3A%2010&environments=)), for example, 𝗂𝗍𝗌 𝗁𝗈𝗎𝗌𝖾 and 𝗆𝗒 𝗁𝗈𝗆𝖾𝗐𝗈𝗋𝗄.

As we’ll see shortly, conditional generation unlocks the ability for language models to solve a variety of tasks by simply changing the prompt.

**Summary**
- A language model is a probability distribution p over sequences x1:L.
- Intuitively, a good language model should have linguistic capabilities and world knowledge.
- An autoregressive language model allows for efficient generation of a completion xi+1:L given a prompt x1:i.
- The temperature can be used to control the amount of variability in generation.


### From Language Model to Task Model
> ↗ [Post-Training & Fine Tuning](🦑%20LLM%20(Large%20Language%20Model)/LLM%20Training,%20Utilization,%20and%20Evaluation/Post-Training%20&%20Fine%20Tuning/Post-Training%20&%20Fine%20Tuning.md)
> ↗ [LLM Utilization & Prompt Engineering](🦑%20LLM%20(Large%20Language%20Model)/LLM%20Training,%20Utilization,%20and%20Evaluation/LLM%20Utilization%20&%20Prompt%20Engineering/LLM%20Utilization%20&%20Prompt%20Engineering.md)

> 🔗 https://stanford-cs324.github.io/winter2022/lectures/capabilities/

Recall that a **language model** p is a distribution over sequences of tokens x1:L and thus can be used to score sequences:
p(𝗍𝗁𝖾,𝗆𝗈𝗎𝗌𝖾,𝖺𝗍𝖾,𝗍𝗁𝖾,𝖼𝗁𝖾𝖾𝗌𝖾).

It can also be used to perform conditional generation of a completion given a prompt:
𝗍𝗁𝖾 𝗆𝗈𝗎𝗌𝖾 𝖺𝗍𝖾⇝𝗍𝗁𝖾 𝖼𝗁𝖾𝖾𝗌𝖾.

A **task** is a mapping from inputs to outputs. For example, for question answering, we might have:
> Input: What school did burne hogarth establish?  
> Output: School of Visual Arts

We use the term **adaptation** to refer to the process of taking a language model and turning it into a task model, given:
- a natural language **description** of the task, and
- a set of **training instances** (input-output pairs).

There are two primary ways to perform adaptation:
1. **Training** (standard supervised learning): train a new model that maps inputs to outputs, either by
    1. creating a new model that uses the language model as features (probing), or
    2. starting with the language model and updating it based on the training instances (fine-tuning), or
    3. something in between (lightweight fine-tuning).
2. **Prompting** (in-context learning): Construct a prompt (a string based on the description and training instances) or a set of prompts, feed those into a language model to obtain completions.
    1. Zero-shot learning: number of training examples is 0
    2. One-shot learning: number of training examples is 1
    3. Few-shot learning: number of training examples is few

Which adaptation procedure should we go with?
- **Training can be challenging due to overfitting** (just imagine fine-tuning a 175 billion parameter model based on 5 examples). How to do this effectively will be the topic of the adaptation lecture.
- For now, we will be content with **adaptation of GPT-3 using prompting**. Note that the limitation of prompting is that we can only leverage a only small number of training instances (as many as can fit into a prompt). This is due to a limitation of Transformers, where the prompt and the completion must fit into 2048 tokens.

The GPT-3 paper evaluated GPT-3 on a large set of tasks. We will consider a subset of these, and for each task, discuss the following:
1. **Definition**: What is the task and its motivation?
2. **Adaptation**: How do we reduce the task to language modeling (via prompting)?
3. **Results**: What are the quantitative numbers compared to task-specific state-of-the-art models?

**Size and number of examples matters**. By default, the results will based on
- the full GPT-3 model (davinci), which has 175 billion parameters
- using in-context learning with as many training instances as you can stuff into the prompt.

Along the way, we will do ablations to see if model size and number of in-context training instances matters. Spoiler: it does and more is better.

The tasks are grouped as follows:
1. [Language modeling](https://stanford-cs324.github.io/winter2022/lectures/capabilities/#language-modeling)
2. [Question answering](https://stanford-cs324.github.io/winter2022/lectures/capabilities/#question-answering)
3. [Translation](https://stanford-cs324.github.io/winter2022/lectures/capabilities/#translation)
4. [Arithmetic](https://stanford-cs324.github.io/winter2022/lectures/capabilities/#arithmetic)
5. [News article generation](https://stanford-cs324.github.io/winter2022/lectures/capabilities/#news-article-generation)
6. [Novel tasks](https://stanford-cs324.github.io/winter2022/lectures/capabilities/#novel-tasks)


### A Brief History of The Technical Evolution Of Language Models
#### Information Theory, Entropy of English, N-Gram Models
↗ [Information Theory](../../../🧮%20Mathematics/🧐%20Information%20Theory/Information%20Theory.md)

> 🔗 https://stanford-cs324.github.io/winter2022/lectures/introduction/#a-brief-history

**Information theory**. Language models date back to Claude Shannon, who founded information theory in 1948 with his seminal paper, [A Mathematical Theory of Communication](https://dl.acm.org/doi/pdf/10.1145/584091.584093). In this paper, he introduced the **entropy** of a distribution as

H(p)=∑xp(x)log1p(x).

The entropy measures the expected number of bits **any algorithm** needs to encode (compress) a sample x∼p into a bitstring:

𝗍𝗁𝖾 𝗆𝗈𝗎𝗌𝖾 𝖺𝗍𝖾 𝗍𝗁𝖾 𝖼𝗁𝖾𝖾𝗌𝖾⇒0001110101.

- The lower the entropy, the more “structured” the sequence is, and the shorter the code length.
- Intuitively, log1p(x) is the length of the code used to represent an element x that occurs with probability p(x).
- If p(x)=18, we should allocate log2(8)=3 bits (equivalently, log(8)=2.08 nats).

_Aside_: actually achieving the Shannon limit is non-trivial (e.g., LDPC codes) and is the topic of coding theory.


**Entropy of English**. Shannon was particularly interested in measuring the entropy of English, represented as a sequence of letters. This means we imagine that there is a “true” distribution p out there (the existence of this is questionable, but it’s still a useful mathematical abstraction) that can spout out samples of English text x∼p.

Shannon also defined **cross entropy**:

H(p,q)=∑xp(x)log1q(x),

which measures the expected number of bits (nats) needed to encode a sample x∼p using the compression scheme given by the model q (representing x with a code of length 1q(x)).

**Estimating entropy via language modeling**. A crucial property is that the cross entropy H(p,q) upper bounds the entropy H(p),

H(p,q)≥H(p),

which means that we can estimate H(p,q) by constructing a (language) model q with only samples from the true data distribution p, whereas H(p) is generally inaccessible if p is English.

So we can get better estimates of the entropy H(p) by constructing better models q, as measured by H(p,q).


**Shannon game (human language model)**. Shannon first used n-gram models as q in 1948, but in his 1951 paper [Prediction and Entropy of Printed English](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=6773263), he introduced a clever scheme (known as the Shannon game) where q was provided by a human:

𝗍𝗁𝖾 𝗆𝗈𝗎𝗌𝖾 𝖺𝗍𝖾 𝗆𝗒 𝗁𝗈_

Humans aren’t good at providing calibrated probabilities of arbitrary text, so in the Shannon game, the human language model would repeatedly try to guess the next letter, and one would record the number of guesses.
##### N-gram models for downstream applications
Language models became first used in practical applications that required generation of text:
- speech recognition in the 1970s (input: acoustic signal, output: text), and
- machine translation in the 1990s (input: text in a source language, output: text in a target language).


**Noisy channel model**. The dominant paradigm for solving these tasks then was the **noisy channel model**. Taking speech recognition as an example:
- We posit that there is some text sampled from some distribution p.
- This text becomes realized to speech (acoustic signals).
- Then given the speech, we wish to recover the (most likely) text. This can be done via Bayes rule:

p(text∣speech)∝p(text)⏟language modelp(speech∣text)acoustic model.

Speech recognition and machine translation systems used n-gram language models over words (first introduced by Shannon, but for characters).

**N-gram models**. In an **n-gram model**, the prediction of a token xi only depends on the last n−1 characters xi−(n−1):i−1 rather than the full history:

p(xi∣x1:i−1)=p(xi∣xi−(n−1):i−1).

For example, a trigram (n=3) model would define:

p(𝖼𝗁𝖾𝖾𝗌𝖾∣𝗍𝗁𝖾,𝗆𝗈𝗎𝗌𝖾,𝖺𝗍𝖾,𝗍𝗁𝖾)=p(𝖼𝗁𝖾𝖾𝗌𝖾∣𝖺𝗍𝖾,𝗍𝗁𝖾).

These probabilities are computed based on the number of times various n-grams (e.g., 𝖺𝗍𝖾 𝗍𝗁𝖾 𝗆𝗈𝗎𝗌𝖾 and 𝖺𝗍𝖾 𝗍𝗁𝖾 𝖼𝗁𝖾𝖾𝗌𝖾) occur in a large corpus of text, and appropriately smoothed to avoid overfitting (e.g., Kneser-Ney smoothing).

Fitting n-gram models to data is extremely **computationally cheap** and scalable. As a result, n-gram models were trained on massive amount of text. For example, [Brants et al. (2007)](https://aclanthology.org/D07-1090.pdf) trained a 5-gram model on 2 trillion tokens for machine translation. In comparison, GPT-3 was trained on only 300 billion tokens. However, an n-gram model was fundamentally limited. Imagine the prefix:

𝖲𝗍𝖺𝗇𝖿𝗈𝗋𝖽 𝗁𝖺𝗌 𝖺 𝗇𝖾𝗐 𝖼𝗈𝗎𝗋𝗌𝖾 𝗈𝗇 𝗅𝖺𝗋𝗀𝖾 𝗅𝖺𝗇𝗀𝗎𝖺𝗀𝖾 𝗆𝗈𝖽𝖾𝗅𝗌. 𝖨𝗍 𝗐𝗂𝗅𝗅 𝖻𝖾 𝗍𝖺𝗎𝗀𝗁𝗍 𝖻𝗒 ___

If n is too small, then the model will be incapable of capturing long-range dependencies, and the next word will not be able to depend on 𝖲𝗍𝖺𝗇𝖿𝗈𝗋𝖽. However, if n is too big, it will be **statistically infeasible** to get good estimates of the probabilities (almost all reasonable long sequences show up 0 times even in “huge” corpora):

count(𝖲𝗍𝖺𝗇𝖿𝗈𝗋𝖽,𝗁𝖺𝗌,𝖺,𝗇𝖾𝗐,𝖼𝗈𝗎𝗋𝗌𝖾,𝗈𝗇,𝗅𝖺𝗋𝗀𝖾,𝗅𝖺𝗇𝗀𝗎𝖺𝗀𝖾,𝗆𝗈𝖽𝖾𝗅𝗌)=0.

As a result, language models were limited to tasks such as speech recognition and machine translation where the acoustic signal or source text provided enough information that only capturing **local dependencies** (and not being able to capture long-range dependencies) wasn’t a huge problem.
#### Neural Networks
↗ [Deep Learning (Neural Networks)](../🗝️%20AI%20Basics%20&%20Machine%20Learning/📌%20Deep%20Learning%20(Neural%20Network)/Deep%20Learning%20(Neural%20Networks).md)
↗ [Neural Network Models](../🗝️%20AI%20Basics%20&%20Machine%20Learning/📌%20Deep%20Learning%20(Neural%20Network)/2️⃣%20Neural%20Network%20Models%20🗿/Neural%20Network%20Models.md)

![](../../../../Assets/Pics/Screenshot%202025-09-01%20at%2010.56.49.png)
<small>
Zhao, W. X., Zhou, K., Li, J., Tang, T., Wang, X., Hou, Y., Min, Y., Zhang, B., Zhang, J., Dong, Z., Du, Y., Yang, C., Chen, Y., Chen, Z., Jiang, J., Ren, R., Li, Y., Tang, X., Liu, Z., … Wen, J.-R. (2025). A Survey of Large Language Models (arXiv:2303.18223). arXiv. <br><a>https://doi.org/10.48550/arXiv.2303.18223</a></small>

> 🔗 https://stanford-cs324.github.io/winter2022/lectures/introduction/#neural-language-models

An important step forward for language models was the introduction of neural networks. [Bengio et al., 2003](https://www.jmlr.org/papers/volume3/bengio03a/bengio03a.pdf) pioneered neural language models, where p(xi∣xi−(n−1):i−1) is given by a neural network:

p(𝖼𝗁𝖾𝖾𝗌𝖾∣𝖺𝗍𝖾,𝗍𝗁𝖾)=some-neural-network(𝖺𝗍𝖾,𝗍𝗁𝖾,𝖼𝗁𝖾𝖾𝗌𝖾).

Note that the context length is still bounded by n, but it is now **statistically feasible** to estimate neural language models for much larger values of n.

Now, the main challenge was that training neural networks was much more **computationally expensive**. They trained a model on only 14 million words and showed that it outperformed n-gram models trained on the same amount of data. But since n-gram models were more scalable and data was not a bottleneck, n-gram models continued to dominate for at least another decade.

Since 2003, two other key developments in neural language modeling include:
- **Recurrent Neural Networks** (RNNs), including Long Short Term Memory (LSTMs), allowed the conditional distribution of a token xi to depend on the **entire context** x1:i−1 (effectively n=∞), but these were hard to train.
- **Transformers** are a more recent architecture (developed for machine translation in 2017) that again returned to having fixed context length n, but were much **easier to train** (and exploited the parallelism of GPUs). Also, n could be made “large enough” for many applications (GPT-3 used n=2048).
#### Large Language Models
↗ [LLM (Large Language Model) /The Technical Evolution of LLM & Future Directions](🦑%20LLM%20(Large%20Language%20Model)/LLM%20(Large%20Language%20Model).md#The%20Technical%20Evolution%20of%20LLM%20&%20Future%20Directions)



## Ref
