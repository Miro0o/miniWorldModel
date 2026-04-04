# Web Application Interaction & Presentation Models

[TOC]



## Res
### Related Topics


### Other Resources



## Intro
> 🤖 https://claude.ai/share/771a33a8-e95c-408a-bfc3-9893ef731b6a (private)
> 🤖 https://chatgpt.com/share/69d01ba6-13ac-8395-9bf4-888b62d5dadd

These answer: **how the application-facing layer is organized**.

| Time order       | Term                                             | What it is                        | Typical structural unit                    | Main idea                                                                            | Notes                                                        |
| ---------------- | ------------------------------------------------ | --------------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| Earlier          | **MVC**                                          | Model–View–Controller pattern     | Controller, model, view                    | Separate input/control flow, data/model, and rendering                               | Often used in server-side web frameworks and classic UI apps |
| Later            | **MVP**                                          | Model–View–Presenter pattern      | Presenter, model, view                     | Make the view more passive and move interaction logic into the presenter             | Common in older GUI and testable UI architectures            |
| Later            | **Presentation Model**                           | UI-specific state abstraction     | Presentation state model                   | Separate presentation state from domain state                                        | Conceptually close to MVVM                                   |
| Later            | **MVVM**                                         | Model–View–ViewModel pattern      | ViewModel, model, view                     | Expose UI-facing state and behavior for binding/reactive updates                     | Especially common in modern UI/client frameworks             |
| Later            | **HMVC**                                         | Hierarchical MVC                  | Nested MVC modules                         | Structure large applications as reusable MVC subunits                                | Useful when plain MVC becomes too coarse                     |
| Later / parallel | **Component-based UI architecture**              | UI built from reusable components | Component                                  | Organize the app around composable UI units with local state and explicit interfaces | Dominant in modern frontend practice                         |
| Later / parallel | **Flux / unidirectional data-flow architecture** | State-driven UI architecture      | Store, actions, reducers/state transitions | Make UI updates predictable through one-way data flow                                | Common in larger frontend state management systems           |



## Ref
