# Troubleshooting

[TOC]




## 👉 No space left on device, Raspberry Pi
#RaspberryPi 


``` shell
df -h 
sudo parted -s /dev/mmcblk0 unit MB print free

find / -size +1000000 -print
```



[No space left on device on fresh volumio 3 (Raspi-4) 64GB SD card]: https://community.volumio.com/t/no-space-left-on-device-on-fresh-volumio-3-raspi-4-64gb-sd-card/53535

[Raspberry Pi disk space problem ( run out of space even no application installed )]: https://stackoverflow.com/questions/73119077/raspberry-pi-disk-space-problem-run-out-of-space-even-no-application-installed