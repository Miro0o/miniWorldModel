# Vim Remote

[TOC]



## Res


## Remote via SSH
### 👉 `netrw`
Vim supports transparent remote file editing through `netrw`. It's available by default when `nocompatible` is enabled -- for more help on setting it up have a look at `:help netrw-start` and `:help netrw-activate`.

Editing a remote file is simple:
```shell
$ vim scp://server/file
```

#### SSH Tips
I configure the servers I use regularly so connecting to them, whether with Vim or the `ssh` command, takes a minimal amount of keystrokes. This can be done by adding entries to `~/.ssh/config`:

```yaml
host shortname  
  User alexy  
  Hostname shortname.example.com  
  Port 9372
```

Rather than typing `vim scp://alexy@shortname.example.com:9372/.vimrc`, I can now type `vim scp://shortname/.vimrc` to edit the Vim settings on one of my servers.

#### Vim Client/Server
If Vim is compiled with the `+clientserver` option, it can accept remote commands. This is generally true for GUI versions of Vim, so if your system has gvim or MacVim, try this in a terminal:
```shell
$ mvim --servername example  
$ mvim --servername example --remote-send 'ihello from the terminal'
```
Running this on a Mac with MacVim installed caused it to open a window with a new document, then switch to Insert mode and type a short message.

Vim’s `--remote-send` option makes a lot of labour-saving scripting tasks possible. For an example of this, take a look at [Vim and the terminal](http://www.scarpa.name/2011/03/22/vim-and-the-terminal/) by Michael Scarpa.



## Local Vim Remote inside Docker Container
### 1️⃣ Enable SSH Services within Container



### 2️⃣ Using Bind/Mounts



[Can I use vim from host to edit files inside docker container? If yes then how?]: https://stackoverflow.com/questions/57585022/can-i-use-vim-from-host-to-edit-files-inside-docker-container-if-yes-then-how



## Remote Debugging
### 👉 nvim-dap




## Ref
[Remote containers development in nvim]: https://www.reddit.com/r/neovim/comments/qm9lf5/remote_containers_development_in_nvim/

[Neovim for Beginners — Python Remote Debugging]: https://alpha2phi.medium.com/neovim-for-beginners-python-remote-debugging-7dac13e2a469

[Vim 101: Editing Remote Files]: https://medium.com/usevim/vim-101-editing-remote-files-a6d2f9c8d9fb
