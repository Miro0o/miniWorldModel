# Needham-Schroeder Protocol

[TOC]



## Res
### Related Topics


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Needham%E2%80%93Schroeder_protocol

The **Needham–Schroeder protocol** is one of the two key transport protocols intended for use over an insecure network, both proposed by [Roger Needham](https://en.wikipedia.org/wiki/Roger_Needham "Roger Needham") and [Michael Schroeder](https://en.wikipedia.org/wiki/Michael_Schroeder "Michael Schroeder"). These are:
- The _Needham–Schroeder Symmetric Key Protocol_ (NSSK),  based on a [symmetric encryption algorithm](https://en.wikipedia.org/wiki/Symmetric-key_algorithm "Symmetric-key algorithm"). It forms the basis for the [Kerberos](https://en.wikipedia.org/wiki/Kerberos_\(protocol\) "Kerberos (protocol)") protocol. This protocol aims to establish a [session key](https://en.wikipedia.org/wiki/Session_key "Session key") between two parties on a network, typically to protect further communication.
- The _Needham–Schroeder Public-Key Protocol_ (NSPK), based on [public-key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography "Public-key cryptography"). This protocol is intended to provide mutual [authentication](https://en.wikipedia.org/wiki/Authentication "Authentication") between two parties communicating on a network, but in its proposed form is insecure.



## Needham-Schroeder Symmetric Key Protocol (NSSK)
![|400](../../../../../../../Assets/Pics/Pasted%20image%2020260223103602.png)
<small>Symmetric Needham–Schroeder protocol scheme <br> <a>https://en.wikipedia.org/wiki/Needham%E2%80%93Schroeder_protocol</a></small>



## Needham-Schroeder Public-Key Protocol (NSPK)

```AnB
Protocol : NSPK

Types : Agent A , B ;
		Number NA , NB ;
		Function pk , h

Knowledge : A : B : A , pk ( A ) , inv ( pk ( A )) , B , pk ( B ) , h ;
			B , pk ( B ) , inv ( pk ( B )) , A , pk ( A ) , h

Actions :
A - > B : { NA , A }( pk ( B ))  # A generates NA
B - > A : { NA , NB }( pk ( A )) # B generates NB
A - > B : { NB }( pk ( B ))

Goals :
h(NA, NB) secret between A , B
```


### Needham-Schroeder-Lowe (1996)
```AnB
Protocol : NSL

Types : Agent A , B ;
		Number NA , NB ;
		Function pk , h

Knowledge : A : B : A , pk ( A ) , inv ( pk ( A )) , B , pk ( B ) , h ;
			B , pk ( B ) , inv ( pk ( B )) , A , pk ( A ) , h

Actions :
A - > B : { NA , A }( pk ( B ))
B - > A : { NA , NB , B }( pk ( A ))
# Inserted B ’ s name into the message
A - > B : { NB }( pk ( B ))

Goals :
h ( NA , NB ) secret between A , B
```



## Ref
