# Troubleshooting

[TOC]



## 👉 remote: Invalid username or password.
#git #Invalid_username

Possible solusions:
1. change network. e.g. form wifi to cellular network
2. unset proxy.
	1. from cli: `git --global --unset https.proxy`
	2. from config: on mac it's at `~/.gitconf`
3. check credential manager. 
	1. GCM
	2. Built-in git-credential-helper
		1. osxkeychain
4. check git username & passwd is set correctly.
5. check your request is from http/https/ssh ?


[Github remote: Invalid username or password. fatal: Authentication failed]: https://stackoverflow.com/questions/71600196/github-remote-invalid-username-or-password-fatal-authentication-failed

[fatal: unable to access ... Recv failure: Connection reset by peer]: https://apple.stackexchange.com/questions/452437/fatal-unable-to-access-recv-failure-connection-reset-by-peer

[How can I resolve "Recv failure: Connection reset by peer" error]: https://stackoverflow.com/questions/58372156/how-can-i-resolve-recv-failure-connection-reset-by-peer-error



## 👉 Git: Could not resolve host github.com error while cloning remote repository in git
#git #remote_git #git_cloning

**Error: "fatal: unable to access 'https://domain.com' Could not resolve host: github.com"**

It seems to be the proxy problem. Somehow the `http_proxy` and `https_proxy` is directed to the wrong address / protocols / other things. Reconfig `~/.gitrc` .

[Git: Could not resolve host github.com error while cloning remote repository in git]: https://stackoverflow.com/questions/20370294/git-could-not-resolve-host-github-com-error-while-cloning-remote-repository-in

