# ChromeDriver & Chrome for Testing

[TOC]



## Res
🏠 
📂 https://developer.chrome.com/docs/chromedriver
🚧 

**Latest ChromeDriver binaries**
Starting with M115 the latest Chrome and ChromeDriver releases per release channel (Stable, Beta, Dev, Canary) are available at the [Chrome for Testing availability dashboard](https://googlechromelabs.github.io/chrome-for-testing/).

To download the latest ChromeDriver binary, you can use the [JSON endpoints](https://googlechromelabs.github.io/chrome-for-testing/last-known-good-versions-with-downloads.json).

Older releases can be found in [Downloads](https://developer.chrome.com/docs/chromedriver/downloads).

**Documentation**
- [Getting started with ChromeDriver on Desktop](https://developer.chrome.com/docs/chromedriver/get-started) (Windows, Mac, Linux)
    - [ChromeDriver with Android](https://developer.chrome.com/docs/chromedriver/get-started/android)
    - [ChromeDriver with ChromeOS](https://developer.chrome.com/docs/chromedriver/get-started/chromeos)
- [ChromeOptions](https://developer.chrome.com/docs/chromedriver/capabilities), the capabilities of ChromeDriver
- [Mobile emulation](https://developer.chrome.com/docs/chromedriver/mobile-emulation)
- [Security Considerations](https://developer.chrome.com/docs/chromedriver/security-considerations), with recommendations on keeping ChromeDriver safe
- [Chrome Extension installation](https://developer.chrome.com/docs/chromedriver/extensions)
- [Verbose logging](https://developer.chrome.com/docs/chromedriver/logging) and [performance data logging](https://developer.chrome.com/docs/chromedriver/logging/performance-log)


### Related Topics



## Intro
### ChromeDriver
> 🔗 https://developer.chrome.com/docs/chromedriver

ChromeDriver is a standalone server that implements the W3C [WebDriver](https://w3c.github.io/webdriver/) and [WebDriver BiDi](https://w3c.github.io/webdriver-bidi/) standards. WebDriver is an open source tool built for automated testing of web apps across many browsers. Its interface allows for control and introspection of user agents locally or remotely using capabilities.

Capabilities are a language-neutral set of key-value pairs used to define the desired features and behavior of a WebDriver session. Capabilities are typically passed as an argument when creating a WebDriver instance, and can be used to specify browser settings, such as the browser name, version, and page loading strategy.

ChromeDriver extends Webdriver by adding Chromium-specific capabilities. It uses the `ChromeOptions` object to pass capabilities to ChromeDriver from the WebDriver API. Some Chromium-specific capabilities include the ability to install extensions, change window types, and pass command line arguments on startup.


### Chrome For Testing
> 🔗 https://developer.chrome.com/blog/chrome-for-testing/

Chrome for Testing is a dedicated flavor of Chrome targeting the testing use case, without auto-update, integrated into the Chrome release process, made available for every Chrome release. A versioned binary that’s as close to regular Chrome as possible without negatively affecting the testing use case.



## Ref
