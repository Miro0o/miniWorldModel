# Conda

[TOC]



## Res
📂 [Conda Doc](https://docs.conda.io/en/latest/)
📂 [Conda Userguide](https://conda.io/projects/conda/en/latest/user-guide/getting-started.html)

[Conda configuration](https://conda.io/projects/conda/en/latest/configuration.html#)
[Conda Glossary](https://conda.io/projects/conda/en/latest/glossary.html)
[Conda developer guide](https://conda.io/projects/conda/en/latest/dev-guide/index.html)



## Intro
>  **TL;DR** 
>
> Conda is a powerful package manager and environment manager that you use with command line commands at the Anaconda Prompt for Windows, or in a terminal window for macOS or Linux.

*Package, dependency and environment management for any language—Python, R, Ruby, Lua, Scala, Java, JavaScript, C/ C++, Fortran, and more.*

Conda is an open source package management system and environment management system that runs on Windows, macOS, and Linux. Conda quickly installs, runs and updates packages and their dependencies. Conda easily creates, saves, loads and switches between environments on your local computer. It was created for Python programs, but it can package and distribute software for any language.

Conda as a package manager helps you find and install packages. If you need a package that requires a different version of Python, you do not need to switch to a different environment manager, because conda is also an environment manager. With just a few commands, you can set up a totally separate environment to run that different version of Python, while continuing to run your usual version of Python in your normal environment.

In its default configuration, conda can install and manage the thousand packages at [repo.anaconda.com](https://repo.anaconda.com/) that are built, reviewed and maintained by **Anaconda®**.

Conda can be combined with continuous integration systems such as Travis CI and AppVeyor to provide frequent, automated testing of your code.


### Python distributions
Conda per sa is a single software issued by Anaconda® ( [formally Continuum Analytics](https://www.anaconda.com/blog/continuum-analytics-officially-becomes-anaconda) ) ; but very often it comes along with a **python distribution** which is like a distribution in linux os: it packages conda along with many other python packages into a single distribution for further use. 

There are multiple versions of distributions, differentiated by two things: the number of packages that get installed by default, and the version of defualt python it uses.

The most common two distributions are [Anaconda](Python%20Distributions/Anaconda.md) and [miniconda](Python%20Distributions/miniconda.md).
- [**Miniconda**](https://conda.io/miniconda.html) is a minimal installer for conda, which includes conda, Python, the packages they depend on, and a limited number of other useful packages (incl. pip, zlib, etc).  Its small base size and selectivity makes it a preferred choice for when space is a concern.

- [**Anaconda**](https://www.anaconda.com/) is the most popular **full Python distribution**. It comes with a package manager system, [conda](https://conda.io/docs/), and includes many commonly used Python modules. For this reason it occupies 3.2 GB as installed and includes hundreds of the most popular packages for large-scale data processing, predictive analytics, and scientific computing. Anacodna is more like to me for professional data scientist.

> 🔗 [Anaconda vs. miniconda](https://stackoverflow.com/questions/45421163/anaconda-vs-miniconda) 



## 🚇 Conda Channels
> ⚠ It is recommended to stick to a single source. 

### 👉 Anaconda Repo
🏠 https://repo.anaconda.com

This is anaconda official repo. However it sometimes lacks of packages.


### 👉 conda-forge
↗ [Conda-forge](Conda%20Channels%20&%20Repos/Conda-forge.md)


### 👉 Mini-forge
↗ [Miniforge](Conda%20Channels%20&%20Repos/Miniforge.md)


### 🪩 Mirror sources

↗ [Mirror Sites /conda Packages](../../../../../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/🐚%20Shell%20&%20Terminals%20(Console)/📦%20CLI%20Package%20&%20Software%20Management/👮🏽%20Main%20Package%20Repo%20Mirror%20Sites%20in%20China.md#conda%20Packages)



## Ref

[conda 使用教程]: https://www.jianshu.com/p/576abf08dd76

[Anaconda Python]: https://csguide.cs.princeton.edu/conda
