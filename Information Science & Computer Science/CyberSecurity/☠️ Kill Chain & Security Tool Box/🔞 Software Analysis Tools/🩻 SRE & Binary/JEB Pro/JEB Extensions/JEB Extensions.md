# # JEB Extensions

[TOC]



## Res
📂 https://www.pnfsoftware.com/jeb/manual/dev/introducing-jeb-extensions/ (Introducing JEB Extentions)
📂 https://www.pnfsoftware.com/jeb/apidoc/reference/packages.html (JEB API Documentation)

🚧 https://github.com/pnfsoftware



### Related Topics



## Intro
JEB offers a rich API that can be used to develop:
- **Scripts**:
    - Python scripts can be used to automate simple tasks
    - When run within the UI client, scripts can interact with GUI elements
- **Plugins** (aka _back-end extensions_):
    - **_Processor plugins_** such as disassemblers, file parsers, etc.
    - **_Engines plugins_** such as second-pass code analyzers, working on results produced by other plugins, or helpers
    - **_Decompiler plugins_** such as IR optimizer plugins for _dexdec_ or _gendec_
    - Other plugin types include code analysis extensions (to customize native code analysis), contributions (for information overlays), interpreter (command-line processors), etc.
- **Front-end clients**, such as:
    - The official _UI client_
    - Headless clients for automation pipelines

At the highest-level, JEB is separated into back-end and front-end components:
- The back-end components are responsible for processing input artifacts. They provide an execution environment for native and third-party plugins, including processor plugins, such as file parsers.
- The front-end components are responsible for processing input commands and rendering back-end results. A variety of front-ends may be created using the API exposed by the back-end.

![](../../../../../../../../Assets/Pics/Pasted%20image%2020240507191822.png)
<small>https://www.pnfsoftware.com/jeb/manual/dev/introducing-jeb-extensions/</small>



## Ref
