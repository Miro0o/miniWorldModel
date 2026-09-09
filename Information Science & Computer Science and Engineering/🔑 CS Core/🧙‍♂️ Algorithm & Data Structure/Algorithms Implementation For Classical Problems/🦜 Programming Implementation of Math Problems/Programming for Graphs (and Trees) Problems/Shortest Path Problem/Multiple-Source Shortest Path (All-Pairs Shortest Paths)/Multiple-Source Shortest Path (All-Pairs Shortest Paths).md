# Multiple-Source Shortest Path (All-Pairs Shortest Paths)

[TOC]



## Res


## Intro
### Undirected graph

|Weights|Time complexity|Algorithm|
|---|---|---|
|R+|_O_(_V_3)|[Floyd–Warshall algorithm](https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm "Floyd–Warshall algorithm")|
|{1,∞} | O(Vωlog⁡V) | [Seidel's algorithm](https://en.wikipedia.org/wiki/Seidel%27s_algorithm "Seidel's algorithm") (expected running time)|
|N!|O(V3/2Ω(log⁡n)1/2)|[Williams 2014](https://en.wikipedia.org/wiki/Shortest_path_problem#CITEREFWilliams2014)|
|R!+|_O_(_EV_ log α(_E_,_V_))|[Pettie & Ramachandran 2002](https://en.wikipedia.org/wiki/Shortest_path_problem#CITEREFPettieRamachandran2002)|
|N|_O_(_EV_)|[Thorup 1999](https://en.wikipedia.org/wiki/Shortest_path_problem#CITEREFThorup1999) applied to every vertex (requires constant-time multiplication).|


### Directed graph

| Weights | Time complexity | Algorithm |
|---|---|---|
| (no negative cycles)|_O_(_V_3) | [Floyd–Warshall algorithm](https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm "Floyd–Warshall algorithm")|
|N|O(V3/2Ω(log⁡n)1/2)|[Williams 2014](https://en.wikipedia.org/wiki/Shortest_path_problem#CITEREFWilliams2014)|
|R (no negative cycles)|_O_(_EV_ + _V_2 log _V_)|[Johnson–Dijkstra](https://en.wikipedia.org/wiki/Johnson%27s_algorithm "Johnson's algorithm")|
|R (no negative cycles)|_O_(_EV_ + _V_2 log log _V_)|[Pettie 2004](https://en.wikipedia.org/wiki/Shortest_path_problem#CITEREFPettie2004)|
|N|_O_(_EV_ + _V_2 log log _V_)|[Hagerup 2000](https://en.wikipedia.org/wiki/Shortest_path_problem#CITEREFHagerup2000)|



## Ref
[Shortest Path Problem | Wikipedia]: https://en.wikipedia.org/wiki/Shortest_path_problem


