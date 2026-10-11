# Vision Transformer (ViT)

[TOC]



## Res
### Related Topics


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Vision_transformer

A **vision transformer** (**ViT**) is a [transformer](https://en.wikipedia.org/wiki/Transformer_\(machine_learning_model\) "Transformer (machine learning model)") designed for [computer vision](https://en.wikipedia.org/wiki/Computer_vision "Computer vision"). A ViT decomposes an input image into a series of patches (rather than text into [tokens](https://en.wikipedia.org/wiki/Byte_pair_encoding "Byte pair encoding")), serializes each patch into a vector, and maps it to a smaller dimension with a single [matrix multiplication](https://en.wikipedia.org/wiki/Matrix_multiplication "Matrix multiplication"). These vector [embeddings](https://en.wikipedia.org/wiki/Latent_space "Latent space") are then processed by a [transformer encoder](https://en.wikipedia.org/wiki/BERT_\(language_model\) "BERT (language model)") as if they were token embeddings.

ViTs were designed as alternatives to [convolutional neural networks](https://en.wikipedia.org/wiki/Convolutional_neural_network "Convolutional neural network") (CNNs) in computer vision applications. They have different inductive biases, training stability, and data efficiency. Compared to CNNs, ViTs are less data efficient, but have higher capacity. Some of the largest modern computer vision models are ViTs, such as one with 22B parameters.

Subsequent to its publication, many variants were proposed, with hybrid architectures with both features of ViTs and CNNs. ViTs have found application in [image recognition](https://en.wikipedia.org/wiki/Image_recognition "Image recognition"), [image segmentation](https://en.wikipedia.org/wiki/Image_segmentation "Image segmentation"), [weather prediction](https://en.wikipedia.org/wiki/Weather_forecasting "Weather forecasting"), and [autonomous driving](https://en.wikipedia.org/wiki/Autonomous_driving "Autonomous driving")



## Ref
[PiD: Fast and High-Resolution Latent Decoding with Pixel Diffusion]: https://arxiv.org/pdf/2605.23902
Yifan Lu, Qi Wu, Jay Zhangjie Wu, Zian Wang, Huan Ling, Sanja Fidler, Xuanchi Ren
NVIDIA
- Most practical high-resolution text-to-image systems, including latent diffusion and autoregressive models, perform generation in a compact latent space, and a decoder maps the generated latents back to pixels. Yet the latent-to-pixel decoder is reconstruction-oriented, optimized to invert the encoder rather than synthesize more details, and becomes increasingly costly at megapixel scale. This drawback calls for a more expressive and efficient decoding paradigm. Motivated by recent progress in scalable pixel-space diffusion, we introduce PiD, a Pixel diffusion Decoder that reformulates latent decoding as conditional pixel diffusion, unifying decoding and upsampling into one generative module. By denoising directly in high-resolution pixel space, PiD synthesizes 4× and even 8× upscaled images with low latency. For latent conditioning, a lightweight sigma-aware adapter injects noise-corrupted latents into the pixel diffusion backbone, enabling PiD to decode partially denoised latents and terminate the latent diffusion process early. To further improve efficiency, we distill the model using DMD2, reducing inference to just 4 steps. PiD applies to both conventional VAE latents and semantic latents (e.g., SigLIP, DINOv2) used in recent RAE-based models. PiD decodes latents of 512×512 images into 2048×2048 pixels in under 1 second with 13 GB peak memory on a consumer RTX 5090, and as fast as 210 ms on a GB200 GPU, about 6× faster than cascaded diffusion-based super-resolution pipelines with better visual fidelity.
