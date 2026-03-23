# RYU

<img src="../../../../../../../../Assets/Pics/LogoSet02.png" alt="Ryu Logo" style="zoom:50%;" />

[TOC]



## Intro

### WHAT'S RYU?

**Ryu** is a component-based software defined networking framework. Ryu provides software components with well defined API that make it easy for developers to create new network management and control applications. Ryu supports various protocols for managing network devices, such as [**OpenFlow**](https://www.opennetworking.org/), **Netconf**, **OF-config**, etc. About OpenFlow, Ryu supports fully 1.0, 1.2, 1.3, 1.4, 1.5 and Nicira Extensions. All of the code is freely available under the Apache 2.0 license.

Ryu means "flow" in Japanese. Ryu is pronounced ["ree-yooh"](https://commons.wikimedia.org/wiki/File:Ja-Ryu.oga).

 

### INSTALLATION IS A SNAP

Using **pip** command is the easiest option:

```shell
pip install ryu
```

If you prefer to install from the source code:

```shell
git clone git://github.com/osrg/ryu.git % cd ryu; python ./setup.py install 
```

Do you want to know how to write Ryu applications? Let's start with [our tutorial](http://ryu.readthedocs.io/en/latest/getting_started.html).



## RESOURCES

- [Documentation](https://ryu-sdn.org/resources.html#documentation)
  - [RYU SDN Framework v1.0.0](https://osrg.github.io/ryu-book/en/html/index.html)

- [Wiki](https://ryu-sdn.org/resources.html#wiki)
- [Books](https://ryu-sdn.org/resources.html#books)
- [Presentations](https://ryu-sdn.org/resources.html#presentations)



【SDN系列学习课程-OpenFlow-Ryu-Mininet】 https://www.bilibili.com/video/BV1ft4y1a7ip/?p=22&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d



### COMMUNITY

- [Mailing list](https://ryu-sdn.org/community.html#ml)
- [Code](https://ryu-sdn.org/community.html#code)



### CERTIFICATION

- [OpenFlow Switches](https://ryu-sdn.org/certification.html#ofs)



## FAQ

### 👉 [Gunicorn ImportError: cannot import name 'ALREADY_HANDLED' from 'eventlet.wsgi' in docker](https://stackoverflow.com/questions/67409452/gunicorn-importerror-cannot-import-name-already-handled-from-eventlet-wsgi)

Installing older version of eventlet solved the problem: `pip install eventlet==0.30.2`

------

EDIT:

you can use the newer versions like this: `pip install eventlet==0.33.0 https://github.com/benoitc/gunicorn/archive/refs/heads/master.zip#egg=gunicorn==20.1.0`

see: https://github.com/benoitc/gunicorn/pull/2581#issuecomment-994198667

thank you @jmunsch



### 👉 [UnicodeDecodeError: 'utf8' codec can't decode byte 0xa5 in position 0: invalid start byte](https://stackoverflow.com/questions/22216076/unicodedecodeerror-utf8-codec-cant-decode-byte-0xa5-in-position-0-invalid-s)

❌ Flase Attempt

The error is because there is some non-ascii character in the dictionary and it can't be encoded/decoded. One simple way to avoid this error is to encode such strings with `encode()`function as follows (if `a` is the string with non-ascii character):

```python
a.encode('utf-8').strip()
```



TBD...

This link might be helpful: 

[OpenFlow v1.0 Messages and Structures](https://ryu.readthedocs.io/en/latest/ofproto_v1_0_ref.html)



## Ref

[Install Mininet and Ryu Controller]: https://ernie55ernie.github.io/sdn/2019/03/25/install-mininet-and-ryu-controller.html
[get started with OpenFlow from system setup]: https://stackoverflow.com/a/37998066/16542494
[A Brief Tutorial on SDN using Ryu Controller]: https://smfarjad.github.io/A-Brief-Tutorial-on-SDN-using-Ryu-Controller/#4-working
[SDN系列学习课程-OpenFlow-Ryu-Mininet]: https://www.bilibili.com/video/BV1ft4y1a7ip/?p=22&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

