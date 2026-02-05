# Decision Making & Game Theory

[TOC]



## Res
### Related Topics
↗ [Mathematical Modeling & Real World Problem Solving](../../Mathematical%20Modeling%20&%20Real%20World%20Problem%20Solving.md)
↗ [(Formal) Model Checking](../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/📌%20Software%20(Program)%20Analysis%20Basics/🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/(Formal)%20Model%20Checking/(Formal)%20Model%20Checking.md)
↗ [Models of Computation & Abstract Machines](../../🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Models%20of%20Computation%20&%20Abstract%20Machines/Models%20of%20Computation%20&%20Abstract%20Machines.md)

↗ [Decision Theory & Decision Analysis](../../../../Other%20Networks%20of%20Knowledge/Science%20&%20Application/Social%20Science/Decision%20Theory%20&%20Decision%20Analysis/Decision%20Theory%20&%20Decision%20Analysis.md)

↗ [Probabilistic Models (Distributions) & Stochastic Process](../../🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probability%20Theory%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process/Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process.md)

↗ [Social Science](../../../../Other%20Networks%20of%20Knowledge/Science%20&%20Application/Social%20Science/Social%20Science.md)
↗ [Decision Theory & Decision Analysis](../../../../Other%20Networks%20of%20Knowledge/Science%20&%20Application/Social%20Science/Decision%20Theory%20&%20Decision%20Analysis/Decision%20Theory%20&%20Decision%20Analysis.md)

↗ [Reinforcement Learning (RL) & Sequential Decision Making](../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Major%20Techniques/Statistical%20Learning%20(Data-Driven)%20&%20Machine%20Learning%20Methods/Reinforcement%20Learning%20(RL)%20&%20Sequential%20Decision%20Making/Reinforcement%20Learning%20(RL)%20&%20Sequential%20Decision%20Making.md)


