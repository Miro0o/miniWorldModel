# Data Warehouse & Beyonds

[TOC]



## Res
### Related Topics
↗ [Database Design](../../../🔑%20CS%20Core/🤱🏻%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/Database%20System%20Design/Database%20Design/Database%20Design.md)
↗ [Physical Database Design (Physical Modeling)](../../../🔑%20CS%20Core/🤱🏻%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/Database%20System%20Design/Database%20Design/Physical%20Database%20Design%20(Physical%20Modeling)/Physical%20Database%20Design%20(Physical%20Modeling).md)

↗ [Data Analysis & Automation](../../../Data-Oriented%20&%20Human-Centered%20Technologies/Data%20Science/⛏️%20Data%20Mining/Data%20Analysis%20&%20Automation/Data%20Analysis%20&%20Automation.md)


### Other Resources



## Intro
> [!Links]
> ↗ [Physical Database Design (Physical Modeling)](../../../🔑%20CS%20Core/🤱🏻%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/Database%20System%20Design/Database%20Design/Physical%20Database%20Design%20(Physical%20Modeling)/Physical%20Database%20Design%20(Physical%20Modeling).md)
> ↗ [Business Intelligence (BI)](../../../🔑%20CS%20Core/🤱🏻%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/Database%20System%20Implementation%20&%20Deployment%20&%20Maintenance/Database%20Applications%20(DBAP)%20&%20Services/Business%20Intelligence%20(BI)/Business%20Intelligence%20(BI).md)

> [!Quote]
> “A Data Warehouse is a subject-oriented, integrated, time-varying, non-volatile collection of data that is used primarily in organizational decision making”
> 
> Bill Inmon, Building the Data Warehouse, 1996

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

> 🔗 https://en.wikipedia.org/wiki/Data_warehouse

