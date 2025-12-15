## 💣 Experimental

### 👉 [Lynx](https://lynx.browser.org)

[Lynx colours? How can I do that?](https://www.linuxquestions.org/questions/linux-general-1/lynx-colours-how-can-i-do-that-582681/)



### 👉 [asdf](https://asdf-vm.com)

`asdf` is a tool version manager. All tool version definitions are contained within one file (`.tool-versions`) which you can check in to your project's Git repository to share with your team, ensuring everyone is using the **exact** same versions of tools.

The old way of working required multiple CLI version managers, each with their distinct API, configurations files and implementation (e.g. `$PATH` manipulation, shims, environment variables, etc...). `asdf` provides a single interface and configuration file to simplify development workflows, and can be extended to all tools and runtimes via a simple plugin interface.

> :exclamation: STRONGLY suggest follow official site's instruction.  
>
> :film_projector: [Use asdf to manage versions of Python, NodeJS, GoLang and more!](https://youtu.be/RTaqWRj-6Lg)
>
> [Introduction](https://asdf-vm.com/guide/introduction.html) 
>
> [Getting Started](https://asdf-vm.com/guide/getting-started.html)  
>
> :file_folder:  [More Detailed Docs](https://asdf-vm.com/manage/core.html)



#### Setup

1. install dependency

2. download asdf

3. install asdf

   > Add `asdf.sh` to your `~/.zshrc` with:
   >
   > ```shell
   > echo -e "\n. $(brew --prefix asdf)/libexec/asdf.sh" >> ${ZDOTDIR:-~}/.zshrc
   > ```
   >
   > **OR** use a ZSH Framework plugin like [asdf for oh-my-zshopen in new window](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/asdf) which will source this script and setup completions.
   >
   > Completions are configured by either a ZSH Framework `asdf` or will need to be [configured as per Homebrew's instructionsopen in new window](https://docs.brew.sh/Shell-Completion#configuring-completions-in-zsh). If you are using a ZSH Framework the associated plugin for asdf may need to be updated to use the new ZSH completions properly via `fpath`. The Oh-My-ZSH asdf plugin is yet to be updated, see [ohmyzsh/ohmyzsh#8837open in new window](https://github.com/ohmyzsh/ohmyzsh/pull/8837).

4. install plugin

5. set a version



#### Bug

I found out that `asdf` only changes the runtime version, and it doesn't do anything more like env variable mangement or dependency management like `conda` does in python. I still dont have any solid solution to this problem. 😢

For instance, i have `NODE_PATH` exported to the coresponding path when previously working on a `node` outside `asdf`. However when i enabled `asdf` to manage some new `node`s under it, the `NODE_PATH` stayed the same old path instead of chaing to the new path to the new `node`. It's bugging, right? 🤷