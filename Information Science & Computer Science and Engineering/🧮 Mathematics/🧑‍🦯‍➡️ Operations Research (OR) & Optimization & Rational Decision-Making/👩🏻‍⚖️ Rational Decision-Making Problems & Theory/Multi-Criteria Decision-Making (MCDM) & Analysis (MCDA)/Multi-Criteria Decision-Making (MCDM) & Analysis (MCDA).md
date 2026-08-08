# Multi-Criteria Decision-Making (MCDM) & Analysis (MCDA)

[TOC]



## Res
### Related Topics
↗ [Dynamic Programming (DP) & Multi-Objective Optimization](../../../../🔑%20CS%20Core/🧙‍♂️%20Algorithm%20&%20Data%20Structure/Algorithms%20Implementation%20For%20Classical%20Problems/Dynamic%20Programming%20(DP)%20&%20Multi-Objective%20Optimization/Dynamic%20Programming%20(DP)%20&%20Multi-Objective%20Optimization.md)

↗ [Mathematical Optimization (Programming)](../../Mathematical%20Optimization%20(Programming)/Mathematical%20Optimization%20(Programming).md)
- ↗ [Multi-Objective Optimization (MOO) (Pareto Optimization)](../../Mathematical%20Optimization%20(Programming)/Multi-Objective%20Optimization%20(MOO)%20(Pareto%20Optimization)/Multi-Objective%20Optimization%20(MOO)%20(Pareto%20Optimization).md)


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Multiple-criteria_decision_analysis

