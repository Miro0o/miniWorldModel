# in-toto

[TOC]



## Res
🚧 https://github.com/in-toto/in-toto


## Intro
in-toto provides a framework to protect the integrity of the software supply chain. It does so by verifying that each task in the chain is carried out as planned, by authorized personnel only, and that the product is not tampered with in transit.

in-toto requires a **project owner** to create a **layout**. A layout lists the sequence of **steps** of the software supply chain, and the **functionaries** authorized to perform these steps. When a functionary performs a step in-toto gathers information about the used command and the related files and stores it in a **link** metadata file. As a consequence link files provide the required evidence to establish a continuous chain that can be validated against the steps defined in the layout.

The layout, signed by the project owners, together with the links, signed by the designated functionaries, are released as part of the final product, and can be validated manually or via automated tooling in, e.g. a package manager.


## Ref

