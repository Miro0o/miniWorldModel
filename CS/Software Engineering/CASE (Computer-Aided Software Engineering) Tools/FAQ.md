# ❓FAQ

[TOC]



## 👉 Distributed vs Centralized
#git #CVS #VCM #distributed #centralized

CVS/SCN is centralized, while Git is distributed. 

> 你的理解是对的，比特币的区块链设计就类似git，人手一份全账本，只是用p2p全网同步，而git通常搞个中心化服务来同步
> svn像银行，完整账本只有银行有，作为终端节点可以向银行查询账本，但如果某一天银行没了，整个完整账本就没了
> 分布式的核心设计是同步，而不是主从

 ```markdown
   
1. 使用 Readme\_XXX.md 来支持不同的语言，例如 Readme\_en.md, Readme\_zh.md  
2. Gitee 官方博客 [blog.gitee.com](https://blog.gitee.com)  
3. 你可以 [https://gitee.com/explore](https://gitee.com/explore) 这个地址来了解 Gitee 上的优秀开源项目  
4. [GVP](https://gitee.com/gvp) 全称是 Gitee 最有价值开源项目，是综合评定出的优秀开源项目  
5. Gitee 官方提供的使用手册 [https://gitee.com/help](https://gitee.com/help)  
6. Gitee 封面人物是一档用来展示 Gitee 会员风采的栏目 [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)
 ```

[Distributed vs centralized]: https://www.liaoxuefeng.com/wiki/896043488029600/896202780297248#0



## 👉 Git config
#git #config 

` git config ` is a git built-in tool for management of git.

 ```shell
/etc/gitconfig
~/.gitconfig
.git/config
 ```

[git config]: https://blog.csdn.net/joe_007/article/details/7276195

### Config git using proxy

[Configure git to use a proxy]: https://gist.github.com/evantoli/f8c23a37eb3558ab8765



## 👉 update remote git to local
#git #remote_git

 + fetch --> merge
   + fetch generate a new branch on locak host.
+ pull

[update remote git to local]: https://www.cnblogs.com/sxy370921/p/11734612.html



## 👉 ignore git local modification and refresh from remote git.
#git #gitignore

+ restore
+ reset
+ stash

[ignore git local modification and refresh from remote git.]: https://blog.csdn.net/haoaiqian/article/details/78284337



##  👉 Git branching
#git #gitbranching

 TBD. 
 sound understanding of git branching is essential to the command of whole git.  
 

[git branching]: https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell

[使用git stash命令保存和恢复进度]: https://blog.csdn.net/daguanjia11/article/details/73810577git
[merge 与 git rebase 的区别]: https://blog.csdn.net/michaelshare/article/details/79108233

- 两者功能上都对文件进行合并。不过merge作为一个活动会体现在git commit记录时间线上，而rebase作为一个针对时间线的操作同时也会合并时间线。

[git 添加多个远程仓库]: https://segmentfault.com/q/1010000008366409



## 👉 Recover from an unsuccessful git rebase with the `git reflog` command
#git #git_reflog

1. use `git reflog` listing the commit history
```shell
$ git reflog 222967b (HEAD -> main)
HEAD@{0}: rebase (finish): returning to refs/heads/main 222967b (HEAD -> main) 
HEAD@{1}: rebase (squash): My big rebase c388f0c 
HEAD@{2}: rebase (squash): # This is a combination of 20 commits 56ee04d 
HEAD@{3}: rebase (start): checkout HEAD~20 0a0f875 
HEAD@{4}: commit: An old good commit [...]
```

2. find the last good commit that you want to recover. For example HEAD{3} here.
3. Restore the commit
```shell
git checkout HEAD{3}
```

4. merge commits (optional)

[Recover from an unsuccessful git rebase with the git reflog command]: https://opensource.com/article/23/1/git-reflog



## 👉 Git: Merge a Remote branch locally
#git #git_merge

You can reference those remote tracking branches ~(listed with `git branch -r`) with the name of their remote.

You need to fetch the remote branch:
```
git fetch origin aRemoteBranch
```

