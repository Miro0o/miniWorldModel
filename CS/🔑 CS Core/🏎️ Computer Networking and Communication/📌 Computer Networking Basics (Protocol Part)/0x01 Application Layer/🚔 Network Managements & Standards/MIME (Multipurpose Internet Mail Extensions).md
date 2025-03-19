# MIME (Multipurpose Internet Mail Extensions)

[TOC]



## Res
### Related Topics


### Other Resources



## Intro
> 🔗 https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types

A **media type** (also known as a **Multipurpose Internet Mail Extensions or MIME type**) indicates the nature and format of a document, file, or assortment of bytes. MIME types are defined and standardized in IETF's [RFC 6838](https://datatracker.ietf.org/doc/html/rfc6838).

The [Internet Assigned Numbers Authority (IANA)](https://www.iana.org/) is responsible for all official MIME types, and you can find the most up-to-date and complete list at their [Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml) page.


### Importance of setting the correct MIME type
Some server configurations may use the associated MIME type to perform optimizations, such as file concatenation, compression, or caching. See [h5bp/server-configs-apache](https://github.com/h5bp/server-configs-apache/blob/main/h5bp/web_performance/compression.conf) for an example of an Apache configuration that compresses files of certain MIME types.

Most web servers send unrecognized resources as the `application/octet-stream` MIME type. For security reasons, most browsers do not allow setting a custom default action (like "Open in Word") for such resources, forcing the user to save it to disk to use it.

Some common incorrect server configurations:
- RAR-compressed files. In this case, the ideal would be the true type of the original files; this is often impossible as .RAR files can hold several resources of different types. In this case, configure the server to send `application/x-rar-compressed`.
- Audio and video. Only resources with the correct MIME Type will be played in [`<video>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video) or [`<audio>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio) elements. Be sure to specify the correct [media type for audio and video](https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats).
- Proprietary file types. A specific type like `application/vnd.mspowerpoint` lets users open such files automatically in the presentation software of their choice.


### MIME sniffing
In the absence of a MIME type, or in certain cases where browsers believe they are incorrect, browsers may perform _MIME sniffing_ — guessing the correct MIME type by looking at the bytes of the resource.

Each browser performs MIME sniffing differently and under different circumstances. (For example, Safari will look at the file extension in the URL if the sent MIME type is unsuitable.) There are security concerns as some MIME types represent executable content. Servers can prevent MIME sniffing by sending the [`X-Content-Type-Options`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Content-Type-Options) header.


### Other methods of conveying document type
MIME types are not the only way to convey document type information:
- Filename suffixes are sometimes used, especially on Microsoft Windows. Not all operating systems consider these suffixes meaningful (such as Linux and macOS), and there is no guarantee they are correct.
- Magic numbers. The syntax of different formats allows file-type inference by looking at their byte structure. For example, GIF files start with the `47 49 46 38 39` hexadecimal value (`GIF89`), and PNG files with `89 50 4E 47` (`.PNG`). Not all file types have magic numbers, so this is not 100% reliable either.



## Ref
[MIME | wikipedia]: https://en.wikipedia.org/wiki/MIME

[MIME Types | MDN Web Docs]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types
- [Web media technologies](https://developer.mozilla.org/en-US/docs/Web/Media)
- [Guide to media types used on the web](https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats)
- [Properly configuring server MIME types](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Configuring_server_MIME_types)

