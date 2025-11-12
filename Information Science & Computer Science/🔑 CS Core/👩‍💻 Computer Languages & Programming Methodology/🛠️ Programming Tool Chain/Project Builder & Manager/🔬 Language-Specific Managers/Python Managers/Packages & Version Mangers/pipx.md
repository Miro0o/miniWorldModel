# pipx

[TOC]



## Res
🏠 
🚧 https://github.com/pypa/pipx
📂 https://pipx.pypa.io


### Related Topics
↗ [CLI Package & Software Management](../../../../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/🐚%20Shell%20&%20Terminals%20(Console)/📦%20CLI%20Package%20&%20Software%20Management/CLI%20Package%20&%20Software%20Management.md)



## Intro
> 🔗 https://github.com/pypa/pipx?tab=readme-ov-file


### Overview: What is `pipx`?
pipx is a tool to help you install and run end-user applications written in Python. It's roughly similar to macOS's`brew`, JavaScript's [npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b), and Linux's `apt`.

It's closely related to pip. In fact, it uses pip, but is focused on installing and managing Python packages that can be run from the command line directly as applications.


### How is it Different from pip?
pip is a general-purpose package installer for both libraries and apps with no environment isolation. pipx is made specifically for application installation, as it adds isolation yet still makes the apps available in your shell: pipx creates an isolated environment for each application and its associated packages.

pipx does not ship with pip, but installing it is often an important part of bootstrapping your system.


### Where Does `pipx` Install Apps From?
By default, pipx uses the same package index as pip, [PyPI](https://pypi.org/). pipx can also install from all other sources pip can, such as a local directory, wheel, git url, etc.

Python and PyPI allow developers to distribute code with "console script entry points". These entry points let users call into Python code from the command line, effectively acting like standalone applications.

pipx is a tool to install and run any of these thousands of application-containing packages in a safe, convenient, and reliable way. **In a way, it turns Python Package Index (PyPI) into a big app store for Python applications.**Not all Python packages have entry points, but many do.

If you would like to make your package compatible with pipx, all you need to do is add a [console scripts](https://python-packaging.readthedocs.io/en/latest/command-line-scripts.html#the-console-scripts-entry-point) entry point. If you're a poetry user, use [these instructions](https://python-poetry.org/docs/pyproject/#scripts). Or, if you're using hatch, [try this](https://hatch.pypa.io/latest/config/metadata/#cli).



## Ref
