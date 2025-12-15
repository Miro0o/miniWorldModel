# Bash (Bourne Again SHell)

[TOC]



## Res
### Related Topics
↗ [GNU (GNU's Not Unix)](../../../Linux%20(Derived%20From%20UNIX%20Family)/🐑%20GNU%20(GNU's%20Not%20Unix)/GNU%20(GNU's%20Not%20Unix).md)


### 📂 Official Documentation
[Documentation for Bash](https://www.gnu.org/software/bash/manual/) is available online, as is [documentation for most GNU software](https://www.gnu.org/manual/). You may also find information about Bash by running info bash or man bash, or by looking at `/usr/share/doc/bash/`, `/usr/local/share/doc/bash/`, or similar directories on your system. A brief summary is available by running bash --help.

🔗 [Bash Reference Manual (last edit 2022)](https://www.gnu.org/software/bash/manual/html_node/index.html)


### Learn Bash
[what is bash?](https://en.wikipedia.org/wiki/Bash_(Unix_shell))

[Shell Scripting Tutorial](https://www.shellscript.sh)



## Intro
![Gnu-bash-logo.svg](../../../../../../../../Assets/Pics/120px-Gnu-bash-logo.svg.png)

Bash is the **GNU Project's shell** — the **Bourne Again SHell**. This is an sh-compatible shell that incorporates useful features from the **Korn shell (ksh)** and the **C shell (csh)**. It is intended to conform to the IEEE POSIX P1003.2/ISO 9945.2 Shell and Tools standard. It offers functional improvements over sh for both programming and interactive use. In addition, most sh scripts can be run by Bash without modification.

The improvements offered by Bash include:
- command-line editing,
- unlimited size command history,
- job control,
- shell functions and aliases,
- indexed arrays of unlimited size,
- integer arithmetic in any base from two to sixty-four.

The maintainer also has a [Bash page](https://tiswww.case.edu/php/chet/bash/bashtop.html) which includes [Frequently Asked Questions](ftp://ftp.cwru.edu/pub/bash/FAQ).


### Mailing lists
- [help-bash@gnu.org](mailto:help-bash@gnu.org)([web interface](https://lists.gnu.org/mailman/listinfo/help-bash)) is used to ask for help about Bash, Bash programming or Bash shell scripting;
- [bug-bash@gnu.org](mailto:bug-bash@gnu.org) ([web interface](https://lists.gnu.org/mailman/listinfo/bug-bash)) is used to report bugs or discuss most aspects of developing Bash.

Announcements about Bash and most other GNU software are made on [info-gnu@gnu.org](https://lists.gnu.org/mailman/listinfo/info-gnu).

To subscribe to these or any GNU mailing lists, please send an empty mail with a *Subject:* header of just “subscribe” to the relevant *-request* list. For example, to subscribe yourself to the GNU announcement list, you would send mail to <[info-gnu-request@gnu.org](mailto:info-gnu-request@gnu.org?Subject=subscribe)>. Or you can use the web interface.


### Getting involved
Development of Bash, and GNU in general, is a volunteer effort, and you can contribute. For information, please read [How to help GNU](https://www.gnu.org/help/). If you'd like to get involved, it's a good idea to join the discussion mailing list (see above).

- Development
  For development sources, bug and patch trackers, and other information, please see the [Bash project page](https://savannah.gnu.org/projects/bash/) at [savannah.gnu.org](https://savannah.gnu.org/).

- Translating Bash
  To translate the program messages into other languages, please refer to the [Translation Project page for Bash](https://translationproject.org/domain/bash.html). New translations or updates to the existing strings will not be incorporated into Bash if they are sent elsewhere. For more information, see the [Translation Project home page](https://translationproject.org/html/welcome.html).

- Maintainer
  Bash is currently maintained by Chet Ramey. Please use the mailing lists for contact.



## 🎯 Bash User



## 🎯 Bash Developer
> 🔗 https://www.gnu.org/software/bash/manual/html_node/index.html

- [1 Introduction](https://www.gnu.org/software/bash/manual/html_node/Introduction.html)
    - [1.1 What is Bash?](https://www.gnu.org/software/bash/manual/html_node/What-is-Bash_003f.html)
    - [1.2 What is a shell?](https://www.gnu.org/software/bash/manual/html_node/What-is-a-shell_003f.html)
- [2 Definitions](https://www.gnu.org/software/bash/manual/html_node/Definitions.html)
- [3 Basic Shell Features](https://www.gnu.org/software/bash/manual/html_node/Basic-Shell-Features.html)
    - [3.1 Shell Syntax](https://www.gnu.org/software/bash/manual/html_node/Shell-Syntax.html)
        - [3.1.1 Shell Operation](https://www.gnu.org/software/bash/manual/html_node/Shell-Operation.html)
        - [3.1.2 Quoting](https://www.gnu.org/software/bash/manual/html_node/Quoting.html)
            - [3.1.2.1 Escape Character](https://www.gnu.org/software/bash/manual/html_node/Escape-Character.html)
            - [3.1.2.2 Single Quotes](https://www.gnu.org/software/bash/manual/html_node/Single-Quotes.html)
            - [3.1.2.3 Double Quotes](https://www.gnu.org/software/bash/manual/html_node/Double-Quotes.html)
            - [3.1.2.4 ANSI-C Quoting](https://www.gnu.org/software/bash/manual/html_node/ANSI_002dC-Quoting.html)
            - [3.1.2.5 Locale-Specific Translation](https://www.gnu.org/software/bash/manual/html_node/Locale-Translation.html)
        - [3.1.3 Comments](https://www.gnu.org/software/bash/manual/html_node/Comments.html)
    - [3.2 Shell Commands](https://www.gnu.org/software/bash/manual/html_node/Shell-Commands.html)
        - [3.2.1 Reserved Words](https://www.gnu.org/software/bash/manual/html_node/Reserved-Words.html)
        - [3.2.2 Simple Commands](https://www.gnu.org/software/bash/manual/html_node/Simple-Commands.html)
        - [3.2.3 Pipelines](https://www.gnu.org/software/bash/manual/html_node/Pipelines.html)
        - [3.2.4 Lists of Commands](https://www.gnu.org/software/bash/manual/html_node/Lists.html)
        - [3.2.5 Compound Commands](https://www.gnu.org/software/bash/manual/html_node/Compound-Commands.html)
            - [3.2.5.1 Looping Constructs](https://www.gnu.org/software/bash/manual/html_node/Looping-Constructs.html)
            - [3.2.5.2 Conditional Constructs](https://www.gnu.org/software/bash/manual/html_node/Conditional-Constructs.html)
            - [3.2.5.3 Grouping Commands](https://www.gnu.org/software/bash/manual/html_node/Command-Grouping.html)
        - [3.2.6 Coprocesses](https://www.gnu.org/software/bash/manual/html_node/Coprocesses.html)
        - [3.2.7 GNU Parallel](https://www.gnu.org/software/bash/manual/html_node/GNU-Parallel.html)
    - [3.3 Shell Functions](https://www.gnu.org/software/bash/manual/html_node/Shell-Functions.html)
    - [3.4 Shell Parameters](https://www.gnu.org/software/bash/manual/html_node/Shell-Parameters.html)
        - [3.4.1 Positional Parameters](https://www.gnu.org/software/bash/manual/html_node/Positional-Parameters.html)
        - [3.4.2 Special Parameters](https://www.gnu.org/software/bash/manual/html_node/Special-Parameters.html)
    - [3.5 Shell Expansions](https://www.gnu.org/software/bash/manual/html_node/Shell-Expansions.html)
        - [3.5.1 Brace Expansion](https://www.gnu.org/software/bash/manual/html_node/Brace-Expansion.html)
        - [3.5.2 Tilde Expansion](https://www.gnu.org/software/bash/manual/html_node/Tilde-Expansion.html)
        - [3.5.3 Shell Parameter Expansion](https://www.gnu.org/software/bash/manual/html_node/Shell-Parameter-Expansion.html)
        - [3.5.4 Command Substitution](https://www.gnu.org/software/bash/manual/html_node/Command-Substitution.html)
        - [3.5.5 Arithmetic Expansion](https://www.gnu.org/software/bash/manual/html_node/Arithmetic-Expansion.html)
        - [3.5.6 Process Substitution](https://www.gnu.org/software/bash/manual/html_node/Process-Substitution.html)
        - [3.5.7 Word Splitting](https://www.gnu.org/software/bash/manual/html_node/Word-Splitting.html)
        - [3.5.8 Filename Expansion](https://www.gnu.org/software/bash/manual/html_node/Filename-Expansion.html)
            - [3.5.8.1 Pattern Matching](https://www.gnu.org/software/bash/manual/html_node/Pattern-Matching.html)
        - [3.5.9 Quote Removal](https://www.gnu.org/software/bash/manual/html_node/Quote-Removal.html)
    - [3.6 Redirections](https://www.gnu.org/software/bash/manual/html_node/Redirections.html)
        - [3.6.1 Redirecting Input](https://www.gnu.org/software/bash/manual/html_node/Redirections.html#Redirecting-Input)
        - [3.6.2 Redirecting Output](https://www.gnu.org/software/bash/manual/html_node/Redirections.html#Redirecting-Output)
        - [3.6.3 Appending Redirected Output](https://www.gnu.org/software/bash/manual/html_node/Redirections.html#Appending-Redirected-Output)
        - [3.6.4 Redirecting Standard Output and Standard Error](https://www.gnu.org/software/bash/manual/html_node/Redirections.html#Redirecting-Standard-Output-and-Standard-Error)
        - [3.6.5 Appending Standard Output and Standard Error](https://www.gnu.org/software/bash/manual/html_node/Redirections.html#Appending-Standard-Output-and-Standard-Error)
        - [3.6.6 Here Documents](https://www.gnu.org/software/bash/manual/html_node/Redirections.html#Here-Documents)
        - [3.6.7 Here Strings](https://www.gnu.org/software/bash/manual/html_node/Redirections.html#Here-Strings)
        - [3.6.8 Duplicating File Descriptors](https://www.gnu.org/software/bash/manual/html_node/Redirections.html#Duplicating-File-Descriptors)
        - [3.6.9 Moving File Descriptors](https://www.gnu.org/software/bash/manual/html_node/Redirections.html#Moving-File-Descriptors)
        - [3.6.10 Opening File Descriptors for Reading and Writing](https://www.gnu.org/software/bash/manual/html_node/Redirections.html#Opening-File-Descriptors-for-Reading-and-Writing)
    - [3.7 Executing Commands](https://www.gnu.org/software/bash/manual/html_node/Executing-Commands.html)
        - [3.7.1 Simple Command Expansion](https://www.gnu.org/software/bash/manual/html_node/Simple-Command-Expansion.html)
        - [3.7.2 Command Search and Execution](https://www.gnu.org/software/bash/manual/html_node/Command-Search-and-Execution.html)
        - [3.7.3 Command Execution Environment](https://www.gnu.org/software/bash/manual/html_node/Command-Execution-Environment.html)
        - [3.7.4 Environment](https://www.gnu.org/software/bash/manual/html_node/Environment.html)
        - [3.7.5 Exit Status](https://www.gnu.org/software/bash/manual/html_node/Exit-Status.html)
        - [3.7.6 Signals](https://www.gnu.org/software/bash/manual/html_node/Signals.html)
    - [3.8 Shell Scripts](https://www.gnu.org/software/bash/manual/html_node/Shell-Scripts.html)
- [4 Shell Builtin Commands](https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html)
    - [4.1 Bourne Shell Builtins](https://www.gnu.org/software/bash/manual/html_node/Bourne-Shell-Builtins.html)
    - [4.2 Bash Builtin Commands](https://www.gnu.org/software/bash/manual/html_node/Bash-Builtins.html)
    - [4.3 Modifying Shell Behavior](https://www.gnu.org/software/bash/manual/html_node/Modifying-Shell-Behavior.html)
        - [4.3.1 The Set Builtin](https://www.gnu.org/software/bash/manual/html_node/The-Set-Builtin.html)
        - [4.3.2 The Shopt Builtin](https://www.gnu.org/software/bash/manual/html_node/The-Shopt-Builtin.html)
    - [4.4 Special Builtins](https://www.gnu.org/software/bash/manual/html_node/Special-Builtins.html)
- [5 Shell Variables](https://www.gnu.org/software/bash/manual/html_node/Shell-Variables.html)
    - [5.1 Bourne Shell Variables](https://www.gnu.org/software/bash/manual/html_node/Bourne-Shell-Variables.html)
    - [5.2 Bash Variables](https://www.gnu.org/software/bash/manual/html_node/Bash-Variables.html)
- [6 Bash Features](https://www.gnu.org/software/bash/manual/html_node/Bash-Features.html)
    - [6.1 Invoking Bash](https://www.gnu.org/software/bash/manual/html_node/Invoking-Bash.html)
    - [6.2 Bash Startup Files](https://www.gnu.org/software/bash/manual/html_node/Bash-Startup-Files.html)
    - [6.3 Interactive Shells](https://www.gnu.org/software/bash/manual/html_node/Interactive-Shells.html)
        - [6.3.1 What is an Interactive Shell?](https://www.gnu.org/software/bash/manual/html_node/What-is-an-Interactive-Shell_003f.html)
        - [6.3.2 Is this Shell Interactive?](https://www.gnu.org/software/bash/manual/html_node/Is-this-Shell-Interactive_003f.html)
        - [6.3.3 Interactive Shell Behavior](https://www.gnu.org/software/bash/manual/html_node/Interactive-Shell-Behavior.html)
    - [6.4 Bash Conditional Expressions](https://www.gnu.org/software/bash/manual/html_node/Bash-Conditional-Expressions.html)
    - [6.5 Shell Arithmetic](https://www.gnu.org/software/bash/manual/html_node/Shell-Arithmetic.html)
    - [6.6 Aliases](https://www.gnu.org/software/bash/manual/html_node/Aliases.html)
    - [6.7 Arrays](https://www.gnu.org/software/bash/manual/html_node/Arrays.html)
    - [6.8 The Directory Stack](https://www.gnu.org/software/bash/manual/html_node/The-Directory-Stack.html)
        - [6.8.1 Directory Stack Builtins](https://www.gnu.org/software/bash/manual/html_node/Directory-Stack-Builtins.html)
    - [6.9 Controlling the Prompt](https://www.gnu.org/software/bash/manual/html_node/Controlling-the-Prompt.html)
    - [6.10 The Restricted Shell](https://www.gnu.org/software/bash/manual/html_node/The-Restricted-Shell.html)
    - [6.11 Bash POSIX Mode](https://www.gnu.org/software/bash/manual/html_node/Bash-POSIX-Mode.html)
    - [6.12 Shell Compatibility Mode](https://www.gnu.org/software/bash/manual/html_node/Shell-Compatibility-Mode.html)
- [7 Job Control](https://www.gnu.org/software/bash/manual/html_node/Job-Control.html)
    - [7.1 Job Control Basics](https://www.gnu.org/software/bash/manual/html_node/Job-Control-Basics.html)
    - [7.2 Job Control Builtins](https://www.gnu.org/software/bash/manual/html_node/Job-Control-Builtins.html)
    - [7.3 Job Control Variables](https://www.gnu.org/software/bash/manual/html_node/Job-Control-Variables.html)
- [8 Command Line Editing](https://www.gnu.org/software/bash/manual/html_node/Command-Line-Editing.html)
    - [8.1 Introduction to Line Editing](https://www.gnu.org/software/bash/manual/html_node/Introduction-and-Notation.html)
    - [8.2 Readline Interaction](https://www.gnu.org/software/bash/manual/html_node/Readline-Interaction.html)
        - [8.2.1 Readline Bare Essentials](https://www.gnu.org/software/bash/manual/html_node/Readline-Bare-Essentials.html)
        - [8.2.2 Readline Movement Commands](https://www.gnu.org/software/bash/manual/html_node/Readline-Movement-Commands.html)
        - [8.2.3 Readline Killing Commands](https://www.gnu.org/software/bash/manual/html_node/Readline-Killing-Commands.html)
        - [8.2.4 Readline Arguments](https://www.gnu.org/software/bash/manual/html_node/Readline-Arguments.html)
        - [8.2.5 Searching for Commands in the History](https://www.gnu.org/software/bash/manual/html_node/Searching.html)
    - [8.3 Readline Init File](https://www.gnu.org/software/bash/manual/html_node/Readline-Init-File.html)
        - [8.3.1 Readline Init File Syntax](https://www.gnu.org/software/bash/manual/html_node/Readline-Init-File-Syntax.html)
        - [8.3.2 Conditional Init Constructs](https://www.gnu.org/software/bash/manual/html_node/Conditional-Init-Constructs.html)
        - [8.3.3 Sample Init File](https://www.gnu.org/software/bash/manual/html_node/Sample-Init-File.html)
    - [8.4 Bindable Readline Commands](https://www.gnu.org/software/bash/manual/html_node/Bindable-Readline-Commands.html)
        - [8.4.1 Commands For Moving](https://www.gnu.org/software/bash/manual/html_node/Commands-For-Moving.html)
        - [8.4.2 Commands For Manipulating The History](https://www.gnu.org/software/bash/manual/html_node/Commands-For-History.html)
        - [8.4.3 Commands For Changing Text](https://www.gnu.org/software/bash/manual/html_node/Commands-For-Text.html)
        - [8.4.4 Killing And Yanking](https://www.gnu.org/software/bash/manual/html_node/Commands-For-Killing.html)
        - [8.4.5 Specifying Numeric Arguments](https://www.gnu.org/software/bash/manual/html_node/Numeric-Arguments.html)
        - [8.4.6 Letting Readline Type For You](https://www.gnu.org/software/bash/manual/html_node/Commands-For-Completion.html)
        - [8.4.7 Keyboard Macros](https://www.gnu.org/software/bash/manual/html_node/Keyboard-Macros.html)
        - [8.4.8 Some Miscellaneous Commands](https://www.gnu.org/software/bash/manual/html_node/Miscellaneous-Commands.html)
    - [8.5 Readline vi Mode](https://www.gnu.org/software/bash/manual/html_node/Readline-vi-Mode.html)
    - [8.6 Programmable Completion](https://www.gnu.org/software/bash/manual/html_node/Programmable-Completion.html)
    - [8.7 Programmable Completion Builtins](https://www.gnu.org/software/bash/manual/html_node/Programmable-Completion-Builtins.html)
    - [8.8 A Programmable Completion Example](https://www.gnu.org/software/bash/manual/html_node/A-Programmable-Completion-Example.html)
- [9 Using History Interactively](https://www.gnu.org/software/bash/manual/html_node/Using-History-Interactively.html)
    - [9.1 Bash History Facilities](https://www.gnu.org/software/bash/manual/html_node/Bash-History-Facilities.html)
    - [9.2 Bash History Builtins](https://www.gnu.org/software/bash/manual/html_node/Bash-History-Builtins.html)
    - [9.3 History Expansion](https://www.gnu.org/software/bash/manual/html_node/History-Interaction.html)
        - [9.3.1 Event Designators](https://www.gnu.org/software/bash/manual/html_node/Event-Designators.html)
        - [9.3.2 Word Designators](https://www.gnu.org/software/bash/manual/html_node/Word-Designators.html)
        - [9.3.3 Modifiers](https://www.gnu.org/software/bash/manual/html_node/Modifiers.html)
- [10 Installing Bash](https://www.gnu.org/software/bash/manual/html_node/Installing-Bash.html)
    - [10.1 Basic Installation](https://www.gnu.org/software/bash/manual/html_node/Basic-Installation.html)
    - [10.2 Compilers and Options](https://www.gnu.org/software/bash/manual/html_node/Compilers-and-Options.html)
    - [10.3 Compiling For Multiple Architectures](https://www.gnu.org/software/bash/manual/html_node/Compiling-For-Multiple-Architectures.html)
    - [10.4 Installation Names](https://www.gnu.org/software/bash/manual/html_node/Installation-Names.html)
    - [10.5 Specifying the System Type](https://www.gnu.org/software/bash/manual/html_node/Specifying-the-System-Type.html)
    - [10.6 Sharing Defaults](https://www.gnu.org/software/bash/manual/html_node/Sharing-Defaults.html)
    - [10.7 Operation Controls](https://www.gnu.org/software/bash/manual/html_node/Operation-Controls.html)
    - [10.8 Optional Features](https://www.gnu.org/software/bash/manual/html_node/Optional-Features.html)
- [Appendix A Reporting Bugs](https://www.gnu.org/software/bash/manual/html_node/Reporting-Bugs.html)
- [Appendix B Major Differences From The Bourne Shell](https://www.gnu.org/software/bash/manual/html_node/Major-Differences-From-The-Bourne-Shell.html)
    - [B.1 Implementation Differences From The SVR4.2 Shell](https://www.gnu.org/software/bash/manual/html_node/Major-Differences-From-The-Bourne-Shell.html#Implementation-Differences-From-The-SVR4_002e2-Shell)
- [Appendix C GNU Free Documentation License](https://www.gnu.org/software/bash/manual/html_node/GNU-Free-Documentation-License.html)
- [Appendix D Indexes](https://www.gnu.org/software/bash/manual/html_node/Indexes.html)
    - [D.1 Index of Shell Builtin Commands](https://www.gnu.org/software/bash/manual/html_node/Builtin-Index.html)
    - [D.2 Index of Shell Reserved Words](https://www.gnu.org/software/bash/manual/html_node/Reserved-Word-Index.html)
    - [D.3 Parameter and Variable Index](https://www.gnu.org/software/bash/manual/html_node/Variable-Index.html)
    - [D.4 Function Index](https://www.gnu.org/software/bash/manual/html_node/Function-Index.html)
    - [D.5 Concept Index](https://www.gnu.org/software/bash/manual/html_node/Concept-Index.html)



## Ref
