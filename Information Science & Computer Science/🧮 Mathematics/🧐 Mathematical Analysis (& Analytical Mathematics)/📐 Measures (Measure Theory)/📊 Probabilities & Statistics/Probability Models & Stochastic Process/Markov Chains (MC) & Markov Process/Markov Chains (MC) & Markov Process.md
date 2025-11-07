# Markov Chains (MC) & Markov Process

[TOC]



## Res
### Related Topics
↗ [Theory of Computation](../../../../../🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Theory%20of%20Computation.md)
↗ [(Formal) Model Checking](../../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Analysis%20&%20Binary%20Engineering/📌%20Software%20(Program)%20Analysis%20Basics/🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/(Formal)%20Model%20Checking/(Formal)%20Model%20Checking.md) "transition system"

↗ [PRISM](../../../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/⛰️%20Static%20Code%20Analysis%20Tools%20(SCAT)/🤼%20Model%20Checker/PRISM.md)


### Other Resources
🎬 https://youtube.com/playlist?list=PLM8wYQRetTxBkdvBtz-gw8b9lcVkdXQKV&si=pzMOKOIPUO6bQ4J2 
👍 Markov Chains Clearly Explained! | by Normalized Nerd, Youtube

📂 https://www.prismmodelchecker.org/tutorial/
This tutorial will introduce you to the PRISM tool using a selection of example models.
The tutorial comprises several parts. If you are new to the tool, we recommend that you start by working through the first part (Knuth's die algorithm) to see the basics. After that, you should be able to look at the remaining parts in any order, depending in which models or applications you are interested in. If anything is unclear, the best place to look for answers is the [PRISM manual](https://www.prismmodelchecker.org/manual/).
- **[Knuth's die algorithm](https://www.prismmodelchecker.org/tutorial/die.php)**: This uses a simple **discrete-time Markov chain (DTMC)** example - a randomised algorithm for modelling a 6-sided die with a fair coin due to Don Knuth. It introduces the basics of the PRISM modelling language and the PRISM tool.  
- **[Herman's self-stabilisation algorithm](https://www.prismmodelchecker.org/tutorial/herman.php)**: This uses another simple randomised algorithm: a self-stabilisation algorithm due to Herman. This is also modelled as a **DTMC** and introduces some additional features of the **PRISM modelling** and property languages.  
- **[Robot navigation](https://www.prismmodelchecker.org/tutorial/robot.php)**: This introduces the use of **Markov decision processes (MDPs)** for generating control policies based on temporal logic specifications, via a simple example of a robot navigating through an uncertain environment.  
- **[Autonomous drone](https://www.prismmodelchecker.org/tutorial/drone.php)**: This shows how to use **interval Markov decision processes (IMDPs)** to incorporate **epistemic uncertainty** into probabilistic model checking of MDPs, specifically regarding the precise value of transition probabilities. It uses an example of an autonomous drone.  
- **[Dynamic power management](https://www.prismmodelchecker.org/tutorial/power.php)**: This introduces a **multi-component system** modelled as a **continuous-time Markov chain (CTMC)**: a controller for a dynamic power management system.  
- **[Circadian clock](https://www.prismmodelchecker.org/tutorial/circadian.php)**: This demonstrates the use of PRISM to study a **biological system**, modelled as a **CTMC**: a circadian clock.  
- **[EGL contract signing protocol](https://www.prismmodelchecker.org/tutorial/egl.php)**: This uses a case study from the field of **computer security**, modelled as a **DTMC**: the EGL contract signing protocol.  
- **[Dining philosophers problem](https://www.prismmodelchecker.org/tutorial/phil.php)**: This introduces the use of a **MDP** to verify a simple **distributed randomised algorithm**: the dining philosophers problem.

[KNP07a](https://www.prismmodelchecker.org/bibitem.php?key=KNP07a) (for DTMCs and CTMCs)
[FKNP11](https://www.prismmodelchecker.org/bibitem.php?key=FKNP11) (for MDPs)
[NPS13](https://www.prismmodelchecker.org/bibitem.php?key=NPS13) (for PTAs)
[SK16](https://www.prismmodelchecker.org/bibitem.php?key=SK16) (for stochastic games)

Arnd Hartmanns, Holger Hermanns, In the quantitative automata zoo, Science of Computer Programming, Volume 112, Part 1, 2015, Pages 3-23, ISSN 0167-6423,
https://doi.org/10.1016/j.scico.2015.08.009.



## Intro
![](../../../../../../../Assets/Pics/Screenshot%202025-09-06%20at%2000.17.29.png)
<small><a>https://youtu.be/i3AkTO9HLXo?si=xHI2YFg1ZGp85ALo</a></small>

> 🔗 https://en.wikipedia.org/wiki/Markov_chain

==In probability theory and statistics, a **Markov chain** or **Markov process** is a [stochastic process](https://en.wikipedia.org/wiki/Stochastic_process "Stochastic process") describing a [sequence](https://en.wikipedia.org/wiki/Sequence "Sequence") of possible events in which the [probability](https://en.wikipedia.org/wiki/Probability "Probability") of each event depends only on the state attained in the previous event. Informally, this may be thought of as, "What happens next depends only on the state of affairs _now_."== 

A [countably infinite](https://en.wikipedia.org/wiki/Countably_infinite "Countably infinite") sequence, in which the chain moves state at discrete time steps, gives a [discrete-time Markov chain](https://en.wikipedia.org/wiki/Discrete-time_Markov_chain "Discrete-time Markov chain") (DTMC). A [continuous-time](https://en.wikipedia.org/wiki/Continuous-time "Continuous-time") process is called a [continuous-time Markov chain](https://en.wikipedia.org/wiki/Continuous-time_Markov_chain "Continuous-time Markov chain") (CTMC). Markov processes are named in honor of the [Russian](https://en.wikipedia.org/wiki/Russia "Russia") mathematician [Andrey Markov](https://en.wikipedia.org/wiki/Andrey_Markov "Andrey Markov").

Markov chains have many applications as [statistical models](https://en.wikipedia.org/wiki/Statistical_model "Statistical model") of real-world processes. They provide the basis for general stochastic simulation methods known as [Markov chain Monte Carlo](https://en.wikipedia.org/wiki/Markov_chain_Monte_Carlo "Markov chain Monte Carlo"), which are used for simulating sampling from complex [probability distributions](https://en.wikipedia.org/wiki/Probability_distribution "Probability distribution"), and have found application in areas including [Bayesian statistics](https://en.wikipedia.org/wiki/Bayesian_statistics "Bayesian statistics"), [biology](https://en.wikipedia.org/wiki/Biology "Biology"), [chemistry](https://en.wikipedia.org/wiki/Chemistry "Chemistry"), [economics](https://en.wikipedia.org/wiki/Economics "Economics"), [finance](https://en.wikipedia.org/wiki/Finance "Finance"), [information theory](https://en.wikipedia.org/wiki/Information_theory "Information theory"), [physics](https://en.wikipedia.org/wiki/Physics "Physics"), [signal processing](https://en.wikipedia.org/wiki/Signal_processing "Signal processing"), and [speech processing](https://en.wikipedia.org/wiki/Speech_processing "Speech processing").

**The adjectives _Markovian_ and _Markov_ are used to describe something that is related to a Markov process.**


> ↗ [(Formal) Model Checking](../../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Analysis%20&%20Binary%20Engineering/📌%20Software%20(Program)%20Analysis%20Basics/🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/(Formal)%20Model%20Checking/(Formal)%20Model%20Checking.md)
> 🔗 https://www.modestchecker.net/

![|350](../../../../../../../../Assets/Pics/Pasted%20image%2020251024212947.png)

The **Modest Toolset** supports the modelling and analysis of hybrid, real-time, distributed and stochastic systems. A modular framework centered around the stochastic hybrid automata formalism [HHHK13](https://www.modestchecker.net/Publications/?HHHK13) and supporting the [JANI specification](http://www.jani-spec.org/), it provides a variety of input languages and analysis backends.

At the core of the Modest Toolset is the model of _networks of **stochastic hybrid automata**_ (SHA), which combine nondeterministic choices, continuous system dynamics, stochastic decisions and timing, and real-time behaviour, including nondeterministic delays. A wide range of well-known and extensively studied formalisms in modelling and verification can be seen as special cases of SHA:
- **STA** (stochastic timed automata), the original semantic foundation of Modest [BDHK06](https://www.modestchecker.net/Publications/?BDHK06), are SHA without complex continuous behaviour (i.e. without variables whose evolution over time is governed by differential equations or inclusions, except for clock variables).
- **PTA** (probabilistic timed automata) are obtained from STA by restricting stochastic decisions to choices based on finite-support probability distributions (such as the discrete uniform or the Bernoulli distribution).
- **TA** (timed automata) are nonprobabilistic PTA. Delays and discrete choices can still be nondeterministic, but not stochastic. TA are widely used to model real-time systems and requirements.
- **PA/MDP** (probabilistic automata/Markov decision processes), on the other hand, can be seen as PTA without the notion of time, i.e. without clock variables or delays. PA theory focuses on compositionality and simulation relations between models, while MDP are usually considered with costs or rewards, but both are essentially the same model.
- **LTS** (labelled transition systems), alternatively Kripke structures or finite automata, are the most basic, fundamental model for verification. Allowing nondeterministic choices, they are supported by a wide range of model-checking tools of impressive scalability.
- **DTMC** (discrete-time Markov chains) are the basic discrete probabilistic model. As a model without nondeterminism, they are not only amenable to a wide range of numerical analysis approaches, but also ideally suited for simulation.
- **CTMC**, **IMC** and **MA** (continuous-time Markov chains, interactive Markov chains and Markov automata) form the family of stochastic models based on the notion of _exponentially distributed delays_, which can be represented in STA via a combination of sampling from the exponential distribution and subsequently waiting the sampled amount of time using a dedicated clock variable.



## Ref
[The Strange Math That Predicts (Almost) Anything | Veritasium]: https://youtu.be/KZeIEiBrT_w?si=pkrdzcBgEBEO7LcE
