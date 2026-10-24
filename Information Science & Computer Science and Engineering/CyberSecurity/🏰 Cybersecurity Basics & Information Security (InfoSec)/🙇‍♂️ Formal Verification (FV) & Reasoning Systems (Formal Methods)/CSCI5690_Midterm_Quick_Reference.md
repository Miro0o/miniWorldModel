# CSCI5690 期中速记｜Obsidian Quick Reference

> [!info] 适用范围
> 基于本项目可确认的 Lec 3、Lec 4.1、Lec 4.2、Lec 6.1/6.2、Lec 7。完整解释和练习题见 `CSCI5690_Midterm_Complete_Review.md`。SMT、BDD、E-graph、PCTL、CBMC 是相关补充，实际考试范围需以课程公告为准。

## 1. 全课程核心问题

| 问题 | 问什么？ | 常用转换 |
|---|---|---|
| SAT | $\exists v:v\models F$? | DPLL/CDCL |
| Validity | $\forall v:v\models F$? | $\neg F$ UNSAT |
| Entailment | $\Gamma\models F$? | $\Gamma\land\neg F$ UNSAT |
| Model checking | $K,s\models\varphi$? | state labeling / automata |
| Program verification | $\{P\}\ C\ \{Q\}$? | WP / invariants / VC / SMT |

> [!important] 一句通用口诀
> **要证明“所有情况都安全”，就尝试构造“不安全的情况”；证明这种反例约束 UNSAT。** 记得注明是否只排除了 bounded 反例。

## 2. Logic / FOL / Theory

$$
\begin{aligned}
\text{Soundness}:&\quad \Gamma\vdash\varphi\Rightarrow\Gamma\models\varphi,\\
\text{Completeness}:&\quad \Gamma\models\varphi\Rightarrow\Gamma\vdash\varphi.
\end{aligned}
$$

- **Syntax** = terms / formulas / axioms；**Semantics** = domain / structure / satisfaction。
- $\Sigma=(F,P,arity)$；constants = zero-arity functions（也可单列 $C$）。
- $\Sigma$-structure $\mathcal M$ 解释 symbols；assignment $s:Var\to D$ 解释变量。
- Interpretation 对开放公式可以写 $(\mathcal M,s)$；sentence 不依赖 $s$。
- **Theory** $T=(\Sigma,A)$；**models** $Mod(T)=\{\mathcal M:\mathcal M\models A\}$。
- $\neg\forall x\varphi\equiv\exists x\neg\varphi$；$\neg\exists x\varphi\equiv\forall x\neg\varphi$。
- $\forall x\exists y\varphi$ 一般 **不等价** $\exists y\forall x\varphi$。
- `Model ≠ Theory`；`Sound ≠ Complete ≠ Decidable`。
- EUF：$a=b\Rightarrow f(a)=f(b)$，但 $a\ne b$ 不推出 $f(a)\ne f(b)$。

## 3. SAT Solving

**CNF** = conjunction of clauses；**clause** = disjunction of literals。

**Tseitin**：

$$
\begin{aligned}
t\leftrightarrow(a\land b):&(\neg t\lor a)\land(\neg t\lor b)\land(t\lor\neg a\lor\neg b),\\
t\leftrightarrow(a\lor b):&(\neg t\lor a\lor b)\land(t\lor\neg a)\land(t\lor\neg b).
\end{aligned}
$$

$F$ 和编码在 fresh variables 意义下是 **equisatisfiable**，规模常可线性。

**Resolution**：

$$
\frac{A\lor p,\ B\lor\neg p}{A\lor B},\qquad \square=\text{false}.
$$

**Exactly one**：

$$
\left(\bigvee_{i=1}^n x_i\right)\land
\left(\bigwedge_{1\le i<j\le n}(\neg x_i\lor\neg x_j)\right).
$$

- **DPLL**：propagation → decision → chronological backtracking。
- **CDCL**：propagation → conflict → resolution-based clause learning → nonchronological backjump → continue。
- **Unit propagation** 是 clauses 强制的取值；**decision** 是搜索的试探。
- Pairwise at-most-one 有 $\binom n2$ 个 clauses。

## 4. Model Checking (CTL)

Kripke structure $K=(S,S_0,R,L)$；经典 CTL 路径语义通常假设 total $R$。

$$
\begin{aligned}
Pre_E(X)&=\{s:\exists t,\ sRt\land t\in X\},\\
Pre_A(X)&=\{s:\forall t,\ sRt\Rightarrow t\in X\}.
\end{aligned}
$$

