# Vim + Docker

[TOC]



## Res
↗ [Docker](../../../../../../Software%20Engineering/☁️%20Cloud%20Computing%20&%20Cloud%20Native/🏂%20OS%20Level%20Virtualization%20&%20Containers%20Technology/🐋%20Container%20Implementations/Docker/Docker.md)



## Intro



## Docker Management
### 👉 lazydocker
Using [toggleterm.nvim](https://github.com/akinsho/toggleterm.nvim), or any Neovim terminal plugins, we can integrate `lazydocker` easily.

`lazydocker` supports
- viewing the state of the docker or docker-compose container environment
- viewing logs for a container/service
- viewing ASCII graphs of the containers’ metrics
- attaching to a container/service
- restarting/removing/rebuilding containers/services
- viewing the ancestor layers of a given image
- pruning containers, images, or volumes that are hogging up disk space


### 👉 ctop
[ctop](https://github.com/bcicen/ctop) provides a top-like interface for container metrics, with a concise and condensed overview of real-time metrics for multiple containers.


### 👉 dockly
[dockly](https://github.com/lirantal/dockly) provides an immersive terminal interface for managing docker 
containers, services, and images.


### 👉 denops-docker.nvim
[denops-docker.nvim](https://github.com/skanehira/denops-docker.vim) is a plugin that can manage Docker in Vim/Neovim, written in `[denops.vim](https://github.com/vim-denops/denops.vim)`.


### 👉 vim-docker-tools
[vim-docker-tools](https://github.com/kkvh/vim-docker-tools) is a Vim/Neovm plugin for managing docker containers.



## Docker Remote
### 👉 nvim-remote-containers
[nvim-remote-containers](https://github.com/jamestthompson3/nvim-remote-containers) aims to give us the functionality of VSCode’s [remote container development](https://code.visualstudio.com/docs/remote/containers) plugin.

This plugin allows us to spawn and develop in docker containers and pulls config information from a `devcontainer.json` file. We can generate the `devcontainer.json` file manually or using VSCode. The specification can be found [here](https://containers.dev/implementors/json_reference/).


### 👉 distant.nvim
A wrapper around [`distant`](https://github.com/chipsenkbeil/distant) that enables users to edit remote files from the comfort of their local environment.

- **Requires neovim 0.7+**
- **Requires distant 0.20.0-alpha.4**

🚧 **(Alpha stage software) This plugin is in rapid development and may break or change frequently!** 🚧




## Ref
[Neovim 101— Docker | Medium]: https://alpha2phi.medium.com/neovim-101-docker-b133d5db04a2


