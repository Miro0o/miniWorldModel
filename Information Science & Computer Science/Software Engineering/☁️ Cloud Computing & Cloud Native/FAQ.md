# FAQ

[TOC]



## 👉 Diff between `Docker` & `Containerd`
#docker #containerd



[Diff between Docker & Containerd]: https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/Whats-the-difference-between-containerd-and-Docker



## 👉 Tanzu vs OpenShift vs Ezmeral
#OpenShift #Tanzu #Ezmeral



[Tanzu vs OpenShift vs Ezmeral]: https://www.techtarget.com/searchvmware/feature/Tanzu-vs-OpenShift-vs-Ezmeral-3-rivals-Kubernetes-offerings

[Redhat Openshift]: https://access.redhat.com/documentation/en-us/openshift_container_platform/4.10

[VMWare Tanzu]: https://docs.pivotal.io



## 👉 OpenStack 🆚 Kubernetes
#openstack #kubernetes


[多维度聊一聊 k8s 和 openstack | CSDN]: http://t.csdnimg.cn/fCOlK
### 计算
计算在云计算三大件中比较简单的（这里的简单并不是说这个技术本身简单，而是想表达在使用上对比存储和网络并没有复杂的变化，在应用上技术的选取不需要有很多的顾虑）。
- k8s
	- 在 k8s 中提供计算能力的单元叫做“工作负载（workload）” ,k8s 中提供工作负载的资源叫做 pod，而且 pod 是由一个或多个容器组成的（这些容器共用网络 namespace）。所以支撑 k8s 计算服务的核心技术就是容器了，但是 k8s 本身并没有容器实现相关代码，k8s 定义了一些列 CRI 接口用于对接第三方容器服务。目前比较出名的实现 CRI 接口的容器有：CRI-O 和 containerd。
	- k8s 的渣男行为
		- 这里没有提到 docker，是因为 docker 本身并没有实现 CRI 接口，docker 对接 k8s 需要有额外的适配层 dockershim。在之前 docker 大行其道 k8s 还是小弟的时候 dockershim 是在k8s 内部实现的，安装了 k8s 就有了 dockershim，就能丝滑的对接 docker；但是现在 k8s 长大了，渐渐的成为了一代霸主，想要更多的小妾（CRI 插件），于是开始嫌弃原配夫人 docker 了，于是从 1.20 开始宣布要放弃 dockershim，从 1.24 开始正式的dockershim 代码从 k8s 移除了，毫无疑问这是把 docker 打入冷宫了，k8s 与 docker 对接就需要额外安装 dockershim。
	- 其实现在市场上实现了 CRI 的容器项目其底层都是基于 runc 的，包括 docker 也是，所以在选择上我们不用过多纠结了。
	- 除了容器，也有人在尝试使用虚机为 k8s 提供工作负载，kubevirt 就是为了实现这一目的诞生的。
- openstack
	- openstack 中提供计算能力的单元叫做“实列（instance）” 由 nova 负责，openstack 有三种计算实例：裸机，虚机，容器。但是 nova 本身只实现了管理虚机的功能，裸机需要有 ironic 支持，容器需要有 zun 的支持，ironic 和 zun 于 nova 对接后用户就能像管理虚机一样管理裸机和容器了。openstack 虚机的底层实现主要是 qemu + kvm，当然 nova 也支持其他的计算虚拟化技术，如：vmware 的 esxi，但是这些其他的计算虚拟化技术已经很久没人维护了，除非自己有一定的研发实力，能二开 openstack，否则不建议使用。对于裸机的管理也是 openstack 的一大长处，openstack 真的能像管理虚机一样管理裸机的生命周期，从安装操作系统，到最后的回收清理都能通过接口自动化的实现。
	- 在计算方面各自擅长领域不同，openstack 与 k8s 不能轻易的说谁优谁劣，只是应用场景不同。如果硬要对比，那么就拿它们各自擅长的技术：k8s 的容器，openstack 的虚机来比较。首先容器的优势：轻量，易用管理，启动快，没有性能损耗（服务在容器内运行和宿主机运行性能一样），但是缺点就是服务要想运行在容器内需要经过一个叫做容器化的过程，这个对于一些庞大的古老的项目来说可是非常考验开发人员的，这是一个痛苦且漫长的过程，而且容器化之后，对系统的 debug 和问题定位又会带来很大的挑战，对于这类的项目在容器化之前一定要慎重，很可能会得不偿失。虚机的优点与缺点和容器正好是反着的，虚机的优点是在使用上它和物理机几乎没有区别，任何服务几乎不需要改造就能直接运行在虚机上，对于大多数企业尤其是没有专门研发团队的企业，通过虚机使业务上云可以低成本快速的体验云带来的好处，虚机的缺点：过于笨重，存在性能损耗。对了，虚机还有一个优点，就是隔离性好，虚机内的操作完全不会影响到宿主机，虚机和属主机只是共用底层硬件。但是容器需要使用宿主机的内核，有些应用可能需要较高的权限，如何我们需要向外提供容器服务那么安全方面要着重考虑。