令 $P=Sat(\varphi),Q=Sat(\psi)$：

| CTL | 计算 |
|---|---|
| $EX\varphi$ | $Pre_E(P)$ |
| $AX\varphi$ | $Pre_A(P)$ |
| $EF\varphi$ | $\mu Z.(P\cup Pre_E(Z))$ |
| $AF\varphi$ | $\mu Z.(P\cup Pre_A(Z))$ |
| $EG\varphi$ | $\nu Z.(P\cap Pre_E(Z))$ |
| $AG\varphi$ | $\nu Z.(P\cap Pre_A(Z))$ |
| $E[\varphi U\psi]$ | $\mu Z.(Q\cup(P\cap Pre_E(Z)))$ |
| $A[\varphi U\psi]$ | $\mu Z.(Q\cup(P\cap Pre_A(Z)))$ |

- **LFP $\mu$**：从 $\varnothing$ 迭代；**GFP $\nu$**：从 $S$ 迭代。
- $AGp=\neg EF\neg p$，$AFp=\neg EG\neg p$，$AXp=\neg EX\neg p$。
- $EFp$：存在一条路径最终 $p$；$AFp$：所有路径最终 $p$。
- $EGp$：存在无限路径一直 $p$；$AGp$：所有路径一直 $p$。
- $E[pUq]$ 从 $q$ 反向做受 $p$ 限制的 worklist reachability。
- $A[pUq]$ 需 **所有 successors** 都已成功，常用 counter worklist。
- $EGp$ 在 $p$-induced graph 找 reachable cycle/SCC。
- CTL model checking（显式）通常 $O(|\varphi|(|S|+|R|))$。
- LTL：对 $\neg\varphi$ 建 Büchi automaton、取 product、找 reachable accepting cycle。
- PCTL：概率阈值与线性方程，不只是 Boolean CTL marking。

## 5. Program Verification

**Partial correctness**：若执行终止，则 $Q$。**Total correctness**：必须终止且满足 $Q$。

$$
\boxed{\{Q[e/x]\}\ x:=e\ \{Q\}}
$$

$$
\begin{aligned}
wp(x:=e,Q)&=Q[e/x],\\
wp(C_1;C_2,Q)&=wp(C_1,wp(C_2,Q)).
\end{aligned}
$$

**Loop invariant 三个条件**：

$$
\boxed{P\Rightarrow I}\quad
\boxed{\{I\land b\}\ body\ \{I\}}\quad
\boxed{I\land\neg b\Rightarrow Q}.
$$

**Invariant 与 inductive invariant**：

$$
\begin{aligned}
I\text{ invariant}&:\quad Reach(Init)\subseteq I,\\
I\text{ inductive}&:\quad Init\subseteq I\land Post(I)\subseteq I.
\end{aligned}
$$

对 loop 用 $Post_{body}(I\land b)\subseteq I$。

$$
Reach(Init)=\mu X.(Init\cup Post(X)),\quad
\text{inductive }I\Rightarrow Reach(Init)\subseteq I.
$$

**VC**：想证明 $P\Rightarrow R$，交给 solver 检查 $P\land\neg R$ UNSAT。

**Termination**：nonnegative integer ranking function，guard 成立时每次严格下降。

**BMC**：在 $k$ 步以内寻找 counterexample；`UNSAT` 不能在没有额外 completeness 论证时直接证明无界安全。

## 6. 最后 10 个反例陷阱

1. $SAT$ 不是 $VALID$；一条 model 不能证明 validity。
2. $FOL$ 中的 $\Sigma$ 不指定某个固定 domain。
3. $\mathcal M\models\varphi$ 对开放公式通常还需 assignment 或相应约定。
4. $theory$ 是约束，不是 model；不同 models 可满足同一 theory。
5. $\mu$ 与 $\nu$ 不是任意选的；EG 要能无限继续。
6. $EFp$ 不推出 $AFp$，$EGp$ 不推出 $AGp$。
7. $A[pUq]$ 需要每条路径最终真的遇到 $q$。
8. $Invariant$ 不一定 inductive，可能包含有问题的不可达 state。
9. Partial Hoare triple 不保证终止。
10. BMC 无反例不自动等于 unbounded correctness。

> [!tip] 自测顺序
> 先关掉速记：从记忆中写出 SAT 反例转换、Resolution rule、FOL quantifier semantics、8 条 CTL fixed-point 公式、3 条 loop VC；然后找一张小状态图计算 $EF/AF/EG/AG$；最后做一道 loop invariant 题。如果这些可以独立完成，核心概念就相对稳固。
