# Anti-Virus Evasion Techniques (OPSEC Safe)

[TOC]



## Res
### Related Topics
↗ [AntiVirus (AV)](../../../../⛈️%20Risk%20Management/🐺%20Risk%20Countermeasures%20&%20Security%20Control/🛌%20Comprehensive%20Defense%20Systems%20&%20Security%20Products/Host%20&%20Endpoint%20Security%20Products/AntiVirus%20(AV)/AntiVirus%20(AV).md)
↗ [VM Evasion](../Anti-Reverse%20Engineering%20&%20Software%20Protection/VM%20Evasion/VM%20Evasion.md)


### Other Resources
📚 https://github.com/TideSec/BypassAntiVirus?tab=readme-ov-file
远控免杀系列文章及配套工具，汇总测试了互联网上的几十种免杀工具、113种白名单免杀方式、8种代码编译免杀、若干免杀实战技术，并对免杀效果进行了一一测试，为远控的免杀和杀软对抗免杀提供参考。
- **工具篇内容**：msf自免杀、Veil、Venom、Shellter、BackDoor-Factory、Avet、TheFatRat、Avoidz、Green-Hat-Suite、zirikatu、AVIator、DKMC、Unicorn、Python-Rootkit、ASWCrypter、nps_payload、GreatSCT、HERCULES、SpookFlare、SharpShooter、CACTUSTORCH、Winpayload等。
- **代码篇内容**：C/C++、C#、python、powershell、ruby、go等。
- **白名单内容**：总计涉及113个白名单程序，包括Rundll32.exe、Msiexec.exe、MSBuild.exe、InstallUtil.exe、Mshta.exe、Regsvr32.exe、Cmstp.exe、CScript.exe、WScript.exe、Forfiles.exe、te.exe、Odbcconf.exe、InfDefaultInstall.exe、Diskshadow.exe、PsExec.exe、Msdeploy.exe、Winword.exe、Regasm.exe、Regsvcs.exe、Ftp.exe、pubprn.vbs、winrm.vbs、slmgr.vbs、Xwizard.exe、Compiler.exe、IEExec.exe、MavInject32、Presentationhost.exe、Wmic.exe、Pcalua.exe、Url.dll、zipfldr.dll、Syncappvpublishingserver.vbs等。
- **其他内容**：在整个免杀系列文章编写过程中，还穿插写了几篇免杀实践的文章，比如shellcode免杀实践、cs免杀实践、mimikatz免杀实践等几篇文章，水平比较一般，各位小伙伴凑合着看吧。

https://book.hacktricks.xyz/windows-hardening/av-bypass#more
Currently, AVs use different methods for checking if a file is malicious or not, static detection, dynamic analysis, and for the more advanced EDRs, behavioural analysis.



## Intro



## Ref
[免杀原理与实践 | cnblog]: https://www.cnblogs.com/guoyicai/p/8727202.html
[免杀初探]: https://pingmaoer.github.io/2020/03/07/免杀初探/
![](../../../../../../Assets/Pics/Screenshot%202024-09-22%20at%2015.05.41.png)

[免杀初探-Veil]: https://pingmaoer.github.io/2020/03/17/免杀初探-Veil/