### 存储
其实存储可说的其实并不多，无论 k8s 还是 openstack 谈到其存储都绕不过存储界大佬：ceph。当然啦，k8s 有着众多的存储插件，openstack cinder 也支持着众多的存储后端。但是这众多的 k8s 存储插件有很大一部分是公有云厂商实现的，是为了适配公有云环境的，如果我们想搭建自己的 k8s 集群在存储方面我们也可以选择使用商业存储设备，一般厂商会提供对接 k8s 的插件。排开商业的和公有云的，那么我们可选的存储后端就不多了（当然如果只是一个单节点的环境就临时，这里我提到的都是共享存储），那么 ceph 无疑是我们的首选。对于 openstack 也是一样的，虽然有很大存储后端，但是排开商业的，也是强烈建议选择 ceph。因为有着共同的存储大佬：ceph, 所以也就没法说 k8s 和 openstack 在存储方面孰优孰劣。下面我们从业务层面简单的做一下对比。

- k8s
	- k8s 定义了一些列的 CSI 接口，第三方存储通过实现了这些接口的插件来对接 k8s，k8s 的存储模块叫做“卷（volume）”。k8s 的容器有两种方式挂载卷，一种是通过目录的方式挂载，挂载后容器能直接使用，另外一种就是通过原始块设备的方式关注，挂载后在容器内显示就是一个块设备，如果容器想使用就要先分区格式化。
- openstack
	- 在 openstack 中有三类存储：块；文件；对象。分别由三个项目负责，块存储由 cinder 负责，文件存储由 manila 负责，对象存储由 swift 负责。openstack 中只把块设备资源叫做“卷（volume）”,卷挂载给虚机后在虚机内显示就是一个原始的块设备需要先分区格式化才能使用。文件存储是通过 nfs 挂载到虚机的，对象存储需要通过 API 接口使用。


### 网络
云计算三大件中网络是最复杂的了，也是变数最多的，需要根据不同的应用场景设计不同的网络方案。
- openstack
	- openstack 中提供网络服务的模块分为两类：neutron 和 非 neutron 😂。neutron 系包含 neutron 本身以及一些列 neutron 周边，如：neutron-fwaas，neutron-vpnaas，neutron-dynamic-routing 还有 networking-* 等。非 neutron 的主要有两个：octavia 和 designate，octavia 提供负载均衡器服务是一个 lbaas 项目，designate 提供 DNS 服务，是一个 DNSaaS 项目。借助这些项目，openstack 能提供灵活且强大的网络功能。openstack 网络基本是参考标准模型，其目的就是把在非云环境中需要使用硬件提供的网络功能由软件实现，节省成本，便于管理，灵活配置。
- k8s
	- 在我刚开始接触 k8s 的时候，其网络是让我最头疼的，说实话到目前我依然没能找到 k8s 网络设计的哲学与规律，方法 google 当时是便开发边设计的，总之个人感觉 k8s 的网络很稀碎（当然很大可能是我个人能力不够不能掌握其中精妙）。不过我还是强行来分析一波 k8s 的网络，k8s 中涉及网络的资源一个有四个：pod，service，ingress，networkpolicy。
	- pod
		- 对于 pod 其对于网络的需求就是网卡的添加与删除，k8s 本身并没有实现 pod 的网络功能，它只是定义了一些列 CNI 接口和规范，然后由第三方来实现，现在市场上的 CNI 插件百花齐放，各有各的特色，需要用户根据自己的需要仔细的挑选。
	- service
		- 对于没有接触过 k8s 的人来说，service 绝对是一个不好理解的概念，它用于向外暴露 pod，在 k8s 的规范中 pod 是不应该在集群外被直接访问的，而且 pod 是可能随时被销毁重建的，重建则意味着 IP 改变了，因此 k8s 定义了 service，service 放在 pod 的前端，主要有两个功能：1、固定入口；2、负载均衡（多个相同服务的 pod 共用一个 service 前端）。service 有四种类型：无头（headless）,ClusterIP,NodePort和 Loadbalancer,前三种类型有 k8s 项目中的 kube-proxy 来实现，最后一种 loadbalancer 则需要第三方负载均衡服务来实现，可以是软件的也可以是硬件的。
	- ingress
		- 这个概念 k8s 网络让我困惑最久的地方，我对它最初的印象就是七层负载均衡器。k8s 也只是定义了 ingress 资源的各个属性，ingress 资源的创建需要借助 ingressController，ingressController 则需要有第三方服务来提供。
	- networkpolicy
		- k8s 的这个资源主要是用于提供网络隔离功能的，在 CNI 的标准和规范中，集群的所有 pod 都应该是相通的。但是在多租户环境中隔离的需要又是必须的。k8s 同样的也只是定义了networkpolicy 的各个属性，依然是需要第三方组件来实现，通常这是和 CNI 插件一起实现的。

