# [Minica](https://github.com/jsha/minica)

[TOC]



## Intro
Minica is a simple CA intended for use in situations where the CA operator also operates each host where a certificate will be used. It automatically generates both a key and a certificate when asked to produce a certificate. It does not offer OCSP or CRL services. Minica is appropriate, for instance, for generating certificates for RPC systems or microservices.


### Installation
First, install the [Go tools](https://golang.org/dl/) and set up your `$GOPATH`. Then, run:
```shell
go install github.com/jsha/minica@latest
```

When using Go 1.11 or newer you don't need a $GOPATH and can instead do the following:
```shell
cd /ANY/PATH
git clone https://github.com/jsha/minica.git
go build
## or
# go install
```

Mac OS users could alternatively use Homebrew: `brew install minica`


### Example usage
```shell
# Generate a root key and cert in minica-key.pem, and minica.pem, then
# generate and sign an end-entity key and cert, storing them in ./foo.com/
$ minica --domains foo.com

# Wildcard
$ minica --domains '*.foo.com'
```



## Ref
