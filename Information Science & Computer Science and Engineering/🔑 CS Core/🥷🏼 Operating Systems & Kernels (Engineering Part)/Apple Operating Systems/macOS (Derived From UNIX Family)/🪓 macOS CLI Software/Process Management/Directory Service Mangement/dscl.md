# dscl

[TOC]



## Res


## Intro
dscl is a general-purpose utility for operating on Directory Service directory nodes. Its commands allow one to create, read, and manage Directory Service data. If invoked without any commands, dscl runs in an interactive mode, reading commands from standard input. Interactive processing is terminated by the quit command. Leading dashes ("-") are optional for all commands.



## User Management
#### User Group Management
```shell
$ dscl . 
> cd /Groups

### Create User Group 'yeah'; either way
> create /Groups/yeah PrimaryGroupID 6666
> create /Groups/yeah gid 6666

### Add User 'yeah' to Group 'yeah'; either way
> append /Groups/yeah GroupMembership yeah
> merge /Groups/yeah users yeah

### Delete User 'yeah' form User Group 'yeah'
> delete /Groups/yeah GroupMembership yeah
### Delete User Group 'yeah'
> delete /Groups/yeah

### Lookup Info
> read /Groups/yeah [PrimaryGroupID] [GroupMembership]
> list /Groups [PrimaryGroupID] [GroupMembership]
```


#### User Management
```shell
$ dscl . 
> cd /Users

### Create User 'yeah' & allocate uid ; either way
> create /User/yeah UniqueID 8888
> create /User/yeah uid 8888

### add user 'yeah' to groups 6666 
> create /User/yeah PrimaryGroupID 6666
> create /User/yeah gid 6666
## Add user to admin group
> merge /Groups/admin users yeah
## Add user 'yeah' to Group 'yeah'; either way
> append /Groups/yeah GroupMembership yeah
> merge /Groups/yeah users yeah
## Delete User 'yeah' form User Group 'yeah'
> delete /Groups/yeah GroupMembership yeah

### Allocate User 'yeah' a bash shell
> create /User/yeah Usershell /bin/bash
> create /User/yeah shell /bin/bash

### Set realname for User 'yeah'
> create /User/yeah realname "oh yeah b"

### Set password for User 'yeah' as null (\*)
> create /User/yeah passwd '*'

### Change password for user 'yeah'
$ sudo passwd yeah
$ Changing password for yeah.
$ New password: ********
$ Retype new password: ********

### Allocate user 'yeah' home directory
$ sudo mkdir /User/yeah
$ sudo chown -R yeah:yeah /User/yeah
$ dscl .
> create /Users/yeah NFSHomeDirectory /Users/yeah
> create /Users/yeah home /Users/yeah

### Delet user 'yeah'
> delete /User/yeah

### Lookup info
> read /User/yeah
```


#### 📝 Notes
Here i got stuck a while. 

> **TL;DR**
> `sudo dscl . create /Groups/newGroupName gid 8888`
> `sudo dscl . create /Users/newUserName uid 6666 gid 8888`
> `sudo mkdir /User/home_dir_for_new_user`
> `chown -R newUserName:newGroupName /path/to/home/dir`
> `sudo dscl . create /Users/newUserName home /path/to/home/dir`
> `sudo dscl . create /Users/newUserName passwd '*'`
> `sudo passwd newUserName`
> `su - newUserName`


First i didn't assign gid number to new user, instead i append it to `staff` group on mac, which seems to have errors. 

So i assigned a new gid number to the new user (a new group, not `staff`) and set the `PrimaryGroupID` as it. (It seems like that the new user must have its `PrimaryGroupID` as a new gid rather than `staff` ?? ) This step is important because otherwise the new user cannot use `chown`.

After above i create the new user's home directory with sudo and `chown` that directory to new user. `chown  -R user:usergroup /path/to/home/dir`
Then set the home dir as the new user's home `sudo dscl . create /User/username home /path/to/home/dir`

However at this point i cannot `su` to this new user. i then set the password for it as null `sudo dscl . create /User/username passwd '*'` but it didn't work. I tried setting it as not null but didn't work either. 
Then i tried `sudo passwd username`. This worked.


[【小技巧】macOS 下用 dscl 命令行管理用户 - tobrainto的文章 - 知乎]: https://zhuanlan.zhihu.com/p/380906865
[chown illegal group name]: https://stackoverflow.com/questions/15980675/chown-illegal-group-name-mac-os-x
[Why can't I use my newly created user with chown?]: https://superuser.com/questions/923524/why-cant-i-use-my-newly-created-user-with-chown



## Ref

