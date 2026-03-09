# Container Registry & Artifacts Management

[TOC]



## Res
📂 https://landscape.cncf.io/guide#provisioning--container-registry


### Related Topics
↗ [CLI Package & Software Management](../../../../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/🐚%20Shell%20&%20Terminals%20(Console)/📦%20CLI%20Package%20&%20Software%20Management/CLI%20Package%20&%20Software%20Management.md)
↗ [Code Management (CM) (Git Implementations)](../../../🛫%20Continuous%20Integration/Code%20Management%20(CM)%20(Git%20Implementations)/Code%20Management%20(CM)%20(Git%20Implementations).md)

↗ [Software Supply Chains Security](../../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/🍦%20Software%20Security/Software%20Supply%20Chains%20Security/Software%20Supply%20Chains%20Security.md)



## Intro
Before diving into container registries, we need to define three tightly related concepts:

- **Container** is "a running process with resource and capability constraints managed by a computer’s operating system" ([Cloud Native Glossary](https://github.com/cncf/glossary/blob/main/content/en/container.md)).
- **Image** is a set of archive files needed to run containers and its process. You could see it as a form of template on which you can create an unlimited number of containers.
- **Repository**, or just repo, is a space to store images.

And **container registries** are specialized web applications that categorize and store repositories.

Let's recap real quick: images contain the information needed to execute a program (within a container) and are stored in repositories which in turn are categorized and grouped in registries. Tools that build, run, and manage containers need access to those images. Access is provided by referencing the registry (the path to access the image).



## Ref

