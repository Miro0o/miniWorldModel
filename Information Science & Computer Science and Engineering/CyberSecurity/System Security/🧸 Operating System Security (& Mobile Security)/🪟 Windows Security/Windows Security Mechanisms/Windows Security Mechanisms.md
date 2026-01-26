# Windows Security Mechanisms

[TOC]



## Res
### Related Topics



## Intro
### Overview of Windows Security Architecture
> 🤖 Google Gemini 2.5 Flash

The Windows security model is built on several interconnected components that handle everything from authenticating a user to determining what they're allowed to do.

| **Component**         | **Module**                | **Primary Function**                                                     |
| --------------------- | ------------------------- | ------------------------------------------------------------------------ |
| **LSA** (`lsass.exe`) | Core Authentication       | Authenticates users and generates Access Tokens.                         |
| **SAM**               | Account Database (Local)  | Stores local user and group password hashes.                             |
| **Active Directory**  | Account Database (Domain) | Stores network (domain) user and group accounts.                         |
| **Access Token**      | Authorization             | Defines the user's security context (SIDs & privileges).                 |
| **SRM** (in Kernel)   | Access Control            | Enforces access rules by comparing the Access Token to the object's ACL. |
#### 1. The Core Authority: LSA (Local Security Authority)
The **Local Security Authority (LSA)** is the **central security subsystem** process (`lsass.exe`) that manages and enforces the system's local security policy. It acts as the gatekeeper for user authentication and access token generation.
- **Role:** The LSA is responsible for validating users for both local and remote logons, maintaining the security policy, and generating access tokens.
- **Process:** When a user logs in, the LSA calls an appropriate **Authentication Package** (like Kerberos or NTLM).
- **Result:** Upon successful authentication, the LSA creates an **Access Token** for the user.
#### 2. Account Databases: SAM and Active Directory
The LSA relies on a database to verify the user's credentials (password hash or other secrets).
- **SAM (Security Account Manager):**
    - **Role:** The local database for **standalone** computers or workgroup members.
    - **Function:** Stores the **hashed** passwords and security IDs (SIDs) for all **local** users and groups on that specific machine.
- **Active Directory (AD) / NTDS.DIT:**
    - **Role:** The centralized, hierarchical database for computers joined to a **Windows Domain**.
    - **Function:** Stores all **Domain** user accounts, groups, computer accounts, and their authentication data. When a domain user logs in, the LSA refers the request to a Domain Controller (which holds the Active Directory database) for validation.
#### 3. Identity and Authorization: SIDs and Access Tokens
Once a user is authenticated, Windows must authorize their actions. This is done through two fundamental concepts: **Security Identifiers (SIDs)** and **Access Tokens**.
- **Security Identifier (SID):**
    - **Role:** A **unique, variable-length value** that identifies a security principal (a user, a group, or a computer account).
    - **Function:** Every user and group has a SID. This is what the system _actually_ uses for checking permissions, not the username.
- **Access Token:**
    - **Role:** A data structure created by the LSA after a successful login. It represents the user's **security context**.
    - **Function:** It contains the user's SID, the SIDs of all groups they belong to, and a list of **privileges** (rights to perform system-wide actions, like shutting down the system). Every process a user starts inherits a copy of this Access Token.
#### 4. Enforcement: Security Reference Monitor (SRM)
The **Security Reference Monitor (SRM)** is the component in the **Windows Kernel** that enforces the authorization decisions made by the system.
- **Role:** The SRM is the access control engine. It is the final checkpoint before any action is allowed.
- **Process (Access Check):** When a user's process attempts to access a protected object (like a file, a registry key, or a service), the SRM performs an **Access Check**. It compares the SIDs and privileges in the process's **Access Token** against the **Security Descriptor** of the object.
- **Security Descriptor:** This is a structure attached to every protected object, containing an **Access Control List (ACL)** which lists the SIDs (users/groups) that are allowed or denied specific types of access (Read, Write, Execute, etc.).


### Layered Security Components
> 🤖 Google Gemini 2.5 Flash

Beyond the core architecture, Windows includes many additional security features that create a **layered defense**:
- **Credential Guard:** A modern feature using **Virtualization-Based Security (VBS)** to run the isolated LSA process (`LSAIso.exe`) in a secure, isolated container. This protects sensitive credentials (like password hashes and Kerberos tickets) from theft, even if the main operating system kernel is compromised.
- **User Account Control (UAC):** Limits the privileges of application software, forcing even administrators to run as a standard user by default. Any administrative task prompts the user for elevation.
- **Windows Defender/Security:** Provides endpoint protection, including anti-malware, firewall, and other integrated defense features.
- **BitLocker:** Full disk encryption to protect data at rest against physical theft.



## Ref
