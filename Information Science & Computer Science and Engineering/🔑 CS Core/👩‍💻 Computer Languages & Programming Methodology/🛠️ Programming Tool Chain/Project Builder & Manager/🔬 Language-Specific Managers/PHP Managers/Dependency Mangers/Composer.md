# Composer



![The Composer Official Logo: a male orchestra conductor with both arms in the air and his head tilted down, reading music sheets](../../../../../../../../Assets/Pics/logo-composer-transparent5.png)



## Intro

Composer is **a tool for dependency management in PHP**. It allows you to declare the libraries your project depends on and it will manage (install/update) them for you.

- Latest: **2.4.4** ([changelog](https://getcomposer.org/changelog/2.4.4))
- [Getting Started](https://getcomposer.org/doc/00-intro.md) [Download](https://getcomposer.org/download/)
- [Documentation](https://getcomposer.org/doc/) [Browse Packages](https://packagist.org/)
- [Issues](https://github.com/composer/composer/issues) [GitHub](https://github.com/composer/composer)
- Authors: [Nils Adermann](http://naderman.de/), [Jordi Boggiano](https://seld.be/) and many [community contributions](https://github.com/composer/composer/graphs/contributors)



![img](../../../../../../../../Assets/Pics/logo-small.png) **Packagist** is the main [Composer](https://getcomposer.org/) repository. It aggregates public PHP packages installable with Composer.

- [Private Packagist](https://packagist.com) allow users host their own php repo on the server. 
- [Packagist / Composer 中国全量镜像](https://pkg.xyz) is, as written, a mirror site of Packgist.org in China. 



## Dependency Manager
Composer is **not** a package manager in the same sense as Yum or Apt are. Yes, it deals with "packages" or libraries, but it manages them on a per-project basis, installing them in a directory (e.g. `vendor`) inside your project. By default, it does not install anything globally. Thus, it is a dependency manager. It does however support a "global" project for convenience via the [global](https://getcomposer.org/doc/03-cli.md#global) command.

==This idea is not new and Composer is strongly inspired by node's [npm](https://www.npmjs.com/) and ruby's [bundler](https://bundler.io/).==

Suppose:

1. You have a project that depends on a number of libraries.
2. Some of those libraries depend on other libraries.

Composer:

1. Enables you to declare the libraries you depend on.
2. Finds out which versions of which packages can and need to be installed, and installs them (meaning it downloads them into your project).
3. You can update all your dependencies in one command.

See the **[Basic usage](https://getcomposer.org/doc/01-basic-usage.md)** chapter for more details on declaring dependencies.