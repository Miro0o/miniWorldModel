# Primality Test

[TOC]



## Res
### Related Topics



## Intro



## Miller-Rabin Primality Test
### Python Implementation
```python
# Prime Number Sieve
# https://www.nostarch.com/crackingcodes/ (BSD Licensed)

import math, random


def isPrimeTrialDiv(num):
    # Returns True if num is a prime number, otherwise False.

    # Uses the trial division algorithm for testing primality.

    # All numbers less than 2 are not prime:
    if num < 2:
        return False

    # See if num is divisible by any number up to the square root of num:
    for i in range(2, int(math.sqrt(num)) + 1):
        if num % i == 0:
            return False
    return True


def primeSieve(sieveSize):
    # Returns a list of prime numbers calculated using
    # the Sieve of Eratosthenes algorithm.

    sieve = [True] * sieveSize
    sieve[0] = False # Zero and one are not prime numbers.
    sieve[1] = False

    # Create the sieve:
    for i in range(2, int(math.sqrt(sieveSize)) + 1):
        pointer = i * 2
        while pointer < sieveSize:
            sieve[pointer] = False
            pointer += i

    # Compile the list of primes:
    primes = []
    for i in range(sieveSize):
        if sieve[i] == True:
            primes.append(i)

    return primes

def rabinMiller(num):
    # Returns True if num is a prime number.
    if num % 2 == 0 or num < 2:
        return False # Rabin-Miller doesn't work on even integers.
    if num == 3:
        return True
    s = num - 1
    t = 0
    while s % 2 == 0:
        # Keep halving s until it is odd (and use t
        # to count how many times we halve s):
        s = s // 2
        t += 1
    for trials in range(5): # Try to falsify num's primality 5 times.
        a = random.randrange(2, num - 1)
        v = pow(a, s, num)
        if v != 1: # This test does not apply if v is 1.
            i = 0
            while v != (num - 1):
                if i == t - 1:
                    return False
                else:
                    i = i + 1
                    v = (v ** 2) % num
    return True

# Most of the time we can quickly determine if num is not prime
# by dividing by the first few dozen prime numbers. This is quicker
# than rabinMiller() but does not detect all composites.
LOW_PRIMES = primeSieve(100)


def isPrime(num):
    # Return True if num is a prime number. This function does a quicker
    # prime number check before calling rabinMiller().
    if (num < 2):
        return False # 0, 1, and negative numbers are not prime.

    # See if any of the low prime numbers can divide num:

    for prime in LOW_PRIMES:

        if (num == prime):

            return True

        if (num % prime == 0):

            return False

    # If all else fails, call rabinMiller() to determine if num is prime:
    return rabinMiller(num)


def generateLargePrime(keysize=1024):
    # Return a random prime number that is keysize bits in size:
    while True:
        num = random.randrange(2**(keysize-1), 2**(keysize))
        if isPrime(num):
            return num
```


## Ref
[算法学习笔记(48): 米勒-拉宾素性检验 - Pecco的文章 - 知乎]: https://zhuanlan.zhihu.com/p/220203643

[👍 FINDING AND GENERATING PRIME NUMBERS | Cracking Codes with Python]: https://inventwithpython.com/cracking/chapter22.html

[记录一段生成素数python代码的调优过程]: http://cenalulu.github.io/python/pythonic-way-of-prime-generator/
