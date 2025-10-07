# DOM (Document Object Model)

[TOC]



## Res
📂 https://dom.spec.whatwg.org/ (specifications)
📂 https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model (DOM Guide, MDN)


### Related Topics
↗ [HTML (HyperText Markup Language)](../Markup%20Languages/HTML%20(HyperText%20Markup%20Language).md)
↗ [Web FrontEnd Dev](../../../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20Web%20Development%20&%20The%20Internet/🖥️%20Web%20FrontEnd%20Dev/Web%20FrontEnd%20Dev.md)



## Intro
The Document Object Model (DOM) is a cross-platform, **language-independent convention** for representing and interacting with objects in ↗ [HTML (HyperText Markup Language)](../Markup%20Languages/HTML%20(HyperText%20Markup%20Language).md), XHTML and ↗ [XML (Extensible Markup Language)](../Markup%20Languages/XML%20(Extensible%20Markup%20Language).md) documents. Objects in the **DOM tree** may be addressed and manipulated by using **methods** on the objects. The [W3C](https://developer.mozilla.org/en-US/docs/Glossary/W3C) standardizes the Core Document Object Model (in [HTML Standard](https://html.spec.whatwg.org/)), which defines language-agnostic interfaces that abstract HTML and XML documents as objects, and also defines mechanisms to manipulate this abstraction. Among the things defined by the DOM, we can find:
- The document structure, a tree model, and the DOM Event architecture in [DOM core](https://dom.spec.whatwg.org/): [`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node), [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element), [`DocumentFragment`](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment), [`Document`](https://developer.mozilla.org/en-US/docs/Web/API/Document), [`DOMImplementation`](https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation), [`Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event), [`EventTarget`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget), …
- A less rigorous definition of the DOM Event Architecture, as well as specific events in [DOM events](https://w3c.github.io/uievents/).
- Other things such as [DOM Traversal](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html) and [DOM Range](https://dom.spec.whatwg.org/#ranges).

 > From the ECMAScript point of view, objects defined in the DOM specification are called "host objects".


---
> 🔗 https://en.wikipedia.org/wiki/Document_Object_Model

The DOM represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects. DOM methods allow programmatic access to the tree; with them one can change the structure, style or content of a document.[2] Nodes can have event handlers (also known as event listeners) attached to them. Once an event is triggered, the event handlers get executed.[3]

The principal standardization of the DOM was handled by the World Wide Web Consortium (W3C), which last developed a recommendation in 2004. WHATWG took over the development of the standard, publishing it as a living document. The W3C now publishes stable snapshots of the WHATWG standard.

![|400](../../../../../../Assets/Pics/Pasted%20image%2020250417133514.png)

----
> 🔗 https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

A web page is a document that can be either displayed in the browser window or as the HTML source. In both cases, it is the same document but the Document Object Model (DOM) representation allows it to be manipulated. As an object-oriented representation of the web page, it can be modified with a scripting language such as JavaScript.

For example, the DOM specifies that the `querySelectorAll` method in this code snippet must return a list of all the [`<p>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/p) elements in the document:

``` js
const paragraphs = document.querySelectorAll("p");
// paragraphs[0] is the first <p> element
// paragraphs[1] is the second <p> element, etc.
alert(paragraphs[0].nodeName);
```

All of the properties, methods, and events available for manipulating and creating web pages are organized into objects. For example, the `document` object that represents the document itself, any `table` objects that implement the [`HTMLTableElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement) DOM interface for accessing HTML tables, and so forth, are all objects.

The DOM is built using multiple APIs that work together. The core [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) defines the entities describing any document and the objects within it. This is expanded upon as needed by other APIs that add new features and capabilities to the DOM. For example, the [HTML DOM API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API) adds support for representing HTML documents to the core DOM, and the SVG API adds support for representing SVG documents.


### DOM & JavaScript
↗ [Web Browser Development](../../../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/Desktop%20&%20Monolithic%20Application%20Development/🤠%20Web%20Browser%20Development/Web%20Browser%20Development.md)

![parsing-model-overview | 300](../../../../../../Assets/Pics/parsing-model-overview.svg)
<small>Overview of the parsing model <a>https://html.spec.whatwg.org/multipage/parsing.html#overview-of-the-parsing-model</a></small>


### DOM Objects & Interfaces
> 🔗 https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

Many objects implement several different interfaces. The table object, for example, implements a specialized [`HTMLTableElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement) interface, which includes such methods as `createCaption` and `insertRow`. But since it's also an HTML element, `table` implements the `Element` interface described in the DOM [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element) Reference chapter. And finally, since an HTML element is also, as far as the DOM is concerned, a node in the tree of nodes that make up the object model for an HTML or XML page, the table object also implements the more basic `Node` interface, from which `Element` derives.

When you get a reference to a `table` object, as in the following example, you routinely use all three of these interfaces interchangeably on the object, perhaps without knowing it.

``` js
const table = document.getElementById("table");
const tableAttrs = table.attributes; // Node/Element interface
for (let i = 0; i < tableAttrs.length; i++) {
  // HTMLTableElement interface: border attribute
  if (tableAttrs[i].nodeName.toLowerCase() === "border") {
    table.border = "1";
  }
}
// HTMLTableElement interface: summary attribute
table.summary = "note: increased border";
```


### DOM Fundamental Data Types
> 🔗 https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction#fundamental_data_types

> **Note:** Because the vast majority of code that uses the DOM revolves around manipulating HTML documents, it's common to refer to the nodes in the DOM as **elements**, although strictly speaking not every node is an element.

The following table briefly describes these data types.

|Data type (Interface)|Description|
|---|---|
|[`Document`](https://developer.mozilla.org/en-US/docs/Web/API/Document)|When a member returns an object of type `document` (e.g., the `ownerDocument` property of an element returns the `document` to which it belongs), this object is the root `document` object itself. The [DOM `document` Reference](https://developer.mozilla.org/en-US/docs/Web/API/Document) chapter describes the `document` object.|
|[`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node)|Every object located within a document is a node of some kind. In an HTML document, an object can be an element node but also a text node or attribute node.|
|[`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element)|The `element` type is based on `node`. It refers to an element or a node of type `element` returned by a member of the DOM API. Rather than saying, for example, that the [`document.createElement()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) method returns an object reference to a `node`, we just say that this method returns the `element` that has just been created in the DOM. `element` objects implement the DOM `Element` interface and also the more basic `Node` interface, both of which are included together in this reference. In an HTML document, elements are further enhanced by the HTML DOM API's [`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) interface as well as other interfaces describing capabilities of specific kinds of elements (for instance, [`HTMLTableElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement) for [`<table>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/table) elements).|
|[`NodeList`](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)|A `nodeList` is an array of elements, like the kind that is returned by the method [`document.querySelectorAll()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll). Items in a `nodeList` are accessed by index in either of two ways:<br><br>- list.item(1)<br>- list[1]<br><br>These two are equivalent. In the first, `item()` is the single method on the `nodeList` object. The latter uses the typical array syntax to fetch the second item in the list.|
|[`Attr`](https://developer.mozilla.org/en-US/docs/Web/API/Attr)|When an `attribute` is returned by a member (e.g., by the `createAttribute()` method), it is an object reference that exposes a special (albeit small) interface for attributes. Attributes are nodes in the DOM just like elements are, though you may rarely use them as such.|
|[`NamedNodeMap`](https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap)|A `namedNodeMap` is like an array, but the items are accessed by name or index, though this latter case is merely a convenience for enumeration, as they are in no particular order in the list. A `namedNodeMap` has an `item()` method for this purpose, and you can also add and remove items from a `namedNodeMap`.|

There are also some common terminology considerations to keep in mind. It's common to refer to any [`Attr`](https://developer.mozilla.org/en-US/docs/Web/API/Attr) node as an `attribute`, for example, and to refer to an array of DOM nodes as a `nodeList`. You'll find these terms and others to be introduced and used throughout the documentation.



## HTML DOM
[HTML](https://html.spec.whatwg.org/multipage/), the Web's markup language, is specified in terms of the DOM. Layered above the abstract concepts defined in DOM Core, HTML also defines the _meaning_ of elements. The HTML DOM includes such things as the `className` property on HTML elements, or APIs such as [`document.body`](https://developer.mozilla.org/en-US/docs/Web/API/Document/body).

The HTML specification also defines restrictions on documents; for example, it requires all children of a [`<ul>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul) element, which represents an unordered list, to be [`<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li) elements, as those represent list items. In general, it also forbids using elements and attributes that aren't defined in a standard.

> 🔗 https://en.wikipedia.org/wiki/Document_Object_Model

In HTML DOM (Document Object Model), every element is a node:
1. A document is a document node.
2. All HTML elements are element nodes.
3. All HTML attributes are attribute nodes.
4. Text inserted into HTML elements are text nodes.
5. Comments are comment nodes



## SVG DOM



## Ref
[👍 JavaScript technologies overview]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/JavaScript_technologies_overview
