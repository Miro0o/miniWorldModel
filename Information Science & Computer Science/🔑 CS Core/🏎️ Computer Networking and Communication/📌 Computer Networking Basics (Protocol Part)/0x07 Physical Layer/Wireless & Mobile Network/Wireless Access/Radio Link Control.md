# Radio Link Control

[TOC]



## Intro

> 🔗 https://en.wikipedia.org/wiki/Radio_Link_Control

**Radio link control (RLC)** is a layer 2 [Radio Link Protocol](https://en.wikipedia.org/wiki/Radio_Link_Protocol) used in [UMTS](https://en.wikipedia.org/wiki/UMTS), [LTE](https://en.wikipedia.org/wiki/LTE_(telecommunication)) and [5G](https://en.wikipedia.org/wiki/5G) on the [Air interface](https://en.wikipedia.org/wiki/Air_interface). This protocol is specified by [3GPP](https://en.wikipedia.org/wiki/3GPP) in TS 25.322[[1\]](https://en.wikipedia.org/wiki/Radio_Link_Control#cite_note-1) for UMTS, TS 36.322[[2\]](https://en.wikipedia.org/wiki/Radio_Link_Control#cite_note-2) for LTE and TS 38.322[[3\]](https://en.wikipedia.org/wiki/Radio_Link_Control#cite_note-3) for 5G New Radio (NR). RLC is located on top of the 3GPP [MAC](https://en.wikipedia.org/wiki/Media_access_control)-layer and below the [PDCP](https://en.wikipedia.org/wiki/PDCP)-layer. The main tasks of the RLC protocol are:

- Transfer of upper layer Protocol Data Units (PDUs) in one of three modes: Acknowledged Mode (AM), Unacknowledged Mode (UM) and Transparent Mode (TM)
- Error correction through [ARQ](https://en.wikipedia.org/wiki/Automatic_repeat_request) (only for AM data transfer)
- Concatenation, segmentation and reassembly of RLC SDUs (UM and AM)
- Re-segmentation of RLC data PDUs (AM)
- Reordering of RLC data PDUs (UM and AM);
- Duplicate detection (UM and AM);
- RLC SDU discard (UM and AM)
- RLC re-establishment
- Protocol error detection and recovery

RLC features specific to LTE only - 1) Re-segmentation. 2) RLC SDU discard is notified by upper layer.



## Ref

