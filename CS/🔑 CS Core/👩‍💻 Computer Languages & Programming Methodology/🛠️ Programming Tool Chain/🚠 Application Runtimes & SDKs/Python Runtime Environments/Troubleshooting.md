# Troubleshooting

[TOC]



## 👉 ImportError: No module named Crypto.Cipher
#python #Crypto #ImportError 

### WARNING 😱: Don't use `crypto` or `pycrypto`anymore!

As you can read on [this page](https://blog.sqreen.com/stop-using-pycrypto-use-pycryptodome/), the usage of `pycrypto` is **not** safe anymore:

> `Pycrypto` is vulnerable to a heap-based buffer overflow in the ALGnew function in block_templace.c. It allows remote attackers to execute arbitrary code in the python application. It was assigned the [CVE-2013-7459](https://security-tracker.debian.org/tracker/CVE-2013-7459) number.
> 
> `Pycrypto` didn’t release any fix to that vulnerability and no commit was made to the project since Jun 20, 2014.


### Update 2021-01-18
The CVE is fixed now (thanks @SumitBadsara for pointing it out!). You can find the current status of the open security tickets for each package at the Debian security tracker:

- [`python-crypto`](https://security-tracker.debian.org/tracker/source-package/python-crypto)
- [`pycryptodome`](https://security-tracker.debian.org/tracker/source-package/pycryptodome)


### Use Python3's `pycryptodome` instead!
Make sure to uninstall all versions of `crypto` and `pycrypto` first, then install `pycryptodome`:
```python
pip3 uninstall crypto 
pip3 uninstall pycrypto 
pip3 install pycryptodome
```

All of these three packages get installed to the same folder, named `Crypto`. Installing different packages under the same folder name can be a common source for errors!

For more information, see [pycryptodome.org](https://www.pycryptodome.org/en/latest/src/introduction.html).


### Best practice: virtual environments
In order to avoid problems with pip packages in different versions or packages that install under the same folder (i.e. `pycrypto` and `pycryptodome`) you can make use of a so called _virtual environment_. There, the installed pip packages can be managed for every single project individually.

To install a virtual environment and setup everything, use the following commands:
```python
# install python3 and pip3
sudo apt update
sudo apt upgrade
sudo apt install python3
sudo apt install python3-pip

# install virtualenv
pip3 install virtualenv

# install and create a virtual environment in your target folder
mkdir target_folder
cd target_folder
python3 -m virtualenv .

# now activate your venv and install pycryptodome
source bin/activate
pip3 install pycryptodome

# check if everything worked: 
# start the interactive python console and import the Crypto module
# when there is no import error then it worked
python
>>> from Crypto.Cipher import AES
>>> exit()

# don't forget to deactivate your venv again
deactivate
```

For more information, see [docs.python-guide.org](https://docs.python-guide.org/dev/virtualenvs/#lower-level-virtualenv).



[ImportError: No module named Crypto.Cipher | Stackoverflow]: https://stackoverflow.com/questions/19623267/importerror-no-module-named-crypto-cipher



## 👉 PIL.UnidentifiedImageError: cannot identify image file
#PIL #python 


**\#1 Image format unsupported**
skip.. (see ref)

---
**\#2 Target file unavailable**
This could be the file path error, or the file itself is not available. 

> **💡 In my case** I was running into this problem on Respray Pi. Turns out I was using two process to access the same file concurrently but Respray PI doesn't seem to support this. 😒 It means when i access it from one process the other process still holds it (with lock) and the lock is mutual exclusive, hence i cannot access it until the holder release the lock. 



[PIL.UnidentifiedImageError: cannot identify image file | Stackoverflow]: https://stackoverflow.com/questions/60168905/pil-unidentifiedimageerror-cannot-identify-image-file

[UnidentifiedImageError: cannot identify image file | Stackoverflow]: https://stackoverflow.com/questions/63754311/unidentifiedimageerror-cannot-identify-image-file

[UnidentifiedImageError: cannot identify image file `PNG` #5631 | Github]: https://github.com/python-pillow/Pillow/issues/5631

[UnidentifiedImageError when I try to train my model #4678 | Github]: https://github.com/python-pillow/Pillow/issues/4678

[Image.open() cannot identify image file - Python? | Stackoverflow]: https://stackoverflow.com/questions/19230991/image-open-cannot-identify-image-file-python



## 👉 UnicodeDecodeError: 'utf8' codec can't decode byte 0xa5 in position 0: invalid start byte
#utf8 #codec #python 

The error is because there is some non-ascii character in the dictionary and it can't be encoded/decoded. One simple way to avoid this error is to encode such strings with `encode()`function as follows (if `a` is the string with non-ascii character):
```python
a.encode('utf-8').strip()
```
---

I switched this simply by defining a different codec package in the `read_csv()` command:
`encoding = 'unicode_escape'`

Eg:
```python
import pandas as pd
data = pd.read_csv(filename, encoding= 'unicode_escape')
```


[UnicodeDecodeError: 'utf8' codec can't decode byte 0xa5 in position 0: invalid start byte]: https://stackoverflow.com/questions/22216076/unicodedecodeerror-utf8-codec-cant-decode-byte-0xa5-in-position-0-invalid-s



## 👉 Importing the numpy c-extensions failed
#numpy #ImportError 

Try to uninstall numpy and setuptools first:
1. `pip uninstall -y numpy`
2. `pip uninstall -y setuptools`
3. `pip install setuptools`
4. `pip install numpy`

Borrowed from solution provided by mehdiHadji here- [https://github.com/ipython/ipyparallel/issues/349](https://github.com/ipython/ipyparallel/issues/349)

🤷‍♀️ 🤷 🤷🏽‍♂️

---


[Importing the numpy c-extensions failed]: https://stackoverflow.com/questions/58868528/importing-the-numpy-c-extensions-failed



## 👉 OpenSSL crypto error: [('PEM routines', 'PEM_read_bio', 'no start line')]
#OpenSSL #Crypto 

According to [http://www.pyopenssl.org/en/stable/api/crypto.html#OpenSSL.crypto.load_certificate](http://www.pyopenssl.org/en/stable/api/crypto.html#OpenSSL.crypto.load_certificate),`load_certificate()` takes a buffer (string will do) containing the certificate, not a filename. 

Your need to do:
```python
	with open(filename, "r") as my_cert_file:
    my_cert_text = my_cert_file.read()
    cert = load_certificate(FILETYPE_PEM, my_cert_text)
```


[OpenSSL crypto error: ('PEM routines', 'PEM_read_bio', 'no start line')]: https://stackoverflow.com/questions/37120860/openssl-crypto-error-pem-routines-pem-read-bio-no-start-line
