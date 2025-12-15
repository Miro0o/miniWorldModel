# Ruby Class Pollution

[TOC]



## Res
### Related Topics



## Intro
> 🔗 https://blog.doyensec.com/2024/10/02/class-pollution-ruby.html

In this post, we are going to explore a rarely discussed class of vulnerabilities in Ruby, known as **class pollution**. This concept is inspired by the idea of prototype pollution in JavaScript, where recursive merges are exploited to poison the prototype of objects, leading to unexpected behaviors. This idea was initially discussed in a [blog post](https://blog.abdulrah33m.com/prototype-pollution-in-python/) about prototype pollution in Python, in which the researcher used recursive merging to poison class variables and eventually global variables via the `__globals__` attribute.

In Ruby, we can categorize class pollution into three main cases:
1. **Merge on Hashes**: In this scenario, class pollution isn’t possible because the merge operation is confined to the hash itself.
2. **Merge on Attributes (Non-Recursive)**: Here, we can poison the instance variables of an object, potentially replacing methods by injecting return values. This pollution is limited to the object itself and does not affect the class.

```
current_obj.instance_variable_set("@#{key}", new_object)
current_obj.singleton_class.attr_accessor key
```

1. **Merge on Attributes (Recursive)**: In this case, the recursive nature of the merge allows us to escape the object context and poison attributes or methods of parent classes or even unrelated classes, leading to a broader impact on the application.



## Ref
[# Class Pollution in Ruby: A Deep Dive into Exploiting Recursive Merges (2024.10.02) | Raúl Miján ]:  https://blog.doyensec.com/2024/10/02/class-pollution-ruby.html

[Ruby Class Pollution | hattricks]: https://angelica.gitbook.io/hacktricks/pentesting-web/deserialization/ruby-class-pollution
This is a summary from the post https://blog.doyensec.com/2024/10/02/class-pollution-ruby.html

[浅析Ruby类污染及其在Sinatra框架下的利用 | p4d0rn]: https://p4d0rn.github.io/2024/12/20/ruby-class-pollution/
