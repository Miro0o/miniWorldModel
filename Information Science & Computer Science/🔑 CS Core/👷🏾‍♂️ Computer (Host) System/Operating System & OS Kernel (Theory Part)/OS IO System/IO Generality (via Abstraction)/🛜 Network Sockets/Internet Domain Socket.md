# Internet Domain Socket

[TOC]



## Res
### Related Topics
↗ [Network Programming & RPC](../../../../../🏎️%20Computer%20Networking%20and%20Communication/Network%20Programming%20&%20RPC/Network%20Programming%20&%20RPC.md)
- ↗ [Internet Domain Socket Programming](../../../../../🏎️%20Computer%20Networking%20and%20Communication/Network%20Programming%20&%20RPC/Internet%20Domain%20Socket%20Programming/Internet%20Domain%20Socket%20Programming.md)

↗ [Berkeley Sockets & POSIX Sockets & BSD Sockets](../../../OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource)/IPC%20(Inter%20Process%20Communication)/🧦%20Sockets/Berkeley%20Sockets%20&%20POSIX%20Sockets%20&%20BSD%20Sockets.md)
- ↗ [UNIX Domain Sockets (UDS)](../../../OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource)/IPC%20(Inter%20Process%20Communication)/🧦%20Sockets/🌉%20Internal%20Sockets/UNIX%20Domain%20Sockets%20(UDS).md)



## Intro
### Internet Domain Socket States
**`CLOSED`**: The socket is not in use.

**`LISTEN`**: The socket is listening for incoming connections.  Unconnected listening sockets like these are only displayed when using the -a option.

**`SYN_SENT`**: The socket is actively trying to establish a connection to a remote peer.

**`SYN_RCVD`**: The socket has passively received a connection request from a remote peer.

**`ESTABLISHED`**: The socket has an established connection between a local application and a remote peer.

**`CLOSE_WAIT`**: The socket connection has been closed by the remote peer, and the system is waiting for the local application to close its half of the connection.

**`LAST_ACK`**: The socket connection has been closed by the remote peer, the local application has closed its half of the connection, and the system is waiting for the remote peer to acknowledge the close.

**`FIN_WAIT_1`**: The socket connection has been closed by the local application, the remote peer has not yet acknowledged the close, and the system is waiting for it to close its half of the connection.

**`FIN_WAIT_2`**: The socket connection has been closed by the local application, the remote peer has acknowledged the close, and the system is waiting for it to close its half of the connection.

**`CLOSING`**: The socket connection has been closed by the local application and the remote peer simultaneously, and the remote peer has not yet acknowledged the close attempt of the local application.

**`TIME_WAIT`**: The socket connection has been closed by the local application, the remote peer has closed its half of the connection, and the system is waiting to be sure that the remote peer received the last acknowledgement.



## Ref
