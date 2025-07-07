# Google Blink

[TOC]



## Res
📂 https://www.chromium.org/blink/

[How Blink Works](https://docs.google.com/document/d/1aitSOucL0VHZa9Z2vbRJSyAIsAz24kX8LFByQ5xQnUg/edit?tab=t.0)
- [What Blink does](https://docs.google.com/document/d/1aitSOucL0VHZa9Z2vbRJSyAIsAz24kX8LFByQ5xQnUg/edit#heading=h.mndgzxvp6evc)
- [Process / thread architecture](https://docs.google.com/document/d/1aitSOucL0VHZa9Z2vbRJSyAIsAz24kX8LFByQ5xQnUg/edit#heading=h.akojgy1ki8zd)
	- [Processes](https://docs.google.com/document/d/1aitSOucL0VHZa9Z2vbRJSyAIsAz24kX8LFByQ5xQnUg/edit#heading=h.x61szkkin3w0)
	- [Threads](https://docs.google.com/document/d/1aitSOucL0VHZa9Z2vbRJSyAIsAz24kX8LFByQ5xQnUg/edit#heading=h.1u85d5k7funy)
	- [Initialization of Blink](https://docs.google.com/document/d/1aitSOucL0VHZa9Z2vbRJSyAIsAz24kX8LFByQ5xQnUg/edit#heading=h.es62zko0xvdj)
- [Directory structure](https://docs.google.com/document/d/1aitSOucL0VHZa9Z2vbRJSyAIsAz24kX8LFByQ5xQnUg/edit#heading=h.eg8vke584fx1)
	- [Content public APIs and Blink public APIs](https://docs.google.com/document/d/1aitSOucL0VHZa9Z2vbRJSyAIsAz24kX8LFByQ5xQnUg/edit#heading=h.lcttq6awvip9)
	- [Directory structure and dependencies](https://docs.google.com/document/d/1aitSOucL0VHZa9Z2vbRJSyAIsAz24kX8LFByQ5xQnUg/edit#heading=h.v0a6icetafuj)
	- [WTF](https://docs.google.com/document/d/1aitSOucL0VHZa9Z2vbRJSyAIsAz24kX8LFByQ5xQnUg/edit#heading=h.z5ey0roo55p7)
- [Memory management](https://docs.google.com/document/d/1aitSOucL0VHZa9Z2vbRJSyAIsAz24kX8LFByQ5xQnUg/edit#heading=h.ekwf97my4bgf)
- [Task scheduling](https://docs.google.com/document/d/1aitSOucL0VHZa9Z2vbRJSyAIsAz24kX8LFByQ5xQnUg/edit#heading=h.dr7ct95ht2sw)
- [Page, Frame, Document, DOMWindow etc](https://docs.google.com/document/d/1aitSOucL0VHZa9Z2vbRJSyAIsAz24kX8LFByQ5xQnUg/edit#heading=h.oq5rf2gupfly)
	- [Concepts](https://docs.google.com/document/d/1aitSOucL0VHZa9Z2vbRJSyAIsAz24kX8LFByQ5xQnUg/edit#heading=h.z7d4nb461lpb)
	- [OOPIF](https://docs.google.com/document/d/1aitSOucL0VHZa9Z2vbRJSyAIsAz24kX8LFByQ5xQnUg/edit#heading=h.8hfo3d5usxas)
	- [Detached Frame / Document](https://docs.google.com/document/d/1aitSOucL0VHZa9Z2vbRJSyAIsAz24kX8LFByQ5xQnUg/edit#heading=h.5ptlg8thd2ij)
- [Web IDL bindings](https://docs.google.com/document/d/1aitSOucL0VHZa9Z2vbRJSyAIsAz24kX8LFByQ5xQnUg/edit#heading=h.j8z8z3e0d0f)
- [V8 and Blink](https://docs.google.com/document/d/1aitSOucL0VHZa9Z2vbRJSyAIsAz24kX8LFByQ5xQnUg/edit#heading=h.p8sox77u21on)
	- [Isolate, Context, World](https://docs.google.com/document/d/1aitSOucL0VHZa9Z2vbRJSyAIsAz24kX8LFByQ5xQnUg/edit#heading=h.nedd4zrjusm3)
	- [V8 APIs](https://docs.google.com/document/d/1aitSOucL0VHZa9Z2vbRJSyAIsAz24kX8LFByQ5xQnUg/edit#heading=h.kowfqbhswumh)
	- [V8 wrappers](https://docs.google.com/document/d/1aitSOucL0VHZa9Z2vbRJSyAIsAz24kX8LFByQ5xQnUg/edit#heading=h.qibp4i5il0vz)
- [Rendering pipeline](https://docs.google.com/document/d/1aitSOucL0VHZa9Z2vbRJSyAIsAz24kX8LFByQ5xQnUg/edit#heading=h.5bi68m3d1uqo)
- [Questions?](https://docs.google.com/document/d/1aitSOucL0VHZa9Z2vbRJSyAIsAz24kX8LFByQ5xQnUg/edit#heading=h.jgznn45351w4)


### Related Topics



## Intro
> 🔗 https://docs.google.com/document/d/1aitSOucL0VHZa9Z2vbRJSyAIsAz24kX8LFByQ5xQnUg/edit?tab=t.0

[Blink](https://www.chromium.org/blink) is a rendering engine of the web platform. Roughly speaking, Blink implements everything that renders content inside a browser tab:
- Implement the specs of the web platform (e.g., [HTML standard](https://html.spec.whatwg.org/multipage/?)), including DOM, CSS and Web IDL
- Embed V8 and run JavaScript
- Request resources from the underlying network stack
- Build DOM trees
- Calculate style and layout
- Embed [Chrome Compositor](https://chromium.googlesource.com/chromium/src/+/HEAD/cc/README.md) and draw graphics
Blink is embedded by many customers such as Chromium, Android WebView and Opera via [content public APIs](https://chromium.googlesource.com/chromium/src/+/HEAD/content/public/README.md).

![](../../../../../../Assets/Pics/Pasted%20image%2020250319211049.png)


From the code base perspective, "Blink" normally means `//third_party/blink/`. From the project perspective, "Blink" normally means projects that implement web platform features. Code that implements web platform features span `//third_party/blink/`, `//content/renderer/`, `//content/browser/ `and other places.



## Ref
