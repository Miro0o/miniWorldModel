# XML Schemas

[TOC]



## Res
🔗 https://libvirt.org/format.html



## Intro
Objects in the `libvirt` API are configured using XML documents to allow for ease of extension in future releases. Each XML document has an associated Relax-NG schema that can be used to validate documents prior to usage.


### Command line validation
The `virt-xml-validate` tool provides a simple command line for validating XML documents prior to giving them to `libvirt`. It uses the locally installed RNG schema documents. It will auto-detect which schema to use for validation based on the name of the top level element in the input document. Thus it merely requires the XML document filename to be passed on the command line

```shell
$ virt-xml-validate /path/to/XML/file
```



## Ref

