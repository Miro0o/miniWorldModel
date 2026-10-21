# PRISM

[TOC]



## Res
🏠 https://www.prismmodelchecker.org/
🚧 
📄 [Marta Kwiatkowska](http://www.cs.ox.ac.uk/people/marta.kwiatkowska/), [Gethin Norman](http://www.dcs.gla.ac.uk/people/personal/gethin/) and [David Parker](https://www.cs.ox.ac.uk/people/david.parker/home.html). [PRISM 4.0: Verification of Probabilistic Real-time Systems](https://www.prismmodelchecker.org/bibitem.php?key=KNP11). In _Proc. 23rd International Conference on Computer Aided Verification (CAV’11)_, volume 6806 of LNCS, pages 585-591, Springer, 2011 \[[pdf](https://www.prismmodelchecker.org/papers/cav11.pdf)\] \[[bib](https://www.prismmodelchecker.org/bibtex/KNP11.bib)\] \[[cites](https://scholar.google.com/citations?view_op=view_citation&citation_for_view=nEKbXSMAAAAJ:aqlVkmm33-oC)\]

For a brief, high-level overview of PRISM, see:
- the latest tool paper, presented at CAV'11 ([paper](https://www.prismmodelchecker.org/bibitem.php?key=KNP11), [slides](https://www.prismmodelchecker.org/talks/dave-cav11.pdf))
- or this promotional [video](https://www.prismmodelchecker.org/video.php), courtesy of [Lu Feng](http://cis.upenn.edu/~lufeng/)
For some background material on probabilistic model checking, see these tutorials:
- [KNP07a](https://www.prismmodelchecker.org/bibitem.php?key=KNP07a)(for DTMCs and CTMCs)
- [FKNP11](https://www.prismmodelchecker.org/bibitem.php?key=FKNP11) (for MDPs)
- [NPS13](https://www.prismmodelchecker.org/bibitem.php?key=NPS13) (for PTAs)
- [SK16](https://www.prismmodelchecker.org/bibitem.php?key=SK16) (for stochastic games)
See also:
- the slides for [these lecture courses](https://www.prismmodelchecker.org/lectures/)
- this book: [KNP04a](https://www.prismmodelchecker.org/bibitem.php?key=KNP04a) and chapter 10 of this book: [BK08](https://www.prismmodelchecker.org/bibitem.php?key=BK08)
To get started with PRISM, try:
- the [PRISM tutorial](https://www.prismmodelchecker.org/tutorial/).
The definitive guide to the PRISM tool is:
- the [PRISM manual](https://www.prismmodelchecker.org/manual/).
For more details about case studies, see:
- the [PRISM case study repository](https://www.prismmodelchecker.org/casestudies/)
- the case study overview papers in ACM PER [KNP05b](https://www.prismmodelchecker.org/bibitem.php?key=KNP05b) and ENTCS [KNP05d](https://www.prismmodelchecker.org/bibitem.php?key=KNP05d)
- [PRISM4AI](https://prism4ai.org/)

📂 https://www.prismmodelchecker.org/doc/

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


### Related Topics
↗ [Probabilistic Models (Distributions) & Stochastic Process](../../../../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probability%20Theory%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process/Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process.md)


### PRISM Manual



### Publications
We maintain several publication lists:
- [Selected PRISM publications](https://www.prismmodelchecker.org/publ-selected.php)  
    (a selection of useful/recent PRISM-related papers)  
- [PRISM publications list](https://www.prismmodelchecker.org/publications.php)  
    (a full list of all PRISM-related papers authored or co-authored by members of the PRISM team)  
- [PRISM bibliography](https://www.prismmodelchecker.org/bib.php)  
    (a full list of all PRISM-related papers)  
- [External publications list](https://www.prismmodelchecker.org/bib-ext.php)  
    (a list of PRISM-related papers published by authors who are not part of the PRISM team)


### Learning Resources
https://www.prismmodelchecker.org/lectures/
This section of the website contains teaching material covering much of the underlying theory behind PRISM. There are several sets of lecture slides available:
- "[Probabilistic model checking](https://www.prismmodelchecker.org/lectures/pmc/)"  
    a 20-lecture course with detailed coverage of model checking for DTMCs, CTMCs and MDPs  
- "[ESSLLI'10](https://www.prismmodelchecker.org/lectures/esslli10/)"  
    a 5-part course covering some additional topics (e.g. PTAs) but in slightly less depth.  
- "[BISS'07](https://www.prismmodelchecker.org/lectures/biss07/)"  
    an 11-part course covering some additional topics (e.g. PTAs, case studies) but in slightly less depth.  
- "[CPSWeek'13](https://www.prismmodelchecker.org/lectures/cpsweek13/)"  
    a 3-part tutorial, with a particular focus on probabilistic hybrid systems.
Citations included in these slides (and other talks on this site) refer to keys in [this list of references](https://www.prismmodelchecker.org/lectures/references.pdf).


### Case Studies
https://www.prismmodelchecker.org/casestudies/index.php
- PRISM has been used to analyse a wide range of case studies in many different application domains. A non-exhaustive list of these is given below. In many cases, we provide detailed information about the case study, including PRISM language source code and experimental results. For others, we just include links to the relevant publication.
- If you are interested in PRISM models for the purposes of **benchmarking**, see also the [PRISM benchmark suite](https://www.prismmodelchecker.org/benchmarks/).
- [Randomised distributed algorithms](https://www.prismmodelchecker.org/casestudies/index.php#randoalgs)
- [Communication, network and multimedia protocols](https://www.prismmodelchecker.org/casestudies/index.php#commprotocols)
- [Security](https://www.prismmodelchecker.org/casestudies/index.php#security)
- [Biology](https://www.prismmodelchecker.org/casestudies/index.php#biology)
- [Planning and synthesis](https://www.prismmodelchecker.org/casestudies/index.php#planning)
- [Game-theory](https://www.prismmodelchecker.org/casestudies/index.php#gametheory)
- [Performance and reliability](https://www.prismmodelchecker.org/casestudies/index.php#reliability)
- [Power management](https://www.prismmodelchecker.org/casestudies/index.php#power)
- [CTMC benchmarks](https://www.prismmodelchecker.org/casestudies/index.php#benchmarks)
- [Miscellaneous](https://www.prismmodelchecker.org/casestudies/index.php#misc)



## Intro
> 🔗 https://www.prismmodelchecker.org/

**PRISM** is a _probabilistic model checker_, a tool for formal modelling and analysis of systems that exhibit random or probabilistic behaviour. It has been used to analyse systems from many different [application domains](https://www.prismmodelchecker.org/casestudies/), including communication and multimedia protocols, randomised distributed algorithms, security protocols, biological systems and many others.

PRISM can build and analyse many types of probabilistic models:
- discrete-time and continuous-time Markov chains (DTMCs and CTMCs)
- Markov decision processes (MDPs) and probabilistic automata (PAs)
- probabilistic timed automata (PTAs)
- partially observable MDPs and PTAs (POMDPs and POPTAs)
- interval Markov chains and MDPs (IDTMCs and IMDPs)

plus extensions of these models with costs and rewards.

Models are described using the [PRISM language](https://www.prismmodelchecker.org/manual/ThePRISMLanguage/Introduction), a simple, state-based language. PRISM provides support for automated analysis of a wide range of quantitative properties of these models, e.g. "what is the probability of a failure causing the system to shut down within 4 hours?", "what is the worst-case probability of the protocol terminating in error, over all possible initial configurations?", "what is the expected size of the message queue after 30 minutes?", or "what is the worst-case expected time taken for the algorithm to terminate?". The [property specification language](https://www.prismmodelchecker.org/manual/PropertySpecification/Introduction) incorporates the temporal logics PCTL, CSL, LTL and PCTL*, as well as extensions for quantitative specifications and costs/rewards.

PRISM incorporates state-of-the art _symbolic_ data structures and algorithms, based on BDDs (Binary Decision Diagrams) and MTBDDs (Multi-Terminal Binary Decision Diagrams) 「[KNP04b](https://www.prismmodelchecker.org/bibitem.php?key=KNP04b), [Par02](https://www.prismmodelchecker.org/bibitem.php?key=Par02)」. It also includes a _discrete-event simulation_ engine, providing support for _approximate/statistical model checking_, and implementations of various different analysis techniques, such as _quantitative abstraction refinement_ and _symmetry reduction_.

PRISM is _free_ and _open source_, [released](https://www.prismmodelchecker.org/download.php) under the GNU General Public License ([GPL](http://www.gnu.org/licenses/gpl.html)).



## Ref
