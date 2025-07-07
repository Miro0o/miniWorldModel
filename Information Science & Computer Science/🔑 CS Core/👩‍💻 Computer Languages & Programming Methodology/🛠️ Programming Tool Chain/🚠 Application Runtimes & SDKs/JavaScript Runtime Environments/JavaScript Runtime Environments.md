# JavaScript Runtime Environments

[TOC]



## Res
### Related Topics


### Learning Resources



## Intro
### JS Runtime Implementations
#### JS engines for Browser/Server 
- Mozilla's [SpiderMonkey](https://spidermonkey.dev/), used in Firefox. This was the first _ever_ JavaScript engine, created by Brendan Eich at Netscape.
- Google's [V8](https://v8.dev/), used in Google Chrome, Opera, Edge, [Node.js](https://nodejs.org/), [Deno](https://deno.land/), [Electron](https://www.electronjs.org/), and more.
- Apple's [JavaScriptCore](https://trac.webkit.org/wiki/JavaScriptCore) (also known as SquirrelFish/Nitro), used in WebKit browsers such as Apple Safari, and [Bun](https://bun.sh/).
#### JS engines specifically for non-browser purpose
- [Engine262](https://engine262.js.org/), a JavaScript engine written in JavaScript. It is created for JavaScript developers to explore new language features and find bugs in the specification.
- [Moddable XS](https://www.moddable.com/), used in embedded systems such as IoT.
- [QuickJS](https://bellard.org/quickjs/), a small and embeddable JavaScript engine.
- Meta's [Hermes](https://hermesengine.dev/) engine, an engine optimized for [React Native](https://reactnative.dev/docs/hermes).
- Oracle's [GraalJS](https://www.graalvm.org/), a high performance implementation built on the GraalVM by Oracle Labs.
#### Legacy JS Implementations
- [Carakan](https://dev.opera.com/blog/carakan-faq/), used in earlier versions of Opera.
- Microsoft's [Chakra](https://en.wikipedia.org/wiki/Chakra_(JScript_engine)) engine, used in Internet Explorer (although the language it implements is formally called "JScript" to avoid trademark issues). Earlier versions of Edge used a new JavaScript engine, confusingly also called [Chakra](https://en.wikipedia.org/wiki/Chakra_(JavaScript_engine)).
- [LibJS](https://libjs.dev/), used in the browser implementation of [SerenityOS](https://serenityos.org/).
- Mozilla's [Rhino](https://en.wikipedia.org/wiki/Rhino_(JavaScript_engine)) engine, a JavaScript implementation written in Java, created primarily by Norris Boyd (also at Netscape).

JavaScript

ActionScript


### JS Shell
A JavaScript shell allows you to quickly test snippets of JavaScript code without having to reload a web page. They are extremely useful for developing and debugging code.
#### Standalone JavaScript shells
The following JavaScript shells are stand-alone environments, like Perl or Python.
- [Node.js](https://nodejs.org/) - Node.js is a platform for easily building fast, scalable network applications.
- [ShellJS](https://github.com/shelljs/shelljs) - Portable Unix shell commands for Node.js.
#### Browser-based JavaScript shells
The following JavaScript shells run code through the browser's JavaScript engine.
- Firefox has a [built-in JavaScript console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html), which support multi-line editing.
- [Babel REPL](https://babeljs.io/repl) - A browser-based [REPL](https://en.wikipedia.org/wiki/REPL) for experimenting with future JavaScript.
- [TypeScript playground](https://www.typescriptlang.org/play) — A browser-based playground for experimenting both new JavaScript features (via the tsc compiler) and TypeScript syntax.



## Ref


