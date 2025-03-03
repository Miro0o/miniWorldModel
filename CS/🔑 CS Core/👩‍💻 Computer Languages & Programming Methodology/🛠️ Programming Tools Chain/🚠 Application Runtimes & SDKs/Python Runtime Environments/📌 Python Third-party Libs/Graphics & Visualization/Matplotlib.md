# matplotlib

[TOC]



## Res


## Intro
######  linspace

```python
import matplotlib.pyplot as plt

x = np.linspace(0, 20, 1000)
y1 = np.sin(x)
y2 = np.cos(x)
plt.plot(x, y1, "-g", label = "sine")
plt.plot(x, y2, "-b", label = "cos")
plt.legend(loc="upper right")
plt.ylim(-5.5, 5.5)
plt.show()

```

###### bar

```python
salary = np.fromfile("salaries.txt", dtype = int, sep = ",")[2:-2]
names = np.genfromtxt("names.txt", dtype = 'str', delimiter = ",")[2:-2]
x = np.arange(len(names))
plt.bar(x, salary)
plt.xticks(x, names)
plt.ylabel("Salaries")
plt.xlabel("Names")
plt.title("Salary of 10 radom ppl")
plt.show()
```



## Ref