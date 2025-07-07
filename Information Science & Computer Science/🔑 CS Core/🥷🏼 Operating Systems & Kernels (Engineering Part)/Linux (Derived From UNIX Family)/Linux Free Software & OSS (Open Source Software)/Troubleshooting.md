# Troubleshooting

[TOC]



## 👉 sed "undefined label" on macOS
#sed #macos 
 
A quick fix for others with similar problems (on **MacOS**) might be: ❗prepend your string expression with an empty string: `''`

For example: instead of
```bash
sed -i 's/foo/bar/g' text.txt
```

write:
```bash
sed -i '' 's/foo/bar/g' text.txt
```

---
The name of the label terminates with the first literal newline, not at the semi-colon. There are two easy ways to solve the problem. Add literal newlines:
``` shell
 sed '/SUCCESSFUL/d 
    /\[java\]/!b label
    s/\s\+\[java\]//
    /^\s*$$/d; /Compiling/!d
    :label
    /^\s*$$/d
    s/^/monitor: /'
```

Or use multiple `-e` options:
``` shell
sed -e '/SUCCESSFUL/d ; /\[java\]/!b label' \
  -e 's/\s\+\[java\]//; /^\s*$$/d; /Compiling/!d' \
  -e':label' -e'/^\s*$$/d; s/^/monitor: /'
```

[sed "undefined label" on MacOS | stackoverflow]: https://stackoverflow.com/questions/12272065/sed-undefined-label-on-macos
[sed command with -i option failing on Mac, but works on Linux | stackoverflow]: https://stackoverflow.com/q/4247068



## 👉 RE error: illegal byte sequence on Mac OS X | `sed`
#macos #sed

> 🔗 https://stackoverflow.com/a/23584470/16542494

A sample command that exhibits the symptom: `sed 's/./@/' <<<$'\xfc'` fails, because byte `0xfc` is not a valid UTF-8 char.  
Note that, by contrast, _GNU_ `sed` (Linux, but also installable on macOS) simply passes the invalid byte through, without reporting an error.

