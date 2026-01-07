# Graphic Games Engine

[TOC]



## Res
### Related Topics



## Intro
> 🔗 https://en.wikipedia.org/wiki/Game_engine

A game engine is a software framework primarily designed for the development of video games which generally includes relevant libraries and support programs such as a level editor. The "engine" terminology is akin to the term "software engine" used more widely in the software industry.

Game engine can also refer to the development software supporting this framework, typically a suite of tools and features for developing games.

Developers can use game engines to construct games for video game consoles and other types of computers. The core functionality typically provided by a game engine may include a **rendering engine** ("renderer") for 2D or 3D graphics, a **physics engine** or collision detection (and collision response), sound, scripting, animation, artificial intelligence, networking, streaming, memory management, threading, localization support, scene graph, and video support for cinematics. Game engine implementers often economize on the process of game development by reusing/adapting, in large part, the same game engine to produce different games or to aid in porting games to multiple platforms.

> 🔗 https://en.wikipedia.org/wiki/List_of_game_engines

![](../../../../../../Assets/Pics/Screenshot%202025-03-21%20at%2016.36.29.png)

> 🔗 https://en.wikipedia.org/wiki/List_of_video_game_middleware



## Ref
[Sketchpad: A man-machine graphical communication system]: https://www.cl.cam.ac.uk/techreports/UCAM-CL-TR-574.pdf

[🎬【老奇】阴差阳错 撼动世界的游戏引擎]: https://www.bilibili.com/video/BV1Hk4y1q7Rz/?share_source=copy_web
一、计算机生成的逼真画面技术，以及其中涉及到的全局光照技术和渲染方程，这些技术的发展历程和重要性。
- 00:28 - 游戏引擎是程序组件，可以基于他们开发游戏
- 01:32 - 鲁门的技术方案在U15中实现逼真画质
	- Gouraud Shading
	- Texture Mapping
- 05:33 - 卡基亚的论文引入辐射度，开辟图形学新方向

从人为假设物体材质来确定反射，到提出辐射度（量化光的物理信息），并基于辐射度来模拟反射。在渲染方程中使用BEDF函数来将所有的材质的反射效果进行统一描述。

![](../../../../../../Assets/Pics/Screenshot%202025-03-21%20at%2020.28.48.png)

二、光线追踪技术在全局光照中的应用，以及其在渲染方程中的实现难度和性能限制。同时，视频也提到了实时全局光照的重要性。
- 06:32 - BRDF双向反射分布函数代表光线反弹后衰减多少
- 07:57 - 场景反弹过来的光线确定需要追溯入射光，形成反射方程
- 09:47 - 实时全局光照需要实现无限次反弹，光线追踪是典型代表 

![](../../../../../../Assets/Pics/Screenshot%202025-03-21%20at%2020.22.40.png)

反射方程
![](../../../../../../Assets/Pics/Screenshot%202025-03-21%20at%2020.12.27.png)

渲染方程
![](../../../../../../Assets/Pics/Screenshot%202025-03-21%20at%2020.13.35.png)
![](../../../../../../Assets/Pics/Screenshot%202025-03-21%20at%2020.24.02.png)
![](../../../../../../Assets/Pics/Screenshot%202025-03-21%20at%2020.14.27.png)


三、实时全局光照技术的难点和解决方案，包括距离场和表面缓存的概念，以及光线追踪和间接光的区别和实现方法。 
- 13:04 - 实时全局光照的困难，需要在有限时间内完成天文数字般的计算 
- 13:48 - LM实现了光线的无限次反弹，需要存储距离场数据
- 17:01 - 通过图形学大佬的帮助，理解了无限次反弹的可能性 

步进和距离场，lumen用来求解直接光照
![](../../../../../../Assets/Pics/Screenshot%202025-03-21%20at%2020.06.58.png)

![](../../../../../../Assets/Pics/Screenshot%202025-03-21%20at%2020.04.19.png)

四、光线追踪和全局光照技术的原理和应用，以及 Lumen 的实现思路和复杂的细节优化，展示了工程师在性能和效果之间的取舍。
- 19:36 - LM使用全局光照技术解决间接光问题
- 21:17 - 通过求解方程组实现无限次反弹的间接光
- 24:28 - Lumen通过复用光照和迭代计算提高渲染准确性 

辐射度算法求解面元上的光的无限反弹
![](../../../../../../Assets/Pics/Screenshot%202025-03-21%20at%2020.01.02.png)

![](../../../../../../Assets/Pics/Screenshot%202025-03-21%20at%2019.58.11.png)

复用连续帧之间的面元光照
![](../../../../../../Assets/Pics/Screenshot%202025-03-21%20at%2019.57.20.png)

lumen算法的大致总览
![](../../../../../../Assets/Pics/Screenshot%202025-03-21%20at%2017.50.06.png)

五、游戏引擎在游戏、影视、动画、建筑和汽车等领域的应用，以及国产游戏引擎的崛起和发展前景。同时也强调了图形学技术的挑战和发展方向。 
- 26:09 - 游戏引擎不仅仅是渲染，还包括物理音效和人工智能等底层组件
- 27:14 - 游戏引擎推动GPU问世，对芯片产业的科技贡献率高达14.9% 
- 28:36 - 中国专利申请数量呈爆发式增长，国产游戏崛起有望实现

[🎬 万字解析：今天的游戏技术究竟发展到了什么程度？]: https://www.bilibili.com/video/BV1HB4y1W7pC/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
