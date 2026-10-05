# Computer Graphics (CG)

[TOC]



## Res
### Related Topics
↗ [GPU (Graphics Processing Unit)](../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/🚦%20Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part)/📌%20Microprocessor%20&%20Microprocessors%20Unit%20(MPU)/Accelerators%20(Coprocessors)/GPU%20(Graphics%20Processing%20Unit)/GPU%20(Graphics%20Processing%20Unit).md)

↗ [Computer Graphics Programming](../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🎨%20Computer%20Graphics%20Programming/Computer%20Graphics%20Programming.md)
↗ [Graphic Games Engine](../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🎨%20Computer%20Graphics%20Programming/Digital%20&%20Video%20Games%20Development/Graphic%20Games%20Engine/Graphic%20Games%20Engine.md)

↗ [Media Processing & GUI SDK](../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/🚠%20Application%20Runtimes%20&%20SDKs/🧩%20Media%20Processing%20&%20GUI%20SDK/Media%20Processing%20&%20GUI%20SDK.md)
↗ [Graphics Rendering Frameworks (2D & 3D)](../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/🚠%20Application%20Runtimes%20&%20SDKs/🧩%20Media%20Processing%20&%20GUI%20SDK/🖼️%20Graphics%20Rendering%20Frameworks%20(2D%20&%203D)/Graphics%20Rendering%20Frameworks%20(2D%20&%203D).md)

↗ [Graphics Formats & Standards](../../🔑%20CS%20Core/🧙‍♂️%20Algorithm%20&%20Data%20Structure/Other%20Topics%20in%20Algorithms/Data%20Compression%20Technologies/Media%20Formats%20&%20Standards%20&%20Codec%20(Coder-Decoder)/Graphics%20Formats%20&%20Standards/Graphics%20Formats%20&%20Standards.md)

↗ [Electronic Games](../../🔑%20CS%20Core/Generic%20Software%20Tools%20&%20Projects/🕹️%20Electronic%20Games/Electronic%20Games.md)
↗ [Digital & Video Games Development](../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🎨%20Computer%20Graphics%20Programming/Digital%20&%20Video%20Games%20Development/Digital%20&%20Video%20Games%20Development.md)

↗ [Computer Vision (CV)](../👽%20Artificial%20Intelligence/Computer%20Vision%20(CV)/Computer%20Vision%20(CV).md)


### Other Resources



## Intro
> [!TIP]
> Computer Graphics (CG: generating graphics
> ↗ [Computer Vision (CV)](../👽%20Artificial%20Intelligence/Computer%20Vision%20(CV)/Computer%20Vision%20(CV).md): understanding graphics

> 🔗 https://en.wikipedia.org/wiki/Computer_graphics

**Computer graphics** (**CG**) deals with generating [images](https://en.wikipedia.org/wiki/Image "Image") and art with the aid of [computers](https://en.wikipedia.org/wiki/Computers "Computers"). Computer graphics is a core technology in digital photography, film, video games, digital art, cell phone and computer displays, and many specialized applications. A great deal of specialized hardware and software has been developed, with the displays of most devices being driven by [computer graphics hardware](https://en.wikipedia.org/wiki/Graphics_hardware "Graphics hardware"). It is a vast and recently developed area of computer science. The phrase was coined in 1960 by computer graphics researchers Verne Hudson and [William Fetter](https://en.wikipedia.org/wiki/William_Fetter "William Fetter") of Boeing. It is often abbreviated as CG, or typically in the context of film as [computer generated imagery](https://en.wikipedia.org/wiki/Computer-generated_imagery "Computer-generated imagery") (CGI). The non-artistic aspects of computer graphics are the subject of [computer science](https://en.wikipedia.org/wiki/Computer_graphics_\(computer_science\) "Computer graphics (computer science)") research.

Computer graphics is responsible for displaying art and image data effectively and meaningfully to the consumer. It is also used for processing image data received from the physical world, such as photo and video content. Computer graphics development has had a significant impact on many types of media and has revolutionized [animation](https://en.wikipedia.org/wiki/Animation "Animation"), [movies](https://en.wikipedia.org/wiki/Film "Film"), [advertising](https://en.wikipedia.org/wiki/Advertising "Advertising"), and [video games](https://en.wikipedia.org/wiki/Video_game "Video game") in general.

**Overview**
The term computer graphics has been used in a broad sense to describe "almost everything on computers that is not text or sound". Typically, the term _computer graphics_ refers to several different things:
- the representation and manipulation of image data by a computer
- the various [technologies](https://en.wikipedia.org/wiki/Technologies "Technologies") used to create and manipulate images
- methods for digitally synthesizing and manipulating visual content, see [study of computer graphics](https://en.wikipedia.org/wiki/Computer_graphics_\(computer_science\) "Computer graphics (computer science)")

Today, computer graphics is widespread. Such imagery is found in and on television, newspapers, weather reports, and in a variety of medical investigations and surgical procedures. A well-constructed [graph](https://en.wikipedia.org/wiki/Chart "Chart") can present complex statistics in a form that is easier to understand and interpret. In the media "such graphs are used to illustrate papers, reports, theses", and other presentation material.

Many tools have been developed to visualize data. Computer-generated imagery can be categorized into several different types: two dimensional (2D), three dimensional (3D), and animated graphics. As technology has improved, [3D computer graphics](https://en.wikipedia.org/wiki/3D_computer_graphics "3D computer graphics") have become more common, but [2D computer graphics](https://en.wikipedia.org/wiki/2D_computer_graphics "2D computer graphics") are still widely used. Computer graphics has emerged as a sub-field of [computer science](https://en.wikipedia.org/wiki/Computer_science "Computer science") which studies methods for digitally synthesizing and manipulating visual content. Over the past decade, other specialized fields have been developed like [information visualization](https://en.wikipedia.org/wiki/Information_visualization "Information visualization"), and [scientific visualization](https://en.wikipedia.org/wiki/Scientific_visualization "Scientific visualization") more concerned with "the visualization of [three dimensional](https://en.wikipedia.org/wiki/Three-dimensional_space "Three-dimensional space") phenomena (architectural, meteorological, medical, [biological](https://en.wikipedia.org/wiki/Biological_Data_Visualization "Biological Data Visualization"), etc.), where the emphasis is on realistic renderings of volumes, surfaces, illumination sources, and so forth, perhaps with a dynamic (time) component".


### Computer Graphics Rendering 🤔
↗ [Graphics Rendering Frameworks (2D & 3D)](../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/🚠%20Application%20Runtimes%20&%20SDKs/🧩%20Media%20Processing%20&%20GUI%20SDK/🖼️%20Graphics%20Rendering%20Frameworks%20(2D%20&%203D)/Graphics%20Rendering%20Frameworks%20(2D%20&%203D).md)

↗ [Computer Graphics Programming](../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🎨%20Computer%20Graphics%20Programming/Computer%20Graphics%20Programming.md) ⭐
↗ [Graphic Games Engine](../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🎨%20Computer%20Graphics%20Programming/Digital%20&%20Video%20Games%20Development/Graphic%20Games%20Engine/Graphic%20Games%20Engine.md)



## Ref
[🎬【老奇】阴差阳错 撼动世界的游戏引擎]: https://www.bilibili.com/video/BV1Hk4y1q7Rz/?share_source=copy_web

[计算机图形学快速理解：齐次坐标 - Miolith]: https://www.bilibili.com/video/BV1vi421Y7nP/?share_source=copy_webz
