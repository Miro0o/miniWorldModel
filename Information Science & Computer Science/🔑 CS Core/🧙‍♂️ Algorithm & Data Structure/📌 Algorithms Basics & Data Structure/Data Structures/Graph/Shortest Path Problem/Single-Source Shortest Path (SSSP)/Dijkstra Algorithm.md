# `Dijkstra` Algorithm

[TOC]



## Res


## Intro
```cpp
typedef pair<int, int> Pair;
priority_queue<Pair, vector<Pair>, greater<Pair> > Q;

void Dij(int s)
{
    dist[s] = 0;
    Q.push(make_pair(0, s));
    while (!Q.empty())
    {
        int p = Q.top().second;
        Q.pop();
        if (vis[p])
            continue;
        vis[p] = 1;
        for (int e = head[p]; e != 0; e = edges[e].next)
        {
            int to = edges[e].to;
            dist[to] = min(dist[to], dist[p] + edges[e].w);
            if (!vis[to])
                Q.push(make_pair(dist[to], to));
        }
    }
}
```


## Ref
[👍 七）通俗易懂理解——dijkstra算法求最短路径 | 知乎]: https://www.zhihu.com/tardis/zm/art/40338107?source_id=1003

