# LevelDB

[TOC]



## Res
🏠 https://github.com/google/leveldb


### Related Topics


### Documentation
[LevelDB library documentation](https://github.com/google/leveldb/blob/main/doc/index.md) is online and bundled with the source code

See [doc/index.md](https://github.com/google/leveldb/blob/main/doc/index.md) for more explanation. See [doc/impl.md](https://github.com/google/leveldb/blob/main/doc/impl.md) for a brief overview of the implementation.



## Intro
LevelDB is a fast key-value storage library written at Google that provides an ordered mapping from string keys to string values.
- Keys and values are arbitrary byte arrays.
- Data is stored sorted by key.
- Callers can provide a custom comparison function to override the sort order.
- The basic operations are `Put(key,value)`, `Get(key)`, `Delete(key)`.
- Multiple changes can be made in one atomic batch.
- Users can create a transient snapshot to get a consistent view of data.
- Forward and backward iteration is supported over the data.
- Data is automatically compressed using the [Snappy compression library](https://google.github.io/snappy/).
- External activity (file system operations etc.) is relayed through a virtual interface so users can customize the operating system interactions.



## Ref
[🎬【C++】Google LevelDB源码阅读方法]: https://www.bilibili.com/video/BV1Nb421H7Vo/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
