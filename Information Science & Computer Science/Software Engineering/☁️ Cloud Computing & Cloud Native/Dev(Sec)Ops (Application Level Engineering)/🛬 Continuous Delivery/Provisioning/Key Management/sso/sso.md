# sso

[TOC]



## Res
🏠 https://github.com/buzzfeed/sso



## Intro
**sso** — lovingly known as _the S.S. Octopus_ or _octoboi_ — is the authentication and authorization system BuzzFeed developed to provide a secure, single sign-on experience for access to the many internal web apps used by our employees.

It depends on Google as its authoritative OAuth2 provider, and authenticates users against a specific email domain. Further authorization based on Google Group membership can be required on a per-upstream basis.

The main idea behind **sso** is a "double OAuth2" flow, where `sso-auth` is the OAuth2 provider for `sso-proxy` and Google is the OAuth2 provider for `sso-auth`.

[sso](https://github.com/buzzfeed/sso) is built on top of Bitly’s open source [oauth2_proxy](https://github.com/bitly/oauth2_proxy)

In a nutshell:
- If a user visits an `sso-proxy`-protected service (`foo.sso.example.com`) and does not have a session cookie, they are redirected to `sso-auth` (`sso-auth.example.com`).
    - If the user **does not** have a session cookie for `sso-auth`, they are prompted to log in via the usual Google OAuth2 flow, and then redirected back to `sso-proxy` where they will now be logged in (to`foo.sso.example.com`)
    - If the user _does_ have a session cookie for `sso-auth` (e.g. they have already logged into `bar.sso.example.com`), they are transparently redirected back to `proxy` where they will be logged in, without needing to go through the Google OAuth2 flow
- `sso-proxy` transparently re-validates & refreshes the user's session with `sso-auth`



## Ref

