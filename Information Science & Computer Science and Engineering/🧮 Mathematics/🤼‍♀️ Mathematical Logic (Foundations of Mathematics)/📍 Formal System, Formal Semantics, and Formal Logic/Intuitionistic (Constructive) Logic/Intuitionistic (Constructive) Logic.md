# Intuitionistic (Constructive) Logic

[TOC]



## Res
### Related Topics


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Intuitionistic_logic

**Intuitionistic logic**, sometimes more generally called **constructive logic**, refers to systems of [symbolic logic](https://en.wikipedia.org/wiki/Symbolic_logic "Symbolic logic") that differ from the systems used for [classical logic](https://en.wikipedia.org/wiki/Classical_logic "Classical logic") by more closely mirroring the notion of [constructive proof](https://en.wikipedia.org/wiki/Constructive_proof "Constructive proof"). In particular, systems of intuitionistic logic do not assume the [law of excluded middle](https://en.wikipedia.org/wiki/Law_of_excluded_middle "Law of excluded middle") and [double negation elimination](https://en.wikipedia.org/wiki/Double_negation_elimination "Double negation elimination"), which are fundamental [inference rules](https://en.wikipedia.org/wiki/Inference_rules "Inference rules") in classical logic.

Formalized intuitionistic logic was originally developed by [Arend Heyting](https://en.wikipedia.org/wiki/Arend_Heyting "Arend Heyting") to provide a formal basis for [L. E. J. Brouwer](https://en.wikipedia.org/wiki/Luitzen_Egbertus_Jan_Brouwer "Luitzen Egbertus Jan Brouwer")'s programme of [intuitionism](https://en.wikipedia.org/wiki/Intuitionism "Intuitionism"). From a [proof-theoretic](https://en.wikipedia.org/wiki/Proof-theoretic "Proof-theoretic") perspective, Heyting’s calculus is a restriction of classical logic in which the law of excluded middle and double negation elimination have been removed. Excluded middle and double negation elimination can still be proved for some propositions on a case by case basis, however, but do not hold universally as they do with classical logic. The standard explanation of intuitionistic logic is the [BHK interpretation](https://en.wikipedia.org/wiki/BHK_interpretation "BHK interpretation").

Several systems of semantics for intuitionistic logic have been studied. One of these semantics mirrors classical [Boolean-valued semantics](https://en.wikipedia.org/wiki/Boolean-valued_semantics "Boolean-valued semantics") but uses [Heyting algebras](https://en.wikipedia.org/wiki/Heyting_algebra "Heyting algebra") in place of [Boolean algebras](https://en.wikipedia.org/wiki/Boolean_algebra "Boolean algebra"). Another semantics uses [Kripke models](https://en.wikipedia.org/wiki/Kripke_semantics "Kripke semantics"). These, however, are technical means for studying Heyting’s deductive system rather than formalizations of Brouwer’s original informal semantic intuitions. Semantical systems claiming to capture such intuitions, due to offering meaningful concepts of “constructive truth” (rather than merely validity or provability), are [Kurt Gödel](https://en.wikipedia.org/wiki/Kurt_G%C3%B6del "Kurt Gödel")’s [dialectica interpretation](https://en.wikipedia.org/wiki/Dialectica_interpretation "Dialectica interpretation"), [Stephen Cole Kleene](https://en.wikipedia.org/wiki/Stephen_Cole_Kleene "Stephen Cole Kleene")’s [realizability](https://en.wikipedia.org/wiki/Realizability "Realizability"), Yurii Medvedev’s logic of finite problems, or [Giorgi Japaridze](https://en.wikipedia.org/wiki/Giorgi_Japaridze "Giorgi Japaridze")’s [computability logic](https://en.wikipedia.org/wiki/Computability_logic "Computability logic"). Yet such semantics persistently induce logics properly stronger than Heyting’s logic. Some authors have argued that this might be an indication of inadequacy of Heyting’s calculus itself, deeming the latter incomplete as a constructive logic.

> [!quote]
> 🔗 https://web.ntnu.edu.tw/~algo/Logic.html
> 
> 直覺主義邏輯：自訂規則。
> 
> 經典邏輯：符合下述六種規則。也符合五種運算的真值表。
> 
> 排中律　　　　law of excluded middle              $⊢ (A ∨ ¬A)$
> 無矛盾律　　　law of noncontradiction             $⊢ ¬(A ∧ ¬A)$
> 追加無謂前提　monotonicity of entailment       $(A ⊢ B) ⊢ (A , X ⊢ B)$
> 消滅重複前提　idempotency of entailment       $(A , A ⊢ B) ⊢ (A ⊢ B)$
> 且運算交換律　commutativity of conjunction   $(A ∧ B) ⊢ (B ∧ A)$
> 笛摩根對偶　　De Morgan duality                      $¬(A ∨ B) ⊢ (¬A ∧ ¬B)$
> 
> 順帶一提，邏輯學家依據上述六種規則，創造五種邏輯運算的真值表。先有本章的內容，才有上章的內容。
> 
> 好久好久以前，邏輯學沒有真值表，邏輯學只有規則表。邏輯推論過程冗長，令人望而生畏。直到真值表橫空出世，邏輯學搖身一變宛如數學，自此邏輯學就變得平易近人了。



## Ref
