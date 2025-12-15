# File Allocation

[TOC]



## Res
### Related Topics



## Intro
> Given a set of blocks associated with a file and the set of available disk blocks, determine where to place the blocks (文件分配：决定文件的数据块在二级存储中存放的盘块位置)

### File Allocation Table (FAT)



### File Allocation Strategies
#### Preallocation


#### Dynamic Allocation


### Portion Size
#### Variable-length, large contiguous portion

> - better performance (data locality)
> - high utilization
> - small FAT



#### Fixed-length, small blocks (直接使用盘块)

> - better flexibility (when modifying the file)
> - poor locality
> - large FAT or complex structures



## File Allocation Methods
![](../../../../../../../../../Assets/Pics/Screenshot%202023-06-01%20at%203.52.51%20PM.png)

| | Contiguous | Chained | Indexed (block) | Indexed (variable) |
|---|---|---|---|---|   
| Need preallocation? | Yes | Maybe | Maybe | Maybe |
| Portion size | Variable, large | Fixed, small | Fixed, small | Variable, medium |
| Allocation frequency | Once | Low to high | High | Low |
| Time to allocate | Medium | Long | Short | Medium |
| FAT size | 1 entry/file | 1 entry/file | Large | Medium|
| Locality | Good | Poor | Poor | Good |


### Contiguous Allocation
> - Allocate a single variable-length portion to a file (给每个文件分配一段连续的变长分区)
> - One entry for each file in FAT
> 	- Start block and length (起始盘块及分区长度)
> - Good locality but low utilization and flexibility  (局部性好，但是利用率和分配灵活度低)
> 	- External fragmentation (外部碎片)
> 	- Handled by **compaction** (采用压缩减少外部碎片)

![](../../../../../../../../Assets/Pics/Screenshot%202023-06-19%20at%202.13.46%20PM.png)

![](../../../../../../../../Assets/Pics/Screenshot%202023-06-19%20at%202.13.59%20PM.png)

![](../../../../../../../../Assets/Pics/Screenshot%202023-06-19%20at%202.14.29%20PM.png)


### Chained Allocation
> - Allocate any available block for a file (给每个文件分配的盘块可以来自任意位置)
> - Each block has the pointer to the next block (每个盘块中存储了下一个盘块的位置)
> - One entry for each file in FAT
> 	- Start block (起始盘块)
> - Poor locality but high utilization and flexibility  (局部性差，但是利用率和分配灵活度高)
> 	- Improve by **consolidation** (采用合并提高局部性)

![](../../../../../../../../Assets/Pics/Screenshot%202023-06-19%20at%202.12.22%20PM.png)

![](../../../../../../../../Assets/Pics/Screenshot%202023-06-19%20at%202.12.41%20PM.png)


### Indexed Allocation
> - FAT has a separate one-level index for each file  (每个文件在分配表中具有一个一级索引)
> - The index contains an entry for each portion (variable-length portion/block) allocated to the file (索引包含了对应文件的所有分区信息)
> - The file allocation table contains block number for the index block (文件分配表包括块号作为索引)
> - Most widely used (使用最广泛的分配方法)

#### Indexed Allocation with Block Portions
![](../../../../../../../../Assets/Pics/Screenshot%202023-06-19%20at%202.17.23%20PM.png)


#### Indexed Allocation with VLP
![](../../../../../../../../Assets/Pics/Screenshot%202023-06-19%20at%202.18.56%20PM.png)



## Ref

