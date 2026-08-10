# ECMAScript (ES)

[TOC]



## Res
### Related Topics


### Documentations
- [ECMAScript Language Specification repo](https://github.com/tc39/ecma262)
- [ECMAScript Internationalization API Specification repo](https://github.com/tc39/ecma402)
- [ECMAScript proposals repo](https://github.com/tc39/proposals)
- [ECMAScript conformance test suite repo](https://github.com/tc39/test262)
- [TC39 meeting notes](https://github.com/tc39/notes)
- [ECMAScript spec discussion; current mailing list](https://es.discourse.group/)
- [ECMAScript spec discussion; historical mailing-list archives (until March 2021)](https://esdiscuss.org/)



## Intro
> If your JavaScript code contains import/Export, let and const features, then your JavaScript is using next generation syntaxes which is ES6.

The core language of JavaScript is standardized by the ECMA TC39 committee as a language named ECMAScript. "ECMAScript" is the term for the language standard, but "ECMAScript" and "JavaScript" can be used interchangeably.


### What falls under the ECMAScript scope?
Among other things, ECMAScript defines:
- Language syntax (parsing rules, keywords, control flow, object literal initialization, ...)
- Error handling mechanisms ([`throw`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw), [`try...catch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch), ability to create user-defined [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) types)
- Types (boolean, number, string, function, object, ...)
- A prototype-based inheritance mechanism
- Built-in objects and functions, including [`JSON`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON), [`Math`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math), [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) methods, [`parseInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt), [`decodeURI`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURI), etc.
- [Strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
- A [module system](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- Basic memory model


### Standardization process
ECMAScript editions are approved and published as a standard by the ECMA General Assembly on a yearly basis. All development is public on the [Ecma TC39 GitHub organization](https://github.com/tc39), which hosts proposals, the official specification text, and meeting notes.

Before the 6th edition of ECMAScript (known as ES6), specifications were published once every several years, and are commonly referred by their major version numbers — ES3, ES5, etc. After ES6, the specification is named by the publishing year — ES2017, ES2018, etc. ES6 is synonymous with ES2015. _ESNext_ is a dynamic name that refers to whatever the next version is at the time of writing. ESNext features are more correctly called proposals, because, by definition, the specification has not been finalized yet.

The current committee-approved snapshot of ECMA-262 can be found in [PDF form](https://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf) and [HTML form](https://262.ecma-international.org/13.0/). ECMA-262 and ECMA-402 are continuously maintained and kept up to date by the specification editors; the TC39 website hosts the latest, up-to-date [ECMA-262](https://tc39.es/ecma262/) and [ECMA-402](https://tc39.es/ecma402/)versions.

New language features, including introduction of new syntaxes and APIs and revision of existing behaviors, are discussed in the form of proposals. Each proposal goes through a [4-stage process](https://tc39.es/process-document/), and is typically implemented by JavaScript engines at stage 3 or stage 4 and thus available for public consumption.

See [Wikipedia ECMAScript entry](https://en.wikipedia.org/wiki/ECMAScript) for more information on ECMAScript history.



## Internationalization API
The [ECMAScript Internationalization API Specification](https://402.ecma-international.org/1.0/) is an addition to the ECMAScript Language Specification, also standardized by Ecma TC39. The internationalization API provides collation (string comparison), number formatting, and date-and-time formatting for JavaScript applications, letting the applications choose the language and tailor the functionality to their needs. The initial standard was approved in December 2012; the status of implementations in browsers is tracked in the documentation of the [`Intl`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) object. The Internationalization specification is nowadays also ratified on a yearly basis and browsers constantly improve their implementation.



## Ref
[👍 JavaScript technologies overview]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/JavaScript_technologies_overview