In [computing](https://en.wikipedia.org/wiki/Computing "Computing"), a **data warehouse** (**DW** or **DWH**), also known as an **enterprise data warehouse** (**EDW**), is a system used for [reporting](https://en.wikipedia.org/wiki/Business_intelligence "Business intelligence") and [data analysis](https://en.wikipedia.org/wiki/Data_analysis "Data analysis") and is a core component of [business intelligence](https://en.wikipedia.org/wiki/Business_intelligence "Business intelligence"). Data warehouses are central [repositories](https://en.wikipedia.org/wiki/Repository_\(version_control\) "Repository (version control)") of data integrated from disparate sources. They store current and historical data organized in a way that is optimized for data analysis, generation of reports, and developing insights across the integrated data. They are intended to be used by analysts and managers to help make organizational decisions.
The data stored in the warehouse is [uploaded](https://en.wikipedia.org/wiki/Upload "Upload") from [operational systems](https://en.wikipedia.org/wiki/Operational_system "Operational system") (such as marketing or sales). The data may pass through an [operational data store](https://en.wikipedia.org/wiki/Operational_data_store "Operational data store") and may require [data cleansing](https://en.wikipedia.org/wiki/Data_cleansing "Data cleansing") for additional operations to ensure [data quality](https://en.wikipedia.org/wiki/Data_quality "Data quality") before it is used in the data warehouse for reporting.

The two main workflows for building a data warehouse system are [extract, transform, load](https://en.wikipedia.org/wiki/Extract,_transform,_load "Extract, transform, load") (ETL) and [extract, load, transform](https://en.wikipedia.org/wiki/Extract,_load,_transform "Extract, load, transform") (ELT).


### Data Warehouse Architecture /Environment
> [!links]
> ↗ [Database Systems](../../../🔑%20CS%20Core/🤱🏻%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/Database%20Systems.md)

> 🔗 https://en.wikipedia.org/wiki/Data_warehouse

The environment for data warehouses and marts includes the following:
- Source systems of data (often, the company's operational databases, such as relational databases[3]);
- Data integration technology and processes to extract data from source systems, transform them, and load them into a data mart or warehouse;[3]
- Architectures to store data in the warehouse or marts;
- Tools and applications for varied users;
- Metadata, data quality, and governance processes. Metadata includes data sources (database, table, and column names), refresh schedules and data usage measures.

![](../../../../Assets/Pics/Pasted%20image%2020260408194837.png)
<small>Data warehouse and data mart overview, with data marts shown in the top right.</small>

![](../../../../Assets/Pics/Screenshot%202026-04-08%20at%2020.09.21.png)
<small>Figure from Vaisman and Zimányi - Data Warehouse Systems Design and Implementation</small>


### Characteristics
> 🔗 https://en.wikipedia.org/wiki/Data_warehouse#Characteristics

There are basic features that define the data in the data warehouse that include subject orientation, data integration, time-variant, nonvolatile data, and data granularity.
- Subject-oriented
	- Unlike the operational systems, the data in the data warehouse revolves around the subjects of the enterprise. Subject orientation is not database normalization. Subject orientation can be really useful for decision-making. Gathering the required objects is called subject-oriented.
- Integrated
	- The data found within the data warehouse is integrated. Since it comes from several operational systems, all inconsistencies must be removed. Consistencies include naming conventions, measurement of variables, encoding structures, physical attributes of data, and so forth.
- Time-variant
	- While operational systems reflect current values as they support day-to-day operations, data warehouse data represents a long time horizon (up to 10 years) which means it stores mostly historical data. It is mainly meant for data mining and forecasting. (E.g. if a user is searching for a buying pattern of a specific customer, the user needs to look at data on the current and past purchases.)[27]
- Nonvolatile
	- The data in the data warehouse is read-only, which means it cannot be updated, created, or deleted (unless there is a regulatory or statutory obligation to do so).[28]



## Data Organization
### Facts & Fact Schema
> 🔗 https://en.wikipedia.org/wiki/Data_warehouse#Facts

A fact is a value or measurement in the system being managed.

Raw facts are ones reported by the reporting entity. For example, in a mobile telephone system, if a [base transceiver station](https://en.wikipedia.org/wiki/Base_transceiver_station "Base transceiver station") (BTS) receives 1,000 requests for traffic channel allocation, allocates for 820, and rejects the rest, it could report three facts to a management system:
- `tch_req_total = 1000`
- `tch_req_success = 820`
- `tch_req_fail = 180`

Raw facts are aggregated to higher levels in various [dimensions](https://en.wikipedia.org/wiki/Dimension_\(data_warehouse\) "Dimension (data warehouse)") to extract information more relevant to the service or business. These are called aggregated facts or summaries.

For example, if there are three BTSs in a city, then the facts above can be aggregated to the city level in the network dimension. For example:
- `tch_req_success_city = tch_req_success_bts1 + tch_req_success_bts2 + tch_req_success_bts3`
- `avg_tch_req_success_city = (tch_req_success_bts1 + tch_req_success_bts2 + tch_req_success_bts3) / 3`


### Approaches for Storing Data
> 🔗 https://en.wikipedia.org/wiki/Data_warehouse#Dimensional_versus_normalized_approach_for_storage_of_data

The two most important approaches to store data in a warehouse are dimensional and normalized. The dimensional approach uses a [star schema](https://en.wikipedia.org/wiki/Star_schema "Star schema") as proposed by [Ralph Kimball](https://en.wikipedia.org/wiki/Ralph_Kimball "Ralph Kimball"). The normalized approach, also called the [third normal form](https://en.wikipedia.org/wiki/Third_normal_form "Third normal form") (3NF) is an entity-relational normalized model proposed by Bill Inmon.
#### Dimensional Approach (Data Cube)
> 🔗 https://en.wikipedia.org/wiki/Data_warehouse#Dimensional_approach

In a [dimensional approach](https://en.wikipedia.org/wiki/Star_schema "Star schema"), [transaction data](https://en.wikipedia.org/wiki/Transaction_data "Transaction data") is partitioned into "facts", which are usually numeric transaction data, and "[dimensions](https://en.wikipedia.org/wiki/Dimension_\(data_warehouse\) "Dimension (data warehouse)")", which are the reference information that gives context to the facts. For example, a sales transaction can be broken up into facts such as the number of products ordered and the total price paid for the products, and into dimensions such as order date, customer name, product number, order ship-to and bill-to locations, and salesperson responsible for receiving the order.

This dimensional approach makes data easier to understand and speeds up data retrieval. Dimensional structures are easy for business users to understand because the structure is divided into measurements/facts and context/dimensions. Facts are related to the organization's business processes and operational system, and dimensions are the context about them (Kimball, Ralph 2008). Another advantage is that the dimensional model does not involve a relational database every time. Thus, this type of modeling technique is very useful for end-user queries in data warehouse.

The model of facts and dimensions can also be understood as a [data cube](https://en.wikipedia.org/wiki/Data_cube "Data cube"), where dimensions are the categorical coordinates in a multi-dimensional cube, the fact is a value corresponding to the coordinates.

The main disadvantages of the dimensional approach are:
1. It is complicated to maintain the integrity of facts and dimensions, loading the data warehouse with data from different operational systems
2. It is difficult to modify the warehouse structure if the organization changes the way it does business.
##### Dimensional Model
Data represented in an **n-dimensional space**, named **data cube**
- The **dimensions** of the cube are the perspectives used to analyze the data
	- Each dimension has a **hierarchy**
- The cells in the cube, named **facts**, represent concepts relevant for the analysis
- Facts have one or more properties, named **measures**.
	- They are aggregated and filtered depending on the level in the dimension hierarchy being set

> [!Example]
> ![](../../../../Assets/Pics/Pasted%20image%2020260408200529.png)
> <small>Figure from Vaisman and Zimányi - Data Warehouse Systems Design and Implementation</small>

Dimension hierarchies
- Define maps between lower-level to upper-level concepts in a dimension
	- The level in the hierarchy determines the level of aggregation of a fact w.r.t. that dimension
- The highest-level concept is ALL
	- I.e., all facts will be grouped together
- The lowest-level concept determines the finest granularity of the fact

![](../../../../Assets/Pics/Screenshot%202026-04-08%20at%2020.06.28.png)
<small>Figure from Vaisman and Zimányi - Data Warehouse Systems Design and Implementation</small>

Measures
- For a measure to be valid, it must be possible to aggregate it along multiple dimension hierarchies and at different levels
- For each measure, an aggregation function must be defined
- The function must take into account the type of measure:
	- Additive: can be aggregated by summing on ALL dimensions
		- E.g., number of products being sold
	- Semi-additive: can be aggregated by summing on SOME dimensions
		- E.g., inventory quantities cannot be summed over time
	- Nonadditive: CANNOT be aggregated by summing
		- E.g., exchange rates, cost per uni
##### OLAP Operations
**Roll-up**: aggregates measures by moving up one or more levels in a dimension hierarchy
- E.g., aggregate sales by country, rather than by city
- ![|200](../../../../Assets/Pics/Screenshot%202026-04-19%20at%2019.44.05.png)


**Drill-down**: refines measures by moving down one or more levels in a dimension hierarchy
-  E.g., aggregate sales by month, rather than by quarter 
- It is the opposite of roll-up
- The level must exist in the dimension hierarchy
- ![|200](../../../../Assets/Pics/Screenshot%202026-04-19%20at%2019.44.51.png)

**Pivot**: rotates the axes of the cube to provide a different representation
- E.g., switch time with customer, customer with product
- ![|200](../../../../Assets/Pics/Screenshot%202026-04-19%20at%2020.46.12.png)

**Slice**: removes a dimension from the cube by selecting a specific value for that dimension
- E.g., show only sales in Paris
- ![|200](../../../../Assets/Pics/Screenshot%202026-04-19%20at%2020.47.02.png)

**Dice**: keeps only cells satisfying a Boolean expression
- E.g., show only sales greater than 1
- ![|200](../../../../Assets/Pics/Screenshot%202026-04-19%20at%2020.47.34.png)
#### Normalized Approach (3NF)
> [!Links]
> ↗ [Normalization](../../../🔑%20CS%20Core/🤱🏻%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/Database%20System%20Design/Database%20Design/Logical%20Database%20Design%20(Data%20Modeling)/Record-Based%20Data%20Models/Relational%20(Data)%20Models/Normalization/Normalization.md)

> 🔗 https://en.wikipedia.org/wiki/Data_warehouse#Normalized_approach

In the normalized approach, the data in the warehouse are stored following, to a degree, [database normalization](https://en.wikipedia.org/wiki/Database_normalization "Database normalization") rules. Normalized relational database tables are grouped into _subject areas_ (for example, customers, products and finance). When used in large enterprises, the result is dozens of tables linked by a web of joins.(Kimball, Ralph 2008).

The main advantage of this approach is that it is straightforward to add information into the database. Disadvantages include that, because of the large number of tables, it can be difficult for users to join data from different sources into meaningful information and access the information without a precise understanding of the date sources and the [data structure](https://en.wikipedia.org/wiki/Data_structure "Data structure") of the data warehouse.

Both normalized and dimensional models can be represented in entity–relationship diagrams because both contain joined relational tables. The difference between them is the degree of normalization. These approaches are not mutually exclusive, and there are other approaches. Dimensional approaches can involve normalizing data to a degree (Kimball, Ralph 2008).

In _Information-Driven Business_, [Robert Hillard](https://en.wikipedia.org/w/index.php?title=Robert_Hillard_\(writer\)&action=edit&redlink=1 "Robert Hillard (writer) (page does not exist)") compares the two approaches based on the information needs of the business problem. He concludes that normalized models hold far more information than their dimensional equivalents (even when the same fields are used in both models) but at the cost of usability. The technique measures information quantity in terms of [information entropy](https://en.wikipedia.org/wiki/Entropy_\(information_theory\) "Entropy (information theory)") and usability in terms of the Small Worlds data transformation measure.



## Data Warehouse Design
> [!links]
> ↗ [Database Design](../../../🔑%20CS%20Core/🤱🏻%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/Database%20System%20Design/Database%20Design/Database%20Design.md)
> ↗ [Data Integration](Data%20Integration.md) "three schema design"


### Conceptual Design
> [!links]
> ↗ [Conceptual Database Design (Conceptual Modeling)](../../../🔑%20CS%20Core/🤱🏻%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/Database%20System%20Design/Database%20Design/Conceptual%20Database%20Design%20(Conceptual%20Modeling)/Conceptual%20Database%20Design%20(Conceptual%20Modeling).md)

Conceptual modeling
- A data warehouse is obtained by integrating and materializing several data sources
- We know how to integrate data sources by building a GCS
- However, the data model for a data warehouse is different from the one used for normal databases
- How can we derive a fact schema from an entity-relationship diagram?
	- First, by creating an **attribute tree** from an **ER diagram**
	- Then, by converting the attribute tree into a **fact schema**

> [!Example]
> ![](../../../../Assets/Pics/Screenshot%202026-04-19%20at%2020.49.21.png)

> [!Example]
> ![](../../../../Assets/Pics/Screenshot%202026-04-19%20at%2021.05.25.png)
> ![](../../../../Assets/Pics/Screenshot%202026-04-19%20at%2021.05.38.png)
> ![](../../../../Assets/Pics/Screenshot%202026-04-19%20at%2021.05.56.png)
> ![](../../../../Assets/Pics/Screenshot%202026-04-19%20at%2021.06.17.png)
> ![](../../../../Assets/Pics/Screenshot%202026-04-19%20at%2021.06.32.png)
> ![](../../../../Assets/Pics/Screenshot%202026-04-19%20at%2021.06.43.png)
> ![](../../../../Assets/Pics/Screenshot%202026-04-19%20at%2021.07.35.png)


### Logical Design
> [!links]
> ↗ [Logical Database Design (Data Modeling)](../../../🔑%20CS%20Core/🤱🏻%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/Database%20System%20Design/Database%20Design/Logical%20Database%20Design%20(Data%20Modeling)/Logical%20Database%20Design%20(Data%20Modeling).md)

Logical models
- ROLAP: relies on a relational database
	- Easier interoperability
	- Require complex SQL queries to perform OLAP operations
- MOLAP: relies on an ad-hoc multidimensional data structure
	- Storage and querying are more optimized than ROLAP
	- OLAP operations can be natively performed with simple queries
	- Tied to a specific vendor implementation
- HOLAP: combines ROLAP features with MOLAP
	- E.g., uses ad-hoc data structure for pre-computing aggregations, while keeping non-aggregated data in a relational databas

Starting from the fact schema, we can derive a star or snowflake schema:
- In case of fully-shared hierarchies, dimension tables are not duplicated
- In case only part of the hierarchy is shared, the shared part can be either replicated or moved to a secondary dimension table
- In case of **multiple edges** (i.e., many-to-many relations), then a **bridge table** needs to be introduced in the dimension tables
	- Bridge table may need an attribute to specify the **weight** of each edge to the cumulative relationship

> [!Example]
> ![](../../../../Assets/Pics/Screenshot%202026-04-19%20at%2021.09.38.png)
> ![](../../../../Assets/Pics/Screenshot%202026-04-19%20at%2021.10.06.png)
> ![](../../../../Assets/Pics/Screenshot%202026-04-08%20at%2020.14.46.png)
> ![](../../../../Assets/Pics/Screenshot%202026-04-19%20at%2021.10.40.png)
> ![](../../../../Assets/Pics/Screenshot%202026-04-08%20at%2020.15.00.png)

#### Star Schema
Star schema
- A table DTi for each dimension i
	- The primary key of DTi is an artificial ID
	- DTi also has as many attributes as the concepts in the dimension hierarchy
	- DTi is de-normalized for query efficiency
- A table FT for the fact
	- The primary key of FT is the union of the primary keys of all dimension tables DTi
	- FT also has as many attributes as the measures for the fac
#### Snowflake Schema
Snowflake schema
- Less de-normalized than star schema
- One or more tables per dimension i:
	- Secondary dimension table SDTi: higher-level concepts in the dimension hierarchy
	- Primary dimension table PDTi: lower-level concepts in the dimension hierarchy
		- Also contains a reference to the primary key of SDTi
- A table FT for the fact
	- The primary key of FT is the union of the primary keys of all primary dimension tables PDTi
	- FT also has as many attributes as the measures for the fact


### Physical Design
> [!links]
> ↗ [Physical Database Design (Physical Modeling)](../../../🔑%20CS%20Core/🤱🏻%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/Database%20System%20Design/Database%20Design/Physical%20Database%20Design%20(Physical%20Modeling)/Physical%20Database%20Design%20(Physical%20Modeling).md)

Physical models
- Row-oriented: data are stored by row (tuple)
	- Typically used by relational databases
	- To perform aggregations, one has to fetch whole tuples including all their attributes
	- Limited horizontal scalability
- Column-oriented: data are stored by column
	- To perform aggregation, one has to fetch only the required columns
	- Allow to partition tables per column, thus fetching only the attributes that are needed
	- Fully vertical scalability
- ![|400](../../../../Assets/Pics/Screenshot%202026-04-19%20at%2021.17.16.png)

Pre-aggregation
- Aggregation is the main operation in data warehousing, but also one of the most expensive
- Idea: instead of computing aggregations on-the-fly, do the computation when data are loaded into the data warehouse
	- Analytical query processing is faster
	- Space requirements are higher
	- When new data are introduced, aggregations have to be re-computed
	- When a relational model is used, it makes dimension tables to become sparse (many NULL values)
- ![|400](../../../../Assets/Pics/Screenshot%202026-04-19%20at%2021.16.47.png)



## 🤔 Beyond Data Warehouse
### Data Lakes
Data Lakes
- Introduced to address limitations of traditional data warehouses:
	- Complex ETL procedures to generate data that may rarely or never be needed
	- Data infrequently updated
- Key idea: store data inside input data sources as-is, and then transform them on-demand by analytical queries
	- Simplified data ingestion, making it easier to more frequently update data
	- Very complex analytical queries
	- Risk of collecting unneeded information, or to lose track of how they are structured (data swamp)

> 🔗 https://en.wikipedia.org/wiki/Data_lake

A **data lake** is a system or [repository of data](https://en.wikipedia.org/wiki/Data_repository "Data repository") stored in its natural/raw format, usually object [blobs](https://en.wikipedia.org/wiki/Binary_large_object "Binary large object") or files. A data lake is usually a single store of data including raw copies of source system data, sensor data, social data etc., and transformed data used for tasks such as [reporting](https://en.wikipedia.org/wiki/Data_reporting "Data reporting"), [visualization](https://en.wikipedia.org/wiki/Data_visualization "Data visualization"), [advanced analytics](https://en.wikipedia.org/wiki/Data_analytics "Data analytics"), and [machine learning](https://en.wikipedia.org/wiki/Machine_learning "Machine learning"). A data lake can include [structured data](https://en.wikipedia.org/wiki/Structured_data "Structured data") from [relational databases](https://en.wikipedia.org/wiki/Relational_database "Relational database") (rows and columns), [semi-structured data](https://en.wikipedia.org/wiki/Semi-structured_data "Semi-structured data") ([CSV](https://en.wikipedia.org/wiki/Comma-separated_values "Comma-separated values"), logs, [XML](https://en.wikipedia.org/wiki/XML "XML"), [JSON](https://en.wikipedia.org/wiki/JSON "JSON")), [unstructured data](https://en.wikipedia.org/wiki/Unstructured_data "Unstructured data") ([emails](https://en.wikipedia.org/wiki/Emails "Emails"), documents, [PDFs](https://en.wikipedia.org/wiki/PDFs "PDFs")), and [binary data](https://en.wikipedia.org/wiki/Binary_data "Binary data") (images, [audio](https://en.wikipedia.org/wiki/Audio_data "Audio data"), video). A data lake can be established _on premises_ (within an organization's data centers) or _in the cloud_ (using [cloud services](https://en.wikipedia.org/wiki/Cloud_services "Cloud services")).

![](../../../../Assets/Pics/Screenshot%202026-04-08%20at%2020.20.25.png)


### Data Lakehouses
Data Lakehouses
- Take the best from data warehouses and data lakes:
	- Data are ingested as-is
	- Data are then periodically processed to make them conform to multidimensional model
	- Instead of ETL, ELT: Extract, Load, Transform
	- It is possible to run simple analytical queries, using OLAP operators
	- Space requirements higher than data warehouses and data lakes

![](../../../../Assets/Pics/Screenshot%202026-04-08%20at%2020.20.38.png)



## Ref
