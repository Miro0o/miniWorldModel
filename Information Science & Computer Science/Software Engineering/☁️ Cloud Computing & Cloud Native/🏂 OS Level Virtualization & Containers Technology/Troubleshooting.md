# Troubleshooting

[TOC]



## 👉 Error saving credentials: error storing credentials - err: exec: "docker-credential-desktop": executable file not found in $PATH
#docker #credentials #PATH 

### Problem

After a DockerForMac update i've realised, that that the `~/.docker/config.json` file is not refering to osxkeychain anymore. Its uses `docker-credential-desktop`.


### Solusion
Edit the file "**~/.docker/config.json**" and delete the following JSON key/value:
`"credsStore" : "desktop",`


[Error saving credentials: error storing credentials - err: exec: "docker-credential-desktop": executable file not found in $PATH]: https://github.com/docker/docker-credential-helpers/issues/149#issuecomment-566832756



## 👉 Docker pull "unexpected EOF"
#docker #docker_pull

This was mainly because of weak network ( as I was using mobile hotspot )
configured the **docker daemon** to reduce the **tcp packets**
```shell
$ dockerd --max-concurrent-downloads <int>  
```
here **\<int\>** suggests the number of docker pull layers you want to download concurrently.  

**default is 3**

in mycase i had set to 2
```shell
dockerd --max-concurrent-downloads 2 &>/dev/null  
```

downside of doing this is sacrificing your precious time :)  
takes time like hell.


[Docker pull "unexpected EOF"]: https://stackoverflow.com/questions/53677592/docker-pull-unexpected-eof



## 👉 ERROR: permission denied while trying to connect to the Docker daemon socket
#docker #permission #docker_daemon

To create the docker group and add your user:

- Create the docker group.
```shell
sudo groupadd docker
```

- Add your user to the docker group.
```shell
sudo usermod -aG docker ${USER}
```

- You would need to loog out and log back in so that your group membership is re-evaluated or type the following command:
```shell
su -s ${USER}
```

- Verify that you can run docker commands without sudo.
```shell
docker run hello-world
```

- This command downloads a test image and runs it in a container. When the container runs, it prints an informational message and exits.
- If you initially ran Docker CLI commands using sudo before adding your user to the docker group, you may see the following error, which indicates that your `~/.docker/` directory was created with incorrect permissions due to the sudo commands.
```shell
WARNING: Error loading config file: /home/user/.docker/config.json -
stat /home/user/.docker/config.json: permission denied
```

- To fix this problem, either remove the `~/.docker/` directory (it is recreated automatically, but any custom settings are lost), or change its ownership and permissions using the following commands:

```shell
sudo chown "$USER":"$USER" /home/"$USER"/.docker -R
sudo chmod g+rwx "$HOME/.docker" -R
```


---
```shell
ubuntu@ip-172-31-21-106:/var/run$ ls -lrth docker.sock
srw-rw---- 1 root root 0 Oct 17 11:08 docker.sock
ubuntu@ip-172-31-21-106:/var/run$ sudo chmod 666 /var/run/docker.sock
ubuntu@ip-172-31-21-106:/var/run$ ls -lrth docker.sock
srw-rw-rw- 1 root root 0 Oct 17 11:08 docker.sock
```


[manage docker as a non root user | docker official docs]: https://docs.docker.com/install/linux/linux-postinstall/#manage-docker-as-a-non-root-user

[How to fix docker: Got permission denied while trying to connect to the Docker daemon socket]: https://www.digitalocean.com/community/questions/how-to-fix-docker-got-permission-denied-while-trying-to-connect-to-the-docker-daemon-socket

🎬 https://youtu.be/XfZvKLNXC9M



## 👉 Docker pull timeout as using proxy
#docker #docker_pull #proxy 



