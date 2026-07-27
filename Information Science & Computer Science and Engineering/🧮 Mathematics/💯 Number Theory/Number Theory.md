# Number Theory

[TOC]



## Res
### Related Topics
↗ [Cryptology & Secure Communication](../../CyberSecurity/🚬%20Cryptology%20&%20Secure%20Communication/Cryptology%20&%20Secure%20Communication.md)
↗ [Cryptography](../../CyberSecurity/🚬%20Cryptology%20&%20Secure%20Communication/🤐%20Cryptography/Cryptography.md)

↗ [Algebraic Structure & Abstract Algebra & Modern Algebra](../🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra.md)

↗ [Number Sets & Field Construction (Completion) and Extension](../🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/Number%20Sets%20&%20Field%20Construction%20(Completion)%20and%20Extension/Number%20Sets%20&%20Field%20Construction%20(Completion)%20and%20Extension.md)
↗ [Natural Number & Peano Axioms](../🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/🛒%20Set%20Theory%20&%20Axiomatic%20Set%20Theory/Number%20Sets%20&%20Field%20Construction%20(Completion)%20and%20Extension/Natural%20Number%20&%20Peano%20Axioms.md)

↗ [Discrete Mathematics & TCS (Theoretical Computer Science)](../../../Discrete%20Mathematics%20&%20TCS%20(Theoretical%20Computer%20Science).md)
↗ [Combinatorics (Combinatorial Mathematics)](../../../🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Combinatorics%20(Combinatorial%20Mathematics)/Combinatorics%20(Combinatorial%20Mathematics).md)

↗ [Number Theory Problems](../../🔑%20CS%20Core/🧙‍♂️%20Algorithm%20&%20Data%20Structure/Classic%20Algorithms%20by%20Problems%20&%20Contexts/🦜%20Programming%20Implementation%20of%20Math%20Problems/Algebra%20Problems/Number%20Theory%20Problems/Number%20Theory%20Problems.md)


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Number_theory

