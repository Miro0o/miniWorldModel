# Bellman-Ford Algorithm

[TOC]



## Res



## Intro
### Bellman-Ford Equation
$$d_x(y) = min_v\{c(x, v) + d_v(y)\}$$

where the $min_v$ in the equation is taken over all of x’s neighbors. The Bellman-Ford equation is rather intuitive. Indeed, after traveling from x to v, if we then take the least-cost path from v to y, the path cost will be $c(x, v) + d_v(y)$. Since we must begin by traveling to some neighbor v, the least cost from x to y is the minimum of $c(x, v) + d_v(y)$ taken over all neighbors v.

The Bellman-Ford equation is not just an intellectual curiosity. It actually has significant practical importance: 

- the solution to the Bellman-Ford equation provides the entries in node x’s forwarding table. 

> To see this, let v* be any neighboring node that achieves the minimum in equation above. Then, if node x wants to send a packet to node y along a least-cost path, it should first forward the packet to node v*. Thus, node x’s forwarding table would specify node v* as the next-hop router for the ultimate destination y. 

- Another important practical contribution of the Bellman-Ford equation is that it suggests the form of the neighbor-to-neighbor communication that will take place in the DV algorithm.



## BF Algorithm
### 松弛操作
想想看，我们要找到从起点到某个点的最短路，设起点为S，终点为D，那这条最短路一定是**S->P1->P2->...->D**的形式，假设**没有负权环**，那这条路径上的点的总个数一定**不大于n**。

现在我们定义对点x, y的**松弛**操作是：
```cpp
dist[y] = min(dist[y], dist[x] + e[x][y]);
//这里的e[x][y]表示x、y之间的距离，具体形式可能根据存图方法不同而改变
```

松弛操作就相当于考察能否**经由x点**使**起点到y点**的距离变短。


### BF Algo
所以要找到最短路，我们只需要进行以下步骤：

1. 先松弛S, P1，此时dist[P1]必然等于e[S][P1]。
2. 再松弛P1, P2，因为S->P1->P2是最短路的一部分，**最短路的子路也是最短路**（这是显然的），所以dist[P2]不可能小于dist[P1]+e[P1][P2]，因此它会被更新为dist[P1]+e[P1][P2]，即e[S][P1]+e[P1][P2]。
3. 再松弛P2, P3，……以此类推，最终dist[D]必然等于e[S][P1]+e[P1][P2]+...，这恰好就是最短路径。

说得好像很有道理，但是问题来了，我怎么知道这些P1、P2是什么呢？我们不就是要找它们吗？关键的来了，Bellman-Ford算法告诉我们：

**把所有边松弛一遍！**

因为我们要求的是最小值，而多余的松弛操作不会使某个dist比最小值还小。所以**多余的松弛操作不会影响结果**。把所有边的端点松弛完一遍后，我们可以保证S, P1已经被松弛过了，现在我们要松弛P1, P2，怎么做呢？

**再把所有边松弛一遍！**

好了，现在我们松弛了P1, P2，继续这么松弛下去，什么时候是尽头呢？还记得我们说过吗？最短路上的点的总个数一定**不大于n**，尽管一般而言最短路上的顶点数比n少得多，但反正多余的松弛操作不会影响结果，我们索性：

**把所有边松弛n-1遍！**

这就是Bellman-Ford算法，相信你已经意识到，这是种很暴力的算法，它的时间复杂度是  。代码如下：
```cpp
void Bellman_Ford(int n, int m)
{
    for (int j = 0; j < n - 1; ++j)
        for (int i = 1; i <= m; ++i)
            dist[edges[i].to] = min(dist[edges[i].to], dist[edges[i].from] + edges[i].w);
}
```
三行代码，比Floyd还简单。这里用的是链式前向星存图，但是建议存的时候多存一个from，方便遍历所有边。当然其实并没什么必要，这里直接**暴力存边集**就可以了，因为这个算法并不关心每个点能连上哪些边。

> 我们之前说，我们不考虑**负权环**，但其实Bellman-Ford算法是可以很简单地处理负权环的，只需要再**多对每条边松弛一遍**，如果这次还有点被更新，就说明存在负权环。因为没有负权环时，最短路上的顶点数一定小于n，而存在负权环时，可以无数次地环绕这个环，最短路上的顶点数是无限的。



## SPFA (Shortest Path Faster Algorithm)
> SPFA算法是西南交通大学段凡丁于1994 年发表的论文中的名字。 不过，段凡丁的证明是错误的，且在Bellman-Ford 算法提出后不久（1957 年）已有队列优化内容，所以国际上不承认SPFA 算法是段凡丁提出的。

总结一下，SPFA是如何做到“只更新可能更新的点”的？
1. **只让当前点能到达的点入队**
2. 如果一个点**已经在队列**里，便**不重复入队**
3. 如果一条边**未被更新**，那么它的终点不入队

原理是，我们的目标是松弛完，所以我们先把 能到达的所有点加入队列，则一定在队列中。然后对于队列中每个点，我们都把它能到达的所有点加入队列（不重复入队），这时我们又可以保证  一定在队列中。另外注意到，假如  是目标最短路上的一段，那么在松弛这条边时它一定是会被更新的，所以如果一条边未被更新，它的终点就不入队。

```cpp
void SPFA(int s)
{
    queue<int> Q;
    Q.push(s);
    while (!Q.empty())
    {
        int p = Q.front();
        Q.pop();
        inqueue[p] = 0;
        for (int e = head[p]; e != 0; e = edges[e].next)
        {
            int to = edges[e].to;
            if (dist[to] > dist[p] + edges[e].w)
            {
                dist[to] = dist[p] + edges[e].w;
                if (!inqueue[to])
                {
                    inqueue[to] = 1;
                    Q.push(to);
                }
            }
        }
    }
}
```
SPFA也可以判负权环，我们可以用一个数组记录每个顶点进队的次数，当一个顶点**进队超过n次**时，就说明存在负权环。（这与Bellman-Ford判负权环的原理类似）



## Ref
[👍 七）通俗易懂理解——dijkstra算法求最短路径 | 知乎]: https://www.zhihu.com/tardis/zm/art/40338107?source_id=1003
