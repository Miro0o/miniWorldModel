# ﻿# ﻿MTProto Mobile Protocol

[TOC]



## Res
🏠 https://core.telegram.org/mtproto


### Related Topics
↗ [Telegram](../../../../../Software%20Engineering/🏇%20Galleries%20&%20Awesome%20SE/🤡%20ALL%20IN%20ONE/Telegram/Telegram.md)



## Intro
> The protocol is designed for access to a server API from applications running on mobile devices. **It must be emphasized that a web browser is not such an application.**
> 
> This page deals with the basic layer of MTProto encryption used for Cloud chats (server-client encryption). See also:
> 🔗 [Secret Chats, end-to-end-encryption](https://core.telegram.org/api/end-to-end)
> 🔗 [End-to-end encrypted Voice Calls](https://core.telegram.org/api/end-to-end/voice-calls)

As an overview, using the [ISO/OSI stack as comparison](https://en.wikipedia.org/wiki/OSI_model#Layer_architecture): 
- Layer 7 (Application): [High-level RPC API](https://core.telegram.org/mtproto#high-level-component-rpc-query-languageapi)
- Layer 6 (Presentation): [Type Language](https://core.telegram.org/mtproto/TL)
- Layer 5 (Session): [MTProto session](https://core.telegram.org/mtproto/description#session)
- Layer 4 (Transport):
    - 4.3: [MTProto transport protocol](https://core.telegram.org/mtproto#mtproto-transport)
    - 4.2: [MTProto obfuscation (optional)](https://core.telegram.org/mtproto/mtproto-transports#transport-obfuscation)
    - 4.1: [Transport protocol](https://core.telegram.org/mtproto#transport)
- Layer 3 (Network): IP
- Layer 2 (Data link): MAC/LLC
- Layer 1 (Physical): IEEE 802.3, IEEE 802.11, etc...

![](../../../../../../Assets/Pics/Screenshot%202023-09-08%20at%204.08.39%20PM.png)



## Ref
[Mobile Protocol: Detailed Description]: https://core.telegram.org/mtproto/description

[Creating an Authorization Key]: https://core.telegram.org/mtproto/auth_key

[Creating an Authorization Key: Example]: https://core.telegram.org/mtproto/samples-auth_key

[Mobile Protocol: Service Messages]: https://core.telegram.org/mtproto/service_messages

[Mobile Protocol: Service Messages about Messages]: https://core.telegram.org/mtproto/service_messages_about_messages

[Binary Data Serialization]: https://core.telegram.org/mtproto/serialize

[TL Language]: https://core.telegram.org/mtproto/TL

[MTProto TL-schema]: https://core.telegram.org/schema/mtproto

[End-to-end encryption, Secret Chats]: https://core.telegram.org/api/end-to-end

[End-to-end TL-schema]: https://core.telegram.org/schema/end-to-end

[Security Guidelines for Client Software Developers]: https://core.telegram.org/mtproto/security_guidelines
