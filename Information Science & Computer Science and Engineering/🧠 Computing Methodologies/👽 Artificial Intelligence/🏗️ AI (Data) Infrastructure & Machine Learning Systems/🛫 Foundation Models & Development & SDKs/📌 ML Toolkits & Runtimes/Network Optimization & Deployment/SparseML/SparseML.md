# SparseML

[TOC]



## Res
🏠 https://neuralmagic.com/sparseml/
🏠 https://github.com/neuralmagic/sparseml/tree/main



## Intro
[![NM Flow](https://github.com/neuralmagic/deepsparse/raw/7ee5e60f13b1fd321c5282c91e2873b3363ec911/docs/neural-magic-workflow.png)](https://github.com/neuralmagic/deepsparse/blob/7ee5e60f13b1fd321c5282c91e2873b3363ec911/docs/neural-magic-workflow.png)

SparseML is an open-source model optimization toolkit that enables you to create inference-optimized sparse models using pruning, quantization, and distillation algorithms. Models optimized with SparseML can then be exported to the ONNX and deployed with [DeepSparse](https://github.com/neuralmagic/deepsparse/) for GPU-class performance on CPU hardware.


### Workflows
SparseML enables you to create a sparse model trained on your dataset in two ways:
- **Sparse Transfer Learning** enables you to fine-tune a pre-sparsified model from [SparseZoo](https://sparsezoo.neuralmagic.com/) (an open-source repository of sparse models such as BERT, YOLOv5, and ResNet-50) onto your dataset, while maintaining sparsity. This pathway works just like typical fine-tuning you are used to in training CV and NLP models, and is strongly preferred for if your model architecture is availble in SparseZoo.
- **Sparsification from Scratch** enables you to apply state-of-the-art pruning (like gradual magnitude pruning or OBS pruning) and quantization (like quantization aware training) algorithms to arbitrary PyTorch and Hugging Face models. This pathway requires more experimentation, but allows you to create a sparse version of any model.



## Ref

