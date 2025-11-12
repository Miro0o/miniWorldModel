# macOS Keychain & Passwords

[TOC]



## Res
### Related Topics



## Intro



## Ref
[Updating credentials from the macOS Keychain | github]: https://docs.github.com/en/get-started/git-basics/updating-credentials-from-the-macos-keychain
Updating credentials from the macOS Keychain only applies to users who manually configured a personal access token using the `osxkeychain` helper that is built-in to macOS.

We recommend you either [configure SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) or upgrade to the [Git Credential Manager](https://docs.github.com/en/get-started/git-basics/caching-your-github-credentials-in-git) (GCM) instead. GCM can manage authentication on your behalf (no more manual personal access tokens) including 2FA (two-factor auth).

[If you need to update your keychain password on Mac]:https://support.apple.com/en-hk/guide/keychain-access/kyca2429/mac
Your login keychain password is normally the same as your user password (the password you use to log in to the computer). At login, if your keychain password somehow differs from your user password, it doesn’t automatically unlock and you’re asked to enter the keychain’s password. It’s recommended that you enter your previous user password. If this doesn’t unlock the keychain, the keychain automatically resets.

If you don’t remember your previous user password, you need to reset your default keychain. Resetting the default keychain deletes all the passwords saved in the keychain but lets you sync your login password and the password stored in the keychain.

To do this, [change your password in User settings](https://support.apple.com/en-hk/guide/mac-help/mh11774), and the keychain password is automatically changed to match it.

_Note:_ It’s recommended that you manually reset your keychain only when advised to by Apple Support. Resetting default keychains requires you to log out and log back in to your Mac to complete the process.

[Change User settings on Mac]: https://support.apple.com/en-hk/guide/mac-help/mh11774/mac
Change settings for your Mac user account in User Settings. If you’re an [administrator](https://support.apple.com/en-hk/guide/mac-help/aside/gloscddf7f3c/15.0/mac/15.0), you can also change settings for others who use your Mac. [Learn how to set up a new user](https://support.apple.com/en-hk/guide/mac-help/add-a-user-or-group-mchl3e281fc9/15.0/mac/15.0).

To change these settings, choose Apple menu> System Settings, then click Users & Groups in the sidebar. (You may need to scroll down.)
