# Sootup

[TOC]



## Res
🏠 
🚧 https://github.com/soot-oss/SootUp
This is the home of the **SootUp** project. A complete overhaul of the good, old static analysis framework [Soot](https://github.com/soot-oss/soot).

[The SootUp paper](https://doi.org/10.1007/978-3-031-57246-3_13) explains further details and the design decision behind SootUp.  
[Preprint](https://github.com/soot-oss/SootUp/blob/develop/docs/assets/SootUp-paper.pdf) is also available.


### Related Topics



## Intro
> 🔗 https://github.com/soot-oss/SootUp

### What is SootUp
- Transforms JVM bytecode (and other inputs!) to the intermediate representation Jimple.
- Provides ClassHierarchy generation
- CallGraph generation with different algorithms/precisions
- Inter-procedural Data-flow Analysis with the IDE/IFDS framework enabled by [Heros](https://github.com/Sable/heros)
- Applies simple transformations on retrieving a methods Body (see `BodyInterceptor`)
- Provides parsing and serialization of the Jimple IR.



## Ref
[javaweb security | p4d0rn]: https://p4d0rn.gitbook.io/java/code-inspector/sootup/intro

