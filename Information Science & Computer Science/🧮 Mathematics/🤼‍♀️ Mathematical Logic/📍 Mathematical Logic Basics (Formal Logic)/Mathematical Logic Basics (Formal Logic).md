# Mathematical Logic Basics (Formal Logic)

[TOC]



## Res
### Related Topics
↗ [Logic (and Critical Thinking)](../../../../Other%20Networks%20of%20Knowledge/♂%20Philosophy/Philosophy%20by%20Disciplines%20&%20Topics/🎼%20Logic%20(and%20Critical%20Thinking)/Logic%20(and%20Critical%20Thinking).md)
↗ [Logic Programming Languages](../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20for%20Specific%20Areas/Logic%20Programming%20Languages/Logic%20Programming%20Languages.md)
↗ [Logic And Mechanized (Formal) Reasoning](../Logic%20And%20Mechanized%20(Formal)%20Reasoning.md)

↗ [Lisp-Based Languages](../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Compiled%20Languages/Lisp-Based%20Languages/Lisp-Based%20Languages.md)
↗ [Expert System (ES)](../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/Expert%20System%20(ES)/Expert%20System%20(ES).md)

↗ [Theory of Computation](../😶‍🌫️%20Theory%20of%20Computation/Theory%20of%20Computation.md)
- ↗ [Automata Theory and (Formal) Language Theory](../😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Automata%20Theory%20and%20(Formal)%20Language%20Theory.md)

↗ [Formal Syntax & Metasyntax (and Metalanguage)](📌%20Formal%20Syntax%20&%20Metasyntax%20(and%20Metalanguage)/Formal%20Syntax%20&%20Metasyntax%20(and%20Metalanguage).md)
↗ [Formal Semantics and Programming Language](../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Formal%20Semantics%20and%20Programming%20Language/Formal%20Semantics%20and%20Programming%20Language.md)
↗ [(Formal) Model Checking](../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20Analysis%20&%20Binary%20Engineering/📌%20Software%20Analysis%20Basics/🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/(Formal)%20Model%20Checking/(Formal)%20Model%20Checking.md)
↗ [Mathematical Modeling & Real World Problem Solving](../../Mathematical%20Modeling%20&%20Real%20World%20Problem%20Solving.md)

↗ [Proof Theory](../Proof%20Theory/Proof%20Theory.md)

↗ [The Essence of Computing - Program](../../../🗺%20CS%20Overview/The%20Essence%20of%20Computing%20-%20Program.md)


### Other Resources
https://users.aalto.fi/~rintanj1/notes-logic.pdf
Logic and ApplicationsJussi Rintanen
Department of Computer Science
Aalto University
Helsinki, Finland
March 29, 2025

Nielson, Hanne Riis; Nielson, Flemming (2007). _Semantics with Applications._

《离散数学》
四川大学计算机学院



## Intro
> ↗ [Logic (and Critical Thinking)](../../../../Other%20Networks%20of%20Knowledge/♂%20Philosophy/Philosophy%20by%20Disciplines%20&%20Topics/🎼%20Logic%20(and%20Critical%20Thinking)/Logic%20(and%20Critical%20Thinking).md)

> 🔗 https://en.wikipedia.org/wiki/Logic