**Multiple-criteria decision-making** (**MCDM**) or **multiple-criteria decision analysis** (**MCDA**) is a sub-discipline of [operations research](https://en.wikipedia.org/wiki/Operations_research "Operations research") that explicitly evaluates multiple conflicting [criteria](https://en.wiktionary.org/wiki/criterion "wikt:criterion") in [decision making](https://en.wikipedia.org/wiki/Decision_making "Decision making") (both in daily life and in settings such as business, government and medicine). It is also known as **multi-attribute decision making (MADM)**, **multiple attribute utility theory**, **multiple attribute value theory**, **multiple attribute preference theory**, and **multi-objective decision analysis**.

Conflicting criteria are typical in evaluating options: [cost](https://en.wikipedia.org/wiki/Cost "Cost") or price is usually one of the main criteria, and some measure of quality is typically another criterion, easily in conflict with the cost. In purchasing a car, cost, comfort, safety, and fuel economy may be some of the main criteria we consider – it is unusual that the cheapest car is the most comfortable and the safest one. In [portfolio management](https://en.wikipedia.org/wiki/Investment_management "Investment management"), managers are interested in getting high returns while simultaneously reducing risks; however, the stocks that have the potential of bringing high returns typically carry high risk of losing money. In a service industry, customer satisfaction and the cost of providing service are fundamental conflicting criteria.

In their daily lives, people usually weigh multiple criteria implicitly and may be comfortable with the consequences of such decisions that are made based on only [intuition](https://en.wikipedia.org/wiki/Intuition_\(psychology\) "Intuition (psychology)"). On the other hand, when stakes are high, it is important to properly structure the problem and explicitly evaluate multiple criteria. In making the decision of whether to build a nuclear power plant or not, and where to build it, there are not only very complex issues involving multiple criteria, but there are also multiple parties who are deeply affected by the consequences.

Structuring complex problems well and considering multiple criteria explicitly leads to more informed and better decisions. There have been important advances in this field since the start of the modern multiple-criteria decision-making discipline in the early 1960s. A variety of approaches and methods, many implemented by specialized [decision-making software](https://en.wikipedia.org/wiki/Decision-making_software "Decision-making software"), have been developed for their application in an array of disciplines, ranging from politics and business to the environment and energy.


### Solving MCDM problems
Different schools of thought have developed for solving MCDM problems (both of the design and evaluation type). For a bibliometric study showing their development over time, see Bragge, Korhonen, H. Wallenius and J. Wallenius [2010].[19]

_**Multiple objective mathematical programming school**_

(1) _Vector maximization_: The purpose of vector maximization is to approximate the nondominated set; originally developed for Multiple Objective Linear Programming problems (Evans and Steuer, 1973;[20] Yu and Zeleny, 1975[21]).

(2) _Interactive programming_: Phases of computation alternate with phases of decision-making (Benayoun et al., 1971;[22] Geoffrion, Dyer and Feinberg, 1972;[23] Zionts and Wallenius, 1976;[24] Korhonen and Wallenius, 1988[25]). No explicit knowledge of the DM's value function is assumed
.

_**[Goal programming school](https://en.wikipedia.org/wiki/Goal_programming "Goal programming")**_

The purpose is to set apriori target values for goals, and to minimize weighted deviations from these goals. Both importance weights as well as lexicographic pre-emptive weights have been used (Charnes and Cooper, 1961[26]).

_**Fuzzy-set theorists**_

Fuzzy sets were introduced by Zadeh (1965)[27] as an extension of the classical notion of sets. This idea is used in many MCDM algorithms to model and solve fuzzy problems.

_**Ordinal data based methods**_

[Ordinal data](https://en.wikipedia.org/wiki/Ordinal_data "Ordinal data") has a wide application in real-world situations. In this regard, some MCDM methods were designed to handle ordinal data as input data. For example, [Ordinal Priority Approach](https://en.wikipedia.org/wiki/Ordinal_Priority_Approach "Ordinal Priority Approach") and Qualiflex method.

_**Multi-attribute utility theorists**_

[Multi-attribute utility](https://en.wikipedia.org/wiki/Multi-attribute_utility "Multi-attribute utility") or value functions are elicited and used to identify the most preferred alternative or to rank order the alternatives. Elaborate interview techniques, which exist for eliciting linear additive utility functions and multiplicative nonlinear utility functions, may be used (Keeney and Raiffa, 1976[28]). Another approach is to elicit value functions indirectly by asking the decision-maker a series of pairwise ranking questions involving choosing between hypothetical alternatives ([PAPRIKA method](https://en.wikipedia.org/wiki/PAPRIKA "PAPRIKA"); Hansen and Ombler, 2008[29]).

_**French school**_

The French school focuses on decision aiding, in particular the [ELECTRE](https://en.wikipedia.org/wiki/ELECTRE "ELECTRE") family of outranking methods that originated in France during the mid-1960s. The method was first proposed by Bernard Roy (Roy, 1968[30]).

_**Evolutionary multiobjective optimization school (EMO)**_

EMO algorithms start with an initial population, and update it by using processes designed to mimic natural survival-of-the-fittest principles and genetic variation operators to improve the average population from one generation to the next. The goal is to converge to a population of solutions which represent the nondominated set (Schaffer, 1984;[31] Srinivas and Deb, 1994[32]). More recently, there are efforts to incorporate preference information into the solution process of EMO algorithms (see Deb and Köksalan, 2010[33]).

_**[Grey system theory](https://en.wikipedia.org/wiki/Grey_system_theory "Grey system theory") based methods**_

In the 1980s, [Deng Julong](https://en.wikipedia.org/wiki/Deng_Julong "Deng Julong") proposed Grey System Theory (GST) and its first multiple-attribute decision-making model, called Deng's [Grey relational analysis](https://en.wikipedia.org/wiki/Grey_relational_analysis "Grey relational analysis") (GRA) model. Later, the grey systems scholars proposed many GST based methods like [Liu Sifeng](https://en.wikipedia.org/wiki/Liu_Sifeng "Liu Sifeng")'s Absolute GRA model,[34] Grey Target Decision Making (GTDM)[35] and Grey Absolute Decision Analysis (GADA).[36]

_**[Analytic hierarchy process (AHP)](https://en.wikipedia.org/wiki/Analytic_hierarchy_process "Analytic hierarchy process")**_

The AHP first decomposes the decision problem into a hierarchy of subproblems. Then the decision-maker evaluates the relative importance of its various elements by pairwise comparisons. The AHP converts these evaluations to numerical values (weights or priorities), which are used to calculate a score for each alternative (Saaty, 1980[37]). A consistency index measures the extent to which the decision-maker has been consistent in her responses. AHP is one of the more controversial techniques listed here, with some researchers in the MCDA community believing it to be flawed.[38][39]

Several papers reviewed the application of MCDM techniques in various disciplines such as fuzzy MCDM,[40] classic MCDM,[41] sustainable and renewable energy,[42] VIKOR technique,[43] transportation systems,[44] service quality,[45] TOPSIS method,[46] energy management problems,[47] e-learning,[48] tourism and hospitality,[49] SWARA and WASPAS methods.[50]


### MCDM methods
The following MCDM methods are available, many of which are implemented by specialized [decision-making software](https://en.wikipedia.org/wiki/Decision-making_software "Decision-making software"):[4][5]
- [Aggregated Indices Randomization Method](https://en.wikipedia.org/wiki/Aggregated_Indices_Randomization_Method "Aggregated Indices Randomization Method") (AIRM)
- [Analytic hierarchy process](https://en.wikipedia.org/wiki/Analytic_hierarchy_process "Analytic hierarchy process") (AHP)
- [Analytic network process](https://en.wikipedia.org/wiki/Analytic_network_process "Analytic network process") (ANP)
- Balance Beam process
- [Best worst method](https://en.wikipedia.org/wiki/Best_worst_method "Best worst method") (BWM)[51][52]
- [Brown–Gibson model](https://en.wikipedia.org/wiki/Brown%E2%80%93Gibson_model "Brown–Gibson model")
- Characteristic Objects METhod (COMET)[53][54]
- Choosing By Advantages (CBA)
- Conjoint Value Hierarchy (CVA)[55][56]
- [Data envelopment analysis](https://en.wikipedia.org/wiki/Data_envelopment_analysis "Data envelopment analysis")
- [Decision EXpert](https://en.wikipedia.org/wiki/Decision_EXpert "Decision EXpert") (DEX)
- Disaggregation – Aggregation Approaches (UTA*, UTAII, UTADIS)
- [Rough set](https://en.wikipedia.org/wiki/Rough_set "Rough set") (Rough set approach)
- [Dominance-based rough set approach](https://en.wikipedia.org/wiki/Dominance-based_rough_set_approach "Dominance-based rough set approach") (DRSA)
- [ELECTRE](https://en.wikipedia.org/wiki/ELECTRE "ELECTRE") (Outranking)
- Evaluation Based on Distance from Average Solution (EDAS)[57]
- [Evidential reasoning approach](https://en.wikipedia.org/wiki/Evidential_reasoning_approach "Evidential reasoning approach") (ER)
- [Goal programming](https://en.wikipedia.org/wiki/Goal_programming "Goal programming") (GP)
- [Grey relational analysis](https://en.wikipedia.org/wiki/Grey_relational_analysis "Grey relational analysis") (GRA)
- [Inner product of vectors](https://en.wikipedia.org/wiki/Inner_product_of_vectors "Inner product of vectors") (IPV)
- [Measuring Attractiveness by a categorical Based Evaluation Technique](https://en.wikipedia.org/wiki/Measuring_Attractiveness_by_a_Categorical_Based_Evaluation_Technique_\(MACBETH\)?action=edit&redlink=1 "Measuring Attractiveness by a Categorical Based Evaluation Technique (MACBETH) (page does not exist)") (MACBETH)
- [Multi-Attribute Global Inference of Quality](https://en.wikipedia.org/wiki/Multi-Attribute_Global_Inference_of_Quality "Multi-Attribute Global Inference of Quality") (MAGIQ)
- [Multi-attribute utility theory](https://en.wikipedia.org/wiki/Multi-attribute_utility "Multi-attribute utility") (MAUT)
- Multi-attribute value theory (MAVT)
- Markovian Multi Criteria Decision Making
- [New Approach to Appraisal](https://en.wikipedia.org/wiki/New_Approach_to_Appraisal "New Approach to Appraisal") (NATA)
- Nonstructural Fuzzy Decision Support System (NSFDSS)
- [Ordinal Priority Approach (OPA)](https://en.wikipedia.org/wiki/Ordinal_Priority_Approach "Ordinal Priority Approach")[58][59]
- [Potentially All Pairwise RanKings of all possible Alternatives](https://en.wikipedia.org/wiki/Potentially_All_Pairwise_RanKings_of_all_possible_Alternatives "Potentially All Pairwise RanKings of all possible Alternatives") (PAPRIKA)
- [PROMETHEE](https://en.wikipedia.org/wiki/PROMETHEE "PROMETHEE") (Outranking)
- Simple Multi-Attribute Rating Technique (SMART) [60]
- Stratified Multi Criteria Decision Making (SMCDM)
- [Stochastic Multicriteria Acceptability Analysis](https://en.wikipedia.org/wiki/Stochastic_multicriteria_acceptability_analysis "Stochastic multicriteria acceptability analysis") (SMAA)
- [Superiority and inferiority ranking method](https://en.wikipedia.org/wiki/Superiority_and_inferiority_ranking_method "Superiority and inferiority ranking method") (SIR method)
- System Redesigning to Creating Shared Value (SYRCS)[61]
- [Technique for the Order of Prioritisation by Similarity to Ideal Solution (TOPSIS)](https://en.wikipedia.org/wiki/TOPSIS "TOPSIS")
- [Value analysis](https://en.wikipedia.org/wiki/Value_analysis "Value analysis") (VA)
- [Value engineering](https://en.wikipedia.org/wiki/Value_engineering "Value engineering") (VE)
- [VIKOR method](https://en.wikipedia.org/wiki/VIKOR_method "VIKOR method")[62]
- [Weighted product model](https://en.wikipedia.org/wiki/Weighted_product_model "Weighted product model") (WPM)
- [Weighted sum model](https://en.wikipedia.org/wiki/Weighted_sum_model "WSM")



## Ref
