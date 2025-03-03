# FAQ

[TOC]



## 👉 Package channel / 换源
#RaspberryPi 


[👍 树莓派系列教程：更换软件源]: https://wiki.diustou.com/cn/树莓派系列教程：更换软件源



## 👉 Wifi Configuration
#RaspberryPi #wifi 



[👍 How To Configure WiFi on Raspberry Pi: Step By Step Tutorial]: https://www.seeedstudio.com/blog/2021/01/25/three-methods-to-configure-raspberry-pi-wifi/



## 👉 Headless Raspberry Pi Setup with multiple OS
#RaspberryPi #kali #ubuntu #headless #Android

**TL;DR**
1. if SD card is greater than 64GB, than it needs to be formatted as FAT32 so that Pi can mount its file system to SD Card.
	1. Raspberry Pi Imager --> choose a OS --> erase
2. Choose a desirable OS and use a micro SD card flasher (↗ [Raspberry PI Imager](../../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20System/Firmware%20and%20Computer%20(OS)%20Booting/Boot%20Image%20Flasher%20&%20Formatters/Raspberry%20PI%20Imager.md) or ↗ [balena](../../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20System/Firmware%20and%20Computer%20(OS)%20Booting/Boot%20Image%20Flasher%20&%20Formatters/balena.md)) to load it to SD card.
3. Before insert SD card to Pi, enable SSH service and wpa services via following:
	1. go to root dir of SD card, 
	2. `touch SSH`
	3. `vim wpa_supplicant.conf` with following contents: (replace ssid&psk)
```shell
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
country=US

network={
    ssid="my_wifi_ssid"
    psk="my_password_in_plaintext"
    key_mgmt=WPA-PSK
}
```
4. inset SD card to Pi and start the machine. 
5. Find out the Pi IP and SSH to it
	1. use `nmap` scan the LAN `sudo nmap -sP 192.168.0.0/24`
	2. check router connection info.
6. 🚀
7. Install VNC Server (Optional)
	1. `sudo apt-get install tightvncserver -y`
	2. check if installed successfully: `vncserver`; kill it: `vncserver -kill :1`
	3. configure vnc: `vim ~/.vnc/xstartup`
	4. exclating file: `sudo chmod +x ~/.vnc/xstartup`
	5. restart vnc
``` shell
#!/bin/bash
xrdb $HOME/.Xresources
startxfce4 &
```


