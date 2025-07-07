# User Management

[TOC]



## Res
↗ [Directory Service Mangement](../Process%20Management/Directory%20Service%20Mangement/Directory%20Service%20Mangement.md)



## User Data Query
### 👉 `finger` | `fingerd`
The finger utility displays information about the system users.


### 👉 `w` | `who`
1️⃣ w – display who is logged in and what they are doing

The w utility prints a summary of the current activity on the system, including what each user is doing. The first line displays the current time of day, how long the system has been running, the number of users logged into the system, and the load averages. The load average numbers give the number of jobs in the run queue averaged over 1, 5 and 15 minutes.

The fields output are the user's login name, the name of the terminal the user is on, the host from which the user is logged in, the time the user logged on, the time since the user last typed anything, and the name and arguments of the current process.

2️⃣ who – display who is on the system
The who utility displays information about currently logged in users. By default, this includes the login name, tty name, date and time of login and remote hostname if not local.


### 👉 `last`
Last will list the sessions of specified users, ttys, and hosts, in reverse time order. Each line of output contains the user name, the tty from which the session was conducted, any hostname, the start and stop times for the session, and the duration of the session. If the session is still continuing or was cut short by a crash or shutdown, last will so indicate.


### 👉 `utmpx` | `wtmpx`

#### `endutxent` | `getutxent` | `getutxid` | `getutxline` | `pututxline` | `setutxent` 
endutxent, getutxent, getutxid, getutxline, pututxline, setutxent – user accounting database – user accounting database functions


#### `utmp` | `wtmp`



## User Data Update
### 👉 `dscl`
↗ [dscl](../Process%20Management/Directory%20Service%20Mangement/dscl.md)


### 👉 `launchctl`
↗ [launchd & launchctl](../Process%20Management/System%20Service%20Management/launchd%20&%20launchctl.md)


### 👉 `chpass` | `chfn` | `chsh`
chpass, chfn, chsh – add or change user database information.

The chpass utility allows editing of the user database information associated with user or, by default, the current user.

The chpass utility cannot change the user's password on Open Directory systems. Use the passwd(1) utility instead.

The chfn, and chsh utilities behave identically to chpass. (There is only one program.)

The information is formatted and supplied to an editor for changes.
Only the information that the user is allowed to change is displayed.


### 👉 `login` | `passwd` | `getusershell`



## Ref

