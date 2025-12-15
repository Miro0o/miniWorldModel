# Logs

[TOC]



## 2022
### 1.6.2022

https://superuser.com/questions/665274/how-to-make-ls-color-its-output-by-default-without-setting-up-an-alias/665285#665285?newreg=d21c6748c5fd426fa10eb20421698dcb

```shell
## Colorize the ls output ##
alias ls='ls --color=auto'

## Use a long listing format ##
alias ll='ls -la'

## Show hidden files ##
alias l.='ls -d .* --color=auto'
```



## 2024
### 1.17.2024
```shell
panic(cpu 4 caller 0xffffff800f09089b): userspace watchdog timeout: no successful checkins from remoted (2 induced crashes) in 180 seconds
remoted returned not alive with context : is_alive_func returned unhealthy : device not connected (code: 0x2
service: logd, total successful checkins in 390732 seconds: 36135, last successful checkin: 0 seconds ago
service: WindowServer, total successful checkins in 390697 seconds: 36131, last successful checkin: 0 seconds ago
service: remoted (2 induced crashes), total successful checkins in 390732 seconds: 36115, last successful checkin: 180 seconds ago
service: opendirectoryd, total successful checkins in 390732 seconds: 36134, last successful checkin: 0 seconds ago
service: configd, total successful checkins in 390732 seconds: 36135, last successful checkin: 0 seconds ago

Panicked task 0xffffff9584f37428: 3 threads: pid 130: watchdogd
Backtrace (CPU 4), panicked thread: 0xffffff8beb16d0c8, Frame : Return Address
0xffffffc4ace2f510 : 0xffffff800c436c41 
0xffffffc4ace2f560 : 0xffffff800c595310 
0xffffffc4ace2f5a0 : 0xffffff800c584a5c 
0xffffffc4ace2f620 : 0xffffff800c3d3971 
0xffffffc4ace2f640 : 0xffffff800c436f2d 
0xffffffc4ace2f730 : 0xffffff800c4365d3 
0xffffffc4ace2f790 : 0xffffff800cbd8d2e 
0xffffffc4ace2f880 : 0xffffff800f09089b 
0xffffffc4ace2f890 : 0xffffff800f090364 
0xffffffc4ace2f8b0 : 0xffffff800f08f42b 
0xffffffc4ace2f9e0 : 0xffffff800cb4e326 
0xffffffc4ace2fa10 : 0xffffff800cb4e69d 
0xffffffc4ace2fb80 : 0xffffff800c5404cf 
0xffffffc4ace2fca0 : 0xffffff800c40f8a0 
0xffffffc4ace2fd60 : 0xffffff800c4276b8 
0xffffffc4ace2fdd0 : 0xffffff800c427d28 
0xffffffc4ace2fef0 : 0xffffff800c56a052 
0xffffffc4ace2ffa0 : 0xffffff800c3d3dd6 
      Kernel Extensions in backtrace:
         com.apple.driver.watchdog(1.0)[F1797B78-7645-3FC6-AD29-624DD0826DA0]@0xffffff800f08e000->0xffffff800f090fff

Process name corresponding to current thread (0xffffff8beb16d0c8): watchdogd

Mac OS version:
23C71

Kernel version:
Darwin Kernel Version 23.2.0: Wed Nov 15 21:54:10 PST 2023; root:xnu-10002.61.3~2/RELEASE_X86_64
Kernel UUID: F73CFE5A-7EF6-3C21-AFA7-742645B733CC
roots installed: 0
KernelCache slide: 0x000000000c000000
KernelCache base:  0xffffff800c200000
Kernel slide:      0x000000000c0e0000
Kernel text base:  0xffffff800c2e0000
__HIB  text base: 0xffffff800c100000
System model name: MacBookPro16,2 (Mac-5F9802EFE386AA28)
System shutdown begun: NO
Hibernation exit count: 5

System uptime in nanoseconds: 390732525454505
Last Sleep:           absolute           base_tsc          base_nano
  Uptime  : 0x0001635e8161da94
  Sleep   : 0x0000a4fcb0868fc2 0x00003b38b82d1169 0x0000a4eefdce89cb
  Wake    : 0x0000a4fcb45901b6 0x00003b612efd520f 0x0000a4fcb272767c
Compressor Info: 15% of compressed pages limit (OK) and 13% of segments limit (OK) with 7 swapfiles and OK swap space
Zone info:
  Zone map: 0xffffff80b6d2a000 - 0xffffffa0b6d2a000
  . PGZ   : 0xffffff80b6d2a000 - 0xffffff80b8d2b000
  . VM    : 0xffffff80b8d2b000 - 0xffffff858552a000
  . RO    : 0xffffff858552a000 - 0xffffff871ed2a000
  . GEN0  : 0xffffff871ed2a000 - 0xffffff8beb52a000
  . GEN1  : 0xffffff8beb52a000 - 0xffffff90b7d2a000
  . GEN2  : 0xffffff90b7d2a000 - 0xffffff958452a000
  . GEN3  : 0xffffff958452a000 - 0xffffff9a50d2a000
  . DATA  : 0xffffff9a50d2a000 - 0xffffffa0b6d2a000
  Metadata: 0xffffff8052e48000 - 0xffffff8072e48000
  Bitmaps : 0xffffff8072e48000 - 0xffffff8075e48000
  Extra   : 0 - 0

last started kext at 36372109910308: >AudioAUUC	1.70 (addr 0xffffff7fa111e000, size 12288)
loaded kexts:
>AudioAUUC	1.70
>usb.realtek8153patcher	5.0.0
@macos.driver.!UEthernetHost	8.1.1
>!ATopCaseHIDEventDriver	7400.26
>!AHIDALSService	1
>!APlatformEnabler	2.7.0d0
>X86PlatformShim	1.0.0
>AGPM	135
@filesystems.autofs	3.0
>!AGraphicsDevicePolicy	8.1.9
>!ABridgeAudio!C	400.1
>AGDCBacklightControl	8.1.9
>!AUpstreamUserClient	3.6.11
>!AGFXHDA	300.1
@AGDCPluginDisplayMetrics	8.1.9
>pmtelemetry	1
>!ABacklight	180.9
>!A!IICLGraphics	22.0.1
@filesystems.nfs	1
|IOUserEthernet	1.0.1
>usb.!UUserHCI	1
>!AMCCSControl	1.17
>!ASunrise	1
>!AHV	1
>!AFIVRDriver	4.1.0
>!A!IICLLPGraphicsFramebuffer	22.0.1
@UVCService	1
>BridgeAudioCommunication	400.1
>!AAVEBridge	6.1
>!A!ISlowAdaptiveClocking	4.0.0
>!A!IPCHPMC	2.0.1
>ACPI_SMC_PlatformPlugin	1.0.0
>!AThunderboltIP	4.0.3
>BCMWLANFirmware4388.Hashstore	1
>BCMWLANFirmware4387.Hashstore	1
>BCMWLANFirmware4378.Hashstore	1
>BCMWLANFirmware4377.Hashstore	1
>BCMWLANFirmware4364.Hashstore	1
>BCMWLANFirmware4355.Hashstore	1
>!AFileSystemDriver	3.0.1
@filesystems.tmpfs	1
@filesystems.lifs	1
@filesystems.hfs.kext	650.0.2
@BootCache	40
@!AFSCompression.!AFSCompressionTypeZlib	1.0.0
@!AFSCompression.!AFSCompressionTypeDataless	1.0.0d1
@filesystems.apfs	2235.60.6
>!ABCMWLANBusInterfacePCIeMac	1
@private.KextAudit	1.0
>!ASmartBatteryManager	161.0.0
>!AACPIButtons	6.1
>!ASMBIOS	2.1
>!AACPIEC	6.1
>!AAPIC	1.7
@!ASystemPolicy	2.0.0
@nke.applicationfirewall	404
|IOKitRegistryCompatibility	1
|EndpointSecurity	1
@Dont_Steal_Mac_OS_X	7.0.0
>!ADiskImages2	273
@kec.!AEncryptedArchive	1
>usb.!UHub	1.2
>usb.cdc.acm	5.0.0
>usb.serial	6.0.0
>!UMergeNub	900.4.2
>!AActuatorDriver	7400.42
>!AHIDKeyboard	7400.2
>!AMultitouchDriver	7400.42
>!AInputDeviceSupport	7410.1
>!AHS!BDriver	7400.26
>IO!BHIDDriver	9.0.0
>!AGraphicsControl	8.1.9
>!ASMBusPCI	1.0.14d1
>!UAudio	610.3
>!AAudioClockLibs	300.1
>!AHDA!C	500.3
|IOHDA!F	500.3
|IOAudio!F	500.4
@vecLib.kext	1.2.0
>!A!ILpssUARTv1	3.0.60
>!A!ILpssUARTCommon	3.0.60
>!AOnboardSerial	1.0
>!ABacklightExpert	1.1.0
@kext.triggers	1.0
>IOHIDPowerSource	1
>!ACallbackPowerSource	1
>!ASMBus!C	1.0.18d1
|IOAVB!F	1220.1
>!ARSMChannel	1
|IORSM!F	1
>!AIPAppender	1.0
|IONDRVSupport	598
>driverkit.serial	6.0.0
|IOAccelerator!F2	481.0.1
@!AGPUWrangler	8.1.9
@!AGraphicsDeviceControl	8.1.9
|IOGraphics!F	598
|IOSlowAdaptiveClocking!F	1.0.0
>IOPlatformPluginLegacy	1.0.0
>X86PlatformPlugin	1.0.0
>IOPlatformPlugin!F	6.0.0d8
>!AThunderboltEDMSink	5.0.3
>!AThunderboltDPOutAdapter	8.5.1
@plugin.IOgPTPPlugin	1200.91
>usb.IOUSBHostHIDDevice	1.2
>usb.cdc.ecm	5.0.0
>usb.cdc.ncm	5.0.0
>usb.cdc	5.0.0
>usb.networking	5.0.0
>usb.!UHostCompositeDevice	1.2
>!AThunderboltDPInAdapter	8.5.1
>!AThunderboltDPAdapter!F	8.5.1
>!AThunderboltPCIDownAdapter	4.1.1
>!AHPM	3.4.4
>!A!ILpssI2C!C	3.0.60
>!A!ILpssI2C	3.0.60
>!A!ILpssDmac	3.0.60
>!ABSDKextStarter	3
|IOSurface	352.0.3
@filesystems.hfs.encodings.kext	1
>!ASyntheticGame!C	11.2.3
>!AXsanScheme	3
>!ABCMWLANCoreMac	1.0.0
|IO80211!F	1200.13.0
>IOImageLoader	1.0.0
>usb.!UVHCIBCE	1.2
>usb.!UVHCICommonBCE	1.0
>usb.!UVHCI	1.2
>usb.!UVHCICommon	1.0
>!AEffaceableNOR	1.0
>!AOLYHALMac	1
|IOSerial!F	11
>corecapture	1.0.4
|IOBufferCopy!C	1.1.0
|IOBufferCopyEngine!F	1
|IONVMe!F	2.1.0
>usb.!UHostPacketFilter	1.0
|IOUSB!F	900.4.2
>!AThunderboltNHI	7.2.81
|IOThunderbolt!F	9.3.3
>usb.!UXHCIPCI	1.2
>usb.!UXHCI	1.2
>!AEFINVRAM	2.1
>!AEFIRuntime	2.1
>!ASMCRTC	1.0
|IOSMBus!F	1.1
|IOHID!F	2.0.0
|IOTimeSync!F	1200.91
|IOSkywalk!F	1.0
>mDNSOffloadUserClient	1.0.1b8
|IONetworking!F	3.4
>DiskImages	493.0.0
|IO!B!F	9.0.0
|IOReport!F	47
$quarantine	4
$sandbox	300.0
@kext.!AMatch	1.0.0d1
>!ASSE	1.0
>!ALockdownMode	1
>!AKeyStore	2
>!UTDM	556
|IOUSBMass!SDriver	243
|IOSCSIBlockCommandsDevice	492
|IOSCSIArchitectureModel!F	492
>!AFDEKeyStore	28.30
>!AEffaceable!S	1.0
|IO!S!F	2.1
>!ACyrus	1
>!ACredentialManager	1.0
>KernelRelayHost	1
|IOUSBHost!F	1.2
>!UHostMergeProperties	1.2
>usb.!UCommon	1.0
>!AMobileFileIntegrity	1.0.5
$!AImage4	5.0.0
@kext.CoreTrust	1
|CoreAnalytics!F	1
>!ABusPower!C	1.0
>!ASEPManager	1.0.1
>IOSlaveProcessor	1
>!AACPIPlatform	6.1
>!ASMC	3.1.9
|IOPCI!F	2.9
|IOACPI!F	1.4
>watchdog	1
@kec.pthread	1
@kec.XrtHostedXnu	1
@kec.Libm	1
@kec.Compression	1.0
@kec.corecrypto	14.0
```


