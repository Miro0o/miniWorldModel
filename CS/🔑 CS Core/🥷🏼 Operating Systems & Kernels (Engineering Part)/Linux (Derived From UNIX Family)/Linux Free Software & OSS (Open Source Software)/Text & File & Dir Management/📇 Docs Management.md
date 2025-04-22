# Docs Management

[TOC]



## Res
### Related Topics
↗ [Files Management](../../../../Generic%20Software%20Tools%20&%20Projects/Files%20Management/Files%20Management.md)
↗ [Knowledge Management & Computational Notebook](../../../../Generic%20Software%20Tools%20&%20Projects/Knowledge%20Management%20&%20Computational%20Notebook/Knowledge%20Management%20&%20Computational%20Notebook.md)

↗ [Commands CheatCheet & Online Search](../../../🐚%20Shell%20&%20Terminals%20(Console)/🦞%20Shell%20&%20Script%20Programming/🧑‍🍳%20Shell%20Helper/Shell%20Commands%20Prompts%20&%20Correction/Commands%20CheatCheet%20&%20Online%20Search.md)
↗ [Dash](../../../../Generic%20Software%20Tools%20&%20Projects/Files%20Management/Docs%20&%20Configurations%20&%20Templates/Dash.md)



## Intro
How to get docs & cheat sheets about a given command? There are a lot!

For built-in support, there are `man`, `info`, `apropos`, etc.
For online cheat sheets, ↗ [Cheat.sh](../../../🐚%20Shell%20&%20Terminals%20(Console)/🦞%20Shell%20&%20Script%20Programming/🧑‍🍳%20Shell%20Helper/Shell%20Commands%20Prompts%20&%20Correction/Cheat.sh.md), ↗ [explainshell](../../../🐚%20Shell%20&%20Terminals%20(Console)/🦞%20Shell%20&%20Script%20Programming/🧑‍🍳%20Shell%20Helper/Shell%20Commands%20Prompts%20&%20Correction/explainshell.md), ↗ [oh-my-zsh](../../../🐚%20Shell%20&%20Terminals%20(Console)/🦞%20Shell%20&%20Script%20Programming/🧑‍🍳%20Shell%20Helper/Shell%20Script%20Manager%20&%20Framework/oh-my-zsh.md), and many more!
For emulator support, there are many emulators that integrate AI support for commands how-to, like ↗ [warp](../../../🐚%20Shell%20&%20Terminals%20(Console)/Terminal%20Emulators/📌%20Pseudo%20tty%20(pty)%20Based/warp.md)!



## 👉 `man`
The man utility finds and displays online manual documentation pages.  If `mansect` is provided, man restricts the search to the specific section of the manual.

The sections of the manual are:
1. General Commands Manual
2. System Calls Manual
3. Library Functions Manual
4. Kernel Interfaces Manual
5. File Formats Manual
6. Games Manual
7. Miscellaneous Information Manual
8. System Manager's Manual
9. Kernel Developer's Manual


intro(1), intro(2), intro(3), intro(3lua), intro(4), intro(5), intro(6),intro(7), intro(8), intro(9)

mandoc(1), manpath(1), whatis(1), apropos(1),
man.conf(5), 
mandoc(7)



## 👉 `INFO`
`info` is a program (info reader) akin `man`. It is for online docs reading.

Each entry is noted as `node`, and the whole documentation is organized as such nodes. 


### `INFO` basics
-  `d`  --- to go to directory node (Info main menu)
	```shell
	
	This is the Info main menu (aka directory node).
	A few useful Info commands:
	
	  'q' quits;
	  'H' lists all Info commands;
	  'h' starts the Info tutorial;
	  'mTexinfo RET' visits the Texinfo manual, etc.
	
	* Menu:
	```

- `b` --- to go to the top of the node
- `t` --- go to the top node _(default entrance node)_ of the documentation
- `n` / `p` --- next/previous node on _parent level_
- `[` / `]` --- next/previous node on _same level_
- `[SPC]` / `[DEL]` --- next/previous page 
- `l` --- retrace to last node
- `u` --- move up to parent node 
- `m`--- menu 
- `f` --- find the cross-reference on the page
- `[TAB]` --- toggle between the cross-reference on the page
	+ --- text auto-completion


### `INFO` advanced

#TODO 



## 👉 `apropos`
#TODO 



## 👉 `whatis`



## 👉 `mdoc`



## 👉 `mandoc`




## Ref

