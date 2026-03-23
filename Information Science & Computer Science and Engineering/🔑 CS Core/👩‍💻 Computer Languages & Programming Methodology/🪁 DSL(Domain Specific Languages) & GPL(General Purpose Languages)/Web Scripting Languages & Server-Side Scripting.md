# Web Scripting Languages & Server-Side Scripting

[TOC]



## Res
### Related Topics
↗ [The Internet Development (and Web Development)](../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20The%20Internet%20Development%20(and%20Web%20Development)/The%20Internet%20Development%20(and%20Web%20Development).md)
↗ [Web Templating Engines & Languages](../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20The%20Internet%20Development%20(and%20Web%20Development)/🖥️%20Web%20FrontEnd%20Dev/⬆️%20Frontend%20Optimization/Web%20Templating/Web%20Templating%20Engines%20&%20Languages/Web%20Templating%20Engines%20&%20Languages.md)

↗ [Perl](../Interpreted%20Languages/Perl/Perl.md)
↗ [PHP](../Interpreted%20Languages/PHP/PHP.md)
↗ [Python](../Interpreted%20Languages/🐍%20Python/Python.md)
- ↗ [Python Web](../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20The%20Internet%20Development%20(and%20Web%20Development)/🗄️%20Web%20BackEnd%20Dev%20&%20Middleware/Web%20BackEnd%20Language%20&%20Ecosystems/Python%20Web.md)
↗ [ECMAScript-Based Languages & JavaScript](../Compiled%20Languages/🐝%20ECMAScript-Based%20Languages%20&%20JavaScript/ECMAScript-Based%20Languages%20&%20JavaScript.md)
- ↗ [JS Web](../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20The%20Internet%20Development%20(and%20Web%20Development)/🗄️%20Web%20BackEnd%20Dev%20&%20Middleware/Web%20BackEnd%20Language%20&%20Ecosystems/JS%20Web.md)
↗ [Java](../Compiled%20+%20Interpreted%20Languages/⚰️%20JVM-Based%20Languages/☕️%20Java/Java.md)
- ↗ [Java Web](../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20The%20Internet%20Development%20(and%20Web%20Development)/🗄️%20Web%20BackEnd%20Dev%20&%20Middleware/Web%20BackEnd%20Language%20&%20Ecosystems/Java%20Web.md)
↗ [Golang](../Compiled%20Languages/Golang/Golang.md)
- ↗ [Go Web](../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20The%20Internet%20Development%20(and%20Web%20Development)/🗄️%20Web%20BackEnd%20Dev%20&%20Middleware/Web%20BackEnd%20Language%20&%20Ecosystems/Go%20Web.md)
↗ [C Sharp](../Compiled%20Languages/👔%20C-Based%20Languages/C%20Sharp/C%20Sharp.md)
- ↗ [ASP.NET & Active Server Pages](../🛠️%20Programming%20Tool%20Chain/🚠%20Application%20Runtimes%20&%20SDKs/Windows%20Dot.Net%20&%20Common%20Language%20Runtime%20(CLR)/ASP.NET%20&%20Active%20Server%20Pages/ASP.NET%20&%20Active%20Server%20Pages.md)
- ↗ [Dot Net Web](../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20The%20Internet%20Development%20(and%20Web%20Development)/🗄️%20Web%20BackEnd%20Dev%20&%20Middleware/Web%20BackEnd%20Language%20&%20Ecosystems/Dot%20Net%20Web.md)
↗ [Lua](../Interpreted%20Languages/Lua/Lua.md)
↗ [Ruby](../Interpreted%20Languages/Ruby/Ruby.md)
- ↗ [Ruby Web](../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20The%20Internet%20Development%20(and%20Web%20Development)/🗄️%20Web%20BackEnd%20Dev%20&%20Middleware/Web%20BackEnd%20Language%20&%20Ecosystems/Ruby%20Web.md)

↗ [JavaScript Browser End Libraries](../🛠️%20Programming%20Tool%20Chain/🚠%20Application%20Runtimes%20&%20SDKs/JavaScript%20Runtime%20Environments/📌%20JS%20Runtime%20Libraries%20&%20SDK/JavaScript%20Browser%20End%20Libraries/JavaScript%20Browser%20End%20Libraries.md)
↗ [Monolithic Arch & SPA (Single Page Application)](../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20The%20Internet%20Development%20(and%20Web%20Development)/Internet%20(Web)%20Application%20Systems%20&%20Architecture%20Design/Web%20Application%20System%20Architecture%20Design%20Pattern/Monolithic%20Arch%20&%20SPA%20(Single%20Page%20Application).md)