### 1.19.2024
```shell
panic(cpu 6 caller 0xffffff801da9089b): userspace watchdog timeout: no successful checkins from remoted (2 induced crashes) in 180 seconds
remoted returned not alive with context : is_alive_func returned unhealthy : device not connected (code: 0x2
service: logd, total successful checkins in 164517 seconds: 16451, last successful checkin: 0 seconds ago
service: WindowServer, total successful checkins in 164482 seconds: 16447, last successful checkin: 0 seconds ago
service: remoted (2 induced crashes), total successful checkins in 164517 seconds: 16431, last successful checkin: 180 seconds ago
service: opendirectoryd, total successful checkins in 164517 seconds: 16451, last successful checkin: 0 seconds ago
service: configd, total successful checkins in 164517 seconds: 16451, last successful checkin: 0 seconds ago

Panicked task 0xffffff96a7516428: 3 threads: pid 130: watchdogd
Backtrace (CPU 6), panicked thread: 0xffffffa9d85dc598, Frame : Return Address
0xffffffea22b9f510 : 0xffffff801ae36c41 
0xffffffea22b9f560 : 0xffffff801af95310 
0xffffffea22b9f5a0 : 0xffffff801af84a5c 
0xffffffea22b9f620 : 0xffffff801add3971 
0xffffffea22b9f640 : 0xffffff801ae36f2d 
0xffffffea22b9f730 : 0xffffff801ae365d3 
0xffffffea22b9f790 : 0xffffff801b5d8d2e 
0xffffffea22b9f880 : 0xffffff801da9089b 
0xffffffea22b9f890 : 0xffffff801da90364 
0xffffffea22b9f8b0 : 0xffffff801da8f42b 
0xffffffea22b9f9e0 : 0xffffff801b54e326 
0xffffffea22b9fa10 : 0xffffff801b54e69d 
0xffffffea22b9fb80 : 0xffffff801af404cf 
0xffffffea22b9fca0 : 0xffffff801ae0f8a0 
0xffffffea22b9fd60 : 0xffffff801ae276b8 
0xffffffea22b9fdd0 : 0xffffff801ae27d28 
0xffffffea22b9fef0 : 0xffffff801af6a052 
0xffffffea22b9ffa0 : 0xffffff801add3dd6 
      Kernel Extensions in backtrace:
         com.apple.driver.watchdog(1.0)[F1797B78-7645-3FC6-AD29-624DD0826DA0]@0xffffff801da8e000->0xffffff801da90fff

Process name corresponding to current thread (0xffffffa9d85dc598): watchdogd

Mac OS version:
23C71

Kernel version:
Darwin Kernel Version 23.2.0: Wed Nov 15 21:54:10 PST 2023; root:xnu-10002.61.3~2/RELEASE_X86_64
Kernel UUID: F73CFE5A-7EF6-3C21-AFA7-742645B733CC
roots installed: 0
KernelCache slide: 0x000000001aa00000
KernelCache base:  0xffffff801ac00000
Kernel slide:      0x000000001aae0000
Kernel text base:  0xffffff801ace0000
__HIB  text base: 0xffffff801ab00000
System model name: MacBookPro16,2 (Mac-5F9802EFE386AA28)
System shutdown begun: NO
Hibernation exit count: 0

System uptime in nanoseconds: 164517694955107
Last Sleep:           absolute           base_tsc          base_nano
  Uptime  : 0x000095a0c2c463ed
  Sleep   : 0x0000000000000000 0x0000000000000000 0x0000000000000000
  Wake    : 0x0000000000000000 0x00000008f67ab0c1 0x0000000000000000
Compressor Info: 8% of compressed pages limit (OK) and 9% of segments limit (OK) with 3 swapfiles and OK swap space
Zone info:
  Zone map: 0xffffff903eb57000 - 0xffffffb03eb57000
  . PGZ   : 0xffffff903eb57000 - 0xffffff9040b58000
  . VM    : 0xffffff9040b58000 - 0xffffff950d357000
  . RO    : 0xffffff950d357000 - 0xffffff96a6b57000
  . GEN0  : 0xffffff96a6b57000 - 0xffffff9b73357000
  . GEN1  : 0xffffff9b73357000 - 0xffffffa03fb57000
  . GEN2  : 0xffffffa03fb57000 - 0xffffffa50c357000
  . GEN3  : 0xffffffa50c357000 - 0xffffffa9d8b57000
  . DATA  : 0xffffffa9d8b57000 - 0xffffffb03eb57000
  Metadata: 0xffffffb03eb67000 - 0xffffffb05eb67000
  Bitmaps : 0xffffffb05eb67000 - 0xffffffb061b67000
  Extra   : 0 - 0

last started kext at 459246680568: >AudioAUUC	1.70 (addr 0xffffff7fafb1e000, size 12288)
loaded kexts:
>AudioAUUC	1.70
>usb.realtek8153patcher	5.0.0
>!ATopCaseHIDEventDriver	7400.26
>!AHIDALSService	1
>AGPM	135
>X86PlatformShim	1.0.0
>!APlatformEnabler	2.7.0d0
@filesystems.autofs	3.0
>!AUpstreamUserClient	3.6.11
>!AGFXHDA	300.1
>!ABridgeAudio!C	400.1
>!A!IICLGraphics	22.0.1
>AGDCBacklightControl	8.1.9
>!AFIVRDriver	4.1.0
>!AGraphicsDevicePolicy	8.1.9
>!ABacklight	180.9
>!AMCCSControl	1.17
@AGDCPluginDisplayMetrics	8.1.9
>!A!IICLLPGraphicsFramebuffer	22.0.1
>pmtelemetry	1
@filesystems.nfs	1
|IOUserEthernet	1.0.1
>usb.!UUserHCI	1
>BridgeAudioCommunication	400.1
>!AAVEBridge	6.1
>ACPI_SMC_PlatformPlugin	1.0.0
>!ASunrise	1
>!AHV	1
@UVCService	1
>!AThunderboltIP	4.0.3
>!A!ISlowAdaptiveClocking	4.0.0
>!A!IPCHPMC	2.0.1
>BCMWLANFirmware4388.Hashstore	1
>BCMWLANFirmware4387.Hashstore	1
>BCMWLANFirmware4378.Hashstore	1
>BCMWLANFirmware4377.Hashstore	1
>BCMWLANFirmware4364.Hashstore	1
>BCMWLANFirmware4355.Hashstore	1
>!AFileSystemDriver	3.0.1
@filesystems.tmpfs	1
@filesystems.lifs	1
@filesystems.hfs.kext	650.0.2
@BootCache	40
@!AFSCompression.!AFSCompressionTypeZlib	1.0.0
@!AFSCompression.!AFSCompressionTypeDataless	1.0.0d1
@filesystems.apfs	2235.60.6
>!ABCMWLANBusInterfacePCIeMac	1
@private.KextAudit	1.0
>!ASmartBatteryManager	161.0.0
>!AACPIButtons	6.1
>!ASMBIOS	2.1
>!AACPIEC	6.1
>!AAPIC	1.7
@!ASystemPolicy	2.0.0
@nke.applicationfirewall	404
|IOKitRegistryCompatibility	1
|EndpointSecurity	1
@Dont_Steal_Mac_OS_X	7.0.0
>!ADiskImages2	273
@kec.!AEncryptedArchive	1
>usb.cdc.acm	5.0.0
>usb.serial	6.0.0
>usb.!UHub	1.2
>!AHIDKeyboard	7400.2
>!AActuatorDriver	7400.42
>!AMultitouchDriver	7400.42
>!AInputDeviceSupport	7410.1
>!AHS!BDriver	7400.26
>IO!BHIDDriver	9.0.0
>!AHDA!C	500.3
|IOHDA!F	500.3
>!UAudio	610.3
|IOAudio!F	500.4
@vecLib.kext	1.2.0
>!AAudioClockLibs	300.1
>!ASMBusPCI	1.0.14d1
>driverkit.serial	6.0.0
>!AGraphicsControl	8.1.9
>!ABacklightExpert	1.1.0
|IONDRVSupport	598
>!ASMBus!C	1.0.18d1
|IOAccelerator!F2	481.0.1
@kext.triggers	1.0
>IOHIDPowerSource	1
>!ACallbackPowerSource	1
>!A!ILpssUARTv1	3.0.60
>!A!ILpssUARTCommon	3.0.60
>!AOnboardSerial	1.0
>IOPlatformPluginLegacy	1.0.0
>X86PlatformPlugin	1.0.0
|IOAVB!F	1220.1
@plugin.IOgPTPPlugin	1200.91
>!ARSMChannel	1
|IORSM!F	1
>!AIPAppender	1.0
>!AThunderboltEDMSink	5.0.3
>!AThunderboltDPOutAdapter	8.5.1
@!AGPUWrangler	8.1.9
@!AGraphicsDeviceControl	8.1.9
|IOGraphics!F	598
|IOSlowAdaptiveClocking!F	1.0.0
>IOPlatformPlugin!F	6.0.0d8
>usb.IOUSBHostHIDDevice	1.2
>usb.cdc.ecm	5.0.0
>usb.cdc.ncm	5.0.0
>usb.cdc	5.0.0
>usb.networking	5.0.0
>usb.!UHostCompositeDevice	1.2
>!AThunderboltDPInAdapter	8.5.1
>!AThunderboltDPAdapter!F	8.5.1
>!AThunderboltPCIDownAdapter	4.1.1
>!AHPM	3.4.4
>!A!ILpssI2C!C	3.0.60
>!A!ILpssI2C	3.0.60
>!A!ILpssDmac	3.0.60
>!ABSDKextStarter	3
|IOSurface	352.0.3
@filesystems.hfs.encodings.kext	1
>!ASyntheticGame!C	11.2.3
>!AXsanScheme	3
>!ABCMWLANCoreMac	1.0.0
|IO80211!F	1200.13.0
>IOImageLoader	1.0.0
>usb.!UVHCIBCE	1.2
>usb.!UVHCICommonBCE	1.0
>usb.!UVHCI	1.2
>usb.!UVHCICommon	1.0
>!AEffaceableNOR	1.0
>!AOLYHALMac	1
|IOSerial!F	11
>corecapture	1.0.4
|IOBufferCopy!C	1.1.0
|IOBufferCopyEngine!F	1
|IONVMe!F	2.1.0
>usb.!UHostPacketFilter	1.0
|IOUSB!F	900.4.2
>!AThunderboltNHI	7.2.81
|IOThunderbolt!F	9.3.3
>usb.!UXHCIPCI	1.2
>usb.!UXHCI	1.2
>!AEFINVRAM	2.1
>!AEFIRuntime	2.1
>!ASMCRTC	1.0
|IOSMBus!F	1.1
|IOHID!F	2.0.0
|IOTimeSync!F	1200.91
|IOSkywalk!F	1.0
>mDNSOffloadUserClient	1.0.1b8
|IONetworking!F	3.4
>DiskImages	493.0.0
|IO!B!F	9.0.0
|IOReport!F	47
$quarantine	4
$sandbox	300.0
@kext.!AMatch	1.0.0d1
>!ASSE	1.0
>!ALockdownMode	1
>!AKeyStore	2
>!UTDM	556
|IOUSBMass!SDriver	243
|IOSCSIBlockCommandsDevice	492
|IOSCSIArchitectureModel!F	492
>!AFDEKeyStore	28.30
>!AEffaceable!S	1.0
|IO!S!F	2.1
>!ACyrus	1
>!ACredentialManager	1.0
>KernelRelayHost	1
|IOUSBHost!F	1.2
>!UHostMergeProperties	1.2
>usb.!UCommon	1.0
>!AMobileFileIntegrity	1.0.5
$!AImage4	5.0.0
@kext.CoreTrust	1
|CoreAnalytics!F	1
>!ABusPower!C	1.0
>!ASEPManager	1.0.1
>IOSlaveProcessor	1
>!AACPIPlatform	6.1
>!ASMC	3.1.9
|IOPCI!F	2.9
|IOACPI!F	1.4
>watchdog	1
@kec.pthread	1
@kec.XrtHostedXnu	1
@kec.Libm	1
@kec.Compression	1.0
@kec.corecrypto	14.0

```

