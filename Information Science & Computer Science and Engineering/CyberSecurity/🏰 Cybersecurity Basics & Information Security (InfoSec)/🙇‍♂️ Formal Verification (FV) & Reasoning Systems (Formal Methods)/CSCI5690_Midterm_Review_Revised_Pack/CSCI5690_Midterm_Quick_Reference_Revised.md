# CSCI5690 Automated Reasoning — 期中速记（第二版｜P0 考点标记）

> [!info] 使用说明
> 对应完整版 `CSCI5690_Midterm_Complete_Review_Revised.md`，以此次上传的 8 份 Lecture PDF 和上一版复习资料为基础。**P0 = 必须会独立做题；P1 = 重点理解；P2 = 延伸。** 该排序是学习建议，不代表老师实际公布的考试比重。Lecture 3 SAT 的 PDF 本次未上传，沿用既有整理。

## 🔥 优先顺序（时间紧时只看这一表）

| 优先 | 必做主题 | 必须能手算 / 能默写 | 完整版 |
|---|---|---|---|
| **P0-1** | **BDD** | Reduce、Apply、∃/∀、Image/PreImage、Symbolic BFS | §9 |
| **P0-2** | **SAT-Based MC** | BMC(k)、SAT/UNSAT、diameter、simple/k-induction、CBMC SSA | §11 |
| **P0-3** | **CTL MC** | Kripke、E/A 语义、8 条 fixed-point、state labeling | §6–7 |
| **P0-4** | **SMT** | Boolean abstraction、CDCL(T)、theory lemma | §10.1–10.3 |
| **P0-5** | **PV** | Hoare、WP/SP、invariant 3 VC、ranking | §8 |
| **P0-6** | **SAT/PL** | SAT vs valid、CNF/Tseitin、Resolution、DPLL/CDCL | §2–3 |
| **P0-7** | **FOL/FOT** | Interpretation、quantifier、safe substitution、EUF | §4–5 |

> [!tip] 12 道优先练习
> 完整版中的 **题 2、4、11、15、16、26、28、29、30、31、34、37** 覆盖了最具代表性的手算方法；随后做 **题 32、36、38、39、42** 补齐算法边界。

## 1. [P0] PL / FOL / Theory

### Propositional Logic

$$
\begin{aligned}
F\text{ SAT}&\iff\exists I.\ I\models F,\\
F\text{ valid}&\iff\forall I.\ I\models F,\\
F\text{ valid}&\iff\neg F\text{ UNSAT},\\
F\models G&\iff F\land\neg G\text{ UNSAT},\\
F\equiv G&\iff\operatorname{Mod}(F)=\operatorname{Mod}(G).
\end{aligned}
$$

- **Equivalence** = 同一解释下真值一致；**equisatisfiability** = 只保 SAT/UNSAT 结论（Tseitin fresh vars）。
- **NNF** = 否定只在 atoms 前；**CNF** = conjunction of clauses；**DNF** = disjunction of conjunctions。
- 空 clause $\square=\bot$；空 clauses 集合的合取为 $\top$。
- **Soundness**：$\Gamma\vdash F\Rightarrow\Gamma\models F$；**Completeness**：$\Gamma\models F\Rightarrow\Gamma\vdash F$；**Decidability**：每个输入都终止给出正确 yes/no。

### FOL / FOT

