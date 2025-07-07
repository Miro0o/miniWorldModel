# Bits, Bytes, Integers

### bytes size of data type

<img src="../../../Pics/Screen Shot 2022-05-25 at 5.24.37 PM.png" alt="Screen Shot 2022-05-25 at 5.24.37 PM" style="zoom:30%;" />



### Two's complement


$$
B2U(X) = \sum(x_i\times2^i)
B2T(X) = -x_{w-1}\times2^{w-1}+\sum()x_i\times2^i)
$$

![Screen Shot 2022-05-25 at 5.31.24 PM](../../../Pics/Screen Shot 2022-05-25 at 5.31.24 PM.png)



![Screen Shot 2022-05-25 at 6.58.40 PM](../../../Pics/Screen Shot 2022-05-25 at 6.58.40 PM.png)



#### Two's Comp. Understanding

1. For w-bits type, arithmetics are done under $2^w$ Module. (Int example, there are 8 bits per Int, maximal value is 11111111, so arithmetics of Int type are done by 1,00000000 Module. $(100000000)_b = (00000000)_b Mod n $  Where n equals to $(100000000)_b = (2^w-1)+1$
2. A nother way to visualize this is the clock illustrision. 



### Signed & Unsigned

Tricky: 

```c
unsigned i;
for (i = cnt-2; i >= 0; i--)
    a[i] += a[i+1]
```

```c
#define DELTA sizeof(int)
int i;
for (i = CNT; i-DELTA >= 0; i -= DELTA){
    ...
}
```

Correction:
```c
unsigned i;
for (i = cnt-2; i < cnt; i--)
    a[i] += a[i+1]
```

Even better:

```c
size_t i; // size_t defined as unsigned value with length = word size
for (i = cnt-2; i < cnt; i--)
    a[i] += a[i+1];
```

TBD ... 



