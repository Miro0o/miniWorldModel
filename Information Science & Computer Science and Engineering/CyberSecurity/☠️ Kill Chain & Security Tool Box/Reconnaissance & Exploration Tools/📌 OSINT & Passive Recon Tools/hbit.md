# hbit

[TOC]



## Res
🚧 https://github.com/alwaystest18/hbit


## Intro
一款用于安全测试中信息收集的自动化工具

一款信息收集的缝合工具，用到了以下工具:
- [shuffledns](https://github.com/projectdiscovery/shuffledns) 子域名枚举，根据配置可递归枚举
- [subfinder](https://github.com/projectdiscovery/subfinder) 被动收集子域名
- [alterx](https://github.com/projectdiscovery/alterx) 根据已知子域名规律生成字典
- [cdnChecker](https://github.com/alwaystest18/cdnChecker) cdn识别
- [mapcidr](https://github.com/projectdiscovery/mapcidr) 根据ip地址自动生成网段格式
- [naabu](https://github.com/projectdiscovery/naabu) 端口扫描
- [httpx](https://github.com/projectdiscovery/httpx) http服务存活检测
- [hostCollision](https://github.com/alwaystest18/hostCollision) host碰撞

程序输出以下文件：
- all_Domains_{domain} 对应域名下的全部子域名 示例：sub.test.com
- all_Sites_{domain} 对应域名下的全部http站点 示例：[https://sub.test.com:8443](https://sub.test.com:8443/)
- domains_info_{domain} 子域名及对应ip地址，可根据ip地址反查相关域名，便于确认资产 示例：sub.test.com:1.1.1.1
- ip_range_{domain} 根据已知资产生成的ip段范围 示例：1.1.1.0/24
- open_ports_{domain} 对应域名下的资产开放端口信息 示例：sub.test.com:3389
- private_domains_{domain} 如果存在解析ip为内网域名会产生此文件，便于进一步做host碰撞 示例：private.test.com
- Host_Collision_{domain} 如果存在host碰撞成功的内网域名会产生此文件 示例：url:[http://1.1.1.1](http://1.1.1.1/)host:private.test.com title:[test] Length: 666



## Ref

