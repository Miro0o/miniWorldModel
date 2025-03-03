# pyOpenSSL

[TOC]



## Res
🏠 https://www.pyopenssl.org/en/latest/index.html
🏠 https://pypi.org/project/pyOpenSSL/



## Intro
> ❗❗ **Note:** The Python Cryptographic Authority **strongly suggests** the use of [pyca/cryptography](https://github.com/pyca/cryptography) where possible. If you are using pyOpenSSL for anything other than making a TLS connection **you should move to cryptography and drop your pyOpenSSL dependency**.

High-level wrapper around a subset of the OpenSSL library. Includes
- SSL.Connection objects, wrapping the methods of Python’s portable sockets
- Callbacks written in Python
- Extensive error-handling mechanism, mirroring OpenSSL’s error codes
… and much more.

You can find more information in the [documentation](https://pyopenssl.org/). Development takes place on [GitHub](https://github.com/pyca/pyopenssl).

---

`pyOpenSSL` is a rather thin wrapper around (a subset of) the OpenSSL library. With thin wrapper we mean that a lot of the object methods do nothing more than calling a corresponding function in the OpenSSL library.



## Ref
[python实现从证书中提取公私钥信息及公私钥加解密 | CSDN]: https://blog.csdn.net/weixin_37579123/article/details/89711365
[从openssl rsa pem文件中提取公私钥数据实现 | CSDN]: https://blog.csdn.net/fengbingchun/article/details/106546012

[openssl 查看证书]: https://www.cnblogs.com/liujx2019/p/12706829.html


