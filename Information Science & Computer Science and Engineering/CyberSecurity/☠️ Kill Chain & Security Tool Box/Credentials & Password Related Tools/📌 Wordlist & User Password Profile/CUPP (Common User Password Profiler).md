# CUPP (Common User Password Profiler)

[TOC]



## Res
🚧 https://github.com/Mebus/cupp



## Intro
The most common form of authentication is the combination of a username and a password or passphrase. If both match values stored within a locally stored table, the user is authenticated for a connection. Password strength is a measure of the difficulty involved in guessing or breaking the password through cryptographic techniques or library-based automated testing of alternate values.

A weak password might be very short or only use alphanumberic characters, making decryption simple. A weak password can also be one that is easily guessed by someone profiling the user, such as a birthday, nickname, address, name of a pet or relative, or a common word such as God, love, money or password.

That is why CUPP was born, and it can be used in situations like legal penetration tests or forensic crime investigations.


### How it works
**Common User Password Profiler (CUPP)** allows the tester to **generate a wordlist that is specific to a particular user**. CUPP was present on Backtrack 5r3; however, it will have to be downloaded for use on Kali. To obtain CUPP, enter the following command:
```shell
git clone https://github.com/Mebus/cupp.git
```

This will download CUPP to the local directory.

CUPP is a Python script, and can be simply invoked from the CUPP directory by entering the following command:
```shell
python cupp.py -i
```

This will launch CUPP in interactive mode, which prompts the user for specific elements of information to use in creating wordlists. 



## Ref

