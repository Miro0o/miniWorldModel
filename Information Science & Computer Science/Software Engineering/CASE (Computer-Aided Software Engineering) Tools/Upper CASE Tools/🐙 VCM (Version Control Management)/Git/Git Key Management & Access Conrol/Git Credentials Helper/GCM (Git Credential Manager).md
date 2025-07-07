# GCM (Git Credential Manager)

[TOC]



## Res
🏠 https://github.com/git-ecosystem/git-credential-manager

See the [documentation index](https://github.com/GitCredentialManager/git-credential-manager/blob/release/docs/README.md) for links to additional resources.



## Intro
>  More info TBD..

[Git Credential Manager](https://github.com/GitCredentialManager/git-credential-manager) (GCM) is a secure [Git credential helper](https://git-scm.com/docs/gitcredentials) built on [.NET](https://dotnet.microsoft.com/) that runs on Windows, macOS, and Linux. It aims to provide a consistent and secure authentication experience, including multi-factor auth, to every major source control hosting service and platform.

GCM supports (in alphabetical order) [Azure DevOps](https://dev.azure.com/), Azure DevOps Server (formerly Team Foundation Server), Bitbucket, GitHub, and GitLab. Compare to Git's [built-in credential helpers](https://git-scm.com/book/en/v2/Git-Tools-Credential-Storage) (Windows: wincred, macOS: osxkeychain, Linux: gnome-keyring/libsecret), which provide single-factor authentication support for username/password only.

GCM replaces both the .NET Framework-based [Git Credential Manager for Windows](https://github.com/microsoft/Git-Credential-Manager-for-Windows) and the Java-based [Git Credential Manager for Mac and Linux](https://github.com/microsoft/Git-Credential-Manager-for-Mac-and-Linux).


### Installation
See the [installation instructions](https://github.com/GitCredentialManager/git-credential-manager/blob/release/docs/install.md) for the current version of GCM for install options for your operating system.


### Current status
Git Credential Manager is currently available for Windows, macOS, and Linux*. GCM only works with HTTP(S) remotes; you can still use Git with SSH:

- [Azure DevOps SSH](https://docs.microsoft.com/en-us/azure/devops/repos/git/use-ssh-keys-to-authenticate?view=azure-devops)
- [GitHub SSH](https://help.github.com/en/articles/connecting-to-github-with-ssh)
- [Bitbucket SSH](https://confluence.atlassian.com/bitbucket/ssh-keys-935365775.html)


### How to use
Once it's installed and configured, Git Credential Manager is called implicitly by Git. You don't have to do anything special, and GCM isn't intended to be called directly by the user. For example, when pushing (`git push`) to [Azure DevOps](https://dev.azure.com/), [Bitbucket](https://bitbucket.org/), or [GitHub](https://github.com/), a window will automatically open and walk you through the sign-in process. (This process will look slightly different for each Git host, and even in some cases, whether you've connected to an on-premises or cloud-hosted Git host.) Later Git commands in the same repository will re-use existing credentials or tokens that GCM has stored for as long as they're valid.

Read full command line usage [here](https://github.com/GitCredentialManager/git-credential-manager/blob/release/docs/usage.md).


### Configuring a proxy
See detailed information [here](https://github.com/GitCredentialManager/git-credential-manager/blob/release/docs/netconfig.md#http-proxy).


### Experimental Features
- [Windows broker (experimental)](https://github.com/GitCredentialManager/git-credential-manager/blob/release/docs/windows-broker.md)



## Ref

