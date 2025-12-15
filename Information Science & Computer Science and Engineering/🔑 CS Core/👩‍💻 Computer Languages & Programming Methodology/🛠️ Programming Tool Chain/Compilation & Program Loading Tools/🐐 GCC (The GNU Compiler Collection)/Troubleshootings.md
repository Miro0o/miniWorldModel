# Troubleshooting

[TOC]



## 👉 "fatal error: bits/libc-header-start.h: No such file or directory" when compiling with -m32
#gcc #CFLAGS 

The `-m32` is telling gcc to compile for a 32-bit platform. On a 64-bit machine, gcc normally only comes with 64-bit libraries. You have two options:

1.  Install 32-bit headers and libraries. Here's how you'd do this on Ubuntu.
    Run this command:
    ```c
    sudo apt-get install gcc-multilib
    ```


2.  Compile for 64-bit instead. Modify this line in the file named `configure`:
    ```c
     CFLAGS="-m32 -ansi -D_SVID_SOURCE -DOSS_AUDIO -D'ARCH=\"$host_cpu\"' $CFLAGS"
    ``` 
    
    Delete `-m32`, giving you:
    ```c
     CFLAGS="-ansi -D_SVID_SOURCE -DOSS_AUDIO -D'ARCH=\"$host_cpu\"' $CFLAGS"
    ```
    
    Run `./configure`, then `make clean`, then `make`
    
    However, I would recommend against this approach. The library authors went out of their way to make this build for 32 bits on a 64-bit system, and I can't guarantee that it will work correctly if you do this. (It does compile, though.)


["fatal error: bits/libc-header-start.h: No such file or directory" while compiling HTK]: https://stackoverflow.com/questions/54082459/fatal-error-bits-libc-header-start-h-no-such-file-or-directory-while-compili



## 👉 Installing GDB on macOS
#GDB #macos #pwndbg

UPDATE 2023/10

I quit using gdb & pwndbg on macOS.
;)

---

A lot has changed since Apple dropped GDB support in favor of LLDB, and some devs on the Lazarus team have done great effort to make LLDB work, and it does. 

> Especially for Apple Silicon Mac's you'd probably want to use LLDB as it seems GDB does not yet support Apple Silicon. (by far 2023.3)

🔗 https://formulae.brew.sh/formula/gdb

gdb requires special privileges to access Mach ports.  
You will need to codesign the binary. For instructions, see: 🔗 https://sourceware.org/gdb/wiki/PermissionsDarwin

Belows are quoting from above site:

1. **Special Privileges** 
If you try to use your [freshly built gdb](https://sourceware.org/gdb/wiki/BuildingOnDarwin), you might get an error message such as: 
```shell
Starting program: /x/y/foo
Unable to find Mach task port for process-id 28885: (os/kern) failure (0x5).
 (please check gdb is codesigned - see taskgated(8))
```

This is because **modern Darwin kernels restrict the capability to assume control over another process (here, for the purpose of debugging it), since that capability is a boon to malware.** In order for said taskgated to grant access to gdb, the latter must be fitted with [entitlements](https://developer.apple.com/documentation/security/hardened_runtime), which consist of [digitally-signed metadata](https://developer.apple.com/library/archive/documentation/Security/Conceptual/CodeSigningGuide/Procedures/Procedures.html) inside the gdb binary.


2. **Troubleshooting / Further Diagnosis**

> ⚠ **There is plenty of other reasons why gdb might not work on Darwin**, besides it not being code-signed with the com.apple.security.cs.debugger entitlement. 

- [gdb does not understand “fat” binaries at the moment](https://sourceware.org/bugzilla/show_bug.cgi?id=13157). You may have to preprocess the target binary with lipo -thin x86_64
- If gdb launches the process, but then hangs, you might be running into [bug #24069](https://sourceware.org/bugzilla/show_bug.cgi?id=24069). Keep trying again until the debugger starts successfully, or apply the suggested patch and rebuild gdb. 

If, on the other hand you still get the (os/kern) failure (0x5) error, one of the following suggestions may pinpoint you to the cause.

- If you are trying to attach to a running program using gdb's attach command, then that program (the _target_ one, not gdb) must have the com.apple.security.get-task-allowentitlement set (in addition to gdb's own entitlement). You can achieve that with codesign using the same instructions and certificate you already used to sign gdb — Just change the entitlement name inside the XML plist file accordingly. 
- [Double-check all commands in the checklist](https://sourceware.org/gdb/wiki/PermissionsDarwin#checklist) and redo the corresponding step in case of trouble 
- You may have also (partly) followed the instructions from the [old method](https://sourceware.org/gdb/wiki/PermissionsDarwin#Old_method_of_giving_permission_to_gdb) section. E.g., if the gdb binary is setgid procmod, the code-signing method will _**not**_ work anymore. In that case, restore the gdb binary to the original settings with the following commands: 
```shell
$ chmod 755 gdb
$ chgrp admin gdb
```

(possibly prepended with sudo if the gdb binary is located in a place that cannot be modified by regular users or if you do not belong to the admin group, and replacing gdb with the full path to the gdb binary) 
- Ensure that you code-signed the actual gdb binary and not just a script that starts this binary (you can code-sign shell scripts too). Check using e.g. the file command that the file you code-signed is a binary and not a text file or shell script.


### ⭐️ Bug \#24069
https://sourceware.org/bugzilla/show_bug.cgi?id=24069

> Simon Marchi 2022-02-28 18:35:27 UTC
>
  Pushed: [https://sourceware.org/git/gitweb.cgi?p=binutils-gdb.git;h=7ff917016a203cdff3074abfcf96c1553944af94](https://sourceware.org/git/gitweb.cgi?p=binutils-gdb.git;h=7ff917016a203cdff3074abfcf96c1553944af94)
  Should be fixed now, if not feel free to re-open.

![](../../../../../../Assets/Pics/Screenshot%202023-03-28%20at%2011.33.47%20AM.png)

```diff
--- a/[gdb/darwin-nat.c](https://sourceware.org/git?p=binutils-gdb.git;a=blob;f=gdb/darwin-nat.c;h=8b0ecfd5b772e857b7e42cb1cfcfceaeecda5b36;hb=8b0ecfd5b772e857b7e42cb1cfcfceaeecda5b36)
+++ b/[gdb/darwin-nat.c](https://sourceware.org/git?p=binutils-gdb.git;a=blob;f=gdb/darwin-nat.c;h=adbe7474c6876412e8db1c6311c89e9bc8a1ffa3;hb=adbe7474c6876412e8db1c6311c89e9bc8a1ffa3)
@@ [-1063,7](https://sourceware.org/git?p=binutils-gdb.git;a=blob;f=gdb/darwin-nat.c;h=8b0ecfd5b772e857b7e42cb1cfcfceaeecda5b36;hb=8b0ecfd5b772e857b7e42cb1cfcfceaeecda5b36#l1063) [+1063,7](https://sourceware.org/git?p=binutils-gdb.git;a=blob;f=gdb/darwin-nat.c;h=adbe7474c6876412e8db1c6311c89e9bc8a1ffa3;hb=adbe7474c6876412e8db1c6311c89e9bc8a1ffa3#l1063) @@ darwin_nat_target::decode_message (mach_msg_header_t *hdr,
     }
   else if (hdr->msgh_id == 0x48)
     {
-      /* MACH_NOTIFY_DEAD_NAME: notification for exit.  */
+      /* MACH_NOTIFY_DEAD_NAME: notification for exit *or* WIFSTOPPED.  */
       int res;
       res = darwin_decode_notify_message (hdr, &inf);
@@ [-1103,15](https://sourceware.org/git?p=binutils-gdb.git;a=blob;f=gdb/darwin-nat.c;h=8b0ecfd5b772e857b7e42cb1cfcfceaeecda5b36;hb=8b0ecfd5b772e857b7e42cb1cfcfceaeecda5b36#l1103) [+1103,34](https://sourceware.org/git?p=binutils-gdb.git;a=blob;f=gdb/darwin-nat.c;h=adbe7474c6876412e8db1c6311c89e9bc8a1ffa3;hb=adbe7474c6876412e8db1c6311c89e9bc8a1ffa3#l1103) @@ darwin_nat_target::decode_message (mach_msg_header_t *hdr,
                  return minus_one_ptid;
                }
              if (WIFEXITED (wstatus))
-               status->set_exited (WEXITSTATUS (wstatus));
-             else
+               {
+                 status->set_exited (WEXITSTATUS (wstatus));
+                 inferior_debug (4, _("darwin_wait: pid=%d exit, status=0x%x\n"),
+                                 res_pid, wstatus);
+               }
+             else if (WIFSTOPPED (wstatus))
+               {
+                 /* Ignore stopped state, it will be handled by the next
+                    exception.  */
+                 status->set_ignore ();
+                 inferior_debug (4, _("darwin_wait: pid %d received WIFSTOPPED\n"),
+                                 res_pid);
+                 return minus_one_ptid;
+               }
+             else if (WIFSIGNALED (wstatus))
                {
                  status->set_signalled
                    (gdb_signal_from_host (WTERMSIG (wstatus)));
+                 inferior_debug (4, _("darwin_wait: pid=%d received signal %d\n"),
+                                 res_pid, status->sig());
+               }
+             else
+               {
+                 status->set_ignore ();
+                 warning (_("Unexpected wait status after MACH_NOTIFY_DEAD_NAME "
+                            "notification: 0x%x"), wstatus);
+                 return minus_one_ptid;
                }
-
-             inferior_debug (4, _("darwin_wait: pid=%d exit, status=0x%x\n"),
-                             res_pid, wstatus);
              return ptid_t (inf->pid);
            }
```


🤷‍♀️ However I don't know how to use this patch... It seems that homebrew installed the executable directly and there are no binary files on my mac. I need to rebuild gdb from source but IDK where to get one that's most up-to-date and following above bug pattern. 
My workaround for this is simply using lldb; later I tried to use it on `OrbStack Linux machines`. So far so good. Though if you need to debug on a 32-bit program there is still some fuss to deal with. 



[Why does gdb hang after running]: https://stackoverflow.com/questions/60499508/why-does-gdb-hang-after-running
[macOS - Install GDB in 2023 (for use with Lazarus Pascal)]: https://www.tweaking4all.com/forum/delphi-lazarus-free-pascal/macos-install-gdb-in-2023-for-use-with-lazarus-pascal/
[Debug with GDB on macOS 11]: https://gist.github.com/mike-myers-tob/9a6013124bad7ff074d3297db2c98247

[Unable to find Mach task port #55]: https://github.com/cs01/gdbgui/issues/55
[7.5.1 Codesigning the Debugger]: https://gcc.gnu.org/onlinedocs/gnat_ugn/Codesigning-the-Debugger.html

[gdb fails with "Unable to find Mach task port for process-id" error]: https://stackoverflow.com/questions/11504377/gdb-fails-with-unable-to-find-mach-task-port-for-process-id-error