- $\Sigma=(F,R,arity)$：Function/predicate symbols + arities；constants = 0-ary functions。
- $\Sigma$-structure $M$：nonempty domain + functions/relations 的解释；assignment $\rho$ 给自由变量赋值。
- $M,\rho\models\forall x.F\iff\forall d\in D. M,\rho[x\mapsto d]\models F$；$\exists$ 则换成 $\exists d$。
- **Theory** 课件两种表述：$T=(\Sigma,A)$ 或 $\Sigma$ + a class of $T$-models；前者的 models 是所有满足公理 $A$ 的 $\Sigma$-structures。
- **Safe substitution**：变量进入 binder 前先 alpha-rename，避免 capture，例如 $(\forall y.P(x,y))[y/x]\leadsto\forall z.P(y,z)$。
- $\forall x\exists y R(x,y)$ 不等于 $\exists y\forall x R(x,y)$；反模型常用 $D=\{0,1\}$ 和 diagonal relation。
- FOL validity **不可判定**但 semi-decidable；PL decidable。
- **EUF congruence**：$a=b\Rightarrow f(a)=f(b)$；但 $a\ne b$ 不推出 $f(a)\ne f(b)$。
- Arrays 的读写：$select(store(a,i,v),i)=v$；$j\ne i\Rightarrow select(store(a,i,v),j)=select(a,j)$。`TA` vs `TA=`：后者加 extensionality。

## 2. [P0] SAT Solving：核心算法顺序

**Tseitin clauses**：

$$
\begin{aligned}
z\leftrightarrow(a\land b):&\ (\neg z\lor a)\land(\neg z\lor b)\land(z\lor\neg a\lor\neg b),\\
z\leftrightarrow(a\lor b):&\ (\neg z\lor a\lor b)\land(z\lor\neg a)\land(z\lor\neg b),\\
z\leftrightarrow\neg a:&\ (\neg z\lor\neg a)\land(z\lor a).
\end{aligned}
$$

不要忘记 assert 顶层变量。**Resolution**：

$$\frac{A\lor p\quad B\lor\neg p}{A\lor B}\qquad \square\Rightarrow UNSAT.$$

**Exactly one**：

$$\left(\bigvee_{i=1}^nx_i\right)\land\bigwedge_{1\le i<j\le n}(\neg x_i\lor\neg x_j).$$

```text
DPLL:  unit propagate → test conflict/all-satisfied → decision → chronological backtrack
CDCL: propagate → conflict → analyze implication graph → learn clause → backjump → propagate
```

`Decision` = 自选；`BCP` = clauses 强制；`Resolution` 是规则，`CDCL` 是利用该规则学习的完整搜索算法。

## 3. [P0] BDD / ROBDD：必须默写

> [!important] BDD 课件：`CSCI5690_7_bdds_4up.pdf` slides 11–57

### Shannon + Reduction

$$\boxed{f=(\neg x\land f[x=0])\lor(x\land f[x=1]).}$$

```text
ROBDD(v):
    - 节点是 (var,low,high)；terminal 为 0、1
    - Ordering: 每条路径沿相同 global variable order
    - Reduce R1: 如果 low==high，删节点
    - Reduce R2: 如果两节点 (var,low,high) 相同，合并/共享
    - 固定 order 下 canonical：f==g iff canonical root ID 相同
```

**Variable ordering** 可能导致 ROBDD 大小从 polynomial 变 exponential；构造时间可能指数级，不意味着 SAT 一般变成多项式问题。

### Apply（AND、OR 等）

```text
APPLY(op,u,v):
    1. computed-table cache / terminal simplifications
    2. x := 两个根变量中 ordering 更靠前的一个
    3. 取 u,v 在 x=0 和 x=1 的 cofactors
    4. lo := APPLY(op,u0,v0); hi := APPLY(op,u1,v1)
    5. return MK(x,lo,hi)  // eliminate redundant; unique-table merge
```

输入 BDD 节点数为 $n_1,n_2$ 时，memoized 二元 Apply 常用上界 $O(n_1n_2)$。

### Quantification

$$
\boxed{\exists x.f=f[x=0]\lor f[x=1]},\qquad
\boxed{\forall x.f=f[x=0]\land f[x=1]}.
$$

例如 $f=x\leftrightarrow y$：$\exists x f=1$，$\forall x f=0$。根变量 $z\ne x$ 时：递归量化 low/high 后仍以 **ITE(z,lo,hi)**（OR of guarded branches）重组。

### Symbolic Image / PreImage（高优先级）

$$
\boxed{Image(P,T)(V')=\exists V.\;P(V)\land T(V,V')},
$$

