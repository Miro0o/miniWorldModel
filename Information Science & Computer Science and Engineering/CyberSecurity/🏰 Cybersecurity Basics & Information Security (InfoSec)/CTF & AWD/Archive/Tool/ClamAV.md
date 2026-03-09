# [ClamAV](https://www.clamav.net)

![Maeve, the ClamAV mascot](../../../../Assets/Pics/logo.png)

## Guides

### 😄 Resources

📂 [ClamAV Documentaion](https://docs.clamav.net)



### 🚀 Get-started

`freshclam` takes charge of database management.

`clamscan` is the scanner.

`clamd` is the deamon. 

```shell
brew install clamav

cd /usr/local/etc/clamav/
cp freshclam.conf.sample freshclam.conf
sed -ie 's/^Example/#Example/g' freshclam.conf

freshclam -v

clamscan -r --bell -i /path/to/file/to/scan
```



### 🖇 Refs

[Set up ClamAV for OSX #1 : The open source virus scanner]: https://medium.com/@wingsuitist/set-up-clamav-for-osx-1-the-open-source-virus-scanner-82a927b60fa3
[Set up ClamAV for macOS/OSX#2 : Clamd]:https://medium.com/@wingsuitist/set-up-clamav-for-macos-osx-2-clamd-764fc0752f8e