==**Logic** is the study of correct [reasoning](https://en.wikipedia.org/wiki/Logical_reasoning "Logical reasoning")==. It includes both [formal](https://en.wikipedia.org/wiki/Logic#Formal_logic) and [informal logic](https://en.wikipedia.org/wiki/Informal_logic "Informal logic"). Formal logic is the study of [deductively valid](https://en.wikipedia.org/wiki/Validity_\(logic\) "Validity (logic)") inferences or [logical truths](https://en.wikipedia.org/wiki/Logical_truth "Logical truth"). It examines how conclusions follow from [premises](https://en.wikipedia.org/wiki/Premise "Premise") based on the structure of arguments alone, independent of their topic and content. Informal logic is associated with [informal fallacies](https://en.wikipedia.org/wiki/Informal_fallacies "Informal fallacies"), [critical thinking](https://en.wikipedia.org/wiki/Critical_thinking "Critical thinking"), and [argumentation theory](https://en.wikipedia.org/wiki/Argumentation_theory "Argumentation theory"). Informal logic examines arguments expressed in [natural language](https://en.wikipedia.org/wiki/Natural_language "Natural language") whereas formal logic uses [formal language](https://en.wikipedia.org/wiki/Formal_language "Formal language"). When used as a [countable noun](https://en.wikipedia.org/wiki/Countable_noun "Countable noun"), the term "a logic" refers to a specific logical [formal system](https://en.wikipedia.org/wiki/Formal_system "Formal system") that articulates a [proof system](https://en.wikipedia.org/wiki/Proof_system "Proof system"). Logic plays a central role in many fields, such as [philosophy](https://en.wikipedia.org/wiki/Philosophy "Philosophy"), [mathematics](https://en.wikipedia.org/wiki/Mathematics "Mathematics"), [computer science](https://en.wikipedia.org/wiki/Computer_science "Computer science"), and [linguistics](https://en.wikipedia.org/wiki/Linguistics "Linguistics").

Logic studies **arguments**, which consist of a set of **premises** that leads to a **conclusion**. An example is the argument from the premises "it's Sunday" and "if it's Sunday then I don't have to work" leading to the conclusion "I don't have to work." Premises and conclusions express [propositions](https://en.wikipedia.org/wiki/Proposition "Proposition") or claims that can be true or false. An important feature of propositions is their internal structure. For example, complex propositions are made up of simpler propositions linked by [logical vocabulary](https://en.wikipedia.org/wiki/Logical_connective "Logical connective") like ∧ ([and](https://en.wikipedia.org/wiki/Logical_conjunction "Logical conjunction")) or → ([if...then](https://en.wikipedia.org/wiki/Material_conditional "Material conditional")). Simple propositions also have parts, like "Sunday" or "work" in the example. The truth of a proposition usually depends on the meanings of all of its parts. However, this is not the case for logically true propositions. They are true only because of their logical structure independent of the specific meanings of the individual parts.

Arguments can be either correct or incorrect. An argument is correct if its premises support its conclusion. [Deductive arguments](https://en.wikipedia.org/wiki/Deductive_reasoning "Deductive reasoning") have the strongest form of support: if their premises are true then their conclusion must also be true. This is not the case for [ampliative](https://en.wikipedia.org/wiki/Ampliative "Ampliative") arguments, which arrive at genuinely new information not found in the premises. Many arguments in everyday discourse and the sciences are ampliative arguments. They are divided into [inductive](https://en.wikipedia.org/wiki/Inductive_reasoning "Inductive reasoning") and [abductive](https://en.wikipedia.org/wiki/Abductive_reasoning "Abductive reasoning") arguments. Inductive arguments are statistical generalizations, such as inferring that all ravens are black based on many individual observations of black ravens. Abductive arguments are [inferences](https://en.wikipedia.org/wiki/Inference "Inference") to the best explanation, for example, when a doctor concludes that a patient has a certain disease which explains the symptoms they suffer. Arguments that fall short of the standards of correct reasoning often embody [fallacies](https://en.wikipedia.org/wiki/Fallacies "Fallacies"). Systems of logic are theoretical frameworks for assessing the correctness of arguments.

Logic has been studied since [antiquity](https://en.wikipedia.org/wiki/Ancient_history "Ancient history"). Early approaches include [Aristotelian logic](https://en.wikipedia.org/wiki/Aristotelian_logic "Aristotelian logic"), [Stoic logic](https://en.wikipedia.org/wiki/Stoic_logic "Stoic logic"), [Nyaya](https://en.wikipedia.org/wiki/Nyaya "Nyaya"), and [Mohism](https://en.wikipedia.org/wiki/Mohism "Mohism"). Aristotelian logic focuses on reasoning in the form of [syllogisms](https://en.wikipedia.org/wiki/Syllogism "Syllogism"). It was considered the main system of logic in the Western world until it was replaced by modern formal logic, which has its roots in the work of late 19th-century mathematicians such as [Gottlob Frege](https://en.wikipedia.org/wiki/Gottlob_Frege "Gottlob Frege"). Today, the most commonly used system is [classical logic](https://en.wikipedia.org/wiki/Classical_logic "Classical logic"). It consists of [propositional logic](https://en.wikipedia.org/wiki/Propositional_logic "Propositional logic") and [first-order logic](https://en.wikipedia.org/wiki/First-order_logic "First-order logic"). Propositional logic only considers logical relations between full propositions. First-order logic also takes the internal parts of propositions into account, like [predicates](https://en.wikipedia.org/wiki/Predicate_\(mathematical_logic\) "Predicate (mathematical logic)") and [quantifiers](https://en.wikipedia.org/wiki/Quantifier_\(logic\) "Quantifier (logic)"). Extended logics accept the basic intuitions behind classical logic and apply it to other fields, such as [metaphysics](https://en.wikipedia.org/wiki/Metaphysics "Metaphysics"), [ethics](https://en.wikipedia.org/wiki/Ethics "Ethics"), and [epistemology](https://en.wikipedia.org/wiki/Epistemology "Epistemology"). Deviant logics, on the other hand, reject certain classical intuitions and provide alternative explanations of the basic laws of logic.


### Classical Logic: Proposition & Predicate
↗ [Classical Logic (Standard Logic)](Classical%20Logic%20(Standard%20Logic)/Classical%20Logic%20(Standard%20Logic).md)
↗ [Zeroth-Order Logic & Propositional Logic - (零阶) 命题逻辑](Classical%20Logic%20(Standard%20Logic)/Zeroth-Order%20Logic%20&%20Propositional%20Logic%20-%20(零阶)%20命题逻辑.md)
↗ [First-Order Logic & Predicate Calculus -（一阶）谓词逻辑](Classical%20Logic%20(Standard%20Logic)/First-Order%20Logic%20&%20Predicate%20Calculus%20-（一阶）谓词逻辑.md)


### Semantic & The Semantics of Mathematical Logics
↗ [Semantic Analysis](../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Translation%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/1️⃣%20Frontend%20-%20Programming%20Language%20Analysis/Semantic%20Analysis/Semantic%20Analysis.md)
↗ [Formal Semantics and Programming Language](../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Formal%20Semantics%20and%20Programming%20Language/Formal%20Semantics%20and%20Programming%20Language.md)
↗ [Semantic Models & Languages](../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20for%20Specific%20Areas/Database%20Languages/Object-Based%20Data%20Model%20Languages/Semantic%20Models%20&%20Languages/Semantic%20Models%20&%20Languages.md)

> 📖 Nielson, Hanne Riis; Nielson, Flemming (2007). _Semantics with Applications._

---
Semantics is the mapping between A and B. Usually, this involves the mapping between a concept and something (another concept or a real object); specifically, a language and something (another concept expressed in some language, or a real object).
- This is because the significance of language! We use language to think, express, and communicate. 

However, (in my opinion) this is not necessary. Semantics is just the process that we draw this mapping relation between anything in the Universe.

![Human_and_knowledge.excalidraw | 800](../../../../Assets/Illustrations/Computer%20Science%20Philosophy/Human_and_knowledge.excalidraw.md)
<small>The relationship of language, information/data, computation, and automation.</small>

![computing.excalidraw | 800](../../../../Assets/Illustrations/Computer%20Science%20Philosophy/computing.excalidraw.md)

![Language_and_Programming_Language_Processing | 800](../../../../Assets/Illustrations/Computer%20Language/Language_and_Programming_Language_Processing.md)
#### (Mathematical Logic) Language and (Computation) Models
↗ [Language & Literature](../../../../Other%20Networks%20of%20Knowledge/Arts%20&%20Cultures/📃%20Language%20&%20Literature/Language%20&%20Literature.md)

↗ [Theory of Computation](../😶‍🌫️%20Theory%20of%20Computation/Theory%20of%20Computation.md)
- ↗ [Automata Theory and (Formal) Language Theory](../😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Automata%20Theory%20and%20(Formal)%20Language%20Theory.md)
↗ [Computer Languages & Programming Methodology](../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Computer%20Languages%20&%20Programming%20Methodology.md)
- ↗ [Programming Language Theory (PLT)](../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Programming%20Language%20Theory%20(PLT).md)
↗ [Mathematical Modeling & Real World Problem Solving](../../Mathematical%20Modeling%20&%20Real%20World%20Problem%20Solving.md)
↗ [(Formal) Model Checking](../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20Analysis%20&%20Binary%20Engineering/📌%20Software%20Analysis%20Basics/🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/(Formal)%20Model%20Checking/(Formal)%20Model%20Checking.md)

↗ [The Essence of Computing - Program](../../../🗺%20CS%20Overview/The%20Essence%20of%20Computing%20-%20Program.md)

In computer science, however, there are some certain languages (in the form of mathematical logics) that we map (to our computational models). Why? Because this is the way how an automated information computing machine (computer) is build and verified, bottum-up, from ground zero, from nothing but a solid piece of mathematical thoughts.

![computer_architecture.excalidraw | 800](../../../../Assets/Illustrations/Computer%20System/computer_architecture_and_computer_science.excalidraw.md)
<small>Computer System & Computer Science Overview</small>

For example, a high-level programming language, say ↗ [Java](../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Compiled%20+%20Interpreted%20Languages/⚰️%20JVM-Based%20Languages/☕️%20Java/Java.md), have semantics to some sort of computational model, at a horizontal level, say a ↗ [Linear-Bounded Automaton (LBA)](../😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Context-Sensitive%20Languages%20(CSL)%20&%20Linear-Bounded%20Automata%20(LBA).md). Also, a high-level programming language can have semantics to a low-level language as well, at a vertical level, say ↗ [Operational Semantics](../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Formal%20Semantics%20and%20Programming%20Language/Operational%20Semantics.md).

Likewise, a low-level mathematical logic can also have semantics to another low-level mathematical logic, or to a high-level programming language, or some sort of computational model as well! 

A great example of this, is in the note of ↗ [The Essence of Computing - Program](../../../🗺%20CS%20Overview/The%20Essence%20of%20Computing%20-%20Program.md). This note explains how computer is constructed layer by layer, using mapping of semantics, from the very beginning to the very ultimate: from operational semantics (logic language) to transition systems (computational model), then from transition systems to everything: integrated circuits, programming languages, communication protocols, ... and finally the "computer" itself, in the sense of both conceptual and physical. In one word, the physical computer that we see and use nowadays is semantically equivalent to its very first design in ↗ [Operational Semantics](../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Formal%20Semantics%20and%20Programming%20Language/Operational%20Semantics.md), a kind of mathematical logic language. 
- Imagine, one day you have some sorts of very crazy ideas that only exists in your mind, and after long long hardworking days that idea finally became an actual, touchable thing showing up in front of people. How cool it is!

In the study of Computer Science, we learn both those mathematical logics and computational models. (Sometimes this is exhausted,  because people don't like to learn that many things to simply achieve some easy tasks they meet at the moment. But I say let's study 🤓)
#### Satisfiability
When mapping two objects, "assigning semantics", there are rules. When there are rules, such mapping can be deduced to a decision problem: either the mapping succeed or fail. In the case of mapping between logic language and computational model, if such mapping succeeded, we say A accept B, or A satisfy B. Accordingly, B is satisfiable, or SAT.

Specifically, we always consider whether a computational model accept a logic language.


### Properties of Logics
> 🔗 https://mentalmodels4life.net/2022/12/30/a-map-of-mathematical-structures/

Essentially all the systems have a syntax, a semantics in the styles of Tarski or Kripke, and a Hilbert-style proof procedure. The expressiveness of the different systems are tightly connected. The progression from propositional logic (Boolean algebra) to first-order logic (predicate calculus), second-order logic (Natural numbers) and ultimately higher-order logic (Type theory) is a well-studied area, albeit one with many intricacies. 

We care primarily about three properties: soundness, completeness, and decidability. 
- Soundness relates to whether a statement shown to be true by the proof procedure via a syntactic proof is indeed true in the semantics of the logic.
- Completeness relates to whether every statement that is true in the semantics of the logic has a syntactic proof in the proof procedure. 
- Lastly, decidability relates to whether the proof procedure can effectively decide whether an arbitrary given statement is true or false. 

Propositional logic is sound, complete and decidable. First-order logic is sound, complete but not decidable. Higher-order logic (which includes second-order logic) with standard semantics is sound but incomplete, as shown by Gödel’s Incompleteness Theorem. In practice, one can achieve completeness for higher-order logic by adopting the Henkin semantics, in which case one can show that higher-order logic is effectively equivalent to (many-sorted) first-order logic. (More technically, the domain of a type a -> b in a model in standard semantics consists of all functions from the domain of a to the domain of b, whereas a general model in the Henkin semantics only need to contain a non-empty subset of functions from the domain of a to the domain of b. By focussing on general models with elements that are nameable explicitly in the syntax of higher-order logic, Henkin was able to show that every consistent theory has a general model, which then opens the door to proving the contra-positive of the Completeness Theorem for higher-order logic; see [SV] for a clear and succinct description.) In the context of knowledge representation and reasoning for AI, the Henkin semantics is appropriate for higher-order logic, in which case we get the best of both worlds: an expressive language similar to informal mathematics for representing and reasoning about the world, while retaining the underlying soundness and completeness of first-order logic. (Decidability is not achievable for all but the simplest logics.)

![](../../../../Assets/Pics/Pasted%20image%2020251007191312.png)
<small>A Map of Mathematical Structures for AI <br>
Posted on December 30, 2022 (<a>https://mentalmodels4life.net/2022/12/30/a-map-of-mathematical-structures/</a>) by Kee Siong Ng (<a>https://mentalmodels4life.net/author/keesiongng/</a>) <br>
Generally speaking, each arrow involves the addition of some new symbols and the axioms that provide their definitions and / or properties. Some boxes have multiple incoming arrows; these are systems constructed from the union of multiple sets of new symbols and axioms. Note also that the relationships represented by the arrows are, in general, transitive.</small>

↗ [Algebraic Structure & Abstract Algebra & Modern Algebra](../../🧊%20Algebra/🎃%20Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra/Algebraic%20Structure%20&%20Abstract%20Algebra%20&%20Modern%20Algebra.md)
#### Decidability
↗ [Computability Theory - Turing Machine and R.E. Language](../😶‍🌫️%20Theory%20of%20Computation/Computability%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language/Computability%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language.md)
↗ [Decidability](../😶‍🌫️%20Theory%20of%20Computation/Computability%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language/Decidability.md)
#### Soundness & Completeness
> ↗ [Logic (and Critical Thinking) /Soundness, Truth, and Completeness](../../../../Other%20Networks%20of%20Knowledge/♂%20Philosophy/Philosophy%20by%20Disciplines%20&%20Topics/🎼%20Logic%20(and%20Critical%20Thinking)/Logic%20(and%20Critical%20Thinking).md#Soundness,%20Truth,%20and%20Completeness)
> ↗ [Software Analysis Basics /Soundness, Truth, and Completeness](../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20Analysis%20&%20Binary%20Engineering/📌%20Software%20Analysis%20Basics/Software%20Analysis%20Basics.md#Soundness,%20Truth,%20and%20Completeness)

**Definition**: Soundness
In a sound system, we can only prove true things.
- if we can prove $\Phi$ given $\Sigma$
	- i.e. $(\Sigma \vdash \Phi)$ 
- then $\Phi$ is **true** given $\Sigma$
	- i.e. $(\Sigma \models Φ)$
- i.e. $\Sigma \vdash \Phi \implies \Sigma \models \Phi$

 **Definition 4**: Completeness
 In a complete system, we can prove all true things. 
- if $\Phi$ is **true** given $\Sigma$
	- $(\Sigma \models \Phi)$
- then $\phi$ is provable given $\Sigma$
	- $(\Sigma \vdash \Phi)$
- i.e. $\Sigma \models \Phi \implies \Sigma \vdash \Phi$

![](../../../../Assets/Pics/Pasted%20image%2020250908234809.png)

> 🔗 https://en.wikipedia.org/wiki/Soundness

In [mathematical logic](https://en.wikipedia.org/wiki/Mathematical_logic "Mathematical logic"), a [logical system](https://en.wikipedia.org/wiki/Logical_system "Logical system") has the soundness property if every [formula](https://en.wikipedia.org/wiki/Formula_\(mathematical_logic\) "Formula (mathematical logic)") that can be proved in the system is logically valid with respect to the [semantics](https://en.wikipedia.org/wiki/Formal_semantics_\(logic\) "Formal semantics (logic)") of the system. In most cases, this comes down to its rules having the property of _preserving [truth](https://en.wikipedia.org/wiki/Truth "Truth")_. The [converse](https://en.wikipedia.org/wiki/Converse_\(logic\)#Categorical_converse "Converse (logic)") of soundness is known as [completeness](https://en.wikipedia.org/wiki/Completeness_\(logic\) "Completeness (logic)").

A logical system with [syntactic entailment](https://en.wikipedia.org/wiki/Logical_consequence#Syntactic_consequence "Logical consequence") $\vdash$ and [semantic entailment](https://en.wikipedia.org/wiki/Logical_consequence#Semantic_consequence "Logical consequence") $\models$ is **sound** if for any [sequence](https://en.wikipedia.org/wiki/Sequence "Sequence") $A_1, A_2, ..., A_n$ of [sentences](https://en.wikipedia.org/wiki/Sentence_\(mathematical_logic\) "Sentence (mathematical logic)") in its language, if $A_1, A_2, ..., A_n \vdash C$, then $A_1, A_2, ..., A_n \models C$. In other words, a system is sound when all of its [theorems](https://en.wikipedia.org/wiki/Theorem "Theorem") are [validities](https://en.wikipedia.org/wiki/Validity_\(logic\) "Validity (logic)").

Soundness is among the most fundamental properties of mathematical logic. The soundness property provides the initial reason for counting a logical system as desirable. The [completeness](https://en.wikipedia.org/wiki/Completeness_\(logic\) "Completeness (logic)") property means that every validity (truth) is provable. Together they imply that all and only validities are provable.

Most proofs of soundness are trivial. For example, in an [axiomatic system](https://en.wikipedia.org/wiki/Axiomatic_system "Axiomatic system"), proof of soundness amounts to verifying the validity of the axioms and that the rules of inference preserve validity (or the weaker property, truth). If the system allows [Hilbert-style deduction](https://en.wikipedia.org/wiki/Hilbert-style_deductive_system "Hilbert-style deductive system"), it requires only verifying the validity of the axioms and one rule of inference, namely [modus ponens](https://en.wikipedia.org/wiki/Modus_ponens "Modus ponens") (and sometimes substitution).

Soundness properties come in two main varieties: weak and strong soundness, of which the former is a restricted form of the latter.
##### Weak Soundness
Weak soundness of a [deductive system](https://en.wikipedia.org/wiki/Deductive_system "Deductive system") is the property that any sentence that is provable in that deductive system is also true on all interpretations or structures of the semantic theory for the language upon which that theory is based. In symbols, where $S$ is the deductive system, $L$ the language together with its semantic theory, and _P_ a sentence of _L_: if $\vdash_S P$, then also $\models_L P$.
##### Strong soundness
Strong soundness of a deductive system is the property that any sentence $P$ of the language upon which the deductive system is based that is derivable from a set $\Gamma$ of sentences of that language is also a [logical consequence](https://en.wikipedia.org/wiki/Logical_consequence "Logical consequence") of that set, in the sense that any model that makes all members of $\Gamma$ true will also make $P$ true. In symbols, where $\Gamma$ is a set of sentences of $L$: if $\Gamma \vdash_S P$, then also $\Gamma \models_L P$. Notice that in the statement of strong soundness, when $\Gamma$ is empty, we have the statement of weak soundness.
##### Arithmetic soundness
If $T$ is a theory whose objects of discourse can be interpreted as [natural numbers](https://en.wikipedia.org/wiki/Natural_numbers "Natural numbers"), we say $T$ is **_arithmetically sound_** if all theorems of $T$ are actually true about the standard mathematical integers. For further information, see [ω-consistent theory](https://en.wikipedia.org/wiki/%CE%A9-consistent_theory "Ω-consistent theory").
##### Relation to completeness
The converse of the soundness property is the semantic [completeness](https://en.wikipedia.org/wiki/Completeness_\(logic\) "Completeness (logic)") property. A deductive system with a semantic theory is strongly complete if every sentence $P$ that is a [semantic consequence](https://en.wikipedia.org/wiki/Semantic_consequence "Semantic consequence") of a set of sentences $\Gamma$ can be derived in the [deduction system](https://en.wikipedia.org/wiki/Deduction_system "Deduction system") from that set. In symbols: whenever $\Gamma \models P$, then also $\Gamma \vdash P$. Completeness of [first-order logic](https://en.wikipedia.org/wiki/First-order_logic "First-order logic") was first [explicitly established](https://en.wikipedia.org/wiki/G%C3%B6del%27s_completeness_theorem "Gödel's completeness theorem") by [Gödel](https://en.wikipedia.org/wiki/G%C3%B6del "Gödel"), though some of the main results were contained in earlier work of [Skolem](https://en.wikipedia.org/wiki/Skolem "Skolem").

Informally, a soundness theorem for a deductive system expresses that all provable sentences are true. Completeness states that all true sentences are provable.

[Gödel's first incompleteness theorem](https://en.wikipedia.org/wiki/G%C3%B6del%27s_incompleteness_theorem "Gödel's incompleteness theorem") shows that for languages sufficient for doing a certain amount of arithmetic, there can be no consistent and effective deductive system that is complete with respect to the intended interpretation of the symbolism of that language. Thus, not all sound deductive systems are complete in this special sense of completeness, in which the class of models (up to [isomorphism](https://en.wikipedia.org/wiki/Isomorphism "Isomorphism")) is restricted to the intended one. The original completeness proof applies to _all_ classical models, not some special proper subclass of intended ones.



## Ref
