# Linux VFS (Virtual Filesystem Switch, Virtual File System)

[TOC]



## Res
### Related Topics



## Intro
> 🔗 https://docs.kernel.org/filesystems/vfs.html

The Virtual File System (also known as the Virtual Filesystem Switch) is the software layer in the kernel that provides the filesystem interface to userspace programs. It also provides an abstraction within the kernel which allows different filesystem implementations to coexist.

VFS system calls open(2), stat(2), read(2), write(2), chmod(2) and so on are called from a process context. Filesystem locking is described in the document [Locking](https://docs.kernel.org/filesystems/locking.html).

---
> 📎 https://linux-kernel-labs.github.io/refs/heads/master/lectures/intro.html

The Linux Virtual Filesystem Switch implements common / generic filesystem code to reduce duplication in filesystem drivers. It introduces certain filesystem abstractions such as:
- inode - describes the file on disk (attributes, location of data blocks on disk)
- dentry - links an inode to a name
- file - describes the properties of an opened file (e.g. file pointer)
- superblock - describes the properties of a formatted filesystem (e.g. number of blocks, block size, location of root directory on disk, encryption, etc.)

![](../../../../../../../../../Assets/Pics/Pasted%20image%2020240531204951.png)

The Linux VFS also implements a complex caching mechanism which includes the following:
- the inode cache - caches the file attributes and internal file metadata
- the dentry cache - caches the directory hierarchy of a filesystem
- the page cache - caches file data blocks in memory


### Directory Entry Cache (`dcache`)
The VFS implements the open(2), stat(2), chmod(2), and similar system calls. The pathname argument that is passed to them is used by the VFS to search through the directory entry cache (also known as the dentry cache or dcache). This provides a very fast look-up mechanism to translate a pathname (filename) into a specific dentry. Dentries live in RAM and are never saved to disc: they exist only for performance.

The dentry cache is meant to be a view into your entire filespace. As most computers cannot fit all dentries in the RAM at the same time, some bits of the cache are missing. In order to resolve your pathname into a dentry, the VFS may have to resort to creating dentries along the way, and then loading the inode. This is done by looking up the inode.


### The `Inode` Object
> ↗ [FAQ /👉 diff between hard link & soft link (symlink, symbolic link)](../../../../FAQ.md#👉%20diff%20between%20hard%20link%20&%20soft%20link%20(symlink,%20symbolic%20link))

An individual dentry usually has a pointer to an inode. Inodes are filesystem objects such as regular files, directories, FIFOs and other beasts. They live either on the disc (for block device filesystems) or in the memory (for pseudo filesystems). Inodes that live on the disc are copied into the memory when required and changes to the inode are written back to disc. A single inode can be pointed to by multiple dentries (hard links, for example, do this).

To look up an inode requires that the VFS calls the lookup() method of the parent directory inode. This method is installed by the specific filesystem implementation that the inode lives in. Once the VFS has the required dentry (and hence the inode), we can do all those boring things like open(2) the file, or stat(2) it to peek at the inode data. The stat(2) operation is fairly simple: once the VFS has the dentry, it peeks at the inode data and passes some of it back to userspace.


### The File Object
Opening a file requires another operation: allocation of a file structure (this is the kernel-side implementation of file descriptors). The freshly allocated file structure is initialized with a pointer to the dentry and a set of file operation member functions. These are taken from the inode data. The open() file method is then called so the specific filesystem implementation can do its work. You can see that this is another switch performed by the VFS. The file structure is placed into the file descriptor table for the process.

Reading, writing and closing files (and other assorted VFS operations) is done by using the userspace file descriptor to grab the appropriate file structure, and then calling the required file structure method to do whatever is required. For as long as the file is open, it keeps the dentry in use, which in turn means that the VFS inode is still in use.


### The Address Space Object


### The `Superblock` Object



## Ref

