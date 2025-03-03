# pip

[TOC]



## Res
🏠 https://pypi.org/project/pip/


### Related Topcis


### Other Resources



## Intro
pip is the [package installer](https://packaging.python.org/guides/tool-recommendations/) for Python. You can use pip to install packages from the [Python Package Index](https://pypi.org/) and other indexes.

Please take a look at our documentation for how to install and use pip:
- [Installation](https://pip.pypa.io/en/stable/installation/)
- 📂 [Usage](https://pip.pypa.io/en/stable/)

We release updates regularly, with a new version every 3 months. Find more details in our documentation:
- [Release notes](https://pip.pypa.io/en/stable/news.html)
- [Release process](https://pip.pypa.io/en/latest/development/release-process/)

> ⚠  It is not recommended mixing pip and conda. Reasons can be seen at ↗ [FAQ](../../../FAQ.md)



## Usage
### Install a package
```shell
## use as a module from python. This requires python is listed in $PATH
python -m pip install sampleproject

## use pip directly. This requires pip (or python package directory) is listed in $PATH
pip install sampleproject

## Install a package from GitHub
python -m pip install git+https://github.com/pypa/sampleproject.git@main
pip install git+https://github.com/pypa/sampleproject.git@main

## Install a package from a distribution file
python -m pip install sampleproject-1.0.tar.gz
python -m pip install sampleproject-1.0-py3-none-any.whl
```


### Change Repo
```shell
pip config [edit,debug, edit, get, list, set, unset]


## ------------------ inside `pip config edit` file ------------------
[global]
find-links =
    http://download.example.com

[install]
find-links =
    http://mirror1.example.com
    http://mirror2.example.com

trusted-host =
    mirror1.example.com
    mirror2.example.com
```


- 阿里云 http://mirrors.aliyun.com/pypi/simple/ 
- 中国科技大学 https://pypi.mirrors.ustc.edu.cn/simple/ 
- 豆瓣(douban) http://pypi.douban.com/simple/ 
- 清华大学 https://pypi.tuna.tsinghua.edu.cn/simple/ 
- 中国科学技术大学 http://pypi.mirrors.ustc.edu.cn/simple/
  ————————————————
  版权声明：本文为CSDN博主「Saggitarxm」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
  原文链接：https://blog.csdn.net/xuezhangjun0121/article/details/81664260


### Others
```shell
pip list
pip freeze

python2 -m pip list
python3 -m pip list

pip show [packge_name]
```



## Ref