### 1️⃣ Raspberry Pi SD Card 
#### Raspberry Pi SD Card Format
Today, there are 3 major formats of SD cards. They are the [FAT16](https://recoverit.wondershare.com/file-system/fat16-file-system.html), [FAT32](https://recoverit.wondershare.com/file-system/fat32-file-system.html), and [exFAT](https://recoverit.wondershare.com/file-system/exfat-file-system.html) formats. Each format represents classes of SD cards based on specifications provided by the SD association. The FAT16 format is found in SD cards and their capacities are from 128Mb to 2Gb of data. The FAT32 on the other hand is found in SD High Capacity (SDHC) cards and can take information between 4Gb to 32Gb. The last format, exFAT, is found in SD Extended Capacity (SDXC) cards. These cards can take data ranging from 64Gb to 1Tb.

The Raspberry Pi's bootloader can only read from FAT16 and FAT32 SD cards. Thus, if you have any SD card with capacities higher than 32Gb, you have to format or reformat such SD card to FAT32 before installing on your Raspberry Pi. Now that you know the format, Let's talk about size.

#### Raspberry Pi SD Card size
SD cards have evolved from time. As we have come of age, we have seen a lot of doubling in sizes and capacities of these cards. Currently, we have SD cards of 128Mb, 256Mb, 512Mb, 1Gb, 2Gb, 4Gb, 8Gb, 16Gb, 32Gb, 64Gb, 128Gb, 256Gb, 512Gb, 1Tb and most recently 2Tb. The earlier sizes (2Gb and below) have lost relevance as requirements for them have reduced over time. The 2Tb SD card is still the most recent one and thus, very scarce.

The Raspberry Pi comes with an 8Gb SD card installed. It's great if you are not a constant user of the computer. If you are, then you'll be getting the "Low Disk Space" warning soon. This is why most Raspberry Pi users use SD cards with a higher capacity. Cards with capacities greater than 32Gb have been found to work fine, if properly formatted (As you'll learn in this article).

Before you go to the next step, it is important to keep a backup of important files and documents on the SD Card before formatting or reformatting the card. RecoverIt is a great tool for recovering lost files on a drive or SD Card.


#### Prepare SD Card For Raspberry Pi
##### 4 Ways via Windows
1. Windows Explorer
2. Disk Management
3. Diskpart (short for Disk Partition Tool)
4. Powershell, "format /FS:FAT32 X:"
##### 1 Way via macOS

##### 1 Way via Raspberry Pi

#### Recovery SD Card
Accidents happen. It could have been an error, or even deliberately but we can end up losing key files. You need not worry. They're not gone forever! [Recoverit](https://recoverit.wondershare.com/data-recovery-win.html) is a fast, effective, and easy to use Recovery tool that gets your files back in less than 5 minutes!


### 2️⃣ Raspberry Pi OS
#### Load OS Into Boot SD Card
Choose whatever OS that supports raspberry pi! 
Note that raspberry pi is using arm architecture. 

#### Enable OS Auto-login (Optional)


### 3️⃣ Network Configuration
Since we are setting up a headless pi, we need to make pi automatically join the LAN after powered up & enable SSH services so that is accessible. 
#### Add LAN/WiFi Into OS's Configuration
##### Enable wpa service (Auto-join the LAN/WiFi)
If a `wpa_supplicant.conf` file is located in the `/boot` directory of a freshly flashed Raspbian SD card, it will be copied into `/etc/wpa_supplicant` when the Pi is booted. This `wpa_supplicant.conf` file can be created and placed on the SD card using the same system you used to copy the Raspbian image to the SD card, allowing you to boot up a Raspberry Pi for the first time and have it automatically connect to your wifi network.

This `wpa_supplicant.conf` should look something like this:
``` shell
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
country=US

network={
    ssid="my_wifi_ssid"
    psk="my_password_in_plaintext"
    key_mgmt=WPA-PSK
}
```

Of note, `ctrl_interface=` is required for command-line utilities to communicate with `wpa-supplicant`. Without this, you're apt to get errors like "Could not connect to `wpa_supplicant`."
##### An Alternative (🤔)
> 🔗 [Set Up Headless Kali Linux in a Raspberry Pi 4 without Monitor, Keyboard, and Mouse]: https://shantoroy.com/security/install-kali-linux-in-raspberry-pi-4/

Create a file named `<example>.nmconnection` under the `/etc/NetworkManager/system-connections/` directory and paste the following with your own SSID and Password.

``` yaml
[connection]
id=ARRIS-0D45
uuid=78f5168f-a717-324d-90b7-2d9496d52d7a
type=wifi
interface-name=wlan0
permissions=user:kali:;

[wifi]
mac-address-blacklist=
mode=infrastructure
ssid=<SSID>

[wifi-security]
auth-alg=open
key-mgmt=wpa-psk
psk=<PASSWORD>

[ipv4]
dns-search=
method=auto

[ipv6]
addr-gen-mode=stable-privacy
dns-search=
method=auto

[proxy]
```

Now, change permission of the file as follows:
``` shell
$ sudo chmod 600 <example>.nmconnection
```

Then update the `NetworkManager.conf` file:
``` shell
$ sudo  nano  /etc/NetworkManager/NetworkManager.conf
```

change `managed=false` to `managed=true` on the last line
``` yaml
[main]
plugins=ifupdown,keyfile

[ifupdown]
managed=true
```

Now, add `wlan0` interface to the `/etc/network/interfaces` file
``` shell
$ sudo nano /etc/network/interfaces
```

The file should have the following contents:
``` yaml
auto lo
iface lo inet loopback

auto eth0
allow-hotplug eth0
iface eth0 inet dhcp

auto wlan0
iface wlan0 inet dhcp
```

#### Enable SSH Service
You also have to make sure that SSH is enabled on first boot to actually access your newly minted Pi over wifi. To do this, put an empty file named `ssh` into the same `/boot` directory of the SD card. Raspbian will detect this file on boot, enable SSH and remote login, and then delete this file.

#### After the first successful booting & connecting...
From this point, you can use something like [Ansible to configure the Raspberry Pi](https://github.com/glennklockwood/rpi-ansible) without having to plug in a keyboard, mouse, or monitor. Just be sure to change the default login/password, since anyone who can ssh to the Pi will be able to log in using the `pi` user account.



[👍 Set Up Headless Kali Linux in a Raspberry Pi 4 without Monitor, Keyboard, and Mouse]: https://shantoroy.com/security/install-kali-linux-in-raspberry-pi-4/

> Enable Kali Linux Raspberry Pi auto login [Permalink](https://shantoroy.com/security/install-kali-linux-in-raspberry-pi-4/#enable-kali-linux-raspberry-pi-auto-login "Permalink")
> Add Home Wi-Fi Connection Settings 

[👍 Headless Kali Linux in a Raspberry Pi]: https://medium.com/@TheNeelOfficial/headless-kali-linux-in-a-raspberry-pi-9e54c16c2475

[👍 How to Format SD Card for Raspberry Pi on Computers]: https://recoverit.wondershare.com/format-sd-card/format-sd-card-for-raspberry-pi.html

[How do I create a file "wpa_supplicant.conf" in the boot directory in Raspberry Pi?]: https://raspberrypi.stackexchange.com/questions/80006/how-do-i-create-a-file-wpa-supplicant-conf-in-the-boot-directory-in-raspberry

> Like Aurora said, make sure your sd card is not write-protected; and make sure you formatted your sd card as FAT32 before you wrote the os to it.(I recommend using a tool like [etcher](https://etcher.io/) to burn the image.) also, if you have an ethernet cable, you can connect your raspberry pi to your router with an ethernet cable, ssh into and add the `/etc/wpa_supplicant/wpa_supplicant.conf` file to it over ethernet, then disconnect it and reboot it so it connects to the wifi.

[Configuring Raspberry Pi for Headless Boot]: https://www.glennklockwood.com/sysadmin-howtos/rpi-headless-boot.html

[👍 Raspberry Pi 4 | Kali on ARM]: https://www.kali.org/docs/arm/raspberry-pi-4/

[👍 AOSP (Android 13) for Raspberry Pi 4]: https://konstakang.com/devices/rpi4/AOSP13/

> Here’s my build of AOSP (Android 13) for Raspberry Pi 4 Model B, Pi 400, and Compute Module 4. It’s for **advanced users** only. Pi 4 model with at least 2GB of RAM is required to run this build.




## 👉 Raspberry PI Setup with Monitors
#RaspberryPi #vnc 

**Method \#1: Connect Raspberry PI to monitor via HDMI cable**

- Raspberry Pi comes with two `micro HDMI` ports adjacent to power port. The one close to power port is the main `micro HDMI`, and the second to the power pot is the additional `micro HDMI` (? pool english)


**Method \#2: Connect Raspberry Pi to monitor via VNC**

- start Pi first in headless mode (refer to [FAQ/ 👉 Headless Raspberry Pi Setup with multiple OS](FAQ.md#👉%20Headless%20Raspberry%20Pi%20Setup%20with%20multiple%20OS) )
- SSH to it in CLI.
- enable VNC server on Raspberry Pi via `sudo raspi-config`: interface options -> VNC -> Yes -> Finish
- connect to VNC server via VNC viewer on the host machine.



[👍 树莓派开机连接桌面的两种方式 | CSDN]: https://blog.csdn.net/huying7664/article/details/124839349

