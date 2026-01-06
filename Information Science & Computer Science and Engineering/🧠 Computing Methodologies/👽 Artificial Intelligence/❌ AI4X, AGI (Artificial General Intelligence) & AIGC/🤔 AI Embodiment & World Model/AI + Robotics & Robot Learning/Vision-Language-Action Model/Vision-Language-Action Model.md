# Vision-Language-Action Model

[TOC]



## Res
### Related Topics
↗ [Multimodal AI & MLLM](../../../../Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🐝%20Multimodal%20AI%20&%20MLLM/Multimodal%20AI%20&%20MLLM.md)
- ↗ [Image, Video, Vision, & VLM (Vision Language Model)](../../../../Natural%20Language%20Processing%20(NLP)%20&%20Computational%20Linguistics/🐝%20Multimodal%20AI%20&%20MLLM/Image,%20Video,%20Vision,%20&%20VLM%20(Vision%20Language%20Model)/Image,%20Video,%20Vision,%20&%20VLM%20(Vision%20Language%20Model).md)


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Vision-language-action_model

In [robot learning](https://en.wikipedia.org/wiki/Robot_learning "Robot learning"), a **vision-language-action model** (**VLA**) is a class of [multimodal](https://en.wikipedia.org/wiki/Multimodal_learning "Multimodal learning") [foundation models](https://en.wikipedia.org/wiki/Foundation_model "Foundation model") that integrates [vision](https://en.wikipedia.org/wiki/Computer_vision "Computer vision"), [language](https://en.wikipedia.org/wiki/Natural_language "Natural language") and actions. Given an input image (or video) of the robot's surroundings and a text instruction, a VLA directly outputs low-level robot actions that can be executed to accomplish the requested task.

VLAs are generally constructed by [fine-tuning](https://en.wikipedia.org/wiki/Fine-tuning_\(deep_learning\) "Fine-tuning (deep learning)") a [vision-language model](https://en.wikipedia.org/wiki/Vision-language_model "Vision-language model") (VLM), i.e. a [large language model](https://en.wikipedia.org/wiki/Large_language_model "Large language model") extended with [vision](https://en.wikipedia.org/wiki/Computer_vision "Computer vision") capabilities) on a large-scale dataset that pairs visual observation and language instructions with robot trajectories. These models combine a vision-language encoder ([vision transformer](https://en.wikipedia.org/wiki/Vision_transformer "Vision transformer")), which translates an image observation and a [natural language](https://en.wikipedia.org/wiki/Natural_language "Natural language") description into a distribution within a [latent space](https://en.wikipedia.org/wiki/Latent_space "Latent space"), with an action decoder that transforms this representation into continuous output actions, directly executable on the robot.[[3]](https://en.wikipedia.org/wiki/Vision-language-action_model#cite_note-3)

The concept was pioneered in July 2023 by [Google DeepMind](https://en.wikipedia.org/wiki/Google_DeepMind "Google DeepMind") with RT-2, a VLM adapted for end-to-end manipulation tasks, capable of unifying [perception](https://en.wikipedia.org/wiki/Machine_perception "Machine perception"), [reasoning](https://en.wikipedia.org/wiki/Reasoning_language_model "Reasoning language model") and [control](https://en.wikipedia.org/wiki/Robot_control "Robot control").



## Ref
