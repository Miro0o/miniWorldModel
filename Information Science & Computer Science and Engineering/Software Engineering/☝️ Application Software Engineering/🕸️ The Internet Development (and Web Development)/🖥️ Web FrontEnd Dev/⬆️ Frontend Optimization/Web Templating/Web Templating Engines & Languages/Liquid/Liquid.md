# Liquid

[TOC]



## Res
### Learn Liquid
🚧 https://github.com/Shopify/liquid
📂 https://shopify.github.io/liquid/



## Intro
Liquid is an open-source template language created by [Shopify](https://www.shopify.com/) and written in Ruby. It is the backbone of Shopify themes and is used to load dynamic content on storefronts.

Liquid has been in production use at Shopify since 2006 and is now used by many other hosted web applications.

Liquid is a template engine which was written with very specific requirements:
- It has to have beautiful and simple markup. Template engines which don't produce good looking markup are no fun to use.
- It needs to be non evaling and secure. Liquid templates are made so that users can edit them. You don't want to run code on your server which your users wrote.
- It has to be stateless. Compile and render steps have to be separate so that the expensive parsing and compiling can be done once and later on you can just render it passing in a hash with local variables and objects.



## Ref