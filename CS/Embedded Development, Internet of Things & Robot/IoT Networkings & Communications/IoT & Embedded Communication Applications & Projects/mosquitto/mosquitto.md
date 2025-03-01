# mosquitto

[TOC]



## Res
🏠 https://mosquitto.org
🏠 https://eclipse.dev/paho/


### Related Topics
↗ [MQTT (Message Queuing Telemetry Transport)](../../IoT%20&%20Embedded%20Communication%20Protocols/MQTT%20(Message%20Queuing%20Telemetry%20Transport)/MQTT%20(Message%20Queuing%20Telemetry%20Transport).md)



## Intro
Eclipse Mosquitto is an open source (EPL/EDL licensed) message broker that implements the MQTT protocol versions 5.0, 3.1.1 and 3.1. Mosquitto is lightweight and is suitable for use on all devices from low power single board computers to full servers.

The MQTT protocol provides a lightweight method of carrying out messaging using a publish/subscribe model. This makes it suitable for Internet of Things messaging such as with low power sensors or mobile devices such as phones, embedded computers or microcontrollers.

The Mosquitto project also provides a C library for implementing MQTT clients, and the very popular mosquitto_pub and mosquitto_sub command line MQTT clients.



## Configuration
### 👉 `mosquitto` authentication (set username & passwords )
#### Method \#1 
```shell
mosquitto_passwd -U passwordfile
```


#### Method \#2
```shell
mosquitto_passwd -c passwordfile user
```




## Ref
[👍 Install Mosquitto MQTT Broker On Ubuntu 20.04 Server]: https://www.vultr.com/docs/install-mosquitto-mqtt-broker-on-ubuntu-20-04-server/

[Mosquitto Username and Password Authentication -Configuration and Testing]: http://www.steves-internet-guide.com/mqtt-username-password-example/

[Adding Users in MQTT Broker]: https://stackoverflow.com/questions/41396710/adding-users-in-mqtt-broker

[Setting up Authentication in Mosquitto MQTT Broker | Medium]: https://medium.com/@eranda/setting-up-authentication-on-mosquitto-mqtt-broker-de5df2e29afc
