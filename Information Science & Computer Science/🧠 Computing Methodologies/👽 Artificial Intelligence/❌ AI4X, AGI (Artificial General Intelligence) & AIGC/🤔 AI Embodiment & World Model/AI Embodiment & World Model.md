# AI Embodiment & World Model

[TOC]



## Res
### Related Topics
↗ [LLM Agents, AI Workflow, & Agentic MLLM](../../⚜️%20Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/🚮%20LLM%20Applications%20&%20LLM-Driven%20Automation/🫣%20LLM%20Agents,%20AI%20Workflow,%20&%20Agentic%20MLLM/LLM%20Agents,%20AI%20Workflow,%20&%20Agentic%20MLLM.md)
↗ [AIGC WorkFlow & Agents](../🌀%20AIGC%20WorkFlow%20&%20Agents/AIGC%20WorkFlow%20&%20Agents.md)

↗ [LLM (Large Language Model)](../../⚜️%20Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🦑%20LLM%20(Large%20Language%20Model)/LLM%20(Large%20Language%20Model).md)
↗ [Multimodal AI & MLLM](../../⚜️%20Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🐝%20Multimodal%20AI%20&%20MLLM/Multimodal%20AI%20&%20MLLM.md)
- ↗ [Video Generation & VLM (Video Language Model)](../../⚜️%20Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🐝%20Multimodal%20AI%20&%20MLLM/Video%20Generation%20&%20VLM%20(Video%20Language%20Model)/Video%20Generation%20&%20VLM%20(Video%20Language%20Model).md)


### List of World Models
https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/
Genie 3: A new frontier for world models
Jack Parker-Holder and Shlomi Fruchter


### Other Resources
🚧 https://github.com/TianxingChen/Embodied-AI-Guide
Embodied AI（具身智能）入门的路径以及高质量信息的总结, 期望是按照路线走完后, 新手可以快速建立关于这个领域的认知, 希望能帮助到各位入门具身智能的朋友, 欢迎点Star、分享与提PR🌟~
- 具身智能基础技术路线-YunlongDong [2]: [PDF](https://github.com/TianxingChen/Embodied-AI-Guide/blob/main/files/%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD%E5%9F%BA%E7%A1%80%E6%8A%80%E6%9C%AF%E8%B7%AF%E7%BA%BF-YunlongDong.pdf), [bilibili](https://www.bilibili.com/video/BV1d5ukedEsi)
- 社交媒体:
    - 可以关注的公众号: **石麻日记 (超高质量!!!)**, 机器之心, 新智元, 量子位, Xbot具身知识库, 具身智能之心, 自动驾驶之心, 3D视觉工坊, 将门创投, RLCN强化学习研究, CVHub
    - AI领域值得关注的博主列表 [3]: [zhihu](https://zhuanlan.zhihu.com/p/682110383)
- Robotics实验室总结 [4]: [zhihu_1](https://zhuanlan.zhihu.com/p/682671294?utm_psn=1782122763157188608), [zhihu_2](https://zhuanlan.zhihu.com/p/682692024?utm_psn=1782122945184796672)
- 具身智能会投稿的较高质量会议与期刊：Science Robotics, TRO, IJRR, JFR, RSS, IROS, ICRA, ICCV, ECCV, ICML, CVPR, NeurIPS, ICLR, AAAI, ACL等。
- 斯坦福机器人学导论：[website](https://www.bilibili.com/video/BV17T421k78T)
- 共建全网最全具身智能知识库 [6]: [website](https://yv6uc1awtjc.feishu.cn/wiki/WPTzw9ON0ivIVrkLjVocNZh8nLf)
- Awesome-Embodied-AI-Job (具身智能招贤榜): [Repo](https://github.com/StarCycle/Awesome-Embodied-AI-Job/tree/main)
- 具身智能华人高引榜: [Repo](https://github.com/Will-Gao/Embodied_Intelligence)
- 社区:
    - Lumina具身智能社区: [website](https://lumina-embodied.ai/)
    - DeepTimber Robotics Innovations Community, 深木科研交流社区: [website](https://gamma.app/public/DeepTimber-Robotics-Innovations-Community-A-Community-for-Multi-m-og0uv8mswl1a3q7?mode=doc)
    - 宇树具身智能社群: [website](https://www.unifolm.com/#/)
    - Simulately: Handy information and resources for physics simulators for robot learning research: [website](https://simulately.wiki/)
    - DeepTimber-地瓜机器人社区: [website](https://developer.d-robotics.cc/forumList?id=156&title=Deeptimber)
    - HuggingFace LeRobot (Europe, check the Discord): [website](https://github.com/huggingface/lerobot)
    - K-scale labs (US, check the Discord): [website](https://kscale.dev/)

https://www.worldlabs.ai/

https://lumalabs.ai/genie?view=create

https://github.com/Tencent-Hunyuan/HunyuanWorld-Voyager
We introduce HunyuanWorld-Voyager, a novel video diffusion framework that generates world-consistent 3D point-cloud sequences from a single image with user-defined camera path. Voyager can generate 3D-consistent scene videos for world exploration following custom camera trajectories. It can also generate aligned depth and RGB video for efficient and direct 3D reconstruction.



## Intro
![AI-Layer.excalidraw | 800](../../../../../Assets/Illustrations/AI%20&%20LLM/AI-Layer.excalidraw)



## Ref
[Generating Biger and Better Worlds | World Lab]: https://www.worldlabs.ai/blog/bigger-better-worlds
- Today we're sharing an update on our quest to push the frontier of spatial intelligence and generate persistent, navigable, and controllable 3D worlds. We are also introducing Marble, a limited access beta preview of our model today at [marble.worldlabs.ai](https://marble.worldlabs.ai/), where users can view and create 3D worlds.
- Given an image or text prompt, our model generates a 3D world that you can explore for as long as you wish — no time limits, no morphing, no inconsistency. Compared to our [previous results](https://www.worldlabs.ai/blog/generating-worlds), our generated worlds are bigger, more stylistically diverse, and have cleaner 3D geometry.
- Marble makes our model available for users to start viewing and building worlds today. Enthusiasts and builders can export generated worlds as Gaussian splats and use them in downstream projects. This is particularly easy to do with our open-source rendering library [Spark](https://sparkjs.dev/) which seamlessly integrates Gaussian splats into Three.js for building web-based 3D experiences, and renders efficiently on desktops, laptops, mobile devices, and VR headsets.
- Our model's consistency and style adherence now make it possible to build out large worlds by composing individual generations, as shown in the banner video above and the examples at the end of this post.

[Genie 3: A new frontier for world models 5 August 2025 Jack Parker-Holder and Shlomi Fruchter]: https://deepmind.google/discover/blog/genie-3-a-new-frontier-for-world-models/
