# FAQ

[TOC]



## 👉 GO111MODULE Related
You might have noticed that `GO111MODULE=on` is flourishing everywhere. Many readmes have that:
```bash
GO111MODULE=on
go get golang.org/x/tools/gopls@latest
```

Note that `go get` has been deprecated for installing binaries since Go 1.17 and will be become impossible in Go 1.18. If you are using Go 1.16 or above, you should use instead:
```bash
go install golang.org/x/tools/gopls@latest
# with no GO111MODULE=on required and you shouldn't
```

In this short post, I will explain why `GO111MODULE` was introduced in Go 1.11, its caveats and interesting bits that you need to know when dealing with Go Modules.

[Why is GO111MODULE everywhere, and everything about Go Modules (updated with Go 1.20)]: https://maelvls.dev/go111module-everywhere/#from-gopath-to-go111module

