# Troubleshooting

[TOC]



## 👉 `mosquitto` cannot connect to remote server: connection refused
**#1 Configuration isn't loading**
`Mosquitto` will not pick up a default configuration file, you must always pass the configuration file with the `-c` command line argument or it will fall back to the baked in config (that will only listen on localhost)

The service includes `-c /etc/mosquitto/mosquitto.conf` to force it to use the config file.

---
**#2 Networking request refused by firewall**


---
**#3 Connection request refused by mosquitto**



[Mosquitto MQTT broker not acknowledging external connections (even locally)]: https://stackoverflow.com/questions/68816997/mosquitto-mqtt-broker-not-acknowledging-external-connections-even-locally

[MQTT connection refused when trying to connect from remote machine]: https://stackoverflow.com/questions/74577958/mqtt-connection-refused-when-trying-to-connect-from-remote-machine



## 👉 `Mosquitto` isn't loading configuration files from conf.d

Mosquitto does not automatically load a configuration file, you **must** pass it one on the command line with the `-c` flag if you want to use anything other than the default values. When run as a service the service definition include the `-c` pointing to the default configuration file.

The default configuration file is normally stored in `/etc/mosquitto/mosquitto.conf`. This file includes the following line:
```
include_dir /etc/mosquitto/conf.d
```

Which tells mosquitto to include all the files that end in `.conf` from the `/etc/mosquitto/conf.d` directory

When you tried to run mosquitto without passing it a configuration file it failed because the service was already running. If you stop it (`sudo service mosquitto stop`) and then run `mosquitto -c /etc/mosquitto/mosquitto.conf` it will get a little further but also fail because your user will not have access to either the default persistence file or the log file.
```shell
sudo service mosquitto restart
```

and it will pick up the changes you made in `/etc/mosquitto/conf.d/custom.conf`

You should then check the log file (`/var/log/mosquitto/mosquitto.log`) for indications as to why your anonymous clients are still failing to connect.




[Mosquitto isn't loading configuration files from conf.d]: https://stackoverflow.com/questions/69963029/mosquitto-isnt-loading-configuration-files-from-conf-d


## Ref

