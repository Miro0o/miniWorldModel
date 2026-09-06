# Scapy

[TOC]



## Res
🚧 https://github.com/secdev/scapy

📂 https://phaethon.github.io/kamene/api/introduction.html 

📂 https://scapy.readthedocs.io/en/latest/ (contains more advanced use cases, and examples) 🇺🇸
📂 https://wizardforcel.gitbooks.io/scapy-docs/content/ 🇨🇳

Other useful resources:
- [Scapy in 20 minutes](https://github.com/secdev/scapy/blob/master/doc/notebooks/Scapy in 15 minutes.ipynb)
- [Interactive tutorial](https://scapy.readthedocs.io/en/latest/usage.html#interactive-tutorial) (part of the documentation)
- [The quick demo: an interactive session](https://scapy.readthedocs.io/en/latest/introduction.html#quick-demo) (some examples may be outdated)
- [HTTP/2 notebook](https://github.com/secdev/scapy/blob/master/doc/notebooks/HTTP_2_Tuto.ipynb)
- [TLS notebooks](https://github.com/secdev/scapy/blob/master/doc/notebooks/tls)



## Intro
![|150](../../../../../../../../Assets/Pics/scapy_logo.png)


Scapy is a powerful Python-based interactive packet manipulation program and library.

It is **able to forge or decode packets of a wide number of protocols**, send them on the wire, capture them, store or read them using pcap files, match requests and replies, and much more. It is designed to allow fast packet prototyping by using default values that work.

It can easily handle most classical tasks like scanning, tracerouting, probing, unit tests, attacks or network discovery **(it can replace `hping`, 85% of `nmap`, `arpspoof`, `arp-sk`, `arping`, `tcpdump`, `wireshark`, `p0f`, etc.**). It also performs very well at a lot of other specific tasks that most other tools can't handle, like sending invalid frames, injecting your own 802.11 frames, combining techniques (VLAN hopping+ARP cache poisoning, VoIP decoding on WEP protected channel, ...), etc.



## Ref
[Ping an IP range with scapy | stackoverflow]: https://stackoverflow.com/questions/7541056/pinging-an-ip-range-with-scapy

You just need to ensure that `reply` is not `NoneType` as illustrated below... `sr1()` returns `None` if you get a timeout waiting for the response. You should also add a `timeout` to `sr1()`, the default timeout is quite absurd for your purposes.

```python
#!/usr/bin/python
from scapy.all import *

TIMEOUT = 2
conf.verb = 0
for ip in range(0, 256):
    packet = IP(dst="192.168.0." + str(ip), ttl=20)/ICMP()
    reply = sr1(packet, timeout=TIMEOUT)
    if not (reply is None):
         print reply.dst, "is online"
    else:
         print "Timeout waiting for %s" % packet[IP].dst
```


[👍 👍 运用Scapy编写类似于Nmap的端口扫描脚本]: https://xz.aliyun.com/t/4704

[python+scapy实现扫描工具（扫描主机、端口）]: https://blog.csdn.net/hell_orld/article/details/109231819

[python3-端口扫描(TCP_ACK扫描，NULL扫描，windows扫描，xmas扫描)]: https://www.cnblogs.com/Tempt/p/14275957.html