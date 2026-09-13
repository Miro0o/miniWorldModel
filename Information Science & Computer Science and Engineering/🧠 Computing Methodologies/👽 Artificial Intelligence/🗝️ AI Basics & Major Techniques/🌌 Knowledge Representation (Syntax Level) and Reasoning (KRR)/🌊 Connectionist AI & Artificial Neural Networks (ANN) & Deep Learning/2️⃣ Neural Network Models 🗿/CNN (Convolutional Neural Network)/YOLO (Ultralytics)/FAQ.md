# FAQ

[TOC]



## 👉 How to know that when overfitting is achieved?
#yolo #overfitting



[How to know that when does overfitting is achieved? #4319 | Github]: https://github.com/ultralytics/yolov5/issues/4319

[How do you know the accuracy of the model on the test set? #1129 | Github]: https://github.com/ultralytics/ultralytics/issues/1129



## 👉 YOLOv8 via Python
#python #yolo 



[YOLOv8 get predicted class name | Stackoverflow]: https://stackoverflow.com/questions/75277492/yolov8-get-predicted-class-name
[use the result of YOLOv8 for pyzbar | Stackoverflow]: https://stackoverflow.com/questions/75387344/use-the-result-of-yolov8-for-pyzbar



## 👉 How to train model based on existing weights?
#yolo #pretrain

> This post is from yolov5

If your training was **interrupted** for any reason you may continue where you left off using the `--resume` argument. If your training fully completed, you can start a **new** training from any model using the `--weights` argument. Examples:

---
**Resume Single-GPU**

You may not change settings when resuming, and **no additional arguments** other than `--resume` should be passed, with an optional path to the checkpoint you'd like to resume from. If no checkpoint is passed the most recently updated `last.pt` in your `yolov5/` directory is automatically found and used:

```shell
python train.py --resume  # automatically find latest checkpoint (searches yolov5/ directory)
python train.py --resume path/to/last.pt  # specify resume checkpoint
```
---
**Resume Multi-GPU**

[Multi-GPU DDP trainings](https://docs.ultralytics.com/yolov5/tutorials/multi_gpu_training) must be resumed with the same GPUs and DDP command, i.e. assuming 8 GPUs:

```shell
python -m torch.distributed.run --nproc_per_node 8 train.py --resume  # resume latest checkpoint
python -m torch.distributed.run --nproc_per_node 8 train.py --resume path/to/last.pt  # specify resume checkpoint
```
---
**Start from Pretrained**

If you would like to **start training** from a fully trained model, use the `--weights` argument, not the `--resume` argument:
```shell
python train.py --weights path/to/best.pt  # start from pretrained model
```


[How to train model based on existing weights? #4268 | Github]: https://github.com/ultralytics/yolov5/issues/4268



## 👉 YOLO image size
#yolo  #imagesize 

**\#1 Input size, resize, square**
During the training phase, YOLOv8 does not require square or specific resolutions for the input images. The model can handle images of different shapes and aspect ratios, including rectangles.

When you pass an image to the model for training or inference, YOLOv8 resizes the input image while maintaining its original aspect ratio. The resizing operation is performed to fit the image into the specified input size defined in the model configuration. In your case, if you set the input size to be 64x128, the model will resize the input image to fit this size while preserving the original aspect ratio.

So, to answer your questions directly:
1. The model does not require the input image to be square during training.
2. The model does not have a fixed resolution requirement like 224x224. Instead, it can handle images of different resolutions, including your specified dimensions of 64x128.


[👍 Input size, resize and square #3697]:https://github.com/ultralytics/ultralytics/issues/3697


---
**\#2 Modify input image size**

> 修改图片输入尺寸对模型效果影响不大么？我的图片是2048*3072，不修改也能跑，但是不知道会不会在训练时损失图片中的信息。

我的图片大小是1800\*1200，没修改是640，我分别试过，结果是相差不大，不过保险起见还是修改一下好


[input size Modify input size #3716]:https://github.com/ultralytics/ultralytics/issues/3716


---
**🔥 \#3 About the choice of data set image size**

> This post is from yolov5

> **Reading further...**
> If you'd like to know more a good place to start is Karpathy's 'Recipe for Training Neural Networks', which has great ideas for training that apply broadly across all ML domains:  🔗 http://karpathy.github.io/2019/04/25/recipe/](https://github.com/ultralytics/yolov5/issues/2844#issuecomment-851338384)


==Larger image sizes usually lead to better results, but take longer to process, so it's up to the user to find the right compromise between speed and accuracy for their particular application.== Default image size for YOLOv5 P5 models is 640, default image size for YOLOv5 P6 models is 1280.

Most of the time good results can be obtained with no changes to the models or training settings, **provided your dataset is sufficiently large and well labelled**. If at first you don't get good results, there are steps you might be able to take to improve, but we always recommend users **first train with all default settings** before considering any changes. This helps establish a performance baseline and spot areas for improvement.

**🎯 Dataset**
- **Images per class.** ≥ 1500 images per class recommended
- **Instances per class.** ≥ 10000 instances (labeled objects) per class recommended
- **Image variety.** Must be representative of deployed environment. For real-world use cases we recommend images from different times of day, different seasons, different weather, different lighting, different angles, different sources (scraped online, collected locally, different cameras) etc.
- **Label consistency.** All instances of all classes in all images must be labelled. Partial labelling will not work.
- **Label accuracy.** Labels must closely enclose each object. No space should exist between an object and it's bounding box. No objects should be missing a label.
- **Background images.** Background images are images with no objects that are added to a dataset to reduce False Positives (FP). We recommend about 0-10% background images to help reduce FPs (COCO has 1000 background images for reference, 1% of the total). No labels are required for background images.

**🎯 Training Settings**
Before modifying anything, **first train with default settings to establish a performance baseline**. A full list of train.py settings can be found in the [train.py](https://github.com/ultralytics/yolov5/blob/master/train.py) argparser.
- **Epochs.** Start with 300 epochs. If this overfits early then you can reduce epochs. If overfitting does not occur after 300 epochs, train longer, i.e. 600, 1200 etc epochs.
- **Image size.** COCO trains at native resolution of `--img 640`, though due to the high amount of small objects in the dataset it can benefit from training at higher resolutions such as `--img 1280`. If there are many small objects then custom datasets will benefit from training at native or higher resolution. ==Best inference results are obtained at the same `--img` as the training was run at, i.e. if you train at `--img 1280` you should also test and detect at `--img 1280`.==
- **Batch size.** Use the largest `--batch-size` that your hardware allows for. Small batch sizes produce poor batchnorm statistics and should be avoided.
- **Hyperparameters.** Default hyperparameters are in [hyp.scratch.yaml](https://github.com/ultralytics/yolov5/blob/master/data/hyp.scratch.yaml). We recommend you train with default hyperparameters first before thinking of modifying any. In general, increasing augmentation hyperparameters will reduce and delay overfitting, allowing for longer trainings and higher final mAP. Reduction in loss component gain hyperparameters like `hyp['obj']` will help reduce overfitting in those specific loss components. For an automated method of optimizing these hyperparameters, see our [Hyperparameter Evolution Tutorial](https://docs.ultralytics.com/yolov5/tutorials/hyperparameter_evolution).


[👍 About the choice of data set image size #5851]:https://github.com/ultralytics/yolov5/issues/5851

[Darknet YOLO image size | Stackoverflow]: https://stackoverflow.com/questions/49450829/darknet-yolo-image-size
