# Web Browsers Development

[TOC]



## Res
### Related Topics
↗ [Web Browsers](../../../../🔑%20CS%20Core/Generic%20Software%20Tools%20&%20Projects/🔍%20Web%20Browsers%20&%20Searching/Web%20Browsers.md)
↗ [Video & Streaming Service](../../🎨%20Computer%20Graphics%20Programming/Video%20&%20Streaming%20Service/Video%20&%20Streaming%20Service.md)

↗ [Web FrontEnd Dev](../../🕸️%20Web%20Development%20&%20The%20Internet/🖥️%20Web%20FrontEnd%20Dev/Web%20FrontEnd%20Dev.md)
↗ [HTML (HyperText Markup Language)](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Other%20Languages%20for%20Specific%20Areas/🪁%20DSL(Domain%20Specific%20Languages)%20&%20GPL(General%20Purpose%20Languages)/Markup%20DSL%20&%20GPL/HTML%20(HyperText%20Markup%20Language).md)
↗ [CSS (Cascading Style Sheets)](../../🕸️%20Web%20Development%20&%20The%20Internet/🖥️%20Web%20FrontEnd%20Dev/📌%20Web%20Frontend%20Basics/CSS%20(Cascading%20Style%20Sheets)/CSS%20(Cascading%20Style%20Sheets).md)

↗ [Web Security](../../../../CyberSecurity/Application%20Security/💉%20Web%20Security/Web%20Security.md)
↗ [Browser Security](../../../../CyberSecurity/Application%20Security/💉%20Web%20Security/🍭%20Web%20Application%20Security%20Mechanisms/Browser%20Security/Browser%20Security.md)


