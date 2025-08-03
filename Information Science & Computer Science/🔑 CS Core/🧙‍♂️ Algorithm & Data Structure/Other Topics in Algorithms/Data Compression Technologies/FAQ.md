# FAQ

[TOC]



## 👉 Parse MJPG HTTP stream from ip camera
#mjpg #http #video_streaming 

First of all, please be aware that you should _first try_ simply using OpenCV's video capture functions _directly_, e.g. `cv2.VideoCapture('http://localhost:8080/frame.mjpg')`!

This works just fine for me:
```python
import cv2
cap = cv2.VideoCapture('http://localhost:8080/frame.mjpg')

while True:
	ret, frame = cap.read()
	cv2.imshow('Video', frame)
	if cv2.waitKey(1) == 27:
		exit(0)
```

Anyways, here is Zaw Lin's solution ported to OpenCV 3 (only change is `cv2.CV_LOAD_IMAGE_COLOR` to `cv2.IMREAD_COLOR` and Python 3 (string vs byte handling changed plus urllib):
```python
import cv2
import urllib.request
import numpy as np

stream = urllib.request.urlopen('http://localhost:8080/frame.mjpg')
bytes = bytes()
while True:
    bytes += stream.read(1024)
    a = bytes.find(b'\xff\xd8')
    b = bytes.find(b'\xff\xd9')
    if a != -1 and b != -1:
        jpg = bytes[a:b+2]
        bytes = bytes[b+2:]
        i = cv2.imdecode(np.fromstring(jpg, dtype=np.uint8), cv2.IMREAD_COLOR)
        cv2.imshow('i', i)
        if cv2.waitKey(1) == 27:
            exit(0)
```


[How to parse mjpeg http stream from ip camera?]: https://stackoverflow.com/questions/21702477/how-to-parse-mjpeg-http-stream-from-ip-camera