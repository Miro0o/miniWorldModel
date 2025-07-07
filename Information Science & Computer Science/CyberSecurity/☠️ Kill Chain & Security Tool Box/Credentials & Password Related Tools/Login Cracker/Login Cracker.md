# Login Cracker

[TOC]



## Res
↗ [Message Digest & Hash Function (Integrity)](../../../🚬%20Cryptology%20&%20Secure%20Communication/🤐%20Cryptography/Modern%20Cryptography/Cryptographic%20Techniques%20for%20Integrity%20&%20Authentication/Message%20Digest%20&%20Hash%20Function%20(Integrity)/Message%20Digest%20&%20Hash%20Function%20(Integrity).md)



## Intro
### 
### Security Account Manager (SAM)



## 🎯 Brief List
### Online Attackers
#### 👉 cewl
可通过爬行网站获取关键信息创建一个密码字典。
#### 👉 CAT
是很小的安全审计工具，扫描Cisco路由器的一般性漏洞，如默认密码，SNMP community字串和一些老的IOS bug（Cisco的操作系统）
#### 👉 Findmyhash
在线哈希破解工具，借助在线哈希网站的接口制作的工具.
#### 👉 NCrack
相似功能基本类似，突出了RDP（3389）爆破功能。
#### 👉 onesixtyone
一个snmp扫描工具，用于找出设备上的SNMP Community 子串，扫描速度非常快
#### 👉 Patator
一款Python编写的多服务破解工具，如枚举一个服务用户名密码。

### Offline Attackers
#### 👉 Creddump
kali Linux离线攻击工具中的Cache-dump，lsadump与pwdump均为creddump套件的一部分，基于Python的哈希抓取工具。
#### 👉 Chntpw
用来修改Window SAM文件实现系统密码修改，亦可在kali作为启动盘时作删除密码的的用途。
#### 👉 Crunch
实用的密码字典生成工具，可以指定位数生成暴力枚举字典。
#### 👉 Fcrackzip
kali下一款ZIP压缩包密码破解工具。
#### 👉 Hashcat
强大的密码破解软件，系列软件包含Hashcat，oclHashcat，还有一个单独新出的oclRausscrack，其区别为Hashcat只支持CPU破解，oclGausscrack则支持gpu加速，oclHashcat则分为AMD版和NAVID版。
↗ [hashcat](hashcat.md)
#### 👉 Hashid
简单易用的哈希分析工具，可以判断哈希或哈希文件是何种哈希算法加密的。
#### 👉 Pyrit
无线网络密码破解工具，借助GPU加速。
#### 👉 Rcrack
彩虹表密码哈希工具，使用了第一代彩虹表（RT格式），当然首先，我们需要有足够容量的彩虹表，按照参数破解即可。
#### 👉 Rsmangler
字典处理工具，可以生成几个字串的所有可能组合形式，在生成社工字典时亦可用到，可以有选择性的关闭某系选项。

### Rainbow Cracker
#### 👉 Ophcrack
彩虹表Windows密码哈希破解工具，对应有命令行版的ophcrack-cli
#### 👉 rcracki_mt
#### 👉 Cain
#### 👉 RainbowCrack


## 🎯 密码攻击之哈希传递攻击
### 👉 Passing thehash
要进行哈希传递攻击，首先我们要有目标主机的哈希信息，以Pwdump7抓取hash为例，pth套件每个工具都针对win下响应的exe文件，如使用pth-winexe可以借助哈希执行程序得到一个cmdshell。

### 👉 Keimpx
一款Python编写的哈希传递工具，可以通过已有的哈希信息GET一个后门shell。

### 👉 Metasploit
模块exploit/windows/smb/psexec亦可完成HAsh传递攻击。



## 🎯 Wireless Security Analysis & Login Crackers
### 👉 aircrack-ng
是一个与801.11标准的无线网络分析有关的安全软件，主要功能：网络侦测，数据包嗅探，WEP和WPA/WPA2-PSK破解，Aircrack-ng可以工作在任何支持监听模式的无线网卡上并嗅探802.11a，802.11b，802.11g的数据。该程序可运行在Linux和Windows上，Linux版本已经被移植到了Zaurus和Maemo平台上

↗ [aircrack-ng](../../Pen-testing%20Tools/Delivery%20Tools/aircrack-ng/aircrack-ng.md)

### 👉 Cowpatty
一款知名的WPA-PSK握手包密码破解工具。

### 👉 EAPMD5PASS
针对EAP-MD5的密码破解工具

### 👉 Fern WiFi Cracker
无线网络分析中如果要使用虚拟机中的kali Linux，则需要外置无线网卡。

### 👉 MDK3
是一款无线DOS攻击测试工具，另外还有其他针对隐藏ESSID的暴力探测模式，802.1x渗透测试，WIDS干扰等功能。

### 👉 wifite
自动化的无线网审计工具，可以完成自动化破解，Python脚本编写，结合Aircrack-ng套件与Reaver工具。

### 👉 Reaver
对开启WPS的路由器PIN码进行破解。



## Ref
[👍 内网渗透：获取Windows内Hash密码方法总结 | 安全内参]: https://www.secrss.com/articles/24903
- **Windows下安全认证机制**
	- Windows下的安全认证机制总共有两种，一种是基于NTLM的认证方式，主要用在早期的Windows工作组环境中；另一种是基于Kerberos的认证方式，主要用在域环境中。
- **使用PwDump工具获取密码Hash**
	- PwDump7可以在CMD下提取出系统中的用户的密码hash，使用管理员权限直接运行该工具即可：获取到Hash后，我们可以用破解工具来破解得到明文密码，也可以进行哈希传递攻击来横向渗透。
- **使用Mimikatz工具抓取Windows密码**
	- Mimikatz的最大功能是可以直接读取Windows操作系统的明文密码，原理是lsass.exe是Windows系统的安全机制，主要用于本地安全和登陆策略，通常在我们登陆系统时输入密码后，密码便会存贮在lsass.exe内存中，经过wdigest和tspkg两个模块调用后，对其使用可逆的算法进行加密并存储在内存中，而Mimikatz正是通过对lsass.exe逆算获取到明文密码。
		- 需要注意的是当目标为win10或2012R2以上时，默认在内存中禁止保存明文密码，但是我们可以通过修改注册表的方式抓取明文，输入以下命令即可：
			- `Reg add HKLM\SYSTEM\CurrentControlSet\Control\SecurityProviders\WDigest /vUseLogonCredential /t REG_DWORD /d 1 /f`
	- **1、直接读取**
	- **2、Procdump+Mimikatz离线读取lsass.dmp文件**
	- **3、通过SAM和System文件抓取密码和Hash**
- **Windows密码破解方法**
	- **1、ophcrack在线破解**
	- **2、ophcarck工具破解**
- **防范措施**
	- **1、更新补丁**
	- **2、关闭Wdigest Auth**

[👍 密码攻击之在线攻击工具]: https://www.cnblogs.com/20189223cjt/p/10654986.html
