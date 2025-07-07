# Numpy

[TOC]



## Res



## Intro
###### list comprehension &  numpy.array

```python
import numpy as np
# x = [5, 10, 15, 20 ,30]
# y = []
# for counter in x:
#     y.append(counter/5)
# print("\n0ld fashioned way: x = {} y = {} \n".format(x,y))



x = [5, 10, 15, 20, 30]
z = [n/5 for n in x]
print("list Comprehensions: x = {} z = {} \n". format(x,z))


# print("With Numpy: a = {},b = {} \n" .format(b, a))

# try:
#     a = x/5
# except:
#     print("NO, u cant do that with regular python lists\n")

a = np.array(x) 
b = a/5
print(x)
print(np.array(x)[0])
print(" x = {} , arrayx = {} \n" .format(x, np.array(x)))

print(np.linspace(0, 20, 10))
print(b[1:-1])
```



## Ref