# LSP (Language Service Protocol)

[TOC]



## Res
### Related Topics


### Other Resources
[Langserver.org](https://langserver.org)
A community-driven source of knowledge for Language Server Protocol implementations

[lsp for sublimetext](https://lsp.sublimetext.io/features/)
This package enhances existing concepts from Sublime Text and introduces new concepts not native to Sublime Text



## Intro
> 🔗 https://en.wikipedia.org/wiki/Language_Server_Protocol

The **Language Server Protocol** (**LSP**) is an open, [JSON-RPC](https://en.wikipedia.org/wiki/JSON-RPC "JSON-RPC")-based protocol for use between source code editors or integrated development environments(IDEs) and servers that provide programming language-specific features like [code completion](https://en.wikipedia.org/wiki/Autocomplete "Autocomplete"), [syntax highlighting](https://en.wikipedia.org/wiki/Syntax_highlighting "Syntax highlighting") and marking of warnings and errors, as well as [refactoring](https://en.wikipedia.org/wiki/Code_refactoring "Code refactoring") routines. The goal of the protocol is to allow programming language support to be implemented and distributed independently of any given editor or IDEs.


### History
LSP was originally developed for **Microsoft Visual Studio Code** and is now an **open standard**. On June 27, 2016, Microsoft announced a collaboration with Red Hat and Codenvy to standardize the protocol's specification. ==The protocol is supported and has been adopted by the three companies. 
Its specification is hosted and developed on GitHub.==


### Background
#### Languages Services
Modern IDEs provide developers with sophisticated features like [code completion](https://en.wikipedia.org/wiki/Code_completion "Code completion"), [refactoring](https://en.wikipedia.org/wiki/Refactoring "Refactoring"), navigating to a [symbol's](https://en.wikipedia.org/wiki/Symbol_table "Symbol table") definition, [syntax highlighting](https://en.wikipedia.org/wiki/Syntax_highlighting "Syntax highlighting"), and error and warning markers. All these are concluded as **languages services** provided by IDEs. 

> For example, in a text-based programming language, a programmer might want to rename a method `read`. The programmer could either manually edit the respective source code files and change the appropriate occurrences of the old method name into the new name, or instead use an IDE's refactoring capabilities to make all the necessary changes automatically. To be able to support this style of refactoring, an IDE needs a sophisticated understanding of the [programming language](https://en.wikipedia.org/wiki/Programming_language "Programming language") that the program's [source](https://en.wikipedia.org/wiki/Source_code "Source code") is written in. A programming tool without such an understanding—for example, one that performs a naive [search-and-replace](https://en.wikipedia.org/wiki/Text_editor#Typical_features "Text editor") instead—could introduce errors. When renaming a `read` method, for example, the tool should not replace the partial match in a variable that might be called `readyState`, nor should it replace the portion of a [code comment](https://en.wikipedia.org/wiki/Comment_(computer_programming) "Comment (computer programming)") containing the word "already". Neither should renaming a [local variable](https://en.wikipedia.org/wiki/Local_variable "Local variable") `read`, for example, end up altering identically-named variables in other [scopes](https://en.wikipedia.org/wiki/Scope_(computer_science) "Scope (computer science)").
#### Problems for Traditional Language Services
1️⃣ Conventional compilers or interpreters for a specific programming language are typically unable to provide above **language services**, because they are written with the goal of either transforming the source code into [object code](https://en.wikipedia.org/wiki/Object_code "Object code") or immediately executing the code. 

2️⃣ Additionally, language services must be able to handle source code that is not [well-formed](https://en.wikipedia.org/wiki/Well-formedness "Well-formedness"), e.g. because the programmer is in the middle of editing and has not yet finished typing a statement, procedure, or other construct. 

3️⃣ Additionally, small changes to a source code file which are done during typing usually change the semantics of the program. In order to provide instant feedback to the user, the editing tool must be able to very quickly evaluate the syntactical and semantical consequences of a specific modification. 

Therefore, Compilers and interpreters often provide a poor candidate for producing the information needed for an editing tool to consume.

4️⃣ Prior to the design and implementation of the Language Server Protocol for the development of Visual Studio Code, most language services were generally tied to a given IDE or other editor. In the absence of the Language Server Protocol, language services are typically implemented by using a tool-specific extension API. Providing the same language service to another editing tool requires effort to adapt the existing code so that the service may target the second editor's extension interfaces.
#### 🐶 Languages Services by LSP
The Language Server Protocol allows for **decoupling language services** from the editor so that the services may be contained within a general-purpose **language server**. Any editor can inherit sophisticated support for many different languages by making use of existing language servers. Similarly, a programmer involved with the development of a new programming language can make services for that language available to existing editing tools. Making use of language servers via the Language Server Protocol thus also reduces the burden on vendors of editing tools, because vendors do not need to develop language services of their own for the languages the vendor intends to support, as long as the language servers have already been implemented. The Language Server Protocol also enables the distribution and development of servers contributed by an interested third party, such as end users, without additional involvement by either the vendor of the compiler for the programming language in use or the vendor of the editor to which the language support is being added.

==LSP is not restricted to programming languages.== It can be used for any kind of text-based language, like **specifications** or [domain-specific languages (DSL)](https://en.wikipedia.org/wiki/Domain-specific_language "Domain-specific language").



## 🧑🏽‍🏫 LSP Technical Overview
When a user edits one or more source code files using a language server protocol-enabled tool, the tool acts as a **client** that consumes the **language services** provided by a **language server**. The tool may be a text editor or IDE and the language services could be [refactoring](https://en.wikipedia.org/wiki/Refactoring "Refactoring"), [code completion](https://en.wikipedia.org/wiki/Code_completion "Code completion"), etc.

The client informs the server about what the user is doing, e.g., opening a file or inserting a character at a specific text position. The client can also request the server to perform a language service, e.g. to format a specified range in the text document. The server answers a client's request with an appropriate response. For example, the formatting request is answered either by a response that transfers the formatted text to the client or by an error response containing details about the error.

The Language Server Protocol defines the messages to be exchanged between client and language server. They are [JSON-RPC](https://en.wikipedia.org/wiki/JSON-RPC "JSON-RPC") preceded by headers similar to HTTP. Messages may originate from the server or client.

==The protocol does not make any provisions about how requests, responses and notifications are transferred between client and server==. For example, 
- client and server could be components **within the same process** exchanging [JSON](https://en.wikipedia.org/wiki/JSON "JSON") strings via **method calls**.
- They could also be different processes on the **same or on different machines communicating via [network sockets](https://en.wikipedia.org/wiki/Network_socket "Network socket")**.



## LSP Integrations
### 👉 LSP on SublimeText
↗ [LSP for SublimeText](../../Text%20Editors/SublimeText/SublimeText%20Configuration/LSP%20for%20SublimeText.md)


### 👉 LSP on Vim/Neovim
↗ [LSP for Vim](../../Text%20Editors/Vim/Vim%20Customization%20&%20Configuration/LSP%20for%20Vim.md)



## Ref
