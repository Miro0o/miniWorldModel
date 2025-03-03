# Troubleshooting

[TOC]



## 👉 Go to definition with LSP
#lsp 

I could reproduce your problem.

It seems to me that Jedi is able to find the definition of your project methods and functions but is not very good at finding the library definition.

I have a different experience with [`coc-nvim`](https://github.com/neoclide/coc.nvim) that I encourage your to try.

For Python you'll have to:
1. Install `coc` and
2. Install `coc-pyright` using the Vim command:
```ruby
:CocInstall coc-pyright
```

With `coc-pyright` the `gd` command bring me successfully to the definition of `sklearn.neural_network.MLPClassifier()`.


[Go to definition with LSP | StackExchange]: https://vi.stackexchange.com/questions/39739/go-to-definition-with-lsp





## Ref

