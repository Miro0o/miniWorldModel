# CGI (Common Gateway Interface)

[TOC]



## Res
### Related Topics
↗ [WSGI (Web Server Gateway Interface)](../../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tools%20Chain/🚠%20Application%20Runtimes%20&%20SDKs/Python%20Runtime%20Environments/📌%20Python%20Third-party%20Libs/SE%20&%20Web/WSGI%20(Web%20Server%20Gateway%20Interface).md)



## Intro
> 🔗 https://en.wikipedia.org/wiki/Common_Gateway_Interface

In computing, Common Gateway Interface (CGI) is an interface specification that enables web servers to execute an external program to process HTTP or HTTPS user requests.

Such programs are often written in a scripting language and are commonly referred to as CGI scripts, but they may include compiled programs.

A typical use case occurs when a web user submits a web form on a web page that uses CGI. The form's data is sent to the web server within a HTTP request with a URL denoting a CGI script. The web server then launches the CGI script in a new computer process, passing the form data to it. The CGI script passes its output, usually in the form of HTML, to the Web server, and the server relays it back to the browser as its response to the browser's request.

Developed in the early 1990s, CGI was the earliest common method available that allowed a web page to be interactive. Due to a necessity to run CGI scripts in a separate process every time the request comes in from a client, various alternatives were developed.


### CGI Alternatives
For each incoming HTTP request, a Web server creates a new CGI process for handling it and destroys the CGI process after the HTTP request has been handled. Creating and destroying a process can consume more CPU time and memory resources than the actual work of generating the output of the process, especially when the CGI program still needs to be interpreted by a virtual machine. For a high number of HTTP requests, the resulting workload can quickly overwhelm the Web server.

The [computational overhead](https://en.wikipedia.org/wiki/Computational_overhead "Computational overhead") involved in CGI process creation and destruction can be reduced by the following techniques:
- CGI programs precompiled to machine code, e.g. precompiled from [C](https://en.wikipedia.org/wiki/C_\(programming_language\) "C (programming language)") or [C++](https://en.wikipedia.org/wiki/C%2B%2B "C++") programs, rather than CGI programs executed by an interpreter, e.g. [Perl](https://en.wikipedia.org/wiki/Perl "Perl"), [PHP](https://en.wikipedia.org/wiki/PHP "PHP") or [Python](https://en.wikipedia.org/wiki/Python_\(programming_language\) "Python (programming language)") programs.
- Web server extensions such as [Apache modules](https://en.wikipedia.org/wiki/Apache_modules "Apache modules") (e.g. `[mod_perl](https://en.wikipedia.org/wiki/Mod_perl "Mod perl")`, `[mod_php](https://en.wikipedia.org/wiki/Mod_php "Mod php")` and `[mod_python](https://en.wikipedia.org/wiki/Mod_python "Mod python")`), [NSAPI](https://en.wikipedia.org/wiki/Netscape_Server_Application_Programming_Interface "Netscape Server Application Programming Interface") plugins, and [ISAPI](https://en.wikipedia.org/wiki/ISAPI "ISAPI") plugins which allow long-running application processes handling more than one request and hosted within the Web server.
- [FastCGI](https://en.wikipedia.org/wiki/FastCGI "FastCGI"), [SCGI](https://en.wikipedia.org/wiki/Simple_Common_Gateway_Interface "Simple Common Gateway Interface"), and [AJP](https://en.wikipedia.org/wiki/Apache_JServ_Protocol "Apache JServ Protocol") which allow long-running application processes handling more than one request to be hosted externally; i.e., separately from the Web server. Each application process listens on a socket; the Web server handles an HTTP request and sends it via another protocol (FastCGI, SCGI or AJP) to the socket only for dynamic content, while static content is usually handled directly by the Web server. This approach needs fewer application processes so consumes less memory than the Web server extension approach. And unlike converting an application program to a Web server extension, FastCGI, SCGI, and AJP application programs remain independent of the Web server.
- [Jakarta EE](https://en.wikipedia.org/wiki/Jakarta_EE "Jakarta EE") runs [Jakarta Servlet](https://en.wikipedia.org/wiki/Jakarta_Servlet "Jakarta Servlet") applications in a [Web container](https://en.wikipedia.org/wiki/Web_container "Web container") to serve dynamic content and optionally static content which replaces the overhead of creating and destroying processes with the much lower overhead of creating and destroying [threads](https://en.wikipedia.org/wiki/Thread_\(computer_science\) "Thread (computer science)"). It also exposes the programmer to the library that comes with [Java SE](https://en.wikipedia.org/wiki/Java_Platform,_Standard_Edition "Java Platform, Standard Edition") on which the version of Jakarta EE in use is based.
- Standalone HTTP Server
- [Web Server Gateway Interface](https://en.wikipedia.org/wiki/Web_Server_Gateway_Interface "Web Server Gateway Interface") (WSGI) is a modern approach written in the [Python programming language](https://en.wikipedia.org/wiki/Python_programming_language "Python programming language"). It is defined by PEP 3333 and implemented via various methods like `[mod_wsgi](https://en.wikipedia.org/wiki/Mod_wsgi "Mod wsgi")` (Apache module), [Gunicorn](https://en.wikipedia.org/wiki/Gunicorn "Gunicorn") web server (in between of Nginx & Scripts/Frameworks like Django), [UWSGI](https://en.wikipedia.org/wiki/UWSGI "UWSGI"), etc.

The optimal configuration for any Web application depends on application-specific details, amount of traffic, and complexity of the transaction; these trade-offs need to be analyzed to determine the best implementation for a given task and time budget. [Web frameworks](https://en.wikipedia.org/wiki/Web_framework "Web framework") offer an alternative to using CGI scripts to interact with user agents.



## Ref

