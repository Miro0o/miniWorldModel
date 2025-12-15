# Text & File & Dir Management Basics

[TOC]



## Res
### Related Topics
↗ [Awesome File & Dir Management](../📌%20Awesome%20Open%20Source%20CLI%20Software/Awesome%20File%20&%20Dir%20Management.md)
↗ [Awesome CLI Integration](../📌%20Awesome%20Open%20Source%20CLI%20Software/Awesome%20CLI%20Integration.md)
↗ [Awesome Text Processing & Data Manipulation](../📌%20Awesome%20Open%20Source%20CLI%20Software/Awesome%20Text%20Processing%20&%20Data%20Manipulation.md)

↗ [Files Management](../../../../Generic%20Software%20Tools%20&%20Projects/Files%20Management/Files%20Management.md)



## File & Directory Management Basics
### 👉 `ls` | `eva` | `lsd`
↗ [Awesome CLI Integration](../📌%20Awesome%20Open%20Source%20CLI%20Software/Awesome%20CLI%20Integration.md)


### 👉 `tree`


### 👉 `cat` | `bat` | `ccat`
↗ [Awesome CLI Integration](../📌%20Awesome%20Open%20Source%20CLI%20Software/Awesome%20CLI%20Integration.md)


### 👉 `head`/`tail` | `more`/`less`


### 👉 `touch` | `mkdir`


### 👉 `mv` | `cp`

[linux复制指定目录下的全部文件到另一个目录中，linux cp 文件夹]: https://www.cnblogs.com/zdz8207/p/linux-cp-dir.html


### 👉 `rm` | `rmdir`



## ELF File Info & Manipulation
### 👉 `file` 
```shell
file

Determine file type.
More information: <https://manned.org/file>.

- Give a description of the type of the specified file. Works fine for files with no file extension:
    file filename

- Look inside a zipped file and determine the file type(s) inside:
    file -z foo.zip

- Allow file to work with special or device files:
    file -s filename

- Don't stop at first file type match; keep going until the end of the file:
    file -k filename

- Determine the MIME encoding type of a file:
```

### 👉 `size`


### 👉 `objdump` | `objcopy` | `xdd`


### 👉 `readelf`


### 👉 `nm`


### 👉 `strip`



## File Breakup /Convert
### 👉 `binwalk` | `foremost` | `dd` | `iconv`
#### binwalk
↗ [binwalk](../../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/🩻%20SRE%20&%20Binary%20Analysis/binwalk.md)
#### dd
```shell
dd

Convert and copy a file.
More information: <https://ss64.com/osx/dd.html>.

- Make a bootable USB drive from an isohybrid file (such like `archlinux-xxx.iso`):
    dd if=file.iso of=/dev/usb_drive

- Clone a drive to another drive with 4 MB block and ignore error:
    dd if=/dev/source_drive of=/dev/dest_drive bs=4m conv=noerror

- Generate a file of 100 random bytes by using kernel random driver:
    dd if=/dev/urandom of=random_file bs=100 count=1

- Benchmark the write performance of a disk:
    dd if=/dev/zero of=file_1GB bs=1024 count=1000000
    
- Skip counts (total number of $count, but skip the first $skip):
	dd if=/input/file/path of=output/file/path count=100 skip=2
	
```

[Linux 创建指定大小的文件]: https://www.cnblogs.com/guanghe/p/8908814.html
[👍 https://manpages.debian.org/testing/coreutils/dd.1.en.html]: https://manpages.debian.org/testing/coreutils/dd.1.en.html
#### foremost
foremost - Recover files using their headers, footers, and data structures
#### iconv


### 👉 `zip2john` | `7z2john`



## File Checksum
### 👉 `md5` | `md5sum`


### 👉 `md5collgen`
> This tool is from ↗ [SeedLab - Cryptography](../../../../../CyberSecurity/☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🎯%20Cyber%20Ranges%20&%20Labs/🧪%20Ranges%20&%20Security%20Labs/SEED%20Project/SeedLab%20-%20Cryptography.md#👉%20MD5%20Collision%20Attack%20Lab)


### 👉 `shasum`


### 👉 `certutil`
certutil -hashfile \<filename\> [md5]



## File Permissions
### 👉 `chmod` | `chown` | `chgrp`



## File Compression
### 👉 `tar`


[Quick Benchmark: Gzip vs Bzip2 vs LZMA vs XZ vs LZ4 vs LZO]: https://catchchallenger.first-world.info/wiki/Quick_Benchmark:_Gzip_vs_Bzip2_vs_LZMA_vs_XZ_vs_LZ4_vs_LZO

[tar压缩解压缩命令详解]: https://www.cnblogs.com/jyaray/archive/2011/04/30/2033362.html


### 👉 `zip`


### 👉 `7z`



## Ref
[👍 Linux Cygwin知识库（二）：目录、文件及基本操作]: https://silaoa.github.io/2019/2019-05-04-Linux%20Cygwin知识库（二）：目录、文件及基本操作.html

[How to Copy a File to Multiple Directories in Linux | geeksforgeeks]: https://www.geeksforgeeks.org/how-to-copy-a-file-to-multiple-directories-in-linux/
```shell
# use xargs
xargs -n 1 cp -v xyz.txt<<<"dir1 dir2 /home/kalilinux/dir3" 
echo "dir1 dir2 /home/kalilinux/dir3" | xargs -n 1 cp -v xyz.txt

# use find
find dir1 dir2 /home/kalilinux/dir3 -maxdepth 0 -exec cp xyz.txt {} \;

# use shell loop
for dest in dir1 /home/kalilinux/dir2 /home/kalilinux/dir3 ; do cp -v xyz.txt “$dest” ; done

# use tee
tee /home/kalilinux/dir1/xyz.txt /home/kalilinux/dir2/xyz.txt /home/kalilinux/dir3/xyz.txt< xyz.txt

# use GNU parallel
parallel cp -v xyz.txt ::: /home/kalilinux/dir1 /home/kalilinux/dir2 dir3
```
