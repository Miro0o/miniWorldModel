# DOM (Document Object Model)

[TOC]



## Res


## Intro
The Document Object Model (DOM) is a cross-platform, **language-independent convention** for representing and interacting with objects in HTML, XHTML and XML documents. Objects in the **DOM tree** may be addressed and manipulated by using methods on the objects. The [W3C](https://developer.mozilla.org/en-US/docs/Glossary/W3C) standardizes the Core Document Object Model, which defines language-agnostic interfaces that abstract HTML and XML documents as objects, and also defines mechanisms to manipulate this abstraction. Among the things defined by the DOM, we can find:

- The document structure, a tree model, and the DOM Event architecture in [DOM core](https://dom.spec.whatwg.org/): [`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node), [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element), [`DocumentFragment`](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment), [`Document`](https://developer.mozilla.org/en-US/docs/Web/API/Document), [`DOMImplementation`](https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation), [`Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event), [`EventTarget`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget), …
- A less rigorous definition of the DOM Event Architecture, as well as specific events in [DOM events](https://w3c.github.io/uievents/).
- Other things such as [DOM Traversal](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html) and [DOM Range](https://dom.spec.whatwg.org/#ranges).

From the ECMAScript point of view, objects defined in the DOM specification are called "host objects".



## HTML DOM
[HTML](https://html.spec.whatwg.org/multipage/), the Web's markup language, is specified in terms of the DOM. Layered above the abstract concepts defined in DOM Core, HTML also defines the _meaning_ of elements. The HTML DOM includes such things as the `className` property on HTML elements, or APIs such as [`document.body`](https://developer.mozilla.org/en-US/docs/Web/API/Document/body).

The HTML specification also defines restrictions on documents; for example, it requires all children of a [`<ul>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul) element, which represents an unordered list, to be [`<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li) elements, as those represent list items. In general, it also forbids using elements and attributes that aren't defined in a standard.

Looking for the [`Document`](https://developer.mozilla.org/en-US/docs/Web/API/Document) object, [`Window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) object, and the other DOM elements? Read the [DOM documentation](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model).



## Ref
[👍 JavaScript technologies overview]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/JavaScript_technologies_overview
