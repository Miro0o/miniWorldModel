# hashlib

[TOC]



## Res


## Intro
```python
import hashlib

data = "你好"   # 要进行加密的数据
data_sha = hashlib.sha256(data.encode('utf-8')).hexdigest()   
print(data_sha)
```



## Ref

