# Dynamic Programming (DP)

[TOC]



## Res
### Related Topics
↗ [Dynamic Programming (DP) & Multi-Objective Optimization](../../../../../🔑%20CS%20Core/🧙‍♂️%20Algorithm%20&%20Data%20Structure/Algorithms%20Implementation%20For%20Classical%20Problems/Dynamic%20Programming%20(DP)%20&%20Multi-Objective%20Optimization/Dynamic%20Programming%20(DP)%20&%20Multi-Objective%20Optimization.md)
↗ [Multi-Objective Dynamic Programming](../../Multi-Objective%20Optimization%20(MOO)%20(Pareto%20Optimization)/Multi-Objective%20Dynamic%20Programming/Multi-Objective%20Dynamic%20Programming.md)


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Dynamic_programming

**Dynamic programming** (**DP**) is both a [mathematical optimization](https://en.wikipedia.org/wiki/Mathematical_optimization "Mathematical optimization") method and an [algorithmic paradigm](https://en.wikipedia.org/wiki/Algorithmic_paradigm "Algorithmic paradigm"). The method was developed by [Richard Bellman](https://en.wikipedia.org/wiki/Richard_Bellman "Richard Bellman") in the 1950s and has found applications in numerous fields, such as [aerospace engineering](https://en.wikipedia.org/wiki/Aerospace_engineering "Aerospace engineering") and [economics](https://en.wikipedia.org/wiki/Economics "Economics").

In both contexts it refers ==to simplifying a complicated problem by breaking it down into simpler sub-problems in a [recursive](https://en.wikipedia.org/wiki/Recursion "Recursion") manner==. While some decision problems cannot be taken apart this way, decisions that span several points in time do often break apart recursively. Likewise, in computer science, if a problem can be solved optimally by breaking it into sub-problems and then recursively finding the optimal solutions to the sub-problems, then it is said to have _[optimal substructure](https://en.wikipedia.org/wiki/Optimal_substructure "Optimal substructure")_.

If sub-problems can be nested recursively inside larger problems, so that dynamic programming methods are applicable, then there is a relation between the value of the larger problem and the values of the sub-problems. In the optimization literature this relationship is called the [Bellman equation](https://en.wikipedia.org/wiki/Bellman_equation "Bellman equation").


> 🔗 https://en.wikipedia.org/wiki/Dynamic_programming#Overview


### History of The Name
> 🔗 https://en.wikipedia.org/wiki/Dynamic_programming#History_of_the_name

The term _dynamic programming_ was originally used in the 1940s by [Richard Bellman](https://en.wikipedia.org/wiki/Richard_Bellman "Richard Bellman") to describe the process of solving problems where one needs to find the best decisions one after another. By 1953, he refined this to the modern meaning, referring specifically to nesting smaller decision problems inside larger decisions, and the field was thereafter recognized by the [IEEE](https://en.wikipedia.org/wiki/IEEE "IEEE") as a [systems analysis](https://en.wikipedia.org/wiki/Systems_analysis "Systems analysis") and [engineering](https://en.wikipedia.org/wiki/Engineering "Engineering") topic. Bellman's contribution is remembered in the name of the [Bellman equation](https://en.wikipedia.org/wiki/Bellman_equation "Bellman equation"), a central result of dynamic programming which restates an optimization problem in [recursive](https://en.wikipedia.org/wiki/Recursion_\(computer_science\) "Recursion (computer science)") form.

Bellman explains the reasoning behind the term _dynamic programming_ in his autobiography, _Eye of the Hurricane: An Autobiography_:

> [!quote]
> I spent the Fall quarter (of 1950) at [RAND](https://en.wikipedia.org/wiki/RAND_Corporation "RAND Corporation"). My first task was to find a name for multistage decision processes. An interesting question is, "Where did the name, dynamic programming, come from?" The 1950s were not good years for mathematical research. We had a very interesting gentleman in Washington named [Wilson](https://en.wikipedia.org/wiki/Charles_Erwin_Wilson "Charles Erwin Wilson"). He was Secretary of Defense, and he actually had a pathological fear and hatred of the word "research". I'm not using the term lightly; I'm using it precisely. His face would suffuse, he would turn red, and he would get violent if people used the term research in his presence. You can imagine how he felt, then, about the term mathematical. The RAND Corporation was employed by the Air Force, and the Air Force had Wilson as its boss, essentially. Hence, I felt I had to do something to shield Wilson and the Air Force from the fact that I was really doing mathematics inside the RAND Corporation. What title, what name, could I choose? In the first place I was interested in planning, in decision making, in thinking. But planning, is not a good word for various reasons. I decided therefore to use the word "programming". I wanted to get across the idea that this was dynamic, this was multistage, this was time-varying. I thought, let's kill two birds with one stone. Let's take a word that has an absolutely precise meaning, namely dynamic, in the classical physical sense. It also has a very interesting property as an adjective, and that is it's impossible to use the word dynamic in a pejorative sense. Try thinking of some combination that will possibly give it a pejorative meaning. It's impossible. Thus, I thought dynamic programming was a good name. It was something not even a Congressman could object to. So I used it as an umbrella for my activities.
> 
> — Richard Bellman, _Eye of the Hurricane: An Autobiography_ (1984, page 159)

The word _dynamic_ was chosen by Bellman to capture the time-varying aspect of the problems, and because it sounded impressive. The word _programming_ referred to the use of the method to find an optimal _program_, in the sense of a military schedule for training or logistics. This usage is the same as that in the phrases _[linear programming](https://en.wikipedia.org/wiki/Linear_programming "Linear programming")_ and _mathematical programming_, a synonym for [mathematical optimization](https://en.wikipedia.org/wiki/Mathematical_optimization "Mathematical optimization").

The above explanation of the origin of the term may be inaccurate: According to Russell and Norvig, the above story "cannot be strictly true, because his first paper using the term (Bellman, 1952) appeared before Wilson became Secretary of Defense in 1953." Also, [Harold J. Kushner](https://en.wikipedia.org/wiki/Harold_J._Kushner "Harold J. Kushner") stated in a speech that, "On the other hand, when I asked [Bellman] the same question, he replied that he was trying to upstage [Dantzig's](https://en.wikipedia.org/wiki/George_Dantzig "George Dantzig") linear programming by adding dynamic. Perhaps both motivations were true.



## Dynamic Programming For Optimization Problems
> [!links]
> ↗ [Dynamic Programming (DP) & Multi-Objective Optimization](../../../../../🔑%20CS%20Core/🧙‍♂️%20Algorithm%20&%20Data%20Structure/Algorithms%20Implementation%20For%20Classical%20Problems/Dynamic%20Programming%20(DP)%20&%20Multi-Objective%20Optimization/Dynamic%20Programming%20(DP)%20&%20Multi-Objective%20Optimization.md)
> ↗ [Knapsack Problem](../../../../../🔑%20CS%20Core/🧙‍♂️%20Algorithm%20&%20Data%20Structure/Algorithms%20Implementation%20For%20Classical%20Problems/Dynamic%20Programming%20(DP)%20&%20Multi-Objective%20Optimization/Knapsack%20Problem.md)
> ↗ [Discrete Resource Allocation & Knapsack](../../Discrete%20Optimization/Combinatorial%20Optimization/Discrete%20Resource%20Allocation%20&%20Knapsack/Discrete%20Resource%20Allocation%20&%20Knapsack.md)



## Ref
