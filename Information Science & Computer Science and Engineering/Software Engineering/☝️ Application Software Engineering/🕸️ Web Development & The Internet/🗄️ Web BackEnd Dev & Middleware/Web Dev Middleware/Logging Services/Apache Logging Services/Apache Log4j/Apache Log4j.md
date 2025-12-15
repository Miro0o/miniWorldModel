# Apache Log4j

[TOC]



## Res
🏠 https://logging.apache.org/log4j/2.x/
🚧 https://github.com/apache/logging-log4j2

📂 https://cwiki.apache.org/confluence/display/LOGGING/Log4j
📂 https://logging.apache.org/log4j/2.x/manual/index.html


### Related Topics
↗ [ASF (Apache Software Foundation)](../../../../../../../Open%20Source%20(Free%20Software)%20Spirits%20&%20Software%20License/Free%20Software%20Organizations/ASF%20(Apache%20Software%20Foundation).md)



## Intro
> 🔗 https://logging.apache.org/log4j/2.x/index.html

Apache Log4j is a versatile, industrial-grade Java logging framework composed of an API, its implementation, and components to assist the deployment for various use cases. Log4j is [used by 8% of the Maven ecosystem](https://security.googleblog.com/2021/12/apache-log4j-vulnerability.html) and listed as one of [the top 100 critical open source software projects](https://docs.google.com/spreadsheets/d/1ONZ4qeMq8xmeCHX03lIgIYE4MEXVfVL6oj05lbuXTDM/edit#gid=1024997528). The project is actively maintained by a [team](https://logging.apache.org/log4j/2.x/team.html) of several volunteers and [support](https://logging.apache.org/log4j/2.x/support.html)ed by a big community.

We share below some highlights from Log4j features:
- **Batteries included**
	- Log4j bundles a rich set of components to assist various use cases.
		- [Appenders](https://logging.apache.org/log4j/2.x/manual/appenders.html) targeting files, network sockets, databases, SMTP servers, etc.
		- [Layouts](https://logging.apache.org/log4j/2.x/manual/layouts.html) that can render CSV, HTML, JSON, Syslog, etc. formatted outputs
		- [Filters](https://logging.apache.org/log4j/2.x/manual/filters.html) that can be configured using log event rates, regular expressions, scripts, time, etc.
		- [Lookups](https://logging.apache.org/log4j/2.x/manual/lookups.html) for accessing system properties, environment variables, log event fields, etc.
- **API separation**
	- The API for Log4j (i.e., `log4j-api`) is separate from the implementation (i.e., `log4j-core`) making it clear for application developers which classes and methods they can use while ensuring forward compatibility. (See [API Separation](https://logging.apache.org/log4j/2.x/manual/api-separation.html) for details.) The Log4j API also provides the most feature rich logging facade in the market; support for various `Message` types (`Object`, `Map`, etc.) besides plain `String`, lambda expressions, parametrized logging, markers, levels, diagnostic contexts (aka. MDC/NDC), etc. Check out the [Java API](https://logging.apache.org/log4j/2.x/manual/api.html), [Kotlin API](https://logging.apache.org/log4j/kotlin), and [Scala API](https://logging.apache.org/log4j/scala) pages for further information.
- **No vendor lock-in**
	- Even though the Log4j API is implemented by the Log4j at its fullest, users can choose to use another logging backend. This can be achieved by either using another backend implementing the Log4j API, or forwarding Log4j API calls to another logging facade (e.g., SLF4J) and using a backend for that particular facade.
- **Performance**
	- When configured correctly, Log4j can deliver excelling performance without almost any burden on the Java garbage collector. This is made possible via an asynchronous logger founded on the [LMAX Disruptor](https://lmax-exchange.github.io/disruptor/) technology (having its roots in the demanding industry of financial trading) and the garbage-free features baked at hot paths. Check out the [Performance](https://logging.apache.org/log4j/2.x/performance.html) page for details.
- **Extensibility**
	- Log4j contains a fully-fledged [plugin support](https://logging.apache.org/log4j/2.x/manual/plugins.html) that users can leverage to extend its functionality. You can easily add your own components (layouts, appenders, filters, etc.) or customizing existing ones (e.g., adding new directives to the [Pattern](https://logging.apache.org/log4j/2.x/manual/layouts.html#PatternLayout) or [JSON Template Layout](https://logging.apache.org/log4j/2.x/manual/json-template-layout.html#extending)). Check out the [Extending Log4j](https://logging.apache.org/log4j/2.x/manual/extending.html) page.



## Ref
[什么是 Log4j 漏洞？ | IBM]: https://www.ibm.com/cn-zh/topics/log4j
