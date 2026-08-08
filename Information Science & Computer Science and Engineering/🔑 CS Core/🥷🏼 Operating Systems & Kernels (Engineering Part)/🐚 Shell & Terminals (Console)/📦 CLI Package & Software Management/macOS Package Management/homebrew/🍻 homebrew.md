# Homebrew

[TOC]



## Res
🏠 https://brew.sh
📄 https://docs.brew.sh/


### Tutorials
🔗 [程序员 Homebrew 使用指北](https://sspai.com/post/56009)

🔗 [Anonymous Aggregate User Behaviour Analytics](https://docs.brew.sh/Analytics)

🦯 quick guide: https://sspai.com/post/56009


### 🪩 Image Sources
+ USTC : 
  + https://mirrors.ustc.edu.cn/help/brew.git.html?highlight=homebrew



## Intro
`Homebrew` is a free and open-source software package management system that simplifies the installation of software on Apple's operating system, macOS, as well as Linux. The name is intended to suggest the idea of building software on the Mac depending on the user's taste.


### 👮🏽 Usage & Terms
![Pasted image 20211103212800](../../../../../../../../../Assets/Pics/Pasted%20image%2020211103212800.png)

#### 1️⃣ [Taps](https://docs.brew.sh/Taps)
Taps allow homebrew manage third-party repo on host.


#### 2️⃣ [formulae & casks](https://stackoverflow.com/questions/46403937/what-is-the-difference-between-brew-install-xxx-and-brew-cask-install-xxx) (diff between `brew install` & `brew cask install`)

**formulae**: the CLI software homebrew managed
**casks**: the GUI software homebrew managed
**cellar**: the folder homebrew put the downloaded file 
**tap**: a source of formulae.

[cask, cellar, tap]: https://stackoverflow.com/a/64787434/16542494



## 🍻 `Homebrew` Basic Usages
### 🍔 Installation
1. [installing command line tools on mac](https://www.freecodecamp.org/news/install-xcode-command-line-tools/)
	+ 🤔 [[../../../../../../CyberSecurity/Network (& Communication) Security/Anonymous & Private Networks/Proxy Technology (& Bypassing GFW)/Proxy Technology (& Bypassing GFW)|using proxy]] to download form official web
	
2.  go to [homebrew](https://docs.brew.sh/Installation), run command code.


### 🚮 Uninstall Pcks
#### `brew autoremove`
Ref --> [Uninstall / remove a Homebrew package including all its dependencies](https://stackoverflow.com/questions/7323261/uninstall-remove-a-homebrew-package-including-all-its-dependencies)

#### `brew cleanup`
By default, `homebrew` keeps copy file of already installed formulae downloads files around "*In case something goes wrong and you have to reinstall*". 

The [cleanup](https://github.com/Homebrew/brew/blob/master/docs/FAQ.md#how-do-i-uninstall-old-versions-of-a-formula) (`brew cleanup`) command will remove outdated installed package versions. To affect a particular package/formula, you may supply a formula name like so: `brew cleanup $FORMULA`. To simulate cleanup, i.e. see what would be removed, you may use the `-n` option: `brew cleanup -n`.

Add following alias in shell config file to simplify process:
```shell
alias brewski='brew update && brew upgrade && brew cleanup; brew doctor'
```

I end with `brew doctor` to make sure all packages are correctly symlinked, e.g., `awscli` seems to have a problem with this on the regular so I constantly have to unlink/relink. Hope this helps

> ⚠ `brew cleanup` dose not clean files in `~/Library/Caches/Homebrew`. 
>
> See this reason at ↗️ [FAQ /👉 brew cleanup doesn't clean `~/Library/Caches/Homebrew` folder](../../FAQ.md#👉%20brew%20cleanup%20doesn't%20clean%20`~/Library/Caches/Homebrew`%20folder)

> 👉 [从零开始，编写一个 HomeBrew 缓存清理脚本](https://sspai.com/post/65842)


🔗
[How can I remove outdated installed versions of Homebrew packages?]: https://superuser.com/questions/975701/how-can-i-remove-outdated-installed-versions-of-homebrew-packages



## Ref
[git clone error: RPC failed; curl 56 OpenSSL SSL_read: SSL_ERROR_SYSCALL, errno 10054]: https://stackoverflow.com/questions/46232906/git-clone-error-rpc-failed-curl-56-openssl-ssl-read-ssl-error-syscall-errno 

[brew的各种疑问？ - 知乎]: https://www.zhihu.com/question/382533848

[Install Homebrew · Mac]: https://mac.install.guide/homebrew/8.html