Using the **[formerly accepted answer](https://stackoverflow.com/a/19770395/45375) is an option if you don't mind losing support for your true locale** (if you're on a US system and you never need to deal with foreign characters, that may be fine.)

However, the **same effect can be had _ad-hoc_ for a _single command_ only**:
```bash
LC_ALL=C sed -i "" 's|"iphoneos-cross","llvm-gcc:-O3|"iphoneos-cross","clang:-Os|g' Configure
```

Note: What matters is an _effective_ `LC_CTYPE` setting of `C`, so `LC_CTYPE=C sed ...` would _normally_ also work, but if `LC_ALL` happens to be set (to something other than `C`), it will override individual `LC_*`-category variables such as `LC_CTYPE`. Thus, the most robust approach is to set `LC_ALL`.

However, (effectively) setting `LC_CTYPE` to `C` treats strings **as if each byte were its own character** (_no_ interpretation based on encoding rules is performed), with **no regard** for the - multibyte-on-demand - **UTF-8 encoding** that OS X employs by default, where **foreign characters** have **multibyte encodings**.

In a nutshell: **setting `LC_CTYPE` to `C`** causes the shell and utilities to only recognize basic English letters as letters (the ones in the 7-bit ASCII range), so that **foreign chars. will not be treated as letters**, causing, for instance, upper-/lowercase conversions to fail.

Again, this may be fine if you needn't _match_ multibyte-encoded characters such as `é`, and simply want to _pass such characters through_.

If this is insufficient and/or you want to **understand the cause** of the original error (including determining what input bytes caused the problem) and **perform encoding conversions** on demand, **read on** below.

---
The problem is that the input file's encoding does not match the shell's.  
More specifically, **the input file contains characters encoded in a way that is not valid in UTF-8** (as @Klas Lindbäck stated in a comment) - that's what the `sed` error message is trying to say by `invalid byte sequence`.

Most likely, your input file uses a **single-byte 8-bit encoding** such as `ISO-8859-1`, frequently used to encode "Western European" languages.

**Example:**
The accented letter `à` has Unicode codepoint `0xE0` (224) - the same as in `ISO-8859-1`. However, due to the nature of _UTF-8_ encoding, this single codepoint is represented as _2_ bytes - `0xC3 0xA0`, whereas trying to pass the _single byte_ `0xE0` is _invalid_ under UTF-8.

Here's a **demonstration of the problem** using the string `voilà` encoded as `ISO-8859-1`, with the `à` represented as _one_ byte (via an ANSI-C-quoted bash string (`$'...'`) that uses `\x{e0}`to create the byte):

Note that the `sed` command is effectively a no-op that simply passes the input through, but we need it to provoke the error:
```bash
  # -> 'illegal byte sequence': byte 0xE0 is not a valid char.
sed 's/.*/&/' <<<$'voil\x{e0}'
```

To simply **_ignore_ the problem**, the above `LCTYPE=C` approach can be used:
```bash
  # No error, bytes are passed through ('á' will render as '?', though).
LC_CTYPE=C sed 's/.*/&/' <<<$'voil\x{e0}'
```

If you want to **determine which parts of the input cause the problem**, try the following:
```bash
  # Convert bytes in the 8-bit range (high bit set) to hex. representation.
  # -> 'voil\x{e0}'
iconv -f ASCII --byte-subst='\x{%02x}' <<<$'voil\x{e0}'
```

The output will show you all bytes that have the high bit set (bytes that exceed the 7-bit ASCII range) in hexadecimal form. (Note, however, that that also includes correctly encoded UTF-8 multibyte sequences - a more sophisticated approach would be needed to specifically identify invalid-in-UTF-8 bytes.)

---
**Performing encoding conversions on demand**:
Standard utility `iconv` can be used to convert to (`-t`) and/or from (`-f`) encodings; `iconv -l`lists all supported ones.

**Examples:**
Convert FROM `ISO-8859-1` to the encoding in effect in the shell (based on `LC_CTYPE`, which is `UTF-8`-based by default), building on the above example:
```bash
  # Converts to UTF-8; output renders correctly as 'voilà'
sed 's/.*/&/' <<<"$(iconv -f ISO-8859-1 <<<$'voil\x{e0}')"
```

Note that this _conversion allows you to properly match foreign characters_:
```bash
  # Correctly matches 'à' and replaces it with 'ü': -> 'voilü'
sed 's/à/ü/' <<<"$(iconv -f ISO-8859-1 <<<$'voil\x{e0}')"
```

To convert the input BACK to `ISO-8859-1` after processing, simply pipe the result to another `iconv` command:
```bash
sed 's/à/ü/' <<<"$(iconv -f ISO-8859-1 <<<$'voil\x{e0}')" | iconv -t ISO-8859-1
```

[RE error: illegal byte sequence on Mac OS X]: https://stackoverflow.com/questions/19242275/re-error-illegal-byte-sequence-on-mac-os-x



## 👉 netcat nc: getnameinfo: Temporary failure in name resolution
#DNS #netcat #nc #network #cli 

```shell
nc -n
# -n numeric-only IP addresses, no DNS
```
- this makes things working but does not resolve the underlying issue. You should definitely take a look at your `resolv.conf` as icarus suggested for it may be in an unparseable state. See 🔗 [Temporary failure in name resolution after upgrade to Debian Buster](https://unix.stackexchange.com/questions/537035/temporary-failure-in-name-resolution-after-upgrade-to-debian-buster) or 🔗 [Temporary failure in name resolution after Debian 10 upgrade](https://unix.stackexchange.com/questions/608436/temporary-failure-in-name-resolution-after-debian-10-upgrade)


[netcat nc: getnameinfo: Temporary failure in name resolution]: https://unix.stackexchange.com/questions/592086/netcat-nc-getnameinfo-temporary-failure-in-name-resolution



## 👉 Linux Kernel `Insmod` Failed: Version Magic ... Should Be ... | Invalid Module Format
#linux_kernel #ismod #Version_magic



[Error building linux kernel module (Invalid module format) ]:https://www.linuxquestions.org/questions/linux-kernel-70/error-building-linux-kernel-module-invalid-module-format-4175704765/

[How to add SMP and Preempt in Kernel module version magic? | StackOveflow]: https://stackoverflow.com/q/55925642

Check whether `CONFIG_PREEMPT` and `CONFIG_SMP` is enabled in the kernel config of the kernel which you are using to compile your kernel module. Enable it in your kernel and then recompile your module using this config.
