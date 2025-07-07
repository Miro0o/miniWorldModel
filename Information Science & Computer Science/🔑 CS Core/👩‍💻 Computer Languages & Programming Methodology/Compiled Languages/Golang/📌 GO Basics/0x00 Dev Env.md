# 0x00 Dev Env
[TOC]



> [Go 基础](https://www.topgoer.com)
> [Tutorial: Get started with Go](https://go.dev/doc/tutorial/getting-started)

## Getting started
![Screen Shot 2022-09-05 at 12.27.15 AM](../../../../../../Assets/Pics/Screen%20Shot%202022-09-05%20at%2012.27.15%20AM-2308842-2308845.png)
<small>A demo pic of my Golang Project</small>


### Env variables
```shell
$ go env
GO111MODULE=""
GOARCH="amd64"
GOBIN="/Users/mir0/Go/GoProjects/bin/"
GOCACHE="/Users/mir0/Go/GoCache/"
GOENV="/Users/mir0/Library/Application Support/go/env"
GOEXE=""
GOEXPERIMENT=""
GOFLAGS=""
GOHOSTARCH="amd64"
GOHOSTOS="darwin"
GOINSECURE=""
GOMODCACHE="/Users/mir0/Go/GoProjects/pkg/mod/"
GONOPROXY=""
GONOSUMDB=""
GOOS="darwin"
GOPATH="/Users/mir0/Go/GoProjects/"
GOPRIVATE=""
GOPROXY="https://proxy.golang.org,direct"
GOROOT="/usr/local/Cellar/go/1.20.1/libexec"
GOSUMDB="sum.golang.org"
GOTMPDIR=""
GOTOOLDIR="/usr/local/Cellar/go/1.20.1/libexec/pkg/tool/darwin_amd64"
GOVCS=""
GOVERSION="go1.20.1"
GCCGO="gccgo"
GOAMD64="v1"
AR="ar"
CC="clang"
CXX="clang++"
CGO_ENABLED="1"
GOMOD="/dev/null"
GOWORK=""
CGO_CFLAGS="-O2 -g"
CGO_CPPFLAGS=""
CGO_CXXFLAGS="-O2 -g"
CGO_FFLAGS="-O2 -g"
CGO_LDFLAGS="-O2 -g"
PKG_CONFIG="pkg-config"
GOGCCFLAGS="-fPIC -arch x86_64 -m64 -pthread -fno-caret-diagnostics -Qunused-arguments -fmessage-length=0 -fdebug-prefix-map=/var/folders/vs/sbthv49974jcvdpmzgmjjqj40000gn/T/go-build367439469=/tmp/go-build -gno-record-gcc-switches -fno-common"
```
<small>My go env list</small>
- `GOPATH` : the only one go workspace's home directory
- `GOBIN` : the only one go workspace's home bin
- `GOCACHE` : 
- `GOENV` : the library env of go


### Dir arch
In Go, every project using a same workspace specified under $GOPATH. 
And in $GOPATH, there are 3 subdirectories: bin, pkg, src. 
- bin stores executables
- pkg stores middle files (cache, etc.)
- src stores all codes.

Usually, to distinguish each projects developers use different namespace under $GOPATH/src. The namespace is often the domain name of the organization or the registry's name of the projects. 

![](../../../../../../Assets/Pics/Pasted%20image%2020230317095542.png)
![](../../../../../../Assets/Pics/Pasted%20image%2020230317095550.png)
![null](../../../../../../Assets/Pics/m_314d22a4ff3892f028ce7bb6e358ef29_r.png)
<small>Diagrams of Go Directory Organization</small>

```shell
/Users/mir0/GoProjects/                 # this is $GOPATH 
  ▾  bin/								# $GOPATH/bin/ stores all excutable files
       Hello *
  ▾  pkg/mod/cache/						# $GOPATH/pkg/ stores all middle files
       lock                             # $GOPATH/pkg/mod/ is $GOMODCACHE
  ▾  src/github.com/Mir0/test_proj_golang/	# $GOPATH/src/ stores proj codes
    ▾  greet/
         go.mod
         greet.go
         greet_test.go
    ▾  hello/
         go.mod
         main.go
```
<small>A demo of Go dir arch</small>

- The `GOPATH` points to the sole workspace, under which there are `bin`, `src` and `pkg` folders, while `GOBIN` points to the sole install location of the workspace. Every proj is done under the workspace and every application is installed to the bin folder. 

- `go.mod` tracks every module's (or package's ) own updates & other dependencies. In each module there is one `go.mod` file. Within one module every file share the same namespace in practice. 

- Within one module there can be a test file for every other file. Test file ends with `_test.go` and the test function in the test file begins with `TEST`


## Run the First Go Program
```go
package main  // 声明 main 包，表明当前是一个可执行程序

import "fmt"  // 导入内置 fmt 

func main(){  // main函数，是程序执行的入口
    fmt.Println("Hello World!")  // 在终端打印 Hello World!
}
```

```shell
$ go init
$ go build . 
$ go run .

making some changes *^%#TUHJKEJK

$ go t
```



## Ref
