# 🛠 Troubleshooting 

[TOC]



Miscs

TODO

[sharing files](https://support.apple.com/zh-cn/guide/mac-help/mh17131/mac)

[check IPv6 on local host](https://www.cnblogs.com/cuihongyu3503319/p/7422877.html)

[compress file + .DS_Store](https://blog.csdn.net/doublebaidu/article/details/121417602)



## 👉👉 AXVisualSupportAgent taking up to much memory
#macos 

This have bothered me for several times. First i found it was eating my ram a couple times, then today it seemed to cause my mac crack down for a while (i had to reboot to get things back to work) which is just putting me on the edge of my endurance. 

After a little research this process seems have something to do with the Accessibility Control on Mac, voice control and zoom function specifically. Because idk specifically the machanism of the process, i did the following according to anwsers listed at the end:

1. shut down the whole voice control system, including Siri and dictation
2. turn off zoom function (sooth image as well as it is metioned in the answser post)


[What is AXVisualSupportAgent, and why does it eat my RAM?]:https://apple.stackexchange.com/questions/400349/what-is-axvisualsupportagent-and-why-does-it-eat-my-ram
[What is AXVisualSupportAgent?]: https://www.reddit.com/r/osx/comments/d6xshv/what_is_axvisualsupportagent/?utm_source=share&utm_medium=web2x&context=3
[How do I remove "gamecontrollerd", "AXVisualSupportAgent" and "ViewBridgeAuxiliary" processes from being a passive listener on key tap events?]: https://discussions.apple.com/thread/252046047



## 👉 WindowServer Problems..
#macos #windowserver #performance #cpu #memory 

### WindowServer taking up to much CPU

> 🔗 [降低 WindowServer 的 CPU 占用](https://blog.mynook.info/post/macos-windowserver-calm-down/)
>
> 在使用 M1 Pro / M1 Max 芯片的 2021 款 Macbook 上，使用出厂系统（macOS Monterey）有时也可轻松重现 WindowServer 高CPU占用率的问题；在少数情况下，WindowServer 甚至会长时间占满单个性能核心（在 `top` 命令或活动监视器中显示为 CPU 100%）。
>
> 其原因似乎是 Google Chrome 浏览器自带的一个更新组件 [Keystone 触发了 macOS 内部的某种 bug](https://chromeisbad.com/)。有很多其他用户也都发现了这两者间的关联。触发这个问题并不要求 Chrome 正在运行，部分用户仅仅是安装 Chrome 就可轻易重现。
>
> 目前可行的解决方案仅有**完全卸载** Chrome 浏览器。你可以转为使用自带的 Safari 浏览器（在观看视频时拥有更高的效能，更加省电），或者使用其他基于 Chromium 的浏览器（包括但不限于 Microsoft Edge / Vivaldi / Brave 等）。卸载可使用 CleanMyMac X完成，或遵照 [Chrome is Bad](https://chromeisbad.com/) 网站上的操作步骤。仅从「应用程序」目录中删除 Chrome.app 可能并不足以解决问题。
>
>
> 更多内容查看原文链接。

**What is WindowServer on MAC**
[WindowServer on Mac](https://iboysoft.com/wiki/windowserver-mac.html) is responsible for window management. It serves as a connection between your applications and your display. It reflects the application's behavior on your screen, which means whatever you want the application to do, WindowServer demonstrates the graphics that you see on the display. 

In another word, **whatever you see on your screen, was put there by the WindowServer process**. Every time you launch an app, open a new window, or play a game, WindowServer is actively redrawing your screen.

The WindowServer process gets activated the moment you log into your Mac, and it will stop running once you log out. Since it is a core macOS process, this means that it plays an important role in the system, and force-killing WindowServer will result in some serious consequences.

**Why WindowServer taking high CPU**
As we've said, WindowServer draws all the graphical elements and keeps track of all the changes for window positioning, desktop icons, fonts, Spaces, animations, visual effects, etc. It's also responsible for all the external displays.

Therefore, a few things can cause **WindowServer to use so many CPU cycles**. Normally, these include:

- Applications misbehaving
- Having multiple displays
- A desktop cluttered with icons (each of these has to be redrawn every time the screen contents change)
- Older Macs that are running the most recent version of macOS and struggling with some visual effects.

**Steps to improve performance**
As qutoed, the real reason behind this problem is at a high chance google chrome. Despite this, though, below lists some steps to reduce windowserver process workload.

1. Anti-virus & malicious softwraes scanning 
2. reset NVRAM/PRAM (though this step's ligitity is questionable )
3. re-install the latest macOS
4. turnoff the second prompt of the clock in menu bar
5. change the desktop backgroud to a solid color (to reduce the redering effort ??)
6. System Preferences > Accessibility > Display > Reduce transparency & Differenciate without color
7. System Preferences > Mission Control > disable Displays have separate Spaces (were no external monitor being used)



[How to Fix WindowServer High CPU on Your Mac (2022)]: https://iboysoft.com/howto/mac-windowserver-high-cpu.html

[👍 WindowServer taking up to much memory]: https://macsecurity.net/view/393-windowserver-mac

### WindowServer is taking up too much memory
I found root cause of this problem. It is Dell Display Manager app which I used to manage screens and windows. When I close this app permanently this problem never came back.


[High WindowServer memory usage]: https://discussions.apple.com/thread/253401194
[2021 Macbook Pro 14" Windowserver high memory/cpu usage.]: https://discussions.apple.com/thread/253387850



## 👉 Suspicious Login items / background itmes
#macos 

![Screenshot 2023-02-11 at 11.45.26 AM](../../../../../../../Assets/Pics/Screenshot%202023-02-11%20at%2011.45.26%20AM.png)

IDK what are these for...

TODO



## 👉 Garbled on macOS
#unsolved #macos 

**第一种乱码类型**

在网络上查了一圈，找到三个相关答案：

1.  下载的文件名总是「乱码」？这里有各平台的解决方法 ：  
    [https://sspai.com/post/44360](https://links.jianshu.com/go?to=https%3A%2F%2Fsspai.com%2Fpost%2F44360)  
    Automator 流程:  
    [https://cl.ly/2v1E3n3f1q2M](https://links.jianshu.com/go?to=https%3A%2F%2Fcl.ly%2F2v1E3n3f1q2M)
2.  Mac OS X 下文件名乱码出现的原因和解决方法：  
    [https://zzi.io/?p=275](https://links.jianshu.com/go?to=https%3A%2F%2Fzzi.io%2F%3Fp%3D275)
3.  预组字符：  
    [https://zh.wikipedia.org/wiki/预组字符](https://links.jianshu.com/go?to=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2F%25E9%25A2%2584%25E7%25BB%2584%25E5%25AD%2597%25E7%25AC%25A6)

https://www.jianshu.com/p/8b3de75f2658



## 👉  Git is not working after macOS Update (xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools)
#git #macos 

In my case i entered following:

```shell
xcode-select --install
```

And follow the prompt. Everything Done!

**More info:**

[Install Xcode Command Line Tools]: https://mac.install.guide/commandlinetools/index.html

[👍 Git is not working after macOS Update (xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools)]: https://stackoverflow.com/questions/52522565/git-is-not-working-after-macos-update-xcrun-error-invalid-active-developer-pa



## 👉 Safari opening new tabs slow
#safari #macos 


> 🔗 https://www.reddit.com/r/MacOS/comments/e316xk/slow_new_tab_in_safari_13/?utm_source=share&utm_medium=web2x&context=3

I solved this by making a new tab or new page open 'Empty Page' - from Sarari--> Preferences --> General menu. I think I had a lot of favourites and when a new tab opened with 'Favourites', that really was slowing things down. Opening with 'Empty Page' made it lightning fast.

I previously tried other things like deleting cache, preferences, etc. and that didn't work for me.

fyi [Viza-](https://www.reddit.com/u/Viza-)



## 👉 mtlcompilerservice
#MTLCompilerService #macos 

MTL Compiler Service, better listed as MTLCompilerService, is a compiler for metal shaders, that can pass information directly to the GPU. It was released in iOS 8 as an alternative to using OpenGL. There’s a variety of performance reasons for the switch, though Apple fully supports use of both currently (with Metal being their preferred route).

Basically it’s what runs between your application and your GPU/Video Card to speed up graphics processing and makes things prettier.


[What is MTL Compiler Service]: https://discussions.apple.com/thread/251545666

[My activity lists a lot of processes. Is it normal?]: https://apple.stackexchange.com/a/352483



## 👉 "Will Damage Your Computer” / "macOS cannot verify the source of the software"
#macos #malware #gatekeeper #application_download

- right-click the application
- get info
- general 
- override malware protection

[Fix the “Will Damage Your Computer” Prompt on Mac: Tips and Tricks]: https://cleanerone.trendmicro.com/blog/fix-will-damage-your-computer-prompt-on-mac/

1. Override Malware Protection
2. Use Terminal
3. Disable MacOS Gatekeeper
4. Remove Malware

[Safely open apps on your Mac]: https://support.apple.com/en-us/102445


### 👉 File Damaged / Third-party Application Download

苹果系统有一个 GateKeeper 保护机制。从互联网上下载来的文件，会被自动打上 com.apple.quarantine 标志，我们可以理解为 "免疫隔离"。系统根据这个附加属性对这个文件作出限制。 随着版本不同，MacOS 对 com.apple.quarantine 的限制越来越严格，在较新 的 MacOS 中，会直接提示 "映像损坏" 或 "应用损坏" 这类很激进的策略。 我们可以通过手动移除该选项来解决此问题，在 Terminal 中执行

`sudo xattr -r -d com.apple.quarantine /Applications/Yakit.app`

即可

[yak 下载安装与更新配置]: https://yaklang.io/products/download_and_install#macos-安装问题
