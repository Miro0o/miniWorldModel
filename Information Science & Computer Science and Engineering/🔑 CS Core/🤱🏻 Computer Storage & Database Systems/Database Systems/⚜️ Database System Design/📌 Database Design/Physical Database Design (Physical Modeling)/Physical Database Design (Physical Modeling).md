# Physical Database Design (Physical Modeling)

[TOC]



## Res
### Related Topics
↗ [DBMS (DataBase Management System) Implementations](../../../Database%20System%20Implementation%20&%20Deployment%20&%20Maintenance/DBMS%20(DataBase%20Management%20System)%20Implementations/DBMS%20(DataBase%20Management%20System)%20Implementations.md)
↗ [Data Warehouse & Beyonds](../../../../../../Information%20Systems%20&%20System%20Architecture%20Design/👨🏻‍🔧%20System%20Modeling%20&%20Integration/Data%20Integration/Data%20Warehouse%20&%20Beyonds.md)


### Other Resources



## Intro
### Organization of a Typical DBMS
![|500](../../../../../../../Assets/Pics/Screenshot%202023-03-06%20at%203.32.35%20PM.png)
<small>Components of a DBMS</small>


![|500](../../../../../../../Assets/Pics/Screenshot%202023-03-06%20at%203.32.51%20PM.png)
<small>Components of a Database Manager</small>


### OLTP (Online Transaction Processing) vs OLAP (Online Analytical Processing)
#OLTP #OLAP

> [!links]
> ↗ [Data Analysis & Automation](../../../../../../Data-Oriented%20&%20Human-Centered%20Technologies/Data%20Science/⛏️%20Data%20Mining/Data%20Analysis%20&%20Automation/Data%20Analysis%20&%20Automation.md)
> ↗ [Data Warehouse & Beyonds](../../../../../../Information%20Systems%20&%20System%20Architecture%20Design/👨🏻‍🔧%20System%20Modeling%20&%20Integration/Data%20Integration/Data%20Warehouse%20&%20Beyonds.md)

Traditional databases (OLTP):
- Mostly updates
- Many small transactions
- MB to GB of data
- Current data only
- Raw data
- Normalized data model
- Thousands of users

Data Warehouses (OLAP):
- Mostly reads
- Few complex queries
- GB to TB of data
- Current and historical data
- Aggregated data
- Denormalized data model
- Hundreds of users



## Ref
