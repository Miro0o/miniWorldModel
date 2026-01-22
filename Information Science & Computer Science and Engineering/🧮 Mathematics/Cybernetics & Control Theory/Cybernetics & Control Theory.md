# Cybernetics & Control Theory

[TOC]



## Res
### Related Topics
↗ [Mathematical Modeling & Real World Problem Solving](../Mathematical%20Modeling%20&%20Real%20World%20Problem%20Solving.md)

↗ [Complex System Science](../../../Other%20Networks%20of%20Knowledge/Science%20&%20Application/Natural%20Science%20&%20Engineering%20and%20Technology/Complex%20System%20Science.md)

↗ [Operations Research (OR)](../🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Operations%20Research%20(OR).md)
↗ [Mathematical Optimization (Programming)](../🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Mathematical%20Optimization%20(Programming)/Mathematical%20Optimization%20(Programming).md)

↗ [Decision Making & Game Theory](../🧑‍🦯‍➡️%20Operations%20Research%20(OR)/Decision%20Making%20&%20Game%20Theory/Decision%20Making%20&%20Game%20Theory.md)
↗ [Reinforcement Learning (RL) & Sequential Decision Making](../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/🗝️%20AI%20Basics%20&%20Machine%20Learning%20(ML)/Statistical%20Learning%20&%20Machine%20Learning%20Methods/Reinforcement%20Learning%20(RL)%20&%20Sequential%20Decision%20Making/Reinforcement%20Learning%20(RL)%20&%20Sequential%20Decision%20Making.md)


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Control_theory

