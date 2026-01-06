# Google Chrome & Chromium

[TOC]



## Res
🏠 https://www.chromium.org/chromium-projects/
🚧 https://chromium.googlesource.com/chromium/src.git
📂 https://www.chromium.org/developers/
The Chromium projects include Chromium and ChromiumOS, the open-source projects behind the [Google Chrome](https://www.google.com/chrome) browser and Google ChromeOS, respectively. This site houses the documentation and code related to the Chromium projects and is intended for developers interested in learning about and contributing to the open-source projects.
- [Chromium](https://www.chromium.org/Home) is an open-source browser project that aims to build a safer, faster, and more stable way for all users to experience the web. This site contains design documents, architecture overviews, testing information, and more to help you learn to build and work with the Chromium source code.
	- [Getting Involved](https://www.chromium.org/getting-involved): learn how you can help the Chromium project
	- [For Developers](https://www.chromium.org/developers): design docs, how-tos, and other useful information for developers
		- ⭐ [Design Documents](https://www.chromium.org/developers/design-documents/)
			- Start Here: Background Reading
				- [Multi-process Architecture](https://www.chromium.org/developers/design-documents/multi-process-architecture): Describes the high-level architecture of Chromium **Note:** Most of the rest of the design documents assume familiarity with the concepts explained in this document.
				- [How Blink works](https://docs.google.com/document/d/1aitSOucL0VHZa9Z2vbRJSyAIsAz24kX8LFByQ5xQnUg) is a high-level overview of Blink architecture.
				- The "Life of a Pixel" talk ([slides](http://bit.ly/lifeofapixel) / [video](http://bit.ly/loap-2020-video)) is an introduction to Chromium's rendering pipeline, tracing the steps from web content to displayed pixels.
				- (somewhat outdated) [How Chromium Displays Web Pages](https://www.chromium.org/developers/design-documents/displaying-a-web-page-in-chrome): Bottom-to-top overview of how WebKit is embedded in Chromium
			- See Also
				- [Design docs in source code](https://chromium.googlesource.com/chromium/src/+/HEAD/docs/README.md)
				- [Design doc template](https://docs.google.com/document/d/14YBYKgk-uSfjfwpKFlp_omgUq5hwMVazy_M965s_1KA/edit)
	- [For Testers](https://www.chromium.org/for-testers): bug reporting guidelines, test plans, and other quality-related documentation
	- [User Experience](https://www.chromium.org/user-experience): the design philosophy behind many of Chromium's features
	- [Issue Tracking](https://www.chromium.org/issue-tracking): process documentation related to issue tracking and management
	- [Contact](https://www.chromium.org/contact): report a bug or a security issue, or get in touch with individual members of the team
	- [Security](https://www.chromium.org/Home/chromium-security): learn about Chromium security, and how to contact us or get involved
	- [Privacy](https://www.chromium.org/Home/chromium-privacy): information about Chromium privacy, how to get more information, and how to contact us
	- [Events](https://www.chromium.org/events): information about Chromium events
- [ChromiumOS](https://www.chromium.org/chromium-os) is an open-source project that aims to provide a fast, simple, and more secure computing experience for people who spend most of their time on the web. Learn more about the [project goals](https://googleblog.blogspot.com/2009/11/releasing-chromium-os-open-source.html), obtain the latest build, and learn how you can get involved, submit code, and file bugs.

https://developer.chrome.com/docs/devtools/overview
Chrome DevTools is a set of web developer tools built directly into the [Google Chrome](https://www.google.com/chrome/) browser. DevTools can help you edit pages on-the-fly and diagnose problems quickly, which ultimately helps you build better websites, faster.


### Related Topics



## Intro
↗ [Web Browser Development/ Intro to Browser Inner Working: Chrome as an Example](../Web%20Browser%20Development.md)


### Chromium Architecture
> 🔗 https://developer.chrome.com/blog/inside-browser-part1

![](../../../../../../Assets/Pics/Pasted%20image%2020250319172527.png)
<small>Diagram of Chrome's multi-process architecture. Multiple layers are shown under Renderer Process to represent Chrome running multiple Renderer Processes for each tab.</small>

> 🔗 https://www.chromium.org/developers/design-documents/multi-process-architecture/

Chromium uses multiple processes to protect the overall application from bugs and glitches in the rendering engine or other components. It also restricts access from each rendering engine process to other processes and to the rest of the system. In some ways, this brings to web browsing the benefits that memory protection and access control brought to operating systems.

We refer to the main process that runs the UI and manages renderer and other processes as the "**browser process**" or "browser." Likewise, the processes that handle web content are called "**renderer processes**" or "renderers." The renderers use the [Blink](https://www.chromium.org/blink) open-source layout engine for interpreting and laying out HTML.

![](../../../../../../Assets/Pics/Pasted%20image%2020250319203305.png)



## Ref
