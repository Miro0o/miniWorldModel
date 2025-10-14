# Dynamic Programming (DP) & Multi-Objective Optimization

[TOC]



## Res
### Related Topics
↗ [Multi-Criteria Decision Making (MCDM) & Analysis (MCDA)](../../../../../Other%20Networks%20of%20Knowledge/Social%20Science/Decision%20Theory%20&%20Decision%20Analysis/Multi-Criteria%20Decision%20Making%20(MCDM)%20&%20Analysis%20(MCDA)/Multi-Criteria%20Decision%20Making%20(MCDM)%20&%20Analysis%20(MCDA).md)
↗ [Mathematical Optimization](../../../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Mathematical%20Optimization/Mathematical%20Optimization.md)
- ↗ [COP (Convex Optimization Programming)](../../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Mathematical%20Optimization/COP%20(Convex%20Optimization%20Programming)/COP%20(Convex%20Optimization%20Programming).md)
	- ↗ [Dynamic Programming (DP)](../../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Mathematical%20Optimization/COP%20(Convex%20Optimization%20Programming)/Dynamic%20Programming%20(DP)/Dynamic%20Programming%20(DP).md)
- ↗ [Multi-Objective Optimization (Pareto Optimization)](../../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Mathematical%20Optimization/📌%20Multi-Objective%20Optimization%20(Pareto%20Optimization)/Multi-Objective%20Optimization%20(Pareto%20Optimization).md)


### Learning Resources
https://oi-wiki.org/dp/
本章将介绍介绍动态规划（Dynamic Programming, DP）及其解决的问题、根据其设计的算法及优化。



## Intro
### Quick Introduction to Dynamic Programming (DP)
> 🔗 https://cp-algorithms.com/dynamic_programming/intro-to-dp.html

The essence of dynamic programming is to avoid repeated calculation with **memoization**. That's read "memoization" (like we are writing in a memo pad) not memorization.
- Often, dynamic programming problems are naturally solvable by recursion. In such cases, it's easiest to write the recursive solution, then save repeated states in a lookup table. This process is known as **top-down dynamic programming with memoization**. 
- However, besides top-down DP we can also solve problems with **bottom-up dynamic programming**. Bottom-up is exactly the opposite of top-down, you start at the bottom (base cases of the recursion), and extend it to more and more values.

One of the most basic, classic examples of this process is the fibonacci sequence. Compare these three versions of C implementation of fibonacci sequence: 

```c++
// #1. recursive implementation of Fib (not DP, since there's no memoization)
// top-bottum approach: from the request value to the base cases.

// time complexity: O(2^n)


int f(int n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    return f(n - 1) + f(n - 2);
}
```

```c++
// #2. recursive implementation of Fib with memoization (Top-Down DP)
// top-bottum approach: from the request value to the base cases.
// there are various other containers to do memoization, map, unordered_map, etc.

// time compelxity: O(n)


const int MAXN = 100;
bool found[MAXN];
int memo[MAXN];

int f(int n) {
    if (found[n]) return memo[n];
    if (n == 0) return 0;
    if (n == 1) return 1;

    found[n] = true;
    return memo[n] = f(n - 1) + f(n - 2);
}
```

```c++
// #3. for-loop implementation of Fib with memoization (Buttom-up DP)
// buttom-up approach: from the base cases to the target value.

// time compelxity: O(n)
// space complexity: O(n)


const int MAXN = 100;
int fib[MAXN];

int f(int n) {
    fib[0] = 0;
    fib[1] = 1;
    for (int i = 2; i <= n; i++) fib[i] = fib[i - 1] + fib[i - 2];

    return fib[n];
}


// ================================================
//
// #3.5 refined version of #3. implementation, reducing space compelxity to O(1)
// time compelxity: O(n)
// space complexity: O(1)


const int MAX_SAVE = 3;
int fib[MAX_SAVE];

int f(int n) {
    fib[0] = 0;
    fib[1] = 1;
    for (int i = 2; i <= n; i++)
        fib[i % MAX_SAVE] = fib[(i - 1) % MAX_SAVE] + fib[(i - 2) % MAX_SAVE];

    return fib[n % MAX_SAVE];
}
```


That's it. That's the basics of dynamic programming: Don't repeat the work you've done before.

One of the tricks to getting better at dynamic programming is to study some of the classic examples:

| Name                                            | Description/Example                                                                                                                                                                                                              |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0-1 Knapsack (and variants of knapsack problem) | Given  $W$ ,  $N$ , and  $N$  items with weights  $w_i$  and values  $v_i$ , what is the maximum  $\sum_{i=1}^{k} v_i$  for each subset of items of size  $k$  ( $1 \le k \le N$ ) while ensuring  $\sum_{i=1}^{k} w_i \le W$ ?  |
| Subset Sum                                      | Given  $N$  integers and  $T$ , determine whether there exists a subset of the given set whose elements sum up to the  $T$ .                                                                                                     |
| Longest Increasing Subsequence (LIS)            | You are given an array containing  $N$  integers. Your task is to determine the LIS in the array, i.e., a subsequence where every element is larger than the previous one.                                                       |
| Counting Paths in a 2D Array                    | Given  $N$  and  $M$ , count all possible distinct paths from  $(1,1)$  to  $(N, M)$ , where each step is either from  $(i,j)$  to  $(i+1,j)$  or  $(i,j+1)$ .                                                                   |
| Longest Common Subsequence                      | You are given strings  $s$  and  $t$ . Find the length of the longest string that is a subsequence of both  $s$  and  $t$ .                                                                                                      |
| Longest Path in a Directed Acyclic Graph (DAG)  | Finding the longest path in Directed Acyclic Graph (DAG).                                                                                                                                                                        |
| Longest Palindromic Subsequence                 | Finding the Longest Palindromic Subsequence (LPS) of a given string.                                                                                                                                                             |
| Rod Cutting                                     | Given a rod of length  $n$  units, Given an integer array cuts where cuts[i] denotes a position you should perform a cut at. The cost of one cut is the length of the rod to be cut. What is the minimum total cost of the cuts. |
| Edit Distance                                   | The edit distance between two strings is the minimum number of operations required to transform one string into the other. Operations are ["Add", "Remove", "Replace"]                                                           |


### Academic Background of DP
#### Multi-Objective Optimization
↗ [Multi-Objective Optimization (Pareto Optimization)](../../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Mathematical%20Optimization/📌%20Multi-Objective%20Optimization%20(Pareto%20Optimization)/Multi-Objective%20Optimization%20(Pareto%20Optimization).md)
#### Convex Optimization Programming (COP) & Dynamic Programming (DP)
↗ [Mathematical Optimization](../../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Mathematical%20Optimization/Mathematical%20Optimization.md)
- ↗ [COP (Convex Optimization Programming)](../../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Mathematical%20Optimization/COP%20(Convex%20Optimization%20Programming)/COP%20(Convex%20Optimization%20Programming).md)
	- ↗ [Dynamic Programming (DP)](../../../../🧮%20Mathematics/🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Mathematical%20Optimization/COP%20(Convex%20Optimization%20Programming)/Dynamic%20Programming%20(DP)/Dynamic%20Programming%20(DP).md)



## Ref
