# GUI Windowing Systems Standards & Implementations

[TOC]



## Res
### Related Topics
↗ [Awesome CLI Windows Manager](../../📌%20Awesome%20Open%20Source%20CLI%20Software/Awesome%20CLI%20Windows%20Manager.md)



## Intro
![](../../../../../../../../../Assets/Pics/Pasted%20image%2020240309162125.png)
<small>The windowing system based on the X11 protocol keeps display server and window manager as separate components. Image source from wikipedia.</small>



## GUI Windowing Managers
### 👉 `Awesomewm`
🏠 https://awesomewm.org
📂 [awesome api docs](https://awesomewm.org/apidoc/)

[download on macport](https://ports.macports.org/port/awesome/)

<iframe width="560" height="315" src="https://www.youtube.com/embed/qKtit_B7Keo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


**awesome** is a highly configurable, next generation framework window manager for X. It is very fast, extensible and licensed under the [GNU GPLv2 license](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html).

It is primarily targeted at power users, developers and any people dealing with every day computing tasks and who want to have fine-grained control on their graphical environment.


### 👉 Qtile
![Logo](../../../../../../../../../Assets/Pics/logo-3668853.png)
🏠 http://www.qtile.org
📂 [qtile/qtile](https://github.com/qtile/qtile)
📂 [qtile doc](http://docs.qtile.org/en/stable/index.html)

🍪 A full-featured, hackable tiling window manager written and configured in Python (X11 + Wayland)


### 👉 Yabai
![Banner](../../../../../../../../../Assets/Pics/banner.svg)
🏠 https://github.com/koekeishiya/yabai

yabai is a window management utility that is designed to work as an extension to the built-in window manager of macOS. yabai allows you to control your windows, spaces and displays freely using an intuitive command line interface and optionally set user-defined keyboard shortcuts using [↗ skhd](https://github.com/koekeishiya/skhd) and other third-party software.

- The [↗ yabai wiki](https://github.com/koekeishiya/yabai/wiki) has both brief and detailed installation instructions for multiple installation methods, and also explains how to uninstall yabai completely.
- Sample configuration files can be found in the [↗ examples](https://github.com/koekeishiya/yabai/tree/master/examples) directory. Refer to the [↗ documentation](https://github.com/koekeishiya/yabai/blob/master/doc/yabai.asciidoc) or the wiki for further information.
- Keyboard shortcuts can be defined with [↗ skhd](https://github.com/koekeishiya/skhd) or any other suitable software you may prefer.
- Use [↗stackline](https://github.com/AdamWagner/stackline) to visualize yabai window stacks on macOS. Works with yabai & hammerspoon.

<iframe width="560" height="315" src="https://www.youtube.com/embed/JL1lz77YbUE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


### 👉 `lemonbar`


### 👉 `i3`
🏠 https://i3wm.org

i3 is a [tiling window manager](https://en.wikipedia.org/wiki/Tiling_window_manager), completely written from scratch. The target platforms are GNU/Linux and BSD operating systems, our code is Free and Open Source Software (FOSS) under the BSD license. i3 is primarily targeted at advanced users and developers.


### 👉 `dwm`
🏠 https://dwm.suckless.org
  
dwm is a dynamic window manager for X. It manages windows in tiled, monocle and floating layouts. All of the layouts can be applied dynamically, optimising the environment for the application in use and the task performed.


### 👉 `IceWM`
🏠 https://ice-wm.org

IceWM is a window manager for the X Window System. The goal of IceWM is speed, simplicity, and not getting in the user’s way. It comes with a taskbar with pager, global and per-window keybindings and a dynamic menu system. Application windows can be managed by keyboard and mouse. Windows can be iconified to the taskbar, to the tray, to the desktop or be made hidden. They are controllable by a quick switch window (Alt+Tab) and in a window list. A handful of configurable focus models are menu-selectable. Setups with multiple monitors are supported by RandR and Xinerama. IceWM is very configurable, themeable and well documented. It includes an optional external background wallpaper manager with transparency support, a simple session manager and a system tray. IceWM is available on popular Linux distributions like Debian, Ubuntu, Arch, OpenSUSE, Gentoo, Slackware, CentOS, antiX, NixOS, and also compiles on most *BSDs.



## Ref