### Other Resources
[博弈论 | 合集](https://www.youtube.com/playlist?list=PLOrDt87s8A3qxPWhuKINN0I3ftdTcpjPm)



## Intro
> 🔗 https://en.wikipedia.org/wiki/Game_theory

**Game theory** is the study of [mathematical models](https://en.wikipedia.org/wiki/Mathematical_model "Mathematical model") of strategic interactions. It has applications in many fields of [social science](https://en.wikipedia.org/wiki/Social_science "Social science"), and is used extensively in [economics](https://en.wikipedia.org/wiki/Economics "Economics"), [logic](https://en.wikipedia.org/wiki/Logic "Logic"), [systems science](https://en.wikipedia.org/wiki/Systems_science "Systems science") and [computer science](https://en.wikipedia.org/wiki/Computer_science "Computer science"). Initially, game theory addressed two-person [zero-sum games](https://en.wikipedia.org/wiki/Zero-sum_game "Zero-sum game"), in which a participant's gains or losses are exactly balanced by the losses and gains of the other participant. In the 1950s, it was extended to the study of non zero-sum games, and was eventually applied to a wide range of [behavioral relations](https://en.wikipedia.org/wiki/Human_behavior "Human behavior"). It is now an [umbrella term](https://en.wikipedia.org/wiki/Umbrella_term "Umbrella term") for the [science](https://en.wikipedia.org/wiki/Science "Science") of rational [decision making](https://en.wikipedia.org/wiki/Decision-making "Decision-making") in humans, animals, and computers.

Modern game theory began with the idea of [mixed-strategy equilibria](https://en.wikipedia.org/wiki/Mixed_Strategy_Equilibria "Mixed Strategy Equilibria") in two-person zero-sum games and its proof by [John von Neumann](https://en.wikipedia.org/wiki/John_von_Neumann "John von Neumann"). Von Neumann's original proof used the [Brouwer fixed-point theorem](https://en.wikipedia.org/wiki/Brouwer_fixed-point_theorem "Brouwer fixed-point theorem") on continuous mappings into compact [convex sets](https://en.wikipedia.org/wiki/Convex_set "Convex set"), which became a standard method in game theory and [mathematical economics](https://en.wikipedia.org/wiki/Mathematical_economics "Mathematical economics"). His paper was followed by _[Theory of Games and Economic Behavior](https://en.wikipedia.org/wiki/Theory_of_Games_and_Economic_Behavior "Theory of Games and Economic Behavior")_ (1944), co-written with [Oskar Morgenstern](https://en.wikipedia.org/wiki/Oskar_Morgenstern "Oskar Morgenstern"), which considered [cooperative games](https://en.wikipedia.org/wiki/Cooperative_game_theory "Cooperative game theory") of several players. The second edition provided an [axiomatic theory](https://en.wikipedia.org/wiki/Von_Neumann%E2%80%93Morgenstern_utility_theorem "Von Neumann–Morgenstern utility theorem") of [expected utility](https://en.wikipedia.org/wiki/Expected_utility_hypothesis "Expected utility hypothesis"), which allowed mathematical statisticians and economists to treat decision-making under uncertainty.

Game theory was developed extensively in the 1950s, and was explicitly applied to [evolution](https://en.wikipedia.org/wiki/Evolution "Evolution") in the 1970s, although similar developments go back at least as far as the 1930s. Game theory has been widely recognized as an important tool in many fields. [John Maynard Smith](https://en.wikipedia.org/wiki/John_Maynard_Smith "John Maynard Smith") was awarded the [Crafoord Prize](https://en.wikipedia.org/wiki/Crafoord_Prize "Crafoord Prize") for his application of [evolutionary game theory](https://en.wikipedia.org/wiki/Evolutionary_game_theory "Evolutionary game theory") in 1999, and fifteen game theorists have won the [Nobel Prize in economics](https://en.wikipedia.org/wiki/Nobel_Memorial_Prize_in_Economic_Sciences "Nobel Memorial Prize in Economic Sciences") as of 2020, including most recently [Paul Milgrom](https://en.wikipedia.org/wiki/Paul_Milgrom "Paul Milgrom") and [Robert B. Wilson](https://en.wikipedia.org/wiki/Robert_B._Wilson "Robert B. Wilson").



## Representation of Games
[Representation of games](https://en.wikipedia.org/wiki/Game_theory#Representation_of_games)
- [Extensive form](https://en.wikipedia.org/wiki/Game_theory#Extensive_form)
- [Normal form](https://en.wikipedia.org/wiki/Game_theory#Normal_form)
- [Characteristic function form](https://en.wikipedia.org/wiki/Game_theory#Characteristic_function_form)
- [Alternative game representations](https://en.wikipedia.org/wiki/Game_theory#Alternative_game_representations)



## Types of Games
> 🔗 https://en.wikipedia.org/wiki/Game_theory#Different_types_of_games
> 🔗 https://en.wikipedia.org/wiki/List_of_games_in_game_theory

Games can have several features, a few of the most common are listed here.
- **Number of players**: Each person who makes a choice in a game or who receives a payoff from the outcome of those choices is a player.
- **Strategies per player**: In a game each player chooses from a set of possible actions, known as pure strategies. If the number is the same for all players, it is listed here.
- **Number of [pure strategy](https://en.wikipedia.org/wiki/Pure_strategy "Pure strategy") [Nash equilibria](https://en.wikipedia.org/wiki/Nash_equilibria "Nash equilibria")**: A Nash equilibrium is a set of strategies which represents mutual [best responses](https://en.wikipedia.org/wiki/Best_response "Best response") to the other strategies. In other words, if every player is playing their part of a Nash equilibrium, no player has an incentive to unilaterally change their strategy. Considering only situations where players play a single strategy without randomizing (a pure strategy) a game can have any number of Nash equilibria.
- **[Sequential game](https://en.wikipedia.org/wiki/Sequential_game "Sequential game")**: A game is sequential if one player performs their actions after another player; otherwise, the game is a [simultaneous move game](https://en.wikipedia.org/wiki/Simultaneous_game "Simultaneous game").
- **[Perfect information](https://en.wikipedia.org/wiki/Perfect_information "Perfect information")**: A game has perfect information if it is a sequential game and every player knows the strategies chosen by the players who preceded them.
- **[Constant sum](https://en.wikipedia.org/wiki/Constant_sum "Constant sum")**: A game is a constant sum game if the sum of the payoffs to every player are the same for every single set of strategies. In these games, one player gains if and only if another player loses. A constant sum game can be converted into a [zero sum](https://en.wikipedia.org/wiki/Zero_sum "Zero sum") game by subtracting a fixed value from all payoffs, leaving their relative order unchanged.
- **[Move by nature](https://en.wikipedia.org/wiki/Move_by_nature "Move by nature")**: A game includes a random move by nature.


### Cooperative / Non-cooperative
> 🔗 https://en.wikipedia.org/wiki/Game_theory#Cooperative_/_non-cooperative

A game is _cooperative_ if the players are able to form binding commitments externally enforced (e.g. through [contract law](https://en.wikipedia.org/wiki/Contract_law "Contract law")). A game is _non-cooperative_ if players cannot form alliances or if all agreements need to be [self-enforcing](https://en.wikipedia.org/wiki/Self-enforcing_agreement "Self-enforcing agreement") (e.g. through [credible threats](https://en.wikipedia.org/wiki/Credible_threat "Credible threat")).

Cooperative games are often analyzed through the framework of _cooperative game theory_, which focuses on predicting which coalitions will form, the joint actions that groups take, and the resulting collective payoffs. It is different from _non-cooperative game theory_ which focuses on predicting individual players' actions and payoffs by analyzing [Nash equilibria](https://en.wikipedia.org/wiki/Nash_equilibria "Nash equilibria").

Cooperative game theory provides a high-level approach as it describes only the structure and payoffs of coalitions, whereas non-cooperative game theory also looks at how strategic interaction will affect the distribution of payoffs. As non-cooperative game theory is more general, cooperative games can be analyzed through the approach of non-cooperative game theory (the converse does not hold) provided that sufficient assumptions are made to encompass all the possible strategies available to players due to the possibility of external enforcement of cooperation.


### Symmetric / Asymmetric


### Zero-sum / Non-zero-sum
> 🔗 https://en.wikipedia.org/wiki/Game_theory#Zero-sum_/_non-zero-sum

Zero-sum games (more generally, constant-sum games) are games in which choices by players can neither increase nor decrease the available resources. In zero-sum games, the total benefit goes to all players in a game, for every combination of strategies, and always adds to zero (more informally, a player benefits only at the equal expense of others). [Poker](https://en.wikipedia.org/wiki/Poker "Poker") exemplifies a zero-sum game (ignoring the possibility of the house's cut), because one wins exactly the amount one's opponents lose. Other zero-sum games include [matching pennies](https://en.wikipedia.org/wiki/Matching_pennies "Matching pennies") and most classical board games including [Go](https://en.wikipedia.org/wiki/Go_\(board_game\) "Go (board game)") and [chess](https://en.wikipedia.org/wiki/Chess "Chess").

Many games studied by game theorists (including the famed prisoner's dilemma) are non-zero-sum games, because the [outcome](https://en.wikipedia.org/wiki/Outcome_\(game_theory\) "Outcome (game theory)") has net results greater or less than zero. Informally, in non-zero-sum games, a gain by one player does not necessarily correspond with a loss by another.

Furthermore, _constant-sum games_ correspond to activities like theft and gambling, but not to the fundamental economic situation in which there are potential [gains from trade](https://en.wikipedia.org/wiki/Gains_from_trade "Gains from trade"). It is possible to transform any constant-sum game into a (possibly asymmetric) zero-sum game by adding a dummy player (often called "the board") whose losses compensate the players' net winnings.


### Simultaneous / Sequential


### Perfect information and imperfect information


### Bayesian Game


### Combinatorial Games


### Discrete and Continuous Games


### Differential Games


### Evolutionary Game Theory


### Stochastic Games & Markov Games 🤔
> ↗ [Markov Decision Processes (MDP) & Stochastic Dynamic Program](../../🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/📐%20Measures%20(Measure%20Theory)/📊%20Probability%20Theory%20&%20Statistics/🏌🏻‍♂️%20Probabilistic%20Models%20(Distributions)%20&%20Stochastic%20Process/Markov%20Process%20&%20Markov%20Chain%20(MC)/Markov%20Decision%20Processes%20(MDP)%20&%20Stochastic%20Dynamic%20Program/Markov%20Decision%20Processes%20(MDP)%20&%20Stochastic%20Dynamic%20Program.md)
> 
> 🔗 https://en.wikipedia.org/wiki/Game_theory#Stochastic_outcomes_(and_relation_to_other_fields)

Individual decision problems with stochastic outcomes are sometimes considered "one-player games". They may be modeled using similar tools within the related disciplines of [decision theory](https://en.wikipedia.org/wiki/Decision_theory "Decision theory"), [operations research](https://en.wikipedia.org/wiki/Operations_research "Operations research"), and areas of [artificial intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence "Artificial intelligence"), particularly [AI planning](https://en.wikipedia.org/wiki/AI_planning "AI planning") (with uncertainty) and [multi-agent system](https://en.wikipedia.org/wiki/Multi-agent_system "Multi-agent system"). Although these fields may have different motivators, the mathematics involved are substantially the same, e.g. using [Markov decision processes](https://en.wikipedia.org/wiki/Markov_decision_process "Markov decision process") (MDP).

Stochastic outcomes can also be modeled in terms of game theory by adding a randomly acting player who makes "chance moves" ("[moves by nature](https://en.wikipedia.org/wiki/Move_by_nature "Move by nature")"). This player is not typically considered a third player in what is otherwise a two-player game, but merely serves to provide a roll of the dice where required by the game.

For some problems, different approaches to modeling stochastic outcomes may lead to different solutions. For example, the difference in approach between MDPs and the [minimax solution](https://en.wikipedia.org/wiki/Minimax "Minimax") is that the latter considers the worst-case over a set of adversarial moves, rather than reasoning in expectation about these moves given a fixed probability distribution. The minimax approach may be advantageous where stochastic models of uncertainty are not available, but may also be overestimating extremely unlikely (but costly) events, dramatically swaying the strategy in such scenarios if it is assumed that an adversary can force such an event to happen. (See [Black swan theory](https://en.wikipedia.org/wiki/Black_swan_theory "Black swan theory") for more discussion on this kind of modeling issue, particularly as it relates to predicting and limiting losses in investment banking.)

General models that include all elements of stochastic outcomes, adversaries, and partial or noisy observability (of moves by other players) have also been studied. The "[gold standard](https://en.wikipedia.org/wiki/Gold_standard "Gold standard")" is considered to be partially observable [stochastic game](https://en.wikipedia.org/wiki/Stochastic_game "Stochastic game") (POSG), but few realistic problems are computationally feasible in POSG representation.


### Metagames


### Mean Field game Theory



## Ref
[🎬 为什么国家之间不能好好合作？道理和“石头、剪刀、布”是一样的｜李永乐]: https://youtu.be/pzh-3A2jJ8k

![](../../../../../../Assets/Pics/Screenshot%202023-04-02%20at%206.58.54%20PM.png)
国际上没有永远的敌人，也没有永远的朋友，有的只是收益矩阵和博弈论而已。

[🎬 美元拍卖陷阱：巨头为什么不惜血本争夺市场？博弈论与纳什均衡（七）｜李永乐]: https://youtu.be/quempJpejvc
![](../../../../../../Assets/Pics/Screenshot%202023-04-02%20at%207.06.28%20PM.png)

[美女与男人的游戏：看似公平的收割方法。博弈论与纳什均衡（六）｜李永乐]: https://youtu.be/xkITc9KWH9I
![](../../../../../../Assets/Pics/Screenshot%202023-04-02%20at%207.08.58%20PM.png)

[田忌赛马：谋略能否弥补实力的差距？博弈论与纳什均衡（五）｜李永乐]: https://youtu.be/ug4gwrtkOF8
![](../../../../../../Assets/Pics/Screenshot%202023-04-02%20at%207.13.15%20PM.png)
