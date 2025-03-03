# Vim Basic Usages

[TOC]



## Res
### Related Topics



## Intro
Get an overview of vim basics from below:
``` shell
Get specific help:  It is possible to go directly to whatever you want help on, by giving an argument to the :help command. 

Prepend something to specify the context:  help-context


    WHAT                  PREPEND    EXAMPLE
Normal mode command                  :help x
Visual mode command         v_       :help v_u
Insert mode command         i_       :help i_<Esc>
Command-line command        :        :help :quit
Command-line editing        c_       :help c_<Del>
Vim command argument        -        :help -r
Option                      '        :help 'textwidth'
Regular expression          /        :help /[

See help-summary for more contexts and an explanation.
See notation for an explanation of the help syntax.
```

Get a quick look of vim basics from below:
``` shell
// in vim, type :help [section_name] for info list

BASIC:
quickref        Overview of the most common commands you will use
tutor           30-minute interactive course for beginners
copying         About copyrights
iccf            Helping poor children in Uganda
sponsor         Sponsor Vim development, become a registered Vim user
www             Vim on the World Wide Web
bugs            Where to send bug reports

USER MANUAL: These files explain how to accomplish an editing task.

usr_toc.txt     Table Of Contents
```


### 📚 Vim Docs
#### 1️⃣ User Manual
USER MANUAL: These files explain how to accomplish an editing task.

1. Getting started
```
usr_01.txt  About the manuals
usr_02.txt  The first steps in Vim
usr_03.txt  Moving around
usr_04.txt  Making small changes
usr_05.txt  Set your settings
usr_06.txt  Using syntax highlighting
usr_07.txt  Editing more than one file
usr_08.txt  Splitting windows
usr_09.txt  Using the GUI
usr_10.txt  Making big changes
usr_11.txt  Recovering from a crash
usr_12.txt  Clever tricks
```

2. Editing Effectively
```
usr_20.txt  Typing command-line commands quickly
usr_21.txt  Go away and come back
usr_22.txt  Finding the file to edit
usr_23.txt  Editing other files
usr_24.txt  Inserting quickly
usr_25.txt  Editing formatted text
usr_26.txt  Repeating
usr_27.txt  Search commands and patterns
usr_28.txt  Folding
usr_29.txt  Moving through programs
usr_30.txt  Editing programs
usr_31.txt  Exploiting the GUI
usr_32.txt  The undo tree
```

3. Tuning Vim
```
usr_40.txt  Make new commands
usr_41.txt  Write a Vim script
usr_42.txt  Add new menus
usr_43.txt  Using filetypes
usr_44.txt  Your own syntax highlighted
usr_45.txt  Select your language
```

4. Writing Vim scripts
```
usr_50.txt  Advanced Vim script writing
usr_51.txt  Create a plugin
usr_52.txt  Write plugins using Vim9 script
```

5. Making Vim Run
```
usr_90.txt  Installing Vim
```


#### 2️⃣ Reference Manual
REFERENCE MANUAL: These files explain every detail of Vim.

1. Basics editing
```
starting.txt    starting Vim, Vim command arguments, initialisation
editing.txt     editing and writing files
motion.txt      commands for moving around
scroll.txt      scrolling the text in the window
insert.txt      Insert and Replace mode
change.txt      deleting and replacing text
undo.txt        Undo and Redo
repeat.txt      repeating commands, Vim scripts and debugging
visual.txt      using the Visual mode (selecting a text area)
various.txt     various remaining commands
recover.txt     recovering from a crash
```

2. Advanced editing
```
cmdline.txt     Command-line editing
options.txt     description of all options
pattern.txt     regexp patterns and search commands
map.txt         key mapping and abbreviations
tagsrch.txt     tags and special searches
windows.txt     commands for using multiple windows and buffers
tabpage.txt     commands for using multiple tab pages
spell.txt       spell checking
diff.txt        working with two to eight versions of the same file
autocmd.txt     automatically executing commands on an event
eval.txt        expression evaluation, conditional commands
builtin.txt     builtin functions
userfunc.txt    defining user functions
channel.txt     Jobs, Channels, inter-process communication
fold.txt        hide (fold) ranges of lines
```

3. General subjects
```
intro.txt       general introduction to Vim; notation used in help files
help.txt        overview and quick reference (this file)
helphelp.txt    about using the help files
index.txt       alphabetical index of all commands
help-tags       all the tags you can jump to (index of tags)
howto.txt       how to do the most common editing tasks
tips.txt        various tips on using Vim
message.txt     (error) messages and explanations
quotes.txt      remarks from users of Vim
todo.txt        known problems and desired extensions
develop.txt     development of Vim
debug.txt       debugging Vim itself
uganda.txt      Vim distribution conditions and what to do with your money
```