## Intro
> 🔗 https://en.wikipedia.org/wiki/Server-side_scripting

**Server-side scripting** is a technique used in [web development](https://en.wikipedia.org/wiki/Web_development "Web development") which involves employing scripts on a web server which produces a response customized for each user's (client's) request to the website. Scripts can be written in any of a number of server-side scripting languages that are available. Server-side scripting is distinguished from client-side scripting where embedded scripts, such as JavaScript, are run client-side in a web browser, but both techniques are often used together. The alternative to either or both types of scripting is for the web server itself to deliver a static web page.

Server-side scripting is often used to provide a customized [interface for the user](https://en.wikipedia.org/wiki/User_interface_chrome "User interface chrome"). These scripts may assemble client characteristics for use in customizing the response based on those characteristics, the user's requirements, access rights, etc. Server-side scripting also enables the website owner to hide the [source code](https://en.wikipedia.org/wiki/Source_code "Source code") that generates the interface, whereas, with client-side scripting, the user has access to all the code received by the client. A downside to the use of server-side scripting is that the client needs to make further requests over the network to the server in order to show new information to the user via the [web browser](https://en.wikipedia.org/wiki/Web_browser "Web browser"). These requests can slow down the experience for the user, place more load on the server, and prevent the use of the application when the user is disconnected from the server.

When the server serves data in a commonly used manner, for , according to the [HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol "Hypertext Transfer Protocol") or [FTP](https://en.wikipedia.org/wiki/File_Transfer_Protocol "File Transfer Protocol") [protocols](https://en.wikipedia.org/wiki/Protocol_\(computing\) "Protocol (computing)"), users may have their choice of a number of client programs (most modern web browsers can request and receive data using both of those protocols). In the case of more specialized applications, programmers may write their own server, client, and communications protocol, that can only be used with one another.

Programs that run on a user's local computer without ever sending or receiving data over a network are not considered clients, and so the operations of such programs would not be considered client-side operations.


**Explanation**
In the earlier days of the web, server-side scripting was almost exclusively performed by using a combination of [C](https://en.wikipedia.org/wiki/C_\(programming_language\) "C (programming language)") programs, [Perl](https://en.wikipedia.org/wiki/Perl "Perl") scripts, and [shell scripts](https://en.wikipedia.org/wiki/Shell_script "Shell script") using the [Common Gateway Interface](https://en.wikipedia.org/wiki/Common_Gateway_Interface "Common Gateway Interface") (CGI). Those scripts were executed by the [operating system](https://en.wikipedia.org/wiki/Operating_system "Operating system"), and the results were served back by the [web server](https://en.wikipedia.org/wiki/Web_server "Web server"). Many modern web servers can directly execute on-line [scripting languages](https://en.wikipedia.org/wiki/Scripting_language "Scripting language") such as [ASP](https://en.wikipedia.org/wiki/Active_Server_Pages "Active Server Pages"), [JSP](https://en.wikipedia.org/wiki/JavaServer_Pages "JavaServer Pages"), [Perl](https://en.wikipedia.org/wiki/Perl "Perl"), [PHP](https://en.wikipedia.org/wiki/PHP "PHP") and [Ruby](https://en.wikipedia.org/wiki/Ruby_\(programming_language\) "Ruby (programming language)") either by the web server itself or via extension modules (e.g. [mod_perl](https://en.wikipedia.org/wiki/Mod_perl "Mod perl") or [mod_php](https://en.wikipedia.org/wiki/Mod_php "Mod php")) to the webserver. For example, WebDNA includes its own embedded database system. Either form of scripting (i.e., CGI or direct execution) can be used to build up complex multi-page sites, but direct execution usually results in less overhead because of the lower number of calls to external interpreters.

Dynamic websites sometimes use custom web application servers, such as [Glassfish](https://en.wikipedia.org/wiki/GlassFish "GlassFish"), [Plack](https://en.wikipedia.org/wiki/Plack_\(software\) "Plack (software)") and [Python](https://en.wikipedia.org/wiki/Python_\(programming_language\) "Python (programming language)")'s "Base HTTP Server" library, although some may not consider this to be server-side scripting. When using dynamic web-based scripting techniques, developers must have a keen understanding of the logical, temporal, and physical separation between the client and the server. For a user's action to trigger the execution of server-side code, for example, a developer working with classic ASP must explicitly cause the user's browser to make a request back to the webserver.

Server-side scripts are completely processed by the servers instead of clients. When clients request a page containing server-side scripts, the application server processes the scripts and returns an HTML page to the client.



## Ref
