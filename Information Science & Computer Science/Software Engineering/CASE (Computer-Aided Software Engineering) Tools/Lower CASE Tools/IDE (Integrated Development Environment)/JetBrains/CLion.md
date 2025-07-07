# [CLion](https://www.jetbrains.com/clion/learn/)

# trouble shooting
[CLion 生成CMakeList文件和include文件不存在问题](https://blog.csdn.net/superSmart_Dong/article/details/98982679)
[Clion 找不到include](https://blog.csdn.net/weixin_43347376/article/details/105565219)
+ comments: 我也不知道什么原理 🤷‍♀️

[wchar.h](https://stackoverflow.com/questions/46342411/wchar-h-file-not-found)
+ after updated xcode commandlinetools, my clion cannot find wchar.h file. i checked the directory and wchar.h is there. so i turned to stackoverflow for a solid solution.
+ and it says that i need to delete the current cmake cache file and reload the project. i did so, and it worked. yuh! 


###### easyX library on Clion
📜 to configure easyX to Clion ...
——> [缄默线的blog](https://slinet.me/clion-easyx/)

🤔 on cmakelist: 
```c
cmake_minimum_required(VERSION 3.17)  
project(easyx_test)  
  
set(CMAKE_CXX_STANDARD 20)  
  
add_executable(${PROJECT_NAME} main.cpp)  
  
target_include_directories(${PROJECT_NAME} PRIVATE "C:/Program Files (x86)/Microsoft Visual Studio/2019/Community/VC/Auxiliary/VS/include")  
target_link_directories(${PROJECT_NAME} PRIVATE "C:/Program Files (x86)/Microsoft Visual Studio/2019/Community/VC/Auxiliary/VS/lib/x86")
```

 📜 to config easyX on DevC++
--> [CodeBus的blog](https://codebus.cn/bestans/easyx-for-mingw)

 🎯 about HOW  TO USE EASYX : 
 https://blog.csdn.net/sandalphon4869/article/details/80862023
 
🎯 about HOW  TO CONFIG CMAKE: 
 https://blog.csdn.net/u013870094/article/details/78153408
 
 >  
必须学会用CMake管理项目，如此你可以在Windows，mac和Linux上面自由切换了，我就是这样做的，图形学一般跟操作系统是无关的，或者是支持跨平台的比如采用OpenGL或者BGFX这种跨平台也跨渲染引擎的框架等等，VS是所有IDE里最好用最容易学习也是功能最强大的，我一般是以Windows为主力开发环境，在VS上写代码，用CMake管理项目，然后在MAC下，一句话也不用改，直接用clion就可以打开然后编译，也可以调试。在Linux下则是直接在控制台编译了。所有平台的差异都用CMake解决了，可以随便用VS或者是Clion或者是Xcode，都可以正常编译调试。在Linux上可以用emacs+gdb的方式，也可以用Clion for Linux，总之是跨IDE的。
这个解决方案核心是你得学会用CMake，然后你的代码要支持跨平台，没有过多的平台差异性代码，有也没关系，用CMake可以在不同平台下选择编译。
我现在做的项目一直保持这种跨平台且跨IDE的方式，没有选择的烦恼，因为主流IDE都可以用。
最后补充一句，如果你搞不定CMake就要继续学直到搞定为止，否则你不如改行吧。

