# Windows-Specific Software

[TOC]



## Res
### Related Topics



## Intro


### 👉 PowerToys


### 👉 AutoHotkey



## Ref
[👍 改造 Windows 电脑，使其与 Mac 的操作相统一 | 少数派]: https://sspai.com/post/90212

[problem remapping key in cygwin and putty]: https://www.autohotkey.com/board/topic/8359-problem-remapping-key-in-cygwin-and-putty/

Steps:  
1) Save the following as Remap.reg or similar.  
2) Launch the file to put this info into the registry.  
3) Reboot for the changes to take effect.  

```
Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Keyboard Layout]

"Scancode Map"=hex:00,00,00,00,00,00,00,00,\
; ---------------------------------------------------------------------------
; BE SURE TO UPDATE THE COUNT BELOW TO REFLECT THE TOTAL NUMBER OF REMAPS + 1 (and write it as hexadecimal, not decimal)
; (1 extra for the null terminator):
; ---------------------------------------------------------------------------
04,00,00,00,\
; 01. Delete sent in place of Insert:
53,E0,52,E0,\
; 02. Home sent in place of Delete:
47,E0,53,E0,\
; 03. Insert sent in place of Home:
52,E0,47,E0,\
; 04. Null Terminator -- be sure to change the count at the top to reflect this number.
00,00,00,00
```

**How to Customize the Above**: The numbers above are the last two digits of the key's scan code as shown on AutoHotkey's Key History screen. However, all the E0's are different: an E0 is present when AutoHotkey's scan code has a first digit of 1. By contrast, 00 is present when the first digit is 0 (doesn't apply in this particular example).  
  
To return to your original layout, you can clear or delete the "Scancode Map" item in the above registry location (then reboot).
