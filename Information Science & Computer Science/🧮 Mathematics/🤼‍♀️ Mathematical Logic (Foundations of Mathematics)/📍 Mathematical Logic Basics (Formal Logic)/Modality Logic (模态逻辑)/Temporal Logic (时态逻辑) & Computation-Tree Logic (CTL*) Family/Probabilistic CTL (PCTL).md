# Probabilistic CTL (PCTL)

[TOC]



## Res
### Related Topics
↗ [Probability Models & Stochastic Process](../../../../📐%20Measures%20(Measure%20Theory)/📊%20Probabilities%20&%20Statistics/Probability%20Models%20&%20Stochastic%20Process/Probability%20Models%20&%20Stochastic%20Process.md)
- ↗ [Markov Chains (MC) & Markov Process](../../../../📐%20Measures%20(Measure%20Theory)/📊%20Probabilities%20&%20Statistics/Probability%20Models%20&%20Stochastic%20Process/Markov%20Chains%20(MC)%20&%20Markov%20Process/Markov%20Chains%20(MC)%20&%20Markov%20Process.md)
- ↗ [Discrete-Time Markov Chains (DTMC)](../../../../📐%20Measures%20(Measure%20Theory)/📊%20Probabilities%20&%20Statistics/Probability%20Models%20&%20Stochastic%20Process/Markov%20Chains%20(MC)%20&%20Markov%20Process/Discrete-Time%20Markov%20Chains%20(DTMC)/Discrete-Time%20Markov%20Chains%20(DTMC).md)
↗ [PRISM](../../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/⛰️%20Static%20Code%20Analysis%20Tools%20(SCAT)/🤼%20Model%20Checker/PRISM.md)

[Series (级数)](../../../../Analytical%20Mathematics/Sequence%20of%20Number,%20Series,%20and%20Basic%20Properties%20of%20Function/Series%20(级数).md)


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Probabilistic_CTL

