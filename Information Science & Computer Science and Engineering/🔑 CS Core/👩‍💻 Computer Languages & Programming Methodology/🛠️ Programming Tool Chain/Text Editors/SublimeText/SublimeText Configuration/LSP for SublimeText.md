# LSP for SublimeText

[TOC]



## Res
🏠 https://lsp.sublimetext.io

↗ [LSP (Language Service Protocol)](../../../🌋%20Advanced%20Language%20Services/❤️‍🔥%20LSP%20(Language%20Service%20Protocol)/LSP%20(Language%20Service%20Protocol).md) for more.



## Intro
The package "LSP" is an acronym for **L**anguage **S**erver **P**rotocol. This is a specification for the communication protocol for use between text editors or IDEs and _language servers_ - tools which provide language-specific features like autocomplete, go to definition, or documentation on hover. This package acts as an interface between Sublime Text and your language server, which means that to obtain these features you need to install a server for your language first. Language servers can be provided as standalone executables or might require a runtime environment like Node.js or Python. Many new concepts not native to Sublime Text are in use. For an overview of these concepts, please see the [Features](https://lsp.sublimetext.io/features/) page.

↗ [Programming Tools Chain /LSP](../../../🌋%20Advanced%20Language%20Services/❤️‍🔥%20LSP%20(Language%20Service%20Protocol)/LSP%20(Language%20Service%20Protocol).md)


### Quick Start
To get up and running quickly:
1. Find a server for the language of your choice in the [list of language servers](https://lsp.sublimetext.io/language_servers/) and follow its setup instructions.
2. Open a document in your chosen language - if the server starts successfully then its name will be shown on the left in the status bar.

If you are having issues with starting the server, check the [Troubleshooting](https://lsp.sublimetext.io/troubleshooting/) section.



## Language Servers
> 🔗 https://lsp.sublimetext.io/language_servers/

> 👍 We recommend installing [LSP-json](https://packagecontrol.io/packages/LSP-json).
> 
> [LSP-json](https://packagecontrol.io/packages/LSP-json) provides completions and diagnostics when editing JSON files that adhere to a JSON schema.

Check the list form above for specific info about installing specific language services. 


### 👉 Python
There are multiple options:

- Pyright
Follow installation instructions on [LSP-pyright](https://github.com/sublimelsp/LSP-pyright).

- Python LSP Server
Follow installation instructions on [LSP-pylsp](https://github.com/sublimelsp/LSP-pylsp).


**Running LSP-pylsp alongside LSP-pyright**

> 🔗 [Running alongside LSP-pyright](https://github.com/sublimelsp/LSP-pylsp#running-alongside-lsp-pyright)

[`LSP-pyright`](https://packagecontrol.io/packages/LSP-pyright) is a more modern, faster and actively supported alternative to `LSP-pylsp`. While it's arguably much better solution for validating the code and type-checking, it doesn't support linters or code formatters like `flake8`, `pyflakes`, `pydocstyle`, `yapf` or `black`. The solution to that could be to run them alongside each other with code-checking features disabled in `LSP-pylsp`. To achieve that, open `Preferences: LSP-pylsp Settings` from the _Command Palette_ and add the following user settings:
```json
{
    "disabled_capabilities": {
        "completionProvider": true,
        "definitionProvider": true,
        "documentHighlightProvider": true,
        "documentSymbolProvider": true,
        "hoverProvider": true,
        "referencesProvider": true,
        "renameProvider": true,
        "signatureHelpProvider": true,
    },
    "settings": {
        "pylsp.plugins.jedi_completion.enabled": false,
        "pylsp.plugins.jedi_definition.enabled": false,
        "pylsp.plugins.jedi_hover.enabled": false,
        "pylsp.plugins.jedi_references.enabled": false,
        "pylsp.plugins.jedi_signature_help.enabled": false,
        "pylsp.plugins.jedi_symbols.enabled": false,
    },
}
```


### 👉 JS /TypeScript /Vue
There are several.


### 👉 Shell
[PowerShell Editor Services](https://github.com/PowerShell/PowerShellEditorServices)



## Ref

