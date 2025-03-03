# MoltenVK

[TOC]



## Res


## Intro
[![MoltenVK](https://github.com/KhronosGroup/MoltenVK/raw/main/Docs/images/MoltenVK-Logo-Banner.png)](https://github.com/KhronosGroup/MoltenVK "MoltenVK")

**MoltenVK** is a layered implementation of [_Vulkan 1.2_](https://www.khronos.org/vulkan) graphics and compute functionality, that is built on Apple's [_Metal_](https://developer.apple.com/metal) graphics and compute framework on _macOS_, _iOS_, and _tvOS_. **MoltenVK** allows you to use _Vulkan_ graphics and compute functionality to develop modern, cross-platform, high-performance graphical games and applications, and to run them across many platforms, including _macOS_, _iOS_, _tvOS_, _Simulators_, and _Mac Catalyst_ on _macOS 11.0+_, and all _Apple_ architectures, including _Apple Silicon_.

_Metal_ uses a different shading language, the _Metal Shading Language (MSL)_, than _Vulkan_, which uses _SPIR-V_. **MoltenVK** automatically converts your _SPIR-V_ shaders to their _MSL_ equivalents.

To provide _Vulkan_ capability to the _macOS_, _iOS_, and _tvOS_ platforms, **MoltenVK** uses _Apple's_ publicly available API's, including _Metal_. **MoltenVK** does **_not_** use any private or undocumented API calls or features, so your app will be compatible with all standard distribution channels, including _Apple's App Store_.

The **MoltenVK** runtime package contains two products:
-   **MoltenVK** is a implementation of an almost-complete subset of the [_Vulkan 1.2_](https://www.khronos.org/vulkan) graphics and compute API.

-   **MoltenVKShaderConverter** converts _SPIR-V_ shader code to _Metal Shading Language (MSL)_ shader code, and converts _GLSL_ shader source code to _SPIR-V_ shader code and/or _Metal Shading Language (MSL)_ shader code. The converter is embedded in the **MoltenVK** runtime to automatically convert _SPIR-V_ shaders to their _MSL_ equivalents. In addition, both the _SPIR-V_ and _GLSL_ converters are packaged into a stand-alone command-line `MoltenVKShaderConverter` _macOS_ tool for converting shaders at development time from the command line.



## Ref

