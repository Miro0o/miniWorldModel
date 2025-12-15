# [Opendaylight](https://www.opendaylight.org)

[TOC]



📌 **VERSION RELEASE** 

Up to now (*2022/10/18*) the latest released version is **Sulfur-SR2**!

This inquries:

- [Java JDK 11](https://www.oracle.com/java/technologies/javase/products-doc-jdk11certconfig.html)
- [Apache Maven](https://maven.apache.org/) 3.8.3 or later

Find more on 📝 [Release Note!](https://docs.opendaylight.org/en/stable-sulfur/release-notes/index.html) & [2022.03 Sulfur Platform Upgrade](https://docs.opendaylight.org/en/stable-sulfur/release-notes/upgrade-process.html#id1) !



📌 **DOCS**

[ODL wiki ](https://wiki.opendaylight.org/display/ODL/OpenDaylight)

[Welcome to OpenDaylight Documentation](https://docs.opendaylight.org/en/stable-sulfur/index.html)



## Intro

OpenDaylight (ODL) is an open source software-defined networking (SDN) project hosted by the Linux Foundation. It was created in order to advance SDN adoption and build a strong base for network functions virtualisation (NFV). It is a modular platform, with most modules sharing some common services and interfaces. Each module is developed under a multi-vendor sub-project. You can find the list of projects at [*https://wiki.OpenDaylight.org/view/Project_list*](https://wiki.opendaylight.org/view/Project_list).

### Technology stack

The technology stack consists of the following four layers.

1. *Maven:* OpenDaylight uses Maven for its complete build automation, and its archetype has been used for setting up the initial project structure to develop applications.
2. *Java:* The OpenDaylight framework is built in Java.
   1. [OSGi](https://www.osgi.org/) (Open Service Gateway Initiative) bundles
3. *[Apache Karaf](https://karaf.apache.org/):* This is a lightweight OSGi container for loading modules/bundles dynamically at runtime.
4. *YANG:* OpenDaylight uses YANG for data modelling language, RPC and notifications between different modules.

### Implementation (Mininet + Opendaylight)

I start mininet on QEMU VM instance, while ODL running on the host. 

➡️ Using QEMU preserved address of 192.168.101.2 ([detail here](https://stackoverflow.com/a/67522806/16542494)) i can connect guest to host. This also solved the proficiency problem by massive memory usage of karaf jvm runtime -- they are too slow on vm limited virtual memory.

ODL uses Karaf as its UI (for what i understand). User use ssh in karaf to login ODL. 

➡️ So instead of using `./bin/karaf` or `./bin/client`, one can also use `ssh -p 8101 -i ./etc/host.key karaf@localhost` to login **an already started karaf.** 8101 is the default port of ODL karaf. This charmfully bypassed the [login issue](#👉 Karaf using localhost ssh config instead of its auto-generated ssh private key logining) i encounterd when using `./bin/client`. 

➡️ To solve the file transmision problem, i set up a web server on host and use wget form guest to download file. 





🔗 A list for reference: 

- [Using the OpenDaylight SDN Controller with the Mininet Network Emulator](https://www.brianlinkletter.com/2016/02/using-the-opendaylight-sdn-controller-with-the-mininet-network-emulator/) 





## ☄️ Troubleshootings

### 👉  Karaf using localhost ssh config instead of its auto-generated ssh private key logining

**Description**

When running `./bin/client` to login the second shell into karaf, it use my local ssh private  key config rather than karaf designated ssh private key. 



**Attemptation**

Following ODL prompt , try using `bouncycastle` to specify private key path.

However i failed to understand what that is and how to use it. : (



**Progress**

> 🔗 [How to secure the default apache karaf installation](https://stackoverflow.com/a/38232494/16542494)

According to the discussion on the Karaf [users mailing list](http://karaf.922171.n3.nabble.com/How-to-secure-Karaf-td4047127.html) concerning this stack overflow question:

By default `bin/client` tries (in this order) to use:

 1. `etc/keys.properties`
 2. `etc/users.properties`
 3. `karaf/karaf`
 4. `-u` to prompt for the password

 `bin/client` is an SSH client (written in Java). The `host.key` is the same file as for SSH and containing the trusted hosts (you also have `.sshkaraf/known_hosts` for that).



**Resolusion**

> 🔗 [Managing authentication by key](https://karaf.apache.org/manual/latest/security)

Karaf use ssh. However on ODL case such issue can be bypassed by using 

```shell
ssh -p 8101 -i ./etc/host.key karaf@localhost
```

Since ODL use port 8101 by default. 



### 👉 feature: install odl-openflowplugin-app-forwardingrules-manager failure

**Description**

I encounterred this really wired problem whening trying out new-released version of opendaylight -- Sulfur, which it erroed out every time i tryed to install a feature on it. After days stodge i found this post with exactly the same issue with mine: 🖇 [feature:install fails and returns "Unable to resolve root" message](https://stackoverflow.com/questions/73897674/featureinstall-fails-and-returns-unable-to-resolve-root-message), where it suggest that the installation failure issue only shows on the new Sulfur version. 😢 As a workaround i fall back to previous version of Phosphorous.

**Attemptation**

Though no ligit solution or explanation provided, during the debuging i found this habbit useful: 🖇  [Unable to resolve root: missing requirement [root] osgi.identity](https://stackoverflow.com/questions/65665755/unable-to-resolve-root-missing-requirement-root-osgi-identity) .

It suggests that re-arrange the formatting of the log output everytime debugging.



**Ref:** 

[Apache Karaf Container 4.x - Documentation]:https://karaf.apache.org/manual/latest/
[Chapter 2. Securing the Apache Karaf Container]: https://access.redhat.com/documentation/en-us/red_hat_fuse/7.5/html/apache_karaf_security_guide/esbsecurecontainer
[6.5. Deploying security providers]: https://cwiki.apache.org/confluence/display/KARAF/6.5.+Deploying+security+providers
[Securing Applications and Services Guide]: https://access.redhat.com/documentation/en-us/red_hat_single_sign-on/7.3/html-single/securing_applications_and_services_guide/index#fuse7_adapter
[Karaf is not finding org.osgi.util.function and fails to start]:https://www.mail-archive.com/search?l=user@karaf.apache.org&q=subject:%22Karaf+is+not+finding+org.osgi.util.function+and+fails+to+start%22&o=newest

[ODL mail-archive discuss]: https://www.mail-archive.com/search?q=sulfur&l=discuss%40lists.opendaylight.org



## Reading list

[maven,OSGI,karaf 学习笔记](https://blog.csdn.net/u013830021/article/details/74360448?spm=1035.2023.3001.6557&utm_medium=distribute.pc_relevant_bbs_down_v2.none-task-blog-2~default~OPENSEARCH~Rate-1-74360448-bbs-392519256.pc_relevant_bbs_down_cate&depth_1-utm_source=distribute.pc_relevant_bbs_down_v2.none-task-blog-2~default~OPENSEARCH~Rate-1-74360448-bbs-392519256.pc_relevant_bbs_down_cate)