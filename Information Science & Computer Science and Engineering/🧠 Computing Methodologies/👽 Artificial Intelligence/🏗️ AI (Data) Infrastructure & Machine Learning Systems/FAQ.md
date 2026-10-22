# FAQ

[TOC]



## 👉 Stream live video from client to server using OpenCV and Paho-MQTT
#OpenCV #mqtt 



[👍  Stream live video from client to server using OpenCV and Paho-MQTT]: https://medium.com/@pritam.mondal.0711/stream-live-video-from-client-to-server-using-opencv-and-paho-mqtt-674d3327e8b3



## 👉 mediapipe on RaspberryPi
#mediapipe #RaspberryPi


[MediaPipe on RaspberryPi]: https://github.com/superuser789/MediaPipe-on-RaspberryPi#building-mediapipe-on-raspberry-pi-os-for-raspberry-pi-3--4

[👍 Cant pip install mediapipe #1325]: https://github.com/google/mediapipe/issues/1325

[how to install and use mediapipeon Respberry Pi 4?]: https://stackoverflow.com/questions/67410495/how-to-install-and-use-mediapipe-on-raspberry-pi-4



## 👉 `imread` returns None, `violating assertion !_src.empty() in function 'cvtColor' error`
#OpenCV 

This error happened because the image didn't load properly. So you have a problem with the previous line `cv2.imread`. My suggestion is :
- check if the image exists in the path you give
- check if the count variable has a valid number

---
I kept getting this error too:
```python
Traceback (most recent call last):
  File "face_detector.py", line 6, in <module>
    gray_img=cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
cv2.error: OpenCV(4.1.0) C:\projects\opencv-python\opencv\modules\imgproc\src\color.cpp:182: error: (-215:Assertion failed) !_src.empty() in function 'cv::cvtColor
```

My `cv2.cvtColor(...)` was working fine with `\photo.jpg` but not with `\news.jpg`. For me, I finally realized that when working on Windows with python, those escape characters will get you every time!! So my "bad" photo was being escaped because of the file name beginning with "n". Python took the `\n` as an escape character and OpenCV couldn't find the file!

Solution:  
Preface file names in Windows python with `r"...\...\"` as in 
```python
cv2.imread(r".\images\news.jpg")
```


[👍 imread returns None, violating assertion !_src.empty() in function 'cvtColor' error | Stackoverflow]: https://stackoverflow.com/questions/52676020/imread-returns-none-violating-assertion-src-empty-in-function-cvtcolor-er

