# Troubleshooting



## 👉 Configure http access to Harbor
#harbor #docker #container 

IDK why this bug kep comming to me ! 😡 I've tried loads of solution online and none of them worked! 🤬


### Description
Harbor need a `daemon.json` file to config http access. However no matter how i tried to restart docker service after i edit the file the docker won't read the configuration.  I still have no idea where went wrong. 



### Attempt #1 ❌

Edit `/etc/docker/daemon.json`  (in case of `Ubuntu 22.04 LTS`)

```json
{
    "insecure-registries" : ["192.168.105.2:8082"]
}
```

Restart docker service & set up harbor:

```shell
sudo systemctl daemon-reload
sudo systemctl restart docker

# harbor installation directory
sudo docker-compose up -d
```

Check out docker info:

```shell
$ docker info 

...
Name: lima-docker
 ID: PSIV:X4B4:PYSS:4SPX:R6SM:E646:7VIS:RLVN:6NY4:M6LP:25IW:LNLC
 Docker Root Dir: /home/mir0.linux/.local/share/docker
 Debug Mode: false
 HTTP Proxy: http://192.168.5.2:7890
 HTTPS Proxy: http://192.168.5.2:7890
 Registry: https://index.docker.io/v1/
 Labels:
 Experimental: false
 Insecure Registries:
  127.0.0.0/8
 Live Restore Enabled: false
```

I also tried changing file privilege of `daemon.json`. 

```shell
mir0@lima-docker:/etc/docker$ ls
daemon.json  key.json
mir0@lima-docker:/etc/docker$ ls -la
total 16
drwxr-xr-x  2 root root 4096 Aug 29 12:06 .
drwxr-xr-x 99 root root 4096 Aug 29 10:02 ..
-rwxr-xr-x  1 root root    4 Aug 29 12:06 daemon.json
-rwx--x--x  1 root root  244 Aug 28 11:08 key.json
```



### Attempt #2 ❌

> https://stackoverflow.com/questions/42211380/add-insecure-registry-to-docker

Modify `/etc/default/docker`

```shell
# Use DOCKER_OPTS to modify the daemon startup options.
#DOCKER_OPTS="--dns 8.8.8.8 --dns 8.8.4.4"
DOCKER_OPTS="--insecure-registry=192.168.105.2:8082"
```

Might be useful: (but still didn't solve the problem)

> https://github.com/moby/moby/issues/22339#issuecomment-214840646
>
> This is expected; you cannot specify options both as a flag and in the configuration file (daemon.json). If you change your DOCKER_OPTS to `DOCKER_OPTS=""` and restart, then it should work. We explicitly don't "merge" these configurations.



### Attempt #3 ❌

> https://www.cnblogs.com/programmer-tlh/p/10996443.html

` vim /usr/lib/systemd/system/docker.service`

Edit `ExecStart`. This means when Harbor start running it use http as default network access. 

```shell
[Service]
Type=notify
# the default is not to use systemd for cgroups because the delegate issues still
# exists and systemd currently does not support the cgroup feature set required
# for containers run by docker
ExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock --insecure-registry 192.168.105.2:8082
ExecReload=/bin/kill -s HUP $MAINPID
TimeoutSec=0
RestartSec=2
Restart=always
```



### Attempt #4 ❌

Modify `/etc/default/docker`

```shell
# Use DOCKER_OPTS to modify the daemon startup options.
#DOCKER_OPTS="--dns 8.8.8.8 --dns 8.8.4.4"
DOCKER_OPTS="--config-file=/etc/docker/daemon.json"
```



### Finally ...

😡 For the time being the ONLY solusion is using https connection. 

See [Configure https access to Hartbor](https://goharbor.io/docs/1.10/install-config/configure-https/).


### Refs
[Add Insecure Registry to Docker]:https://stackoverflow.com/questions/42211380/add-insecure-registry-to-docker
[Docker repository server gave HTTP response to HTTPS client]:https://stackoverflow.com/questions/49674004/docker-repository-server-gave-http-response-to-https-client
[--insecure-registry should be on "docker pull" #8887]:https://github.com/moby/moby/issues/8887

