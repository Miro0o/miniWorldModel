# ST Package Control

[TOC]



## Res



## [Package control](https://packagecontrol.io)
sublime text package manager that makes it exceedingly simple to find, install and keep packages up-to-date.

[chinese language package install](https://blog.csdn.net/qq_35246620/article/details/78341979) #unsolved 



## 📣 Language Support
### 0️⃣ LSP

↗ [LSP for SublimeText](LSP%20for%20SublimeText.md) for details.


### 1️⃣ JDK
```json
{
"cmd": ["javac \"$file_name\" && java \"$file_base_name\""], // cmd takes array, while shell_cmd takes string
"working_dir": "${project_path:${folder}}", // working directory
"file_regex": "^(...*?):([0-9]*):?([0-9]*)", // error output in regex(regular expression)
"selector": "source.java", // ST interpretor selector
"shell": true, //  idk what this is?
"encoding": "utf-8" 
}
```

[Mac 下使用 Sublime Text 编译 java]: http://t.csdn.cn/N52KG
[用Sublime Text3编写java程序]: http://t.csdn.cn/1NAy8


### 2️⃣ Conda
🏠 https://packagecontrol.io/packages/Conda

> Conda is not automatically activated by default; you have to first manually activate a conda env or change its start-up command script (?)

```json
// SublimeREPL User.config
{
	// "default_extend_env": {"PATH":"C:\\python27\\"},	
	"getenv_command": ["/bin/zsh", "--login", "-c", "env"]
}
```


#### Anaconda
❗ anaconda has already been deprecated.
↗ [mamba](../../../Project%20Builder%20&%20Manager/🔬%20Language-Specific%20Managers/Python%20Managers/Python%20Env%20Managers/mamba.md) is now the choice of python package manager.

[ST(sublime text)->anaconda->python->turtle: build system]: https://www.gushiciku.cn/pl/pSDwqqqq



### 3️⃣ [SublimeREPL](https://packagecontrol.io/packages/SublimeREPL)
📂 [SublimeREPL official doc](https://sublimerepl.readthedocs.io/en/latest/)

#### Python
Python within SublimeREPL cannot detect the conda by default, which means python from within default SublimeREPL is using the system default python (as shonw in `SublimeREPL/config/Python/repl.py`). The problem is there is no `python` on default system settings, while the correct name for python is `python3`; this means you have to mannually change this call in config file (`SublimeREPL/config/Python/repl.py`).
```json
{"command": "repl_open",
	 "caption": "Python",
     "id": "repl_python",
     "mnemonic": "P",
     "args": {
	     "type": "subprocess",
	     "encoding": "utf8",
	     "cmd": ["python3", "-i", "-u"],
	     "cwd": "$file_path",
	     "syntax": "Packages/Python/Python.tmLanguage",
	     "external_id": "python",
	     "extend_env": {"PYTHONIOENCODING": "utf-8"}
    }
},
```

#### Node
There is a code block within `SublimeREPL/config/Nodejs/repl.js` file which tries to set up a network connection to localhost using IPv6 `::1` and a temporary asigned port number. However this attempt failed for some reasons and with it set on i cannot use SublimeREPL Node. IDK what leads to this but after i commented them the SublimeREPL Node works now. 
```js
(function () {

    var repl = require('repl');

    var rep = repl.start({
        prompt:    '> ', //'> ',
        source:    process.stdin, //process.stdin,
        eval:      null, //require('vm').runInThisContext,
        useGlobal: true, //false
        useColors: false
    });


    // why this block??? with this block enabled i always got network error, it seems either node or sublimeREPL started a server on the background but it cannot reach the server from within this code block.

    
    // var net = require('net');
    // var ac_port = process.env.SUBLIMEREPL_AC_PORT;
    // var client = new net.Socket();
    // client.connect(ac_port, "localhost", function() {});

    // client.on('data', function(data) {
    //     var strData = data.toString();
    //     var index = strData.indexOf(":");
    //     var json = strData.slice(index+1, strData.length - 1)
    //     var inData = JSON.parse(json);
    //     var wordIndex = inData.line.slice(inData.cursor_pos).search(/\b/);
    //     if(wordIndex !== 0){
    //         inData.line = inData.line.slice(0, inData.cursor_pos);
    //     }

    //     var send = function (_, completions) {
    //         var comps = completions[0];
    //         var msg = JSON.stringify([inData.line, comps]);
    //         var payload = msg.length + ":" + msg + ",";
    //         client.write(payload)
    //     }
    //     rep.rli.completer(inData.line, send);
    // });

})();

```

[Mac中如何在Sublime Text3上通过REPL插件切换不同Anconda下的Python开发环境，实现交互式代码运行、调试？]: https://blog.csdn.net/weixin_42782150/article/details/122003031

https://www.gushiciku.cn/pl/pSDw

### 4️⃣ PHP

#TODO 

prerequisite: server (appache/ tomcat/ nginx ) + php env 

ref: https://blog.csdn.net/C_ZDCSDN/article/details/112068247



## 📝 Editor Support
### 1️⃣ hexview
#TODO 



### 2️⃣ NeoVintageous
[![NeoVintageous Logo](https://github.com/NeoVintageous/NeoVintageous/raw/master/res/neovintageous.png)](https://github.com/NeoVintageous/NeoVintageous/blob/master/res/neovintageous.png)

> ❗ NeoVintageous has some different key bindings from vanilla Vim.
> 
> More about ↗ [👍 Vim](../../Vim/👍%20Vim.md)


Home 🏠 https://github.com/NeoVintageous/NeoVintageous
Author 🧑🏽‍💻 https://blog.gerardroche.com


NeoVintageous is an advanced Vim emulation layer for Sublime Text.
- Strong defaults
- Highly configurable
- Plugins out-of-the-box
  - Abolish
  - Commentary
  - Highlighted Yank
  - Indent Object
  - Multiple cursors
  - Surround
  - Sneak (disabled by default)
  - Targets
  - Unimpaired
- Integrations: [GitGutter](https://github.com/jisaacks/GitGutter), [SublimeLinter](https://github.com/SublimeLinter/SublimeLinter3), [Origami](https://github.com/SublimeText/Origami)
- Drop-in replacement for Vintageous


#### NV Basics
😎 **How to use**
type in `:help nv` for help.

⌨ **About Keybinding..**
All settings in `neovintageousrc` doesn't seem to work... thought i change it in sublimetext preference config file.... just a workaround \\\_(ツ)\_/

❌ **Disable Neovintageous**
If you want to be able to toggle NeoVintageous on and off, you need to install
the toggle package: https://packagecontrol.io/packages/ToggleNeoVintageous.

vim: tw=78 nu nowrap


#### 🚂 NV Customization & Plugins
NeoVintageous ships with plugins out-of-the-box. Feature-parity is an ongoing
effort and functional differences are not documented. Please open an issues
to request missing features that you would like to see supported.
| Built-in Plug-ins | URL |
| - | - |
| vim-abolish | https://github.com/tpope/vim-abolish |
| vim-commentary | https://github.com/tpope/vim-commentary |
| vim-highlightedyank | https://github.com/machakann/vim-highlightedyank |
| vim-indent-object | https://github.com/michaeljsmith/vim-indent-object |
| vim-multiple-cursors | https://github.com/terryma/vim-multiple-cursors |
| vim-sneak | https://github.com/justinmk/vim-sneak |
| vim-surround | https://github.com/tpope/vim-surround | 
| vim-targets | https://github.com/wellle/targets.vim |
| vim-unimpaired | https://github.com/tpope/vim-unimpaired |

**Vim-abolish**
Two commands are provided. `:Abolish` is the most general interface.
`:Subvert` provides an alternative, more concise syntax for searching and
substituting.
``` json
:Abolish [options] {abbreviation} {replacement}
:Abolish -delete [options] {abbreviation}

:Abolish -search [options] {pattern}
:Subvert/{pattern}[/flags]
:Abolish!-search [options] {pattern}
:Subvert?{pattern}[?flags]

// more type ':help abolish'
```

> 🤔 This doesn't seem to be useful though in ST... 


**Vim-commentary**
```json
gc{motion}              Comment or uncomment lines that {motion} moves over.

gcc                     Comment or uncomment [count] lines.

{Visual}gc              Comment or uncomment the highlighted lines.

gc                      Text object for a comment (operator pending mode only.)

gcgc/gcu                Uncomment the current and adjacent commented lines.

:[range]Commentary      Comment or uncomment [range] lines
```


**Vim-surround**
```json
Old text              |  Command     |  New text ~
--------------------- | ------------ | --------------------------
"Hello *world!"       |     ds"      |   Hello world!
[123+4*56]/2          |     cs])     |   (123+456)/2
"Look ma, I'm *HTML!" |     cs"<q>   |  <q>Look ma, I'm HTML!</q>
if *x>3 {             |     ysW(     |   if ( x>3 ) {
my $str = *whee!;     |     vllllS'  |   my $str = 'whee!';
```


#### Other Vim emulations on ST
Vintage, Six, Vintageous, Neovintageous...


#### 🔗 Links
[Vintage vs NeoVintageous vs SublimeSix]: https://forum.sublimetext.com/t/vintage-vs-neovintageous-vs-sublimesix/41190

[👍 A Practical Guide to Learning Vim (NV on ST)]: https://zzzachzzz.github.io/blog/a-practical-guide-to-learning-vim

[vintage mode]: https://www.sublimetext.com/docs/vintage.html

[History and effects of vim]: https://news.ycombinator.com/item?id=20481512 https://news.ycombinator.com/item?id=20481512


### 3️⃣ Markdown
#### Solusion #1:
[Sublime Text3 的 Markdown 实时预览全面总结](https://blog.csdn.net/qq_20011607/article/details/81370236)


#### Solusion #2:
[Typora Markdown App (OSX)](https://packagecontrol.io/packages/Typora%20Markdown%20App%20%28OSX%29)

open Typora inside ST2



## Code Linting
### Code Formatter
#TODO 



## Ref



