# XDG Base Directory Specification

[TOC]



## Res
🏠 https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html


### Related Topics



## Intro
Various specifications specify files and file formats. This specification defines where these files should be looked for by defining one or more base directories relative to which files should be located.


### Basics
The XDG Base Directory Specification is based on the following concepts:
- There is a single base directory relative to which user-specific data files should be written. This directory is defined by the environment variable `$XDG_DATA_HOME`.

- There is a single base directory relative to which user-specific configuration files should be written. This directory is defined by the environment variable `$XDG_CONFIG_HOME`.

- There is a single base directory relative to which user-specific state data should be written. This directory is defined by the environment variable `$XDG_STATE_HOME`.

- There is a single base directory relative to which user-specific executable files may be written.

- There is a set of preference ordered base directories relative to which data files should be searched. This set of directories is defined by the environment variable `$XDG_DATA_DIRS`.

- There is a set of preference ordered base directories relative to which configuration files should be searched. This set of directories is defined by the environment variable `$XDG_CONFIG_DIRS`.

- There is a single base directory relative to which user-specific non-essential (cached) data should be written. This directory is defined by the environment variable `$XDG_CACHE_HOME`.

- There is a single base directory relative to which user-specific runtime files and other file objects should be placed. This directory is defined by the environment variable `$XDG_RUNTIME_DIR`.

All paths set in these environment variables must be absolute. If an implementation encounters a relative path in any of these variables it should consider the path invalid and ignore it.



## Ref

