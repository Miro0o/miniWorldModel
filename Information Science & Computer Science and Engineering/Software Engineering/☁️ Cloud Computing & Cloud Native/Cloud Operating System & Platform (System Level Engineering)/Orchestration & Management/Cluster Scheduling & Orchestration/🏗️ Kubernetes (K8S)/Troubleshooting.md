# Troublrshooting

[TOC]



## 👉 [kubeadm init 报错 ”unknown service runtime.v1alpha2.RuntimeService”](https://www.elastic.co/beats/filebeat)
Error:

```shell
error execution phase preflight: [preflight] Some fatal errors occurred:
	[ERROR CRI]: container runtime is not running: output: E0903 11:57:40.116148    2843 remote_runtime.go:925] "Status from runtime service failed" err="rpc error: code = Unimplemented desc = unknown service runtime.v1alpha2.RuntimeService"
time="2022-09-03T11:57:40+08:00" level=fatal msg="getting status of runtime: rpc error: code = Unimplemented desc = unknown service runtime.v1alpha2.RuntimeService"
, error: exit status 1
[preflight] If you know what you are doing, you can make a check non-fatal with `--ignore-preflight-errors=...`
To see the stack trace of this error execute with --v=5 or higher
```

Solution:

```shell
rm /etc/containerd/config.toml
systemctl restart containerd
```



## 👉 [The connection to the server x.x.x.:6443 was refused - did you specify the right host or port? Kubernetes](https://stackoverflow.com/questions/56737867/the-connection-to-the-server-x-x-x-6443-was-refused-did-you-specify-the-right)

```shell
sudo -i
swapoff -a
exit
strace -eopenat kubectl version
```



## 👉 [How to fix timeout at Waiting for the kubelet to boot up the control plane as static Pods from directory "/etc/kubernetes/manifests"](https://stackoverflow.com/questions/57648829/how-to-fix-timeout-at-waiting-for-the-kubelet-to-boot-up-the-control-plane-as-st) 

```shell
Unfortunately, an error has occurred:
    timed out waiting for the condition

This error is likely caused by:
    - The kubelet is not running
    - The kubelet is unhealthy due to a misconfiguration of the node in some way (required cgroups disabled)

If you are on a systemd-powered system, you can try to troubleshoot the error with the following commands:
    - 'systemctl status kubelet'
    - 'journalctl -xeu kubelet'

Additionally, a control plane component may have crashed or exited when started by the container runtime.
To troubleshoot, list all containers using your preferred container runtimes CLI.
Here is one example how you may list all running Kubernetes containers by using crictl:
    - 'crictl --runtime-endpoint unix:///var/run/containerd/containerd.sock ps -a | grep kube | grep -v pause'
    Once you have found the failing container, you can inspect its logs with:
    - 'crictl --runtime-endpoint unix:///var/run/containerd/containerd.sock logs CONTAINERID'
error execution phase wait-control-plane: couldn't initialize a Kubernetes cluster
To see the stack trace of this error execute with --v=5 or higher
```

It turns out i misused the public IP for the private network. After i changed 

```shell
--apiserver-advertise-address=139.198.114.88 # Public IP
```

to 

```shell
--apiserver-advertise-address=10.190.43.25 # Private IP
```

It worked. 

Despite that this post [How to fix timeout at Waiting for the kubelet to boot up the control plane as static Pods from directory "/etc/kubernetes/manifests"](https://stackoverflow.com/questions/57648829/how-to-fix-timeout-at-waiting-for-the-kubelet-to-boot-up-the-control-plane-as-st)  is still usefulf for furture debug. 

To Reset cluster:

```shell
sudo kubeadm reset
rm -rf ~/.kube/
sudo rm -rf /etc/kubernetes/
sudo rm -rf /var/lib/kubelet/
sudo rm -rf /var/lib/etcd
```


### Other links:
👍 [Kubeadm创建Kubernetes集群](https://www.ityoudao.cn/posts/kubernetes-cluster-kubeadm/) 

[kubelet can't get node #70334](https://github.com/kubernetes/kubernetes/issues/70334)



## 👉 kubeadm init failed: version imcompatable /registry.k8s.io access issues

#TODO 


[containerd: Unable to overwrite sandbox image]: https://devops.stackexchange.com/questions/17080/containerd-unable-to-overwrite-sandbox-image
[Not compatible with kubeadm configuration]: https://github.com/cri-o/cri-o/issues/5931

[「Kubernetes」- 在集群初始化时，如果无法拉取官方镜像怎么办]: https://blog.k4nz.com/4908e96d3a0804a6af040d65fe476322/
1. 通用场景：crane, gcrane, krane
2. 针对 Kubernetes 集群：新版集群（推荐）`kubeadm init --image-repository registry.aliyuncs.com/google_containers`
3. 针对 Kubernetes 集群：手动拉取镜像 (skip)
4. 针对 Kubernetes 集群：旧版方法（使用旧版集群）(skip)

[ETCD cluster unhealthy during kubeadm upgrade to v1.22.5 #2682]: https://github.com/kubernetes/kubeadm/issues/2682