### 1.21.2024
```shell
panic(cpu 6 caller 0xffffff800369089b): userspace watchdog timeout: no successful checkins from remoted (2 induced crashes) in 180 seconds
remoted returned not alive with context : is_alive_func returned unhealthy : device not connected (code: 0x2
service: logd, total successful checkins in 182110 seconds: 18210, last successful checkin: 0 seconds ago
service: WindowServer, total successful checkins in 182075 seconds: 18206, last successful checkin: 0 seconds ago
service: remoted (2 induced crashes), total successful checkins in 182110 seconds: 18190, last successful checkin: 180 seconds ago
service: opendirectoryd, total successful checkins in 182110 seconds: 18210, last successful checkin: 0 seconds ago
service: configd, total successful checkins in 182110 seconds: 18210, last successful checkin: 0 seconds ago

Panicked task 0xffffff9087e31638: 3 threads: pid 130: watchdogd
Backtrace (CPU 6), panicked thread: 0xffffff9554557b30, Frame : Return Address
0xffffffce6d867510 : 0xffffff8000a36c41 
0xffffffce6d867560 : 0xffffff8000b95310 
0xffffffce6d8675a0 : 0xffffff8000b84a5c 
0xffffffce6d867620 : 0xffffff80009d3971 
0xffffffce6d867640 : 0xffffff8000a36f2d 
0xffffffce6d867730 : 0xffffff8000a365d3 
0xffffffce6d867790 : 0xffffff80011d8d2e 
0xffffffce6d867880 : 0xffffff800369089b 
0xffffffce6d867890 : 0xffffff8003690364 
0xffffffce6d8678b0 : 0xffffff800368f42b 
0xffffffce6d8679e0 : 0xffffff800114e326 
0xffffffce6d867a10 : 0xffffff800114e69d 
0xffffffce6d867b80 : 0xffffff8000b404cf 
0xffffffce6d867ca0 : 0xffffff8000a0f8a0 
0xffffffce6d867d60 : 0xffffff8000a276b8 
0xffffffce6d867dd0 : 0xffffff8000a27d28 
0xffffffce6d867ef0 : 0xffffff8000b6a052 
0xffffffce6d867fa0 : 0xffffff80009d3dd6 
      Kernel Extensions in backtrace:
         com.apple.driver.watchdog(1.0)[F1797B78-7645-3FC6-AD29-624DD0826DA0]@0xffffff800368e000->0xffffff8003690fff

Process name corresponding to current thread (0xffffff9554557b30): watchdogd

Mac OS version:
23C71

Kernel version:
Darwin Kernel Version 23.2.0: Wed Nov 15 21:54:10 PST 2023; root:xnu-10002.61.3~2/RELEASE_X86_64
Kernel UUID: F73CFE5A-7EF6-3C21-AFA7-742645B733CC
roots installed: 0
KernelCache slide: 0x0000000000600000
KernelCache base:  0xffffff8000800000
Kernel slide:      0x00000000006e0000
Kernel text base:  0xffffff80008e0000
__HIB  text base: 0xffffff8000700000
System model name: MacBookPro16,2 (Mac-5F9802EFE386AA28)
System shutdown begun: NO
Hibernation exit count: 0

System uptime in nanoseconds: 182110112415460
Last Sleep:           absolute           base_tsc          base_nano
  Uptime  : 0x0000a5a0d08f8420
  Sleep   : 0x0000000000000000 0x0000000000000000 0x0000000000000000
  Wake    : 0x0000000000000000 0x0000000a75ae2e35 0x0000000000000000
Compressor Info: 10% of compressed pages limit (OK) and 11% of segments limit (OK) with 4 swapfiles and OK swap space
Zone info:
  Zone map: 0xffffff8087553000 - 0xffffffa087553000
  . PGZ   : 0xffffff8087553000 - 0xffffff8089554000
  . VM    : 0xffffff8089554000 - 0xffffff8555d53000
  . RO    : 0xffffff8555d53000 - 0xffffff86ef553000
  . GEN0  : 0xffffff86ef553000 - 0xffffff8bbbd53000
  . GEN1  : 0xffffff8bbbd53000 - 0xffffff9088553000
  . GEN2  : 0xffffff9088553000 - 0xffffff9554d53000
  . GEN3  : 0xffffff9554d53000 - 0xffffff9a21553000
  . DATA  : 0xffffff9a21553000 - 0xffffffa087553000
  Metadata: 0xffffff8044543000 - 0xffffff8064543000
  Bitmaps : 0xffffff8064543000 - 0xffffff8067543000
  Extra   : 0 - 0

last started kext at 536690152185: >AudioAUUC	1.70 (addr 0xffffff7f9571e000, size 12288)
loaded kexts:
>AudioAUUC	1.70
>usb.realtek8153patcher	5.0.0
>!ATopCaseHIDEventDriver	7400.26
>!AHIDALSService	1
>!APlatformEnabler	2.7.0d0
>AGPM	135
>X86PlatformShim	1.0.0
@filesystems.autofs	3.0
>!AUpstreamUserClient	3.6.11
>AGDCBacklightControl	8.1.9
>!ABacklight	180.9
>!AGFXHDA	300.1
>!AMCCSControl	1.17
>!AGraphicsDevicePolicy	8.1.9
@AGDCPluginDisplayMetrics	8.1.9
>!AFIVRDriver	4.1.0
>pmtelemetry	1
@filesystems.nfs	1
|IOUserEthernet	1.0.1
>usb.!UUserHCI	1
>!ASunrise	1
>!AHV	1
>!ABridgeAudio!C	400.1
>!A!IICLGraphics	22.0.1
>ACPI_SMC_PlatformPlugin	1.0.0
>BridgeAudioCommunication	400.1
>!AAVEBridge	6.1
>!AThunderboltIP	4.0.3
>!A!IPCHPMC	2.0.1
>!A!IICLLPGraphicsFramebuffer	22.0.1
>!A!ISlowAdaptiveClocking	4.0.0
@UVCService	1
>BCMWLANFirmware4388.Hashstore	1
>BCMWLANFirmware4387.Hashstore	1
>BCMWLANFirmware4378.Hashstore	1
>BCMWLANFirmware4377.Hashstore	1
>BCMWLANFirmware4364.Hashstore	1
>BCMWLANFirmware4355.Hashstore	1
>!AFileSystemDriver	3.0.1
@filesystems.tmpfs	1
@filesystems.lifs	1
@filesystems.hfs.kext	650.0.2
@BootCache	40
@!AFSCompression.!AFSCompressionTypeZlib	1.0.0
@!AFSCompression.!AFSCompressionTypeDataless	1.0.0d1
@filesystems.apfs	2235.60.6
>!ABCMWLANBusInterfacePCIeMac	1
@private.KextAudit	1.0
>!ASmartBatteryManager	161.0.0
>!AACPIButtons	6.1
>!ASMBIOS	2.1
>!AACPIEC	6.1
>!AAPIC	1.7
@!ASystemPolicy	2.0.0
@nke.applicationfirewall	404
|IOKitRegistryCompatibility	1
|EndpointSecurity	1
@Dont_Steal_Mac_OS_X	7.0.0
>!ADiskImages2	273
@kec.!AEncryptedArchive	1
>usb.cdc.acm	5.0.0
>usb.serial	6.0.0
>usb.!UHub	1.2
>!AActuatorDriver	7400.42
>!AMultitouchDriver	7400.42
>!AInputDeviceSupport	7410.1
>!AHS!BDriver	7400.26
>IO!BHIDDriver	9.0.0
>!AHIDKeyboard	7400.2
>!ABacklightExpert	1.1.0
>!A!ILpssUARTv1	3.0.60
>!A!ILpssUARTCommon	3.0.60
>!AOnboardSerial	1.0
>!UAudio	610.3
>!AAudioClockLibs	300.1
>!ASMBus!C	1.0.18d1
>!AGraphicsControl	8.1.9
>!ASMBusPCI	1.0.14d1
@kext.triggers	1.0
>IOHIDPowerSource	1
>!ACallbackPowerSource	1
|IOAVB!F	1220.1
>!ARSMChannel	1
|IORSM!F	1
>!AIPAppender	1.0
>!AHDA!C	500.3
|IOHDA!F	500.3
|IOAudio!F	500.4
@vecLib.kext	1.2.0
|IONDRVSupport	598
>IOPlatformPluginLegacy	1.0.0
>X86PlatformPlugin	1.0.0
>!AThunderboltEDMSink	5.0.3
>!AThunderboltDPOutAdapter	8.5.1
>driverkit.serial	6.0.0
>IOPlatformPlugin!F	6.0.0d8
|IOAccelerator!F2	481.0.1
@!AGPUWrangler	8.1.9
@!AGraphicsDeviceControl	8.1.9
|IOGraphics!F	598
|IOSlowAdaptiveClocking!F	1.0.0
@plugin.IOgPTPPlugin	1200.91
>usb.cdc.ecm	5.0.0
>usb.IOUSBHostHIDDevice	1.2
>usb.cdc.ncm	5.0.0
>usb.cdc	5.0.0
>usb.networking	5.0.0
>usb.!UHostCompositeDevice	1.2
>!AThunderboltDPInAdapter	8.5.1
>!AThunderboltDPAdapter!F	8.5.1
>!AThunderboltPCIDownAdapter	4.1.1
>!AHPM	3.4.4
>!A!ILpssI2C!C	3.0.60
>!A!ILpssI2C	3.0.60
>!A!ILpssDmac	3.0.60
>!ABSDKextStarter	3
|IOSurface	352.0.3
@filesystems.hfs.encodings.kext	1
>!ASyntheticGame!C	11.2.3
>!AXsanScheme	3
>!ABCMWLANCoreMac	1.0.0
|IO80211!F	1200.13.0
>IOImageLoader	1.0.0
>usb.!UVHCIBCE	1.2
>usb.!UVHCICommonBCE	1.0
>usb.!UVHCI	1.2
>usb.!UVHCICommon	1.0
>!AEffaceableNOR	1.0
>!AOLYHALMac	1
|IOSerial!F	11
>corecapture	1.0.4
|IOBufferCopy!C	1.1.0
|IOBufferCopyEngine!F	1
|IONVMe!F	2.1.0
>usb.!UHostPacketFilter	1.0
|IOUSB!F	900.4.2
>!AThunderboltNHI	7.2.81
|IOThunderbolt!F	9.3.3
>usb.!UXHCIPCI	1.2
>usb.!UXHCI	1.2
>!AEFINVRAM	2.1
>!AEFIRuntime	2.1
>!ASMCRTC	1.0
|IOSMBus!F	1.1
|IOHID!F	2.0.0
|IOTimeSync!F	1200.91
|IOSkywalk!F	1.0
>mDNSOffloadUserClient	1.0.1b8
|IONetworking!F	3.4
>DiskImages	493.0.0
|IO!B!F	9.0.0
|IOReport!F	47
$quarantine	4
$sandbox	300.0
@kext.!AMatch	1.0.0d1
>!ASSE	1.0
>!ALockdownMode	1
>!AKeyStore	2
>!UTDM	556
|IOUSBMass!SDriver	243
|IOSCSIBlockCommandsDevice	492
|IOSCSIArchitectureModel!F	492
>!AFDEKeyStore	28.30
>!AEffaceable!S	1.0
|IO!S!F	2.1
>!ACyrus	1
>!ACredentialManager	1.0
>KernelRelayHost	1
|IOUSBHost!F	1.2
>!UHostMergeProperties	1.2
>usb.!UCommon	1.0
>!AMobileFileIntegrity	1.0.5
$!AImage4	5.0.0
@kext.CoreTrust	1
|CoreAnalytics!F	1
>!ABusPower!C	1.0
>!ASEPManager	1.0.1
>IOSlaveProcessor	1
>!AACPIPlatform	6.1
>!ASMC	3.1.9
|IOPCI!F	2.9
|IOACPI!F	1.4
>watchdog	1
@kec.pthread	1
@kec.XrtHostedXnu	1
@kec.Libm	1
@kec.Compression	1.0
@kec.corecrypto	14.0
```


