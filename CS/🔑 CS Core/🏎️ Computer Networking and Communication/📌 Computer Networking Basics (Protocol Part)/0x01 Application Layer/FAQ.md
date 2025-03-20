# FAQ

[TOC]



## 👉 MQTT for Video Streaming
#video_streaming #mqtt #CoAP

---
MQTT is specialized in low-bandwidth, high-latency environments, it is an ideal protocol for machine-to-machine (M2M) communication. [http://mqtt.org/](http://mqtt.org/) Streaming video requires a continuous data flow. You could implement video over MQTT as it supports binary payload [http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.html#_Toc398718026](http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.html#_Toc398718026) but it is not what it was designed for. Nothing prevent you to implement a multi-protocol device. MQTT for sensor streaming and TCP/UDP for streaming. 

For CoAP: it's not a good idea, CoAP was designed for low throughput and lossy networks it will be quite useless for video streaming; look at RTP or RSTP **(2015)**


[Is video streaming over IoT protocols feasible? | Stackoverflow]: https://stackoverflow.com/questions/34031030/is-video-streaming-over-iot-protocols-feasible

---



[👍  Stream live video from client to server using OpenCV and Paho-MQTT]: https://medium.com/@pritam.mondal.0711/stream-live-video-from-client-to-server-using-opencv-and-paho-mqtt-674d3327e8b3