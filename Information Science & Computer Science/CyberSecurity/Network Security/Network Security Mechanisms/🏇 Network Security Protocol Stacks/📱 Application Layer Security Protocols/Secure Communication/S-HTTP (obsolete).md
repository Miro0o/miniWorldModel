# S-HTTP (obsolete)

[TOC]



## Res


## Intro
> 🔗 https://en.wikipedia.org/wiki/Secure_Hypertext_Transfer_Protocol

Secure Hypertext Transfer Protocol (S-HTTP) is an obsolete alternative to the HTTPS protocol for encrypting web communications carried over the Internet. It was developed by Eric Rescorla and Allan M. Schiffman at EIT in 1994 and published in 1999.

Even though S-HTTP was first to market, Netscape's dominance of the browser market led to HTTPS becoming the de facto method for securing web communications.


![](../../../../../../../Assets/Pics/Pasted%20image%2020230925223111.png)


### Comparison to HTTP over TLS (HTTPS)
- S-HTTP encrypts only the served page data and submitted data like POST fields, leaving the initiation of the protocol unchanged. Because of this, S-HTTP could be used concurrently with HTTP (unsecured) on the same port, as the unencrypted header would determine whether the rest of the transmission is encrypted.

- In contrast, HTTP over TLS wraps the entire communication within [Transport Layer Security](https://en.wikipedia.org/wiki/Transport_Layer_Security "Transport Layer Security") (TLS; formerly SSL), so the encryption starts before any protocol data is sent. This creates a [name-based virtual hosting](https://en.wikipedia.org/wiki/Virtual_hosting#Name-based "Virtual hosting") "chicken and egg" issue with determining which [DNS](https://en.wikipedia.org/wiki/Domain_Name_System "Domain Name System") name was intended for the request.
	- This means that HTTPS implementations without [Server Name Indication](https://en.wikipedia.org/wiki/Server_Name_Indication "Server Name Indication") (SNI) support require a separate [IP address](https://en.wikipedia.org/wiki/IP_address "IP address") per DNS name, and all HTTPS implementations require a separate port (usually 443 vs. HTTP's standard 80) for unambiguous use of encryption (treated in most browsers as a separate [URI scheme](https://en.wikipedia.org/wiki/URI_scheme "URI scheme"), `https://`).

As documented in RFC 2817, HTTP can also be secured by implementing [HTTP/1.1 Upgrade headers](https://en.wikipedia.org/wiki/HTTP/1.1_Upgrade_header "HTTP/1.1 Upgrade header") and upgrading to TLS. Running HTTP over TLS negotiated in this way does not have the implications of HTTPS with regards to name-based virtual hosting (no extra IP addresses, ports, or URI space). However, few implementations support this method.

In S-HTTP, the desired URL is not transmitted in the cleartext headers, but left blank; another set of headers is present inside the encrypted payload. In HTTP over TLS, all headers are inside the encrypted payload and the server application does not generally have the opportunity to gracefully recover from TLS fatal errors (including 'client certificate is untrusted' and 'client certificate is expired')



## Ref
[Secure Hypertext Transfer Protocol (S-HTTP)]: https://networkencyclopedia.com/secure-hypertext-transfer-protocol-s-http/

[Secure Hypertext Transfer Protocol | Wikipedia]: https://en.wikipedia.org/wiki/Secure_Hypertext_Transfer_Protocol

[Difference between S-HTTP and HTTPS]: https://security.stackexchange.com/questions/175684/difference-between-s-http-and-https

The basic idea of S-HTTP is to do everything which is done in the binary SSL/TLS protocol within the text based HTTP protocol. This by itself does not make it less secure.

What makes it definitely less security from today's view is the choice of allowed ciphers (see [section 3.2.4.7](https://www.rfc-editor.org/rfc/rfc2660#section-3.2.4.7) of RFC 2660) which includes only ciphers which are considered weak today. But S-HTTP is not only an old protocol regarding ciphers. It can be expected that some of the attacks which got developed against SSL/TLS in the mean time and which got fixed in subsequent versions will also work against S-HTTP. Given the time when it was developed I expect S-HTTP to be at about the weak security level of SSL 2.0 but at most SSL 3.0.


