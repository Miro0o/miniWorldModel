# SET (Social Engineering Toolkits)

[TOC]



## Res
🚧 https://github.com/trustedsec/social-engineer-toolkit

🏠 https://www.social-engineer.org



## Intro
The Social-Engineer Toolkit is an open-source penetration testing framework designed for social engineering. SET has a number of custom attack vectors that allow you to make a believable attack quickly. SET is a product of **TrustedSec, LLC** – an information security consulting firm located in Cleveland, Ohio.


### Commands Summary
The following is a brief explanation of the social engineering attacks.

- Spear-Phishing Attack Vector allows an attacker to create email messages and send them to targeted victims with attached exploits.

- Website Attack Vectors utilize multiple web-based attacks, including the following:

- Java applet attack method: This spoofs a Java certificate and delivers a Metasploit-based payload. This is one of the most successful attacks, and it is effective against Windows, Linux, and macOS targets.  

- Metasploit browser exploit method: This delivers a Metasploit payload using an iFrame attack.

- Credential harvester attack method: This clones a website and automatically rewrites the POST parameters to allow an attacker to intercept and harvest user credentials; it then redirects the victim back to the original site when harvesting is completed.  

- Tabnabbing attack method: This replaces information on an inactive browser tab with a cloned page that links back to the attacker. When the victim logs in, the credentials are sent to the attacker.

- Web jacking attack method: This utilizes iFrame replacements to make the highlighted URL link appear legitimate; however, when it is clicked, a window pops up and is then replaced with a malicious link.  

- Multi-attack web method: This allows an attacker to select some or all of the several attacks that can be launched at once, including the following:

- Java applet attack method Metasploit browser exploit method Credential harvester attack method Tabnabbing attack method  
Man left in the middle attack method

- Full-screen attack method: This is a simple attack method utilized by attackers to launch an attack behind the scenes when the system is in full- screen mode.  

- HTA attack method: This is when an attacker presents a fake website that will automatically download HTML applications in the .HTA format.

- Infectious media generator: This creates an autorun.inf file and Metasploit payload. Once burned or copied to a USB device or physical media (CD or DVD) and inserted into the target system, it will trigger autorun (if autorun is enabled) and compromise the system.

- To create a payload and listener: This module is a rapid menu-driven method of creating a Metasploit payload. The attacker must use a separate social engineering attack to convince the target to launch it.  

- MassMailer attack: This allows the attacker to send multiple customized emails to a single email address or a list of recipients.

- Arduino-based attack vector: This programs Arduino-based devices, such as the Teensy. Because these devices register as a USB keyboard when connected to a physical Windows system, they can bypass security based on disabling autorun or other endpoint protection.

- Wireless access point attack vector: This will create a fake wireless access point and DHCP server on the attacker's system and redirect all DNS queries to the attacker. The attacker can then launch various attacks, such as the Java applet attack or a credential harvester attack.

- QRcode generator attack vector: This creates a QR code with a defined URL associated with an attack.  

- PowerShell attack vectors: This allows the attacker to create attacks that rely on PowerShell, a command-line shell and scripting language available on Windows Vista and higher versions.

- SMS spoofing attack vector: This allows the attacker to send a crafted SMS text to a person's mobile device and spoof the source of the message. This module has been recently blocked by SET.

- Third-party modules: This allows the attacker to use the Remote Administration Tool Tommy Edition (RATTE) as part of a Java applet attack or as an isolated payload. RATTE is a text menu-driven remote access tool.



## Ref