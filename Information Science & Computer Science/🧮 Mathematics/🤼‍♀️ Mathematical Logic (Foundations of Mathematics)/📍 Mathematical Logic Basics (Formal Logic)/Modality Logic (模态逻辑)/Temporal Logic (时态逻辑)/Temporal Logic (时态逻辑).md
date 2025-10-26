# Temporal Logic (时态逻辑)

[TOC]



## Res
### Related Topics


### Other Resources
https://matthewbdwyer.github.io/psp/
Temporal Specification Patterns
This page is the home of an online repository for information about property specification for finite-state verification. The intent of this repository is to collect patterns that occur commonly in the specification of concurrent and reactive systems. Most specification formalisms in this domain are a bit tricky to use. To make them easier to use our patterns come with descriptions that illustrate how to map well-understood, but imprecise, conceptions of system behavior into precise statements in common formal specification languages. We're already support mappings to a number of formalisms that have tool support for automated analysis.



## Intro
> 🔗 https://en.wikipedia.org/wiki/Temporal_logic

In [logic](https://en.wikipedia.org/wiki/Logic "Logic"), **temporal logic** is any system of rules and symbolism for representing, and reasoning about, propositions qualified in terms of [time](https://en.wikipedia.org/wiki/Time "Time") (for example, "I am _always_ hungry", "I will _eventually_ be hungry", or "I will be hungry _until_ I eat something"). It is sometimes also used to refer to **tense logic**, a [modal logic](https://en.wikipedia.org/wiki/Modal_logic "Modal logic")-based system of temporal logic introduced by [Arthur Prior](https://en.wikipedia.org/wiki/Arthur_Prior "Arthur Prior") in the late 1950s, with important contributions by [Hans Kamp](https://en.wikipedia.org/wiki/Hans_Kamp "Hans Kamp"). It has been further developed by [computer scientists](https://en.wikipedia.org/wiki/Computer_scientists "Computer scientists"), notably [Amir Pnueli](https://en.wikipedia.org/wiki/Amir_Pnueli "Amir Pnueli"), and [logicians](https://en.wikipedia.org/wiki/Logician "Logician").

Temporal logic has found an important application in [formal verification](https://en.wikipedia.org/wiki/Formal_verification "Formal verification"), where it is used to state requirements of hardware or software systems. For instance, one may wish to say that _whenever_ a request is made, access to a resource is _eventually_ granted, but it is _never_ granted to two requestors simultaneously. Such a statement can conveniently be expressed in a temporal logic.

Temporal logics include:
- Some systems of [positional logic](https://en.wikipedia.org/w/index.php?title=Positional_logic&action=edit&redlink=1 "Positional logic (page does not exist)")
- [Linear temporal logic](https://en.wikipedia.org/wiki/Linear_temporal_logic "Linear temporal logic") (LTL) temporal logic without branching timelines
- [Computation tree logic](https://en.wikipedia.org/wiki/Computation_tree_logic "Computation tree logic") (CTL) temporal logic with branching timelines
- [Interval temporal logic](https://en.wikipedia.org/wiki/Interval_temporal_logic "Interval temporal logic") (ITL)
- [Temporal logic of actions](https://en.wikipedia.org/wiki/Temporal_logic_of_actions "Temporal logic of actions") (TLA)
- [Signal temporal logic](https://en.wikipedia.org/w/index.php?title=Signal_temporal_logic&action=edit&redlink=1 "Signal temporal logic (page does not exist)") (STL)
- [Timestamp temporal logic](https://en.wikipedia.org/w/index.php?title=Timestamp_temporal_logic&action=edit&redlink=1 "Timestamp temporal logic (page does not exist)") (TTL)
- [Property specification language](https://en.wikipedia.org/wiki/Property_Specification_Language "Property Specification Language") (PSL)
- [CTL*](https://en.wikipedia.org/wiki/CTL* "CTL*"), which generalizes LTL and CTL
- [Hennessy–Milner logic](https://en.wikipedia.org/wiki/Hennessy%E2%80%93Milner_logic "Hennessy–Milner logic") (HML)
- [Modal μ-calculus](https://en.wikipedia.org/wiki/Modal_%CE%BC-calculus "Modal μ-calculus"), which includes as a subset HML and CTL*
- [Metric temporal logic](https://en.wikipedia.org/wiki/Metric_temporal_logic "Metric temporal logic") (MTL)
- [Metric interval temporal logic](https://en.wikipedia.org/wiki/Metric_interval_temporal_logic "Metric interval temporal logic") (MITL)
- [Timed propositional temporal logic](https://en.wikipedia.org/wiki/Timed_propositional_temporal_logic "Timed propositional temporal logic") (TPTL)
- [Truncated Linear Temporal Logic](https://en.wikipedia.org/w/index.php?title=Truncated_Linear_Temporal_Logic&action=edit&redlink=1 "Truncated Linear Temporal Logic (page does not exist)") (TLTL)
- [Hyper temporal logic](https://en.wikipedia.org/w/index.php?title=Hyper_temporal_logic&action=edit&redlink=1 "Hyper temporal logic (page does not exist)") (HyperLTL) 

A variation, closely related to temporal or chronological or tense logics, are modal logics based upon "topology", "place", or "spatial position".



## Ref
