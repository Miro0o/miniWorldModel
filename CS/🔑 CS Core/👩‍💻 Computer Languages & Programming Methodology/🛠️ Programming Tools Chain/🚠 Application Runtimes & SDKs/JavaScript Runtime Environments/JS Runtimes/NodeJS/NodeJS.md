# NodeJS

[TOC]



Node.js® is a JavaScript runtime built on [Chrome's V8 JavaScript engine](https://v8.dev/).

🏠 https://nodejs.dev/en/
🏠 https://nodejs.org/en/

📑 Look up [NodeJS API manual](https://nodejs.org/docs/latest-v17.x/api/documentation.html)

[ECMAScript Language Specification](https://tc39.es/ecma262/)

<u>contents tbd...</u>



## 🦥 Res
### Officials
🔗 [Introduction to Node.js](https://nodejs.dev/en/learn/introduction-to-nodejs/)
📂 [NodeJS v19.2.0 Doc](https://nodejs.org/api/documentation.html)

🇨🇳 [cnodajs.org](https://cnodejs.org)
🇺🇸 [nodejs.org](https://nodejs.org/en/)


---
[aem1k](https://aem1k.com)
- author of JSFuck
```js
eval(z='p="<"+"pre>"/* **,.oq#+     ,._,** */;for(y in n="zw24l6k\
4e3t4jnt4qj24xh2 x/* **=<,m#F^    A W###q.** */42kty24wrt413n243n\
9h243pdxt41csb yz/* **#K       q##H######Am** */43iyb6k43pk7243nm\
r24".split(4)){/* **dP      cpq#q##########b,** */for(a in t=pars\
eInt(n[y],36)+/*         **p##@###YG=[#######y** */(e=x=r=[]))for\
(r=!r,i=0;t[a/*         **d#qg `*PWo##q#######D** */]>i;i+=.05)wi\
th(Math)x-= /*        **aem1k.com Q###KWR#### W[** */.05,0>cos(o=\
new Date/1e3/*      **.Q#########Md#.###OP  A@ ,** */+x/PI)&&(e[~\
~(32*sin(o)*/* **,    (W#####Xx######.P^     T %** */sin(.5+y/7))\
+60] =-~ r);/* **#y    `^TqW####P###BP**           */for(x=0;122>\
x;)p+="   *#"/* **b.        OQ####x#K**           */[e[x++]+e[x++\
]]||(S=("eval"/* **l         `X#####D  ,**       */+"(z=\'"+z.spl\
it(B = "\\\\")./*           **G####B" #**       */join(B+B).split\
(Q="\'").join(B+Q/*          **VQBP`**        */)+Q+")//m1k")[x/2\
+61*y-1]).fontcolor/*         **TP**         */(/\\w/.test(S)&&"#\
03B");document.body.innerHTML=p+=B+"\\n"}setTimeout(z)')//
```



## 📐 Moduler Norms
During the early times there are few norms for JS to be a completely standard programming language (for it was not originally designed to). How ever as it gainning popularity the need to complete its programmign standards comes to the agenda too.

💡 **In all, EMCAScript modules are the future of JavaScript.**


### CommonJS


### ES6



### Refs

reach more on  [FAQ](../../../../../Compiled%20Languages/🐝%20JavaScript-Based%20Languages/FAQ.md) .

[👍 Node Modules at War: Why CommonJS and ES Modules Can’t Get Along]:https://redfin.engineering/node-modules-at-war-why-commonjs-and-es-modules-cant-get-along-9617135eeca1
[CommonJS vs. ES modules in Node.js ]: https://blog.logrocket.com/commonjs-vs-es-modules-node-js/
[CommonJS和ES6模块的区别]: https://juejin.cn/post/6844904067651600391#heading-1
[CommonJS 和 ES6 的区别]: https://www.zhihu.com/question/62791509



## 🕶 Guides
🔗 [Introduction to Node.js](https://nodejs.dev/en/learn/introduction-to-nodejs/)

[NodeJS v19.2.0 Doc](https://nodejs.org/api/documentation.html)



### 🔨 Installation
> go to `Node.JS` download page:  *[nodejs.org/download](https://nodejs.org/en/download/)*
>
> and also remember to check out this guide:  🤯 *[Installing Node.js via package manager](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)* 



#### For `Debian` distributions:
For some unknown reasons every time i tried to download `nodejs` on `Debian` i encountered this problem: i can only get `nodejs` for version 10 and there's no `npm` attatched. And when i tried to download `npm` manually the version won't match. It was really driving me crazy. 

After goolging around i found solution: 

As instructions following the above page says, reference **[NodeSource](https://github.com/nodesource/distributions/blob/master/README.md)** for full version supported download of `nodejs`.

e.g. **Node.js LTS (v16.x)**
```shell
# Using Ubuntu
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# Using Debian, as root
curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
apt-get install -y nodejs
```



### [npm](https://www.npmjs.com)



#### Registries
🔗 https://cloud.tencent.com/developer/article/1372949

```shell
#1 change registries via config file locally or globally with '-g'
npm config set registry http://mirrors.cloud.tencent.com/npm/
npm config set registry https://registry.npmmirror.com
npm config set registry https://mirrors.huaweicloud.com/repository/npm/

#2 via cnpm
npm install -g cnpm --registry=https://registry.npmmirror.com

#3 edit ~/.npmrc
registry = https://registry.npm.taobao.org

#4 specify registry's path
npm --registry https://registry.npm.taobao.org install [name]

# via nrm
npm install -g nrm
nrm ls
## outputs:
npm -------- https://registry.npmjs.org/
  yarn ------- https://registry.yarnpkg.com/
  cnpm ------- http://r.cnpmjs.org/
  taobao ----- https://registry.npm.taobao.org/
  nj --------- https://registry.nodejitsu.com/
  npmMirror -- https://skimdb.npmjs.com/registry/
  edunpm ----- http://registry.enpmjs.org/
```

#### commands
```shell
npm config edit 
# npm config set <configfile_key> <configfile_value>
# npm config set & npm config edit both edit the same config file

#e.g. Setup npm proxy
# For HTTP:
npm config set proxy http://proxy_host:port
# For HTTPS:
# use the https proxy address if there is one
npm config set https-proxy https://proxy.company.com:8080
#else reuse the http proxy address

npm config set https-proxy http://proxy.company.com:8080
#Note: The https-proxy doesn't have https as the protocol, but http.


```

#### Scope

`npm` install packages & dependencies on different scopes. It can both manage packages locally and globally. 

For globally isntalled modules, specify `NODE_PATH` in env variable to inform node to interpret the right way.



### [CNPM](https://github.com/cnpm/cnpm)

![logo](../../../../../../../../Assets/Pics/68747470733a2f2f7261772e6769746875622e636f6d2f636e706d2f636e706d6a732e6f72672f6d61737465722f6c6f676f2e706e67.png)

Npm' Chinese substitue.



### Yarn
Yarn is a software packaging system developed in 2016 by Facebook for the Node.js JavaScript runtime environment. An alternative to the npm package manager, Yarn was created as a collaboration of Facebook, Exponent, Google, and Tilde to solve consistency, security, and performance problems with large codebases

👀 See [Yarn](../../../../Project%20Builder%20&%20Manager/🔬%20Language-Specific%20Managers/NodeJS%20Managers/Package%20Mangers/Yarn.md).



### npx



### [nvm](https://github.com/nvm-sh/nvm)
nvm is a version manager for [node.js](https://nodejs.org/en/), designed to be installed per-user, and invoked per-shell. `nvm` works on any POSIX-compliant shell (sh, dash, ksh, zsh, bash), in particular on these platforms: unix, macOS, and [windows WSL](https://github.com/nvm-sh/nvm#important-notes).





## NodeJS Linter&Formatter
🔗 [How to Set Up Linter & Formatter for Node.js](https://javascript.plainenglish.io/how-to-set-up-linter-formatter-for-node-js-d6b34c0c8be5)

1. ESLint
2. Prettier
3. Husky

#TODO 





## 🔗 Refs
1. [node.js与nvm、npm的关系]:https://juejin.cn/post/6844904013398278157
2. [JavaScript 包管理器工作原理简介]:https://developer.aliyun.com/article/226790
3. [How to Set Up Linter & Formatter for Node.js]: https://javascript.plainenglish.io/how-to-set-up-linter-formatter-for-node-js-d6b34c0c8be5
4. [Is there a way to make npm install (the command) to work behind proxy?]:https://stackoverflow.com/questions/7559648/is-there-a-way-to-make-npm-install-the-command-to-work-behind-proxy