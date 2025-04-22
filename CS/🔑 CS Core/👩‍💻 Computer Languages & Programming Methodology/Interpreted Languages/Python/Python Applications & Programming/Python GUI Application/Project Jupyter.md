# Project Jupyter

[TOC]



## Res
📂 [jupyter-notebook-beginner-guide](https://jupyter-notebook-beginner-guide.readthedocs.io/en/latest/what_is_jupyter.html)
📂 [Jupyter Project Documentation](https://docs.jupyter.org/en/latest/index.html)


### Related Topics


### Other Resources



## Intro
> [The Big Split™](https://blog.jupyter.org/the-big-split-9d7b88a031a7)

The [Jupyter ](https://jupyter.orgNotebook) Notebook is an open-source web application that allows you to create and share documents that contain live code, equations, visualizations and narrative text. Uses include: data cleaning and transformation, numerical simulation, statistical modeling, data visualization, machine learning, and much more. 
+ it can also runs on mobilephone.
+ visit its doc page 📂 [here](https://jupyter.org/documentation)
+ Jupyter & JupyterLab

this is a quick tutorial for Jupyter notebook https://zhuanlan.zhihu.com/p/32805175


### Configuration
configuration folder is at `~/.jupyter`



## 🦃 Jupyter Ecosystem
> 🔗 https://docs.jupyter.org/en/latest/install.html


### Jupyter Notebook Interface
The **Jupyter Notebook interface** is a Web-based application for authoring documents that combine live-code with narrative text, equations and visualizations.
- [GitHub Repo](https://github.com/jupyter/notebook)
- [Docs](https://jupyter-notebook.readthedocs.io/en/latest/?badge=latest)
- [Installing the classic Jupyter Notebook interface](https://docs.jupyter.org/en/latest/install/notebook-classic.html)
- [Upgrading Jupyter Notebook](https://docs.jupyter.org/en/latest/use/upgrade-notebook.html)


### JupyterLab
**JupyterLab** is a next-generation web-based user interface for Project Jupyter.
- [GitHub Repo](https://github.com/jupyterlab/jupyterlab)
- [Docs](https://jupyterlab.readthedocs.io/en/stable/)
- [Install instructions](https://jupyterlab.readthedocs.io/en/stable/getting_started/installation.html)


### JupyterHub
**JupyterHub** is a multi-user hub for interactive computing sessions, made for teams and organizations, and with pluggable authentication and scalability.
- [GitHub Repo](https://github.com/jupyterhub/jupyterhub)
- [Docs](https://jupyterhub.readthedocs.io/en/stable/)
- [Install instructions](https://jupyterhub.readthedocs.io/en/stable/installation-guide.html)


### Jupyter Console
The **Jupyter Console** is a terminal-based console for interactive computing.
- [GitHub Repo](https://github.com/jupyter/jupyter_console)
- [Docs and Install instructions](https://jupyter-console.readthedocs.io/en/latest/)


### Jupyter QtConsole
The **Jupyter QtConsole** is a Qt application for interactive computing with rich output.
- [GitHub Repo](https://github.com/jupyter/qtconsole)
- [Docs](https://qtconsole.readthedocs.io/en/stable/index.html)
- [Install instructions](https://qtconsole.readthedocs.io/en/stable/installation.html)


### Jupyter Kernels
You can install **Jupyter Kernels** to add support for new languages and code behavior.
- [Installing Kernels](https://docs.jupyter.org/en/latest/install/kernels.html)
    - [Are any languages pre-installed?](https://docs.jupyter.org/en/latest/install/kernels.html#are-any-languages-pre-installed)
    - [How do I install Python 2 and Python 3?](https://docs.jupyter.org/en/latest/install/kernels.html#how-do-i-install-python-2-and-python-3)
    - [How do I install other languages like R or Julia?](https://docs.jupyter.org/en/latest/install/kernels.html#how-do-i-install-other-languages-like-r-or-julia)



## Ref
[How to change the working directory of Jupyter and Jupyter Lab on Windows environment]: https://shanyitan.medium.com/how-to-change-the-working-directory-of-jupyter-and-jupyter-lab-on-windows-environment-bbe5a5a99f05

[How to change the Jupyter start-up folder]: https://stackoverflow.com/questions/35254852/how-to-change-the-jupyter-start-up-folder

> For recent `nbclassic` and JupyterLab >= 3 use `c.ServerApp.root_dir` instead of `c.NotebookApp.notebook_dir` (and `jupyter server --generate-config` instead of `jupyter notebook --generate-config`).
> 
> anwser from stackoverflow at 2016

