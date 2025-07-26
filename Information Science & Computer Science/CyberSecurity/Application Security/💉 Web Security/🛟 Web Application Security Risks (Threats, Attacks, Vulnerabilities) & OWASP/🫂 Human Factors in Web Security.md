# 🫂 Human Factors in Web Security

[TOC]



## Res
### Related Topics
↗ [Social Engineering & Physical Security](../../../⛈️%20Risk%20Management/🐗%20Cybersecurity%20Threats%20&%20Attacks/Social%20Engineering%20&%20Physical%20Security/Social%20Engineering%20&%20Physical%20Security.md)
↗ [Phishing](../../../⛈️%20Risk%20Management/🐗%20Cybersecurity%20Threats%20&%20Attacks/Social%20Engineering%20&%20Physical%20Security/Phishing.md)



## Intro



## Clickjacking /UI Redressing
### Clickjacking Attacks
> 🔗 https://owasp.org/www-community/attacks/Clickjacking

Clickjacking, also known as a “UI redress attack”, is when an attacker uses multiple transparent or opaque layers to trick a user into clicking on a button or link on another page when they were intending to click on the top level page. Thus, the attacker is “hijacking” clicks meant for their page and routing them to another page, most likely owned by another application, domain, or both.

Using a similar technique, keystrokes can also be hijacked. With a carefully crafted combination of stylesheets, iframes, and text boxes, a user can be led to believe they are typing in the password to their email or bank account, but are instead typing into an invisible frame controlled by the attacker.


### Clickjacking Defenses
> 🔗 https://owasp.org/www-community/attacks/Clickjacking

There are three main ways to prevent clickjacking:
1. Sending the proper Content Security Policy (CSP) frame-ancestors directive response headers that instruct the browser to not allow framing from other domains. The older `X-Frame-Options` HTTP headers is used for graceful degradation and older browser compatibility.
2. Properly setting authentication cookies with `SameSite=Strict` (or `Lax`), unless they explicitly need `None` (which is rare).
3. Employing defensive code in the UI to ensure that the current frame is the most top level window.

For more information on Clickjacking defense, please see the the [Clickjacking Defense Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html).



## Web Phishing
> ↗ [Phishing](../../../⛈️%20Risk%20Management/🐗%20Cybersecurity%20Threats%20&%20Attacks/Social%20Engineering%20&%20Physical%20Security/Phishing.md)

- Phishing: Trick the victim into sending the attacker personal information
- Main vulnerability: The user can’t distinguish between a legitimate website and a website impersonating the legitimate website


### Phishing Attacks
#### Homograph Attacks
 **Creating malicious URLs that look similar (or the same) to legitimate URLs**
#### Browser-in-browser Attacks


### Phishing Defenses
Phishing: Don't Blame the Users!
- Most users aren’t security experts
- Attacks are uncommon: users normally don't suspect malicious action
- Detecting phishing is hard, even if you’re on the lookout for attacks
- Legitimate messages often look like phishing attacks!
#### 2-Factor Authentication
↗ [Authentication (身份鉴别)](../../../⛈️%20Risk%20Management/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Identity%20&%20Access%20Management%20(IAM)/Access%20Control%20(访问控制)/Authentication%20(身份鉴别)/Authentication%20(身份鉴别).md)
↗ [Human-Oriented Authentication (鉴别对象为人)](../../../⛈️%20Risk%20Management/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Identity%20&%20Access%20Management%20(IAM)/Access%20Control%20(访问控制)/Authentication%20(身份鉴别)/Object-Based%20Authetication/Human-Oriented%20Authentication%20(鉴别对象为人)/Human-Oriented%20Authentication%20(鉴别对象为人).md)
##### Subverting 2FA : Relay Attacks
↗ [Cybersecurity Threats & Attacks](../../../⛈️%20Risk%20Management/🐗%20Cybersecurity%20Threats%20&%20Attacks/Cybersecurity%20Threats%20&%20Attacks.md)

![](../../../../../Assets/Pics/Screenshot%202024-10-22%20at%2010.37.10.png)
##### Subverting 2FA : Social Engineering



## Ref
