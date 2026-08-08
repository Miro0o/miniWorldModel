# openresty

[TOC]



## Res
🏠 https://openresty.org/en/
🚧 https://github.com/openresty/openresty



## Intro
OpenResty® is a full-fledged web platform that integrates our enhanced version of the [Nginx](https://openresty.org/en/nginx.html "Nginx") core, our enhanced version of [LuaJIT](https://github.com/openresty/luajit2 "LuaJIT"), many carefully written Lua libraries, lots of high quality [3rd-party Nginx modules](https://openresty.org/en/components.html "3rd-party Nginx modules"), and most of their external dependencies. It is designed to help developers easily build scalable web applications, web services, and dynamic web gateways.

By taking advantage of various well-designed [Nginx](https://openresty.org/en/nginx.html "Nginx") modules (most of which are developed by the OpenResty team themselves), OpenResty® effectively turns the nginx server into a powerful web app server, in which the web developers can use the Lua programming language to script various existing nginx C modules and Lua modules and construct extremely high-performance web applications that are capable to handle 10K ~ 1000K+ connections in a single box.

OpenResty® aims to run your server-side web app completely in the [Nginx](https://openresty.org/en/nginx.html "Nginx") server, leveraging [Nginx](https://openresty.org/en/nginx.html "Nginx")'s event model to do non-blocking I/O not only with the HTTP clients, but also with remote backends like MySQL, PostgreSQL, Memcached, and Redis.

Real-world applications of OpenResty® range from dynamic web portals and web gateways, web application firewalls, web service platforms for mobile apps/advertising/distributed storage/data analytics, to full-fledged dynamic web applications and web sites. The hardware used to run OpenResty® also ranges from very big metals to embedded devices with very limited resources. It is not uncommon for our production users to serve billions of requests daily for millions of active users with just a handful of machines.

OpenResty® is _not_ an [Nginx](https://openresty.org/en/nginx.html "Nginx") fork. It is a higher level application and gateway platform using Nginx as a component. Most of the patches applied to the [Nginx](https://openresty.org/en/nginx.html "Nginx") core in OpenResty® have already been submitted to the official [Nginx](https://openresty.org/en/nginx.html "Nginx") team and most of the patches submitted have also been accepted. We constantly import the latest features and bug fixes from the official [Nginx](https://openresty.org/en/nginx.html "Nginx") team, the official LuaJIT repository, and other sources.

See [Components](https://openresty.org/en/components.html "Components") for the complete list of software bundled in OpenResty®.

See [GettingStarted](https://openresty.org/en/getting-started.html "GettingStarted") on how to quickly setup an OpenResty® server that can say hello world over HTTP. Or you can go to the [Download](https://openresty.org/en/download.html "Download") section to grab OpenResty®'s source code tarball directly.

We provide free technical support through the community on the openresty and openresty-en mailing lists. See [Community](https://openresty.org/en/community.html "Community").

Our [OpenResty Inc.](https://openresty.com/ "OpenResty Inc.") company offers enterprise solutions based on OpenResty to its global customers, with commercial support.



## Ref

