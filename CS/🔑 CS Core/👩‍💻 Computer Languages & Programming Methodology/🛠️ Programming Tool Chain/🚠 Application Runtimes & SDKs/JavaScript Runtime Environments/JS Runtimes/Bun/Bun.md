# Bun

[TOC]



## Res
🏠 https://github.com/oven-sh/bun

📂 [Documentation](https://bun.sh/docs)
[Discord](https://discord.com/invite/CXdq2DP29u)
[Issues](https://github.com/oven-sh/bun/issues/new)
[Roadmap](https://github.com/oven-sh/bun/issues/159)   



## Intro
> **​​Bun is still under development.** Use it to speed up your development workflows or run simpler production code in resource-constrained environments like serverless functions. We're working on more complete Node.js compatibility and integration with existing frameworks. Join the [Discord](https://bun.sh/discord) and watch the [GitHub repository](https://github.com/oven-sh/bun) to keeps tabs on future releases.

Bun is an all-in-one toolkit for JavaScript and TypeScript apps. It ships as a single executable called `bun​`.

At its core is the _Bun runtime_, a fast JavaScript runtime designed as a drop-in replacement for `Node.js`. It's written in Zig and powered by JavaScriptCore under the hood, dramatically reducing startup times and memory usage.

```shell
bun run index.tsx             # TS and JSX supported out of the box
```

​​The `bun​` command-line tool also implements a test runner, script runner, and Node.js-compatible package manager. Instead of 1,000 node_modules for development, you only need `bun`. Bun's built-in tools are significantly faster than existing options and usable in existing `Node.js` projects with little to no changes.

```shell
bun test                      # run tests
bun run start                 # run the `start` script in `package.json`
bun install <pkg>​             # install a package
bunx cowsay 'Hello, world!'   # execute a package
```



## Ref

