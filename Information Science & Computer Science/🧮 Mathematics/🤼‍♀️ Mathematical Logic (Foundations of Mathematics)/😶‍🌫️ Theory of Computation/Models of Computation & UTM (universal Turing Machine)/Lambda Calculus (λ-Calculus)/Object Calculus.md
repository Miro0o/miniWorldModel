# Object Calculus

[TOC]



## Res
### Related Topics


### Other Resources
https://cspages.ucalgary.ca/~robin/FMCS/FMCS2014/An%20introduction%20to%20OOC.pdf
An introduction to Object-Oriented Calculus
Simon Fortier-Garceau
June 5-8, 2014



## Intro



## Ref
[Is there an equivalent of lambda calculus for object oriented languages? 「duplicate」| stackoverflow]: https://cs.stackexchange.com/a/34072/174354

> So what is the equivalent for object oriented languages?

Lambda calculus.

I mean, there is [Cardelli's](http://lucacardelli.name/Papers/PrimObjImpSIPL.A4.pdf) object calculus (and a handful of derivatives), but in general, there's nothing fancy about object oriented languages that requires a new approach to computation.

It's well known (see [TaPL](http://rads.stackoverflow.com/amzn/click/0262162091) for example) how to extend/encode Records and Mutation (and sub-typing/dispatch) onto/in lambda calculus. The underlying structures don't need to change, even though there are often layers above it that add semantic restriction and make things more usable (member access, implied `this`, object layouts, etc).
