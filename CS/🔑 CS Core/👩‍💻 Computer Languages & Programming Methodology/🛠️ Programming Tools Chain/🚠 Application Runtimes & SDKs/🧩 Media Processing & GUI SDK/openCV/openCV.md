# openCV

[TOC]


## Res
🏠 https://opencv.org
🏠 https://github.com/opencv/opencv-python

> Automated CI toolchain to produce precompiled `opencv-python`, `opencv-python-headless`, `opencv-contrib-python` and `opencv-contrib-python-headless` packages.

📂 https://docs.opencv.org/2.4/modules/highgui/doc/user_interface.html



## Intro
1. resize window to a fixed size

```python
## solusion #1 --- resize to a fixed size

import cv2
cv2.namedWindow("output", cv2.WINDOW_NORMAL)    # Create window with freedom of dimensions
im = cv2.imread("earth.jpg")                    # Read image
imS = cv2.resize(im, (960, 540))                # Resize image
cv2.imshow("output", imS)                       # Show image
cv2.waitKey(0)   
```

3. resize window by scaled-radio

``` python
##  solusion #2 --- resize to a scaled ratio size

def ResizeWithAspectRatio(image, width=None, height=None, inter=cv2.INTER_AREA):
    dim = None
    (h, w) = image.shape[:2]

    if width is None and height is None:
        return image
    if width is None:
        r = height / float(h)
        dim = (int(w * r), height)
    else:
        r = width / float(w)
        dim = (width, int(h * r))

    return cv2.resize(image, dim, interpolation=inter)

image = cv2.imread('img.png')
resize = ResizeWithAspectRatio(image, width=1280) # Resize by width OR
# resize = ResizeWithAspectRatio(image, height=1280) # Resize by height 

cv2.imshow('resize', resize)
cv2.waitKey()

```
###### [openCV quick experience](https://new.pythonforengineers.com/blog/image-and-video-processing-in-python/)

> If you want to use your own images, make sure they are not too high quality. In the first attempt, I was using Hd quality images, and opencv was detecting carpet swirls as objects. It also detected shadows as objects (including my own). Though blurring is supposed to get rid of this, if the photo is of very high quality, you will need to do a lot of blurring.


```python
import cv2 # OpenCv
import sys
import numpy as np

def ResizeWithAspectRatio(image, width=None, height=None, inter=cv2.INTER_AREA):
    dim = None
    (h, w) = image.shape[:2]

    if width is None and height is None:
        return image
    if width is None:
        r = height / float(h)
        dim = (int(w * r), height)
    else:
        r = width / float(w)
        dim = (width, int(h * r))

    return cv2.resize(image, dim, interpolation=inter)


cv2.namedWindow("Image",cv2.WINDOW_NORMAL)
# image = cv2.resize(cv2.imread(sys.argv[1]),(960, 540))
image = ResizeWithAspectRatio(cv2.imread(sys.argv[1]), width=640)




####  --#1-- Blur & Grayscale
gray_image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
blurred_image = cv2.GaussianBlur(image, (7,7),0) # the Gaussian Blur work area (ikd the principle)

# cv2.imshow("Image", image)
# cv2.imshow("Gray", gray_image)
# cv2.imshow("Blurred", blurred_image)
# cv2.waitKey(0)



###  --#2-- edge detection

# canny_low = cv2.Canny(blurred_image, 10, 30)    # idk the arg's meaning
# cv2.imshow("canny with low thresholds", canny_low)

canny_high = cv2.Canny(blurred_image, 50, 150) # idk the arg's meaning
# cv2.imshow("canny with high thresholds", canny_high)

# cv2.waitKey(0)




### --#3-- Count objects

contours = np.array
contours = cv2.findContours(canny_high, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
# `cv2.findCountours` find the contours in the given image. 
# `cv2.RETR_EXTERNAL` tells OpenCv to only find the outermost edges (as you can find countours within coutours). 
# `cv2.CHAIN_APPROX_SIMPLE` tells openCv to use the simple approximation


print("Number of objects found = ", len(contours))

cv2.drawContours(image, contours, -1, (0,255,0), 2)
cv2.imshow("objects Found", image)
cv2.waitKey(0)



### --#4-- Face Detection

```



## Ref
[openCV quick experience ...](https://new.pythonforengineers.com/blog/image-and-video-processing-in-python/)

[tp resize pic window ... ](https://stackoverflow.com/q/35180764/16542494)

