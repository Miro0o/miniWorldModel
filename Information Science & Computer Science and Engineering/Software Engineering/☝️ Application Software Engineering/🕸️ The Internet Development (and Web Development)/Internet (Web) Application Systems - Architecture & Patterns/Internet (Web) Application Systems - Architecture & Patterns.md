# Internet (Web) Application Systems - Architecture & Patterns

[TOC]



## Res
### Related Topics
↗ [Network Application Communication Architectures](../../../../🔑%20CS%20Core/🦹🏼‍♂️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20%28Protocol%20Part%29/0x01%20Application%20Layer/Network%20Application%20Communication%20Architectures.md)
↗ [Awesome Architect](../../../Galleries%20&%20Awesome%20SE/Awesome%20Architect.md)

↗ [Dev(Sec)Ops (Application Level Engineering)](../../../☁️%20Cloud%20Computing%20&%20Cloud%20Native/Dev%28Sec%29Ops%20%28Application%20Level%20Engineering%29/Dev%28Sec%29Ops%20%28Application%20Level%20Engineering%29.md)
↗ [CI & CD Workflow](../../../☁️%20Cloud%20Computing%20&%20Cloud%20Native/Dev%28Sec%29Ops%20%28Application%20Level%20Engineering%29/🔃%20CI%20&%20CD%20Workflow/CI%20&%20CD%20Workflow.md)

↗ [Information Systems & System Architecture Design](../../../../Information%20Systems%20&%20System%20Architecture%20Design/Information%20Systems%20&%20System%20Architecture%20Design.md)
- ↗ [System Modeling & Integration](../../../../Information%20Systems%20&%20System%20Architecture%20Design/👨🏻‍🔧%20System%20Modeling%20&%20Integration/System%20Modeling%20&%20Integration.md)
- ↗ [Requirement Engineering (Business Integration)](../../../../Information%20Systems%20&%20System%20Architecture%20Design/👨🏻‍🔧%20System%20Modeling%20&%20Integration/Enterprise%20Architecture%20Modeling%20%28Software%20Integration%29/Requirement%20Engineering%20%28Business%20Integration%29/Requirement%20Engineering%20%28Business%20Integration%29.md)

↗ [Cloud System Software Architectures](../../../☁️%20Cloud%20Computing%20&%20Cloud%20Native/🌵%20Cloud%20Native%20Overview/Cloud%20System%20Software%20Architectures/Cloud%20System%20Software%20Architectures.md)

↗ [Software Development Norms & Patterns](../../../Software%20Development%20Norms%20&%20Patterns/Software%20Development%20Norms%20&%20Patterns.md)
- ↗ [SDLC (Software Development Life Circle) & SDLC Models](../../../Software%20Development%20Norms%20&%20Patterns/🔄%20SDLC%20%28Software%20Development%20Life%20Circle%29%20&%20SDLC%20Models/SDLC%20%28Software%20Development%20Life%20Circle%29%20&%20SDLC%20Models.md)

↗ [Galleries & Awesome SE](../../../Galleries%20&%20Awesome%20SE/Galleries%20&%20Awesome%20SE.md)
↗ [Web Application Galleries](../../../Galleries%20&%20Awesome%20SE/Web%20Application%20Galleries/Web%20Application%20Galleries.md)


### Other Resources
🔥 https://github.com/donnemartin/system-design-primer
The System Design Primer

🔥 https://redesigningdesign.systems
Level up your Design System

https://gitlib.com/architecture/
架构设计 | 基础架构、微服务、容器化、云原生总结



## Intro
### Web Application Systems: Architecture
> [!links]
> ↗ [Database Applications (DBAP) & Services](../../../../🔑%20CS%20Core/🤱🏻%20Computer%20Storage%20&%20Database%20Systems/Database%20Systems/Database%20System%20Implementation%20&%20Deployment%20&%20Maintenance/Database%20Applications%20%28DBAP%29%20&%20Services/Database%20Applications%20%28DBAP%29%20&%20Services.md)
> ↗ [Enterprise Architecture Modeling (Software Integration)](../../../../Information%20Systems%20&%20System%20Architecture%20Design/👨🏻‍🔧%20System%20Modeling%20&%20Integration/Enterprise%20Architecture%20Modeling%20%28Software%20Integration%29/Enterprise%20Architecture%20Modeling%20%28Software%20Integration%29.md)
> 
> ↗ [Cloud System Software Architectures](../../../☁️%20Cloud%20Computing%20&%20Cloud%20Native/🌵%20Cloud%20Native%20Overview/Cloud%20System%20Software%20Architectures/Cloud%20System%20Software%20Architectures.md)

