# Vagrant

[TOC]



## Res
🏠 https://www.vagrantup.com
🚧 https://github.com/hashicorp/vagrant
🚧 https://github.com/vagrant-libvirt/vagrant-libvirt



## Intro
[![Vagrant.png](https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Vagrant.png/150px-Vagrant.png)](https://en.wikipedia.org/wiki/File:Vagrant.png)


Vagrant is an open-source software product for building and maintaining portable virtual software development environments; e.g., for VirtualBox, KVM, Hyper-V, Docker containers, VMware, Parallels, and AWS. 

Vagrant tries to simplify the software configuration management of virtualization in order to increase development productivity. 

Vagrant is written in the Ruby language, but its ecosystem supports development in a few other languages.

> Vagrant是用来管理虚拟机的，如VirtualBox、VMware、AWS等，主要好处是可以提供一个可配置、可移植和复用的软件环境，可以使用shell、chef、puppet等工具部署。所以vagrant不能单独使用，如果你用它来管理自己的开发环境的话，必须在自己的电脑里安装了虚拟机软件，我使用的是**virtualbox**。
> 
> Vagrant提供一个命令行工具`vagrant`，通过这个命令行工具可以直接启动一个虚拟机，当然你需要提前定义一个Vagrantfile文件，这有点类似Dockerfile之于docker了。
> 
> 跟docker类比这来看vagrant就比较好理解了，vagrant也是用来提供一致性环境的，vagrant本身也提供一个镜像源，使用`vagrant init hashicorp/precise64`就可以初始化一个Ubuntu 12.04的镜像。



## Ref
[Vagrant | Wikipedia]: https://en.wikipedia.org/wiki/Vagrant_(software)

[👍 Vagrant从使用到放弃再到掌握完全指南 | Jimmy Song]: https://jimmysong.io/blog/vagrant-intro/

[👍 Vagrant是什么]: https://www.cnblogs.com/soymilk2019/p/13026057.html

[Vagrant 入门指南（仅学习） - 风来啦的文章 - 知乎]: https://zhuanlan.zhihu.com/p/86206681
