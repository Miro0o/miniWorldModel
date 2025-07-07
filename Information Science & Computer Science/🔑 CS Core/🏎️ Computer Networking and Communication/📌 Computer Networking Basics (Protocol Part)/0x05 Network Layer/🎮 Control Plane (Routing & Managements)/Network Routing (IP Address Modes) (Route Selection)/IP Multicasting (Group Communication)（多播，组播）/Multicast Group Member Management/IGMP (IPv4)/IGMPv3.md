# IGMPv3

[TOC]



## Res


## Intro
![img](../../../../../../../../../../Assets/Pics/IGMPv3-gfg.png)

<small>IGMPv3 Packet Format</small>


- **Max Response Time –** This field is ignored for message types other than membership query. For membership query type, it is the maximum time allowed before sending a response report. The value is in units of 0.1 seconds.
- **Checksum –** It is the one’s complement of the one’s complement of the sum of IGMP message.
- **Group Address –** It is set as 0 when sending a general query. Otherwise, multicast address for group-specific or source-specific queries.
- **Resv –** It is set zero of sent and ignored when received.
- **S flag –** It represents Suppress Router-side Processing flag. When the flag is set, it indicates to suppress the timer updates that multicast routers perform upon receiving any query.
- **QRV –** It represents Querier’s Robustness Variable. Routers keeps on retrieving the QRV value from the most recently received query as their own value until the most recently received QRV is zero.
- **QQIC –** It represents Querier’s Query Interval Code.
- **Number of sources –** It represents the number of source addresses present in the query. For general query or group-specific query, this field is zero and for group-and-source-specific query, this field is non-zero.
- **Source Address[i] –** It represents the IP unicast address for N fields.



## Ref

