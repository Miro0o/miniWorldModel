# Troubleshoting

[TOC]



## 👉 after running `brew doctor`...
#homebrew 

```shell
Warning:Unbrewed '.pc' files were found in /usr/local/lib/pkgconfig.
If you didn't put them there on purpose they could cause problems when
building Homebrew formulae, and may need to be deleted.

Unexpected '.pc' files:
  /usr/local/lib/pkgconfig/tcl.pc
  /usr/local/lib/pkgconfig/tk.pc

Warning: Unbrewed static libraries were found in /usr/local/lib.
If you didn't put them there on purpose they could cause problems when
building Homebrew formulae, and may need to be deleted.

Unexpected static libraries:
  /usr/local/lib/libtclstub8.6.a
  /usr/local/lib/libtkstub8.6.a

Warning: Broken symlinks were found. Remove them with `brew cleanup`:
  /usr/local/bin/subl
  
```

[Solusion #1](https://apple.stackexchange.com/questions/125853/homebrew-doctor-warnings-requesting-library-deletions)

+ it says that the `.pc` file belongs to R studio(?). and the workaround is as given.



## 👉 brew 下载中断
#homebrew 

for instance, when i was downloading `php@8.0` from brew: 

```shell
curl: (35) error:02FFF036:system library:func(4095):Connection reset by peer

Error: php@8.0: Failed to download resource "sqlite_bottle_manifest"
Download failed: https://ghcr.io/v2/homebrew/core/sqlite/manifests/3.38.2
```

one solution here is to download the required file manually and replace it form the brew cache folder to cheat brew to continue downloading.

[brew 下载中断]: https://blog.csdn.net/lhp171302512/article/details/122810869https://blog.csdn.net/lhp171302512/article/details/122810869



## 👉 Reset Homebrew Formula
#homebrew 

The update-reset version of this command resets all formulae to be identical to the contents of their remote repositories, deleting any local changes. It is only used as a last-resort effort to fix a problem (it’s like unplugging Homebrew and plugging it back in). 

Related articles: 

1. [homebrew 安装 formula 的不同历史版本——以安装 node 为例](https://www.cnblogs.com/BlackStorm/p/homebrew-install-old-versions-take-node-for-example.html) 

2. [Another git process seems to be running in this repository](https://stackoverflow.com/questions/38004148/another-git-process-seems-to-be-running-in-this-repository) 

   ```shell
   Another git process seems to be running in this repository, e.g.
   an editor opened by 'git commit'. Please make sure all processes
   are terminated then try again. If it still fails, a git process
   may have crashed in this repository earlier:
   remove the file manually to continue.
   ```

[reset homebrew formula]: https://stackoverflow.com/questions/9369519/reset-homebrew-formula



## 👉 What is "unbound" in the `brew services list`? #129
#homebrew 

> https://github.com/Homebrew/discussions/discussions/129



## 👉 Error: Permission denied @ apply2files
#homebrew 

I got this wired error mutiple times. Still don't know what caused it and why. 

### Permission denied @ apply2files - /usr/local/lib/docker/cli-plugin

This solusion ➡️ [How to fix the Homebrew error `Permission denied @ apply2files`](https://flaviocopes.com/homebrew-fix-permission-denied-apply2files/) fixed my problem. Though still don't know what's going wrong.... 



[brew cleanup: Error: Permission denied @ apply2files #45009]: https://github.com/Homebrew/homebrew-core/issues/45009
