# Snap

[TOC]



## Res
🔍 http://snapcraft.io/
↗ [Snapcraft](Snapcraft.md)
Snaps are hosted in the global [Snap Store](http://snapcraft.io/), an application repository hosted and managed by Canonical, and are free for anyone to download. 

🫂 https://forum.snapcraft.io/

📂 https://snapcraft.io/docs



## Intro
> Snaps are a secure and scalable way to embed applications on Linux devices. A snap is an application containerised with all its dependencies. A snap can be installed using a single command on any device running Linux. With snaps, software updates are automatic and resilient. Applications run fully isolated in their own sandbox, thus minimising security risks.

Snaps are **Linux app packages** for **desktop**, **cloud** and **IoT** that are simple to install, secure, cross-platform, and dependency-free.

They **update automatically** and typically run within a **confined** and **transaction-based** environment. **Security and robustness** are their key features, alongside being **easy to install**, **easy to maintain** and **easy to upgrade**.

Snaps help **desktop** users effortlessly install and run apps like [Spotify](https://snapcraft.io/spotify) or [Slack](https://snapcraft.io/slack). They help **sysadmins** run servers like [NextCloud](https://snapcraft.io/nextcloud), **developers** to package and distribute their work to the global [Snap Store](https://snapcraft.io/store), and they help everyone build and deploy **IoT** devices running [Ubuntu Core](https://ubuntu.com/core).

From Linux and maker space tinkerers, to the robotics, automotive and signage industries; from your desktop to a deployment of thousands, snap can handle it.

Packaging IoT applications as snaps bring the following benefits:

| | |
|---|---|
|Reliable|Snaps use transactional updates, meaning that if for any reason an update you push to your snap fails, the snap will roll back to its last stable state|
|Modular|Snaps are reusable, they enable a loosely-coupled software architecture for embedded software and are compatible across architectures|
|Robust|With snaps, software updates are automatic and over-the-air (OTA), meaning your software is never out-of-date|
|Optimised|Snaps harness delta updates, minimising the storage and bandwidth needed when updating software. Read more about differential updates [here](https://ubuntu.com/engage/snap-deltas)|


### Snap Deamon (snapd)
> 🔗 https://snapcraft.io/docs/installing-snapd

The snap daemon, known as _snapd_, is the background service that manages and maintains your snaps. It needs to be running before a snap can be installed.

Fortunately, the snap daemon is pre-installed and running on many distributions by default, and it’s easy to install on most other distributions.


### Snap crafting
↗ [Snapcraft](Snapcraft.md)

[Snapcraft](https://snapcraft.io/snapcraft) is the developer tool available for creating, building, releasing and updating snaps on any Linux workstation. Comprehensive [training workshops](https://ubuntu.com/smart-start/guide/training-workshops) are offered for engineering teams to quickly become comfortable with creating and publishing snaps.

Snaps are built in 3 simple steps:
1. Model  
    Identify the software modules, libraries and dependencies that make up your application in a yaml file.
2. Build  
    Use the [Snapcraft build tool](https://snapcraft.io/snapcraft) to package your application in a snap in a virtual machine on your host computer.
3. Publish  
    Publish your snap to the public (snap store) or private repository for snaps (IoT app store). See the next section for more information about publishing snaps.
#### Maintaining snaps
Snapcraft integrates with CI/CD tools to build and release apps automatically upon software commits. Snaps use the concept of [channels](https://snapcraft.io/docs/channels) for software versioning. Channels define which release of a snap is installed and tracked for updates.

Channels consist of tracks, risk-levels and branches. When released, snaps are published to a [track](https://snapcraft.io/docs/channels) in the public or private repository they are hosted in. There are fours risk-levels in each track, each reflects a level of software maturity:

- **stable:** production-ready
- **candidate:** for testing purposes prior to production deployment
- **beta:** for testing of the latest development features
- **edge:** closely tracks development, often auto built and released

Branches are optional and hold temporary releases intended to help with bug-fixing. Channels provide a consistent method of software versioning, standardising software delivery for developers and users.


### Snap publishing
This section describes how to publish a snap in the global Snap Store or your own private repository (IoT App Store). Applications published benefit from Canonical’s content delivery network (CDN) for global software delivery. Go to the next section to read more about the IoT App Store.

👉 Snaps are **published to the global Snap Store** in 3 simple steps:
1. Upload  
    After building and testing a snap, developers use [Snapcraft](https://snapcraft.io/docs/releasing-your-app) to upload snaps to the global Snap Store. Developers choose the adequate [channel](https://snapcraft.io/docs/release-management) for the release.
2. Review  
    Uploaded snaps undergo automated and manual review processes, depending on the security profile of the snap. Snaps are checked by Canonical’s snap reviewer team to ensure that they are safe to use.
3. Release  
    Once approved, the snap becomes publicly available in the Snap Store to any user running a compatible Linux distribution. The snap could become featured on the front page of the Snap Store, boosting snap adoption.

👉 With an IoT App Store, snaps can be **published privately.** This option is ideal for those that wish to develop software for their devices, without providing global access. Here are the steps to publish snaps to a private IoT App Store:
1. Upload  
    After building and testing a snap, internal development teams use [Snapcraft](https://snapcraft.io/docs/releasing-your-app) to upload snaps to a private IoT App Store. Developers choose the adequate [channel](https://snapcraft.io/docs/release-management) for the release.
2. Review  
    Uploaded snaps undergo automated and manual review processes. Administrators can define the checks involved in the review process for all internal users to follow.
3. Release  
    Once approved the snap becomes available to the fleet of devices authorised to connect to your IoT app store.


### Snap 🆚 Container ?



## Ref

