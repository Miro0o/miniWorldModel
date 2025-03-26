# ysoserial & marshalsec & Ysomap

[TOC]



## Res
🏠 
🚧 https://github.com/wh1t3p1g/ysomap


### Related Topics



## Intro: ysomap
> ysomap现已加入 [404星链计划](https://github.com/knownsec/404StarLink)

Ysomap is A helpful Java Deserialization exploit framework.

Ysomap是一款适配于各类实际复杂环境的Java反序列化利用框架，可动态配置具备不同执行效果的Java反序列化利用链payload。

随着利用链的补充，ysomap同样可作为一款Java反序列化利用链教学库。目前，ysomap支持Java原生反序列化利用链、fastjson利用链、hessian利用链、xmldecoder、xstream等等。

另外，ysomap具备exploit模块，用于充分调动反序列化利用链。目前，ysomap已支持RMI、JNDI、JMX、shiro、xmlrpc等exploits。



## Ref
[YSOMAP取经之路-2 | p4d0rn]: https://p4d0rn.github.io/2023/08/01/ysomap-2/
[YSOMAP取经之路-1 | p4d0rn]: https://p4d0rn.github.io/2023/07/31/ysomap-1/
`Ysomap`是一款适配于各类实际复杂环境的Java反序列化利用框架，可动态配置具备不同执行效果的Java反序列化利用链payload。

`YsoMap`针对`ysoserial`和`marshalsec`两款工具解决的痛点：  
现存两款工具的payload写死，在面对复杂的实际环境无法灵活、自由拼凑利用链。

> e.g. `XStream`的`LazyValue`具备任意调用静态函数的利用效果，很容易想到很多可以利用的静态函数，如`javax.naming.InitialContext#doLookup`对外发起JNDI请求，`java.sql.DriverManager#getConnection`连接恶意MySQL服务，但经常会遇到目标环境不出网的情况。一个解决方案是，若目标环境依赖spring框架，可以利用`org.springframework.util.SerializationUtils.deserialize`来进行二次反序列化，此时原本的XStream的payload就进一步转化为Java原生反序列化的利用了。

对此，`ysomap`采用模块化的思想，具备动态组合利用链和利用效果的能力。对于遇到的不同环境，根据特定的组合来达成实际利用。

其将利用链分为两个部分`payload`和`bullet`：
1. `payload`: 利用链的前序部分
2. `bullet`: 利用链可达成的效果，如命令执行、JNDI连接等

> e.g. CommonsCollections1和3的区别是1使用的是`InvokerTransformer`而3使用的是`TemplatesImpl`，提取相同的前序`payload`，只需写两个不同的`bullet`，且这两个`bullet`也同样能被用于其他`payload`

此外`ysomap`具备可扩展性，支持用户自己编写的`payload`、`bullet`、`exploit`
