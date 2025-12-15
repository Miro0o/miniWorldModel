# FAQ

[TOC]



## Res


## 👉 Remap hotkey on `Neovintinge`
#SublimeText2

>  [How do I remap escape when in Sublime Text vintage mode?](https://stackoverflow.com/questions/9620812/how-do-i-remap-escape-when-in-sublime-text-vintage-mode) 

1. For [Vintageous](https://github.com/guillermooo/Vintageous) plugin, use [the following key binding](https://github.com/guillermooo/Vintageous/wiki/Using-jj-instead-of-Esc):
```js
{
    "keys": ["j", "k"],
    "command": "_enter_normal_mode",
    "args": {"mode": "mode_insert"},
    "context": [{"key": "vi_insert_mode_aware"}]
}
```

2. For  `Neovintageous` you can set these options in Sublime Text preferences to remap \<Esc\>:
``` shell
"vintageous_i_escape_jj": true

"vintageous_i_escape_jk": true
```


However neither works for me 🤷🏽‍♂️

#TODO 



## 👉 Set Default Indentation to Spaces /Tabs
#SublimeText2 

Indentation settings determine the size of the tab stops, and control whether the **Tab** key should insert tabs or spaces. In addition to the automatic detection, they can be customized globally, per-syntax type, or per-file.
- [Basic Settings](https://www.sublimetext.com/docs/indentation.html#basic-settings)
- [Indentation Detection](https://www.sublimetext.com/docs/indentation.html#indentation-detection)
- [Converting Between Tabs and Spaces](https://www.sublimetext.com/docs/indentation.html#converting-between-tabs-and-spaces)
- [Automatic Indentation Settings](https://www.sublimetext.com/docs/indentation.html#automatic-indentation-settings)


[Indentation Settings | SublimeText Documentation]: https://www.sublimetext.com/docs/indentation.html
[How do I set the default indentation settings for Sublime Text 3? | StackExchange]: https://superuser.com/q/1607461



## Ref

