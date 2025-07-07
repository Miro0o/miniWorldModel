# Troubleshooting

[TOC]



## 👉 oh-my-zsh parse error near `>&' 
#oh-my-zsh #shell #zsh #config 




## 👉 ohmyzsh: (eval):43: defining function based on alias `xxx`
#oh-my-zsh #shell-script #zsh #config 


👉 **TL; DR**
ohmyzsh的配置文件里给某个 xxx 定义了一个alias yyy，你在后面又定义了这个 xxx 相关的函数，就会出现这个问题

这里在这个函数调用前加上 unalias xxx 就可以了


👉 **问题描述**
每次使用ohmyzsh更改了配置以后，执行 source ~/.zshrc 时总会弹出这个警告

```shell
(eval):43: defining function based on alias `conda`
(eval):43: parse error near `()'
```
因为平时用python环境经常用到conda，所以这个配置文件里也会有conda相关的函数，**但如果只是简单的函数定义其实是不会有这个问题的**，那么问题出在哪呢？


👉 **问题溯源**
上面的问题，其实是因为除了正常使用conda外，我还给conda链接了一个别名，毕竟每次 conda install 时候配置检查真的是太痛苦了，所以我就转用了 mamba（这里安利一下，貌似很多人都不知道还有这么好用的一个替代库），然后给 conda 起了一个别名，这样我顺手用的时候就直接调用 mamba 了：
```shell
alias conda='mamba'
```
**但！！！** 如果我也只是起了一个别名就算了，这个错误还是不会发生，这里要提一句，如果你也用conda的话，你会发现你的 `.bashrc` 或者 `.zshrc` 或者什么shell的配置文件里有这么一段
```shell
# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$('/home/thinszx/miniconda3/bin/conda' 'shell.zsh' 'hook' 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__conda_setup"
else
    if [ -f "/home/thinszx/miniconda3/etc/profile.d/conda.sh" ]; then
        . "/home/thinszx/miniconda3/etc/profile.d/conda.sh"
    else
        export PATH="/home/thinszx/miniconda3/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda initialize <<<
```
这里其实每次会调用的脚本是 `/home/thinszx/miniconda3/etc/profile.d/conda.sh` ，而真正产生问题的也是这个脚本，看一下这个脚本的内容：

```shell
export CONDA_EXE='/home/thinszx/miniconda3/bin/conda'
export _CE_M=''
export _CE_CONDA=''
export CONDA_PYTHON_EXE='/home/thinszx/miniconda3/bin/python'

# Copyright (C) 2012 Anaconda, Inc
# SPDX-License-Identifier: BSD-3-Clause

# ...

conda() {
    # ...
}
```

其实前面的都不重要，我们会发现报错的43行就是 conda() 函数，这里存在的一个问题就是我们定义的alias和函数名重复了，引用GitHub中仓库owner给的解决方案是为了不让这个函数展开，所以把这一行改成标准function写法，但亲身实践并不能解决问题，另一个人给出的方法更合理一点，也比较粗暴，就是在函数调用前把原来定义的alias去掉，这样的话编译器执行函数定义时就没有conda相关的reference了：
```shell
# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$('/home/thinszx/miniconda3/bin/conda' 'shell.zsh' 'hook' 2> /dev/null)"
if [ $? -eq 0 ]; then
    ##################### 注意这几行
    if alias | grep -q "conda="; then
        unalias conda
    fi
    #####################
    eval "$__conda_setup"
else
    if [ -f "/home/thinszx/miniconda3/etc/profile.d/conda.sh" ]; then
        . "/home/thinszx/miniconda3/etc/profile.d/conda.sh"
    else
        export PATH="/home/thinszx/miniconda3/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda initialize <<<

alias conda ############### 注意这里
```
这里会先判断环境中有没有相关的alias，有的话九八环境里的 `conda` reference给清掉，最后再重新赋回来。


[👍 ohmyzsh遇到(eval):43: defining function based on alias `xxx‘的问题 | CSDN]: https://blog.csdn.net/thinszx/article/details/131907100



## fig is taking up too much memory
#fig 

This seems have something to do with fig's history autocompletion?
```
fig settings autocomplete.history.disableLoading true
fig restart
```

Despite tons of complaints found on github there's no valid solution or official response to this issue. WTF.. 😃 


[Why fig eating a lot of memory? #1461]: https://github.com/withfig/fig/issues/1461
[bug: Fig eating 2GB of memory....]: https://github.com/withfig/fig/issues/2577
