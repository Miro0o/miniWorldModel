# L2TP (Layer 2 Tunneling Protocol) (over IPSec)

[TOC]



## Res



## Intro
> 🔗 https://en.wikipedia.org/wiki/Layer_2_Tunneling_Protocol

In computer networking, Layer 2 Tunneling Protocol (L2TP) is a tunneling protocol used to support virtual private networks (VPNs) or as part of the delivery of services by ISPs. It uses encryption ('hiding') only for its own control messages (using an optional pre-shared secret), and does not provide any encryption or confidentiality of content by itself. Rather, it provides a tunnel for Layer 2 (which may be encrypted), and the tunnel itself may be passed over a Layer 3 encryption protocol such as IPsec.


### IPsec vs. L2TP (over IPsec)
#IPSec #L2TP

> 🔗 https://superuser.com/a/378591

**Cisco IPsec vs. L2TP (over IPsec)**
- The term **Cisco IPsec** is just a marketing ploy which basically means plain IPsec using ESP in tunnel mode without any additional encapsulation, and using the Internet Key Exchange protocol (IKE) to establish the tunnel. IKE provides several authentication options, preshared keys (PSK) or X.509 certificates combined with Extended Authentication (XAUTH) user authentication are the most common.
- The **Layer 2 Tunneling Protocol (L2TP)** was has its origins in PPTP. Since it does not provide security features such as encryption or strong authentication it is typically combined with IPsec. To avoid too much additional overhead ESP in transport mode is commonly used. This means first the IPsec channel is established, again using IKE, then this channel is used to establish the L2TP tunnel. Afterwards, the IPsec connection is also used to transport the L2TP encapsulated user data.

Compared to plain IPsec the additional encapsulation with L2TP (which adds an IP/UDP packet and L2TP header) makes it a little less efficient (more so if it is also used with ESP in tunnel mode, which some implementations do).

**NAT traversal (NAT-T)** is also more problematic with L2TP/IPsec due to the common use of ESP in transport mode.

One advantage L2TP has over plain IPsec is that it can transport protocols other than IP.

Security-wise both are similar but it depends on the authentication method, the mode of authentication (Main or Aggressive Mode), the strength of the keys, the used algorithms etc.



## Ref
[IPsec versus L2TP/IPsec | StackExchange]: https://superuser.com/a/378591
