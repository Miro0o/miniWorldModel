# (Code & Command) Injection

[TOC]



## Res
### Related Topics


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Code_injection

**Code injection** is a [computer security exploit](https://en.wikipedia.org/wiki/Computer_security_exploit "Computer security exploit") where a [program](https://en.wikipedia.org/wiki/Computer_program "Computer program") fails to correctly process external data, such as user input, causing it to interpret the data as executable commands. An [attacker](https://en.wikipedia.org/wiki/Hacker_\(computer_security\) "Hacker (computer security)") using this method "injects" [code](https://en.wikipedia.org/wiki/Source_code "Source code") into the program while it is running. Successful exploitation of a code injection vulnerability can result in [data breaches](https://en.wikipedia.org/wiki/Data_breaches "Data breaches"), access to restricted or critical [computer systems](https://en.wikipedia.org/wiki/Computer_systems "Computer systems"), and the spread of [malware](https://en.wikipedia.org/wiki/Malware "Malware").

Code injection [vulnerabilities](https://en.wikipedia.org/wiki/Vulnerability_\(computer_security\) "Vulnerability (computer security)") occur when an application sends untrusted data to an [interpreter](https://en.wikipedia.org/wiki/Interpreter_\(computing\) "Interpreter (computing)"), which then executes the injected text as code. Injection flaws are often found in services like Structured Query Language ([SQL](https://en.wikipedia.org/wiki/SQL "SQL")) databases, Extensible Markup Language ([XML](https://en.wikipedia.org/wiki/XML "XML")) parsers, [operating system](https://en.wikipedia.org/wiki/Operating_system "Operating system") commands, Simple Mail Transfer Protocol ([SMTP](https://en.wikipedia.org/wiki/SMTP "SMTP")) headers, and other program [arguments](https://en.wikipedia.org/wiki/Argument_\(programming\) "Argument (programming)"). Injection flaws can be identified through [source code](https://en.wikipedia.org/wiki/Source_code "Source code") examination, [Static analysis](https://en.wikipedia.org/wiki/Static_analysis_tool "Static analysis tool"), or dynamic testing methods such as [fuzzing](https://en.wikipedia.org/wiki/Fuzzer "Fuzzer").

There are numerous types of code injection vulnerabilities, but most are errors in interpretation—they treat benign user input as code or fail to distinguish input from system commands. Many examples of interpretation errors can exist outside of computer science, such as the comedy routine _"[Who's on First?](https://en.wikipedia.org/wiki/Who%27s_on_First%3F "Who's on First?")"_. Code injection can be used maliciously for many purposes, including:
- Arbitrarily modifying values in a [database](https://en.wikipedia.org/wiki/Database "Database") through [SQL injection](https://en.wikipedia.org/wiki/SQL_injection "SQL injection"); the impact of this can range from [website defacement](https://en.wikipedia.org/wiki/Website_defacement "Website defacement") to serious compromise of [sensitive data](https://en.wikipedia.org/wiki/Sensitive_data "Sensitive data"). For more information, see [Arbitrary code execution](https://en.wikipedia.org/wiki/Arbitrary_code_execution "Arbitrary code execution").
- Installing [malware](https://en.wikipedia.org/wiki/Malware "Malware") or executing malevolent code on a server by injecting server scripting code (such as [PHP](https://en.wikipedia.org/wiki/PHP "PHP")).
- [Privilege escalation](https://en.wikipedia.org/wiki/Privilege_escalation "Privilege escalation") to either [superuser](https://en.wikipedia.org/wiki/Superuser "Superuser") permissions on [UNIX](https://en.wikipedia.org/wiki/UNIX "UNIX") by exploiting shell injection vulnerabilities in a binary file or to [Local System](https://en.wikipedia.org/wiki/Superuser "Superuser") privileges on [Microsoft Windows](https://en.wikipedia.org/wiki/Microsoft_Windows "Microsoft Windows") by exploiting a service within Windows.
- Attacking web users with Hyper Text Markup Language ([HTML](https://en.wikipedia.org/wiki/HTML "HTML")) or Cross-Site Scripting ([XSS](https://en.wikipedia.org/wiki/Cross-site_scripting "Cross-site scripting")) injection.

Code injections that target the [Internet of Things](https://en.wikipedia.org/wiki/Internet_of_Things "Internet of Things") could also lead to severe consequences such as [data breaches](https://en.wikipedia.org/wiki/Data_breaches "Data breaches") and service disruption.

Code injections can occur on any type of program running with an [interpreter](https://en.wikipedia.org/wiki/Interpreter_\(computing\) "Interpreter (computing)"). Doing this is trivial to most, and one of the primary reasons why server software is kept away from users. An example of how an injector can see code injection first-hand is to use their [browser's developer tools](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools).

Code injection vulnerabilities are recorded by the National Institute of Standards and Technology [(NIST](https://en.wikipedia.org/wiki/National_Institute_of_Standards_and_Technology "National Institute of Standards and Technology")) in the National Vulnerability Database ([NVD](https://en.wikipedia.org/wiki/National_Vulnerability_Database "National Vulnerability Database")) as [CWE-94](https://en.wikipedia.org/wiki/Common_Weakness_Enumeration "Common Weakness Enumeration"). Code injection peaked in 2008 at 5.66% as a percentage of all recorded vulnerabilities.



## Ref
