# SSO (Single Sign-On)

[TOC]



## Res
### Related Topics
↗ [Access Control (访问控制)](../../../../../⛈️%20Risk%20Management%20(In%20Cyberspace)/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Identity%20&%20Access%20Management%20(IAM)/Access%20Control%20(访问控制)/Access%20Control%20(访问控制).md)
↗ [Authorization (授权管理)](../../../../../⛈️%20Risk%20Management%20(In%20Cyberspace)/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Identity%20&%20Access%20Management%20(IAM)/Access%20Control%20(访问控制)/Authorization%20(授权管理)/Authorization%20(授权管理).md)


### Other Resources



## Intro
> 🔗 https://shiva-rrad.medium.com/understanding-the-different-methods-of-authentication-and-authorization-2534de1a77f6

Single sign-on (SSO) is a modern technology that enables users to access multiple applications or systems by logging in with a single set of credentials. With SSO, users are not required to enter their username and password for each application they use. Instead, they can sign in once and automatically access all authorized applications without having to re-enter their credentials. This reduces the need for remembering multiple usernames and passwords, enhancing user experience and efficiency when working with multiple applications.

An SSO process flow example involves the following steps:
1. The user accesses the first Google product and receives a Google Accounts-generated cookie.
2. When the user navigates to another Google product, they are redirected to Google Accounts.
3. Google Accounts sees that the user already has an authentication-related cookie, so it redirects them to the requested product.

Simply put, SSO can be described as “user logs in once and gains access to all systems without being prompted to log in again at each of them”. This relies on three different entities who trust each other directly and indirectly — the user, identity provider (IdP), and service provider (SP).

To gain access to an SP, a user enters a password (or some other authentication method) to their IdP. The user trusts the IdP, while the SP trusts the IdP. Therefore, the SP can also trust the user.

There are several methods of implementing SSO, including:
1. **Federated SSO**: In this method, a trusted third party called an identity provider (IdP) is used to authenticate users and share their credentials with the applications or services that they need to access. The IdP acts as a broker between the user and the applications, and the user only needs to sign in to the IdP once to access all the applications that they are authorized to use. A common example of federated SSO is when you log in to a third-party application or service using your Google, Facebook, or Microsoft account. In this case, the third-party application is the service provider, and Google, Facebook, or Microsoft acts as the identity provider, sharing your authentication data with the service provider.

2. **Enterprise SSO**: This method is used within an organization to provide SSO functionality across different applications and services that are used within the organization. The user signs in to the SSO system once and is then able to access all the applications and services that they need to use. Many organizations use enterprise SSO solutions to provide their employees with seamless access to different applications and services. For example, an employee may log in to their organization’s SSO portal using their network credentials and then be automatically signed in to their email, intranet, HR portal, and other applications that they have access to.

3. **Web SSO**: This method is used for web-based applications and services. A user logs in to a central authentication server or portal, and from there, they can access any of the web-based applications or services that they are authorized to use. Web SSO is commonly used for accessing web-based applications and services. For example, when you log in to your online banking account, you may be redirected to a central authentication server or portal where you enter your credentials. Once authenticated, you are then able to access your account and any other related services without having to re-enter your credentials.

4. **Kerberos SSO**: Kerberos is a network authentication protocol that provides SSO functionality for networks of computers. In this method, users are authenticated once by the Kerberos server and can then access any of the services or applications within the network without having to re-enter their credentials. Kerberos is commonly used in large enterprise networks to provide SSO functionality for users. For example, a user may log in to their computer using their network credentials, and once authenticated, they are automatically granted access to all the applications and services that they are authorized to use within the network.

5. **Mobile SSO**: This method is used for mobile applications and services. Users sign in once and are then able to access all authorized mobile applications without having to re-enter their credentials. Mobile SSO is commonly used in mobile applications, such as social media apps or banking apps. For example, you may log in to your banking app using your fingerprint or facial recognition, and once authenticated, you are able to access your account information and complete transactions without having to enter your credentials again.



## Ref
