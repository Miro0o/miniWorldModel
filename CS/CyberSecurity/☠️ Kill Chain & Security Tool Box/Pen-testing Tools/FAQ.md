# FAQ

[TOC]



## 👉 what does "TCP segment of a reassembled PDU" mean?
#wireshark #PDU #TCP

It means that Wireshark thinks the packet in question contains part of a packet (PDU - "Protocol Data Unit") for a protocol that runs on top of TCP.

If the reassembly is successful, the TCP segment containing the last part of the packet will show the packet.

The reassembly might fail if some TCP segments are missing.


[Wireshark-users: Re: 「Wireshark-users」 what does "TCP segment of a reassembled PDU" mean?]: https://www.wireshark.org/lists/wireshark-users/200805/msg00206.html



## 👉 reconstruct image/video/other files from network traffic stream
#traffic_analysis #wireshark #jpg #image 


利用不同类型文件的文件头，如jpeg格式文件头为ffd8ffe0或ffd8ffe1或ffd8ffe8。

[wireshark图片还原 | CSDN]: https://blog.csdn.net/qq_61237064/article/details/127218037
[利用WireShark将pcap数据流还原图片文件]: https://blog.csdn.net/weixin_45256499/article/details/111460717