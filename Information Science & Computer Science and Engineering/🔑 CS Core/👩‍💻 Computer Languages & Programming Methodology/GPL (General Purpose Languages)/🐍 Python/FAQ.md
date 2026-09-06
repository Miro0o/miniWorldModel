# FAQ

[TOC]



## How-To
### 👉 Start a http server using python module http.server
#python_http_server

```shell
python -m http.server [port] [-d server-dir]
```

[通用技术 python 内置的 HTTP Server 是怎么实现的？]: https://www.testerhome.com/topics/32262
[Python_使用python快速启用HTTP服务器]: https://www.cnblogs.com/testlearn/p/16072669.html


### 👉 Generating `requirement.txt`
#requirement_txt #python 

```shell
$ pip freeze > requirements.txt

$ pip install pipreqs
# 在当前目录生成 
$ pipreqs . --encoding=utf8--force
```

[github.com/bndr/pipreqs](https://github.com/bndr/pipreqs)
 
 [python生成requirements.txt的两种方法 | learnku]: https://learnku.com/articles/47470
[python 项目自动生成requirements.txt文件]: https://blog.csdn.net/Irving_zhang/article/details/79087569


### 👉 求模逆元
#python #inverse_element
``` python 
pow(a, -1, m)

from Crypto.Util.number import *
print(inverse(3,7))  #3是要求逆元的数，7是模数


from gmpy2 import invert
print(invert(3,7))  #3是要求逆元的数，7是模数
 
```
 

[在 Python 中计算模乘逆]: https://www.delftstack.com/zh/howto/python/mod-inverse-python/


### 👉 数字进制转换，数字-字符转换
#python #math 

```python
# 字符 -> 字符ascii 码 （int类型，10进制）
num=ord('a')
print(num)

# 数字（int类型，10进制或其他进制，） -->  数字对应的ascii码代表的字符
num=97
print(chr(num))


int(x, base=10) # 函数用于将一个字符串或数字转换为整型。
oct(x) # 函数将一个整数转换成8进制字符串。
bin(x) # 返回一个整数 int 或者长整数 long int 的二进制表示。

# 16进制转字符串：
import binascii  
print binascii.a2b_hex(hexstr) #参数需要是字符串形式 '323648'
# base64转字符串
import base64  
print base64.b64decode(base64str)  
str.decode('base64')

# 字符串转十六进制
import binascii  
print binascii.b2a_hex(s.encode('utf-8'))

# 字符串转base64
str.encode('base64')

# 字节码解码为字符串
print bytes(b'\x31\x32\x65').decode('ascii')
```

[👍 python 进制、字符串、字节串之间各种转换]: https://m3lon.github.io/2018/05/29/python-进制、字符串、字节串之间各种转换/

[Python ASCII与数字的相互转换]: https://blog.csdn.net/sinat_38079265/article/details/123995310
[PYTHON简单的16进制转字符串]: https://blog.csdn.net/nginx123/article/details/108443451


### 👉 What is `PYTHONPATH` and how to set it
#python #PYTHONPATH

in terminal:
```shell
export PYTHONPATH=$PYTHONPATH:/home/ershisui
export PYTHONPATH=$PYTHONPATH:`pwd`:'pwd'/slim
```

in python codes:
```python
import sys sys.path.append('/home/ershisui/')

```


### 👉 Convert Bytes to String 
#python #string 

Different ways to convert Bytes to string in Python:
- Using [decode()](https://www.geeksforgeeks.org/python-strings-decode-method/) method
- Using [str()](https://www.geeksforgeeks.org/python-str-function/) function
- Using [codecs.decode()](https://www.geeksforgeeks.org/codecs-decode-in-python/) method
- Using [map()](https://www.geeksforgeeks.org/python-map-function/) without using the b prefix
- Using [pandas](https://www.geeksforgeeks.org/python-pandas-dataframe/) to convert bytes to strings

[How to Convert Bytes to String in Python ? | GeeksforGeeks]: https://www.geeksforgeeks.org/how-to-convert-bytes-to-string-in-python/



### 👉 命令行传参数
#python #cmdline

**1️⃣ sys.argv**

sys模块是很常用的模块， 它封装了与python解释器相关的数据，例如sys.modules里面有已经加载了的所有模块信息，sys.path里面是PYTHONPATH的内容，而sys.argv则封装了传入的参数数据。 
使用sys.argv接收上面第一个命令中包含的参数方式如下：

``` python
# -*- coding:utf-8 -*-
# @Date  : 2019/2/27
import sys
gpus = sys.argv[1]
#gpus = [int(gpus.split(','))]
batch_size = sys.argv[2]
print gpus
print batch_size](<# -*- coding:utf-8 -*-
# @Date  : 2019/2/27

import sys


def test_for_sys(year, name, body):
    print('the year is', year)
    print('the name is', name)
    print('the body is', body)


if __name__ == '__main__':
    try:
        year, name, body = sys.argv[1:4]
        test_for_sys(year, name, body)
    except Exception as e:
        print(sys.argv)
        print(e)>)
```

**2️⃣ argparse**
`argparse` 模块也是 Python 自带的一个命令行参数模块，这个模块才是真的为了命令行参数而生的模块，相较之下 `sys.argv` 只是碰巧可以用在命令行参数上面而已。
```python
# -*- coding:utf-8 -*-
# @Date  : 2019/2/27

import argparse


def test_for_sys(year, name, body):
    print('the year is', year)
    print('the name is', name)
    print('the body is', body)


parser = argparse.ArgumentParser(description='Test for argparse')
parser.add_argument('--name', '-n', help='name 属性，非必要参数')
parser.add_argument('--year', '-y', help='year 属性，非必要参数，但是有默认值', default=2017)
parser.add_argument('--body', '-b', help='body 属性，必要参数', required=True)
args = parser.parse_args()

if __name__ == '__main__':
    try:
        test_for_sys(args.year, args.name, args.body)
    except Exception as e:
        print(e)

```
在添加命令行参数的属性的时候，还可以有更多的设置，如下：

- name or flags：也就是在使用参数的时候使用的符号，`--foo` 或者 `-f`
- action：根据我的理解，这个属性可以选择参数在只提供符号而不输入实际的值的时候给予一个默认的值
- nargs：这个属性规定了参数可以输入的个数
- const：这属性跟 action 属性一起使用
- default：这属性就是给参数设置一个默认值
- type：这个属性规定了参数的数据类型
- choices：这个属性给参数限定了一个选择的迭代，参数只能在这个范围内选择参数的值，否则报错
- required：参数的值为必填

**3️⃣ getopt**
getopt 是 Python 中一个内置标准模块，可以结合 sys.argv 模块，直接解析脚本运行时参数。
使用格式：getopt(args,shortopts,longopts = [])。

```python
from getopt import getopt
import sys

# 获取参数
# sys.argv[1:]：获取除脚本文件名外的所有命令行参数
# opts：存有所有选项及其输入值的元组列表
# args：去除有用的输入以后剩余的部分
opts, args = getopt(sys.argv[1:], 'i:u:p:d:', ['ip=', 'user=', 'pwd=', 'db='])

# 获取参数值
# 短参数
# python3 4_getopt.py -i 127.0.0.1 -u root -p 123456 -d mysqldb
# 长参数
# python3 4_getopt.py --ip 127.0.0.1 -u root -p 123456 -d mysqldb
ip_pre = [item[1] for item in opts if item[0] in ('-i', '--ip')]
ip = ip_pre[0] if len(ip_pre) > 0 else None
print("参数ip：", ip)

user_pre = [item[1] for item in opts if item[0] in ('-u', '--user')]
user = user_pre[0] if len(user_pre) > 0 else None
print("参数user：", user)

pwd_pre = [item[1] for item in opts if item[0] in ('-p', '--pwd')]
pwd = pwd_pre[0] if len(pwd_pre) > 0 else None
print("参数pwd：", pwd)

db_pre = [item[1] for item in opts if item[0] in ('-d', '--db')]
db = db_pre[0] if len(db_pre) > 0 else None
print("参数db：", db)
```

**3️⃣ Click**
Click 是 Flask 的团队 pallets 开发的优秀开源项目，它为命令行工具的开发封装了大量方法，使开发者只需要专注于功能实现。这是一个第三方库，专门为了命令行而生的非常有名的 Python 命令行模块。
```python
# -*- coding:utf-8 -*-
# @Date  : 2019/2/27

import click

@click.command()
@click.option('--name',default='Leijun',help='name 参数，非必须，有默认值')
@click.option('--year',help='year 参数',type=int)
@click.option('--body',help='body 参数')
def test_for_sys(year, name, body):
    print('the year is', year)
    print('the name is', name)
    print('the body is', body)

if __name__ == '__main__':
    test_for_sys()

```
**4️⃣ tf.app.run**
tensorflow也提供了一种方便的解析方式。
```python
import tensorflow as tf
tf.app.flags.DEFINE_string('gpus', None, 'gpus to use')
tf.app.flags.DEFINE_integer('batch_size', 5, 'batch size')

FLAGS = tf.app.flags.FLAGS

def main(_):
    print FLAGS.gpus
    print FLAGS.batch_size

if __name__=="__main__":
    tf.app.run()
```
注意： 
1. tensorflow只提供以下几种方法： 
	1. tf.app.flags.DEFINE_string， 
	2. tf.app.flags.DEFINE_integer, 
	3. tf.app.flags.DEFINE_boolean, 
	4. tf.app.flags.DEFINE_float 四种方法，分别对应str, int,bool,float类型的参数。这里对bool的解析比较严格，传入1会被解析成True，其余任何值都会被解析成False。
2. 脚本中需要定义一个接收一个参数的main方法：def main(_):，这个传入的参数是脚本名，一般用不到， 所以用下划线接收。
3. 以batch_size参数为例，传入这个参数时使用的名称为--batch_size，也就是说，中划线不会像在argparse 中一样被解析成下划线。
4. tf.app.run()会寻找并执行入口脚本的main方法。也只有在执行了tf.app.run()之后才能从FLAGS中取出参数。从它的签名来看，它也是可以自己指定需要执行的方法的，不一定非得叫main：
```python
run( main=None, argv=None )
```
5. tf.app.flags只是对argpars的简单封装。代码见https://github.com/tensorflow/tensorflow/blob/r1.2/tensorflow/python/platform/flags.py



[Python 命令行参数的3种传入方式]: https://tendcode.com/article/python-shell/
[命令行运行Python脚本时传入参数的三种方式 | CSDN]: https://blog.csdn.net/weixin_35653315/article/details/72886718

[argparse | python docs]: https://docs.python.org/3/library/argparse.html#choices


### 👉 几种Python执行时间的计算方法
#python #time

https://blog.csdn.net/wangshuang1631/article/details/54286551

```python
import datetime
starttime = datetime.datetime.now()
#long running
#do something other
endtime = datetime.datetime.now()
print (endtime - starttime).seconds


import time
start = time.time()
#long running
#do something other
end = time.time()
print end-start


start = time.clock()
#long running
#do something other
end = time.clock()
print end-start
```


### 👉 Read Dictionary from File in Python
#python #file #syntax 

[How to read Dictionary from File in Python? | Geeksforgeeks]: https://www.geeksforgeeks.org/how-to-read-dictionary-from-file-in-python/


### 👉 numpy & array
#python #numpy #syntax 


[numpy数组初始化方法总结]: https://blog.csdn.net/m0_37602827/article/details/93595325


### 👉 How do I find the location of Python module (downloading) sources?
#python #module

I realize this answer is 4 years late, but the existing answers are misleading people.

The right way to do this is never `__file__`, or trying to walk through `sys.path` and search for yourself, etc. (unless you need to be backward compatible beyond 2.1).

It's the [`inspect`](http://docs.python.org/library/inspect.html) module—in particular, `getfile` or `getsourcefile`.

Unless you want to learn and implement the rules (which are documented, but painful, for CPython 2.x, and not documented at all for other implementations, or 3.x) for mapping `.pyc` to `.py` files; dealing with .zip archives, eggs, and module packages; trying different ways to get the path to `.so`/`.pyd` files that don't support `__file__`; figuring out what Jython/IronPython/PyPy do; etc. In which case, go for it.

Meanwhile, every Python version's source from 2.0+ is available online at `http://hg.python.org/cpython/file/X.Y/` (e.g., [2.7](http://hg.python.org/cpython/file/2.7/) or [3.3](http://hg.python.org/cpython/file/3.3/)). So, once you discover that `inspect.getfile(datetime)` is a `.so` or `.pyd` file like `/usr/local/lib/python2.7/lib-dynload/datetime.so`, you can look it up inside the Modules directory. Strictly speaking, there's no way to be sure of which file defines which module, but nearly all of them are either `foo.c` or `foomodule.c`, so it shouldn't be hard to guess that [datetimemodule.c](http://hg.python.org/cpython/file/2.7/Modules/datetimemodule.c) is what you want.

---
If you're using pip to install your modules, just `pip show $module` the location is returned.

---
Another way to check if you have multiple python versions installed, from the terminal.

```shell
$ python3 -m pip show pyperclip
$ python -m pip show pyperclip
```

[How do I find the location of Python module sources? | StackOverflow]: https://stackoverflow.com/q/269795



## 👉 How to change/ view Jupyter Notebook's python interpreter? (using `conda` to switch Jupyter Notebook's python env?)
#jupyter #python #conda 

As mentioned in the comments, conda support for jupyter notebooks is needed to switch kernels. Seems like this support is now available through conda itself (rather than relying on pip). [http://docs.continuum.io/anaconda/user-guide/tasks/use-jupyter-notebook-extensions/](http://docs.continuum.io/anaconda/user-guide/tasks/use-jupyter-notebook-extensions/)

`conda install nb_conda`

which brings three other handy extensions in addition to Notebook Conda Kernels.


---

> 💡 by default jupyter notebook uses the conda env it was started with. (This [sets the default environment](https://stackoverflow.com/q/38984238/3345375) for Jupyter Notebooks.) Otherwise, the **Root environment** is the default.



[👍 In which conda environment is jupyter executing? | Stackoverflow]: https://stackoverflow.com/q/37085665/16542494

[Change interpreter in jupyter notebook | Stackoverflow]: https://stackoverflow.com/q/58645807/16542494




## What-is
### 👉 [Difference between open and codecs.open in Python](https://stackoverflow.com/questions/5250744/difference-between-open-and-codecs-open-in-python)
#python #codec #syntax 


### 👉 [Difference between 'cls' and 'self' in Python classes?](https://stackoverflow.com/questions/4613000/difference-between-cls-and-self-in-python-classes)
#python #cls #syntax 

The distinction between `"self"` and `"cls"` is defined in [`PEP 8`](http://www.python.org/dev/peps/pep-0008/#function-and-method-arguments) . As Adrien said, this is not mandatory. It's a coding style. `PEP 8` says:

> *Function and method arguments*:
>
> Always use `self` for the first argument to instance methods.
>
> Always use `cls` for the first argument to class methods.


### 👉 Assert, isinstance
#python #assert #isinstance #syntax 

[python中assert、isinstance的用法]: https://blog.csdn.net/qiqicos/article/details/78993748
[Python assert isinstance() Vector]: https://stackoverflow.com/questions/47268107/python-assert-isinstance-vector


### 👉 Operator overloading
#python #operator_overload #syntax 

[浅析Python运算符重载](https://blog.csdn.net/goodlixueyong/article/details/52589979)


### 👉 pyhon is & ==
#python #equation #syntax 

https://www.runoob.com/note/24872

is 判断两个变量是否是引用同一个内存地址。
**is** 判断两个对象是否为同一对象, 是通过 id 来判断的; 当两个基本类型数据(或元组)内容相同时, id 会相同, 但并不代表 a 会随 b 的改变而改变。

== 判断两个变量是否相等。
== 判断两个对象的内容是否相同, 是通过调用 __eq__() 来判断的。


### 👉 What does the 'b' character do in front of a string literal?
#python #string #syntax 

[Python 3.x](http://www.diveintopython3.net/strings.html) makes a clear distinction between the types:
- `str` = `'...'` literals = a sequence of Unicode characters (Latin-1, UCS-2 or UCS-4, [depending on the widest character in the string](https://www.python.org/dev/peps/pep-0393/))
- `bytes` = `b'...'` literals = a sequence of octets (integers between 0 and 255)

If you're familiar with:
- Java or C#, think of `str` as `String` and `bytes` as `byte[]`;
- SQL, think of `str` as `NVARCHAR` and `bytes` as `BINARY` or `BLOB`;
- Windows registry, think of `str` as `REG_SZ` and `bytes` as `REG_BINARY`.

If you're familiar with C(++), then forget everything you've learned about `char` and strings, because **a character is not a byte**. That idea is long obsolete.

You use `str` when you want to represent text.
```python
print('שלום עולם')
```

You use `bytes` when you want to represent low-level binary data like structs.
```python
NaN = struct.unpack('>d', b'\xff\xf8\x00\x00\x00\x00\x00\x00')[0]
```

You can [encode](http://en.wikipedia.org/wiki/Character_encoding) a `str` to a `bytes` object.
```python
>>> '\uFEFF'.encode('UTF-8')
b'\xef\xbb\xbf'
```

And you can decode a `bytes` into a `str`.
```python
>>> b'\xE2\x82\xAC'.decode('UTF-8')
'€'
```

But you can't freely mix the two types.
```python
>>> b'\xEF\xBB\xBF' + 'Text with a UTF-8 BOM'
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: can't concat bytes to str
```

The `b'...'` notation is somewhat confusing in that it allows the bytes 0x01-0x7F to be specified with ASCII characters instead of hex numbers.
```python
>>> b'A' == b'\x41'
True
```

But I must emphasize, **a character is not a byte**.
```python
>>> 'A' == b'A'
False
```

[What does the 'b' character do in front of a string literal?]: https://stackoverflow.com/questions/6269765/what-does-the-b-character-do-in-front-of-a-string-literal


### 👉 Variable scope (global variable & local variable) | `UnboundLocalError`
#python #variable 

Python doesn't have variable declarations, so it has to figure out the [scope](http://docs.python.org/3.3/tutorial/classes.html#python-scopes-and-namespaces) of variables itself. It does so by a simple rule: If there is an assignment to a variable inside a function, that variable is considered local.[[1]](http://docs.python.org/3.3/faq/programming.html#what-are-the-rules-for-local-and-global-variables-in-python) Thus, the line
```python
counter += 1
```

implicitly makes `counter` local to `increment()`. Trying to execute this line, though, will try to read the value of the local variable `counter` before it is assigned, resulting in an [`UnboundLocalError`](http://docs.python.org/3.3/library/exceptions.html#UnboundLocalError).[[2]](http://docs.python.org/3.3/faq/programming.html#why-am-i-getting-an-unboundlocalerror-when-the-variable-has-a-value)

If `counter` is a global variable, the [`global`](http://docs.python.org/3.3/reference/simple_stmts.html#the-global-statement) keyword will help. If `increment()` is a local function and `counter` a local variable, you can use [`nonlocal`](http://docs.python.org/3.3/reference/simple_stmts.html#the-nonlocal-statement) in Python 3.x.


[Why does this UnboundLocalError occur?]: https://stackoverflow.com/questions/9264763/why-does-this-unboundlocalerror-occur-closure



## 👉 case/match expression
#python #syntax

[How to use multiple cases in Match (switch in other languages) cases in Python 3.10]: https://stackoverflow.com/questions/69642889/how-to-use-multiple-cases-in-match-switch-in-other-languages-cases-in-python-3