4. Special issues
```
testing.txt     testing Vim and Vim scripts
print.txt       printing
remote.txt      using Vim as a server or client
term.txt        using different terminals and mice
terminal.txt    Terminal window support
popup.txt       popup window support
vim9.txt        using Vim9 script
```

5. Programming language support
6. Language support
7. GUI
8. Versions
9. Interfaces
```
if_cscop.txt    using Cscope with Vim
if_lua.txt      Lua interface
if_mzsch.txt    MzScheme interface
if_perl.txt     Perl interface
if_pyth.txt     Python interface
if_tcl.txt      Tcl interface
if_ole.txt      OLE automation interface for Win32
if_ruby.txt     Ruby interface
debugger.txt    Interface with a debugger
netbeans.txt    NetBeans External Editor interface
sign.txt        debugging signs
```

10. Remarks about specific systems
11. Standard plugins
```
pi_getscript.txt Downloading latest version of Vim scripts
pi_gzip.txt      Reading and writing compressed files
pi_logipat.txt   Logical operators on patterns
pi_netrw.txt     Reading and writing files over a network
pi_paren.txt     Highlight matching parens
pi_spec.txt      Filetype plugin to work with rpm spec files
pi_tar.txt       Tar file explorer
pi_vimball.txt   Create a self-installing Vim script
pi_zip.txt       Zip archive explorer
```



## 🎯 Navigation
### Navigation within File



### Navigation Between Files


### 🎏 Multiple Windows & Files
#### Tabs
> 🔗 https://www.linux.com/training-tutorials/vim-tips-using-tabs/


Tabs can be extremely useful, and it only takes a short while to become proficient with them. For more on working with tabs in Vim, run `:help tab-page-intro` within Vim.

##### Opening a tab
```shell
# Probably the easiest to open a new tab
:tabnew 
:tabnew filename


# Another way to do this is to open more than one file at startup using the `-p` option. If you want to open three files in separate tabs, you’d use this syntax:
vim -p file1 file2 file3

# The default maximum is 10 tabs, but you can change this by setting the `tabpagemax` option in your .vimrc, like so:
set tabpagemax=15

#  search for a file in your current path and open it in a new tab
#  For instance, if you want to open a file called inventory.txt that’s in your current path, you could run:
:tabf inven*
```
##### Moving between tabs
You can switch between tabs using `:tabn` and `:tabp`, or you can use `gt` while you’re in normal mode. Of course, if you’re using Vim’s GUI, GVim, you can also use the mouse to switch between tabs or use keyboard shortcuts. In GVim, you can also access a context menu for tabs by right-clicking on the tab bar. Here you can open new tabs with a new buffer or an existing file, or close the current tab.

If you have a lot of tabs open, you can use `:tabfirst`, or just `:tabfir`, to jump to the first tab, and `:tablast` to jump to the last tab that’s open.
##### Rearranging tabs
If you’re really meticulous and want to position tabs _just so_ in Vim, you can move the tabs to a specific spot in the tab order using `:tabm _n_`, where `_n_` is the position number that you want to use. If you don’t give the `:tabm` command an argument, then the current tab will be moved to the last spot.
##### Running commands in tabs
```shell
:tabdo %s/foo/bar/g

```
#### Buffers

#### Horizontal /Vertical Split Panes
You can have multiple windows within the same tab page.

- `:split filename` open file for editing in a new horizontal window, above the current window 
    - you can also use `:sp` instead of `:split`
    - `:set splitbelow` open horizontal splits below the current window
- :vsplit filename open file for editing in a new vertical window, to the left of the current window 
    - you can also use `:vs` instead of `:vsplit`
    - `:set splitright` open vertical splits to the right of the current window

Here are some shortcuts to navigate between windows:
- `Ctrl+w` followed by `w` switch to the below/right window for horizontal/vertical splits respectively 
    - `Ctrl+w` followed by `Ctrl+w` also performs the same function
    - switches to the first split if you are on the last split
- `Ctrl+w` followed by `W` switch to the above/left window for horizontal/vertical splits respectively 
    - switches to the last split if you are on the first split
- `Ctrl+w` followed by `hjkl` or arrow keys, switch in the respective direction
- `Ctrl+w` followed by t or b switch to the top (first) or bottom (last) window
- `Ctrl+w` followed by `HJKL` (uppercase), moves the current split to the farthest possible location in the respective direction


>  If filename is not provided, the current one is used.

>  Vim adds a highlighted horizontal bar containing the filename for each split.



#### Terminals

[How To Edit Multiple Files Using Vim Editor]: https://ostechnix.com/how-to-edit-multiple-files-using-vim-editor/
[vim打开多窗口、多文件之间的切换]: https://blog.csdn.net/qq_22716879/article/details/50810449




