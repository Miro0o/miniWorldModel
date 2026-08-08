# Web Application Execution & Deployment Patterns

[TOC]



## Res
### Related Topics
↗ [Mini-Program Dev (小程序开发)](../../Mini-Program%20Dev%20(小程序开发)/Mini-Program%20Dev%20(小程序开发).md)

↗ [Cloud System Software Architectures](../../../../☁️%20Cloud%20Computing%20&%20Cloud%20Native/🌵%20Cloud%20Native%20Overview/Cloud%20System%20Software%20Architectures/Cloud%20System%20Software%20Architectures.md)
↗ [Serverless](../../../../☁️%20Cloud%20Computing%20&%20Cloud%20Native/🌵%20Cloud%20Native%20Overview/Cloud%20System%20Software%20Architectures/Serverless/Serverless.md)

↗ [JAMStack (Javascript、APIs、Markup)](../../🖥️%20Web%20FrontEnd%20Dev/JAMStack%20(Javascript、APIs、Markup)/JAMStack%20(Javascript、APIs、Markup).md)


### Other Resources



## Intro
### Execution and Hosting Models
> 🤖 https://chatgpt.com/share/69d01ba6-13ac-8395-9bf4-888b62d5dadd

These answer: **where and how code runs**.

| Time order | Term                      | What it is                                      | Typical execution place           | Main idea                                                   | Notes                                                       |
| ---------- | ------------------------- | ----------------------------------------------- | --------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| Earlier    | **Applet**                | Small embedded program running inside a host    | Browser or other host application | Ship a mini-program into an existing environment            | Historically important; especially old Java applets         |
| Later      | **Web app / SPA**         | Browser-native application                      | Browser                           | The browser itself becomes the app platform                 | Replaces many old plugin/applet use cases                   |
| Later      | **PWA**                   | Installable web application                     | Browser with OS integration       | Make web apps behave more like native apps                  | More about packaging/distribution than backend architecture |
| Later      | **Serverless / Function** | Small managed backend execution unit            | Cloud runtime                     | Run code without managing servers directly                  | Smaller deployment unit than a service                      |
| Later      | **Edge function**         | Distributed serverless execution near users     | Edge network / CDN runtime        | Move code closer to users for latency and locality          | A geographically distributed runtime model                  |
| Later      | **Wasm**                  | Portable binary execution format/runtime target | Browser, edge, server runtime     | Compile once, run in different hosts safely and efficiently | Not an app architecture; an execution technology            |


### System Architecture and Deployment Styles
> 🤖 https://chatgpt.com/share/69d01ba6-13ac-8395-9bf4-888b62d5dadd

These answer: **how the overall system is split and deployed**.

|Time order|Term|What it is|Typical structural unit|Main idea|Notes|
|---|---|---|---|---|---|
|Earlier|**Monolithic architecture**|A system packaged and deployed as one application|One deployable application|Keep the whole backend/system in one unit|Can still be internally layered, DDD-based, or cleanly structured|
|Later|**Distributed / client-server architecture**|Responsibilities split across networked machines|Client + server|Move computation/data beyond one machine|Broad early distributed-systems step rather than a precise modern style|
|Later|**SOA (Service-Oriented Architecture)**|System decomposed into reusable enterprise services|Large service/subsystem|Integrate large enterprises through service boundaries|Usually coarser-grained and more integration-heavy than microservices|
|Later|**Microservice architecture**|System decomposed into small autonomous services|Small independently deployable service|Split by business capability, team ownership, and deployability|A refinement/specialization of service-based architecture|
|Later / parallel|**Event-driven distributed architecture**|System components communicate via events/messages|Event producer/consumer/service|Decouple services through asynchronous communication|Often used together with microservices, not necessarily instead of them|
|Later / parallel|**Serverless architecture**|System built from managed functions and cloud services|Function / managed service|Push deployment granularity below service level and outsource infrastructure management|Often overlaps with event-driven design|
|Later|**Service-mesh-oriented operations**|Operational networking layer for many services|Mesh-managed service fleet|Externalize traffic control, observability, and policy across services|More an operational style than a business architecture|
|Later|**Platform-oriented architecture / platform engineering**|Internal platform supports many teams/services|Internal platform + service ecosystem|Make complex service-based systems operable through self-service tooling and standards|Best seen as the response to cloud-native/microservice complexity|
|Later / parallel|**Edge-distributed architecture**|Parts of the system execute near users geographically|Edge function/service/node|Improve latency and locality by moving execution outward|Often combined with serverless and CDN infrastructure|



## Ref
[Applet | wikipedia]: https://en.wikipedia.org/w/index.php?title=Applet#Security
In [computing](https://en.wikipedia.org/wiki/Computing "Computing"), an **applet** is any small [application](https://en.wikipedia.org/wiki/Application_\(computing\) "Application (computing)") that performs one specific task that runs within the scope of a dedicated [widget engine](https://en.wikipedia.org/wiki/Widget_engine "Widget engine") or a larger [program](https://en.wikipedia.org/wiki/Program_\(computing\) "Program (computing)"), often as a [plug-in](https://en.wikipedia.org/wiki/Plug-in_\(computing\) "Plug-in (computing)"). The term is frequently used to refer to a [Java applet](https://en.wikipedia.org/wiki/Java_applet "Java applet"), a program written in the [Java](https://en.wikipedia.org/wiki/Java_\(programming_language\) "Java (programming language)") programming language that is designed to be placed on a [web page](https://en.wikipedia.org/wiki/Web_page "Web page"). Applets are typical examples of [transient and auxiliary applications](https://en.wikipedia.org/wiki/Application_posture "Application posture") that do not monopolize the user's attention. Applets are not full-featured application programs, and are intended to be easily accessible.
