# JS Obfuscation

[TOC]



## Res
### Related Topics
↗ [ECMAScript-Based Languages & JavaScript](../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Compiled%20Languages/🐝%20ECMAScript-Based%20Languages%20&%20JavaScript/ECMAScript-Based%20Languages%20&%20JavaScript.md)
↗ [JavaScript (Browser End)](../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tools%20Chain/🚠%20Application%20Runtimes%20&%20SDKs/JavaScript%20Runtime%20Environments/📌%20JS%20Runtime%20Libraries%20&%20SDK/JavaScript%20(Browser%20End)/JavaScript%20(Browser%20End).md)

↗ [Obfuscation](../../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20Analysis%20&%20Binary%20Engineering/Anti-Reverse%20Engineering%20&%20Software%20Protection/Obfuscation/Obfuscation.md)
↗ [Encodings](../../../../../🗺%20CS%20Overview/💋%20Intro%20to%20Computer%20Science/😤%20Information,%20Data,%20Number%20and%20Math%20in%20Digital%20Systems/Encodings.md)



## Intro



## Category
### eval
jspacker


### hash

Example: 
```javascript
function logG(message) {
	console.log('\x1b[32m%s\x1b[0m', message); 
}
function logR(message) {
	console.log('\x1b[41m%s\x1b[0m', message); 
}
logG('logR');
logR('logG');
```
<small>JS code to be obfuscated</small>

#### JSA

Example code after JSA:

```javascript
function o00($){console.log("\x1b[32m%s\x1b[0m",$)}function o01($){console.log("\x1b[41m%s\x1b[0m",$)}o00("logR");o01("logG")
```

code beautified: 

```javascript
function o00($){
    console.log("\x1b[32m%s\x1b[0m",$)
}
function o01(${
	console.log("\x1b[41m%s\x1b[0m",$)
}
o00("logR");
o01("logG")
```
unjsa
#### javascript-obfuscator

Example code after javascript-obfuscator:
```javascript
var _0xd6ac=['[41m%s[0m','logG','log'];(function(_0x203a66,_0x6dd4f4){var _0x3c5c81= function (_0x4f427c){while(--_0x4f427c){_0x203a66['push'](_0x203a66['shift']());}};_0x3c5c81(++_0x6dd4f4);}(_0xd6ac,0x6e));var _0x5b26=function(_0x2d8f05,_0x4b81bb){_0x2d8f05=_0x2d8f05-0x0;var _0x4d74cb=_0xd6ac[_0x2d8f05];return _0x4d74cb;};function logG(_0x4f1daa){console[_0x5b26('0x0')]('[32m%s[0m',_0x4f1daa);}function logR(_0x38b325){console[_0x5b26('0x0')](_0x5b26('0x1'),_0x38b325);}logG('logR');logR(_0x5b26('0x2'));
```

code beautified:
```javascript
var _0xd6ac=['[41m%s[0m', 'logG', 'log'];
(	// -------------- dictionary function begin ----------------
    function (_0x203a66, _0x6dd4f4){
        var _0x3c5c81 = function (_0x4f427c){
            while(--_0x4f427c){
                _0x203a66['push'](_0x203a66['shift']());
            }
        };
        _0x3c5c81( ++_0x6dd4f4 );
    }(_0xd6ac,0x6e)
);

var _0x5b26 = function(_0x2d8f05, _0x4b81bb){
    _0x2d8f05 =_0x2d8f05-0x0;
    var _0x4d74cb = _0xd6ac[_0x2d8f05];
    return _0x4d74cb;
};
// -------------- dictionary function end ----------------

function logG(_0x4f1daa){
    console[_0x5b26('0x0')]('[32m%s[0m',_0x4f1daa);
}

function logR(_0x38b325){
    console[_0x5b26('0x0'  )](_0x5b26('0x1'),_0x38b325);
}

logG('logR');
logR(_0x5b26('0x2'));
```

crack.js


### Compression
Compression is so far the most popular method of frontend optimization. 

Here lists some popular compression tools: 

**JavaScript**
- babel-minify
- terser
- uglify-js
- uglify-es
- Google Closure Compiler
- YUI Compressor

**CSS**
- PostCSS
- clean-css
- CSSO
- YUI Compressor

**HTML**
- html-minifier


### Machine learning in JS Obfuscation (?)
nice2predict，jsnice ...



## 📝 Frontend Compression in JS
> 假如再深入一点，可能会涉及到JS语法解释器, AST抽象语法树
>
> 目前涉及到 JS语法解释器, AST抽象语法树的功能如下：
>
> prepack, esprima, babel
>
> 或者可以阅读《编程语言实现模式》，涉及到 antlr4。
>
> 当然也可以通过esprima等工具来做解混淆，只是工作量大一点，值不值的问题。
>
> 对于未来，JS商业源码加密的方向可能webassembly，先在服务端编译成wasm，源码就能真正的闭源。
>
> 有人的地方就有路，有混淆的地方就有解混淆，目前机器学习编程响应的解混淆工具也做的相当出色。



### Uglify-js

jsnice



## WebAssembly
 ↗️ [WASM (WebAssembly)](../🚜%20WASM%20(WebAssembly)/WASM%20(WebAssembly).md)



## Ref

[Javascript混淆与解混淆的详细介绍（附代码）]: https://www.php.cn/js-tutorial-416764.html
