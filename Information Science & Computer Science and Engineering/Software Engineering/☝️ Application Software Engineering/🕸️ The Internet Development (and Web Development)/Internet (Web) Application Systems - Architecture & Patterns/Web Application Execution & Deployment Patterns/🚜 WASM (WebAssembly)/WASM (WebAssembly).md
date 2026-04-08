# WASM (WebAssembly)

[TOC]



## Res
🏠 https://webassembly.org
🗺️ https://landscape.cncf.io/wasm


### Related Topics
↗ [PGlite](../../../../../../🔑%20CS%20Core/🤱🏻%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/Database%20System%20Implementation%20&%20Deployment%20&%20Maintenance/DBMS%20(DataBase%20Management%20System)%20Implementations/Object-Relational%20Database/PostgreSQL/PGlite.md)



## Intro
![Image result for wasm](../../../../../../../Assets/Pics/5AEE46AE-099B-4415-A4B7-EAA5860C6C22.png)

WebAssembly (abbreviated *Wasm*) is a binary instruction format for a stack-based virtual machine. Wasm is designed as a portable compilation target for programming languages, enabling deployment on the web for client and server applications.

WebAssembly defines a portable binary-code format and a corresponding text format for executable programs as well as software interfaces for facilitating interactions between such programs and their host environment.

> 🤖 https://chatgpt.com/share/69d03d43-c608-8388-b8f6-73a959819e91

|Thing|What it means|Relation to Wasm|
|---|---|---|
|**Wasm / WebAssembly**|A **portable binary format for code**, designed to be executed by a **virtual machine/runtime**|This is the thing itself. ([webassembly.org](https://webassembly.org/?utm_source=chatgpt.com))|
|**`.wasm` file**|The compiled binary file containing a Wasm module|This is the usual file form of Wasm code.|
|**Wasm module**|A packaged unit of Wasm code, with imports, exports, functions, and memory definitions|A `.wasm` file usually contains one module.|
|**Wasm runtime / engine**|The software that loads, validates, compiles, and executes Wasm|Wasm cannot run by itself; it needs a runtime. On the web, the browser provides it. ([developer.mozilla.org](https://developer.mozilla.org/en-US/docs/WebAssembly/Guides/Concepts?utm_source=chatgpt.com))|
|**Browser**|A host environment that supports Wasm execution|In the browser case, the browser provides the Wasm engine/runtime and the surrounding sandbox. ([developer.mozilla.org](https://developer.mozilla.org/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static?utm_source=chatgpt.com))|
|**JavaScript**|A high-level programming language natively supported by browsers|JavaScript often loads and calls Wasm modules in web apps. Wasm usually works **alongside** JavaScript, not as a total replacement. ([developer.mozilla.org](https://developer.mozilla.org/en-US/docs/WebAssembly?utm_source=chatgpt.com))|
|**JavaScript engine**|The engine inside a browser or Node.js that runs JavaScript|On the web, Wasm support is integrated into the browser platform and exposed through JavaScript APIs. ([developer.mozilla.org](https://developer.mozilla.org/en-US/docs/WebAssembly/Guides/Concepts?utm_source=chatgpt.com))|
|**JVM**|The Java Virtual Machine, which runs Java bytecode|Similar to Wasm in that it is also a VM-based execution target, but the JVM is much more tied to the Java platform. ([docs.oracle.com](https://docs.oracle.com/javase/specs/jvms/se21/html/index.html?utm_source=chatgpt.com))|
|**Java bytecode**|The portable instruction format executed by the JVM|This is a good comparison point: Java bytecode is to the JVM roughly like Wasm binary is to a Wasm runtime. ([docs.oracle.com](https://docs.oracle.com/javase/specs/jvms/se7/html/jvms-4.html?utm_source=chatgpt.com))|
|**Machine code / native code**|Real CPU instructions for x86, ARM, etc.|Wasm is **not** machine code. A Wasm runtime may translate Wasm into native code internally.|
|**Assembly**|Human-readable form of machine instructions|Lower-level and hardware-specific; Wasm is portable across machines, assembly usually is not.|
|**Source language**|The original programming language, like Rust, C, C++, Go|These languages can be compiled **into Wasm**.|
|**Host environment**|The outer system that gives code access to the world|Wasm depends strongly on its host. In a browser, the host is the browser; outside the browser, the host could be another Wasm runtime.|
|**Sandbox**|A restricted execution environment|Wasm usually runs inside a sandbox controlled by the host, especially on the web. ([webassembly.org](https://webassembly.org/?utm_source=chatgpt.com))|


## Ref
