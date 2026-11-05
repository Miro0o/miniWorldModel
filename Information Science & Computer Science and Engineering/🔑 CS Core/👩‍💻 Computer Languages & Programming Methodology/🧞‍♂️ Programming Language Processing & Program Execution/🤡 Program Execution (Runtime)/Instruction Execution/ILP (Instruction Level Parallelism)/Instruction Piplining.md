# Instruction Pipelining

[TOC]



## Res



## Intro
> Instruction pipelining is one method used to exploit **instruction-level parallelism (ILP)**. (Other methods include superscalar and VLIW.) We include it in this chapter because ==the ISA of a machine affects how successful instruction pipelining can be.==
> 
> ↗ [ILP (Instruction Level Parallelism)](ILP%20(Instruction%20Level%20Parallelism).md)

```shell
----------------------------------------------------------------
Example: 
	1 2 3 4 5 6 7 8 9 10
1	1 1 1 1 1 
2	  1 1 1 1 1 
3       1 1 1 1 1 
4	      1 1 1 1 1 
5	        1 1 1 1 1 
6	       	  1 1 1 1 1 

==> stages number = 5
==> instruction sum = 6
==> total stages for pipelining : 5 + 6 - 1 = 10

----------------------------------------------------------------
proof: set number of stages for one instructioin is K, while sum number for instructions is N

1 1 1 1 1 
  1 1 1 1 <1> 

every other more row occurred, i.e one more instruction, the total infect it cast on the total stages is 1.
hence 
total stages for pipelining is thus K + (N - 1)
----------------------------------------------------------------
```


### Speedup S
Let’s calculate the speedup we gain using a pipeline. Without a pipeline, the time required is $n * t_n$ cycles, where $t_n = k × t_p$. Therefore, the speedup (time without a pipeline divided by the time using a pipeline) is:
$$Speedup \ S = \frac{n \times t_n}{(k+n-1) \times t_p} = \frac{n \times k \times t_p}{(k+n-1) \times t_p}$$
If we take the limit of this as n approaches infinity, we see that $(k + n − 1)$ approaches $n$, which results in a theoretical speedup of:
$$Speedup \ S = \frac{k \times t_p}{t_p} = k$$

From our preceding discussion of speedup, it might appear that the more stages that exist in the pipeline, the faster everything will run. **This is true to a point.** 
- There is a fixed overhead involved in moving data from memory to registers. 
- The amount of control logic for the pipeline also increases in size proportional to the number of stages, thus slowing down total execution. 
- In addition, there are several conditions that result in “**pipeline conflicts**,” which keep us from reaching the goal of executing one instruction per clock cycle.


### Pipeline Conflicts
#### Resource Conflicts  

#### Data Dependencies 


#### Conditional Branch Statements


### Predicated Instructions



## Ref
[👍【计算机体系结构-04】流水线：基础与中级概念 (Pipelinling: Basic and Intermediate Concepts) | CSDN]: https://imaginemiracle.blog.csdn.net/article/details/128848711
[👍【计算机体系结构-05】流水线冒险 (Pipeline Hazards)——控制冒险 (Control Hazards) | CSDN]: https://imaginemiracle.blog.csdn.net/article/details/129435614
