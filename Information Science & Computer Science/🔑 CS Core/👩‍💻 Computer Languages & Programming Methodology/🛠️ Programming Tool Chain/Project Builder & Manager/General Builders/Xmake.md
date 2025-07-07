# Xmake

[TOC]



## Res
🏠 https://xmake.io/



## Intro
Xmake is a lightweight, cross-platform build utility based on Lua.

It is very lightweight and has no dependencies due to the integration of the Lua runtime.

It uses xmake.lua to maintain project builds with a very simple and readable syntax.

We can use it to build projects directly like Make/Ninja or generate project files like CMake/Meson. It also has a built-in package management system to help users integrate C/C++ dependencies.

``` shell
Xmake = Build backend + Project Generator + Package Manager + [Remote|Distributed] Build + Cache
```

Although not very precise, we can still understand Xmake in the following way:

``` shell
Xmake ≈ Make/Ninja + CMake/Meson + Vcpkg/Conan + distcc + ccache/sccache
```

If you want to know more, please refer to: [Documents](https://xmake.io/#/getting_started), [Github](https://github.com/xmake-io/xmake) and [Gitee](https://gitee.com/tboox/xmake). You are also welcome to join our [community](https://xmake.io/#/about/contact).


## Ref
[LCPU x USTCLUG 联合沙龙：Xmake 和墨干编辑器]: https://lug.ustc.edu.cn/news/2022/10/gathering-xmake/

