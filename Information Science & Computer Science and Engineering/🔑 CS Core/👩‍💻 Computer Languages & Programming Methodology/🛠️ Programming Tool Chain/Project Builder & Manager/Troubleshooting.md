# Troubleshooting

[TOC]



## 👉 `conda update conda error`
#conda 

Turn out to be the channel site's error. I deleted all other channels but default and conda-forge. Then it worked.



["conda update conda" error #10333]:https://github.com/conda/conda/issues/10333



## 👉 `Solving environment: failed with initial frozen solve. Retrying with flexible solve`
#conda 

I highly doubted that this has something to do with my inconsistency envrionment error report. 

I found these solusions but none of them worked for me:

- create a new conda env
- downgrade conda version
- conda config --set priority :false
- conda config  --set priority: flexible 



[Solving environment: failed with initial frozen solve. Retrying with flexible solve.#9367]: https://github.com/conda/conda/issues/9367
[Conda install and update do not work also solving environment get errors]: https://stackoverflow.com/questions/57518050/conda-install-and-update-do-not-work-also-solving-environment-get-errors



## 👉 The environment is inconsistent, please check the package plan carefully
#conda 

**Description**

After error occured when downloading anything package from repo, i realized it might be the repo itself went slip. So i deleted every other repo but `default` and `conda-forge` . Then `conda install` again. Since the previous packages are all from situ mirror site, the new "conda" mirror site packages are, as reported, inconsistent.

**Solusion**

Still no solusion to this. 

I desperately tried following shell:

```shell
# all under base env
conda update conda
conda install anaconda
# i run this for several times because i found each time i try it it promptes new updates. There was a time i doubt it can never end...
conda update --all
```

I have no idea how things going.

However after i desperately run above code for several times i can somehow `pip` the package sucessfully like a charm!

But i still cannot `conda install`. Instead i make with `pip`.

🥹🥹🥹🥹



[The environment is inconsistent, please check the package plan carefully #8490]: https://github.com/conda/conda/issues/8490
[How to resolve inconsistent package warnings in conda?]:https://stackoverflow.com/questions/56072846/how-to-resolve-inconsistent-package-warnings-in-conda



## 👉  Why Conda cannot call correct Python version after activating the environment?
#conda 


TLDR;

```shell
# deactivate Conda environment
# (until even base environment is deactivated)
conda deactivate
# activate your environment
conda activate your_env_name_goes_here
```

This happened after `conda update --all`. Shut the terminal down and restart. 



[Why Conda cannot call correct Python version after activating the environment?]: https://stackoverflow.com/questions/36733179/why-conda-cannot-call-correct-python-version-after-activating-the-environment



## 👉 pip: no module named \_internal
#pip

This did it for me:
```python
python -m pip install --upgrade pip
```

Environment: OSX && Python installed via [brew](https://docs.brew.sh/Homebrew-and-Python)


[pip: no module named _internal]: https://stackoverflow.com/questions/49940813/pip-no-module-named-internal



## 👉 Use IDEA to export `.war` pkg
#java #war #IDEA 

>  [Difference between jar and war in Java](https://stackoverflow.com/questions/5871053/difference-between-jar-and-war-in-java) 

Steps: 

1. config `pom.xml` in Project as follow (in my case JDK17)
   1. specify packing method: `war`
   2. specify build method: plugin name & version (i didn't do this the first time, and it pop out `error: Cannot access defaults field of properties`)

```xml
<packaging>war</packaging>

<build>
    <plugins>
        <- version here has to be compliant to JDK veresion->
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-compiler-plugin</artifactId>
            <version>3.8.1</version>
            <configuration>
                <source>17</source>
                <target>17</target>
            </configuration>
        </plugin>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-war-plugin</artifactId>
            <version>3.3.1</version>
        </plugin>
    </plugins>
</build>
```

2. in idea's `maven` tool view:
   1. clean
   2. Compile (if needed)
   3. package --> build
3. Done! 🍻



**🖇 Refs**

1. [maven 打jar包和war包](https://www.cnblogs.com/hzb462606/p/9395730.html)
2. [IDEA导出jar/war包（最简单的/maven projects导出）](https://blog.csdn.net/qq_42055933/article/details/104560620) 

3. [This is a reference for the Maven project descriptor used in Maven.](https://maven.apache.org/ref/2.2.1/maven-model/maven.html)
4. [Maven error Cannot access defaults field of Properties](https://stackoverflow.com/questions/67168999/maven-error-cannot-access-defaults-field-of-properties) 
5. [JDK17 & Maven version related](https://stackoverflow.com/a/69637290/16542494)



## 👉 You don't have write permissions for the /Library/Ruby/Gems/2.3.0 directory. (mac user)
#permission #macos #ruby #RubyGems 

You are correct that macOS won't let you change anything with the Ruby version that comes installed with your Mac. However, it's possible to install gems like `bundler` using a separate version of Ruby that doesn't interfere with the one provided by Apple.

Using `sudo` to install gems, or changing permissions of system files and directories is strongly discouraged, even if you know what you are doing. Can we please stop providing this bad advice?

The solution involves two main steps:
1. Install a separate version of Ruby that does not interfere with the one that came with your Mac.
2. Update your `PATH` such that the location of the new Ruby version is first in the `PATH`. Some tools do this automatically for you. If you're not familiar with the `PATH` and how it works, it's one of the basics that you should learn, and you'll understand why you sometimes get "command not found" errors and how to fix them.

(more at below👇)

[👍 You don't have write permissions for the /Library/Ruby/Gems/2.3.0 directory. (mac user) | Stackoverflow]: https://stackoverflow.com/questions/51126403/you-dont-have-write-permissions-for-the-library-ruby-gems-2-3-0-directory-ma



## 👉 Insecure world writable dir /Users/username in PATH, mode 040777 when running Ruby commands
#PATH #ruby 

Your home folder should only be writable by you, not by anyone else. The reason gem is complaining about this is that you have folders in your PATH that are inside your (insecure) home folder, and that means that anyone who wants to could hack you by renaming/moving your .rvm folder and replacing it with an impostor.

To fix your home folder, run `chmod go-w /Users/kristoffer`. If there are any other insecure folders on the way to anything in your PATH, you should fix them similarly.

BTW, the reason that Disk Utility didn't repair this is that it only repairs files installed as part of the OS (see [Apple's KB article on the subject](http://support.apple.com/kb/ht1452)). There is an option to repair home folder permissions if you boot from the install DVD and run Password Reset from the Utilities menu, but I'm not sure if it resets the permissions themselves or just ownership.

[Insecure world writable dir /Users/username in PATH, mode 040777 when running Ruby commands | Stackoverflow]: https://stackoverflow.com/q/6192003

