# Web Application Security Risks (Threats, Attacks, Vulnerabilities) & OWASP

[TOC]



## Res
🏠 https://owasp.org

🗺️ https://owasp.org/sitemap/
![](../../../../../Assets/Pics/Screenshot%202024-07-13%20at%2011.46.27%20PM.png)
<small><a>https://owasp.org/www-project-integration-standards/</a></small>

- [Top 10](https://owasp.org/www-project-top-ten/)
	- The OWASP Top 10 is a standard awareness document for developers and web application security. It represents a broad consensus about the most critical security risks to web applications.
- [API Top 10](https://owasp.org/www-project-api-security/)
- [Mobile Top 10](https://owasp.org/www-project-mobile-top-10/)
- [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)
	- The Web Security Testing Guide (WSTG) Project produces the premier cybersecurity testing resource for web application developers and security professionals.
	- The WSTG is a comprehensive guide to testing the security of web applications and web services. Created by the collaborative efforts of cybersecurity professionals and dedicated volunteers, the WSTG provides a framework of best practices used by penetration testers and organizations all over the world.
- [Juice Shop](https://owasp.org/www-project-juice-shop/)
- [Snakes & Ladders](https://owasp.org/www-project-snakes-and-ladders/)
- [Security Shepherd](https://github.com/OWASP/SecurityShepherd)
- [WebGoat](https://owasp.org/www-project-webgoat/)
- [PyGoat](https://github.com/adeyosemanputra/pygoat)


### Related Topics
↗ [Cybersecurity Threats & Attacks](../../../⛈️%20Risk%20Management/🐗%20Cybersecurity%20Threats%20&%20Attacks/Cybersecurity%20Threats%20&%20Attacks.md)
↗ [CWE (Common Weakness Enumeration)](../../../🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🐒%20Software%20Vulnerability%20&%20Weakness/🔬%20Software%20Weakness%20Analysis%20&%20Attack%20Surface/CWE%20(Common%20Weakness%20Enumeration).md)



## Intro
### Web Security Risks General Analysis
- **Risk #1**: Web servers should be protected from unauthorized access
	- Example: An attacker should not be able to hack into google.com and provide malicious search results to users
- Protection: Server-side security
	- Example: Protect the server computer from buffer overflow attacks

- **Risk #2**: A malicious website should not be able to damage our computer
	- Example: Visiting evil.com should not infect our computer with malware
	- Example: If we visit evil.com, the attacker who owns evil.com should not be able to read/write files on our computer
- Protection: Sandboxing
	- JavaScript is not allowed to access files on our computer
	- Privilege separation, least privilege
	- Browsers are carefully written to avoid vulnerabilities (e.g., write the browser in a memory-safe language)

- **Risk #3**: A malicious website should not be able to tamper with our interactions with other websites
	- Example: If we visit evil.com, the attacker who owns evil.com should not be able to read our emails in Gmail or buy things with our Amazon account
- Protection: Same-origin policy
	- The web browser prevents a website from accessing other unrelated websites


### Web Security OWASP Overview
![](../../../../../Assets/Pics/Pasted%20image%2020231010134233.png)
<small>https://owasp.org/www-project-top-ten/</small>



## Human Factors in Web Attacks
### Social Engineering


### UI Attacks
General theme: The attacker tricks the victim into thinking they are taking an intended action, when they are actually taking a malicious action
- Takes advantage of user interfaces: The trusted path between the user and the computer
	- Browser disallows the website itself to interact across origins (same-origin policy), but trusts the user to do whatever they want
- Remember: Consider human factors!

Two main types of UI attacks
- Clickjacking: Trick the victim into clicking on something from the attacker
- Phishing: Trick the victim into sending the attacker personal information



## Ref
