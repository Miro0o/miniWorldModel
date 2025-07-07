# Preparation
##  Node.js
> along with `node` is its package manager [npm](https://www.npmjs.com/package/npm)
- Node : https://nodejs.org/en/
- npm: https://www.npmjs.com

### Node Installation

First, since i found out that i had installed an old version of node.js (v14), so i deleted all the node & npm by [this bolg](https://www.jb51.net/article/223570.htm).
```bash
 sudo rm -rf /usr/local/lib/node /usr/local/lib/node_modules 
/var/db/receipts/org.nodejs.*
 sudo rm -rf /usr/local/include/node /Users/$USER/.npm 
 sudo rm /usr/local/bin/node 
 sudo rm /usr/local/share/man/man1/node.1
 sudo rm /usr/local/lib/dtrace/node.d

```

Then i found out that i also had installed another version of node.js (v16) on `brew`, which is newer than the previous one that i deleted but still not the latest version, so i deleted it from `brew` , and redownloaded the latest version of node.js (v17).

however, this time though i successfully installed the node.js -17, i can't access it from CLI, which prompted `not found such file or directory`.

```bash
zsh: command not found: node
```

so i checked out on stackoverflow, and it gave the following super useful answers: 
https://stackoverflow.com/a/11237049/16542494
https://stackoverflow.com/a/32942618/16542494

it seems that i used too many `sudo` command that the execute permission of the file `/usr/local` is changed to ONLY accessible to root user. (? not sure)

so the solution it gives is to change back the permission of the folder, by 
``` bash
sudo chown -R $(whoami) /usr/local
```

another answer suggests use 
```bash
sudo chown -R $(whoami) $(brew --prefix)/*
```

however i only tried the former, and since it surprisingly worked out i did't try the other one. 

P.S. 
mac node安装路径以及npm路径: 

1.  homebrew路径 `/usr/local/HomeBrew`
2.  通过homebrew安装的软件的文件夹 `/usr/local/Cellar/`
3.  npm安装包存放的位置 `/usr/local/lib/node_modules/npm`
4.  npm全局下载模板的存放位置 `/usr/local/lib/node_modules/npm/node_module`



## Config Sublime Text

easy one ... 
```shell
{ 

 "cmd": ["/usr/local/bin/node", "$file"], 

 "selector": "source.js" 

}
```