**Control theory** is a field of [control engineering](https://en.wikipedia.org/wiki/Control_engineering "Control engineering") and [applied mathematics](https://en.wikipedia.org/wiki/Applied_mathematics "Applied mathematics") that deals with the [control](https://en.wikipedia.org/wiki/Control_system "Control system") of [dynamical systems](https://en.wikipedia.org/wiki/Dynamical_system "Dynamical system"). The aim is to develop a model or algorithm governing the application of system inputs to drive the system to a desired state, while minimizing any _delay_, _overshoot_, or _steady-state error_ and ensuring a level of control [stability](https://en.wikipedia.org/wiki/Stability_theory "Stability theory"); often with the aim to achieve a degree of [optimality](https://en.wikipedia.org/wiki/Optimal_control "Optimal control").

To do this, a **controller** with the requisite corrective behavior is required. This controller monitors the controlled [process variable](https://en.wikipedia.org/wiki/Process_variable "Process variable") (PV), and compares it with the reference or [set point](https://en.wikipedia.org/wiki/Setpoint_\(control_system\) "Setpoint (control system)") (SP). The difference between actual and desired value of the process variable, called the _error_ signal, or SP-PV error, is applied as feedback to generate a control action to bring the controlled process variable to the same value as the set point. Other aspects which are also studied are [controllability](https://en.wikipedia.org/wiki/Controllability "Controllability") and [observability](https://en.wikipedia.org/wiki/Observability "Observability"). Control theory is used in [control system engineering](https://en.wikipedia.org/wiki/Control_system_engineering "Control system engineering") to design automation that have revolutionized manufacturing, aircraft, communications and other industries, and created new fields such as [robotics](https://en.wikipedia.org/wiki/Robotics "Robotics").

Extensive use is usually made of a diagrammatic style known as the [block diagram](https://en.wikipedia.org/wiki/Block_diagram "Block diagram"). In it the [transfer function](https://en.wikipedia.org/wiki/Transfer_function "Transfer function"), also known as the system function or network function, is a mathematical model of the relation between the input and output based on the [differential equations](https://en.wikipedia.org/wiki/Differential_equation "Differential equation") describing the system.

Control theory dates from the 19th century, when the theoretical basis for the operation of governors was first described by [James Clerk Maxwell](https://en.wikipedia.org/wiki/James_Clerk_Maxwell "James Clerk Maxwell"). Control theory was further advanced by [Edward Routh](https://en.wikipedia.org/wiki/Edward_Routh "Edward Routh") in 1874, [Charles Sturm](https://en.wikipedia.org/wiki/Jacques_Charles_Fran%C3%A7ois_Sturm "Jacques Charles François Sturm") and in 1895, [Adolf Hurwitz](https://en.wikipedia.org/wiki/Adolf_Hurwitz "Adolf Hurwitz"), who all contributed to the establishment of control stability criteria; and from 1922 onwards, the development of [PID control](https://en.wikipedia.org/wiki/PID_control "PID control") theory by [Nicolas Minorsky](https://en.wikipedia.org/wiki/Nicolas_Minorsky "Nicolas Minorsky"). Although the most direct application of [mathematical](https://en.wikipedia.org/wiki/Mathematical "Mathematical") control theory is its use in [control systems engineering](https://en.wikipedia.org/wiki/Control_systems_engineering "Control systems engineering") (dealing with [process control](https://en.wikipedia.org/wiki/Process_control "Process control") systems for [robotics](https://en.wikipedia.org/wiki/Robotics "Robotics") and industry), control theory is routinely applied to problems both the natural and [behavioral sciences](https://en.wikipedia.org/wiki/Behavioral_science "Behavioral science"). ==As the general theory of feedback systems, control theory is useful wherever feedback occurs, making it important to fields like [economics](https://en.wikipedia.org/wiki/Economics "Economics"), [operations research](https://en.wikipedia.org/wiki/Operations_research "Operations research"), and the [life sciences](https://en.wikipedia.org/wiki/Life_science "Life science").==

> 🤖 GPT-5.0
> https://chatgpt.com/share/69724455-df38-800f-9f0f-172dcad200d1

**Control theory** is a branch of engineering and applied mathematics that studies how to **model, analyze, and design systems** that automatically regulate their behavior to achieve a desired goal.

At its core, control theory answers questions like:
- How can we make a system behave in a desired way?
- How do we keep a system stable despite disturbances or uncertainty?
- How can we optimize performance while respecting physical constraints?

Core Idea (Intuition)
A control system continuously:
1. **Measures** the system’s current state (via sensors)
2. **Compares** it to a desired target (the reference)
3. **Computes an action** (the control input)
4. **Applies the action** to reduce the error
This feedback loop is the heart of control theory.

**Example:**  
A thermostat measures room temperature and turns heating on/off to maintain a set temperature.

---
**Key Concepts**

System Modeling
Systems are represented using:
- **Differential equations**
- **State-space models**
- **Transfer functions**
These models describe how inputs affect outputs over time.

Feedback and Stability
- **Feedback**: Using the system’s output to influence its input
- **Stability**: Ensuring the system does not diverge or oscillate uncontrollably
A stable system returns to equilibrium after a disturbance.

Controllers
Common controllers include:
- **PID (Proportional–Integral–Derivative)** controllers  
    Widely used in industry due to simplicity and robustness
- **State feedback controllers**
- **Optimal controllers** (e.g., LQR)
- **Adaptive and robust controllers**

Performance & Robustness
Control theory balances:
- Speed vs. overshoot
- Accuracy vs. energy usage
- Performance vs. uncertainty/noise

---
Major Branches of Control Theory
- **Classical Control**: Frequency-domain methods (Bode plots, Nyquist)
- **Modern Control**: State-space, optimal control
- **Robust Control**: Performance under model uncertainty
- **Adaptive Control**: Controllers that learn/update parameters
- **Nonlinear Control**: For systems that are not linear
- **Stochastic Control**: Systems with randomness/noise


### Cybernetics 🆚 Control Theory
> 🤖 Google search AI mode

Cybernetics and control theory are ==deeply intertwined fields studying regulatory systems==, with cybernetics focusing broadly on communication and control in animals/machines (feedback loops, self-regulation) and control theory providing mathematical tools for engineering systems to achieve goals, both examining how systems maintain stability and function, often using concepts like negative feedback. Cybernetics offers a holistic framework, while control theory provides concrete methods for engineering stable, goal-directed behaviors in technologies, influencing AI, robotics, and systems science. 

[Cybernetics](https://www.google.com/search?q=Cybernetics&newwindow=1&sca_esv=591f49c5cb9ac867&sxsrf=ANbL-n6WWMr0R_dBSkbtW3772WgvrTloSA%3A1769095336612&ei=qEByaYaOJcnxwPAPz9vkwAs&oq=cybernetics+and+&gs_lp=Egxnd3Mtd2l6LXNlcnAiEGN5YmVybmV0aWNzIGFuZCAqAggBMgUQABiABDIKEAAYgAQYFBiHAjIKEAAYgAQYFBiHAjILEAAYgAQYkQIYigUyBRAAGIAEMgsQLhiABBiRAhiKBTIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARIu7EDUJKVA1j6oANwBHgBkAEAmAGnAaAB5gWqAQM0LjO4AQHIAQD4AQGYAgugArIGwgIKEAAYsAMY1gQYR8ICBBAjGCfCAgUQABjvBcICBBAAGB7CAgoQABiABBhDGIoFwgIMEAAYgAQYQxiKBRgKwgILEC4YgAQYxwEYrwHCAgUQLhiABJgDAIgGAZAGCpIHAzcuNKAHtTeyBwMzLjS4B5gGwgcGMi0xMC4xyAc8gAgA&sclient=gws-wiz-serp&ved=2ahUKEwiS08vlup-SAxXHDxAIHYioCz4QgK4QegQIAhAA)
- **Definition**: The science of communication and control, studying feedback mechanisms in living organisms, machines, and societies.
- **Key Concepts**: Information, feedback loops, self-organization, adaptation, and the "circular causality" between systems and their environment.
- **Focus**: Understanding the underlying principles of goal-directed behavior, treating systems in terms of function rather than physical parts. 

[Control Theory](https://www.google.com/search?q=Control+Theory&newwindow=1&sca_esv=591f49c5cb9ac867&sxsrf=ANbL-n6WWMr0R_dBSkbtW3772WgvrTloSA%3A1769095336612&ei=qEByaYaOJcnxwPAPz9vkwAs&oq=cybernetics+and+&gs_lp=Egxnd3Mtd2l6LXNlcnAiEGN5YmVybmV0aWNzIGFuZCAqAggBMgUQABiABDIKEAAYgAQYFBiHAjIKEAAYgAQYFBiHAjILEAAYgAQYkQIYigUyBRAAGIAEMgsQLhiABBiRAhiKBTIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARIu7EDUJKVA1j6oANwBHgBkAEAmAGnAaAB5gWqAQM0LjO4AQHIAQD4AQGYAgugArIGwgIKEAAYsAMY1gQYR8ICBBAjGCfCAgUQABjvBcICBBAAGB7CAgoQABiABBhDGIoFwgIMEAAYgAQYQxiKBRgKwgILEC4YgAQYxwEYrwHCAgUQLhiABJgDAIgGAZAGCpIHAzcuNKAHtTeyBwMzLjS4B5gGwgcGMi0xMC4xyAc8gAgA&sclient=gws-wiz-serp&mstk=AUtExfAoxeo2ROC-UqeiZ8_0lSGDUr27J7XOuWCiSxw_uS9Ma608P0LRbnowrNN76DCInbseqc-B3Mdcm0aIf_wPgQcAuQIe7VAFPMIB6yLPy_kUxI7tCqPybmF4yQvcHy1bdUDK_5XHUal_4ucLtloV3IvywfkV76Aa926sTy3bPfU4mFNTajp4N9LVofQgyduJodjEZOOEXuLFKoYIsJ3MDzcCEmcq_Sa8j70jiI61soG8090nQ0O45TACc7wC_6V0D9Ygj03_6cV2fdfk--YwCp4K&csui=3&ved=2ahUKEwiS08vlup-SAxXHDxAIHYioCz4QgK4QegQIBBAA)
- **Definition**: A branch of engineering and mathematics that designs algorithms and models to influence the behavior of dynamical systems.
- **Key Concepts**: Feedback controllers (closed-loop systems), stability, optimization, and robust/adaptive control.
- **Focus**: Developing practical methods (like PID controllers) to make systems (mechanical, electrical, etc.) behave as desired, often using mathematical rigor. 

Relationship and Overlap
- **Foundation**: Cybernetics laid conceptual groundwork (feedback, information flow) that control theory formalized mathematically, notes Springer Nature and [arXiv](https://arxiv.org/pdf/1311.0257).
- **Shared Goal**: Both aim to understand and engineer systems that self-regulate or achieve goals, whether biological (a thermostat, a cell) or artificial (a robot, a chemical plant).
- **Modern Intersection**: Control theory provides tools (e.g., adaptive control) used in cybernetic applications, while cybernetic thinking informs complex systems in AI and cybersecurity, says arXiv. 

In essence, cybernetics asks _how_ systems regulate themselves, and control theory provides the mathematical _how-to_ for building those regulator


### Main Control Strategies
> 🔗 https://en.wikipedia.org/wiki/Control_theory

Every control system must guarantee first the stability of the closed-loop behavior. For [linear systems](https://en.wikipedia.org/wiki/Linear_system "Linear system"), this can be obtained by directly placing the poles. Nonlinear control systems use specific theories (normally based on [Aleksandr Lyapunov](https://en.wikipedia.org/wiki/Aleksandr_Lyapunov "Aleksandr Lyapunov")'s Theory) to ensure stability without regard to the inner dynamics of the system. The possibility to fulfill different specifications varies from the model considered and the control strategy chosen.

List of the main control techniques
- [Optimal control](https://en.wikipedia.org/wiki/Optimal_control "Optimal control") is a particular control technique in which the control signal optimizes a certain "cost index": for example, in the case of a satellite, the jet thrusts needed to bring it to desired trajectory that consume the least amount of fuel. Two optimal control design methods have been widely used in industrial applications, as it has been shown they can guarantee closed-loop stability. These are [Model Predictive Control](https://en.wikipedia.org/wiki/Model_Predictive_Control "Model Predictive Control") (MPC) and [linear-quadratic-Gaussian control](https://en.wikipedia.org/wiki/Linear-quadratic-Gaussian_control "Linear-quadratic-Gaussian control") (LQG). The first can more explicitly take into account constraints on the signals in the system, which is an important feature in many industrial processes. However, the "optimal control" structure in MPC is only a means to achieve such a result, as it does not optimize a true performance index of the closed-loop control system. Together with PID controllers, MPC systems are the most widely used control technique in [process control](https://en.wikipedia.org/wiki/Process_control "Process control").
- [Robust control](https://en.wikipedia.org/wiki/Robust_control "Robust control") deals explicitly with uncertainty in its approach to controller design. Controllers designed using _robust control_ methods tend to be able to cope with small differences between the true system and the nominal model used for design.[[20]](https://en.wikipedia.org/wiki/Control_theory#cite_note-20) The early methods of [Bode](https://en.wikipedia.org/wiki/Hendrik_Wade_Bode "Hendrik Wade Bode") and others were fairly robust; the state-space methods invented in the 1960s and 1970s were sometimes found to lack robustness. Examples of modern robust control techniques include [H-infinity loop-shaping](https://en.wikipedia.org/wiki/H-infinity_loop-shaping "H-infinity loop-shaping") developed by Duncan McFarlane and [Keith Glover](https://en.wikipedia.org/wiki/Keith_Glover "Keith Glover"), [Sliding mode control](https://en.wikipedia.org/wiki/Sliding_mode_control "Sliding mode control") (SMC) developed by [Vadim Utkin](https://en.wikipedia.org/wiki/Vadim_Utkin "Vadim Utkin"), and safe protocols designed for control of large heterogeneous populations of electric loads in Smart Power Grid applications.[[21]](https://en.wikipedia.org/wiki/Control_theory#cite_note-TCL1-21) Robust methods aim to achieve robust performance and/or [stability](https://en.wikipedia.org/wiki/Stability_theory "Stability theory") in the presence of small modeling errors.
- [Stochastic control](https://en.wikipedia.org/wiki/Stochastic_control "Stochastic control") deals with control design with uncertainty in the model. In typical stochastic control problems, it is assumed that there exist random noise and disturbances in the model and the controller, and the control design must take into account these random deviations.
- [Adaptive control](https://en.wikipedia.org/wiki/Adaptive_control "Adaptive control") uses on-line identification of the process parameters, or modification of controller gains, thereby obtaining strong robustness properties. Adaptive controls were applied for the first time in the [aerospace industry](https://en.wikipedia.org/wiki/Aerospace_industry "Aerospace industry") in the 1950s, and have found particular success in that field.
- A [hierarchical control system](https://en.wikipedia.org/wiki/Hierarchical_control_system "Hierarchical control system") is a type of [control system](https://en.wikipedia.org/wiki/Control_system "Control system") in which a set of devices and governing software is arranged in a [hierarchical](https://en.wikipedia.org/wiki/Hierarchical "Hierarchical") [tree](https://en.wikipedia.org/wiki/Tree_\(data_structure\) "Tree (data structure)"). When the links in the tree are implemented by a [computer network](https://en.wikipedia.org/wiki/Computer_network "Computer network"), then that hierarchical control system is also a form of [networked control system](https://en.wikipedia.org/wiki/Networked_control_system "Networked control system").
- [Intelligent control](https://en.wikipedia.org/wiki/Intelligent_control "Intelligent control") uses various AI computing approaches like [artificial neural networks](https://en.wikipedia.org/wiki/Artificial_neural_networks "Artificial neural networks"), [Bayesian probability](https://en.wikipedia.org/wiki/Bayesian_probability "Bayesian probability"), [fuzzy logic](https://en.wikipedia.org/wiki/Fuzzy_logic "Fuzzy logic"), [machine learning](https://en.wikipedia.org/wiki/Machine_learning "Machine learning"), [evolutionary computation](https://en.wikipedia.org/wiki/Evolutionary_computation "Evolutionary computation") and [genetic algorithms](https://en.wikipedia.org/wiki/Genetic_algorithms "Genetic algorithms") or a combination of these methods, such as [neuro-fuzzy](https://en.wikipedia.org/wiki/Neuro-fuzzy "Neuro-fuzzy") algorithms, to control a [dynamic system](https://en.wikipedia.org/wiki/Dynamic_system "Dynamic system").
- [Self-organized criticality control](https://en.wikipedia.org/wiki/Self-organized_criticality_control "Self-organized criticality control") may be defined as attempts to interfere in the processes by which the [self-organized](https://en.wikipedia.org/wiki/Self-organized "Self-organized") system dissipates energy.



## Ref
[控制论在英国]: https://medialab.timesmuseum.org/cn/lectures/symposium-ii/andrew-pickering

[控制理论已死？那路在何方 - Lu Jie的文章 - 知乎]: https://zhuanlan.zhihu.com/p/1959049271258113580
严格地说，控制理论并没有消亡。它只是逐渐失去了在**工程系统智能化进程中的主导地位**。在二十世纪中叶，控制理论是自动化领域的基石。从最早的PID调节，到状态空间方法，再到最优控制、鲁棒控制与H∞理论，几乎每一个时代的工程系统——无论是航天、制造还是电力领域——都建立在它的理论框架之上。

然而，进入二十一世纪后，形势发生了根本性的变化。复杂系统的维度与非线性程度呈指数级增长；传感器、网络与信息系统交织成高维耦合的巨网；与此同时，大数据与机器学习崛起，带来了新的建模与决策范式。

在这样的背景下，传统控制理论那种“**解析解+严格建模+数学可证**”的经典范式，逐渐显露出局限。它假设系统可以被精确描述——必须先建立模型，才能设计控制器。但现实中的复杂系统，往往无法被完全建模：非线性、时变性、不确定性乃至环境干扰，都让精确建模成为奢望。

于是，控制理论在智能时代的舞台上，逐渐被边缘化。这并不是因为控制理论错了，而是因为它**被困在了自己的数学优雅之中**——它的完美推理与严格证明，反而使它难以伸展到真实而混沌的世界。

[控制理论过时了吗？现在开始学自动化/控制理论还有用吗？ | reddit]: https://www.reddit.com/r/ControlTheory/comments/hf6x8k/comment/fvwc0gi/?tl=zh-hans&utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button
控制方面的一个问题是，它真的深入到很多不同的细分领域。所以，化学工程的控制器和高速机械加工或机器人操纵器的控制器非常不同。后者，也就是我的专长，也需要很好地理解机器人运动学和动力学建模。除此之外，高级机器人控制器通常会使用视觉或其他感官输入，这是一个巨大的领域，通常与机器学习或人工智能交叉。还有遥控设备，它们在通信延迟、力反馈的稳定性等方面有自己的细节。

控制理论本质上是一门应用科学。在我看来，基础知识非常有用，可以给你一个非常强大的工程工具集来分析大量的难题。但是，这些技能不可避免地必须应用于特定的背景下，这需要另一套完整的知识。在我看来，控制理论让你能够进入许多不同的应用领域，并拥有一个非常强大的数学基础。但是，纯粹的控制理论本身很可能不会是你整个职业生涯所做的事情。