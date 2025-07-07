# Repo

[TOC]



## Res
🏠 
🚧 


### Related Topics



## Intro
[Repo](https://gerrit.googlesource.com/git-repo/+/refs/heads/main/README.md) unifies Git repositories when necessary, performs uploads to the [Gerrit revision control system](https://android-review.googlesource.com/), and automates parts of the Android development workflow.

The Repo Launcher provides a Python script that initializes a checkout and downloads the second part, the full Repo tool. The full Repo tool is included in an Android source code checkout. It’s located, by default, in`$SRCDIR/.repo/repo/...` and it receives forwarded commands from the downloaded Repo Launcher. 

Repo doesn’t replace Git, it only makes it easier to work with Git in the context of Android. Repo uses [manifest files](https://gerrit.googlesource.com/git-repo/+/main/docs/manifest-format.md) to aggregate Git projects into the Android superproject. You can put the `repo` command, which is an executable Python script, anywhere in your path. In working with the Android source files, you can use Repo for across-network operations such as with a single Repo working directory.

In most situations, you can use Git instead of Repo, or mix Repo and Git commands to form complex commands. However, using Repo for basic across-network operations makes your work much simpler. For more details on Repo, see the [Repo Command Reference](https://source.android.com/docs/setup/reference/repo), [Repo README](https://gerrit.googlesource.com/git-repo/+/refs/heads/main/README.md), the [Preupload Hooks](https://android.googlesource.com/platform/tools/repohooks/+/refs/heads/main/README.md) (tests) that can be enabled in Repo, and[general docs in AOSP](https://gerrit.googlesource.com/git-repo/+/main/docs/).

To download and install the **Repo Launcher** from _git-repo- downloads_, see [Installing Repo](https://source.android.com/docs/setup/download/source-control-tools#installing-repo).



## Ref
