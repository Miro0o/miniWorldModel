# System Runtime Security

[TOC]



## Res
### Related Topics
↗ [Program Execution (Runtime)](../../../🔑%20CS%20Core/🛣️%20Program%20Compilation%20&%20Execution/🤡%20Program%20Execution%20(Runtime)/Program%20Execution%20(Runtime).md)
↗ [Cloud-Native System Runtime Security](../Cloud%20Security/🩳%20Cloud-Native%20System%20Runtime%20Security/Cloud-Native%20System%20Runtime%20Security.md)

↗ [DCA (Dynamic Code Analysis) & DAST](../../🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20Analysis%20&%20Binary%20Engineering/📌%20Software%20Analysis%20Basics%20Methodologies/📌%20DCA%20(Dynamic%20Code%20Analysis)%20&%20DAST/DCA%20(Dynamic%20Code%20Analysis)%20&%20DAST.md)
↗ [Dynamics Code Analysis Tools (DCAT)](../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/🌋%20Dynamics%20Code%20Analysis%20Tools%20(DCAT)/Dynamics%20Code%20Analysis%20Tools%20(DCAT).md)



## Intro


## Runtime Verification
> 🔗 https://en.wikipedia.org/wiki/Runtime_verification

**Runtime verification** is a computing system analysis and execution approach based on extracting information from a running system and using it to detect and possibly react to observed behaviors satisfying or violating certain properties. Some very particular properties, such as datarace and deadlock freedom, are typically desired to be satisfied by all systems and may be best implemented algorithmically. Other properties can be more conveniently captured as formal specifications. Runtime verification specifications are typically expressed in trace predicate formalisms, such as finite-state machines, regular expressions, context-free patterns, linear temporal logics, etc., or extensions of these. This allows for a less ad-hoc approach than normal testing. However, any mechanism for monitoring an executing system is considered runtime verification, including verifying against test oracles and reference implementations. When formal requirements specifications are provided, monitors are synthesized from them and infused within the system by means of instrumentation. Runtime verification can be used for many purposes, such as security or safety policy monitoring, debugging, testing, verification, validation, profiling, fault protection, behavior modification (e.g., recovery), etc. Runtime verification avoids the complexity of traditional formal verification techniques, such as model checking and theorem proving, by analyzing only one or a few execution traces and by working directly with the actual system, thus scaling up relatively well and giving more confidence in the results of the analysis (because it avoids the tedious and error-prone step of formally modelling the system), at the expense of less coverage. Moreover, through its reflective capabilities runtime verification can be made an integral part of the target system, monitoring and guiding its execution during deployment.


### Basic Approach
The broad field of runtime verification methods can be classified by three dimensions:
1. The system can be monitored during the execution itself (online) or after the execution e.g. in form of log analysis (offline).
2. The verifying code is integrated into the system (as done in Aspect-oriented Programming) or is provided as an external entity.
3. The monitor can report violation or validation of the desired specification.

Nevertheless, the basic process in runtime verification remains similar:
1. A monitor is created from some formal specification. This process usually can be done automatically if there are equivalent automata for the formulas of the formal language the property is specified in. To transform a regular expression, a finite-state machine can be used; a property in linear temporal logic can be transformed into a Büchi automaton (see also Linear temporal logic to Büchi automaton).
2. The system is instrumented to send events concerning its execution state to the monitor.
3. The system is executed and gets verified by the monitor.
4. The monitor verifies the received event trace and produces a verdict whether the specification is satisfied. Additionally, the monitor sends feedback to the system to possibly correct false behaviour. When using offline monitoring the system of cause cannot receive any feedback, as the verification is done at a later point in time.


### Runtime Error Detection
> 🔗 https://en.wikipedia.org/wiki/Runtime_error_detection

**Runtime error detection** is a software verification method that analyzes a software application as it executes and reports defects that are detected during that execution. It can be applied during unit testing, component testing, integration testing, system testing (automated/scripted or manual), or penetration testing.

Runtime error detection can identify defects that manifest themselves only at runtime (for example, file overwrites) and zeroing in on the root causes of the application crashing, running slowly, or behaving unpredictably. Defects commonly detected by runtime error detection include:
- [Race conditions](https://en.wikipedia.org/wiki/Race_condition "Race condition")
- [Exceptions](https://en.wikipedia.org/wiki/Interrupt "Interrupt")
- [Resource leaks](https://en.wikipedia.org/wiki/Resource_leak "Resource leak")
- [Memory leaks](https://en.wikipedia.org/wiki/Memory_leak "Memory leak")
- [Security attack vulnerabilities](https://en.wikipedia.org/wiki/Vulnerability_\(computing\) "Vulnerability (computing)") (e.g., [SQL injection](https://en.wikipedia.org/wiki/SQL_injection "SQL injection"))
- [Null pointers](https://en.wikipedia.org/wiki/Null_pointer "Null pointer")
- [Uninitialized memory](https://en.wikipedia.org/wiki/Memory_corruption "Memory corruption")
- [Buffer overflows](https://en.wikipedia.org/wiki/Buffer_overflow "Buffer overflow")

Runtime error detection tools can only detect errors in the executed control flow of the application



## Ref
