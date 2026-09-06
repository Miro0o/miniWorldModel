# explainshell

[TOC]



## Res
🏠 http://www.explainshell.com/

[explainshell.com](http://www.explainshell.com/) - match command-line arguments to their help text

explainshell is **a tool (with a web interface)** capable of parsing man pages, extracting options and explain a given command-line by matching each argument to the relevant help text in the man page.



## Intro
![Screenshot 2022-12-10 at 8.15.14 PM](../../../../../../../Assets/Pics/Screenshot%202022-12-10%20at%208.15.14%20PM.png)

### How?
explainshell is built from the following components:

1. man page reader which converts a given man page from raw format to html (manpage.py)
2. classifier which goes through every paragraph in the man page and classifies it as contains options or not (algo/classifier.py)
3. an options extractor that scans classified paragraphs and looks for options (options.py)
4. a storage backend that saves processed man pages to mongodb (store.py)
5. a matcher that walks the command's AST (parsed by [bashlex](https://github.com/idank/bashlex)) and contextually matches each node to the relevant help text (matcher.py)

When querying explainshell, it:

1. parses the query into an AST
2. visits interesting nodes in the AST, such as:
   - command nodes - these nodes represent a simple command
   - shell related nodes - these nodes represent something the shell interprets such as '|', '&&'
3. for every command node we check if we know how to explain the current program, and then go through the rest of the tokens, trying to match each one to the list of known options
4. returns a list of matches that are rendered with Flask



## Ref
