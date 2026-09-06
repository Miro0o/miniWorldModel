# Troubleshootings

[TOC]



##  👉 [Why do I get a "permission denied" error while installing a gem?](https://stackoverflow.com/questions/17550903/why-do-i-get-a-permission-denied-error-while-installing-a-gem)

**✅ Adopted Answer** 

Your Ruby is installed in `/usr/local/Cellar/ruby/...`.

That is a restricted path and can only be written to when you use elevated privileges, either by running as root or by using `sudo`. I won't recommend you run things as root since you don't understand how paths and permissions work. You *can* use `sudo gem install jekyll`, which will temporarily elevate your permissions, giving your command the rights needed to write to that directory.

However, I'd recommend you give serious thought into NOT doing that, and instead use your RVM to install Ruby into your own home directory, where you'll automatically be able to install Rubies and gems without permission issues. See the directions for installing into a local RVM sandbox in "[Single-User installations](https://rvm.io/rvm/install#explained)".

Because you have RVM in your `~/.bash_profile`, but it doesn't show up in your Gem environment listing, I suspect you either haven't followed the directions for installing RVM correctly, or you haven't used the all-important command:

```rb
rvm use 2.0.0 --default
```

to configure a default Ruby. 

For most users, the "Single-User installation" is the way to go. If you have to use `sudo` with that configuration you've done something wrong.



## 👉  [Ignoring GEM because its extensions are not built](https://stackoverflow.com/questions/38797458/ignoring-gem-because-its-extensions-are-not-built) 

**✅ Adopted Answer** 

I came across this exact issue today - getting warnings like this for gems that weren't even installed!

... Well, it turns out the gems *were* installed - for a different ruby than the one I had set active with chruby (2.2.3 vs 2.3.1). 

Switching to all the different rubies and running `gem pristine --all` on all of them solved the problem.



