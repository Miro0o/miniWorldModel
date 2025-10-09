# Forensics & Counter Forensics Tools

[TOC]



## Res
### Related Topics
↗ [Forensics & Traceability Analysis](../../⛈️%20Risk%20Management/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Forensics%20&%20Traceability%20Analysis/Forensics%20&%20Traceability%20Analysis.md)

↗ [Windows CLI Software & Tools](../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Microsoft%20Operating%20Systems/Windows/Windows%20CLI%20Software%20&%20Tools/Windows%20CLI%20Software%20&%20Tools.md)
- ↗ [Sysinternals Suite](../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Microsoft%20Operating%20Systems/Windows/Windows%20CLI%20Software%20&%20Tools/Sysinternals%20Suite.md)

↗ [macOS CLI Software](../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Apple%20Operating%20Systems/macOS%20(Derived%20From%20UNIX%20Family)/🪓%20macOS%20CLI%20Software/macOS%20CLI%20Software.md)
- ↗ [CommandLineTools (xcode-select)](../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Apple%20Operating%20Systems/macOS%20(Derived%20From%20UNIX%20Family)/🪓%20macOS%20CLI%20Software/CommandLineTools%20(xcode-select).md)

↗ [Linux Free Software & FLOSS & FOSS](../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/Linux%20Free%20Software%20&%20OSS%20(Open%20Source%20Software)/Linux%20Free%20Software%20&%20FLOSS%20&%20FOSS.md)
- ↗ [Security & Privileges](../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/Linux%20Free%20Software%20&%20OSS%20(Open%20Source%20Software)/Security%20&%20Privileges/Security%20&%20Privileges.md)
- ↗ [Network Management Basics](../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/Linux%20Free%20Software%20&%20OSS%20(Open%20Source%20Software)/Network%20Management/Network%20Management%20Basics.md)
- ↗ [Host Management Basics](../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/Linux%20Free%20Software%20&%20OSS%20(Open%20Source%20Software)/Host%20Management/Host%20Management%20Basics.md)
	- ↗ [📌 Computer Profiling & System Visibility](../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/Linux%20Free%20Software%20&%20OSS%20(Open%20Source%20Software)/Host%20Management/📌%20Computer%20Profiling%20&%20System%20Visibility.md)
↗ [UNIX System Services](../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/UNIX%20Family/💂‍♂️%20UNIX%20System%20Services/UNIX%20System%20Services.md)

↗ [Files Management](../../../🔑%20CS%20Core/Generic%20Software%20Tools%20&%20Projects/Files%20Management/Files%20Management.md)


### Other Resources
[SharpWxDump](https://github.com/AdminTest0/SharpWxDump)
微信客户端取证，可获取用户个人信息(昵称/账号/手机/邮箱/数据库密钥(用来解密聊天记录))；支持获取多用户信息，不定期更新新版本偏移，目前支持所有新版本、正式版本



## Forensic Tools



## Counter-Forensics
**Common Tricks**
- Time & metadata tampering
	- Tools like timestomp, EXIF cleaners, or manual system clock changes
- Log manipulation
	- Event log clearing (wevtutil cl), disabling auditing, forced rotation
- Wiping and privacy tools
	- CCleaner, BleachBit, sdelete, SSD TRIM effects
- Ephemeral activity
	- Private/incognito browsing, temporary storage, encrypted or cloud-only volumes

**Common Tools**
Metasploit Framework (post-exploitation modules)
- Use: Several post-modules can clear **Windows Event Logs** after exploitation
- Examples:
	- `post/windows/manage/clearlogs` → clears Application, System, and Security logs
	- `post/multi/gather/log_wiper` (community modules)
- Pros: Automatable, scriptable, integrates with other actions

PowerShell & Sysinternals (Windows)
- Very common:
	- `wevtutil cl <logname>` → clears specific Windows Event Logs
	- `Clear-EventLog cmdlet` → quick batch clearing
	- `Sysinternals SDelete` → securely wipes deleted log files to make recovery harder
- Often combined in scripts to clear or selectively truncate logs

Linux: shell + logrotate
- `> /var/log/auth.log`
- `> /var/log/syslog`
or edit logrotate configs to rotate-and-delete targeted logs immediately
Some adversaries also deploy custom cron jobs to keep wiping recent entries



## Anti-Counter-Forensics
**Spot the Gap — Timeline Correlation**
- Even if logs are wiped, **their absence itself is evidence**.
- Typical signs:
	- Log files exist, but their internal sequence IDs restart suddenly
	- There’s a suspicious “quiet” period in logs between otherwise normal activity
	- Timestamps around the log files (modification / creation) don’t match expected patterns
- Build system-wide timelines (e.g. with Autopsy, Plaso, or log2timeline) and look for:
	- When the log file .evtx was last modified
	- What happened just before and after that timestamp
	- Any associated events (e.g. privilege escalation, remote shell access) preceding the wipe

**Check other artifacts**
- Even if Windows Event Logs are cleared, other subsystems keep traces:
	- `$MFT / $UsnJrnl`
		- Shows the log file being truncated or rewritten (new record)
	- `SetupAPI.dev.log / Prefetch / Shimcache / Amcache`
		- Can show tools or executables run shortly before the wipe (e.g. wevtutil.exe, Metasploit payloads, PowerShell)
	- Command history / PowerShell Operational logs
		- Sometimes attackers forget to clear everything
	- SRUM / WMI / Task Scheduler logs
		- Provide indirect timing signals
- Document the Wipe as a finding
	- Timestamp of wipe, affected logs, correlated surrounding activity, confidence level



## Ref

