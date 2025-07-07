# virt-install

[TOC]



## Res
🏠 
🚧 


### Related Topics



## Intro



## Ref
[👍 虚拟化技术之kvm虚拟机创建工具virt-install]: https://www.cnblogs.com/qiuhom-1874/p/13520939.html
在前边的博客中，我们创建KVM虚拟机用到了virt-manager，这个工具是一个图形化工具，创建虚拟机很方便；除此我们还是用virsh define/create +虚拟机配置文件来创建虚拟机，这种方式是通过配置文件的方式，我们把定义虚拟机的信息写成一个.xml格式的描述文件，然后使用virsh这个工具来读取配置文件，从而根据我们定义的配置文件创建虚拟机；今天我们来了解下直接在命令行使用virt-install命令的方式来创建虚拟机;