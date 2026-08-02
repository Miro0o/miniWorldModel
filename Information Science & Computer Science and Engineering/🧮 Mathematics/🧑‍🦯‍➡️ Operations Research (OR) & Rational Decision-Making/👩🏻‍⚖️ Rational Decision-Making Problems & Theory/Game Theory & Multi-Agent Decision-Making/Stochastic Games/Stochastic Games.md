# Stochastic Games

[TOC]



## Res
### Related Topics
↗ [Probabilistic Models (Distributions) & Stochastic Process](../../../../🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probability%20Theory%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process/Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process.md)
- ↗ [Markov Decision Processes (MDP) & Stochastic Dynamic Program](../../../../🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probability%20Theory%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process/Markov%20Process%20&%20Markov%20Chain%20(MC)/Markov%20Decision%20Processes%20(MDP)%20&%20Stochastic%20Dynamic%20Program/Markov%20Decision%20Processes%20(MDP)%20&%20Stochastic%20Dynamic%20Program.md)


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Stochastic_game

In [game theory](https://en.wikipedia.org/wiki/Game_theory "Game theory"), a **stochastic game** (or **Markov game**) is a [repeated game](https://en.wikipedia.org/wiki/Repeated_game "Repeated game") with **probabilistic transitions** played by one or more players. The game is played in a sequence of stages. At the beginning of each stage the game is in some **state**. The players select actions and each player receives a **payoff** that depends on the current state and the chosen actions. The game then moves to a new random state whose distribution depends on the previous state and the actions chosen by the players. The procedure is repeated at the new state and play continues for a finite or infinite number of stages. The total payoff to a player is often taken to be the discounted sum of the stage payoffs or the [limit inferior](https://en.wikipedia.org/wiki/Limit_inferior "Limit inferior") of the averages of the stage payoffs.

Stochastic games were introduced by [Lloyd Shapley](https://en.wikipedia.org/wiki/Lloyd_Shapley "Lloyd Shapley") in the early 1950s. They generalize [Markov decision processes](https://en.wikipedia.org/wiki/Markov_decision_process "Markov decision process") to multiple interacting decision makers, as well as strategic-form games to dynamic situations in which the environment changes in response to the players' choices.



## Two-Player Games
> 🔗 https://en.wikipedia.org/wiki/Stochastic_game#Two-player_games

Stochastic two-player games on [directed graphs](https://en.wikipedia.org/wiki/Directed_graph "Directed graph") are widely used for modeling and analysis of discrete systems operating in an unknown (adversarial) environment[_[citation needed](https://en.wikipedia.org/wiki/Wikipedia:Citation_needed "Wikipedia:Citation needed")_]. Possible configurations of a system and its environment are represented as vertices, and the transitions correspond to actions of the system, its environment, or "nature". A run of the system then corresponds to an infinite path in the graph. Thus, a system and its environment can be seen as two players with antagonistic objectives, where one player (the system) aims at maximizing the probability of "good" runs, while the other player (the environment) aims at the opposite.

In many cases, there exists an equilibrium value of this probability, but optimal strategies for both players may not exist.



## Ref