If you want to merge one of those remote branches on your local branch:
```
git checkout aLocalBranch
git merge origin/aRemoteBranch
```

_Note 1:_ For a large repo with a long history, you will want to add the `--depth=1` option when you use `git fetch`.

_Note 2:_ These commands also work with other remote repos so you can setup an `origin` and an `upstream` if you are working on a fork.

_Note 3_: [user3265569](https://stackoverflow.com/users/3265569/user3265569) suggests the following alias [in the comments](https://stackoverflow.com/questions/21651185/git-merge-a-remote-branch-locally/21653559#comment116902338_21653559):

> From `aLocalBranch`, run `git combine remoteBranch`  
> Alias:
> 
> ```
> combine = !git fetch origin ${1} && git merge origin/${1}
> ```


[Git: Merge a Remote branch locally]: https://stackoverflow.com/questions/21651185/git-merge-a-remote-branch-locally

- Read [this very well written answer](https://stackoverflow.com/a/71774640/10625611) by [torek](https://stackoverflow.com/users/1256452/torek) to get a much clearer picture on what actually happens behind the scene and to understand which option is the most appropriate option for you.
- You may want to keep an eye on [VonC](https://stackoverflow.com/users/6309/vonc)'s answer [here](https://stackoverflow.com/a/64163084/10625611) for updates on changes made to this feature in future updates.



## 👉 How do I discard unstaged changes in Git? | How do I undo 'Git add' before commit?
#git #git_unstaged #git_add #gitignore 

This post this inspiring 👇

[👍 How do I discard unstaged changes in Git? | Stackoverflow]: https://stackoverflow.com/q/52704

[How do I undo 'git add' before commit? | stackoverflow]: https://stackoverflow.com/a/682343/16542494

> 🤖 OpenAI Chatgpt 4.0

The reason those files are still being tracked and updated even after adding them to `.gitignore` is that `.gitignore` only applies to **untracked** files. Since those files were already committed and pushed to GitHub, Git is still tracking them.

**Solution: Stop Tracking the Files and Remove Them from GitHub**
Here’s how you can fix it:
1. **Remove the files from Git’s tracking** using the following command:
    `git rm --cached path/to/file`
    - `--cached` means Git will remove the file from the repository, but it will remain on your local filesystem.
    - You can also remove entire directories using:
        bash
        CopyEdit
        `git rm -r --cached path/to/directory`
2. **Add the files to `.gitignore`** if you haven't done so already, to ensure Git ignores them in future commits.
3. **Commit the changes** to reflect the file removal:
    `git commit -m "Remove mistakenly committed files and update .gitignore"`
4. **Push the changes** to GitHub:
    `git push origin main`
    - Replace `main` with your branch name if necessary.

[Ignoring files | github docs]: https://docs.github.com/en/get-started/git-basics/ignoring-files
[gitignore]: https://git-scm.com/docs/gitignore



## 👉 How do I fix a Git detached head?
#git #git_detached_head

Stop using `git checkout` but the new `git switch`!

---

Detached head means you are no longer on a branch, you have checked out a single commit in the history (in this case the commit previous to HEAD, i.e. HEAD^).

> Any checkout of a commit that is not the name of one of _your_ branches will get you a detached HEAD. A SHA1 which represents the tip of a branch still gives a detached HEAD. Only a checkout of a local branch _name_ avoids that mode.
> See [committing with a detached HEAD](http://marklodato.github.com/visual-git-guide/index-en.html#detached)

**If you want to _delete_ your changes associated with the detached HEAD**
You only need to checkout the branch you were on, e.g.
``` shell
git checkout master
```
Next time you have changed a file and want to restore it to the state it is in the index, don't delete the file first, just do
``` shell
git checkout -- path/to/foo
```
This will restore the file foo to the state it is in the index.


**If you want to _keep_ your changes associated with the detached HEAD**
1. Run `git branch tmp` - this will save your changes in a new branch called `tmp`.
2. Run `git checkout master`
3. If you would like to incorporate the changes you made into `master`, run `git merge tmp`from the `master` branch. You should be on the `master` branch after running `git checkout master`.

---
**how did i get there?**

For example, if you checkout a "remote branch" without tracking it first, you can end up with a detached HEAD.

See [git: switch branch without detaching head](https://stackoverflow.com/questions/471300/git-switch-branch-without-detaching-head)

Meaning: `git checkout origin/main` (or [`origin/master` in the old days](https://stackoverflow.com/a/62983443/6309)) would result in:

```bash
Note: switching to 'origin/main'.

You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by switching back to a branch.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -c with the switch command. Example:

  git switch -c <new-branch-name>

Or undo this operation with:

  git switch -

Turn off this advice by setting config variable advice.detachedHead to false

HEAD is now at a1b2c3d My commit message
```

That is why you should not use [`git checkout`](https://git-scm.com/docs/git-checkout) anymore, but the new [`git switch`](https://git-scm.com/docs/git-switch) command.

With `git switch`, the same attempt to "checkout" (switch to) a remote branch would fail immediately:
```bash
git switch origin/main
fatal: a branch is expected, got remote branch 'origin/main'
```

[How do I fix a Git detached head?]: https://stackoverflow.com/questions/10228760/how-do-i-fix-a-git-detached-head

[👍 Why did my Git repo enter a detached HEAD state? | Stackoverflow]: https://stackoverflow.com/q/3965676/16542494


## 👉 How do I force "git pull" to overwrite local files?
#git #git_pull 

> ⚠ Warning:
> 
> Any uncommitted local change to tracked files will be lost, **even if staged**.
> 
> But any local file that's _not_ tracked by Git will _not_ be affected.

---

First, update all `origin/<branch>` refs to latest:
```bash
git fetch --all
```
Backup your current branch (e.g. `master`):
``` shell
git branch backup-master
```
Jump to the latest commit on `origin/master` and checkout those files:
``` shell
git reset --hard origin/master
```

**Explanation**
`git fetch` downloads the latest from remote without trying to merge or rebase anything.

`git reset` resets the master branch to what you just fetched. The `--hard` option changes all the files in your working tree to match the files in `origin/master`.


**Maintain current local commits**
⚠ It's worth noting that it is possible to maintain current local commits by creating a branch from `master` before resetting:
```bash
git checkout master
git branch new-branch-to-save-current-commits
git fetch --all
git reset --hard origin/master
```

After this, all of the old commits will be kept in `new-branch-to-save-current-commits`.


**Uncommitte changes**
Uncommitted changes, even if staged (with `git add`), will be lost. Make sure to `stash` or commit anything you need. For example, run the following:
``` shell
git stash
```

And later (after `git reset`), reapply these uncommitted changes:
``` shell
git stash pop
```

> Which may create merge conflicts.


[How do I force "git pull" to overwrite local files?]: https://stackoverflow.com/questions/1125968/how-do-i-force-git-pull-to-overwrite-local-files



## 👉 Creating github CLI extensions
#github


[Creating GitHub CLI extensions]: https://docs.github.com/en/github-cli/github-cli/creating-github-cli-extensions



## 👉 ssh clone git@githubs.com
#ssh #github 

```shell
git clone git@github.com:ssh-address
```

https://www.seozen.top/ssh-github-keygen-2021.html
https://blog.csdn.net/Felicity294250051/article/details/53606158



## 👉 Using Git on iOS?
#iOS #git #linux 

I recently discovered fairly new iOS app called ↗ [iSH](../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/🐚%20Shell%20&%20Terminals%20(Console)/Terminal%20Emulators/📌%20Pseudo%20tty%20(pty)%20Based/iSH.md). In short it's Alpine Linux. I was excited to see this and I couldn't help myself from tinkering with it. It comes with a package manager (apk). I was able to install bash (google it) and change how the prompt looks and etc. Not _everything_ that you would expect is in there and some things probably just don’t work (because apps have limited access to device hardware etc).
...

[Using Git on iOS (the free way)]: https://dev.to/cookrdan/using-git-on-ios-1l1n