$$
\boxed{PreImage(N,T)(V)=\exists V'.\;T(V,V')\land N(V')}.
$$

- **Image**：量化当前 $V$，得到后继 $V'$；**PreImage**：量化后继 $V'$，得到前驱 $V$。
- 计算新一轮可达集，必须将 Image 的输出 $V'$ **rename 为 $V$**。

$$R_0=I,\quad R_{i+1}=R_i\lor Image(R_i,T)[V/V'],\quad R_*\land Bad\equiv0\Rightarrow SAFE.$$

```text
BDD Symbolic BFS:
    R := Init
    repeat:
        NextPrime := EXISTS(V, R(V) AND T(V,V'))
        Next := RENAME(NextPrime, V'->V)
        NewR := R OR Next
        if NewR == R: return R
        R := NewR
```

## 4. [P0] Model Checking I：CTL 与 Fixed Points

Kripke $K=(S,S_0,T,L)$；standard infinite-path CTL 通常假设 $T$ total。

$$Pre_E(X)=\{s:\exists t.(s,t)\in T\land t\in X\},$$

$$Pre_A(X)=\{s:\forall t.((s,t)\in T\Rightarrow t\in X)\}.$$

令 $P=Sat(p),Q=Sat(q)$：

| CTL | 集合/Fixed Point 计算 | 从哪里迭代 |
|---|---|---|
| $EXp$ | $Pre_E(P)$ | 一步 |
| $AXp$ | $Pre_A(P)$ | 一步 |
| $EFp$ | $\mu Z.(P\cup Pre_E(Z))$ | $Z_0=\varnothing$ |
| $AFp$ | $\mu Z.(P\cup Pre_A(Z))$ | $Z_0=\varnothing$ |
| $EGp$ | $\nu Z.(P\cap Pre_E(Z))$ | $Z_0=S$ |
| $AGp$ | $\nu Z.(P\cap Pre_A(Z))$ | $Z_0=S$ |
| $E[pUq]$ | $\mu Z.(Q\cup(P\cap Pre_E(Z)))$ | $Z_0=\varnothing$ |
| $A[pUq]$ | $\mu Z.(Q\cup(P\cap Pre_A(Z)))$ | $Z_0=\varnothing$ |

- $AGp\equiv\neg EF\neg p$；$AFp\equiv\neg EG\neg p$；$AXp\equiv\neg EX\neg p$。
- **EU / EF**：从目标集沿满足前提的 predecessor 做 reverse-worklist。
- **AU / AF**：需要 **所有** successors 成功，用 remaining-successors counter。
- **EG**：找仅包含 $p$ states 且可到达 cycle/SCC 的路径（单节点 SCC 必须有 self-loop 才有 cycle）。
- CTL marking $O(|\varphi|(|S|+|T|))$；LTL 通常 $K\times\mathcal A_{\neg\varphi}$ + accepting SCC，公式部分可能指数增长。
- $GFp$ = infinitely often；$FGp$ = eventually always；fairness 可排除不公平 executions。

## 5. [P0] SMT：CDCL(T) 与 Transition System

### CDCL(T)

$$B(F)=\text{把 theory atoms 当作 Boolean variables 保留 Boolean skeleton}.$$

- $B(F)$ **UNSAT** $\Rightarrow F$ **T-UNSAT**；$B(F)$ SAT 不能直接推出 $F$ T-SAT。
- SAT solver 从 $B(F)$ 得 candidate assignment $A$；theory solver 判断 $B^{-1}(A)$ 的 T-consistency。
- Theory conflict → 学合法 theory lemma（如 $x=z$ 与 $x=z+1$ 不可能同时真，可学 $\neg b_1\lor\neg b_3$），返回 Boolean CDCL 搜索。
- Theory solver 要可增量/backtrack；可提供 theory propagation。**关键：abstract SAT ≠ real SMT model**。

### Transition / inductive invariant

$$M=(S,T,I),\qquad K=(S,S_0,T,L).$$

$$\begin{aligned}
\mathrm{Initiation}:&\quad I(V)\land\neg Inv(V)\ \text{UNSAT?},\\
\mathrm{Consecution}:&\quad Inv(V)\land T(V,V')\land\neg Inv(V')\ \text{UNSAT?},\\
\mathrm{Safety}:&\quad Inv(V)\land Bad(V)\ \text{UNSAT?}
\end{aligned}$$

三个都 UNSAT $\Rightarrow Reach(I)\subseteq Inv\subseteq Safe$，得到无界 safety。

### Equality Saturation（P1）

```text
E-node = operator(child E-Classes)
E-class = a class of equivalent terms
EqSat: match rules → add RHS → merge e-classes → rebuild congruence → fixpoint → extract min cost
```

`phase ordering problem` = destructive rewrite 可能阻断另一 rewrite；conditional rewrite 需正确前提（如除数不为 0）。

## 6. [P0] SAT-Based Model Checking：BMC / Induction / CBMC

> [!important] Model Checking II 课件：`CSCI5690_6_model_checking_2_4up.pdf` slides 4–39

### BMC(k) 与 Completeness

$$\boxed{Path_k=I(V_0)\land\bigwedge_{i=0}^{k-1}T(V_i,V_{i+1})}$$

$$\boxed{BMC_{=k}=Path_k\land\neg q(V_k)}$$

$$\boxed{BMC_{\le k}=Path_k\land\bigvee_{i=0}^k\neg q(V_i)}$$

（`≤ k` 这条式子要能正确延长较短路径；若原系统含 deadlocks，逐深度检查或用适当 totalization。）

- `SAT` = 该 bound 发现 counterexample；`UNSAT` = 在该 bound / query 范围**没有**发现违反性质的路径。
- **Diameter $d$** = 所有 reachable states 的最短初始路径长度的最大值；**检查所有深度 $0..d$ 无 bad** 才足以覆盖 finite reachable set。
- **BDD-based MC** 算中间 state sets + fixed point；**BMC** 不存中间集合，直接求 bounded path existence。

### Simple Induction（两条 UNSAT queries）

$$\boxed{I(V)\land\neg q(V)\ \text{UNSAT?}}$$

$$\boxed{q(V)\land T(V,V')\land\neg q(V')\ \text{UNSAT?}}$$

二者 UNSAT ⇒ $q$ inductive ⇒ 无界 safety。**Step SAT 未必是真 bug**，因为任意满足 $q$ 的起点可能 unreachable。`k-induction` 以任意连续 $k$ 个满足 $q$ 的路径片段加强归纳假设：

$$Step_k=\bigwedge_{i=0}^{k-1}q(V_i)\land\bigwedge_{i=0}^{k-1}T(V_i,V_{i+1})\land\neg q(V_k).$$

### CBMC pipeline

```text
C program
    → simplify control flow and side effects
    → loop unwind (check unwinding assertions)
    → SSA rename / branch join with φ or ITE
    → program constraints ∧ NOT(assertions)
    → SAT / SMT
        SAT   => counterexample within modeled execution
        UNSAT => no error within modeled bound
```

`assert(b)`：验证路径上 $b$ 必须真；`assume(b)`：过滤掉 $\neg b$ executions；`nondet_int`：solver 自由选择输入。若 unwinding assertion 失败，不能从 property assertion 的 bounded UNSAT 声称无界 safe。

## 7. [P0] Program Verification：Hoare、WP/SP、VC

**Partial**：若终止，则后置条件成立；**Total**：必须终止且后置条件成立。

$$\boxed{\{Q[e/x]\}\ x:=e\ \{Q\}}$$

$$
\begin{aligned}
wlp(x:=e,Q)&=Q[e/x],\\
wlp(S_1;S_2,Q)&=wlp(S_1,wlp(S_2,Q)),\\
wlp(\mathrm{if}\ b\ \mathrm{then}\ S_1\ \mathrm{else}\ S_2,Q)&=(b\to wlp(S_1,Q))\land(\neg b\to wlp(S_2,Q)),\\
sp(x:=e,P)&=\exists u.\ (x=e[u/x])\land P[u/x].
\end{aligned}
$$

> [!important] 3 条 Loop VCs（每次默写）
> **Initialization**：$P\Rightarrow Inv$；**Preservation**：$Inv\land b\land T_{body}\Rightarrow Inv'$；**Exit**：$Inv\land\neg b\Rightarrow Q$。证明各否定均 UNSAT。Candidate $Inv$ 太弱导致 VC SAT，不一定是程序真实 bug。

$$Reach(I)=\mu X.(I\cup Post(X)),\qquad I\subseteq Inv,\quad Post(Inv)\subseteq Inv.$$

- **Invariant**：所有 reachable states 满足；**inductive invariant**：还要求 candidate states 在 relation 下 closed（包括不可达 candidate states）。
- **SP forward** / **WP backward**。对于 partial correctness，正式叫 **WLP**；课件有时把 weakest *liberal* precondition 记 `wp`。
- $wlp(assume(b),Q)=b\to Q$；$wlp(assert(b),Q)=b\land Q$（把 assert fail 作为错误）。
- **Termination**：给 nonnegative/well-founded ranking 严格下降。多维可用 lexicographic $(i,j)$：第一分量减少时第二可以增大。

## 8. [P1] 七组最容易混淆的考试结论

| 表述 | 真正能得出的结论 |
|---|---|
| FOL/PL 公式 SAT | 存在至少一个 model；**不是** valid |
| SMT 的 Boolean abstraction SAT | 候选赋值，还需要 theory-consistency |
| BDD 的 ROBDD = terminal 1 | 该 Boolean function valid（固定语义与 ordering） |
| BDD 完整可达集 $R_*\land Bad=0$ | finite-state graph 中无 reachable bad |
| BMC(k) UNSAT | 该 bound 无 counterexample，不自动证明无界安全 |
| Induction step SAT | 可能只是在不可达 state 上失败 |
| VC SAT | 可能 invariant 不充分，不能直接断言真实程序有 bug |

> [!warning] 三处课件校读提醒
> - BDD Forall 递归经过与被量化变量不同的根节点时，Shannon 的低/高分支仍用 **OR guarded branches** 重组。
> - “Whenever requested, **eventually** acknowledged” 在 LTL 应写 $G(req\to F\,ack)$，而非 $G(req\to ack)$。
> - `assume` / `assert` 的 WLP 分别为 implication / conjunction；不同课件公式可能混写。

## 9. 考前闭卷 Checklist

> [!todo] 先不看答案，能默写就勾选
> - [ ] Tseitin 三个模板、Resolution、DPLL 与 CDCL 的区别
> - [ ] FOL quantifier semantics、安全 substitution 的 alpha-renaming
> - [ ] SMT Boolean abstraction / theory conflict lemma 的整个过程
> - [ ] BDD `Reduce` 两条、`Apply` recursion + caching
> - [ ] BDD $\exists/\forall$、Image/PreImage 要消去哪组变量
> - [ ] BDD Symbolic BFS 的 `Image → rename → union → fixed point`
> - [ ] CTL 8 条 fixed-point 公式与 $\mu/\nu$ 的初始集合
> - [ ] BMC Path(k)、BAD encoding、UNSAT 的范围、diameter
> - [ ] Simple induction / k-induction 的 base 和 step 反例查询
> - [ ] CBMC simplify → unwind → SSA → constraints + negated claim
> - [ ] Hoare assignment、WP/SP、loop invariant 的 3 条 VC
> - [ ] Ranking function 与 partial/total correctness 的区别

> [!summary] 最后一句贯通
> 要证明**所有执行**安全，就需要排除**存在反例**。区别只在于你检查的是 Boolean 赋值（SAT）、背景理论模型（SMT）、所有可达状态（BDD/CTL fixed point）、有界轨迹（BMC），还是带 inductive invariant 的全部轨迹（Hoare/VC/induction）。