[ Docker镜像拉取失败解决方案| CSDN]: https://blog.csdn.net/qq_46302361/article/details/140813753?fromshare=blogdetail&sharetype=blogdetail&sharerId=140813753&sharerefer=PC&sharesource=weixin_43336330&sharefrom=from_link
- [问题及分析](https://blog.csdn.net/qq_46302361/article/details/140813753#_6)
- [解决方案](https://blog.csdn.net/qq_46302361/article/details/140813753#_36)
	- [1.先排查DNS](https://blog.csdn.net/qq_46302361/article/details/140813753#1DNS_38)
		- `sudo vim /etc/resolv.conf`
    - [2.修改源](https://blog.csdn.net/qq_46302361/article/details/140813753#2_52)
	    - `sudo vim /etc/docker/daemon.json`
```
{
    "registry-mirrors": [
        "https://docker.m.daocloud.io",
        "https://dockerproxy.com",
        "https://docker.mirrors.ustc.edu.cn",
        "https://docker.nju.edu.cn",
        "https://iju9kaj2.mirror.aliyuncs.com",
        "http://hub-mirror.c.163.com",
        "https://cr.console.aliyun.com",
        "https://hub.docker.com",
        "http://mirrors.ustc.edu.cn"
    ]
}
```
- 
	- [3.代理配置](https://blog.csdn.net/qq_46302361/article/details/140813753#3_76)
		- `sudo vim /etc/systemd/system/docker.service.d/proxy.conf`
```
[Service]
Environment="HTTP_PROXY=http://xxx.xxx.xxx.xxx:xxxx/"
Environment="HTTPS_PROXY=http://xxx.xxx.xxx.xxx:xxxx/"
Environment="NO_PROXY=localhost,127.0.0.1,xxx.xxx.xxx.xxx"
```
- 
	- [4.重启docker服务](https://blog.csdn.net/qq_46302361/article/details/140813753#4docker_100)
		- `sudo systemctl restart docker`
- [问题解决](https://blog.csdn.net/qq_46302361/article/details/140813753#_119)

[Docker拉取镜像失败？报connect: connection refused | CSDN]: https://blog.csdn.net/crazywkl/article/details/141531393?fromshare=blogdetail&sharetype=blogdetail&sharerId=141531393&sharerefer=PC&sharesource=weixin_43336330&sharefrom=from_link
`vim /etc/docker/daemon.json 或者 nano /etc/docker/daemon.json`



## 👉 vde-2 & vde_vmnet set up netwokd for Lima
#lima #docker #vde-2 #vde_vmnet
#### Overview
VDE enable Lima instance being accessed from outside the vhost (like the original host).  

The default guest IP 192.168.5.15 is not accessible from the host and other guests.

To add another IP address that is accessible from the host and other virtual machines, enable [`vde_vmnet`](https://github.com/lima-vm/vde_vmnet).

> See [`./docs/network.md`](https://github.com/lima-vm/lima/blob/master/docs/network.md).

Activate `vde_vmnet` after installing  `vde` and `vde_vmnet` & modifying the instance's yml file. 

The network daemons are started automatically when the first instance referencing them is started, and will stop automatically once the last instance has stopped. Daemon logs will be stored in the `$LIMA_HOME/_networks` directory.


#### Steps

>  [Set up a Mac for Qemu with Bridged Network](https://upstreamwithoutapaddle.com/home-lab/bare-metal-bootstrap/)

1. isntall tools needed (might require `command-line-tools` installed)
```shell
brew install qemu autoconf automake wolfssl
```

2. install `vde-2`
```shell
mkdir -p ${OKD_LAB_PATH}/work-dir
cd ${OKD_LAB_PATH}/work-dir
git clone https://github.com/virtualsquare/vde-2
cd vde-2
autoreconf -fis
./configure --prefix=/opt/vde
make
sudo make install
```

3. install `vde_vmnet`
```shell
cd ${OKD_LAB_PATH}/work-dir
git clone https://github.com/lima-vm/vde_vmnet
cd vde_vmnet
make PREFIX=/opt/vde
sudo make PREFIX=/opt/vde install
```

4. Config lima instance's `.yml` file.
```yaml
networks:
  # Lima can manage daemons for networks defined in $LIMA_HOME/_config/networks.yaml
  # automatically. Both vde_switch and vde_vmnet binaries must be installed into
  # secure locations only alterable by the "root" user.
  # - lima: shared
  #   # MAC address of the instance; lima will pick one based on the instance name,
  #   # so DHCP assigned ip addresses should remain constant over instance restarts.
  #   macAddress: ""
  #   # Interface name, defaults to "lima0", "lima1", etc.
  #   interface: ""
  
  
  # vnl (virtual network locator) points to the vde_switch socket directory,
  # optionally with vde:// prefix
- vnl: "vde:///var/run/vde.ctl"
  #   # VDE Switch port number (not TCP/UDP port number). Set to 65535 for PTP mode.
  #   # Default: 0
  switchPort: 0
  #   # MAC address of the instance; lima will pick one based on the instance name,
  #   # so DHCP assigned ip addresses should remain constant over instance restarts.
  macAddress: ""
  #   # Interface name, defaults to "lima0", "lima1", etc.
  interface: ""
```

5. Lift privileges for `vde_vmnet` (optional, depending on cases)

   Since the commands to start and stop the `vde_vmnet` daemon requires root, the user either must have password-less `sudo` enabled, or add the required commands to a `sudoers` file. This can be done via:

   ```shell
   limactl sudoers | sudo tee /etc/sudoers.d/lima
   ```

6. See whether instance now is accessable from a guest IP by `httpd` services.
```shell
sudo apt update && sudo apt install appache2
```

#### 🖇 Links
[VMware的三种网络模式]: https://zhuanlan.zhihu.com/p/24758022
[WolfSSL]: https://www.wolfssl.com
[Autoconf]: https://www.gnu.org/software/autoconf/
[👍 automake, autoconf 使用详解]: https://www.laruence.com/2009/11/18/1154.html



## 👉 [Attempting to mount a writable directory under a read-only directory doesn't work#873](https://github.com/lima-vm/lima/issues/873#issue-1256707387)
#lima #mount
#### Related issues:
🖕[chown/chmod on mounted directory: Permission denied #231]( https://github.com/lima-vm/lima/issues/231#issue-992099259)

🖕 [PermissionError:\[Errno 13\] Permission denied:]](https://forum.snapcraft.io/t/permissionerror-errno-13-permission-denied-etc-glances-glances-conf/13824)

🖕 [How to fix the read only error on lima vm](https://stackoverflow.com/questions/71581201/how-to-fix-the-read-only-error-on-lima-vm) 

🖕 [Permission denied when running Docker after installing it as a Snap](https://askubuntu.com/questions/941816/permission-denied-when-running-docker-after-installing-it-as-a-snap) 


```yaml
mounts:
- location: "~"					# mount path overlapping not allowed
- location: "/tmp/lima"
  writable: true
- location: "~/dev"
  writable: true
```
#### Description
🐞 Under `sshfs` (see [#302](https://github.com/lima-vm/lima/issues/302)) mount type overlapping mounts do not work properly. Even worse, it has numerous other critical priviledge issues like `chmod` which may be the cause of dockers required persistence storage booting failure. 

🔎 Solusion is changing to `9p` mount type. Though some argure that this causes effiency problem. 🤷🏽‍♂️ Plus i changed mounts config to this:

```yaml
mounts:
# - location: "~"
- location: "/tmp/lima"
#  mountPoint: ""
  writable: true
- location: "~/Desktop/Coding/CloudNative/harbor"
#  mountPoint: ""
  writable: true
```

As a result, i demolished previous instance and reinstalled a new one using `9p` mount type. 😭

Done! 😭😭😭



## 👉 Lima Proxy Issues
#lima #proxy 

> 🔗 [Lima should get proxy and dns settings from SystemConfiguration instead of from System_Profiler #741](https://github.com/lima-vm/lima/issues/741)

#TODO 


