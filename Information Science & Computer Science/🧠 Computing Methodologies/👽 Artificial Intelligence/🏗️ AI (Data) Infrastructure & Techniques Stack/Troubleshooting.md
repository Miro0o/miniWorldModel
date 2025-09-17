# Trbouleshooting

[TOC]



## 👉 OpenCV: FFMPEG: tag is not supported with codec id 12 and format 'mp4 / MP4'
#OpenCV #codec

For anyone stranded here due to the same error, to write frames to a `.mp4` output file, use these chars as arguments:
```cpp
cv.VideoWriter_fourcc('m', 'p', '4', 'v')
```

or
```cpp
cv.VideoWriter_fourcc('H','2','6','4')
```

- Depending on the codecs available on your system.
- Tested on Ubuntu 20.04.

---
In your code try replacing
```cpp
CV_FOURCC('M', 'J', 'P', 'G')
```

with
```cpp
CV_FOURCC('m', 'p', '4', 'v')
```

---
I solved my problem with the help of this [GitHub comment](https://github.com/OpenBCI/OpenBCI_Experiment/issues/2#issuecomment-913221647).

If it does not help, consider this post from the [NVIDIA forum](https://forums.developer.nvidia.com/t/python-what-is-the-four-characters-fourcc-code-for-mp4-encoding-on-tx2/57701/4) and plug in the ASCII number directly in `cv2.VideoWriter()`, without using `cv2.VideoWriter_fourcc()` like this for example:
```cpp
cv2.VideoWriter('output.mp4', 0x00000021, 15.0, (1280,360))
```

[OpenCV: FFMPEG: tag is not supported with codec id 12 and format 'mp4 / MP4 | Stackoverflow]: https://stackoverflow.com/questions/57792837/opencv-ffmpeg-tag-is-not-supported-with-codec-id-12-and-format-mp4-mp4



## 👉 `Undefined symbol ___atomic_store_8` for armv8l
#arm #OpenCV #RaspberryPi 



[armv6l: undefined reference to `__atomic_store_8']: https://github.com/badaix/snapcast/issues/490

[Undefined symbol ___atomic_is_lock_free for armv7 #16551]:https://github.com/openssl/openssl/issues/16551

[👍 Raspbian build fails due to need for libatomic #1448]: https://github.com/capnproto/capnproto/issues/1448



## 👉 cv2.imshow() throwing "Unknown C++ exception from OpenCV code" only when threaded
#OpenCV #python 



[cv2.imshow() throwing "Unknown C++ exception from OpenCV code" only when threaded #22602]: https://github.com/opencv/opencv/issues/22602




## 👉 ImportError: libcblas.so.3: cannot open shared object file: No such file or directory
#OpenCV #ImportError

You need to install only one package with neccessary shared object for it to work
```bash
sudo apt-get install libatlas-base-dev
```
---

```shell
pip3 install opencv-python 
sudo apt-get install libcblas-dev
sudo apt-get install libhdf5-dev
sudo apt-get install libhdf5-serial-dev
sudo apt-get install libatlas-base-dev
sudo apt-get install libjasper-dev 
sudo apt-get install libqtgui4 
sudo apt-get install libqt4-test
```


[ImportError: libcblas.so.3: cannot open shared object file: No such file or directory]: https://stackoverflow.com/questions/53347759/importerror-libcblas-so-3-cannot-open-shared-object-file-no-such-file-or-dire



## 👉  ??

[Modulenotfounderror: no module named 'mediapipe.python._framework_bindings'#10]: https://github.com/superuser789/MediaPipe-on-RaspberryPi/issues/10

