# epoll()

[TOC]



## Res
### Related Topics



## Intro
> 📎 https://en.wikipedia.org/wiki/Epoll



## Ref
[👍 epoll: The API that powers the modern internet]: https://darkcoding.net/software/epoll-the-api-that-powers-the-modern-internet/

You used [epoll](https://man7.org/linux/man-pages/man7/epoll.7.html) to fetch this blog post. For almost anything you do on the Internet the server will be running Linux and it will use `epoll` to receive and answer your request in a timely and affordable manner.
- epoll is what makes Go such a great language for writing server software. Here is epoll in [Go’s netpoll](https://github.com/golang/go/blob/f229e7031a6efb2f23241b5da000c3b3203081d6/src/runtime/netpoll_epoll.go#L101-L126).
- epoll is what makes nginx the [most popular web server](https://news.netcraft.com/archives/2021/12/22/december-2021-web-server-survey.html) in the world (this blog runs nginx). Here is [nginx’s use of epoll](https://github.com/nginx/nginx/blob/a64190933e06758d50eea926e6a55974645096fd/src/event/modules/ngx_epoll_module.c#L784-L800).
- and it is often what we mean when we say ‘async’ in most programming languages. For example, of Rust’s two main async frameworks, async-std uses [polling](https://github.com/smol-rs/polling/blob/master/src/epoll.rs#L156-L157) and tokio uses [mio](https://github.com/tokio-rs/mio/blob/dca2134ef355b3c0d00e8e338e44e7d9ed63edac/src/sys/unix/selector/epoll.rs#L68).

Aside: All of the above work on many operating systems and support API’s other than `epoll`, which is Linux specific. The Internet is [mostly made of](https://en.wikipedia.org/wiki/Usage_share_of_operating_systems#Public_servers_on_the_Internet) [Linux](https://w3techs.com/technologies/details/os-unix), so epoll is the API that matters.

