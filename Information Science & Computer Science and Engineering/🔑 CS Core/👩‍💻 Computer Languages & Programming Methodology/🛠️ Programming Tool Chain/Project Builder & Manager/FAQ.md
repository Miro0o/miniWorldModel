# FAQ

[TOC]


## 👉 Difference between `.jar` & `.war` ?
#java #jar #war 

These files are simply zipped files using the java jar tool. These files are created for different purposes. Here is the description of these files:

- **.jar files:** The .jar files **contain libraries, resources and accessories files** like property files.
- **.war files:** The war file **contains the web application** that can be deployed on any servlet/jsp container. The .war file **contains jsp, html, javascript** and other files necessary for the development of web applications.

**🖇 Refs**
[Difference between jar and war in Java](https://stackoverflow.com/questions/5871053/difference-between-jar-and-war-in-java) 



## 👉 Accessing anaconda channels from mamba
#mamba

Otherwise, one can switch to using Anaconda packages by adding the `anaconda` channel, as in [this answer](https://stackoverflow.com/a/68991641/570918). Just be aware that [channel mixing can be messy](https://conda-forge.org/docs/user/tipsandtricks.html#using-multiple-channels). Personally, I would just stick to Conda Forge.



[Accessing Anaconda Channels from Mamba]: https://stackoverflow.com/questions/73627956/accessing-anaconda-channels-from-mamba



## 👉 Diff between  anaconda、conda、pip、and virtualenv
#conda #pip #virtualenv #anaconda

+ **anaconda** is a release version of python. it contains any thing you need to run a python proj. and even more.
+ **conda** per se is a package manager. it can help download packages & manage/switch the environment user currently running.  
+ **pip** is simply a downloader inherently built in python.
+ **virtualenv** is simply a env-manager. it help switch through different envs user already has.

> conda ≈ pip（python包管理） + virtualenv（虚拟环境） + 非python依赖包管理
>
> 级别不一样conda和yum比较类似，可以安装很多库，不限于Python。conda是创建一个局部的环境，并安装相应包；pip是安装包到原有的环境中。
>
> pip install会检查一些依赖包并给你安装，而conda的这种检查更多，甚至会把你已有的卸了替换成他认为合适的...反正conda我只是拿来管理，安装一直是pip install...conda install真心不太喜欢乱检测乱适配....
>
> pip和conda默认源也不一样。conda有很多第三方库，pip是python官方发布库。


[What is the difference between pip and conda?]: https://stackoverflow.com/questions/20994716/what-is-the-difference-between-pip-and-conda
[Anaconda介绍、安装及使用教程]: https://www.jianshu.com/p/62f155eb6ac5
[conda install和pip install区别]: https://www.cnblogs.com/Li-JT/p/14024034.html



## 👉 To mannually update anaconda...
#anaconda 

https://zhuanlan.zhihu.com/p/121601968
```shell
conda update conda
conda update anaconda
conda update --all
```

1. 添加源：
```shell
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/pkgs/free/

conda config --add channels https://mirrors.ustc.edu.cn/anaconda/pkgs/main/
```

2. 设置启动设置好的国内镜像源
```shell 
conda config --set show_channel_urls yes
```

3. 查看是否添加上了源
```shell
conda config --show
```



## 👉 Installing non-conda packages
#anaconda #conda 

If a package is not available from conda or Anaconda.org, you may be able to find and install the package via conda-forge or with another package manager like **pip**.

**Pip** packages do not have all the features of conda packages and we recommend first trying to install any package with conda. If the package is unavailable through conda, try finding and installing it with [conda-forge](https://conda-forge.org/search.html).

If you still cannot install the package, you can try installing it with **pip**. The differences between pip and conda packages cause certain unavoidable limits in compatibility but conda works hard to be as compatible with pip as possible.

**To install a non-conda package**

1. Activate the environment where you want to put the program:
   - On Windows, in your Anaconda Prompt, run `activate myenv`.
   - On macOS and Linux, in your terminal window, run `conda activate myenv`.
2. To use **pip** to install a program such as See, in your terminal window or an Anaconda Prompt, run:
   ```
   pip install see
   ```

3. To verify the package was installed, in your terminal window or an Anaconda Prompt, run:
   ```
   conda list
   ```

   If the package is not shown, install **pip** as described in [Using pip in an environment](https://conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html#pip-in-env) and try these commands again.



[Managing packages]: https://conda.io/projects/conda/en/latest/user-guide/tasks/manage-pkgs.html?highlight=pip#id5



## 👉 Uninstall anaconda distribution
#anaconda 

When uninstalling Anaconda, you have two options: a full uninstall or a simple remove. A simple remove is fine for most users. full uninstall removes every file related to anaconda, while simple uninstall removes ONLY the anaconda software. 

**simple uninstall**
```shell
# The following are a few examples of how you may need to delete your Anaconda folder
rm -rf anaconda3
rm -rf ~/anaconda3
rm -rf ~/opt/anaconda3
```

🔗 See specific steps on https://docs.anaconda.com/anaconda/install/uninstall/

also other ways :
[conda: remove all installed packages from base/root environment](https://stackoverflow.com/questions/52830307/conda-remove-all-installed-packages-from-base-root-environment) 

```shell
# Not generally recommended!
conda install --revision 0
```



## 👉 anaconda export environment
#anaconda 

```shell
conda env export | grep -v "^prefix: " > environment.yml
## or
conda env export > environment.yml
```

Either way, the other user then runs:
```shell
conda env create -f environment.yml
```


[Anaconda export Environment file]: https://stackoverflow.com/questions/41274007/anaconda-export-environment-file
[Creating an environment from an environment.yml file]: https://conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html#id2



## 👉 Difference between `--find-links`, `--index-url`,  `extra-index-url` ?
#pip 


> I pasted the answer from stack overflow below but i still don't get where the difference is. 
>
> now i just use `extra-url-index` to refer to additional pip repo.
>
> ```shell
> [global]
> timeout = 60
> index-url = https://pypi.org/simple
> 
> [freeze]
> timeout = 10
> 
> [install]
> extra-index-url =
>     http://mirrors.aliyun.com/pypi/simple/
>     https://pypi.mirrors.ustc.edu.cn/simple/
>     http://pypi.douban.com/simple/
>     https://pypi.tuna.tsinghua.edu.cn/simple/
>     http://pypi.mirrors.ustc.edu.cn/simple/
> 
> trusted-host =
>     mirrors.aliyun.com/pypi/simple/
>     pypi.mirrors.ustc.edu.cn/simple/
>     pypi.douban.com/simple/
>     pypi.tuna.tsinghua.edu.cn/simple/
>     pypi.mirrors.ustc.edu.cn/simple/
> 
> ```


`index-url` can be considered a page with nothing but packages on it. You're telling pip to find what you want to install on that page; and that page is in a predictable format as per PEP 503. The index will only list packages it has available.

`find-links` is an array of locations to look for certain packages. You can pass it file paths, individual URLs to TAR or WHEEL files, HTML files, git repositories and more.

You can combine the two, for example, if you wanted to use some packages from your local system and others from a repository online.

You can see all the different ways pip will parse "links to packages" in the [`pip/test_index.pyp`](https://github.com/pypa/pip/blob/a9d56c7734fd465d01437d61f632749a293e7805/tests/unit/test_index.py)unit tests.

Check these examples below on official documentation of `pip install`, example [9. Install from alternative package repositories](https://pip.pypa.io/en/stable/reference/pip_install/#examples) > `Install from a local flat directory containing archives (and don’t scan indexes):`

```shell
pip install --no-index --find-links=file:///local/dir/ SomePackage
pip install --no-index --find-links=/local/dir/ SomePackage
pip install --no-index --find-links=relative/dir/ SomePackage
```


[What's the difference between --find-links and --index-url pip flags?]: https://stackoverflow.com/questions/46651454/whats-the-difference-between-find-links-and-index-url-pip-flags
[pip install -find-links search order]: https://stackoverflow.com/questions/62929339/pip-install-find-links-search-order
[Can pip.conf specify two index-url at the same time?]: https://stackoverflow.com/questions/30889494/can-pip-conf-specify-two-index-url-at-the-same-time
[index-url extra-index-url install priority order #8606]: https://github.com/pypa/pip/issues/8606



## 👉 Meaning of `[install]`, `[global]`, and alikes in configuration file?
#pip 

Idk 🤷 

TODO



## 👉 How to create a 32 bits exclusive conda env
#conda #32-bit


#TODO 


[How to create a 32 bits exclusive conda env]: https://stackoverflow.com/questions/72973933/how-to-create-a-32-bits-exclusive-conda-env



## 👉 gem/gemspec, RubyGems, rake/Rakefile, bundler/bundle and Gemfile/Gemfile.lock
#gem #ruby #bundle #bundler #gemfile #rake #Rakefile #gemspec #RubyGems

- `Ruby`是红宝石的意思，是编程语言的名字。`Ruby`语言的logo就是一颗红宝石。
	- `Ruby`是一门开源的动态编程语言，注重简洁和效率。其句法优雅，读起来自然，写起来舒适。
	- `Ruby`语言源文件的后缀是`.rb`。
- `rake`是`Ruby`语言的类`make`程序。可以在其中定义任务和源码依赖
	- rake = r(uby’s m)ake
	- 就像`make`有`Makefile`文件一样，`rake`有对应的`Rakefile`。
	- 它们都属于构建工具的范畴。
- `gem`是宝石的意思。能够很容易想到跟`Ruby`红宝石同处一系。
	- `gem`是`Ruby`的包管理系统，命令是`gem`，包名后缀也是`.gem`，类似于redhat 系的`rpm`。不过`rpm`只能安装本地包，不能联网下载。联网下载需使用`yum`或`dnf`。
	- 同样的，Debian系，包管理系统是`dpkg`，不能联网下载。联网下载需使用`apt`。
	- gemspec文件，是gem的描述文件，包含gem相关的信息，如包名、版本、简介、描述、作者、主页等。
	- 类似的，dpkg打包需要spec文件，deb打包需要control文件。
	- 这里要注意，gem对应的文件是gemspec。Gemfile和gem无关，它其实是bundler的配置文件名称。
- `bundler`是Ruby应用的外部依赖管理工具。
	- `bundle`是另一个gem，是用来解决”把bundler误拼写称bundle”的问题，唯一功能就是安装bundler，使两者同意而不报错。
	- `Gemfile`文件描述执行相关Ruby应用需要的外部依赖gem，包含源、gem名称、gem版本等信息。
	- 执行`bundler install`时，`bundler`会读取`Gemfile`文件并一次性安装所有依赖gem。


[一文搞清rake、Rakefile、gem、gemspec、bundler、bundle、Gemfile的关系]: https://cloud.tencent.com/developer/article/1596045
[👍 Ruby：版本管理 RVM、Gem 与 Bundler]: https://hoffmanzheng.github.io/2021/ruby-bundler/



## 👉 `CMake` Usages
#CMake #syntax 

- [多个文件关联](https://blog.csdn.net/weixin_41594045/article/details/90645699)
- [头文件重复引用](http://c.biancheng.net/view/7636.html)

[include_directories / target_include_directories](https://stackoverflow.com/questions/31969547/what-is-the-difference-between-include-directories-and-target-include-directorie) : the diff between these two command is the scope designated. for `include_directories`, it doesn't specify any peculiar target, so it applies to all targets in the current directory; whereas `target_link_directory` specify the target of the directory to link to, so this designated directory only applies for the designated target. However idk what the[ second answer](https://stackoverflow.com/a/40244458/16542494) means, which looks important though.  

[include vs add_subdirectory](https://stackoverflow.com/questions/49984011/cmake-include-vs-add-subdirectory-relative-header-file-path)

