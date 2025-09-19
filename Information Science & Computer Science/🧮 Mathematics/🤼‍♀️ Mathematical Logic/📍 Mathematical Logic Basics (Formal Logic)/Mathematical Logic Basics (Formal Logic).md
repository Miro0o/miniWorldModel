# Mathematical Logic Basics (Formal Logic)

[TOC]



## Res
### Related Topics
↗ [Logic (and Critical Thinking)](../../../../Other%20Networks%20of%20Knowledge/♂%20Philosophy/Philosophy%20by%20Disciplines%20&%20Topics/🎼%20Logic%20(and%20Critical%20Thinking)/Logic%20(and%20Critical%20Thinking).md)
↗ [Logic Programming Languages](../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20for%20Specific%20Areas/Logic%20Programming%20Languages/Logic%20Programming%20Languages.md)
↗ [Logic And Mechanized (Formal) Reasoning](../Logic%20And%20Mechanized%20(Formal)%20Reasoning.md)

↗ [Lisp-Based Languages](../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Compiled%20Languages/Lisp-Based%20Languages/Lisp-Based%20Languages.md)
↗ [Expert System (ES)](../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/Expert%20System%20(ES)/Expert%20System%20(ES).md)

↗ [Theory of Computation](../😶‍🌫️%20Theory%20of%20Computation/Theory%20of%20Computation.md)
- ↗ [Automata Theory and (Formal) Language Theory](../😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Automata%20Theory%20and%20(Formal)%20Language%20Theory.md)

↗ [Formal Semantics and Programming Language](../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Formal%20Semantics%20and%20Programming%20Language/Formal%20Semantics%20and%20Programming%20Language.md)
↗ [(Formal) Model Checking](../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20Analysis%20&%20Binary%20Engineering/📌%20Software%20Analysis%20Basics/🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/(Formal)%20Model%20Checking/(Formal)%20Model%20Checking.md)
↗ [Mathematical Modeling & Real World Problem Solving](../../Mathematical%20Modeling%20&%20Real%20World%20Problem%20Solving.md)

↗ [The Essence of Computing - Program](../../../🗺%20CS%20Overview/The%20Essence%20of%20Computing%20-%20Program.md)



## Intro
### Proposition
> 🔗 https://baike.baidu.com/item/%E5%91%BD%E9%A1%8C/119969#4

命题分类
- 亚里士多德在《工具论》，特别是其中的《范畴篇》中，研究了命题的不同形式及其相互关系，根据形式的不同对命题的不同类型进行了分类。亚里士多德把命题首先分为简单的和复合的两类，但他对复合命题并没有深入探讨。他进而把简单命题按质分为肯定的和否定的，按量分为全称、特称和不定的命题。他还提到个体命题，这相当于后来所谓的以专名为主项、以普遍概念为谓项的单称命题。亚里士多德着重讨论了后人以A、E、I、O为代表的4种命题。关于模态命题，他讨论了必然、不可能、可能和偶然这 4个模态词。亚里士多德所说的模态，是指事件发生的必然性、可能性等。
	- 亚里士多德以后的逻辑学家，如泰奥弗拉斯多、麦加拉学派和斯多阿学派的逻辑学家，以及中世纪的逻辑学家等，又对包含有命题联结词"或者"、"并且"、"如果，则"等的复合命题进行了不断的探讨，从而丰富了逻辑学关于命题的学说。
