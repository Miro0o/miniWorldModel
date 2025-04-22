# Yarn

[TOC]



## Res
### Officials
**Classic, Yarn1.x**
🏠 https://classic.yarnpkg.com/en/
🚧 https://github.com/yarnpkg/yarn
> This repository holds the sources for Yarn 1.x (latest version at the time of this writing being 1.22). New releases (at this time the 3.2.3, although we're currently working on our next major) are tracked on the [yarnpkg/berry](https://github.com/yarnpkg/berry) repository, this one here being mostly kept for historical purposes and the occasional hotfix we publish to make the migration from 1.x to later releases easier.
> 
> If you hit bugs or issues with Yarn 1.x, we strongly suggest you [migrate](https://yarnpkg.com/getting-started/migration) to the latest release - at this point they have been maintained longer than 1.x, and many classes of problems have already been addressed there. By using the [`nodeLinker` setting](https://yarnpkg.com/configuration/yarnrc#nodeLinker) you'll also have the choice of how you want to install your packages: node_modules like npm, symlinks like pnpm, or manifest files via [Yarn PnP](https://yarnpkg.com/features/pnp).

📂 https://classic.yarnpkg.com/en/docs


**Modern, Yarn4.x (latest)**
🏠 https://yarnpkg.com
🚧 https://github.com/yarnpkg/berry
📂 https://yarnpkg.com/getting-started



## Intro
### Classic, Yarn1.x
Yarn is an established open-source package manager used to manage dependencies in JavaScript projects. It assists with the process of installing, updating, configuring, and removing packages dependencies, eventually helping you reach your objectives faster with fewer distractions.


## Modern, Yarn4.x (Latest)
> ⚠️ The preferred way to manage Yarn is **by-project** and through [Corepack](https://nodejs.org/dist/latest/docs/api/corepack.html), a tool shipped by default with Node.js. **Modern releases of Yarn aren't meant to be installed globally, or from npm.**

Yarn is a modern package manager split into various packages. Its novel architecture allows to do things currently impossible with existing solutions:
- Yarn supports [plugins](https://yarnpkg.com/features/plugins); adding a plugin is as simple as adding it into your repository
- Yarn supports Node by default but isn't limited to it - plugins can add support for other languages
- Yarn supports [workspaces](https://yarnpkg.com/features/workspaces) natively, and its CLI takes advantage of that
- Yarn uses a bash-like [portable shell](https://github.com/yarnpkg/berry/tree/master/packages/yarnpkg-shell#yarnpkgshell) to make package scripts portable across of Windows, Linux, and macOS
- Yarn is first and foremost a [Node API](https://yarnpkg.com/api/) that can be used programmatically (via [@yarnpkg/core](https://github.com/yarnpkg/berry/blob/master/packages/yarnpkg-core))
- Yarn is written in [TypeScript](https://www.typescriptlang.org/) and is fully type-checked



## Usage
### Yarn Classic
#### 👉 `yarn global`
🔗 https://classic.yarnpkg.com/en/docs/cli/global

`yarn global bin` will output the location where Yarn will install symlinks to your installed executables. You can configure the base location with `yarn config set prefix <filepath>`. For example, `yarn config set prefix ~/.yarn` will ensure all global packages will have their executables installed to `~/.yarn/bin`.

`yarn global dir` will print the output of the global installation folder that houses the global `node_modules`. By default that will be: `~/.config/yarn/global`.


### Yarn Modern



## Configuration
### Yarn Classic


### Yarn Modern


## Ref
[yarn配置]: https://juejin.cn/post/7125695269689098248
[yarn使用教程]: https://www.jianshu.com/p/b306a19a64ee
