# Click

[TOC]


[![_images/click-logo.png](https://click.palletsprojects.com/en/8.1.x/_images/click-logo.png)](https://palletsprojects.com/p/click/)



## Res
🏠 📂 https://click.palletsprojects.com/en/8.1.x/
📂 https://click-docs-zh-cn.readthedocs.io/zh/latest/why.html



## Intro
Click is a Python package for creating beautiful command line interfaces in a composable way with as little code as necessary. It’s the “Command Line Interface Creation Kit”. It’s highly configurable but comes with sensible defaults out of the box.

It aims to make the process of writing command line tools quick and fun while also preventing any frustration caused by the inability to implement an intended CLI API.

Click in three points:
-   arbitrary nesting of commands
-   automatic help page generation
-   supports lazy loading of subcommands at runtime

What does it look like? Here is an example of a simple Click program:
import click
```python
@click.command()
@click.option('--count', default=1, help='Number of greetings.')
@click.option('--name', prompt='Your name',
              help='The person to greet.')
def hello(count, name):
    """Simple program that greets NAME for a total of COUNT times."""
    for x in range(count):
        click.echo(f"Hello {name}!")

if __name__ == '__main__':
    hello()
```

And what it looks like when run:
```shell
$ python hello.py --count=3
Your name: John
Hello John!
Hello John!
Hello John!
```

It automatically generates nicely formatted help pages:
```shell
$ python hello.py --help
Usage: hello.py [OPTIONS]

  Simple program that greets NAME for a total of COUNT times.

Options:
  --count INTEGER  Number of greetings.
  --name TEXT      The person to greet.
  --help           Show this message and exit.
```

You can get the library directly from PyPI:
```shell
pip install click
```



## Ref
[python click模块参数处理详解 | CSDN]: https://blog.csdn.net/xixihahalelehehe/article/details/106124675


