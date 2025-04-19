# Deep Learning (Neural Network)

[TOC]



## Res
### Related Topics
↗ [Neural Network Models](🗿%20Neural%20Network%20Models/Neural%20Network%20Models.md)
↗ [LLM (Large Language Model)](../../🔥%20Natural%20Language%20Processing%20(NLP)/🦑%20LLM%20(Large%20Language%20Model)/LLM%20(Large%20Language%20Model).md)


### Learning Resource
>  More on machine learning go to ↗️ [AI Basics & Machine Learning](../AI%20Basics%20&%20Machine%20Learning.md)

---
动手学深度学习, 李沐
🏠 https://zh.d2l.ai/index.html (ZH)
🏠 https://d2l.ai/index.html (EN)

🚧 https://github.com/d2l-ai/d2l-en (EN)
🚧 https://github.com/d2l-ai/d2l-zh (ZH)

👥 https://discuss.d2l.ai/c/chinese-version/16
🎬【跟着李沐【动手学深度学习】课程，大佬亲授全方面解读“花书”，带你从入门到精通（人工智能/深度学习/计算机视觉/图像处理）】 https://www.bilibili.com/video/BV1QP411j7jB/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
- 面向中文读者的能运行、可讨论的深度学习教科书
- 含 PyTorch、NumPy/MXNet、TensorFlow 和 PaddlePaddle 实现
- 被全球 60 多个国家 400 多所大学用于教学

---
🏫 实用机器学习 [CS 329P Practical Machine Learning](../../../../🗺%20CS%20Overview/👩🏼‍🏫%20Courses%20of%20Universities/Stanford/CS%20329P%20Practical%20Machine%20Learning/CS%20329P%20Practical%20Machine%20Learning.md)

---
📖 花书 
https://www.deeplearningbook.org 花书官网  
https://github.com/exacity/deeplearningbook-chinese 花书中文版翻译  
https://github.com/MingchaoZhu/DeepLearning 花书原理推导及代码实现  
https://zhuanlan.zhihu.com/p/38431213 知乎花书各章笔记

🏫 https://cs230.stanford.edu 

🔥 📄 https://arc.net/folder/D0472A20-9C20-4D3F-B145-D2865C0A9FEE
Papers must know to understand the world of deep learning & AIGC

[Practical Deep Learning for Coders](https://course.fast.ai/) course from [fast.ai](https://www.fast.ai/)
This course is extremely practical and oriented in a top-down manner, meaning that you learn how to implement ideas in code and use all the relevant tools first, then dig deeper into the details afterwards to understand how everything works. If you’re new to the space and want to quickly get a working understanding of AI-related tools, how to use them, and how they work, start with these videos.

👍 👍 https://www.byhand.ai/
AI by Hand



## Intro
### Neural Network / Deep Network?
- **Neural Networks**: Slow learning, potentially very powerful, can learn very complex patterns. Can be prone to overfitting due to high density of the parameters.
- **Deep Networks**: Very large complex networks, but made up of many often heterogeneous types of networks that try to simplify the inputs, so that we can use a relatively small dense network to perform final decisions.



## NN Hyperparameters




## Ref
[Deep Learning vs. Machine Learning]: https://dzone.com/articles/deep-learning-vs-machine-learning-the-hottest-topi

[What Is the Necessity of Bias in Neural Networks?]: https://www.turing.com/kb/necessity-of-bias-in-neural-networks#components-in-artificial-neural-networks

Components in artificial neural networks:
1.  **Inputs:** They’re usually represented as features of a dataset which are passed on to a neural network to make predictions.
2.  **Weights:** These are the real values associated with the features. They are significant as they tell the importance of each feature which is passed as an input to the [artificial neural network](https://www.turing.com/kb/importance-of-artificial-neural-networks-in-artificial-intelligence).
3.  **Bias:** Bias in a neural network is required to shift the activation function across the plane either towards the left or the right. We will cover it in more detail later.
4.  **Summation function:** It is defined as the function which sums up the product of the weight and the features with bias.
5.  **Activation function:** It is required to add non-linearity to the neural network model

[AAAI2024 | 分享10篇优秀论文，涉及图神经网络、大模型优化、表格分析等热门话题]: https://mp.weixin.qq.com/s/F7X8N_wUyZQNhDtIfHm17Q