### 1.29.2024
```shell
panic(cpu 6 caller 0xffffff801ce9089b): userspace watchdog timeout: no successful checkins from remoted (2 induced crashes) in 180 seconds
remoted returned not alive with context : is_alive_func returned unhealthy : device not connected (code: 0x2
service: logd, total successful checkins in 490613 seconds: 46520, last successful checkin: 0 seconds ago
service: WindowServer, total successful checkins in 490578 seconds: 46516, last successful checkin: 0 seconds ago
service: remoted (2 induced crashes), total successful checkins in 490613 seconds: 46500, last successful checkin: 180 seconds ago
service: opendirectoryd, total successful checkins in 490613 seconds: 46519, last successful checkin: 0 seconds ago
service: configd, total successful checkins in 490613 seconds: 46520, last successful checkin: 0 seconds ago

Panicked task 0xffffffab51039218: 3 threads: pid 130: watchdogd
Backtrace (CPU 6), panicked thread: 0xffffffa6849f8b30, Frame : Return Address
0xffffff806cac3510 : 0xffffff801a236c41 
0xffffff806cac3560 : 0xffffff801a395310 
0xffffff806cac35a0 : 0xffffff801a384a5c 
0xffffff806cac3620 : 0xffffff801a1d3971 
0xffffff806cac3640 : 0xffffff801a236f2d 
0xffffff806cac3730 : 0xffffff801a2365d3 
0xffffff806cac3790 : 0xffffff801a9d8d2e 
0xffffff806cac3880 : 0xffffff801ce9089b 
0xffffff806cac3890 : 0xffffff801ce90364 
0xffffff806cac38b0 : 0xffffff801ce8f42b 
0xffffff806cac39e0 : 0xffffff801a94e326 
0xffffff806cac3a10 : 0xffffff801a94e69d 
0xffffff806cac3b80 : 0xffffff801a3404cf 
0xffffff806cac3ca0 : 0xffffff801a20f8a0 
0xffffff806cac3d60 : 0xffffff801a2276b8 
0xffffff806cac3dd0 : 0xffffff801a227d28 
0xffffff806cac3ef0 : 0xffffff801a36a052 
0xffffff806cac3fa0 : 0xffffff801a1d3dd6 
      Kernel Extensions in backtrace:
         com.apple.driver.watchdog(1.0)[F1797B78-7645-3FC6-AD29-624DD0826DA0]@0xffffff801ce8e000->0xffffff801ce90fff

Process name corresponding to current thread (0xffffffa6849f8b30): watchdogd

Mac OS version:
23C71

Kernel version:
Darwin Kernel Version 23.2.0: Wed Nov 15 21:54:10 PST 2023; root:xnu-10002.61.3~2/RELEASE_X86_64
Kernel UUID: F73CFE5A-7EF6-3C21-AFA7-742645B733CC
roots installed: 0
KernelCache slide: 0x0000000019e00000
KernelCache base:  0xffffff801a000000
Kernel slide:      0x0000000019ee0000
Kernel text base:  0xffffff801a0e0000
__HIB  text base: 0xffffff8019f00000
System model name: MacBookPro16,2 (Mac-5F9802EFE386AA28)
System shutdown begun: NO
Hibernation exit count: 10

System uptime in nanoseconds: 490613593887476
Last Sleep:           absolute           base_tsc          base_nano
  Uptime  : 0x0001be35e0fc5837
  Sleep   : 0x0001b454f03e2a4b 0x000171336f8a2743 0x0001b44555349582
  Wake    : 0x0001b454f38b512d 0x000171f4aa6ce0ed 0x0001b454f1cd6461
Compressor Info: 23% of compressed pages limit (OK) and 18% of segments limit (OK) with 12 swapfiles and OK swap space
Zone info:
  Zone map: 0xffffff9683ff8000 - 0xffffffb683ff8000
  . PGZ   : 0xffffff9683ff8000 - 0xffffff9685ff9000
  . VM    : 0xffffff9685ff9000 - 0xffffff9b527f8000
  . RO    : 0xffffff9b527f8000 - 0xffffff9cebff8000
  . GEN0  : 0xffffff9cebff8000 - 0xffffffa1b87f8000
  . GEN1  : 0xffffffa1b87f8000 - 0xffffffa684ff8000
  . GEN2  : 0xffffffa684ff8000 - 0xffffffab517f8000
  . GEN3  : 0xffffffab517f8000 - 0xffffffb01dff8000
  . DATA  : 0xffffffb01dff8000 - 0xffffffb683ff8000
  Metadata: 0xffffffffdc887000 - 0xfffffffffc887000
  Bitmaps : 0xfffffffffc887000 - 0xffffffffff887000
  Extra   : 0 - 0

last started kext at 393485856630253: @macos.driver.!UEthernetHost	8.1.1 (addr 0xffffff7faeefd000, size 16384)
loaded kexts:
@macos.driver.!UEthernetHost	8.1.1
>AudioAUUC	1.70
>usb.realtek8153patcher	5.0.0
>!ATopCaseHIDEventDriver	7400.26
>!AHIDALSService	1
>!APlatformEnabler	2.7.0d0
>AGPM	135
>X86PlatformShim	1.0.0
@filesystems.autofs	3.0
>!AUpstreamUserClient	3.6.11
>!AGraphicsDevicePolicy	8.1.9
@AGDCPluginDisplayMetrics	8.1.9
>!A!IICLGraphics	22.0.1
>pmtelemetry	1
@filesystems.nfs	1
|IOUserEthernet	1.0.1
>usb.!UUserHCI	1
>!ASunrise	1
>!AHV	1
>AGDCBacklightControl	8.1.9
>!ABridgeAudio!C	400.1
>!ABacklight	180.9
>!AGFXHDA	300.1
>!AMCCSControl	1.17
>BridgeAudioCommunication	400.1
>!A!ISlowAdaptiveClocking	4.0.0
>!A!IICLLPGraphicsFramebuffer	22.0.1
>!AFIVRDriver	4.1.0
@UVCService	1
>ACPI_SMC_PlatformPlugin	1.0.0
>!AThunderboltIP	4.0.3
>!A!IPCHPMC	2.0.1
>!AAVEBridge	6.1
>BCMWLANFirmware4388.Hashstore	1
>BCMWLANFirmware4387.Hashstore	1
>BCMWLANFirmware4378.Hashstore	1
>BCMWLANFirmware4377.Hashstore	1
>BCMWLANFirmware4364.Hashstore	1
>BCMWLANFirmware4355.Hashstore	1
>!AFileSystemDriver	3.0.1
@filesystems.tmpfs	1
@filesystems.lifs	1
@filesystems.hfs.kext	650.0.2
@BootCache	40
@!AFSCompression.!AFSCompressionTypeZlib	1.0.0
@!AFSCompression.!AFSCompressionTypeDataless	1.0.0d1
@filesystems.apfs	2235.60.6
>!ABCMWLANBusInterfacePCIeMac	1
@private.KextAudit	1.0
>!ASmartBatteryManager	161.0.0
>!AACPIButtons	6.1
>!ASMBIOS	2.1
>!AACPIEC	6.1
>!AAPIC	1.7
@!ASystemPolicy	2.0.0
@nke.applicationfirewall	404
|IOKitRegistryCompatibility	1
|EndpointSecurity	1
@Dont_Steal_Mac_OS_X	7.0.0
>!ADiskImages2	273
@kec.!AEncryptedArchive	1
>!UMergeNub	900.4.2
>usb.cdc.acm	5.0.0
>usb.serial	6.0.0
>usb.!UHub	1.2
>!AHS!BDriver	7400.26
>IO!BHIDDriver	9.0.0
>!AActuatorDriver	7400.42
>!AMultitouchDriver	7400.42
>!AInputDeviceSupport	7410.1
>!AHIDKeyboard	7400.2
>!AGraphicsControl	8.1.9
>!UAudio	610.3
>!AAudioClockLibs	300.1
@kext.triggers	1.0
>IOHIDPowerSource	1
>!ACallbackPowerSource	1
|IOAVB!F	1220.1
>!ARSMChannel	1
|IORSM!F	1
>!AIPAppender	1.0
>!ASMBusPCI	1.0.14d1
>!AHDA!C	500.3
|IOHDA!F	500.3
>!ABacklightExpert	1.1.0
|IONDRVSupport	598
|IOAudio!F	500.4
@vecLib.kext	1.2.0
>!ASMBus!C	1.0.18d1
@!AGPUWrangler	8.1.9
|IOSlowAdaptiveClocking!F	1.0.0
|IOAccelerator!F2	481.0.1
@!AGraphicsDeviceControl	8.1.9
|IOGraphics!F	598
>IOPlatformPluginLegacy	1.0.0
>X86PlatformPlugin	1.0.0
>!A!ILpssUARTv1	3.0.60
>!A!ILpssUARTCommon	3.0.60
>!AOnboardSerial	1.0
>!AThunderboltEDMSink	5.0.3
>!AThunderboltDPOutAdapter	8.5.1
@plugin.IOgPTPPlugin	1200.91
>IOPlatformPlugin!F	6.0.0d8
>driverkit.serial	6.0.0
>usb.cdc.ncm	5.0.0
>usb.cdc.ecm	5.0.0
>usb.IOUSBHostHIDDevice	1.2
>usb.cdc	5.0.0
>usb.networking	5.0.0
>usb.!UHostCompositeDevice	1.2
>!AThunderboltDPInAdapter	8.5.1
>!AThunderboltDPAdapter!F	8.5.1
>!AThunderboltPCIDownAdapter	4.1.1
>!AHPM	3.4.4
>!A!ILpssI2C!C	3.0.60
>!A!ILpssI2C	3.0.60
>!A!ILpssDmac	3.0.60
>!ABSDKextStarter	3
|IOSurface	352.0.3
@filesystems.hfs.encodings.kext	1
>!ASyntheticGame!C	11.2.3
>!AXsanScheme	3
>!ABCMWLANCoreMac	1.0.0
|IO80211!F	1200.13.0
>IOImageLoader	1.0.0
>usb.!UVHCIBCE	1.2
>usb.!UVHCICommonBCE	1.0
>usb.!UVHCI	1.2
>usb.!UVHCICommon	1.0
>!AEffaceableNOR	1.0
>!AOLYHALMac	1
|IOSerial!F	11
>corecapture	1.0.4
|IOBufferCopy!C	1.1.0
|IOBufferCopyEngine!F	1
|IONVMe!F	2.1.0
>usb.!UHostPacketFilter	1.0
|IOUSB!F	900.4.2
>!AThunderboltNHI	7.2.81
|IOThunderbolt!F	9.3.3
>usb.!UXHCIPCI	1.2
>usb.!UXHCI	1.2
>!AEFINVRAM	2.1
>!AEFIRuntime	2.1
>!ASMCRTC	1.0
|IOSMBus!F	1.1
|IOHID!F	2.0.0
|IOTimeSync!F	1200.91
|IOSkywalk!F	1.0
>mDNSOffloadUserClient	1.0.1b8
|IONetworking!F	3.4
>DiskImages	493.0.0
|IO!B!F	9.0.0
|IOReport!F	47
$quarantine	4
$sandbox	300.0
@kext.!AMatch	1.0.0d1
>!ASSE	1.0
>!ALockdownMode	1
>!AKeyStore	2
>!UTDM	556
|IOUSBMass!SDriver	243
|IOSCSIBlockCommandsDevice	492
|IOSCSIArchitectureModel!F	492
>!AFDEKeyStore	28.30
>!AEffaceable!S	1.0
|IO!S!F	2.1
>!ACyrus	1
>!ACredentialManager	1.0
>KernelRelayHost	1
|IOUSBHost!F	1.2
>!UHostMergeProperties	1.2
>usb.!UCommon	1.0
>!AMobileFileIntegrity	1.0.5
$!AImage4	5.0.0
@kext.CoreTrust	1
|CoreAnalytics!F	1
>!ABusPower!C	1.0
>!ASEPManager	1.0.1
>IOSlaveProcessor	1
>!AACPIPlatform	6.1
>!ASMC	3.1.9
|IOPCI!F	2.9
|IOACPI!F	1.4
>watchdog	1
@kec.pthread	1
@kec.XrtHostedXnu	1
@kec.Libm	1
@kec.Compression	1.0
@kec.corecrypto	14.0

```