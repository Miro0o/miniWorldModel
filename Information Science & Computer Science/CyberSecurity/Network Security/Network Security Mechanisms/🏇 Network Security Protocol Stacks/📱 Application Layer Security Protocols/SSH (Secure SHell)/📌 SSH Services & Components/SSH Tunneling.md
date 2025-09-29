# SSH Tunneling

[TOC]



## Res
### Related Topics



## Intro
### What is an SSH tunnel?
SSH tunneling is a method of transporting arbitrary networking data over an encrypted SSH connection. It can be used to add encryption to legacy applications. It can also be used to implement VPNs (Virtual Private Networks) and access intranet services across firewalls.

![Securing applications with ssh tunneling / port forwarding](../../../../../../../../Assets/Pics/Securing_applications_with_ssh_tunneling___port_forwarding-2.png)


The SSH connection is used by the application to connect to the application server. With tunneling enabled, the application contacts to a port on the local host that the SSH client listens on. The SSH client then forwards the application over its encrypted tunnel to the server. The server then connects to the actual application server - usually on the same machine or in the same data center as the SSH server. The application communication is thus secured, without having to modify the application or end user workflows.



## Ref
[👍 Forward SSH through SSH tunnel | StackExchange]: https://serverfault.com/q/341190

our problem is in binding a listener to localhost:22; there's already an sshd listening on that. Tunnelling an ssh connection through an ssh connection is completely lawful, and I do it all the time, but you need to pick unused ports for your forwarding listeners.

Try
```shell
ssh user@100.100.100.100 -L 2201:192.168.25.100:22
```

then
``` shell
ssh localhost -p 2201
```

You should end up on server B (unless something's already bound to me:2201, in which case, pick another port).

----
You don't have to use ssh port forwarding to ssh into an internal computer through a proxy. You can use the ssh feature of executing a command on the first server you connect to in order to ssh into a 3rd computer.
``` shell
ssh -t user@100.100.100.100 ssh user@192.168.25.100
```

The `-t` option forces ssh to allocate a pseudo-tty so you can run an interactive command.

This can work with ssh keys as well. If you have your private and public key on machine A and your public key in the authorized keys files on machines B and C, then you can use the `-A` option to forward the authentication agent connection.

---
As of OpenSSH 7.3 (late 2016) the easiest way is the [ProxyJump](https://en.wikibooks.org/wiki/OpenSSH/Cookbook/Proxies_and_Jump_Hosts#Passing_Through_One_or_More_Gateways_Using_ProxyJump) setting. In your `~/.ssh/config`:
```
Host B
  ProxyJump A
```

Or on the command line, `-J B`.
```shell
ssh -J jumper@100.100.100.100 target@192.168.25.100
```
