# PGlite

[TOC]



## Res
🚧 https://github.com/electric-sql/pglite
🏠 https://electric-sql.com


### Related Topics
↗ [WASM (WebAssembly)](../../../../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20The%20Internet%20Development%20(and%20Web%20Development)/🖥️%20Web%20FrontEnd%20Dev/🚜%20WASM%20(WebAssembly)/WASM%20(WebAssembly).md)
↗ [[sqli]]



## Intro
PGlite is a WASM Postgres build packaged into a TypeScript client library that enables you to run Postgres in the browser, Node.js and Bun, with no need to install any other dependencies. It is only 3.7mb gzipped.
```js
import { PGlite } from "@electric-sql/pglite"

const db = new PGlite()
await db.query("select 'Hello world' as message;")
// -> [ { message: "Hello world" } ]
```

It can be used both as an ephemeral in-memory database or with persistance to the file system (Node/Bun) or indexedDB (Browser).

Unlike previous "Postgres in the browser" projects, PGlite does not use a Linux virtual machine - it is simply Postgres in WASM.

It is being developed at [ElectricSQL](http://electric-sql.com/) in collaboration with [Neon](http://neon.tech/). We plan to continue to build on this experiment, and aim to create a fully capable lightweight WASM Postgres with support for extensions such as pgvector.



## Ref

