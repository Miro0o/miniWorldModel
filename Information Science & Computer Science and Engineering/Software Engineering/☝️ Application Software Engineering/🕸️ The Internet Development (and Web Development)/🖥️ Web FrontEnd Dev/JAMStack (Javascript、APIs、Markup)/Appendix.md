# Jamsstack 介绍

[TOC]



## Jamstack是什么？

Jamstack 指的是一套用于**构建现代网站的技术栈**，可能过去的一些文章通常会把它们理解为 **J**avaScript、**A**PIs、**M**arkup，但其实现在这个概念已经被扩大了，Jamstack 的官网上将它的核心概念归纳为 **Pre-rendering**、**Enhancing with JavaScript**、**Supercharging with services**。

> [For fast and secure sites | Jamstackjamstack.org/](https://link.zhihu.com/?target=https%3A//jamstack.org/)

当然掉书袋没什么意思，用人话来解释的话，当下绝大多数 Jamstack 网站，都是这样的技术栈：

### 1. 使用网站生成器预渲染整个网站

整个网站在部署前，会被**网站生成器（SSG, Static Site Generators）**构建和优化为一系列的静态页面和静态资源，这样整个网站可以被托管在 CDN 上，加载速度得到最大程度地优化，安全性也得到保障。

这里的网站生成器包括但不限于：[Gatsby](https://link.zhihu.com/?target=https%3A//github.com/gatsbyjs/gatsby)、[Hugo](https://link.zhihu.com/?target=https%3A//gohugo.io/)、[Jekyll](https://link.zhihu.com/?target=https%3A//jekyllrb.com/)、[Eleventy](https://link.zhihu.com/?target=https%3A//github.com/11ty/eleventy)、[NextJS](https://link.zhihu.com/?target=https%3A//nextjs.org/)……

![img](../../../../../../Assets/Pics/v2-9fcb49402c7d59db87dfc0d8ef4eb900_1440w.jpg)

### 2. 使用 Headless CMS（无头 CMS）管理动态内容

如果想要网站承载动态内容，那么可以接入各种 Headless CMS（无头 CMS），这些 CMS 系统会对外提供 API，网站生成器可以调用这些 API 拉取数据，**将动态数据渲染成为静态页面**。

这里的无头 CMS 包括但不限于：[Ghost](https://link.zhihu.com/?target=https%3A//github.com/TryGhost/Ghost)、[Strapi](https://link.zhihu.com/?target=https%3A//github.com/strapi/strapi)、[Netlify-CMS](https://link.zhihu.com/?target=https%3A//github.com/netlify/netlify-cms)、[TinaCMS](https://link.zhihu.com/?target=https%3A//github.com/tinacms/tinacms)……

![img](../../../../../../Assets/Pics/v2-074202b1d2ad92e46edcc85cd7b73683_1440w.jpg)

### 3. 使用 HTTP API 增强网站的功能

在登录注册、评论框等需要后端支持的能力上，Jamstack 网站通常会使用微服务提供的 HTTP API，或者一些第三方的 BaaS（后端即服务）能力。

除了以上三个主要特点以外，Jamstack 的网站通常还会有下面的特性：

- 全站托管于 CDN 上
- 原子化发布（每次发布都是一次全量、原子性的发布）
- 灵活的文件缓存策略
- 基于 Git 的全自动构建、部署流程



## Jamstack有什么优势？

### 1. 相比于纯静态网站

纯静态的网站很难承载动态的内容，内容改动通常都是要直接修改页面的代码，这**对于内容管理人员（很可能是非技术人员）来说非常不友好**。

而 Jamstack 的网站，通常会使用无头 CMS 来将内容管理抽离出去，内容管理人员可以直接在这些 CMS 系统的 UI 界面上进行内容修改，然后触发整个网站的重新预渲染，以及部署。

### 2. 相比于传统动态网站

这里的“传统动态网站”指的是用 PHP、Ruby On Rails、JSP 甚至更古老的 CGI 构建的网站，以及基于这些技术产生的建站工具比如 WordPress、Drupal 等等。

这些传统网站的劣势在于，它们在运行时都需要一个实时在线的服务端，这些服务端负责处理请求、渲染页面，这就很大程度上降低了**服务的可伸缩性和稳定性**（想象一下，你迁移扩容一个在线的 WordPress 网站有多么麻烦）。

Jamstack 由于是直接使用 CDN 分发静态的页面，完全不需要渲染页面的服务，网站的伸缩性、稳定性可以得到最大的保障。

### 3. 相比于单页应用（SPA）

大概五年前，随着各种前端框架的成熟，越来越多的业务逻辑迁移到了前端处理，这也就诞生了 SPA 的概念，也就是整个网站的 UI 层，由浏览器端来完全接管。得益于 HTML5 和现代浏览器的一系列特性，这样的做法可以保证最好的用户体验。

但是 SPA 最大的问题在于它**对 SEO 不友好**，因为 SPA 的页面内容都是靠浏览器异步获取、渲染的，虽然 Google 为首的大多数搜索引擎渐渐地支持爬取 SPA 的内容，但是这依然是一个隐患。另外，由于 SPA 需要异步加载数据，首屏内容需要在在加载、运行 JS 之后才能看到，也给用户打开网站的体验带来影响。

而 Jamstack 的页面本质上都是托管在 CDN 上的静态页面，搜索引擎可以直接爬取这些静态内容，首屏与静态网站一样，可以直接展示内容，而不需要等到加载运行 JS 之后。

### 4. 相比于 SSR 应用

目前市面上的几大前端框架都支持了服务器端渲染，也就是 SSR 的概念，这些 SSR 技术也成为了 Jamstack 的基础之一。但是典型的 SSR 应用和传统动态网站一样，都是需要一个在线的服务来渲染页面，同样**会有运维和安全性上的风险**。

Jamstack 从技术角度上讲，可以认为是 SSR 技术的进阶，也就是提前用 SSR 预渲染大部分页面，然后将这些页面部署在 CDN 上，随后根据网站的数据变化，重复预渲染、部署即可。

| 特性            | Jamstack | 纯静态网站 | 传统动态网站 | 单页应用（SPA） | SSR应用 |
| --------------- | -------- | ---------- | ------------ | --------------- | ------- |
| 使用CDN全站加速 | ✅        | ✅          | ❌            | ✅               |         |
| 方便的内容管理  | ✅        | ❌          | ✅            | ✅               | ✅       |
| SEO友好         | ✅        | ✅          | ✅            | ❌               | ✅       |
| 首屏渲染速度    | ✅        | ✅          | ❌            | ❌               | ✅       |
| 不需要在线服务  | ✅        | ✅          | ❌            | ✅               | ❌       |
| 安全性          | ✅        | ✅          |              | ✅               |         |

当然，Jamstack 也不是万金油，不可能完美适应所有场景，Jamstack 最适合一些**内容更新不太频繁的网站**（比如新闻、电商、文档）。它不适合 Feeds 流、聊天室、论坛、个性化推荐这样高度动态化的网站，以及邮箱、编辑器这样偏重型的 Web 应用。

## Jamstack的商业价值

在国外的电商行业，Headless Commerce（无头电商）是一个非常火的概念。

所谓的无头电商，就是把用户端的 UI 展现和整个电商后台服务进行解耦，去除掉了 UI 层，也就是“头”，毕竟每个公司都不想自己的网站、购买体验和别人一样。

![img](../../../../../../Assets/Pics/v2-f9fceb792e467569442afb113ffaf552_1440w.webp)

无头电商只对外暴露一系列的 API，让客户公司可以使用这些 API 构建自己的电商网站。举一些具体的例子，比如 Salesforce 正在推行的 [Open Commerce API](https://link.zhihu.com/?target=https%3A//www.salesforce.com/video/2520463/)，逐渐成为现在电商开放 API 的标准。换句话说，这个做法很类似现在国内很多公司在推行的**“中台化”**、**“大中台小前台”**的概念。

所以这和 Jamstack 有什么关系呢？

你会发现，Jamstack 推行的这一套技术栈，包括**预渲染动态数据的静态页面**、**无头 CMS**、**微服务 HTTP API**，几乎和无头电商的理念完全一致，或者说，无头电商就是 Jamstack 一个最贴切的应用场景。

在前段时间 Vercel 举办的 [Next.js Conf](https://link.zhihu.com/?target=https%3A//nextjs.org/conf/expo) 上，主要赞助商除了 AWS、Github、Firebase 这样的云平台以外，大部分都是适用于 Jamstack 的第三方 API 提供方、或者一些无头 CMS，这也从侧面体现了 Jamstack 目前在国外的生态繁荣。

![img](../../../../../../Assets/Pics/v2-e87cbf37634b2b5de748195b08e56a9a_1440w.webp)

但是在国内市场上，或许不那么乐观：国内 Web 网站本身就处于一个很尴尬的状态，各大公司的主要业务都是**以移动端 App 为主要入口，Web 网站缺少流量来源**，或许只有一些特性类型的业务（比如新闻、电商网站）需要 Web 站点；电商市场方面，国内大部分中小型公司都处于**严重缺乏信息化**的状态，更多依赖于阿里、京东这样的大平台方提供的基础系统，还远远没有自建整套流程的需求，无头电商也就无从谈起。

## 尾声

从技术角度上讲，Jamstack 本质是一种**增强的静态网站**，它的出现很大程度上得益于各大云厂商提供的云上能力，包括更容易管控的 CDN/DNS、Serverless Function、DevOps 工具等等。

随着国内相关云计算基础设施的成熟，Jamstack 在国内几家云平台的支持程度也会慢慢提高，我们完全可以期待未来 Jamstack 部分替代传统的 WordPress 等建站工具，变成新一代的建站技术栈。