> 🤖 https://claude.ai/share/771a33a8-e95c-408a-bfc3-9893ef731b6a (private)
> 🤖 https://chatgpt.com/share/69d01ba6-13ac-8395-9bf4-888b62d5dadd

1. Application structural architecture patterns
These answer: **how one application is internally divided into major responsibility structures**.

|Time order|Term|What it is|Typical structural unit|Main idea|Notes|
|---|---|---|---|---|---|
|Earlier|**One-tier architecture**|All concerns kept in one program/unit|One application|UI, logic, and data handling live together|Common in small standalone software and early systems|
|Later|**Two-tier architecture**|Client directly connected to backend/database|Client + database/server|Separate user-facing part from shared data/services|Often led to fat clients and tight database coupling|
|Later|**Three-tier architecture**|Presentation, business logic, and data access separated|Three major layers/tiers|Introduce an explicit middle layer for business logic|Classic enterprise application structure|
|Later|**Layered / N-layer architecture**|Generalized multi-layer application structure|Multiple layers|Refine three-tier into more explicit layers such as presentation, application, domain, infrastructure, persistence|Very common in enterprise backend systems|
|Later|**Service Layer**|Dedicated layer for use-case/application operations|Application service|Keep business use-case logic out of controllers and persistence code|Often used inside layered architectures|
|Later|**DDD-oriented layered architecture**|Layered architecture with explicit domain modeling|Domain model, aggregates, services, repositories|Make the business/domain model central inside the application structure|Especially useful for complex business systems|
|Later|**Hexagonal architecture**|Core application/domain surrounded by adapters|Core + ports/adapters|Put the application core at the center and connect UI, DB, and external systems through ports/adapters|Shifts focus away from database-centered thinking|
|Later|**Onion architecture**|Concentric dependency layers around the domain core|Domain core + surrounding rings|Ensure dependencies point inward toward the domain|Closely related to hexagonal architecture|
|Later|**Clean Architecture**|Dependency-rule-driven architecture centered on core business rules|Inner core + outer interface/infrastructure layers|Keep frameworks, UI, and databases outside the core|Very similar family to hexagonal and onion|
|Later / parallel|**CQRS-oriented architecture**|Separate read and write responsibilities|Command side + query side|Split models and flows when read/write concerns differ significantly|Often used only where complexity justifies it|
|Later / parallel|**Event-sourced architecture**|Persist state changes as events|Event stream + projections|Represent system history explicitly through events|Powerful but significantly more complex than classic layered apps|

---

![web_application_arch.excalidraw | 800](../../../../../Assets/Illustrations/Web/web_and_Internet_arch.excalidraw.md)
<small>Web Architecture: frontend and backend</small>

![](../../../../../Assets/Pics/Screenshot%202024-10-22%20at%2010.52.55.png)

![|600](../../../../../Assets/Pics/Pasted%20image%2020240630155001.png)


### Web Application Systems: Pattens & Model
> [!links]
> ↗ [Web Application Design Patterns](Web%20Application%20Design%20Patterns.md)
#### Web Application Execution & Deployment
> [!Links]
> ↗ [Web Application Execution & Deployment Patterns](Web%20Application%20Execution%20&%20Deployment%20Patterns/Web%20Application%20Execution%20&%20Deployment%20Patterns.md)

> 🤖 https://claude.ai/share/771a33a8-e95c-408a-bfc3-9893ef731b6a (private)
> 🤖 https://chatgpt.com/share/69d01ba6-13ac-8395-9bf4-888b62d5dadd

1. Execution and hosting models
These answer: **where and how code runs**.

| Time order | Term                                | What it is                                      | Typical execution place           | Main idea                                                   | Notes                                                       |
| ---------- | ----------------------------------- | ----------------------------------------------- | --------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| Earlier    | **Applet**                          | Small embedded program running inside a host    | Browser or other host application | Ship a mini-program into an existing environment            | Historically important; especially old Java applets         |
| Later      | **Web app / SPA** (Single-Page App) | Browser-native application                      | Browser                           | The browser itself becomes the app platform                 | Replaces many old plugin/applet use cases                   |
| Later      | **PWA** (Progressive Web App)       | Installable web application                     | Browser with OS integration       | Make web apps behave more like native apps                  | More about packaging/distribution than backend architecture |
| Later      | **Serverless / Function**           | Small managed backend execution unit            | Cloud runtime                     | Run code without managing servers directly                  | Smaller deployment unit than a service                      |
| Later      | **Edge function**                   | Distributed serverless execution near users     | Edge network / CDN runtime        | Move code closer to users for latency and locality          | A geographically distributed runtime model                  |
| Later      | **Wasm**                            | Portable binary execution format/runtime target | Browser, edge, server runtime     | Compile once, run in different hosts safely and efficiently | Not an app architecture; an execution technology            |

