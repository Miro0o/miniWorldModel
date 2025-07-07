# venv

[TOC]



## Res
🏠 https://docs.python.org/3/library/venv.html




## Intro
The `venv` module supports creating lightweight “virtual environments”, each with their own independent set of Python packages installed in their [`site`](https://docs.python.org/3/library/site.html#module-site "site: Module responsible for site-specific configuration.") directories. A virtual environment is created on top of an existing Python installation, known as the virtual environment’s “base” Python, and may optionally be isolated from the packages in the base environment, so only those explicitly installed in the virtual environment are available.

When used from within a virtual environment, common installation tools such as [pip](https://pypi.org/project/pip/) will install Python packages into a virtual environment without needing to be told to do so explicitly.

See [**PEP 405**](https://peps.python.org/pep-0405/) for more background on Python virtual environments.

> See also
> 🔗 [Python Packaging User Guide: Creating and using virtual environments](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/#creating-a-virtual-environment)

[Availability](https://docs.python.org/3/library/intro.html#availability): not Emscripten, not WASI.

This module does not work or is not available on WebAssembly platforms `wasm32-emscripten` and `wasm32-wasi`. See [WebAssembly platforms](https://docs.python.org/3/library/intro.html#wasm-availability) for more information.




## Ref
[venv ｜ 廖雪峰的官方网站]: https://www.liaoxuefeng.com/wiki/1016959663602400/1019273143120480



