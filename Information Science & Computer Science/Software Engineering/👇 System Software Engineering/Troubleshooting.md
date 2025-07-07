# Troubleshooting

[TOC]



## 👉 Interactive stdin, stdout with subprocess
> 🔗 https://stackoverflow.com/questions/71026789/interactive-stdin-stdout-with-subprocess


**C programs buffer stdout**. So you need to flush stdout after each write or else the Python program won't see anything:
```python
#include <stdio.h>

int main(int argc, char const *argv[])
{
    int command;
    printf("Line1\n");
    printf("Line2\n");
    fflush(stdout);

    while(1){
        scanf("%d", &command);
        if (command == 0) break;
        else if (command == 1) printf("result : s_0 = 1, s_1 = 0.05, s_0 = 0.5, s_0 = -0.85\n");
        else printf("Unknown\n");
        fflush(stdout);
    }
    return 0;
}
```

In the Python program, I rearranged a few things to better match your C program logic. (Perhaps some of it was unnecessary.) The calls to p.stdin.flush is required. This program works:
```python
import subprocess as sp
from subprocess import PIPE
import time

p = sp.Popen([r"c:\gcc64proj\so\so1.exe"], stdout=PIPE, stdin=PIPE)

print("Line 1", p.stdout.readline())
print("Line 2", p.stdout.readline())
p.stdin.write(b'1\n')
p.stdin.flush()
print("Line 3", p.stdout.readline())
p.stdin.write(b'2\n')
p.stdin.write(b'0\n')
p.stdin.flush()
time.sleep(0.1)

print(p.stdout.readlines())

if not p.poll():
    p.kill()
```

[How to use subprocess popen Python]: https://stackoverflow.com/questions/12605498/how-to-use-subprocess-popen-python