在网络方面我更喜欢 openstack 的网络设计，几乎是参照标准模型来实现的，使用 network 来实现二次隔离，subnet 和 router 提供三层功能，在配合 vpnaas，fwaas，octavia 使永和很容易在 openstack 云上打造一套专属的数据中心。k8s 的网络的设计就显得有些随心所欲了，各个资源概念都是 k8s 特有的，有时候光通过文档的介绍完全不能感受这些资源是如何发挥作用的，有时候在想如果 k8s 能直接使用 openstack 的网络模型那就非常完美了。


### 架构
先说结论，就 openstack 和 k8s 的系统架构来说我更喜欢 k8s。

k8s 各个组件之间的通信完全是通过 http 请求实现的，不需要依赖第三方中间件，而 openstack 就重度依赖 rabbitmq，而 rabbitmq 经常成为 openstack 的性能瓶颈，我依稀记得在我刚入行时有一段 openstack 八股 “组件内通信使用消息队列，组件间通信使用 restful API”，是在面试 openstack 岗位是必然要问到的。而且 openstack 各个服务需要注册到 keystone，所有服务请求都要经过 keystone 认证，为了提高 keystone 性能，还需要部署 memcached 用作缓存，总之 openstack 架构设计给我的感觉就是瓶颈点很多，在之前我们有很多工作都是在研究如何提高 openstack 本身的性能与稳定性。而且在 openstack 中各个项目地位是平等的，如果想启动一个新的项目就需要从头编写所有的代码。k8s 的设计可以说实现了真正的解耦，其核心组件很少，但是其生态很庞大，为了方便第三方扩展功能基于 http 实现了一套 list-watch 机制，通过这套机制第三方组件可以很容易的与 kube-apiserver 通信，这套机制结合着 k8s 的 CRD 规范，是的 k8s 生态异常庞大，各个公司都在积极的实现自己的 CRD 为 k8s 扩展功能。

在部署上因为 openstack 和 k8s 架构上的差异，k8s 要比 openstack 容易的多，我想象有很多刚学习 openstack 的小伙伴都已成功安装官方文档搭建一套能运行的环境而自豪。而搭建 k8s 的难道可能就是集中的网络问题（主要是国内不能访问 gcr 资源，docker 和 github 也相当的慢）。在部署工具上，openstack 首选 kolla，但是 k8s 就很多啦，可以说百花齐放，国内推荐 https://github.com/easzlab/kubeasz 。


### 社区
k8s 由 CNCF(Cloud Native Computing Foundation)（Cloud Native Computing Foundation）基金会来维护；
openstack 则是由 OpenInfra（Open Infrastructure） 基金会来维护。
从基金会的命名我们也可以看出它们各种擅长的领域：云原生和基础设施。

CNCF 首页的 slogan: Make cloud native ubiquitous
OpenInfra 首页 slogan: We help people build & operate

CNCF 托管的项目绝大部是是用 golang 开发的，OpenInfra 社区托管的项目则绝大部分是用 python 开发的。

关于两个社区现在项目的活跃程度与代码贡献量可以在 stackalytics 找到详细的信息。

这两个社区都有着众多的大佬，大佬门都在积极热心的贡献着。但是因为各自架构的问题，openstack 社区需要时全能型的，什么都要做，涉及到云计算相关产品都能在社区找到相应项目，项目库相当庞大（但是这些项目参差不齐，有些甚至很久没人维护了，但是 openstack 的几个核心项目在社区人员的积极贡献下还是很稳定很优秀的）。CNCF 社区感觉更像是打造一个生态，借助 k8s 这个底座吸引着各个公司，每个公司都在争相向 CNCF 贡献自己的产品（当然这些产品质量也是参差不齐，但是因为 CNCF 严苛的审核机制，能从 CNCF 毕业的项目都是很优秀的）


---

[openstack 对比 k8s 深度好文 | CSDN]: http://t.csdnimg.cn/g1pfA
