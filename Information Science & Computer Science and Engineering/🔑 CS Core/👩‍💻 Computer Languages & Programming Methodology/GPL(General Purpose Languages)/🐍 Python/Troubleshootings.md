# Troubleshootings

[TOC]



## 👉 Uninstall python
#python 


[Uninstall Python on Mac]: https://nektony.com/how-to/uninstall-python-on-mac



## 👉 How to force stop a python process
#python #process


> 🔗 [how to force stop a python process](https://stackoverflow.com/a/53211247/16542494)

**level 1:**
`CTRL + C `  to raise  `KeyboardInterrupt`

**level 2:**
1. approach #1
`CREL + Z` to suspend the process
`jobs` to check the current suspended process
`fg %n` to resume the suspended process, where `n` is the corresponding number of the process listed by `jobs`.
`kill %n` kills the listed `n` process

2.  approach #2
`ps aux | grep python` check the PID (Process ID) of the running process
`kill <PID>` to kill the process
> `kill` command send a `SIGTERM` signal to the system by default. 

**level 3:**
if `SIGTERM`dosen't work, then send `SIGKILL` signal.
use `kill -KILL <pid>` (or `kill -9 <pid>`) to achieve this. 



## 👉 [Fix Pip “Yanked Version” Warnings](https://adamj.eu/tech/2021/09/20/how-to-fix-pip-yanked-version-warnings/)
#pip


PyPI allows package maintainers to yank a given version. This is intended for removing versions with bad faults, such as security holes or broken installation.

The maintainer *could* delete the version, but this would break all installations pinned to that version, unleashing chaos. Yanking the version instead marks the version as unsafe, making it somewhat invisible while allowing pinned installs to succeed.

Conventionally, while yanking a pck the maintainer will also relesase a secure version. Generally if one doesn't specifically designate a version when piping pcks, pip will automaticallty choose the secure version.

When Yanked Version warnning occurred, to fix it we need to find an un-yanked version of the package that will work for us. This might mean upgrading, downgrading, or waiting for a new version. Upgrading is the most common course of action, since if a maintainer has yanked a version, they’ve likely released a fix shortly after.

1️⃣ check out the package’s page on [pypi.org](https://pypi.org/).

2️⃣ check available versions with the `pip index versions` command with the package name



## 👉 ModuleNotFoundError and ImportError
#exception


[How to Fix ModuleNotFoundError and ImportError]: https://towardsdatascience.com/how-to-fix-modulenotfounderror-and-importerror-248ce5b69b1c
[Relative imports - ModuleNotFoundError: No module named x]: https://stackoverflow.com/questions/43728431/relative-imports-modulenotfounderror-no-module-named-x

**TL;DR**
- Use **absolute** imports
- **Append your project’s root directory to** `PYTHONPATH` — In any environment you wish to run your Python application such as Docker, vagrant or your virtual environment i.e. in bin/activate, run (or e.g. add to `bin/activate` in case you are using virtualenv) the below command:
```
export PYTHONPATH="${PYTHONPATH}:/path/to/your/project/"
```

- **avoid using `sys.path.append("/path/to/your/project/")`**



## 👉 AttributeError: 'NoneType' object has no attribute 'text'
#python #xml 


ERROR:
```csharp
---------------------------------------------------------------------------
AttributeError                            Traceback (most recent call last)
<ipython-input-70-77e5e1b79ccc> in <module>()
     11 
     12 for child in root.iter('Materia'):
---> 13     if not child.find('EmentaMateria').text is None:
     14             ementa = child.find('EmentaMateria').text
     15 

AttributeError: 'NoneType' object has no attribute 'text'
```

---
Instead of checking if `child.find('EmentaMateria').text` is not `None`, you should make sure that `child.find('EmentaMateria')` is not `None` first.

Also, you should store the returning value of `child.find('EmentaMateria')` to avoid calling it twice.

Lastly, you should assign `ementa` a default value if `child.find('EmentaMateria')` is `None`; otherwise your `print` function below will be referencing an un-initialized variable.

Change:
```vhdl
if child.find('EmentaMateria').text is not None:
    ementa = child.find('EmentaMateria').text
```

to:
```python
node = child.find('EmentaMateria')
if node is not None:
    ementa = node.text
else:
    ementa = None
```

Alternatively, you can use the built-in function `getattr` to do the same without a temporary variable:
```python
ementa = getattr(child.find('EmentaMateria'), 'text', None)
```

[(Python) AttributeError: 'NoneType' object has no attribute 'text']: https://stackoverflow.com/questions/51664292/python-attributeerror-nonetype-object-has-no-attribute-text




## 👉 "inconsistent use of tabs and spaces in indentation" 
#python 


["inconsistent use of tabs and spaces in indentation" ]: https://stackoverflow.com/questions/5685406/inconsistent-use-of-tabs-and-spaces-in-indentation



## 👉 match/switch expression cannot take 'irrefutable variable'
#python #switch

TBD..

[Issue with match statement]: https://www.reddit.com/r/learnpython/comments/wffuya/issue_with_match_statement/



## 👉  Could not find a version that satisfies the requirement exceptions
#python #exception 
