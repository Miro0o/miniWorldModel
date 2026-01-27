# Awesome Network

[TOC]



## Network Mangement
↗ [Awesome Configuration /Network Configuration](Awesome%20Configuration.md#Network%20Configuration)



## Connecter /Network Client
### 👉 httpie
🏠 https://httpie.io
📂 https://httpie.io/docs/cli

HTTPie (pronounced **aitch-tee-tee-pie**) is a command-line HTTP client. Its goal is to make CLI interaction with web services as human-friendly as possible. HTTPie is designed for testing, debugging, and generally interacting with APIs & HTTP servers. The **`http`** & **`https`** commands allow for creating and sending arbitrary HTTP requests. They use simple and natural syntax and provide formatted and colorized output.
#### [Main features](https://httpie.io/docs/cli/main-features)
- Expressive and intuitive syntax
- Formatted and colorized terminal output
- Built-in JSON support
- Forms and file uploads
- HTTPS, proxies, and authentication
- Arbitrary request data
- Custom headers
- Persistent sessions
- Wget-like downloads
- Linux, macOS, Windows, and FreeBSD support
- Plugins
- Documentation
- Test coverage


### 👉 Serial 2
🚧 https://www.decisivetactics.com/products/serial/

Connect to routers, servers, firewalls, industrial control and IoT devices with ease.

### 👉 termius
🚧 https://www.termius.com

Connect with one click from any mobile and desktop device. No re-entering IP addresses, ports, and passwords.



## File Transfer & Sync & Sharing
- [rclone](https://github.com/ncw/rclone) - Sync files with various cloud providers.
- [ffsend](https://github.com/timvisee/ffsend) - Quick file share.
- [share-cli](https://github.com/marionebl/share-cli) - Share files with your local network.
- [google-drive-upload](https://github.com/labbots/google-drive-upload) - Upload/sync with Google Drive.
- [gdrive-downloader](https://github.com/Akianonymus/gdrive-downloader) - Download files/folders from Google Drive.
- [portal](https://github.com/ZinoKader/portal) - Send files between computers.
- [shbin](https://github.com/Shiphero/shbin/) - Turn a Github repo into a pastebin.
- [sharing](https://github.com/parvardegr/sharing) - Send and receive files on your mobile device.
- [ncp](https://github.com/kha7iq/ncp) - Transfer files and folders, to and from NFS servers.


### 👉 `lrzsz`: free x/y/zmodem implementation
🏠 https://www.ohse.de/uwe/software/lrzsz.html

_lrzsz_ is a unix communication package providing the [XMODEM, YMODEM](ftp://ftp.std.com/obi/Standards/FileTransfer/YMODEM8.DOC.1.Z) [ZMODEM](http://www.easysw.com/~mike/serial/zmodem.html) file transfer protocols. lrzsz is a heavily rehacked version of the last public domain release of [Omen Technologies](http://www.omen.com/)_rzsz_ package, and is now [free software](http://www.gnu.ai.mit.edu/philosophy/free-sw.html) and released under the [GNU General Public Licence](http://www.gnu.ai.mit.edu/copyleft/gpl.html).


[Set rz and sz on Mac]: https://gist.github.com/meowoodie/4bcf6d6ae81727b618bf
[Transfer Files with iTerm sz/rz]: https://ledarryl.medium.com/transfer-files-with-iterm-sz-rz-4aee739f95da
[Mac osx 下安装iTerm2，并使用rz sz上传下载（附homebrew配置）]: https://segmentfault.com/a/1190000012166969
[iterm2 rz与sz的功能]: https://www.huweihuang.com/linux-notes/keymap/iterm2-rzsz.html


### 👉 `trzsz` (`trz`/`tsz`)
`trzsz` ( trz / tsz ) is a simple file transfer tools, similar to `lrzsz` ( rz / sz ), and compatible with `tmux`.

GitHub: <https://github.com/trzsz/trzsz>
中文文档：<https://trzsz.github.io/cn>
Website: <https://trzsz.github.io>



## Network Downloader
### 👉 aria2
🏠 https://aria2.github.io

aria2 is a **lightweight** multi-protocol & multi-source command-line **download utility**. It supports **HTTP/HTTPS**, **FTP**, **SFTP**, **BitTorrent** and **Metalink**. aria2 can be manipulated via built-in **JSON-RPC** and **XML-RPC** interfaces.

Features
- **Multi-Connection Download**. aria2 can download a file from multiple sources/protocols and tries to utilize your maximum download bandwidth. Really speeds up your download experience.
- **Lightweight**. aria2 doesn’t require much memory and CPU time. When disk cache is off, the physical memory usage is typically 4MiB (normal HTTP/FTP downloads) to 9MiB (BitTorrent downloads). CPU usage in BitTorrent with download speed of 2.8MiB/sec is around 6%.
- **Fully Featured BitTorrent Client**. All features you want in BitTorrent client are available: DHT, PEX, Encryption, Magnet URI, Web-Seeding, Selective Downloads, Local Peer Discovery and UDP tracker.
- **Metalink Enabled**. aria2 supports [The Metalink Download Description Format](http://tools.ietf.org/html/rfc5854) (aka Metalink v4), Metalink version 3 and [Metalink/HTTP](http://tools.ietf.org/html/rfc6249). Metalink offers the file verification, HTTP/FTP/SFTP/BitTorrent integration and the various configurations for language, location, OS, etc.
- **Remote Control**. aria2 supports RPC interface to control the aria2 process. The supported interfaces are JSON-RPC (over HTTP and WebSocket) and XML-RPC.



## Host & Service Discovery /Exposure
### 👉 localtunnel
🚧 https://github.com/localtunnel/localtunnel

localtunnel exposes your localhost to the world for easy testing and sharing! No need to mess with DNS or deploy just to have others test out your changes.

Great for working with browser testing tools like browserling or external api callback services like twilio which require a public url for callbacks.

Clients in other languages
- _go_ [gotunnelme](https://github.com/NoahShen/gotunnelme)
- _go_ [go-localtunnel](https://github.com/localtunnel/go-localtunnel)
- _C#/.NET_ [localtunnel-client](https://github.com/angelobreuer/localtunnel-client)
- _Rust_ [rlt](https://github.com/kaichaosun/rlt)

Other Server Implementations
- See [localtunnel/server](https://github.com/localtunnel/server) for details on the server that powers localtunnel.


### 👉 Ngrok
↗ [ngrok](../../../../../Software%20Engineering/☁️%20Cloud%20Computing%20&%20Cloud%20Native/Cloud%20Operating%20System%20&%20Platform%20(System%20Level%20Engineering)/Orchestration%20&%20Management/API%20Gateway/ngrok/ngrok.md)


### 👉 `tmate`
↗ [Awesome Windows Manager /👉 `tmate`](Awesome%20CLI%20Windows%20Manager.md#👉%20`tmate`)


### 👉 `tailscale`
↗ [tailscale](../../../../../CyberSecurity/Network%20(&%20Communication)%20Security/Anonymous%20&%20Private%20Networks/👻%20Tunneling%20&%20VPN%20(Virtual%20Personal%20Network)/VPN%20&%20NAT%20Implementations/VPN%20&%20NAT%20Commercial%20Products/tailscale.md)



## Network Speedtest
- [speedtest-net](https://github.com/ddsol/speedtest.net) - Test internet connection speed and ping using speedtest.net.
- [speed-test](https://github.com/sindresorhus/speed-test) - `speedtest-net` wrapper with different UI.
- [speedtest-cli](https://github.com/sivel/speedtest-cli) - Test internet bandwidth using speedtest.net.
- [bandwhich](https://github.com/imsnif/bandwhich) - Track bandwidth utilization by process.
