# JS Engines (JS Compilation)

[TOC]



## Res
🏠 
🚧 


### Related Topics
↗ [Huawei HarmonyOS Runtimes & ArkCompiler](../../../../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/国产操作系统%20💦/Huawei%20Operating%20Systems/📌%20Huawei%20HarmonyOS%20Runtimes%20&%20ArkCompiler/Huawei%20HarmonyOS%20Runtimes%20&%20ArkCompiler.md)
↗ [Web Browser Implementations](../../../../../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/Desktop%20&%20Monolithic%20Application%20Development/🤠%20Web%20Browser%20Development/📌%20Web%20Browser%20Implementations/Web%20Browser%20Implementations.md)



## Intro
> 🔗 https://en.wikipedia.org/wiki/JavaScript_engine

A JavaScript engine is a software component that executes JavaScript code. The first JavaScript engines were mere interpreters, but all relevant modern engines use just-in-time compilation for improved performance.

JavaScript engines are typically developed by web browser vendors, and every major browser has one. In a browser, the JavaScript engine runs in concert with the rendering engine via the Document Object Model and Web IDL bindings. However, the use of JavaScript engines is not limited to browsers; for example, the V8 engine is a core component of the Node.js runtime system.

Since ECMAScript is the standardized specification of JavaScript, ECMAScript engine is another name for these implementations. With the advent of WebAssembly, some engines can also execute this code in the same sandbox as regular JavaScript code

 [List of ECMAScript engines](https://en.wikipedia.org/wiki/List_of_ECMAScript_engines "List of ECMAScript engines")
- [V8](https://en.wikipedia.org/wiki/V8_\(JavaScript_engine\) "V8 (JavaScript engine)") from [Google](https://en.wikipedia.org/wiki/Google "Google") is the most used JavaScript engine. [Google Chrome](https://en.wikipedia.org/wiki/Google_Chrome "Google Chrome") and the many other [Chromium](https://en.wikipedia.org/wiki/Chromium_\(web_browser\) "Chromium (web browser)")-based browsers use it, as do [applications](https://en.wikipedia.org/wiki/Application_software "Application software") built with [CEF](https://en.wikipedia.org/wiki/Chromium_Embedded_Framework "Chromium Embedded Framework"), [Electron](https://en.wikipedia.org/wiki/Electron_\(software_framework\) "Electron (software framework)"), or any other [framework](https://en.wikipedia.org/wiki/Software_framework "Software framework") that embeds Chromium. Other uses include the [Node.js](https://en.wikipedia.org/wiki/Node.js "Node.js") and [Deno](https://en.wikipedia.org/wiki/Deno_\(software\) "Deno (software)") [runtime systems](https://en.wikipedia.org/wiki/Runtime_system "Runtime system").
- [SpiderMonkey](https://en.wikipedia.org/wiki/SpiderMonkey "SpiderMonkey") is developed by [Mozilla](https://en.wikipedia.org/wiki/Mozilla "Mozilla") for use in [Firefox](https://en.wikipedia.org/wiki/Firefox "Firefox") and its [forks](https://en.wikipedia.org/wiki/Fork_\(software_development\) "Fork (software development)"). The [GNOME Shell](https://en.wikipedia.org/wiki/GNOME_Shell "GNOME Shell") uses it for extension support.
- [JavaScriptCore](https://en.wikipedia.org/wiki/JavaScriptCore "JavaScriptCore") is [Apple](https://en.wikipedia.org/wiki/Apple_Inc. "Apple Inc.")'s engine for its [Safari](https://en.wikipedia.org/wiki/Safari_\(web_browser\) "Safari (web browser)") browser. Other [WebKit](https://en.wikipedia.org/wiki/WebKit "WebKit")-based browsers and the [Bun](https://en.wikipedia.org/wiki/Bun_\(software\) "Bun (software)") runtime system also use it. [KJS](https://en.wikipedia.org/wiki/KJS_\(software\) "KJS (software)") from [KDE](https://en.wikipedia.org/wiki/KDE "KDE") was the starting point for its development.[[13]](https://en.wikipedia.org/wiki/JavaScript_engine#cite_note-13)
- [Chakra](https://en.wikipedia.org/wiki/Chakra_\(JScript_engine\) "Chakra (JScript engine)") is the engine of the [Internet Explorer](https://en.wikipedia.org/wiki/Internet_Explorer "Internet Explorer") browser. It was also forked by [Microsoft](https://en.wikipedia.org/wiki/Microsoft "Microsoft") for the original [Edge [Legacy]](https://en.wikipedia.org/wiki/Microsoft_Edge_Legacy "Microsoft Edge Legacy") browser, but Edge was later rebuilt as a Chromium-based browser and thus now uses V8



## Ref