**Probabilistic Computation Tree Logic** (PCTL) is an extension of [computation tree logic](https://en.wikipedia.org/wiki/Computation_tree_logic "Computation tree logic") (CTL) that allows for [probabilistic](https://en.wikipedia.org/wiki/Probabilistic "Probabilistic") [quantification](https://en.wikipedia.org/wiki/Quantification_\(logic\) "Quantification (logic)") of described properties. It has been defined in the paper by Hansson and Jonsson.

PCTL is a useful [logic](https://en.wikipedia.org/wiki/Logic "Logic") for stating soft deadline properties, e.g. "after a request for a service, there is at least a 98% probability that the service will be carried out within 2 seconds". Akin CTL suitability for [model-checking](https://en.wikipedia.org/wiki/Model-checking "Model-checking") PCTL extension is widely used as a [property specification language](https://en.wikipedia.org/wiki/Property_Specification_Language "Property Specification Language") for probabilistic model checkers.


### Syntax of PCTL
The syntax for PCTL state formulas is:$$\phi ::= true \ | \ p \ | \ \neg\phi \ | \ \phi_1\land\phi_2 \ | \ \mathbb{P}_J\{\psi\}  $$where $p$ is an atomic proposition, and $J \subseteq [0,1]$ is an interval, e.g. $J = [0.6, 1.0]$. $\mathbb{P}_J (𝜓)$ reads “the probability to satisfy $\psi$ lays in the interval $J$”

The (minimal) syntax for PCTL path formulas is: $$\psi ::= \bigcirc \phi ∣ \phi_1 \cup \phi_2 ∣ \phi_1 \cup^{\leq n} \phi_2$$
where $n\in N$ is some natural number. Here we have the concept of bounded and unbounded choices of path. Bounded means we set a limit (bound) of steps allowed on the path, unbounded means there is no such limit.


**Derived Operators**
- We have different ways of writing the intervals: $\mathbb{P}_{\leq 0.5}(\phi) ≡ \mathbb{P}_{[0.0, 0.5]}(\phi)$
- We can write formulæ about the “probability of state formulæ”: $\mathbb{P}_J (\phi) ≡ \mathbb{P}_J (𝑡𝑟𝑢𝑒 \cup^{\leq 0} \phi)$
- We can use the “eventually” (diamond) operator as usual: $\begin{aligned} & \Diamond\phi ≡ 𝑡𝑟𝑢𝑒 \cup \phi  \\ & \Diamond^{\leq𝑛}\phi ≡ 𝑡𝑟𝑢𝑒 \cup^{\leq n} \phi\end{aligned}$
- We can also use the “globally” (box) operator, though with care ==(the duality of $\Box$ and $\Diamond$)==: $\mathbb{P}_{\leq p} (\Box\phi) ≡ \mathbb{P}_{\geq 1−𝑝}(\Diamond\neg\phi)$

![](../../../../../../Assets/Pics/Screenshot%202025-10-24%20at%2022.30.50.png)

![](../../../../../../Assets/Pics/Screenshot%202025-10-24%20at%2022.31.18.png)


### Semantics of PCTL
> 🔗 https://en.wikipedia.org/wiki/Almost_surely

$\mathbb{P}_{\geq1}(...)$ = almost surely...
$\mathbb{P}_{\leq0}(...)$ = almost never...
(remember ↗ [Probabilities & Statistics](../../../../📐%20Measures%20(Measure%20Theory)/📊%20Probabilities%20&%20Statistics/Probabilities%20&%20Statistics.md) ?)


![](../../../../../../Assets/Pics/Screenshot%202025-10-24%20at%2022.38.15.png)
![](../../../../../../Assets/Pics/Screenshot%202025-10-24%20at%2022.38.28.png)

The main new aspect is how to measure probabilities: $$s\models\mathbb{P} \iff Pr(\{\pi\in Paths(s) | \pi \models \psi\}) \in J$$ (we may write $Pr_s$ for an implicit “at state s”)

We need to use the probability measure based on cylinder sets! (↗ [Discrete-Time Markov Chains (DTMC)](../../../../📐%20Measures%20(Measure%20Theory)/📊%20Probabilities%20&%20Statistics/Probability%20Models%20&%20Stochastic%20Process/Markov%20Chains%20(MC)%20&%20Markov%20Process/Discrete-Time%20Markov%20Chains%20(DTMC)/Discrete-Time%20Markov%20Chains%20(DTMC).md))

![](../../../../../../Assets/Pics/Screenshot%202025-10-24%20at%2022.43.07.png)
![](../../../../../../Assets/Pics/Screenshot%202025-10-24%20at%2022.43.19.png)
#### Probabilistic Bounded Reachability
![](../../../../../../Assets/Pics/Screenshot%202025-10-24%20at%2022.45.03.png)
![](../../../../../../Assets/Pics/Screenshot%202025-10-24%20at%2022.45.20.png)
![](../../../../../../Assets/Pics/Screenshot%202025-10-24%20at%2022.45.30.png)

![](../../../../../../Assets/Pics/Screenshot%202025-10-24%20at%2022.47.04.png)
#### Probabilistic Unbounded Reachability
![](../../../../../../Assets/Pics/Screenshot%202025-10-24%20at%2022.54.57.png)

![](../../../../../../Assets/Pics/Screenshot%202025-10-24%20at%2022.55.15.png)

![](../../../../../../Assets/Pics/Screenshot%202025-10-24%20at%2022.55.36.png)
![](../../../../../../Assets/Pics/Screenshot%202025-10-24%20at%2022.58.40.png)


### PCTL vs Other Properties
![](../../../../../../Assets/Pics/Screenshot%202025-10-24%20at%2023.20.26.png)
Transient distribution is a property of the MC system itself, while probabilistic (un)bounded reachability is an event described by the PCTL logic language. 
- for the property of the MC system itself, transient distribution, we are talking about each state at different time point.
- for PCTL language, we are talking about paths and satisfiability (event). as time move forward, whether this event happened or not is our concern.


![](../../../../../../Assets/Pics/Screenshot%202025-10-24%20at%2023.21.03.png)

PCTL introduces probability, i.e. uncertainties. In CTL, we are always certain about a property, whether it happens or not is deterministic (0 and 1). However, in PCTL our certainties (0 and 1) become a range $[0, 1]$. 
- In second example from the above pic, left-hand side says that the prob. of event $\Diamond\phi$ happens is 1, hence the prob. of event $\neg\Diamond\phi$ happens is 0, which means event $\neg\Diamond\phi$ will happen. (😃) However, right-hand side says that $\neg\Diamond\phi$ cannot happen. Thus, lhs $\neq$ rhs.
- To give a specific case, all we need is a counterexample that the prob. of event $\neg\Diamond\phi$ is 0, and somehow it happens.



## Ref
[🤔🤔🤔 Zero probability and impossibility]: https://math.stackexchange.com/q/41107/1230830