**Number theory** is a branch of [mathematics](https://en.wikipedia.org/wiki/Mathematics "Mathematics") devoted primarily to the study of the [integers](https://en.wikipedia.org/wiki/Integer "Integer") and [arithmetic functions](https://en.wikipedia.org/wiki/Arithmetic_function "Arithmetic function"). Number theorists study [prime numbers](https://en.wikipedia.org/wiki/Prime_number "Prime number") as well as the properties of [mathematical objects](https://en.wikipedia.org/wiki/Mathematical_object "Mathematical object") constructed from integers (for example, [rational numbers](https://en.wikipedia.org/wiki/Rational_number "Rational number")), or defined as generalizations of the integers (for example, [algebraic integers](https://en.wikipedia.org/wiki/Algebraic_integer "Algebraic integer")).

Integers can be considered either in themselves or as solutions to equations ([Diophantine geometry](https://en.wikipedia.org/wiki/Diophantine_geometry "Diophantine geometry")). Questions in number theory can often be understood through the study of [analytical](https://en.wikipedia.org/wiki/Complex_analysis "Complex analysis") objects, such as the [Riemann zeta function](https://en.wikipedia.org/wiki/Riemann_zeta_function "Riemann zeta function"), that encode properties of the integers, primes or other number-theoretic objects in some fashion ([analytic number theory](https://en.wikipedia.org/wiki/Analytic_number_theory "Analytic number theory")). One may also study [real numbers](https://en.wikipedia.org/wiki/Real_number "Real number") in relation to rational numbers, as for instance how irrational numbers can be approximated by fractions ([Diophantine approximation](https://en.wikipedia.org/wiki/Diophantine_approximation "Diophantine approximation")).

Number theory is one of the oldest branches of mathematics alongside geometry. One quirk of number theory is that it deals with statements that are simple to understand but are very difficult to solve. Examples of this are [Fermat's Last Theorem](https://en.wikipedia.org/wiki/Fermat's_Last_Theorem "Fermat's Last Theorem"), which was proved 358 years after the original formulation, and [Goldbach's conjecture](https://en.wikipedia.org/wiki/Goldbach's_conjecture "Goldbach's conjecture"), which remains unsolved since the 18th century. German mathematician [Carl Friedrich Gauss](https://en.wikipedia.org/wiki/Carl_Friedrich_Gauss "Carl Friedrich Gauss") (1777–1855) once remarked, "Mathematics is the queen of the sciences—and number theory is the queen of mathematics." It was regarded as the epitome of pure mathematics, with no applications outside mathematics, until the 1970s, when prime numbers became the basis for the creation of [public-key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography "Public-key cryptography") algorithms, such as the [RSA cryptosystem](https://en.wikipedia.org/wiki/RSA_cryptosystem "RSA cryptosystem").


### Definition
🔗 https://en.wikipedia.org/wiki/Number_theory#Definition

Number theory is the branch of mathematics that studies [integers](https://en.wikipedia.org/wiki/Integer "Integer") and their [properties](https://en.wikipedia.org/wiki/Property_\(mathematics\) "Property (mathematics)") and relations.[2](https://en.wikipedia.org/wiki/Number_theory#cite_note-:7-2) The integers comprise a [set](https://en.wikipedia.org/wiki/Set_\(mathematics\) "Set (mathematics)") that extends the set of [natural numbers](https://en.wikipedia.org/wiki/Natural_number "Natural number")$\{1,2,3, \dots \}$ to include number 0 and the negation of natural numbers $\{−1,−2,−3,\dots \}$. Number theorists study [prime numbers](https://en.wikipedia.org/wiki/Prime_number "Prime number") as well as the properties of [mathematical objects](https://en.wikipedia.org/wiki/Mathematical_object "Mathematical object") constructed from integers (for example, [rational numbers](https://en.wikipedia.org/wiki/Rational_number "Rational number")), or defined as generalizations of the integers (for example, [algebraic integers](https://en.wikipedia.org/wiki/Algebraic_integer "Algebraic integer")).[3](https://en.wikipedia.org/wiki/Number_theory#cite_note-:5-3)[4](https://en.wikipedia.org/wiki/Number_theory#cite_note-:1-4)

Number theory is closely related to arithmetic and some authors use the terms as synonyms.[5](https://en.wikipedia.org/wiki/Number_theory#cite_note-5) However, the word "arithmetic" is used today to mean the study of numerical operations and extends to the [real numbers](https://en.wikipedia.org/wiki/Real_number "Real number").[6](https://en.wikipedia.org/wiki/Number_theory#cite_note-6) In a more specific sense, number theory is restricted to the study of integers and focuses on their properties and relationships.[7](https://en.wikipedia.org/wiki/Number_theory#cite_note-7) Traditionally, it is known as higher arithmetic.[8](https://en.wikipedia.org/wiki/Number_theory#cite_note-8) By the early twentieth century, the term _number theory_ had been widely adopted.[note 1](https://en.wikipedia.org/wiki/Number_theory#cite_note-9) The term number means whole numbers, which refers to either the natural numbers or the integers.[9](https://en.wikipedia.org/wiki/Number_theory#cite_note-:4-10)[10](https://en.wikipedia.org/wiki/Number_theory#cite_note-:6-11)[11](https://en.wikipedia.org/wiki/Number_theory#cite_note-12)

[Elementary number theory](https://en.wikipedia.org/wiki/Elementary_number_theory "Elementary number theory") studies aspects of integers that can be investigated using elementary methods such as [elementary proofs](https://en.wikipedia.org/wiki/Elementary_proof "Elementary proof").[12](https://en.wikipedia.org/wiki/Number_theory#cite_note-:3-13) [Analytic number theory](https://en.wikipedia.org/wiki/Analytic_number_theory "Analytic number theory"), by contrast, relies on [complex numbers](https://en.wikipedia.org/wiki/Complex_numbers "Complex numbers") and techniques from analysis and [calculus](https://en.wikipedia.org/wiki/Calculus "Calculus").[13](https://en.wikipedia.org/wiki/Number_theory#cite_note-14) [Algebraic number theory](https://en.wikipedia.org/wiki/Algebraic_number_theory "Algebraic number theory") employs [algebraic structures](https://en.wikipedia.org/wiki/Algebraic_structures "Algebraic structures") such as [fields](https://en.wikipedia.org/wiki/Field_\(mathematics\) "Field (mathematics)") and [rings](https://en.wikipedia.org/wiki/Ring_\(mathematics\) "Ring (mathematics)") to analyze the properties of and relations between numbers. [Geometric number theory](https://en.wikipedia.org/wiki/Geometric_number_theory "Geometric number theory") uses concepts from geometry to study numbers.[14](https://en.wikipedia.org/wiki/Number_theory#cite_note-15) Further branches of number theory are [probabilistic number theory](https://en.wikipedia.org/wiki/Probabilistic_number_theory "Probabilistic number theory"),[15](https://en.wikipedia.org/wiki/Number_theory#cite_note-16) [combinatorial number theory](https://en.wikipedia.org/wiki/Combinatorial_number_theory "Combinatorial number theory"),[16](https://en.wikipedia.org/wiki/Number_theory#cite_note-17) [computational number theory](https://en.wikipedia.org/wiki/Computational_number_theory "Computational number theory"),[17](https://en.wikipedia.org/wiki/Number_theory#cite_note-18) and applied number theory, which examines the application of number theory to science and technology.[18](https://en.wikipedia.org/wiki/Number_theory#cite_note-19)


### Applications
🔗 https://en.wikipedia.org/wiki/Number_theory#Applications



## Ref
