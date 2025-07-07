# kamene (formerly "scapy for python3" or scapy3k)

[TOC]



## Res
🚧 https://github.com/phaethon/kamene
📂 https://phaethon.github.io/kamene/api/introduction.html



## Intro
> This is a fork of scapy ([http://www.secdev.org](http://www.secdev.org/)) originally developed to implement python3 compatibility. It has been used in production on python3 since 2015 (while secdev/scapy implemented python3 compatibility in 2018). The fork was renamed to kamene in 2018 to reduce any confusion.

kamene (formally known as 'scapy for python3' or 'scapy3k') is a Python program that enables the user to send, sniff and dissect and forge network packets. This capability allows construction of tools that can probe, scan or attack networks.

In other words, kamene is a powerful interactive packet manipulation program. It is able to forge or decode packets of a wide number of protocols, send them on the wire, capture them, match requests and replies, and much more. Scapy can easily handle most classical tasks like scanning, tracerouting, probing, unit tests, attacks or network discovery. It can replace hping, arpspoof, arp-sk, arping, p0f and even some parts of Nmap, tcpdump, and tshark).

kamene also performs very well on a lot of other specific tasks that most other tools can’t handle, like sending invalid frames, injecting your own 802.11 frames, combining techniques (VLAN hopping+ARP cache poisoning, VOIP decoding on WEP encrypted channel, ...), etc.

The idea is simple. kamene mainly does two things: sending packets and receiving answers. You define a set of packets, it sends them, receives answers, matches requests with answers and returns a list of packet couples (request, answer) and a list of unmatched packets. This has the big advantage over tools like Nmap or hping that an answer is not reduced to (open/closed/filtered), but is the whole packet.

On top of this can be build more high level functions, for example one that does traceroutes and give as a result only the start TTL of the request and the source IP of the answer. One that pings a whole network and gives the list of machines answering. One that does a portscan and returns a LaTeX report.



## Ref

