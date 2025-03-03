# pyca/cryptography

[TOC]



## Res
📂 https://cryptography.io/en/latest/



## Intro
`cryptography` includes both high level recipes and low level interfaces to common cryptographic algorithms such as symmetric ciphers, message digests, and key derivation functions. For example, to encrypt something with `cryptography`’s high level symmetric encryption recipe:
```python
from cryptography.fernet import Fernet
>>> # Put this somewhere safe!
>>> key = Fernet.generate_key()
>>> f = Fernet(key)
>>> token = f.encrypt(b"A really secret message. Not for prying eyes.")
>>> token
b'...'
>>> f.decrypt(token)
b'A really secret message. Not for prying eyes.'
```

If you are interested in learning more about the field of cryptography, we recommend [Crypto 101, by Laurens Van Houtven](https://www.crypto101.io/) and [The Cryptopals Crypto Challenges](https://cryptopals.com/).




## Ref
[👍 python证书生成篇 | CSDN]: https://blog.csdn.net/weixin_40292043/article/details/122698756


