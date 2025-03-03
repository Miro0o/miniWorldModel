# COrepack

[TOC]



## Res
🚧 https://github.com/nodejs/corepack
📂 https://nodejs.org/dist/latest/docs/api/corepack.html



## Intro
Corepack is a zero-runtime-dependency Node.js script that acts as **a bridge between Node.js projects and the package managers** they are intended to be used with during development. In practical terms, **Corepack lets you use Yarn, npm, and pnpm without having to install them**.

Corepack is an experimental tool(2023, Node.JS v20.6.1) to help with managing versions of your package managers. It exposes binary proxies for each [supported package manager](https://nodejs.org/dist/latest/docs/api/corepack.html#supported-package-managers) that, when called, will identify whatever package manager is configured for the current project, transparently install it if needed, and finally run it without requiring explicit user interactions.

This feature simplifies two core workflows:
- It eases new contributor onboarding, since they won't have to follow system-specific installation processes anymore just to have the package manager you want them to.
- It allows you to ensure that everyone in your team will use exactly the package manager version you intend them to, without them having to manually synchronize it each time you need to make an update.



## Ref

