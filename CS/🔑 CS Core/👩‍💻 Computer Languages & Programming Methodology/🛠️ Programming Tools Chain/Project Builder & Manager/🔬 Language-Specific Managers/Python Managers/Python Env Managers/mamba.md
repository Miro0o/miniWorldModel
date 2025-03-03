# mamba

[TOC]



![mamba header image](../../../../../../../../../../Assets/Pics/mamba_header.png)



## Res
🚧 https://github.com/mamba-org/mamba
🚧 https://github.com/conda-forge/miniforge

📂 https://mamba.readthedocs.io/en/latest/index.html


### Mamba Communities
Mamba is part of a bigger ecosystem to make scientific packaging more sustainable. You can read our [announcement blog post](https://medium.com/@QuantStack/open-software-packaging-for-science-61cecee7fc23). The ecosystem also consists of `quetz`, an open source `conda` package server and `boa`, a fast `conda` package builder.

| part of mamba-org                                           |                                                            |                                                         |
| ----------------------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------- |
| Package Manager [mamba](https://github.com/mamba-org/mamba) | Package Server [quetz](https://github.com/mamba-org/quetz) | Package Builder [boa](https://github.com/mamba-org/boa) |


### Mamba Flavors
The `mamba-org` organization hosts multiple Mamba flavors:
- `mamba`: a Python-based CLI conceived as a *drop-in* replacement for `conda`, offering higher speed and more reliable environment solutions
- `micromamba`: a pure C++-based CLI, self-contained in a single-file executable
- `libmamba`: a C++ library exposing low-level and high-level APIs on top of which both `mamba` and `micromamba` are built



## Intro
`mamba` is a reimplementation of the conda package manager in C++. It is fast, robust, and cross-platform.

It runs on Windows, OS X and Linux (ARM64 and PPC64LE included) and is fully compatible with `conda` packages and supports most of conda’s commands.
- parallel downloading of repository data and package files using multi-threading
- libsolv for much faster dependency solving, a state of the art library used in the RPM package manager of Red Hat, Fedora and OpenSUSE
- core parts of `mamba` are implemented in C++ for maximum efficiency

At the same time, `mamba` utilizes the same command line parser, package installation and deinstallation code and transaction verification routines as `conda` to stay as compatible as possible.


### Installation
> 🔗 https://mamba.readthedocs.io/en/latest/installation.html

1. conda install
   run below command in the base env of conda, also there should be no other packages in the base env. 
```shell
conda install -c conda-forge -n base mamba
```

2. fresh install
```shell
# for linux with x86_64
wget https://github.com/conda-forge/miniforge/releases/latest/download/Mambaforge-pypy3-Linux-x86_64.sh
bash Mambaforge-pypy3-Linux-x86_64.sh
```

Note that mamba use installers like ↗ [Miniforge](conda/Conda%20Channels%20&%20Repos/Miniforge.md)

Other distributions is available at 
🔗 https://github.com/conda-forge/miniforge/tree/23.3.1-1




## Ref
[放弃conda拥抱mamba]: https://xuzhougeng.top/archives/use-mamba-instead-of-conda
[pip/conda/mamba安装拓展]: https://www.jianshu.com/p/37e70ddbc543
[Accessing Anaconda Channels from Mamba]: https://stackoverflow.com/questions/73627956/accessing-anaconda-channels-from-mamba