### Go TO Definition
#### 1️⃣ include & define

#### 2️⃣ Ctags

#### 3️⃣ Static code analysis
The smartest "Jump to Definition" mechanic would definitely rely on parsing and analyzing the code itself, which is what static analysis engines are for.

There are multiple plugins out there that work to integrate with these engines, e.g. [tern_for_vim](https://github.com/ternjs/tern_for_vim) for Javascript. Try and find one for your language of choice, or ask some of the helpful chaps in [r/vim](https://www.reddit.com/r/vim/) or \#vim on freenode!

##### Language Server Protocol!
which aims to provide a standard for text editors and static analysis engines to work together.

↗ [LSP for Vim](../Vim%20Customization%20&%20Configuration/LSP%20for%20Vim.md)



## 🫦 Shell Command Execution


## 🔎 Find & Substitute
### Syntaxs & Usecase
``` vim
:[range]s/{pattern}/{string}/[flags] [count]
```

The command searches each line in `[range]` for a `{pattern}`, and replaces it with a `{string}`. `[count]` is a positive integer that multiplies the command.

If no `[range]` and `[count]` are given, only the pattern found in the current line is replaced. The current line is the line where the cursor is placed.

e.g.

```shell
:s/foo/bar/

#### % for whole range & g for entire line
:s/foo/bar/g
:%s/foo/bar/g
:s/foo//g

#### i for case insensitive & I for case sensitive
:s/Foo/bar/gi
:s/Foo/bar/gI


#### Substituting whole word (default look for the pattern as a string not a whole word)
:s/\<Foo\>/bar/gi
```


#### 1️⃣ Delimiters
Instead of the slash character (`/`), you can use any other non-alphanumeric single-byte character except as a delimiter. This option is useful when you have the ‘/’ character in the search pattern or the replacement string.
```vim
:s|foo|bar|
```


#### 2️⃣ Confirm Substitution
To confirm each substitution, use the `c` flag:
```vi
:s/foo/bar/gc
```
Output:
``` vim
replace with bar (y/n/a/q/l/^E/^Y)?
```
Press `y` to replace the match or `l` to replace the match and quit. Press `n` to skip the match and `q` or `Esc` to quit substitution. The `a` option substitutes the match and all remaining occurrences of the match. To scroll the screen down, use `CTRL+Y`, and to scroll up, use `CTRL+E`.


#### 3️⃣ Regualr Expressions
You can also use [regular expressions](https://linuxize.com/post/regular-expressions-in-grep/) as a search pattern. The command bellow replaces all lines starting with ‘foo’ with ‘Vim is the best’:
```vim
:%s/^foo.*/Vim is the best/gc
```
The `^` (caret) symbol matches the beginning of a line and `.*` matches any number of any characters.


#### 4️⃣ Search Range
To substitute all occurrences of ‘foo’ to ‘bar’ in all lines starting from line 3 to line 10 you would use:
```vim
:3,10s/foo/bar/g
```
The range is inclusive, which means that the first and last lines are included in the range.

To substitute ‘foo’ in all lines starting from the current line to the last one:
```vi
:.,$s/foo/bar/
```

The line specifier can also be set using the ‘+’ or ‘-’ symbol,followed by a number that is added or subtracted from the preceding line number. If the number after the symbol is omitted, it defaults to 1.

For example to substitute each ‘foo’ with ‘bar’ starting from the current line and the four next lines, type:

```vi
:.,+4s/foo/bar/g
```

[Find and Replace in Vim / Vi]: https://linuxize.com/post/vim-find-replace/#search-range


### Examples 
Comment lines (add `#` before the line) from 5 to 20:
```vi
:5,20s/^/#/
```

Uncomment lines from 5 to the end, revert the previous changes:
```vi
:5,$s/^#//
```

Replace all instances of ‘apple’, ‘orange’, and ‘mango’ with ‘fruit’:
```vi
:%s/apple\|orange\|mango/fruit/g
```

Remove trailing whitespace at the end of each line:
```vi
:%s/\s\+$//e
```



## Ref
[Vim and Definitions | Github]: https://gist.github.com/igemnace/dfa545d0d71228e010876d48a420a50b

[👍 How can I search a word in whole project/folder recursively?]: https://stackoverflow.com/questions/7950558/how-can-i-search-a-word-in-whole-project-folder-recursively

```s
:vimgrep /JFactory/ **/*.java
```
You can replace the pattern `/JFactory/` with `/\<JFactory\>/` if you want full word match. `:vim` is shorthand for `:vimgrep`.

...

Note that if you want an external program to grep your pattern you can do something like the following:

```
:set grepprg=ack
:grep --java JFactory
```