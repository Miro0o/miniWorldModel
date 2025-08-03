# Logic (and Critical Thinking)

[TOC]



## Res
### Related Topics
↗ [Mathematical Logic](../../../../Information%20Science%20&%20Computer%20Science/🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic/Mathematical%20Logic.md)
- ↗ [Propositional Calculus (命题逻辑)](../../../../Information%20Science%20&%20Computer%20Science/🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Propositional%20Calculus%20(命题逻辑).md)
- ↗ [First-Order Logic (一阶谓词逻辑)](../../../../Information%20Science%20&%20Computer%20Science/🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/First-Order%20Logic%20(一阶谓词逻辑).md)


### Learning Resources
https://ljmw.readthedocs.io
本网站是逻辑思维普及性网站。 主要收录各类常见的逻辑谬误，并且加以简要分析与介绍。 本网站不是任何类型的逻辑学教程、教材，亦不会系统性地介绍现代逻辑学知识。 想要系统性学习逻辑学、逻辑思维的读者应购买逻辑学教材进行仔细研读。
- 违反逻辑学的基本准则
	- [同一律](https://ljmw.readthedocs.io/jbzz/tyl.html)
	    - [证甲论乙](https://ljmw.readthedocs.io/jbzz/tyl.html#id2)
	    - [稻草人谬误](https://ljmw.readthedocs.io/jbzz/tyl.html#id4)
- 命题逻辑的基本错误
	- [蕴含式前后件误用](https://ljmw.readthedocs.io/mtlj/yunhanshi.html)
	    - [肯定后件](https://ljmw.readthedocs.io/mtlj/yunhanshi.html#id2)
	    - [否定前件](https://ljmw.readthedocs.io/mtlj/yunhanshi.html#id3)
	- [析取、合取式误用](https://ljmw.readthedocs.io/mtlj/xqhq.html)
	    - [肯定选言](https://ljmw.readthedocs.io/mtlj/xqhq.html#id2)
	    - [否定联言](https://ljmw.readthedocs.io/mtlj/xqhq.html#id3)
	- [误用命题关系](https://ljmw.readthedocs.io/mtlj/mtgx.html)
	    - [误用逆命题](https://ljmw.readthedocs.io/mtlj/mtgx.html#id2)
	    - [误用否命题](https://ljmw.readthedocs.io/mtlj/mtgx.html#id4)
	    - [假逆否命题](https://ljmw.readthedocs.io/mtlj/mtgx.html#id5)
- 错误的三段论
- 非形式谬误
	- 非形式谬误指错误之处不在逻辑推理上，而在其他地方。 因此非形式谬误往往不能通过将论述符号化的方法来揭穿。 实际上，有很多非形式谬误根本就没有足够的实质论述、实质推理。
	- [以人论言](https://ljmw.readthedocs.io/fxs/yrly.html)
	    - [诉诸人身](https://ljmw.readthedocs.io/fxs/yrly.html#id2)
	    - [扣帽子](https://ljmw.readthedocs.io/fxs/yrly.html#id3)
	    - [诉诸权威](https://ljmw.readthedocs.io/fxs/yrly.html#id4)
	    - [诉诸民主](https://ljmw.readthedocs.io/fxs/yrly.html#id5)
	    - [无故关联](https://ljmw.readthedocs.io/fxs/yrly.html#id6)



## Intro
> 🔗 https://philosophy.hku.hk/think/logic/whatislogic.php

The term "logic" came from the Greek word _logos_, which is sometimes translated as "sentence", "discourse", "reason", "rule", and "ratio". Of course, these translations are not enough to help us understand the more specialized meaning of "logic" as it is used today.

So what is logic? Briefly speaking, we might define logic as _the study of the principles of correct reasoning_. This is a rough definition, because how logic should be properly defined is actually quite a controversial matter. However, for the purpose of this tour, we thought it would be useful to give you at least some rough idea as to the subject matter that you will be studying. So this is what we shall try to do on this page.

> 🔗 https://en.wikipedia.org/wiki/Logic

**Logic** is the study of correct [reasoning](https://en.wikipedia.org/wiki/Logical_reasoning "Logical reasoning"). It includes both [formal](https://en.wikipedia.org/wiki/Logic#Formal_logic) and [informal logic](https://en.wikipedia.org/wiki/Informal_logic "Informal logic"). Formal logic is the study of [deductively valid](https://en.wikipedia.org/wiki/Validity_\(logic\) "Validity (logic)") inferences or [logical truths](https://en.wikipedia.org/wiki/Logical_truth "Logical truth"). It examines how conclusions follow from [premises](https://en.wikipedia.org/wiki/Premise "Premise") based on the structure of arguments alone, independent of their topic and content. Informal logic is associated with [informal fallacies](https://en.wikipedia.org/wiki/Informal_fallacies "Informal fallacies"), [critical thinking](https://en.wikipedia.org/wiki/Critical_thinking "Critical thinking"), and [argumentation theory](https://en.wikipedia.org/wiki/Argumentation_theory "Argumentation theory"). Informal logic examines arguments expressed in [natural language](https://en.wikipedia.org/wiki/Natural_language "Natural language") whereas formal logic uses [formal language](https://en.wikipedia.org/wiki/Formal_language "Formal language"). When used as a [countable noun](https://en.wikipedia.org/wiki/Countable_noun "Countable noun"), the term "a logic" refers to a specific logical [formal system](https://en.wikipedia.org/wiki/Formal_system "Formal system") that articulates a [proof system](https://en.wikipedia.org/wiki/Proof_system "Proof system"). Logic plays a central role in many fields, such as [philosophy](https://en.wikipedia.org/wiki/Philosophy "Philosophy"), [mathematics](https://en.wikipedia.org/wiki/Mathematics "Mathematics"), [computer science](https://en.wikipedia.org/wiki/Computer_science "Computer science"), and [linguistics](https://en.wikipedia.org/wiki/Linguistics "Linguistics").

Logic studies arguments, which consist of a set of premises that leads to a conclusion. An example is the argument from the premises "it's Sunday" and "if it's Sunday then I don't have to work" leading to the conclusion "I don't have to work." Premises and conclusions express [propositions](https://en.wikipedia.org/wiki/Proposition "Proposition") or claims that can be true or false. An important feature of propositions is their internal structure. For example, complex propositions are made up of simpler propositions linked by [logical vocabulary](https://en.wikipedia.org/wiki/Logical_connective "Logical connective") like ∧ ([and](https://en.wikipedia.org/wiki/Logical_conjunction "Logical conjunction")) or → ([if...then](https://en.wikipedia.org/wiki/Material_conditional "Material conditional")). Simple propositions also have parts, like "Sunday" or "work" in the example. The truth of a proposition usually depends on the meanings of all of its parts. However, this is not the case for logically true propositions. They are true only because of their logical structure independent of the specific meanings of the individual parts.

Arguments can be either correct or incorrect. An argument is correct if its premises support its conclusion. [Deductive arguments](https://en.wikipedia.org/wiki/Deductive_reasoning "Deductive reasoning") have the strongest form of support: if their premises are true then their conclusion must also be true. This is not the case for [ampliative](https://en.wikipedia.org/wiki/Ampliative "Ampliative") arguments, which arrive at genuinely new information not found in the premises. Many arguments in everyday discourse and the sciences are ampliative arguments. They are divided into [inductive](https://en.wikipedia.org/wiki/Inductive_reasoning "Inductive reasoning") and [abductive](https://en.wikipedia.org/wiki/Abductive_reasoning "Abductive reasoning") arguments. Inductive arguments are statistical generalizations, such as inferring that all ravens are black based on many individual observations of black ravens.[[2]](https://en.wikipedia.org/wiki/Logic#cite_note-FOOTNOTEVickers2022-2) Abductive arguments are [inferences](https://en.wikipedia.org/wiki/Inference "Inference") to the best explanation, for example, when a doctor concludes that a patient has a certain disease which explains the symptoms they suffer. Arguments that fall short of the standards of correct reasoning often embody [fallacies](https://en.wikipedia.org/wiki/Fallacies "Fallacies"). Systems of logic are theoretical frameworks for assessing the correctness of arguments.

Logic has been studied since [antiquity](https://en.wikipedia.org/wiki/Ancient_history "Ancient history"). Early approaches include [Aristotelian logic](https://en.wikipedia.org/wiki/Aristotelian_logic "Aristotelian logic"), [Stoic logic](https://en.wikipedia.org/wiki/Stoic_logic "Stoic logic"), [Nyaya](https://en.wikipedia.org/wiki/Nyaya "Nyaya"), and [Mohism](https://en.wikipedia.org/wiki/Mohism "Mohism"). Aristotelian logic focuses on reasoning in the form of [syllogisms](https://en.wikipedia.org/wiki/Syllogism "Syllogism"). It was considered the main system of logic in the Western world until it was replaced by modern formal logic, which has its roots in the work of late 19th-century mathematicians such as [Gottlob Frege](https://en.wikipedia.org/wiki/Gottlob_Frege "Gottlob Frege"). Today, the most commonly used system is [classical logic](https://en.wikipedia.org/wiki/Classical_logic "Classical logic"). It consists of [propositional logic](https://en.wikipedia.org/wiki/Propositional_logic "Propositional logic") and [first-order logic](https://en.wikipedia.org/wiki/First-order_logic "First-order logic"). Propositional logic only considers logical relations between full propositions. First-order logic also takes the internal parts of propositions into account, like [predicates](https://en.wikipedia.org/wiki/Predicate_\(mathematical_logic\) "Predicate (mathematical logic)") and [quantifiers](https://en.wikipedia.org/wiki/Quantifier_\(logic\) "Quantifier (logic)"). Extended logics accept the basic intuitions behind classical logic and apply it to other fields, such as [metaphysics](https://en.wikipedia.org/wiki/Metaphysics "Metaphysics"), [ethics](https://en.wikipedia.org/wiki/Ethics "Ethics"), and [epistemology](https://en.wikipedia.org/wiki/Epistemology "Epistemology"). Deviant logics, on the other hand, reject certain classical intuitions and provide alternative explanations of the basic laws of logic.


### Formal Logic and Informal Logic 🆚 Mathematical Logic and Critical Thinking
> 🔗 https://philosophy.hku.hk/think/logic/whatislogic.php

Sometimes a distinction is made between _informal logic_ and _formal logic_. The term "informal logic" is often used to mean the same thing as critical thinking. Sometimes it is used to refer to the study of reasoning and fallacies in the context of everyday life. "Formal logic" is mainly concerned with formal systems of logic. These are specially constructed systems for carrying out proofs, where the languages and rules of reasoning are precisely and carefully defined. _Sentential logic_ (also known as "Propositional logic") and _Predicate Logic_ are both examples of formal systems of logic.

There are many reasons for studying formal logic. One is that formal logic helps us identify patterns of good reasoning and patterns of bad reasoning, so we know which to follow and which to avoid. This is why studying basic formal logic can help improve critical thinking. Formal systems of logic are also used by linguists to study natural languages. Computer scientists also employ formal systems of logic in research relating to Artificial Intelligence. Finally, many philosophers also like to use formal logic when dealing with complicated philosophical problems, in order to make their reasoning more explicit and precise.
#### Mathematical Logic
↗ [Mathematical Logic](../../../../Information%20Science%20&%20Computer%20Science/🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic/Mathematical%20Logic.md)
#### Critical Thinking
> 🔗 https://en.wikipedia.org/wiki/Critical_thinking

**Critical thinking** is the process of analyzing available [facts](https://en.wikipedia.org/wiki/Fact "Fact"), [evidence](https://en.wikipedia.org/wiki/Evidence "Evidence"), [observations](https://en.wikipedia.org/wiki/Observation "Observation"), and [arguments](https://en.wikipedia.org/wiki/Argument "Argument") to make sound conclusions or informed choices. It involves recognizing underlying assumptions, providing justifications for ideas and actions, evaluating these justifications through comparisons with varying perspectives, and assessing their rationality and potential consequences. The goal of critical thinking is to form a [judgment](https://en.wikipedia.org/wiki/Judgment "Judgment") through the application of [rational](https://en.wikipedia.org/wiki/Rational "Rational"), [skeptical](https://en.wikipedia.org/wiki/Skepticism "Skepticism"), and [unbiased](https://en.wikipedia.org/wiki/Bias "Bias") analyses and evaluation. In modern times, the use of the phrase _critical thinking_ can be traced to [John Dewey](https://en.wikipedia.org/wiki/John_Dewey "John Dewey"), who used the phrase _reflective thinking,_ which depends on the knowledge base of an individual; the excellence of critical thinking in which an individual can engage varies according to it. According to philosopher Richard W. Paul, critical thinking and analysis are competencies that can be learned or trained. The application of critical thinking includes [self-directed](https://en.wikipedia.org/wiki/Self-directedness "Self-directedness"), [self-disciplined](https://en.wikipedia.org/wiki/Discipline "Discipline"), [self-monitored](https://en.wikipedia.org/wiki/Self-monitoring "Self-monitoring"), and self-[corrective](https://en.wikipedia.org/wiki/Corrective_feedback "Corrective feedback") habits of the mind, as critical thinking is not a natural process; it must be induced, and ownership of the process must be taken for successful questioning and reasoning. Critical thinking presupposes a rigorous commitment to overcome [egocentrism](https://en.wikipedia.org/wiki/Egocentrism "Egocentrism") and [sociocentrism](https://en.wikipedia.org/wiki/Sociocentrism "Sociocentrism"), that leads to a mindful command of effective communication and [problem solving](https://en.wikipedia.org/wiki/Problem_solving "Problem solving").



## Ref
[ What is critical thinking? | HKU ]: https://philosophy.hku.hk/think/critical/ct.php
