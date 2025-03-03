# TypeScript

[TOC]



## Res
🏠 https://www.typescriptlang.org
🚧 https://github.com/microsoft/TypeScript


### 📑 Documentation
- [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [Programming handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Docs](https://www.typescriptlang.org/docs/)

🎬【生产级别的TypeScript【中英字幕 Production-Grade TypeScript】】 https://www.bilibili.com/video/BV1qb4y1n76K/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

🚧 📂 https://github.com/basarat/typescript-book
📚 The definitive guide to TypeScript and possibly the best TypeScript book 📖. Free and Open Source 🌹


### Roadmap
For details on our planned features and future direction please refer to our [roadmap](https://github.com/microsoft/TypeScript/wiki/Roadmap).



## Intro
TypeScript is **JavaScript with syntax for types.**

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.


### Setup
TypeScript can be installed through three installation routes depending on how you intend to use it: an npm module, a NuGet package or a Visual Studio Extension.

If you are using Node.js, you want the npm version. If you are using MSBuild in your project, you want the NuGet package or Visual Studio extension.
#### Globally install via `npm`
You can use npm to install TypeScript globally, this means that you can use the `tsc` command anywhere in your terminal.

To do this, run `npm install -g typescript`. This will install the latest version (currently 4.9).

*An alternative is to use [npx](https://www.npmjs.com/package/npx) when you have to run `tsc` for one-off occasions.*

> 💡 Other means of installation visit [TS Download](https://www.typescriptlang.org/download).
#### Working with TypeScript-compatible transpilers
There are other tools which convert TypeScript files to JavaScript files. You might use these tools for speed or consistency with your existing build tooling.

Each of these projects handle the file conversion, but do not handle the type-checking aspects of the TypeScript compiler. So it's likely that you will still need to keep the above TypeScript dependency around, and you will want to enable [`isolatedModules`](https://www.typescriptlang.org/tsconfig#isolatedModules).
##### Babel
[Babel](https://babeljs.io/) is a very popular JavaScript transpiler which supports TypeScript files via the plugin [@babel/plugin-transform-typescript](https://babeljs.io/docs/en/babel-preset-typescript#docsNav).
##### swc
[swc](https://swc-project.github.io/docs/installation/) is a fast transpiler created in Rust which supports many of Babel's features including TypeScript.
##### Sucrase
[Sucrase](https://github.com/alangpierce/sucrase#sucrase/) is a Babel fork focused on speed for using in development mode. Sucrase supports TypeScript natively.



## Ref
