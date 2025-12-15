# network diagnostic Tools

[TOC]



## Res


## 👉 `traceroute`


## 👉 `dns-sd`
ns-sd – Multicast DNS (mDNS) & DNS Service Discovery (DNS-SD) Test Tool.

The dns-sd command is a network diagnostic tool, much like ping(8) or traceroute(8). However, unlike those tools, most of its functionality is not implemented in the dns-sd executable itself, but in library code that is available to any application. The library API that dns-sd uses is documented in /usr/include/dns_sd.h. ==The dns-sd command replaces the older mDNS command.==

The dns-sd command is primarily intended for interactive use. Because its command-line arguments and output format are subject to change, invoking it from a shell script will generally be fragile. Additionally, the asynchronous nature of DNS Service Discovery does not lend itself easily to script-oriented programming. For example, calls like "browse" never complete; the action of performing a "browse" sets in motion machinery to notify the client whenever instances of that service type appear or disappear from the network. These notifications continue to be delivered indefinitely, for minutes, hours, or even days, as services come and go, until the client explicitly terminates the call. This style of asynchronous interaction works best with applications that are either multi-threaded, or use a main event-handling loop to receive keystrokes, network data, and other asynchronous event notifications as they happen.

If you wish to perform DNS Service Discovery operations from a scripting language, then the best way to do this is not to execute the dns-sd command and then attempt to decipher the textual output, but instead to directly call the DNS-SD APIs using a binding for your chosen language.

For example, if you are programming in Ruby, then you can directly call DNS-SD APIs using the dnssd package documented at <http://rubyforge.org/projects/dnssd/> 

Similar bindings for other languages are also in development.


## Ref

