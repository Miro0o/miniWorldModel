# FAQ

[TOC]



## 👉 firewalld & iptables & ebtables & UFW & others
#firewalld #iptables #ebtables #ufw #firewall #linux #network_security 


### `Netfilter` 🆚 `Iptables` 🆚 `UFW`
UFW and Iptables are related because UFW is essentially a simpler interface for managing Iptables. The main difference between them is, how much control you want over your firewall configuration:
- **Netfilter**: The lowest level, making pizza from scratch at home. Requires the most knowledge but gives you the most control.
- **Iptables**: A layer on top of Netfilter. It's like buying a pizza kit that you cook yourself. You have less control, but it's easier to manage.
- **UFW**: Further simplification, similar to ordering a pizza for delivery. You have even less control, but it's even easier to use.
- **Predefined setups**: The simplest option, it's like dining out at a restaurant. You have minimal control, but it's the easiest to use. The 'better' choice depends on your needs and comfort level with managing firewall rules.

---
**part I:** i found a pretty decent and easy to understand article for the UFW: [Understanding UFW](https://hackernoon.com/understanding-ufw-8d70d5d8f9d2) (on HackerNoon)

**part II:** this guide shows you the slight deeper using of iptables: [The Beginner’s Guide to iptables, the Linux Firewall](https://www.howtogeek.com/177621/the-beginners-guide-to-iptables-the-linux-firewall/) (on HowToGeek)

**part III:** here are informations about the packetfilter, this is the basis of many firewall solutions [A Deep Dive into Iptables and Netfilter Architecture](https://www.digitalocean.com/community/tutorials/a-deep-dive-into-iptables-and-netfilter-architecture) (on DigitalOcean)

the parts are based on hierarchy, top is dependant on the lower ones.

---
**Further Reading**
1. **UFW:** This **[HackerNoon article](https://hackernoon.com/understanding-ufw-8d70d5d8f9d2)** provides a good overview of UFW.
2. **Iptables:** This **[HowToGeek guide](https://www.howtogeek.com/177621/the-beginners-guide-to-iptables-the-linux-firewall/)** goes a bit deeper into using Iptables.
3. **Netfilter:** This **[DigitalOcean article](https://www.digitalocean.com/community/tutorials/a-deep-dive-into-iptables-and-netfilter-architecture)** dives deep into the architecture of Iptables and Netfilter, which is the foundation for many firewall solutions.


[👍 Ufw and Iptables. Which is better and why? | StackExchange + serverFault]: https://serverfault.com/a/1014625/948999


### `firewalld` 🆚 `iptables`

在RHEL7里有几种防火墙共存：firewalld、iptables、ebtables，默认是使用firewalld来管理netfilter子系统，不过底层调用的命令仍然是iptables等。

firewalld跟iptables比起来至少有两大好处：
1、firewalld可以动态修改单条规则，而不需要像iptables那样，在修改了规则后必须得全部刷新才可以生效；

2、firewalld在使用上要比iptables人性化很多，即使不明白“五张表五条链”而且对TCP/IP协议也不理解也可以实现大部分功能。

firewalld跟iptables比起来，不好的地方是每个服务都需要去设置才能放行，因为默认是拒绝。而iptables里默认是每个服务是允许，需要拒绝的才去限制。

firewalld自身并不具备防火墙的功能，而是和iptables一样需要通过内核的netfilter来实现，也就是说firewalld和 iptables一样，他们的作用都是用于维护规则，而真正使用规则干活的是内核的netfilter，只不过firewalld和iptables的结构以及使用方法不一样罢了。


[👍 firewalld和iptables区别]: https://www.cnblogs.com/mefj/p/13328360.html


---
As `firewalld` is based on XML configuration, some might think that it's easier to configure the firewall in a programmatic manner. This can be achieved by `iptables` just as well, but with a different way, which is not XML. If you are already familiar with the way `iptables` works, why would you migrate all your configuration to `firewalld`?

If you consider your largest `iptables` firewall rule set, how often do you think you would benefit from the dynamic aspect of `firewalld`? In most cases the performance of `iptables`is never the issue. In most cases where the performance of `iptables` is an issue can be fixed by using `ipset` based source/destination IP sets.

It is a different debate whether or not you should use NetworkManager.


[👍 firewalld vs iptables: when to use which | stackexchange]: https://serverfault.com/a/671975



## 👉 change resolutions on ubuntu
#ubuntu #resolution #xrandr #display #qemu #virt-manager


To list the available resolution rates: ( The `*` marks the screen resolution currently used.)
```
$ xrandr -q

SZ: Pixels Physical Refresh
0 1024 x 768 ( 271mm x 201mm ) 75 70 60
1 800 x 600 ( 271mm x 201mm ) 85 75 72 60 56
2 640 x 480 ( 271mm x 201mm ) 85 75 72 60
*3 832 x 624 ( 271mm x 201mm ) *74
4 720 x 400 ( 271mm x 201mm ) 85
5 640 x 400 ( 271mm x 201mm ) 85
6 640 x 350 ( 271mm x 201mm ) 85
```
> **`xrandr -q | grep "connected primary"`**
> 
> This command shows all connected devices--feel free to not grep to see the list. `HDMI-0 connected primary 1920x1080+0+0` means that my primary display is called "HDMI-0". Use that in the following command:

To change it to one of the supported resolutions from the list above simply run the command:
```
xrandr -s 800x600
```

Sometimes when there are a lot of refresh rates (the numbers to the right in the above sample results from `xrandr -q`), you need to specify the refresh rate:
```
xrandr -s 800x600 -r 85
```

If you have multiple outputs on your board, or the device is not reacting, then you can extend the above line with output. The value for the output is still found with `xrandr -q`, in my case `HDMI-0`. To enable a specific desired resolution or let system autometically choose one:
```
xrandr -s 800x600 -r 85 --output HDMI-0
xrandr --output HDMI-0 --auto
```

[How do I change the screen resolution using Ubuntu command line?]: https://askubuntu.com/questions/281509/how-do-i-change-the-screen-resolution-using-ubuntu-command-line

[How to increase the visualized screen resolution on QEMU / KVM?]: https://superuser.com/questions/132322/how-to-increase-the-visualized-screen-resolution-on-qemu-kvm

- Add the `-vga std` flag to the command line
- `-vga virtio`
- Use the `vmvga` Video Card (virt-manager)

[How to increase screen resolution for macOS-Simple-KVM]: https://github.com/foxlet/macOS-Simple-KVM/blob/master/docs/guide-screen-resolution.md#how-to-increase-screen-resolution-for-macos-simple-kvm



## 👉 Difference between `systemd-sysctl` /`sysctl` /`systemctl`
#linux #cli #sysctl #systemd #systemctl #systemd-sysctl

[`sysctl`](https://manpages.debian.org/bullseye/procps/sysctl.8) is an administrative tool which provides access to values in the `/proc/sys` virtual file system (see also [How to set and understand fs.notify.max_user_watches](https://unix.stackexchange.com/q/444998/86440)). You can use it to see the current value of a setting:
```
sysctl fs.inotify.max_user_watches
```

and to change the value:
```
sysctl fs.inotify.max_user_watches=524288
```

[`systemd-sysctl`](https://manpages.debian.org/bullseye/systemd/systemd-sysctl.8) is a systemd service which loads `sysctl` settings from a number of files during boot. You shouldn’t ever need to invoke or manipulate it directly.

The two tools are complementary: `sysctl` allows you to try a setting temporarily (the changes it makes don’t persist over reboots), and once you’ve decided on an appropriate value, writing it to a file in `/etc/sysctl.d` will ensure that `systemd-sysctl` sets it during boot. Again, see [How to set and understand fs.notify.max_user_watches](https://unix.stackexchange.com/q/444998/86440).

[Diffence between `systemd-sysctl` and `sysctl`]: https://unix.stackexchange.com/questions/709586/diffence-between-systemd-sysctl-and-sysctlA

---
/etc/init.d is part of the old SyS init process and remains in systemd initialization based systems for backwards compatibility. [https://en.wikipedia.org/wiki/Init](https://en.wikipedia.org/wiki/Init)  
  
sysctl is a utility to set kernel parameters both real time (/proc/sys) and at boot up via sysctl.conf.  
  
systemd is the newer initialization process.  
  
systemctl is the utility among other things that starts/stops and enables services for systemd based systems.

[「SOLVED」 Systemctl - sysctl - systemd ]: https://www.linuxquestions.org/questions/linux-server-73/systemctl-sysctl-systemd-4175729121/



## 👉 Difference between `ipconfig` /`ifconfig` /`ip`?
#ipconfig #ifconfig #linux #network #ip 



[Difference between ifconfig and ipconfig? | StackExchange]: https://unix.stackexchange.com/a/39502/541298

**[ipconfig](http://en.wikipedia.org/wiki/Ipconfig)** (**i**nternet **p**rotocol **config**uration) in **Microsoft Windows** is a console application that displays all current TCP/IP network configuration values and can modify Dynamic Host Configuration Protocol DHCP and Domain Name System DNS settings.

**[ifconfig](http://en.wikipedia.org/wiki/Ifconfig)** (short for **i**nter**f**ace **config**uration) is a system administration utility in **Unix-like**operating systems to configure, control, and query TCP/IP network interface parameters from a command line interface (CLI) or in system configuration scripts.

**[dhcpcd](http://wiki.linuxquestions.org/wiki/Dhcpcd)** is a DHCP client. It is used to obtain an IP address and other information from a dhcp server, renew the IP address lease time, and automatically configure the network interface. The program performs a similar function as dhclient.



## 👉 How to disable/enable mouse copy while keeping mouse scroll in tmux?
#tmux


1. set mouse mode to enable mouse scroll. 
2. Above setting disenables copy text. To copy text from buffer press `option` key.

A possiblly helpful tmux config :
```shell
set -g mouse on
unbind-key MouseDown2Pane
unbind-key MouseDragEnd1Pane
bind-key -n MouseDown2Pane run "tmux set-buffer \"$(xclip -o -sel primary)\"; tmux paste-buffer"
bind-key -T copy-mode MouseDragEnd1Pane send-keys -X copy-pipe-and-cancel "xclip -sel primary -i"
set -g set-clipboard external
```

 [How to disable/enable mouse copy while keeping mouse scroll in tmux?]: https://stackoverflow.com/questions/62544783/how-to-disable-mouse-copy-while-keeping-mouse-scroll-in-tmux
[Mouse mode with tmux in iTerm2]: https://jasonmurray.org/posts/2020/tmuxdebian/



## 👉 Tmux Splitting Windows /Resizing Panes
#tmux  


[💡 Split tmux window with same initial command in new tmux pane]: https://unix.stackexchange.com/questions/63838/split-tmux-window-with-same-initial-command-in-new-tmux-pane

[`#{pane_start_command}`](http://man.openbsd.org/OpenBSD-current/man1/tmux.1) is a way to access the command used to start the current pane. This is available since v1.7 (10/2012).

`bind-key S run-shell "tmux split-window \"#{pane_start_command}\""`  
is a solution for your question using `#{pane_start_command}`. (`tmux` version >= 1.9 (02/2014)).

With versions 1.7 >= X < 1.9 you can use something like this in your `~/tmux.conf` file:
```
bind-key S run-shell "tmux split-window \"$(tmux display-message -p '#{pane_start_command}')\""
```

- The substituted `display-message` command extracts `#{pane_start_command}`.
- That command is given as an argument to `tmux split-window`.

`pane_start_command` will be the empty string if the pane was started without a command string and there was no `default-command`, but that is okay because `split-window` will start a plain login shell if it is given an empty command string.



[💡 Tmux splitting a parent window with existing panes | SuperUser]: https://superuser.com/questions/643473/tmux-splitting-a-parent-window-with-existing-panes

Try this: `:splitw -v -f`

According to this description:

> The -f option creates a new pane spanning the full window height (with -h) or full window width (with -v), instead of splitting the active pane.

I guess it is still not as versitle as the "parent pane" design, but will solve many less complicated layouts easily.



[💡 Tmux: Switch the split style of two adjacent panes]: https://stackoverflow.com/questions/15439294/tmux-switch-the-split-style-of-two-adjacent-panes
```
#flipping the orientation of the current pane with the pane <arrow-way>-of

bind -n S-Up move-pane -h -t '.{up-of}'
bind -n S-Right move-pane -t '.{right-of}'
bind -n S-Left move-pane -t '.{left-of}'
bind -n S-down move-pane -h -t '.{down-of}'
```

here are my example to change the otiantation with the pane in the way of the arrow only Press Shift and Arrow-key or rebind the command how you want



[💡 How do I resize tmux pane by holding down prefix and arrow key for a while?]: https://superuser.com/questions/1560523/how-do-i-resize-tmux-pane-by-holding-down-prefix-and-arrow-key-for-a-while

By default these bindings (among others) are active:

```
bind-key -r -T prefix       M-Up              resize-pane -U 5
bind-key -r -T prefix       M-Down            resize-pane -D 5
bind-key -r -T prefix       M-Left            resize-pane -L 5
bind-key -r -T prefix       M-Right           resize-pane -R 5
bind-key -r -T prefix       C-Up              resize-pane -U
bind-key -r -T prefix       C-Down            resize-pane -D
bind-key -r -T prefix       C-Left            resize-pane -L
bind-key -r -T prefix       C-Right           resize-pane -R
```

...etc



## 👉 Set Keybindings in Byobu
#tmux  #Byobu 

You're so close! You're just missing the capitalization of "R" in M-Right and "L" in M-Left.

Just add the following to `~/.byobu/keybindings.tmux`:

```
unbind -n M-Right
unbind -n M-Left
```

And then press F5 to reload your profile.


[Disable keybindings in byobu using tmux backend | AskUbuntu]: https://askubuntu.com/a/330545


you will find these lines :
```
bind-key -n M-Left previous-window
bind-key -n M-Right next-window
```

`M` is for _Meta_, aka the _ALT key_. Example. Change the lines for :
```
bind-key -n C-Left previous-window
bind-key -n C-Right next-window
```

`C` for _Ctrl key_ (and `S` for _Shift key_).


[Modify key-bindings in Byobu]: https://stackoverflow.com/a/24250346/16542494



## 👉 `bat` cannot interpret `$()` expression in config file & cannot interpret theme name like `Sublime Snazzy` with space
#bat

I want to config `bat` to adjust theme according to macOS system light/dark themes following official docs via this commands:
```shell
alias cat="bat --theme=\$(defaults read -globalDomain AppleInterfaceStyle &> /dev/null && echo default || echo GitHub)"
```

My practice is i put following into `bat` config file located at `~/.config/bat/config`:
```shell
# Set the theme to "TwoDark"
--theme="\$(defaults read -globalDomain AppleInterfaceStyle &> /dev/null && echo 'Sublime Snazzy' || echo 'Solarized (light)')"

# Show line numbers, Git modifications and file header (but no grid)
--style="numbers,changes,header"

# Use italic text on the terminal (not supported on all terminals)
# --italic-text=always

# Use C++ syntax for Arduino .ino files
--map-syntax "*.ino:C++"
```

The problem is it seems that this `bat` config file cannot process the `$()` expression within it (which i found inexplicable). 
I also tried these expressions:
```shell
# Set the theme to "TwoDark"
--theme=$(defaults read -globalDomain AppleInterfaceStyle &> /dev/null && echo 'Sublime Snazzy' || echo 'Solarized (light)')

# Set the theme to "TwoDark"
--theme=$(defaults read -globalDomain AppleInterfaceStyle &> /dev/null && echo 'Sublime Snazzy' || echo 'Solarized (light)')
```
Then i got error report says:
```shell
error: unexpected argument '-g' found

  note: to pass '-g' as a value, use '-- -g'

Usage: bat [OPTIONS] [FILE]...
       bat <COMMAND>

For more information, try '--help'.
```

I have no clue what went wrong. So i change it to the `~/.zshrc` as official doc suggests:
```shell
alias bat="bat --theme=\$(defaults read -globalDomain AppleInterfaceStyle &> /dev/null && echo 'Sublime Snazzy' || echo 'Solarized (light)')"
```

This time the error says:
```shell
[bat warning]: Unknown theme 'Sublime', using default.
```
It can not recognize the theme 'Sublime Snazzy' even if I wrap it with `''`. (this naming with two seperate words is also stupid..)

So finally i change it to this:
```shell
alias bat="bat --theme=\$(defaults read -globalDomain AppleInterfaceStyle &> /dev/null && echo default || echo GitHub)"
```
Then no reports....


TBD..



## 👉 Tmux cannot set mouse on with command '`:set -g mouse on`'
#tmux 

TBD...



[How do I enable tmux mouse support?]: https://unix.stackexchange.com/questions/516800/how-do-i-enable-tmux-mouse-support