- 康德分类康德根据他的范畴理论对判断作了分类，这个分类对后世的影响很大。康德对判断的分类主要有4个方面：
	- 量，包括全称、特称、单称三种判断；
	- 质，包括肯定、否定、无限（所有S是非P）这几种判断；
	- 关系，有直言（两概念间的关系）、假言（两判断间的关系）、选言（若干判断间的关系）判断；
	- [模态](https://baike.baidu.com/item/%E6%A8%A1%E6%80%81/0?fromModule=lemma_inlink)，有或（概）然、实然、确然几种判断。康德所谓的模态，是指认识的程度。他认为组成假言判断、选言判断的判断，都是或然的。
- 传统逻辑分类
	- 19世纪下半叶欧洲逻辑读本对命题的分类不尽一致。大体说来，按关系即按命题主[谓项](https://baike.baidu.com/item/%E8%B0%93%E9%A1%B9/0?fromModule=lemma_inlink)之间的关系分，有[直言命题](https://baike.baidu.com/item/%E7%9B%B4%E8%A8%80%E5%91%BD%E9%A2%98/0?fromModule=lemma_inlink)、[假言命题](https://baike.baidu.com/item/%E5%81%87%E8%A8%80%E5%91%BD%E9%A2%98/0?fromModule=lemma_inlink)（后件主谓项的联系以前件为条件）和[选言命题](https://baike.baidu.com/item/%E9%80%89%E8%A8%80%E5%91%BD%E9%A2%98/0?fromModule=lemma_inlink)（谓项之间对[主项](https://baike.baidu.com/item/%E4%B8%BB%E9%A1%B9/0?fromModule=lemma_inlink)有选择关系）。从质的角度分，有肯定命题和否定命题。从量的角度分，有全称命题，包括单称命题、普遍命题（凡S是P）和[特称命题](https://baike.baidu.com/item/%E7%89%B9%E7%A7%B0%E5%91%BD%E9%A2%98/0?fromModule=lemma_inlink)。这些传统逻辑读本在讨论选言命题时，也往往论及[联言命题](https://baike.baidu.com/item/%E8%81%94%E8%A8%80%E5%91%BD%E9%A2%98/0?fromModule=lemma_inlink)、分离命题（非A并且非B）等。另外，还有一类可解析命题也是常常提到的。在这类命题中，有一种叫区别命题，其形式为"只有S才是P"；还有一种叫除外命题，其形式为"除是M的S外每个S是P"。
- 形式分析
	- 现代逻辑对命题形式的分析，由于推理的有效性只与推理的前提和结论的形式有关，而与作为前提和结论的命题的具体内容无关。因此，在经典的二值逻辑里，命题可以只看成真（记为T）和假（记为F）两种，并统称为真值。
	- 对命题形式的进一步分析，要深入到最[简单](https://baike.baidu.com/item/%E7%AE%80%E5%8D%95/0?fromModule=lemma_inlink)命题内部的非命题成分。在现代逻辑中，类似"苏格拉底是人"这样的命题，被认为是最简单的命题。若以s代表"苏格拉底",以M代表"人",该类命题就可记为M(s),这表示某一个体s具有性质R。推广来说，最简单的命题的形式为F(x)，可读作[论域](https://baike.baidu.com/item/%E8%AE%BA%E5%9F%9F/0?fromModule=lemma_inlink)中的个体x具有性质F；较为复杂的形式可以有填G(x,y)),可读作论域中的个体x,y)之间具有关系G。在这里，x,y),...称为个体变项；F,G,...称为谓词变项，而F是一元的，G是二元的。一般全称命题的形式是风x(Fx→Gx)，而存在命题、即传统逻辑所谓的特称命题的形式是 ヨx(Fx∧Gx)。所有这些都是现代逻辑里的经典一阶谓词逻辑对命题形式所作的初步分析（见[谓词逻辑](https://baike.baidu.com/item/%E8%B0%93%E8%AF%8D%E9%80%BB%E8%BE%91/0?fromModule=lemma_inlink)）。此外，把量词加之于谓词变项，便形成了[高阶逻辑](https://baike.baidu.com/item/%E9%AB%98%E9%98%B6%E9%80%BB%E8%BE%91/0?fromModule=lemma_inlink)。也还可以引入模态词，或分析疑问句、命令句等等，从而建立有关的逻辑理论。


### Predicate


### Semantic & The Semantics of Mathematical Logics
↗ [Semantic Analysis](../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20Analysis%20&%20Binary%20Engineering/📌%20Software%20Analysis%20Basics/👚%20SCA%20(Static%20Code%20Analysis)%20&%20SAST/🐣%20Static%20Analysis%20Before%20IR/Semantic%20Analysis.md)
↗ [Formal Semantics and Programming Language](../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Formal%20Semantics%20and%20Programming%20Language/Formal%20Semantics%20and%20Programming%20Language.md)
↗ [Semantic Models & Languages](../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20for%20Specific%20Areas/🗣️%20Database%20Languages/Object-Based%20Data%20Model%20Languages/Semantic%20Models%20&%20Languages/Semantic%20Models%20&%20Languages.md)

Semantics is the mapping between A and B. Usually, this involves the mapping between a concept and something (another concept or a real object); specifically, a language and something (another concept expressed in some language, or a real object).
- This is because the significance of language! We use language to think, express, and communicate. 

However, (in my opinion) this is not necessary. Semantics is just the process that we draw this mapping relation between anything in the Universe.

![Human_and_knowledge.excalidraw | 800](../../../../Assets/Illustrations/Computer%20Science%20Philosophy/Human_and_knowledge.excalidraw.md)
<small>The relationship of language, information/data, computation, and automation.</small>

![computing.excalidraw | 800](../../../../Assets/Illustrations/Computer%20Science%20Philosophy/computing.excalidraw.md)
#### (Mathematical Logic) Language and (Computation) Models
↗ [Language & Literature](../../../../Other%20Networks%20of%20Knowledge/Arts%20&%20Cultures/📃%20Language%20&%20Literature/Language%20&%20Literature.md)

↗ [Theory of Computation](../😶‍🌫️%20Theory%20of%20Computation/Theory%20of%20Computation.md)
- ↗ [Automata Theory and (Formal) Language Theory](../😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Automata%20Theory%20and%20(Formal)%20Language%20Theory.md)
↗ [Computer Languages & Programming Methodology](../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Computer%20Languages%20&%20Programming%20Methodology.md)
- ↗ [Programming Language Theory (PLT)](../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Programming%20Language%20Theory%20(PLT).md)
↗ [Mathematical Modeling & Real World Problem Solving](../../Mathematical%20Modeling%20&%20Real%20World%20Problem%20Solving.md)
↗ [(Formal) Model Checking](../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20Analysis%20&%20Binary%20Engineering/📌%20Software%20Analysis%20Basics/🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/(Formal)%20Model%20Checking/(Formal)%20Model%20Checking.md)

↗ [The Essence of Computing - Program](../../../🗺%20CS%20Overview/The%20Essence%20of%20Computing%20-%20Program.md)

In computer science, however, there are some certain languages (in the form of mathematical logics) that we map (to our computational models). Why? Because this is the way how an automated information computing machine (computer) is build and verified, bottum-up, from ground zero, from nothing but a solid piece of mathematical thoughts.

![computer_architecture.excalidraw | 800](../../../../Assets/Illustrations/Computer%20System/computer_architecture_and_computer_science.excalidraw.md)
<small>Computer System & Computer Science Overview</small>

For example, a high-level programming language, say ↗ [Java](../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Compiled%20+%20Interpreted%20Languages/⚰️%20JVM-Based%20Languages/☕️%20Java/Java.md), have semantics to some sort of computational model, at a horizontal level, say a ↗ [Linear-Bounded Automaton (LBA)](../😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Context-Sensitive%20Languages%20(CSL)%20&%20Linear-Bounded%20Automata%20(LBA).md). Also, a high-level programming language can have semantics to a low-level language as well, at a vertical level, say ↗ [Operational Semantics](../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Formal%20Semantics%20and%20Programming%20Language/Operational%20Semantics.md).

Likewise, a low-level mathematical logic can also have semantics to another low-level mathematical logic, or to a high-level programming language, or some sort of computational model as well! 

A great example of this, is in the note of ↗ [The Essence of Computing - Program](../../../🗺%20CS%20Overview/The%20Essence%20of%20Computing%20-%20Program.md). This note explains how computer is constructed layer by layer, using mapping of semantics, from the very beginning to the very ultimate: from operational semantics (logic language) to transition systems (computational model), then from transition systems to everything: integrated circuits, programming languages, communication protocols, ... and finally the "computer" itself, in the sense of both conceptual and physical. In one word, the physical computer that we see and use nowadays is semantically equivalent to its very first design in ↗ [Operational Semantics](../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Formal%20Semantics%20and%20Programming%20Language/Operational%20Semantics.md), a kind of mathematical logic language. 
- Imagine, one day you have some sorts of very crazy ideas that only exists in your mind, and after long long hardworking days that idea finally became an actual, touchable thing showing up in front of people. How cool it is!

In the study of Computer Science, we learn both those mathematical logics and computational models. (Sometimes this is exhausted,  because people don't like to learn that many things to simply achieve some easy tasks they meet at the moment. But I say let's study 🤓)
#### Satisfiability
When we mapping two objects, "assigning semantics", there are some rules. When there are rules, such mapping can be deduced to a decision problem: either the mapping succeed or fail. In the case of mapping between logic language and computational model, if such mapping succeeded, we say A accept B, or A satisfy B. Accordingly, B is satisfiable, or SAT.

Specifically, we always consider whether a computational model accept a logic language.


### Soundness & Completeness
**Definition**: Soundness
In a sound system, we can only prove true things.
- if we can prove $\Phi$ given $\Sigma$
	- i.e. $(\Sigma \vdash \Phi)$ 
- then $\Phi$ is **true** given $\Sigma$
	- i.e. $(\Sigma \models Φ)$
- i.e. $\Sigma \vdash \Phi \implies \Sigma \models \Phi$

 **Definition 4**: Completeness
 In a complete system, we can prove all true things. 
- if $\Phi$ is **true** given $\Sigma$
	- $(\Sigma \models \Phi)$
- then $\phi$ is provable given $\Sigma$
	- $(\Sigma \vdash \Phi)$
- i.e. $\Sigma \models \Phi \implies \Sigma \vdash \Phi$

![](../../../../Assets/Pics/Pasted%20image%2020250908234809.png)

> 🔗 https://en.wikipedia.org/wiki/Soundness

In [mathematical logic](https://en.wikipedia.org/wiki/Mathematical_logic "Mathematical logic"), a [logical system](https://en.wikipedia.org/wiki/Logical_system "Logical system") has the soundness property if every [formula](https://en.wikipedia.org/wiki/Formula_\(mathematical_logic\) "Formula (mathematical logic)") that can be proved in the system is logically valid with respect to the [semantics](https://en.wikipedia.org/wiki/Formal_semantics_\(logic\) "Formal semantics (logic)") of the system. In most cases, this comes down to its rules having the property of _preserving [truth](https://en.wikipedia.org/wiki/Truth "Truth")_. The [converse](https://en.wikipedia.org/wiki/Converse_\(logic\)#Categorical_converse "Converse (logic)") of soundness is known as [completeness](https://en.wikipedia.org/wiki/Completeness_\(logic\) "Completeness (logic)").

A logical system with [syntactic entailment](https://en.wikipedia.org/wiki/Logical_consequence#Syntactic_consequence "Logical consequence") $\vdash$ and [semantic entailment](https://en.wikipedia.org/wiki/Logical_consequence#Semantic_consequence "Logical consequence") $\models$ is **sound** if for any [sequence](https://en.wikipedia.org/wiki/Sequence "Sequence") $A_1, A_2, ..., A_n$ of [sentences](https://en.wikipedia.org/wiki/Sentence_\(mathematical_logic\) "Sentence (mathematical logic)") in its language, if $A_1, A_2, ..., A_n \vdash C$, then $A_1, A_2, ..., A_n \models C$. In other words, a system is sound when all of its [theorems](https://en.wikipedia.org/wiki/Theorem "Theorem") are [validities](https://en.wikipedia.org/wiki/Validity_\(logic\) "Validity (logic)").

Soundness is among the most fundamental properties of mathematical logic. The soundness property provides the initial reason for counting a logical system as desirable. The [completeness](https://en.wikipedia.org/wiki/Completeness_\(logic\) "Completeness (logic)") property means that every validity (truth) is provable. Together they imply that all and only validities are provable.

Most proofs of soundness are trivial. For example, in an [axiomatic system](https://en.wikipedia.org/wiki/Axiomatic_system "Axiomatic system"), proof of soundness amounts to verifying the validity of the axioms and that the rules of inference preserve validity (or the weaker property, truth). If the system allows [Hilbert-style deduction](https://en.wikipedia.org/wiki/Hilbert-style_deductive_system "Hilbert-style deductive system"), it requires only verifying the validity of the axioms and one rule of inference, namely [modus ponens](https://en.wikipedia.org/wiki/Modus_ponens "Modus ponens") (and sometimes substitution).

Soundness properties come in two main varieties: weak and strong soundness, of which the former is a restricted form of the latter.
#### Weak Soundness
Weak soundness of a [deductive system](https://en.wikipedia.org/wiki/Deductive_system "Deductive system") is the property that any sentence that is provable in that deductive system is also true on all interpretations or structures of the semantic theory for the language upon which that theory is based. In symbols, where $S$ is the deductive system, $L$ the language together with its semantic theory, and _P_ a sentence of _L_: if $\vdash_S P$, then also $\models_L P$.
#### Strong soundness
Strong soundness of a deductive system is the property that any sentence $P$ of the language upon which the deductive system is based that is derivable from a set $\Gamma$ of sentences of that language is also a [logical consequence](https://en.wikipedia.org/wiki/Logical_consequence "Logical consequence") of that set, in the sense that any model that makes all members of $\Gamma$ true will also make $P$ true. In symbols, where $\Gamma$ is a set of sentences of $L$: if $\Gamma \vdash_S P$, then also $\Gamma \models_L P$. Notice that in the statement of strong soundness, when $\Gamma$ is empty, we have the statement of weak soundness.
#### Arithmetic soundness
If $T$ is a theory whose objects of discourse can be interpreted as [natural numbers](https://en.wikipedia.org/wiki/Natural_numbers "Natural numbers"), we say $T$ is **_arithmetically sound_** if all theorems of $T$ are actually true about the standard mathematical integers. For further information, see [ω-consistent theory](https://en.wikipedia.org/wiki/%CE%A9-consistent_theory "Ω-consistent theory").
#### Relation to completeness
The converse of the soundness property is the semantic [completeness](https://en.wikipedia.org/wiki/Completeness_\(logic\) "Completeness (logic)") property. A deductive system with a semantic theory is strongly complete if every sentence $P$ that is a [semantic consequence](https://en.wikipedia.org/wiki/Semantic_consequence "Semantic consequence") of a set of sentences $\Gamma$ can be derived in the [deduction system](https://en.wikipedia.org/wiki/Deduction_system "Deduction system") from that set. In symbols: whenever $\Gamma \models P$, then also $\Gamma \vdash P$. Completeness of [first-order logic](https://en.wikipedia.org/wiki/First-order_logic "First-order logic") was first [explicitly established](https://en.wikipedia.org/wiki/G%C3%B6del%27s_completeness_theorem "Gödel's completeness theorem") by [Gödel](https://en.wikipedia.org/wiki/G%C3%B6del "Gödel"), though some of the main results were contained in earlier work of [Skolem](https://en.wikipedia.org/wiki/Skolem "Skolem").

Informally, a soundness theorem for a deductive system expresses that all provable sentences are true. Completeness states that all true sentences are provable.

[Gödel's first incompleteness theorem](https://en.wikipedia.org/wiki/G%C3%B6del%27s_incompleteness_theorem "Gödel's incompleteness theorem") shows that for languages sufficient for doing a certain amount of arithmetic, there can be no consistent and effective deductive system that is complete with respect to the intended interpretation of the symbolism of that language. Thus, not all sound deductive systems are complete in this special sense of completeness, in which the class of models (up to [isomorphism](https://en.wikipedia.org/wiki/Isomorphism "Isomorphism")) is restricted to the intended one. The original completeness proof applies to _all_ classical models, not some special proper subclass of intended ones.



## Ref