### Other Resources
Browser Docs & Developer Tools
[Firefox Developer Docs](https://firefox-source-docs.mozilla.org)
- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
	- Documentation for the set of web-developer tools built into Firefox.
[Chrome for Developers](https://developer.chrome.com/)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
	- Documentation for the set of web-developer tools built into Chrome.
[Safari Web Inspector](https://webkit.org/web-inspector/)
- Documentation for the set of web-developer tools built into Safari.
[Edge DevTools](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/landing/)
- Documentation for the set of web-developer tools built into Edge.

🏠 https://www.chromium.org/chromium-projects/
The Chromium projects include Chromium and ChromiumOS, the open-source projects behind the [Google Chrome](https://www.google.com/chrome) browser and Google ChromeOS, respectively. This site houses the documentation and code related to the Chromium projects and is intended for developers interested in learning about and contributing to the open-source projects.
- [Chromium](https://www.chromium.org/Home) is an open-source browser project that aims to build a safer, faster, and more stable way for all users to experience the web. This site contains design documents, architecture overviews, testing information, and more to help you learn to build and work with the Chromium source code.
- [ChromiumOS](https://www.chromium.org/chromium-os) is an open-source project that aims to provide a fast, simple, and more secure computing experience for people who spend most of their time on the web. Learn more about the [project goals](https://googleblog.blogspot.com/2009/11/releasing-chromium-os-open-source.html), obtain the latest build, and learn how you can get involved, submit code, and file bugs.



## Intro to Browser Inner Working: Chrome as an Example
### Browser as An Application Software
> 🔗 https://developer.chrome.com/blog/inside-browser-part1

![](../../../../../Assets/Pics/Pasted%20image%2020250319171119.png)
<small>Three layers of computer architecture. Machine Hardware at the bottom, Operating System in the middle, and Application on top.</small>
#### Browser's Architecture
![](../../../../../Assets/Pics/Pasted%20image%2020250319172527.png)
<small>Diagram of Chrome's multi-process architecture. Multiple layers are shown under Renderer Process to represent Chrome running multiple Renderer Processes for each tab.</small>

#### \*Servicification in Chrome
The same approach is applied to the browser process. Chrome is undergoing architecture changes to run each part of the browser program as a service allowing to split into different processes or aggregate into one.

General idea is that when Chrome is running on powerful hardware, it may split each service into different processes giving more stability, but if it is on a resource-constraint device, Chrome consolidates services into one process saving memory footprint. Similar approach of consolidating processes for less memory usage have been used on platform like Android before this change.
#### \*Site Isolation in Chrome: Per-frame renderer processes
[Site Isolation](https://developers.google.com/web/updates/2018/07/site-isolation) is a recently introduced feature in Chrome that runs a separate renderer process for each cross-site iframe. We've been talking about one renderer process per tab model which allowed cross-site iframes to run in a single renderer process with sharing memory space between different sites. Running a.com and b.com in the same renderer process might seem okay. The [Same Origin Policy](https://developer.mozilla.org/docs/Web/Security/Same-origin_policy) is the core security model of the web; it makes sure one site cannot access data from other sites without consent. Bypassing this policy is a primary goal of security attacks. Process isolation is the most effective way to separate sites. With [Meltdown and Spectre](https://developers.google.com/web/updates/2018/02/meltdown-spectre), it became even more apparent that we need to separate sites using processes. With Site Isolation enabled on desktop by default since Chrome 67, each cross-site iframe in a tab gets a separate renderer process.

Enabling Site Isolation has been a multi-year engineering effort. Site Isolation isn't as simple as assigning different renderer processes; it fundamentally changes the way `iframes` talk to each other. Opening `devtools` on a page with `iframes` running on different processes means `devtools` had to implement behind-the-scenes work to make it appear seamless. Even running a simple Ctrl+F to find a word in a page means searching across different renderer processes. You can see the reason why browser engineers talk about the release of Site Isolation as a major milestone!


### Site Navigation Flow
> 🔗  https://developer.chrome.com/blog/inside-browser-part2

![browser_navigation.excalidraw | 800](../../../../../Assets/Illustrations/Web/browser_navigation.excalidraw.md)
#### Response Handling ⭐
↗ [MIME (Multipurpose Internet Mail Extensions)](../../../../🔑%20CS%20Core/🏎️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x01%20Application%20Layer/🚔%20Network%20Managements%20&%20Standards/MIME%20(Multipurpose%20Internet%20Mail%20Extensions).md)
[SafeBrowsing](https://safebrowsing.google.com/)
[Cross-Origin Read Blocking for Web Developers](https://www.chromium.org/Home/chromium-security/corb-for-developers/)

#### Navigation Preload
> 🔗 https://web.dev/blog/navigation-preload


#### Service Worker
> 🔗 https://developer.chrome.com/docs/workbox/service-worker-overview/

Service workers offer incredible utility, but can be tricky to work with at first. Workbox makes service workers easier to use. However, because service workers solve hard problems, any abstraction of that technology will also be tricky without understanding it. Thus, these first few bits of documentation will cover that underlying technology before getting into Workbox specifics.

> To view a running list of service workers, enter `chrome://serviceworker-internals/` into your address bar.

Service workers are specialized JavaScript assets that act as proxies between web browsers and web servers. They aim to improve reliability by providing offline access, as well as boost page performance.

> 🔗 [The service worker lifecycle](https://web.dev/articles/service-worker-lifecycle)


### Page/Tab Management
#### Page Life Circle
> 🔗 https://developer.chrome.com/docs/web-platform/page-lifecycle-api

- Application lifecycle is a key way that modern operating systems manage resources. 
- On the web, there has historically been no such lifecycle, and apps can be kept alive indefinitely. 
- While the web platform has long had events that related to lifecycle states — like [`load`](https://developer.mozilla.org/docs/Web/Events/load), [`unload`](https://developer.mozilla.org/docs/Web/Events/unload), and [`visibilitychange`](https://developer.mozilla.org/docs/Web/Events/visibilitychange) — these events only allow developers to respond to user-initiated lifecycle state changes. For the web to work reliably on low-powered devices (and be more resource conscious in general on all platforms) browsers need a way to proactively reclaim and re-allocate system resources.
- The [Page Lifecycle API](https://wicg.github.io/page-lifecycle/spec.html) attempts to solve this problem by:
	- Introducing and standardizing the concept of lifecycle states on the web.
	- Defining new, system-initiated states that allow browsers to limit the resources that can be consumed by hidden or inactive tabs.
	- Creating new APIs and events that allow web developers to respond to transitions to and from these new system-initiated states.

![page-lifecycle-api-state](../../../../../Assets/Pics/page-lifecycle-api-state.svg)
<small>Page Lifecycle API state and event flow.</small>


#### Page Rendering & Rendering Pipeline
> 🔗 https://developer.chrome.com/blog/inside-browser-part3
> Renderer process touches many aspects of web performance. If you'd like to dig deeper, [the Performance section of Web Fundamentals](https://developers.google.com/web/fundamentals/performance/why-performance-matters/) has many more resources.

The renderer process is responsible for everything that happens inside of a tab. In a renderer process, the main thread handles most of the code you send to the user. Sometimes parts of your JavaScript is handled by worker threads if you use a web worker or a service worker. Compositor and raster threads are also run inside of a renderer processes to render a page efficiently and smoothly.

The renderer process's core job is to turn HTML, CSS, and JavaScript into a web page that the user can interact with.

![browser_render.excalidraw | 800](../../../../../Assets/Illustrations/Web/browser_render.excalidraw.md)
##### Parsing & Sub-resources Loading
Parsing an HTML document into a DOM is defined by the [HTML Standard](https://html.spec.whatwg.org/). You may have noticed that feeding HTML to a browser never throws an error. For example, missing closing `</p>` tag is a valid HTML. Erroneous markup like `Hi! <b>I'm <i>Chrome</b>!</i>` (b tag is closed before i tag) is treated as if you wrote `Hi! <b>I'm <i>Chrome</i></b><i>!</i>`. This is because the HTML specification is designed to handle those errors gracefully. If you are curious how these things are done, you can read on "[An introduction to error handling and strange cases in the parser](https://html.spec.whatwg.org/multipage/parsing.html#an-introduction-to-error-handling-and-strange-cases-in-the-parser)" section of the HTML spec.

**JavaScript can block the parsing**
When the HTML parser finds a `<script>` tag, it pauses the parsing of the HTML document and has to load, parse, and execute the JavaScript code. Why? because JavaScript can change the shape of the document using things like `document.write()` which changes the entire DOM structure ([overview of the parsing model](https://html.spec.whatwg.org/multipage/parsing.html#overview-of-the-parsing-model) in the HTML spec has a nice diagram). This is why the HTML parser has to wait for JavaScript to run before it can resume parsing of the HTML document. If you are curious about what happens in JavaScript execution, [the V8 team has talks and blog posts on this](https://mathiasbynens.be/notes/shapes-ics).

![parsing-model-overview | 300](../../../../../Assets/Pics/parsing-model-overview.svg)
<small>Overview of the parsing model <a>https://html.spec.whatwg.org/multipage/parsing.html#overview-of-the-parsing-model</a></small>

**Hint to browser how you want to load resources**
There are many ways web developers can send hints to the browser in order to load resources nicely. If your JavaScript does not use `document.write()`, you can add [`async`](https://developer.mozilla.org/docs/Web/HTML/Element/script#attr-async) or [`defer`](https://developer.mozilla.org/docs/Web/HTML/Element/script#attr-defer) attribute to the `<script>` tag. The browser then loads and runs the JavaScript code asynchronously and does not block the parsing. You may also use [JavaScript module](https://developers.google.com/web/fundamentals/primers/modules) if that's suitable. `<link rel="preload">` is a way to inform browser that the resource is definitely needed for current navigation and you would like to download as soon as possible. You can read more on this at [Resource Prioritization – Getting the Browser to Help You](https://developers.google.com/web/fundamentals/performance/resource-prioritization).
##### Style Calculation
Having a DOM is not enough to know what the page would look like because we can style page elements in CSS. The main thread parses CSS and determines the computed style for each DOM node. This is information about what kind of style is applied to each element based on CSS selectors. You can see this information in the `computed` section of DevTools.

Even if you do not provide any CSS, each DOM node has a computed style. `<h1>` tag is displayed bigger than `<h2>` tag and margins are defined for each element. This is because the browser has a default style sheet. If you want to know what Chrome's default CSS is like, [you can see the source code here](https://cs.chromium.org/chromium/src/third_party/blink/renderer/core/html/resources/html.css).
##### Layout
The layout is a process to find the geometry of elements. The main thread walks through the DOM and computed styles and creates the layout tree which has information like x y coordinates and bounding box sizes. Layout tree may be similar structure to the DOM tree, but it only contains information related to what's visible on the page. If `display: none` is applied, that element is not part of the layout tree (however, an element with `visibility: hidden` is in the layout tree). Similarly, if a pseudo-element with content like `p::before{content:"Hi!"}` is applied, it is included in the layout tree even though that is not in the DOM.

Determining the Layout of a page is a challenging task. Even the simplest page layout like a block flow from top to bottom has to consider how big the font is and where to line break them because those affect the size and shape of a paragraph; which then affects where the following paragraph needs to be.

CSS can make element float to one side, mask overflow item, and change writing directions. You can imagine, this layout stage has a mighty task. In Chrome, a whole team of engineers works on the layout. If you want to see details of their work, [few talks from BlinkOn Conference](https://www.youtube.com/watch?v=Y5Xa4H2wtVA) are recorded and quite interesting to watch.
##### Paint
At this paint step, the main thread walks the layout tree to create paint records. Paint record is a note of painting process like "background first, then text, then rectangle". If you have drawn on `<canvas>` element using JavaScript, this process might be familiar to you.

The most important thing to grasp in rendering pipeline is that at each step the result of the previous operation is used to create new data. For example, if something changes in the layout tree, then the Paint order needs to be regenerated for affected parts of the document.

**janky in animation**
If you are animating elements, the browser has to run these operations in between every frame. Most of our displays refresh the screen 60 times a second (60 fps); animation will appear smooth to human eyes when you are moving things across the screen at every frame. However, if the animation misses the frames in between, then the page will appear "**janky**".

You can divide JavaScript operation into small chunks and schedule to run at every frame using `requestAnimationFrame()`. For more on this topic, please see [Optimize JavaScript Execution](https://developers.google.com/web/fundamentals/performance/rendering/optimize-javascript-execution) . You might also run your [JavaScript in Web Workers](https://www.youtube.com/watch?v=X57mh8tKkgE) to avoid blocking the main thread.
##### Compositing
> 🔗 https://web.dev/articles/stick-to-compositor-only-properties-and-manage-layer-count
> 🔗 https://developer.chrome.com/blog/inside-browser-part3
> 🔗 https://developer.chrome.com/blog/inside-browser-part4



## Ref
[Explore the Magic Behind Google Chrome | Medium (2018)]: https://zicodeng.medium.com/explore-the-magic-behind-google-chrome-c3563dbd2739

![](../../../../../Assets/Pics/Pasted%20image%2020250318193854.png)

[Conceptual Architecture of Google Chrome (2009)]: https://archrometects.wordpress.com/wp-content/uploads/2009/10/assignment-01-conceptual-architecture-of-google-chrome-archrometects.pdf

[Inside look at modern web browser (part 1)]: https://developer.chrome.com/blog/inside-browser-part1
- we looked at how different processes and threads handle different parts of a browser.
[Inside look at modern web browser (part 2)]: https://developer.chrome.com/blog/inside-browser-part2
- we dig deeper into how each process and thread communicate in order to display a website.
[Inside look at modern web browser (part 3)]: https://developer.chrome.com/blog/inside-browser-part3
- Inner workings of a Renderer Process
[Inside look at modern web browser (part 4)]: https://developer.chrome.com/blog/inside-browser-part4#understanding_non-fast_scrollable_region
- In this post, we'll look at how compositor is enabling smooth interaction when user input comes in.
