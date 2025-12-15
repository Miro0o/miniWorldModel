# UDP

[TOC]



## Res
### Related Topics


### Learning Resources



## UDP Overview
![](https://blog.kakaocdn.net/dn/bqIuUk/btqEh6ilDR0/NmyqCVkABw3gKsI68iYFB1/img.png)

UDP, defined in [RFC 768], does just about as little as a transport protocol can do. ==Aside from the multiplexing/demultiplexing function and some light error checking, it adds nothing to IP. In fact, if the application developer chooses UDP instead of TCP, then the application is almost directly talking with IP.==

![Screenshot 2022-11-20 at 10.21.02 AM](../../../../../../Assets/Pics/Screenshot%202022-11-20%20at%2010.21.02%20AM.png)


### UDP Pros
- Finer application-level control over what data is sent, and when.
- No connection establishment.
- No connection state.
- Small packet header overhead


### UDP Cons
- No congestion control
	- high loss rates;
	- slow TCP senders rates (since the network is congested by overwhelming UDP packages)
- Many researchers have proposed new mechanisms to force all sources, including UDP sources, to perform adaptive congestion control [Mahdavi 1997; Floyd 2000; Kohler 2006: RFC 4340].



## UDP Segment Structure
![Screenshot 2022-11-20 at 10.19.36 AM](../../../../../../Assets/Pics/Screenshot%202022-11-20%20at%2010.19.36%20AM.png)

![](../../../../../../Assets/Pics/Screenshot%202023-04-19%20at%2012.45.29%20PM.png)


### UDP Segment Size 🆚 TCP Segment Size (MSS)

#TODO 


[Why UDP maximum segment size is far greater than TCP maximum segment size in this output? | Stackoverflow]: https://stackoverflow.com/questions/7059795/why-udp-maximum-segment-size-is-far-greater-than-tcp-maximum-segment-size-in-thi



## 🧾 UDP Checksum
The UDP checksum only provides for **error detection**; UDP cannot do any error correction.

Although UDP provides error checking, it does not do anything to recover from an error. **Some implementations of UDP simply discard the damaged segment; others pass the damaged segment to the application with a warning.**


### UDP Checksum Mechanism
> You can find details about efficient implementation of the calculation in RFC 1071 and performance over real data in [Stone 1998; Stone 2000].

UDP at the sender side performs the **1s complement** of the sum of all the 16-bit words in the segment, with any overflow encountered during the sum being wrapped around. This result is put in the checksum field of the UDP segment.

At the receiver, all four 16-bit words are added, including the checksum. If no errors are introduced into the packet, then clearly the sum at the receiver will be 1111111111111111. If one of the bits is a 0, then we know that errors have been introduced into the packet.

![](../../../../../../Assets/Pics/Screenshot%202023-04-14%20at%2010.54.33%20AM.png)
![](../../../../../../Assets/Pics/Screenshot%202023-04-14%20at%2010.52.00%20AM.png)


### Why UDP Checksum
You may wonder why UDP provides a checksum in the first place, as many link-layer protocols (including the popular Ethernet protocol) also provide error checking. There are two major concerns:
- **link-by-link reliability**: One primary reason is that there is no guarantee that all the links between source and destination provide error checking; that is, one of the links may use a link-layer protocol that does not provide error checking. 
- **in-memory error detection:** Furthermore, even if segments are correctly transferred across a link, it’s possible that bit errors could be introduced when a segment is stored in a router’s memory.

Given that neither link-by-link reliability nor in-memory error detection is guaranteed, UDP must provide error detection at the transport layer, **on an end-end basis**, if the end-end data transfer service is to provide error detection. 

> 💡 This is an example of the celebrated **end-end principle in system design** [Saltzer 1984], which states that since certain functionality (error detection, in this case) must be implemented on an end-end basis: “functions placed at the lower levels may be redundant or of little value when compared to the cost of providing them at the higher level.”

Because IP is supposed to run over just about any layer-2 protocol, it is useful for the transport layer to provide error checking as a safety measure. 


### UDP Checksum -- Weak Protection!
![](../../../../../../Assets/Pics/Screenshot%202023-04-14%20at%2011.47.37%20AM.png)



## Ref
[「Computer Network」 User Datagram Protocol | UDP 프로토콜]: https://dad-rock.tistory.com/268

