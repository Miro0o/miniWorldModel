# Shortest Path Problem

[TOC]



## Res


## Intro
In [graph theory](https://en.wikipedia.org/wiki/Graph_theory "Graph theory"), the **shortest path problem** is the problem of finding a [path](https://en.wikipedia.org/wiki/Path_(graph_theory) "Path (graph theory)") between two vertices (or nodes) in a graph such that the sum of the weights of its constituent edges is minimized.

The problem of finding the shortest path between two intersections on a road map may be modeled as a special case of the shortest path problem in graphs, where the vertices correspond to intersections and the edges correspond to road segments, each weighted by the length of the segment

### Definition
#TODO 


### Algorithms
The most important algorithms for solving this problem are:
- [Dijkstra's algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm "Dijkstra's algorithm") solves the single-source shortest path problem with non-negative edge weight.

- [Bellman–Ford algorithm](https://en.wikipedia.org/wiki/Bellman%E2%80%93Ford_algorithm "Bellman–Ford algorithm") solves the single-source problem if edge weights may be negative.
	- SPFA algorithm

- [A* search algorithm](https://en.wikipedia.org/wiki/A*_search_algorithm "A* search algorithm") solves for single-pair shortest path using heuristics to try to speed up the search.

- [Floyd–Warshall algorithm](https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm "Floyd–Warshall algorithm") solves all pairs shortest paths.

- [Johnson's algorithm](https://en.wikipedia.org/wiki/Johnson%27s_algorithm "Johnson's algorithm") solves all pairs shortest paths, and may be faster than Floyd–Warshall on [sparse graphs](https://en.wikipedia.org/wiki/Sparse_graph "Sparse graph").

- [Viterbi algorithm](https://en.wikipedia.org/wiki/Viterbi_algorithm "Viterbi algorithm") solves the shortest stochastic path problem with an additional probabilistic weight on each node.

Additional algorithms and associated evaluations may be found in [Cherkassky, Goldberg & Radzik (1996)](https://en.wikipedia.org/wiki/Shortest_path_problem#CITEREFCherkasskyGoldbergRadzik1996).



## Problems Types
### 1️⃣ Single-Source Shortest Path
↗ [Single-Source Shortest Path (SSSP)](Single-Source%20Shortest%20Path%20(SSSP)/Single-Source%20Shortest%20Path%20(SSSP).md)


### 2️⃣ Multiple-Source Shortest Path (All-Pairs Shortest Paths)
↗ [Multiple-Source Shortest Path (All-Pairs Shortest Paths)](Multiple-Source%20Shortest%20Path%20(All-Pairs%20Shortest%20Paths)/Multiple-Source%20Shortest%20Path%20(All-Pairs%20Shortest%20Paths).md)



## Applications


## Related Problems


## Ref
[Shortest Path Problem | Wikipedia]: https://en.wikipedia.org/wiki/Shortest_path_problem