2. System architecture and deployment styles
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

4. Packaging and operations infrastructure
These answer: **how deployable units are packaged and operated**.

|Time order|Term|What it is|Typical unit|Main idea|Notes|
|---|---|---|---|---|---|
|Earlier in cloud-native era|**Container**|Standard packaging/runtime unit|Container image|Package app and dependencies consistently|A packaging primitive, not an app architecture|
|Later|**Kubernetes**|Container orchestration platform|Cluster-managed workload|Run and coordinate many containers/services at scale|Operations substrate for cloud-native systems|
|Later|**Platform engineering**|Internal platform discipline|Internal developer platform|Reduce cognitive and operational burden for teams|Organizational response to microservice/cloud complexity|
#### Web Application Interacton & Presentation
> 🤖 https://claude.ai/share/771a33a8-e95c-408a-bfc3-9893ef731b6a (private)
> 🤖 https://chatgpt.com/share/69d01ba6-13ac-8395-9bf4-888b62d5dadd

5. Presentation and UI architecture patterns
These answer: **how the application-facing layer is organized**.

|Time order|Term|What it is|Typical structural unit|Main idea|Notes|
|---|---|---|---|---|---|
|Earlier|**MVC**|Model–View–Controller pattern|Controller, model, view|Separate input/control flow, data/model, and rendering|Often used in server-side web frameworks and classic UI apps|
|Later|**MVP**|Model–View–Presenter pattern|Presenter, model, view|Make the view more passive and move interaction logic into the presenter|Common in older GUI and testable UI architectures|
|Later|**Presentation Model**|UI-specific state abstraction|Presentation state model|Separate presentation state from domain state|Conceptually close to MVVM|
|Later|**MVVM**|Model–View–ViewModel pattern|ViewModel, model, view|Expose UI-facing state and behavior for binding/reactive updates|Especially common in modern UI/client frameworks|
|Later|**HMVC**|Hierarchical MVC|Nested MVC modules|Structure large applications as reusable MVC subunits|Useful when plain MVC becomes too coarse|
|Later / parallel|**Component-based UI architecture**|UI built from reusable components|Component|Organize the app around composable UI units with local state and explicit interfaces|Dominant in modern frontend practice|
|Later / parallel|**Flux / unidirectional data-flow architecture**|State-driven UI architecture|Store, actions, reducers/state transitions|Make UI updates predictable through one-way data flow|Common in larger frontend state management systems|
#### Domain Patterns & Wiring
> 🤖 https://claude.ai/share/771a33a8-e95c-408a-bfc3-9893ef731b6a (private)
> 🤖 https://chatgpt.com/share/69d01ba6-13ac-8395-9bf4-888b62d5dadd

5. Domain and business modeling
These answer: **how the problem domain is conceptualized and bounded**.

|Time order|Term|What it is|Main idea|Best fit|Notes|
|---|---|---|---|---|---|
|Later, but conceptually orthogonal to many eras|**DDD**|Domain-Driven Design|Model software around the real business/domain structure|Complex business systems|Often used to define bounded contexts and service boundaries|

6. Dependency and modularity techniques
These answer: **how code is wired together internally**.

| Time order                 | Term    | What it is                  | Main idea                                                        | Best fit                                 | Notes                                                        |
| -------------------------- | ------- | --------------------------- | ---------------------------------------------------------------- | ---------------------------------------- | ------------------------------------------------------------ |
| Earlier as a principle     | **IoC** | Inversion of Control        | Control of object creation/wiring is moved outward               | Medium and large applications/frameworks | A principle                                                  |
| Later as concrete practice | **DI**  | Dependency Injection        | Dependencies are supplied rather than created internally         | Testable, modular applications           | Common implementation of IoC                                 |
| Later                      | **AOP** | Aspect-Oriented Programming | Separate cross-cutting concerns like logging, auth, transactions | Framework-heavy systems                  | More about cross-cutting behavior than core domain structure |

 Domain-centric architecture patterns
- DDD
- Hexagonal Architecture
- Onion Architecture
- Clean Architecture
- CQRS
- Event Sourcing

Dependency / modularity patterns
- IoC
- DI
- AOP
- Factory
- Strategy
- Observer
- Decorator
- Proxy
- Adapter



## Ref
[🎬 FAANG System Design Interview: Design A Location Based Service (Yelp, Google Places)]: https://youtu.be/M4lR_Va97cQ?si=bPMFe72FL9T5QhdQ
