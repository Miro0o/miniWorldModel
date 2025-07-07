# WPA (Wi-Fi Protected Access)

[TOC]



## Intro
> 🔗 https://en.wikipedia.org/wiki/Wi-Fi_Protected_Access

**Wi-Fi Protected Access** (**WPA**), **Wi-Fi Protected Access II** (**WPA2**), and **Wi-Fi Protected Access 3** (**WPA3**) are the three security and security certification programs developed after 2000 by the [Wi-Fi Alliance](https://en.wikipedia.org/wiki/Wi-Fi_Alliance) to secure wireless computer networks. The Alliance defined these in response to serious weaknesses researchers had found in the previous system, [Wired Equivalent Privacy](https://en.wikipedia.org/wiki/Wired_Equivalent_Privacy) (WEP).

1. WPA, 2003, Wi-Fi Alliance.
2. WPA2, 2004, Wi-Fi Alliance.
   1. common shorthand for the full IEEE 802.11i (or [IEEE 802.11i-2004](https://en.wikipedia.org/wiki/IEEE_802.11i-2004)) standard
3. WPA3, 2018, Wi-Fi Alliance. 


### WEP
↗ [WEP](../IEEE%20802.11%20(1999)/WEP.md)


### WPA
The Wi-Fi Alliance intended WPA as an intermediate measure to take the place of [WEP](https://en.wikipedia.org/wiki/Wired_Equivalent_Privacy) pending the availability of the full [IEEE 802.11i](https://en.wikipedia.org/wiki/IEEE_802.11i-2004) standard. 

WPA could be implemented through [firmware upgrades](https://en.wikipedia.org/wiki/Firmware_upgrade) on [wireless network interface cards](https://en.wikipedia.org/wiki/Wireless_network_interface_card) designed for WEP that began shipping as far back as 1999. However, since the changes required in the [wireless access points](https://en.wikipedia.org/wiki/Wireless_access_point) (APs) were more extensive than those needed on the network cards, most pre-2003 APs could not be upgraded to support WPA.
- WPA includes a [Message Integrity Check](https://en.wikipedia.org/wiki/Message_Integrity_Check), which is designed to prevent an attacker from altering and resending data packets. 
- This replaces the [cyclic redundancy check](https://en.wikipedia.org/wiki/Cyclic_redundancy_check) (CRC) that was used by the WEP standard, which do not provide sufficiently strong data integrity guarantee.
- [message authentication codes](https://en.wikipedia.org/wiki/Message_authentication_code) does better in that than CRC, but it is computationally consuming for old NICs that time.
- Thus WPA uses a message integrity check algorithm called TKIP to verify the integrity of the packets. TKIP is much stronger than a CRC, but not as strong as the algorithm used in WPA2.

  > **[Temporal Key Integrity Protocol](https://en.wikipedia.org/wiki/Temporal_Key_Integrity_Protocol) (TKIP).**
  >
  > The RC4 stream cipher is used with a 128-bit per-packet key, meaning that it dynamically generates a new key for each packet.



### WPA2
> 🔗 Main article: [IEEE 802.11i-2004](https://en.wikipedia.org/wiki/IEEE_802.11i-2004)

Ratified in 2004, WPA2 replaced WPA. WPA2, which requires testing and certification by the Wi-Fi Alliance, implements the mandatory elements of IEEE 802.11i. In particular, it includes mandatory support for [CCMP](https://en.wikipedia.org/wiki/CCMP_(cryptography)), an [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard)-based encryption mode. 

> **[CCMP](https://en.wikipedia.org/wiki/CCMP_(cryptography)) ([CTR mode](https://en.wikipedia.org/wiki/Block_cipher_modes_of_operation#Counter_(CTR)) with [CBC-MAC](https://en.wikipedia.org/wiki/CBC-MAC) Protocol)**
>
> The protocol used by WPA2, based on the [Advanced Encryption Standard](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) (AES) cipher along with strong [message authenticity and integrity checking](https://en.wikipedia.org/wiki/Message_authentication_code) is significantly stronger in protection for both privacy and integrity than the [RC4](https://en.wikipedia.org/wiki/RC4)-based TKIP that is used by WPA. Among informal names are *AES* and *AES-CCMP*. According to the 802.11n specification, this encryption protocol must be used to achieve fast [802.11n high bitrate schemes](https://en.wikipedia.org/wiki/IEEE_802.11n-2009#Data_rates), though not all implementations[*[vague](https://en.wikipedia.org/wiki/Wikipedia:Vagueness)*] enforce this. Otherwise, the data rate will not exceed 54 Mbit/s.


### WPA3
In January 2018, the Wi-Fi Alliance announced WPA3 as a replacement to WPA2. Certification began in June 2018 and WPA3 support has been mandatory for devices which bear the "Wi-Fi CERTIFIED™" logo since July 2020.

- Use an equivalent 192-bit cryptographic strength in WPA3-Enterprise mode ([AES-256](https://en.wikipedia.org/wiki/AES-256) in [GCM mode](https://en.wikipedia.org/wiki/Galois/Counter_Mode) with [SHA-384](https://en.wikipedia.org/wiki/SHA-384) as [HMAC](https://en.wikipedia.org/wiki/HMAC))
- Still mandates the use of [CCMP-128](https://en.wikipedia.org/wiki/CCMP_(cryptography)) ([AES-128](https://en.wikipedia.org/wiki/AES-128) in [CCM mode](https://en.wikipedia.org/wiki/CCM_mode)) as the minimum encryption algorithm in WPA3-Personal mode.
- Replaces the **[pre-shared key](https://en.wikipedia.org/wiki/Pre-shared_key) (PSK)** exchange with **[Simultaneous Authentication of Equals](https://en.wikipedia.org/wiki/Simultaneous_Authentication_of_Equals) (SAE)** exchange, a method originally introduced with [IEEE 802.11s](https://en.wikipedia.org/wiki/IEEE_802.11s), resulting in a more secure initial key exchange in personal mode and [forward secrecy](https://en.wikipedia.org/wiki/Forward_secrecy). 



## Target Users (Authentication Key Distribution)
### WPA-Personal (WPA-PSK)
Also referred to as **WPA-PSK ([pre-shared key](https://en.wikipedia.org/wiki/Pre-shared_key))** mode, this is designed for home and small office networks and does not require an authentication server.

Each wireless network device encrypts the network traffic by deriving its 128-bit encryption key from a 256-bit shared [key](https://en.wikipedia.org/wiki/Key_(cryptography)). This key may be entered either as a string of 64 [hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal) digits, or as a [passphrase](https://en.wikipedia.org/wiki/Passphrase) of 8 to 63 [printable ASCII characters](https://en.wikipedia.org/wiki/ASCII_printable_characters). This pass-phrase-to-PSK mapping is nevertheless not binding, as Annex J is informative in the latest 802.11 standard. If ASCII characters are used, the 256-bit key is calculated by applying the [PBKDF2](https://en.wikipedia.org/wiki/PBKDF2) [key derivation function](https://en.wikipedia.org/wiki/Key_derivation_function) to the passphrase, using the [SSID](https://en.wikipedia.org/wiki/SSID#Service_set_identification_(SSID)) as the [salt](https://en.wikipedia.org/wiki/Salt_(cryptography)) and 4096 iterations of [HMAC](https://en.wikipedia.org/wiki/HMAC)-[SHA1](https://en.wikipedia.org/wiki/SHA1). WPA-Personal mode is available on all three WPA versions.


### WPA-Enterprise (WPA-802.1x)
Also referred to as **WPA-[802.1X](https://en.wikipedia.org/wiki/802.1X)** mode, and sometimes just *WPA* (as opposed to WPA-PSK), this is designed for enterprise networks and requires a [RADIUS](https://en.wikipedia.org/wiki/RADIUS) authentication server. 

This requires a more complicated setup, but provides additional security (e.g. protection against dictionary attacks on short passwords). Various kinds of the [Extensible Authentication Protocol](https://en.wikipedia.org/wiki/Extensible_Authentication_Protocol) (EAP) are used for authentication. <u>WPA-Enterprise mode is available on all three WPA versions.</u>


### Wi-Fi Protected Setup (WPS)
🔗 https://en.wikipedia.org/wiki/Wi-Fi_Protected_Setup

This is an alternative authentication key distribution method intended to simplify and strengthen the process, but which, as widely implemented, creates a major security hole via [WPS PIN recovery](https://en.wikipedia.org/wiki/Wi-Fi_Protected_Access#WPS_PIN_recovery).



## Ref
[Recommended settings for Wi-Fi routers and access points]: https://support.apple.com/en-us/HT202068

