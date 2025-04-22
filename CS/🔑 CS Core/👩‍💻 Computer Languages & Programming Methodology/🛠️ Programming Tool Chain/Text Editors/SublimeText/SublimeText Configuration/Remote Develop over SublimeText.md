# SublimeText over SSH

[TOC]



## Res


## Intro
There seems are no perfect solusion of sublimetext to remote coding 🔗 [like VSCodes](https://code.visualstudio.com/docs/remote/ssh) because ST is not built for remote coding according to a post in sublimetext official forum. 👇
However there are workarouds, not perfect though...


### RemoteSubl
🔗 https://github.com/randy3k/RemoteSubl

RemoteSubl starts as a fork of [rsub](https://github.com/henrikpersson/rsub) to bring `rmate` feature of TextMate to Sublime Text. It transfers files to be edited from remote server using SSH port forward and transfers the files back when they are saved.

Comparing to rsub, the followings are enhanced:

- support multiple files via `rmate foo bar`.
- use the same view when opening the same file twice.
- notify when connection lost.
- resume previous connection when it was lost.
- better status bar messages when saving file and when encountering errors.
- bring up Sublime Text on different platforms.
- ability to set a custom color scheme.



## Ref
[How to use Sublime over SSH]: https://stackoverflow.com/questions/15958056/how-to-use-sublime-over-ssh

[remote_subl | Github]: https://gist.github.com/gwenzek/2e5ea19594335ad3b79c0fb3d63e3223

[Locally edit remote directories/files via ssh tunneling]: https://forum.sublimetext.com/t/locally-edit-remote-directories-files-via-ssh-tunneling/62514)

That’s what we have.

==ST heavily relies on filesystem notifications to update its internal representation of all folders and files. Hence it’s not playing well with filesystems, such as sshfs or the WSL2 which don’t support those.==

There’s also no API for plugins such as sftp or rsub to built their own filesystem tries. The only thing a plugin can do is receiving a list of files and present them in a quick panel.

ST isn’t designed for remote workflows.

[Edit files on a remote server via SSH with Sublime right in your terminal]: https://stefanbauer.me/tips-and-tricks/edit-files-on-a-remote-server-via-ssh-with-sublime-right-in-your-terminal

