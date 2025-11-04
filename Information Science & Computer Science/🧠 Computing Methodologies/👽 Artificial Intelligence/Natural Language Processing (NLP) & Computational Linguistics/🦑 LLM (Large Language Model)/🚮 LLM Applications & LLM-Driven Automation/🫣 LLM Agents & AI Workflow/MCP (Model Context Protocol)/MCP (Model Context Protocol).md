# MCP (Model Context Protocol)

[TOC]



## Res
📂 https://modelcontextprotocol.io/docs/getting-started/intro


### Related Topics


### Other Resources
https://github.com/modelcontextprotocol/servers/tree/main
This repository is a collection of _reference implementations_ for the [Model Context Protocol](https://modelcontextprotocol.io/) (MCP), as well as references to community-built servers and additional resources.
The servers in this repository showcase the versatility and extensibility of MCP, demonstrating how it can be used to give Large Language Models (LLMs) secure, controlled access to tools and data sources. Typically, each MCP server is implemented with an MCP SDK:
- [C# MCP SDK](https://github.com/modelcontextprotocol/csharp-sdk)
- [Go MCP SDK](https://github.com/modelcontextprotocol/go-sdk)
- [Java MCP SDK](https://github.com/modelcontextprotocol/java-sdk)
- [Kotlin MCP SDK](https://github.com/modelcontextprotocol/kotlin-sdk)
- [PHP MCP SDK](https://github.com/modelcontextprotocol/php-sdk)
- [Python MCP SDK](https://github.com/modelcontextprotocol/python-sdk)
- [Ruby MCP SDK](https://github.com/modelcontextprotocol/ruby-sdk)
- [Rust MCP SDK](https://github.com/modelcontextprotocol/rust-sdk)
- [Swift MCP SDK](https://github.com/modelcontextprotocol/swift-sdk)
- [TypeScript MCP SDK](https://github.com/modelcontextprotocol/typescript-sdk)



## Intro
> 🔗 https://docs.github.com/en/copilot/concepts/agents/coding-agent/mcp-and-coding-agent

The Model Context Protocol (MCP) is an open standard that defines how applications share context with large language models (LLMs). MCP provides a standardized way to connect AI models to different data sources and tools, enabling them to work together more effectively.

The agent can use tools provided by local and remote MCP servers. Some MCP servers are configured by default to provide the best experience for getting started.

For more information on MCP, see [the official MCP documentation](https://modelcontextprotocol.io/introduction). For information on some of the currently available MCP servers, see [the MCP servers repository](https://github.com/modelcontextprotocol/servers/tree/main).

> 🔗 https://modelcontextprotocol.io/docs/getting-started/intro

Using MCP, AI applications like Claude or ChatGPT can connect to data sources (e.g. local files, databases), tools (e.g. search engines, calculators) and workflows (e.g. specialized prompts)—enabling them to access key information and perform tasks.Think of MCP like a USB-C port for AI applications. Just as USB-C provides a standardized way to connect electronic devices, MCP provides a standardized way to connect AI applications to external systems.

![](../../../../../../../../Assets/Pics/Pasted%20image%2020251101150728.png)

The Model Context Protocol includes the following projects:
- [MCP Specification](https://modelcontextprotocol.io/specification/latest): A specification of MCP that outlines the implementation requirements for clients and servers.
- [MCP SDKs](https://modelcontextprotocol.io/docs/sdk): SDKs for different programming languages that implement MCP.
- **MCP Development Tools**: Tools for developing MCP servers and clients, including the [MCP Inspector](https://github.com/modelcontextprotocol/inspector)
- [MCP Reference Server Implementations](https://github.com/modelcontextprotocol/servers): Reference implementations of MCP servers.



## Architecture of MCP
### Participants
![MCP.excalidraw | 800](../../../../../../../../Assets/Illustrations/LLM/MCP.excalidraw.md)
#### MCP Hosts (LLM Applications)
↗ [Claude Desktop](../../General%20LLM%20Applications/Claude%20Desktop.md)
↗ [Cursor](../../General%20LLM%20Applications/Cursor.md)
↗ [Github Copilot](../../General%20LLM%20Applications/Github%20Copilot.md)
#### MCP Servers
> 🔗 https://modelcontextprotocol.io/docs/learn/server-concepts

Servers provide functionality through three building blocks:

| Feature       | Explanation                                                                                                                                                                             | Examples                                                           | Who controls it |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | --------------- |
| **Tools**     | Functions that your LLM can actively call, and decides when to use them based on user requests. Tools can write to databases, call external APIs, modify files, or trigger other logic. | Search flights  <br>Send messages  <br>Create calendar events      | Model           |
| **Resources** | Passive data sources that provide read-only access to information for context, such as file contents, database schemas, or API documentation.                                           | Retrieve documents  <br>Access knowledge bases  <br>Read calendars | Application     |
| **Prompts**   | Pre-built instruction templates that tell the model to work with specific tools and resources.                                                                                          | Plan a vacation  <br>Summarize my meetings  <br>Draft an email     | User            |
#### MCP Clients
> 🔗 https://modelcontextprotocol.io/docs/learn/client-concepts

In addition to making use of context provided by servers, clients may provide several features to servers. These client features allow server authors to build richer interactions.

|Feature|Explanation|Example|
|---|---|---|
|**Sampling**|Sampling allows servers to request LLM completions through the client, enabling an agentic workflow. This approach puts the client in complete control of user permissions and security measures.|A server for booking travel may send a list of flights to an LLM and request that the LLM pick the best flight for the user.|
|**Roots**|Roots allow clients to specify which directories servers should focus on, communicating intended scope through a coordination mechanism.|A server for booking travel may be given access to a specific directory, from which it can read a user’s calendar.|
|**Elicitation**|Elicitation enables servers to request specific information from users during interactions, providing a structured way for servers to gather information on demand.|A server booking travel may ask for the user’s preferences on airplane seats, room type or their contact number to finalise a booking.|


### Protocol Layers



## MCP Development



## Ref
