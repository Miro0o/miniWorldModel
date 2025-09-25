# TermShark

[TOC]



A terminal user-interface for tshark, inspired by Wireshark.


## Res
### Documentation
See the [termshark user guide](https://github.com/gcla/termshark/blob/master/docs/UserGuide.md), and my best guess at some [FAQs](https://github.com/gcla/termshark/blob/master/docs/FAQ.md). For a summary of updates, see the [ChangeLog](https://github.com/gcla/termshark/blob/master/CHANGELOG.md#changelog).


### Dependencies
Termshark depends on these open-source packages:

- [tshark](https://www.wireshark.org/docs/man-pages/tshark.html) - command-line network protocol analyzer, part of [Wireshark](https://wireshark.org/)
- [tcell](https://github.com/gdamore/tcell) - a cell based terminal handling package, inspired by termbox
- [gowid](https://github.com/gcla/gowid) - compositional terminal UI widgets, inspired by [urwid](http://urwid.org/), built on [tcell](https://github.com/gdamore/tcell)

Note that tshark is a run-time dependency, and must be in your `PATH` for termshark to function. Version 1.10.2 or higher is required (approx 2013).


### What's next? (from author, may be deprecated)
As I write this, I'm about to release termshark v2.4. Here's what might come in v2.5 and beyond:

- Built-in support for editing packet color profiles
- Expose many more of tshark's `-z` options
- HTTP statistics and Wireshark's I/O graph
- Allow the user to start reading from available interfaces once the UI has started
- Anything you raise on Github issues - let me know what features you'd like!


## Intro
### Usage
```shell
### Capturing Packages
termshark -i eth0
termshark -i eth0 -w save.pcap
termshark -i eth0 tcp
termshark -i eth0 -i eth1

### termshark prompting stored file's location
$ termshark -i eth0
Packets read from interface eth0 have been saved in /home/gcla/.cache/termshark/pcaps/eth0--2021-09-03--11-20-58.pcap

### Reading Packages
termshark -r test.pcap
termshark -r test.pcap icmp
```

More at 🔗 https://github.com/gcla/termshark/blob/master/docs/UserGuide.md#table-of-contents



## Ref

