# Differential Privacy (DP)

[TOC]



## Res
### Related Topics


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Differential_privacy

**Differential privacy** (**DP**) is a mathematically rigorous framework for releasing statistical information about datasets while protecting the [privacy](https://en.wikipedia.org/wiki/Privacy "Privacy") of individual data subjects. It enables a data holder to share aggregate patterns of the group while limiting information that singles out specific individuals. This is done by injecting carefully calibrated noise into statistical computations such that the utility of the statistic is preserved while provably limiting what can be inferred about any individual in the dataset.

Another way to describe differential privacy is as a constraint on the algorithms used to publish aggregate information about a statistical database which limits the disclosure of private information of records in the database. For example, differentially private algorithms are used by some government agencies to publish demographic information or other statistical aggregates while ensuring confidentiality of survey responses, and by companies to collect information about user behavior while controlling what is visible even to internal analysts.

Roughly, an algorithm is differentially private if an observer seeing its output cannot tell whether a particular individual's information was used in the computation. Differential privacy is often discussed in the context of identifying individuals whose information may be in a database. Although it does not directly refer to identification and reidentification attacks, differentially private algorithms provably resist such attacks.



## Ref
